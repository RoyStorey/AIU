import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aml110: CourseContent = {
  overview: `Between 1850 and 1855, American writers published The Scarlet Letter, Moby-Dick, Walden, and Leaves of Grass. The critic F. O. Matthiessen called those years the American Renaissance. This course reads the writers at its center—Emerson, Thoreau, Hawthorne, and Melville—and the voices around them.

We begin with Emerson's turn from the Unitarian pulpit to Nature, "The American Scholar," the Divinity School Address, and "Self-Reliance," with Margaret Fuller and the Transcendental circle. We follow Thoreau to Walden Pond and to the Concord jail, and read Walden alongside "Civil Disobedience" and his defense of John Brown. We study Hawthorne's haunted tales and The Scarlet Letter, from the scaffold to the forest to the last confession. We spend a lesson with Moby-Dick, from "Call me Ishmael" to the epilogue. And we end with Melville after the whale—"Bartleby," "Benito Cereno," and Billy Budd—the Melville revival, and the writers Matthiessen left out, from Poe and Douglass to Stowe, Whitman, and Dickinson.

Throughout, we ask what it meant to demand "an original relation to the universe," and what these writers found when they looked. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain the origins and central ideas of Transcendentalism and Emerson's call for American intellectual independence.",
    "Interpret Walden and “Civil Disobedience” and trace the connections between Thoreau's nature writing and his politics.",
    "Analyze Hawthorne's use of the Puritan past, ambiguity, and symbol in his tales and The Scarlet Letter.",
    "Read Moby-Dick closely, weighing Ahab's and Ishmael's ways of confronting an unknowable world.",
    "Evaluate the unreliable narrators of Melville's later fiction and their treatment of labor, race, and law.",
    "Assess the making of the American Renaissance canon and the voices it included and excluded.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "Emerson: Essays and Lectures", author: "Ralph Waldo Emerson, ed. Joel Porte", publisher: "Library of America", year: "1983" },
        { kind: "book", title: "Walden, Civil Disobedience, and Other Writings", author: "Henry David Thoreau, ed. William Rossi", publisher: "W. W. Norton", year: "3rd ed., 2008" },
        { kind: "book", title: "The Scarlet Letter and Other Writings", author: "Nathaniel Hawthorne, ed. Leland S. Person", publisher: "W. W. Norton", year: "2005" },
        { kind: "book", title: "Moby-Dick", author: "Herman Melville, ed. Hershel Parker", publisher: "W. W. Norton", year: "3rd ed., 2018" },
        { kind: "book", title: "Melville's Short Novels", author: "Herman Melville, ed. Dan McCall", publisher: "W. W. Norton", year: "2002" },
      ],
    },
    {
      heading: "Criticism and biography",
      items: [
        { kind: "book", title: "American Renaissance", author: "F. O. Matthiessen", publisher: "Oxford University Press", year: "1941" },
        { kind: "book", title: "Studies in Classic American Literature", author: "D. H. Lawrence", publisher: "Thomas Seltzer", year: "1923" },
        { kind: "book", title: "Emerson: The Mind on Fire", author: "Robert D. Richardson Jr.", publisher: "University of California Press", year: "1995" },
        { kind: "book", title: "Henry David Thoreau: A Life", author: "Laura Dassow Walls", publisher: "University of Chicago Press", year: "2017" },
        { kind: "book", title: "Melville: His World and Work", author: "Andrew Delbanco", publisher: "Alfred A. Knopf", year: "2005" },
        { kind: "book", title: "Beneath the American Renaissance", author: "David S. Reynolds", publisher: "Alfred A. Knopf", year: "1988" },
      ],
    },
  ],
};
