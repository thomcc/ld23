(ns ld23.game)


(defrecord Game [level player])
(defrecord Level [map w h])
(defrecord Player [x y rot])