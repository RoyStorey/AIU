import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aml101: CourseContent = {
  overview: `American literature begins not with novels but with histories, sermons, poems, diaries, and narratives of captivity and conversion, written by people who believed they were living through a drama watched by God and the world. This course follows that literature from the landing at Plymouth in 1620 to the founding of the republic.

We begin with William Bradford's Of Plymouth Plantation: the Separatists' road to the Mayflower, the Compact, the first winter, Squanto and Massasoit, and the strange history of Bradford's lost manuscript. We read John Winthrop's "city upon a hill," the trial of Anne Hutchinson, and the poems of Anne Bradstreet and Edward Taylor. We follow Mary Rowlandson through the twenty removes of her captivity in King Philip's War, and study the Salem witch trials and their long aftermath. We spend a lesson with Jonathan Edwards, from his boyhood essay on flying spiders to "Sinners in the Hands of an Angry God" and the Personal Narrative. And we end with the literature of the Revolution: Franklin's Autobiography, Paine's Common Sense, the Declaration of Independence, Crèvecoeur's "new man," and the poems of Phillis Wheatley.

Throughout, we ask how a Puritan literature of providence became an Enlightenment literature of self-making, and whose voices each tradition included and left out. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the religious beliefs of the New England Puritans and explain how covenant, election, and providence shaped their writing.",
    "Analyze the plain style and providential history of Bradford's Of Plymouth Plantation.",
    "Interpret the poetry of Anne Bradstreet and Edward Taylor and the conflicts of the Hutchinson trial.",
    "Read Rowlandson's captivity narrative and the records of the Salem trials critically, attending to Native and women's voices.",
    "Explain Jonathan Edwards's theology of the 'sense of the heart' and the significance of the Great Awakening.",
    "Compare the Puritan and Enlightenment traditions in Franklin, Paine, Jefferson, Crèvecoeur, and Wheatley.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "Of Plymouth Plantation, 1620–1647", author: "William Bradford, ed. Samuel Eliot Morison", publisher: "Alfred A. Knopf", year: "1952" },
        { kind: "book", title: "The Works of Anne Bradstreet", author: "ed. Jeannine Hensley", publisher: "Belknap Press of Harvard University Press", year: "1967" },
        { kind: "book", title: "A Jonathan Edwards Reader", author: "ed. John E. Smith, Harry S. Stout, and Kenneth P. Minkema", publisher: "Yale University Press", year: "1995" },
        { kind: "book", title: "The Autobiography and Other Writings", author: "Benjamin Franklin, ed. Kenneth Silverman", publisher: "Penguin Classics", year: "1986" },
        { kind: "book", title: "The Norton Anthology of American Literature, Volume A: Beginnings to 1820", author: "ed. Robert S. Levine", publisher: "W. W. Norton", year: "10th ed., 2022" },
      ],
    },
    {
      heading: "Criticism and history",
      items: [
        { kind: "book", title: "Errand into the Wilderness", author: "Perry Miller", publisher: "Belknap Press of Harvard University Press", year: "1956" },
        { kind: "book", title: "The American Jeremiad", author: "Sacvan Bercovitch", publisher: "University of Wisconsin Press", year: "1978" },
        { kind: "book", title: "Our Beloved Kin: A New History of King Philip's War", author: "Lisa Brooks", publisher: "Yale University Press", year: "2018" },
        { kind: "book", title: "In the Devil's Snare: The Salem Witchcraft Crisis of 1692", author: "Mary Beth Norton", publisher: "Alfred A. Knopf", year: "2002" },
        { kind: "book", title: "Jonathan Edwards: A Life", author: "George M. Marsden", publisher: "Yale University Press", year: "2003" },
      ],
    },
  ],
};
