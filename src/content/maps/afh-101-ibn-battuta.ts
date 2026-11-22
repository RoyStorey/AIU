import type { MapSpec } from "map-widget/spec";

/**
 * AFH 101, Lesson IV: Ibn Battuta's journey to Mali, 1352–1353, placed on "Ibn Battuta in
 * Mali". Dates follow his Rihla (Sijilmasa in February 1352, Walata in April, the capital in
 * June, departure in February 1353, Takedda until September). The capital's site is unknown;
 * Niani, the traditional candidate, is marked with a question.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "Ibn Battuta's Journey to Mali, 1352–1353",
  summary: "From Sijilmasa past the salt mines of Taghaza to Walata and the mansa's court, and home by Timbuktu, Gao, and Takedda.",
  start: "Feb 1352",
  end: "Feb 1354",
  detail: "continent",
  playSeconds: 90,
  trails: "full",
  view: { center: [-3, 22], zoom: 3.9 },
  sides: [
    { id: "battuta", name: "Ibn Battuta", color: "#1c7ed6" },
  ],
  moves: [
    {
      name: "Ibn Battuta", side: "battuta", kind: "caravan",
      path: [
        { at: [-4.27, 31.28], time: "18 Feb 1352" }, { at: [-4.98, 23.6], time: "14 Mar 1352" }, { at: [-7.03, 17.29], time: "4 Apr 1352" },
        { at: [-7.03, 17.29], time: "24 May 1352" }, { at: [-8.37, 11.38], time: "28 Jun 1352" }, { at: [-8.37, 11.38], time: "27 Feb 1353" },
        { at: "Timbuktu", time: "Apr 1353" }, { at: [-0.04, 16.27], time: "May 1353" }, { at: [7.07, 17.57], time: "Jun 1353" },
        { at: [7.07, 17.57], time: "11 Sep 1353" }, { at: [-0.29, 27.87], time: "Nov 1353" }, { at: [-4.27, 31.28], time: "Dec 1353" },
        { at: [-4.98, 34.03], time: "Jan 1354" },
      ],
    },
  ],
  events: [
    { title: "Taghaza", time: "14 Mar 1352", at: [-4.98, 23.6], kind: "note", side: "battuta", until: "Feb 1354", text: "A town of salt: houses and mosque built of salt blocks and roofed with camel skins." },
    { title: "Walata", time: "4 Apr 1352", at: [-7.03, 17.29], kind: "note", side: "battuta", until: "Feb 1354", text: "Fifty days at Mali's northern trading town, where the freedom of women shocks him." },
    { title: "The mansa's court", time: "28 Jun 1352", at: [-8.37, 11.38], kind: "note", side: "battuta", until: "Feb 1354", text: "Eight months at the court of Mansa Sulayman, whose first gift disappoints him. The capital's site is unknown." },
    { title: "Timbuktu", time: "Apr 1353", at: "Timbuktu", kind: "note", side: "battuta", until: "Feb 1354", text: "He visits the city on his way down the Niger." },
    { title: "Takedda", time: "Jun 1353", at: [7.07, 17.57], kind: "note", side: "battuta", until: "Feb 1354", text: "A copper-mining town; here an order from the sultan of Morocco calls him home." },
  ],
  labels: [
    { text: "Sijilmasa", at: [-4.27, 30.7], size: "small" },
    { text: "Gao", at: [-0.04, 15.7], size: "small" },
    { text: "Niger", at: [-3.0, 14.2], size: "small" },
  ],
  story: [
    {
      title: "Crossing the desert", time: "Feb 1352", until: "Apr 1352", view: { center: [-6, 24], zoom: 4.4 },
      text: "From **Sijilmasa**, twenty-five days to the salt mines of **Taghaza**, then on to **Walata** on the edge of Mali.",
    },
    {
      title: "At the mansa's court", time: "Apr 1352", until: "Feb 1353", view: { center: [-7, 15], zoom: 4.8 },
      text: "South from Walata to the capital of Mali, where he stays eight months.",
    },
    {
      title: "Home by the Niger", time: "Feb 1353", view: { center: [-1, 22], zoom: 3.9 },
      text: "Down the Niger to **Timbuktu** and **Gao**, east to **Takedda**, and north across the desert to Morocco.",
    },
  ],
  sources: [
    "Ibn Battuta, Rihla, trans. in N. Levtzion and J. F. P. Hopkins, eds., Corpus of Early Arabic Sources for West African History (1981)",
    "Ross E. Dunn, The Adventures of Ibn Battuta (1986; rev. ed., 2012)",
    "Dates within a few weeks are approximate; the capital's location is unknown.",
  ],
};

export default map;
