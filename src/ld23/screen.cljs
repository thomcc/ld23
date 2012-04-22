(ns ld23.screen
  (:use [ld23.gen :only [tile-colors crystal?]])
  (:require [ld23.utils :as u])
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

(defn set-font [ctx font]
  (set! ctx.font font))

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

(defn quad-to [ctx x0 y0 x1 y1]
  (.quadraticCurveTo ctx x0 y0 x1 y1))

(defn bezier-to [ctx x0 y0 x1 y1 x2 y2]
  (.bezierCurveTo ctx x0 y0 x1 y1 x2 y2))

(defn stroke [ctx]
  (.stroke ctx))

(defn fill [ctx]
  (.fill ctx))

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

;; todo: revisit:
;; (defn prerender-level [{:keys [w h] :as lvl}]
;;   (let [c (.createElement js/document "canvas")]
;;     (set! c.width (* w 32))
;;     (set! c.height (* h 32))
;;     (let [ctx (context c)]
;;       (dotimes [j h]
;;         (dotimes [i w]
;;           (doto ctx
;;             (fill-style (nth tile-colors (lvl i j)))
;;             (fill-rect (* i 1) (* j 1) 1 1)))))
;;     c))

(defn draw-crystals [ctx]
  (with-save ctx
    (with-path ;; outline
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
    fill stroke
    (with-path ;; inside/details
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

(defn render-level
  [cvs {:keys [img] :as lvl} xo yo]
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
            (if (.-crystal? tile)
              (with-save ctx
                (translate xx yy)

                (fill-style (.-color tile)
                            ;;(nth tile-colors tile)
                            )
                draw-crystals)

              (doto ctx

                (fill-style (.-color tile))
                (fill-rect xx yy 32 32)))))))))

;; (defn render-connected [ctx lvl x y]
;;   (let [t (lvl x y)
;;         c (.-color t)
;;         ut (lvl x (dec y))
;;         uc (.-color ut)
;;         u (not (identical? t ut))
;;         dt (lvl x (inc y))
;;         dc (.-color dt)
;;         d (not (identical? t dt))
;;         lt (lvl (dec x) y)
;;         lc (.-color lt)
;;         l (not (identical? t lt))
;;         rt (lvl (inc x) y)
;;         rc (.-color rt)
;;         r (not (identical? t rt))]
;;     (if (not (or u l))
;;       (doto ctx
;;         (fill-style c)
;;         (fill-rect (* x 32) (* y 32) 16 16))
;;       (let [oc (if u uc lc)]
;;         (fill-style ctx oc)
;;         (rect ctx (* x 32) (* y 32) 16 16)
;;         c
;;         (doto ctx
;;           (fill-style oc)
;;           )

;;       (draw (* x 32) (* y 32) (if l -1 0) (if u -1 0)))
;;     (if (not (or u r))

;;       (draw (+ 16 (* x 32)) (* y 32) (if r 1 0) (if u -1 0)))
;;     (if (not (or d l))

;;       (draw (* x 32) (+ 16 (* y 32)) (if l -1 0) (if d 1 0)))
;;     (if (not (or d r))

;;       (draw (+ 16 (* x 32)) (+ 16 (* y 32)) (if r 1 0) (if d 1 0)))))

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




(defn draw-player [ctx pos]
  (doto ctx
    (fill-style "white")
    (stroke-style "black")
    (rounded-rect -5 0 10 5 1)
    fill stroke
    (rounded-rect -8 -2 16 5 1)
    fill stroke
    (rounded-rect -4 -4 8 6 1)
    fill stroke))

(defn render-player
  [cvs {:keys [x y ex ey rot tick] :as player} xo yo]
  (with-save (context cvs)
    (style "white")
    (with-save
      (translate (- x xo) (- y yo))
      (rotate (+ (/ Math/PI 2) rot))
      (draw-player (mod tick 12)))
    (with-path
      (move-to (- x xo) (- y yo))
      (line-to (- ex xo) (- ey yo)))
    (stroke)))

(defn render [cvs {:keys [player level xo yo]}]
  (doto cvs
    (render-level level xo yo)
    (render-player player xo yo)))
