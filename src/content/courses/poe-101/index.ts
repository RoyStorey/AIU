import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe101: CourseContent = {
  overview: `Poetry is language under pressure. In a poem, every syllable has been weighed: the length of the line, the place where a sentence breaks, the sound of one vowel answering another. This course teaches you to hear that pressure and to describe it precisely.

We begin with the act of reading slowly—aloud, line by line, asking not only *what* a poem means but *how* it comes to mean it. Then we learn the technical vocabulary that poets themselves use: meter and its variations, rhyme and the other music of sound, the stanza and the great fixed forms from the sonnet to the villanelle, and the figures—image, metaphor, symbol, irony, persona—through which poems think. Along the way we read closely some of the finest short poems in English, from Shakespeare and Milton to Keats, Dickinson, Hopkins, Hardy, and Frost.

By the end you will be able to scan a line of blank verse, recognize a sonnet's turn or a villanelle's refrains, hear what a slant rhyme is doing, and write a close reading that ties a poem's technique to its meaning. Every later course in the Poetry concentration builds on these skills. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Read a poem aloud with attention to its rhythm, syntax, and tone, and paraphrase it accurately while recognizing what paraphrase loses.",
    "Scan accentual-syllabic verse, name the common meters, and explain the effect of metrical variation.",
    "Identify rhyme and its kinds, alliteration, assonance, consonance, and repetition, and explain how sound reinforces sense.",
    "Recognize the major stanzas and fixed forms—couplet, ballad stanza, terza rima, sonnet, villanelle, sestina, rondeau, ode, elegy, free verse—and explain what each makes possible.",
    "Analyze image, metaphor, conceit, symbol, tone, irony, and the speaker, and distinguish among them.",
    "Write a close reading that makes an arguable claim and supports it with precise quotation and analysis.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Handbooks and Guides",
      items: [
        { kind: "book", title: "A Poetry Handbook", author: "Mary Oliver", publisher: "Harcourt", year: "1994", note: "The best short introduction, by a Pulitzer Prize–winning poet." },
        { kind: "book", title: "The Ode Less Travelled", author: "Stephen Fry", publisher: "Hutchinson", year: "2005", note: "Meter and form learned by writing them." },
        { kind: "book", title: "Poetic Meter and Poetic Form", author: "Paul Fussell", publisher: "McGraw-Hill", year: "rev. ed. 1979", note: "Brief, authoritative, indispensable." },
        { kind: "book", title: "How to Read a Poem", author: "Edward Hirsch", publisher: "Harcourt", year: "1999", note: "Published as “How to Read a Poem and Fall in Love with Poetry.” A poet's companionable tour." },
        { kind: "book", title: "Rhyme's Reason: A Guide to English Verse", author: "John Hollander", publisher: "Yale University Press", year: "3rd ed. 2001", note: "Every form explained in a poem written in that form." },
      ],
    },
    {
      heading: "Anthologies",
      items: [
        { kind: "book", title: "The Norton Anthology of Poetry", author: "Margaret Ferguson, Tim Kendall, and Mary Jo Salter, eds.", publisher: "W. W. Norton", year: "6th ed. 2018", note: "The standard teaching anthology, Caedmon to the present." },
        { kind: "book", title: "The Making of a Poem: A Norton Anthology of Poetic Forms", author: "Mark Strand and Eavan Boland, eds.", publisher: "W. W. Norton", year: "2000" },
        { kind: "book", title: "The Oxford Book of English Verse", author: "Christopher Ricks, ed.", publisher: "Oxford University Press", year: "1999" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "The Well Wrought Urn: Studies in the Structure of Poetry", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947" },
        { kind: "book", title: "Understanding Poetry", author: "Cleanth Brooks and Robert Penn Warren", publisher: "Henry Holt", year: "1938", note: "The textbook that taught generations of Americans to close read." },
        { kind: "book", title: "The Art of Shakespeare's Sonnets", author: "Helen Vendler", publisher: "Harvard University Press", year: "1997", note: "A commentary on all 154 sonnets by the foremost critic of the lyric." },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "lecture", title: "Modern Poetry (ENGL 310)", author: "Langdon Hammer", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/english/engl-310", note: "Complete lecture course with video, audio, and transcripts." },
        { kind: "audio", title: "Poetry Foundation Podcasts", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/podcasts" },
      ],
    },
    {
      heading: "Online Resources",
      items: [
        { kind: "website", title: "Poetry Foundation", url: "https://www.poetryfoundation.org", note: "Tens of thousands of poems with biographies and audio." },
        { kind: "website", title: "Poets.org (Academy of American Poets)", url: "https://poets.org", note: "Poems, essays, and the Glossary of Poetic Terms." },
        { kind: "website", title: "Representative Poetry Online", publisher: "University of Toronto Libraries", url: "https://rpo.library.utoronto.ca", note: "Scholarly texts of canonical English poems." },
      ],
    },
  ],
};
