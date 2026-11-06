import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const pat101: CourseContent = {
  overview: `In the generations after the apostles, the followers of Jesus became the Church. Small communities scattered through the cities of the Roman Empire, still close to their Jewish roots and still expecting the Lord's return, had to learn how to choose their leaders, read their Scriptures, worship, discipline their members, face persecution, and explain themselves to a hostile world. The writings that survive from these decades, between about AD 70 and 150, are known as the Apostolic Fathers, and they are our best witnesses to how it happened.

This course reads them all. We begin with the Didache, a manual of church life lost for a thousand years and found in a Constantinople library in 1873. We read the letter the church of Rome sent to Corinth around the end of the first century, with its argument for order and its claim that the apostles appointed successors; the seven letters Ignatius of Antioch wrote on his way to die in the arena, with their single bishop, their insistence that Christ truly suffered, and their longing for martyrdom; Polycarp's letter, the account of his death in the stadium at Smyrna, and Papias's traditions about the Gospels; and finally the Epistle of Barnabas, the visions of the Shepherd of Hermas, and the Epistle to Diognetus, with its Christians who are the soul of the world.

Throughout, we read the Fathers both as historical sources, to be questioned like any other evidence, and as classics of Christian thought that every later tradition has claimed. We weigh the arguments of scholars from J. B. Lightfoot and Adolf von Harnack to Walter Bauer, Peter Lampe, Allen Brent, and Candida Moss. Each lesson takes about two hours and ends with a session reading the texts themselves.`,
  objectives: [
    "Describe the writings known as the Apostolic Fathers, how the collection was formed, and their place in the history of the New Testament canon.",
    "Explain the development of Christian ministry from traveling prophets and groups of presbyters to the single bishop, and assess the claims made for apostolic succession.",
    "Analyze early Christian worship—baptism, fasting, prayer, and the Eucharist—as the Didache, Ignatius, and Justin describe it.",
    "Trace the early debates over the person of Christ, the relation between the Church and Israel, and the problem of sin after baptism.",
    "Evaluate the evidence for persecution and martyrdom in the second century, from Pliny's letter to Trajan to the Martyrdom of Polycarp.",
    "Read early Christian texts critically, attending to their authorship, date, audience, and the history of their transmission and interpretation.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "The Apostolic Fathers: Greek Texts and English Translations", author: "Michael W. Holmes, ed. and trans.", publisher: "Baker Academic", year: "3rd ed., 2007", note: "The course's main text." },
        { kind: "book", title: "Early Christian Fathers", author: "Cyril C. Richardson, ed.", publisher: "Westminster Press (Library of Christian Classics)", year: "1953", note: "The Apostolic Fathers with Justin Martyr and Irenaeus, in fresh translations." },
        { kind: "edition", title: "The Apostolic Fathers", author: "J. B. Lightfoot and J. R. Harmer, trans.", publisher: "Christian Classics Ethereal Library", url: "https://ccel.org/ccel/lightfoot/fathers/fathers", note: "Lightfoot's translations, free to read." },
        { kind: "book", title: "The Ecclesiastical History", author: "Eusebius of Caesarea, trans. G. A. Williamson, rev. Andrew Louth", publisher: "Penguin Classics", year: "1989", note: "Books 3–5 preserve Papias, Irenaeus's memories of Polycarp, and the Easter controversy." },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "The Apostolic Fathers: An Introduction", author: "Wilhelm Pratscher, ed.", publisher: "Baylor University Press", year: "2010" },
        { kind: "book", title: "The Early Church", author: "Henry Chadwick", publisher: "Penguin", year: "rev. ed., 1993", note: "The classic short history of the first centuries." },
        { kind: "book", title: "The Rise of Christianity", author: "W. H. C. Frend", publisher: "Fortress Press", year: "1984" },
        { kind: "book", title: "Early Christian Doctrines", author: "J. N. D. Kelly", publisher: "HarperOne", year: "rev. ed., 1978" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Orthodoxy and Heresy in Earliest Christianity", author: "Walter Bauer", publisher: "Fortress Press", year: "1971 (German original 1934)" },
        { kind: "book", title: "From Paul to Valentinus: Christians at Rome in the First Two Centuries", author: "Peter Lampe", publisher: "Fortress Press", year: "2003" },
        { kind: "book", title: "Ignatius of Antioch: A Martyr Bishop and the Origin of Episcopacy", author: "Allen Brent", publisher: "T&T Clark", year: "2007" },
        { kind: "book", title: "Ancient Christian Martyrdom", author: "Candida R. Moss", publisher: "Yale University Press", year: "2012" },
        { kind: "book", title: "Border Lines: The Partition of Judaeo-Christianity", author: "Daniel Boyarin", publisher: "University of Pennsylvania Press", year: "2004" },
        { kind: "book", title: "The Cult of the Saints: Its Rise and Function in Latin Christianity", author: "Peter Brown", publisher: "University of Chicago Press", year: "1981" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "Early Christian Writings", publisher: "Peter Kirby", url: "https://www.earlychristianwritings.com/", note: "Texts and translations of all the Apostolic Fathers, with introductions." },
        { kind: "website", title: "The Church Fathers (General Audiences, 2007–2008)", author: "Pope Benedict XVI", publisher: "The Holy See", url: "https://www.vatican.va/content/benedict-xvi/en/audiences/2007.index.html", note: "Short talks on Clement, Ignatius, and the Fathers who followed them." },
        { kind: "website", title: "Codex Sinaiticus", publisher: "The British Library and partners", url: "https://www.codexsinaiticus.org/en/", note: "The fourth-century Bible manuscript that includes Barnabas and the Shepherd." },
      ],
    },
  ],
};
