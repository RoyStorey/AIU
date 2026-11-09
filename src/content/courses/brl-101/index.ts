import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const brl101: CourseContent = {
  overview: `English literature begins in a language most English speakers today cannot read, and survives, in its two greatest early poems, in single manuscripts that nearly perished. This course follows it from the heroic verse of the Anglo-Saxons to the comedy of Geoffrey Chaucer, reading the poems in translation and, wherever possible, in the original.

We begin with Beowulf: the scorched manuscript, the sound of Old English verse, Heorot and Grendel, the fight in the hall, Grendel's mother, Hrothgar's sermon, the dragon, and the hero's funeral, alongside The Wanderer, The Dream of the Rood, Cædmon's Hymn, and the treasures of Sutton Hoo. We read Sir Gawain and the Green Knight, the masterpiece of the alliterative revival, with its beheading game, pentangle, temptations, and green girdle, and glance at Pearl and the Arthurian tradition. And we spend two lessons with Chaucer: his life and England after the Black Death, his English and his meter, Troilus and Criseyde, the pilgrims of the General Prologue, and the tales of the Knight, Miller, Wife of Bath, Pardoner, Prioress, Nun's Priest, and Parson.

Throughout, we read aloud, attend to language and form, and weigh the arguments of critics from Tolkien to Jill Mann and Carolyn Dinshaw. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Read short passages of Old and Middle English aloud and explain the principles of alliterative and accentual-syllabic verse.",
    "Interpret Beowulf as a poem about heroism, kingship, and mortality, and evaluate debates over its date and Christian elements.",
    "Analyze Sir Gawain and the Green Knight's structure, symbolism, and moral testing of chivalry.",
    "Place Chaucer in the history of his time and the development of English as a literary language.",
    "Interpret the General Prologue's portraits and the major tales, including the dynamics of the pilgrimage frame.",
    "Weigh the critical debates over the Wife of Bath, the Pardoner, the Prioress's Tale, and Chaucer's Retraction.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "Beowulf: A New Verse Translation", author: "trans. Seamus Heaney", publisher: "W. W. Norton", year: "2000" },
        { kind: "book", title: "Sir Gawain and the Green Knight", author: "trans. Simon Armitage", publisher: "W. W. Norton", year: "2007" },
        { kind: "book", title: "The Riverside Chaucer", author: "Geoffrey Chaucer, ed. Larry D. Benson", publisher: "Houghton Mifflin", year: "3rd ed., 1987" },
        { kind: "book", title: "The Anglo-Saxon World: An Anthology", author: "trans. Kevin Crossley-Holland", publisher: "Oxford World's Classics", year: "2009" },
        { kind: "website", title: "Harvard's Geoffrey Chaucer Website", publisher: "Harvard University", url: "https://chaucer.fas.harvard.edu/" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "The Monsters and the Critics, and Other Essays", author: "J. R. R. Tolkien, ed. Christopher Tolkien", publisher: "HarperCollins", year: "1983" },
        { kind: "book", title: "Chaucer and Medieval Estates Satire", author: "Jill Mann", publisher: "Cambridge University Press", year: "1973" },
        { kind: "book", title: "Chaucer's Sexual Poetics", author: "Carolyn Dinshaw", publisher: "University of Wisconsin Press", year: "1989" },
        { kind: "book", title: "A Companion to the Gawain-Poet", author: "ed. Derek Brewer and Jonathan Gibson", publisher: "D. S. Brewer", year: "1997" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "Klaeber's Beowulf", author: "ed. R. D. Fulk, Robert E. Bjork, and John D. Niles", publisher: "University of Toronto Press", year: "4th ed., 2008" },
        { kind: "book", title: "The Life of Geoffrey Chaucer: A Critical Biography", author: "Derek Pearsall", publisher: "Blackwell", year: "1992" },
        { kind: "book", title: "The Dating of Beowulf: A Reassessment", author: "ed. Leonard Neidorf", publisher: "D. S. Brewer", year: "2014" },
      ],
    },
  ],
};
