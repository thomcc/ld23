(ns ld23.game
  (:require [ld23.utils :as u]
            [ld23.core :as c]
            [ld23.gen :as l]
            [clojure.string :as str])
  (:use [ld23.screen :only [prerender-level]])
  (:use-macros [ld23.macros :only [dogrid]]))

(defrecord Message [text pos])

(defn message [txt]
  (Message. (apply array txt) 0))
(def lpow 5)
(def lscale (Math/pow 2 lpow))





(def player-speed 2)

(defrecord Game [level player xo yo messages over?])

(defn offset [game]
  (let [level game.level, player game.player]
    (assoc game
      :xo (-> (- (.-x player) (/ c/width 2 c/scale))
              (max 0)
              (min (- (* lscale (.-w level)) (/ c/width c/scale))))
      :yo (-> (- (.-y player) (/ c/height 2 c/scale))
              (max 0)
              (min (- (* lscale (.-h level)) (/ c/height c/scale)))))))


(defrecord Player [x y ex ey rot destx desty moving? steps items health])

(defn player [x y] (Player. x y 0 0 0 x y false 0 [] 100))

(defn setup-level [{:keys [w h map] :as lvl}]
  (let [[shipx shipy]
        (loop [x (rand-int w) y (rand-int h)]
          (if (every? #(l/ground? (lvl (+ x (% 0)) (+ y (% 1))))
                      (for [i (range 3), j (range 3)] [i j]))
            (do (when c/debug?
                  (prn (str "found posn for ship at " x ", " y ".")))
                [x y])
            (recur (rand-int w) (rand-int h))))]
    (dogrid [i shipx (+ shipx 3) 1, j shipy (+ shipy 2) 1]
      (aset map (+ i (* j w)) l/ship))
    (assoc lvl :sx shipx :sy shipy)))

(defn new-game []
  (let [w (setup-level (l/gen-world 128 128))]
    (offset
     (Game. w (player (* lscale (+ 0.5 w.sx)) (* lscale (+ 2.5 w.sy)))
            0 0 (array)))))

(defn update-player
  [{:keys [level player xo yo] :as game}]
  (let [px (bit-shift-right player.x lpow)
        py (bit-shift-right player.y lpow)
        t (level px py)
        pdam (/ t.hazard 100)
        pi (if-let [ni (get-in level [:items [px py]])]
             (conj player.items ni)
             player.items)]
    (-> game
        (update-in [:player] assoc
                   :health (- player.health pdam)
                   :items pi)
        )))

(def prad 8)

(defn move
  [{:keys [x y] :as p} level dx dy]
  (if-not (== 0 dx dy)
    (let [opx0 (bit-shift-right (- x prad) lpow)
          opy0 (bit-shift-right (- y prad) lpow)
          opx1 (bit-shift-right (+ x prad) lpow)
          opy1 (bit-shift-right (+ y prad) lpow)
          npx0 (bit-shift-right (- (+ dx x) prad) lpow)
          npy0 (bit-shift-right (- (+ dy y) prad) lpow)
          npx1 (bit-shift-right (+ (+ dx x) prad) lpow)
          npy1 (bit-shift-right (+ (+ dy y) prad) lpow)
          can-move? (atom true)]
      (dogrid [pyt npy0 (inc npy1) 1, pxt npx0 (inc npx1) 1]
        (when-not (and (< opx0 pxt (inc opx1)) (< opy0 pyt (inc opy1)))
          (when (.-solid? (level pxt pyt))
            (reset! can-move? false))))
      (if @can-move?
        (assoc p :x (+ x dx) :y (+ y dy))
        p))
    p))

(defn maybe-game-over [{p :player :as g}]
  (assoc g :over? (< p.health 0)))

(defn tick-player
  [{:keys [level player xo yo] :as game} {:keys [ks mx my c?] :as input}]
  (-> game
      (assoc :player
        (let [px player.x
              py player.y
              ex (- (+ mx xo) px)
              ey (- (+ my yo) py)]
          (-> (if player.moving?
                (let [dx (- player.destx px)
                      dy (- player.desty py)
                      dist (Math/sqrt (+ (* dx dx) (* dy dy)))
                      pdx (* player-speed (/ dx dist))
                      pdy (* player-speed (/ dy dist))]
                  (if (< dist (/ lscale 2))
                    (assoc player
                      :moving? false)
                    (-> player
                        (update-in [:steps] inc)
                        (move level pdx 0)
                        (move level 0 pdy))))
                player)
              (assoc :ex (+ mx xo), :ey (+ my yo), :rot (Math/atan2 ey ex)))))
      update-player
      maybe-game-over))


(defn set-dest [player dstx dsty]
  (assoc player :destx dstx :desty dsty :moving? true))


(defn submerged? [{p :player :as g}]
  (.-liq? (g.level (bit-shift-right p.x 5) (bit-shift-right p.y 5))))

(defn tick
  [{:keys [level player xo yo] :as game}
   {:keys [ks mx my c?] :as input}]
  (-> (if c?
        (update-in game [:player] set-dest (+ xo mx) (+ yo my))
        game)
      (tick-player input)
      offset))
