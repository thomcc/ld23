(ns ld23.screen)

(defn context [cvs] (.getContext cvs "2d"))

(defn fill-style [ctx col] (set! (.-fillStyle ctx) col))
(defn fill-rect [ctx x y w h] (.fillRect ctx x y w h))

(defn clear [cvs] (.clearRect (context cvs) cvs.width cvs.height))


(defn render [cvs]
  (doto (context cvs)
    (fill-style "black")
    (fill-rect 0 0 cvs.width cvs.height)
    ))
