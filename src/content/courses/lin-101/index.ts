import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const lin101: CourseContent = {
  overview: `Every human community speaks or signs a language, and every child acquires one without being taught, yet few people could explain how their own language works. Linguistics is the scientific study of human language: its sounds, its words, its sentences, its meanings, and its place in society and the mind. This course introduces the essential tools for thinking about any language.

We begin by asking what language is: what speakers know, Saussure's theory of the linguistic sign, Hockett's design features and the communication of animals, sign languages, writing, the brain, the world's seven thousand languages and their dialects, and the debate over the language instinct. We then study the sounds of language: the vocal tract, consonants and vowels, the International Phonetic Alphabet, phonemes and allophones, phonological rules, syllables, stress, and tone. We study words: morphemes, derivation and inflection, word formation, the morphological types of the world's languages, and the mental lexicon. We study sentences: constituents, phrases, trees, recursion, movement, word order across languages, ergativity, creoles, and Universal Grammar and its critics. Finally, we study meaning and use: Frege's sense and reference, word and sentence meaning, metaphor, Grice's implicatures, Austin's speech acts, discourse, and translation.

The course follows Fromkin, Rodman, and Hyams's *An Introduction to Language*, Steven Pinker's *The Language Instinct*, and Saussure's *Course in General Linguistics*. Its examples are drawn from English and from languages around the world. Each lesson takes about two hours and ends with a session of exercises.`,
  objectives: [
    "Explain what linguistics studies, distinguish descriptive from prescriptive approaches, and describe what a speaker knows when he or she knows a language.",
    "Describe speech sounds using articulatory phonetics and the IPA, and explain phonemes, allophones, phonological rules, syllable structure, stress, and tone.",
    "Analyze words into morphemes, distinguish derivation from inflection, describe processes of word formation, and classify languages by morphological type.",
    "Identify constituents and phrase structure, explain structural ambiguity, recursion, and structure dependence, and compare word order and case systems across languages.",
    "Explain the basic concepts of semantics and pragmatics, including sense and reference, lexical relations, compositionality, implicature, speech acts, and presupposition.",
    "Evaluate the debate between nativist and usage-based accounts of language, drawing on evidence from child language, sign languages, creoles, the brain, and linguistic diversity.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "1974; 11th ed., 2018" },
        { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994" },
        { kind: "book", title: "Course in General Linguistics", author: "Ferdinand de Saussure, trans. Wade Baskin", publisher: "Columbia University Press", year: "1916; trans. 1959; 2011 ed." },
      ],
    },
    {
      heading: "Classic Works",
      items: [
        { kind: "book", title: "Language: An Introduction to the Study of Speech", author: "Edward Sapir", publisher: "Harcourt, Brace", year: "1921", note: "In the public domain." },
        { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957" },
        { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Clarendon Press", year: "1962" },
        { kind: "book", title: "Metaphors We Live By", author: "George Lakoff and Mark Johnson", publisher: "University of Chicago Press", year: "1980" },
      ],
    },
    {
      heading: "Reference",
      items: [
        { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage", year: "7th ed., 2015" },
        { kind: "website", title: "World Atlas of Language Structures Online", author: "ed. Matthew S. Dryer and Martin Haspelmath", publisher: "Max Planck Institute for Evolutionary Anthropology", url: "https://wals.info/" },
        { kind: "website", title: "The International Phonetic Alphabet (chart)", author: "International Phonetic Association", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart" },
      ],
    },
  ],
};
