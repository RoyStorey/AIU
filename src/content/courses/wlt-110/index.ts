import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const wlt110: CourseContent = {
  overview: `In the middle of his life, an exiled Florentine poet imagined himself lost in a dark wood, and led by Virgil down through Hell, up the mountain of Purgatory, and by Beatrice through the heavens to the vision of God. This course reads Dante's Divine Comedy canto by canto, in its Italian with plain English renderings, alongside a recommended modern translation.

We begin with Dante's Florence, his love for Beatrice and the Vita Nuova, his exile in 1302, and the design of the poem: the vernacular, terza rima, the hundred cantos, the medieval cosmos, and the four senses of allegory. Two lessons descend through the Inferno, from the gate and Limbo to Francesca, Farinata, Brunetto Latini, the simoniac popes, Ulysses in the flame, Ugolino in the ice, and Lucifer at the center. One lesson climbs the Purgatorio, from Cato's shore and Manfred's mercy through the terraces and Virgil's teaching on love to the wall of fire and Beatrice in Eden. And the last rises through the Paradiso, from Piccarda's peace to Cacciaguida, the eagle of justice, the celestial rose, Bernard's prayer, and the love that moves the sun and the other stars.

Throughout, we ask how a poem of judgment becomes a poem of love, and how Dante's pity, anger, and hope shape what he sees. Each lesson takes about two hours and ends with a session working directly with the text.`,
  objectives: [
    "Place the Comedy in the politics of Dante's Florence, his exile, and his love for Beatrice.",
    "Explain the poem's structure: terza rima, the hundred cantos, the medieval cosmos, and the moral order of the three realms.",
    "Read the Comedy's allegory on its literal, moral, and figural levels.",
    "Interpret the major episodes of the Inferno and weigh the tension between pity and judgment.",
    "Explain the Purgatorio's teaching on love and free will and its picture of a community of hope.",
    "Analyze how the Paradiso represents what it declares cannot be said, and trace the Comedy's afterlife.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Translations",
      items: [
        { kind: "book", title: "The Divine Comedy (Inferno, Purgatorio, Paradiso)", author: "Dante Alighieri, trans. Robert and Jean Hollander", publisher: "Anchor Books", year: "2000–2007" },
        { kind: "book", title: "The Divine Comedy", author: "Dante Alighieri, trans. Allen Mandelbaum", publisher: "Everyman's Library", year: "1995" },
        { kind: "book", title: "The Divine Comedy", author: "Dante Alighieri, trans. Henry Wadsworth Longfellow", publisher: "Public domain (1867); many editions" },
      ],
    },
    {
      heading: "Criticism and biography",
      items: [
        { kind: "book", title: "Reading Dante: From Here to Eternity", author: "Prue Shaw", publisher: "Liveright", year: "2014" },
        { kind: "book", title: "Dante: The Story of His Life", author: "Marco Santagata", publisher: "Belknap Press of Harvard University Press", year: "2016" },
        { kind: "book", title: "Dante: The Poetics of Conversion", author: "John Freccero", publisher: "Harvard University Press", year: "1986" },
        { kind: "book", title: "Dante, Poet of the Secular World", author: "Erich Auerbach", publisher: "University of Chicago Press", year: "1961" },
        { kind: "book", title: "Dante", author: "R. W. B. Lewis", publisher: "Penguin Lives", year: "2001" },
      ],
    },
  ],
};
