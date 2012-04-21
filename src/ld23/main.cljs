(ns ld23.main
  (:require [crate.core :as crate]
            [ld23.utils :as u]
            [ld23.core :as t]
            [ld23.screen :as screen])
  (:use-macros [crate.macros :only [defpartial]]))

(defpartial page [name width height]
  [:div#wrapper
   [:div#content
    [:h1 name]
    [:div#screen {:style (str "position: relative; z-index:1;"
;                              "width: " width "px;"
                              "height: " height "px;")}
     [:canvas#bgcanvas {:width width :height height
                        :style "z-index: -1;position: absolute;"}]
     [:canvas#canvas {:width width :height height
                      :style "z-index: 1; position: absolute;"}]]
    [:span#fps]]])

(def game (atom nil))
(def input (atom #{}))

(def animate
  (or (.-requestAnimationFrame js/window)
      (.-webkitRequestAnimationFrame js/window)
      (.-mozRequestAnimationFrame js/window)
      (.-oRequestAnimationFrame js/window)
      (.-msRequestAnimationFrame js/window)
      (fn [callback] (js/setTimeout callback 17))))

(def get-key {38 :up, 40 :down, 37 :left, 39 :right})

(defn bind-events []
  (let [on-key #(fn [e]
                  (swap! input % (get-key (.-keyCode e)))
                  (.preventDefault e))]
    (set! (.-onkeydown js/document) (on-key conj))
    (set! (.-onkeyup js/document) (on-key disj))))

(defn update-fps [fs ts]
  (u/set-html (u/get-elem :fps) (.join (array fs " fps, " ts " ticks") "")))

(defn layout-page []
  (.appendChild (.-body js/document) (page t/game-name t/width t/height)))

(def last-tick (atom (.getTime (js/Date.))))
(def last-fps-update (atom (.getTime (js/Date.))))

(def total-ticks (atom 0))
(def ticks (atom 0))
(def frames (atom 0))
(def bgcanvas)
(def canvas)

(defn main-loop []
  (let [current-tick (.getTime (js/Date.))
        needed (* 0.045 (- current-tick @last-tick))]
    (loop [n needed]
      (when (<= 0 n)
        (swap! ticks inc)
        (swap! total-ticks inc)
        (recur (dec n))))
    ;; (swap! game #(loop [n needed, g %]
    ;;                (if (< 0 n)
    ;;                  (do (recur (dec n) (tick g @input))
    ;;                      (swap! ticks inc))
    ;;                  g)))
    (reset! last-tick (.getTime (js/Date.)))
    (screen/render bgcanvas canvas @total-ticks)
    (swap! frames inc)
    (when (<= 1000 (- (.getTime (js/Date.)) @last-fps-update))
      (update-fps @frames @ticks)
      (prn (- (.getTime (js/Date.)) @last-fps-update))
      (reset! frames 0)
      (reset! ticks 0)
      (reset! last-fps-update (.getTime (js/Date.))))
    (when (empty? @input)
     (animate main-loop))))

(defn init-vars []
  (set! canvas (u/get-elem :canvas))
  (set! bgcanvas (u/get-elem :bgcanvas)))

(defn start []
  (layout-page)
  (bind-events)
  (init-vars)
  (animate main-loop))

(start)
(defn restart []
  (animate main-loop))