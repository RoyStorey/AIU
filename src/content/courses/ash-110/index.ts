import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const ash110: CourseContent = {
  overview: `Japan lies close enough to the Asian mainland to borrow from it and far enough away to choose what to borrow. This course follows the peoples of the Japanese islands from their first potters and rice farmers to the arrival of Commodore Perry's black ships in 1853: how they built a state on the Chinese model and made it their own, how a court of poets and lovers gave way to an age of warriors, and how two and a half centuries of Tokugawa peace produced great cities, a popular culture, and new ways of thinking.

We begin with the Jōmon and Yayoi, Queen Himiko in the Chinese chronicles, the coming of Buddhism, and the Nara state of the Great Buddha and the Kojiki. We enter the Heian court through The Tale of Genji, The Pillow Book, and the Kokinshū, with Ivan Morris's World of the Shining Prince as our guide. We follow the Taira and the Minamoto into the Genpei War, the Kamakura shogunate, the Mongol invasions, and the new Buddhism of Hōnen, Shinran, Nichiren, and Zen; the Ashikaga age of Noh, tea, and ink painting and the century of the Warring States; the three unifiers and the coming of the Europeans; and the Tokugawa world of samurai bureaucrats, merchants, kabuki, Bashō, and the scholars of National and Dutch Learning.

Throughout, we read the Japanese sources in translation—chronicles and law codes, poems and diaries, war tales and edicts, travel journals and treatises—and weigh the arguments of historians from Kuroda Toshio and Jeffrey Mass to Mary Elizabeth Berry and Ronald Toby. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Describe the prehistoric cultures of the Japanese islands and explain how the Yamato and Nara courts built a state by adapting Chinese and Korean models.",
    "Analyze the court culture of Heian Japan through its literature, and explain the political system of regents and retired emperors that sustained it.",
    "Explain the rise of the warrior class and the dual system of court and shogunate, and assess the significance of the Mongol invasions and the new Buddhism of the Kamakura period.",
    "Trace the collapse of central authority in the Muromachi and Warring States periods, the culture that flourished amid it, and the unification of Japan by Nobunaga, Hideyoshi, and Ieyasu.",
    "Evaluate the Tokugawa order—its institutions, society, foreign relations, and culture—and the debates over whether it was a closed and stagnant regime or the foundation of modern Japan.",
    "Read Japanese primary sources critically, attending to genre, audience, and the distance between events and their telling.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "Sources of Japanese Tradition, Volume 1: From Earliest Times to 1600", author: "Wm. Theodore de Bary, Donald Keene, George Tanabe, and Paul Varley, eds.", publisher: "Columbia University Press", year: "2nd ed., 2001", note: "The course's main source collection." },
        { kind: "book", title: "Sources of Japanese Tradition, Volume 2: 1600 to 2000", author: "Wm. Theodore de Bary, Carol Gluck, and Arthur E. Tiedemann, eds.", publisher: "Columbia University Press", year: "2nd ed., 2005", note: "Part 1 covers the Tokugawa period." },
        { kind: "edition", title: "The Kojiki: Records of Ancient Matters", author: "trans. Basil Hall Chamberlain", publisher: "Internet Sacred Text Archive", url: "https://sacred-texts.com/shi/kj/index.htm" },
        { kind: "book", title: "The Tale of Genji", author: "Murasaki Shikibu, trans. Royall Tyler", publisher: "Viking", year: "2001" },
        { kind: "book", title: "The Pillow Book", author: "Sei Shōnagon, trans. Meredith McKinney", publisher: "Penguin Classics", year: "2006" },
        { kind: "book", title: "The Tale of the Heike", author: "trans. Helen Craig McCullough", publisher: "Stanford University Press", year: "1988" },
        { kind: "book", title: "The Narrow Road to the Deep North and Other Travel Sketches", author: "Matsuo Bashō, trans. Nobuyuki Yuasa", publisher: "Penguin Classics", year: "1966" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "The World of the Shining Prince: Court Life in Ancient Japan", author: "Ivan Morris", publisher: "Alfred A. Knopf", year: "1964", note: "The course's guide to the Heian court." },
        { kind: "book", title: "A History of Japan", author: "Conrad Totman", publisher: "Blackwell", year: "2nd ed., 2005" },
        { kind: "book", title: "The Making of Modern Japan", author: "Marius B. Jansen", publisher: "Belknap Press of Harvard University Press", year: "2000", note: "The standard account of the Tokugawa period and after." },
        { kind: "book", title: "The World Turned Upside Down: Medieval Japanese Society", author: "Pierre François Souyri, trans. Käthe Roth", publisher: "Columbia University Press", year: "2001" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Emergence of Japanese Kingship", author: "Joan R. Piggott", publisher: "Stanford University Press", year: "1997" },
        { kind: "book", title: "Samurai, Warfare and the State in Early Medieval Japan", author: "Karl F. Friday", publisher: "Routledge", year: "2004" },
        { kind: "book", title: "In Little Need of Divine Intervention: Takezaki Suenaga's Scrolls of the Mongol Invasions of Japan", author: "Thomas D. Conlan", publisher: "Cornell East Asia Series", year: "2001" },
        { kind: "book", title: "The Nobility of Failure: Tragic Heroes in the History of Japan", author: "Ivan Morris", publisher: "Holt, Rinehart and Winston", year: "1975" },
        { kind: "book", title: "Hideyoshi", author: "Mary Elizabeth Berry", publisher: "Harvard University Press", year: "1982" },
        { kind: "book", title: "The Christian Century in Japan, 1549–1650", author: "C. R. Boxer", publisher: "University of California Press", year: "1951" },
        { kind: "book", title: "State and Diplomacy in Early Modern Japan", author: "Ronald P. Toby", publisher: "Princeton University Press", year: "1984" },
        { kind: "book", title: "Tokugawa Ideology: Early Constructs, 1570–1680", author: "Herman Ooms", publisher: "Princeton University Press", year: "1985" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "Heilbrunn Timeline of Art History: Japan", publisher: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/hd/heia/hd_heia.htm", note: "Essays on Japanese art from the Kofun period to the Edo period, starting with the Heian." },
        { kind: "website", title: "Mongol Invasions of Japan, 1274 and 1281", publisher: "Bowdoin College", url: "https://learn.bowdoin.edu/mongol-invasions/", note: "Takezaki Suenaga's scrolls in an interactive viewer." },
        { kind: "website", title: "Visualizing Cultures", publisher: "MIT", url: "https://visualizingcultures.mit.edu/black_ships_and_samurai/index.html", note: "Image-driven units on Japanese history, beginning with Perry's arrival." },
        { kind: "website", title: "Asia for Educators: Japan", publisher: "Columbia University", url: "http://afe.easia.columbia.edu/" },
      ],
    },
  ],
};
