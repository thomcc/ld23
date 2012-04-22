(ns ld23.screen
  (:use [ld23.gen :only [tile-colors crystal?]])
  (:require [ld23.utils :as u]
            [ld23.gen :as gen])
  (:use-macros [ld23.macros :only [with-path with-save saving]]))

(defn context [cvs] (.getContext cvs "2d"))

(defn fill-style [ctx color]
  (set! ctx.fillStyle color))

(defn stroke-style [ctx color]
  (set! ctx.strokeStyle color))

(defn style [ctx color]
  (doto ctx
    (fill-style color)
    (stroke-style color)))

(defn set-font [ctx font]
  (set! ctx.font font))

(defn line-width [ctx wid]
  (set! ctx.lineWidth wid))

(defn fill-rect [ctx x y w h]
  (.fillRect ctx x y w h))

(defn clear-rect [ctx x y w h]
  (.clearRect ctx x y w h))
(defn rect [ctx x y w h]
  (.rect ctx x y w h))
(defn move-to [ctx x y]
  (.moveTo ctx x y))

(defn line-to [ctx x y]
  (.lineTo ctx x y))

(defn line-cap [ctx which]
  (set! ctx.lineCap (u/ensure-str which)))

(defn line-join [ctx which]
  (set! ctx.lineJoin (u/ensure-str which)))

(defn miter-limit [ctx lim]
  (set! ctx.miterLimit lim))

(defn quad-to [ctx x0 y0 x1 y1]
  (.quadraticCurveTo ctx x0 y0 x1 y1))

(defn bezier-to [ctx x0 y0 x1 y1 x2 y2]
  (.bezierCurveTo ctx x0 y0 x1 y1 x2 y2))

(defn stroke [ctx]
  (.stroke ctx))

(defn fill [ctx]
  (.fill ctx))

(defn begin-path [ctx]
  (.beginPath ctx))

(defn close-path [ctx]
  (.closePath ctx))

(defn clip [ctx]
  (.clip ctx))

(defn translate [ctx x y]
  (.translate ctx x y))

(defn rotate [ctx r]
  (.rotate ctx r))

(defn scale [ctx x y]
  (.scale ctx x y))

(defn linear-gradient [ctx x0 y0 x1 y1]
  (.createLinearGradient ctx x0 y0 x1 y1))

(defn radial-gradient [ctx x0 y0 r0 x1 y1 r1]
  (.createRadialGradient ctx x0 y0 r0 x1 y1 r1))

(defn pattern [ctx img rep]
  (.createPattern ctx img (u/ensure-str rep)))

(defn add-stop [grad off col]
  (.addColorStop grad off col))

(defn make-grad [ctx x0 y0 x1 y1 c1 c2]
  (doto (linear-gradient ctx x0 y0 x1 y1)
    (add-stop 0 c1)
    (add-stop 1 c2)))

(defn clear [cvs col]
  (doto (context cvs)
    (fill-style col)
    (fill-rect 0 0 cvs.width cvs.height)))

(defn rounded-rect [ctx x y w h r]
  (with-path ctx
    (move-to x (+ y r))
    (line-to x (+ y h (- r)))
    (quad-to x (+ y h) (+ x r) (+ y h))
    (line-to (+ x w (- r)) (+ y h))
    (quad-to (+ x w) (+ y h) (+ x w) (+ y h (- r)))
    (line-to (+ x w) (+ y r))
    (quad-to (+ x w) y (+ x w (- r)) y)
    (line-to (+ x r) y)
    (quad-to x y x (+ y r))))

(def player-img)

(def tiles)

(defn cache-images [icanv]
  (set! tiles icanv)
  (let [plc (.createElement js/document "canvas")]
    (set! plc.height (* 16 16))
    (set! plc.width 64)
    (let [ctx (.getContext plc "2d")]
      (dotimes [t 4]
        (let [ipix (.. icanv (getContext "2d")
                       (getImageData (* t 16) 64 16 16)
                       -data)]
         (dotimes [d 16]
           (let [dpix (.createImageData ctx 16 16)
                 pix (.-data dpix)
                 dir (* d Math/PI 2 (/ 16))
                 cd (Math/cos dir)
                 sd (Math/sin dir)]
             (dotimes [j 16]
               (dotimes [i 16]
                 (let [xpix (Math/floor (+ (* cd (- i 8))
                                           (* sd (- j 8))
                                           (+ 8.5)))
                       ypix (Math/floor (+ (* cd (- j 8))
                                           (* sd (- 8 i))
                                           (+ 8.5)))
                       ost (* 4 (+ xpix (* ypix 16)))
                       pst (* 4 (+ i (* j 16)))]
                   (if (and (< -1 xpix 16) (< -1 ypix 16))
                     (do (aset pix (+ 0 pst) (aget ipix (+ 0 ost)))
                         (aset pix (+ 1 pst) (aget ipix (+ 1 ost)))
                         (aset pix (+ 2 pst) (aget ipix (+ 2 ost))))
                     (do (aset pix (+ 0 pst) 0)
                         (aset pix (+ 1 pst) 0)
                         (aset pix (+ 2 pst) 0))))))
             (.putImageData ctx dpix (* t 16) (* d 16))))))
      (set! player-img plc))))

