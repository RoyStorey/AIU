import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const chh101: CourseContent = {
  overview: `In three centuries, a movement that began among a few hundred Jews in Jerusalem spread across the Roman world and beyond, survived persecution, defined its faith against rival teachers, built a remarkable community life, and found itself, under Constantine, the favored religion of the empire. This course tells that story as historians tell it, from Pentecost to the Council of Nicaea in 325.

We begin with Eusebius, the first historian of the church, and follow the faith from Jerusalem and Antioch along the roads and sea lanes of the empire, across its frontiers to Edessa, Armenia, and Aksum, asking why it grew. We study persecution and martyrdom from Nero to Valerian, through the court records and the accounts of Polycarp, Blandina, Perpetua, and Cyprian; the challenges of the Gnostics, Marcion, and the New Prophecy, and the church's response in the rule of faith, the canon, and the bishops; Christian worship, charity, family life, and the place of women; and finally the Great Persecution, the conversion of Constantine, the Donatist schism, the Council of Nicaea, and the first monks.

The course reads the sources—Eusebius, Justin, Tertullian, the acts of the martyrs, Lactantius—in public-domain translations wherever possible, alongside the work of modern historians. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the spread of Christianity from Jerusalem across the Roman world and beyond to 325, and evaluate explanations for its growth.",
    "Explain why Rome persecuted Christians, trace the main phases of persecution, and interpret the accounts of the martyrs as historical sources.",
    "Analyze the challenges posed by the Gnostics, Marcion, and the New Prophecy, and the development of the rule of faith, the canon, and the episcopate.",
    "Describe early Christian worship, initiation, charity, and family life, and the roles of women in the early church.",
    "Explain the Great Persecution, the conversion of Constantine, the settlement of 313, the Donatist schism, and the Council of Nicaea.",
    "Assess the consequences of Constantine's conversion for the church, weighing the judgments of Eusebius, Gibbon, Yoder, and modern historians.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "The History of the Church from Christ to Constantine", author: "Eusebius, trans. G. A. Williamson, rev. Andrew Louth", publisher: "Penguin Classics", year: "1989" },
        { kind: "book", title: "The Acts of the Christian Martyrs", author: "ed. and trans. Herbert Musurillo", publisher: "Oxford University Press", year: "1972" },
        { kind: "book", title: "A New Eusebius: Documents Illustrating the History of the Church to AD 337", author: "ed. J. Stevenson, rev. W. H. C. Frend", publisher: "SPCK", year: "rev. ed., 1987" },
      ],
    },
    {
      heading: "Histories",
      items: [
        { kind: "book", title: "The Early Church", author: "Henry Chadwick", publisher: "Penguin", year: "rev. ed., 1993" },
        { kind: "book", title: "The Story of Christianity, vol. 1", author: "Justo L. González", publisher: "HarperOne", year: "rev. ed., 2010" },
        { kind: "book", title: "The Rise of Christianity", author: "W. H. C. Frend", publisher: "Fortress Press", year: "1984" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Rise of Christianity: A Sociologist Reconsiders History", author: "Rodney Stark", publisher: "Princeton University Press", year: "1996" },
        { kind: "book", title: "The Body and Society", author: "Peter Brown", publisher: "Columbia University Press", year: "1988" },
        { kind: "book", title: "Constantine and Eusebius", author: "Timothy D. Barnes", publisher: "Harvard University Press", year: "1981" },
        { kind: "book", title: "The Christians as the Romans Saw Them", author: "Robert Louis Wilken", publisher: "Yale University Press", year: "2nd ed., 2003" },
      ],
    },
  ],
};
