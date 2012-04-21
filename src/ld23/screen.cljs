(ns ld23.screen
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
(def level-colors ["black" "red" "blue" "green" "orange" "purple"])
(defn render-level
  [cvs {:keys [w h] :as lvl} xo yo]
  (let [ctx (context cvs)
        cxoff (mod xo 16)
        cyoff (mod yo 16)
        lxoff (Math/floor (/ xo 16))
        lyoff (Math/floor (/ yo 16))]
   (saving ctx
;;     (translate ctx cxoff cyoff)
     (dotimes [ly (Math/ceil (/ (+ cvs.height cyoff) 16))]
       (dotimes [lx (Math/ceil (/ (+ cvs.width cxoff) 16))]
         (doto ctx
           (fill-style (nth level-colors (lvl (+ lx lxoff) (+ ly lyoff))))
           (fill-rect (- (* lx 16) cxoff) (- (* ly 16) cyoff) 16 16)))))))

(defn render-player
  [cvs {:keys [x y ex ey rot a?] :as player} xo yo]
  (with-save (context cvs)
    (style "white")
;    (translate xo yo)
    (with-save
      (translate (- x xo) (- y yo))
      (rotate rot)
      (fill-style (if a? "black" "white"))
      (fill-rect -4 -10 8 20))
    (with-path
      (move-to (- x xo) (- y yo))
      (line-to (- ex xo) (- ey yo)))
    (stroke)))

(defn render [cvs {:keys [player level xo yo]}]
  (doto cvs
    (render-level level xo yo)
    (render-player player xo yo)))
