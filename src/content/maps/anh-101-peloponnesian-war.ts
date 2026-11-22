import type { MapSpec } from "map-widget/spec";

/**
 * ANH 101, Lesson V: the Peloponnesian War, 433–404 BCE, following Thucydides and
 * Xenophon as the lesson does. One chapter per page: 1 on "The Archidamian War", 2 on
 * "From Pylos to Melos", 3 on "The Sicilian Expedition", 4 on "The Fall of Athens". Only a
 * few movements are drawn (the first invasion of Attica, Brasidas's march, the Sicilian
 * fleets, Lysander); months are approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Peloponnesian War, 433–404 BCE",
  summary: "From Corcyra and the plague at Athens to Pylos, Melos, the Sicilian Expedition, and Aegospotami.",
  start: "434 BCE",
  end: "403 BCE",
  detail: "region",
  playSeconds: 160,
  trails: "fade",
  view: { center: [23, 38.5], zoom: 5.4 },
  sides: [
    { id: "athens", name: "Athens and its allies", color: "#1c7ed6" },
    { id: "sparta", name: "Sparta and its allies", color: "#c92a2a" },
  ],
  moves: [
    { name: "Archidamus", side: "sparta", kind: "army", path: [{ at: "Sparta", time: "Apr 431 BCE" }, { at: [22.99, 37.94], time: "May 431 BCE" }, { at: [23.54, 38.04], time: "Jun 431 BCE" }, { at: [23.73, 38.08], time: "Jun 431 BCE" }, { at: [23.73, 38.08], time: "Jul 431 BCE" }, { at: "Sparta", time: "Aug 431 BCE" }] },
    { name: "Brasidas", side: "sparta", kind: "army", path: [{ at: "Corinth", time: "Jul 424 BCE" }, { at: [22.42, 39.64], time: "Aug 424 BCE" }, { at: [23.88, 40.4], time: "Sep 424 BCE" }, { at: [23.84, 40.82], time: "Dec 424 BCE" }] },
    {
      name: "The Sicilian Expedition", side: "athens", kind: "fleet", bySea: true,
      path: [{ at: [23.64, 37.94], time: "Jun 415 BCE" }, { at: [19.92, 39.62], time: "Jul 415 BCE" }, { at: [15.65, 38.11], time: "Aug 415 BCE" }, { at: [15.1, 37.5], time: "Sep 415 BCE" }, { at: [15.3, 37.06], time: "Apr 414 BCE" }],
    },
    { name: "Demosthenes's fleet", side: "athens", kind: "fleet", bySea: true, path: [{ at: [23.64, 37.94], time: "Apr 413 BCE" }, { at: [19.92, 39.62], time: "May 413 BCE" }, { at: [15.3, 37.06], time: "Jul 413 BCE" }] },
    { name: "Lysander", side: "sparta", kind: "fleet", bySea: true, path: [{ at: "Ephesus", time: "Jun 405 BCE" }, { at: [26.69, 40.35], time: "Aug 405 BCE" }, { at: [26.62, 40.33], time: "Sep 405 BCE" }, { at: [23.62, 37.92], time: "Nov 405 BCE" }, { at: [23.62, 37.92], time: "Apr 404 BCE" }] },
  ],
  events: [
    { title: "Sybota", time: "433 BCE", at: [20.1, 39.4], kind: "battle", side: "athens", until: "427 BCE", text: "An Athenian squadron fights beside Corcyra against Corinth." },
    { title: "Potidaea", time: "432 BCE", at: [23.33, 40.19], kind: "siege", side: "athens", until: "426 BCE", text: "The Corinthian colony revolts from Athens; the siege lasts until 430." },
    { title: "Attica invaded", time: "Jun 431 BCE", at: [23.73, 38.08], kind: "note", side: "sparta", until: "425 BCE", text: "Archidamus ravages the fields while the Athenians shelter behind their walls." },
    { title: "The plague", time: "430 BCE", at: "Athens", kind: "disaster", side: "athens", until: "425 BCE", text: "Perhaps a quarter to a third of the crowded city dies; Pericles dies in 429." },
    { title: "Mytilene", time: "427 BCE", at: [26.55, 39.11], kind: "siege", side: "athens", until: "421 BCE", text: "The revolt is crushed; a second trireme overtakes the first with a reprieve." },
    { title: "Plataea", time: "427 BCE", at: "Plataea", kind: "siege", side: "sparta", until: "421 BCE", text: "The defenders surrender to Sparta and are executed." },
    { title: "Corcyra", time: "427 BCE", at: [19.92, 39.62], kind: "disaster", until: "421 BCE", text: "Civil war between democrats and oligarchs, in which words change their meanings." },
    { title: "Pylos and Sphacteria", time: "425 BCE", at: [21.67, 36.93], kind: "battle", side: "athens", until: "413 BCE", text: "Spartan hoplites surrender on the island: a shock to the Greek world." },
    { title: "Delium", time: "424 BCE", at: [23.6, 38.36], kind: "battle", side: "sparta", until: "413 BCE", text: "The Boeotians defeat an Athenian army; Socrates is among those who retreat." },
    { title: "Amphipolis", time: "422 BCE", at: [23.84, 40.82], kind: "battle", side: "sparta", until: "413 BCE", text: "Brasidas took the colony in 424; now he and Cleon both die in the battle for it." },
    { title: "Peace of Nicias", time: "421 BCE", at: "Athens", kind: "treaty", until: "415 BCE", text: "An uneasy truce rather than a true peace." },
    { title: "Mantinea", time: "418 BCE", at: [22.38, 37.62], kind: "battle", side: "sparta", until: "413 BCE", text: "Sparta defeats Argos and its allies, Athens among them." },
    { title: "Melos", time: "416 BCE", at: [24.42, 36.72], kind: "siege", side: "athens", until: "404 BCE", text: "The neutral island is besieged; its men are killed and its women and children enslaved." },
    { title: "Syracuse", time: "Sep 413 BCE", at: "Syracuse", kind: "disaster", side: "athens", until: "404 BCE", text: "The fleet is destroyed in the harbor; the retreating army is caught and destroyed." },
    { title: "Decelea", time: "413 BCE", at: [23.79, 38.18], kind: "founding", side: "sparta", until: "404 BCE", text: "On Alcibiades's advice, Sparta fortifies a base in Attica itself." },
    { title: "The oligarchic coup", time: "411 BCE", at: [23.66, 37.98], kind: "note", side: "athens", until: "404 BCE", text: "The Four Hundred seize power in Athens for a few months." },
    { title: "Arginusae", time: "406 BCE", at: [26.75, 39.05], kind: "battle", side: "athens", until: "404 BCE", text: "An Athenian victory, followed by the trial and execution of the generals." },
    { title: "Aegospotami", time: "Sep 405 BCE", at: [26.62, 40.33], kind: "battle", side: "sparta", until: "403 BCE", text: "Lysander captures the Athenian fleet on the beach." },
    { title: "Athens surrenders", time: "Apr 404 BCE", at: "Athens", kind: "treaty", side: "sparta", until: "403 BCE", text: "The Long Walls are pulled down to the music of flute-girls." },
  ],
  labels: [
    { text: "Attica", at: [23.85, 38.25], size: "small" },
    { text: "Peloponnese", at: [22.2, 37.4], size: "small" },
    { text: "Sicily", at: [14.2, 37.6], size: "small" },
    { text: "Hellespont", at: [26.4, 40.6], size: "small" },
  ],
  story: [
    {
      title: "The first years", time: "434 BCE", until: "426 BCE", view: { center: [22.8, 39.0], zoom: 5.6 },
      text: "Watch the war spread: **Corcyra** and **Potidaea**, the Spartan army in **Attica**, the plague in **Athens**, and the revolt of **Mytilene**.",
    },
    {
      title: "From Pylos to Melos", time: "426 BCE", until: "415 BCE", view: { center: [23.0, 38.7], zoom: 5.5 },
      text: "**Pylos** in the southwest; **Brasidas** marching north to **Amphipolis**; the **Peace of Nicias**; and **Melos** in the Aegean.",
    },
    {
      title: "The Sicilian Expedition", time: "415 BCE", until: "412 BCE", view: { center: [19.0, 38.3], zoom: 4.9 },
      text: "Follow the great fleet from the Piraeus by **Corcyra** to Sicily, and the second fleet sent after it, to the disaster at **Syracuse**.",
    },
    {
      title: "The fall of Athens", time: "412 BCE", view: { center: [24.6, 38.8], zoom: 5.4 },
      text: "The Spartans hold **Decelea** in Attica; the war moves to the eastern Aegean. Watch **Lysander** take the fleet at **Aegospotami** and close the Piraeus.",
    },
  ],
  sources: [
    "Thucydides, History of the Peloponnesian War",
    "Xenophon, Hellenica, books 1–2",
    "Donald Kagan, The Peloponnesian War (2003)",
    "The Landmark Thucydides, ed. Robert B. Strassler (1996), maps",
  ],
};

export default map;
