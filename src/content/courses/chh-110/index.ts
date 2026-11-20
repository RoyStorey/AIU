import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const chh110: CourseContent = {
  overview: `Between the end of Roman rule in the West and the eve of the Reformation, a thousand years of history made the Latin church the central institution of European life. Monks prayed, farmed, copied books, and kept learning alive. Missionaries carried the faith to the English, the Germans, and the peoples of the north and east. Popes allied with Frankish kings, then struggled with emperors for the freedom of the church, and built a papal monarchy. Crusaders marched east, heresies rose and were suppressed, and the friars took the gospel into the streets of the new towns. In the late Middle Ages, plague, schism, and scandal shook the church, while ordinary Christians lived a rich and vigorous faith in their parishes, guilds, and shrines.

This course follows that story in five lessons: the monks and the Rule of Benedict; Gregory the Great, the conversion of Europe, and Charlemagne; the Gregorian reform, the investiture conflict, and the age of Innocent III; the crusades, the Cathars and the inquisition, the Jews of medieval Christendom, and Francis, Clare, and Dominic; and the parish, the mystics, Avignon, the Black Death, the Great Schism, Wycliffe and Hus, and the eve of the Reformation.

The course reads the sources—the Rule of Benedict, Bede, Einhard, the *Dictatus Papae*, the canons of the Fourth Lateran Council, the accounts of Clermont, the writings of Francis, *Unam Sanctam*, *Haec Sancta*, and the *Imitation of Christ*—in public-domain translations wherever possible, alongside the work of modern historians. It does not hide the church's failures: the crusaders' massacres, the persecution of heretics and Jews, the scandals of the papacy. Nor does it neglect its saints. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain the origins and ideals of Western monasticism, the Rule of Benedict, and the monastic reforms of Cluny and Cîteaux, and assess the monasteries' role in medieval society and learning.",
    "Trace the conversion of the peoples of Europe and the alliance of the papacy with the Franks, from Gregory the Great to Charlemagne and the conversions of the north and east.",
    "Analyze the Gregorian reform and the investiture conflict, and describe the papal monarchy of Innocent III and the Fourth Lateran Council.",
    "Describe the crusades, the military orders, the Cathar and Waldensian movements, the Albigensian Crusade and the inquisition, and the situation of Jews in medieval Christendom, evaluating historians' interpretations.",
    "Explain the rise of the Franciscans and Dominicans and the forms of late medieval piety, including the parish, the sacraments, saints, pilgrimage, purgatory, the mystics, and the Devotio Moderna.",
    "Assess the crises of the late medieval church—Anagni, Avignon, the Black Death, the Great Schism, conciliarism, Wycliffe and Hus—and weigh competing judgments of its condition on the eve of the Reformation.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "RB 1980: The Rule of St. Benedict in Latin and English with Notes", author: "ed. Timothy Fry", publisher: "Liturgical Press", year: "1981" },
        { kind: "book", title: "Ecclesiastical History of the English People", author: "Bede, trans. Leo Sherley-Price, rev. R. E. Latham", publisher: "Penguin Classics", year: "rev. ed., 1990" },
        { kind: "book", title: "Select Historical Documents of the Middle Ages", author: "ed. and trans. Ernest F. Henderson", publisher: "George Bell and Sons", year: "1892", note: "In the public domain." },
        { kind: "book", title: "The Crisis of Church and State, 1050–1300", author: "Brian Tierney", publisher: "Prentice-Hall; University of Toronto Press", year: "1964", note: "Documents with commentary on the papacy and the empire." },
      ],
    },
    {
      heading: "Histories",
      items: [
        { kind: "book", title: "Western Society and the Church in the Middle Ages", author: "R. W. Southern", publisher: "Penguin", year: "1970" },
        { kind: "book", title: "Medieval Monasticism: Forms of Religious Life in Western Europe in the Middle Ages", author: "C. H. Lawrence", publisher: "Longman; Routledge", year: "1984; 4th ed., 2015" },
        { kind: "book", title: "The Papal Monarchy: The Western Church from 1050 to 1250", author: "Colin Morris", publisher: "Oxford University Press", year: "1989" },
        { kind: "book", title: "The Rise of Western Christendom: Triumph and Diversity, A.D. 200–1000", author: "Peter Brown", publisher: "Blackwell", year: "1996; 10th anniversary ed., 2013" },
        { kind: "book", title: "The Story of Christianity, vol. 1", author: "Justo L. González", publisher: "HarperOne", year: "rev. ed., 2010" },
      ],
    },
    {
      heading: "Special Studies",
      items: [
        { kind: "book", title: "The Crusades: A History", author: "Jonathan Riley-Smith", publisher: "Yale University Press; Bloomsbury", year: "1987; 3rd ed., 2014" },
        { kind: "book", title: "The Formation of a Persecuting Society", author: "R. I. Moore", publisher: "Blackwell", year: "1987; 2nd ed., 2007" },
        { kind: "book", title: "The Stripping of the Altars: Traditional Religion in England, c. 1400–c. 1580", author: "Eamon Duffy", publisher: "Yale University Press", year: "1992; 2nd ed., 2005" },
        { kind: "book", title: "Foundations of the Conciliar Theory", author: "Brian Tierney", publisher: "Cambridge University Press", year: "1955" },
      ],
    },
  ],
};
