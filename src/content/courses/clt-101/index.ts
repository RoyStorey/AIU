import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const clt101: CourseContent = {
  overview: `The Iliad and the Odyssey stand at the beginning of Western literature, and for the Greeks they were the foundation of education, religion, and thought. This course reads the Iliad closely, book by book, in translation with attention to its Greek, and then reads the Odyssey as the Iliad's answer.

We begin with the poet the Greeks called Homer, the Homeric Question, the myth of the Trojan War and the archaeology of Troy, Milman Parry's discovery of oral-formulaic composition, the hexameter, the heroic code of honor and glory, and the gods. Three lessons follow the Iliad: the quarrel of Agamemnon and Achilles, Helen on the wall, and Hector's farewell to Andromache; the embassy to Achilles, his choice between long life and imperishable glory, and the death of Patroclus; and Achilles's return, the Shield, the death of Hector, and Priam's ransom of his son. The last lesson turns to the Odyssey's reply, its songs of Troy, Achilles among the dead, Penelope's glory, and to Homer's critics, translators, and readers from Plato to Simone Weil.

Students who have taken WLT 101 will already know the Odyssey's episodes; this course reads the Odyssey from the other side, as the companion and counterweight of the Iliad. Each lesson takes about two hours and ends with a session working directly with the text.`,
  objectives: [
    "Explain the Homeric Question, oral-formulaic composition, and the evidence of archaeology for the Trojan War.",
    "Describe the heroic code of timē, kleos, and aidōs, and the role of the gods and fate in Homer.",
    "Interpret the major episodes of the Iliad, including the quarrel, the embassy, the deaths of Patroclus and Hector, and the meeting of Priam and Achilles.",
    "Analyze Homer's similes, speeches, type-scenes, and use of foreshadowing.",
    "Compare the Iliad's and the Odyssey's visions of heroism, glory, and return.",
    "Trace the reception of Homer from Plato and Virgil to modern translators and critics.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Translations",
      items: [
        { kind: "book", title: "The Iliad", author: "Homer, trans. Richmond Lattimore", publisher: "University of Chicago Press", year: "1951; new ed. 2011" },
        { kind: "book", title: "The Odyssey", author: "Homer, trans. Emily Wilson", publisher: "W. W. Norton", year: "2017" },
        { kind: "book", title: "The Iliad", author: "Homer, trans. Caroline Alexander", publisher: "Ecco", year: "2015" },
        { kind: "book", title: "The Iliad and The Odyssey", author: "Homer, trans. Samuel Butler", publisher: "Public domain (1898, 1900); many editions" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Ancient Greek Hero in 24 Hours", author: "Gregory Nagy", publisher: "Belknap Press of Harvard University Press", year: "2013" },
        { kind: "book", title: "The Singer of Tales", author: "Albert B. Lord", publisher: "Harvard University Press", year: "1960" },
        { kind: "book", title: "The World of Odysseus", author: "M. I. Finley", publisher: "NYRB Classics", year: "rev. ed. 2002" },
        { kind: "book", title: "Nature and Culture in the Iliad: The Tragedy of Hector", author: "James M. Redfield", publisher: "Duke University Press", year: "expanded ed. 1994" },
        { kind: "book", title: "The Trojan War: A New History", author: "Barry Strauss", publisher: "Simon & Schuster", year: "2006" },
      ],
    },
    {
      heading: "Reception",
      items: [
        { kind: "book", title: "War and the Iliad", author: "Simone Weil and Rachel Bespaloff", publisher: "New York Review Books", year: "2005" },
        { kind: "book", title: "Achilles in Vietnam", author: "Jonathan Shay", publisher: "Scribner", year: "1994" },
        { kind: "book", title: "Mimesis", author: "Erich Auerbach, trans. Willard R. Trask", publisher: "Princeton University Press", year: "1953" },
      ],
    },
  ],
};
