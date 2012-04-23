(ns ld23.screen
  (:use [ld23.gen :only [tile-colors crystal?]])
  (:require [ld23.utils :as u]
            [ld23.gen :as gen])
  (:use-macros [ld23.macros :only [with-path with-save saving]]))

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
      (font "15px PressStart"))
    (dotimes [i (count txt)]
      (let [line (nth txt i)
            x (/ (- cvs.width (text-width ctx line)) 2)
            y (+ (* 30 i) (/ (- cvs.height (* 30 (count txt))) 2))]
        (fill-text ctx line x y)))))

(defn make-pat [col]
  (let [c (.createElement js/document "canvas")]
    (set! c.width 48)
    (set! c.height 48)
    (doto (context c)
      (fill-style col)
      (stroke-style "black")

      ;; (line-cap "round")
      ;; (line-join "round")
      ;; (line-width 2)
      (with-path
        (move-to 16 0)

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

(defn predraw-crystal [c]
  (let [cvs (.createElement js/document "canvas")]
    (set! cvs.width 32)
    (set! cvs.height 32)
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
  [cvs {:keys [sx sy] :as lvl} xo yo]
  (let [ctx (context cvs)
        cxoff (mod xo 32)
        cyoff (mod yo 32)
        lxoff (Math/floor (/ xo 32))
        lyoff (Math/floor (/ yo 32))]
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
              (with-save ctx
                (translate xx yy)
                draw-ship))))))))


(defn draw-ship [ctx]
  (doto ctx
    (fill-style "#ccc")
    (stroke-style "black")
    (line-width 0.3)
    (with-path
      (move-to 16 0)
      (line-to 31 0)
      (quad-to 32 0 32 1)
      (line-to 32 15)
      (quad-to 32 16 31 16)
      (line-to 16 16)
      (quad-to 4 14 0 8)
      (quad-to 4 2 16 0))
    fill stroke
    (with-path
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
    fill stroke))

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
      (stroke-style "rgba(0,0,0)")
      (alpha (/ (nth sd (mod pos 12)) 10))
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
    (with-save
      (move-to (- x xo) (- y yo))
      (line-to (- ex xo) (- ey yo)))
    (stroke)))

(defn print-messages
  [cvs {:keys [player level xo yo] :as g}]
  (with-save (context cvs)
    (fill-style "navy")
    (stroke-style "white")
    (line-width 2)
    (alpha 0.7)
    (rounded-rect 5 5 150 30 3)
    fill stroke
    (font "15px Press Start 2P")
    (fill-style "white")
    (fill-text (str "PX: " (/ (Math/floor (* 100 (/ player.x 32))) 100) "  "
                    "PY: " (/ (Math/floor (* 100 (/ player.y 32))) 100))
               15 25)))



(defn render [cvs {:keys [player level xo yo] :as g}]
  (let [ctx (context cvs)]
    (saving ctx
            (render-level cvs level xo yo))
    (saving ctx
            (render-player cvs player xo yo (ld23.game/submerged? g)))
    (saving ctx
            (print-messages cvs g))))
