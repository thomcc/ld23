(ns ld23.screen
  (:use [ld23.gen :only [tile-colors crystal?]])
  (:require [ld23.utils :as u]
            [ld23.gen :as gen])
  (:use-macros [ld23.macros :only [with-path with-save saving pathing]]))

(defn context [cvs] (.getContext cvs "2d"))

(defn fill-style [ctx color]
  (set! ctx.fillStyle color))

(defn stroke-style [ctx color]
  (set! ctx.strokeStyle color))

(defn style [ctx color]
  (doto ctx
    (fill-style color)
    (stroke-style color)))

(defn line-width [ctx wid]
  (set! ctx.lineWidth wid))

(defn fill-rect [ctx x y w h]
  (.fillRect ctx x y w h))

(defn stroke-rect [ctx x y w h]
  (.strokeRect ctx x y w h))

(defn clear-rect [ctx x y w h]
  (.clearRect ctx x y w h))

(defn rect [ctx x y w h]
  (.rect ctx x y w h))

(defn move-to [ctx x y]
  (.moveTo ctx x y))

(defn line-to [ctx x y]
  (.lineTo ctx x y))

(defn line-cap [ctx which]
  (set! ctx.lineCap (u/ensure-str which)))

(defn line-join [ctx which]
  (set! ctx.lineJoin (u/ensure-str which)))

(defn miter-limit [ctx lim]
  (set! ctx.miterLimit lim))

(defn alpha [ctx a]
  (set! ctx.globalAlpha a))
(defn composite [ctx c]
  (set! ctx.globalCompositeOperation (u/ensure-str c)))


(defn quad-to [ctx x0 y0 x1 y1]
  (.quadraticCurveTo ctx x0 y0 x1 y1))

(defn bezier-to [ctx x0 y0 x1 y1 x2 y2]
  (.bezierCurveTo ctx x0 y0 x1 y1 x2 y2))

(defn stroke [ctx]
  (.stroke ctx))

(defn fill [ctx]
  (.fill ctx))

(defn fill-text [ctx text x y]
  (.fillText ctx text x y))

(defn stroke-text [ctx text x y]
  (.strokeText text x y))

(defn text-width [ctx text]
  (.. ctx (measureText text) -width))

(defn begin-path [ctx]
  (.beginPath ctx))

(defn close-path [ctx]
  (.closePath ctx))

(defn arc [ctx x y r sa ea ac?]
  (.arc ctx x y r sa ea ac?))

(defn clip [ctx]
  (.clip ctx))

(defn translate [ctx x y]
  (.translate ctx x y))

(defn rotate [ctx r]
  (.rotate ctx r))

(defn scale [ctx x y]
  (.scale ctx x y))

(defn linear-gradient [ctx x0 y0 x1 y1]
  (.createLinearGradient ctx x0 y0 x1 y1))

(defn radial-gradient [ctx x0 y0 r0 x1 y1 r1]
  (.createRadialGradient ctx x0 y0 r0 x1 y1 r1))

(defn pattern [ctx img rep]
  (.createPattern ctx img (u/ensure-str rep)))

(defn add-stop [grad off col]
  (.addColorStop grad off col))

(defn make-grad [ctx x0 y0 x1 y1 c1 c2]
  (doto (linear-gradient ctx x0 y0 x1 y1)
    (add-stop 0 c1)
    (add-stop 1 c2)))

(defn rounded-rect [ctx x y w h r]
  (with-path ctx
    (move-to x (+ y r))
    (line-to x (+ y h (- r)))
    (quad-to x (+ y h) (+ x r) (+ y h))
    (line-to (+ x w (- r)) (+ y h))
    (quad-to (+ x w) (+ y h) (+ x w) (+ y h (- r)))
    (line-to (+ x w) (+ y r))
    (quad-to (+ x w) y (+ x w (- r)) y)
    (line-to (+ x r) y)
    (quad-to x y x (+ y r))))

