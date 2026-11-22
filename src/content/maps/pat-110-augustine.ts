import type { MapSpec } from "map-widget/spec";

/**
 * PAT 110: Augustine's journeys, 354–430, following the Confessions, Possidius, and the
 * outline given on "A Life in Outline" (Lesson I), where the whole map is placed; chapter 2
 * is placed again on "Leaving Carthage" (Lesson III). Years follow the lesson; months are
 * approximate. Cassiciacum is placed at Cassago Brianza, the usual identification.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Augustine's Journeys, 354–430",
  summary: "From Thagaste to Carthage, Rome, and Milan, the conversion and the death of Monica at Ostia, and the return to Africa and Hippo.",
  start: "354-06",
  end: "431",
  detail: "continent",
  playSeconds: 150,
  trails: "fade",
  view: { center: [10.5, 40.5], zoom: 4.6 },
  sides: [
    { id: "augustine", name: "Augustine", color: "#1c7ed6" },
    { id: "monica", name: "Monica", color: "#c2255c" },
  ],
  moves: [
    {
      name: "Augustine", side: "augustine", kind: "explorer",
      path: [
        { at: [7.95, 36.29], time: "365" }, { at: [7.99, 36.08], time: "366" }, { at: [7.99, 36.08], time: "369" },
        { at: [7.95, 36.29], time: "369.5" }, { at: [10.32, 36.85], time: "371" }, { at: [10.32, 36.85], time: "375" },
        { at: [7.95, 36.29], time: "375.5" }, { at: [10.32, 36.85], time: "376.5" }, { at: [10.32, 36.85], time: "383.4" },
      ],
    },
    { name: "Augustine sails for Rome", side: "augustine", kind: "ship", bySea: true, path: [{ at: [10.32, 36.85], time: "383.4" }, { at: [12.29, 41.74], time: "383.55" }] },
    {
      name: "Augustine", side: "augustine", kind: "explorer",
      path: [
        { at: [12.29, 41.74], time: "383.55" }, { at: "Rome", time: "383.6" }, { at: "Rome", time: "384.7" },
        { at: "Milan", time: "384.85" }, { at: "Milan", time: "386.7" }, { at: [9.29, 45.73], time: "386.72" },
        { at: [9.29, 45.73], time: "387.15" }, { at: "Milan", time: "387.2" }, { at: "Milan", time: "387.4" },
        { at: [12.29, 41.74], time: "387.75" }, { at: "Rome", time: "387.9" }, { at: "Rome", time: "388.45" },
        { at: [12.29, 41.74], time: "388.5" },
      ],
    },
    { name: "Home to Africa", side: "augustine", kind: "ship", bySea: true, path: [{ at: [12.29, 41.74], time: "388.5" }, { at: [10.32, 36.85], time: "388.65" }] },
    {
      name: "Augustine", side: "augustine", kind: "explorer",
      path: [{ at: [10.32, 36.85], time: "388.65" }, { at: [7.95, 36.29], time: "388.8" }, { at: [7.95, 36.29], time: "391" }, { at: [7.75, 36.88], time: "391.2" }],
    },
    { name: "Monica", side: "monica", kind: "explorer", path: [{ at: [7.95, 36.29], time: "384.9" }, { at: [10.32, 36.85], time: "385.0" }] },
    { name: "Monica sails to Italy", side: "monica", kind: "ship", bySea: true, path: [{ at: [10.32, 36.85], time: "385.0" }, { at: [12.29, 41.74], time: "385.15" }] },
    { name: "Monica", side: "monica", kind: "explorer", path: [{ at: [12.29, 41.74], time: "385.15" }, { at: "Milan", time: "385.3" }, { at: "Milan", time: "387.4" }, { at: [12.29, 41.74], time: "387.75" }] },
  ],
  events: [
    { title: "Thagaste", time: "354-11-13", at: [7.95, 36.29], kind: "note", side: "augustine", until: "431", text: "Augustine is born in a small town of Numidia; his mother is Monica, his father Patricius." },
    { title: "Carthage", time: "371", at: [10.32, 36.85], kind: "note", side: "augustine", until: "431", text: "Student of rhetoric: the Hortensius in 373, the Manichees, a partner and a son." },
    { title: "Rome", time: "383.6", at: "Rome", kind: "note", side: "augustine", until: "431", text: "He slips away from Monica by night and sails to Rome, where he falls ill and his students do not pay." },
    { title: "Milan", time: "384.85", at: "Milan", kind: "note", side: "augustine", until: "431", text: "Public teacher of rhetoric at the court; the sermons of Ambrose." },
    { title: "The garden", time: "386.6", at: [9.2, 45.47], kind: "note", side: "augustine", until: "431", text: "\"Take up and read\": the conversion, in the summer of 386." },
    { title: "Cassiciacum", time: "386.72", at: [9.29, 45.73], kind: "note", side: "augustine", until: "431", text: "Months at a country estate near Lake Como, writing dialogues with friends." },
    { title: "Baptism", time: "387.3", at: [9.18, 45.46], kind: "note", side: "augustine", until: "431", text: "Ambrose baptizes Augustine, Alypius, and Adeodatus at Easter." },
    { title: "Ostia", time: "387.8", at: [12.29, 41.74], kind: "note", side: "monica", until: "431", text: "The shared vision at the window; Monica dies on the way home." },
    { title: "Hippo", time: "391.2", at: [7.75, 36.88], kind: "note", side: "augustine", until: "431", text: "Pressed into the priesthood; bishop by about 396, and the Confessions soon after." },
    { title: "Rome sacked", time: "410.65", at: "Rome", kind: "disaster", until: "431", text: "Alaric's Goths sack the city, a shock that prompts The City of God (413–426)." },
    { title: "Death at Hippo", time: "430.65", at: [7.75, 36.88], kind: "note", side: "augustine", until: "431", text: "Augustine dies as the Vandals besiege the city." },
  ],
  labels: [
    { text: "Numidia", at: [6.6, 35.6], size: "small" },
    { text: "Italy", at: [13.3, 42.6], size: "small" },
    { text: "Mediterranean", at: [9.5, 39.0], size: "small" },
  ],
  story: [
    {
      title: "Thagaste and Carthage", time: "354-06", until: "383.3", view: { center: [8.8, 36.5], zoom: 6.6 },
      text: "Born in **Thagaste**, schooled at nearby **Madauros**, Augustine goes to **Carthage** to study and teach rhetoric.",
    },
    {
      title: "Rome and Milan", time: "383.3", until: "387.0", view: { center: [10.8, 41.3], zoom: 4.9 },
      text: "He sails secretly for **Rome**, then wins the post at **Milan**. Watch **Monica** follow him across the sea; the conversion comes in a Milan garden, and the autumn at **Cassiciacum**.",
    },
    {
      title: "Baptism, Ostia, and home", time: "387.0", until: "392", view: { center: [10.5, 40.5], zoom: 4.7 },
      text: "Baptized at Easter in Milan, Augustine heads south. At **Ostia** Monica dies; a year later he sails home to Thagaste, and in 391 is made a priest at **Hippo**.",
    },
    {
      title: "Bishop of Hippo", time: "392", view: { center: [10.5, 39.5], zoom: 4.5 },
      text: "Nearly forty years at **Hippo**: the **sack of Rome** in 410 prompts The City of God, and he dies in 430 with the Vandals at the gates.",
    },
  ],
  sources: [
    "Augustine, Confessions, books 1–9",
    "Possidius, Life of Augustine",
    "Peter Brown, Augustine of Hippo: A Biography (new ed., 2000)",
    "Years follow the lesson; months are approximate.",
  ],
};

export default map;
