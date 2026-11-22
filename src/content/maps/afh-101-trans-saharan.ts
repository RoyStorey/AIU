import type { MapSpec } from "map-widget/spec";

/**
 * AFH 101, Lesson III: the trans-Saharan trade and the rise and fall of Ghana, c. 850–1100.
 * Chapters 1–2 (the caravan roads and Ghana) sit on "The Sahara Crossed"; chapter 3 (the
 * Almoravids) on "The Almoravids and the End of Ghana". Caravan lanes are drawn as continuous
 * routes, not dated journeys. Koumbi Saleh as Ghana's capital and Tegdaoust as Awdaghust are
 * the usual but debated identifications; Kanem's capital is placed approximately.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Across the Sahara, c. 850–1100",
  summary: "The caravan roads between North Africa and the Sahel, the kingdom of Ghana, and the Almoravid movement.",
  start: "850",
  end: "1100",
  detail: "continent",
  playSeconds: 110,
  view: { center: [0, 25], zoom: 3.6 },
  sides: [
    { id: "ghana", name: "Ghana", color: "#c9a227" },
    { id: "almoravids", name: "Almoravids", color: "#2b8a3e" },
    { id: "kanem", name: "Kanem", color: "#a61e4d" },
  ],
  routes: [
    { name: "Sijilmasa to Ghana", stops: [[-4.27, 31.28], [-4.98, 23.6], [-10.4, 17.43], [-7.98, 15.77]], bySea: false, ships: 8, color: "#b5651d", description: "Salt from Taghaza south, gold north" },
    { name: "Kairouan to Gao", stops: [[10.1, 35.68], [5.33, 31.95], [1.47, 18.95], [-0.04, 16.27]], bySea: false, ships: 6, color: "#b5651d" },
    { name: "Tripoli to Kanem", stops: [[13.19, 32.89], [14.15, 26.18], [12.92, 18.69], [15.5, 14.0]], bySea: false, ships: 6, color: "#b5651d" },
  ],
  moves: [
    {
      name: "The Almoravids", side: "almoravids", kind: "army",
      path: [{ at: [-15.0, 18.5], time: "1050" }, { at: [-4.27, 31.28], time: "1054" }, { at: [-4.27, 31.28], time: "1054.6" }, { at: [-10.4, 17.43], time: "1055" }],
    },
    {
      name: "Yusuf ibn Tashfin", side: "almoravids", kind: "army",
      path: [{ at: [-4.27, 31.28], time: "1060" }, { at: [-7.99, 31.63], time: "1070" }, { at: [-5.92, 35.78], time: "1084" }, { at: [-5.45, 36.13], time: "1086.3", by: "sea" }, { at: [-6.97, 38.88], time: "1086.8" }],
    },
  ],
  events: [
    { title: "Kanem", time: "872", at: [15.5, 14.0], kind: "note", side: "kanem", until: "1100", text: "Al-Yaqubi names the kingdom of Kanem, northeast of Lake Chad." },
    { title: "Awdaghust", time: "950", at: [-10.4, 17.43], kind: "note", side: "ghana", until: "1054", text: "Ibn Hawqal sees a merchant's note for forty-two thousand dinars owed to Sijilmasa." },
    { title: "Koumbi Saleh", time: "990", at: [-7.98, 15.77], kind: "note", side: "ghana", until: "1100", text: "Probably the twin city of Ghana's king and its Muslim merchants that al-Bakri describes." },
    { title: "Gao", time: "1010", at: [-0.04, 16.27], kind: "note", until: "1100", text: "By the eleventh century, the kings of Gao on the Niger are Muslims." },
    { title: "Sijilmasa", time: "1054", at: [-4.27, 31.28], kind: "siege", side: "almoravids", until: "1100", text: "The Almoravids take the great trading city at the northern end of the routes." },
    { title: "Awdaghust sacked", time: "1055", at: [-10.4, 17.43], kind: "siege", side: "almoravids", until: "1100", text: "Al-Bakri reports the town sacked and its people killed." },
    { title: "Al-Bakri", time: "1068", at: [-4.78, 37.88], kind: "note", until: "1100", text: "In Córdoba, al-Bakri completes his description of Ghana from merchants' reports." },
    { title: "Marrakesh", time: "1070", at: [-7.99, 31.63], kind: "founding", side: "almoravids", until: "1100", text: "Yusuf ibn Tashfin founds a new capital." },
    { title: "Kanem's first Muslim king", time: "1075", at: [15.5, 14.0], kind: "note", side: "kanem", until: "1100", text: "Mai Hume, by the royal chronicle's account." },
    { title: "Sagrajas", time: "1086.8", at: [-6.97, 38.88], kind: "battle", side: "almoravids", until: "1100", text: "The Almoravids crush the army of Alfonso VI of Castile." },
  ],
  labels: [
    { text: "Sahara", at: [2, 24], size: "small" },
    { text: "Taghaza", at: [-4.98, 23.0], size: "small" },
    { text: "Sijilmasa", at: [-4.27, 30.7], size: "small" },
    { text: "Niger", at: [-3.0, 14.2], size: "small" },
    { text: "Lake Chad", at: [14.0, 13.0], size: "small" },
  ],
  story: [
    {
      title: "The caravan roads", time: "850", until: "990", view: { center: [2, 25], zoom: 3.8 },
      text: "Watch the caravans on three roads across the desert: from **Sijilmasa** past the salt of **Taghaza**, from Kairouan to **Gao**, and from Tripoli to **Kanem**.",
    },
    {
      title: "Ghana", time: "990", until: "1050", view: { center: [-6, 22], zoom: 4.4 },
      text: "The western road ends in **Ghana**: **Awdaghust** on the desert's edge, and the twin city at **Koumbi Saleh**, where gold met salt.",
    },
    {
      title: "The Almoravids", time: "1050", view: { center: [-7, 26], zoom: 3.9 },
      text: "From the western Sahara, the **Almoravids** strike both ends of the road, **Sijilmasa** and **Awdaghust**. Then follow **Yusuf ibn Tashfin** north to **Marrakesh** and across to Spain.",
    },
  ],
  sources: [
    "N. Levtzion and J. F. P. Hopkins, eds., Corpus of Early Arabic Sources for West African History (1981)",
    "Michael A. Gomez, African Dominion: A New History of Empire in Early and Medieval West Africa (2018)",
    "Ralph A. Austen, Trans-Saharan Africa in World History (2010)",
    "Caravan lanes are schematic; several site identifications (Koumbi Saleh, Awdaghust, Kanem's capital) are debated.",
  ],
};

export default map;
