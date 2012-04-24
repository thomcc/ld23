(ns ld23.game
  (:require [ld23.utils :as u]
            [ld23.core :as c]
            [ld23.gen :as l]
            [ld23.plot :as p]
            [clojure.string :as str])
  (:use [ld23.screen :only [cache-minimap]])
  (:use-macros [ld23.macros :only [dogrid]]))

(def lpow 5)
(def lscale (Math/pow 2 lpow))

(def player-speed 2)
;; only have 15 minutes left and it does not work
(def found-crystals (atom 0))
(defrecord Game [level player xo yo over? need-items won?])

(defn offset [game]
  (let [level game.level, player game.player]
    (assoc game
      :xo (-> (- (.-x player) (/ c/width 2 c/scale))
              (max 0)
              (min (- (* lscale (.-w level)) (/ c/width c/scale))))
      :yo (-> (- (.-y player) (/ c/height 2 c/scale))
              (max 0)
              (min (- (* lscale (.-h level)) (/ c/height c/scale)))))))


(defrecord Player [x y ex ey rot destx desty moving? steps items health
                   looking-for crystals found-item?])

(defn player [x y] (Player. x y 0 0 0 x y false 0 #{} 100 :radar 0 false))

(defn setup-level [{:keys [w h map] :as lvl}]
  (let [[shipx shipy]
        (loop [x (rand-int w) y (rand-int h)]
          (if (every? #(l/ground? (lvl (+ x (% 0)) (+ y (% 1))))
                      (for [i (range 3), j (range 3)] [i j]))
            [x y]
            (recur (rand-int w) (rand-int h))))
        [rx ry] (loop [x (u/offset shipx 20), y (u/offset shipy 20)]
                  (if (l/ground? (lvl x y))
                    [x y]
                    (recur (u/offset shipx 20) (u/offset shipy 20))))
        [ex ey] (loop [x (rand-int w)
                       , y (rand-int h)
                       ]
                  (if (l/ground? (lvl x y))
                    [x y]
                    (recur (rand-int w)
                            (rand-int h)
                           )))]
    (dogrid [i shipx (+ shipx 3) 1, j shipy (+ shipy 2) 1]
            (aset map (+ i (* j w)) l/ship))
    (when c/debug?
      (prn (str "found posn for ship at " shipx ", " shipy "."))
      (prn (str "found posn for radar at " rx ", " ry "."))
      (prn (str "found posn for engine at " ex ", " ey ".")))
    (aset map (+ rx (* ry w)) l/radar)
    (aset map (+ ex (* ey w)) l/engine)
    (assoc lvl :sx shipx :sy shipy
           :items {[ex ey] :engine [rx ry] :radar}
           :item-posns {:engine [ex ey] :radar [rx ry]} ;; uuuugh.
           :nx rx :ny ry)))

(defn maybe-got-item
  [{{:keys [items crystals x y found-item?] :as p} :player l :level n
    :need-items :as game} item]
  (cond ;; found-item? (if (== crystals 9)
        ;;               (do (p/plot-point :won)
        ;;                   (assoc game :won true))
        ;;               (-> game
   ;;                   (update-in [:player :crystals] inc)))
   (>= @found-crystals 10) (do (p/plot-point :won) (assoc game :won? true))
        (nil? item) game
        :else (let [px (bit-shift-right x 5), py (bit-shift-right y 5)]
                (do (p/plot-point item)
                    (aset (.-map l) (+ px (* py l.w)) l/ground)
                    (-> game
                        (update-in [:player :items] conj item)
                        (update-in [:player :looking-for] (fnext n))
                        (update-in [:need-items] next)
                        (update-in [:level :items] dissoc [px py])
                        (update-in [:level :item-posns] dissoc item))))))

(defn new-game []
  (let [w (setup-level (l/gen-world 128 128))]
    (cache-minimap w)
    (offset
     (Game. w ; level
            (player (* lscale (+ 0.5 w.sx)) ;player
                    (* lscale (+ 2.5 w.sy)))
            0 0 ; xo yo
            false ; over?
            '(:radar :engine :glass :crystals) ; needs
            false)))) ; won?

(defn update-player
  [{:keys [level player xo yo need-items] :as game}]
  (let [px (bit-shift-right player.x lpow)
        py (bit-shift-right player.y lpow)
        t (level px py)
        pdam (/ t.hazard 100)
        ni (or (get-in level [:items [px py]])
               (when (= (first need-items) (.-name t))
                 (aset (.-map level) (+ px (* level.w py)) l/ground)
                 (.-name t)))]
    (-> game
        (assoc-in [:player :health] (- player.health pdam))
        (maybe-got-item ni))))

(def prad 8)


(defn move
  [{:keys [x y found-item?] :as p} level dx dy]
  (if-not (== 0 dx dy)
    (let [opx0 (bit-shift-right (- x prad) lpow)
          opy0 (bit-shift-right (- y prad) lpow)
          opx1 (bit-shift-right (+ x prad) lpow)
          opy1 (bit-shift-right (+ y prad) lpow)
          npx0 (bit-shift-right (- (+ dx x) prad) lpow)
          npy0 (bit-shift-right (- (+ dy y) prad) lpow)
          npx1 (bit-shift-right (+ (+ dx x) prad) lpow)
          npy1 (bit-shift-right (+ (+ dy y) prad) lpow)
          can-move? (atom true)
          crystal? (atom nil)]
      (dogrid [pyt npy0 (inc npy1) 1, pxt npx0 (inc npx1) 1]
        (when-not (and (< opx0 pxt (inc opx1)) (< opy0 pyt (inc opy1)))
          (when (.-solid? (level pxt pyt))
            (reset! can-move? false)
            (let [t (level pxt pyt)]
              (aset level.map (+ pxt (* 128 pyt)) l/ground)
              (when (= :crystal (.-name t))
                (swap! found-crystals inc))))))
      (if @can-move?
        (assoc p :x (+ x dx) :y (+ y dy) ;; :found-item? (or found-item? @crystal?)
               )
        p))
    p))

(defn maybe-game-over [{p :player :as g}]
  (assoc g :over? (< p.health 0)))

(defn tick-player
  [{:keys [level player xo yo need-items] :as game} {:keys [ks mx my c?] :as input}]
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
