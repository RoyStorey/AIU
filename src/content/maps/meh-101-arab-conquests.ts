import type { MapSpec } from "map-widget/spec";

/**
 * MEH 101, Lesson III, page 2: "The Great Conquests".
 * The conquests of 632–651, in the order the page tells them: Arabia reunited, Syria,
 * Iraq, Egypt, and the Iranian plateau to the death of Yazdegerd III. Provinces change
 * hands over the span the page gives; borders are approximate, and the dates of
 * Qadisiyya and the fall of Jerusalem follow the page's ranges. Armies march overland
 * between attested places (npm run maps:check verifies they never cross water); Khalid's
 * desert march to Syria followed a route the sources dispute, so it is drawn simply.
 * Colours match the lesson's earlier map: Rome purple, Persia green.
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Arab Conquests, 632–651",
  summary: "From the reunification of Arabia to the fall of the Sasanian empire: Syria, Iraq, Egypt, and Iran pass to the caliphate within twenty years.",
  start: "632-04",
  end: "652-01",
  detail: "continent",
  playSeconds: 120,
  trails: "full",
  view: { center: [42, 31], zoom: 4.1 },
  sides: [
    { id: "caliphate", name: "Caliphate", color: "#b8862b", capital: "Medina", description: "The Muslim community ruled from Medina by the caliphs Abu Bakr, 'Umar, and 'Uthman" },
    { id: "rome", name: "Roman Empire", color: "#8a3b6d", capital: "Constantinople", description: "The eastern Roman (Byzantine) empire under Heraclius and his successors" },
    { id: "persia", name: "Sasanian Persia", color: "#3f7d5c", capital: "Ctesiphon", description: "The Sasanian empire under Yazdegerd III" },
  ],
  territories: [
    // Arabia: the Hijaz held by Medina; the rest of the peninsula rejoins in the wars of the ridda
    { name: "Hijaz", area: [[36.5, 26.0], [39.0, 21.5], [40.5, 20.0], [42.0, 22.0], [41.0, 26.5], [38.5, 28.5]], owner: "caliphate" },
    {
      name: "Arabia",
      area: [[34.9, 29.5], [38.0, 30.0], [42.0, 30.5], [44.3, 31.9], [46.5, 30.8], [48.6, 30.0], [50.5, 27.0], [56.4, 26.4], [59.8, 22.5], [55.0, 17.0], [52.0, 16.0], [43.4, 12.6], [42.5, 16.0], [39.0, 21.5], [36.5, 26.0]],
      owner: null,
      changes: [{ side: "caliphate", start: "632-09", end: "633-08", from: "Medina" }],
    },
    // Roman provinces
    {
      name: "Palestine",
      area: [[34.25, 31.3], [34.9, 33.1], [35.9, 33.3], [36.6, 32.6], [36.0, 30.0], [34.9, 29.5]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "634-02", end: "638-03", from: [34.6, 31.0] }],
    },
    {
      name: "Southern Syria",
      area: [[35.85, 35.0], [39.2, 35.3], [38.8, 34.6], [37.4, 33.1], [36.6, 32.6], [35.9, 33.3], [34.9, 33.1], [35.6, 34.6]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "634-09", end: "636-12", from: [36.6, 32.6] }],
    },
    {
      name: "Northern Syria",
      area: [[35.6, 36.9], [37.7, 37.7], [38.3, 36.9], [39.6, 36.0], [39.2, 35.3], [35.85, 35.0]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "636-09", end: "638-06", from: [36.6, 35.2] }],
    },
    {
      name: "Upper Mesopotamia",
      area: [[37.7, 37.7], [39.0, 38.0], [40.4, 38.2], [41.2, 37.9], [41.0, 37.25], [40.6, 36.9], [39.6, 36.0], [38.3, 36.9]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "638-06", end: "640-06", from: [39.6, 36.0] }],
    },
    {
      name: "Egypt",
      area: [[25.0, 31.9], [29.9, 31.6], [32.3, 31.6], [34.25, 31.3], [34.9, 29.5], [33.6, 27.6], [32.9, 24.0], [31.0, 23.9], [29.4, 26.5], [27.0, 29.0], [25.0, 29.5]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "639-12", end: "642-09", from: "Pelusium" }],
    },
    {
      name: "Cyrenaica",
      area: [[19.9, 30.3], [20.0, 32.9], [22.0, 33.0], [25.0, 31.9], [25.0, 29.5], [22.0, 29.5]],
      owner: "rome",
      changes: [{ side: "caliphate", start: "642-09", end: "643-09", from: [25.0, 31.0] }],
    },
    {
      name: "Anatolia, Greece and Thrace",
      area: [[19.4, 41.8], [20.0, 42.6], [22.0, 42.2], [24.5, 42.2], [27.4, 42.6], [28.0, 44.0], [31.0, 42.5], [36.0, 42.5], [40.4, 41.0], [39.3, 40.5], [39.0, 38.0], [37.7, 37.7], [35.6, 36.9], [34.6, 35.0], [32.0, 34.4], [25.5, 34.8], [22.5, 36.0], [19.4, 39.0]],
      owner: "rome",
    },
    // Persian lands
    {
      name: "Iraq",
      area: [[40.4, 35.2], [40.6, 36.9], [41.0, 37.25], [43.5, 37.2], [45.5, 35.0], [46.5, 33.5], [47.8, 31.5], [48.6, 30.0], [46.5, 30.8], [44.3, 31.9], [42.7, 33.4], [41.0, 34.4]],
      owner: "persia",
      changes: [{ side: "caliphate", start: "636-09", end: "638-12", from: [44.3, 31.9] }],
    },
    {
      name: "Western Iran",
      area: [[43.5, 37.2], [41.2, 37.9], [42.6, 38.9], [43.6, 39.4], [44.2, 40.5], [44.0, 41.2], [46.5, 42.0], [48.5, 41.8], [50.0, 40.5], [53.5, 38.5], [54.5, 33.0], [56.0, 28.0], [57.3, 25.6], [54.0, 26.5], [50.5, 29.0], [48.6, 30.0], [47.8, 31.5], [46.5, 33.5], [45.5, 35.0]],
      owner: "persia",
      changes: [{ side: "caliphate", start: "640-06", end: "649-06", from: [46.5, 33.5] }],
    },
    {
      name: "Eastern Iran",
      area: [[53.5, 38.5], [56.0, 38.3], [59.0, 38.4], [62.5, 38.2], [63.5, 36.5], [62.0, 35.0], [61.5, 31.0], [61.6, 25.2], [57.3, 25.6], [56.0, 28.0], [54.5, 33.0]],
      owner: "persia",
      changes: [{ side: "caliphate", start: "649-06", end: "651-12", from: [54.5, 33.0] }],
    },
  ],
  moves: [
    {
      name: "Khalid ibn al-Walid", side: "caliphate", kind: "army",
      path: [
        { at: "Medina", time: "632-09" }, { at: [46.6, 24.6], time: "632-12" }, { at: [44.4, 32.0], time: "633-05" },
        { at: [44.4, 32.0], time: "634-01" }, { at: [38.8, 33.5], time: "634-03" }, { at: "Damascus", time: "635-09" },
        { at: "Yarmuk", time: "636-08" }, { at: "Antioch", time: "637-10" },
      ],
    },
    {
      name: "'Amr ibn al-'As", side: "caliphate", kind: "army",
      path: [
        { at: "Medina", time: "633-10" }, { at: [34.7, 31.2], time: "634-02" }, { at: [34.95, 31.7], time: "634-07" },
        { at: [34.95, 31.7], time: "639-10" }, { at: "Pelusium", time: "639-12" }, { at: "Cairo", time: "641-04" },
        { at: "Alexandria", time: "641-11" }, { at: [20.07, 32.12], time: "642-12" },
      ],
    },
    {
      name: "Sa'd ibn Abi Waqqas", side: "caliphate", kind: "army",
      path: [{ at: "Medina", time: "636-03" }, { at: [44.4, 32.0], time: "636-09" }, { at: "Ctesiphon", time: "637-03" }, { at: [45.0, 34.3], time: "637-12" }],
    },
    {
      name: "Yazdegerd III", side: "persia", kind: "explorer",
      path: [
        { at: "Ctesiphon", time: "637-03" }, { at: [45.9, 34.5], time: "637-12" }, { at: "Isfahan", time: "642-06" },
        { at: [52.9, 29.9], time: "645-06" }, { at: [57.1, 30.3], time: "649-06" }, { at: [61.5, 31.0], time: "650-06" },
        { at: [61.83, 37.6], time: "651-06" },
      ],
    },
  ],
  events: [
    { title: "The wars of the ridda", time: "632-09", at: [46.6, 24.6], kind: "battle", side: "caliphate", until: "633-08", text: "Abu Bakr's armies bring the tribes that broke away after Muhammad's death back under Medina; Musaylima is killed at 'Aqraba." },
    { title: "Al-Hira surrenders", time: "633-05", at: [44.4, 32.0], kind: "treaty", side: "caliphate", text: "Khalid ibn al-Walid takes the old Lakhmid capital in lower Iraq for a tribute." },
    { title: "Battle of Ajnadayn", time: "634-07", at: [34.95, 31.7], kind: "battle", side: "caliphate", text: "The first major victory over a Roman army, between Jerusalem and Gaza." },
    { title: "Damascus surrenders", time: "635-09", at: "Damascus", kind: "treaty", side: "caliphate", text: "The city opens its gates on terms." },
    { title: "Battle of the Yarmuk", time: "636-08", at: "Yarmuk", kind: "battle", side: "caliphate", text: "Heraclius's great army is destroyed; Roman rule in Syria is at an end." },
    { title: "Battle of al-Qadisiyya", time: "636-11", at: [44.4, 31.9], kind: "battle", side: "caliphate", text: "The main Persian army is destroyed and its commander Rustam killed. The sources date the battle anywhere from 636 to 638." },
    { title: "Ctesiphon taken", time: "637-03", at: "Ctesiphon", kind: "siege", side: "caliphate", text: "The Sasanian capital falls with its treasure; Yazdegerd III flees to the plateau." },
    { title: "Jerusalem surrenders", time: "638-02", at: "Jerusalem", kind: "treaty", side: "caliphate", text: "The patriarch Sophronius surrenders the city in 637 or 638; tradition says 'Umar came in person." },
    { title: "Kufa and Basra founded", time: "638-06", at: [44.4, 32.0], kind: "founding", side: "caliphate", text: "The garrison cities of Iraq keep the Arab warriors together on the desert edge." },
    { title: "Babylon falls; Fustat founded", time: "641-04", at: "Cairo", kind: "founding", side: "caliphate", text: "'Amr takes the Roman fortress at the head of the delta and builds his camp-city beside it." },
    { title: "Alexandria surrenders", time: "641-11", at: "Alexandria", kind: "treaty", side: "caliphate", text: "The second city of the Roman world surrenders by treaty; the garrison leaves in 642." },
    { title: "Battle of Nahavand", time: "642-06", at: [48.4, 34.2], kind: "battle", side: "caliphate", text: "\"The victory of victories\": the last great Persian army is defeated in the Zagros." },
    { title: "Death of Yazdegerd III", time: "651-06", at: [61.83, 37.6], kind: "disaster", side: "persia", text: "The last Sasanian king is murdered near Merv, and the empire of four centuries ends with him." },
  ],
  labels: [
    { text: "Arabia", at: [45, 23], size: "medium" },
    { text: "Mediterranean Sea", at: [22, 34.2], size: "small" },
    { text: "Persian Gulf", at: [51.5, 27.0], size: "small" },
    { text: "Red Sea", at: [38.0, 21.0], size: "small" },
  ],
  story: [
    {
      title: "Arabia reunited, 632–633", time: "632-04", view: { center: [44, 25], zoom: 4.2 },
      text: "The **caliphate** is gold, Rome purple, Persia green. Watch Arabia: after Muhammad's death many tribes broke away, and by 633 the wars of the **ridda** have brought the whole peninsula under Medina.",
    },
    {
      title: "Syria, 634–638", time: "633-09", view: { center: [37, 33], zoom: 5.2 },
      text: "Follow the armies north into Roman territory: **Ajnadayn** (634), **Damascus** (635), and the **Yarmuk** (636). See how quickly Syria and Palestine turn gold once Heraclius's army is gone.",
    },
    {
      title: "Iraq and the fall of Ctesiphon, 636–638", time: "636-06", view: { center: [44.5, 33], zoom: 5.2 },
      text: "Now look east, at the same moment: at **Qadisiyya** the Persian army is destroyed, and **Ctesiphon** falls. Find **Yazdegerd III** as he begins his long flight onto the plateau.",
    },
    {
      title: "Egypt, 639–642", time: "639-09", view: { center: [30.5, 29.5], zoom: 5 },
      text: "Follow **'Amr ibn al-'As** across Sinai to the Nile. Egypt, which Persia held for a decade in the last war, passes to the caliphate for good.",
    },
    {
      title: "The end of Persia, 642–651", time: "642-03", view: { center: [52, 32], zoom: 4.6 },
      text: "After **Nahavand** the plateau falls province by province. Follow Yazdegerd east until he is killed near **Merv** in 651. Compare the map with 632: one empire gone, the other cut in half.",
    },
  ],
  sources: [
    "Hugh Kennedy, *The Great Arab Conquests* (2007)",
    "Robert G. Hoyland, *In God's Path: The Arab Conquests and the Creation of an Islamic Empire* (2015)",
    "Fred M. Donner, *The Early Islamic Conquests* (Princeton, 1981)",
  ],
};

export default map;
