import type { MapSpec } from "map-widget/spec";

/**
 * ASH 101, Lesson V: the voyages of Zheng He, 1405–1433, placed on "Zheng He and the Ming
 * World Order". Four of the seven voyages are drawn (the first, fourth, fifth, and seventh),
 * with the ports the lesson names; the others appear as markers. Dates within a voyage are
 * approximate. The fleets assembled near the mouth of the Yangzi (Liujiagang) and wintered
 * in Fujian before sailing south with the monsoon; the map starts them at the Yangzi.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Voyages of Zheng He, 1405–1433",
  summary: "Seven Ming fleets to Southeast Asia, Ceylon, Calicut, Hormuz, Aden, and East Africa, and the turn to the north after Tumu.",
  start: "1405",
  end: "1450",
  detail: "continent",
  playSeconds: 140,
  trails: "fade",
  view: { center: [85, 12], zoom: 2.9 },
  sides: [
    { id: "ming", name: "Ming fleets", color: "#c92a2a" },
  ],
  moves: [
    {
      name: "First voyage", side: "ming", kind: "fleet", bySea: true,
      path: [
        { at: [121.3, 31.4], time: "1405.6" }, { at: [109.25, 13.75], time: "1406.0" }, { at: [112.75, -7.15], time: "1406.2" },
        { at: [104.9, -2.2], time: "1406.35" }, { at: [102.25, 2.18], time: "1406.45" }, { at: [97.3, 5.3], time: "1406.55" },
        { at: [80.22, 6.0], time: "1406.75" }, { at: [75.77, 11.25], time: "1406.9" }, { at: [75.77, 11.25], time: "1407.0" },
        { at: [102.25, 2.18], time: "1407.3" }, { at: [121.3, 31.4], time: "1407.75" },
      ],
    },
    {
      name: "Fourth voyage", side: "ming", kind: "fleet", bySea: true,
      path: [
        { at: [121.3, 31.4], time: "1413.9" }, { at: [102.25, 2.18], time: "1414.3" }, { at: [80.22, 6.0], time: "1414.55" },
        { at: [75.77, 11.25], time: "1414.7" }, { at: [56.27, 27.1], time: "1414.95" }, { at: [75.77, 11.25], time: "1415.2" },
        { at: [121.3, 31.4], time: "1415.6" },
      ],
    },
    {
      name: "Fifth voyage", side: "ming", kind: "fleet", bySea: true,
      path: [
        { at: [121.3, 31.4], time: "1417.5" }, { at: [102.25, 2.18], time: "1417.9" }, { at: [75.77, 11.25], time: "1418.2" },
        { at: [56.27, 27.1], time: "1418.4" }, { at: [45.03, 12.79], time: "1418.6" }, { at: [45.34, 2.04], time: "1418.75" },
        { at: [40.12, -3.22], time: "1418.85" }, { at: [75.77, 11.25], time: "1419.2" }, { at: [121.3, 31.4], time: "1419.6" },
      ],
    },
    {
      name: "Seventh voyage", side: "ming", kind: "fleet", bySea: true,
      path: [
        { at: [121.3, 31.4], time: "1431.1" }, { at: [109.25, 13.75], time: "1432.0" }, { at: [102.25, 2.18], time: "1432.2" },
        { at: [80.22, 6.0], time: "1432.5" }, { at: [75.77, 11.25], time: "1432.65" }, { at: [56.27, 27.1], time: "1432.95" },
        { at: [75.77, 11.25], time: "1433.25" }, { at: [121.3, 31.4], time: "1433.55" },
      ],
    },
    { name: "Detachment to Arabia", side: "ming", kind: "ship", bySea: true, path: [{ at: [75.77, 11.25], time: "1432.7" }, { at: [39.17, 21.48], time: "1433.0" }, { at: [75.77, 11.25], time: "1433.25" }] },
  ],
  events: [
    { title: "Nanjing", time: "1405.5", at: [118.8, 32.06], kind: "note", side: "ming", until: "1421", text: "The Yongle Emperor sends the first fleet: some 27,000 men in more than 250 ships." },
    { title: "Calicut", time: "1406.9", at: [75.77, 11.25], kind: "note", side: "ming", until: "1450", text: "The great pepper port of southern India, visited on every voyage." },
    { title: "Galle stone", time: "1409", at: [80.22, 6.03], kind: "note", side: "ming", until: "1450", text: "Offerings to the Buddha, a Hindu deity, and Allah, recorded in Chinese, Tamil, and Persian." },
    { title: "A king captured", time: "1411", at: [79.9, 6.9], kind: "battle", side: "ming", until: "1450", text: "Zheng He's troops defeat a Sri Lankan king who attacked them and carry him to China." },
    { title: "The giraffe", time: "1414.7", at: [90.4, 23.7], kind: "note", side: "ming", until: "1450", text: "Envoys from Bengal present a giraffe, hailed at court as the auspicious qilin." },
    { title: "Hormuz", time: "1414.95", at: [56.27, 27.1], kind: "note", side: "ming", until: "1450", text: "The fleets reach the Persian Gulf." },
    { title: "Malindi", time: "1418.85", at: [40.12, -3.22], kind: "note", side: "ming", until: "1450", text: "Later voyages reach the coast of East Africa." },
    { title: "Beijing", time: "1421", at: [116.4, 39.9], kind: "note", side: "ming", until: "1450", text: "Yongle moves the capital north; after his death in 1424 the voyages are suspended." },
    { title: "Death of Zheng He", time: "1433.3", at: [75.77, 11.25], kind: "note", side: "ming", until: "1450", text: "The admiral dies during the last voyage; the fleets never sail again." },
    { title: "Tumu", time: "1449.6", at: [115.5, 40.4], kind: "battle", until: "1450", text: "The Zhengtong Emperor is captured by the Oirat Mongols near the Great Wall." },
  ],
  labels: [
    { text: "Indian Ocean", at: [78, -2], size: "small" },
    { text: "South China Sea", at: [113, 13], size: "small" },
    { text: "Malacca", at: [102.25, 3.2], size: "small" },
  ],
  story: [
    {
      title: "The first voyage", time: "1405", until: "1408", view: { center: [100, 12], zoom: 3.3 },
      text: "Watch the first fleet sail south from the Yangzi past **Champa**, **Java**, and **Malacca** to Ceylon and **Calicut**, and home again.",
    },
    {
      title: "Ceylon and Calicut", time: "1408", until: "1413", view: { center: [80, 8], zoom: 4.3 },
      text: "The second and third voyages return to the same waters: the stone at **Galle** in 1409, and in 1411 a battle with a king of Sri Lanka.",
    },
    {
      title: "To Hormuz and Africa", time: "1413", until: "1422", view: { center: [72, 10], zoom: 2.9 },
      text: "The fleets reach farther: **Hormuz** in the Persian Gulf, then **Aden**, Mogadishu, and **Malindi**. Meanwhile, Bengal's giraffe arrives at court.",
    },
    {
      title: "The last voyage", time: "1422", view: { center: [88, 18], zoom: 2.8 },
      text: "After a pause, one last fleet sails in 1431; a detachment heads for Arabia, and Zheng He dies on the way home. Then the court's gaze turns north, to **Tumu** in 1449.",
    },
  ],
  sources: [
    "Ma Huan, Ying-yai Sheng-lan: The Overall Survey of the Ocean's Shores (1433), trans. J. V. G. Mills (1970)",
    "Edward L. Dreyer, Zheng He: China and the Oceans in the Early Ming Dynasty, 1405–1433 (2007)",
    "Timothy Brook, The Troubled Empire: China in the Yuan and Ming Dynasties (2010)",
    "Four of the seven voyages are drawn; dates within a voyage are approximate.",
  ],
};

export default map;
