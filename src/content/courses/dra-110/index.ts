import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const dra110: CourseContent = {
  overview: `Between about 1595 and 1600, at the height of his powers and just before the great tragedies, Shakespeare wrote two kinds of plays side by side. One was the festive comedy: plays shaped by the holidays of the English year, in which lovers flee into a wood on a midsummer night, a shipwrecked girl dresses as a boy, and a steward who would ban cakes and ale is tricked into yellow stockings. The other was the history play: the story of how Henry Bolingbroke deposed Richard II, and how his son Hal, who spent his youth in an Eastcheap tavern with a fat old knight named Falstaff, became Henry V, the conqueror of Agincourt.

This course reads them together, as scripts for performance. We begin with Shakespeare's theater: the Globe and its groundlings, the company of sharers and boy actors he wrote for, blank verse and prose, and the First Folio that saved half his plays. We read A Midsummer Night's Dream and Twelfth Night, with glances at As You Like It and Much Ado About Nothing, through C. L. Barber's account of festive comedy as a movement "through release to clarification." Then we read Henry IV, Part 1, with its prince, its rebels, and its tavern, and Henry V, with its Chorus, its band of brothers, and the soldier Williams who asks who answers for the dead. Holiday and misrule run through both kinds of play, and both end with the holiday's close.

We end with Shakespeare's American life: the frontier cabin where Tocqueville first read Henry V, Lincoln reading Macbeth aloud, the Booth brothers and the Astor Place Riot, Ira Aldridge and Paul Robeson, and free Shakespeare in the park. Each lesson takes about two hours and ends with a session reading the texts themselves.`,
  objectives: [
    "Describe the Elizabethan playhouse, the acting company, and the conditions of performance for which Shakespeare wrote, and explain how the plays reached print.",
    "Read a Shakespeare script as a guide to performance, attending to verse and prose, shared lines, entrances, and silences.",
    "Analyze A Midsummer Night's Dream and Twelfth Night as festive comedies, using C. L. Barber's account of holiday and misrule.",
    "Interpret Henry IV, Part 1 and Henry V, with attention to Hal and Falstaff, honor, kingship, and the costs of war.",
    "Weigh competing interpretations of the plays, from Johnson and Hazlitt to Tillyard, Rabkin, and Greenblatt, and compare major productions and films.",
    "Trace the place of Shakespeare in American life, from colonial theaters and the frontier to Broadway, Hollywood, and the public park.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "A Midsummer Night's Dream", author: "William Shakespeare, ed. Barbara A. Mowat and Paul Werstine", publisher: "Folger Shakespeare Library / Simon & Schuster", year: "2016" },
        { kind: "book", title: "Twelfth Night", author: "William Shakespeare, ed. Barbara A. Mowat and Paul Werstine", publisher: "Folger Shakespeare Library / Simon & Schuster", year: "2005" },
        { kind: "book", title: "Henry IV, Part 1", author: "William Shakespeare, ed. Barbara A. Mowat and Paul Werstine", publisher: "Folger Shakespeare Library / Simon & Schuster", year: "2005" },
        { kind: "book", title: "Henry V", author: "William Shakespeare, ed. Barbara A. Mowat and Paul Werstine", publisher: "Folger Shakespeare Library / Simon & Schuster", year: "2004" },
        { kind: "edition", title: "Folger Shakespeare: The Complete Works", publisher: "Folger Shakespeare Library", url: "https://www.folger.edu/explore/shakespeares-works/", note: "Free annotated texts of every play." },
        { kind: "edition", title: "The First Folio (digital facsimile)", publisher: "Bodleian Library, University of Oxford", url: "https://firstfolio.bodleian.ox.ac.uk/", note: "A complete copy of the 1623 Folio, page by page." },
      ],
    },
    {
      heading: "Introductions",
      items: [
        { kind: "book", title: "Shakespeare's Festive Comedy", author: "C. L. Barber", publisher: "Princeton University Press", year: "1959; reissued 2011" },
        { kind: "book", title: "The Shakespearean Stage, 1574–1642", author: "Andrew Gurr", publisher: "Cambridge University Press", year: "4th ed., 2009" },
        { kind: "book", title: "Shakespeare's Language", author: "Frank Kermode", publisher: "Farrar, Straus and Giroux", year: "2000" },
        { kind: "book", title: "Will in the World: How Shakespeare Became Shakespeare", author: "Stephen Greenblatt", publisher: "W. W. Norton", year: "2004" },
        { kind: "book", title: "Shakespeare's History Plays", author: "E. M. W. Tillyard", publisher: "Chatto & Windus", year: "1944" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Shakespeare and the Problem of Meaning", author: "Norman Rabkin", publisher: "University of Chicago Press", year: "1981", note: "Includes the essay on Henry V as rabbit and duck." },
        { kind: "book", title: "Shakespearean Negotiations", author: "Stephen Greenblatt", publisher: "University of California Press", year: "1988", note: "Includes “Invisible Bullets.”" },
        { kind: "book", title: "Shakespeare: The Invention of the Human", author: "Harold Bloom", publisher: "Riverhead", year: "1998" },
        { kind: "book", title: "Shakespeare Our Contemporary", author: "Jan Kott", publisher: "Doubleday", year: "1964" },
        { kind: "book", title: "Impersonations: The Performance of Gender in Shakespeare's England", author: "Stephen Orgel", publisher: "Cambridge University Press", year: "1996" },
        { kind: "book", title: "Highbrow/Lowbrow: The Emergence of Cultural Hierarchy in America", author: "Lawrence W. Levine", publisher: "Harvard University Press", year: "1988" },
        { kind: "book", title: "Shakespeare in America: An Anthology from the Revolution to Now", author: "James Shapiro, ed.", publisher: "Library of America", year: "2014" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "Shakespeare Documented", publisher: "Folger Shakespeare Library and partners", url: "https://shakespearedocumented.folger.edu/", note: "The surviving records of Shakespeare's life." },
        { kind: "website", title: "Shakespeare's Globe", publisher: "Shakespeare's Globe, London", url: "https://www.shakespearesglobe.com/", note: "The reconstructed theater on Bankside." },
        { kind: "video", title: "Chimes at Midnight", author: "Orson Welles, dir.", year: "1965" },
        { kind: "video", title: "Henry V", author: "Laurence Olivier, dir.", year: "1944" },
      ],
    },
  ],
};
