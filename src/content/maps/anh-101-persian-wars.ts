import type { MapSpec } from "map-widget/spec";

/**
 * ANH 101, Lesson III: the Persian Wars, 499–479 BCE, following Herodotus as the lesson does.
 * Chapters 1–2 (the Ionian Revolt and Marathon) sit on the page "Marathon"; chapters 3–4
 * (Xerxes's march, Thermopylae and Artemisium) on "Thermopylae and Artemisium"; chapters 5–6
 * (Salamis, Plataea, Mycale) on "Salamis, Plataea, and Mycale". Months are approximate and
 * follow the traditional reconstruction (Thermopylae and Artemisium in August 480, Salamis in
 * September, Plataea and Mycale in August 479). The Persian fleet's passage through the Athos
 * canal is not drawn: the fleet is shown from its arrival at Therma.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Persian Wars, 499–479 BCE",
  summary: "From the burning of Sardis to Marathon, Thermopylae, Salamis, Plataea, and Mycale.",
  start: "500 BCE",
  end: "477 BCE",
  detail: "region",
  playSeconds: 150,
  trails: "fade",
  view: { center: [25, 38.6], zoom: 5.4 },
  sides: [
    { id: "persia", name: "Persian Empire", color: "#c92a2a" },
    { id: "greeks", name: "Greek allies", color: "#1c7ed6" },
    { id: "ionians", name: "Ionian rebels", color: "#e8590c" },
  ],
  moves: [
    // The Ionian Revolt
    { name: "Athenian and Eretrian ships", side: "greeks", kind: "fleet", bySea: true, path: [{ at: [23.64, 37.94], time: "Feb 498 BCE" }, { at: "Miletus", time: "Apr 498 BCE" }] },
    {
      name: "The march on Sardis", side: "ionians", kind: "army",
      path: [{ at: "Ephesus", time: "May 498 BCE" }, { at: [28.04, 38.49], time: "Jun 498 BCE" }, { at: [28.04, 38.49], time: "Jul 498 BCE" }, { at: "Ephesus", time: "Aug 498 BCE" }],
    },
    // 490: Datis and Artaphernes
    {
      name: "Datis and Artaphernes", side: "persia", kind: "fleet", bySea: true,
      path: [
        { at: [26.85, 37.69], time: "Jun 490 BCE" }, { at: [25.38, 37.1], time: "Jul 490 BCE" }, { at: [25.27, 37.4], time: "Jul 490 BCE" },
        { at: [23.79, 38.39], time: "Aug 490 BCE" }, { at: [23.79, 38.39], time: "Sep 490 BCE" }, { at: [24.02, 38.12], time: "Sep 490 BCE" },
      ],
    },
    {
      name: "Round Sunium to Phalerum", side: "persia", kind: "fleet", bySea: true,
      path: [{ at: [24.02, 38.12], time: "Sep 490 BCE" }, { at: [24.03, 37.64], time: "Oct 490 BCE" }, { at: [23.68, 37.93], time: "Oct 490 BCE" }],
    },
    {
      name: "Athenians and Plataeans", side: "greeks", kind: "army",
      path: [{ at: "Athens", time: "Aug 490 BCE" }, { at: "Marathon", time: "Sep 490 BCE" }, { at: "Marathon", time: "Sep 490 BCE" }, { at: "Athens", time: "Oct 490 BCE" }],
    },
    // 480: Xerxes
    {
      name: "Xerxes's army", side: "persia", kind: "army",
      path: [
        { at: [28.04, 38.49], time: "Apr 480 BCE" }, { at: [26.41, 40.2], time: "May 480 BCE" }, { at: [26.14, 40.87], time: "Jun 480 BCE" },
        { at: [22.94, 40.64], time: "Jul 480 BCE" }, { at: [22.42, 39.64], time: "Aug 480 BCE" }, { at: "Thermopylae", time: "Aug 480 BCE" },
        { at: "Thermopylae", time: "Aug 480 BCE" }, { at: "Athens", time: "Sep 480 BCE" },
      ],
    },
    {
      name: "Xerxes returns to Asia", side: "persia", kind: "army",
      path: [{ at: "Athens", time: "Oct 480 BCE" }, { at: [22.42, 39.64], time: "Nov 480 BCE" }, { at: [26.41, 40.2], time: "Dec 480 BCE" }, { at: [28.04, 38.49], time: "Jan 479 BCE" }],
    },
    {
      name: "Mardonius", side: "persia", kind: "army",
      path: [{ at: [22.42, 39.64], time: "Nov 480 BCE" }, { at: [22.42, 39.64], time: "May 479 BCE" }, { at: "Athens", time: "Jun 479 BCE" }, { at: "Plataea", time: "Aug 479 BCE" }],
    },
    {
      name: "Xerxes's fleet", side: "persia", kind: "fleet", bySea: true,
      path: [
        { at: [22.85, 40.55], time: "Jul 480 BCE" }, { at: [23.05, 39.13], time: "Aug 480 BCE" }, { at: [23.05, 39.13], time: "Aug 480 BCE" },
        { at: [23.68, 37.93], time: "Sep 480 BCE" }, { at: [23.56, 37.95], time: "Sep 480 BCE" }, { at: [26.85, 37.69], time: "Nov 480 BCE" },
        { at: [26.85, 37.69], time: "Jul 479 BCE" }, { at: [27.12, 37.66], time: "Aug 479 BCE" },
      ],
    },
    {
      name: "Leonidas", side: "greeks", kind: "army",
      path: [{ at: "Sparta", time: "Jul 480 BCE" }, { at: "Corinth", time: "Jul 480 BCE" }, { at: "Thermopylae", time: "Aug 480 BCE" }],
    },
    {
      name: "Greek fleet", side: "greeks", kind: "fleet", bySea: true,
      path: [
        { at: [23.32, 39.0], time: "Aug 480 BCE" }, { at: [23.32, 39.0], time: "Aug 480 BCE" }, { at: [23.52, 37.95], time: "Sep 480 BCE" },
        { at: [23.52, 37.95], time: "Sep 480 BCE" }, { at: [23.43, 37.75], time: "Apr 479 BCE" }, { at: [25.27, 37.4], time: "Jun 479 BCE" },
        { at: [26.85, 37.69], time: "Jul 479 BCE" }, { at: [27.12, 37.66], time: "Aug 479 BCE" },
      ],
    },
    {
      name: "Pausanias", side: "greeks", kind: "army",
      path: [{ at: "Sparta", time: "Jun 479 BCE" }, { at: [22.99, 37.94], time: "Jul 479 BCE" }, { at: [23.54, 38.04], time: "Jul 479 BCE" }, { at: "Plataea", time: "Aug 479 BCE" }],
    },
  ],
  events: [
    { title: "Sardis burned", time: "Jun 498 BCE", at: [28.04, 38.49], kind: "siege", side: "ionians", until: "490 BCE", text: "Ionians, Athenians, and Eretrians take the lower city of Sardis; a fire burns it, temple and all." },
    { title: "Lade", time: "494 BCE", at: [27.22, 37.53], kind: "battle", side: "persia", until: "490 BCE", text: "The Ionian fleet breaks apart and is defeated off Miletus." },
    { title: "Miletus sacked", time: "494 BCE", at: "Miletus", kind: "siege", side: "persia", until: "490 BCE", text: "The leading city of the revolt is taken and its people deported." },
    { title: "Naxos", time: "Jul 490 BCE", at: [25.38, 37.1], kind: "siege", side: "persia", until: "489 BCE", text: "The fleet of Datis burns the town and temples of Naxos." },
    { title: "Eretria", time: "Sep 490 BCE", at: [23.79, 38.39], kind: "siege", side: "persia", until: "489 BCE", text: "After six days, the city is betrayed and burned, and its people are carried off." },
    { title: "Marathon", time: "Sep 490 BCE", at: "Marathon", kind: "battle", side: "greeks", until: "485 BCE", text: "The Athenians and Plataeans charge and drive the Persians back to their ships." },
    { title: "The Hellespont bridged", time: "May 480 BCE", at: [26.41, 40.2], kind: "note", side: "persia", until: "Sep 480 BCE", text: "Xerxes's army crosses into Europe on two bridges of boats." },
    { title: "Thermopylae", time: "Aug 480 BCE", at: "Thermopylae", kind: "battle", side: "persia", until: "479 BCE", text: "Leonidas and his rearguard die holding the pass; central Greece lies open." },
    { title: "Artemisium", time: "Aug 480 BCE", at: [23.25, 39.03], kind: "battle", side: "greeks", until: "479 BCE", text: "Three days of indecisive fighting at sea; the Greek fleet withdraws when Thermopylae falls." },
    { title: "Athens sacked", time: "Sep 480 BCE", at: "Athens", kind: "siege", side: "persia", until: "479 BCE", text: "The Persians take the Acropolis and burn its temples." },
    { title: "Salamis", time: "Sep 480 BCE", at: [23.56, 37.95], kind: "battle", side: "greeks", until: "477 BCE", text: "In the narrow strait, the Greek triremes rout the Persian fleet as Xerxes watches from the shore." },
    { title: "Plataea", time: "Aug 479 BCE", at: "Plataea", kind: "battle", side: "greeks", until: "477 BCE", text: "Pausanias's army defeats Mardonius, who is killed; the Persian army in Greece is destroyed." },
    { title: "Mycale", time: "Aug 479 BCE", at: [27.12, 37.66], kind: "battle", side: "greeks", until: "477 BCE", text: "On the same day, Herodotus says, the Greeks burn the beached Persian fleet across from Samos." },
  ],
  labels: [
    { text: "Aegean Sea", at: [25.0, 39.2], size: "small" },
    { text: "Ionia", at: [27.6, 38.25], size: "small" },
    { text: "Attica", at: [23.85, 38.25], size: "small" },
  ],
  story: [
    {
      title: "The Ionian Revolt", time: "500 BCE", until: "492 BCE", view: { center: [26.2, 38.3], zoom: 5.8 },
      text: "Watch twenty **Athenian** ships cross to Ionia and the rebels march inland to burn **Sardis**. Then the revolt collapses at **Lade** and **Miletus**.",
    },
    {
      title: "Marathon", time: "492 BCE", until: "Nov 490 BCE", view: { center: [24.6, 37.9], zoom: 6.4 },
      text: "The Persian fleet island-hops from **Samos** to **Naxos** and **Eretria**, then lands at **Marathon**. After the battle, watch it round Cape Sunium for Athens, while the Athenians race home overland.",
    },
    {
      title: "Xerxes crosses into Europe", time: "Nov 490 BCE", until: "Aug 480 BCE", view: { center: [24.8, 39.6], zoom: 5.2 },
      text: "Ten years later: **Xerxes** marches from **Sardis**, crosses the **Hellespont** on bridges of boats, and follows the coast through Thrace and Macedonia toward Greece.",
    },
    {
      title: "Thermopylae and Artemisium", time: "Aug 480 BCE", until: "Sep 480 BCE", view: { center: [23.1, 38.85], zoom: 7.4 },
      text: "The Greeks block the narrow pass at **Thermopylae** and the strait at **Artemisium** at the same time. When the pass falls, the fleet withdraws south.",
    },
    {
      title: "Salamis", time: "Sep 480 BCE", until: "Jun 479 BCE", view: { center: [23.9, 38.3], zoom: 6.6 },
      text: "The Persians burn **Athens**; the Greek fleet waits in the strait of **Salamis**. After the battle, watch **Xerxes** march back to Asia, leaving **Mardonius** in Thessaly.",
    },
    {
      title: "Plataea and Mycale", time: "Jun 479 BCE", view: { center: [25.3, 38.1], zoom: 5.6 },
      text: "Two victories on opposite sides of the Aegean: **Pausanias** defeats Mardonius at **Plataea**, and the Greek fleet crosses to **Mycale**.",
    },
  ],
  sources: [
    "Herodotus, Histories, books 5–9",
    "The Landmark Herodotus, ed. Robert B. Strassler (2007), maps",
    "Peter Green, The Greco-Persian Wars (1996)",
    "Months are approximate and follow the traditional chronology; troop routes between named places are reconstructions.",
  ],
};

export default map;