(defn clear [cvs col]
  (doto (context cvs)
    (fill-style col)
    (fill-rect 0 0 cvs.width cvs.height)))

(defn font [ctx f]
  (set! ctx.font f))

(defn draw-image [ctx i sx sy sw sh dx dy dw dh]
  (.drawImage ctx i sx sy sw sh dx dy dw dh))

(defn rounded-rect [ctx x y w h r]
  (with-path ctx
    (move-to x (+ y r))
    (line-to x (+ y h (- r)))
    (quad-to x (+ y h) (+ x r) (+ y h))
    (line-to (+ x w (- r)) (+ y h))
    (quad-to (+ x w) (+ y h) (+ x w) (+ y h (- r)))
    (line-to (+ x w) (+ y r))
    (quad-to (+ x w) y (+ x w (- r)) y)
    (line-to (+ x r) y)
    (quad-to x y x (+ y r))))

(defn write [cvs txt]
  (let [ctx (context cvs)]
    (doto ctx
      (fill-style "white")
      (font "15px monospace"))
    (dotimes [i (count txt)]
      (let [line (nth txt i)
            x (/ (- cvs.width (text-width ctx line)) 2)
            y (+ (* 30 i) (/ (- cvs.height (* 30 (count txt))) 2))]
        (fill-text ctx line x y)))))

(defn make-pat [col]
  (let [c (u/make-canvas 48 48)]
    (doto (context c)
      (fill-style col)
      (stroke-style "black")

      ;; (line-cap "round")
      ;; (line-join "round")
      ;; (line-width 2)
      (with-path (move-to 16 0)

        ;; (bezier-to 20 2 24 0 28 2)
        ;; (bezier-to 32 0 48 0 48 16)
        ;; (bezier-to 46 20 48 24 46 28)
        ;; (bezier-to 48 32 48 48 32 48)
        ;; (bezier-to 28 46 24 48 20 46)
        ;; (bezier-to 16 48 0 48 0 32)
        ;; (bezier-to 2 28 0 24 2 20)
        ;; (bezier-to 0 16 0 0 16 0)

        (bezier-to 20 2 28 2 32 0)

        (quad-to 48 0 48 16)
        (bezier-to 46 20 46 28 48 32)

        ;; (bezier-to 48 40
        ;;            48 48
        ;;            40 48)
        (quad-to 48 48 32 48)
        (bezier-to 28 46 20 46 16 48)
        ;; (bezier-to 8 48
        ;;            0 48
        ;;            0 40)
        (quad-to 0 48 0 32)
        (bezier-to 2 28 2 20 0 16)
        ;; (bezier-to 0 8
        ;;            0 0
        ;;            8 0)
        (quad-to 0 0 16 0)
        )
      fill
      (alpha 0.4)
      stroke
      )
    c))

(defn draw-radar [ctx]
  (with-save ctx
    (fill-style "green")
    (stroke-style "black")
    (with-path
      (arc 5 5 5 0 (* 2 Math/PI)))
    stroke fill clip
    (line-width 0.1)
    (stroke-style "rgba(0,255,0,0.7)")
    begin-path
    (do (dotimes [i 10]
          (doto ctx
            (move-to 0 i)
            (line-to 10 i)
            (move-to i 0)
            (line-to i 10))))
    close-path
    stroke
    (line-width 0.4)
    (with-path
      (move-to 5 5)
      (line-to (+ 5 (/ 5 (Math/sqrt 2)))
               (+ 5 (/ 5 (Math/sqrt 2)))))
    stroke))

