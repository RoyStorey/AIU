import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const syn101: CourseContent = {
  overview: `Every speaker of a language knows an intricate system of rules for combining words into sentences, though almost no one could state them. This course studies that system: how words group into phrases, how phrases are built and arranged, how phrases can appear away from where they are understood, and how languages differ and agree.

We begin with what syntax studies: rules nobody taught us, descriptive and prescriptive grammar, grammaticality judgments and garden paths, competence and performance, the history of grammar from Pāṇini to Chomsky's *Syntactic Structures*, parts of speech, ambiguity, clauses, grammatical relations, and ergativity. We then study constituency and phrase structure: tests for constituents, heads, phrase structure rules, tree diagrams, c-command, recursion, auxiliaries, embedded clauses, subcategorization, dependency grammar, and word order across languages. We study X-bar theory and the structure of clauses: complements and adjuncts, the head parameter, determiner, tense, and complementizer phrases, verb movement in French and German, Japanese and Warlpiri, small clauses, and children's speech. We study movement: questions, wh-in-situ, islands, the that-trace effect, passives, raising and control, unaccusatives, relative clauses, focus, and ellipsis. Finally, we study binding, negation, thematic roles, argument structure, and Case; Principles and Parameters and Minimalism; alternative frameworks; universals and diversity; and syntax in computers.

The course follows Andrew Carnie's *Syntax: A Generative Introduction* and Noam Chomsky's *Syntactic Structures*, alongside the classic studies and their critics. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Explain the goals and methods of syntactic research, including grammaticality judgments, the competence–performance distinction, and the difference between descriptive and prescriptive grammar.",
    "Apply constituency tests and phrase structure rules to determine and draw the structure of English sentences, including ambiguous ones.",
    "Use X-bar theory and functional categories (DP, TP, CP) to analyze phrases and clauses, and explain word-order variation through the head parameter and verb movement.",
    "Analyze displacement in questions, passives, raising, and relative clauses, and explain the constraints on movement such as islands.",
    "Apply the binding principles, thematic roles, and Case theory to explain the distribution and interpretation of noun phrases.",
    "Compare generative and alternative frameworks, and evaluate debates over universals, parameters, and the learnability of syntax.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "2002; 4th ed., 2021" },
        { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957" },
      ],
    },
    {
      heading: "Classic Studies",
      items: [
        { kind: "book", title: "Aspects of the Theory of Syntax", author: "Noam Chomsky", publisher: "MIT Press", year: "1965" },
        { kind: "book", title: "Lectures on Government and Binding", author: "Noam Chomsky", publisher: "Foris", year: "1981" },
        { kind: "book", title: "Constraints on Variables in Syntax", author: "John Robert Ross", publisher: "PhD dissertation, MIT", year: "1967" },
        { kind: "book", title: "Universals of Language", author: "ed. Joseph H. Greenberg", publisher: "MIT Press", year: "1963" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "The Atoms of Language", author: "Mark C. Baker", publisher: "Basic Books", year: "2001" },
        { kind: "book", title: "Constructions: A Construction Grammar Approach to Argument Structure", author: "Adele E. Goldberg", publisher: "University of Chicago Press", year: "1995" },
        { kind: "book", title: "English Verb Classes and Alternations", author: "Beth Levin", publisher: "University of Chicago Press", year: "1993" },
        { kind: "website", title: "Universal Dependencies", author: "Universal Dependencies contributors", publisher: "universaldependencies.org", url: "https://universaldependencies.org/" },
      ],
    },
  ],
};
