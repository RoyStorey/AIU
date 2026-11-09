import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const mdh101: CourseContent = {
  overview: `Between the accession of Diocletian in 284 and the year 1000, the Roman world was remade into three civilizations: Latin Christendom in the West, the Byzantine Empire in the East, and the Islamic world to the south. These centuries were once called the Dark Ages. Historians now see them as an age of transformation, in which the inheritance of Rome was preserved, reshaped, and passed on by emperors and barbarian kings, bishops and monks, missionaries and scholars.

This course follows that transformation. We begin with the late Roman world: Diocletian's reforms, Constantine's conversion and his new capital, the Christian empire of Theodosius and Ambrose, the Goths at Adrianople, and the sack of Rome that moved Augustine to write The City of God. We study the successor kingdoms of Theodoric, Clovis, and the Visigoths, Boethius in prison, and Justinian's attempt to restore the empire. We follow Benedict's monks, Bede and the conversion of the English, Boniface in Germany, and the quarrel over icons in Byzantium. We trace the rise of Islam and Pirenne's argument that without Muhammad there would have been no Charlemagne, and Charlemagne's empire and revival of learning. And we end with the Vikings, Alfred the Great, Otto the Great, Cluny, and the conversion of the north and east by the year 1000.

Throughout, we read the participants in their own words—Augustine and Boethius, Gregory of Tours and Procopius, Bede and Einhard, Alcuin and Alfred—and weigh the arguments of historians from Gibbon and Pirenne to Peter Brown, Chris Wickham, and Bryan Ward-Perkins. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the reforms of Diocletian and Constantine and the Christianization of the Roman Empire.",
    "Evaluate the debate over the “fall” or “transformation” of the Roman West, and explain why the East survived.",
    "Describe the barbarian successor kingdoms and Justinian's empire, and the role of the church in preserving Roman culture.",
    "Analyze the growth of monasticism and the conversion of the British Isles and Germany, and the iconoclast controversy in Byzantium.",
    "Explain the rise of Islam and its consequences for the Mediterranean world, and the achievements and limits of Charlemagne's empire.",
    "Trace the division of the Carolingian empire, the invasions of the ninth and tenth centuries, and the emergence of a new Europe by the year 1000.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Confessions", author: "Augustine, trans. E. B. Pusey", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/3296" },
        { kind: "edition", title: "The Consolation of Philosophy", author: "Boethius, trans. H. R. James", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/14328" },
        { kind: "edition", title: "History of the Franks", author: "Gregory of Tours, trans. Ernest Brehaut", publisher: "Internet Medieval Sourcebook, Fordham University", url: "https://sourcebooks.fordham.edu/basis/gregory-hist.asp" },
        { kind: "edition", title: "Ecclesiastical History of the English People", author: "Bede, trans. A. M. Sellar", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/38326" },
        { kind: "edition", title: "Life of Charlemagne", author: "Einhard, trans. Samuel Epes Turner", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/48722" },
        { kind: "edition", title: "The Anglo-Saxon Chronicle", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/657" },
        { kind: "website", title: "Internet Medieval Sourcebook", publisher: "Fordham University", url: "https://sourcebooks.fordham.edu/sbook.asp" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "The Inheritance of Rome: Illuminating the Dark Ages, 400–1000", author: "Chris Wickham", publisher: "Viking", year: "2009", note: "The course's main survey." },
        { kind: "book", title: "The World of Late Antiquity, AD 150–750", author: "Peter Brown", publisher: "W. W. Norton", year: "1971" },
        { kind: "book", title: "The Rise of Western Christendom: Triumph and Diversity, AD 200–1000", author: "Peter Brown", publisher: "Wiley-Blackwell", year: "3rd ed., 2013" },
        { kind: "book", title: "Charlemagne: The Formation of a European Identity", author: "Rosamond McKitterick", publisher: "Cambridge University Press", year: "2008" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "edition", title: "The History of the Decline and Fall of the Roman Empire", author: "Edward Gibbon", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/25717" },
        { kind: "book", title: "The Fall of Rome and the End of Civilization", author: "Bryan Ward-Perkins", publisher: "Oxford University Press", year: "2005" },
        { kind: "book", title: "The Fall of the Roman Empire: A New History", author: "Peter Heather", publisher: "Macmillan", year: "2005" },
        { kind: "book", title: "Mohammed and Charlemagne", author: "Henri Pirenne", publisher: "Allen & Unwin", year: "1939 (French original 1937)" },
        { kind: "book", title: "Origins of the European Economy: Communications and Commerce, AD 300–900", author: "Michael McCormick", publisher: "Cambridge University Press", year: "2001" },
        { kind: "book", title: "The Cult of the Saints: Its Rise and Function in Latin Christianity", author: "Peter Brown", publisher: "University of Chicago Press", year: "1981" },
        { kind: "book", title: "Fiefs and Vassals: The Medieval Evidence Reinterpreted", author: "Susan Reynolds", publisher: "Oxford University Press", year: "1994" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "lecture", title: "The Early Middle Ages, 284–1000 (HIST 210)", author: "Paul Freedman", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/history/hist-210", note: "Twenty-two lectures covering this course's period." },
        { kind: "website", title: "The Lindisfarne Gospels", publisher: "The British Library", url: "https://www.bl.uk/collection-items/lindisfarne-gospels" },
        { kind: "website", title: "The Sutton Hoo Ship Burial", publisher: "The British Museum", url: "https://www.britishmuseum.org/collection/death-and-memory/anglo-saxon-ship-burial-sutton-hoo" },
      ],
    },
  ],
};
