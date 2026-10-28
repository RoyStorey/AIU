import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe301: CourseContent = {
  overview: `Between 1830 and 1930, poetry in English passed through two revolutions. The first was the Victorian crisis of faith, as geology, Darwin, and biblical criticism unsettled the beliefs of centuries, and poets became the public voices of an anxious age. The second was Modernism, as a generation shattered by the First World War set out to break the pentameter and “make it new.” This course follows poetry from one revolution to the other.

We begin with Tennyson's grief and doubt in In Memoriam, Robert Browning's dramatic monologues, Elizabeth Barrett Browning's sonnets, and Matthew Arnold's “Dover Beach.” We read two poets of intense faith, Christina Rossetti and Gerard Manley Hopkins, whose sprung rhythm seemed so modern that his poems, published in 1918, were taken for new. We turn to Thomas Hardy's ironic, tender lyrics and to the poets of the Great War—Brooke, Sassoon, Owen, Rosenberg, and Edward Thomas. We spend a lesson on W. B. Yeats, from “Innisfree” to “Sailing to Byzantium.” And we end with the Modernists: the Imagists, Ezra Pound, and T. S. Eliot's “Prufrock” and The Waste Land.

The course builds on POE 210 and draws on the epic tradition of POE 220, which the poets of this period never stopped rewriting. All poems quoted in the lessons were published by 1930 and are in the public domain in the United States; later poems are described and listed in the readings. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Describe the scientific, religious, and social pressures on Victorian poetry, and analyze how Tennyson, Arnold, and the Brownings responded to them.",
    "Define the dramatic monologue and analyze its use by Browning, and its transformation by Pound and Eliot.",
    "Interpret the devotional poetry of Christina Rossetti and Gerard Manley Hopkins, and explain Hopkins's ideas of inscape and sprung rhythm.",
    "Analyze Hardy's lyrics and the poetry of the First World War, comparing the idealism of 1914 with the witness of 1917–18.",
    "Trace Yeats's development from the Celtic twilight to the poems of The Tower, with close attention to “Easter, 1916,” “The Second Coming,” and “Sailing to Byzantium.”",
    "Explain the principles of Imagism and Eliot's critical ideas, and interpret “Prufrock” and The Waste Land as Modernist poems in dialogue with tradition.",
    "Write close readings that relate a poem's form, sound, and voice to its historical moment and its place in the tradition.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Anthologies and Editions",
      items: [
        { kind: "book", title: "The Norton Anthology of English Literature, Volumes E and F: The Victorian Age; The Twentieth Century and After", author: "Stephen Greenblatt, gen. ed.", publisher: "W. W. Norton", year: "10th ed., 2018", note: "Nearly every poem in this course, with good notes." },
        { kind: "book", title: "Victorian Poetry: An Annotated Anthology", author: "Francis O'Gorman, ed.", publisher: "Blackwell", year: "2004" },
        { kind: "book", title: "Tennyson: A Selected Edition", author: "Christopher Ricks, ed.", publisher: "Longman / University of California Press", year: "rev. ed., 2007" },
        { kind: "book", title: "Gerard Manley Hopkins: The Major Works", author: "Catherine Phillips, ed.", publisher: "Oxford World's Classics", year: "2002" },
        { kind: "book", title: "The Collected Poems of W. B. Yeats", author: "Richard J. Finneran, ed.", publisher: "Scribner", year: "rev. 2nd ed., 1996" },
        { kind: "book", title: "The Poems of T. S. Eliot", author: "Christopher Ricks and Jim McCue, eds.", publisher: "Faber and Faber / Farrar, Straus and Giroux", year: "2 vols., 2015", note: "The definitive annotated edition." },
      ],
    },
    {
      heading: "Free Texts",
      items: [
        { kind: "edition", title: "In Memoriam A. H. H.", author: "Alfred Tennyson", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/70950" },
        { kind: "edition", title: "Poems of Gerard Manley Hopkins", author: "Robert Bridges, ed.", publisher: "Project Gutenberg (1918)", url: "https://www.gutenberg.org/ebooks/22403" },
        { kind: "edition", title: "Poems", author: "Wilfred Owen", publisher: "Project Gutenberg (1920)", url: "https://www.gutenberg.org/ebooks/1034" },
        { kind: "edition", title: "The Waste Land", author: "T. S. Eliot", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1321" },
        { kind: "website", title: "My Last Duchess", author: "Robert Browning", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/43768/my-last-duchess" },
        { kind: "website", title: "The Windhover", author: "Gerard Manley Hopkins", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/44402/the-windhover" },
      ],
    },
    {
      heading: "Criticism and Biography",
      items: [
        { kind: "book", title: "The Poetry of Experience: The Dramatic Monologue in Modern Literary Tradition", author: "Robert Langbaum", publisher: "Random House", year: "1957" },
        { kind: "book", title: "Victorian Poetry: Poetry, Poetics and Politics", author: "Isobel Armstrong", publisher: "Routledge", year: "1993" },
        { kind: "book", title: "The Great War and Modern Memory", author: "Paul Fussell", publisher: "Oxford University Press", year: "1975" },
        { kind: "book", title: "W. B. Yeats: A Life", author: "R. F. Foster", publisher: "Oxford University Press", year: "2 vols., 1997–2003" },
        { kind: "book", title: "The Pound Era", author: "Hugh Kenner", publisher: "University of California Press", year: "1971" },
        { kind: "book", title: "Selected Essays", author: "T. S. Eliot", publisher: "Faber and Faber", year: "1932", note: "“Tradition and the Individual Talent,” “Hamlet,” and “The Metaphysical Poets.”" },
        { kind: "book", title: "The Well Wrought Urn", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947", note: "The chapter “The Motivation of Tennyson's Weeper” reads “Tears, Idle Tears.”" },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "Tennyson's In Memoriam", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2011", url: "https://www.bbc.co.uk/programmes/b0124pnq" },
        { kind: "audio", title: "Gerard Manley Hopkins", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2019", url: "https://www.bbc.co.uk/programmes/m0003clk" },
        { kind: "audio", title: "Wilfred Owen", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2022", url: "https://www.bbc.co.uk/programmes/m001df48" },
        { kind: "audio", title: "Yeats and Irish Politics", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2008", url: "https://www.bbc.co.uk/programmes/b009twvd" },
        { kind: "audio", title: "The Waste Land and Modernity", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2009", url: "https://www.bbc.co.uk/programmes/b00hlb38" },
        { kind: "lecture", title: "Modern Poetry", author: "Langdon Hammer", publisher: "Open Yale Courses, ENGL 310", url: "https://oyc.yale.edu/english/engl-310", note: "Lectures 4–6 on Yeats, 7 on the war poets, 8 on Imagism, 9 on Pound, and 10–12 on Eliot." },
      ],
    },
  ],
};
