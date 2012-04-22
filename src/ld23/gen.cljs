(ns ld23.gen
  (:require [clojure.set :as set])
  (:use-macros [ld23.macros :only [dogrid defregion]]))

(def regions (atom ()))

(defn- mk-ary [s init]
  (let [a (js/Array. s)]
    (dotimes [i s] (aset a i init))
    a))


(defrecord Level [w h map]
  IFn
  (invoke [_ x y]
    (let [p (+ x (* w y))]
      (if (< p (alength map))
        (aget map p)
        0))))
;; (def tiles [:empty :sea :ground :lava :glass
;;             :green-crystal :blue-crystal :pink-crystal :orange-crystal
;;             :rock])




(defrecord Tile [solid? crystal? liq? hazard?])

(def empty (Tile. true  false false 0))
(def sea (Tile. false false true 10))
(def ground (Tile. false false false 0))
(def lava (Tile. false false true 100))
(def glass (Tile. false false false 0))
(def green-crystal (Tile. true true false 0))
(def blue-crystal (Tile. true true false 0))
(def pink-crystal (Tile. true true false 0))
(def orange-crystal (Tile. true true false 0))

(def tiles [empty sea ground lava glass green-crystal blue-crystal
            pink-crystal orange-crystal])



(defn- offset [n v] (+ n (- (rand-int v) (rand-int v))))


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
                 (let [x-off (offset x jitter), y-off (offset y jitter)]
                   (dogrid [cy (- y-off (dec spread)) (+ y-off spread) 1
                            cx (- x-off (dec spread)) (+ x-off spread) 1]
                           (when (and (< -1 cx w) (< -1 cy h))
                             (let [s (aget map (+ cx (* cy w)))]
                               (when-let [newtile (transforms (tiles s))]
                                 (aset map (+ cx (* cy w)) (indexof newtile)))))))))))))
     level)))


(def crystal-types [green-crystal blue-crystal pink-crystal orange-crystal])


(defregion crystals
  :transforms (fn [g] (when-let [c ({ground #(rand-nth crystal-types)} g)]
                       (c)))
  :rarity (/ 1800)
  :jitter 10)

(defregion glass-beaches
  :transforms {ground glass}
  :rarity (/ 3000)
  :size 10
  :spread 2
  :jitter 5)

(defn diff [a b] (Math/abs (- a b)))
(defn scaled-diff [a b] (- (* 3 (Math/abs (- a b))) 2))

(defn gen-world [w h]
  (let [mna (seed-ary w h 16)
        mnb (seed-ary w h 16)
        mnc (seed-ary w h 16)
        ;; bbd (seed-ary w h 64)
        na (seed-ary w h 32)
        nb (seed-ary w h 32)
        m (mk-ary (* w h) 0)]
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
                             :else 2)))))
    (reduce #(%2 %1) (Level. w h m) @regions)))

(def tile-colors ["black" "#010914" "gray"  "red" "SkyBlue"
                  "Chartreuse" "MediumAquaMarine" "Orchid" "DarkOrange"])

(defn demo [c]
  (.. c (getContext "2d") (clearRect 0 0 c.width c.height))
  (let [m (gen-world 128 128)]
    (let [ctx (.getContext c "2d")]
      (dotimes [i 128]
        (dotimes [j 128]
          (set! ctx.fillStyle (tile-colors (m i j)))
          (.fillRect ctx (* i 4) (* j 4) 4 4))))
    c))

(defn test-gen []
  (.appendChild (ld23.utils/get-elem :content)
                (crate.core/html
                 [:div#testing
                  [:canvas#test {:width 512 :height 512}]
                  [:button#btn {:style "display: block; margin: auto"} "generate"]]))
  (let [c (.getElementById js/document "test")]
    (demo c)
    (set! (.-onclick (.getElementById js/document "btn")) #(demo c))))
