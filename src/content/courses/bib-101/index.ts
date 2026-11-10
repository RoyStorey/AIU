import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const bib101: CourseContent = {
  overview: `The Hebrew Bible, the Tanakh of Judaism and the Old Testament of Christianity, is a library written, edited, and gathered over a thousand years. This course reads it from Genesis to Daniel as literature, as a source for the history of ancient Israel, and as Scripture.

We begin with what the Bible is: its names and canons, its Hebrew text and the Dead Sea Scrolls, its world of Ugarit, Babylon, and Egypt, what archaeology can and cannot confirm, and the main ways scholars and believers have read it. We then read Genesis, from the garden of Eden through Abraham, the binding of Isaac, Jacob, and Joseph; the Exodus, Sinai, and the law, with Joshua and Judges; the kings and the prophets, from Samuel and David to Amos, Isaiah, and Jeremiah; and, in the last lesson, the exile and return, the Psalms, the wisdom books, Job, Ruth, Esther, the Song of Songs, Daniel, and the closing of the canon.

Bible quotations are from the King James Version, which is in the public domain, or are the course's own plain renderings. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the divisions and canons of the Hebrew Bible, and the history of its text from the Dead Sea Scrolls to the Masoretes.",
    "Place the Hebrew Bible in its ancient Near Eastern setting, and assess what inscriptions and archaeology reveal about Israel's history.",
    "Explain the main methods of interpretation: source criticism, literary reading, and Jewish and Christian theological traditions.",
    "Interpret the major narratives of Genesis, Exodus, and the books of Samuel and Kings.",
    "Analyze the covenant and law of Sinai, and the message of the prophets about justice and judgment.",
    "Interpret the Psalms, the wisdom books, and Daniel, and explain how the exile shaped Israel's faith and Scriptures.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "The New Oxford Annotated Bible with Apocrypha (NRSV)", author: "ed. Michael D. Coogan et al.", publisher: "Oxford University Press", year: "5th ed., 2018" },
        { kind: "book", title: "The Hebrew Bible: A Translation with Commentary", author: "Robert Alter", publisher: "W. W. Norton", year: "2018" },
        { kind: "book", title: "Ancient Near Eastern Texts Relating to the Old Testament", author: "ed. James B. Pritchard", publisher: "Princeton University Press", year: "3rd ed., 1969" },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "Introduction to the Bible", author: "Christine Hayes", publisher: "Yale University Press", year: "2012" },
        { kind: "book", title: "The Art of Biblical Narrative", author: "Robert Alter", publisher: "Basic Books", year: "rev. ed., 2011" },
        { kind: "book", title: "How to Read the Bible: A Guide to Scripture, Then and Now", author: "James L. Kugel", publisher: "Free Press", year: "2007" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Prophets", author: "Abraham Joshua Heschel", publisher: "Harper & Row", year: "1962" },
        { kind: "book", title: "Who Wrote the Bible?", author: "Richard Elliott Friedman", publisher: "Summit Books", year: "1987" },
        { kind: "book", title: "The Bible Unearthed", author: "Israel Finkelstein and Neil Asher Silberman", publisher: "Free Press", year: "2001" },
      ],
    },
  ],
};
