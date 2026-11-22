import type { MapSpec } from "map-widget/spec";

/**
 * IAH 110, Lesson II: the de Soto expedition, 1539–1543, placed on "De Soto and the Remaking
 * of the South". The route follows the reconstruction associated with Charles Hudson, which
 * is debated in many places; Mabila's site has never been identified and is placed only
 * approximately in central Alabama. After de Soto's death in 1542, the survivors under Luis de
 * Moscoso are followed west into Texas, back to the Mississippi, and by boat to Pánuco.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The de Soto Expedition, 1539–1543",
  summary: "Through the Mississippian chiefdoms of the Southeast, from Tampa Bay to Cofitachequi, Coosa, Mabila, and the Mississippi.",
  start: "1539-05",
  end: "1543-10",
  detail: "region",
  playSeconds: 110,
  trails: "full",
  view: { center: [-87.5, 31.5], zoom: 4.9 },
  sides: [
    { id: "spain", name: "De Soto's army", color: "#c92a2a" },
  ],
  moves: [
    {
      name: "De Soto", side: "spain", kind: "army",
      path: [
        { at: [-82.6, 27.6], time: "1539-05-30" }, { at: [-82.3, 29.65], time: "1539-08-15" }, { at: [-84.28, 30.44], time: "1539-10-06" },
        { at: [-84.28, 30.44], time: "1540-03-03" }, { at: [-83.3, 33.3], time: "1540-04-10" }, { at: [-80.6, 34.25], time: "1540-05-01" },
        { at: [-81.68, 35.74], time: "1540-05-21" }, { at: [-83.4, 35.97], time: "1540-06-05" }, { at: [-84.7, 34.6], time: "1540-07-16" },
        { at: [-84.7, 34.6], time: "1540-08-20" }, { at: [-86.9, 33.0], time: "1540-10-10" }, { at: [-87.3, 32.4], time: "1540-10-18" },
        { at: [-88.7, 34.26], time: "1540-12-17" }, { at: [-88.7, 34.26], time: "1541-04-25" }, { at: [-90.6, 34.5], time: "1541-06-18" },
        { at: [-90.5, 35.3], time: "1541-07-10" }, { at: [-92.83, 33.58], time: "1541-11-02" }, { at: [-92.83, 33.58], time: "1542-03-06" },
        { at: [-91.2, 33.8], time: "1542-04-15" }, { at: [-91.2, 33.8], time: "1542-05-21" },
      ],
    },
    {
      name: "Moscoso", side: "spain", kind: "army",
      path: [
        { at: [-91.2, 33.8], time: "1542-06-05" }, { at: [-93.75, 32.5], time: "1542-08-01" }, { at: [-95.6, 31.8], time: "1542-10-01" },
        { at: [-91.1, 34.0], time: "1542-12-10" }, { at: [-91.1, 34.0], time: "1543-07-02" }, { at: [-89.4, 29.2], time: "1543-07-18" },
      ],
    },
    { name: "Down to the Gulf and Mexico", side: "spain", kind: "ship", bySea: true, path: [{ at: [-89.4, 29.2], time: "1543-07-18" }, { at: [-97.86, 22.23], time: "1543-09-10" }] },
  ],
  events: [
    { title: "The landing", time: "1539-05-30", at: [-82.6, 27.6], kind: "note", side: "spain", until: "1543-10", text: "Some six hundred soldiers, over two hundred horses, pigs, war dogs, and chains for captives." },
    { title: "Apalachee", time: "1539-10-06", at: [-84.28, 30.44], kind: "note", until: "1543-10", text: "The army winters in the Apalachee capital." },
    { title: "Cofitachequi", time: "1540-05-01", at: [-80.6, 34.25], kind: "note", until: "1543-10", text: "The Lady of Cofitachequi gives de Soto her pearls; he takes her hostage, and she escapes on the road." },
    { title: "Coosa", time: "1540-07-16", at: [-84.7, 34.6], kind: "note", until: "1543-10", text: "A paramount chiefdom whose ruler is carried on a litter; de Soto takes him hostage too." },
    { title: "Mabila", time: "1540-10-18", at: [-87.3, 32.4], kind: "battle", until: "1543-10", text: "Tascalusa's trap: a day of battle in which the town burns and, the chroniclers claim, thousands die. The site is unknown." },
    { title: "The Mississippi", time: "1541-06-18", at: [-90.6, 34.5], kind: "note", side: "spain", until: "1543-10", text: "The army crosses the great river into what is now Arkansas." },
    { title: "Death of de Soto", time: "1542-05-21", at: [-91.2, 33.8], kind: "note", side: "spain", until: "1543-10", text: "He dies of fever; his men sink his body in the river." },
    { title: "Pánuco", time: "1543-09-10", at: [-97.86, 22.23], kind: "note", side: "spain", until: "1543-10", text: "About half of those who landed reach Spanish Mexico." },
  ],
  labels: [
    { text: "Mississippi", at: [-90.9, 32.6], size: "small" },
    { text: "Florida", at: [-81.8, 28.6], size: "small" },
  ],
  story: [
    {
      title: "Florida to Cofitachequi", time: "1539-05", until: "1540-06-01", view: { center: [-83, 31.5], zoom: 5.4 },
      text: "From **Tampa Bay** north to winter at **Apalachee**, then across Georgia to **Cofitachequi** and its Lady.",
    },
    {
      title: "Coosa and Mabila", time: "1540-06-01", until: "1541-05-01", view: { center: [-85.5, 33.6], zoom: 5.6 },
      text: "Over the mountains and down to **Coosa**, then south to the trap at **Mabila**, and on to winter among the Chickasaws.",
    },
    {
      title: "The Mississippi and after", time: "1541-05-01", view: { center: [-91.5, 31.5], zoom: 4.8 },
      text: "Across the **Mississippi**, the death of de Soto, Moscoso's march into Texas and back, and the escape downriver to Mexico.",
    },
  ],
  sources: [
    "Lawrence A. Clayton, Vernon James Knight Jr., and Edward C. Moore, eds., The De Soto Chronicles (1993)",
    "Charles Hudson, Knights of Spain, Warriors of the Sun: Hernando de Soto and the South's Ancient Chiefdoms (1997)",
    "The route is a debated reconstruction; Mabila's site is unknown.",
  ],
};

export default map;
