import type { MapSpec } from "map-widget/spec";

/**
 * MDH 110, Lesson II: the First Crusade, 1095–1099, as the lesson tells it. Chapters 1–2
 * (Clermont, the People's Crusade, and the Rhineland massacres) sit on "The People's Crusade
 * and the Rhineland Massacres"; chapters 3–5 (the princes' routes, Anatolia, Antioch and
 * Jerusalem) on "The First Crusade". Only three of the princes' armies are drawn (Godfrey,
 * Raymond, Bohemond); routes are simplified to the main towns on the roads they took.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The First Crusade, 1095–1099",
  summary: "From Urban II's sermon at Clermont and the Rhineland massacres to Nicaea, Antioch, and Jerusalem.",
  start: "1095-03-01",
  end: "1099-09-15",
  detail: "continent",
  playSeconds: 150,
  trails: "fade",
  view: { center: [20, 43], zoom: 3.6 },
  sides: [
    { id: "crusaders", name: "Princes' armies", color: "#c92a2a" },
    { id: "popular", name: "Popular crusade", color: "#e8590c" },
    { id: "turks", name: "Seljuk Turks and allies", color: "#2b8a3e" },
  ],
  moves: [
    {
      name: "Peter the Hermit", side: "popular", kind: "army",
      path: [
        { at: [6.96, 50.94], time: "1096-04-20" }, { at: [12.1, 49.01], time: "1096-05-15" }, { at: [20.46, 44.82], time: "1096-06-25" },
        { at: [21.9, 43.32], time: "1096-07-03" }, { at: [23.32, 42.7], time: "1096-07-12" }, { at: [26.56, 41.68], time: "1096-07-22" },
        { at: "Constantinople", time: "1096-08-01" }, { at: [29.45, 40.62], time: "1096-08-10" }, { at: [29.45, 40.62], time: "1096-10-21" },
      ],
    },
    {
      name: "Emicho", side: "popular", kind: "army",
      path: [{ at: [8.43, 49.32], time: "1096-05-03" }, { at: [8.36, 49.63], time: "1096-05-18" }, { at: [8.27, 50.0], time: "1096-05-27" }, { at: [12.1, 49.01], time: "1096-07-10" }, { at: [17.27, 47.87], time: "1096-08-15" }],
    },
    {
      name: "Godfrey", side: "crusaders", kind: "army",
      path: [
        { at: [5.07, 49.79], time: "1096-08-15" }, { at: [12.1, 49.01], time: "1096-09-15" }, { at: [16.37, 48.21], time: "1096-10-05" },
        { at: [20.46, 44.82], time: "1096-11-25" }, { at: [21.9, 43.32], time: "1096-12-02" }, { at: [24.75, 42.15], time: "1096-12-12" },
        { at: "Constantinople", time: "1096-12-23" },
      ],
    },
    {
      name: "Raymond of Toulouse", side: "crusaders", kind: "army",
      path: [
        { at: [1.44, 43.6], time: "1096-10-15" }, { at: [9.19, 45.46], time: "1096-11-10" }, { at: [13.37, 45.77], time: "1096-11-25" },
        { at: [15.23, 44.12], time: "1096-12-15" }, { at: [19.51, 42.07], time: "1097-01-20" }, { at: [19.45, 41.32], time: "1097-02-01" },
        { at: [22.94, 40.64], time: "1097-03-15" }, { at: "Constantinople", time: "1097-04-21" },
      ],
    },
    { name: "Bohemond crosses the Adriatic", side: "crusaders", kind: "fleet", bySea: true, path: [{ at: [16.87, 41.12], time: "1096-10-26" }, { at: [19.45, 40.5], time: "1096-11-01" }] },
    {
      name: "Bohemond", side: "crusaders", kind: "army",
      path: [{ at: [19.45, 40.5], time: "1096-11-01" }, { at: [21.27, 40.52], time: "1096-12-25" }, { at: [22.94, 40.64], time: "1097-02-15" }, { at: "Constantinople", time: "1097-04-09" }],
    },
    {
      name: "The crusade", side: "crusaders", kind: "army",
      path: [
        { at: "Constantinople", time: "1097-04-26" }, { at: [29.72, 40.43], time: "1097-05-14" }, { at: [29.72, 40.43], time: "1097-06-26" },
        { at: [30.52, 39.78], time: "1097-07-01" }, { at: [31.17, 38.36], time: "1097-07-25" }, { at: "Konya", time: "1097-08-15" },
        { at: [34.06, 37.51], time: "1097-09-10" }, { at: [35.48, 38.73], time: "1097-09-27" }, { at: [36.94, 37.58], time: "1097-10-13" },
        { at: "Antioch", time: "1097-10-21" }, { at: "Antioch", time: "1099-01-13" }, { at: [36.68, 35.65], time: "1099-01-20" },
        { at: [36.04, 34.53], time: "1099-02-14" }, { at: [36.04, 34.53], time: "1099-05-13" }, { at: [35.84, 34.43], time: "1099-05-16" },
        { at: [35.5, 33.89], time: "1099-05-19" }, { at: [34.87, 31.93], time: "1099-06-03" }, { at: "Jerusalem", time: "1099-06-07" },
        { at: "Jerusalem", time: "1099-08-10" }, { at: [34.55, 31.66], time: "1099-08-12" },
      ],
    },
    { name: "Baldwin", side: "crusaders", kind: "army", path: [{ at: [34.06, 37.51], time: "1097-09-12" }, { at: [34.89, 36.92], time: "1097-09-25" }, { at: [37.85, 36.83], time: "1097-12-15" }, { at: "Edessa", time: "1098-03-10" }] },
    { name: "Kerbogha", side: "turks", kind: "army", path: [{ at: [43.13, 36.34], time: "1098-04-25" }, { at: "Edessa", time: "1098-05-04" }, { at: "Edessa", time: "1098-05-25" }, { at: "Antioch", time: "1098-06-07" }, { at: "Antioch", time: "1098-06-28" }, { at: [38.5, 36.6], time: "1098-07-10" }] },
  ],
  events: [
    { title: "Piacenza", time: "1095-03-01", at: [9.69, 45.05], kind: "note", side: "crusaders", until: "1096-09-01", text: "Envoys of the emperor Alexios ask Urban II's council for help against the Turks." },
    { title: "Clermont", time: "1095-11-27", at: [3.08, 45.78], kind: "note", side: "crusaders", until: "1097-01-01", text: "Urban II preaches the expedition; the crowd cries \"God wills it!\"" },
    { title: "Rhineland massacres", time: "1096-05-27", at: [8.27, 50.0], kind: "disaster", side: "popular", until: "1097-01-01", text: "Emicho's followers attack the Jews of Speyer, Worms, and Mainz; massacres follow at Cologne, Trier, Metz, Regensburg, and Prague." },
    { title: "Civetot", time: "1096-10-21", at: [29.45, 40.62], kind: "battle", side: "turks", until: "1097-05-01", text: "The main body of the People's Crusade is ambushed and massacred by the Turks." },
    { title: "Nicaea", time: "1097-06-19", at: [29.72, 40.43], kind: "siege", side: "crusaders", until: "1099-09-15", text: "The Seljuk capital surrenders to the Byzantines rather than to the crusaders." },
    { title: "Dorylaeum", time: "1097-07-01", at: [30.52, 39.78], kind: "battle", side: "crusaders", until: "1099-09-15", text: "The crusaders defeat Kilij Arslan in a pitched battle." },
    { title: "Edessa", time: "1098-03-10", at: "Edessa", kind: "founding", side: "crusaders", until: "1099-09-15", text: "Baldwin takes control of the Armenian city: the first crusader state." },
    { title: "Antioch taken", time: "1098-06-03", at: "Antioch", kind: "siege", side: "crusaders", until: "1099-09-15", text: "Firuz opens a tower to Bohemond after a siege of seven and a half months." },
    { title: "Kerbogha defeated", time: "1098-06-28", at: [36.25, 36.24], kind: "battle", side: "crusaders", until: "1099-09-15", text: "With the Holy Lance carried before them, the besieged crusaders march out and rout the relief army." },
    { title: "Jerusalem", time: "1099-07-15", at: "Jerusalem", kind: "siege", side: "crusaders", until: "1099-09-15", text: "The crusaders break into the city held by the Fatimids and massacre many of its inhabitants." },
    { title: "Ascalon", time: "1099-08-12", at: [34.55, 31.66], kind: "battle", side: "crusaders", until: "1099-09-15", text: "A Fatimid relief army from Egypt is defeated." },
  ],
  labels: [
    { text: "Anatolia", at: [33.0, 39.3], size: "small" },
    { text: "Rhineland", at: [7.3, 49.9], size: "small" },
  ],
  story: [
    {
      title: "The call", time: "1095-03-01", until: "1096-04-01", view: { center: [8, 46.5], zoom: 5.0 },
      text: "Byzantine envoys appeal at **Piacenza**; eight months later, Urban II preaches at **Clermont**.",
    },
    {
      title: "The People's Crusade", time: "1096-04-01", until: "1096-11-01", view: { center: [18, 45.5], zoom: 4.0 },
      text: "Follow **Peter the Hermit** down the Danube to Constantinople and across to **Civetot**. Watch **Emicho**'s bands fall on the Jews of the **Rhineland** before they march east and break up in Hungary.",
    },
    {
      title: "The princes' armies", time: "1096-08-01", until: "1097-04-26", view: { center: [17, 44.5], zoom: 4.2 },
      text: "Three of the great armies take three roads to **Constantinople**: **Godfrey** through Hungary, **Raymond** down the Dalmatian coast, and **Bohemond** across the Adriatic and along the Via Egnatia.",
    },
    {
      title: "Across Anatolia", time: "1097-04-26", until: "1098-04-15", view: { center: [33, 38.6], zoom: 5.4 },
      text: "From **Nicaea** and **Dorylaeum**, the crusade crosses Anatolia to **Antioch**, while **Baldwin** breaks away east to **Edessa**.",
    },
    {
      title: "Antioch and Jerusalem", time: "1098-04-15", view: { center: [36.6, 34.4], zoom: 5.15 },
      text: "**Kerbogha** marches from Mosul and traps the crusaders inside **Antioch**. Then watch the march south along the coast to **Jerusalem** and the battle at **Ascalon**.",
    },
  ],
  sources: [
    "Thomas Asbridge, The First Crusade: A New History (2004)",
    "Jonathan Riley-Smith, The First Crusade and the Idea of Crusading (1986)",
    "Christopher Tyerman, God's War: A New History of the Crusades (2006)",
    "Routes and dates are simplified; the princes' armies are represented by three of them.",
  ],
};

export default map;
