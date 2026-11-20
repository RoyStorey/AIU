import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const phr201: CourseContent = {
  overview: `Are there good arguments for the existence of God? This course studies the great families of arguments in their classic and contemporary forms, together with the strongest objections to each, and the most serious argument on the other side: the problem of evil.

We begin with the ontological argument: Anselm's *Proslogion*, Gaunilo's lost island, Aquinas's rejection, Descartes and Leibniz, Kant and Frege on existence, and the modal arguments of Malcolm, Hartshorne, Plantinga, and Gödel. We turn to the cosmological arguments: Aristotle's unmoved mover and Aquinas's five ways, the distinction between essentially and accidentally ordered causes, essence and existence, and Edward Feser's five proofs; then Avicenna, Leibniz's principle of sufficient reason, Clarke, the Russell–Copleston debate, and the kalam argument from al-Ghazali to William Lane Craig, with Big Bang cosmology. We study design arguments from the fifth way and Paley's watch through Darwin, intelligent design, and the fine-tuning of the universe. Finally, we examine moral arguments and arguments from religious experience, and the logical and evidential problems of evil, with Plantinga's free will defense, Rowe's fawn, skeptical theism, soul-making, and Marilyn McCord Adams on horrendous evils.

Each argument is set out in numbered steps, with the strongest replies. The course does not tell you what to conclude. It aims to help you see what each argument requires, what its critics deny, and how the arguments weigh together. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Distinguish a priori and a posteriori, deductive and probabilistic arguments for God, and explain what it would mean for such an argument to succeed.",
    "Reconstruct the ontological argument in its classical and modal forms, and evaluate the objections of Gaunilo, Aquinas, Kant, Frege, and the reverse modal argument.",
    "Explain the cosmological arguments of Aristotle, Aquinas, Avicenna, Leibniz, and Craig, including the distinction between essentially and accidentally ordered series and the principle of sufficient reason, and assess their main objections.",
    "Distinguish Thomistic and Paleyan teleology, and evaluate design arguments in the light of Darwin, intelligent design, fine-tuning, the anthropic principle, and the multiverse.",
    "Assess moral arguments and arguments from religious experience, and the replies of naturalistic critics.",
    "Analyze the logical and evidential problems of evil, Plantinga's free will defense, and the responses of skeptical theism, theodicy, and Marilyn McCord Adams, and weigh the arguments for and against God as a whole.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Texts",
      items: [
        { kind: "book", title: "St. Anselm's Proslogium, Monologium, An Appendix in Behalf of the Fool by Gaunilon, and Cur Deus Homo", author: "trans. Sidney Norton Deane", publisher: "Open Court", year: "1903", note: "In the public domain." },
        { kind: "book", title: "Five Proofs of the Existence of God", author: "Edward Feser", publisher: "Ignatius Press", year: "2017" },
        { kind: "book", title: "God, Freedom, and Evil", author: "Alvin Plantinga", publisher: "Harper & Row; Eerdmans", year: "1974; Eerdmans ed., 1977" },
        { kind: "book", title: "Natural Theology", author: "William Paley", publisher: "many editions", year: "1802", note: "In the public domain." },
      ],
    },
    {
      heading: "Studies and Debates",
      items: [
        { kind: "book", title: "The Cosmological Argument", author: "William L. Rowe", publisher: "Princeton University Press", year: "1975" },
        { kind: "book", title: "The Existence of God", author: "Richard Swinburne", publisher: "Oxford University Press", year: "1979; 2nd ed., 2004" },
        { kind: "book", title: "The Miracle of Theism: Arguments for and against the Existence of God", author: "J. L. Mackie", publisher: "Oxford University Press", year: "1982" },
        { kind: "book", title: "Arguing about Gods", author: "Graham Oppy", publisher: "Cambridge University Press", year: "2006" },
      ],
    },
    {
      heading: "The Problem of Evil",
      items: [
        { kind: "book", title: "Evil and the God of Love", author: "John Hick", publisher: "Macmillan", year: "1966" },
        { kind: "book", title: "Horrendous Evils and the Goodness of God", author: "Marilyn McCord Adams", publisher: "Cornell University Press", year: "1999" },
      ],
    },
  ],
};
