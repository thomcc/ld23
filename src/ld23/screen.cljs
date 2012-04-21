(ns ld23.screen
  (:use-macros [ld23.macros :only [with-path with-save]]))

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

(defn render [cvs {{:keys [x y ex ey rot]} :player xo :xo yo :yo}]
  (doto (context cvs)
    (fill-style "black")
    (fill-rect 0 0 cvs.width cvs.height)
    (with-save
      (style "white")
      (translate xo yo)
      (with-save
        (translate x y)
        (rotate rot)
        (fill-rect -4 -4 8 8))
      (with-path
        (move-to x y)
        (line-to ex ey))
      (stroke))))
