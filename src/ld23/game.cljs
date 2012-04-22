(ns ld23.game
  (:require [ld23.utils :as u]
            [ld23.core :as c]
            [ld23.gen :as gen])
  (:use [ld23.screen :only [prerender-level]]
        [ld23.gen :only [gen-world]]))

(defrecord Game [level player xo yo])

(defn offset [game]
  (let [level game.level, player game.player]
    (Game. level player
           (-> (- (.-x player) (/ c/width 2 c/scale))
               (max 0)
               (min (- (* 16 (.-w level)) (/ c/width c/scale))))
           (-> (- (.-y player) (/ c/height 2 c/scale))
               (max 0)
               (min (- (* 16 (.-h level)) (/ c/height c/scale)))))))

(def player-speed 2)

(defrecord Player [x y ex ey rot destx desty moving? ticks health])

(defn player [x y] (Player. x y 0 0 0 x y false 0 100))

(defn spawn-player [{:keys [w h] :as level}]
  (loop [x (rand-int w), y (rand-int h)]
    (if (= (level x y) gen/ground) (player (* 16 x) (* 16 y))
        (recur (rand-int w) (rand-int h)))))

(defn new-game []
  (let [w (gen/gen-world 128 128)]
   (offset (Game. w (spawn-player w) 0 0))))

(defn tick-player
  [{:keys [level player xo yo] :as game} {:keys [ks mx my c?] :as input}]
  (assoc game
    :player
    (let [px player.x, py player.y, ex (- (+ mx xo) px), ey (- (+ my yo) py)]
      (-> (if player.moving?
            (let [dx (- player.destx px)
                  dy (- player.desty py)
                  dist (Math/sqrt (+ (* dx dx) (* dy dy)))]
              (if (< dist 16)
                (assoc player :moving? false)
                (assoc player :x (+ px (* player-speed (/ dx dist)))
                       :y (+ py (* player-speed (/ dy dist))))))
            player)
          (assoc :ex (+ mx xo), :ey (+ my yo), :rot (Math/atan2 ey ex))
          (update-in [:ticks] inc)))))

(defn set-dest [player dstx dsty]
  (assoc player :destx dstx :desty dsty :moving? true))


(defn tick
  [{:keys [level player xo yo] :as game} {:keys [ks mx my c?] :as input}]
  (-> (if c?
        (update-in game [:player] set-dest (+ xo mx) (+ yo my))
        game)
      (tick-player input)
      offset))
