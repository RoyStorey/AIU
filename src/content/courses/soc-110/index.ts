import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const soc110: CourseContent = {
  overview: `Why does a Glaswegian sound different from a Londoner, a Bostonian from a Texan, and a Singaporean from a New Zealander? This course studies the dialects of English around the world: how they differ, how they arose, and what they mean to the people who speak them.

We begin with how English varies and how dialectologists have studied it, from Wenker's questionnaires and the Survey of English Dialects to Wells's lexical sets, the Atlas of North American English, perceptual dialectology, and online surveys. We study the dialects of Britain and Ireland: Received Pronunciation and its changes, the north–south divide, Cockney and Estuary English, the cities of the north, Scots, Welsh English, Irish English, and Ulster. We study North America: settlement and the founder effect, the Northern Cities Shift, the South, the West, New York, Philadelphia, Canada, Appalachia, Pittsburgh, and the island dialects of the Outer Banks. We study English around the world: Kachru's circles and Schneider's Dynamic Model, the Englishes of Australia, New Zealand, South Africa, the Caribbean, India, Africa, and Singapore, pidgins and creoles, and English as a lingua franca. Finally, we study social and ethnic dialects: African American English, Gullah Geechee, the Ann Arbor and Oakland controversies, Latino, Lumbee, Jewish, and Cajun Englishes, and the place of dialects in schools and courts.

The course follows Walt Wolfram and Natalie Schilling's *American English: Dialects and Variation* and J. C. Wells's *Accents of English*. Each lesson takes about two hours and ends with a session working directly with the evidence.`,
  objectives: [
    "Describe how dialects of English differ in vocabulary, pronunciation, and grammar, using tools such as Wells's lexical sets.",
    "Explain how dialectologists have mapped English, from the first dialect atlases to acoustic surveys and big data.",
    "Describe the major dialects of Britain, Ireland, and North America and explain how settlement, sound change, and identity shaped them.",
    "Explain how English spread around the world and evaluate models of World Englishes, including Kachru's circles and Schneider's Dynamic Model.",
    "Describe the grammar and history of African American English and other ethnic dialects, and the debates over their origins.",
    "Evaluate how schools, courts, and the public have responded to dialect diversity, drawing on sociolinguistic research.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "American English: Dialects and Variation", author: "Walt Wolfram and Natalie Schilling", publisher: "Wiley-Blackwell", year: "1998; 3rd ed., 2016" },
        { kind: "book", title: "Accents of English", author: "J. C. Wells", publisher: "Cambridge University Press", year: "1982" },
      ],
    },
    {
      heading: "Classic Works",
      items: [
        { kind: "book", title: "A Word Geography of the Eastern United States", author: "Hans Kurath", publisher: "University of Michigan Press", year: "1949" },
        { kind: "book", title: "Dialectology", author: "J. K. Chambers and Peter Trudgill", publisher: "Cambridge University Press", year: "1980; 2nd ed., 1998" },
        { kind: "book", title: "The Atlas of North American English", author: "William Labov, Sharon Ash, and Charles Boberg", publisher: "Mouton de Gruyter", year: "2006" },
        { kind: "book", title: "Africanisms in the Gullah Dialect", author: "Lorenzo Dow Turner", publisher: "University of Chicago Press", year: "1949" },
        { kind: "book", title: "The Other Tongue: English Across Cultures", author: "ed. Braj B. Kachru", publisher: "University of Illinois Press", year: "1982; 2nd ed., 1992" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "The Dialects of England", author: "Peter Trudgill", publisher: "Blackwell", year: "1990; 2nd ed., 1999" },
        { kind: "book", title: "Postcolonial English: Varieties Around the World", author: "Edgar W. Schneider", publisher: "Cambridge University Press", year: "2007" },
        { kind: "book", title: "African American English: A Linguistic Introduction", author: "Lisa J. Green", publisher: "Cambridge University Press", year: "2002" },
        { kind: "book", title: "Speaking Pittsburghese: The Story of a Dialect", author: "Barbara Johnstone", publisher: "Oxford University Press", year: "2013" },
      ],
    },
  ],
};
