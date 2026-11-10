import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const clt110: CourseContent = {
  overview: `In fifth-century Athens, tragedy and comedy were performed once, at festivals of Dionysus, before thousands of citizens who were also the assembly that voted on war and peace. This course reads the Athenian stage as art and as an act of the city.

It is designed to complement DRA 101, which reads the Oresteia, Oedipus, Antigone, Medea, the Trojan Women, and the Bacchae. Here we begin with the City Dionysia itself: its procession, choregoi, judges, and ceremonies, its actors, masks, and chorus, its audience, and the fine paid by Phrynichus for making Athens weep at the fall of Miletus. We then read plays by each of the three tragedians that DRA 101 does not: Aeschylus's Persians, the only surviving tragedy on a recent event, and Prometheus Bound; Sophocles's Ajax and Philoctetes, about wounded heroes and the Odysseus who pities or deceives them; and Euripides's Alcestis and Hippolytus, about marriage, desire, and the gods. The last lesson turns to Old Comedy and Aristophanes: the Clouds and its Socrates, the Frogs and the contest of Aeschylus and Euripides, and the Lysistrata's strike for peace.

Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the organization and civic meaning of the City Dionysia, including the choregia, the judging, the ceremonies, and the audience.",
    "Explain the conventions of Greek tragedy and Old Comedy: actors, masks, chorus, structure, parabasis, and agon.",
    "Interpret Aeschylus's Persians and Prometheus Bound, and the debate over the latter's authorship.",
    "Interpret Sophocles's Ajax and Philoctetes and Bernard Knox's idea of the Sophoclean hero.",
    "Interpret Euripides's Alcestis and Hippolytus and assess his portrayal of gods and women.",
    "Analyze Aristophanes's Clouds, Frogs, and Lysistrata as comedy and as commentary on Athenian education, poetry, and politics.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "The plays",
      items: [
        { kind: "book", title: "The Complete Greek Tragedies", author: "ed. David Grene and Richmond Lattimore, rev. Mark Griffith and Glenn W. Most", publisher: "University of Chicago Press", year: "3rd ed., 2013" },
        { kind: "book", title: "Clouds, Women at the Thesmophoria, Frogs", author: "Aristophanes, trans. Jeffrey Henderson", publisher: "Focus Publishing / Hackett", year: "2008" },
        { kind: "book", title: "Lysistrata", author: "Aristophanes, trans. Sarah Ruden", publisher: "Hackett", year: "2003" },
      ],
    },
    {
      heading: "The festival and the theater",
      items: [
        { kind: "book", title: "The Dramatic Festivals of Athens", author: "Arthur Pickard-Cambridge, rev. John Gould and D. M. Lewis", publisher: "Oxford University Press", year: "2nd ed., 1968" },
        { kind: "book", title: "Greek Tragedy in Action", author: "Oliver Taplin", publisher: "Routledge", year: "2nd ed., 2003" },
        { kind: "book", title: "Nothing to Do with Dionysos?", author: "ed. John J. Winkler and Froma I. Zeitlin", publisher: "Princeton University Press", year: "1990" },
      ],
    },
    {
      heading: "Studies",
      items: [
        { kind: "book", title: "The Heroic Temper", author: "Bernard M. W. Knox", publisher: "University of California Press", year: "1964" },
        { kind: "book", title: "Inventing the Barbarian", author: "Edith Hall", publisher: "Oxford University Press", year: "1989" },
        { kind: "book", title: "The Art of Euripides", author: "Donald J. Mastronarde", publisher: "Cambridge University Press", year: "2010" },
        { kind: "book", title: "Aristophanes and Athens", author: "Douglas M. MacDowell", publisher: "Oxford University Press", year: "1995" },
      ],
    },
  ],
};
