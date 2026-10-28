import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe210: CourseContent = {
  overview: `Between the French Revolution and the 1820s, a handful of English poets changed what poetry was for. They made the poet's own mind and feelings its subject; they turned to nature, to childhood, and to the language of ordinary people; they claimed for the imagination a power to create as well as to see; and they bound poetry to the hopes, and the disappointments, of revolution. This course reads six of them closely.

We begin with William Blake, engraver, visionary, and radical, and his Songs of Innocence and of Experience. We read Lyrical Ballads, the book of 1798 that Wordsworth and Coleridge published anonymously, and Wordsworth's Preface, the manifesto of the new poetry; then the great poems of Wordsworth's decade, from “Tintern Abbey” to The Prelude. We read Coleridge's conversation poems and his three poems of the supernatural, “The Rime of the Ancient Mariner,” “Christabel,” and “Kubla Khan.” We turn to the younger generation who grew up in the reaction after Waterloo: Lord Byron, celebrity and exile, from Childe Harold to the comic epic Don Juan; and Percy Bysshe Shelley, radical, atheist, and visionary, poet of the West Wind and of political prophecy. And we end with John Keats, whose letters and great odes of 1819 are among the supreme achievements of English poetry, and who died in Rome at twenty-five.

The course builds on POE 101 and on the sonnet tradition of POE 201, which the Romantics revived. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Describe the historical context of English Romanticism—the French Revolution, the wars with France, and the reaction after 1815—and explain how it shaped the poetry of two generations.",
    "Analyze Blake's Songs of Innocence and of Experience as paired contrary states, attending to their simple forms and their social and religious critique.",
    "Explain the program of Lyrical Ballads and Wordsworth's Preface, and interpret “Tintern Abbey,” the 1807 lyrics, and selected passages of The Prelude.",
    "Interpret Coleridge's conversation poems and his poems of the supernatural, and explain his distinction between imagination and fancy.",
    "Compare the poetry and politics of Byron and Shelley, from the Byronic hero and the ironic narrator of Don Juan to Shelley's odes, political poems, and A Defence of Poetry.",
    "Analyze Keats's sonnets, ballad, and odes closely, and explain the ideas of his letters, including negative capability and the “camelion poet.”",
    "Write close readings that relate a Romantic poem's form, sound, and voice to its meaning and its place in the tradition.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Editions and Anthologies",
      items: [
        { kind: "book", title: "The Norton Anthology of English Literature, Volume D: The Romantic Period", author: "Stephen Greenblatt, gen. ed.", publisher: "W. W. Norton", year: "10th ed., 2018", note: "Nearly every poem in this course, with good notes." },
        { kind: "book", title: "Romanticism: An Anthology", author: "Duncan Wu, ed.", publisher: "Wiley-Blackwell", year: "4th ed., 2012", note: "The fullest single-volume anthology, including many women poets of the period." },
        { kind: "book", title: "The Complete Poetry and Prose of William Blake", author: "David V. Erdman, ed.", publisher: "Anchor Books", year: "rev. ed., 1988" },
        { kind: "book", title: "The Prelude: 1799, 1805, 1850", author: "Jonathan Wordsworth, M. H. Abrams, and Stephen Gill, eds.", publisher: "W. W. Norton (Norton Critical Edition)", year: "1979", note: "The three versions on facing pages." },
        { kind: "book", title: "William Wordsworth: The Major Works", author: "Stephen Gill, ed.", publisher: "Oxford World's Classics", year: "2000" },
        { kind: "book", title: "Samuel Taylor Coleridge: The Major Works", author: "H. J. Jackson, ed.", publisher: "Oxford World's Classics", year: "2000" },
        { kind: "book", title: "Lord Byron: The Major Works", author: "Jerome J. McGann, ed.", publisher: "Oxford World's Classics", year: "2000" },
        { kind: "book", title: "Shelley's Poetry and Prose", author: "Donald H. Reiman and Neil Fraistat, eds.", publisher: "W. W. Norton (Norton Critical Edition)", year: "2nd ed., 2002" },
        { kind: "book", title: "John Keats: The Major Works", author: "Elizabeth Cook, ed.", publisher: "Oxford World's Classics", year: "2001" },
      ],
    },
    {
      heading: "Free Texts and Resources",
      items: [
        { kind: "edition", title: "Songs of Innocence and of Experience", author: "William Blake", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1934" },
        { kind: "website", title: "The William Blake Archive", url: "https://www.blakearchive.org", note: "Every copy of the illuminated books, in color." },
        { kind: "edition", title: "Lyrical Ballads, with a Few Other Poems (1798)", author: "William Wordsworth and Samuel Taylor Coleridge", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/9622" },
        { kind: "edition", title: "Biographia Literaria", author: "Samuel Taylor Coleridge", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/6081" },
        { kind: "edition", title: "The Complete Poetical Works of Percy Bysshe Shelley", author: "Thomas Hutchinson, ed.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/4800" },
        { kind: "edition", title: "Lamia, Isabella, The Eve of St. Agnes, and Other Poems", author: "John Keats", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/23684" },
        { kind: "edition", title: "Letters of John Keats to His Family and Friends", author: "Sidney Colvin, ed.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/35698" },
        { kind: "website", title: "Mapping Keats's Progress: A Critical Chronology", publisher: "University of Victoria", url: "https://johnkeats.uvic.ca", note: "Keats's poems and letters arranged by date, with commentary." },
      ],
    },
    {
      heading: "Criticism and Biography",
      items: [
        { kind: "book", title: "The Mirror and the Lamp: Romantic Theory and the Critical Tradition", author: "M. H. Abrams", publisher: "Oxford University Press", year: "1953", note: "The classic account of the Romantic shift from art as imitation to art as expression." },
        { kind: "book", title: "Natural Supernaturalism", author: "M. H. Abrams", publisher: "W. W. Norton", year: "1971" },
        { kind: "book", title: "Fearful Symmetry: A Study of William Blake", author: "Northrop Frye", publisher: "Princeton University Press", year: "1947" },
        { kind: "book", title: "The Visionary Company: A Reading of English Romantic Poetry", author: "Harold Bloom", publisher: "Doubleday", year: "1961" },
        { kind: "book", title: "The Romantic Ideology: A Critical Investigation", author: "Jerome J. McGann", publisher: "University of Chicago Press", year: "1983", note: "A skeptical, historical reading of Romanticism's account of itself." },
        { kind: "book", title: "John Keats", author: "Walter Jackson Bate", publisher: "Harvard University Press", year: "1963", note: "The great critical biography." },
        { kind: "book", title: "Shelley: The Pursuit", author: "Richard Holmes", publisher: "Weidenfeld & Nicolson", year: "1974" },
        { kind: "book", title: "Byron: Life and Legend", author: "Fiona MacCarthy", publisher: "John Murray", year: "2002" },
        { kind: "book", title: "The Well Wrought Urn", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947", note: "The chapter “Keats's Sylvan Historian” reads the Grecian Urn dramatically." },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "Songs of Innocence and of Experience", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/b07gh4pg" },
        { kind: "audio", title: "Lyrical Ballads", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/b01cwszf" },
        { kind: "article", title: "John Keats: “To Autumn”", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/articles/69595/john-keats-to-autumn" },
      ],
    },
  ],
};
