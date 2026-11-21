import type { MapSpec } from "map-widget/spec";

/**
 * SOC 110, Lesson IV: where English took root between 1607 and 1901, colored by the kind of
 * colony (settlement, plantation, trade and administration, and the settlements of freed
 * Black people in West Africa). Markers show founding or arrival dates, not the later spread
 * of English inland, and stay on the map once they appear. Placed once, on the page
 * "How English Spread".
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "How English Spread, 1607–1901",
  summary: "Where English took root, from Jamestown to the Philippines, and what kind of colony brought it.",
  start: "1600",
  end: "1901",
  detail: "world",
  playSeconds: 120,
  view: { center: [20, 10], zoom: 1.2 },
  sides: [
    { id: "settlement", name: "Settlement colonies", color: "#1c7ed6" },
    { id: "plantation", name: "Plantation colonies", color: "#c92a2a" },
    { id: "trade", name: "Trade and administration", color: "#e8590c" },
    { id: "freedmen", name: "Settlements of freed people", color: "#2b8a3e" },
  ],
  events: [
    { title: "Jamestown", time: "1607", at: [-76.78, 37.21], kind: "note", side: "settlement", until: "1901", text: "The first permanent English settlement in North America, on the James River in Virginia." },
    { title: "Plymouth", time: "1620", at: [-70.66, 41.96], kind: "note", side: "settlement", until: "1901", text: "The Pilgrims land in Massachusetts; Puritan New England grows from settlers largely from eastern England." },
    { title: "Barbados", time: "1627", at: [-59.62, 13.1], kind: "note", side: "plantation", until: "1901", text: "English settlement begins; within decades, sugar plantations worked by enslaved Africans dominate the island." },
    { title: "Madras", time: "1639", at: [80.29, 13.08], kind: "note", side: "trade", until: "1901", text: "The East India Company acquires the site of Fort St. George, one of its first footholds in India." },
    { title: "Jamaica", time: "1655", at: [-76.79, 17.97], kind: "note", side: "plantation", until: "1901", text: "England takes Jamaica from Spain; Jamaican Creole develops among the enslaved on its plantations." },
    { title: "Calcutta", time: "1690", at: [88.36, 22.57], kind: "note", side: "trade", until: "1901", text: "A Company trading post on the Hooghly, later the capital of British India, where Macaulay's Minute of 1835 set English-medium education in motion." },
    { title: "Loyalists", time: "1784", at: [-76.48, 44.23], kind: "note", side: "settlement", until: "1901", text: "Colonists loyal to Britain move north after the American Revolution, settling in Ontario and the Maritimes: the roots of Canadian English." },
    { title: "Sydney Cove", time: "1788", at: [151.21, -33.86], kind: "note", side: "settlement", until: "1901", text: "The First Fleet arrives with convicts, marines, and officials; Australian English grows from the mixing of their dialects." },
    { title: "Freetown", time: "1792", at: [-13.23, 8.48], kind: "note", side: "freedmen", until: "1901", text: "Black Loyalists from Nova Scotia found Freetown in Sierra Leone, after an earlier settlement of 1787." },
    { title: "Singapore", time: "1819", at: [103.85, 1.29], kind: "note", side: "trade", until: "1901", text: "Stamford Raffles founds a British trading post; English later becomes the working language of a multilingual city." },
    { title: "Algoa Bay", time: "1820", at: [25.62, -33.96], kind: "note", side: "settlement", until: "1901", text: "About four thousand British settlers arrive in the Eastern Cape, the 1820 Settlers of South African English." },
    { title: "Monrovia", time: "1822", at: [-10.8, 6.31], kind: "note", side: "freedmen", until: "1901", text: "The American Colonization Society settles freed African Americans in what becomes Liberia." },
    { title: "Waitangi", time: "1840", at: [174.07, -35.27], kind: "treaty", side: "settlement", until: "1901", text: "The Treaty of Waitangi between the British Crown and Māori chiefs opens large-scale settlement of New Zealand." },
    { title: "Hong Kong", time: "1842", at: [114.16, 22.28], kind: "treaty", side: "trade", until: "1901", text: "Ceded to Britain by the Treaty of Nanking; English remains an official language today." },
    { title: "Lagos", time: "1861", at: [3.39, 6.45], kind: "note", side: "trade", until: "1901", text: "Britain annexes Lagos, a first step toward the colony of Nigeria, where English now links some five hundred languages." },
    { title: "The Thomasites", time: "1901", at: [120.98, 14.6], kind: "note", side: "trade", until: "1901", text: "American teachers arrive in Manila aboard the USAT Thomas to build English-medium schools in the Philippines." },
  ],
  labels: [
    { text: "Caribbean", at: [-72, 21.5], size: "small" },
    { text: "India", at: [79, 21], size: "small" },
  ],
  story: [
    {
      title: "Atlantic beginnings", time: "1600", until: "1660", view: { center: [-65, 28], zoom: 2.4 },
      text: "English crosses the Atlantic: settlers at **Jamestown** and **Plymouth**, and sugar plantations on **Barbados** and **Jamaica**, worked by enslaved Africans.",
    },
    {
      title: "Trading posts in India", time: "1660", until: "1770", view: { center: [84, 17], zoom: 3.8 },
      text: "Now look east: the East India Company holds **Madras** and founds **Calcutta**. Here English arrives with a few traders and officials, not a mass of settlers.",
    },
    {
      title: "After the American Revolution", time: "1770", until: "1830", view: { center: [20, 5], zoom: 1.2 },
      text: "The map widens. **Loyalists** go north to Canada, the First Fleet reaches **Sydney**, settlers land at **Algoa Bay**, freed people found **Freetown** and **Monrovia**, and Raffles founds **Singapore**.",
    },
    {
      title: "New Zealand and Hong Kong", time: "1830", until: "1850", view: { center: [145, -8], zoom: 2.2 },
      text: "Two treaties: **Waitangi** opens New Zealand to settlement, and **Hong Kong** becomes a British port on the China coast.",
    },
    {
      title: "Africa and the Philippines", time: "1850", view: { center: [60, 10], zoom: 1.2 },
      text: "**Lagos** is annexed in 1861, and in 1901 American teachers bring English to the **Philippines**. Compare the blue settlement colonies with the orange posts: two very different ways for a language to spread.",
    },
  ],
  sources: [
    "Edgar W. Schneider, Postcolonial English: Varieties Around the World (2007)",
    "David Crystal, English as a Global Language (2nd ed., 2003)",
    "Peter Trudgill, New-Dialect Formation: The Inevitability of Colonial Englishes (2004)",
    "Markers give founding or arrival dates; English usually spread inland much later, and the colony types overlap in practice.",
  ],
};

export default map;
