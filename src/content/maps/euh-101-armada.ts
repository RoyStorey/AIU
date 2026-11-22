import type { MapSpec } from "map-widget/spec";

/**
 * EUH 101, Lesson V: the Spanish Armada, 1588, placed on "The Dutch Revolt and the Armada".
 * Dates are New Style (Gregorian), as the Spanish kept them; English accounts of the time,
 * in the Old Style calendar, are ten days earlier. The route home around Scotland and Ireland
 * is drawn for the main body of the fleet; many ships were wrecked along the Irish coast.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Spanish Armada, 1588",
  summary: "From Lisbon and La Coruña up the Channel to Calais and Gravelines, and the long way home around Scotland and Ireland.",
  start: "1588-05-20",
  end: "1588-10-15",
  detail: "region",
  playSeconds: 90,
  trails: "full",
  view: { center: [-4, 51.5], zoom: 4.3 },
  sides: [
    { id: "spain", name: "Spanish Armada", color: "#c92a2a" },
    { id: "england", name: "English fleet", color: "#1c7ed6" },
  ],
  moves: [
    {
      name: "The Armada", side: "spain", kind: "fleet", bySea: true,
      path: [
        { at: [-9.25, 38.65], time: "1588-05-28" }, { at: [-8.4, 43.4], time: "1588-06-19" }, { at: [-8.4, 43.4], time: "1588-07-22" },
        { at: [-5.2, 49.9], time: "1588-07-29" }, { at: [-4.2, 50.2], time: "1588-07-31" }, { at: [-2.45, 50.45], time: "1588-08-02" },
        { at: [-1.2, 50.55], time: "1588-08-04" }, { at: [1.75, 50.98], time: "1588-08-06" }, { at: [1.75, 50.98], time: "1588-08-07" },
        { at: [2.1, 51.1], time: "1588-08-08" }, { at: [2.5, 53.5], time: "1588-08-12" }, { at: [-1.6, 59.53], time: "1588-08-20" },
        { at: [-8.0, 58.0], time: "1588-08-28" }, { at: [-10.8, 54.5], time: "1588-09-05" }, { at: [-11.5, 52.0], time: "1588-09-12" },
        { at: [-3.8, 43.47], time: "1588-09-23" },
      ],
    },
    {
      name: "Howard and Drake", side: "england", kind: "fleet", bySea: true,
      path: [
        { at: [-4.14, 50.36], time: "1588-07-29" }, { at: [-4.1, 50.15], time: "1588-07-31" }, { at: [-2.4, 50.35], time: "1588-08-02" },
        { at: [-1.2, 50.45], time: "1588-08-04" }, { at: [1.65, 50.95], time: "1588-08-06" }, { at: [1.65, 50.95], time: "1588-08-07" },
        { at: [2.0, 51.15], time: "1588-08-08" }, { at: [2.0, 54.5], time: "1588-08-12" }, { at: [1.2, 51.6], time: "1588-08-18" },
      ],
    },
  ],
  events: [
    { title: "Lisbon", time: "1588-05-28", at: [-9.14, 38.71], kind: "note", side: "spain", until: "1588-10-15", text: "Some 130 ships and about 30,000 men sail under the duke of Medina Sidonia." },
    { title: "La Coruña", time: "1588-06-19", at: [-8.4, 43.37], kind: "note", side: "spain", until: "1588-10-15", text: "Storms drive the fleet into port to refit; it sails again a month later." },
    { title: "Off Plymouth", time: "1588-07-31", at: [-4.2, 50.2], kind: "battle", side: "england", until: "1588-10-15", text: "The faster English ships, with longer-range guns, harry the Armada up the Channel." },
    { title: "Calais fireships", time: "1588-08-07", at: [1.75, 50.98], kind: "disaster", side: "spain", until: "1588-10-15", text: "Fireships sent among the anchored galleons at night scatter the fleet." },
    { title: "Gravelines", time: "1588-08-08", at: [2.1, 51.05], kind: "battle", side: "england", until: "1588-10-15", text: "The English inflict heavy damage; the wind drives the Armada into the North Sea." },
    { title: "Parma's army", time: "1588-08-06", at: [2.37, 51.04], kind: "note", side: "spain", until: "1588-10-15", text: "The army of the Netherlands waits at Dunkirk; the rendezvous never happens." },
    { title: "Wrecks on Ireland", time: "1588-09-12", at: [-9.9, 53.3], kind: "disaster", side: "spain", until: "1588-10-15", text: "Storms wreck many ships along the coasts of Scotland and Ireland." },
    { title: "Santander", time: "1588-09-23", at: [-3.8, 43.47], kind: "note", side: "spain", until: "1588-10-15", text: "The survivors reach Spain; only about half the ships come home." },
  ],
  labels: [
    { text: "English Channel", at: [-2.5, 49.9], size: "small" },
    { text: "North Sea", at: [3.0, 55.5], size: "small" },
    { text: "Bay of Biscay", at: [-5.5, 45.3], size: "small" },
  ],
  story: [
    {
      title: "The fleet sails", time: "1588-05-20", until: "1588-07-28", view: { center: [-6.5, 45.5], zoom: 4.6 },
      text: "The Armada leaves **Lisbon**, shelters from storms at **La Coruña**, and sets out for the Channel.",
    },
    {
      title: "Up the Channel", time: "1588-07-28", until: "1588-08-10", view: { center: [-1.2, 50.6], zoom: 6.0 },
      text: "The English fleet comes out of **Plymouth** and follows. Watch the running fight to **Calais**, the fireships, and **Gravelines**.",
    },
    {
      title: "The long way home", time: "1588-08-10", view: { center: [-4, 54], zoom: 4.2 },
      text: "Unable to meet Parma, the Armada is driven north, around **Scotland**, and down the coast of **Ireland**, where storms wreck many ships.",
    },
  ],
  sources: [
    "Garrett Mattingly, The Armada (1959)",
    "Colin Martin and Geoffrey Parker, The Spanish Armada (rev. ed., 1999)",
    "Dates are New Style; English sources of the time give dates ten days earlier.",
  ],
};

export default map;
