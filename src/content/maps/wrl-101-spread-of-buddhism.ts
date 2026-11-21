import type { MapSpec } from "map-widget/spec";

/**
 * WRL 101, Lesson III: the spread of Buddhism from the Ganges plain across Asia.
 * Markers appear at the traditional or earliest well-attested date for Buddhism at each
 * place and stay on the map once they appear; colours mark the tradition that came to
 * prevail there. Dates for the Buddha follow the later chronology many scholars now
 * prefer (c. 480–400 BCE). Arrows show the main lines of transmission, not routes.
 * Placed twice: #1-3 on the page "Ashoka and the Three Vehicles", #4-5 on
 * "Buddhism in China and the Rise of Chan".
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Spread of Buddhism, c. 480 BCE–1300 CE",
  summary: "From the Buddha's Ganges plain to Sri Lanka, along the Silk Roads to China, and on to Korea, Japan, Tibet, and Southeast Asia.",
  start: "500 BCE",
  end: "1300",
  detail: "continent",
  playSeconds: 150,
  view: { center: [95, 27], zoom: 3 },
  sides: [
    { id: "early", name: "India", color: "#b5651d", description: "The Buddha's homeland and early Indian Buddhism" },
    { id: "theravada", name: "Theravada", color: "#c9a227", description: "Lands where the Theravada tradition came to prevail" },
    { id: "mahayana", name: "Mahayana", color: "#2f7d6d", description: "Lands where Mahayana traditions came to prevail" },
    { id: "vajrayana", name: "Vajrayana", color: "#7a5195", description: "Tibet and the Himalayas" },
  ],
  arrows: [
    { from: "Pataliputra", to: [80.40, 8.35], start: "255 BCE", end: "100", color: "#c9a227" },
    { from: "Pataliputra", to: "Taxila", start: "250 BCE", end: "100", color: "#b5651d" },
    { from: "Taxila", to: "Kashgar", start: "50", end: "500", color: "#2f7d6d" },
    { from: "Kashgar", to: "Dunhuang", start: "100", end: "600", color: "#2f7d6d" },
    { from: "Dunhuang", to: "Luoyang", start: "100", end: "600", color: "#2f7d6d" },
    { from: "Xi'an", to: [126.19, 41.12], start: "370", end: "700", color: "#2f7d6d" },
    { from: [126.19, 41.12], to: [135.82, 34.47], start: "538", end: "800", color: "#2f7d6d" },
    { from: "Xi'an", to: [85.44, 25.14], start: "629", end: "650", color: "#2f7d6d" },
    { from: [85.44, 25.14], to: "Lhasa", start: "640", end: "1000", color: "#7a5195" },
    { from: [85.44, 25.14], to: [110.20, -7.61], start: "700", end: "900", color: "#2f7d6d" },
    { from: [80.40, 8.35], to: [94.86, 21.17], start: "1050", end: "1300", color: "#c9a227" },
  ],
  events: [
    { title: "Lumbini", time: "480 BCE", at: [83.276, 27.469], kind: "note", side: "early", until: "1300", text: "Traditional birthplace of Siddhartha Gautama; older dates place his birth about 563 BCE." },
    { title: "Bodh Gaya", time: "445 BCE", at: [84.991, 24.696], kind: "founding", side: "early", until: "1300", text: "The Buddha's awakening beneath the bodhi tree." },
    { title: "Sarnath", time: "444 BCE", at: [83.024, 25.381], kind: "founding", side: "early", until: "1300", text: "The first sermon in the Deer Park: the Four Noble Truths." },
    { title: "Kushinagar", time: "400 BCE", at: [83.889, 26.741], kind: "note", side: "early", until: "1300", text: "The Buddha's final nirvana at about eighty." },
    { title: "Kalinga war", time: "261 BCE", at: [85.83, 20.25], kind: "battle", side: "early", until: "255 BCE", text: "Ashoka's conquest kills or displaces hundreds of thousands; his edicts record his remorse." },
    { title: "Ashoka's edicts", time: "258 BCE", at: "Pataliputra", kind: "founding", side: "early", until: "1300", text: "From his capital, Ashoka proclaims the \"conquest by Dharma\" on rocks and pillars across India." },
    { title: "Sri Lanka", time: "250 BCE", at: [80.40, 8.35], kind: "founding", side: "theravada", until: "1300", text: "Tradition says Ashoka's son Mahinda brought Buddhism to Anuradhapura." },
    { title: "Gandhara", time: "200 BCE", at: "Taxila", kind: "founding", side: "early", until: "1300", text: "Buddhism flourishes in the northwest; Greek and Indian art meet in the first Buddha images." },
    { title: "King Milinda", time: "150 BCE", at: [74.53, 32.49], kind: "note", side: "early", until: "100 BCE", text: "The Greek king Menander questions the monk Nagasena about the self." },
    { title: "Pali Canon written", time: "29 BCE", at: [80.62, 7.50], kind: "note", side: "theravada", until: "1300", text: "Monks in Sri Lanka write down the scriptures transmitted orally for centuries." },
    { title: "Luoyang", time: "68", at: "Luoyang", kind: "founding", side: "mahayana", until: "1300", text: "By tradition, the White Horse Temple is built for the first Buddhist monks in China." },
    { title: "Kanishka", time: "127", at: [71.58, 34.01], kind: "note", side: "early", until: "200", text: "The Kushan emperor patronizes Buddhism along the routes to Central Asia." },
    { title: "Dunhuang", time: "366", at: "Dunhuang", kind: "founding", side: "mahayana", until: "1300", text: "Monks begin carving the Mogao caves, a gateway between Central Asia and China." },
    { title: "Korea", time: "372", at: [126.19, 41.12], kind: "founding", side: "mahayana", until: "1300", text: "A monk from China brings images and scriptures to the kingdom of Goguryeo." },
    { title: "Kumarajiva", time: "401", at: "Xi'an", kind: "founding", side: "mahayana", until: "1300", text: "The great translator arrives at Chang'an and renders Mahayana texts into Chinese." },
    { title: "Japan", time: "538", at: [135.82, 34.47], kind: "founding", side: "mahayana", until: "1300", text: "A Korean king sends a Buddha image and sutras to the Japanese court (traditional dates 538 or 552)." },
    { title: "Xuanzang at Nalanda", time: "637", at: [85.44, 25.14], kind: "note", side: "early", until: "1200", text: "The Chinese pilgrim studies at the great monastic university, returning in 645 with hundreds of texts." },
    { title: "Tibet", time: "641", at: "Lhasa", kind: "founding", side: "vajrayana", until: "1300", text: "King Songtsen Gampo's reign: tradition credits him with the first temples in Lhasa." },
    { title: "Samye", time: "779", at: [91.50, 29.33], kind: "founding", side: "vajrayana", until: "1300", text: "Tibet's first monastery is consecrated, with Indian teachers." },
    { title: "Borobudur", time: "800", at: [110.20, -7.61], kind: "founding", side: "mahayana", until: "1300", text: "The great Mahayana monument rises in central Java." },
    { title: "Persecution of 845", time: "845", at: "Xi'an", kind: "disaster", side: "mahayana", until: "850", text: "Emperor Wuzong destroys thousands of monasteries and laicizes hundreds of thousands of monks and nuns." },
    { title: "Bagan", time: "1056", at: [94.86, 21.17], kind: "founding", side: "theravada", until: "1300", text: "King Anawrahta adopts Theravada Buddhism; Bagan becomes a city of temples." },
    { title: "Angkor", time: "1181", at: "Angkor", kind: "founding", side: "mahayana", until: "1300", text: "Jayavarman VII builds the Bayon; Cambodia later turns to Theravada." },
    { title: "Nalanda destroyed", time: "1200", at: [85.44, 25.14], kind: "disaster", side: "early", until: "1215", text: "Invading armies sack the great monasteries of the Ganges plain; Buddhism all but vanishes from India." },
  ],
  labels: [
    { text: "Ganges plain", at: [83, 23.3], size: "small" },
    { text: "Tibetan Plateau", at: [87, 33], size: "medium" },
    { text: "Silk Roads", at: [83, 41.5], size: "medium" },
    { text: "China", at: [110, 30], size: "large" },
    { text: "Bay of Bengal", at: [89, 15], size: "small" },
  ],
  story: [
    {
      title: "The Ganges plain", time: "500 BCE", until: "300 BCE", view: { center: [84, 25.5], zoom: 5.5 },
      text: "Watch the first four markers appear close together: **Lumbini**, **Bodh Gaya**, **Sarnath**, and **Kushinagar**, the places of the Buddha's birth, awakening, first sermon, and death, all within a few hundred kilometres.",
    },
    {
      title: "Ashoka and Sri Lanka", time: "300 BCE", until: "1", view: { center: [80, 19], zoom: 4 },
      text: "The **Kalinga war** flashes, then Ashoka's edicts at **Pataliputra**. Follow the arrows south to **Sri Lanka**, where the Pali Canon will be written down, and northwest to **Gandhara**.",
    },
    {
      title: "Along the Silk Roads", time: "1", until: "500", view: { center: [93, 35], zoom: 3.2 },
      text: "Now follow the green arrows from **Taxila** through **Kashgar** and **Dunhuang** to **Luoyang**. Buddhism reaches China not by sea but along the caravan routes of Central Asia.",
    },
    {
      title: "Korea, Japan, and Tibet", time: "350", until: "850", view: { center: [112, 33], zoom: 3.2 },
      text: "From China the faith passes to **Korea** and then **Japan**; notice the arrow from **Nalanda** to **Lhasa**, where Tibet receives its Buddhism from India, not China. Then the red marker at **Xi'an**: the persecution of 845.",
    },
    {
      title: "Southeast Asia and the end in India", time: "750", view: { center: [97, 17], zoom: 3.4 },
      text: "Watch **Borobudur**, **Bagan**, and **Angkor** appear. Then the last marker, at **Nalanda** about 1200: by now Buddhism lives almost everywhere in Asia except the land where it began.",
    },
  ],
  sources: [
    "Peter Harvey, An Introduction to Buddhism (2nd ed., 2013)",
    "Richard H. Robinson and Willard L. Johnson, The Buddhist Religion (4th ed., 1997)",
    "Erik Zürcher, The Buddhist Conquest of China (1959)",
    "Dates are traditional or the earliest well-attested; several, especially for the Buddha, are disputed.",
  ],
};

export default map;
