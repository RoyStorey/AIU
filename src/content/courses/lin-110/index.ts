import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const lin110: CourseContent = {
  overview: `How do children acquire language so quickly, without being taught? How does the brain represent and process it? And how does language relate to thought? This course studies language as a window on the human mind.

We begin with the stages of acquisition, from what infants hear before birth through babbling, first words, two-word speech, and the grammatical morphemes of Roger Brown's famous study, to the speech adults address to children, the question of whether parents correct grammar, and children who create language where none existed, along with bilingual development and language after five. We then weigh the great debate over how acquisition is possible: Skinner and Chomsky, Universal Grammar and the poverty of the stimulus, Jackendoff's mental grammar, Tomasello's usage-based theory, statistical and connectionist learning, the critical period, second languages, and developmental language disorders. With Paul Bloom as our guide, we study how children learn the meanings of words, using their understanding of other minds, concepts, and syntax. We turn to the brain: Broca and Wernicke, the aphasias, the split brain, imaging, the language network, signing and bilingual brains, and reading. Finally, we consider language and thought: mentalese and inner speech, linguistic relativity, the understanding of other minds, the evolution of language, animal communication, and machines that talk.

The course follows Steven Pinker's *The Language Instinct*, Ray Jackendoff's *Patterns in the Mind*, and Paul Bloom's *How Children Learn the Meanings of Words*, alongside the classic studies and their critics. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Describe the stages of first language acquisition from before birth to the school years, and the methods researchers use to study them.",
    "Evaluate nativist and usage-based theories of acquisition, including the poverty-of-the-stimulus argument, the critical period, and evidence from second language learning and language disorders.",
    "Explain how children learn the meanings of words, assessing Paul Bloom's account and the roles of theory of mind, concepts, syntax, and statistical learning.",
    "Describe the organization of language in the brain, from Broca and Wernicke to modern imaging, including aphasia, lateralization, sign language, and reading.",
    "Assess the relation between language and thought, including mentalese, inner speech, linguistic relativity, and the role of language in understanding other minds.",
    "Analyze theories of the evolution of language and the debate over what is unique to human language, in comparison with animal communication and machine language models.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994" },
        { kind: "book", title: "Patterns in the Mind: Language and Human Nature", author: "Ray Jackendoff", publisher: "Basic Books", year: "1994" },
        { kind: "book", title: "How Children Learn the Meanings of Words", author: "Paul Bloom", publisher: "MIT Press", year: "2000" },
      ],
    },
    {
      heading: "Classic Studies",
      items: [
        { kind: "book", title: "A First Language: The Early Stages", author: "Roger Brown", publisher: "Harvard University Press", year: "1973" },
        { kind: "book", title: "Biological Foundations of Language", author: "Eric H. Lenneberg", publisher: "Wiley", year: "1967" },
        { kind: "book", title: "Language and Experience: Evidence from the Blind Child", author: "Barbara Landau and Lila R. Gleitman", publisher: "Harvard University Press", year: "1985" },
        { kind: "book", title: "Thought and Language", author: "Lev Vygotsky, trans. Eugenia Hanfmann and Gertrude Vakar", publisher: "MIT Press", year: "1962" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Constructing a Language: A Usage-Based Theory of Language Acquisition", author: "Michael Tomasello", publisher: "Harvard University Press", year: "2003" },
        { kind: "book", title: "Reading in the Brain: The New Science of How We Read", author: "Stanislas Dehaene", publisher: "Viking", year: "2009" },
        { kind: "book", title: "Through the Language Glass", author: "Guy Deutscher", publisher: "Metropolitan Books", year: "2010" },
        { kind: "website", title: "CHILDES (Child Language Data Exchange System)", author: "Brian MacWhinney", publisher: "TalkBank", url: "https://childes.talkbank.org/" },
      ],
    },
  ],
};
