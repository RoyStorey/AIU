import type { MapSpec } from "map-widget/spec";

/**
 * EUH 101, Lesson III: Luther's journeys, 1505–1546. Chapter 1 (Erfurt, Rome, Wittenberg)
 * sits on "Brother Martin"; chapter 2 (Augsburg, Leipzig, Worms) on "From Leipzig to Worms";
 * chapter 3 (the Wartburg, the Peasants' War, Marburg, and his death) on "The Peasants' War
 * and the Princes' Reformation". The route of the Rome journey of 1510–1511 is uncertain and
 * drawn through a few likely towns; other dates follow the lesson, with months approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Luther's Journeys, 1505–1546",
  summary: "From the thunderstorm at Stotternheim and the road to Rome to Augsburg, Leipzig, Worms, the Wartburg, and Eisleben.",
  start: "1505-06",
  end: "1546-04",
  detail: "region",
  playSeconds: 120,
  trails: "fade",
  view: { center: [11, 50.5], zoom: 5.8 },
  sides: [
    { id: "luther", name: "Luther", color: "#1c7ed6" },
    { id: "others", name: "Others", color: "#c92a2a" },
  ],
  moves: [
    { name: "Luther", side: "luther", kind: "explorer", path: [{ at: [11.45, 51.6], time: "1505-06-25" }, { at: [11.05, 51.05], time: "1505-07-02" }, { at: [11.03, 50.98], time: "1505-07-17" }] },
    {
      name: "To Rome", side: "luther", kind: "explorer",
      path: [
        { at: [11.03, 50.98], time: "1510-11-01" }, { at: [11.08, 49.45], time: "1510-11-10" }, { at: [9.19, 45.46], time: "1510-12-05" },
        { at: [11.25, 43.77], time: "1510-12-20" }, { at: "Rome", time: "1511-01-01" }, { at: "Rome", time: "1511-02-01" },
        { at: [10.9, 48.37], time: "1511-03-15" }, { at: [11.03, 50.98], time: "1511-04-07" }, { at: [11.03, 50.98], time: "1511-08-01" },
        { at: [12.65, 51.87], time: "1511-08-20" },
      ],
    },
    { name: "To Augsburg", side: "luther", kind: "explorer", path: [{ at: [12.65, 51.87], time: "1518-09-26" }, { at: [10.9, 48.37], time: "1518-10-07" }, { at: [10.9, 48.37], time: "1518-10-20" }, { at: [12.65, 51.87], time: "1518-10-31" }] },
    { name: "To Leipzig", side: "luther", kind: "explorer", path: [{ at: [12.65, 51.87], time: "1519-06-24" }, { at: [12.37, 51.34], time: "1519-06-27" }, { at: [12.37, 51.34], time: "1519-07-15" }, { at: [12.65, 51.87], time: "1519-07-20" }] },
    {
      name: "To Worms", side: "luther", kind: "explorer",
      path: [
        { at: [12.65, 51.87], time: "1521-04-02" }, { at: [11.03, 50.98], time: "1521-04-07" }, { at: [10.31, 50.97], time: "1521-04-09" },
        { at: [8.68, 50.11], time: "1521-04-14" }, { at: [8.36, 49.63], time: "1521-04-16" }, { at: [8.36, 49.63], time: "1521-04-26" },
        { at: [8.68, 50.11], time: "1521-04-28" }, { at: [10.25, 50.85], time: "1521-05-04" }, { at: [10.31, 50.97], time: "1521-05-04" },
      ],
    },
    { name: "Home to Wittenberg", side: "luther", kind: "explorer", path: [{ at: [10.31, 50.97], time: "1522-03-01" }, { at: [12.65, 51.87], time: "1522-03-06" }] },
    { name: "To Marburg", side: "luther", kind: "explorer", path: [{ at: [12.65, 51.87], time: "1529-09-15" }, { at: [8.77, 50.81], time: "1529-09-30" }, { at: [8.77, 50.81], time: "1529-10-04" }, { at: [12.65, 51.87], time: "1529-10-18" }] },
    { name: "Zwingli", side: "others", kind: "explorer", path: [{ at: [8.54, 47.37], time: "1529-09-03" }, { at: [8.77, 50.81], time: "1529-09-27" }, { at: [8.77, 50.81], time: "1529-10-04" }, { at: [8.54, 47.37], time: "1529-10-19" }] },
    { name: "Last journey", side: "luther", kind: "explorer", path: [{ at: [12.65, 51.87], time: "1546-01-23" }, { at: [11.55, 51.53], time: "1546-01-28" }] },
  ],
  events: [
    { title: "Stotternheim", time: "1505-07-02", at: [11.05, 51.05], kind: "note", side: "luther", until: "1512", text: "Caught in a thunderstorm, Luther vows to become a monk." },
    { title: "Erfurt", time: "1505-07-17", at: [11.03, 50.98], kind: "note", side: "luther", until: "1546-04", text: "He enters the Augustinian friary, against his father's furious opposition." },
    { title: "Rome", time: "1511-01-01", at: "Rome", kind: "note", side: "luther", until: "1546-04", text: "On business for his order; his memories of the city fed his conviction that Rome was corrupt." },
    { title: "Wittenberg", time: "1517-10-31", at: [12.65, 51.87], kind: "note", side: "luther", until: "1546-04", text: "The Ninety-Five Theses; whether they were nailed to the Castle Church door is debated." },
    { title: "Augsburg", time: "1518-10-12", at: [10.9, 48.37], kind: "note", side: "others", until: "1521-12", text: "Cardinal Cajetan demands that Luther recant; he flees by night." },
    { title: "Leipzig", time: "1519-07-04", at: [12.37, 51.34], kind: "note", side: "others", until: "1521-12", text: "The debate with Johann Eck widens the quarrel to the authority of the church." },
    { title: "Worms", time: "1521-04-18", at: [8.36, 49.63], kind: "note", side: "luther", until: "1546-04", text: "Before Charles V: \"I cannot and will not recant.\" In May, the Edict of Worms makes him an outlaw." },
    { title: "The Wartburg", time: "1521-05-04", at: [10.31, 50.97], kind: "note", side: "luther", until: "1546-04", text: "Seized on the road and hidden as \"Junker Jörg\"; he translates the New Testament." },
    { title: "Memmingen", time: "1525-03-15", at: [10.18, 47.99], kind: "note", side: "others", until: "1529-01", text: "Representatives of the peasant armies adopt the Twelve Articles." },
    { title: "Frankenhausen", time: "1525-05-15", at: [11.1, 51.36], kind: "battle", side: "others", until: "1529-01", text: "The princes' army slaughters some six thousand peasants; Müntzer is captured." },
    { title: "Marburg", time: "1529-10-02", at: [8.77, 50.81], kind: "note", side: "luther", until: "1546-04", text: "Luther and Zwingli agree on much, but not on the Lord's Supper." },
    { title: "Eisleben", time: "1546-02-18", at: [11.55, 51.53], kind: "note", side: "luther", until: "1546-04", text: "Luther dies in the town where he was born." },
  ],
  labels: [
    { text: "Saxony", at: [12.9, 51.3], size: "small" },
    { text: "Alps", at: [10.5, 46.6], size: "small" },
  ],
  story: [
    {
      title: "Brother Martin", time: "1505-06", until: "1512", view: { center: [11, 46.8], zoom: 4.9 },
      text: "The storm at **Stotternheim**, the friary at **Erfurt**, and the long walk over the Alps to **Rome** and back. Then a professorship at **Wittenberg**.",
    },
    {
      title: "From the theses to Worms", time: "1517-09", until: "1521-05-10", view: { center: [10.5, 50.2], zoom: 5.9 },
      text: "From **Wittenberg** to face Cajetan at **Augsburg**, to debate Eck at **Leipzig**, and to stand before the emperor at **Worms**. Watch the carriage stopped on the road home.",
    },
    {
      title: "The Wartburg and after", time: "1521-05-10", view: { center: [10.5, 50.0], zoom: 5.6 },
      text: "Ten months at the **Wartburg**, the return to Wittenberg, the **Peasants' War**, the meeting with **Zwingli** at **Marburg**, and death at **Eisleben** in 1546.",
    },
  ],
  sources: [
    "Lyndal Roper, Martin Luther: Renegade and Prophet (2016)",
    "Heiko A. Oberman, Luther: Man between God and the Devil (1989)",
    "Martin Brecht, Martin Luther (3 vols., 1985–1993)",
    "The route of the Rome journey is uncertain; months are approximate.",
  ],
};

export default map;
