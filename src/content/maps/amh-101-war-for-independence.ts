import type { MapSpec } from "map-widget/spec";

/**
 * AMH 101, Lesson IV: four campaigns of the War for Independence, as the lesson tells them.
 * Each chapter is placed on its own page: 1 on "The Campaign of 1776", 2 on "Saratoga and the
 * French Alliance", 3 on "A Civil War: Loyalists and the War in the South", 4 on "Yorktown and
 * the Peace". Routes between named places are simplified; the allied armies' passage down the
 * Chesapeake in September 1781 is drawn as one water leg from Head of Elk.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The War for Independence, 1776–1781",
  summary: "New York and Trenton, Saratoga and Philadelphia, the war in the South, and the trap at Yorktown.",
  start: "1776-06-15",
  end: "1781-11-15",
  detail: "region",
  playSeconds: 160,
  trails: "fade",
  view: { center: [-76, 38.5], zoom: 5.0 },
  sides: [
    { id: "american", name: "Continental Army and militia", color: "#1c7ed6" },
    { id: "british", name: "British and loyalists", color: "#c92a2a" },
    { id: "french", name: "French forces", color: "#0b7285" },
  ],
  moves: [
    // 1776
    {
      name: "Howe", side: "british", kind: "army",
      path: [
        { at: [-74.15, 40.58], time: "1776-07-03" }, { at: [-74.15, 40.58], time: "1776-08-21" }, { at: [-74.03, 40.6], time: "1776-08-22", by: "sea" },
        { at: [-73.98, 40.67], time: "1776-08-27" }, { at: [-73.97, 40.74], time: "1776-09-15", by: "sea" }, { at: [-73.76, 41.03], time: "1776-10-28" },
        { at: [-73.94, 40.85], time: "1776-11-16" }, { at: "New York", time: "1776-12-01" },
      ],
    },
    {
      name: "Cornwallis", side: "british", kind: "army",
      path: [
        { at: [-73.94, 40.85], time: "1776-11-19" }, { at: [-73.92, 40.95], time: "1776-11-20", by: "sea" }, { at: [-74.45, 40.49], time: "1776-12-01" }, { at: "Trenton", time: "1776-12-08" },
        { at: [-74.45, 40.49], time: "1776-12-14" }, { at: [-74.45, 40.49], time: "1777-01-01" }, { at: "Trenton", time: "1777-01-02" },
        { at: [-74.45, 40.49], time: "1777-01-05" },
      ],
    },
    {
      name: "Washington", side: "american", kind: "army",
      path: [
        { at: "New York", time: "1776-07-01" }, { at: [-73.98, 40.67], time: "1776-08-26" }, { at: "New York", time: "1776-08-30", by: "sea" },
        { at: [-73.76, 41.03], time: "1776-10-28" }, { at: [-73.97, 40.85], time: "1776-11-16", by: "sea" }, { at: [-74.45, 40.49], time: "1776-12-01" },
        { at: "Trenton", time: "1776-12-07" }, { at: [-74.92, 40.3], time: "1776-12-08" }, { at: [-74.92, 40.3], time: "1776-12-25" },
        { at: "Trenton", time: "1776-12-26" }, { at: [-74.92, 40.3], time: "1776-12-27" }, { at: "Trenton", time: "1776-12-30" },
        { at: [-74.66, 40.35], time: "1777-01-03" }, { at: [-74.48, 40.8], time: "1777-01-06" },
      ],
    },
    // 1777
    {
      name: "Burgoyne", side: "british", kind: "army",
      path: [
        { at: [-73.25, 45.31], time: "1777-06-15" }, { at: [-73.43, 44.02], time: "1777-06-30" }, { at: [-73.39, 43.84], time: "1777-07-06" },
        { at: [-73.58, 43.27], time: "1777-07-30" }, { at: [-73.58, 43.1], time: "1777-09-13" }, { at: [-73.64, 42.99], time: "1777-09-19" },
        { at: [-73.64, 42.99], time: "1777-10-07" }, { at: [-73.58, 43.1], time: "1777-10-17" },
      ],
    },
    {
      name: "St. Leger", side: "british", kind: "army",
      path: [{ at: [-76.51, 43.46], time: "1777-07-25" }, { at: [-75.46, 43.21], time: "1777-08-03" }, { at: [-75.46, 43.21], time: "1777-08-22" }, { at: [-76.51, 43.46], time: "1777-09-05" }],
    },
    {
      name: "Gates and Arnold", side: "american", kind: "army",
      path: [{ at: [-73.76, 42.65], time: "1777-08-20" }, { at: [-73.66, 42.94], time: "1777-09-12" }, { at: [-73.64, 42.99], time: "1777-10-07" }, { at: [-73.6, 43.08], time: "1777-10-17" }],
    },
    {
      name: "Howe sails for Philadelphia", side: "british", kind: "fleet", bySea: true,
      path: [{ at: "New York", time: "1777-07-23" }, { at: [-75.95, 39.53], time: "1777-08-25" }],
    },
    {
      name: "Howe", side: "british", kind: "army",
      path: [{ at: [-75.95, 39.53], time: "1777-08-25" }, { at: [-75.58, 39.87], time: "1777-09-11" }, { at: "Philadelphia", time: "1777-09-26" }, { at: [-75.17, 40.04], time: "1777-10-04" }, { at: "Philadelphia", time: "1777-10-06" }],
    },
    {
      name: "Washington", side: "american", kind: "army",
      path: [
        { at: [-74.48, 40.8], time: "1777-07-25" }, { at: "Philadelphia", time: "1777-08-24" }, { at: [-75.58, 39.87], time: "1777-09-11" },
        { at: [-75.5, 40.2], time: "1777-09-28" }, { at: [-75.17, 40.04], time: "1777-10-04" }, { at: [-75.45, 40.1], time: "1777-12-19" },
      ],
    },
    // The South
    { name: "Clinton sails south", side: "british", kind: "fleet", bySea: true, path: [{ at: "New York", time: "1779-12-26" }, { at: [-80.2, 32.6], time: "1780-02-11" }] },
    {
      name: "Cornwallis", side: "british", kind: "army",
      path: [
        { at: [-80.2, 32.6], time: "1780-02-11" }, { at: "Charleston", time: "1780-05-12" }, { at: [-80.6, 34.25], time: "1780-08-16" },
        { at: [-80.84, 35.23], time: "1780-09-26" }, { at: [-81.09, 34.38], time: "1780-10-29" }, { at: [-81.09, 34.38], time: "1781-01-08" },
        { at: [-80.3, 35.6], time: "1781-02-01" }, { at: [-79.45, 36.5], time: "1781-02-14" }, { at: [-79.84, 36.13], time: "1781-03-15" },
        { at: [-77.94, 34.23], time: "1781-04-07" }, { at: [-77.4, 37.23], time: "1781-05-20" },
      ],
    },
    {
      name: "Greene", side: "american", kind: "army",
      path: [
        { at: [-80.84, 35.23], time: "1780-12-03" }, { at: [-79.88, 34.7], time: "1780-12-26" }, { at: [-79.88, 34.7], time: "1781-01-28" },
        { at: [-79.45, 36.55], time: "1781-02-14" }, { at: [-79.84, 36.13], time: "1781-03-15" }, { at: [-80.6, 34.25], time: "1781-04-25" },
      ],
    },
    {
      name: "Morgan", side: "american", kind: "army",
      path: [{ at: [-80.84, 35.23], time: "1780-12-21" }, { at: [-81.81, 35.14], time: "1781-01-17" }, { at: [-80.3, 35.6], time: "1781-02-03" }],
    },
    // Yorktown
    {
      name: "Cornwallis", side: "british", kind: "army",
      path: [{ at: [-77.4, 37.23], time: "1781-05-20" }, { at: [-77.6, 37.8], time: "1781-06-10" }, { at: [-76.71, 37.27], time: "1781-06-25" }, { at: [-76.29, 36.85], time: "1781-07-20" }, { at: "Yorktown", time: "1781-08-02", by: "sea" }],
    },
    {
      name: "Rochambeau", side: "french", kind: "army",
      path: [
        { at: [-71.31, 41.49], time: "1781-06-10" }, { at: [-72.68, 41.76], time: "1781-06-25" }, { at: [-73.87, 41.01], time: "1781-07-06" },
        { at: [-73.87, 41.01], time: "1781-08-19" }, { at: "Philadelphia", time: "1781-09-03" }, { at: [-75.95, 39.53], time: "1781-09-08" },
        { at: [-76.71, 37.27], time: "1781-09-24", by: "sea" }, { at: "Yorktown", time: "1781-09-28" },
      ],
    },
    {
      name: "Washington", side: "american", kind: "army",
      path: [
        { at: [-73.87, 41.01], time: "1781-07-06" }, { at: [-73.87, 41.01], time: "1781-08-19" }, { at: "Philadelphia", time: "1781-09-02" },
        { at: [-75.95, 39.53], time: "1781-09-06" }, { at: [-76.71, 37.27], time: "1781-09-14", by: "sea" }, { at: "Yorktown", time: "1781-09-28" },
      ],
    },
    { name: "De Grasse", side: "french", kind: "fleet", bySea: true, path: [{ at: [-72.2, 19.76], time: "1781-08-05" }, { at: [-76.05, 36.95], time: "1781-08-30" }, { at: [-75.85, 36.9], time: "1781-09-05" }, { at: [-76.05, 36.95], time: "1781-09-11" }] },
    { name: "Graves", side: "british", kind: "fleet", bySea: true, path: [{ at: "New York", time: "1781-08-31" }, { at: [-75.85, 36.9], time: "1781-09-05" }, { at: "New York", time: "1781-09-20" }] },
  ],
  events: [
    { title: "Long Island", time: "1776-08-27", at: [-73.98, 40.67], kind: "battle", side: "british", until: "1777-01-10", text: "Howe outflanks and routes the Americans; two nights later, Washington ferries his army to Manhattan in fog." },
    { title: "Fort Washington", time: "1776-11-16", at: [-73.94, 40.85], kind: "siege", side: "british", until: "1777-01-10", text: "The last American post on Manhattan falls, with nearly 3,000 prisoners." },
    { title: "Trenton", time: "1776-12-26", at: "Trenton", kind: "battle", side: "american", until: "1777-06-01", text: "After crossing the Delaware on Christmas night, Washington captures the Hessian garrison." },
    { title: "Princeton", time: "1777-01-03", at: [-74.66, 40.35], kind: "battle", side: "american", until: "1777-06-01", text: "Slipping away from Cornwallis, Washington defeats a British detachment." },
    { title: "Ticonderoga", time: "1777-07-06", at: [-73.39, 43.84], kind: "siege", side: "british", until: "1777-11-01", text: "Burgoyne takes the fort and pushes south toward the Hudson." },
    { title: "Oriskany", time: "1777-08-06", at: [-75.37, 43.16], kind: "battle", side: "british", until: "1777-11-01", text: "A bloody ambush in which Iroquois fight on both sides; St. Leger is turned back from Fort Stanwix." },
    { title: "Bennington", time: "1777-08-16", at: [-73.32, 42.94], kind: "battle", side: "american", until: "1777-11-01", text: "New England militia under John Stark destroy Burgoyne's foraging detachment." },
    { title: "Brandywine", time: "1777-09-11", at: [-75.58, 39.87], kind: "battle", side: "british", until: "1778-01-01", text: "Howe defeats Washington and opens the road to Philadelphia." },
    { title: "Saratoga", time: "1777-10-17", at: [-73.58, 43.1], kind: "treaty", side: "american", until: "1778-06-01", text: "After Freeman's Farm and Bemis Heights, Burgoyne surrenders his army of about 5,900 men." },
    { title: "Valley Forge", time: "1777-12-19", at: [-75.45, 40.1], kind: "note", side: "american", until: "1778-06-01", text: "Winter camp: hunger, disease, and Steuben's drill." },
    { title: "Savannah", time: "1778-12-29", at: "Savannah", kind: "siege", side: "british", until: "1781-10-01", text: "The British take Georgia's capital and restore royal government." },
    { title: "Charleston", time: "1780-05-12", at: "Charleston", kind: "siege", side: "british", until: "1781-10-01", text: "Lincoln surrenders the city and more than 5,000 men: the worst American defeat of the war." },
    { title: "Camden", time: "1780-08-16", at: [-80.6, 34.25], kind: "battle", side: "british", until: "1781-06-01", text: "Cornwallis routs Gates, the hero of Saratoga." },
    { title: "Kings Mountain", time: "1780-10-07", at: [-81.38, 35.14], kind: "battle", side: "american", until: "1781-06-01", text: "Backcountry militia surround and destroy a loyalist army." },
    { title: "Cowpens", time: "1781-01-17", at: [-81.81, 35.14], kind: "battle", side: "american", until: "1781-06-01", text: "Morgan traps and destroys Tarleton's force." },
    { title: "Guilford Courthouse", time: "1781-03-15", at: [-79.84, 36.13], kind: "battle", side: "british", until: "1781-06-01", text: "Cornwallis holds the field but loses a quarter of his army." },
    { title: "Battle of the Capes", time: "1781-09-05", at: [-75.85, 36.9], kind: "battle", side: "french", until: "1781-11-15", text: "De Grasse turns back Graves; the French hold the Chesapeake." },
    { title: "Yorktown", time: "1781-10-19", at: "Yorktown", kind: "siege", side: "american", until: "1781-11-15", text: "Surrounded by land and sea, Cornwallis surrenders about 8,000 soldiers and sailors." },
  ],
  labels: [
    { text: "Hudson", at: [-73.95, 42.3], size: "small" },
    { text: "Chesapeake Bay", at: [-76.15, 38.2], size: "small" },
  ],
  story: [
    {
      title: "New York and New Jersey, 1776", time: "1776-06-15", until: "1777-01-20", view: { center: [-74.4, 40.45], zoom: 7.2 },
      text: "Watch **Howe** land on Long Island and drive **Washington** off Manhattan and across New Jersey. Then, at Christmas, Washington turns back across the Delaware to **Trenton** and **Princeton**.",
    },
    {
      title: "Saratoga and Philadelphia, 1777", time: "1777-06-01", until: "1778-01-15", view: { center: [-74.6, 41.7], zoom: 6.0 },
      text: "Two British plans at once: **Burgoyne** comes down from Canada toward Albany, while **Howe** sails away from him to take **Philadelphia**. Burgoyne surrenders at **Saratoga**.",
    },
    {
      title: "The war in the South, 1778–1781", time: "1778-12-01", until: "1781-05-15", view: { center: [-80.2, 34.4], zoom: 6.4 },
      text: "The British take **Savannah** and **Charleston** and rout Gates at **Camden**. Then follow **Cornwallis** north as the backcountry turns against him at **Kings Mountain**, **Cowpens**, and **Guilford Courthouse**.",
    },
    {
      title: "The trap at Yorktown, 1781", time: "1781-05-15", view: { center: [-75.6, 39.0], zoom: 5.6 },
      text: "Cornwallis settles at **Yorktown**. Watch **Washington** and **Rochambeau** march south from the Hudson while **de Grasse** sails up from the Caribbean and holds the Chesapeake.",
    },
  ],
  sources: [
    "Robert Middlekauff, The Glorious Cause: The American Revolution, 1763–1789 (rev. ed., 2005)",
    "John Ferling, Almost a Miracle: The American Victory in the War of Independence (2007)",
    "Rick Atkinson, The British Are Coming (2019)",
    "Routes between named places are simplified; dates follow the lesson.",
  ],
};

export default map;
