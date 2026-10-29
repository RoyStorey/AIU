import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const amh101: CourseContent = {
  overview: `In 1760, the colonists of British North America were among the proudest subjects of the British Empire, celebrating the conquest of Canada and the accession of a young king. Sixteen years later they declared their independence, and fifteen years after that they had created a federal republic under a written constitution that still governs the United States. This course asks how and why that happened, and what it meant.

We begin with British America on the eve of crisis: a fast-growing, diverse, slaveholding society, proud of its British liberties, surrounded by Native nations and rival empires. We follow the imperial crisis from the Sugar Act to the Coercive Acts, and the constitutional argument over representation and sovereignty that made compromise impossible. We read Common Sense and the Declaration of Independence closely, and trace the Declaration's long afterlife. We study the war—its battles and strategy, its soldiers and civilians, its loyalists and Black loyalists, its Native nations and its global reach. And we end with the making of the Constitution: the state constitutions, the Articles of Confederation, Shays's Rebellion, the Philadelphia Convention and its compromises over slavery, the debate over ratification, and the Bill of Rights.

Throughout, we read the documents themselves and weigh the interpretations of historians from the Progressives to Bernard Bailyn, Gordon Wood, and their critics. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Describe colonial British America in 1750—its peoples, economies, government, and place in the British Empire—and explain how the Seven Years' War created the problems that led to crisis.",
    "Trace the imperial crisis from 1763 to 1774 and explain the constitutional argument over taxation, representation, and parliamentary sovereignty.",
    "Analyze Common Sense and the Declaration of Independence closely, and explain the Declaration's changing meanings from 1776 to the present.",
    "Explain how the Americans won the War for Independence, and assess what the war meant for loyalists, the enslaved, Native nations, and women.",
    "Explain the making of the Constitution, including the compromises over representation and slavery, the arguments of Federalists and Anti-Federalists, and the adoption of the Bill of Rights.",
    "Evaluate the major interpretations of the Revolution—imperial, Progressive, ideological, social, and continental—and use primary sources to construct arguments of your own.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "Common Sense", author: "Thomas Paine", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/147" },
        { kind: "edition", title: "The Federalist Papers", author: "Alexander Hamilton, James Madison, and John Jay", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1404" },
        { kind: "edition", title: "Letters from a Farmer in Pennsylvania", author: "John Dickinson", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/47111" },
        { kind: "edition", title: "Autobiography of Benjamin Franklin", author: "Benjamin Franklin", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/20203" },
        { kind: "website", title: "America's Founding Documents", publisher: "National Archives", url: "https://www.archives.gov/founding-docs", note: "The Declaration, the Constitution, and the Bill of Rights, with transcriptions and images." },
        { kind: "website", title: "Founders Online", publisher: "National Archives", url: "https://founders.archives.gov/", note: "The searchable papers of Washington, Franklin, Adams, Jefferson, Hamilton, and Madison: tens of thousands of letters and documents." },
        { kind: "website", title: "The Avalon Project: Eighteenth-Century Documents", publisher: "Yale Law School", url: "https://avalon.law.yale.edu/18th_century/artconf.asp", note: "The Articles of Confederation and many other documents of the era." },
        { kind: "website", title: "The Coming of the American Revolution, 1764–1776", publisher: "Massachusetts Historical Society", url: "https://www.masshist.org/revolution/" },
        { kind: "website", title: "The Book of Negroes, 1783", publisher: "Nova Scotia Archives", url: "https://archives.novascotia.ca/africanns/archives/?ID=26" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "American Revolutions: A Continental History, 1750–1804", author: "Alan Taylor", publisher: "W. W. Norton", year: "2016", note: "The Revolution as a continental and civil war, with full attention to Native nations and the enslaved." },
        { kind: "book", title: "The Glorious Cause: The American Revolution, 1763–1789", author: "Robert Middlekauff", publisher: "Oxford University Press", year: "1982; rev. ed., 2005", note: "The Oxford History of the United States volume: a rich narrative of politics and war." },
        { kind: "book", title: "The American Revolution: A History", author: "Gordon S. Wood", publisher: "Modern Library", year: "2002", note: "A brilliant short introduction." },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Ideological Origins of the American Revolution", author: "Bernard Bailyn", publisher: "Belknap Press of Harvard University Press", year: "1967; enlarged ed., 1992" },
        { kind: "book", title: "The Radicalism of the American Revolution", author: "Gordon S. Wood", publisher: "Alfred A. Knopf", year: "1992" },
        { kind: "book", title: "The Creation of the American Republic, 1776–1787", author: "Gordon S. Wood", publisher: "University of North Carolina Press", year: "1969" },
        { kind: "book", title: "The Unknown American Revolution: The Unruly Birth of Democracy and the Struggle to Create America", author: "Gary B. Nash", publisher: "Viking", year: "2005" },
        { kind: "book", title: "Forced Founders: Indians, Debtors, Slaves, and the Making of the American Revolution in Virginia", author: "Woody Holton", publisher: "University of North Carolina Press", year: "1999" },
        { kind: "book", title: "American Scripture: Making the Declaration of Independence", author: "Pauline Maier", publisher: "Alfred A. Knopf", year: "1997" },
        { kind: "book", title: "Liberty's Exiles: American Loyalists in the Revolutionary World", author: "Maya Jasanoff", publisher: "Alfred A. Knopf", year: "2011" },
        { kind: "book", title: "Liberty's Daughters: The Revolutionary Experience of American Women, 1750–1800", author: "Mary Beth Norton", publisher: "Little, Brown", year: "1980" },
      ],
    },
    {
      heading: "War and Constitution",
      items: [
        { kind: "book", title: "Crucible of War: The Seven Years' War and the Fate of Empire in British North America, 1754–1766", author: "Fred Anderson", publisher: "Alfred A. Knopf", year: "2000" },
        { kind: "book", title: "Washington's Crossing", author: "David Hackett Fischer", publisher: "Oxford University Press", year: "2004" },
        { kind: "book", title: "A People Numerous and Armed", author: "John Shy", publisher: "Oxford University Press", year: "1976; rev. ed., 1990" },
        { kind: "book", title: "Ratification: The People Debate the Constitution, 1787–1788", author: "Pauline Maier", publisher: "Simon & Schuster", year: "2010" },
        { kind: "book", title: "The Framers' Coup: The Making of the United States Constitution", author: "Michael J. Klarman", publisher: "Oxford University Press", year: "2016" },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "lecture", title: "The American Revolution", author: "Joanne B. Freeman", publisher: "Open Yale Courses, HIST 116", url: "https://oyc.yale.edu/history/hist-116", note: "A full lecture course (Spring 2010) from the colonial background to the Constitution." },
        { kind: "audio", title: "Revolutions (podcast), Season 2: The American Revolution", author: "Mike Duncan", url: "https://www.revolutionspodcast.com" },
        { kind: "audio", title: "A Narrative of a Revolutionary Soldier", author: "Joseph Plumb Martin; read by Barry Eads", publisher: "LibriVox", url: "https://librivox.org/a-narrative-of-a-revolutionary-soldier-some-of-the-adventures-dangers-and-sufferings-of-joseph-plumb-martin-by-joseph-plumb-martin" },
        { kind: "website", title: "Creating the Declaration of Independence", publisher: "Library of Congress", url: "https://www.loc.gov/exhibits/creating-the-united-states/interactives/declaration-of-independence/overview.html" },
      ],
    },
  ],
};
