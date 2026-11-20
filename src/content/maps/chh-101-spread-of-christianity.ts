import type { MapSpec } from "map-widget/spec";

/**
 * CHH 101, Lesson I, page 5: "The Map of Early Christianity".
 * Where Christian communities are first attested, from Jerusalem to the Council of Nicaea.
 * Each marker appears at the date of the earliest good evidence for a church there (a letter,
 * a martyrdom, a bishop, a building), not the date the faith first arrived, which is usually
 * unknown; markers stay on the map once they appear. Arrows show the main lines of the
 * mission as the sources describe them, not routes. The page places the map twice:
 * #1-2 (the first century) and #3-5 (the second century to Nicaea).
 */
const map: MapSpec = {
  format: "atlas-map@1",
  title: "The Spread of Christianity, 30–325",
  summary: "Where Christian churches are first attested, from Jerusalem to the Council of Nicaea, and the persecutions they survived.",
  start: "25-01",
  end: "330-01",
  detail: "continent",
  playSeconds: 150,
  view: { center: [33, 35], zoom: 5 },
  sides: [
    { id: "church", name: "Churches", color: "#b5651d", description: "Christian communities, at the date of the earliest good evidence for each" },
    { id: "rome", name: "Rome", color: "#7a5195", description: "Roman emperors and governors" },
  ],
  arrows: [
    { from: "Jerusalem", to: "Antioch", start: "33-01", end: "120-01", color: "#b5651d" },
    { from: "Jerusalem", to: "Damascus", start: "33-01", end: "120-01", color: "#b5651d" },
    { from: "Antioch", to: "Ephesus", start: "47-01", end: "150-01", color: "#b5651d" },
    { from: "Ephesus", to: "Corinth", start: "50-01", end: "150-01", color: "#b5651d" },
    { from: "Corinth", to: "Rome", start: "49-01", end: "150-01", color: "#b5651d" },
    { from: "Jerusalem", to: "Alexandria", start: "60-01", end: "200-01", color: "#b5651d" },
    { from: "Rome", to: "Carthage", start: "150-01", end: "250-01", color: "#b5651d" },
    { from: [27.14, 38.42], to: "Lyon", start: "150-01", end: "250-01", color: "#b5651d" },
    { from: "Antioch", to: "Edessa", start: "150-01", end: "260-01", color: "#b5651d" },
  ],
  events: [
    { title: "Jerusalem", time: "30-06", at: "Jerusalem", kind: "founding", side: "church", until: "330-01", text: "The first community, led by Peter and then James (Acts 1–15)." },
    { title: "Damascus", time: "34-01", at: "Damascus", kind: "founding", side: "church", until: "330-01", text: "Paul is converted on his way to arrest believers there (Acts 9)." },
    { title: "Antioch", time: "38-01", at: "Antioch", kind: "founding", side: "church", until: "330-01", text: "Greek-speaking believers preach to Gentiles; \"Christians\" are first named here (Acts 11)." },
    { title: "Rome", time: "49-01", at: "Rome", kind: "founding", side: "church", until: "330-01", text: "Claudius expels Jews over disputes about \"Chrestus\"; Paul writes to the Roman church about 57." },
    { title: "Corinth", time: "50-06", at: "Corinth", kind: "founding", side: "church", until: "330-01", text: "Paul stays eighteen months (Acts 18); 1 Clement is sent here from Rome about 96." },
    { title: "Ephesus", time: "52-06", at: "Ephesus", kind: "founding", side: "church", until: "330-01", text: "Paul's base for nearly three years; one of the seven churches of Revelation." },
    { title: "Fire of Rome", time: "64-07", at: "Rome", kind: "disaster", side: "rome", until: "66-01", text: "Nero blames the Christians; Tacitus describes their deaths. Tradition places Peter's and Paul's martyrdoms here." },
    { title: "Jerusalem destroyed", time: "70-08", at: "Jerusalem", kind: "disaster", side: "rome", until: "72-01", text: "Titus takes the city and burns the Temple." },
    { title: "Alexandria", time: "100-01", at: "Alexandria", kind: "founding", side: "church", until: "330-01", text: "Christian papyri survive from the second century; its catechetical school flourishes about 180–250." },
    { title: "Smyrna", time: "110-01", at: [27.14, 38.42], kind: "founding", side: "church", until: "330-01", text: "Ignatius writes to its church on his way to Rome; Polycarp is its bishop." },
    { title: "Bithynia", time: "112-01", at: [29.92, 40.77], kind: "note", side: "rome", until: "116-01", text: "Pliny writes to Trajan: Christians are found in towns, villages, and farms." },
    { title: "Polycarp martyred", time: "155-01", at: [27.14, 38.42], kind: "disaster", side: "rome", until: "158-01", text: "The aged bishop is burned in the stadium of Smyrna." },
    { title: "Lyons and Vienne", time: "177-01", at: "Lyon", kind: "founding", side: "church", until: "330-01", text: "Martyrs of a Greek-speaking church in Gaul; Irenaeus becomes its bishop." },
    { title: "Carthage", time: "180-07", at: "Carthage", kind: "founding", side: "church", until: "330-01", text: "The Scillitan martyrs are tried at Carthage, the first dated Christian text in Latin; Perpetua dies here in 203." },
    { title: "Edessa", time: "201-01", at: "Edessa", kind: "founding", side: "church", until: "330-01", text: "A chronicle records a flood that destroyed \"the temple of the Christians\"; Syriac Christianity centres here." },
    { title: "Dura-Europos", time: "232-01", at: [40.73, 34.75], kind: "founding", side: "church", until: "330-01", text: "A house converted for worship, with a painted baptistery, on the Euphrates frontier." },
    { title: "Decius's edict", time: "250-01", at: "Rome", kind: "disaster", side: "rome", until: "252-01", text: "Every inhabitant must sacrifice and obtain a certificate; the first empire-wide persecution." },
    { title: "Cyprian martyred", time: "258-09", at: "Carthage", kind: "disaster", side: "rome", until: "260-01", text: "Under Valerian, the bishop of Carthage is beheaded." },
    { title: "Armenia", time: "301-01", at: [44.29, 40.16], kind: "founding", side: "church", until: "330-01", text: "King Tiridates III is baptized by Gregory the Illuminator; the traditional date is 301, many historians prefer about 314." },
    { title: "The Great Persecution", time: "303-02", at: [29.92, 40.77], kind: "disaster", side: "rome", until: "311-04", text: "Diocletian's edicts at Nicomedia order churches destroyed and Scriptures burned." },
    { title: "Milvian Bridge", time: "312-10", at: [12.467, 41.935], kind: "battle", side: "rome", text: "Constantine defeats Maxentius under a Christian sign." },
    { title: "Council of Nicaea", time: "325-06", at: [29.72, 40.43], kind: "treaty", side: "church", until: "330-01", text: "About three hundred bishops, from Spain to Persia, condemn Arius." },
  ],
  labels: [
    { text: "Mediterranean Sea", at: [19, 34.0], size: "large" },
    { text: "Roman Empire", at: [20, 42.5], size: "medium" },
    { text: "Persia", at: [50, 33], size: "medium" },
    { text: "Black Sea", at: [34, 43.3], size: "small" },
  ],
  story: [
    {
      title: "Jerusalem and Antioch", time: "25-01", until: "45-01", view: { center: [35.5, 34], zoom: 6 },
      text: "Watch the first markers: **Jerusalem**, then **Damascus** and **Antioch**, all within a few days' walk. For its first fifteen years the movement is a Jewish one in Judea and Syria.",
    },
    {
      title: "Paul's cities and Rome", time: "45-01", until: "100-01", view: { center: [26, 37.5], zoom: 4.8 },
      text: "Follow the arrows west along the coasts: **Ephesus**, **Corinth**, **Rome**. Then notice the two red markers, Rome in 64 and Jerusalem in 70, which mark the end of the first generation.",
    },
    {
      title: "The second century", time: "100-01", until: "200-01", view: { center: [18, 39], zoom: 4.2 },
      text: "Now the map widens: **Alexandria** in Egypt, **Smyrna** in Asia, **Lyons** in Gaul, **Carthage** in Africa. Notice that every one of them is a city on a sea lane or a Roman road.",
    },
    {
      title: "East of Antioch", time: "200-01", until: "300-01", view: { center: [35, 36], zoom: 4.6 },
      text: "Look east beyond the Roman frontier towns to **Edessa** and **Dura-Europos**, where Christians spoke Syriac. Then watch the persecutions of **Decius** and **Valerian** flash in Rome and Carthage.",
    },
    {
      title: "Persecution and Constantine", time: "300-01", view: { center: [24, 39], zoom: 4.4 },
      text: "In a dozen years the map turns: the **Great Persecution** begins at Nicomedia in 303, Constantine wins at the **Milvian Bridge** in 312, and in 325 bishops from across this whole map meet at **Nicaea**.",
    },
  ],
  sources: [
    "Eusebius, Ecclesiastical History; Acts of the Apostles; Pliny, Letters 10.96",
    "Adolf von Harnack, The Mission and Expansion of Christianity in the First Three Centuries (1902; English trans. 1908)",
    "Henry Chadwick, The Early Church (1967; rev. ed. 1993)",
    "Dates mark the earliest good evidence for a church at each place, not the date the faith arrived.",
  ],
};

export default map;
