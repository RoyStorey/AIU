import type { MapSpec } from "map-widget/spec";

/**
 * ANH 110, Lesson III: the Second Punic War, 219–202 BCE, following Polybius and Livy as the
 * lesson does. Chapters 1–3 (to the Alps, Trebia and Trasimene, Cannae) sit on the page
 * "Hannibal"; chapters 4–5 (Rome's recovery, Scipio in Spain and Africa) on "Rome Recovers:
 * Scipio and Zama". Hannibal's pass over the Alps is unknown; the route is drawn through the
 * western Alps without naming a pass. Zama's exact site is uncertain. Months are approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Hannibal and the Second Punic War, 219–202 BCE",
  summary: "From the siege of Saguntum over the Alps to Trebia, Trasimene, and Cannae, and from Scipio's Spain to Zama.",
  start: "220 BCE",
  end: "201 BCE",
  detail: "continent",
  playSeconds: 150,
  trails: "fade",
  view: { center: [6, 40], zoom: 4.3 },
  sides: [
    { id: "carthage", name: "Carthage", color: "#7048e8" },
    { id: "rome", name: "Rome", color: "#c92a2a" },
  ],
  moves: [
    {
      name: "Hannibal", side: "carthage", kind: "army",
      path: [
        { at: [-0.98, 37.6], time: "Mar 219 BCE" }, { at: [-0.27, 39.68], time: "Apr 219 BCE" }, { at: [-0.27, 39.68], time: "Nov 219 BCE" },
        { at: [-0.98, 37.6], time: "Dec 219 BCE" }, { at: [-0.98, 37.6], time: "May 218 BCE" }, { at: [0.52, 40.81], time: "Jun 218 BCE" },
        { at: [2.86, 42.47], time: "Jul 218 BCE" }, { at: [4.72, 43.95], time: "Sep 218 BCE" }, { at: [5.72, 45.19], time: "Sep 218 BCE" },
        { at: [6.9, 45.25], time: "Oct 218 BCE" }, { at: [7.68, 45.07], time: "Oct 218 BCE" }, { at: [8.9, 45.2], time: "Nov 218 BCE" },
        { at: [9.6, 45.03], time: "Dec 218 BCE" }, { at: [11.34, 44.49], time: "Mar 217 BCE" }, { at: [10.85, 43.75], time: "May 217 BCE" },
        { at: [12.1, 43.18], time: "Jun 217 BCE" }, { at: [13.5, 43.2], time: "Jul 217 BCE" }, { at: [15.5, 41.5], time: "Sep 217 BCE" },
        { at: [14.25, 41.08], time: "Oct 217 BCE" }, { at: [15.9, 41.6], time: "Mar 216 BCE" }, { at: "Cannae", time: "Aug 216 BCE" },
        { at: [14.25, 41.08], time: "Oct 216 BCE" }, { at: [16.0, 40.6], time: "Mar 212 BCE" }, { at: [14.25, 41.08], time: "Feb 211 BCE" },
        { at: [12.53, 41.93], time: "Mar 211 BCE" }, { at: [16.25, 39.3], time: "Jun 211 BCE" }, { at: [17.13, 39.08], time: "Sep 203 BCE" },
      ],
    },
    { name: "Hannibal recalled", side: "carthage", kind: "fleet", bySea: true, path: [{ at: [17.13, 39.08], time: "Sep 203 BCE" }, { at: [10.64, 35.83], time: "Oct 203 BCE" }] },
    { name: "To Zama", side: "carthage", kind: "army", path: [{ at: [10.64, 35.83], time: "Sep 202 BCE" }, { at: "Zama", time: "Oct 202 BCE" }] },
    {
      name: "Hasdrubal", side: "carthage", kind: "army",
      path: [
        { at: [-3.8, 38.05], time: "Sep 208 BCE" }, { at: [-0.5, 41.6], time: "Nov 208 BCE" }, { at: [2.86, 42.47], time: "Dec 208 BCE" },
        { at: [4.72, 43.95], time: "Feb 207 BCE" }, { at: [6.9, 45.25], time: "Apr 207 BCE" }, { at: [9.69, 45.05], time: "May 207 BCE" },
        { at: [12.57, 44.06], time: "Jun 207 BCE" }, { at: [12.9, 43.72], time: "Jun 207 BCE" },
      ],
    },
    {
      name: "Flaminius", side: "rome", kind: "army",
      path: [{ at: [11.88, 43.46], time: "Apr 217 BCE" }, { at: [11.88, 43.46], time: "May 217 BCE" }, { at: [12.1, 43.18], time: "Jun 217 BCE" }],
    },
    {
      name: "Paullus and Varro", side: "rome", kind: "army",
      path: [{ at: "Rome", time: "Jun 216 BCE" }, { at: [16.07, 41.22], time: "Jul 216 BCE" }, { at: "Cannae", time: "Aug 216 BCE" }],
    },
    {
      name: "Scipio in Spain", side: "rome", kind: "army",
      path: [
        { at: [1.25, 41.12], time: "Oct 210 BCE" }, { at: [1.25, 41.12], time: "Feb 209 BCE" }, { at: [-0.98, 37.6], time: "Apr 209 BCE" },
        { at: [-0.98, 37.6], time: "Feb 208 BCE" }, { at: [-3.8, 38.05], time: "Apr 208 BCE" }, { at: [1.25, 41.12], time: "Nov 208 BCE" },
        { at: [1.25, 41.12], time: "Mar 206 BCE" }, { at: [-5.98, 37.52], time: "May 206 BCE" },
      ],
    },
    { name: "Scipio sails for Africa", side: "rome", kind: "fleet", bySea: true, path: [{ at: [12.44, 37.8], time: "Apr 204 BCE" }, { at: [10.06, 37.06], time: "May 204 BCE" }] },
    { name: "Scipio in Africa", side: "rome", kind: "army", path: [{ at: [10.06, 37.06], time: "May 204 BCE" }, { at: [10.06, 37.06], time: "Sep 202 BCE" }, { at: "Zama", time: "Oct 202 BCE" }] },
  ],
  events: [
    { title: "Saguntum", time: "Nov 219 BCE", at: [-0.27, 39.68], kind: "siege", side: "carthage", until: "216 BCE", text: "After an eight-month siege, Hannibal takes Rome's ally; Rome declares war." },
    { title: "The Rhône", time: "Sep 218 BCE", at: [4.72, 43.95], kind: "note", side: "carthage", until: "216 BCE", text: "The elephants are ferried across on rafts covered with earth." },
    { title: "The Alps", time: "Oct 218 BCE", at: [6.9, 45.25], kind: "note", side: "carthage", until: "216 BCE", text: "Fifteen days in the mountains; which pass Hannibal used is still debated." },
    { title: "Trebia", time: "Dec 218 BCE", at: [9.6, 45.03], kind: "battle", side: "carthage", until: "212 BCE", text: "A Roman army wades the freezing river and is ambushed by Mago." },
    { title: "Lake Trasimene", time: "Jun 217 BCE", at: [12.1, 43.18], kind: "battle", side: "carthage", until: "212 BCE", text: "Flaminius's column is trapped between the hills and the lake; the consul is killed." },
    { title: "Cannae", time: "Aug 216 BCE", at: "Cannae", kind: "battle", side: "carthage", until: "201 BCE", text: "The Roman army is encircled and destroyed; the consul Paullus is among the dead." },
    { title: "Syracuse", time: "212 BCE", at: "Syracuse", kind: "siege", side: "rome", until: "202 BCE", text: "Taken after a long siege; Archimedes is killed in the sack." },
    { title: "Hannibal at the gates", time: "Mar 211 BCE", at: [12.53, 41.93], kind: "note", side: "carthage", until: "209 BCE", text: "Hannibal marches on Rome to draw its armies from Capua, rides up to the Colline Gate, and withdraws." },
    { title: "Capua", time: "Jun 211 BCE", at: [14.25, 41.08], kind: "siege", side: "rome", until: "202 BCE", text: "Rome retakes the great city that had gone over to Hannibal, and punishes it severely." },
    { title: "New Carthage", time: "Apr 209 BCE", at: [-0.98, 37.6], kind: "siege", side: "rome", until: "202 BCE", text: "Scipio storms Carthage's capital in Spain in a single day." },
    { title: "Baecula", time: "Apr 208 BCE", at: [-3.8, 38.05], kind: "battle", side: "rome", until: "202 BCE", text: "Scipio defeats Hasdrubal, who slips away toward the Pyrenees with much of his army." },
    { title: "Metaurus", time: "Jun 207 BCE", at: [12.9, 43.72], kind: "battle", side: "rome", until: "202 BCE", text: "Hasdrubal is defeated and killed before he can join his brother." },
    { title: "Ilipa", time: "May 206 BCE", at: [-5.98, 37.52], kind: "battle", side: "rome", until: "202 BCE", text: "Scipio's victory ends Carthaginian power in Spain." },
    { title: "Zama", time: "Oct 202 BCE", at: "Zama", kind: "battle", side: "rome", until: "201 BCE", text: "Hannibal's only defeat in a major battle; Carthage sues for peace." },
  ],
  labels: [
    { text: "Spain", at: [-3.5, 40.2], size: "small" },
    { text: "Gaul", at: [3.0, 46.0], size: "small" },
    { text: "Italy", at: [13.3, 42.4], size: "small" },
    { text: "Africa", at: [8.5, 34.8], size: "small" },
  ],
  story: [
    {
      title: "From Saguntum to the Alps", time: "220 BCE", until: "Nov 218 BCE", view: { center: [3, 42], zoom: 5.0 },
      text: "Watch **Hannibal** take **Saguntum**, then march from **New Carthage** across the Ebro and the Pyrenees, over the **Rhône**, and into the **Alps**.",
    },
    {
      title: "Trebia and Trasimene", time: "Nov 218 BCE", until: "Jul 217 BCE", view: { center: [10.7, 44.2], zoom: 6.2 },
      text: "Down in the Po valley: **Trebia** in December, then across the Apennines and through the Arno marshes to the ambush at **Lake Trasimene**.",
    },
    {
      title: "Cannae", time: "Jul 217 BCE", until: "Jan 215 BCE", view: { center: [14.3, 42.0], zoom: 6.0 },
      text: "Hannibal turns south along the Adriatic and into Campania while Fabius shadows him. In 216, the consuls march from **Rome** to meet him at **Cannae**.",
    },
    {
      title: "Rome recovers", time: "Jan 215 BCE", until: "205 BCE", view: { center: [6, 40], zoom: 4.3 },
      text: "The war spreads. Rome retakes **Syracuse** and **Capua** while Hannibal stays in the south; in Spain, **Scipio** takes **New Carthage**, and **Hasdrubal**'s march over the Alps ends at the **Metaurus**.",
    },
    {
      title: "Scipio in Africa", time: "205 BCE", view: { center: [12, 37.6], zoom: 5.6 },
      text: "Scipio crosses from Sicily to Africa. Watch Hannibal sail home from **Croton** after fifteen years in Italy, and the two armies meet at **Zama**.",
    },
  ],
  sources: [
    "Polybius, Histories, book 3 and books 7–15",
    "Livy, History of Rome, books 21–30",
    "Adrian Goldsworthy, The Fall of Carthage: The Punic Wars 265–146 BC (2000)",
    "Hannibal's Alpine pass and the site of Zama are uncertain; routes between named places are reconstructions.",
  ],
};

export default map;
