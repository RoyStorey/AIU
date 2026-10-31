import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const ash101: CourseContent = {
  overview: `For more than three thousand years, the peoples of China built and rebuilt one of the world's great civilizations: a written language read across an empire of many tongues, a tradition of thought that argued over how human beings should live and be governed, and a state that, broken again and again, was always put back together. This course follows that story from the first farmers of the Yellow River and the Yangzi to the eve of the Opium War.

We begin with the Neolithic cultures and the Shang kings who consulted their ancestors on oracle bones, and the Zhou who claimed the Mandate of Heaven. We read Confucius, Mencius, Laozi, Zhuangzi, Xunzi, and Han Fei, the philosophers of an age of war. We watch the First Emperor unify China and his dynasty fall in fifteen years, and the Han build an empire that lasted four centuries. We follow Buddhism across the deserts, the Tang to the height of its cosmopolitan splendor and the depths of rebellion, and the Song through a commercial revolution and the making of Neo-Confucianism. And we end with three conquest and restoration dynasties—the Mongol Yuan, the Ming of Zheng He and Matteo Ricci, and the Manchu Qing that doubled the empire and received, and refused, the British embassy of 1793.

Throughout, we read the Chinese sources in translation—oracle bones and bronze inscriptions, the Classics and the philosophers, Sima Qian and the poets, memorials, commentaries, and travelers' accounts—and weigh the arguments of historians from Wang Guowei and Gu Jiegang to Mark Edward Lewis, Timothy Brook, and Kenneth Pomeranz. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Describe the land and the Neolithic and Bronze Age cultures of early China, and explain how historians combine excavated evidence with transmitted texts.",
    "Explain the idea of the Mandate of Heaven and its long influence on Chinese political thought and historical writing.",
    "Compare the major thinkers of the Warring States—Confucius, Mozi, Mencius, Laozi, Zhuangzi, Xunzi, and Han Fei—and their answers to the problem of order.",
    "Analyze how the Qin and Han built a unified empire, and how Confucianism, the bureaucracy, and the writing of history became pillars of the imperial state.",
    "Trace the coming of Buddhism, the cosmopolitan Tang, the Song commercial revolution, and the rise of the examination elite and Neo-Confucianism.",
    "Evaluate how the Yuan, Ming, and Qing governed China and engaged the wider world, and assess modern interpretations of late imperial China's place in world history.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Analects of Confucius", author: "trans. James Legge", publisher: "Chinese Text Project", url: "https://ctext.org/analects", note: "Chinese and English side by side, with the Mencius, the Daodejing, the Zhuangzi, and the Han Feizi on the same site." },
        { kind: "edition", title: "The Book of Poetry (Shijing)", author: "trans. James Legge", publisher: "Chinese Text Project", url: "https://ctext.org/book-of-poetry" },
        { kind: "edition", title: "Records of the Grand Historian (Shiji)", author: "Sima Qian", publisher: "Chinese Text Project", url: "https://ctext.org/shiji" },
        { kind: "edition", title: "The Travels of Marco Polo, Volume 2", author: "Marco Polo, trans. Henry Yule", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/12410" },
        { kind: "book", title: "Sources of Chinese Tradition, Volume 1: From Earliest Times to 1600", author: "Wm. Theodore de Bary and Irene Bloom, eds.", publisher: "Columbia University Press", year: "2nd ed., 1999", note: "The standard anthology of Chinese thought in translation." },
        { kind: "book", title: "Chinese Civilization: A Sourcebook", author: "Patricia Buckley Ebrey, ed.", publisher: "Free Press", year: "2nd ed., 1993", note: "Documents of social, family, and religious life." },
        { kind: "book", title: "Records of the Grand Historian", author: "Sima Qian, trans. Burton Watson", publisher: "Columbia University Press", year: "rev. ed., 1993", note: "Three volumes: Qin, Han I, and Han II." },
        { kind: "book", title: "Analects, with Selections from Traditional Commentaries", author: "Confucius, trans. Edward Slingerland", publisher: "Hackett", year: "2003" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "The Cambridge Illustrated History of China", author: "Patricia Buckley Ebrey", publisher: "Cambridge University Press", year: "2nd ed., 2010", note: "The course's main survey." },
        { kind: "book", title: "History of Imperial China (6 vols.)", author: "Timothy Brook, ed.", publisher: "Belknap Press of Harvard University Press", year: "2007–2010", note: "Mark Edward Lewis on the Qin and Han, the age of division, and the Tang; Dieter Kuhn on the Song; Timothy Brook on the Yuan and Ming; William T. Rowe on the Qing." },
        { kind: "book", title: "Early China: A Social and Cultural History", author: "Li Feng", publisher: "Cambridge University Press", year: "2013" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Disputers of the Tao: Philosophical Argument in Ancient China", author: "A. C. Graham", publisher: "Open Court", year: "1989" },
        { kind: "book", title: "Sources of Shang History: The Oracle-Bone Inscriptions of Bronze Age China", author: "David N. Keightley", publisher: "University of California Press", year: "1978" },
        { kind: "book", title: "The Buddhist Conquest of China", author: "Erik Zürcher", publisher: "E. J. Brill", year: "1959" },
        { kind: "book", title: "Teachers of the Inner Chambers: Women and Culture in Seventeenth-Century China", author: "Dorothy Ko", publisher: "Stanford University Press", year: "1994" },
        { kind: "book", title: "The Manchu Way: The Eight Banners and Ethnic Identity in Late Imperial China", author: "Mark C. Elliott", publisher: "Stanford University Press", year: "2001" },
        { kind: "book", title: "China Marches West: The Qing Conquest of Central Eurasia", author: "Peter C. Perdue", publisher: "Belknap Press of Harvard University Press", year: "2005" },
        { kind: "book", title: "Cherishing Men from Afar: Qing Guest Ritual and the Macartney Embassy of 1793", author: "James L. Hevia", publisher: "Duke University Press", year: "1995" },
        { kind: "book", title: "The Great Divergence: China, Europe, and the Making of the Modern World Economy", author: "Kenneth Pomeranz", publisher: "Princeton University Press", year: "2000" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "Asia for Educators", publisher: "Columbia University", url: "http://afe.easia.columbia.edu/", note: "Readings, primary sources, and visual guides to Chinese history." },
        { kind: "website", title: "Chinese Text Project", publisher: "Donald Sturgeon", url: "https://ctext.org/", note: "Pre-modern Chinese texts with translations, searchable in Chinese and English." },
        { kind: "website", title: "Heilbrunn Timeline of Art History: China", publisher: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/toah/hd/shzh/hd_shzh.htm", note: "Essays on Chinese art from the Bronze Age to the Qing, starting with the Shang and Zhou." },
        { kind: "website", title: "Stanford Encyclopedia of Philosophy: Chinese Philosophy", publisher: "Stanford University", url: "https://plato.stanford.edu/entries/confucius/", note: "Scholarly entries on Confucius, Mencius, Mohism, Daoism, Xunzi, Han Feizi, Zhu Xi, and Wang Yangming." },
      ],
    },
  ],
};
