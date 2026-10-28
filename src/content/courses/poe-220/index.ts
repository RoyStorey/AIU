import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe220: CourseContent = {
  overview: `The epic is the longest and most ambitious form in Western poetry: a narrative poem in an elevated style about heroes whose actions decide the fate of a people—or of all humanity. This course reads the five great epics of the classical tradition, from Greece in the eighth century BC to England in the 1660s, as a single conversation in which each poet answers the ones before.

We begin with Homer: the Iliad, the poem of Achilles' wrath, of Hector and Andromache, and of Priam in the tent of the man who killed his son; and the Odyssey, the poem of homecoming, of the man of many turns and the wife who is his equal. We read Virgil's Aeneid, which rewrote both Homeric poems for Augustan Rome and counted the cost of empire in Dido, Turnus, and the tears of things. We follow Dante, with Virgil as his guide, through Hell and up the mountain of Purgatory to the vision of “the Love that moves the sun and the other stars.” And we end with Milton's Paradise Lost, which names all its predecessors and claims a subject “more heroic” than any of them.

Along the way you will learn the conventions of epic—the invocation, the catalogue, the epic simile, the descent to the underworld—and follow how each poet transforms them. Earlier courses in the concentration are helpful but not required. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Define epic, distinguish primary from secondary epic, and identify the major epic conventions and how each poet in the course uses or transforms them.",
    "Explain the oral-formulaic theory of Homeric composition and analyze the Iliad's treatment of honor, mortality, and pity.",
    "Contrast the values of the Odyssey with those of the Iliad, including kleos and nostos, cunning, hospitality, and recognition.",
    "Analyze the Aeneid as both a celebration of Rome and a lament for its cost, with close attention to Dido, the underworld, and the death of Turnus.",
    "Describe the structure and theology of Dante's Divine Comedy, and interpret key episodes in relation to Virgil and to Dante's earlier love poetry.",
    "Interpret Paradise Lost's treatment of Satan, free will, the Fall, and heroism, and explain Milton's claim to surpass his predecessors.",
    "Write comparative close readings that trace a passage, image, or convention across two or more epics, quoting translations precisely.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Recommended Translations and Editions",
      items: [
        { kind: "book", title: "The Iliad of Homer", author: "Richmond Lattimore, trans.", publisher: "University of Chicago Press", year: "1951; rev. ed. 2011", note: "Line-for-line and close to the Greek. Robert Fagles (Penguin, 1990) and Emily Wilson (Norton, 2023) are freer and more fluent." },
        { kind: "book", title: "The Odyssey", author: "Emily Wilson, trans.", publisher: "W. W. Norton", year: "2017" },
        { kind: "book", title: "The Aeneid", author: "Robert Fagles, trans.", publisher: "Viking / Penguin Classics", year: "2006", note: "Introduction by Bernard Knox. Robert Fitzgerald's translation (1983) is a fine alternative." },
        { kind: "book", title: "The Divine Comedy", author: "Allen Mandelbaum, trans.", publisher: "Everyman's Library", year: "1995 (one volume)" },
        { kind: "book", title: "Inferno; Purgatorio; Paradiso", author: "Robert and Jean Hollander, trans.", publisher: "Doubleday / Anchor", year: "2000–2007", note: "Facing Italian text and very full notes." },
        { kind: "book", title: "Paradise Lost", author: "Gordon Teskey, ed.", publisher: "W. W. Norton (Norton Critical Edition)", year: "2005" },
        { kind: "book", title: "Paradise Lost", author: "Alastair Fowler, ed.", publisher: "Longman Annotated English Poets", year: "2nd ed., 1998", note: "The fullest annotation of Milton's sources and allusions." },
      ],
    },
    {
      heading: "Free Texts and Resources",
      items: [
        { kind: "edition", title: "The Iliad", author: "Samuel Butler, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2199" },
        { kind: "edition", title: "The Iliad", author: "Alexander Pope, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/6130" },
        { kind: "edition", title: "The Odyssey", author: "Samuel Butler, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1727" },
        { kind: "edition", title: "The Aeneid", author: "John Dryden, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/228" },
        { kind: "edition", title: "The Divine Comedy", author: "Henry Wadsworth Longfellow, trans.", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1004" },
        { kind: "website", title: "Digital Dante", publisher: "Columbia University Libraries", url: "https://digitaldante.columbia.edu" },
        { kind: "edition", title: "Paradise Lost", author: "John Milton", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/26" },
        { kind: "website", title: "The John Milton Reading Room", publisher: "Dartmouth College", url: "https://milton.host.dartmouth.edu/reading_room/contents/text.shtml" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "The Singer of Tales", author: "Albert B. Lord", publisher: "Harvard University Press", year: "1960", note: "The oral-formulaic theory of Homer, from fieldwork with Yugoslav singers." },
        { kind: "book", title: "The Iliad, or the Poem of Force", author: "Simone Weil", publisher: "trans. Mary McCarthy; Pendle Hill / New York Review Books", year: "1940; English 1945", note: "A short essay; one of the most influential readings of Homer ever written." },
        { kind: "book", title: "Mimesis: The Representation of Reality in Western Literature", author: "Erich Auerbach", publisher: "Princeton University Press", year: "1953", note: "Chapter 1, “Odysseus' Scar”; Chapter 8 on Dante's Farinata and Cavalcante." },
        { kind: "book", title: "Virgil's Aeneid: Cosmos and Imperium", author: "Philip Hardie", publisher: "Oxford University Press", year: "1986" },
        { kind: "book", title: "The Undivine Comedy: Detheologizing Dante", author: "Teodolinda Barolini", publisher: "Princeton University Press", year: "1992" },
        { kind: "book", title: "A Preface to Paradise Lost", author: "C. S. Lewis", publisher: "Oxford University Press", year: "1942", note: "On primary and secondary epic, and the case against Satan." },
        { kind: "book", title: "Surprised by Sin: The Reader in Paradise Lost", author: "Stanley Fish", publisher: "Macmillan / Harvard University Press", year: "1967; 2nd ed. 1997" },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "The Iliad", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2018", url: "https://www.bbc.co.uk/programmes/b0bh5x1y" },
        { kind: "audio", title: "The Odyssey", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2004", url: "https://www.bbc.co.uk/programmes/p004y297" },
        { kind: "audio", title: "The Aeneid", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2005", url: "https://www.bbc.co.uk/programmes/b00ktfmw" },
        { kind: "audio", title: "Dante's Inferno", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2008", url: "https://www.bbc.co.uk/programmes/b00f05zj" },
        { kind: "audio", title: "Milton", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2002", url: "https://www.bbc.co.uk/programmes/p00548bg" },
        { kind: "lecture", title: "Dante in Translation", author: "Giuseppe Mazzotta", publisher: "Open Yale Courses, ITAL 310", url: "https://oyc.yale.edu/italian-language-and-literature/ital-310" },
        { kind: "lecture", title: "Milton", author: "John Rogers", publisher: "Open Yale Courses, ENGL 220", url: "https://oyc.yale.edu/english/engl-220" },
      ],
    },
  ],
};
