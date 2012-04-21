(ns ld23.game
  (:require [ld23.utils :as u]
            [ld23.core :as c]))



(defrecord Game [level player xo yo]
  Object
  (offset [_]
    (Game. level player
           (-> (- (.-x player) (/ c/width 2))
               (max 0)
               (min (- (* 16 (.-w level)) c/width)))
           (-> (- (.-y player) (/ c/height 2))
               (max 0)
               (min (- (* 16 (.-h level)) c/height))))))

(defrecord Level [w h map]
  IFn
  (invoke [_ x y]
    (if (and (< -1 x w) (< -1 y h))
      (aget map y x)
      0)))

(defn level
  ([w h] (level w h #(inc (rand-int 4))))
  ([w h f] (Level. w h (u/array-2d w h f))))

;; (defprotocol Entity
;;   (move-1d [this l dx dy])
;;   (move [this l dx dy])
;;   (look-at [this mx my])
;;   (tick [this dx dy lx ly]))

(def player-speed 3)

(defrecord Player [x y ex ey rot]
  Object
  (move-1d [this l dx dy]
    (Player. (+ x dx) (+ y dy) ex ey rot))
  (move [this l dx dy]
    (-> this (.move-1d l dx 0) (.move-1d l 0 dy)))
  (look-at [this mx my]
    (Player. x y mx my (Math/atan2 (- y my) (- x mx))))
  (tick [this dx dy lx ly]
    (let [nx (+ x (* player-speed dx))
          ny (+ y (* player-speed dy))]
     (Player. nx ny lx ly (Math/atan2 (- ly ny) (- lx ny))))))

(defn player [x y] (Player. x y 0 0 0))

(defn new-game []
  (.offset
   (Game. (level 100 100)
          (player 100 100)
          0 0)))

(defn move-player
  [{:keys [level player xo yo] :as game} {:keys [ks mx my c?] :as input}]
  (-> game
      (update-in [:player]
                 (fn [p]
                   (.tick p
                          (cond (ks :right) 1
                                (ks :left) -1
                                :else 0)
                          (cond (ks :down) 1
                                (ks :up) -1
                                :else 0)
                          (+ mx xo)
                          (+ my yo))))))

(defn tick
  [{:keys [level player] :as game} input]
  (-> game
      (move-player input)
      (.offset)))
