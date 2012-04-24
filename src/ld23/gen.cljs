(ns ld23.gen
  (:require [clojure.set :as set]
            [ld23.utils :as u])
  (:use-macros [ld23.macros :only [dogrid defregion]]))

(def regions (atom ()))

(defn- mk-ary [s init]
  (let [a (js/Array. s)]
    (dotimes [i s] (aset a i init))
    a))

;;; getting ridiculous
(defrecord Level [w h map items item-posns sx sy nx ny]
  IFn
  (invoke [_ x y]
    (let [p (+ x (* w y))]
      (if (< p (alength map))
        (aget map p)
        0))))

(defn level [w h m] (Level. w h m {} {} -1 -1 -1 -1))

(defrecord Tile [color solid? crystal? liq? hazard name id])

(def tile-ctr (atom 0))

(defn tile [c s? c? l? h name]
  (let [id @tile-ctr]
    (swap! tile-ctr inc)
    (Tile. c s? c? l? h name (str id))))

(def empty          (tile "black"           true false false 0 :empty))
(def sea            (tile "#010914"        false false true 1 :sea))
(def ground         (tile "lightslategray" false false false 0 :ground))
(def lava           (tile "red"            false false true 10 :lava))
(def glass          (tile "SkyBlue"        false false false 0 :glass))
(def green-crystal  (tile "Chartreuse"       true true false 0 :gcrystal))
(def blue-crystal   (tile "MediumAquaMarine" true true false 0 :bcrystal)) ;
(def pink-crystal   (tile "Orchid"           true true false 0 :pcrystal)) ;
(def orange-crystal (tile "DarkOrange"       true true false 0 :crystal)) ;
(def ship (tile "yellow" true false false 0 :ship)) ;; hack
;;; more of a hack:

(def radar (tile "lightslategray" false false false 0 :radar))

(def engine (tile "magenta" false false false 0 :engine))

(def tiles [empty sea ground lava glass green-crystal blue-crystal
            pink-crystal orange-crystal])

(defn ground? [t] (identical? t ground))
(defn lava? [t] (identical? t lava))
(defn crystal? [t] (.-crystal? t))
(defn glass? [t] (identical? t glass))
(defn sea? [t] (identical? t sea))
(defn liquid? [t] (or (sea? t) (lava? t)))



(defn seed-ary [w h sz]
  (let [arr (mk-ary (* w h) 0), ->p (fn [x y] (+ (bit-and x (dec w)) (* w (bit-and y (dec h)))))]
    (dogrid [y 0 h sz, x 0 w sz] (aset arr (->p x y) (dec (rand 2))))
    (loop [ss sz, sc (/ w), sm 1]
      (let [hs (Math/floor (/ ss 2))
            cpos (fn [a b c d] (+ (* (dec (rand 2)) ss sc)
                                 (/ (+ (aget arr a) (aget arr b) (aget arr c) (aget arr d)) 4)))]
        (dogrid [y 0 h ss, x 0 w ss]
          (aset arr (->p (+ x hs) (+ y hs))
                (cpos (->p x y) (->p (+ x ss) y) (->p x (+ y ss)) (->p (+ x ss) (+ y ss)))))
        (dogrid [y 0 h ss, x 0 w ss]
          (aset arr (->p (+ x hs) y)
                (cpos (->p x y) (->p (+ x ss) y) (->p (+ x hs) (+ y hs)) (->p (+ x hs) (- y hs))))
          (aset arr (->p x (+ y hs))
                (cpos (->p x y) (->p x (+ y ss)) (->p (+ x hs) (+ y hs)) (->p (- x hs) (+ y hs)))))
        (when (> hs 1) (recur hs (* sc (+ sm 0.8)) (* sm 0.3)))))
    (let [s (* w h)] (fn [n] (aget arr (mod n s))))))



(def indexof (->> (map-indexed vector tiles)
                  (mapcat reverse)
                  (apply hash-map)))

(defn region [& opts]
  (let [{:keys [transforms size clusters spread rarity jitter okay-loc?]
         :or {transforms #{}, okay-loc? (constantly true)
              size 1, clusters 100, spread 1, rarity 0.001, jitter 10}}
        (apply hash-map opts)]
   (fn [{:keys [w h map] :as level}]
     (dotimes [_ (Math/floor (* w h rarity))]
       (let [xl (rand-int w), yl (rand-int h)]
         (when (okay-loc? (/ xl w) (/ yl h))
           (dotimes [_ size]
             (let [x (+ xl (- (rand-int (inc (* 2 size))) size))
                   y (+ yl (- (rand-int (inc (* 2 size))) size))]
               (dotimes [_ clusters]
                 (let [x-off (u/offset x jitter), y-off (u/offset y jitter)]
                   (dogrid [cy (- y-off (dec spread)) (+ y-off spread) 1
                            cx (- x-off (dec spread)) (+ x-off spread) 1]
                           (when (and (< -1 cx w) (< -1 cy h))
                             (let [s (aget map (+ cx (* cy w)))]
                               (when-let [newtile (transforms s)]
                                 (aset map (+ cx (* cy w)) newtile))))))))))))
     level)))


(def crystal-types [green-crystal blue-crystal pink-crystal orange-crystal orange-crystal])


(defregion crystals
  :transforms (fn [g]
                (when-let [c ({ground #(rand-nth crystal-types)} g)]
                  (c)))
  :rarity (/ 1800)
  :jitter 10)

(defregion glass-beaches
  :transforms {ground glass}
  :rarity (/ 3000)
  :size 5
  :spread 2
  :jitter 5)

(defn diff [a b] (Math/abs (- a b)))
(defn scaled-diff [a b] (- (* 3 (Math/abs (- a b))) 2))

(defn gen-world [w h]
  (let [mna (seed-ary w h 16)
        mnb (seed-ary w h 16)
        mnc (seed-ary w h 16)
        ;; bbd (seed-ary w h 64)
        ;; asa (seed-ary w h 8)
        ;; asb (seed-ary w h 8)
        ;; asc (seed-ary w h 8)
        ;; asd (seed-ary w h 8)
        na (seed-ary w h 32)
        nb (seed-ary w h 32)
        m (mk-ary (* w h) 0)
        ;; m2 (mk-ary (* w h) 0)
        ]
    (dogrid [y 0 h 1, x 0 w 1]
      (let [i (+ x (* y w))
            mv (scaled-diff (diff (mna i) (mnb i)) (mnc i))
            v (- (inc (scaled-diff (na i) (nb i)))
                 (* (Math/pow (max (Math/abs (dec (* 2.0 (/ x (dec w)))))
                                   (Math/abs (dec (* 2.0 (/ y (dec h))))))
                              16)
                    20))]
        (aset m i (nth tiles
                       (cond (< v -0.5) 1
                             (and (> v 0.5) (< mv -1.5)) 3
                             ;; (and (neg? v) (> (bbd i) 0.5)) 8
                             :else 2)))
        ))
    (-> (level w h m)
        glass-beaches
        crystals
        )
    ;; (reduce #(%2 %1) (level w h m) @regions)
    ))
