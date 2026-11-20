import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const bib110: CourseContent = {
  overview: `The New Testament is a small library of twenty-seven Greek writings, composed by followers of Jesus of Nazareth in the hundred years after his death. This course reads it in its first-century world, as history, as literature, and as Scripture.

We begin with the world in which it was written: the manuscripts through which its text has come down to us, Judea under Herod and the Roman governors, the archaeology of Galilee, the varieties of Judaism in the time of Jesus, the Greek-speaking cities of the Roman empire, and the Jewish Scriptures that the first Christians read. We then study the four Gospels, the Synoptic problem, and the quest for the historical Jesus; the Acts of the Apostles and the first churches, from Pentecost to the council of Jerusalem; Paul's life, journeys, and letters, and the debate over his teaching on the law; and, in the last lesson, Hebrews, the general letters, the Book of Revelation, Christians under Roman persecution, and the formation of the canon.

Bible quotations are from the King James Version, which is in the public domain. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the contents, genres, and dates of the New Testament writings, and the history of their text from the papyri to modern editions.",
    "Place Jesus and the first Christians in the Jewish and Greco-Roman world of the first century.",
    "Explain the Synoptic problem and the main methods and results of the quest for the historical Jesus.",
    "Compare the portraits of Jesus in the four Gospels, and assess Acts as a source for the first churches.",
    "Interpret Paul's major letters, and explain the debate between the traditional and \"new\" perspectives on Paul and the law.",
    "Interpret Hebrews, the general letters, and Revelation in their settings, and explain how the New Testament canon took shape.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "The New Oxford Annotated Bible with Apocrypha (NRSV)", author: "ed. Michael D. Coogan et al.", publisher: "Oxford University Press", year: "5th ed., 2018" },
        { kind: "book", title: "Gospel Parallels: A Comparison of the Synoptic Gospels", author: "ed. Burton H. Throckmorton Jr.", publisher: "Thomas Nelson", year: "5th ed., 1992" },
        { kind: "book", title: "The Apostolic Fathers", author: "trans. J. B. Lightfoot and J. R. Harmer", publisher: "Macmillan", year: "1891" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "New Testament History and Literature", author: "Dale B. Martin", publisher: "Yale University Press", year: "2012" },
        { kind: "book", title: "The Writings of the New Testament: An Interpretation", author: "Luke Timothy Johnson", publisher: "Fortress Press", year: "3rd ed., 2010" },
        { kind: "book", title: "An Introduction to the New Testament", author: "Raymond E. Brown", publisher: "Doubleday", year: "1997" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Historical Figure of Jesus", author: "E. P. Sanders", publisher: "Penguin", year: "1993" },
        { kind: "book", title: "The First Urban Christians: The Social World of the Apostle Paul", author: "Wayne A. Meeks", publisher: "Yale University Press", year: "1983" },
        { kind: "book", title: "Paul and Palestinian Judaism", author: "E. P. Sanders", publisher: "Fortress Press", year: "1977" },
        { kind: "book", title: "The Canon of the New Testament", author: "Bruce M. Metzger", publisher: "Oxford University Press", year: "1987" },
        { kind: "book", title: "The Text of the New Testament", author: "Bruce M. Metzger and Bart D. Ehrman", publisher: "Oxford University Press", year: "4th ed., 2005" },
      ],
    },
  ],
};
