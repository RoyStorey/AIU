import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const brl110: CourseContent = {
  overview: `Between Thomas More's Utopia in 1516 and Milton's Paradise Lost in 1667, English became one of the great literary languages of Europe. This course follows that transformation through an age of humanist learning, religious revolution, courtly splendor, and civil war. (Shakespeare's plays are studied in the Drama concentration.)

We begin with humanism and Utopia: Erasmus and More, the debate over counsel, the island without private property, Tyndale's Bible, and More's death. We read the Elizabethan sonnet—Wyatt, Surrey, Sidney's Astrophil and Stella and Defence of Poesy, Spenser's Amoretti—and the pastoral quarrel of Marlowe and Ralegh. We spend a lesson with the first book of The Faerie Queene, the Legend of Holiness, and Spenser's troubling life in Ireland. We study the poetry of the seventeenth-century crisis: Donne's songs, sonnets, and devotions, Herbert's Temple, Jonson's classical plain style, and Marvell between Cromwell and the garden. And we end with Milton and Paradise Lost: Satan in Hell, Adam and Eve in Eden, the Fall, the fortunate fall, and the last lines.

Throughout, we read aloud, attend to form, and weigh the arguments of critics from Sidney and Johnson to Eliot, C. S. Lewis, and Stanley Fish. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain humanism and the English Reformation and their effect on English writing and the English Bible.",
    "Interpret Utopia's dialogue form and evaluate competing readings of its purpose.",
    "Analyze the Petrarchan sonnet and its English transformations by Wyatt, Sidney, Spenser, and Shakespeare.",
    "Read Spenser's allegory in Book I of The Faerie Queene on its moral, religious, and political levels.",
    "Distinguish the metaphysical and classical styles of Donne, Herbert, Jonson, and Marvell.",
    "Interpret Paradise Lost and weigh the debates over Satan, Eve, free will, and the fortunate fall.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Texts",
      items: [
        { kind: "book", title: "Utopia", author: "Thomas More, ed. George M. Logan, trans. Robert M. Adams", publisher: "Cambridge University Press", year: "3rd ed., 2016" },
        { kind: "book", title: "The Faerie Queene, Book One", author: "Edmund Spenser, ed. Carol V. Kaske", publisher: "Hackett", year: "2006" },
        { kind: "book", title: "John Donne: The Major Works", author: "ed. John Carey", publisher: "Oxford World's Classics", year: "2000" },
        { kind: "book", title: "Paradise Lost", author: "John Milton, ed. Gordon Teskey", publisher: "W. W. Norton", year: "2005" },
        { kind: "website", title: "Luminarium: Anthology of English Literature", publisher: "ed. Anniina Jokinen", url: "https://www.luminarium.org/" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "Renaissance Self-Fashioning: From More to Shakespeare", author: "Stephen Greenblatt", publisher: "University of Chicago Press", year: "1980" },
        { kind: "book", title: "The Allegory of Love", author: "C. S. Lewis", publisher: "Oxford University Press", year: "1936" },
        { kind: "book", title: "Surprised by Sin: The Reader in Paradise Lost", author: "Stanley Fish", publisher: "Harvard University Press", year: "2nd ed., 1997" },
        { kind: "book", title: "John Donne: Life, Mind and Art", author: "John Carey", publisher: "Faber and Faber", year: "rev. ed., 1990" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "Edmund Spenser: A Life", author: "Andrew Hadfield", publisher: "Oxford University Press", year: "2012" },
        { kind: "book", title: "Milton and the English Revolution", author: "Christopher Hill", publisher: "Faber and Faber", year: "1977" },
        { kind: "book", title: "The English Poems of George Herbert", author: "ed. Helen Wilcox", publisher: "Cambridge University Press", year: "2007" },
      ],
    },
  ],
};
