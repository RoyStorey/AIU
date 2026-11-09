import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const amh301: CourseContent = {
  overview: `Between the end of Reconstruction and the Second World War, the United States became the greatest industrial power on earth, and Americans argued fiercely over what that meant for a democratic republic. Railroads, steel, oil, and electricity remade the economy; great corporations and great fortunes rose; millions of immigrants filled the cities; the last Native nations of the West were confined to reservations; and the South built a system of segregation and disfranchisement that would last for most of a century. Farmers, workers, reformers, and Black Americans organized to push back.

This course follows that story. We begin with the industrial revolution and the labor question, from Carnegie and Rockefeller to Haymarket and Pullman. We study the West, the new immigration, the industrial city, and the making of Jim Crow. We trace the Populist revolt and the Progressive movement, from the Omaha Platform to the Nineteenth Amendment. We follow the nation into empire and the Great War, and into the Red Scare, the New Era, and the culture wars of the 1920s. And we end with the Great Depression and the New Deal, which transformed the relationship between Americans and their government.

Throughout, we read the participants in their own words—Carnegie and Debs, Du Bois and Washington, Bryan and Roosevelt, Hoover and Huey Long—and weigh the arguments of historians from Richard Hofstadter and Lawrence Goodwyn to Richard White, David M. Kennedy, and Ira Katznelson. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain the causes and consequences of American industrialization, and evaluate the debate over the captains of industry.",
    "Describe the experiences of industrial workers, immigrants, Native nations, and Black Southerners between 1865 and 1920, and how each responded.",
    "Compare the Populist and Progressive movements: their supporters, diagnoses, programs, and achievements.",
    "Analyze the American turn to empire after 1898 and the debate it provoked, and the nation's entry into and experience of the First World War.",
    "Explain the economic and cultural conflicts of the 1920s, including Prohibition, the second Klan, immigration restriction, and the Harlem Renaissance.",
    "Evaluate the causes of the Great Depression and the achievements and limits of the New Deal, using primary sources and the arguments of historians.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "The Gospel of Wealth", author: "Andrew Carnegie", publisher: "Carnegie Corporation of New York", url: "https://carnegie.org/publication/the-gospel-of-wealth/" },
        { kind: "edition", title: "The Souls of Black Folk", author: "W. E. B. Du Bois", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/408" },
        { kind: "edition", title: "How the Other Half Lives", author: "Jacob A. Riis", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/45502" },
        { kind: "edition", title: "Twenty Years at Hull-House", author: "Jane Addams", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/1325" },
        { kind: "website", title: "History Matters: The U.S. Survey Course on the Web", publisher: "George Mason University", url: "https://historymatters.gmu.edu/", note: "Hundreds of primary documents from the Gilded Age through the New Deal." },
        { kind: "website", title: "Born in Slavery: Slave Narratives from the Federal Writers' Project, 1936–1938", publisher: "Library of Congress", url: "https://www.loc.gov/collections/slave-narratives-from-the-federal-writers-project-1936-to-1938/" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "The Republic for Which It Stands: The United States during Reconstruction and the Gilded Age, 1865–1896", author: "Richard White", publisher: "Oxford University Press", year: "2017" },
        { kind: "book", title: "Freedom from Fear: The American People in Depression and War, 1929–1945", author: "David M. Kennedy", publisher: "Oxford University Press", year: "1999" },
        { kind: "book", title: "A Fierce Discontent: The Rise and Fall of the Progressive Movement in America, 1870–1920", author: "Michael McGerr", publisher: "Free Press", year: "2003" },
        { kind: "book", title: "Over Here: The First World War and American Society", author: "David M. Kennedy", publisher: "Oxford University Press", year: "1980" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "The Age of Reform: From Bryan to F.D.R.", author: "Richard Hofstadter", publisher: "Alfred A. Knopf", year: "1955" },
        { kind: "book", title: "The Populist Moment", author: "Lawrence Goodwyn", publisher: "Oxford University Press", year: "1978" },
        { kind: "book", title: "Railroaded: The Transcontinentals and the Making of Modern America", author: "Richard White", publisher: "W. W. Norton", year: "2011" },
        { kind: "book", title: "The Blood of Government: Race, Empire, the United States, and the Philippines", author: "Paul A. Kramer", publisher: "University of North Carolina Press", year: "2006" },
        { kind: "book", title: "Franklin D. Roosevelt and the New Deal, 1932–1940", author: "William E. Leuchtenburg", publisher: "Harper & Row", year: "1963" },
        { kind: "book", title: "When Affirmative Action Was White", author: "Ira Katznelson", publisher: "W. W. Norton", year: "2005" },
        { kind: "book", title: "The End of Reform: New Deal Liberalism in Recession and War", author: "Alan Brinkley", publisher: "Alfred A. Knopf", year: "1995" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "FDR's Fireside Chats", publisher: "Franklin D. Roosevelt Presidential Library and Museum", url: "https://www.fdrlibrary.org/fireside-chats" },
        { kind: "website", title: "Farm Security Administration/Office of War Information Photographs", publisher: "Library of Congress", url: "https://www.loc.gov/pictures/collection/fsa/" },
        { kind: "website", title: "Milestone Documents", publisher: "National Archives", url: "https://www.archives.gov/milestone-documents" },
      ],
    },
  ],
};
