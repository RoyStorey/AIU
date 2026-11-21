import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const hil101: CourseContent = {
  overview: `Every living language is changing, and every language now spoken is the descendant of languages spoken long ago. This course studies how and why languages change, and how historical linguists use those changes to discover the relationships among languages and reconstruct their lost ancestors.

We begin with a thousand years of English, from the Old English Lord's Prayer to the present, asking whether change is decay, how we know what older languages sounded like, and what Sir William Jones saw in Sanskrit. We then study sound change: the Neogrammarian claim that sound laws have no exceptions, the common kinds of change, i-umlaut, Grimm's and Verner's Laws, the birth of tones, Labov's study of change in progress, and the complications of lexical diffusion. We turn to grammar and meaning: analogy and reanalysis, folk etymology, grammaticalization and Jespersen's cycle, the changing pronouns and sentence structure of English, the ways words rise, fall, broaden, and narrow, and the King James Bible as a museum of semantic change. We study borrowing and contact: the layers of Latin, Norse, and French in English, the Inkhorn Controversy, the travels of the word *tea*, linguistic areas, pidgins, creoles, and mixed languages. Finally, we study the comparative method itself: cognates and correspondences, reconstruction tested against Latin, Saussure's laryngeals and their confirmation in Hittite, Bloomfield's Algonquian test, family trees and waves, the language families of the world, and the controversies over dating and long-range comparison.

The course follows Lyle Campbell's *Historical Linguistics* and R. L. Trask's *Historical Linguistics*, with Albert Baugh and Thomas Cable's *History of the English Language* for English, alongside the classic studies. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Describe the main periods of the history of English and explain the kinds of evidence historical linguists use to study older stages of languages.",
    "Explain the regularity of sound change and analyze the common types of sound change, including Grimm's Law, Verner's Law, and i-umlaut, as well as the evidence of change in progress.",
    "Analyze changes in grammar and meaning, including analogy, reanalysis, grammaticalization, Jespersen's cycle, and the types and mechanisms of semantic change.",
    "Explain how languages borrow words and structures, and trace the layers of borrowing in English, the formation of linguistic areas, and the origins of pidgins, creoles, and mixed languages.",
    "Apply the comparative method and internal reconstruction to simple data sets, and explain how subgroups and family trees are established.",
    "Evaluate methods for dating and grouping language families, including glottochronology, computational phylogenetics, and long-range comparison.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "Historical Linguistics: An Introduction", author: "Lyle Campbell", publisher: "MIT Press; Edinburgh University Press", year: "1998; 4th ed., 2020" },
        { kind: "book", title: "Trask's Historical Linguistics", author: "R. L. Trask, rev. Robert McColl Millar", publisher: "Routledge", year: "1996; 3rd ed., 2015" },
        { kind: "book", title: "A History of the English Language", author: "Albert C. Baugh and Thomas Cable", publisher: "Routledge", year: "1935; 6th ed., 2013" },
      ],
    },
    {
      heading: "Classic Studies",
      items: [
        { kind: "book", title: "Language", author: "Leonard Bloomfield", publisher: "Henry Holt", year: "1933" },
        { kind: "book", title: "Negation in English and Other Languages", author: "Otto Jespersen", publisher: "A. F. Høst & Søn", year: "1917" },
        { kind: "book", title: "Principles of Linguistic Change, vol. 1: Internal Factors", author: "William Labov", publisher: "Blackwell", year: "1994" },
        { kind: "book", title: "Language Contact, Creolization, and Genetic Linguistics", author: "Sarah Grey Thomason and Terrence Kaufman", publisher: "University of California Press", year: "1988" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Grammaticalization", author: "Paul J. Hopper and Elizabeth Closs Traugott", publisher: "Cambridge University Press", year: "2nd ed., 2003" },
        { kind: "book", title: "Language Change: Progress or Decay?", author: "Jean Aitchison", publisher: "Cambridge University Press", year: "4th ed., 2013" },
        { kind: "book", title: "The Unfolding of Language", author: "Guy Deutscher", publisher: "Metropolitan Books", year: "2005" },
        { kind: "book", title: "The Stories of English", author: "David Crystal", publisher: "Overlook Press", year: "2004" },
        { kind: "website", title: "Glottolog", author: "ed. Harald Hammarström and others", publisher: "Max Planck Institute for Evolutionary Anthropology", url: "https://glottolog.org/" },
      ],
    },
  ],
};
