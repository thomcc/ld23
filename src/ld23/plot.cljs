(ns ld23.plot
  (:use-macros [crate.macros :only [defpartial]]))

(def journal-entry (atom (+ 4000 (rand-int 100))))

(defn next-entry []
  (swap! journal-entry inc)
  @journal-entry)

(defpartial message [& text]
  [:div.entry
   (cons [:h4 (str "Journal entry " (next-entry))]
         (map (fn [t] (if (string? t) [:p t] t))
              text))])



(def crashed
  (message
   "My name is is VQ-18J. I research small planetoids."
   [:p "Current subject: " [:span.planet "Minutiae Prime"]]
   "An interesting due to the abundant hydrocarbons present in the seas on
    its surface. Indication of life?"
   "Unimportant now. Underestimated gravitational pull, shipwrecked.
    Hull breached, starboard engine detached, insufficient crystal fulminate
    to power engines. Radar is missing."
   "Probable best course of action:"
   [:p "Locate my " [:span.item "radar."]
    " It has to be around here somewhere..."]))

(def got-radar
  (message
   [:p "I have located my radar, and as luck would have it, I found my blaster
    with it.  I can use my blaster with the " [:span.key "space"]] " bar."
   "I should be able to use this to seek out the items I need to repair my
    ship and escape."
   [:p "I should try to find my ships "
    [:span.item "starboard engine"] " next."]))

(def got-engine
  (message
   "I have recovered the engine.  The hard part seems to be over."
   "Even with this, my ship won't be space-worthy if I don't do
   something about that crack in the view-port."
   [:p "If only I had some " [:span.item "glass-like substance"]
    ", then I might be able to repair the viewport using my blaster"]))

(def got-sand
  (message
   "I have taken some of the blue sand present on the surface of the planet.
    I was able to use it to make a temporary fix to the hull of my ship."
   "Now all that remains is fuel for the engine"
   [:p "Preliminary scans of the planet showed that there was fulminate
        present in the orange crystals. " [:span.item "10 orange crystals"]
    " should be enough for me to get off this rock for good."]))

(def upset-locals
  (message
   "For whatever reason, the native denizens of this planet did not take kindly
    to my destruction of the crystals. They have risen out of the sea, and
    wish to kill me!"
   [:p " I still need to collect "
    [:span.item "5 more crystals"] " and to get back to my ship!"]))

(def win
  (message
   "My name is is VQ-18J. I research small planetoids."
   [:p "On my last expedition I crashed on " [:span.planet "Minutia Prime"]]
   "Overcoming great odds, I was able to repair my ship, and escape that
    hell-hole."))
