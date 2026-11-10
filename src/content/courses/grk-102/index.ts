import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const grk102: CourseContent = {
  overview: `This course completes the grammar of Attic Greek and carries you from sentences into Homer, Thucydides, Xenophon, Plato, and the New Testament. It assumes GRK 101: the alphabet and accents, the three declensions, the article and pronouns, and the thematic verb in the present, imperfect, and future.

We begin with the aorist and the idea of aspect, the heart of the Greek verb, reading Xenophon, Plutarch's version of Caesar's three words, and Mark's account of the baptism. We then learn the contract verbs and the aorist and future passive, with the Beatitudes and the opening of the Apology; the participles and the genitive absolute, with the first sentence of Thucydides and the cry of the Ten Thousand at the sea; and the perfect, the μι-verbs, and comparison, with the first lines of the Iliad and the perfects of Archimedes, John, and Paul. The last lesson covers the subjunctive and optative, conditions, and indirect discourse, and reads the oracle to Chaerephon, the end of the Apology, and the death of Socrates.

Each lesson takes about two hours, with grammar, drills, and a closing session working directly with Greek texts.`,
  objectives: [
    "Explain the aspects of the Greek verb and use the aorist, imperfect, and perfect accordingly.",
    "Form and recognize the first and second aorist, the contract verbs, and the aorist and future passive.",
    "Form the participles in every tense and voice and translate attributive, circumstantial, and supplementary participles and the genitive absolute.",
    "Conjugate the perfect and pluperfect and the μι-verbs δίδωμι, τίθημι, and ἵστημι, and compare adjectives.",
    "Form the subjunctive and optative and identify their uses, the six kinds of conditional sentence, and the constructions of indirect discourse.",
    "Read short unadapted passages of Homer, Thucydides, Xenophon, Plato, and the New Testament with notes.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Textbooks",
      items: [
        { kind: "book", title: "Introduction to Attic Greek", author: "Donald J. Mastronarde", publisher: "University of California Press", year: "2nd ed., 2013" },
        { kind: "book", title: "Athenaze: An Introduction to Ancient Greek, Book II", author: "Maurice Balme and Gilbert Lawall", publisher: "Oxford University Press", year: "3rd ed., 2016" },
        { kind: "book", title: "Reading Greek: Grammar and Exercises", author: "Joint Association of Classical Teachers", publisher: "Cambridge University Press", year: "2nd ed., 2007" },
      ],
    },
    {
      heading: "Grammars and dictionaries",
      items: [
        { kind: "book", title: "Greek Grammar", author: "Herbert Weir Smyth, rev. Gordon M. Messing", publisher: "Harvard University Press", year: "1956" },
        { kind: "book", title: "An Intermediate Greek-English Lexicon", author: "H. G. Liddell and R. Scott", publisher: "Public domain (1889); Oxford University Press reprints" },
        { kind: "book", title: "The Greek Particles", author: "J. D. Denniston", publisher: "Oxford University Press", year: "2nd ed., 1954" },
      ],
    },
    {
      heading: "Texts to read next",
      items: [
        { kind: "book", title: "Plato: Apology", author: "Plato, ed. James J. Helm", publisher: "Bolchazy-Carducci", year: "rev. ed., 1999" },
        { kind: "book", title: "Homer: Iliad, Book I", author: "Homer, ed. Simon Pulleyn", publisher: "Oxford University Press", year: "2000" },
        { kind: "book", title: "Novum Testamentum Graece", author: "ed. Nestle and Aland", publisher: "Deutsche Bibelgesellschaft", year: "28th ed., 2012" },
      ],
    },
  ],
};
