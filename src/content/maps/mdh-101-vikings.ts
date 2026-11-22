import type { MapSpec } from "map-widget/spec";

/**
 * MDH 101, Lesson V: the Viking Age, 793–c. 1021, placed on "The Vikings". Raids, migrations,
 * and voyages are drawn as arrows, the eastern river route as a trade lane; dated markers
 * follow the lesson. Several dates (Dublin c. 841, Iceland in the 870s, Greenland c. 985,
 * Vinland c. 1000) are approximate; L'Anse aux Meadows is dated by tree rings to 1021.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Viking Age, 793–1021",
  summary: "Raiders, settlers, and traders from Scandinavia: Lindisfarne, Dublin, Paris, the Danelaw, Normandy, Iceland, Greenland, Vinland, and the Rus.",
  start: "790",
  end: "1030",
  detail: "continent",
  playSeconds: 120,
  view: { center: [0, 57], zoom: 2.9 },
  sides: [
    { id: "norse", name: "Vikings", color: "#1c7ed6" },
  ],
  arrows: [
    { from: [5.3, 60.4], to: [-1.8, 55.67], label: "Raiders", color: "#1c7ed6", start: "792", end: "860" },
    { from: [5.3, 60.4], to: [-6.26, 53.35], label: "Norwegians", color: "#1c7ed6", start: "835", end: "900" },
    { from: [8.5, 55.5], to: [1.3, 52.6], label: "Great Army", color: "#c92a2a", start: "864", end: "880" },
    { from: [8.5, 55.5], to: [0.5, 49.6], label: "Seine", color: "#c92a2a", start: "843", end: "915" },
    { from: [5.3, 60.4], to: [-21.9, 64.1], label: "Settlers", color: "#1c7ed6", start: "868", end: "940" },
    { from: [-22.0, 64.5], to: [-45.5, 61.15], label: "Erik the Red", color: "#1c7ed6", start: "984", end: "1030" },
    { from: [-45.5, 61.15], to: [-55.53, 51.6], label: "Leif Erikson", color: "#1c7ed6", start: "999", end: "1030" },
  ],
  routes: [
    { name: "The eastern route", stops: [[17.54, 59.33], [29.0, 59.9], [31.27, 58.52], [30.52, 50.45], [32.0, 46.6], [28.97, 41.01]], bySea: false, ships: 8, color: "#b5651d", start: "850", end: "1030", description: "Furs, wax, and slaves for silver" },
    { name: "The Volga", stops: [[31.27, 58.52], [38.0, 57.6], [49.06, 54.98], [47.5, 46.3]], bySea: false, ships: 5, color: "#b5651d", start: "850", end: "1030" },
  ],
  events: [
    { title: "Lindisfarne", time: "793", at: [-1.8, 55.67], kind: "siege", side: "norse", until: "1030", text: "Raiders from the sea sack the monastery of St. Cuthbert: the conventional start of the Viking Age." },
    { title: "Dublin", time: "841", at: [-6.26, 53.35], kind: "founding", side: "norse", until: "1030", text: "Norwegians found a town that becomes a center of trade, including the trade in slaves." },
    { title: "Paris", time: "845", at: [2.35, 48.86], kind: "siege", side: "norse", until: "880", text: "Vikings sail up the Seine and sack Paris; Charles the Bald pays seven thousand pounds of silver." },
    { title: "Constantinople attacked", time: "860", at: [28.97, 41.01], kind: "siege", side: "norse", until: "1030", text: "The Rus attack the Byzantine capital; later, Scandinavians serve its emperors in the Varangian Guard." },
    { title: "Novgorod and Kyiv", time: "870", at: [31.27, 58.52], kind: "founding", side: "norse", until: "1030", text: "The Rus establish themselves as rulers of the Slavs around Novgorod and Kyiv." },
    { title: "The Danelaw", time: "878", at: [-1.08, 53.96], kind: "note", side: "norse", until: "1030", text: "The Great Heathen Army conquers Northumbria, East Anglia, and much of Mercia; only Wessex survives." },
    { title: "Iceland", time: "874", at: [-21.9, 64.1], kind: "founding", side: "norse", until: "1030", text: "Norwegians settle Iceland; in 930 they found the Althing." },
    { title: "Siege of Paris", time: "886", at: [2.4, 48.9], kind: "siege", side: "norse", until: "911", text: "A great army besieges Paris for nearly a year; Count Odo's defense makes his family's name." },
    { title: "Normandy", time: "911", at: [1.1, 49.44], kind: "treaty", side: "norse", until: "1030", text: "Charles the Simple grants Rollo the land around the mouth of the Seine." },
    { title: "Ibn Fadlan", time: "922", at: [49.06, 54.98], kind: "note", until: "1030", text: "An Arab envoy meets the Rus on the Volga and describes a chieftain's ship funeral." },
    { title: "Greenland", time: "985", at: [-45.5, 61.15], kind: "founding", side: "norse", until: "1030", text: "Erik the Red, exiled from Iceland, founds a settlement." },
    { title: "L'Anse aux Meadows", time: "1021", at: [-55.53, 51.6], kind: "discovery", side: "norse", until: "1030", text: "Norse wood at the Newfoundland site is dated by tree rings to 1021: Vinland." },
  ],
  labels: [
    { text: "Scandinavia", at: [14, 63], size: "small" },
    { text: "Atlantic Ocean", at: [-30, 55], size: "small" },
    { text: "Baltic", at: [19.5, 57.2], size: "small" },
  ],
  story: [
    {
      title: "Raiders from the sea", time: "790", until: "860", view: { center: [-2, 55], zoom: 4.1 },
      text: "Watch the first raids strike **Lindisfarne**, then the Norwegians found **Dublin** and the Danes sail up the Seine to **Paris**.",
    },
    {
      title: "Armies and settlers", time: "860", until: "930", view: { center: [0, 56], zoom: 3.7 },
      text: "A **Great Army** conquers much of England and settles the **Danelaw**; settlers reach **Iceland**; and in 911 Rollo receives **Normandy**.",
    },
    {
      title: "The eastern route", time: "930", until: "980", view: { center: [30, 54], zoom: 3.6 },
      text: "Meanwhile, since the ninth century, the **Rus** have followed the rivers from the Baltic to **Novgorod**, **Kyiv**, and **Constantinople**, and down the **Volga**, where Ibn Fadlan met them in 922.",
    },
    {
      title: "Greenland and Vinland", time: "980", view: { center: [-30, 59], zoom: 2.9 },
      text: "Farthest west: **Erik the Red** in **Greenland**, and his son **Leif** at **Vinland** on the coast of North America.",
    },
  ],
  sources: [
    "Anglo-Saxon Chronicle",
    "Neil Price, Children of Ash and Elm: A History of the Vikings (2020)",
    "Margot Kuitems and others, \"Evidence for European presence in the Americas in AD 1021,\" Nature 601 (2022)",
    "Several dates are approximate; arrows show directions of raids and migrations, not exact routes.",
  ],
};

export default map;
