(ns ld23.main
  (:require [crate.core :as crate]
            [ld23.utils :as u]
            [ld23.core :as c]
            [ld23.game :as g]
            [ld23.input :as i]
            [ld23.screen :as screen])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial page [name width height]
  [:div#wrapper
   [:div#content
    [:h1 name]
    [:canvas#canvas {:width width :height height}]
    [:span#fps]
    (if c/debug?
      [:button#stop "stop"]
      [])]]) ;; necessary?

(def game (atom nil))
(def input (atom nil))
(def running (atom false))
(def animate
  (or (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [callback] (js/setTimeout callback 17))))

(defn update-fps [fs ts]
  (u/set-html (u/get-elem :fps) (.join (array fs " fps, " ts " ticks") "")))

(defn layout-page []
  (.appendChild (.-body js/document) (page c/game-name c/width c/height)))

(def canvas)


(def last-loop (atom (.getTime (js/Date.))))

(def last-fps-update (atom (.getTime (js/Date.))))
(def total-ticks (atom 0))
(def ticks (atom 0))
(def frames (atom 0))

(def needed (atom 0))

(def render-canvas
  (let [c (.createElement js/document "canvas")]
    (set! c.width (/ c/width c/scale))
    (set! c.height (/ c/height c/scale))
    c))

(defn main-loop []
  (when @running
    (let [now (.getTime (js/Date.))]
      (swap! needed + (/ (- now @last-loop) (/ 1000 60)))
      (reset! last-loop now)
      (swap! game #(loop [n @needed, g %]
                     (if (pos? n)
                       (do (swap! ticks inc)
                           (swap! needed dec)
                           (swap! total-ticks inc)
                           (recur (dec n) (g/tick g @input)))
                       g)))
      (animate main-loop)
      (screen/render render-canvas @game)

      (.. canvas
          (getContext "2d")
          (drawImage render-canvas 0 0))

      (swap! frames inc)
      (when (<= 1000 (- (.getTime (js/Date.)) @last-fps-update))
        (reset! last-fps-update (.getTime (js/Date.)))
        (update-fps @frames @ticks)
        (reset! frames 0)
        (reset! ticks 0)))))

(defn init-vars []
  (set! canvas (u/get-elem :canvas))
  (let [in (i/new-input)
        ng (g/new-game)]
    (reset! input in)
    (reset! game ng)
    (reset! running true)))

(defn stop []
  (reset! running false))

(defn- notify [c & txt]
  (doto c
    (screen/clear "black")
    (screen/write txt)))

(defn start [ml]
  (layout-page)
  (when c/debug?
    (set! (.-onclick (u/get-elem :stop)) stop))
  (let [c (u/get-elem :canvas)]
    (notify c "Generating world..." "(please be patient)")
    (js/setTimeout (fn []
                     (init-vars)
                     (notify c "Binding events")
                     (js/setTimeout (fn []
                                      (i/bind-events input canvas)
                                      (notify c "Starting game!")
                                      (js/setTimeout ml 50))
                                    50))
                   10)))

(defn restart []
  (animate main-loop))

(let [l (doto (.createElement js/document "link")
          (aset "rel" "stylesheet")
          (aset "type" "text/css")
          (aset "href" "http://fonts.googleapis.com/css?family=Press+Start+2P"))
      i (js/Image.)]
  (.appendChild (aget (.getElementsByTagName js/document "head") 0) l)
  (doto i
    (aset "src" (.-href l))
    (aset "onerror" #(start main-loop))))
