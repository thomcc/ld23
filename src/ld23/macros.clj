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

(defmacro dogrid [bindings & body]
  (let [[i starti endi stepi, j startj endj stepj] bindings]
    `(let [startj# ~startj, endj# ~endj, stepj# ~stepj
           starti# ~starti, endi# ~endi, stepi# ~stepi]
       (loop [~j startj#]
         (when (< ~j endj#)
           (loop [~i starti#]
             (when (< ~i endi#)
               ~@body
               (recur (+ ~i stepi#))))
           (recur (+ ~j stepj#)))))))

(defmacro defregion [name & opts]
  `(do (def ~name (ld23.gen/region ~@opts))
       (swap! ld23.gen/regions conj ~name)))
