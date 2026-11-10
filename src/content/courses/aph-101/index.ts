import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const aph101: CourseContent = {
  overview: `Philosophy began in the Greek cities of Ionia in the sixth century BCE, when a few men tried to explain the world by reason rather than by stories of the gods. It took a new direction in fifth-century Athens, when Socrates, in Cicero's phrase, called philosophy down from the heavens and made it ask how we should live.

This course reads both beginnings. The first three lessons follow the Presocratics through their fragments: Thales, Anaximander, and Anaximenes on the stuff of the world; Xenophanes on the gods; Pythagoras on number; Heraclitus on the logos and the river; Parmenides on being, with Zeno's paradoxes; Empedocles, Anaxagoras, and the Atomists answering him; and the Sophists' debate over law and nature. The last two lessons turn to Socrates, read through Plato's Euthyphro, Meno, Apology, Crito, and Phaedo: his method, his paradoxes, his defense of the examined life, his refusal to escape, and his death.

Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain how the Presocratic fragments and testimonia have come down to us, and read them with appropriate caution.",
    "Describe the contributions of the Milesians, Xenophanes, and the Pythagoreans to the beginnings of philosophy.",
    "Analyze Heraclitus's doctrines of the logos, flux, and the unity of opposites, and Parmenides's argument about being.",
    "Explain how Empedocles, Anaxagoras, and the Atomists answered the Eleatic challenge, and the Sophists' debate over nomos and physis.",
    "Describe the Socratic method and evaluate the Socratic paradoxes and the Euthyphro dilemma.",
    "Interpret the Apology, Crito, and Phaedo, and assess Socrates's reasons for accepting death.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "The Presocratic Philosophers", author: "G. S. Kirk, J. E. Raven, and M. Schofield", publisher: "Cambridge University Press", year: "2nd ed., 1983" },
        { kind: "book", title: "Early Greek Philosophy", author: "trans. and ed. Jonathan Barnes", publisher: "Penguin Classics", year: "rev. ed., 2001" },
        { kind: "book", title: "The Older Sophists", author: "ed. Rosamond Kent Sprague", publisher: "University of South Carolina Press / Hackett", year: "1972; 2001" },
        { kind: "book", title: "Five Dialogues: Euthyphro, Apology, Crito, Meno, Phaedo", author: "Plato, trans. G. M. A. Grube, rev. John M. Cooper", publisher: "Hackett", year: "2nd ed., 2002" },
      ],
    },
    {
      heading: "The Presocratics",
      items: [
        { kind: "book", title: "The Art and Thought of Heraclitus", author: "Charles H. Kahn", publisher: "Cambridge University Press", year: "1979" },
        { kind: "book", title: "The Presocratic Philosophers", author: "Jonathan Barnes", publisher: "Routledge", year: "rev. ed., 1982" },
        { kind: "book", title: "The Sophists", author: "W. K. C. Guthrie", publisher: "Cambridge University Press", year: "1971" },
      ],
    },
    {
      heading: "Socrates",
      items: [
        { kind: "book", title: "Socrates: Ironist and Moral Philosopher", author: "Gregory Vlastos", publisher: "Cornell University Press", year: "1991" },
        { kind: "book", title: "Socrates: A Very Short Introduction", author: "C. C. W. Taylor", publisher: "Oxford University Press", year: "2000" },
        { kind: "book", title: "Socrates on Trial", author: "Thomas C. Brickhouse and Nicholas D. Smith", publisher: "Princeton University Press", year: "1989" },
      ],
    },
  ],
};
