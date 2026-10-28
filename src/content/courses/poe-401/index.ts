import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe401: CourseContent = {
  overview: `What is poetry? What is it for? How should we read it? For twenty-five centuries, philosophers, critics, and poets have argued about these questions, and their answers have shaped how poems were written and read in every age. This seminar, the capstone of the Poetry concentration, reads the great arguments in order, and tests each one against the poems you have studied.

We begin with the "ancient quarrel between philosophy and poetry": Plato's charge that poets are inspired madmen and imitators of imitations, who should be banished from the ideal city, and Aristotle's reply in the Poetics, with its account of imitation, plot, and catharsis. We read Horace's Art of Poetry, the craftsman's handbook that taught Europe to "teach and delight," and Longinus's On the Sublime. We follow the defense of poetry through the Renaissance and the eighteenth century—Sidney, Dryden, Pope, and Johnson—and the Romantic revolution of Wordsworth, Coleridge, Shelley, and Keats, which moved the source of poetry from the world to the poet's mind. And we end with the modern argument: Arnold's hope that poetry would replace religion, Eliot's impersonality, Richards and Empson, the New Criticism, the theories that challenged it, and modern defenses of poetry from Auden to Heaney.

The course draws on every earlier course in the concentration. Its final assignment asks you to write your own defense of poetry. Most of the critical texts before 1930 are freely available and linked in the lessons; later criticism is quoted briefly and listed on the reference shelf. Each lesson takes about two hours.`,
  objectives: [
    "Explain Plato's case against poetry in the Ion and the Republic, and Aristotle's reply in the Poetics, including mimesis, plot, the universal, and catharsis.",
    "Analyze Horace's precepts of craft, decorum, and “teach and delight,” and Longinus's account of the sublime and its sources.",
    "Trace the defense of poetry from Sidney through Dryden, Pope, and Johnson, and explain the neoclassical ideals of nature, the rules, and “general nature.”",
    "Explain the Romantic revolution in poetics—Wordsworth's “spontaneous overflow,” Coleridge's imagination and organic form, Shelley's “unacknowledged legislators,” and Keats's negative capability—and its sources in German thought.",
    "Describe the modern argument from Arnold and Eliot through Richards, Empson, and the New Criticism to later theory, and apply its methods of close reading to particular poems.",
    "Use M. H. Abrams's four orientations to compare theories of poetry, and formulate and defend a poetics of your own, drawing on critics and poems from across the concentration.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Anthologies and Surveys",
      items: [
        { kind: "book", title: "The Norton Anthology of Theory and Criticism", author: "Vincent B. Leitch, gen. ed.", publisher: "W. W. Norton", year: "3rd ed., 2018", note: "Nearly every critic in this course, from Plato to the present." },
        { kind: "book", title: "Classical Literary Criticism", author: "Penelope Murray and T. S. Dorsch, trans.", publisher: "Penguin Classics", year: "2000", note: "Plato, Aristotle, Horace, and Longinus in modern translations." },
        { kind: "book", title: "The Mirror and the Lamp: Romantic Theory and the Critical Tradition", author: "M. H. Abrams", publisher: "Oxford University Press", year: "1953", note: "The classic account of the shift from mimetic to expressive theories, and the source of the four orientations." },
        { kind: "book", title: "Literary Theory: An Introduction", author: "Terry Eagleton", publisher: "University of Minnesota Press", year: "anniversary ed., 2008", note: "A lively, opinionated survey of twentieth-century theory." },
        { kind: "book", title: "Literary Theory: A Very Short Introduction", author: "Jonathan Culler", publisher: "Oxford University Press", year: "2nd ed., 2011" },
      ],
    },
    {
      heading: "Free Texts",
      items: [
        { kind: "edition", title: "The Republic", author: "Plato; Benjamin Jowett, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1497" },
        { kind: "edition", title: "The Poetics of Aristotle", author: "Aristotle; S. H. Butcher, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1974" },
        { kind: "edition", title: "On the Sublime", author: "Longinus; H. L. Havell, trans.", publisher: "Project Gutenberg (1890)", url: "https://www.gutenberg.org/ebooks/17957" },
        { kind: "edition", title: "A Defence of Poesie and Poems", author: "Sir Philip Sidney", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1962" },
        { kind: "edition", title: "An Essay on Criticism", author: "Alexander Pope", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/7409" },
        { kind: "edition", title: "Lyrical Ballads, with Other Poems, 1800", author: "William Wordsworth and Samuel Taylor Coleridge", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/8905", note: "Includes the Preface." },
        { kind: "edition", title: "Biographia Literaria", author: "Samuel Taylor Coleridge", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/6081" },
        { kind: "edition", title: "A Defence of Poetry and Other Essays", author: "Percy Bysshe Shelley", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/5428" },
        { kind: "edition", title: "Essays in Criticism: First and Second Series", author: "Matthew Arnold", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/77244" },
        { kind: "edition", title: "The Sacred Wood: Essays on Poetry and Criticism", author: "T. S. Eliot", publisher: "Project Gutenberg (1920)", url: "https://www.gutenberg.org/ebooks/57795" },
      ],
    },
    {
      heading: "Modern Criticism",
      items: [
        { kind: "book", title: "Practical Criticism: A Study of Literary Judgment", author: "I. A. Richards", publisher: "Kegan Paul", year: "1929" },
        { kind: "book", title: "Seven Types of Ambiguity", author: "William Empson", publisher: "Chatto & Windus", year: "1930; rev. ed., 1947" },
        { kind: "book", title: "The Well Wrought Urn: Studies in the Structure of Poetry", author: "Cleanth Brooks", publisher: "Reynal & Hitchcock", year: "1947" },
        { kind: "book", title: "The Verbal Icon: Studies in the Meaning of Poetry", author: "W. K. Wimsatt Jr.", publisher: "University of Kentucky Press", year: "1954", note: "Includes “The Intentional Fallacy” and “The Affective Fallacy,” written with Monroe C. Beardsley." },
        { kind: "book", title: "The Anxiety of Influence: A Theory of Poetry", author: "Harold Bloom", publisher: "Oxford University Press", year: "1973" },
        { kind: "book", title: "The Redress of Poetry", author: "Seamus Heaney", publisher: "Farrar, Straus and Giroux", year: "1995" },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "lecture", title: "Introduction to Theory of Literature", author: "Paul H. Fry", publisher: "Open Yale Courses, ENGL 300", url: "https://oyc.yale.edu/english/engl-300" },
        { kind: "audio", title: "Aristotle's Poetics", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2011", url: "https://www.bbc.co.uk/programmes/b00xw210" },
        { kind: "audio", title: "The Sublime", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/p004y23j" },
        { kind: "audio", title: "Lyrical Ballads", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/b01cwszf" },
      ],
    },
  ],
};
