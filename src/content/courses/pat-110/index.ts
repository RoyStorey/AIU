import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const pat110: CourseContent = {
  overview: `Augustine's Confessions, written by a newly made bishop of Hippo around AD 397, is a long prayer addressed to God, in which a restless heart tells the story of its search for rest. It has been read for sixteen centuries as a book of devotion, a work of theology and philosophy, a portrait of the late Roman world, and the first great spiritual autobiography.

This course reads the whole book, in order, across five lessons. We begin with Roman Africa, Augustine's family and life, the reasons a bishop might write such a book, its shape, its language, and Book 1. We follow him through the theft of the pears, student life in Carthage, Cicero's Hortensius, and nine years among the Manichees; to Rome and Milan, the preaching of Ambrose, and the books of the Platonists; to the garden in Milan, his baptism, and the vision at Ostia with his mother before her death. The last lesson reads the books on memory, time, and creation that many readers skip, asks what holds the book together, and follows its readers from Petrarch and Teresa of Ávila to Rousseau, Wittgenstein, and Arendt.

Quotations from the Confessions are the course's own renderings from Augustine's Latin, cited by book, chapter, and paragraph; students should read the whole book alongside the course in Henry Chadwick's translation. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Place Augustine and the Confessions in the world of Roman North Africa and the late Roman empire.",
    "Explain the meanings of confessio and how the form of the book, a prayer overheard by readers, shapes its account of a life.",
    "Trace Augustine's intellectual journey through Cicero, the Manichees, skepticism, and the Platonists, and explain his account of evil as privation.",
    "Analyze Augustine's account of the divided will, habit, and grace, and evaluate the debates over the historicity of the conversion in the garden.",
    "Interpret the meditations on memory and time in Books 10 and 11, and Augustine's principles for interpreting Scripture in Books 12 and 13.",
    "Assess the unity of the Confessions and its influence on later writers, theologians, and philosophers.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Translations and Editions",
      items: [
        { kind: "book", title: "Confessions", author: "Augustine, trans. Henry Chadwick", publisher: "Oxford University Press (Oxford World's Classics)", year: "1991", note: "The course's main text." },
        { kind: "book", title: "The Confessions", author: "Augustine, trans. Maria Boulding", publisher: "New City Press", year: "1997", note: "A translation that preserves the book's prayerful voice and scriptural echoes." },
        { kind: "book", title: "Confessions", author: "Augustine, trans. Sarah Ruden", publisher: "Modern Library", year: "2017" },
        { kind: "edition", title: "Augustine: Confessions (Latin text and commentary)", author: "James J. O'Donnell", publisher: "Oxford University Press, 1992; online edition", url: "https://www.stoa.org/hippo/" },
      ],
    },
    {
      heading: "Biographies",
      items: [
        { kind: "book", title: "Augustine of Hippo: A Biography", author: "Peter Brown", publisher: "University of California Press", year: "new ed., 2000" },
        { kind: "book", title: "Augustine: A New Biography", author: "James J. O'Donnell", publisher: "Ecco", year: "2005" },
        { kind: "book", title: "Augustine: Conversions to Confessions", author: "Robin Lane Fox", publisher: "Basic Books", year: "2015" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "Augustine's Confessions: A Biography", author: "Garry Wills", publisher: "Princeton University Press", year: "2011" },
        { kind: "book", title: "Augustine: A Very Short Introduction", author: "Henry Chadwick", publisher: "Oxford University Press", year: "1986; reissued 2001" },
        { kind: "book", title: "Time and Narrative, vol. 1", author: "Paul Ricœur", publisher: "University of Chicago Press", year: "1984" },
        { kind: "book", title: "Love and Saint Augustine", author: "Hannah Arendt, ed. Joanna Vecchiarelli Scott and Judith Chelius Stark", publisher: "University of Chicago Press", year: "1996" },
      ],
    },
  ],
};
