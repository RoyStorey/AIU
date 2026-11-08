import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const dra101: CourseContent = {
  overview: `In the fifth century BC, the citizens of Athens gathered each spring in the theater of Dionysus, on the slope below the Acropolis, to watch the most terrible things human beings can do and suffer: a queen murdering her husband in his bath, a king discovering that he has killed his father and married his mother, a mother tearing her son apart on a mountainside. Out of a festival for the god of wine, a city invented tragedy, and the thirty-two plays that survive have been performed, translated, and argued over ever since.

This course reads the three great tragedians and the critic who first tried to explain them. We begin with the festival itself: the theater, the masks, the chorus, the competition, and the city that watched. We read Aeschylus's Oresteia, the only surviving trilogy, which moves from revenge to the founding of a court of law; Sophocles's Oedipus the King and Antigone, with their heroes who will not yield; and Euripides's Medea, Trojan Women, and Bacchae, the work of the restless, questioning poet whom his contemporaries mocked and later ages loved. We end with Aristotle's Poetics—pity and fear, catharsis, reversal, recognition, and hamartia—and the long afterlife of tragedy in Hegel and Nietzsche, in Seneca and Racine, and on the American stage, from Eugene O'Neill and Arthur Miller to Martha Graham, Rita Dove, and Bryan Doerries's Theater of War.

Throughout, we read the plays as scripts for performance and as works of civic thought, written for citizens who had to decide questions of war, justice, and power. Each lesson takes about two hours and ends with a session reading the texts themselves.`,
  objectives: [
    "Describe the festival of the City Dionysia, the physical theater, and the conventions of Greek tragic performance: actors, masks, chorus, and competition.",
    "Analyze the structure and themes of Aeschylus's Oresteia, including its movement from revenge to law.",
    "Interpret Sophocles's Oedipus the King and Antigone, with attention to dramatic irony, the heroic temper, and the conflict between family and city.",
    "Explain what is distinctive about Euripides's drama—realism, rhetoric, sympathy for the powerless, and the deus ex machina—through Medea, the Trojan Women, and the Bacchae.",
    "Define and apply the central terms of Aristotle's Poetics, and weigh competing interpretations of catharsis and hamartia.",
    "Trace the afterlife of Greek tragedy in philosophy, in European drama and opera, and on the American stage.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "The Oresteia", author: "Aeschylus, trans. Robert Fagles, intro. W. B. Stanford and Robert Fagles", publisher: "Penguin Classics", year: "1977" },
        { kind: "book", title: "The Three Theban Plays", author: "Sophocles, trans. Robert Fagles, intro. Bernard Knox", publisher: "Penguin Classics", year: "1984" },
        { kind: "book", title: "Medea and Other Plays", author: "Euripides, trans. James Morwood, intro. Edith Hall", publisher: "Oxford World's Classics", year: "1997" },
        { kind: "book", title: "The Bacchae and Other Plays", author: "Euripides, trans. John Davie", publisher: "Penguin Classics", year: "2005" },
        { kind: "book", title: "Poetics", author: "Aristotle, trans. Malcolm Heath", publisher: "Penguin Classics", year: "1996" },
        { kind: "book", title: "The Complete Greek Tragedies", author: "David Grene and Richmond Lattimore, eds.", publisher: "University of Chicago Press", year: "3rd ed., 2013", note: "All thirty-two plays in nine volumes; the standard American translation." },
        { kind: "edition", title: "Greek and Roman Materials", publisher: "Perseus Digital Library, Tufts University", url: "https://www.perseus.tufts.edu/hopper/collection?collection=Perseus:collection:Greco-Roman", note: "The Greek texts of all the tragedians, with older English translations." },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "Greek Tragedy in Action", author: "Oliver Taplin", publisher: "Routledge", year: "1978", note: "How the plays worked in the theater." },
        { kind: "book", title: "Reading Greek Tragedy", author: "Simon Goldhill", publisher: "Cambridge University Press", year: "1986" },
        { kind: "book", title: "The Cambridge Companion to Greek Tragedy", author: "P. E. Easterling, ed.", publisher: "Cambridge University Press", year: "1997" },
        { kind: "book", title: "Greek Tragedy: Suffering under the Sun", author: "Edith Hall", publisher: "Oxford University Press", year: "2010" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Myth and Tragedy in Ancient Greece", author: "Jean-Pierre Vernant and Pierre Vidal-Naquet", publisher: "Zone Books", year: "1988" },
        { kind: "book", title: "The Heroic Temper: Studies in Sophoclean Tragedy", author: "Bernard Knox", publisher: "University of California Press", year: "1964" },
        { kind: "book", title: "The Greeks and the Irrational", author: "E. R. Dodds", publisher: "University of California Press", year: "1951" },
        { kind: "book", title: "The Fragility of Goodness: Luck and Ethics in Greek Tragedy and Philosophy", author: "Martha C. Nussbaum", publisher: "Cambridge University Press", year: "1986" },
        { kind: "book", title: "The Death of Tragedy", author: "George Steiner", publisher: "Faber and Faber", year: "1961" },
        { kind: "book", title: "The Theater of War: What Ancient Greek Tragedies Can Teach Us Today", author: "Bryan Doerries", publisher: "Knopf", year: "2015" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "APGRD: Archive of Performances of Greek and Roman Drama", publisher: "University of Oxford", url: "https://www.apgrd.ox.ac.uk/", note: "A searchable record of modern productions." },
        { kind: "website", title: "Theater of War Productions", publisher: "Theater of War Productions", url: "https://theaterofwar.com/" },
        { kind: "website", title: "Didaskalia: The Journal for Ancient Performance", publisher: "Didaskalia", url: "https://www.didaskalia.net/", note: "Reviews and studies of ancient drama in performance." },
      ],
    },
  ],
};
