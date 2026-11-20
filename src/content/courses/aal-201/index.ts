import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aal201: CourseContent = {
  overview: `In the decade after the First World War, a generation of Black writers, artists, and musicians gathered in Harlem and made it the capital of a new Black culture. Alain Locke called them the New Negro; later historians named their movement the Harlem Renaissance. This course reads its major works in their time and in the arguments that shaped them.

We begin with the Great Migration, the making of Black Harlem, the war and the Red Summer of 1919, the magazines and organizers, Locke's anthology The New Negro, and the patrons, publishers, music, and art that surrounded the writers. We then read the poets—Langston Hughes, Countee Cullen, Claude McKay, and James Weldon Johnson—and the debate over the blues, the sonnet, and the "racial mountain"; Jean Toomer's Cane; the novels of the color line by Jessie Fauset, Claude McKay, Nella Larsen, Wallace Thurman, and George Schuyler; and, finally, Zora Neale Hurston, Their Eyes Were Watching God, the quarrel with Richard Wright, the end of the movement in the Depression, and its rediscovery.

The course quotes the works briefly and sends students to complete texts, many now in the public domain. Each lesson takes about two hours and ends with a session working directly with the sources.`,
  objectives: [
    "Explain how the Great Migration, the First World War, and the Red Summer of 1919 created the conditions for the Harlem Renaissance.",
    "Describe the roles of the magazines, organizers, and patrons, and the problem of writing for a \"double audience.\"",
    "Analyze the poetry of Hughes, Cullen, McKay, and Johnson, and the debate between vernacular and traditional forms.",
    "Interpret Jean Toomer's Cane as an elegy, a modernist experiment, and a record of the South's violence.",
    "Compare the novels of Fauset, McKay, Larsen, Thurman, and Schuyler as responses to the question of how Black life should be portrayed.",
    "Evaluate Zora Neale Hurston's work, the debate with Richard Wright, and the end, rediscovery, and legacy of the Renaissance.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Texts",
      items: [
        { kind: "book", title: "The New Negro: An Interpretation", author: "ed. Alain Locke", publisher: "Albert and Charles Boni; reprinted by Touchstone", year: "1925" },
        { kind: "book", title: "The Collected Poems of Langston Hughes", author: "ed. Arnold Rampersad and David Roessel", publisher: "Vintage Classics", year: "1994" },
        { kind: "book", title: "Cane", author: "Jean Toomer, ed. Rudolph P. Byrd and Henry Louis Gates Jr.", publisher: "W. W. Norton (Norton Critical Edition)", year: "2nd ed., 2011" },
        { kind: "book", title: "Quicksand and Passing", author: "Nella Larsen, ed. Deborah E. McDowell", publisher: "Rutgers University Press", year: "1986" },
        { kind: "book", title: "Their Eyes Were Watching God", author: "Zora Neale Hurston", publisher: "Harper Perennial Modern Classics", year: "1937; 2006" },
      ],
    },
    {
      heading: "Anthologies",
      items: [
        { kind: "book", title: "The Portable Harlem Renaissance Reader", author: "ed. David Levering Lewis", publisher: "Penguin", year: "1994" },
        { kind: "book", title: "The Norton Anthology of African American Literature", author: "ed. Henry Louis Gates Jr. and Valerie A. Smith", publisher: "W. W. Norton", year: "3rd ed., 2014" },
      ],
    },
    {
      heading: "History and Criticism",
      items: [
        { kind: "book", title: "When Harlem Was in Vogue", author: "David Levering Lewis", publisher: "Knopf", year: "1981" },
        { kind: "book", title: "Harlem Renaissance", author: "Nathan Irvin Huggins", publisher: "Oxford University Press", year: "1971" },
        { kind: "book", title: "Modernism and the Harlem Renaissance", author: "Houston A. Baker Jr.", publisher: "University of Chicago Press", year: "1987" },
        { kind: "book", title: "Women of the Harlem Renaissance", author: "Cheryl A. Wall", publisher: "Indiana University Press", year: "1995" },
        { kind: "book", title: "The Life of Langston Hughes", author: "Arnold Rampersad", publisher: "Oxford University Press", year: "2 vols., 1986–1988" },
      ],
    },
  ],
};
