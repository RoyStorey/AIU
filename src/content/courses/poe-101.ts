import type { CourseContent } from "@/lib/schema";

export const poe101: CourseContent = {
  overview: `Poetry is language under pressure. In a poem, every syllable has been weighed: the length of the line, the place where a sentence breaks, the sound of one vowel answering another. This course teaches you to hear that pressure and to describe it precisely.

We begin with the act of reading slowly, then learn the technical vocabulary that poets themselves use—meter, rhyme, stanza, form, figure, voice. By the end you will be able to scan a line of blank verse, recognize a sonnet's turn or a villanelle's refrains, and write a close reading that explains not only *what* a poem means but *how* it comes to mean it.`,
  objectives: [
    "Read a poem aloud with attention to its rhythm and syntax.",
    "Scan accentual-syllabic verse and name the common meters.",
    "Identify the major fixed forms—sonnet, villanelle, ode, ballad—and explain what each form makes possible.",
    "Analyze image, metaphor, and symbol, and distinguish among them.",
    "Write a short close reading that ties a poem's technique to its meaning.",
  ],
  lessons: [
    {
      title: "Reading Slowly",
      summary: "What makes a poem different from prose, and how to begin reading one.",
      lecture: `## The poem as an event in time

Prose is built to be read quickly; poetry is built to be read *slowly*. A novel can be skimmed and still largely understood. A poem cannot, because its meaning lives in details that skimming erases: where a line ends, which word is repeated, how one sound echoes another.

The single most important habit in this course is therefore simple: **read every poem aloud, at least twice.** The first reading is for the sense of the sentences. The second is for the sound. Poems were spoken long before they were printed, and most still assume a reader who hears them.

## Line and sentence

The basic unit of prose is the sentence. Poetry has two units working at once: the **sentence** and the **line**. Sometimes they coincide; often they do not. When a sentence runs past the end of a line, we call it **enjambment**; when a line ends with a pause in the syntax, it is **end-stopped**.

Consider the opening of Shakespeare's Sonnet 73:

> That time of year thou mayst in me behold
> When yellow leaves, or none, or few, do hang
> Upon those boughs which shake against the cold,
> Bare ruin'd choirs, where late the sweet birds sang.

The first line ends on *behold*, and we must cross the line break to learn what we are to behold. The second line ends on *hang*, and for a moment the leaves themselves hang at the edge of the line before the sentence continues. Notice too the hesitation in "yellow leaves, or none, or few"—the speaker corrects himself twice, as if looking more closely at the bare branch. The syntax enacts the act of looking.

## Three questions for any poem

When you meet a poem for the first time, ask:

1. **Who is speaking, and to whom?** Poems have speakers (sometimes called *personae*) who are not necessarily the poet. Sonnet 73 is addressed to a "thou" whom the speaker loves.
2. **What is the situation?** Something prompts the poem: a season, a loss, a question, a sight.
3. **Where does the poem turn?** Nearly every poem changes direction somewhere—a shift in tone, an argument reversed, a new image. Find the turn and you have found the poem's center of gravity.

In Sonnet 73, three images of ending—autumn, twilight, a dying fire—build across twelve lines. Then the final couplet turns from the speaker to the listener: "This thou perceiv'st, which makes thy love more strong, / To love that well which thou must leave ere long." The poem about aging becomes a poem about love made stronger by its knowledge of loss.

## Paraphrase and its limits

It is useful to paraphrase a poem—to restate its sense in plain prose—because paraphrase forces you to understand the syntax. But a paraphrase is never the poem. Cleanth Brooks called this "the heresy of paraphrase": what a poem *means* cannot be separated from *how* it says it. Our work in this course is to describe that "how."`,
      readings: [
        { kind: "book", title: "A Poetry Handbook", author: "Mary Oliver", publisher: "Harcourt", year: "1994", note: "Chapters 1–3: “Getting Ready,” “Reading Poems,” “Imitation.” A poet's short, practical guide." },
        { kind: "website", title: "That time of year thou mayst in me behold (Sonnet 73)", author: "William Shakespeare", url: "https://poets.org/poem/time-year-thou-mayst-me-behold-sonnet-73", note: "Read the poem aloud twice before reading the lecture again." },
        { kind: "book", title: "The Well Wrought Urn", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947", note: "Chapter 11, “The Heresy of Paraphrase.” Optional, but a classic statement of close reading." },
      ],
      media: [
        { kind: "lecture", title: "Modern Poetry, Lecture 1: Introduction", author: "Langdon Hammer", publisher: "Open Yale Courses (ENGL 310)", url: "https://oyc.yale.edu/english/engl-310/lecture-1", note: "Professor Hammer on how to read poems closely; video, audio, and transcript." },
      ],
      questions: [
        {
          prompt: "When a sentence continues past the end of a line of verse without a pause, this is called:",
          choices: ["Caesura", "Enjambment", "End-stopping", "Elision"],
          answer: 1,
          explanation: "Enjambment carries the sentence over the line break. An end-stopped line coincides with a pause in the syntax; a caesura is a pause within a line.",
        },
        {
          prompt: "In Sonnet 73, the final couplet turns the poem's attention from the speaker's aging toward:",
          choices: ["The changing seasons", "The poet's fame", "The listener's love, made stronger by impending loss", "The consolation of religion"],
          answer: 2,
          explanation: "“This thou perceiv'st, which makes thy love more strong, / To love that well which thou must leave ere long.” The couplet turns from the speaker to the beloved.",
        },
        {
          prompt: "Cleanth Brooks's phrase “the heresy of paraphrase” argues that:",
          choices: ["Poems should never be paraphrased in class", "A poem's meaning cannot be fully separated from its form", "Only the poet can say what a poem means", "Paraphrase is the highest form of criticism"],
          answer: 1,
          explanation: "Brooks held that a prose restatement always loses something essential, because meaning in a poem is inseparable from its language and structure.",
        },
        {
          prompt: "Which is the best first step when encountering an unfamiliar poem?",
          choices: ["Look up the poet's biography", "Read it aloud, more than once", "Count its syllables", "Find a summary online"],
          answer: 1,
          explanation: "Reading aloud, at least twice, lets you grasp both the sense of the sentences and the sound of the lines before analysis begins.",
        },
      ],
      reflection: "Choose a short poem you already love. Write one paragraph identifying its speaker, its situation, and the place where it turns.",
    },
    {
      title: "Meter: The Music of the Line",
      summary: "Stress, the metrical foot, and how to scan English verse.",
      lecture: `## Stress in English

English is a **stress-timed** language. In any word of more than one syllable, one syllable is spoken with more force than the others: *PO-em*, *be-HOLD*, *un-der-STAND*. Meter is the patterning of these stressed and unstressed syllables into a regular rhythm.

We mark an unstressed syllable with ˘ (or simply *x*) and a stressed syllable with ´ (or */*). Marking a line this way is called **scansion**.

## The feet

A **foot** is a recurring unit of stressed and unstressed syllables. Five feet do most of the work in English verse:

| Foot | Pattern | Example |
|---|---|---|
| Iamb | x / | be-HOLD |
| Trochee | / x | TY-ger |
| Anapest | x x / | in-ter-VENE |
| Dactyl | / x x | MER-ri-ly |
| Spondee | / / | HEART-BREAK |

The number of feet in a line gives the meter its second name: **trimeter** (three), **tetrameter** (four), **pentameter** (five), **hexameter** (six).

## Iambic pentameter

The great line of English poetry is **iambic pentameter**: five iambs, ten syllables, rising in a heartbeat rhythm.

> x / | x / | x / | x / | x /
> When I | do count | the clock | that tells | the time

Shakespeare, Milton, Wordsworth, and Frost all wrote chiefly in this line. Unrhymed iambic pentameter is called **blank verse**; it is the line of *Paradise Lost* and of most of Shakespeare's dialogue.

## Variation is the point

A line that marched in perfect iambs for a whole poem would be unbearable. Poets vary the meter, and those variations carry meaning. The most common is the **trochaic inversion** at the start of a line:

> / x | x / | x / | x / | x /
> BARE ru- | in'd CHOIRS, | where LATE | the SWEET | birds SANG.

The heavy stress on *Bare* lands like a blow, matching the starkness of the image. Learning to hear these departures from the pattern—and asking *why here?*—is the purpose of scansion.

## Other meters

Not all English poetry is accentual-syllabic. Old English verse such as *Beowulf* counts only stresses (four per line, divided by a pause) and binds them with alliteration. Gerard Manley Hopkins revived this principle as **sprung rhythm**. And much modern poetry is **free verse**, which abandons regular meter but not rhythm: its music comes from the line break, syntax, and repetition. As T. S. Eliot put it in "Reflections on *Vers Libre*" (1917), "No *vers* is *libre* for the man who wants to do a good job."

## How to practice

Scansion is a skill like sight-reading music. Begin by marking the stresses of each word as you would naturally say it. Then look for the dominant pattern. Then mark the exceptions. Do not force a line into a pattern it does not have—meter describes the poem, not the other way around.`,
      readings: [
        { kind: "book", title: "Poetic Meter and Poetic Form", author: "Paul Fussell", publisher: "McGraw-Hill", year: "1979 (rev. ed.)", note: "Part One, “Poetic Meter.” The standard short introduction." },
        { kind: "book", title: "The Ode Less Travelled: Unlocking the Poet Within", author: "Stephen Fry", publisher: "Hutchinson", year: "2005", note: "Chapter One, “Metre.” Witty, exercise-driven, and genuinely useful." },
      ],
      media: [
        { kind: "website", title: "Glossary of Poetic Terms", publisher: "Academy of American Poets", url: "https://poets.org/glossary", note: "Clear definitions of meter, the feet, and verse forms, with examples." },
        { kind: "audio", title: "Poetry Off the Shelf (podcast)", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/podcasts", note: "Episodes in which poets read and discuss their work—listen for how they voice the meter." },
      ],
      questions: [
        {
          prompt: "An iamb consists of:",
          choices: ["A stressed syllable followed by an unstressed one", "An unstressed syllable followed by a stressed one", "Two stressed syllables", "Two unstressed syllables followed by a stressed one"],
          answer: 1,
          explanation: "The iamb rises: x / (be-HOLD). The trochee is its reverse, / x.",
        },
        {
          prompt: "Unrhymed iambic pentameter is called:",
          choices: ["Free verse", "Blank verse", "Heroic couplets", "Common meter"],
          answer: 1,
          explanation: "Blank verse is unrhymed iambic pentameter—the line of Paradise Lost and most of Shakespeare's dialogue. Heroic couplets are rhymed pentameter.",
        },
        {
          prompt: "How many feet are there in a line of tetrameter?",
          choices: ["Three", "Four", "Five", "Six"],
          answer: 1,
          explanation: "Tri- (3), tetra- (4), penta- (5), hexa- (6).",
        },
        {
          prompt: "Why does the trochaic opening of “Bare ruin'd choirs” matter?",
          choices: ["It is a metrical error Shakespeare overlooked", "The heavy initial stress reinforces the starkness of the image", "It makes the line hexameter", "It signals the poem is in free verse"],
          answer: 1,
          explanation: "Meaningful variation is the point of meter. The stress on “Bare” falls where a reader expects an unstressed syllable, giving the word emphasis.",
        },
        {
          prompt: "Old English verse such as Beowulf is organized chiefly by:",
          choices: ["Syllable count and end rhyme", "Stresses and alliteration", "Quantity (long and short vowels)", "Stanzas of fourteen lines"],
          answer: 1,
          explanation: "Old English alliterative verse counts stresses (usually four per line) and binds them with alliteration across a mid-line pause.",
        },
      ],
      reflection: "Scan the first four lines of any sonnet by Shakespeare. Mark every departure from iambic pentameter and suggest what each variation emphasizes.",
    },
    {
      title: "Form: Sonnet, Villanelle, Ode",
      summary: "Fixed forms as instruments: what each form asks a poet to do.",
      lecture: `## Why forms exist

A fixed form is a set of rules—number of lines, rhyme scheme, meter, sometimes refrains. It can look like a cage. Poets have found it to be more like an instrument: each form makes certain kinds of thinking easy and others difficult, and the best poems exploit that.

## The sonnet

The **sonnet** is fourteen lines, usually of iambic pentameter. It came to English from Italy, where Petrarch perfected it in the fourteenth century.

- The **Petrarchan** (Italian) sonnet divides into an **octave** (eight lines, rhyming *abbaabba*) and a **sestet** (six lines, often *cdecde* or *cdcdcd*). The shift between them is the **volta**, or turn: the octave poses a problem; the sestet answers or reframes it.
- The **Shakespearean** (English) sonnet uses three **quatrains** and a **couplet**: *abab cdcd efef gg*. The argument develops in three waves and is clinched—or overturned—by the couplet.

The sonnet's brevity forces compression, and its built-in turn makes it a form for argument: love and its doubts, faith and its trials. Milton used it for politics, Donne for theology ("Batter my heart, three-person'd God"), Hopkins for spiritual desolation.

## The villanelle

The **villanelle** has nineteen lines: five tercets and a closing quatrain, on only two rhymes. Two lines—the first and the third—return as refrains, alternating at the end of each tercet and joined at the close.

Because the refrains must keep returning, the villanelle is a form of **obsession**: of something that cannot be escaped or stopped thinking about. Dylan Thomas's "Do not go gentle into that good night" uses it for rage against a father's death. Elizabeth Bishop's "One Art" uses it for loss, with an extraordinary final turn: the refrain "The art of losing isn't hard to master" grows less convincing each time it returns, until the speaker must force herself—"(*Write* it!)"—to finish the line.

## The ode

The **ode** is a long, elevated lyric addressed to someone or something. Its ancestry is Greek: Pindar's choral odes for athletic victors and Horace's more personal Latin odes. In English the great flowering came with the Romantics. Keats's odes of 1819—"Ode to a Nightingale," "Ode on a Grecian Urn," "To Autumn"—are meditations that begin in an encounter and move through argument toward a resolution that is never quite secure.

## Ballad and common meter

Not all forms are learned. The **ballad**, a narrative song, uses quatrains alternating tetrameter and trimeter (often called **common meter**, *8.6.8.6*), the meter of hymns. Emily Dickinson built almost her entire body of work on this humble hymn stanza, bending it with slant rhyme and dashes into something utterly strange.

## Reading form

When you read a formal poem, ask: what does the form *demand*, and where does the poem strain against it? Bishop's parenthesis, Shakespeare's couplet that refuses the quatrains' logic, Dickinson's off-rhymes—these are moments where the poet's meaning meets the form's resistance, and they are almost always the most important moments in the poem.`,
      readings: [
        { kind: "website", title: "One Art", author: "Elizabeth Bishop", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/poems/47536/one-art", note: "Follow the two refrains through the poem. Where does the pattern break?" },
        { kind: "book", title: "The Making of a Poem: A Norton Anthology of Poetic Forms", author: "Mark Strand and Eavan Boland, eds.", publisher: "W. W. Norton", year: "2000", note: "Sections on the sonnet, villanelle, and ode, each with history and examples." },
        { kind: "book", title: "Poetic Meter and Poetic Form", author: "Paul Fussell", publisher: "McGraw-Hill", year: "1979", note: "Part Two, “Poetic Form,” especially the chapter on the sonnet." },
      ],
      media: [
        { kind: "website", title: "Sonnet — Glossary of Poetic Terms", publisher: "Academy of American Poets", url: "https://poets.org/glossary/sonnet", note: "The history of the form and its variants, with linked examples." },
      ],
      questions: [
        {
          prompt: "The rhyme scheme of a Shakespearean sonnet is:",
          choices: ["abbaabba cdecde", "abab cdcd efef gg", "aba aba aba aba aba abaa", "aabb ccdd eeff gg"],
          answer: 1,
          explanation: "Three quatrains and a couplet. abbaabba cdecde is Petrarchan; aba…abaa is the villanelle.",
        },
        {
          prompt: "In a Petrarchan sonnet, the volta typically falls:",
          choices: ["After line 4", "Between the octave and the sestet", "Before the final couplet", "There is no volta in the Petrarchan sonnet"],
          answer: 1,
          explanation: "The turn comes at line 9, where the sestet answers or reframes the octave.",
        },
        {
          prompt: "Which feature defines the villanelle?",
          choices: ["Fourteen lines of blank verse", "Two refrains that alternate and then join in the final quatrain", "An address to an abstract quality", "Alternating tetrameter and trimeter"],
          answer: 1,
          explanation: "The villanelle's nineteen lines are built on two rhymes and two returning refrains.",
        },
        {
          prompt: "Emily Dickinson's poems are most often built on:",
          choices: ["The Spenserian stanza", "Common meter, the hymn stanza", "Blank verse", "Terza rima"],
          answer: 1,
          explanation: "Dickinson adapted the alternating 8- and 6-syllable lines of Protestant hymnody, bending them with slant rhyme and dashes.",
        },
      ],
      reflection: "Read Bishop's “One Art” aloud. In a paragraph, explain how the poem's final stanza both obeys and resists the form.",
    },
    {
      title: "Image, Metaphor, and Symbol",
      summary: "How poems think in pictures, comparisons, and charged objects.",
      lecture: `## The image

An **image** is language that appeals to the senses—most often sight, but also sound, touch, taste, and smell. Images are the poem's evidence: they let the reader experience rather than merely be told.

In 1913 Ezra Pound and a small group of poets calling themselves **Imagists** made the image the whole of poetry. Pound's rules were severe: "Direct treatment of the 'thing,'" "use absolutely no word that does not contribute to the presentation." His most famous example, "In a Station of the Metro," is two lines and fourteen words:

> The apparition of these faces in the crowd:
> Petals on a wet, black bough.

There is no verb and no "like." Two images are simply set side by side, and the mind leaps the gap between them. Pound called the image "that which presents an intellectual and emotional complex in an instant of time."

## Simile and metaphor

A **simile** makes a comparison explicit with *like* or *as*. A **metaphor** asserts an identity: this *is* that. In I. A. Richards's useful terms, every metaphor has a **tenor** (the thing being described) and a **vehicle** (the thing it is compared to). In "Bare ruin'd choirs," the tenor is the bare branches; the vehicle is the ruined choir lofts of abandoned monasteries.

Metaphors do more than decorate. They transfer a whole set of associations from vehicle to tenor. The ruined choirs bring with them the dissolution of the monasteries, the silence where song once was, the sacredness of what has been lost—none of which belongs to a tree.

## The conceit

An extended, ingenious metaphor is a **conceit**. The Metaphysical poets of the seventeenth century specialized in conceits that yoke unlikely things together. In "A Valediction: Forbidding Mourning," John Donne compares two lovers' souls to the legs of a drawing compass: one stays fixed while the other travels, and "Thy firmness makes my circle just, / And makes me end where I begun." Samuel Johnson complained that in such poems "the most heterogeneous ideas are yoked by violence together"; modern readers have tended to admire exactly that violence.

## Symbol

A **symbol** is an object that is itself and also stands for something beyond itself, without the poem ever saying exactly what. William Blake's "The Sick Rose" is eight lines about a rose and a worm:

> O Rose thou art sick.
> The invisible worm,
> That flies in the night
> In the howling storm:

The rose is a rose. It is also love, or innocence, or the body; the worm is also secrecy, or jealousy, or sexual corruption. A symbol's power lies in its refusal to be translated into a single meaning.

## Practicing

When you meet a figure of speech, name its parts (tenor, vehicle), list what the vehicle brings with it, and ask what the comparison lets the poem say that plain statement could not.`,
      readings: [
        { kind: "website", title: "In a Station of the Metro", author: "Ezra Pound", publisher: "Representative Poetry Online, University of Toronto Libraries", url: "https://rpo.library.utoronto.ca/poems/station-metro", note: "Fourteen words. Consider what the colon does." },
        { kind: "edition", title: "Songs of Innocence and of Experience", author: "William Blake", publisher: "Tate Publishing / William Blake Trust (facsimile)", year: "1794", note: "Read “The Sick Rose” and “The Tyger.” If possible, see Blake's illuminated plates via the William Blake Archive." },
        { kind: "book", title: "The Philosophy of Rhetoric", author: "I. A. Richards", publisher: "Oxford University Press", year: "1936", note: "Lecture V, where the terms tenor and vehicle are introduced." },
      ],
      media: [
        { kind: "website", title: "The William Blake Archive", publisher: "Scholarly digital edition, ed. Eaves, Essick, and Viscomi", url: "https://www.blakearchive.org", note: "High-resolution images of Blake's illuminated books, where poem and picture form one work." },
      ],
      questions: [
        {
          prompt: "In I. A. Richards's terms, the thing being described by a metaphor is the:",
          choices: ["Vehicle", "Tenor", "Conceit", "Image"],
          answer: 1,
          explanation: "The tenor is the subject; the vehicle is what it is compared to.",
        },
        {
          prompt: "Pound's “In a Station of the Metro” is a model of Imagism chiefly because it:",
          choices: ["Uses an elaborate extended metaphor", "Juxtaposes two images without explanatory statement", "Is written in strict iambic pentameter", "Tells a story with a clear moral"],
          answer: 1,
          explanation: "The poem sets faces and petals side by side with no verb or ‘like’, leaving the reader to make the leap.",
        },
        {
          prompt: "Donne's comparison of two lovers to the legs of a compass is an example of:",
          choices: ["A symbol", "A metaphysical conceit", "Personification", "Onomatopoeia"],
          answer: 1,
          explanation: "A conceit is an extended, ingenious metaphor; the Metaphysical poets were famous for them.",
        },
        {
          prompt: "What distinguishes a symbol from a metaphor?",
          choices: ["A symbol always uses ‘like’ or ‘as’", "A symbol is a literal object that also suggests meanings the poem does not fix", "A symbol is always religious", "There is no difference"],
          answer: 1,
          explanation: "Blake's rose is a real rose that also opens onto love, innocence, or the body—without the poem translating it.",
        },
      ],
      reflection: "Find one metaphor in a poem of your choice. Name its tenor and vehicle and list three associations the vehicle carries into the poem.",
    },
    {
      title: "Voice, Persona, and the Dramatic Monologue",
      summary: "Who speaks in a poem, and how poets create characters in verse.",
      lecture: `## The speaker is not the poet

We have been careful to speak of a poem's **speaker** rather than its author. This is not pedantry. Poets often write in voices not their own, and even when the voice is close to the poet's, it is a made thing—shaped, selected, performed.

The Romantic tradition encouraged readers to hear lyric poetry as the poet's sincere self-expression; Wordsworth called poetry "the spontaneous overflow of powerful feelings." The great poets of the nineteenth century pushed back by inventing voices that were plainly not their own.

## The dramatic monologue

The **dramatic monologue** is a poem spoken by a single character, to a silent listener, at a particular dramatic moment, in a way that reveals more about the speaker than the speaker intends. Robert Browning perfected it.

In "My Last Duchess" (1842), the Duke of Ferrara shows a visiting envoy a portrait of his late wife. He complains that she smiled too freely—at the sunset, at a gift of cherries, at the painter:

> She had
> A heart—how shall I say?—too soon made glad,
> Too easily impressed; she liked whate'er
> She looked on, and her looks went everywhere.

Then, almost casually: "I gave commands; / Then all smiles stopped together." The envoy, we learn, has come to arrange the Duke's next marriage. The poem's horror lives in the gap between what the Duke says and what we understand.

Notice the form: rhymed couplets of iambic pentameter, but so heavily enjambed that the rhymes almost vanish. The Duke's polished control—he never quite says anything incriminating—is mirrored in verse whose formality is everywhere and nowhere.

## Tone

**Tone** is the speaker's attitude toward the subject and the listener: ironic, tender, bitter, playful, grave. Tone is carried by diction (word choice), syntax, rhythm, and what is left unsaid. Robert Frost is a master of tonal ambiguity. "The Road Not Taken," often read as a celebration of individualism, is in fact slyly ironic: the two roads, the poem admits, were "really about the same," and the speaker anticipates telling the story "with a sigh" and embellishing it "ages and ages hence."

## Toward close reading

You now have the basic instruments: line and sentence, meter, form, figure, and voice. A close reading uses all of them in the service of a single argument about how a poem works. A good close reading:

1. Makes a **claim** about the poem that someone could disagree with.
2. Supports it with **specific evidence**—quoted words, scanned lines, structural observations.
3. Explains **how** the evidence supports the claim, rather than merely pointing to it.

This is the craft you will practice in every literature course that follows.`,
      readings: [
        { kind: "website", title: "My Last Duchess", author: "Robert Browning", publisher: "Representative Poetry Online, University of Toronto Libraries", url: "https://rpo.library.utoronto.ca/poems/my-last-duchess", note: "Read aloud, imagining the envoy's silence." },
        { kind: "book", title: "The Poetry of Experience: The Dramatic Monologue in Modern Literary Tradition", author: "Robert Langbaum", publisher: "Random House", year: "1957", note: "The classic study of the dramatic monologue and the tension between sympathy and judgment." },
        { kind: "book", title: "The Norton Anthology of Poetry", author: "Margaret Ferguson, Tim Kendall, and Mary Jo Salter, eds.", publisher: "W. W. Norton", year: "6th ed., 2018", note: "Your companion anthology for the concentration. Read Browning's “Porphyria's Lover” and Tennyson's “Ulysses.”" },
      ],
      media: [
        { kind: "lecture", title: "Modern Poetry (full course)", author: "Langdon Hammer", publisher: "Open Yale Courses (ENGL 310)", url: "https://oyc.yale.edu/english/engl-310", note: "Twenty-five lectures from Yeats to Bishop. The lectures on Frost pair well with this lesson." },
      ],
      questions: [
        {
          prompt: "A dramatic monologue is best defined as:",
          choices: ["A poem in which the poet speaks directly about her own life", "A poem spoken by a character to a silent listener, revealing more than the speaker intends", "A play written in verse", "A dialogue between two speakers"],
          answer: 1,
          explanation: "Browning's dramatic monologues set one speaker before a silent auditor at a dramatic moment; the reader understands more than the speaker means to reveal.",
        },
        {
          prompt: "Why is the visiting envoy's purpose important in “My Last Duchess”?",
          choices: ["He has painted the portrait", "He is arranging the Duke's next marriage, so the story is a warning", "He is the Duchess's brother", "He has come to arrest the Duke"],
          answer: 1,
          explanation: "The envoy represents the family of the Duke's next bride. The Duke's account of his ‘last’ duchess becomes an implicit threat.",
        },
        {
          prompt: "What is the meter and rhyme of “My Last Duchess”?",
          choices: ["Blank verse", "Rhymed couplets of iambic pentameter, heavily enjambed", "Free verse", "Ballad stanzas"],
          answer: 1,
          explanation: "The poem is in heroic couplets, but enjambment mutes the rhymes—a formal mirror of the Duke's controlled speech.",
        },
        {
          prompt: "A strong close reading begins with:",
          choices: ["A summary of the poem's plot", "A biography of the poet", "An arguable claim about how the poem works", "A list of literary devices"],
          answer: 2,
          explanation: "Close reading is argument: a claim someone could dispute, supported by specific evidence and explained.",
        },
      ],
      reflection: "Write a 300-word close reading of the first twelve lines of “My Last Duchess,” making one arguable claim about how the verse reveals the Duke's character.",
    },
  ],
  library: [
    {
      heading: "Handbooks and Guides",
      items: [
        { kind: "book", title: "A Poetry Handbook", author: "Mary Oliver", publisher: "Harcourt", year: "1994", note: "The best short introduction, by a Pulitzer Prize–winning poet." },
        { kind: "book", title: "The Ode Less Travelled", author: "Stephen Fry", publisher: "Hutchinson", year: "2005", note: "Meter and form learned by writing them." },
        { kind: "book", title: "Poetic Meter and Poetic Form", author: "Paul Fussell", publisher: "McGraw-Hill", year: "rev. ed. 1979", note: "Brief, authoritative, indispensable." },
        { kind: "book", title: "How to Read a Poem", author: "Edward Hirsch", publisher: "Harcourt", year: "1999", note: "Published as “How to Read a Poem and Fall in Love with Poetry.” A poet's companionable tour." },
        { kind: "book", title: "Rhyme's Reason: A Guide to English Verse", author: "John Hollander", publisher: "Yale University Press", year: "3rd ed. 2001", note: "Every form explained in a poem written in that form." },
      ],
    },
    {
      heading: "Anthologies",
      items: [
        { kind: "book", title: "The Norton Anthology of Poetry", author: "Margaret Ferguson, Tim Kendall, and Mary Jo Salter, eds.", publisher: "W. W. Norton", year: "6th ed. 2018", note: "The standard teaching anthology, Caedmon to the present." },
        { kind: "book", title: "The Making of a Poem: A Norton Anthology of Poetic Forms", author: "Mark Strand and Eavan Boland, eds.", publisher: "W. W. Norton", year: "2000" },
        { kind: "book", title: "The Oxford Book of English Verse", author: "Christopher Ricks, ed.", publisher: "Oxford University Press", year: "1999" },
      ],
    },
    {
      heading: "Criticism",
      items: [
        { kind: "book", title: "The Well Wrought Urn: Studies in the Structure of Poetry", author: "Cleanth Brooks", publisher: "Harcourt Brace", year: "1947" },
        { kind: "book", title: "Understanding Poetry", author: "Cleanth Brooks and Robert Penn Warren", publisher: "Henry Holt", year: "1938", note: "The textbook that taught generations of Americans to close read." },
        { kind: "book", title: "The Art of Shakespeare's Sonnets", author: "Helen Vendler", publisher: "Harvard University Press", year: "1997", note: "A commentary on all 154 sonnets by the foremost critic of the lyric." },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "lecture", title: "Modern Poetry (ENGL 310)", author: "Langdon Hammer", publisher: "Open Yale Courses", url: "https://oyc.yale.edu/english/engl-310", note: "Complete lecture course with video, audio, and transcripts." },
        { kind: "audio", title: "Poetry Foundation Podcasts", publisher: "Poetry Foundation", url: "https://www.poetryfoundation.org/podcasts" },
      ],
    },
    {
      heading: "Online Resources",
      items: [
        { kind: "website", title: "Poetry Foundation", url: "https://www.poetryfoundation.org", note: "Tens of thousands of poems with biographies and audio." },
        { kind: "website", title: "Poets.org (Academy of American Poets)", url: "https://poets.org", note: "Poems, essays, and the Glossary of Poetic Terms." },
        { kind: "website", title: "Representative Poetry Online", publisher: "University of Toronto Libraries", url: "https://rpo.library.utoronto.ca", note: "Scholarly texts of canonical English poems." },
      ],
    },
  ],
};
