import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const grk101: CourseContent = {
  overview: `Ancient Greek is the language of Homer and Sappho, of the tragedians and Aristophanes, of Herodotus, Thucydides, Plato, and Aristotle, and of the New Testament. This course teaches Attic Greek, the dialect of classical Athens, from the first letter, with pronunciation, accents, and real Greek texts from the start.

We begin with the alphabet, its sounds, the breathings and accents, and the story of how the Greeks took their letters from the Phoenicians and added vowels. We then learn the thematic verb in the present, imperfect, and future, in the active, middle, and passive voices; the definite article and its many uses; all three declensions of nouns, including the most important irregular nouns; adjectives in attributive and predicate position; the verb εἰμί; and the personal, reflexive, demonstrative, relative, and interrogative pronouns. Along the way we read, with notes, the Delphic maxims, the Thermopylae epitaph, Hippocrates, Heraclitus, Protagoras, Pindar, Socrates's defense, Herodotus on Solon and Croesus, the opening of Xenophon's Anabasis and of Plato's Republic, and the Gospel of John and the Lord's Prayer.

Each lesson takes about two hours, with grammar taught in the order you need it to read, drills, and a closing session working directly with Greek texts.`,
  objectives: [
    "Read and write the Greek alphabet, with breathings and accents, in the restored pronunciation of classical Attic.",
    "Apply the rules of Greek accent, distinguishing recessive and persistent accent and the behavior of enclitics.",
    "Conjugate thematic verbs in the present, imperfect, and future, in the active, middle, and passive, and the verb εἰμί.",
    "Decline nouns of the three declensions, adjectives of the first and second, and the article, and use attributive and predicate position.",
    "Use and recognize the personal, reflexive, intensive, demonstrative, relative, interrogative, and indefinite pronouns.",
    "Translate short passages of Attic and Koine prose with notes, including Xenophon, Herodotus, Plato, and the New Testament.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Textbooks",
      items: [
        { kind: "book", title: "Introduction to Attic Greek", author: "Donald J. Mastronarde", publisher: "University of California Press", year: "2nd ed., 2013" },
        { kind: "book", title: "Athenaze: An Introduction to Ancient Greek, Book I", author: "Maurice Balme and Gilbert Lawall", publisher: "Oxford University Press", year: "3rd ed., 2014" },
        { kind: "book", title: "Greek: An Intensive Course", author: "Hardy Hansen and Gerald M. Quinn", publisher: "Fordham University Press", year: "2nd rev. ed., 1992" },
      ],
    },
    {
      heading: "Grammars and dictionaries",
      items: [
        { kind: "book", title: "Greek Grammar", author: "Herbert Weir Smyth, rev. Gordon M. Messing", publisher: "Harvard University Press", year: "1956" },
        { kind: "book", title: "An Intermediate Greek-English Lexicon", author: "H. G. Liddell and R. Scott", publisher: "Public domain (1889); Oxford University Press reprints" },
        { kind: "book", title: "Vox Graeca: The Pronunciation of Classical Greek", author: "W. Sidney Allen", publisher: "Cambridge University Press", year: "3rd ed., 1987" },
      ],
    },
    {
      heading: "The language and its history",
      items: [
        { kind: "book", title: "Greek: A History of the Language and Its Speakers", author: "Geoffrey Horrocks", publisher: "Wiley-Blackwell", year: "2nd ed., 2010" },
        { kind: "book", title: "The Decipherment of Linear B", author: "John Chadwick", publisher: "Cambridge University Press", year: "2nd ed., 1967" },
        { kind: "book", title: "The Ingenious Language: Nine Epic Reasons to Love Greek", author: "Andrea Marcolongo", publisher: "Europa Editions", year: "2019" },
      ],
    },
  ],
};