(defn draw-crystals [ctx ccp]
  (.drawImage ctx tiles (* ccp 16) 24 16 16 0 0 16 16))

(def crystal-pos
  {gen/pink-crystal 0
   gen/green-crystal 1 gen/orange-crystal 2 gen/blue-crystal 3})

(defn make-draw [ctx ox oy]
  (fn [dx dy sx sy]
    (.drawImage ctx tiles sx sy 8 8 (- dx ox) (- dy oy) 8 8)))

(defn draw-floor [draw x y off]
  (draw (* x 16) (* y 16) (* 8 0 ;; (rand-int 9)
                             ) (* 8 off))
  (draw (+ 8 (* x 16)) (* y 16) (* 8 0 ;; (rand-int 9)
                                   ) (* 8 off))
  (draw (* x 16) (+ 8 (* y 16)) (* 8 0 ;; (rand-int 9)
                                   ) (* 8 off))
  (draw (+ 8 (* x 16)) (+ 8 (* y 16)) (* 8 0 ;; (rand-int 9)
                                         ) (* 8 off)))

(defn render-fluid [draw lvl x y]
  (let [t (lvl x y)]
    (let [u (not= t (lvl x (dec y)))
          d (not= t (lvl x (inc y)))
          l (not= t (lvl (dec x) y))
          r (not= t (lvl (inc x) y))
          l? (= t gen/lava)
          off (if l? (* 9 8) (* 12 8))]
      (if (not (or u l))
        (draw (* x 16) (* y 16) (* 8 0 ;; (rand-int 9)
                                   ) (if l? 8 16))
        (draw (* x 16) (* y 16) (+ off (* 8 (if l 0 1)))
              (* 8 (if u 0 1))))
      (if (not (or u r))
        (draw (+ 8 (* x 16)) (* y 16) (* 8 0 ;; (rand-int 9)
                                         ) (if l? 8 16))
        (draw (+ 8 (* x 16)) (* y 16) (+ off (* 8 (if r 2 1)))
              (* 8 (if u 0 1))))
      (if (not (or d l))
        (draw (* x 16) (+ 8 (* y 16)) (* 8 0 ;; (rand-int 9)
                                         ) (if l? 8 16))
        (draw (* x 16) (+ 8 (* y 16)) (+ off (* 8 (if l 0 1)))
              (* 8 (if d 2 1))))
      (if (not (or d r))
        (draw (+ 8 (* x 16)) (+ 8 (* y 16)) (* 8 0 ;; (rand-int 9)
                                               ) (if l? 8 16))
        (draw (+ 8 (* x 16)) (+ 8 (* y 16)) (+ off (* 8 (if r 2 1)))
              (* 8 (if d 2 1)))))))

(defn render-level
  [cvs {:keys [img] :as lvl} xo yo]
  (let [ctx (context cvs)
        cxoff (mod xo 16)
        cyoff (mod yo 16)
        lxoff (Math/floor (/ xo 16))
        lyoff (Math/floor (/ yo 16))]
    (saving ctx
      (dotimes [ly (Math/ceil (/ (+ cvs.height cyoff) 16))]
        (dotimes [lx (Math/ceil (/ (+ cvs.width cxoff) 16))]
          (let [x (+ lx lxoff)
                y (+ ly lyoff)
                tile (lvl x y)
                xx (- (* lx 16) cxoff)
                yy (- (* ly 16) cyoff)]
            (cond (.-crystal? tile)
                  (do (draw-floor (make-draw ctx xo yo) x y 0)
                      (.drawImage ctx tiles
                                  (* (crystal-pos tile) 16)
                                  24 16 16 xx yy 16 16))
                  (.-liq? tile) (render-fluid (make-draw ctx xo yo) lvl x y)
                  :else
                  (draw-floor (make-draw ctx xo yo) x y
                                    (if (= gen/glass tile) 0 10)))))))))


(defn render-player
  [cvs {:keys [x y ex ey rot tick] :as player} xo yo]
  (let [dir (bit-and (Math/floor (+ 20.5 (* 16 (/ rot (* Math/PI 2))))) 16)]
    (.drawImage (context cvs)
                player-img (* 16 (mod tick 4)) (* 16 dir) 16 16
                (- x xo) (- y yo) 16 16)))

(defn render [cvs {:keys [player level xo yo]}]
  (doto cvs
    (render-level level xo yo)
    (render-player player xo yo)))