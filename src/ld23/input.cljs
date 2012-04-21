(ns ld23.input)


(defrecord Input [ks mx my c?])


(defn new-input []
  (Input. #{} -1 -1 false))

(def get-key {38 :up, 40 :down, 37 :left, 39 :right ; arrow keys
              87 :up, 83 :down, 65 :left, 68 :right ; wasd
              27 :quit
              })

(defn on-key [input-atom handle]
  (fn [e]
    (.preventDefault e)
    (when-let [k (get-key (.-keyCode e))]
      (swap! input-atom update-in [:ks] handle k))))



(defn mousemove [ia canvas]
  (let [[t l] (loop [top 0, left 0, o canvas]
                (if (and o (not= "body" (.-tagName o)))
                  (recur (+ top (.-offsetTop o))
                         (+ left (.-offsetLeft o))
                         (.-offsetParent o))
                  [top left]))]
    (fn [e]
      (let [mx (+ (.-clientX e) (- l) (.-pageXOffset js/window))
            my (+ (.-clientY e) (- t) (.-pageYOffset js/window))]
        (swap! ia assoc :mx mx :my my)))))

(defn bind-events [input-atom canvas]
  (set! (.-onkeydown js/document) (on-key input-atom conj))
  (set! (.-onkeyup js/document) (on-key input-atom disj))
  (let [mm (mousemove input-atom canvas)]
    (doto canvas
      (.addEventListener "mousemove" mm)
      (.addEventListener "mousedown" #(do (swap! input-atom assoc :c? true)
                                          (mm %)))
      (.addEventListener "mouseup" #(do (swap! input-atom assoc :c? false)
                                        (mm %))))))
