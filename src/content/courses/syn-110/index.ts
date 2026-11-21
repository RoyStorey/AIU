import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const syn110: CourseContent = {
  overview: `What do words mean, how do their meanings combine, and how do speakers communicate more than they say? This course studies meaning in language, from the meanings of single words to the truth of sentences and the inferences of conversation.

We begin with what meaning is: Saussure's sign and Peirce's icons and indexes, Frege's sense and reference, Russell's King of France and Kripke's names, sentences, utterances, and propositions, semantics and pragmatics, compositionality, grammatical meaning, meaning across cultures, meaning in the brain, and ambiguity and vagueness. We study word meaning: polysemy, synonymy, opposites, the basic level, componential analysis, prototypes, color terms, kinship, space, dictionaries, and word vectors. We study sentence meaning and truth: entailment, presupposition, logic and quantifiers, Montague's formal semantics, modality, conditionals, donkey sentences, plurals, and comparatives. We study events, time, and participants: Vendler's classes, aspect, tense, the perfect, Davidson's events, causation, motion, evidentiality, negation, generics, possession, and time as space. Finally, we study meaning in use and in the mind: deixis, speech acts, implicature, relevance, politeness, irony, metaphor, frames, construal, and whether machines can mean.

The course follows John I. Saeed's *Semantics*, alongside the classic works of philosophers and linguists from Frege to Grice and Lakoff. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Explain the central distinctions in the study of meaning, including sense and reference, sentence and utterance, and semantics and pragmatics.",
    "Analyze word meanings using lexical relations, components, prototypes, and semantic fields, and compare how languages divide areas such as color, kinship, and space.",
    "Use truth conditions, entailment, presupposition, and simple logic to represent and compare sentence meanings, including quantifiers, modality, and conditionals.",
    "Describe how languages express events, time, and participants through situation types, aspect, tense, causation, motion, and evidentiality.",
    "Apply theories of speech acts, implicature, relevance, and politeness to analyze meaning in conversation.",
    "Evaluate cognitive approaches to meaning, including metaphor, frames, and construal, and assess claims about meaning in machines.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Text",
      items: [
        { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "1997; 4th ed., 2016" },
      ],
    },
    {
      heading: "Classic Works",
      items: [
        { kind: "book", title: "Translations from the Philosophical Writings of Gottlob Frege", author: "ed. Peter Geach and Max Black", publisher: "Blackwell", year: "1952" },
        { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Clarendon Press", year: "1962" },
        { kind: "book", title: "Studies in the Way of Words", author: "Paul Grice", publisher: "Harvard University Press", year: "1989" },
        { kind: "book", title: "Metaphors We Live By", author: "George Lakoff and Mark Johnson", publisher: "University of Chicago Press", year: "1980" },
        { kind: "book", title: "Basic Color Terms", author: "Brent Berlin and Paul Kay", publisher: "University of California Press", year: "1969" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Meaning and Grammar: An Introduction to Semantics", author: "Gennaro Chierchia and Sally McConnell-Ginet", publisher: "MIT Press", year: "2nd ed., 2000" },
        { kind: "book", title: "Semantics in Generative Grammar", author: "Irene Heim and Angelika Kratzer", publisher: "Blackwell", year: "1998" },
        { kind: "book", title: "Relevance: Communication and Cognition", author: "Dan Sperber and Deirdre Wilson", publisher: "Blackwell", year: "2nd ed., 1995" },
        { kind: "book", title: "Toward a Cognitive Semantics", author: "Leonard Talmy", publisher: "MIT Press", year: "2000" },
      ],
    },
  ],
};
