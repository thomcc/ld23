(ns ld23.core
  (:require [clojure.browser.repl :as repl]
            [crate.core :as crate])
  (:use-macros [crate.macros :only [defpartial]]))

(repl/connect "http://localhost:9000/repl")

(def debug? true)
