import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const amh210: CourseContent = {
  overview: `Between 1848 and 1877 the United States tore itself apart and was remade. The question of slavery in the West destroyed the party system and broke the Union; four years of war killed some three-quarters of a million Americans and destroyed slavery; and in the years that followed, the nation rewrote its Constitution to guarantee birthright citizenship, equal protection of the laws, and the right to vote regardless of race. Then, within a decade, it abandoned the freedpeople to a counterrevolution of violence and disfranchisement.

This course follows that story. We begin with the road to disunion, from the Compromise of 1850 through Kansas, Dred Scott, Lincoln and Douglas, and John Brown, to secession and Fort Sumter. We study the war as soldiers and civilians experienced it, and why the Union won. We trace how a war for the Union became a war for freedom, through the actions of the enslaved, Black soldiers, Congress, and Lincoln. We examine Reconstruction as a "second founding," and the biracial democracy it briefly created in the South. And we end with Reconstruction's violent overthrow and the long struggle over how the war would be remembered.

Throughout, we read the participants in their own words—Lincoln and Douglass, Taney and Stephens, soldiers and freedpeople—and weigh the arguments of historians from the Dunning School and W. E. B. Du Bois to James McPherson, Eric Foner, and David Blight. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Explain how the question of slavery in the territories destroyed the second party system and led to secession, using the words of the participants themselves.",
    "Describe the military and civilian history of the war, and evaluate competing explanations of the Union victory.",
    "Explain how and why the war became a war for emancipation, weighing the roles of the enslaved, Black soldiers, Congress, and Lincoln.",
    "Analyze the Reconstruction amendments and the biracial governments of the South, and the struggles over land, labor, family, and education that defined freedom.",
    "Explain how Reconstruction was overthrown through violence, Northern retreat, and the Supreme Court's narrowing of the amendments.",
    "Evaluate how the memory of the war and Reconstruction has been contested, from the Lost Cause and the Dunning School to Du Bois and the modern historians, and why it still matters.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "Uncle Tom's Cabin", author: "Harriet Beecher Stowe", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/203" },
        { kind: "edition", title: "Personal Memoirs of U. S. Grant", author: "Ulysses S. Grant", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/4367" },
        { kind: "edition", title: "Narrative of the Life of Frederick Douglass, an American Slave", author: "Frederick Douglass", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/23" },
        { kind: "website", title: "Freedmen and Southern Society Project", publisher: "University of Maryland", url: "https://freedmen.umd.edu/", note: "Documents of emancipation from the National Archives, in the words of the freedpeople and soldiers." },
        { kind: "website", title: "Last Seen: Finding Family After Slavery", publisher: "Villanova University", url: "https://informationwanted.org" },
        { kind: "website", title: "Civil War Photographs, 1861–1865", publisher: "Library of Congress", url: "https://www.loc.gov/pictures/collection/cwp/intro.html" },
        { kind: "website", title: "Dred Scott v. Sandford (1857)", publisher: "National Archives, Milestone Documents", url: "https://www.archives.gov/milestone-documents/dred-scott-v-sanford" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "Battle Cry of Freedom: The Civil War Era", author: "James M. McPherson", publisher: "Oxford University Press", year: "1988", note: "The Oxford History volume and the standard one-volume history of the war." },
        { kind: "book", title: "Reconstruction: America's Unfinished Revolution, 1863–1877", author: "Eric Foner", publisher: "Harper & Row", year: "1988", note: "The standard account of Reconstruction." },
        { kind: "book", title: "The Impending Crisis, 1848–1861", author: "David M. Potter; completed by Don E. Fehrenbacher", publisher: "Harper & Row", year: "1976" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Race and Reunion: The Civil War in American Memory", author: "David W. Blight", publisher: "Belknap Press of Harvard University Press", year: "2001" },
        { kind: "book", title: "Black Reconstruction in America, 1860–1880", author: "W. E. B. Du Bois", publisher: "Harcourt, Brace", year: "1935" },
        { kind: "book", title: "The Fiery Trial: Abraham Lincoln and American Slavery", author: "Eric Foner", publisher: "W. W. Norton", year: "2010" },
        { kind: "book", title: "This Republic of Suffering: Death and the American Civil War", author: "Drew Gilpin Faust", publisher: "Alfred A. Knopf", year: "2008" },
        { kind: "book", title: "Free Soil, Free Labor, Free Men: The Ideology of the Republican Party before the Civil War", author: "Eric Foner", publisher: "Oxford University Press", year: "1970" },
        { kind: "book", title: "For Cause and Comrades: Why Men Fought in the Civil War", author: "James M. McPherson", publisher: "Oxford University Press", year: "1997" },
        { kind: "book", title: "A Nation Under Our Feet: Black Political Struggles in the Rural South from Slavery to the Great Migration", author: "Steven Hahn", publisher: "Belknap Press of Harvard University Press", year: "2003" },
        { kind: "book", title: "Apostles of Disunion: Southern Secession Commissioners and the Causes of the Civil War", author: "Charles B. Dew", publisher: "University of Virginia Press", year: "2001" },
      ],
    },
    {
      heading: "Lectures and Sites",
      items: [
        { kind: "lecture", title: "The Civil War and Reconstruction Era, 1845–1877", author: "David W. Blight", publisher: "Open Yale Courses, HIST 119", url: "https://oyc.yale.edu/history/hist-119", note: "Twenty-seven lectures (Spring 2008)." },
        { kind: "website", title: "Reconstruction Era National Historical Park", publisher: "National Park Service", url: "https://www.nps.gov/reer/learn/management.htm" },
        { kind: "website", title: "Reconstruction in America: Racial Violence after the Civil War, 1865–1876", publisher: "Equal Justice Initiative", url: "https://eji.org/reports/reconstruction-in-america/" },
      ],
    },
  ],
};
