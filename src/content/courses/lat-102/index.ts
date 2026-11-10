import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const lat102: CourseContent = {
  overview: `This course completes the grammar of Classical Latin and carries you from sentences into real Roman authors. It assumes LAT 101: the five declensions, the pronouns, and the active indicative in all six tenses.

We begin with the passive voice, deponent verbs, and the impersonal passive, reading Caesar, the opening of Genesis and John, and the first lines of Ovid's Metamorphoses. We then learn the three participles, the ablative absolute, and the irregular verbs eō, ferō, volō, and fīō, with the opening of the Aeneid and Horace's monument more lasting than bronze. A lesson on infinitives and indirect statement reads Caesar on Orgetorix, Catullus on a lover's promises, and Cicero's first speech against Catiline. A lesson on the subjunctive, in all its forms and uses, reads Horace's carpe diem ode and the Lord's Prayer. And the last lesson covers conditions, the gerund and gerundive, and the supine, reading Seneca on time and Aeneas's speech to his shipwrecked men, and ends with a plan for reading Latin authors on your own.

Each lesson takes about two hours, with grammar, drills, and a closing session working directly with Latin texts.`,
  objectives: [
    "Form and translate the passive voice in all six tenses, and recognize deponent and semi-deponent verbs.",
    "Form the participles and translate them, and the ablative absolute, into natural English.",
    "Conjugate the irregular verbs eō, ferō, volō, nōlō, mālō, and fīō.",
    "Form the six infinitives and translate indirect statement with attention to relative time and the reflexive.",
    "Form the four tenses of the subjunctive and identify its main independent and dependent uses, following the sequence of tenses.",
    "Translate conditional sentences, gerunds, gerundives, and the passive periphrastic, and read short unadapted passages of Caesar, Cicero, Catullus, Virgil, Horace, Ovid, and Seneca with notes.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Textbooks and readers",
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
        { kind: "book", title: "A Latin Dictionary", author: "Charlton T. Lewis and Charles Short", publisher: "Public domain (1879); many free digital editions" },
        { kind: "book", title: "Oxford Latin Desk Dictionary", author: "James Morwood", publisher: "Oxford University Press", year: "2005" },
      ],
    },
    {
      heading: "Authors in translation",
      items: [
        { kind: "book", title: "The Aeneid", author: "Virgil, trans. Robert Fitzgerald", publisher: "Vintage Classics", year: "1983" },
        { kind: "book", title: "The Odes of Horace", author: "Horace, trans. David Ferry", publisher: "Farrar, Straus and Giroux", year: "1997" },
        { kind: "book", title: "Letters from a Stoic", author: "Seneca, trans. Robin Campbell", publisher: "Penguin Classics", year: "1969" },
        { kind: "book", title: "Political Speeches", author: "Cicero, trans. D. H. Berry", publisher: "Oxford World's Classics", year: "2006" },
      ],
    },
  ],
};
