import type { MapSpec } from "map-widget/spec";

/**
 * BIB 110, Lesson IV, page 2: "The Journeys".
 * Paul's travels in the order of Acts 13–28: the first journey and the meeting in
 * Jerusalem (chapters 1–3), then Europe, Ephesus, and the voyage to Rome (chapters 4–7).
 * The page places the map twice, #1-3 and #4-7. Dates follow the chronology given on the
 * lesson's first page (anchored by the Gallio inscription) and are approximate, a year or
 * two either way. Each journey is a colour; land and sea legs are separate moves, sea legs
 * routed over water, land legs checked to stay on land (npm run maps:check). Where Acts
 * names the ports, the ships call at them; the storm of Acts 27 is drawn as a drift.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Journeys of Paul, c. 46–62 CE",
  summary: "Paul's travels as Acts tells them: Cyprus and Galatia, the crossing into Europe, the long stay at Ephesus, and the voyage to Rome as a prisoner.",
  start: "45-06",
  end: "62-06",
  detail: "continent",
  playSeconds: 160,
  trails: "full",
  view: { center: [33, 35.8], zoom: 5.4 },
  sides: [
    { id: "first", name: "First journey", color: "#d9480f" },
    { id: "second", name: "Second journey", color: "#1c7ed6" },
    { id: "third", name: "Third journey", color: "#2f9e44" },
    { id: "voyage", name: "To Rome", color: "#9c36b5", description: "Paul's journey to Rome as a prisoner" },
  ],
  moves: [
    // First journey (Acts 13–14)
    { name: "Antioch to Seleucia", side: "first", kind: "explorer", path: [{ at: "Antioch", time: "46-03" }, { at: "Seleucia Pieria", time: "46-04" }] },
    { name: "To Cyprus", side: "first", kind: "ship", bySea: true, path: [{ at: "Seleucia Pieria", time: "46-04" }, { at: "Salamis (Cyprus)", time: "46-05" }] },
    { name: "Across Cyprus", side: "first", kind: "explorer", path: [{ at: "Salamis (Cyprus)", time: "46-05" }, { at: "Paphos", time: "46-08" }] },
    { name: "To Perga", side: "first", kind: "ship", bySea: true, path: [{ at: "Paphos", time: "46-09" }, { at: "Attalia", time: "46-10" }] },
    {
      name: "Galatia", side: "first", kind: "explorer",
      path: [
        { at: "Attalia", time: "46-10" }, { at: "Perga", time: "46-11" }, { at: "Pisidian Antioch", time: "47-01" },
        { at: "Konya", time: "47-06" }, { at: "Lystra", time: "47-10" }, { at: "Derbe", time: "48-02" },
        { at: "Lystra", time: "48-04" }, { at: "Konya", time: "48-05" }, { at: "Pisidian Antioch", time: "48-06" },
        { at: "Perga", time: "48-07" }, { at: "Attalia", time: "48-08" },
      ],
    },
    { name: "Home to Antioch", side: "first", kind: "ship", bySea: true, path: [{ at: "Attalia", time: "48-08" }, { at: "Seleucia Pieria", time: "48-09" }] },
    { name: "Seleucia to Antioch", side: "first", kind: "explorer", path: [{ at: "Seleucia Pieria", time: "48-09" }, { at: "Antioch", time: "48-10" }] },
    // Up to Jerusalem through Phoenicia and Samaria (Acts 15:3)
    {
      name: "To Jerusalem and back", side: "first", kind: "explorer",
      path: [
        { at: "Antioch", time: "49-01" }, { at: "Sidon", time: "49-02" }, { at: "Caesarea Maritima", time: "49-03" },
        { at: "Jerusalem", time: "49-04" }, { at: "Jerusalem", time: "49-05" }, { at: "Caesarea Maritima", time: "49-06" },
        { at: "Sidon", time: "49-07" }, { at: "Antioch", time: "49-08" },
      ],
    },
    // Second journey (Acts 15:36–18:22)
    {
      name: "Through Galatia to Troas", side: "second", kind: "explorer",
      path: [
        { at: "Antioch", time: "49-09" }, { at: "Tarsus", time: "49-10" }, { at: "Derbe", time: "49-12" },
        { at: "Lystra", time: "50-01" }, { at: "Konya", time: "50-02" }, { at: "Pisidian Antioch", time: "50-04" },
        { at: "Troas", time: "50-07" },
      ],
    },
    { name: "Into Macedonia", side: "second", kind: "ship", bySea: true, path: [{ at: "Troas", time: "50-07" }, { at: "Neapolis (Macedonia)", time: "50-08" }] },
    {
      name: "Philippi, Thessalonica, Berea", side: "second", kind: "explorer",
      path: [
        { at: "Neapolis (Macedonia)", time: "50-08" }, { at: "Philippi", time: "50-08" }, { at: "Philippi", time: "50-09" },
        { at: "Thessaloniki", time: "50-10" }, { at: "Thessaloniki", time: "50-11" }, { at: "Berea", time: "50-11" },
        { at: [22.6, 40.4], time: "50-12" },
      ],
    },
    { name: "By sea to Athens", side: "second", kind: "ship", bySea: true, path: [{ at: [22.6, 40.4], time: "50-12" }, { at: [23.64, 37.94], time: "51-01" }] },
    {
      name: "Athens and Corinth", side: "second", kind: "explorer",
      path: [
        { at: [23.64, 37.94], time: "51-01" }, { at: "Athens", time: "51-01" }, { at: "Athens", time: "51-02" },
        { at: "Corinth", time: "51-03" }, { at: "Corinth", time: "52-08" }, { at: "Cenchreae", time: "52-09" },
      ],
    },
    {
      name: "Home by Ephesus", side: "second", kind: "ship", bySea: true,
      path: [{ at: "Cenchreae", time: "52-09" }, { at: "Ephesus", time: "52-10" }, { at: "Caesarea Maritima", time: "52-11" }],
    },
    {
      name: "Jerusalem and Antioch", side: "second", kind: "explorer",
      path: [{ at: "Caesarea Maritima", time: "52-11" }, { at: "Jerusalem", time: "52-12" }, { at: "Sidon", time: "53-01" }, { at: "Antioch", time: "53-02" }],
    },
    // Third journey (Acts 18:23–21:16)
    {
      name: "Through Galatia to Ephesus", side: "third", kind: "explorer",
      path: [
        { at: "Antioch", time: "53-04" }, { at: "Tarsus", time: "53-05" }, { at: "Derbe", time: "53-06" },
        { at: "Konya", time: "53-07" }, { at: "Pisidian Antioch", time: "53-08" }, { at: "Ephesus", time: "53-10" },
        { at: "Ephesus", time: "56-03" }, { at: "Troas", time: "56-05" },
      ],
    },
    { name: "Troas to Macedonia", side: "third", kind: "ship", bySea: true, path: [{ at: "Troas", time: "56-05" }, { at: "Neapolis (Macedonia)", time: "56-06" }] },
    {
      name: "Macedonia and Greece", side: "third", kind: "explorer",
      path: [
        { at: "Neapolis (Macedonia)", time: "56-06" }, { at: "Philippi", time: "56-06" }, { at: "Thessaloniki", time: "56-08" },
        { at: "Berea", time: "56-09" }, { at: "Corinth", time: "56-11" }, { at: "Corinth", time: "57-01" },
        { at: "Berea", time: "57-02" }, { at: "Thessaloniki", time: "57-02" }, { at: "Philippi", time: "57-03" },
        { at: "Neapolis (Macedonia)", time: "57-03" },
      ],
    },
    { name: "Back to Troas", side: "third", kind: "ship", bySea: true, path: [{ at: "Neapolis (Macedonia)", time: "57-03" }, { at: "Troas", time: "57-04" }] },
    { name: "On foot to Assos", side: "third", kind: "explorer", path: [{ at: "Troas", time: "57-04" }, { at: [26.34, 39.49], time: "57-04" }] },
    {
      name: "Sailing to Jerusalem", side: "third", kind: "ship", bySea: true,
      path: [
        { at: [26.34, 39.49], time: "57-04" }, { at: "Miletus", time: "57-04" }, { at: "Rhodes", time: "57-05" },
        { at: "Tyre", time: "57-05" }, { at: "Acre", time: "57-05" }, { at: "Caesarea Maritima", time: "57-05" },
      ],
    },
    // Prisoner (Acts 21:17–28:31)
    {
      name: "Arrest and prison", side: "voyage", kind: "explorer",
      path: [
        { at: "Caesarea Maritima", time: "57-05" }, { at: "Jerusalem", time: "57-06" }, { at: "Caesarea Maritima", time: "57-07" },
        { at: "Caesarea Maritima", time: "59-08" },
      ],
    },
    {
      name: "Caesarea to Crete", side: "voyage", kind: "ship", bySea: true,
      path: [{ at: "Caesarea Maritima", time: "59-08" }, { at: "Sidon", time: "59-08" }, { at: "Myra", time: "59-09" }, { at: "Fair Havens", time: "59-10" }],
    },
    {
      name: "Storm and shipwreck", side: "voyage", kind: "ship",
      path: [{ at: "Fair Havens", time: "59-10" }, { at: [22.5, 34.6], time: "59-10" }, { at: [17.5, 35.1], time: "59-11" }, { at: "Malta", time: "59-11" }, { at: "Malta", time: "60-02" }],
    },
    {
      name: "Malta to Puteoli", side: "voyage", kind: "ship", bySea: true,
      path: [{ at: "Malta", time: "60-02" }, { at: "Syracuse", time: "60-02" }, { at: "Rhegium", time: "60-03" }, { at: "Puteoli", time: "60-03" }],
    },
    {
      name: "The Appian Way", side: "voyage", kind: "explorer",
      path: [{ at: "Puteoli", time: "60-03" }, { at: [13.25, 41.3], time: "60-04" }, { at: "Rome", time: "60-04" }, { at: "Rome", time: "62-04" }],
    },
  ],
  events: [
    { title: "Sent out from Antioch", time: "46-03", at: "Antioch", kind: "founding", side: "first", text: "The church sends out Barnabas and Saul, with John Mark (Acts 13:1–5)." },
    { title: "Sergius Paulus", time: "46-08", at: "Paphos", kind: "note", side: "first", text: "The proconsul of Cyprus hears them; from here Acts calls Saul by his Roman name, Paul." },
    { title: "Stoned at Lystra", time: "47-11", at: "Lystra", kind: "disaster", side: "first", text: "Hailed as gods, then stoned and left for dead (Acts 14)." },
    { title: "The meeting in Jerusalem", time: "49-04", at: "Jerusalem", kind: "treaty", side: "first", text: "Gentile believers need not be circumcised (Acts 15; Galatians 2:1–10).", until: "49-06" },
    { title: "\"Come over into Macedonia\"", time: "50-07", at: "Troas", kind: "note", side: "second", text: "Paul's vision at Troas sends him across the Aegean (Acts 16:9)." },
    { title: "Lydia; prison at Philippi", time: "50-08", at: "Philippi", kind: "founding", side: "second", text: "The first convert in Macedonia; Paul and Silas are beaten and jailed (Acts 16)." },
    { title: "The Areopagus", time: "51-02", at: "Athens", kind: "note", side: "second", text: "Paul speaks of the \"unknown god\" (Acts 17:22–31)." },
    { title: "Corinth and Gallio", time: "51-03", at: "Corinth", kind: "founding", side: "second", text: "Eighteen months with Priscilla and Aquila; 1 Thessalonians is written; Paul is brought before Gallio.", until: "52-08" },
    { title: "Ephesus", time: "53-10", at: "Ephesus", kind: "founding", side: "third", text: "Two to three years here: 1 Corinthians, probably Galatians and Philippians, and the riot of the silversmiths.", until: "56-03" },
    { title: "Romans written", time: "56-12", at: "Corinth", kind: "note", side: "third", text: "Paul writes to a church he has never visited, planning to go on to Spain." },
    { title: "Farewell at Miletus", time: "57-04", at: "Miletus", kind: "note", side: "third", text: "He tells the elders of Ephesus they will see his face no more (Acts 20:17–38)." },
    { title: "Arrested in the Temple", time: "57-06", at: "Jerusalem", kind: "siege", side: "voyage", text: "Rescued from a crowd by the garrison; two years in custody at Caesarea follow." },
    { title: "Shipwreck on Malta", time: "59-11", at: "Malta", kind: "disaster", side: "voyage", text: "After fourteen days in the storm, the ship runs aground; all 276 aboard reach land (Acts 27)." },
    { title: "Rome", time: "60-04", at: "Rome", kind: "note", side: "voyage", text: "Two years under house arrest, \"no man forbidding him\" (Acts 28:30–31).", until: "62-04" },
  ],
  eras: [
    { name: "First journey", start: "46-03", end: "48-10", color: "#ffa94d" },
    { name: "Second", start: "49-09", end: "53-02", color: "#74c0fc" },
    { name: "Third", start: "53-04", end: "57-05", color: "#8ce99a" },
    { name: "Prisoner", start: "57-06", end: "62-04", color: "#e599f7" },
  ],
  labels: [
    { text: "Mediterranean Sea", at: [19, 34.0], size: "large" },
    { text: "Aegean Sea", at: [25, 38.6], size: "small" },
    { text: "Galatia", at: [32.5, 38.8], size: "medium" },
    { text: "Macedonia", at: [22.6, 41.2], size: "small" },
    { text: "Achaia", at: [22.0, 37.6], size: "small" },
    { text: "Asia", at: [28.4, 38.8], size: "small" },
    { text: "Syria", at: [37.2, 35.2], size: "small" },
    { text: "Judea", at: [35.6, 31.3], size: "small" },
  ],
  story: [
    {
      title: "Antioch", time: "45-06", until: "46-03", view: { center: [33, 35.8], zoom: 5.4 },
      text: "Find **Antioch**, Paul's home church, and **Tarsus**, his birthplace, just to the northwest. Everything on this map lies inside one state, the Roman Empire; each journey has its own colour.",
    },
    {
      title: "The first journey", time: "46-03", until: "48-12", view: { center: [32.5, 36.6], zoom: 5.6 },
      text: "Follow the orange line to **Cyprus**, then north into the highlands of **Galatia**. Notice that Paul and Barnabas retrace their steps on the way home, visiting each new community again.",
    },
    {
      title: "Up to Jerusalem", time: "49-01", until: "49-09", view: { center: [35.6, 33.5], zoom: 5.8 },
      text: "Watch the road south through Phoenicia to **Jerusalem**, and back. Everything that follows on this map depends on the decision taken there.",
    },
    {
      title: "Into Europe", time: "49-09", until: "53-03", view: { center: [25, 39.4], zoom: 5.4 },
      text: "Follow the blue line overland to **Troas**, then across the water to **Philippi**. Notice how short the stays are in Macedonia, and how long Paul stops in **Corinth**.",
    },
    {
      title: "Ephesus", time: "53-04", until: "57-04", view: { center: [26, 38.8], zoom: 5.6 },
      text: "The green line settles at **Ephesus** for nearly three years. From here Corinth, Philippi, and Galatia are each a few days' or weeks' travel away: find all three, the churches Paul was writing to.",
    },
    {
      title: "Prisoner, storm, shipwreck", time: "57-04", until: "60-03", view: { center: [25, 35.2], zoom: 4.8 },
      text: "Follow the ship along the coasts to **Crete**, then watch it lose its course: the storm drives it west across open sea for two weeks until it runs aground on **Malta**.",
    },
    {
      title: "Rome", time: "60-03", view: { center: [20, 38.5], zoom: 4.6 },
      text: "Paul lands at **Puteoli** and walks the Appian Way to **Rome**. Look back over the whole map: nearly every church he wrote to lies within a few days of a port or a Roman road.",
    },
  ],
  sources: [
    "The Acts of the Apostles, chapters 13–28; Paul's letters, especially Galatians 1–2, 1 and 2 Corinthians, and Romans 15",
    "F. F. Bruce, *Paul: Apostle of the Heart Set Free* (1977)",
    "Eckhard J. Schnabel, *Paul the Missionary: Realities, Strategies and Methods* (2008)",
    "Dates follow the common chronology anchored by the Gallio inscription and are approximate.",
  ],
};

export default map;
