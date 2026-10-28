import type { Caveat } from "@/lib/schema";

/**
 * The editors' notes on the hand-written courses: claims that rest on later
 * report rather than secure evidence, that scholars dispute, or that were
 * wrong and have been corrected. They appear in each lesson's Comments &
 * Corrections section. Keyed by course code, then by lesson number.
 *
 * Add a note whenever a claim is softened or fixed after a report, so the
 * record of what changed stays with the lesson.
 */
export const editorial: Record<string, Record<number, Caveat[]>> = {
  "POE 101": {
    1: [
      {
        page: 1, kind: "uncertain",
        claim: "Dickinson's definition of poetry: “If I read a book and it makes my whole body so cold no fire ever can warm me…”",
        note: "Dickinson did not write this down. It survives in a letter Thomas Wentworth Higginson wrote to his wife after visiting her in Amherst in August 1870, recording her conversation. It is probably close to what she said, but it is Higginson's report, which is why the lesson says “is reported to have said.”",
      },
      {
        page: 1, kind: "uncertain",
        claim: "Frost's remark that “poetry is what gets lost in translation.”",
        note: "No source in Frost's own writings or recorded talks has been found for this exact sentence. Versions of it appear in recollections by others, notably his friend Louis Untermeyer, and in many quotation books. Treat it as attributed rather than documented.",
      },
    ],
  },
  "POE 110": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Archilochus was the son of an aristocrat and a slave woman.",
        note: "This comes from ancient biographical tradition (reported by the Athenian Critias, as quoted by Aelian), which may itself have been inferred from the poems. Ancient lives of poets often were. The lesson marks it “according to tradition.”",
      },
      {
        page: 2, kind: "uncertain",
        claim: "Spartan mothers told their sons to come home “with your shield, or on it.”",
        note: "The saying is recorded centuries later, in the collection of Sayings of Spartan Women attributed to Plutarch. It reflects what later Greeks believed about Sparta rather than a documented archaic practice.",
      },
      {
        page: 3, kind: "disputed",
        claim: "The story that Sappho's books were burned by church authorities.",
        note: "The lesson calls this a legend without good evidence, which is the view of most scholars. The legend itself goes back to Renaissance writers; the loss of most of Sappho's poetry is better explained by the decline in copying of her difficult Aeolic dialect.",
      },
    ],
    3: [
      {
        page: 3, kind: "uncertain",
        claim: "Housman told his students that Horace's “Diffugere nives” (Odes 4.7) was the most beautiful poem in ancient literature.",
        note: "The remark is known from a student's recollection of a Cambridge lecture, published after Housman's death; the exact words differ between accounts. It is well attested as an anecdote but is not in Housman's own writings.",
      },
    ],
    4: [
      {
        page: 7, kind: "disputed",
        claim: "Beatrice was Bice Portinari, daughter of Folco Portinari.",
        note: "The identification comes from Boccaccio, writing decades after Dante's death. Most scholars accept it, as the lesson says, but it cannot be confirmed from Dante's own works, and some readers regard Beatrice as chiefly a symbolic figure.",
      },
    ],
  },
  "POE 201": {
    2: [
      {
        page: 6, kind: "disputed",
        claim: "Spenser died in London in 1599 “for lack of bread.”",
        note: "The phrase is Ben Jonson's, recorded by William Drummond in his notes of their conversations about twenty years later. Spenser still had a royal pension and had just been sent to London with official dispatches, so many historians doubt that he died destitute.",
      },
    ],
  },
  "POE 210": {
    1: [
      {
        page: 2, kind: "uncertain",
        claim: "Wordsworth said of Blake: “There is no doubt this poor man was mad, but there is something in the madness of this man which interests me more than the sanity of Lord Byron and Walter Scott.”",
        note: "The remark is known from Henry Crabb Robinson, a friend of both men, who recorded it in his reminiscences. It is a reliable witness, but a second-hand one; the anecdote of Blake tapping his forehead (“Here”) likewise comes from a visitor's account.",
      },
    ],
  },
  "POE 220": {
    3: [
      {
        page: 1, kind: "uncertain",
        claim: "Virgil's “licking his lines into shape,” his reading to Augustus and Octavia, his request that the Aeneid be burned, and his self-written epitaph.",
        note: "All of these come from the ancient Life of Virgil attributed to Donatus, which drew on Suetonius, writing more than a century after Virgil's death. Scholars take its outline seriously but treat its anecdotes with caution; the epitaph in particular may be a later composition in Virgil's manner.",
      },
    ],
  },
  "POE 301": {
    1: [
      {
        page: 4, kind: "uncertain",
        claim: "Tennyson's joke that he understood only the first and last lines of Sordello, and both were lies.",
        note: "A literary anecdote repeated in many memoirs and histories, and attributed to Tennyson in most; it is not documented in his letters. Similar jokes about Sordello were attributed to others, including Jane Carlyle.",
      },
      {
        page: 5, kind: "uncertain",
        claim: "In “Parting at Morning,” “him” is the sun, and Browning said so.",
        note: "Browning's explanation was given in answer to a reader's query late in his life and is known from that report. Some readers continue to take “him” as the man; the lesson's reading follows Browning's.",
      },
    ],
    2: [
      {
        page: 8, kind: "uncertain",
        claim: "Hopkins's last words were “I am so happy, I am so happy.”",
        note: "Recorded by members of his Jesuit community who were present. Last words are often shaped in the retelling; the report is early and plausible but not independently confirmed.",
      },
    ],
  },
  "POE 401": {
    5: [
      {
        page: 2, kind: "corrected",
        claim: "Eliot: “The poet's criticism is a by-product of his private poetry-workshop.”",
        note: "The lesson first gave this in the third person, as if it were a general maxim. Eliot's actual phrase is first-person, describing his own essays: “a by-product of my private poetry-workshop,” in “The Frontiers of Criticism” (1956). The lesson has been corrected.",
      },
      {
        page: 6, kind: "corrected",
        claim: "Mandelstam “died in a labor camp after writing a poem mocking Stalin.”",
        note: "Mandelstam was first arrested in 1934 after reciting his epigram on Stalin, and exiled; he was arrested again in 1938 and died that December in a transit camp near Vladivostok, before reaching a labor camp. The lesson has been corrected.",
      },
      {
        page: 6, kind: "uncertain",
        claim: "Mandelstam's remark: “Only in Russia is poetry respected—it gets people killed.”",
        note: "Known from the memoir of his widow, Nadezhda Mandelstam (Hope Against Hope, 1970; English translation by Max Hayward). It is a reliable witness to his conversation, but a remembered one, so the lesson says “is reported to have said.”",
      },
    ],
  },
};
