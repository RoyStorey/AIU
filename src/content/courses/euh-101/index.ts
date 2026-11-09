import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const euh101: CourseContent = {
  overview: `Between about 1350 and 1650, Europe was transformed twice over. In the cities of Italy, scholars and artists set out to revive the literature, learning, and art of ancient Greece and Rome, and in doing so created something new: humanism, linear perspective, Brunelleschi's dome, Michelangelo's David, Machiavelli's Prince. Then, in 1517, a German monk protested against the sale of indulgences, and within a generation the unity of Western Christendom, a thousand years old, was broken beyond repair. A century of religious war followed, ending only at Westphalia in 1648.

This course follows both stories and the threads that join them. We begin with the Italian Renaissance: the merchant republics and the Medici, Petrarch and the humanists, the recovery of Greek and Plato, the new art, and the long debate, from Burckhardt to Joan Kelly, over whether a Renaissance happened at all. We turn to the Italian Wars and Machiavelli, the printing press, and the Christian humanism of Erasmus and Thomas More. We follow Luther from the monastery to Worms, the Swiss and radical Reformations, Calvin's Geneva, and the very different Reformation that Henry VIII, Mary, and Elizabeth made in England. And we end with the Catholic renewal of Ignatius, Trent, and Teresa of Ávila, and the wars of religion in France, the Netherlands, and Germany.

Throughout, we read the participants in their own words—Petrarch and Pico, Machiavelli and Erasmus, Luther and the peasants, Calvin and the Anabaptists, Ignatius and Teresa—and weigh the arguments of historians from Burckhardt and Weber to Duffy, MacCulloch, and Roper. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain what the Renaissance humanists believed they were doing, and evaluate the debate over whether the Renaissance marked a turning point in European history.",
    "Analyze Machiavelli's political thought in the context of the Italian Wars, and weigh competing interpretations of The Prince.",
    "Describe the effects of the printing press and the program of Christian humanism, and their relationship to the Reformation.",
    "Explain Luther's theology and the course of the German Reformation, and the reasons for its success.",
    "Compare the Lutheran, Reformed, Anabaptist, Anglican, and Catholic answers to the central questions of the age, including authority, the sacraments, and the relationship of church and state.",
    "Trace the wars of religion and the slow, reluctant emergence of religious coexistence, from the Peace of Augsburg to the Peace of Westphalia.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Prince", author: "Niccolò Machiavelli, trans. W. K. Marriott", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1232" },
        { kind: "edition", title: "The Praise of Folly", author: "Desiderius Erasmus", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/9371" },
        { kind: "edition", title: "Utopia", author: "Thomas More", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2130" },
        { kind: "edition", title: "Project Wittenberg: Works by Martin Luther", publisher: "Concordia Theological Seminary", url: "https://www.projectwittenberg.org/" },
        { kind: "edition", title: "Institutes of the Christian Religion", author: "John Calvin, trans. Henry Beveridge", publisher: "Christian Classics Ethereal Library", url: "https://ccel.org/ccel/calvin/institutes" },
        { kind: "edition", title: "The Spiritual Exercises of St. Ignatius", author: "Ignatius of Loyola, trans. Elder Mullan", publisher: "Christian Classics Ethereal Library", url: "https://ccel.org/ccel/ignatius/exercises" },
        { kind: "website", title: "Internet Modern History Sourcebook: Reformation Europe", publisher: "Fordham University", url: "https://sourcebooks.fordham.edu/mod/modsbook02.asp" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "edition", title: "The Civilization of the Renaissance in Italy", author: "Jacob Burckhardt", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/2074" },
        { kind: "book", title: "The Italian Renaissance: Culture and Society in Italy", author: "Peter Burke", publisher: "Princeton University Press", year: "3rd ed., 2014" },
        { kind: "book", title: "The Reformation: A History", author: "Diarmaid MacCulloch", publisher: "Viking", year: "2004" },
        { kind: "book", title: "Renaissance and Reformation: A Very Short Introduction", author: "Jerry Brotton (Renaissance) and Peter Marshall (Reformation)", publisher: "Oxford University Press", year: "2006 and 2009", note: "Two short introductions in the same series." },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Printing Press as an Agent of Change", author: "Elizabeth L. Eisenstein", publisher: "Cambridge University Press", year: "1979" },
        { kind: "book", title: "The Foundations of Modern Political Thought", author: "Quentin Skinner", publisher: "Cambridge University Press", year: "1978" },
        { kind: "book", title: "The Stripping of the Altars: Traditional Religion in England, 1400–1580", author: "Eamon Duffy", publisher: "Yale University Press", year: "1992" },
        { kind: "book", title: "Martin Luther: Renegade and Prophet", author: "Lyndal Roper", publisher: "Random House", year: "2016" },
        { kind: "book", title: "Trent: What Happened at the Council", author: "John W. O'Malley", publisher: "Harvard University Press", year: "2013" },
        { kind: "book", title: "Europe's Tragedy: A History of the Thirty Years War", author: "Peter H. Wilson", publisher: "Harvard University Press", year: "2009" },
        { kind: "book", title: "The Protestant Ethic and the Spirit of Capitalism", author: "Max Weber, trans. Talcott Parsons", publisher: "Scribner", year: "1930 (German original 1905)" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "Smarthistory: The Renaissance in Italy", publisher: "Smarthistory", url: "https://smarthistory.org/renaissance-in-italy/" },
        { kind: "website", title: "Heilbrunn Timeline of Art History", publisher: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/" },
        { kind: "website", title: "Foxe's Book of Martyrs: Variorum Edition Online", publisher: "Digital Humanities Institute, University of Sheffield", url: "https://www.dhi.ac.uk/foxe/" },
      ],
    },
  ],
};
