import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const euh301: CourseContent = {
  overview: `Between 1917 and 1945, Europe produced three regimes that claimed the right to direct every part of human life: Lenin's and Stalin's Soviet Union, Mussolini's Italy, and Hitler's Germany. They came to power in different ways, served different ideologies, and pursued different ends, but they shared an ambition without precedent—to remake society and human beings themselves through a single party, an all-explaining ideology, the mobilization of the masses, and terror. Contemporaries called this new kind of rule **totalitarian**. Together these regimes killed tens of millions of people, and their war consumed the continent.

This course asks how such regimes became possible in the most advanced civilization in the world, how they ruled, why so many people supported or served them, and what their history teaches. We begin with the crisis of liberal Europe after the First World War, study each regime in turn through its own documents and the best modern scholarship, and end with the war of annihilation, the Holocaust, and the long argument over the meaning of the age. Each lesson takes about two hours, with further reading and recorded lectures on the reference shelf.`,
  objectives: [
    "Explain how the First World War, the collapse of empires, and the peace settlement undermined liberal democracy in interwar Europe.",
    "Compare how Mussolini, Lenin and Stalin, and Hitler came to power and consolidated their regimes.",
    "Analyze the roles of ideology, terror, propaganda, and popular consent or acquiescence in each regime.",
    "Describe the course and character of the Second World War in Europe, including occupation, the war of annihilation in the East, and the Holocaust.",
    "Evaluate the concept of totalitarianism and the major historiographical debates about these regimes.",
    "Interpret primary sources critically, attending to their authors, audiences, language, and silences.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Economic Consequences of the Peace", author: "John Maynard Keynes", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/15776", note: "The most influential contemporary critique of Versailles (1919)." },
        { kind: "website", title: "German History in Documents and Images: Nazi Germany, 1933–1945", publisher: "German Historical Institute, Washington, DC", url: "https://germanhistorydocs.org/en/nazi-germany-1933-1945", note: "Hundreds of documents and images in English translation." },
        { kind: "website", title: "Khrushchev's Secret Speech (1956)", publisher: "Wilson Center Digital Archive", url: "https://digitalarchive.wilsoncenter.org/document/115995" },
        { kind: "website", title: "The Nazi–Soviet Non-Aggression Pact and Secret Protocol", publisher: "Internet Modern History Sourcebook, Fordham University", url: "https://sourcebooks.web.fordham.edu/mod/1939pact.asp" },
        { kind: "book", title: "If This Is a Man (Survival in Auschwitz)", author: "Primo Levi, trans. Stuart Woolf", publisher: "Orion Press", year: "1959 (Italian original 1947)" },
        { kind: "book", title: "I Will Bear Witness: The Diaries of Victor Klemperer, 1933–1945", author: "Victor Klemperer, trans. Martin Chalmers", publisher: "Random House", year: "1998–1999", note: "The diary of a Jewish professor in Dresden: the most detailed day-by-day record of life in Nazi Germany." },
        { kind: "book", title: "Journey into the Whirlwind", author: "Eugenia Ginzburg", publisher: "Harcourt, Brace & World", year: "1967", note: "A communist's memoir of arrest in 1937 and eighteen years in the Gulag." },
      ],
    },
    {
      heading: "Surveys and Syntheses",
      items: [
        { kind: "book", title: "Dark Continent: Europe's Twentieth Century", author: "Mark Mazower", publisher: "Alfred A. Knopf", year: "1998", note: "Argues that democracy was not Europe's natural condition but one contender among several." },
        { kind: "book", title: "To Hell and Back: Europe, 1914–1949", author: "Ian Kershaw", publisher: "Viking", year: "2015" },
        { kind: "book", title: "The Age of Extremes: A History of the World, 1914–1991", author: "Eric Hobsbawm", publisher: "Pantheon", year: "1994" },
        { kind: "book", title: "The Vanquished: Why the First World War Failed to End", author: "Robert Gerwarth", publisher: "Farrar, Straus and Giroux", year: "2016" },
      ],
    },
    {
      heading: "Fascist Italy",
      items: [
        { kind: "book", title: "Mussolini's Italy: Life Under the Fascist Dictatorship, 1915–1945", author: "R. J. B. Bosworth", publisher: "Penguin Press", year: "2006" },
        { kind: "book", title: "The Anatomy of Fascism", author: "Robert O. Paxton", publisher: "Alfred A. Knopf", year: "2004" },
        { kind: "book", title: "Fascist Voices: An Intimate History of Mussolini's Italy", author: "Christopher Duggan", publisher: "Oxford University Press", year: "2013" },
        { kind: "book", title: "The Sacralization of Politics in Fascist Italy", author: "Emilio Gentile", publisher: "Harvard University Press", year: "1996" },
      ],
    },
    {
      heading: "The Soviet Union",
      items: [
        { kind: "book", title: "The Russian Revolution", author: "Sheila Fitzpatrick", publisher: "Oxford University Press", year: "4th ed., 2017" },
        { kind: "book", title: "Stalin: Paradoxes of Power, 1878–1928", author: "Stephen Kotkin", publisher: "Penguin Press", year: "2014", note: "With its sequel, Stalin: Waiting for Hitler, 1929–1941 (2017)." },
        { kind: "book", title: "Red Famine: Stalin's War on Ukraine", author: "Anne Applebaum", publisher: "Doubleday", year: "2017" },
        { kind: "book", title: "Gulag: A History", author: "Anne Applebaum", publisher: "Doubleday", year: "2003", note: "Winner of the Pulitzer Prize for General Nonfiction." },
        { kind: "book", title: "The Great Terror: A Reassessment", author: "Robert Conquest", publisher: "Oxford University Press", year: "1990" },
        { kind: "book", title: "Everyday Stalinism", author: "Sheila Fitzpatrick", publisher: "Oxford University Press", year: "1999" },
      ],
    },
    {
      heading: "Nazi Germany",
      items: [
        { kind: "book", title: "The Coming of the Third Reich", author: "Richard J. Evans", publisher: "Penguin Press", year: "2004", note: "With The Third Reich in Power (2005) and The Third Reich at War (2009)." },
        { kind: "book", title: "Hitler: A Biography", author: "Ian Kershaw", publisher: "W. W. Norton", year: "2008" },
        { kind: "book", title: "The Wages of Destruction: The Making and Breaking of the Nazi Economy", author: "Adam Tooze", publisher: "Viking", year: "2007" },
        { kind: "book", title: "Backing Hitler: Consent and Coercion in Nazi Germany", author: "Robert Gellately", publisher: "Oxford University Press", year: "2001" },
      ],
    },
    {
      heading: "War, Occupation, and Genocide",
      items: [
        { kind: "book", title: "Bloodlands: Europe Between Hitler and Stalin", author: "Timothy Snyder", publisher: "Basic Books", year: "2010" },
        { kind: "book", title: "Hitler's Empire: How the Nazis Ruled Europe", author: "Mark Mazower", publisher: "Penguin Press", year: "2008" },
        { kind: "book", title: "The Years of Extermination: Nazi Germany and the Jews, 1939–1945", author: "Saul Friedländer", publisher: "HarperCollins", year: "2007", note: "Winner of the Pulitzer Prize for General Nonfiction." },
        { kind: "book", title: "Ordinary Men: Reserve Police Battalion 101 and the Final Solution in Poland", author: "Christopher R. Browning", publisher: "HarperCollins", year: "1992" },
        { kind: "book", title: "Vichy France: Old Guard and New Order, 1940–1944", author: "Robert O. Paxton", publisher: "Alfred A. Knopf", year: "1972" },
        { kind: "book", title: "Neighbors: The Destruction of the Jewish Community in Jedwabne, Poland", author: "Jan T. Gross", publisher: "Princeton University Press", year: "2001" },
      ],
    },
    {
      heading: "Interpretation and Literature",
      items: [
        { kind: "book", title: "The Origins of Totalitarianism", author: "Hannah Arendt", publisher: "Harcourt, Brace", year: "1951" },
        { kind: "book", title: "Eichmann in Jerusalem: A Report on the Banality of Evil", author: "Hannah Arendt", publisher: "Viking", year: "1963" },
        { kind: "book", title: "Stalinism and Nazism: Dictatorships in Comparison", author: "Ian Kershaw and Moshe Lewin, eds.", publisher: "Cambridge University Press", year: "1997" },
        { kind: "book", title: "Life and Fate", author: "Vasily Grossman, trans. Robert Chandler", publisher: "Harper & Row", year: "1985", note: "The great novel of Stalingrad and of the two totalitarian systems." },
        { kind: "book", title: "Darkness at Noon", author: "Arthur Koestler", publisher: "Macmillan", year: "1941" },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "lecture", title: "HIST 202: European Civilization, 1648–1945", author: "John Merriman", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/history/hist-202", note: "Includes lectures on the Great War, Stalinism, fascists, and collaboration and resistance." },
        { kind: "lecture", title: "The Making of Modern Ukraine", author: "Timothy Snyder", publisher: "Yale University", url: "https://online.yale.edu/courses/making-modern-ukraine" },
        { kind: "audio", title: "Revolutions (podcast), Season 10: The Russian Revolution", author: "Mike Duncan", url: "https://www.revolutionspodcast.com" },
        { kind: "video", title: "Holocaust Explainer Videos", publisher: "United States Holocaust Memorial Museum", url: "https://www.ushmm.org/learn/holocaust/holocaust-explainer-videos" },
        { kind: "video", title: "Fortunoff Video Archive for Holocaust Testimonies", publisher: "Yale University Library", url: "https://fortunoff.library.yale.edu" },
        { kind: "website", title: "Archivio Storico Luce", publisher: "Istituto Luce", url: "https://www.archivioluce.com", note: "Fascist Italy's newsreels." },
      ],
    },
    {
      heading: "Online Resources",
      items: [
        { kind: "website", title: "Holocaust Encyclopedia", publisher: "United States Holocaust Memorial Museum", url: "https://encyclopedia.ushmm.org/content/en/article/wannsee-conference-and-the-final-solution", note: "Authoritative articles, documents, maps, and photographs; this link opens its article on Wannsee." },
        { kind: "website", title: "Wilson Center Digital Archive", url: "https://digitalarchive.wilsoncenter.org/document/115995", note: "Declassified documents on Soviet and Cold War history." },
        { kind: "website", title: "Internet Modern History Sourcebook", publisher: "Fordham University", url: "https://sourcebooks.web.fordham.edu/mod/1939pact.asp", note: "Primary sources on modern European history." },
      ],
    },
  ],
};
