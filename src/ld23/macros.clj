(ns ld23.macros)

(defmacro with-save [c & forms]
  `(doto ~c
     (.save)
     ~@forms
     (.restore)))

(defmacro with-path [c & forms]
  `(doto ~c
     (.beginPath)
     ~@forms
     (.closePath)))