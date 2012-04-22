(ns ld23.utils)


(defn get-elem [e]
  (.getElementById js/document (name e)))

(defn set-html [el h]
  (set! (.-innerHTML el) h))

(defn ensure-str [s]
  (cond (string? s) s
        (keyword? s) (name s)
        :else (str s)))

(defn array-2d [w h func]
  (let [a (js/Array. h)]
    (dotimes [j h]
      (let [row (js/Array. w)]
        (aset a j row)
        (dotimes [i w]
          (aset row i (func i j)))))
    a))