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

(def last-tick (atom (.getTime (js/Date.))))
(def last-fps-update (atom (.getTime (js/Date.))))
(def total-ticks (atom 0))

(def ticks (atom 0))
(def frames (atom 0))

(def canvas)

(defn main-loop []
  (when-not (:quit @input)
    (let [current-tick (.getTime (js/Date.))
          needed (* (/ 30 1000) (- current-tick @last-tick))]
      (swap! game #(loop [n needed, g %]
                     (if (pos? n)
                       (do (swap! ticks inc)
                           (swap! total-ticks inc)
                           (recur (dec n) (g/tick g @input)))
                       g)))
      (reset! last-tick (.getTime (js/Date.)))
      (screen/render canvas @game)
      (swap! frames inc)
      (when (<= 1000 (- (.getTime (js/Date.)) @last-fps-update))
        (reset! last-fps-update (.getTime (js/Date.)))
        (update-fps @frames @ticks)
        (reset! frames 0)
        (reset! ticks 0))
      (animate main-loop))))

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