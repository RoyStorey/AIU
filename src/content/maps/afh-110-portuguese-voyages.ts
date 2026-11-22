import type { MapSpec } from "map-widget/spec";

/**
 * AFH 110, Lesson I: the Portuguese voyages down the coast of West Africa, 1415–1482, as the
 * lesson tells them. Chapters 1–2 (Ceuta and the islands; beyond Bojador to Lagos, Arguin,
 * and Sierra Leone) sit on "Why the Atlantic?"; chapter 3 (the Gold Coast, São Tomé, and
 * Elmina) on "Elmina and the Gold Coast". Only a few voyages are drawn; others appear as
 * dated markers. Voyage dates within a year are approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Portugal and the Coast of Africa, 1415–1482",
  summary: "From the capture of Ceuta and the passing of Cape Bojador to the captives landed at Lagos, Arguin, and the fortress of Elmina.",
  start: "1414",
  end: "1484",
  detail: "continent",
  playSeconds: 120,
  trails: "fade",
  view: { center: [-10, 20], zoom: 3.4 },
  sides: [
    { id: "portugal", name: "Portuguese voyages", color: "#1c7ed6" },
  ],
  moves: [
    { name: "Gil Eanes", side: "portugal", kind: "ship", bySea: true, path: [{ at: [-8.67, 37.1], time: "1434.3" }, { at: [-14.6, 26.13], time: "1434.5" }, { at: [-8.67, 37.1], time: "1434.75" }] },
    { name: "Lançarote's caravels", side: "portugal", kind: "fleet", bySea: true, path: [{ at: [-8.67, 37.1], time: "1444.25" }, { at: [-16.6, 20.5], time: "1444.4" }, { at: [-8.67, 37.1], time: "1444.6" }] },
    {
      name: "Cadamosto", side: "portugal", kind: "ship", bySea: true,
      path: [{ at: [-8.67, 37.1], time: "1455.3" }, { at: [-16.9, 32.6], time: "1455.35" }, { at: [-15.4, 28.0], time: "1455.4" }, { at: [-16.55, 15.9], time: "1455.5" }, { at: [-16.7, 13.45], time: "1455.6" }],
    },
    { name: "To the Gold Coast", side: "portugal", kind: "ship", bySea: true, path: [{ at: [-9.14, 38.7], time: "1470.8" }, { at: [-13.3, 8.4], time: "1471.1" }, { at: [-1.35, 5.05], time: "1471.4" }] },
    { name: "Azambuja", side: "portugal", kind: "fleet", bySea: true, path: [{ at: [-9.14, 38.7], time: "1481-12-12" }, { at: [-1.35, 5.05], time: "1482-01-19" }] },
  ],
  events: [
    { title: "Ceuta", time: "1415", at: [-5.31, 35.89], kind: "siege", side: "portugal", until: "1484", text: "A Portuguese army captures the Muslim port opposite Gibraltar." },
    { title: "Madeira", time: "1420", at: [-16.9, 32.65], kind: "founding", side: "portugal", until: "1484", text: "The uninhabited island is settled; by the 1470s it is Europe's leading sugar producer." },
    { title: "Cape Bojador", time: "1434.5", at: [-14.5, 26.13], kind: "discovery", side: "portugal", until: "1484", text: "Gil Eanes passes the cape sailors feared, and returns with flowers from the shore beyond." },
    { title: "The first captives", time: "1441", at: [-15.9, 23.7], kind: "note", side: "portugal", until: "1484", text: "Antão Gonçalves and Nuno Tristão seize a handful of Berbers on the Saharan coast." },
    { title: "Lagos", time: "1444-08-08", at: [-8.67, 37.1], kind: "note", side: "portugal", until: "1484", text: "Some 235 captives from the islands near Arguin are landed and divided; Zurara describes the scene." },
    { title: "Senegal and Cape Verde", time: "1444.8", at: [-17.45, 14.72], kind: "discovery", side: "portugal", until: "1484", text: "Portuguese ships reach the Senegal River and Cape Verde." },
    { title: "Arguin", time: "1448", at: [-16.45, 20.6], kind: "founding", side: "portugal", until: "1484", text: "A fort on the island, where horses, cloth, and wheat are traded for gold and slaves." },
    { title: "Sierra Leone", time: "1460", at: [-13.2, 8.45], kind: "discovery", side: "portugal", until: "1484", text: "By Henry's death, regular trade reaches as far as Sierra Leone." },
    { title: "São Tomé", time: "1470.8", at: [6.73, 0.34], kind: "discovery", side: "portugal", until: "1484", text: "The uninhabited islands of the Gulf of Guinea, later the first plantation economy." },
    { title: "A Mina", time: "1471.4", at: [-1.35, 5.05], kind: "discovery", side: "portugal", until: "1484", text: "Ships sponsored by Fernão Gomes find people eager to trade gold: the Gold Coast." },
    { title: "Elmina", time: "1482-01-19", at: [-1.35, 5.08], kind: "founding", side: "portugal", until: "1484", text: "Azambuja builds São Jorge da Mina, held by leave of the local rulers." },
  ],
  labels: [
    { text: "Atlantic Ocean", at: [-24, 22], size: "small" },
    { text: "Gulf of Guinea", at: [3, 2.5], size: "small" },
    { text: "Sahara", at: [-5, 22], size: "small" },
  ],
  story: [
    {
      title: "Ceuta and the islands", time: "1414", until: "1433", view: { center: [-10, 32], zoom: 4.6 },
      text: "The story begins at **Ceuta**, across from Gibraltar. Soon the Portuguese are settling **Madeira**, far out in the Atlantic.",
    },
    {
      title: "Beyond Bojador", time: "1433", until: "1462", view: { center: [-13, 24], zoom: 4.0 },
      text: "Watch **Gil Eanes** pass **Cape Bojador** and return. Ten years later, **Lançarote**'s caravels bring captives from Arguin to **Lagos**, and the ships push on to **Cape Verde** and **Sierra Leone**.",
    },
    {
      title: "The Gold Coast", time: "1462", view: { center: [-4, 13], zoom: 3.5 },
      text: "Past the bulge of Africa: ships reach **São Tomé** and the **Gold Coast** in 1471, and in 1482 **Azambuja**'s fleet arrives to build **Elmina**.",
    },
  ],
  sources: [
    "Gomes Eanes de Zurara, Chronicle of the Discovery and Conquest of Guinea",
    "John Thornton, Africa and Africans in the Making of the Atlantic World, 1400–1800 (2nd ed., 1998)",
    "P. E. Russell, Prince Henry 'the Navigator': A Life (2000)",
    "Only some voyages are drawn; dates within a year are approximate.",
  ],
};

export default map;
