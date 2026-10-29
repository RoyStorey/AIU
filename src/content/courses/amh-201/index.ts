import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const amh201: CourseContent = {
  overview: `In 1789 the United States was a fragile experiment: four million people along the Atlantic coast, a new and untested Constitution, an empty treasury, and no precedent for a republic on such a scale. By 1848 it was a continental nation of over twenty million, stretching to the Pacific, with a booming market economy, the broadest white male suffrage in the world, mass political parties, and a ferment of religion and reform. It was also a nation built on the dispossession of Native peoples and the labor of millions of enslaved African Americans, and more deeply divided than its founders had ever imagined.

This course follows that transformation. We begin with Washington's government, Hamilton's financial program, the rise of the first parties, and the "revolution of 1800." We follow Jefferson's republic through the Louisiana Purchase, the War of 1812, the Marshall Court, and the Missouri crisis. We study the market revolution, the Second Great Awakening, and the age of reform, including the first women's rights movement. We weigh the democracy of the age of Jackson against Indian Removal and the Trail of Tears. And we end with the Cotton Kingdom, the abolitionists, Manifest Destiny, and the war with Mexico, which made slavery in the West the question that would break the Union.

Throughout, we read the founders, the reformers, the enslaved, and the dispossessed in their own words, and weigh the arguments of historians from Charles Beard and Arthur Schlesinger to Gordon Wood, Daniel Walker Howe, and Sean Wilentz. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain how the Constitution became a working government in the 1790s, and how and why the first party system arose.",
    "Analyze the Jeffersonian republic's expansion, its wars, and the constitutional nationalism of the Marshall Court, and explain the significance of the Missouri crisis.",
    "Describe the market and communications revolutions, the Second Great Awakening, and the reform movements they produced, including the first women's rights movement.",
    "Assess Jacksonian democracy, including the expansion of white male suffrage, the Bank War, nullification, and Indian Removal.",
    "Explain the growth of the Cotton Kingdom, the rise of abolitionism and the proslavery argument, and how Manifest Destiny and the Mexican War made slavery's expansion the central political question.",
    "Evaluate major interpretations of the early republic—economic, ideological, ethnocultural, market, and racial—and use primary sources to construct arguments of your own.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "website", title: "Founders Online", publisher: "National Archives", url: "https://founders.archives.gov/", note: "The papers of Washington, Hamilton, Jefferson, Madison, and the Adamses." },
        { kind: "edition", title: "Democracy in America, Volume 1", author: "Alexis de Tocqueville; trans. Henry Reeve", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/815" },
        { kind: "edition", title: "Democracy in America, Volume 2", author: "Alexis de Tocqueville; trans. Henry Reeve", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/816" },
        { kind: "edition", title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/23" },
        { kind: "website", title: "Journals of the Lewis and Clark Expedition", author: "Gary E. Moulton, ed.", publisher: "University of Nebraska–Lincoln", url: "https://lewisandclarkjournals.unl.edu" },
        { kind: "website", title: "Walker's Appeal, in Four Articles", author: "David Walker", publisher: "Documenting the American South", url: "https://docsouth.unc.edu/nc/walker/menu.html" },
        { kind: "website", title: "Washington's Farewell Address, 1796", publisher: "The Avalon Project, Yale Law School", url: "https://avalon.law.yale.edu/18th_century/washing.asp" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "Empire of Liberty: A History of the Early Republic, 1789–1815", author: "Gordon S. Wood", publisher: "Oxford University Press", year: "2009", note: "The Oxford History volume on the Federalist and Jeffersonian years." },
        { kind: "book", title: "What Hath God Wrought: The Transformation of America, 1815–1848", author: "Daniel Walker Howe", publisher: "Oxford University Press", year: "2007", note: "The Oxford History volume, critical of Jackson and sympathetic to the Whigs." },
        { kind: "book", title: "The Rise of American Democracy: Jefferson to Lincoln", author: "Sean Wilentz", publisher: "W. W. Norton", year: "2005", note: "A sweeping political history, sympathetic to the Jacksonians." },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Age of Federalism", author: "Stanley Elkins and Eric McKitrick", publisher: "Oxford University Press", year: "1993" },
        { kind: "book", title: "Affairs of Honor: National Politics in the New Republic", author: "Joanne B. Freeman", publisher: "Yale University Press", year: "2001" },
        { kind: "book", title: "The Civil War of 1812: American Citizens, British Subjects, Irish Rebels, and Indian Allies", author: "Alan Taylor", publisher: "Alfred A. Knopf", year: "2010" },
        { kind: "book", title: "The Market Revolution: Jacksonian America, 1815–1846", author: "Charles Sellers", publisher: "Oxford University Press", year: "1991" },
        { kind: "book", title: "The Age of Jackson", author: "Arthur M. Schlesinger Jr.", publisher: "Little, Brown", year: "1945" },
        { kind: "book", title: "Soul by Soul: Life inside the Antebellum Slave Market", author: "Walter Johnson", publisher: "Harvard University Press", year: "1999" },
        { kind: "book", title: "Roll, Jordan, Roll: The World the Slaves Made", author: "Eugene D. Genovese", publisher: "Pantheon", year: "1974" },
        { kind: "book", title: "A Wicked War: Polk, Clay, Lincoln, and the 1846 U.S. Invasion of Mexico", author: "Amy S. Greenberg", publisher: "Alfred A. Knopf", year: "2012" },
      ],
    },
    {
      heading: "Sites and Recordings",
      items: [
        { kind: "website", title: "The Farewell Address", publisher: "George Washington's Mount Vernon", url: "https://www.mountvernon.org/george-washington/the-first-president/the-farewell-address/" },
        { kind: "website", title: "Election of 1800", publisher: "Thomas Jefferson Foundation (Monticello)", url: "https://www.monticello.org/encyclopedia/election-1800" },
        { kind: "website", title: "Lowell National Historical Park", publisher: "National Park Service", url: "https://www.nps.gov/articles/lowell.htm" },
        { kind: "website", title: "Women's Rights National Historical Park", publisher: "National Park Service", url: "https://www.nps.gov/wori/index.htm" },
        { kind: "website", title: "Trail of Tears National Historic Trail", publisher: "National Park Service", url: "https://www.nps.gov/trte/learn/historyculture/places.htm" },
      ],
    },
  ],
};
