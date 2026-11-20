import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const meh101: CourseContent = {
  overview: `In 600 the Middle East was divided between two ancient empires, Christian Rome and Zoroastrian Persia, with the Arab peoples between and beyond them. A century later, a single Islamic empire ruled from the Atlantic to Central Asia, the Persian empire had vanished, and Arabic was becoming the language of government, scripture, and learning from Spain to the borders of China. Over the following five centuries the caliphate of Baghdad presided over one of the great civilizations of world history—and then broke apart, until in 1258 the Mongols sacked Baghdad and put the last caliph to death.

This course tells that story: the world before Islam, the life of Muhammad and the first Muslim community, the Arab conquests and the Umayyad caliphate, the Abbasid age of Baghdad and the making of classical Islamic law, learning, and culture, and the centuries of Fatimids, Seljuks, Crusaders, and Mongols. Throughout, we read the sources—the Qur'an, chronicles, poetry, inscriptions, and the testimony of Christians, Jews, and Persians who lived through these changes—and ask how historians know what they claim to know. Each lesson takes about two hours, with further reading and recordings on the reference shelf.

The first lesson is written in full; the remaining four are planned in outline below and are in preparation.`,
  objectives: [
    "Describe the Roman, Sasanian, and Arabian worlds of late antiquity and explain how they shaped the rise of Islam.",
    "Narrate the life of Muhammad and the formation of the first Muslim community, and explain the problems historians face in using the sources for them.",
    "Explain how the Arab conquests succeeded and how the Umayyad and Abbasid caliphates governed a vast and diverse empire.",
    "Analyze the formation of classical Islamic civilization: law, theology, the Sunni–Shi'i division, the translation movement, and the culture of Baghdad.",
    "Trace the fragmentation of the caliphate and the impact of the Fatimids, the Seljuk Turks, the Crusades, and the Mongols.",
    "Interpret primary sources critically, attending to their authors, dates, audiences, and the distance between events and their telling.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Koran Interpreted", author: "A. J. Arberry", publisher: "George Allen & Unwin", year: "1955", note: "A translation that tries to preserve the rhythm of the Arabic. The translation quoted in this course." },
        { kind: "website", title: "The Qur'an: Sura 30, al-Rum (The Romans)", publisher: "Quran.com", url: "https://quran.com/30", note: "Arabic text with a choice of English translations." },
        { kind: "book", title: "The Life of Muhammad: A Translation of Ibn Ishaq's Sirat Rasul Allah", author: "A. Guillaume", publisher: "Oxford University Press", year: "1955" },
        { kind: "edition", title: "History of the Wars, Books I and II: The Persian War", author: "Procopius, trans. H. B. Dewing", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/16764" },
        { kind: "book", title: "The Seven Odes: The First Chapter in Arabic Literature", author: "A. J. Arberry", publisher: "George Allen & Unwin", year: "1957", note: "Translations of the Mu'allaqat with an introduction to the poets and the problem of authenticity." },
        { kind: "book", title: "The History of al-Tabari, Volume V: The Sasanids, the Byzantines, the Lakhmids, and Yemen", author: "trans. C. E. Bosworth", publisher: "State University of New York Press", year: "1999", note: "The great ninth-century chronicler's account of the world before Islam, with a superb commentary." },
        { kind: "website", title: "Internet Islamic History Sourcebook", author: "ed. Paul Halsall", publisher: "Fordham University", url: "https://www.fordham.edu/Halsall/islam/islamsbook.asp", note: "Translated texts from pre-Islamic Arabia through the Mongols." },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "The Prophet and the Age of the Caliphates: The Islamic Near East from the Sixth to the Eleventh Century", author: "Hugh Kennedy", publisher: "Routledge", year: "3rd ed., 2016", note: "The standard narrative history for this course." },
        { kind: "book", title: "A History of the Arab Peoples", author: "Albert Hourani", publisher: "Harvard University Press", year: "1991" },
        { kind: "book", title: "A History of Islamic Societies", author: "Ira M. Lapidus", publisher: "Cambridge University Press", year: "3rd ed., 2014" },
        { kind: "book", title: "The Venture of Islam, Volume 1: The Classical Age of Islam", author: "Marshall G. S. Hodgson", publisher: "University of Chicago Press", year: "1974", note: "A demanding and brilliant interpretation of Islamic civilization as a world history." },
      ],
    },
    {
      heading: "Late Antiquity, Rome, and Persia",
      items: [
        { kind: "book", title: "The World of Late Antiquity, AD 150–750", author: "Peter Brown", publisher: "Thames & Hudson", year: "1971" },
        { kind: "book", title: "Empire to Commonwealth: Consequences of Monotheism in Late Antiquity", author: "Garth Fowden", publisher: "Princeton University Press", year: "1993" },
        { kind: "book", title: "The Last Great War of Antiquity", author: "James Howard-Johnston", publisher: "Oxford University Press", year: "2021", note: "The war of 603–630 between Rome and Persia." },
        { kind: "book", title: "Sasanian Persia: The Rise and Fall of an Empire", author: "Touraj Daryaee", publisher: "I. B. Tauris", year: "2009" },
        { kind: "website", title: "The Sasanian Empire (224–651 A.D.)", publisher: "Heilbrunn Timeline of Art History, The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/hd/sass/hd_sass.htm", note: "A short illustrated essay on Sasanian history and art." },
        { kind: "website", title: "Sasanian Dynasty", author: "A. Shapur Shahbazi", publisher: "Encyclopaedia Iranica", url: "https://www.iranicaonline.org/articles/sasanian-dynasty", note: "The authoritative reference article." },
      ],
    },
    {
      heading: "Arabia and the Origins of Islam",
      items: [
        { kind: "book", title: "Arabia and the Arabs: From the Bronze Age to the Coming of Islam", author: "Robert G. Hoyland", publisher: "Routledge", year: "2001" },
        { kind: "book", title: "Between Empires: Arabs, Romans, and Sasanians in Late Antiquity", author: "Greg Fisher", publisher: "Oxford University Press", year: "2011" },
        { kind: "book", title: "Meccan Trade and the Rise of Islam", author: "Patricia Crone", publisher: "Princeton University Press", year: "1987" },
        { kind: "book", title: "Muhammad and the Believers: At the Origins of Islam", author: "Fred M. Donner", publisher: "Harvard University Press", year: "2010" },
        { kind: "book", title: "Seeing Islam as Others Saw It", author: "Robert G. Hoyland", publisher: "Darwin Press", year: "1997", note: "A survey of Christian, Jewish, and Zoroastrian writings on early Islam." },
      ],
    },
    {
      heading: "The Caliphates",
      items: [
        { kind: "book", title: "The Great Arab Conquests", author: "Hugh Kennedy", publisher: "Weidenfeld & Nicolson", year: "2007" },
        { kind: "book", title: "In God's Path: The Arab Conquests and the Creation of an Islamic Empire", author: "Robert G. Hoyland", publisher: "Oxford University Press", year: "2015" },
        { kind: "book", title: "When Baghdad Ruled the Muslim World", author: "Hugh Kennedy", publisher: "Da Capo Press", year: "2004" },
        { kind: "book", title: "Greek Thought, Arabic Culture", author: "Dimitri Gutas", publisher: "Routledge", year: "1998" },
        { kind: "book", title: "The Crusades: Islamic Perspectives", author: "Carole Hillenbrand", publisher: "Edinburgh University Press", year: "1999" },
        { kind: "book", title: "The Mongols and the Islamic World", author: "Peter Jackson", publisher: "Yale University Press", year: "2017" },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "lecture", title: "The Early Middle Ages, 284–1000", author: "Paul Freedman", publisher: "Open Yale Courses, HIST 210", url: "https://oyc.yale.edu/history/hist-210", note: "Includes lectures on Justinian, Byzantium, Muhammad and the Arab conquests, and the Abbasids. Video, audio, and transcripts." },
        { kind: "audio", title: "The Sassanid Empire", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2007", url: "https://www.bbc.co.uk/programmes/b008g2x5" },
        { kind: "audio", title: "Antarah ibn Shaddad", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2019", url: "https://www.bbc.co.uk/programmes/m0002r5v" },
      ],
    },
  ],
};
