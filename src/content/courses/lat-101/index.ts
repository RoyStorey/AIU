import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const lat101: CourseContent = {
  overview: `For more than two thousand years, Latin was the language of law, learning, worship, and science in the West, and it remains the key to the Roman authors and to half the vocabulary of English. This course teaches you to read it from the first letter, in Classical pronunciation, with real Latin from the start.

We begin with the sounds of Latin, its syllables and accent, and the idea that endings, not word order, carry the grammar. We then learn the six cases and all five declensions of nouns; adjectives and their agreement and comparison; the personal, demonstrative, relative, and interrogative pronouns; the numbers; and all six tenses of the active indicative in the four conjugations, with the verbs sum and possum. Along the way we read sentences and short passages from Terence, Caesar, Cicero, Virgil, Horace, Martial, the Vulgate, and Roman tombstones, and the course ends with Catullus's poem of the thousand kisses, read whole in the original.

Each lesson takes about two hours, with grammar taught in the order you need it to read, drills, and a closing session working directly with Latin texts.`,
  objectives: [
    "Pronounce Classical Latin accurately, and place the accent by the rule of the penult.",
    "Decline nouns of all five declensions and adjectives of the first, second, and third, and explain the uses of the six cases.",
    "Conjugate verbs of all four conjugations in the six tenses of the active indicative, with sum and possum.",
    "Use and recognize the personal, reflexive, demonstrative, relative, and interrogative pronouns.",
    "Translate simple Latin sentences and short adapted and original passages, finding the verb, subject, and object by their endings.",
    "Read Catullus 5 in the original and explain its grammar and structure.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Textbooks",
      items: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, rev. Richard A. LaFleur", publisher: "Harper Collins", year: "7th ed., 2011" },
        { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing / Hackett", year: "2003" },
        { kind: "book", title: "38 Latin Stories", author: "Anne H. Groton and James M. May", publisher: "Bolchazy-Carducci", year: "5th ed., 1995" },
      ],
    },
    {
      heading: "Grammars and dictionaries",
      items: [
        { kind: "book", title: "Allen and Greenough's New Latin Grammar", author: "J. H. Allen and J. B. Greenough", publisher: "Public domain (1903); many reprints" },
        { kind: "book", title: "Gildersleeve's Latin Grammar", author: "B. L. Gildersleeve and Gonzalez Lodge", publisher: "Public domain (1895); many reprints" },
        { kind: "book", title: "Oxford Latin Desk Dictionary", author: "James Morwood", publisher: "Oxford University Press", year: "2005" },
        { kind: "book", title: "Vox Latina: A Guide to the Pronunciation of Classical Latin", author: "W. Sidney Allen", publisher: "Cambridge University Press", year: "2nd ed., 1978" },
      ],
    },
    {
      heading: "Reading on",
      items: [
        { kind: "book", title: "Catullus: The Poems", author: "Catullus, ed. Kenneth Quinn", publisher: "Bristol Classical Press", year: "2nd ed., 1973" },
        { kind: "book", title: "Latin: Story of a World Language", author: "Jürgen Leonhardt", publisher: "Belknap Press of Harvard University Press", year: "2013" },
        { kind: "book", title: "Ad Infinitum: A Biography of Latin", author: "Nicholas Ostler", publisher: "Walker & Company", year: "2007" },
      ],
    },
  ],
};
