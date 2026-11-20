import type { MapSpec } from "map-widget/spec";

/**
 * MEH 101, Lesson I, page 6: "The Last Great War of Antiquity, 603–630".
 * Follows the page's own account: the Persian conquest of the Roman East, Heraclius's
 * counterattack through Armenia, the siege of Constantinople, Nineveh, and the peace.
 * Borders are approximate; the Balkan losses are shown only in outline.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Last Great War of Antiquity, 603–630",
  summary: "Rome and Persia from the murder of Maurice to the return of the True Cross: the Persian conquest of Syria, Palestine and Egypt, and Heraclius's counterattack through Armenia to Nineveh.",
  start: "602-06",
  end: "630-06",
  detail: "continent",
  playSeconds: 150,
  trails: "full",
  sides: [
    { id: "rome", name: "Roman Empire", color: "#8a3b6d", capital: "Constantinople", description: "The eastern Roman (Byzantine) empire under Maurice, Phocas and Heraclius" },
    { id: "persia", name: "Sasanian Persia", color: "#3f7d5c", capital: "Ctesiphon", description: "The Sasanian empire under Khusrau II" },
    { id: "avars", name: "Avars", color: "#b07d2a", description: "The Avar khaganate of the Hungarian plain and its Slav subjects" },
    { id: "turks", name: "Western Turks", color: "#5f6b7a", description: "The Western Turkic khaganate, Heraclius's ally from 626" },
  ],
  territories: [
    // the Roman East, province by province (listed before the large areas so they take precedence)
    {
      name: "Upper Mesopotamia",
      area: [[37.7, 37.7], [39.0, 38.0], [40.4, 38.2], [41.2, 37.9], [41.0, 37.25], [40.6, 36.9], [39.6, 36.0], [38.3, 36.9]],
      owner: "rome",
      changes: [
        { side: "persia", start: "604-01", end: "610-01", from: "Dara" },
        { side: "rome", start: "628-06", end: "629-06", from: [38.0, 37.9] },
      ],
    },
    {
      name: "Roman Armenia",
      area: [[39.0, 38.0], [39.3, 40.5], [40.4, 41.0], [41.6, 41.6], [44.0, 41.2], [44.2, 40.5], [43.6, 39.4], [42.6, 38.9], [41.2, 37.9], [40.4, 38.2]],
      owner: "rome",
      changes: [
        { side: "persia", start: "607-01", end: "611-01", from: "Dvin" },
        { side: "rome", start: "628-06", end: "629-06", from: "Theodosiopolis" },
      ],
    },
    {
      // Antioch fell in 610 or 611
      name: "Northern Syria",
      area: [[35.6, 36.9], [37.7, 37.7], [38.3, 36.9], [39.6, 36.0], [39.2, 35.3], [35.85, 35.0]],
      owner: "rome",
      changes: [
        { side: "persia", start: "610-08", end: "611-06", from: [38.6, 36.4] },
        { side: "rome", start: "629-07", end: "630-01", from: [35.6, 36.9] },
      ],
    },
    {
      // Damascus fell in 613, after Heraclius's defeat near Antioch
      name: "Southern Syria",
      area: [[35.85, 35.0], [39.2, 35.3], [38.8, 34.6], [37.4, 33.1], [36.6, 32.6], [35.9, 33.3], [34.9, 33.1], [35.6, 34.6]],
      owner: "rome",
      changes: [
        { side: "persia", start: "613-06", end: "613-12", from: [36.6, 35.2] },
        { side: "rome", start: "629-07", end: "630-01", from: [36.6, 35.2] },
      ],
    },
    {
      name: "Palestine",
      area: [[34.25, 31.3], [34.9, 33.1], [35.9, 33.3], [36.6, 32.6], [36.0, 30.0], [34.9, 29.5]],
      owner: "rome",
      changes: [
        { side: "persia", start: "614-02", end: "614-07", from: [35.9, 33.3] },
        { side: "rome", start: "629-07", end: "630-03", from: [35.9, 33.3] },
      ],
    },
    {
      name: "Egypt",
      area: [[25.0, 31.9], [29.9, 31.6], [32.3, 31.6], [34.25, 31.3], [34.9, 29.5], [33.6, 27.6], [32.9, 24.0], [31.0, 23.9], [29.4, 26.5], [27.0, 29.0], [25.0, 29.5]],
      owner: "rome",
      changes: [
        { side: "persia", start: "619-01", end: "621-06", from: "Pelusium" },
        { side: "rome", start: "629-07", end: "630-03", from: "Pelusium" },
      ],
    },
    {
      name: "Balkan interior",
      area: [[19.5, 45.0], [22.0, 44.7], [25.0, 43.8], [28.0, 44.0], [27.4, 42.6], [24.5, 42.2], [22.0, 42.2], [20.0, 42.6]],
      owner: "rome",
      changes: [{ side: "avars", start: "604-01", end: "620-01", from: [21.5, 44.8] }],
    },
    {
      name: "Avar khaganate",
      area: [[16.0, 46.0], [16.3, 47.8], [19.0, 48.6], [22.5, 48.0], [23.2, 46.0], [21.5, 45.0], [19.5, 45.0], [18.0, 45.3]],
      owner: "avars",
    },
    {
      name: "Anatolia, Greece and Thrace",
      area: [[19.4, 41.8], [20.0, 42.6], [22.0, 42.2], [24.5, 42.2], [27.4, 42.6], [28.0, 44.0], [31.0, 42.5], [36.0, 42.5], [40.4, 41.0], [39.3, 40.5], [39.0, 38.0], [37.7, 37.7], [35.6, 36.9], [34.6, 35.0], [32.0, 34.4], [25.5, 34.8], [22.5, 36.0], [19.4, 39.0]],
      owner: "rome",
    },
    {
      name: "Sasanian Persia",
      area: [[41.0, 37.25], [41.2, 37.9], [42.6, 38.9], [43.6, 39.4], [44.2, 40.5], [44.0, 41.2], [46.5, 42.0], [48.5, 41.8], [50.0, 40.5], [53.5, 38.5], [56.0, 38.3], [61.0, 36.6], [62.0, 35.0], [61.5, 31.0], [61.6, 25.2], [57.3, 25.6], [54.0, 26.5], [50.5, 29.0], [48.6, 30.0], [46.5, 30.8], [44.3, 31.9], [42.7, 33.4], [41.0, 34.4], [40.4, 35.2], [40.6, 36.9]],
      owner: "persia",
    },
  ],
  moves: [
    {
      name: "Persian army of Shahrbaraz", side: "persia", kind: "army",
      path: [
        { at: [38.0, 36.5], time: "610-08" }, { at: "Antioch", time: "610-12" },
        { at: "Antioch", time: "613-05" }, { at: "Damascus", time: "613-09" }, { at: "Caesarea", time: "614-02" },
        { at: "Jerusalem", time: "614-04-15" }, { at: "Jerusalem", time: "614-06" }, { at: "Pelusium", time: "618-12" },
        { at: "Alexandria", time: "619-06" }, { at: [31.4, 26.2], time: "621-03" },
      ],
    },
    {
      name: "Persian army to Chalcedon", side: "persia", kind: "army",
      path: [
        { at: "Theodosiopolis", time: "614-10" }, { at: "Caesarea (Cappadocia)", time: "615-03" }, { at: "Chalcedon", time: "615-07" },
        { at: "Chalcedon", time: "615-10" }, { at: "Caesarea (Cappadocia)", time: "616-02" },
      ],
    },
    {
      name: "Shahrbaraz to the Bosporus", side: "persia", kind: "army",
      path: [
        { at: "Antioch", time: "626-03" }, { at: "Caesarea (Cappadocia)", time: "626-05" }, { at: "Chalcedon", time: "626-07" },
        { at: "Chalcedon", time: "626-09" }, { at: "Caesarea (Cappadocia)", time: "627-01" }, { at: "Antioch", time: "627-04" },
      ],
    },
    {
      name: "Heraclius", side: "rome", kind: "army",
      path: [
        { at: "Constantinople", time: "622-04-05" }, { at: "Caesarea (Cappadocia)", time: "622-08" }, { at: "Constantinople", time: "623-03" },
        { at: "Caesarea (Cappadocia)", time: "624-04" }, { at: "Dvin", time: "624-06" }, { at: "Adur Gushnasp", time: "624-07" },
        { at: [47.2, 40.6], time: "624-12" }, { at: [43.2, 38.6], time: "625-05" }, { at: "Sebasteia", time: "625-11" },
        { at: "Trebizond", time: "626-05" }, { at: "Tbilisi", time: "626-12" }, { at: "Tbilisi", time: "627-09" },
        { at: "Nineveh", time: "627-12-12" }, { at: "Dastagird", time: "628-01-20" }, { at: "Adur Gushnasp", time: "628-03-15" },
        { at: [36.43, 38.2], time: "629-07" }, { at: "Jerusalem", time: "630-03-21" },
      ],
    },
    {
      name: "Avars and Slavs", side: "avars", kind: "army",
      path: [
        { at: [20.5, 46.5], time: "626-05" }, { at: [26.0, 42.5], time: "626-07" }, { at: [28.9, 41.05], time: "626-07-29" },
        { at: [28.9, 41.05], time: "626-08-07" }, { at: [26.0, 42.5], time: "626-08-30" }, { at: [20.5, 46.5], time: "626-10" },
      ],
    },
    {
      name: "Western Turks", side: "turks", kind: "army",
      path: [{ at: [48.3, 42.06], time: "626-10" }, { at: "Tbilisi", time: "626-12" }, { at: "Tbilisi", time: "627-02" }, { at: [48.3, 42.06], time: "627-04" }],
    },
  ],
  events: [
    { title: "Maurice murdered", time: "602-11-27", at: "Constantinople", kind: "disaster", side: "rome", text: "Phocas kills the emperor Maurice and his sons. Khusrau II, whom Maurice had restored, declares war to avenge him." },
    { title: "Dara falls", time: "604", at: "Dara", kind: "siege", side: "persia", text: "The great frontier fortress falls after a long siege." },
    { title: "Heraclius becomes emperor", time: "610-10-05", at: "Constantinople", kind: "note", side: "rome", text: "Sailing from Carthage, Heraclius overthrows Phocas and inherits an empire in crisis." },
    { title: "Antioch falls", time: "610-12", at: "Antioch", kind: "siege", side: "persia", text: "The great city of Roman Syria falls to the Persians (610 or 611)." },
    { title: "Battle of Antioch", time: "613-05", at: "Antioch", kind: "battle", side: "persia", text: "Heraclius's attempt to retake Antioch is defeated near the city, and the Roman East is cut in two. Damascus falls the same year." },
    { title: "Jerusalem sacked", time: "614-05", at: "Jerusalem", kind: "siege", side: "persia", until: "614-09", text: "After a siege of some three weeks the city falls. The True Cross is carried off to Ctesiphon." },
    { title: "Persians at Chalcedon", time: "615-07", at: "Chalcedon", kind: "note", side: "persia", text: "A Persian army camps on the Asian shore of the Bosporus, across the water from Constantinople." },
    { title: "Alexandria falls", time: "619", at: "Alexandria", kind: "siege", side: "persia", text: "Egypt, the granary of Constantinople, passes to Persia." },
    { title: "Heraclius takes the field", time: "622-04-05", at: "Constantinople", kind: "note", side: "rome", text: "The first emperor in two centuries to lead his army in person." },
    { title: "Adur Gushnasp destroyed", time: "624-07", at: "Adur Gushnasp", kind: "disaster", side: "rome", text: "Heraclius burns one of the holiest fire temples of Zoroastrianism, in revenge for Jerusalem." },
    { title: "Siege of Constantinople", time: "626-07-29", at: "Constantinople", kind: "siege", side: "avars", until: "626-08-10", text: "Avars and Slavs attack the land walls while Shahrbaraz waits at Chalcedon. The Roman fleet sinks the Slav boats, and the siege fails." },
    { title: "Battle of Nineveh", time: "627-12-12", at: "Nineveh", kind: "battle", side: "rome", text: "Heraclius defeats a Persian army near the ruins of ancient Nineveh." },
    { title: "Khusrau II overthrown", time: "628-02-25", at: "Ctesiphon", kind: "note", side: "persia", text: "His nobles depose and kill him. His son Kavad II makes peace and agrees to withdraw from Roman territory." },
    { title: "The Cross returns to Jerusalem", time: "630-03-21", at: "Jerusalem", kind: "note", side: "rome", text: "Heraclius restores the True Cross to Jerusalem (the traditional date)." },
  ],
  eras: [
    { name: "Persian offensive", start: "603-01", end: "621-12" },
    { name: "Counterattack", start: "622-04", end: "628-02" },
    { name: "Peace", start: "628-04", end: "630-06" },
  ],
  labels: [
    { text: "Mediterranean Sea", at: [22, 34.2], size: "medium" },
    { text: "Black Sea", at: [34, 43.3], size: "small" },
    { text: "Anatolia", at: [33, 39.2], size: "small" },
    { text: "Armenia", at: [42, 40.2], size: "small" },
    { text: "Mesopotamia", at: [44, 34.3], size: "small" },
    { text: "Arabia", at: [42, 27], size: "small" },
  ],
  story: [
    {
      title: "Two eyes of the world", time: "602-09", view: { center: [38, 37], zoom: 4.3 },
      text: "In 602 the frontier between **Rome** and **Persia** ran through Armenia and upper Mesopotamia, where Khusrau II had ceded land to Maurice in 591. Maurice's murder that November gave Khusrau his cause for war.",
    },
    {
      title: "The Persian conquest, 603–614", time: "603-06", view: { center: [38, 35.5], zoom: 5 },
      text: "Watch the Persians take the frontier fortresses, cross the Euphrates and take **Antioch**. In 613 they beat back Heraclius near Antioch and take Damascus; in 614 **Jerusalem** falls, and the True Cross is carried off.",
    },
    {
      title: "Egypt and the Bosporus, 615–621", time: "614-09", view: { center: [32, 35], zoom: 4.5 },
      text: "A Persian army reaches **Chalcedon**, in sight of Constantinople, and between 619 and 621 Persia conquers **Egypt**. For the first time since the Achaemenid kings a thousand years before, a Persian king rules Syria, Palestine and Egypt.",
    },
    {
      title: "Heraclius strikes back, 622–625", time: "622-03", view: { center: [41, 39], zoom: 4.8 },
      text: "Rather than try to retake the lost provinces, **Heraclius** marches through Armenia toward the Persian heartland. In 624 he burns the fire temple of **Adur Gushnasp**.",
    },
    {
      title: "Constantinople besieged, 626", time: "626-05", until: "626-10", view: { center: [29, 41.1], zoom: 6.3 },
      text: "With Heraclius far away in the Caucasus, the **Avars** attack the land walls while a Persian army waits on the Asian shore. The Roman fleet keeps them apart, and the siege fails.",
    },
    {
      title: "Nineveh and the fall of Khusrau, 627–628", time: "626-10", view: { center: [44, 37.8], zoom: 5 },
      text: "Allied with the **Western Turks**, Heraclius strikes south and wins at **Nineveh** in December 627. Two months later Khusrau is overthrown by his own nobles.",
    },
    {
      title: "Two exhausted empires, 628–630", time: "628-04", view: { center: [38, 36], zoom: 4.3 },
      text: "Kavad II makes peace, the Persian armies leave the Roman East, and on 21 March 630 (the traditional date) Heraclius restores the Cross to **Jerusalem**. The old frontier is back, but both empires are drained.",
    },
  ],
  sources: [
    "James Howard-Johnston, *The Last Great War of Antiquity* (Oxford, 2021)",
    "Walter E. Kaegi, *Heraclius, Emperor of Byzantium* (Cambridge, 2003)",
    "Geoffrey Greatrex and Samuel N. C. Lieu, *The Roman Eastern Frontier and the Persian Wars, Part II: AD 363–630* (Routledge, 2002)",
  ],
};

export default map;
