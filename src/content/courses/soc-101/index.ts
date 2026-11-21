import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const soc101: CourseContent = {
  overview: `Why do people from different neighborhoods, classes, and generations speak differently, and why do we judge one another by how we talk? This course studies language in society: how linguistic variation is patterned by social groups and situations, how speakers use language to build identities and relationships, and how societies manage their many languages.

We begin with the basic concepts of the field: language and dialect, accent and the standard, speech communities, communicative competence, the linguistic variable, and the methods sociolinguists use to observe ordinary speech. We study variation and social class, from Labov's New York department stores and Trudgill's Norwich to Martha's Vineyard, Belfast networks, and Eckert's jocks and burnouts. We study style, identity, and gender: audience design, accommodation, the debates from Lakoff to Tannen and Cameron, and the performance of identity in talk. We study multilingual societies: diglossia, code-switching, language shift and maintenance, bilingual minds and bilingual education, sign languages, and lingua francas. Finally, we study language, power, and policy: attitudes and discrimination, linguistic profiling, language planning and language rights, and the endangerment and revitalization of the world's languages.

The course follows Ronald Wardhaugh and Janet M. Fuller's *An Introduction to Sociolinguistics*, alongside the classic studies of Labov, Gumperz, Hymes, and others. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Explain the central concepts of sociolinguistics, including language and dialect, the standard, speech communities, communicative competence, and the linguistic variable.",
    "Describe the classic studies of variation and social class and explain how sound changes spread through communities.",
    "Analyze how speakers shift style and use language to construct identities, and evaluate competing accounts of language and gender.",
    "Describe multilingual societies, including diglossia, code-switching, and the causes of language shift and maintenance.",
    "Explain how attitudes toward languages and accents are measured and how they can produce discrimination.",
    "Evaluate language policies, from official languages and education to the documentation and revitalization of endangered languages.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Text",
      items: [
        { kind: "book", title: "An Introduction to Sociolinguistics", author: "Ronald Wardhaugh and Janet M. Fuller", publisher: "Wiley-Blackwell", year: "1986; 8th ed., 2021" },
      ],
    },
    {
      heading: "Classic Works",
      items: [
        { kind: "book", title: "The Social Stratification of English in New York City", author: "William Labov", publisher: "Center for Applied Linguistics", year: "1966; 2nd ed., Cambridge University Press, 2006" },
        { kind: "book", title: "Sociolinguistic Patterns", author: "William Labov", publisher: "University of Pennsylvania Press", year: "1972" },
        { kind: "book", title: "Ways with Words: Language, Life, and Work in Communities and Classrooms", author: "Shirley Brice Heath", publisher: "Cambridge University Press", year: "1983" },
        { kind: "book", title: "Language and Social Networks", author: "Lesley Milroy", publisher: "Blackwell", year: "1980; 2nd ed., 1987" },
        { kind: "book", title: "Reversing Language Shift", author: "Joshua A. Fishman", publisher: "Multilingual Matters", year: "1991" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Jocks and Burnouts: Social Categories and Identity in the High School", author: "Penelope Eckert", publisher: "Teachers College Press", year: "1989" },
        { kind: "book", title: "Language and Gender", author: "Penelope Eckert and Sally McConnell-Ginet", publisher: "Cambridge University Press", year: "2003; 2nd ed., 2013" },
        { kind: "book", title: "English with an Accent: Language, Ideology, and Discrimination in the United States", author: "Rosina Lippi-Green", publisher: "Routledge", year: "1997; 2nd ed., 2012" },
        { kind: "book", title: "Authority in Language: Investigating Standard English", author: "James Milroy and Lesley Milroy", publisher: "Routledge", year: "1985; 4th ed., 2012" },
      ],
    },
  ],
};
