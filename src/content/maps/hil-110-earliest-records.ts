import type { MapSpec } from "map-widget/spec";

/**
 * HIL 110, Lesson I: where and when each branch of Indo-European is first recorded.
 * Markers show the earliest substantial records (or, for the Rigveda, composition), not
 * homelands or migrations, and stay on the map once they appear. Dates are approximate and
 * several (Knossos, the Rigveda, Lepontic) are debated. Placed once, on the page
 * "When the Branches Begin to Write".
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The First Records of the Indo-European Branches",
  summary: "Where and when each branch of the family first appears in writing, from Bronze Age Anatolia to sixteenth-century Lithuania.",
  start: "2000 BCE",
  end: "1600",
  detail: "continent",
  playSeconds: 120,
  view: { center: [45, 44], zoom: 2.6 },
  sides: [
    { id: "anatolian", name: "Anatolian", color: "#b5651d" },
    { id: "greek", name: "Greek", color: "#1c7ed6" },
    { id: "indoiranian", name: "Indo-Iranian", color: "#e8590c" },
    { id: "italic", name: "Italic", color: "#c92a2a" },
    { id: "celtic", name: "Celtic", color: "#2b8a3e" },
    { id: "germanic", name: "Germanic", color: "#5f3dc4" },
    { id: "armenian", name: "Armenian", color: "#a61e4d" },
    { id: "tocharian", name: "Tocharian", color: "#c9a227" },
    { id: "slavic", name: "Balto-Slavic", color: "#0b7285" },
    { id: "albanian", name: "Albanian", color: "#495057" },
  ],
  events: [
    { title: "Kanesh", time: "1900 BCE", at: [35.63, 38.85], kind: "note", side: "anatolian", until: "1600", text: "Hittite names and loanwords turn up in the records of Assyrian merchants: the oldest traces of any Indo-European language." },
    { title: "Hattusa", time: "1650 BCE", at: [34.615, 40.02], kind: "note", side: "anatolian", until: "1600", text: "Hittite is written in cuneiform at the capital; its archive, found in 1906, holds thousands of tablets." },
    { title: "Knossos", time: "1400 BCE", at: [25.163, 35.298], kind: "note", side: "greek", until: "1600", text: "Linear B tablets in Mycenaean Greek, deciphered by Michael Ventris in 1952." },
    { title: "Mitanni", time: "1350 BCE", at: [40.07, 36.83], kind: "treaty", side: "indoiranian", until: "1600", text: "A treaty with the Hittites invokes Mitra, Varuna, Indra, and the Nasatyas: Indo-Aryan gods in northern Mesopotamia." },
    { title: "The Rigveda", time: "1200 BCE", at: [74, 31.5], kind: "note", side: "indoiranian", until: "1600", text: "Hymns composed in the Punjab, perhaps 1500–1200 BCE, and handed down orally for many centuries before being written." },
    { title: "Lepontic", time: "575 BCE", at: [9.05, 46.0], kind: "note", side: "celtic", until: "1600", text: "Inscriptions near the lakes of Lugano and Como: the oldest Celtic texts, from about the sixth century BCE." },
    { title: "The Lapis Niger", time: "550 BCE", at: "Rome", kind: "note", side: "italic", until: "1600", text: "An inscribed stone in the Roman Forum, among the oldest Latin texts." },
    { title: "Behistun", time: "520 BCE", at: [47.44, 34.39], kind: "note", side: "indoiranian", until: "1600", text: "Darius I records his deeds in Old Persian, Elamite, and Babylonian on a cliff face." },
    { title: "Vimose comb", time: "160", at: [10.24, 55.27], kind: "note", side: "germanic", until: "1600", text: "One of the oldest runic inscriptions, a single word on a bone comb from Funen in Denmark." },
    { title: "Wulfila's Gothic Bible", time: "360", at: [25.6, 43.2], kind: "note", side: "germanic", until: "1600", text: "Bishop Wulfila translates the Bible for the Goths on the lower Danube: the first long Germanic text." },
    { title: "Ogham", time: "400", at: [-9.6, 52.1], kind: "note", side: "celtic", until: "1600", text: "Irish names carved in notches along the edges of standing stones, from about the fourth century." },
    { title: "Armenian alphabet", time: "405", at: [44.29, 40.16], kind: "note", side: "armenian", until: "1600", text: "Mesrop Mashtots creates the Armenian alphabet; a Bible translation soon follows." },
    { title: "Tocharian B", time: "600", at: [82.96, 41.72], kind: "note", side: "tocharian", until: "1600", text: "Buddhist manuscripts from Kucha in the Tarim Basin, in a language unknown until 1908." },
    { title: "Tocharian A", time: "700", at: [89.19, 42.95], kind: "note", side: "tocharian", until: "1600", text: "The second Tocharian language, from the region of Turfan and Karashahr." },
    { title: "Cyril and Methodius", time: "863", at: [17.06, 48.8], kind: "note", side: "slavic", until: "1600", text: "The mission to Great Moravia: Slavonic scripture and liturgy in the new Glagolitic script." },
    { title: "Albanian", time: "1462", at: [19.45, 41.32], kind: "note", side: "albanian", until: "1600", text: "The Archbishop of Durrës writes a baptismal formula in Albanian, its oldest known sentence." },
    { title: "Lithuanian", time: "1547", at: [20.51, 54.71], kind: "note", side: "slavic", until: "1600", text: "Martynas Mažvydas's catechism, printed at Königsberg: the first Lithuanian book." },
  ],
  labels: [
    { text: "Anatolia", at: [30.8, 38.2], size: "small" },
    { text: "Tarim Basin", at: [84, 39.5], size: "small" },
    { text: "Punjab", at: [73.5, 30], size: "small" },
  ],
  story: [
    {
      title: "Bronze Age Anatolia", time: "2000 BCE", until: "1300 BCE", view: { center: [32, 38], zoom: 4.6 },
      text: "The first markers appear in **Anatolia**, at **Kanesh** and **Hattusa**. Then **Knossos** in Crete and, far to the east, **Mitanni**. The oldest records cluster around the eastern Mediterranean.",
    },
    {
      title: "From the Punjab to Rome", time: "1300 BCE", until: "1", view: { center: [42, 38], zoom: 2.6 },
      text: "Find the **Rigveda** in the Punjab, then watch **Lepontic**, **Latin**, and **Old Persian** appear almost together, some five thousand kilometres apart.",
    },
    {
      title: "Late antiquity", time: "1", until: "550", view: { center: [17, 49], zoom: 3.0 },
      text: "Germanic appears on a Danish comb and in **Wulfila**'s Bible on the Danube; Irish on **Ogham** stones; and, far to the southeast, **Armenian**.",
    },
    {
      title: "A surprise in Central Asia", time: "550", until: "800", view: { center: [80, 41], zoom: 3.6 },
      text: "Now look east of the Pamirs: **Tocharian**, written at **Kucha** and **Turfan**, is the easternmost branch of all.",
    },
    {
      title: "The latecomers", time: "800", view: { center: [21, 49], zoom: 3.8 },
      text: "**Slavic** in 863, **Albanian** in 1462, and **Lithuanian** in 1547: branches spoken in the middle of the family's range, recorded last of all.",
    },
  ],
  sources: [
    "Benjamin W. Fortson IV, Indo-European Language and Culture (2nd ed., 2010)",
    "J. P. Mallory and D. Q. Adams, The Oxford Introduction to Proto-Indo-European and the Proto-Indo-European World (2006)",
    "Roger D. Woodard, ed., The Cambridge Encyclopedia of the World's Ancient Languages (2004)",
    "Dates are approximate; several, especially for Knossos, the Rigveda, and Lepontic, are debated.",
  ],
};

export default map;
