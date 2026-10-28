import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe310: CourseContent = {
  overview: `American poetry has two founders, utterly unlike each other, who wrote at the same time and never met: Walt Whitman, who sang himself and the whole democratic multitude in long free-verse lines, and Emily Dickinson, who compressed death, God, and the soul into tiny hymn stanzas broken by dashes, and hid them in a drawer. This course follows American poetry from those two founders to the present day.

We read Whitman's Leaves of Grass—“Song of Myself,” “Crossing Brooklyn Ferry,” and the elegy for Lincoln—and Dickinson's poems of death, pain, love, and power. We turn to three Modernists who stayed home and remade poetry in different ways: Robert Frost, Wallace Stevens, and William Carlos Williams, with Marianne Moore and Hart Crane. We trace the African American tradition from Phillis Wheatley and Paul Laurence Dunbar through the Harlem Renaissance and Langston Hughes to Gwendolyn Brooks. And we end with American poetry since 1945: Elizabeth Bishop, Robert Lowell and the confessional poets, the Beats and the New York School, the Black Arts Movement, and the many voices of poetry today.

The course draws on the whole concentration, especially POE 101 and POE 301. Poems published before 1931 are printed in full in the lessons; later poems, still in copyright, are described and linked to authorized texts at the Poetry Foundation and the Academy of American Poets. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Explain Emerson's call for an American poet, and analyze Whitman's free verse, his democratic “I,” and his visions of death and the reader in “Song of Myself,” “Crossing Brooklyn Ferry,” and “When Lilacs Last.”",
    "Analyze Dickinson's hymn meter, dashes, and slant rhyme, and interpret her poems of death, inner states, love, power, and faith, with attention to the history of their publication.",
    "Compare the Modernist practices of Frost, Stevens, and Williams, and explain Frost's “sound of sense,” Stevens's “supreme fiction,” and Williams's “no ideas but in things.”",
    "Trace the African American poetic tradition from Wheatley and Dunbar through the Harlem Renaissance, and analyze Hughes's adaptations of the blues and his answer to Whitman.",
    "Describe the main movements of American poetry since 1945 and interpret representative poems by Bishop, Lowell, Ginsberg, O'Hara, and Brooks.",
    "Write close readings that place an American poem in the line of descent from Whitman and Dickinson, quoting precisely and attending to form, voice, and history.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Anthologies and Editions",
      items: [
        { kind: "book", title: "The Oxford Book of American Poetry", author: "David Lehman, ed.", publisher: "Oxford University Press", year: "2006", note: "From Anne Bradstreet to the present; the best single-volume anthology." },
        { kind: "book", title: "The Poems of Emily Dickinson: Reading Edition", author: "R. W. Franklin, ed.", publisher: "Belknap Press of Harvard University Press", year: "1999" },
        { kind: "book", title: "The Collected Poems of Wallace Stevens", author: "John N. Serio and Chris Beyers, eds.", publisher: "Alfred A. Knopf", year: "corrected ed., 2015" },
        { kind: "book", title: "The Collected Poems of Langston Hughes", author: "Arnold Rampersad and David Roessel, eds.", publisher: "Alfred A. Knopf / Vintage", year: "1994" },
        { kind: "book", title: "Poems", author: "Elizabeth Bishop", publisher: "Farrar, Straus and Giroux", year: "2011", note: "The complete poems, including unpublished work." },
      ],
    },
    {
      heading: "Free Texts and Resources",
      items: [
        { kind: "edition", title: "Leaves of Grass", author: "Walt Whitman", publisher: "Project Gutenberg (1891–92)", url: "https://www.gutenberg.org/ebooks/1322" },
        { kind: "website", title: "The Walt Whitman Archive", publisher: "Ed Folsom and Kenneth M. Price, eds.", url: "https://whitmanarchive.org" },
        { kind: "edition", title: "Poems by Emily Dickinson, Three Series, Complete", publisher: "Project Gutenberg (1890–1896)", url: "https://www.gutenberg.org/ebooks/12242" },
        { kind: "website", title: "Emily Dickinson Archive", url: "https://www.edickinson.org" },
        { kind: "edition", title: "Collected Poems of Robert Frost", publisher: "Project Gutenberg (Henry Holt, 1930)", url: "https://www.gutenberg.org/ebooks/78327" },
        { kind: "edition", title: "Harmonium", author: "Wallace Stevens", publisher: "Project Gutenberg (Alfred A. Knopf, 1923)", url: "https://www.gutenberg.org/ebooks/78743" },
        { kind: "edition", title: "The Book of American Negro Poetry", author: "James Weldon Johnson, ed.", publisher: "Project Gutenberg (1922)", url: "https://www.gutenberg.org/ebooks/11986" },
        { kind: "edition", title: "The Complete Poems of Paul Laurence Dunbar", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/18338" },
      ],
    },
    {
      heading: "Criticism and Biography",
      items: [
        { kind: "book", title: "Walt Whitman's America: A Cultural Biography", author: "David S. Reynolds", publisher: "Alfred A. Knopf", year: "1995" },
        { kind: "book", title: "The Life of Emily Dickinson", author: "Richard B. Sewall", publisher: "Farrar, Straus and Giroux", year: "1974" },
        { kind: "book", title: "White Heat: The Friendship of Emily Dickinson and Thomas Wentworth Higginson", author: "Brenda Wineapple", publisher: "Alfred A. Knopf", year: "2008" },
        { kind: "book", title: "The Life of Langston Hughes", author: "Arnold Rampersad", publisher: "Oxford University Press", year: "2 vols., 1986–88" },
        { kind: "book", title: "Elizabeth Bishop: A Miracle for Breakfast", author: "Megan Marshall", publisher: "Houghton Mifflin Harcourt", year: "2017" },
        { kind: "book", title: "Poets in Their Youth", author: "Eileen Simpson", publisher: "Random House", year: "1982", note: "A memoir of Berryman, Lowell, and their circle." },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "Walt Whitman", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2023", url: "https://www.bbc.co.uk/programmes/m001l99w" },
        { kind: "audio", title: "Emily Dickinson", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2017", url: "https://www.bbc.co.uk/programmes/b08p5lbp" },
        { kind: "lecture", title: "Modern Poetry", author: "Langdon Hammer", publisher: "Open Yale Courses, ENGL 310", url: "https://oyc.yale.edu/english/engl-310", note: "Lectures 2–3 on Frost, 13–14 on Crane, 15 on Hughes, 16 on Williams, 17–18 on Moore, 19–21 on Stevens, and 24–25 on Bishop." },
      ],
    },
  ],
};
