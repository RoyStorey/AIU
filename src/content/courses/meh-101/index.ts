import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";

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
  lessons: [lesson1],
  forthcoming: [
    {
      title: "Muhammad and the First Community, c. 570–632",
      summary:
        "The life of the Prophet, the message of the Qur'an, the emigration to Medina, and the war with Mecca, read alongside the long scholarly argument over what the sources can tell us.",
      pages: [
        { title: "The Problem of the Sources", summary: "The Qur'an, the biography of Ibn Ishaq, and the hadith; the revisionist challenge of the 1970s and where the debate stands; what the earliest non-Muslim witnesses say.", minutes: 9 },
        { title: "The Prophet in Mecca", summary: "Muhammad's early life and marriage to Khadija, the first revelation around 610, the themes of the early suras—one God, judgment, the duty to the poor—and the growing hostility of Quraysh.", minutes: 10 },
        { title: "The Hijra and the Community at Medina", summary: "The emigration of 622, the agreement known as the Constitution of Medina, the idea of the umma, and relations with the Arab and Jewish tribes of Yathrib.", minutes: 10 },
        { title: "War with Mecca and the Triumph of Islam", summary: "Badr, Uhud, and the Trench; the truce of Hudaybiya; the surrender of Mecca in 630; and the submission of the tribes of Arabia.", minutes: 9 },
        { title: "The Message and the Messenger", summary: "The Qur'an as scripture, its prophets and its law, Abraham and the Ka'ba, the farewell pilgrimage, and the Prophet's death in 632.", minutes: 9 },
        { title: "Working with the Sources", summary: "Early suras of the Qur'an, the Constitution of Medina, a passage of Ibn Ishaq, and the Doctrina Jacobi, a Greek text of 634 that mentions a prophet among the Arabs.", minutes: 25 },
      ],
      readings: [
        { kind: "book", title: "The Life of Muhammad: A Translation of Ibn Ishaq's Sirat Rasul Allah", author: "A. Guillaume", publisher: "Oxford University Press", year: "1955" },
        { kind: "book", title: "Muhammad and the Believers: At the Origins of Islam", author: "Fred M. Donner", publisher: "Harvard University Press", year: "2010" },
        { kind: "book", title: "Muhammad", author: "Michael Cook", publisher: "Oxford University Press", year: "1983", note: "A brief, rigorous introduction that weighs the sources." },
      ],
    },
    {
      title: "Conquest and Caliphate, 632–750",
      summary:
        "The succession to the Prophet, the conquests that destroyed Persia and halved Rome, the civil wars that divided the community, and the Umayyad empire of Damascus.",
      pages: [
        { title: "Succession and the Wars of Apostasy", summary: "Abu Bakr and the meaning of khalifa, the wars that reunited Arabia, and the first raids into Syria and Iraq.", minutes: 9 },
        { title: "The Great Conquests", summary: "Yarmuk, Qadisiyya, Ctesiphon, Nahavand, and Egypt; why the conquests succeeded; the garrison cities of Kufa, Basra, and Fustat.", minutes: 10 },
        { title: "'Umar, 'Uthman, 'Ali, and the First Civil War", summary: "The register of pensions, the standard text of the Qur'an, the murder of 'Uthman, the battles of the Camel and Siffin, the Kharijites, and the roots of the Sunni–Shi'i divide.", minutes: 10 },
        { title: "The Umayyad Empire", summary: "Mu'awiya and Damascus; Karbala and the second civil war; 'Abd al-Malik, the Dome of the Rock, Arabic coinage and administration; expansion to Spain and Central Asia.", minutes: 10 },
        { title: "Conquerors and Conquered", summary: "Converts and clients, Christians, Jews, and Zoroastrians under Muslim rule, taxation and its grievances, and the Abbasid revolution of 747–750.", minutes: 9 },
        { title: "Working with the Sources", summary: "A surrender treaty from the conquests, the Armenian chronicle attributed to Sebeos, the inscriptions of the Dome of the Rock, and John of Damascus on the new faith.", minutes: 25 },
      ],
      readings: [
        { kind: "book", title: "The Great Arab Conquests: How the Spread of Islam Changed the World We Live In", author: "Hugh Kennedy", publisher: "Weidenfeld & Nicolson", year: "2007" },
        { kind: "book", title: "In God's Path: The Arab Conquests and the Creation of an Islamic Empire", author: "Robert G. Hoyland", publisher: "Oxford University Press", year: "2015" },
        { kind: "book", title: "'Abd al-Malik", author: "Chase F. Robinson", publisher: "Oneworld", year: "2005" },
      ],
    },
    {
      title: "The Abbasid Age: Baghdad and Classical Islam, 750–945",
      summary:
        "The caliphate of Baghdad at its height: a new capital, a translation movement that carried Greek science into Arabic, the making of Islamic law and the scholarly class, and the slow breakup of the empire.",
      pages: [
        { title: "The Round City", summary: "Al-Mansur's foundation of Baghdad in 762, the Persian inheritance of the Abbasid court, the Barmakids, and the reign of Harun al-Rashid.", minutes: 9 },
        { title: "The Translation Movement", summary: "Paper, patronage, and the House of Wisdom; Hunayn ibn Ishaq and the translators; al-Kindi and al-Khwarizmi; why an empire wanted Greek learning.", minutes: 10 },
        { title: "Law, Tradition, and the Scholars", summary: "The hadith and its critics, the founders of the schools of law, the Inquisition of al-Ma'mun and Ahmad ibn Hanbal's resistance, and the emergence of Sunni and Shi'i Islam.", minutes: 10 },
        { title: "City, Trade, and Society", summary: "Commerce from the Indian Ocean to the Mediterranean, slavery and the Zanj revolt, the courtly culture of adab, and the writers al-Jahiz and Abu Nuwas.", minutes: 9 },
        { title: "The Fragmenting Caliphate", summary: "Samarra and the Turkish soldiers, the anarchy of the 860s, the rise of provincial dynasties from Egypt to Khurasan, and the Buyid capture of Baghdad in 945.", minutes: 9 },
        { title: "Working with the Sources", summary: "Al-Ya'qubi on the founding of Baghdad, Hunayn ibn Ishaq on hunting for Greek manuscripts, a letter of al-Jahiz, and traditions from al-Bukhari's collection.", minutes: 25 },
      ],
      readings: [
        { kind: "book", title: "When Baghdad Ruled the Muslim World: The Rise and Fall of Islam's Greatest Dynasty", author: "Hugh Kennedy", publisher: "Da Capo Press", year: "2004", note: "Published in Britain as The Court of the Caliphs." },
        { kind: "book", title: "Greek Thought, Arabic Culture: The Graeco-Arabic Translation Movement in Baghdad and Early 'Abbasid Society", author: "Dimitri Gutas", publisher: "Routledge", year: "1998" },
        { kind: "book", title: "The Formation of Islam: Religion and Society in the Near East, 600–1800", author: "Jonathan P. Berkey", publisher: "Cambridge University Press", year: "2003" },
      ],
    },
    {
      title: "Fatimids, Seljuks, Crusaders, and Mongols, 945–1258",
      summary:
        "The age of a divided caliphate: a rival Shi'i caliphate in Cairo, the Seljuk Turks and the Sunni revival, the Crusades seen from the Muslim side, and the Mongol sack of Baghdad.",
      pages: [
        { title: "A Shi'i Century", summary: "The Buyids in Baghdad and the Isma'ili Fatimids, who conquered Egypt, founded Cairo in 969, and claimed the caliphate for the house of 'Ali.", minutes: 10 },
        { title: "The Seljuk Turks and the Sunni Revival", summary: "Tughril Beg in Baghdad, the sultanate, Nizam al-Mulk and the madrasa, al-Ghazali, and the victory at Manzikert that opened Anatolia to the Turks.", minutes: 10 },
        { title: "The Crusades from the Other Side", summary: "The fall of Jerusalem in 1099, the slow Muslim response, Zengi and Nur al-Din, Saladin and the battle of Hattin, and life on a frontier of war and coexistence.", minutes: 10 },
        { title: "The Mongol Storm", summary: "Chinggis Khan and the destruction of Khwarazm, Hülegü's campaign against the Assassins, the sack of Baghdad in 1258, and the Mamluk victory at 'Ayn Jalut.", minutes: 9 },
        { title: "Epilogue: A Civilization Without a Caliph", summary: "What survived the caliphate: the Persian revival, the networks of scholars and Sufis, and the long argument over continuity and rupture in Middle Eastern history.", minutes: 8 },
        { title: "Working with the Sources", summary: "Nizam al-Mulk's Book of Government, al-Ghazali's Deliverance from Error, Usama ibn Munqidh on the Franks, and Ibn al-Athir on the coming of the Mongols.", minutes: 25 },
      ],
      readings: [
        { kind: "book", title: "The Crusades: Islamic Perspectives", author: "Carole Hillenbrand", publisher: "Edinburgh University Press", year: "1999" },
        { kind: "book", title: "The Book of Contemplation: Islam and the Crusades", author: "Usama ibn Munqidh, trans. Paul M. Cobb", publisher: "Penguin Classics", year: "2008" },
        { kind: "book", title: "The Mongols and the Islamic World: From Conquest to Conversion", author: "Peter Jackson", publisher: "Yale University Press", year: "2017" },
      ],
    },
  ],
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
