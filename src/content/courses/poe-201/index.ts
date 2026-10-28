import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const poe201: CourseContent = {
  overview: `In the 1530s a diplomat at the court of Henry VIII brought home from Italy a fourteen-line poem called the sonnet. A century later, English poets had written the greatest love poems, and some of the greatest religious poems, in the language. This course tells the story of that century.

We begin with Sir Thomas Wyatt and the Earl of Surrey, who translated Petrarch at a court where a careless word could lead to the scaffold, and who gave English the sonnet and blank verse. We read Sir Philip Sidney's Astrophil and Stella and his Defence of Poesy, and Edmund Spenser's Amoretti, a sonnet sequence that ends, unusually, in marriage. We spend a full lesson on Shakespeare's Sonnets, the summit of the form. We read John Donne, who made the lyric argue, and the “metaphysical” poets who followed him. And we end with Ben Jonson's classical clarity, the Cavalier poets, George Herbert's devotional masterpieces, Andrew Marvell's gardens and seductions, and the women poets—Aemilia Lanyer, Mary Wroth, Katherine Philips—who claimed the lyric for themselves.

This course builds directly on POE 110, which traced the lyric from Sappho to Petrarch; the English poets you meet here were Petrarch's heirs and his critics. Each lesson takes about two hours, with further reading and recordings on the reference shelf.`,
  objectives: [
    "Explain how the Petrarchan sonnet came to Tudor England, and compare Wyatt's and Surrey's transformations of Petrarch in form, meter, and tone.",
    "Analyze Sidney's Astrophil and Stella and Spenser's Amoretti, and explain the central arguments of Sidney's Defence of Poesy.",
    "Interpret Shakespeare's Sonnets closely, attending to their structure, wordplay, and themes of time, poetry, love, and desire.",
    "Analyze Donne's love poems and Holy Sonnets, and define the metaphysical conceit and the history of the term “metaphysical.”",
    "Describe the classical lyric of Jonson and the Cavaliers, the devotional poetry of Herbert, and the lyrics of Marvell and of the period's women poets.",
    "Write close readings that relate a poem's form and voice to its meaning and place it within the tradition from Petrarch onward.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Editions and Anthologies",
      items: [
        { kind: "book", title: "The Norton Anthology of English Literature, Volume B: The Sixteenth Century and the Early Seventeenth Century", author: "Stephen Greenblatt, gen. ed.", publisher: "W. W. Norton", year: "10th ed., 2018", note: "Nearly every poem in this course, with good notes." },
        { kind: "book", title: "Sir Thomas Wyatt: The Complete Poems", author: "R. A. Rebholz, ed.", publisher: "Penguin Classics", year: "1978" },
        { kind: "book", title: "Sir Philip Sidney: The Major Works", author: "Katherine Duncan-Jones, ed.", publisher: "Oxford World's Classics", year: "2002" },
        { kind: "book", title: "Shakespeare's Sonnets", author: "Stephen Booth, ed.", publisher: "Yale University Press", year: "1977", note: "Facsimile of the 1609 text with an exhaustive commentary." },
        { kind: "book", title: "Shakespeare's Sonnets", author: "Katherine Duncan-Jones, ed.", publisher: "Arden Shakespeare", year: "rev. ed., 2010", note: "The best compact annotated edition." },
        { kind: "book", title: "John Donne: The Major Works", author: "John Carey, ed.", publisher: "Oxford World's Classics", year: "2000" },
        { kind: "book", title: "The English Poems of George Herbert", author: "Helen Wilcox, ed.", publisher: "Cambridge University Press", year: "2007" },
        { kind: "book", title: "Andrew Marvell: The Complete Poems", author: "Elizabeth Story Donno, ed.", publisher: "Penguin Classics", year: "1972" },
      ],
    },
    {
      heading: "Free Texts and Resources",
      items: [
        { kind: "edition", title: "The Poems of John Donne", author: "Herbert J. C. Grierson, ed.", publisher: "Project Gutenberg (Oxford, 1912), vol. 1", url: "https://www.gutenberg.org/ebooks/48688" },
        { kind: "edition", title: "The Poems of John Donne: Introduction and Commentary", author: "Herbert J. C. Grierson, ed.", publisher: "Project Gutenberg (Oxford, 1912), vol. 2", url: "https://www.gutenberg.org/ebooks/48772" },
        { kind: "website", title: "Shakespeare's Sonnets", publisher: "Folger Shakespeare Library", url: "https://www.folger.edu/explore/shakespeares-works/shakespeares-sonnets/" },
        { kind: "website", title: "Luminarium: Anthology of English Literature", url: "https://www.luminarium.org", note: "Texts and essays for the medieval and Renaissance poets." },
        { kind: "website", title: "The Sun Rising", author: "John Donne", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/44129/the-sun-rising" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "English Literature in the Sixteenth Century, Excluding Drama", author: "C. S. Lewis", publisher: "Oxford University Press", year: "1954" },
        { kind: "book", title: "The Art of Shakespeare's Sonnets", author: "Helen Vendler", publisher: "Harvard University Press", year: "1997" },
        { kind: "book", title: "John Donne: Life, Mind and Art", author: "John Carey", publisher: "Faber and Faber", year: "1981" },
        { kind: "book", title: "Selected Essays", author: "T. S. Eliot", publisher: "Faber and Faber", year: "1932", note: "“The Metaphysical Poets” and “Andrew Marvell,” both 1921." },
        { kind: "book", title: "The Well Wrought Urn", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947", note: "Chapter 1, “The Language of Paradox,” on Donne's “Canonization.”" },
        { kind: "book", title: "The Poetry of Meditation", author: "Louis L. Martz", publisher: "Yale University Press", year: "1954", note: "On the religious poetry of Donne, Herbert, and their contemporaries." },
      ],
    },
    {
      heading: "Lectures and Recordings",
      items: [
        { kind: "audio", title: "John Donne", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2023", url: "https://www.bbc.co.uk/programmes/m001gx0k" },
        { kind: "audio", title: "The Metaphysical Poets", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2008", url: "https://www.bbc.co.uk/programmes/b00cbqhq" },
        { kind: "audio", title: "George Herbert", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", year: "2024", url: "https://www.bbc.co.uk/programmes/m0024lyy" },
        { kind: "audio", title: "Heaven-Bred Poesy: Philip Sidney and Edmund Spenser", author: "Peter Adamson", publisher: "History of Philosophy Without Any Gaps, episode 423", url: "https://www.historyofphilosophy.net/elizabethan-poetry" },
      ],
    },
  ],
};
