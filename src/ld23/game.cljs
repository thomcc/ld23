(ns ld23.game
  (:require [ld23.utils :as u]
            [ld23.core :as c]
            [ld23.gen :as l])
  (:use [ld23.screen :only [prerender-level]]))




(defrecord Game [level player xo yo])

(defn offset [game]
  (let [level game.level, player game.player]
    (Game. level player
           (-> (- (.-x player) (/ c/width 2 c/scale))
               (max 0)
               (min (- (* 32 (.-w level)) (/ c/width c/scale))))
           (-> (- (.-y player) (/ c/height 2 c/scale))
               (max 0)
               (min (- (* 32 (.-h level)) (/ c/height c/scale)))))))

(def player-speed 2)
(defrecord Player [x y ex ey rot destx desty moving? steps])
(defn player [x y] (Player. x y 0 0 0 x y false 0))
(defn spawn-player [{:keys [w h] :as lvl}]
  (loop [x (rand-int w) y (rand-int h)]
    (if (l/ground? (lvl x y))
      (player (* 32 (+ x 0.5)) (* 32 (+ 0.5 y)))
      (recur (rand-int w) (rand-int h)))))

(defn setup-level [{:keys [w h map] :as lvl}]
  (let [[shipx shipy]
        (loop [x (rand-int w) y (rand-int h)]
          (if (every? #(l/ground? (lvl (+ x (% 0)) (+ y (% 1))))
                      (for [i (range 3), j (range 3)] [i j]))

            (do (when c/debug?
                  (prn (str "found posn for ship at " x ", " y ".")))
                [x y])
            (recur (rand-int w) (rand-int h))))]
    (assoc lvl
      :sx shipx
      :sy shipy)))

(defn new-game []
  (let [w (setup-level (l/gen-world 128 128))]
    (offset
     (Game. w (spawn-player w)
            0 0))))
(defn tick-player
  [{:keys [level player xo yo] :as game} {:keys [ks mx my c?] :as input}]
  (assoc game
    :player
    (let [px player.x, py player.y, ex (- (+ mx xo) px), ey (- (+ my yo) py)]
      (-> (if player.moving?
            (let [dx (- player.destx px)
                  dy (- player.desty py)
                  dist (Math/sqrt (+ (* dx dx) (* dy dy)))
                  pdx (* player-speed (/ dx dist))
                  pdy (* player-speed (/ dy dist))]
              (if (< dist 16)
                (assoc player
                  :moving? false)
                (assoc player
                  :x (+ px pdx)
                  :y (+ py pdy)
                  :steps (inc player.steps))))
            player)
          (assoc :ex (+ mx xo), :ey (+ my yo), :rot (Math/atan2 ey ex))))))


(defn set-dest [player dstx dsty]
  (assoc player :destx dstx :desty dsty :moving? true))


(defn submerged? [{l :level p :player}]
  (.-liq? (l (Math/floor (/ p.x 32)) (Math/floor (/ p.y 32)))))

(defn tick
  [{:keys [level player xo yo] :as game}
   {:keys [ks mx my c?] :as input}]
  (-> (if c?
        (update-in game [:player] set-dest (+ xo mx) (+ yo my))
        game)
      (tick-player input)
      offset))
