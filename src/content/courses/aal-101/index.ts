import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aal101: CourseContent = {
  overview: `African American literature began in song and in a struggle for the right to write. This course reads its foundations, from the spirituals and the first poems of the eighteenth century to W. E. B. Du Bois's The Souls of Black Folk in 1903.

We begin with the oral tradition—work songs, trickster tales, and the spirituals—and the first writers: Lucy Terry, Jupiter Hammon, Phillis Wheatley before her examiners, and Olaudah Equiano's account of the Middle Passage. We read Frederick Douglass's Narrative, from the blood-stained gate to the fight with Covey. We read Harriet Jacobs's Incidents in the Life of a Slave Girl, seven years in a garret three feet high, and the story of how its authorship was proved. We hear the voices of protest and of the nadir: David Walker, Sojourner Truth, Frances Harper, William Wells Brown, Booker T. Washington, Ida B. Wells, Anna Julia Cooper, Paul Laurence Dunbar, and Charles Chesnutt. And we end with Du Bois: the color line, the veil, and double consciousness.

Throughout, we ask how writers denied literacy and humanity made themselves heard, and how they claimed America as their own. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the oral roots of African American literature in the spirituals and folktales, and their double meanings.",
    "Analyze how Wheatley, Equiano, and their contemporaries wrote against Enlightenment doubts of Black humanity.",
    "Interpret Douglass's Narrative, especially its treatment of literacy, violence, religion, and authorship.",
    "Interpret Jacobs's Incidents and explain how it reshapes the slave narrative from a woman's perspective.",
    "Compare the strategies of protest, compromise, and masking among nineteenth-century Black writers.",
    "Explain Du Bois's concepts of the color line, the veil, and double consciousness, and trace them through the tradition.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "The Norton Anthology of African American Literature", author: "ed. Henry Louis Gates Jr. and Valerie A. Smith", publisher: "W. W. Norton", year: "3rd ed., 2014" },
        { kind: "book", title: "The Interesting Narrative and Other Writings", author: "Olaudah Equiano, ed. Vincent Carretta", publisher: "Penguin Classics", year: "rev. ed., 2003" },
        { kind: "book", title: "Narrative of the Life of Frederick Douglass", author: "Frederick Douglass, ed. David W. Blight", publisher: "Bedford/St. Martin's", year: "3rd ed., 2016" },
        { kind: "book", title: "Incidents in the Life of a Slave Girl", author: "Harriet A. Jacobs, ed. Jean Fagan Yellin", publisher: "Harvard University Press", year: "enlarged ed., 2009" },
        { kind: "book", title: "The Souls of Black Folk", author: "W. E. B. Du Bois, ed. Henry Louis Gates Jr. and Terri Hume Oliver", publisher: "W. W. Norton", year: "1999" },
      ],
    },
    {
      heading: "Criticism and history",
      items: [
        { kind: "book", title: "The Signifying Monkey: A Theory of African-American Literary Criticism", author: "Henry Louis Gates Jr.", publisher: "Oxford University Press", year: "1988" },
        { kind: "book", title: "From Behind the Veil: A Study of Afro-American Narrative", author: "Robert B. Stepto", publisher: "University of Illinois Press", year: "1979" },
        { kind: "book", title: "Slave Religion: The \"Invisible Institution\" in the Antebellum South", author: "Albert J. Raboteau", publisher: "Oxford University Press", year: "1978" },
        { kind: "book", title: "Reconstructing Womanhood", author: "Hazel V. Carby", publisher: "Oxford University Press", year: "1987" },
        { kind: "book", title: "Frederick Douglass: Prophet of Freedom", author: "David W. Blight", publisher: "Simon & Schuster", year: "2018" },
      ],
    },
  ],
};
