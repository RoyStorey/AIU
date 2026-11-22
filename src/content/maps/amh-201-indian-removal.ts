import type { MapSpec } from "map-widget/spec";

/**
 * AMH 201, Lesson IV: the removal of the Southeastern nations, 1830–1839, placed on "Indian
 * Removal and the Trail of Tears". Each removal is drawn as a single representative journey
 * (there were many parties and several routes, overland and by river); the Cherokee route is
 * the northern land route taken by most detachments in 1838–39. Dates are approximate.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Indian Removal, 1830–1839",
  summary: "The Indian Removal Act, the forced removals of the Choctaws, Creeks, Chickasaws, and Cherokees, and the wars of the Seminoles and of Black Hawk.",
  start: "1830-04",
  end: "1839-08",
  detail: "region",
  playSeconds: 120,
  trails: "full",
  view: { center: [-88, 35], zoom: 4.9 },
  sides: [
    { id: "choctaw", name: "Choctaw", color: "#e8590c" },
    { id: "creek", name: "Creek (Muscogee)", color: "#c92a2a" },
    { id: "chickasaw", name: "Chickasaw", color: "#7048e8" },
    { id: "cherokee", name: "Cherokee", color: "#1c7ed6" },
    { id: "seminole", name: "Seminole", color: "#2b8a3e" },
    { id: "us", name: "United States", color: "#495057" },
  ],
  moves: [
    {
      name: "Choctaw removal", side: "choctaw", kind: "caravan",
      path: [{ at: [-89.4, 32.9], time: "1831-10-15" }, { at: "Vicksburg", time: "1831-11-10" }, { at: [-91.35, 33.94], time: "1831-12-10" }, { at: [-92.29, 34.75], time: "1832-01-10" }, { at: [-95.29, 34.03], time: "1832-03-01" }],
    },
    {
      name: "Creek removal", side: "creek", kind: "caravan",
      path: [{ at: [-85.9, 32.5], time: "1836-08-01" }, { at: [-87.7, 34.73], time: "1836-09-01" }, { at: [-90.05, 35.15], time: "1836-10-01" }, { at: [-92.29, 34.75], time: "1836-11-01" }, { at: [-95.25, 35.8], time: "1836-12-15" }],
    },
    {
      name: "Chickasaw removal", side: "chickasaw", kind: "caravan",
      path: [{ at: [-89.0, 34.25], time: "1837-06-15" }, { at: [-90.05, 35.15], time: "1837-07-15" }, { at: [-92.29, 34.75], time: "1837-09-15" }, { at: [-95.6, 34.0], time: "1837-12-01" }],
    },
    {
      name: "The Trail of Tears", side: "cherokee", kind: "caravan",
      path: [
        { at: [-84.95, 35.29], time: "1838-10-01" }, { at: [-86.78, 36.16], time: "1838-10-25" }, { at: [-87.49, 36.87], time: "1838-11-10" },
        { at: [-88.49, 37.37], time: "1838-11-25" }, { at: [-89.27, 37.45], time: "1838-12-10" }, { at: [-89.27, 37.45], time: "1839-01-10" },
        { at: [-89.52, 37.31], time: "1839-01-15" }, { at: [-93.29, 37.21], time: "1839-02-15" }, { at: [-94.16, 36.06], time: "1839-03-05" },
        { at: [-94.93, 35.86], time: "1839-03-25" },
      ],
    },
  ],
  events: [
    { title: "Indian Removal Act", time: "1830-05-28", at: [-77.04, 38.9], kind: "note", side: "us", until: "1839-08", text: "Congress gives Jackson authority to negotiate removal treaties; it passes the House 102 to 97." },
    { title: "Worcester v. Georgia", time: "1832-03-03", at: [-77.0, 38.89], kind: "note", side: "cherokee", until: "1835-12", text: "The Supreme Court rules that Georgia's laws have no force in Cherokee territory; Georgia ignores it." },
    { title: "Bad Axe", time: "1832-08-02", at: [-91.2, 43.45], kind: "battle", side: "us", until: "1839-08", text: "Black Hawk's Sauk and Fox, returning to their Illinois lands, are massacred at the river." },
    { title: "Treaty of New Echota", time: "1835-12-29", at: [-84.91, 34.54], kind: "treaty", side: "cherokee", until: "1839-08", text: "A small group without authority cedes all Cherokee land east of the Mississippi; the Senate ratifies it by one vote." },
    { title: "Second Seminole War", time: "1835-12-28", at: [-82.1, 28.65], kind: "battle", side: "seminole", until: "1839-08", text: "The Seminoles, joined by people who had escaped slavery, begin seven years of resistance." },
    { title: "Osceola captured", time: "1837-10-21", at: [-81.32, 29.82], kind: "note", side: "seminole", until: "1839-08", text: "Taken under a flag of truce near St. Augustine; some Seminoles are never removed." },
    { title: "The roundup", time: "1838-05-26", at: [-84.95, 35.29], kind: "disaster", side: "cherokee", until: "1839-08", text: "Scott's army forces some 16,000 Cherokees into stockades, where disease spreads." },
    { title: "Indian Territory", time: "1839-03-25", at: [-94.93, 35.86], kind: "note", side: "cherokee", until: "1839-08", text: "Between about 4,000 and 8,000 Cherokees died in the camps and on the journey." },
    { title: "The Ridges and Boudinot killed", time: "1839-06-22", at: [-94.8, 36.1], kind: "note", side: "cherokee", until: "1839-08", text: "Signers of the New Echota treaty are killed by Cherokees who hold them responsible." },
  ],
  labels: [
    { text: "Indian Territory", at: [-96.3, 35.2], size: "small" },
    { text: "Mississippi", at: [-90.6, 36.3], size: "small" },
    { text: "Georgia", at: [-83.6, 32.8], size: "small" },
  ],
  story: [
    {
      title: "The Removal Act and the Choctaws", time: "1830-04", until: "1833-06", view: { center: [-89, 35], zoom: 5.0 },
      text: "After the **Removal Act**, the **Choctaws** are the first nation moved west, in winter, from Mississippi across Arkansas. In the north, Black Hawk's people are massacred at the **Bad Axe**.",
    },
    {
      title: "Treaties and resistance", time: "1833-06", until: "1838-04", view: { center: [-87, 33], zoom: 4.9 },
      text: "The **Treaty of New Echota** is signed without the Cherokee government's consent; the **Seminoles** go to war in Florida; the **Creeks** and **Chickasaws** are removed.",
    },
    {
      title: "The Trail of Tears", time: "1838-04", view: { center: [-89.5, 36.3], zoom: 5.4 },
      text: "Follow the Cherokees from the stockades in Tennessee across Kentucky, Illinois, Missouri, and Arkansas to **Indian Territory**, held for weeks at the frozen Mississippi.",
    },
  ],
  sources: [
    "Theda Perdue and Michael D. Green, The Cherokee Nation and the Trail of Tears (2007)",
    "Claudio Saunt, Unworthy Republic: The Dispossession of Native Americans and the Road to Indian Territory (2020)",
    "National Park Service, Trail of Tears National Historic Trail maps",
    "Each removal is drawn as one representative journey; there were many parties and routes.",
  ],
};

export default map;
