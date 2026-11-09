import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const meh110: CourseContent = {
  overview: `In the land between the Tigris and Euphrates, beginning around 3500 BC, human beings built the first cities, invented writing, wrote the first laws and the first great poem, and created the first empires. This course surveys the history of the ancient Near East—Mesopotamia and the lands around it—from Sumer to the conquest of Persia by Alexander the Great in 330 BC.

We begin with Uruk, the first city, the invention of writing from accounting, the decipherment of cuneiform, the rival city-states of Sumer, the Royal Cemetery of Ur, and the first schools. We follow Sargon of Akkad and the first empire, Enheduanna, the first author known by name, Naram-Sin the god-king, the laws and bureaucracy of Ur, and the Epic of Gilgamesh and its flood story. We study Hammurabi and his laws, Babylonian divination and mathematics, the Hittites, the Amarna letters and the club of great kings, and the Bronze Age collapse. We trace the rise of Assyria, its deportations and its library, Israel and Judah between the empires, and Sennacherib's siege of Jerusalem. And we end with Nebuchadnezzar's Babylon, the exile of Judah, Nabonidus, Cyrus, Darius, the wars with Greece, and Alexander.

Throughout, we read the sources—royal inscriptions, laws, letters, epics, hymns, and the Hebrew Bible—and ask how a civilization forgotten for two thousand years was recovered from clay. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the origins of cities, writing, and states in southern Mesopotamia, and how cuneiform was deciphered.",
    "Describe the first empires of Akkad and Ur and the ideals of kingship and justice expressed in early law codes.",
    "Interpret the Epic of Gilgamesh and other Mesopotamian literature, and compare them with the Hebrew Bible.",
    "Analyze the international system of the Late Bronze Age and the causes of its collapse.",
    "Explain how the Assyrian, Babylonian, and Persian empires were built and governed, and how their subjects experienced them.",
    "Evaluate royal inscriptions, letters, laws, and biblical texts as historical sources.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "The Epic of Gilgamesh: A New Translation", author: "trans. Andrew George", publisher: "Penguin Classics", year: "1999" },
        { kind: "book", title: "The Amarna Letters", author: "ed. and trans. William L. Moran", publisher: "Johns Hopkins University Press", year: "1992" },
        { kind: "book", title: "The Histories", author: "Herodotus, trans. Tom Holland", publisher: "Penguin Classics", year: "2013" },
        { kind: "website", title: "Electronic Text Corpus of Sumerian Literature", publisher: "University of Oxford", url: "https://etcsl.orinst.ox.ac.uk/" },
        { kind: "website", title: "State Archives of Assyria Online", publisher: "Open Richly Annotated Cuneiform Corpus", url: "https://oracc.museum.upenn.edu/saao/" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "A History of the Ancient Near East, ca. 3000–323 BC", author: "Marc Van De Mieroop", publisher: "Wiley-Blackwell", year: "3rd ed., 2016", note: "The course's main survey." },
        { kind: "book", title: "History Begins at Sumer", author: "Samuel Noah Kramer", publisher: "University of Pennsylvania Press", year: "3rd ed., 1981" },
        { kind: "book", title: "Assyria: The Rise and Fall of the World's First Empire", author: "Eckart Frahm", publisher: "Basic Books", year: "2023" },
        { kind: "book", title: "The Persian Empire: A History", author: "Lindsay Allen", publisher: "University of Chicago Press", year: "2005" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "1177 B.C.: The Year Civilization Collapsed", author: "Eric H. Cline", publisher: "Princeton University Press", year: "rev. ed., 2021" },
        { kind: "book", title: "Against the Grain: A Deep History of the Earliest States", author: "James C. Scott", publisher: "Yale University Press", year: "2017" },
        { kind: "book", title: "The Ark Before Noah", author: "Irving Finkel", publisher: "Hodder & Stoughton", year: "2014" },
        { kind: "book", title: "The Bible Unearthed", author: "Israel Finkelstein and Neil Asher Silberman", publisher: "Free Press", year: "2001" },
      ],
    },
  ],
};
