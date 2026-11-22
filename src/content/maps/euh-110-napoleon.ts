import type { MapSpec } from "map-widget/spec";

/**
 * EUH 110, Lesson II: Napoleon's campaigns, 1798–1815, placed on the page "Napoleon".
 * Chapters 1–2 (Egypt and Brumaire; mastery of Europe) sit before "Nationalism and
 * resistance"; chapters 3–4 (Russia; Leipzig to Waterloo) before "The verdict". Only
 * Napoleon's own movements in the campaigns the lesson names are drawn; the Peninsular War
 * appears as a marker. Routes are simplified to the main towns.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Napoleon's Campaigns, 1798–1815",
  summary: "Egypt, Austerlitz and Jena, Trafalgar and Spain, the Russian campaign, Leipzig, Elba, and Waterloo.",
  start: "1798-04",
  end: "1815-11",
  detail: "continent",
  playSeconds: 160,
  trails: "fade",
  view: { center: [15, 46], zoom: 3.5 },
  sides: [
    { id: "france", name: "Napoleon and France", color: "#1c7ed6" },
    { id: "coalition", name: "The coalitions", color: "#c92a2a" },
  ],
  moves: [
    { name: "To Egypt", side: "france", kind: "fleet", bySea: true, path: [{ at: [5.93, 43.1], time: "1798-05-19" }, { at: [14.51, 35.9], time: "1798-06-10" }, { at: "Alexandria", time: "1798-07-01" }] },
    { name: "Bonaparte in Egypt", side: "france", kind: "army", path: [{ at: "Alexandria", time: "1798-07-03" }, { at: [31.2, 30.07], time: "1798-07-21" }, { at: "Cairo", time: "1798-07-24" }, { at: "Cairo", time: "1799-07-10" }, { at: "Alexandria", time: "1799-08-20" }] },
    { name: "Home to France", side: "france", kind: "ship", bySea: true, path: [{ at: "Alexandria", time: "1799-08-23" }, { at: [6.74, 43.4], time: "1799-10-09" }] },
    { name: "To Paris", side: "france", kind: "army", path: [{ at: [6.74, 43.4], time: "1799-10-09" }, { at: [2.35, 48.86], time: "1799-10-16" }] },
    {
      name: "Napoleon", side: "france", kind: "army",
      path: [
        { at: [1.61, 50.73], time: "1805-08-26" }, { at: [9.99, 48.4], time: "1805-10-20" }, { at: [16.37, 48.21], time: "1805-11-13" },
        { at: [16.87, 49.15], time: "1805-12-02" }, { at: [16.37, 48.21], time: "1805-12-26" }, { at: [2.35, 48.86], time: "1806-01-26" },
        { at: [2.35, 48.86], time: "1806-09-25" }, { at: [11.59, 50.93], time: "1806-10-14" }, { at: [13.4, 52.52], time: "1806-10-27" },
      ],
    },
    {
      name: "The Grande Armée", side: "france", kind: "army",
      path: [
        { at: [23.9, 54.9], time: "1812-06-24" }, { at: [25.28, 54.69], time: "1812-06-28" }, { at: [30.2, 55.19], time: "1812-07-28" },
        { at: [32.04, 54.78], time: "1812-08-17" }, { at: [35.82, 55.52], time: "1812-09-07" }, { at: [37.62, 55.75], time: "1812-09-14" },
        { at: [37.62, 55.75], time: "1812-10-19" }, { at: [36.47, 55.01], time: "1812-10-24" }, { at: [32.04, 54.78], time: "1812-11-09" },
        { at: [28.37, 54.33], time: "1812-11-28" }, { at: [25.28, 54.69], time: "1812-12-09" }, { at: [23.9, 54.9], time: "1812-12-14" },
      ],
    },
    {
      name: "Napoleon", side: "france", kind: "army",
      path: [
        { at: [2.35, 48.86], time: "1813-04-15" }, { at: [13.74, 51.05], time: "1813-05-08" }, { at: [13.74, 51.05], time: "1813-10-07" },
        { at: [12.37, 51.34], time: "1813-10-16" }, { at: [8.27, 50.0], time: "1813-11-02" }, { at: [2.35, 48.86], time: "1813-11-09" },
        { at: [2.35, 48.86], time: "1814-03-31" }, { at: [2.7, 48.4], time: "1814-04-06" }, { at: [2.7, 48.4], time: "1814-04-20" },
        { at: [6.74, 43.4], time: "1814-04-28" },
      ],
    },
    { name: "To Elba", side: "france", kind: "ship", bySea: true, path: [{ at: [6.74, 43.4], time: "1814-04-28" }, { at: [10.33, 42.82], time: "1814-05-04" }, { at: [10.33, 42.82], time: "1815-02-26" }, { at: [7.07, 43.55], time: "1815-03-01" }] },
    {
      name: "The Hundred Days", side: "france", kind: "army",
      path: [
        { at: [7.07, 43.55], time: "1815-03-01" }, { at: [5.72, 45.19], time: "1815-03-07" }, { at: [4.84, 45.76], time: "1815-03-10" },
        { at: [2.35, 48.86], time: "1815-03-20" }, { at: [2.35, 48.86], time: "1815-06-12" }, { at: [4.44, 50.41], time: "1815-06-15" },
        { at: [4.4, 50.68], time: "1815-06-18" }, { at: [2.35, 48.86], time: "1815-06-21" },
      ],
    },
    { name: "Wellington", side: "coalition", kind: "army", path: [{ at: [4.35, 50.85], time: "1815-06-15" }, { at: [4.45, 50.56], time: "1815-06-16" }, { at: [4.4, 50.69], time: "1815-06-18" }] },
    { name: "Blücher", side: "coalition", kind: "army", path: [{ at: [4.86, 50.47], time: "1815-06-15" }, { at: [4.57, 50.53], time: "1815-06-16" }, { at: [4.6, 50.72], time: "1815-06-17" }, { at: [4.43, 50.68], time: "1815-06-18" }] },
  ],
  events: [
    { title: "The Pyramids", time: "1798-07-21", at: [31.2, 30.07], kind: "battle", side: "france", until: "1800-01-01", text: "Bonaparte defeats the Mamluks and enters Cairo; his scholars begin to study Egypt." },
    { title: "The Nile", time: "1798-08-01", at: [30.07, 31.4], kind: "battle", side: "coalition", until: "1800-01-01", text: "Nelson destroys the French fleet in Aboukir Bay, stranding the army in Egypt." },
    { title: "Brumaire", time: "1799-11-09", at: [2.35, 48.86], kind: "note", side: "france", until: "1804-12-31", text: "Napoleon seizes power in a coup; in 1804 he crowns himself emperor." },
    { title: "Trafalgar", time: "1805-10-21", at: [-6.3, 36.15], kind: "battle", side: "coalition", until: "1812-01-01", text: "Nelson destroys the French and Spanish fleets, ending any hope of invading England." },
    { title: "Austerlitz", time: "1805-12-02", at: [16.87, 49.15], kind: "battle", side: "france", until: "1812-01-01", text: "Napoleon's greatest victory, over Austria and Russia." },
    { title: "Jena", time: "1806-10-14", at: [11.59, 50.93], kind: "battle", side: "france", until: "1812-01-01", text: "The Prussian army is destroyed; the Holy Roman Empire has already been abolished." },
    { title: "Spain", time: "1808-05-02", at: [-3.7, 40.42], kind: "note", side: "coalition", until: "1814-04-01", text: "Joseph Bonaparte is made king, and Spain rises in a long guerrilla war backed by a British army." },
    { title: "Borodino", time: "1812-09-07", at: [35.82, 55.52], kind: "battle", side: "france", until: "1813-03-01", text: "A bloody battle that opens the road to Moscow." },
    { title: "Moscow", time: "1812-09-14", at: [37.62, 55.75], kind: "disaster", side: "coalition", until: "1813-03-01", text: "Napoleon finds the city abandoned; fires destroy much of it. In October he retreats." },
    { title: "The Berezina", time: "1812-11-28", at: [28.37, 54.33], kind: "disaster", side: "coalition", until: "1813-03-01", text: "The remnant of the army escapes across the river at terrible cost." },
    { title: "Leipzig", time: "1813-10-19", at: [12.37, 51.34], kind: "battle", side: "coalition", until: "1815-11-01", text: "The \"Battle of the Nations\": Russia, Prussia, Austria, and Sweden defeat Napoleon." },
    { title: "Elba", time: "1814-05-04", at: [10.33, 42.82], kind: "note", side: "france", until: "1815-11-01", text: "After the allies enter Paris, Napoleon abdicates and is exiled to the island." },
    { title: "Waterloo", time: "1815-06-18", at: [4.4, 50.68], kind: "battle", side: "coalition", until: "1815-11-01", text: "Wellington and Blücher defeat Napoleon; he is exiled to Saint Helena in the South Atlantic." },
  ],
  labels: [
    { text: "Mediterranean", at: [17, 35.5], size: "small" },
    { text: "Russia", at: [36, 57.5], size: "small" },
  ],
  story: [
    {
      title: "Egypt and Brumaire", time: "1798-04", until: "1800-01", view: { center: [16, 40.5], zoom: 3.55 },
      text: "Follow **Bonaparte**'s fleet from Toulon by Malta to **Alexandria**, his victory at the **Pyramids**, and Nelson's at **the Nile**. Then he slips home to seize power in Paris.",
    },
    {
      title: "Mastery of Europe", time: "1805-07", until: "1808-12", view: { center: [6, 46], zoom: 4.0 },
      text: "From the Channel to **Austerlitz** in 1805 and **Jena** in 1806, while **Trafalgar** settles the war at sea and **Spain** rises against Joseph.",
    },
    {
      title: "Russia, 1812", time: "1812-06", until: "1813-01", view: { center: [30, 55], zoom: 5.0 },
      text: "The **Grande Armée** crosses the Niemen, fights at **Borodino**, and enters **Moscow**. Watch the retreat back across the **Berezina**.",
    },
    {
      title: "From Leipzig to Waterloo", time: "1813-04", view: { center: [7, 48], zoom: 4.6 },
      text: "Defeat at **Leipzig**, abdication and **Elba**, the landing in the south of France, and the last campaign in Belgium at **Waterloo**.",
    },
  ],
  sources: [
    "David A. Bell, Napoleon: A Concise Biography (2015)",
    "Andrew Roberts, Napoleon: A Life (2014)",
    "Charles Esdaile, Napoleon's Wars: An International History, 1803–1815 (2007)",
    "Routes are simplified to the main towns; Napoleon's coronation (1804) and other events are summarized in markers.",
  ],
};

export default map;
