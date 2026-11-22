import type { MapSpec } from "map-widget/spec";

/**
 * AFH 101, Lesson IV: Mansa Musa's pilgrimage, 1324–1325, placed on "Mansa Musa's
 * Pilgrimage". The site of Mali's capital is unknown (Niani is the traditional candidate,
 * marked with a question). The desert crossing outbound by Walata and Tuat follows a common
 * reconstruction; the route home to Gao is not recorded and is drawn directly. Months are
 * approximate apart from the arrival in Cairo (July 1324) and the hajj (late 1324).
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Mansa Musa's Pilgrimage, 1324–1325",
  summary: "From Mali across the Sahara to Cairo and Mecca, and home by Gao and Timbuktu.",
  start: "Jan 1324",
  end: "1328",
  detail: "continent",
  playSeconds: 90,
  trails: "full",
  view: { center: [15, 22], zoom: 3.1 },
  sides: [
    { id: "mali", name: "Mansa Musa's caravan", color: "#c9a227" },
  ],
  moves: [
    {
      name: "Mansa Musa", side: "mali", kind: "caravan",
      path: [
        { at: [-8.37, 11.38], time: "Jan 1324" }, { at: [-7.03, 17.29], time: "Mar 1324" }, { at: [-0.29, 27.87], time: "May 1324" },
        { at: "Cairo", time: "Jul 1324" }, { at: "Cairo", time: "1 Oct 1324" }, { at: [35.0, 29.53], time: "20 Oct 1324" },
        { at: "Mecca", time: "18 Nov 1324" }, { at: "Mecca", time: "10 Dec 1324" }, { at: "Cairo", time: "Feb 1325" },
        { at: "Cairo", time: "Mar 1325" }, { at: [-0.04, 16.27], time: "Jul 1325" }, { at: "Timbuktu", time: "Aug 1325" },
        { at: [-8.37, 11.38], time: "Oct 1325" },
      ],
    },
  ],
  events: [
    { title: "Mali's capital?", time: "Jan 1324", at: [-8.37, 11.38], kind: "note", side: "mali", until: "1328", text: "The site of the capital is unknown; Niani, marked here, is the traditional candidate." },
    { title: "Cairo", time: "Jul 1324", at: "Cairo", kind: "note", side: "mali", until: "1328", text: "Musa \"flooded Cairo with his benefactions\": the price of gold falls for more than a decade." },
    { title: "Mecca", time: "Nov 1324", at: "Mecca", kind: "note", side: "mali", until: "1328", text: "The hajj. Musa meets Abu Ishaq al-Sahili, a poet and architect from Granada." },
    { title: "Borrowing in Cairo", time: "Feb 1325", at: [31.4, 30.2], kind: "note", side: "mali", until: "Jun 1325", text: "Out of gold, Musa borrows from Cairo merchants at high interest for the road home." },
    { title: "Gao", time: "Jul 1325", at: [-0.04, 16.27], kind: "note", side: "mali", until: "1328", text: "Musa visits the Songhay capital, recently brought under Mali, and builds a mosque." },
    { title: "Djinguereber", time: "1327", at: "Timbuktu", kind: "founding", side: "mali", until: "1328", text: "The great mosque of Timbuktu, built around 1327 and traditionally credited to al-Sahili." },
  ],
  labels: [
    { text: "Sahara", at: [5, 24], size: "small" },
    { text: "Walata", at: [-7.03, 16.7], size: "small" },
    { text: "Tuat", at: [-0.29, 27.3], size: "small" },
  ],
  story: [
    {
      title: "Across the Sahara", time: "Jan 1324", until: "Jul 1324", view: { center: [10, 22], zoom: 3.3 },
      text: "Follow the caravan from Mali through **Walata** and the oases of **Tuat** toward Egypt.",
    },
    {
      title: "Cairo and Mecca", time: "Jul 1324", until: "Mar 1325", view: { center: [35.3, 24.6], zoom: 4.1 },
      text: "Three months in **Cairo**, then the road down the Red Sea coast to **Mecca** for the hajj, and back to Cairo with empty purses.",
    },
    {
      title: "Homeward", time: "Mar 1325", view: { center: [10, 21], zoom: 3.3 },
      text: "The return by **Gao** and **Timbuktu**, where a new mosque will rise by 1327.",
    },
  ],
  sources: [
    "Al-Umari, Masalik al-absar, in N. Levtzion and J. F. P. Hopkins, eds., Corpus of Early Arabic Sources for West African History (1981)",
    "Michael A. Gomez, African Dominion (2018)",
    "The routes are reconstructions; the outbound crossing by Walata and Tuat is a common but uncertain account.",
  ],
};

export default map;