(defn draw-crystals [ctx]
  (with-save ctx
    (with-path
      (move-to 2 18)
      (line-to 3 7)
      (line-to 10 13)
      (line-to 12 (* 4 6))
      (line-to 10 13)
      (line-to 13 6)
      (line-to 16 2)
      (line-to 21 6)
      (line-to 21 15)
      (line-to 22 23)
      (line-to 21 15)
      (line-to 25 6)
      (line-to 29 14)
      (line-to 26 28)
      (line-to 5 27)
      (line-to 2 18))
    fill
    (stroke-style "black")
    (alpha 0.6)
    stroke
    (with-path
      (move-to 2 18)
      (line-to 8 12)
      (move-to 5 12)
      (line-to 7 23)
      (move-to 12 7)
      (line-to 15 8)
      (line-to 19 8)
      (line-to 21 6)
      (move-to 16 5)
      (line-to 15 7)
      (line-to 15 21)
      (move-to 19 8)
      (line-to 18 22)
      (move-to 22 13)
      (line-to 24 15)
      (line-to 27 15)
      (line-to 28 13)
      (move-to 25 15)
      (line-to 23 26))
    stroke))


(def shipgx0 32)
(def shipgx1 24)
(def shipgy0 0)
(def shipgy1 4)
(def shipgr0 3)
(def shipgr1 15)
(def shipgs0 0.1)
(def shipgs1 0.8)

(defn draw-engine [ctx flip?]
  (with-save ctx
    (with-path
      (scale 1 (if flip? -1 1))
      (move-to 15 7)
      (line-to 15 0)
      (line-to 0 0)
      (line-to 0 3)
      (quad-to 0 7 9 7)
      (line-to 15 7))))

(defn draw-ship [ctx]
  (with-save ctx
    (fill-style "#ccc")
    (stroke-style "black")
    (line-width 0.3)
    (scale 3 3)
    (with-save
      (translate 15 13)
      ;; (translate 24 24)
      (draw-engine false))
    fill stroke
    (with-path ;; main hull
      (move-to 16 0)
      (line-to 31 0)
      (quad-to 32 0 32 1)
      (line-to 32 15)
      (quad-to 32 16 31 16)
      (line-to 16 16)
      (quad-to 4 14 0 8)
      (quad-to 4 2 16 0))
    (with-save
      (fill-style
       (doto (radial-gradient ctx
                              shipgx0 shipgy0 shipgr0
                              shipgx1 shipgy1 shipgr1)
         (add-stop shipgs0 "#474747")
         (add-stop shipgs1 "#d6d6d6")))
      fill)
    stroke
    ;; (with-save ;; busted engine
    ;;   clip
    ;;   (with-path
    ;;     (move-to 16 0)
    ;;     (quad-to 16 8 48 8)
    ;;     (line-to 32 48)
    ;;     (line-to 16 0))
    ;;   (fill-style
    ;;    (doto (radial-gradient ctx 7 5 3 1 5 2)
    ;;      (add-stop 0 "#474747")
    ;;      (add-stop 1 "#d6d6d6")))
    ;;   fill)
    (with-path ;; viewport
      (move-to 16 4)
      (line-to 23 4)
      (quad-to 24 4 24 5)
      (line-to 24 11)
      (quad-to 24 12 23 12)
      (line-to 16 12)
      ;; (bezier-to 8 12 8 4 16 4)
      (quad-to 8 12 4 8)
      (quad-to 8 4 16 4))
    (fill-style
     (doto (linear-gradient ctx 0 0 32 16)
       (add-stop 0.3 "#99ccff")
       (add-stop 0.5 "#d0e8ff")
       (add-stop 0.7 "#99ccff")))
    fill
    (with-save
      (alpha 0.7)
      stroke)
    (with-save
      clip
      (translate 0 -3)
      (stroke-style "#7198bd") ;; lighter crack
      (with-path
        (move-to 14 7)
        (line-to 20 12)
        (move-to 19 11)
        (line-to 20 10)
        (move-to 11 10)
        (line-to 14 13))
      stroke
      (stroke-style "#4c637e") ;; darker crack
      (with-path
        (move-to 13 7)
        (line-to 16 9)
        (move-to 14 8)
        (line-to 11 11)
        (line-to 9 11)
        (move-to 12 10)
        (line-to 13 11))
      (stroke))
))


(def ship-img
  (let [c (u/make-canvas )]))

(defn predraw-crystal [c]
  (let [cvs (u/make-canvas 32 32)]
    (doto (context cvs)
      (fill-style (.-color c))
      draw-crystals)
    cvs))

