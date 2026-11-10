import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const wlt101: CourseContent = {
  overview: `The oldest stories in the world are about death: how to face it, how to live with the knowledge of it, and what, if anything, outlasts it. This course reads three of the great epics of the ancient world, from Mesopotamia, Greece, and India, and the answers each gives.

We begin with Gilgamesh, the king who saw the Deep: the tablets rediscovered in the nineteenth century, the making of Enkidu, the friendship, the killing of Humbaba, and, after Enkidu's death, the journey to the ends of the earth in search of life, which ends at the walls of Uruk. We read Homer's Odyssey in two lessons: the oral poets and the formula, the many-turned hero who refuses Calypso's offer of immortality, the Cyclops and the voyage to the dead, and then the homecoming, from the beggar in his own hall to the bow, the slaughter, and the bed rooted in a living olive tree. And we end with the Bhagavad Gita, in which a warrior who cannot bring himself to fight his own kin is taught by Krishna to act without attachment to the fruits of action, and sees the god who is Time.

Throughout, we compare three heroes, three relationships, and three answers to mortality: the city, the home, and devotion. Passages are quoted in the course's own plain renderings; recommended translations are listed with each lesson. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain how Gilgamesh was rediscovered and how its layered versions shape what we read.",
    "Interpret Gilgamesh's treatment of friendship, fame, grief, and the search for immortality.",
    "Describe oral-formulaic composition and its consequences for reading Homer.",
    "Analyze the Odyssey's hero, its ethics of hospitality, and its scenes of disguise and recognition.",
    "Interpret the Bhagavad Gita's teaching on dharma, the self, and action without attachment.",
    "Compare the three epics' answers to mortality and assess how their modern readers have used them.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Translations",
      items: [
        { kind: "book", title: "The Epic of Gilgamesh", author: "trans. Andrew George", publisher: "Penguin Classics", year: "1999; rev. 2003" },
        { kind: "book", title: "The Odyssey", author: "Homer, trans. Emily Wilson", publisher: "W. W. Norton", year: "2017" },
        { kind: "book", title: "The Odyssey", author: "Homer, trans. Robert Fagles", publisher: "Penguin Classics", year: "1996" },
        { kind: "book", title: "The Bhagavad Gita", author: "trans. Laurie L. Patton", publisher: "Penguin Classics", year: "2008" },
      ],
    },
    {
      heading: "Criticism and context",
      items: [
        { kind: "book", title: "The Buried Book: The Loss and Rediscovery of the Great Epic of Gilgamesh", author: "David Damrosch", publisher: "Henry Holt", year: "2007" },
        { kind: "book", title: "The Singer of Tales", author: "Albert B. Lord", publisher: "Harvard University Press", year: "1960" },
        { kind: "book", title: "Mimesis: The Representation of Reality in Western Literature", author: "Erich Auerbach", publisher: "Princeton University Press", year: "1953" },
        { kind: "book", title: "The Bhagavad Gita: A Biography", author: "Richard H. Davis", publisher: "Princeton University Press", year: "2015" },
      ],
    },
  ],
};
