import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const afh110: CourseContent = {
  overview: `Between the fifteenth and the nineteenth centuries, some twelve and a half million Africans were carried across the Atlantic in the largest forced migration in history. This course studies that trade from the African side: the states and societies that met the Europeans on the coast, the choices their rulers made, the ways the trade transformed them, and the people who were taken.

We begin with the Portuguese voyages, Zurara's account of the captives landed at Lagos in 1444, the gold of Elmina, and the first plantation economy on São Tomé. We follow Kongo's Christian kings, the founding of Luanda, Njinga's long war against Portugal, the battle of Mbwila, and Kimpa Vita's prophecy. We study the rise of Asante, Oyo, and Dahomey, and the very different trade of the Bight of Biafra, run by oracles, credit, and canoe houses. We follow the captives from capture to the coast, across the ocean on the slave ships, and into the plantations of the Americas, reading Olaudah Equiano and the sailors and surgeons who testified against the trade. And we end with the trade's toll on Africa, the debate between John Thornton and Walter Rodney, the African voices against the trade, abolition and the illegal trade that outlasted it, and the politics of memory and reparations today.

Throughout, we read the sources—Zurara and the papal bulls, Afonso's letters, Cavazzi and the Capuchins, Bosman and Dalzel, Equiano, Falconbridge, Newton, and Cugoano—and use the Trans-Atlantic Slave Trade Database to test what they say. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the origins of the Atlantic slave trade in Portuguese expansion, the Atlantic islands, and the plantation complex.",
    "Analyze how African states, from Kongo and Ndongo to Asante, Oyo, and Dahomey, shaped and were shaped by the trade.",
    "Describe the experience of captives from enslavement through the Middle Passage to sale in the Americas, using their own testimony where it survives.",
    "Evaluate the economics of the trade and the debate over Eric Williams's Capitalism and Slavery.",
    "Weigh the arguments of Thornton, Rodney, Manning, Lovejoy, and others on the trade's impact on Africa.",
    "Explain the abolition of the trade, the role of Africans in ending it, and the legacies and memory of the trade today.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Interesting Narrative of the Life of Olaudah Equiano", author: "Olaudah Equiano", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/15399" },
        { kind: "edition", title: "The Chronicle of the Discovery and Conquest of Guinea", author: "Gomes Eanes de Zurara, trans. C. R. Beazley and Edgar Prestage", publisher: "Internet Archive", url: "https://archive.org/details/chronicleofdisco01zura" },
        { kind: "edition", title: "A New and Accurate Description of the Coast of Guinea", author: "Willem Bosman", publisher: "Internet Archive", url: "https://archive.org/details/newaccuratedescr00bosm" },
        { kind: "book", title: "Thoughts and Sentiments on the Evil of Slavery and Other Writings", author: "Quobna Ottobah Cugoano, ed. Vincent Carretta", publisher: "Penguin Classics", year: "1999" },
        { kind: "book", title: "Barracoon: The Story of the Last “Black Cargo”", author: "Zora Neale Hurston", publisher: "Amistad", year: "2018" },
        { kind: "website", title: "Slave Voyages: The Trans-Atlantic Slave Trade Database", publisher: "Emory University and partners", url: "https://www.slavevoyages.org/" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "Africa and Africans in the Making of the Atlantic World, 1400–1800", author: "John Thornton", publisher: "Cambridge University Press", year: "2nd ed., 1998", note: "The course's central text." },
        { kind: "book", title: "How Europe Underdeveloped Africa", author: "Walter Rodney", publisher: "Verso", year: "2018 ed. (1st ed. 1972)" },
        { kind: "book", title: "Atlas of the Transatlantic Slave Trade", author: "David Eltis and David Richardson", publisher: "Yale University Press", year: "2010" },
        { kind: "book", title: "The Slave Ship: A Human History", author: "Marcus Rediker", publisher: "Viking", year: "2007" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "Njinga of Angola: Africa's Warrior Queen", author: "Linda M. Heywood", publisher: "Harvard University Press", year: "2017" },
        { kind: "book", title: "Way of Death: Merchant Capitalism and the Angolan Slave Trade, 1730–1830", author: "Joseph C. Miller", publisher: "University of Wisconsin Press", year: "1988" },
        { kind: "book", title: "Transformations in Slavery: A History of Slavery in Africa", author: "Paul E. Lovejoy", publisher: "Cambridge University Press", year: "3rd ed., 2012" },
        { kind: "book", title: "Slavery and African Life: Occidental, Oriental, and African Slave Trades", author: "Patrick Manning", publisher: "Cambridge University Press", year: "1990" },
        { kind: "book", title: "Capitalism and Slavery", author: "Eric Williams", publisher: "University of North Carolina Press", year: "1944" },
      ],
    },
  ],
};