(defn cache-tiles [tiles func]
  (let [cache (reduce (fn [o t]
                        (doto o
                          (aset (.-id t) (func t))))
                      (js-obj) tiles)]
    #(aget cache (.-id %))))

(def pats
  (cache-tiles [gen/sea gen/lava gen/ground gen/glass]
               #(make-pat (.-color %))))

(def crystals
  (cache-tiles gen/crystal-types
               predraw-crystal))

(defn draw-pat [ctx lvl x y pat]
  (let [t (lvl x y)
        u (not (identical? t (lvl x (dec y))))
        d (not (identical? t (lvl x (inc y))))
        l (not (identical? t (lvl (dec x) y)))
        r (not (identical? t (lvl (inc x) y)))]
    (doto ctx
      (draw-image pat (* 16 (if l 0 1)) (* 16 (if u 0 1)) 16 16 0 0 16 16)
      (draw-image pat (* 16 (if r 2 1)) (* 16 (if u 0 1)) 16 16 16 0 16 16)
      (draw-image pat (* 16 (if l 0 1)) (* 16 (if d 2 1)) 16 16 0 16 16 16)
      (draw-image pat (* 16 (if r 2 1)) (* 16 (if d 2 1)) 16 16 16 16 16 16))))

(defn render-level
  [cvs {:keys [sx sy items] :as lvl} xo yo]
  (let [ctx (context cvs)
        cxoff (mod xo 32)
        cyoff (mod yo 32)
        lxoff (Math/floor (/ xo 32))
        lyoff (Math/floor (/ yo 32))
        shippos (atom false)
        is (keys items)]
    (clear cvs "gray")
    (saving ctx
      (dotimes [ly (Math/ceil (/ (+ cvs.height cyoff) 32))]
        (dotimes [lx (Math/ceil (/ (+ cvs.width cxoff) 32))]
          (let [x (+ lx lxoff)
                y (+ ly lyoff)
                tile (lvl x y)
                xx (- (* lx 32) cxoff)
                yy (- (* ly 32) cyoff)]
            (when-let [p (pats tile)]
              (with-save ctx
                (translate xx yy)
                (draw-pat lvl x y p)))
            (when-let [c (crystals tile)]
              (.drawImage ctx c xx yy))
            (when (and (== x sx) (== y sy))
              (reset! shippos [xx yy]))
            (when (== :radar (.-name tile))
              (with-save ctx
                (translate (inc xx) (inc yy))
                (scale 3 3)
                (draw-radar)))
            (when (== :engine (.-name tile))
              (with-save ctx
                (translate xx (+ 16 yy))
                (fill-style "#ccc")
                (stroke-style "black")
                (line-width 0.3)
                (scale 2 2)
                (draw-engine true)
                fill stroke)))))
      (when-let [p @shippos]
        (with-save ctx
          (translate (nth @shippos 0) (nth @shippos 1))
          (draw-ship))))))

(def sd (vec (take 12 (repeatedly rand))))

(defn draw-arms [ctx l? r?]
  (doto ctx (rounded-rect -8 -2 16 5 1) fill stroke)
  (when (or l? r?)
    (with-save ctx
      (scale (if r? -1 1) 1)
      (rounded-rect -8 -4 4 7 1)
      fill stroke)))

(defn draw-player [ctx pos s?]
  (if s?
    (doto ctx
      (fill-style "white")
      (stroke-style "black")
      (rounded-rect -4 -4 8 6 1)
      fill stroke
      (stroke-style "white")
      (alpha (nth sd (mod pos 12)))
      (rounded-rect -6 -6 12 8 3)
      stroke)
    (let [arm (mod pos 4) l (== arm 1) r (== arm 3)]
      (doto ctx
        (fill-style "white")
        (stroke-style "black")
        (rounded-rect -5 0 10 5 1)
        fill stroke
        (with-save
          (draw-arms l r))
        fill stroke
        (rounded-rect -4 -4 8 6 1)
        fill stroke))))

(defn render-player
  [cvs {:keys [x y ex ey rot steps] :as player} xo yo s?]
  (with-save (context cvs)
    (style "white")
    (with-save
      (translate (- x xo) (- y yo))
      (rotate (+ (/ Math/PI 2) rot))
      (draw-player (Math/floor (/ steps 10)) s?))
    ;; (with-save
    ;;   (move-to (- x xo) (- y yo))
    ;;   (line-to (- ex xo) (- ey yo)))
    ;; (stroke)
    ))
;; cruft.
(def mm-cvs (u/make-canvas 128 128))

(defn cache-minimap [level]
  (let [ctx (context mm-cvs)]
    (dotimes [i 128]
      (dotimes [j 128]
        (doto ctx
;;          (prn (.-color (level i j)))
          (fill-style (.-color (level i j)))
          (fill-rect i j 1 1))))))

(def blink-atom (atom 0))
(defn draw-mm [ctx {:keys [player level need-items]}]
  (swap! blink-atom inc)
  (let [px (bit-shift-right player.x 5)
        py (bit-shift-right player.y 5)]
    (.drawImage ctx mm-cvs 0 0)
    (when (even? (bit-shift-right @blink-atom 3))
      (doto ctx
        (fill-style "white")
        (fill-rect (- px 0.5) (- py 0.5) 2 2))
      (when (= :engine (first need-items))
        (let [[ex ey] (get-in level [:item-posns :engine])]
          (doto ctx
            (fill-style "purple")
            (fill-rect (- ex 0.5) (- ey 0.5) 2 2))))
      )
    ))


(defn draw-health [ctx h]
  (with-save ctx
    (line-join :round)
    (line-cap :round)
    (stroke-style "black")
    (alpha 1)
    (scale 5 5)
    ;; (translate 1 5)
    (line-width 0.3)
    (fill-style "lightslategray")
    (fill-rect 2 5.5 15 2.2)
    (fill-style "#63cd27")
    (fill-rect 2 5.5 (* (/ h 100) 15) 2.2)
    (stroke-rect 2 5.5 15 2.2)
    (fill-style "red")
    (with-path
      (move-to 2 5.5)
      ;; (line-to 4 5)
      ;; (quad-to 3 3 4 5)
      (bezier-to 3 4 5 5 2 8)
      ;; (line-to 2 8)
      ;; (line-to 0 5)
      ;; (line-to 2 5)
      ;; (quad-to 1 3 2 5)
      (bezier-to -1 5 1 4 2 5.5))
    stroke fill
    ))

(defn print-data
  [cvs {:keys [player level xo yo need-items] :as g}]
  (let [ctx (context cvs)]
   (with-save ctx
     (fill-style "navy")
     (stroke-style "white")
     (line-width 2)
     (alpha 0.7)
     (rounded-rect 5 5 150 300 3)
     fill stroke
     (font "10px monospace")
     (fill-style "white")
     (fill-text (str "X: " (/ (Math/floor (* 100 (/ player.x 32))) 100))
                15 25)
     (fill-text (str "Y: " (/ (Math/floor (* 100 (/ player.y 32))) 100))
                15 40)
     (with-save
       (translate 15 25)
       (draw-health player.health))
     (do ;; hack
       ;; though, might make for a helpful macro
       (when (contains? player.items :radar)
         (doto ctx
           (translate 15 90)
           (draw-mm g)))
       (when (and ld23.game/found-crystals (pos? @ld23.game/found-crystals))
         (doto ctx
;           (translate 15 250)
           (fill-text (str "Crystals: " @ld23.game/found-crystals)
                15 200)))))))

(defn render [cvs {:keys [player level xo yo] :as g}]
  (let [ctx (context cvs)]
    (saving ctx
            (render-level cvs level xo yo))
    (saving ctx
            (render-player cvs player xo yo (ld23.game/submerged? g)))
    (saving ctx
            (print-data cvs g))))
