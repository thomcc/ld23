(ns ld23.screen
  (:use [ld23.gen :only [tile-colors]])
  (:use-macros [ld23.macros :only [with-path with-save saving]]))

(defn context [cvs] (.getContext cvs "2d"))

(defn fill-style [ctx color]
  (set! ctx.fillStyle color))

(defn stroke-style [ctx color]
  (set! ctx.strokeStyle color))

(defn style [ctx color]
  (doto ctx (fill-style color) (stroke-style color)))

(defn set-font [ctx font]
  (set! ctx.font font))

(defn line-width [ctx wid]
  (set! ctx.lineWidth wid))

(defn fill-rect [ctx x y w h]
  (.fillRect ctx x y w h))

(defn clear-rect [ctx x y w h]
  (.clearRect ctx x y w h))

(defn move-to [ctx x y]
  (.moveTo ctx x y))

(defn line-to [ctx x y]
  (.lineTo ctx x y))

(defn quad-to [ctx x0 y0 x1 y1]
  (.quadraticCurveTo ctx x0 y0 x1 y1))

(defn stroke [ctx]
  (.stroke ctx))

(defn fill [ctx]
  (.fill ctx))

(defn begin-path [ctx]
  (.beginPath ctx))

(defn close-path [ctx]
  (.closePath ctx))

(defn translate [ctx x y]
  (.translate ctx x y))

(defn rotate [ctx r]
  (.rotate ctx r))

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


(defn prerender-level [{:keys [w h] :as lvl}]
  (let [c (.createElement js/document "canvas")]
    (set! c.width (* w 16))
    (set! c.height (* h 16))
    (let [ctx (context c)]
      (dotimes [j h]
        (dotimes [i w]
          (doto ctx
            (fill-style (nth tile-colors (lvl i j)))
            (fill-rect (* i 1) (* j 1) 1 1)))))
    c))

(defn render-level
  [cvs {:keys [img] :as lvl} xo yo]
  (let [ctx (context cvs)
        cxoff (mod xo 16)
        cyoff (mod yo 16)
        lxoff (Math/floor (/ xo 16))
        lyoff (Math/floor (/ yo 16))]
    (saving ctx
        (dotimes [ly (Math/ceil (/ (+ cvs.height cyoff) 16))]
          (dotimes [lx (Math/ceil (/ (+ cvs.width cxoff) 16))]
            (doto ctx
              (fill-style (nth tile-colors (lvl (+ lx lxoff) (+ ly lyoff))))
              (fill-rect (- (* lx 16) cxoff) (- (* ly 16) cyoff) 16 16)))))))
(defn draw-player [ctx]
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
  [cvs {:keys [x y ex ey rot a?] :as player} xo yo]
  (with-save (context cvs)
    (style "white")
    (with-save
      (translate (- x xo) (- y yo))
      (rotate (+ (/ Math/PI 2) rot))
      (draw-player ctx)
      ;; (fill-style (if a? "black" "white"))
      ;; (fill-rect -4 -10 8 20)
      )
    (with-path
      (move-to (- x xo) (- y yo))
      (line-to (- ex xo) (- ey yo)))
    (stroke)))

(defn render [cvs {:keys [player level xo yo]}]
  (doto cvs
    (render-level level xo yo)
    (render-player player xo yo)))
