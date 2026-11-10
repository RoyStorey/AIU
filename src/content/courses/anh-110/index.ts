import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const anh110: CourseContent = {
  overview: `A village of huts on the Palatine became, in less than seven centuries, the master of the Mediterranean, and then destroyed its own free government in a generation of civil war. This course follows the Roman Republic from its founding legends to the murder of Julius Caesar.

We begin with the stories the Romans told about themselves, Aeneas, Romulus and Remus, the kings, and Lucretia, and test them against archaeology. We then study how the Republic was governed: consuls and senate, assemblies and tribunes, the Twelve Tables, the family, patronage, and Polybius's theory of the mixed constitution. The middle lesson follows the conquest of Italy and the wars with Pyrrhus, Carthage, and the Hellenistic kingdoms, from Cannae to the burning of Carthage and Corinth in 146 BCE. The last two lessons trace the crisis that followed, from the Gracchi through Marius, Sulla, Pompey, and Cicero, to Caesar's conquest of Gaul, the Rubicon, the dictatorship, and the Ides of March, and ask why the Republic fell.

Each lesson takes about two hours and ends with a session working directly with the ancient sources.`,
  objectives: [
    "Evaluate the literary and archaeological evidence for early Rome and its kings.",
    "Explain the institutions of the Roman Republic and the outcome of the Conflict of the Orders.",
    "Analyze Polybius's account of the mixed constitution and its influence on later republics.",
    "Narrate Rome's conquest of Italy and the Mediterranean, including the Punic Wars, and assess explanations of Roman expansion.",
    "Trace the crisis of the Republic from the Gracchi to Catiline.",
    "Assess competing explanations for the fall of the Republic and the role of Julius Caesar.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Ancient sources",
      items: [
        { kind: "book", title: "The Early History of Rome: Books I–V", author: "Livy, trans. Aubrey de Sélincourt", publisher: "Penguin Classics", year: "2002" },
        { kind: "book", title: "The Rise of the Roman Empire", author: "Polybius, trans. Ian Scott-Kilvert", publisher: "Penguin Classics", year: "1979" },
        { kind: "book", title: "Roman Lives: A Selection of Eight Lives", author: "Plutarch, trans. Robin Waterfield", publisher: "Oxford World's Classics", year: "1999" },
        { kind: "book", title: "The Gallic War", author: "Julius Caesar, trans. Carolyn Hammond", publisher: "Oxford World's Classics", year: "1996" },
        { kind: "book", title: "The Twelve Caesars", author: "Suetonius, trans. Robert Graves, rev. J. B. Rives", publisher: "Penguin Classics", year: "2007" },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "SPQR: A History of Ancient Rome", author: "Mary Beard", publisher: "Liveright / Profile", year: "2015" },
        { kind: "book", title: "The Beginnings of Rome", author: "T. J. Cornell", publisher: "Routledge", year: "1995" },
        { kind: "book", title: "The Constitution of the Roman Republic", author: "Andrew Lintott", publisher: "Oxford University Press", year: "1999" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "War and Imperialism in Republican Rome, 327–70 B.C.", author: "William V. Harris", publisher: "Oxford University Press", year: "1979" },
        { kind: "book", title: "The Roman Revolution", author: "Ronald Syme", publisher: "Oxford University Press", year: "1939" },
        { kind: "book", title: "The Last Generation of the Roman Republic", author: "Erich S. Gruen", publisher: "University of California Press", year: "1974" },
        { kind: "book", title: "Roman Republics", author: "Harriet I. Flower", publisher: "Princeton University Press", year: "2010" },
      ],
    },
  ],
};
