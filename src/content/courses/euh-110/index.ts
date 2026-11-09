import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const euh110: CourseContent = {
  overview: `In 1648, at the end of the Thirty Years' War, Europe was a continent of exhausted monarchies, still arguing about God and still ruled by kings who claimed to govern by divine right. By 1914, it ruled most of the world, its factories and railways had remade human life, and its scientists had explained the motions of the heavens. Thirty years later, it lay in ruins, after two world wars, the rise of totalitarian dictatorships, and the Holocaust. This course follows that astonishing and terrible story.

We begin with the age of absolutism and its alternatives: Louis XIV's Versailles, England's revolutions and Locke's case for government by consent, Peter the Great's Russia, and the Scientific Revolution from Copernicus to Newton. We trace the Enlightenment and the French Revolution, from the Rights of Man to the Terror, Haiti, and Napoleon. We study the Industrial Revolution and the ideologies it provoked—liberalism, conservatism, socialism, and nationalism—the revolutions of 1848, and the unification of Italy and Germany. We follow Europe to the height of its power, through the Scramble for Africa and the crisis of certainty brought by Darwin, Nietzsche, and Freud, and into the catastrophe of 1914–1918 and the Russian Revolution. And we end with the age of catastrophe: Versailles, Fascism, Stalinism, Nazism, appeasement, the Second World War, and the Holocaust.

Throughout, we read the participants in their own words—Hobbes and Locke, Kant and Rousseau, Marx and Mill, Bismarck and Lenin, Keynes and Churchill—and weigh the arguments of historians from Hobsbawm to Clark, Kershaw, and MacMillan. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Compare absolutist and constitutional answers to the crisis of the seventeenth century, and explain the significance of the Scientific Revolution.",
    "Analyze the ideas of the Enlightenment and the course and consequences of the French and Haitian Revolutions and the Napoleonic era.",
    "Explain the causes and social consequences of the Industrial Revolution, and the rise of liberalism, conservatism, socialism, and nationalism.",
    "Trace the unification of Italy and Germany and the transformation of European power after 1871.",
    "Evaluate the causes of the New Imperialism and the First World War, and the course and significance of the Russian Revolution.",
    "Explain the collapse of liberal democracy between the wars, the nature of Fascism, Stalinism, and Nazism, and the origins and course of the Second World War and the Holocaust.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "Leviathan", author: "Thomas Hobbes", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/3207" },
        { kind: "edition", title: "Second Treatise of Government", author: "John Locke", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/7370" },
        { kind: "edition", title: "Reflections on the Revolution in France", author: "Edmund Burke", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/15679" },
        { kind: "edition", title: "The Communist Manifesto", author: "Karl Marx and Friedrich Engels", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/61" },
        { kind: "edition", title: "On Liberty", author: "John Stuart Mill", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/34901" },
        { kind: "edition", title: "The Economic Consequences of the Peace", author: "John Maynard Keynes", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/15776" },
        { kind: "website", title: "Internet Modern History Sourcebook", publisher: "Fordham University", url: "https://sourcebooks.fordham.edu/mod/modsbook.asp" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "A History of Modern Europe", author: "John Merriman", publisher: "W. W. Norton", year: "3rd ed., 2009", note: "Two volumes; the course's main survey." },
        { kind: "book", title: "The Age of Revolution, 1789–1848", author: "Eric Hobsbawm", publisher: "Vintage", year: "1962", note: "With The Age of Capital and The Age of Empire, Hobsbawm's classic trilogy on the long nineteenth century." },
        { kind: "book", title: "Age of Extremes: The Short Twentieth Century, 1914–1991", author: "Eric Hobsbawm", publisher: "Pantheon", year: "1994" },
        { kind: "book", title: "The Oxford History of the French Revolution", author: "William Doyle", publisher: "Oxford University Press", year: "3rd ed., 2018" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Great Divergence: China, Europe, and the Making of the Modern World Economy", author: "Kenneth Pomeranz", publisher: "Princeton University Press", year: "2000" },
        { kind: "book", title: "The Making of the English Working Class", author: "E. P. Thompson", publisher: "Vintage", year: "1963" },
        { kind: "book", title: "The Sleepwalkers: How Europe Went to War in 1914", author: "Christopher Clark", publisher: "Harper", year: "2012" },
        { kind: "book", title: "Paris 1919: Six Months That Changed the World", author: "Margaret MacMillan", publisher: "Random House", year: "2001" },
        { kind: "book", title: "Hitler, 1889–1936: Hubris", author: "Ian Kershaw", publisher: "W. W. Norton", year: "1998" },
        { kind: "book", title: "Bloodlands: Europe between Hitler and Stalin", author: "Timothy Snyder", publisher: "Basic Books", year: "2010" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "lecture", title: "European Civilization, 1648–1945 (HIST 202)", author: "John Merriman", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/history/hist-202", note: "Twenty-four lectures, free to watch or read." },
        { kind: "website", title: "Liberty, Equality, Fraternity: Exploring the French Revolution", publisher: "George Mason University", url: "https://revolution.chnm.org/" },
        { kind: "website", title: "Holocaust Encyclopedia", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/" },
      ],
    },
  ],
};
