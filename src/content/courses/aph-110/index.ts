import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aph110: CourseContent = {
  overview: `Plato's Republic asks a single question: is it better to be just than unjust, even for someone who could get away with injustice? In answering it, the book builds a city in speech, divides the soul into three parts, proposes philosopher-kings, and offers some of the most famous images in Western thought.

This course reads the Republic book by book. We begin with Book 1, where Cephalus, Polemarchus, and Thrasymachus offer their accounts of justice and Socrates refutes them. Books 2 and 3 bring Glaucon's and Adeimantus's challenge, the Ring of Gyges, the city of pigs, the education of the guardians, and the noble lie. Books 4 and 5 define justice in the city and the soul and face the three waves: women guardians, the abolition of the family, and the rule of philosophers. Books 6 and 7 offer the ship of state, the sun, the divided line, and the cave. Books 8 through 10 trace the decline from aristocracy to tyranny, prove the happiness of the just, banish the imitative poets, and end with the Myth of Er.

Each lesson takes about two hours and ends with a session working directly with the text.`,
  objectives: [
    "Explain the challenge posed by Thrasymachus, Glaucon, and Adeimantus, and why it shapes the whole Republic.",
    "Describe the city in speech, the education of the guardians, and the controversy over censorship and the noble lie.",
    "Analyze the definitions of the four virtues in the city and the soul, and the argument for the three parts of the soul.",
    "Evaluate the three waves of Book 5, including Plato's arguments about women and the family.",
    "Interpret the images of the sun, the divided line, and the cave, and the education of the philosopher-rulers.",
    "Assess the decline of constitutions, the proofs of the just life's happiness, the critique of poetry, and the Myth of Er.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Translations",
      items: [
        { kind: "book", title: "The Republic of Plato", author: "trans. Allan Bloom", publisher: "Basic Books", year: "2nd ed., 1991" },
        { kind: "book", title: "Republic", author: "Plato, trans. G. M. A. Grube, rev. C. D. C. Reeve", publisher: "Hackett", year: "1992" },
      ],
    },
    {
      heading: "Guides",
      items: [
        { kind: "book", title: "An Introduction to Plato's Republic", author: "Julia Annas", publisher: "Oxford University Press", year: "1981" },
        { kind: "book", title: "Plato's Republic: A Biography", author: "Simon Blackburn", publisher: "Atlantic Books / Grove", year: "2006" },
        { kind: "book", title: "The Cambridge Companion to Plato's Republic", author: "ed. G. R. F. Ferrari", publisher: "Cambridge University Press", year: "2007" },
      ],
    },
    {
      heading: "Critics and interpreters",
      items: [
        { kind: "book", title: "The Open Society and Its Enemies, Volume 1: The Spell of Plato", author: "Karl Popper", publisher: "Routledge / Princeton University Press", year: "1945" },
        { kind: "book", title: "Plato's Republic: Critical Essays", author: "ed. Richard Kraut", publisher: "Rowman & Littlefield", year: "1997" },
        { kind: "book", title: "Politics", author: "Aristotle, trans. C. D. C. Reeve", publisher: "Hackett", year: "1998" },
      ],
    },
  ],
};
