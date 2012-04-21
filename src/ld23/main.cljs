(ns ld23.main
  (:require [crate.core :as crate]
            [ld23.utils :as u]
            [ld23.core :as t]
            [ld23.game :as g]
            [ld23.input :as i]
            [ld23.screen :as screen])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial page [name width height]
  [:div#wrapper
   [:div#content
    [:h1 name]
    [:canvas#canvas {:width width :height height}]
    [:span#fps]]])

(def game (atom nil))
(def input (atom nil))

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
  (.appendChild (.-body js/document) (page t/game-name t/width t/height)))

(def canvas)


(def last-loop (atom (.getTime (js/Date.))))

(def last-fps-update (atom (.getTime (js/Date.))))
(def total-ticks (atom 0))
(def ticks (atom 0))
(def frames (atom 0))

(def needed (atom 0))

(def render-canvas
  (let [c (.createElement js/document "canvas")]
    (set! c.width t/width)
    (set! c.height t/height)
    c))

(defn main-loop []
  (when-not (contains? @input :quit)
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
          (drawImage render-canvas 0 0 (.-width canvas) (.-height canvas)))

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
    (reset! game ng)))

(defn start []
  (layout-page)
  (init-vars)
  (i/bind-events input canvas)
  (animate main-loop))

(start)
(defn restart []
  (animate main-loop))