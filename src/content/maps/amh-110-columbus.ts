import type { MapSpec } from "map-widget/spec";

/**
 * AMH 110, Lesson I: Columbus's first voyage, 1492–1493, placed on "Columbus and the
 * Columbian Exchange". The first landfall is drawn at
 * San Salvador, the most widely accepted identification of Guanahani, which is still debated.
 * The outward route follows the latitude of the Canaries west, as Columbus did.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Columbus's First Voyage, 1492–1493",
  summary: "From Palos and the Canaries across the Atlantic to the Bahamas, Cuba, and Hispaniola, and home by the Azores.",
  start: "1492-07-25",
  end: "1493-04-01",
  detail: "continent",
  playSeconds: 80,
  trails: "full",
  view: { center: [-40, 30], zoom: 2.9 },
  sides: [
    { id: "spain", name: "Columbus's ships", color: "#c92a2a" },
  ],
  moves: [
    {
      name: "Outward", side: "spain", kind: "fleet", bySea: true,
      path: [
        { at: [-6.95, 37.15], time: "1492-08-03" }, { at: [-17.1, 28.09], time: "1492-08-12" }, { at: [-17.1, 28.09], time: "1492-09-06" },
        { at: [-74.45, 24.05], time: "1492-10-12" }, { at: [-75.7, 21.12], time: "1492-10-28" }, { at: [-73.4, 19.85], time: "1492-12-06" },
        { at: [-72.2, 19.8], time: "1492-12-25" },
      ],
    },
    {
      name: "Homeward", side: "spain", kind: "ship", bySea: true,
      path: [
        { at: [-72.2, 19.8], time: "1493-01-04" }, { at: [-69.4, 19.25], time: "1493-01-16" }, { at: [-25.1, 36.95], time: "1493-02-18" },
        { at: [-9.25, 38.68], time: "1493-03-04" }, { at: [-6.95, 37.15], time: "1493-03-15" },
      ],
    },
  ],
  events: [
    { title: "Palos", time: "1492-08-03", at: [-6.89, 37.23], kind: "note", side: "spain", until: "1493-04-01", text: "Three small ships and about ninety men sail, the year Granada falls." },
    { title: "The Canaries", time: "1492-08-12", at: [-17.1, 28.09], kind: "note", side: "spain", until: "1493-04-01", text: "Repairs and supplies at La Gomera before the crossing." },
    { title: "Guanahani", time: "1492-10-12", at: [-74.5, 24.05], kind: "discovery", until: "1493-04-01", text: "The Taíno island Columbus names San Salvador; he calls its people \"Indians.\"" },
    { title: "Cuba", time: "1492-10-28", at: [-75.7, 21.08], kind: "note", until: "1493-04-01", text: "Columbus coasts Cuba, convinced he is near Asia." },
    { title: "La Navidad", time: "1492-12-25", at: [-72.2, 19.76], kind: "founding", side: "spain", until: "1493-04-01", text: "The Santa María runs aground on Hispaniola; a small garrison is left behind." },
    { title: "Lisbon", time: "1493-03-04", at: [-9.14, 38.71], kind: "note", side: "spain", until: "1493-04-01", text: "Storms drive Columbus into the Portuguese capital before he reaches Spain." },
  ],
  labels: [
    { text: "Atlantic Ocean", at: [-45, 30], size: "small" },
    { text: "Caribbean", at: [-73, 16], size: "small" },
    { text: "Hispaniola", at: [-71, 18.6], size: "small" },
  ],
  story: [
    {
      title: "The crossing", time: "1492-07-25", until: "1492-10-20", view: { center: [-42, 28], zoom: 2.9 },
      text: "From **Palos** to the **Canaries**, then due west across the Atlantic for five weeks to **Guanahani**.",
    },
    {
      title: "Cuba and Hispaniola", time: "1492-10-20", until: "1493-01-10", view: { center: [-74, 21], zoom: 5.3 },
      text: "Columbus sails on to **Cuba** and **Hispaniola**, where the Santa María is wrecked and **La Navidad** is founded.",
    },
    {
      title: "Home", time: "1493-01-10", view: { center: [-40, 32], zoom: 2.9 },
      text: "The return by the **Azores**, where storms drive the ship into **Lisbon**, and home to Palos in March 1493.",
    },
  ],
  sources: [
    "Christopher Columbus, Diario of the first voyage (as abstracted by Bartolomé de las Casas)",
    "Samuel Eliot Morison, Admiral of the Ocean Sea (1942)",
    "William D. Phillips Jr. and Carla Rahn Phillips, The Worlds of Christopher Columbus (1992)",
    "Guanahani is identified with San Salvador, as most scholars accept; others have been proposed.",
  ],
};

export default map;
