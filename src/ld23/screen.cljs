(ns ld23.screen)

(defn context [cvs] (.getContext cvs "2d"))

(defn fill-style [ctx col] (set! (.-fillStyle ctx) col))
(defn fill-rect [ctx x y w h] (.fillRect ctx x y w h))

(defn clear [cvs] (.clearRect (context cvs) cvs.width cvs.height))


(defn render [cvs ticks]
  (let [w cvs.width
        h cvs.height
        t (/ ticks 10)
        x (* (+ (Math/cos t) 1) 0.5 w)
        y (* (+ (Math/sin t) 1) 0.5 h)]
    (clear cvs)
    (doto (context cvs)
      (fill-style "black")
      (fill-rect 0 0 w h)
      (fill-style "white")
      (fill-rect x y 10 10))))
