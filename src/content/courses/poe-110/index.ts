import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe110: CourseContent = {
  overview: `Every love poem you have ever read has ancestors. When Shakespeare compares his beloved to a summer's day, or Keats meditates on time and beauty, or a modern songwriter sings of burning and freezing in love, they are speaking a language that was invented, piece by piece, over two thousand years—from the island of Lesbos to the papal court at Avignon.

This course traces that language from its beginnings. We start with Sappho, the first great voice of the personal lyric, in the fragments that survived on papyrus and in the quotations of ancient critics. We follow the lyric to Rome, to Catullus's poems of kisses, betrayal, and grief, the love elegists, and Horace's odes of wine, friendship, and time. We cross a thousand years to the courts of medieval Provence, where the troubadours invented a new art of love, and to Sicily, where a lawyer invented the sonnet, and to Florence, where Dante made his love for Beatrice into a path to God. And we end with Petrarch, who gathered the whole tradition into the most influential book of love poetry ever written.

The poems are read in close translations made for this course, with the original Greek, Latin, Occitan, or Italian beside them wherever its sound or word order matters. No knowledge of these languages is assumed. Each lesson takes about two hours, with further readings and recordings on the reference shelf.`,
  objectives: [
    "Explain the origins of the lyric in archaic Greek song, and analyze the major surviving poems of Sappho and the problems of reading a fragmentary text.",
    "Analyze Catullus's love poetry and poems of grief, and describe the conventions of Roman love elegy in Tibullus, Propertius, and Ovid.",
    "Interpret Horace's odes on time, love, and Rome, and explain his adaptation of Greek lyric form to Latin.",
    "Describe the troubadours' art of fin'amor, the invention of the sonnet in Sicily, the dolce stil novo, and Dante's Vita Nuova.",
    "Analyze the structure, themes, and paradoxes of Petrarch's Canzoniere, and trace the spread of Petrarchism to England.",
    "Compare translations with originals, and explain how particular images, forms, and attitudes were transmitted and transformed from Sappho to the Renaissance.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "The Poets in Translation",
      items: [
        { kind: "book", title: "If Not, Winter: Fragments of Sappho", author: "Anne Carson, trans.", publisher: "Alfred A. Knopf", year: "2002", note: "Greek and English on facing pages; the gaps in the papyri marked with brackets." },
        { kind: "book", title: "Greek Lyric Poetry", author: "M. L. West, trans.", publisher: "Oxford World's Classics", year: "1993", note: "Archilochus, Alcaeus, Sappho, Anacreon, and the other archaic poets." },
        { kind: "book", title: "The Poems of Catullus", author: "Peter Green, trans.", publisher: "University of California Press", year: "2005", note: "Bilingual, with excellent notes." },
        { kind: "book", title: "The Odes of Horace", author: "David Ferry, trans.", publisher: "Farrar, Straus and Giroux", year: "1997", note: "Bilingual; the most admired modern verse translation." },
        { kind: "book", title: "Lyrics of the Troubadours and Trouvères", author: "Frederick Goldin, trans.", publisher: "Anchor Books", year: "1973", note: "Bilingual anthology with historical introductions." },
        { kind: "book", title: "Vita Nuova", author: "Dante Alighieri, trans. Mark Musa", publisher: "Oxford World's Classics", year: "1992" },
        { kind: "book", title: "Petrarch's Canzoniere", author: "Mark Musa, trans.", publisher: "Indiana University Press", year: "1996", note: "The complete Rerum vulgarium fragmenta, bilingual." },
      ],
    },
    {
      heading: "Free Texts",
      items: [
        { kind: "edition", title: "Sappho: Memoir, Text, Selected Renderings, and a Literal Translation", author: "Henry Thornton Wharton", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/57390" },
        { kind: "edition", title: "The Carmina of Caius Valerius Catullus", author: "Richard F. Burton and Leonard C. Smithers, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/20732" },
        { kind: "edition", title: "The Odes and Carmen Saeculare of Horace", author: "John Conington, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/5432" },
        { kind: "edition", title: "The New Life (La Vita Nuova)", author: "Dante Alighieri, trans. Dante Gabriel Rossetti", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/41085" },
        { kind: "edition", title: "The Sonnets, Triumphs, and Other Poems of Petrarch", author: "Thomas Campbell, ed.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/17650" },
        { kind: "website", title: "Petrarchive", author: "H. Wayne Storey, John A. Walsh, and Isabella Magni, eds.", publisher: "Indiana University", url: "https://dcl.luddy.indiana.edu/petrarchive", note: "Digital edition of Petrarch's own manuscript, Vat. Lat. 3195." },
      ],
    },
    {
      heading: "Criticism and History",
      items: [
        { kind: "book", title: "Eros the Bittersweet", author: "Anne Carson", publisher: "Princeton University Press", year: "1986", note: "A brilliant essay on desire in Greek lyric, beginning from Sappho's glukupikron." },
        { kind: "book", title: "Sappho's Immortal Daughters", author: "Margaret Williamson", publisher: "Harvard University Press", year: "1995", note: "Sappho's life, poems, and reception." },
        { kind: "book", title: "Catullus and His World: A Reappraisal", author: "T. P. Wiseman", publisher: "Cambridge University Press", year: "1985", note: "The social and political world of Catullus and Clodia." },
        { kind: "book", title: "Horace: Image, Identity, and Audience", author: "Randall L. B. McNeill", publisher: "Johns Hopkins University Press", year: "2001" },
        { kind: "book", title: "The Allegory of Love", author: "C. S. Lewis", publisher: "Oxford University Press", year: "1936", note: "The classic, much-debated account of courtly love." },
        { kind: "book", title: "The Troubadours: An Introduction", author: "Simon Gaunt and Sarah Kay, eds.", publisher: "Cambridge University Press", year: "1999", note: "The best modern introduction, with essays on fin'amor, the trobairitz, and music." },
        { kind: "book", title: "Petrarch: A Critical Guide to the Complete Works", author: "Victoria Kirkham and Armando Maggi, eds.", publisher: "University of Chicago Press", year: "2009" },
        { kind: "book", title: "The Birth of the Modern Mind: Self, Consciousness, and the Invention of the Sonnet", author: "Paul Oppenheimer", publisher: "Oxford University Press", year: "1989", note: "On Giacomo da Lentini and the sonnet as a form of inward thought." },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "Sappho", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2015", url: "https://www.bbc.co.uk/programmes/b05pqsk4" },
        { kind: "audio", title: "Catullus", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2020", url: "https://www.bbc.co.uk/programmes/m000d1rg" },
        { kind: "audio", title: "Horace", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2018", url: "https://www.bbc.co.uk/programmes/m00014jt" },
        { kind: "audio", title: "Chivalry", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/b03tt7kn" },
        { kind: "lecture", title: "Dante in Translation", author: "Giuseppe Mazzotta", publisher: "Open Yale Courses (ITAL 310)", url: "https://oyc.yale.edu/italian-language-and-literature/ital-310", note: "Lecture 2 is on the Vita Nuova." },
        { kind: "audio", title: "Chansons de Troubadours et Danses de Jongleurs", author: "Ensemble Millenarium", publisher: "Ricercar", year: "2000", note: "Troubadour songs, including Bernart de Ventadorn's “Can vei la lauzeta mover.”" },
      ],
    },
  ],
};
