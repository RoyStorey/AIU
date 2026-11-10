import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const anh101: CourseContent = {
  overview: `Between the collapse of the Bronze Age palaces and the death of Socrates in 399 BCE, the Greeks invented the polis, the citizen army, written law, democracy, and history itself. This course follows that story from the evidence up.

We begin in the Dark Age, with the ruins of Mycenae, the rich burial at Lefkandi, and the eighth-century revival of trade, writing, and colonization that produced the polis. We then trace the archaic city: hoplites and tyrants, the strange discipline of Sparta, and the reforms of Solon and Cleisthenes at Athens. The middle lessons read Herodotus on the Persian Wars, from the Ionian Revolt through Marathon, Thermopylae, Salamis, and Plataea, and then follow Athens as it turned an alliance into an empire and a reformed constitution into a radical democracy. The last lesson reads Thucydides on the Peloponnesian War, from the plague and the Melian Dialogue to Sicily and surrender, and ends with the Thirty, the amnesty of 403, and the trial of Socrates.

Each lesson takes about two hours and ends with a session working directly with the ancient sources.`,
  objectives: [
    "Explain how the polis emerged from the Greek Dark Age, using archaeological and literary evidence.",
    "Describe the development of archaic Sparta and Athens, including the reforms attributed to Lycurgus, Solon, and Cleisthenes.",
    "Narrate the Persian Wars and evaluate Herodotus as a historian.",
    "Analyze the growth of the Athenian empire and the workings of the Athenian democracy.",
    "Interpret Thucydides's account of the Peloponnesian War, including the Mytilenean debate, Corcyra, and the Melian Dialogue.",
    "Assess the causes and meaning of the trial and death of Socrates.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Ancient sources",
      items: [
        { kind: "book", title: "The Histories", author: "Herodotus, trans. Aubrey de Sélincourt, rev. John Marincola", publisher: "Penguin Classics", year: "2003" },
        { kind: "book", title: "The Peloponnesian War", author: "Thucydides, trans. Martin Hammond", publisher: "Oxford World's Classics", year: "2009" },
        { kind: "book", title: "The Athenian Constitution", author: "Aristotle (attributed), trans. P. J. Rhodes", publisher: "Penguin Classics", year: "1984" },
        { kind: "book", title: "On Sparta", author: "Plutarch, trans. Richard J. A. Talbert", publisher: "Penguin Classics", year: "2nd ed., 2005" },
        { kind: "book", title: "The Trial and Death of Socrates", author: "Plato, trans. G. M. A. Grube, rev. John M. Cooper", publisher: "Hackett", year: "3rd ed., 2000" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "Ancient Greece: A Political, Social, and Cultural History", author: "Sarah B. Pomeroy, Stanley M. Burstein, Walter Donlan, Jennifer Tolbert Roberts", publisher: "Oxford University Press", year: "4th ed., 2017" },
        { kind: "book", title: "Archaic Greece: The Age of Experiment", author: "Anthony Snodgrass", publisher: "University of California Press", year: "1980" },
        { kind: "book", title: "Polis: An Introduction to the Ancient Greek City-State", author: "Mogens Herman Hansen", publisher: "Oxford University Press", year: "2006" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Spartans", author: "Paul Cartledge", publisher: "Vintage", year: "2004" },
        { kind: "book", title: "Persian Fire: The First World Empire and the Battle for the West", author: "Tom Holland", publisher: "Doubleday", year: "2005" },
        { kind: "book", title: "The Athenian Democracy in the Age of Demosthenes", author: "Mogens Herman Hansen", publisher: "Blackwell / University of Oklahoma Press", year: "1991" },
        { kind: "book", title: "A War Like No Other", author: "Victor Davis Hanson", publisher: "Random House", year: "2005" },
      ],
    },
  ],
};
