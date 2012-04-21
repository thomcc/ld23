(ns ld23.utils)


(defn get-elem [e]
  (.getElementById js/document (name e)))

(defn set-html [el h]
  (set! (.-innerHTML el) h))