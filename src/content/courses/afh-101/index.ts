import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const afh101: CourseContent = {
  overview: `Hegel claimed that Africa was "no historical part of the world." This course proves him wrong. It follows the history of Africa from the origins of humanity to the eve of the Atlantic slave trade, through kingdoms, cities, faiths, and trading worlds that were connected to the Mediterranean, the Middle East, and the Indian Ocean long before Europeans arrived.

We begin with Africa's deep past: the fossils of the Rift Valley, the green Sahara and the invention of African farming, Egypt as an African civilization, the black pharaohs of Kush, the Bantu expansion, and Carthage and Roman Africa. We study Aksum and its conversion under Ezana, Christian Nubia, the rock churches of Lalibela, and the Solomonic kings and their Kebra Nagast. We cross the Sahara with the camel caravans to Ghana, the land of gold, and weigh the debate over the Almoravid "conquest that never was." We follow Sundiata, Mansa Musa's pilgrimage, the scholars of Timbuktu, Ibn Battuta's journey to Mali, and the rise of Songhay. And we end in the forest kingdoms of Ife and Benin, on the Swahili coast, at Great Zimbabwe, and in Kongo, where Afonso I protested the first stirrings of the Atlantic slave trade.

Throughout, we read the sources—Herodotus and the Periplus, Ezana's inscriptions, al-Bakri and al-Umari, Ibn Battuta and the Sundiata epic, Afonso's letters—and ask how historians have recovered Africa's past from archaeology, oral tradition, and documents, and how that past was distorted by colonial prejudice. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain how historians reconstruct Africa's past from archaeology, linguistics, oral tradition, and written sources, and why Africa's history was long denied.",
    "Describe Africa's role in human origins, the development of farming and iron, and the civilizations of Egypt, Kush, and North Africa.",
    "Analyze the history of Aksum, Christian Nubia, and Ethiopia, and the role of Christianity and Islam in northeastern Africa.",
    "Explain the trans-Saharan trade and the rise of Ghana, Mali, and Songhay, and the spread of Islam and Islamic learning in West Africa.",
    "Describe the forest kingdoms of Ife and Benin, the Swahili coast, Great Zimbabwe, and Kongo, and their connections to wider worlds.",
    "Evaluate the ways colonial-era observers denied African achievements, and how historians and archaeologists corrected them.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "Sundiata: An Epic of Old Mali", author: "D. T. Niane, trans. G. D. Pickett", publisher: "Longman", year: "rev. ed., 2006" },
        { kind: "book", title: "The Travels of Ibn Battutah", author: "ed. Tim Mackintosh-Smith", publisher: "Picador", year: "2002" },
        { kind: "book", title: "Corpus of Early Arabic Sources for West African History", author: "ed. N. Levtzion and J. F. P. Hopkins", publisher: "Markus Wiener", year: "2000" },
        { kind: "edition", title: "The Periplus of the Erythraean Sea", author: "trans. Wilfred H. Schoff", publisher: "Internet Medieval Sourcebook, Fordham University", url: "https://sourcebooks.fordham.edu/ancient/periplus.asp" },
        { kind: "edition", title: "The Queen of Sheba and Her Only Son Menyelek (Kebra Nagast)", author: "trans. E. A. Wallis Budge", publisher: "Internet Sacred Text Archive", url: "https://sacred-texts.com/chr/kn/index.htm" },
        { kind: "website", title: "Internet African History Sourcebook", publisher: "Fordham University", url: "https://sourcebooks.fordham.edu/africa/africasbook.asp" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "History of Africa", author: "Kevin Shillington", publisher: "Red Globe Press", year: "4th ed., 2019", note: "The course's main survey." },
        { kind: "book", title: "Africa: A Biography of the Continent", author: "John Reader", publisher: "Alfred A. Knopf", year: "1998" },
        { kind: "book", title: "The Golden Rhinoceros: Histories of the African Middle Ages", author: "François-Xavier Fauvelle, trans. Troy Tice", publisher: "Princeton University Press", year: "2018", note: "Short chapters, each built around a single source or site." },
        { kind: "book", title: "Africans: The History of a Continent", author: "John Iliffe", publisher: "Cambridge University Press", year: "3rd ed., 2017" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "African Dominion: A New History of Empire in Early and Medieval West Africa", author: "Michael A. Gomez", publisher: "Princeton University Press", year: "2018" },
        { kind: "book", title: "The Swahili: Reconstructing the History and Language of an African Society, 800–1500", author: "Derek Nurse and Thomas Spear", publisher: "University of Pennsylvania Press", year: "1985" },
        { kind: "book", title: "Aksum: An African Civilisation of Late Antiquity", author: "Stuart Munro-Hay", publisher: "Edinburgh University Press", year: "1991" },
        { kind: "book", title: "Great Zimbabwe", author: "Peter Garlake", publisher: "Thames & Hudson", year: "1973" },
        { kind: "website", title: "Heilbrunn Timeline of Art History", publisher: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/", note: "Browse its essays on African art and history." },
      ],
    },
  ],
};
