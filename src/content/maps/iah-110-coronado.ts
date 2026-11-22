import type { MapSpec } from "map-widget/spec";

/**
 * IAH 110, Lesson III: the Coronado expedition, 1540–1542, with the journey of Fray Marcos
 * and Esteban in 1539, placed on "The Pueblo World and the Coming of Coronado". The route
 * follows the usual reconstruction (Flint and Flint); the Plains crossing and the location
 * of Quivira in central Kansas are approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Coronado and the Pueblo World, 1539–1542",
  summary: "From the search for Cíbola to Hawikku, the Grand Canyon, the Tiguex War, and the march to Quivira.",
  start: "1539-02",
  end: "1542-12",
  detail: "region",
  playSeconds: 100,
  trails: "full",
  view: { center: [-104, 30], zoom: 4.3 },
  sides: [
    { id: "spain", name: "Spanish expeditions", color: "#c92a2a" },
  ],
  moves: [
    { name: "Fray Marcos and Esteban", side: "spain", kind: "explorer", path: [{ at: [-107.39, 24.8], time: "1539-03-07" }, { at: [-109.9, 31.2], time: "1539-04-20" }, { at: [-108.83, 34.98], time: "1539-05-20" }, { at: [-107.39, 24.8], time: "1539-08-01" }] },
    {
      name: "Coronado", side: "spain", kind: "army",
      path: [
        { at: [-104.9, 21.24], time: "1540-02-23" }, { at: [-107.39, 24.8], time: "1540-04-22" }, { at: [-110.0, 30.2], time: "1540-05-26" },
        { at: [-108.83, 34.98], time: "1540-07-07" }, { at: [-108.83, 34.98], time: "1540-11-20" }, { at: [-106.55, 35.33], time: "1540-12-01" },
        { at: [-106.55, 35.33], time: "1541-04-23" }, { at: [-105.68, 35.55], time: "1541-04-28" }, { at: [-101.67, 34.93], time: "1541-05-29" },
        { at: [-98.2, 38.35], time: "1541-07-06" }, { at: [-98.2, 38.35], time: "1541-08-10" }, { at: [-106.55, 35.33], time: "1541-09-25" },
        { at: [-106.55, 35.33], time: "1542-04-01" }, { at: [-108.83, 34.98], time: "1542-04-20" }, { at: [-107.39, 24.8], time: "1542-07-01" },
        { at: [-99.13, 19.43], time: "1542-11-01" },
      ],
    },
    { name: "Cárdenas", side: "spain", kind: "explorer", path: [{ at: [-108.83, 34.98], time: "1540-08-25" }, { at: [-110.6, 35.85], time: "1540-09-05" }, { at: [-112.1, 36.06], time: "1540-09-20" }, { at: [-108.83, 34.98], time: "1540-10-15" }] },
  ],
  events: [
    { title: "Culiacán", time: "1539-03-07", at: [-107.39, 24.8], kind: "note", side: "spain", until: "1542-12", text: "Cabeza de Vaca and Esteban had reached here in 1536 with rumors of rich towns to the north." },
    { title: "Esteban killed", time: "1539-05-20", at: [-108.83, 34.98], kind: "note", until: "1540-07", text: "Esteban reaches the Zuni town of Hawikku and is killed; Fray Marcos returns claiming to have seen a great city." },
    { title: "Hawikku", time: "1540-07-07", at: [-108.83, 34.98], kind: "battle", side: "spain", until: "1542-12", text: "The Zunis refuse to submit; the Spanish take the town and find no gold." },
    { title: "Grand Canyon", time: "1540-09-20", at: [-112.1, 36.06], kind: "discovery", side: "spain", until: "1542-12", text: "Hopi men guide Cárdenas's party to the canyon's rim." },
    { title: "Hopi", time: "1540-09-05", at: [-110.6, 35.85], kind: "note", until: "1542-12", text: "The Hopi towns on their mesas." },
    { title: "Acoma", time: "1540-09-10", at: [-107.58, 34.9], kind: "note", until: "1542-12", text: "The Sky City on its high mesa." },
    { title: "The Tiguex War", time: "1541-01-15", at: [-106.55, 35.33], kind: "battle", side: "spain", until: "1542-12", text: "The army seizes a Tiwa town for winter quarters; when the Tiwas resist, it besieges their towns and burns men who had surrendered." },
    { title: "Pecos", time: "1541-04-28", at: [-105.68, 35.55], kind: "note", until: "1542-12", text: "By the Turk's later confession, the people of Pecos asked him to lead the Spanish into the Plains and lose them there." },
    { title: "Quivira", time: "1541-07-06", at: [-98.2, 38.35], kind: "note", until: "1542-12", text: "Grass-house villages of the Wichita, not a rich kingdom. The Turk is garroted." },
    { title: "Mexico City", time: "1542-11-01", at: [-99.13, 19.43], kind: "note", side: "spain", until: "1542-12", text: "Coronado returns in disgrace." },
  ],
  labels: [
    { text: "Rio Grande", at: [-106.9, 33.6], size: "small" },
    { text: "Great Plains", at: [-100.5, 36.5], size: "small" },
    { text: "Cíbola (Zuni)", at: [-108.83, 34.5], size: "small" },
  ],
  story: [
    {
      title: "The search for Cíbola", time: "1539-02", until: "1540-07-01", view: { center: [-107, 29], zoom: 4.8 },
      text: "Follow **Esteban** and **Fray Marcos** north from **Culiacán** in 1539, then **Coronado**'s great expedition the following spring.",
    },
    {
      title: "Hawikku and the Pueblos", time: "1540-07-01", until: "1541-04-20", view: { center: [-108.5, 35.4], zoom: 6.2 },
      text: "The Spanish take **Hawikku**; a party reaches the **Grand Canyon**; the army winters at **Tiguex** on the Rio Grande, and the war begins.",
    },
    {
      title: "Quivira and the return", time: "1541-04-20", view: { center: [-103, 31], zoom: 4.2 },
      text: "Led by the Turk, Coronado crosses the **Plains** to **Quivira** in Kansas, returns to the Rio Grande, and in 1542 goes home to Mexico.",
    },
  ],
  sources: [
    "Richard Flint and Shirley Cushing Flint, eds., Documents of the Coronado Expedition, 1539–1542 (2005)",
    "Richard Flint, No Settlement, No Conquest: A History of the Coronado Entrada (2008)",
    "Routes are approximate, especially across the Plains.",
  ],
};

export default map;
