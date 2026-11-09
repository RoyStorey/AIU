import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const mdh110: CourseContent = {
  overview: `Between the year 1000 and the early fourteenth century, Latin Europe was transformed. Its population roughly doubled; its towns, trade, and wealth grew; and it created institutions that still shape the world—the papacy as a government, the university, the common law, the parliament—and built the Gothic cathedrals. R. W. Southern called this "the making of the Middle Ages."

We begin with the great expansion after 1000: plows and mills, towns and communes, knights and castles, and the Peace of God. We follow the reform of the Church, Gregory VII's confrontation with Henry IV at Canossa, and the Concordat of Worms. We study the crusades, from Clermont and the Rhineland massacres to Saladin, Richard the Lionheart, and the sack of Constantinople. We trace the new religious life of Bernard, Hildegard, Francis, and Dominic, the Cathar and Waldensian heresies, Innocent III, the Fourth Lateran Council, and the Inquisition. We enter the schools with Abelard and Héloïse, the first universities, the return of Aristotle, and Thomas Aquinas. And we end with Suger and the cathedrals, Henry II and Becket, Magna Carta, Saint Louis, Frederick II, the first parliaments, and Boniface VIII's humiliation at Anagni.

Throughout, we read the participants in their own words—Gregory VII and Henry IV, crusaders, Hebrew chroniclers and Usama ibn Munqidh, Bernard and Francis, Abelard and Héloïse, Aquinas, Suger, Joinville, and Magna Carta—and weigh the arguments of historians from Haskins and Southern to Moore, Riley-Smith, and Bartlett. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the economic, demographic, and urban expansion of Europe after 1000 and the society of knights, castles, and towns.",
    "Analyze the Gregorian reform and the Investiture Contest, and their consequences for church and state.",
    "Describe the crusades and evaluate competing interpretations of their motives and meaning, including Jewish and Muslim perspectives.",
    "Explain the new religious orders, the rise of heresy and the Inquisition, and the papal monarchy of Innocent III.",
    "Describe the schools and universities, the scholastic method, and the thought of Abelard and Aquinas.",
    "Explain the Gothic cathedrals and the development of royal government, common law, Magna Carta, and representative assemblies.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "The Letters of Abelard and Heloise", author: "trans. Betty Radice, rev. M. T. Clanchy", publisher: "Penguin Classics", year: "2003" },
        { kind: "book", title: "The Book of Contemplation: Islam and the Crusades", author: "Usama ibn Munqidh, trans. Paul M. Cobb", publisher: "Penguin Classics", year: "2008" },
        { kind: "book", title: "Chronicles of the Crusades: Joinville's Life of Saint Louis", author: "trans. Caroline Smith", publisher: "Penguin Classics", year: "2008" },
        { kind: "edition", title: "Summa Theologiae", author: "Thomas Aquinas, trans. Fathers of the English Dominican Province", publisher: "New Advent", url: "https://www.newadvent.org/summa/" },
        { kind: "website", title: "Internet Medieval Sourcebook", publisher: "Fordham University", url: "https://sourcebooks.fordham.edu/sbook.asp" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "The Making of the Middle Ages", author: "R. W. Southern", publisher: "Yale University Press", year: "1953", note: "The course's classic companion." },
        { kind: "book", title: "Medieval Europe", author: "Chris Wickham", publisher: "Yale University Press", year: "2016" },
        { kind: "book", title: "The Making of Europe: Conquest, Colonization and Cultural Change, 950–1350", author: "Robert Bartlett", publisher: "Princeton University Press", year: "1993" },
        { kind: "book", title: "The Renaissance of the Twelfth Century", author: "Charles Homer Haskins", publisher: "Harvard University Press", year: "1927" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "The Crusades: A History", author: "Jonathan Riley-Smith", publisher: "Bloomsbury", year: "3rd ed., 2014" },
        { kind: "book", title: "The Formation of a Persecuting Society", author: "R. I. Moore", publisher: "Blackwell", year: "2nd ed., 2007" },
        { kind: "book", title: "Montaillou: The Promised Land of Error", author: "Emmanuel Le Roy Ladurie, trans. Barbara Bray", publisher: "Vintage", year: "1979" },
        { kind: "book", title: "Magna Carta", author: "J. C. Holt", publisher: "Cambridge University Press", year: "3rd ed., 2015" },
      ],
    },
  ],
};
