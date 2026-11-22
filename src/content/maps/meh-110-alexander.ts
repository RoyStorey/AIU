import type { MapSpec } from "map-widget/spec";

/**
 * MEH 110, Lesson V: Alexander's campaign against Persia, 334–323 BCE, placed on "Alexander
 * and the End of an Age". The route follows Arrian in outline; months are approximate, and
 * the long campaigns in Central Asia and India, which the lesson summarizes in a sentence,
 * are drawn with only a few waypoints and left unnarrated.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Alexander and the Fall of Persia, 334–323 BCE",
  summary: "From the Hellespont to Granicus, Issus, Tyre, Egypt, Gaugamela, Babylon, and Persepolis, and back to Babylon to die.",
  start: "335 BCE",
  end: "322 BCE",
  detail: "continent",
  playSeconds: 130,
  trails: "full",
  view: { center: [45, 33], zoom: 3.4 },
  sides: [
    { id: "macedon", name: "Alexander", color: "#1c7ed6" },
    { id: "persia", name: "Achaemenid Persia", color: "#c92a2a" },
  ],
  moves: [
    {
      name: "Alexander", side: "macedon", kind: "army",
      path: [
        { at: [22.52, 40.76], time: "Mar 334 BCE" }, { at: [26.4, 40.2], time: "Apr 334 BCE" }, { at: "Granicus", time: "May 334 BCE" },
        { at: [28.04, 38.49], time: "Jun 334 BCE" }, { at: "Miletus", time: "Jul 334 BCE" }, { at: [27.42, 37.04], time: "Oct 334 BCE" },
        { at: [30.7, 36.9], time: "Jan 333 BCE" }, { at: [31.95, 39.65], time: "Apr 333 BCE" }, { at: [34.89, 36.92], time: "Aug 333 BCE" },
        { at: "Issus", time: "Nov 333 BCE" }, { at: "Tyre", time: "Jan 332 BCE" }, { at: "Tyre", time: "Jul 332 BCE" },
        { at: [34.45, 31.5], time: "Oct 332 BCE" }, { at: [31.25, 29.85], time: "Nov 332 BCE" }, { at: [29.92, 31.2], time: "Jan 331 BCE" },
        { at: [25.52, 29.2], time: "Feb 331 BCE" }, { at: [31.25, 29.85], time: "Apr 331 BCE" }, { at: "Tyre", time: "Jun 331 BCE" },
        { at: [38.3, 35.95], time: "Aug 331 BCE" }, { at: "Gaugamela", time: "Oct 331 BCE" }, { at: "Babylon", time: "Oct 331 BCE" },
        { at: "Susa", time: "Dec 331 BCE" }, { at: "Persepolis", time: "Jan 330 BCE" }, { at: "Persepolis", time: "May 330 BCE" },
        { at: [48.5, 34.8], time: "Jun 330 BCE" }, { at: [54.4, 36.2], time: "Jul 330 BCE" }, { at: [66.9, 36.75], time: "329 BCE" },
        { at: [66.97, 39.65], time: "328 BCE" }, { at: [66.9, 36.75], time: "327 BCE" }, { at: [72.24, 33.89], time: "Mar 326 BCE" },
        { at: [73.3, 32.9], time: "May 326 BCE" }, { at: [75.0, 31.6], time: "Sep 326 BCE" }, { at: [68.4, 25.4], time: "Jul 325 BCE" },
        { at: [60.9, 26.3], time: "Nov 325 BCE" }, { at: "Persepolis", time: "Jan 324 BCE" }, { at: "Susa", time: "Mar 324 BCE" },
        { at: [48.5, 34.8], time: "Oct 324 BCE" }, { at: "Babylon", time: "Mar 323 BCE" },
      ],
    },
    {
      name: "Darius III", side: "persia", kind: "army",
      path: [
        { at: "Babylon", time: "Jun 333 BCE" }, { at: "Issus", time: "Nov 333 BCE" }, { at: "Babylon", time: "Feb 332 BCE" },
        { at: "Gaugamela", time: "Sep 331 BCE" }, { at: [48.5, 34.8], time: "Nov 331 BCE" }, { at: [48.5, 34.8], time: "May 330 BCE" },
        { at: [54.4, 36.2], time: "Jul 330 BCE" },
      ],
    },
  ],
  events: [
    { title: "Granicus", time: "May 334 BCE", at: "Granicus", kind: "battle", side: "macedon", until: "322 BCE", text: "Alexander defeats the satraps of Anatolia." },
    { title: "Issus", time: "Nov 333 BCE", at: "Issus", kind: "battle", side: "macedon", until: "322 BCE", text: "Darius III flees, leaving his mother, wife, and children to be captured." },
    { title: "Tyre", time: "Jul 332 BCE", at: "Tyre", kind: "siege", side: "macedon", until: "322 BCE", text: "The island city falls after a seven-month siege." },
    { title: "Alexandria", time: "Apr 331 BCE", at: "Alexandria", kind: "founding", side: "macedon", until: "322 BCE", text: "Welcomed in Egypt and hailed as son of Amun at Siwa, Alexander founds his city." },
    { title: "Gaugamela", time: "Oct 331 BCE", at: "Gaugamela", kind: "battle", side: "macedon", until: "322 BCE", text: "The decisive battle, near the ruins of Nineveh. Darius flees east." },
    { title: "Babylon", time: "Oct 331 BCE", at: "Babylon", kind: "note", side: "macedon", until: "322 BCE", text: "The city surrenders; an astronomical diary records the battle and Alexander's entry." },
    { title: "Persepolis", time: "May 330 BCE", at: "Persepolis", kind: "disaster", side: "macedon", until: "322 BCE", text: "The palaces burn; ancient writers disagreed about why." },
    { title: "Death of Darius", time: "Jul 330 BCE", at: [54.4, 36.2], kind: "note", side: "persia", until: "322 BCE", text: "Murdered by his satrap Bessus; Alexander gives him a royal burial." },
    { title: "Hydaspes", time: "May 326 BCE", at: [73.3, 32.9], kind: "battle", side: "macedon", until: "322 BCE", text: "Victory in the Punjab; soon afterward the army refuses to go farther." },
    { title: "Death in Babylon", time: "Jun 323 BCE", at: [44.5, 32.4], kind: "note", side: "macedon", until: "322 BCE", text: "Alexander dies at thirty-two in the city he meant to make his capital." },
  ],
  labels: [
    { text: "Anatolia", at: [32.5, 38.6], size: "small" },
    { text: "Egypt", at: [29.5, 27], size: "small" },
    { text: "Mesopotamia", at: [43, 34.6], size: "small" },
    { text: "Bactria", at: [67.5, 37.5], size: "small" },
  ],
  story: [
    {
      title: "Into Asia", time: "335 BCE", until: "Dec 333 BCE", view: { center: [31, 38.3], zoom: 5.0 },
      text: "Alexander crosses the **Hellespont**, wins at the **Granicus**, and marches through Anatolia to meet **Darius** at **Issus**.",
    },
    {
      title: "Tyre and Egypt", time: "Dec 333 BCE", until: "Jul 331 BCE", view: { center: [32, 32], zoom: 5.0 },
      text: "South along the coast: the siege of **Tyre**, then **Egypt**, the oracle at Siwa, and the founding of **Alexandria**.",
    },
    {
      title: "Gaugamela and the Persian heartland", time: "Jul 331 BCE", until: "Aug 330 BCE", view: { center: [45, 33.5], zoom: 4.5 },
      text: "Across the Euphrates to **Gaugamela**, then **Babylon**, **Susa**, and **Persepolis**. Watch Darius flee east until he is killed.",
    },
    {
      title: "To India and back to Babylon", time: "Aug 330 BCE", view: { center: [56, 31], zoom: 3.5 },
      text: "Years of campaigning in Central Asia and the Punjab, the turn back at the Beas, the desert march home, and death at **Babylon** in 323.",
    },
  ],
  sources: [
    "Arrian, The Campaigns of Alexander",
    "A. B. Bosworth, Conquest and Empire: The Reign of Alexander the Great (1988)",
    "Pierre Briant, From Cyrus to Alexander (2002)",
    "Months are approximate; the eastern campaigns are drawn only in outline.",
  ],
};

export default map;
