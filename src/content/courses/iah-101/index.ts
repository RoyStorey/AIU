import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const iah101: CourseContent = {
  overview: `When Columbus landed in 1492, the Americas had been home to human beings for at least fifteen thousand years. Their peoples had invented farming, built cities and empires, and created writing, calendars, and great art, all independently of the Old World. This course surveys that history, concentrating on the civilizations of Mesoamerica and the Andes; the peoples of North America are studied in depth in IAH 110.

We begin with the Americas in 1491 and the debate over their population, the peopling of the hemisphere from Monte Verde to the White Sands footprints, the domestication of maize and the potato, Caral, the oldest city in the Americas, and the lost gardens of Amazonia. We study the Olmec and their colossal heads, Monte Albán, Teotihuacan, and the Classic Maya, whose writing was deciphered in the twentieth century and whose cities lidar is now revealing. We follow the Maya collapse, Chichen Itza and Tula, the Mexica migration and the founding of Tenochtitlan, the Triple Alliance, and Nezahualcoyotl's poetry. We visit Tenochtitlan as the Spaniards saw it, the Templo Mayor, the gods and the Five Suns, and the debate over sacrifice. And we end in the Andes, with Chavín, the Moche, Nazca, Tiwanaku, Wari, and Chimú, and the empire of the Inca on the eve of 1532.

Throughout, we read the sources—the Popol Vuh, Landa, Sahagún's Florentine Codex, Cortés and Bernal Díaz, Nezahualcoyotl, Cieza de León, and Garcilaso de la Vega—and ask how archaeology, epigraphy, and Native testimony let us recover a past that conquest tried to erase. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the peopling of the Americas and the debates over the hemisphere's population in 1492.",
    "Describe the domestication of maize, potatoes, and other American crops and their significance for world history.",
    "Analyze the Olmec, Zapotec, Teotihuacan, and Classic Maya civilizations, including the decipherment of Maya writing.",
    "Explain the Classic Maya collapse and the rise of the Aztec empire, its society, religion, and practice of sacrifice.",
    "Describe the Andean civilizations from Chavín to Chimú and the organization of the Inca empire.",
    "Evaluate the sources for the ancient Americas—archaeology, codices, khipus, and colonial chronicles—and their biases.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "Popol Vuh: The Mayan Book of the Dawn of Life", author: "trans. Dennis Tedlock", publisher: "Touchstone", year: "rev. ed., 1996" },
        { kind: "book", title: "The Broken Spears: The Aztec Account of the Conquest of Mexico", author: "Miguel León-Portilla, ed.", publisher: "Beacon Press", year: "rev. ed., 2006" },
        { kind: "website", title: "Digital Florentine Codex", publisher: "Getty Research Institute", url: "https://florentinecodex.getty.edu/" },
        { kind: "book", title: "The Conquest of New Spain", author: "Bernal Díaz del Castillo, trans. J. M. Cohen", publisher: "Penguin Classics", year: "1963" },
        { kind: "book", title: "Royal Commentaries of the Incas and General History of Peru", author: "Garcilaso de la Vega, trans. Harold V. Livermore", publisher: "University of Texas Press", year: "1966" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "1491: New Revelations of the Americas before Columbus", author: "Charles C. Mann", publisher: "Alfred A. Knopf", year: "2005", note: "The course's companion volume." },
        { kind: "book", title: "Ancient Mexico and Central America: Archaeology and Culture History", author: "Susan Toby Evans", publisher: "Thames & Hudson", year: "3rd ed., 2013" },
        { kind: "book", title: "The Incas", author: "Terence N. D'Altroy", publisher: "Wiley-Blackwell", year: "2nd ed., 2014" },
        { kind: "book", title: "The Maya", author: "Michael D. Coe and Stephen Houston", publisher: "Thames & Hudson", year: "9th ed., 2015" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "Breaking the Maya Code", author: "Michael D. Coe", publisher: "Thames & Hudson", year: "3rd ed., 2012" },
        { kind: "book", title: "Aztecs: An Interpretation", author: "Inga Clendinnen", publisher: "Cambridge University Press", year: "1991" },
        { kind: "book", title: "Fifth Sun: A New History of the Aztecs", author: "Camilla Townsend", publisher: "Oxford University Press", year: "2019", note: "A history of the Mexica drawn from Nahuatl-language sources." },
        { kind: "book", title: "The Incas and Their Ancestors: The Archaeology of Peru", author: "Michael E. Moseley", publisher: "Thames & Hudson", year: "rev. ed., 2001" },
      ],
    },
  ],
};
