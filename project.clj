(defproject ld23 "0.1.0-SNAPSHOT"
  :description "Entry for Ludum Dare 23"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [crate "0.1.0-alpha3"]

                 ]
  :dev-dependencies [[lein-cljsbuild "0.2.1"]]
  :extra-classpath-dirs ["checkouts/clojurescript/src/clj"
                         "checkouts/clojurescript/src/cljs"]
  :cljsbuild {:builds {:dev {:source-path "src"
                             :compiler {:optimizations :whitespace
                                        :pretty-print true
                                        :static-fns true
                                        :output-to "public/js/main.js"}}
                       :simple {:source-path "src"
                                :compiler {:optimizations :simple
                                           :pretty-print true
                                           :static-fns true
                                           :output-to "public/js/main.js"}}
                       :prod {:source-path "src"
                              :compiler {:optimizations :advanced
                                         :static-fns true
                                         :output-to "public/js/mainadv.js"}}}})
