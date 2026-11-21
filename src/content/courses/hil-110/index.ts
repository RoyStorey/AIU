import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const hil110: CourseContent = {
  overview: `Nearly half the people on earth speak a language descended from Proto-Indo-European, a language spoken more than five thousand years ago by people who left no writing. This course studies the family on which the methods of historical linguistics were first developed: how it was discovered, what can be reconstructed of its ancestor, what that ancestor's words reveal about its speakers, and where and when they lived.

We begin with the discovery of the family, from Sassetti and Jones to Bopp, Rask, Grimm, and Schleicher's fable, and survey its ten branches, including the surprises of Hittite and Tocharian, the centum–satem division, and an interactive map of where each branch was first written down; we also confront the misuse of the "Aryan" idea. We reconstruct the sounds and roots of Proto-Indo-European: the three series of stops and the glottalic theory, syllabic resonants, the laryngeals, the Law of Palatals, ablaut, the accent, and the history of one word, *wheel*. We study its grammar, from the eight cases and the dual to the verb's aspects and moods, and trace what English still keeps. We ask what the vocabulary reveals about kinship, hospitality, herding, the horse and wagon, the Sky Father and the Dawn, the dragon-slaying formula, Dumézil's three functions, and the poets' "imperishable fame." Finally, we follow the homeland debate from the nineteenth century through Gimbutas, Renfrew, and Anthony to the ancient DNA revolution, insisting throughout that a language is not a race.

The course follows Benjamin W. Fortson IV's *Indo-European Language and Culture*, J. P. Mallory's *In Search of the Indo-Europeans*, and David W. Anthony's *The Horse, the Wheel, and Language*, alongside the classic studies and their critics. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Trace the discovery of the Indo-European family and describe its branches, their earliest records, and the main proposals for grouping them.",
    "Explain the reconstruction of the Proto-Indo-European sound system, including the stops, laryngeals, ablaut, and accent, and apply Grimm's Law and the Law of Palatals to cognate sets.",
    "Describe the main features of Proto-Indo-European grammar and identify their survivals in English and other daughter languages.",
    "Assess what linguistic paleontology reveals about Proto-Indo-European society, economy, religion, and poetry, and the limits of the method.",
    "Evaluate the main hypotheses about the Indo-European homeland in light of linguistic, archaeological, and genetic evidence.",
    "Explain why a language family must not be identified with a race or people, drawing on the history of the \"Aryan\" idea and on modern genetic evidence.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "Indo-European Language and Culture: An Introduction", author: "Benjamin W. Fortson IV", publisher: "Wiley-Blackwell", year: "2004; 2nd ed., 2010" },
        { kind: "book", title: "In Search of the Indo-Europeans: Language, Archaeology and Myth", author: "J. P. Mallory", publisher: "Thames & Hudson", year: "1989" },
        { kind: "book", title: "The Horse, the Wheel, and Language: How Bronze-Age Riders from the Eurasian Steppes Shaped the Modern World", author: "David W. Anthony", publisher: "Princeton University Press", year: "2007" },
      ],
    },
    {
      heading: "Reference Works",
      items: [
        { kind: "book", title: "The Oxford Introduction to Proto-Indo-European and the Proto-Indo-European World", author: "J. P. Mallory and D. Q. Adams", publisher: "Oxford University Press", year: "2006" },
        { kind: "book", title: "The American Heritage Dictionary of Indo-European Roots", author: "Calvert Watkins", publisher: "Houghton Mifflin Harcourt", year: "3rd ed., 2011" },
        { kind: "book", title: "Indo-European Language and Society", author: "Émile Benveniste, trans. Elizabeth Palmer", publisher: "Faber and Faber", year: "1973" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "How to Kill a Dragon: Aspects of Indo-European Poetics", author: "Calvert Watkins", publisher: "Oxford University Press", year: "1995" },
        { kind: "book", title: "Indo-European Poetry and Myth", author: "M. L. West", publisher: "Oxford University Press", year: "2007" },
        { kind: "book", title: "Archaeology and Language: The Puzzle of Indo-European Origins", author: "Colin Renfrew", publisher: "Jonathan Cape", year: "1987" },
        { kind: "book", title: "Who We Are and How We Got Here", author: "David Reich", publisher: "Pantheon", year: "2018" },
      ],
    },
  ],
};
