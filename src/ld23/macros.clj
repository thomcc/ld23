(ns ld23.macros)

(defmacro with-save [c & forms]
  `(doto ~c
     (.save)
     ~@forms
     (.restore)))

(defmacro saving [c & forms]
  `(let [c# ~c]
     (.save c#)
     ~@forms
     (.restore c#)))

(defmacro with-path [c & forms]
  `(doto ~c
     (.beginPath)
     ~@forms
     (.closePath)))