import type { Capstone } from "@/lib/schema";

/**
 * The capstone of every founding concentration, keyed by the concentration's
 * name in the catalogue. A student who completes every course in a program is
 * an Expert in it; one who also passes its capstone is a Master.
 *
 * Each brief is written for its discipline: a critical study in Poetry, a
 * translation with commentary in Latin, a source-based argument in History, a
 * data analysis in Phonetics. All are marked by an examiner against the
 * rubric given here, and any mark but Revise passes.
 */
export const capstones: Record<string, Capstone> = {
  // ——— Literature ———

  Poetry: {
    title: "A Critical Study in Poetry",
    summary:
      "An extended critical essay on a poet, a form, or a question in poetry, grounded in close reading and placed in the tradition the concentration has traced—or a portfolio of your own poems with a critical preface.",
    brief: `The capstone asks you to do what the whole concentration has been teaching: to read poems closely, to hear them, to place them in a tradition, and to make an argument about them that a thoughtful reader would want to hear.

## Choosing a subject

Choose a subject you care about and can sustain for several thousand words. Good capstones are usually narrower than their writers first expect. "Keats" is too broad; "Keats's odes" is still broad; "How Keats's odes end" is a capstone. You may write on:

- **A poet**, read across several poems: a development, a habit of form, a recurring image or problem.
- **A form or device** traced across centuries: the elegy, the sonnet's turn, blank verse, the refrain, the dramatic monologue, the falling leaves.
- **A question of poetics** from POE 401, tested against poems: impersonality, the sublime, whether a poem can be paraphrased.
- **A conversation between poets**: Hughes answering Whitman, Bishop and Lowell, Keats and Shakespeare.

## How to go about it

Begin with the poems, not with the critics. Reread your chosen poems aloud, scan the lines that matter, and note what surprises you. Then form a thesis: a claim that is arguable, specific, and interesting. Read two or three serious critics on your subject and decide where you agree and where you do not. Draft, then revise with your thesis in front of you.

Quote precisely, and analyze what you quote: a quotation is evidence only when you show what it does. For poems still in copyright, quote briefly and give the source.

## The creative option

If you write poetry, you may instead submit a portfolio of original poems with a critical preface that places them in the tradition you have studied. The preface is not an apology for the poems but an essay in poetics: what you were attempting, which poets taught you, and what the forms you chose made possible.`,
    options: [
      {
        name: "Critical essay",
        description: "An argued essay of 4,000–6,000 words on a poet, a form, or a question in poetics, with close readings of at least four poems.",
      },
      {
        name: "Portfolio with critical preface",
        description: "Eight to twelve original poems, including at least three in received forms (sonnet, villanelle, blank verse, ballad, ode, or similar), with a critical preface of at least 2,500 words.",
      },
    ],
    requirements: [
      "State a clear, arguable thesis (or, for the portfolio, a clear account of what the poems attempt) in the opening pages.",
      "Read at least four poems closely, quoting precisely and analyzing sound, meter, syntax, and image—not only theme.",
      "Place your subject in the tradition the concentration has traced, drawing on at least three courses.",
      "Engage at least two published critics or theorists, agreeing or disagreeing with them by name.",
      "Scan at least one passage and show how its meter or rhythm contributes to its meaning.",
      "Give a list of works cited, with the editions you used.",
    ],
    words: { min: 4000, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear, arguable, and interesting thesis, developed and sustained through the whole." },
      { name: "Close Reading", description: "Precise attention to the words of the poems—sound, meter, syntax, image, form—as evidence for the argument." },
      { name: "Tradition and Context", description: "A command of the tradition: how the poems answer earlier poems, and where they stand in literary history." },
      { name: "Critical Conversation", description: "Fair and pointed engagement with criticism and theory, used to sharpen rather than replace the writer's own reading." },
      { name: "Expression", description: "Clear, graceful, exact prose (and, in the portfolio, verse that shows command of its forms)." },
    ],
  },

  "British Literature": {
    title: "A Study in British Literature",
    summary: "An extended essay that follows a theme, form, or problem across at least two periods of British literature, from the Anglo-Saxon hall to the modernist city.",
    brief: `British literature is a single long conversation: Chaucer answering Boccaccio, Milton answering Spenser, Woolf answering everyone. Your capstone joins it.

Choose a subject that crosses at least two of the periods the concentration has covered—medieval, Renaissance, Restoration and eighteenth century, Romantic, Victorian, modern—and trace how writers in each handled it. The subject may be a form (the sonnet, the pastoral, the satire, the realist novel), a figure (the fallen angel, the governess, the city walker), or a question (what is a hero? who may speak in a book?).

Your essay must be an argument, not a survey. Say what changes between the periods, and why it matters: what the later writer could do that the earlier could not, or what was lost. Read the primary texts closely, with quotation and analysis, and use historical context where it illuminates the writing rather than replacing it.`,
    options: [
      { name: "Comparative essay", description: "Two or three major works from different periods, read closely against each other." },
      { name: "Literary history", description: "A form or theme traced across four or more writers, with a clear account of its development." },
    ],
    requirements: [
      "Discuss works from at least two distinct periods of British literature.",
      "State and sustain an arguable thesis about change or continuity.",
      "Quote and analyze the primary texts closely.",
      "Use historical or biographical context to illuminate, not replace, the reading.",
      "Engage at least two works of published criticism.",
      "Give a list of works cited with the editions used.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear thesis about the subject across periods, developed with logic and nuance." },
      { name: "Close Reading", description: "Detailed, precise analysis of the language of the primary texts." },
      { name: "Historical Understanding", description: "A secure grasp of the periods and of how literary history moves between them." },
      { name: "Use of Criticism", description: "Informed and independent engagement with scholarship." },
      { name: "Expression", description: "Clear, well-organized, and elegant prose." },
    ],
  },

  "American Literature": {
    title: "A Study in American Literature",
    summary: "An extended essay on how an American work, or a set of works, imagines the nation—its promises, its failures, and its idea of the self.",
    brief: `American literature has always been preoccupied with the question of what America is. From Winthrop's "city upon a hill" to the postwar novel, its writers have argued about freedom and bondage, the individual and the community, the wilderness and the city.

Your capstone takes up one of these arguments. Choose one major work or a small group of works (no more than four) and make a case about how they imagine an American question: the self-made self, the frontier, race and citizenship, the meaning of work, faith and doubt, the American language. You may set an earlier work against a later one (Emerson against Melville, Twain against Ellison), or read one book in depth.

Read closely, and let your claims rest on the language of the texts. Bring in history and criticism where they sharpen your reading. A good capstone will leave its reader seeing a familiar book differently.`,
    options: [
      { name: "Single-work study", description: "A sustained reading of one major work, such as Moby-Dick, The Scarlet Letter, or Invisible Man." },
      { name: "Comparative study", description: "Two to four works from different periods in conversation about one American question." },
    ],
    requirements: [
      "Frame your subject as a question about America that the works address.",
      "State and sustain an arguable thesis.",
      "Quote and analyze the primary texts closely.",
      "Engage at least two works of criticism or history.",
      "Address at least one counter-reading of your texts.",
      "Give a list of works cited.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear and arguable thesis, developed and sustained." },
      { name: "Close Reading", description: "Precise use of the language of the texts as evidence." },
      { name: "Context", description: "An informed sense of the history and culture the works answer." },
      { name: "Use of Criticism", description: "Fair and independent engagement with scholarship and counter-readings." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "African American Literature": {
    title: "A Study in African American Literature",
    summary: "An extended essay that traces a form, a voice, or a strategy of witness through the African American literary tradition.",
    brief: `African American literature is a tradition that knows itself as a tradition: writers have answered and revised one another, from the slave narratives' "written by himself" to Morrison's rememory. Your capstone traces one line of that conversation.

Choose a form or strategy—the slave narrative and its descendants, the blues as literary form, signifying, double consciousness, the migration narrative, the uses of the spirituals, the novel of passing—and follow it through at least three writers from different periods. Show how later writers revise earlier ones: what they keep, what they reject, and what the revision means.

Read the texts closely. Use the critical tradition the concentration introduced—Du Bois, Hurston, Ellison, Baldwin, Gates, Morrison as critic—and take a position among its arguments.`,
    options: [
      { name: "Tradition essay", description: "A form or strategy traced through three or more writers across at least two periods." },
      { name: "Single-author study", description: "A deep reading of one major writer in dialogue with the tradition before and after them." },
    ],
    requirements: [
      "Discuss at least three writers, or one writer in sustained dialogue with the tradition.",
      "State and sustain an arguable thesis about revision and continuity.",
      "Quote and analyze the primary texts closely.",
      "Engage the critical tradition by name, including at least one writer-critic.",
      "Attend to historical context without reducing the works to it.",
      "Give a list of works cited.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear thesis about the tradition, developed and sustained." },
      { name: "Close Reading", description: "Precise analysis of language, form, and voice." },
      { name: "Command of the Tradition", description: "A secure sense of how the writers answer and revise one another." },
      { name: "Critical Engagement", description: "Informed and independent use of the critical tradition." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "World Literature": {
    title: "A Study in World Literature and Translation",
    summary: "A comparative essay on works from at least two literary traditions, with close attention to what translation keeps and loses.",
    brief: `Most of the world's great books reach us through translators. This concentration has read them that way, and has asked what translation does. Your capstone does both: it reads works from different traditions together, and it makes the question of translation part of the argument.

Choose two or three works from at least two different languages and traditions that illuminate one another—two epics, two novels of exile, a classical and a modern tragedy, two great comic books. Make an argument about what they share and how they differ. Then, for at least one passage central to your argument, compare two or more English translations, and show how the choices of the translators change what an English reader sees.

If you read one of the original languages, you may use it; if not, compare translations carefully and say what you can and cannot know.`,
    options: [
      { name: "Comparative essay", description: "Two or three works from different traditions read against each other, with a translation comparison." },
      { name: "Translation study", description: "One work, read through three or more of its English translations across the centuries." },
    ],
    requirements: [
      "Discuss works from at least two literary traditions or languages (or, for the translation study, at least three translations).",
      "State and sustain an arguable comparative thesis.",
      "Compare at least two English translations of at least one key passage, quoting both.",
      "Place the works in their own cultural contexts.",
      "Engage at least two works of criticism or translation theory.",
      "Give a list of works cited, naming the translations used.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear comparative thesis, developed and sustained." },
      { name: "Close Reading", description: "Precise attention to the texts as read in translation." },
      { name: "Translation", description: "Insight into how translators' choices shape meaning." },
      { name: "Cultural Understanding", description: "A secure grasp of each work's own tradition and context." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  Drama: {
    title: "A Study in Drama: The Play on the Page and the Stage",
    summary: "An extended essay on a play or a dramatic form that reads the text closely and imagines it in performance—or a production concept for a major play.",
    brief: `A play is a text written to be performed. The capstone in Drama asks you to hold both in mind: the words on the page, and what actors, a director, a designer, and an audience make of them.

You may write a critical essay on a play or a dramatic form—tragedy, comedy, the history play, the problem play, the theatre of the absurd—that reads the text closely and asks how its meanings are realized on stage. Or you may write a production concept: a detailed proposal for staging a major play, justified scene by scene from the text and from its stage history.

In either case, attend to what is distinctive in drama: dialogue and silence, stage directions, entrances and exits, the shape of the action, the audience's knowledge. Where you can, use records of actual productions—reviews, promptbooks, recordings—as evidence.`,
    options: [
      { name: "Critical essay", description: "A play or dramatic form read closely, with attention to performance." },
      { name: "Production concept", description: "A director's proposal for a major play: interpretation, casting, design, and the staging of key scenes, argued from the text." },
    ],
    requirements: [
      "Analyze at least three key scenes or passages closely, quoting the text.",
      "Address how the text is or could be realized in performance.",
      "Draw on the stage history of the play or form, citing at least one actual production.",
      "Engage at least one theory of drama studied in the concentration (Aristotle, Hegel, Brecht, or another).",
      "State and sustain a clear interpretation.",
      "Give a list of works cited, including editions and productions.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Interpretation", description: "A clear and persuasive reading of the play or form." },
      { name: "Close Reading", description: "Precise analysis of dialogue, structure, and stage directions." },
      { name: "Theatrical Imagination", description: "A vivid and justified sense of the play in performance." },
      { name: "Theory and Stage History", description: "Informed use of dramatic theory and the record of productions." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  // ——— Classics ———

  "Latin Language and Literature": {
    title: "A Translation and Commentary in Latin",
    summary: "An original translation of a substantial Latin passage, with a line-by-line commentary on its language, meter, and meaning, and an introductory essay.",
    brief: `The proof of a Latinist is the ability to read a Roman author well. The capstone asks you to choose a substantial passage of Latin—about 120 lines of verse or 80 lines (roughly 1,000 words) of prose—translate it, and write a commentary on it of the kind found in a good school or university edition.

Choose a passage that you have not translated in the concentration's courses and that you find rewarding: a poem or group of poems of Catullus or Horace, an episode of the *Aeneid* or the *Metamorphoses*, a speech from Livy, a chapter of Tacitus, a letter of Cicero or Pliny.

Give the Latin text (naming the edition), your translation, and a commentary keyed to the lines. The commentary should explain difficult grammar and syntax, scan and comment on the meter of verse, note figures of speech and word order, identify allusions and historical references, and discuss interpretive problems. Introduce the whole with an essay on the passage's place in its work and what it means.`,
    options: [
      { name: "Verse", description: "About 120 lines of Latin verse, scanned in the commentary." },
      { name: "Prose", description: "About 80 lines (1,000 words) of Latin prose, with attention to style and periodic structure." },
    ],
    requirements: [
      "Give the Latin text and name the edition used.",
      "Provide a complete, accurate, readable translation.",
      "Comment line by line on grammar, syntax, and vocabulary that would trouble an intermediate reader.",
      "For verse, scan at least ten lines and comment on metrical effects.",
      "Write an introduction placing the passage in its work and argue for an interpretation of it.",
      "Cite at least two commentaries or works of scholarship.",
    ],
    words: { min: 3500, max: 9000 },
    rubric: [
      { name: "Accuracy of Translation", description: "A translation faithful to the grammar and sense of the Latin." },
      { name: "Grammatical Commentary", description: "Correct and helpful explanation of morphology, syntax, and usage." },
      { name: "Literary Commentary", description: "Insight into meter, style, figures, and allusion." },
      { name: "Interpretation", description: "A persuasive account of the passage's meaning and place in its work." },
      { name: "Expression", description: "A translation that reads as English, and clear prose throughout." },
    ],
  },

  "Ancient Greek Language and Literature": {
    title: "A Translation and Commentary in Greek",
    summary: "An original translation of a substantial Greek passage—Homer, tragedy, or Plato—with a commentary on its language and meaning and an introductory essay.",
    brief: `The capstone asks you to read a Greek author as a scholar does: closely, accurately, and with an eye for what the Greek can do that English cannot.

Choose a passage of about 100 lines of verse (Homer, a choral ode or speech of tragedy) or about 70 lines (roughly 900 words) of prose (Plato, Herodotus, Thucydides, Lysias), not already translated in the concentration's courses. Give the Greek text, naming the edition, your translation, and a commentary keyed to the lines.

The commentary should explain forms and constructions that would trouble an intermediate reader (Homeric and dialect forms, particles, the uses of the participle and the optative), scan and discuss the meter of verse, and comment on style, rhetoric, allusion, and interpretive problems. Introduce the whole with an essay on the passage's place in its work and what it means.`,
    options: [
      { name: "Verse", description: "About 100 lines of Homer or tragedy, with metrical analysis." },
      { name: "Prose", description: "About 70 lines of Attic or Ionic prose, with attention to particles and style." },
    ],
    requirements: [
      "Give the Greek text and name the edition used.",
      "Provide a complete, accurate, readable translation.",
      "Comment on forms, syntax, and particles line by line.",
      "For verse, scan at least ten lines and discuss metrical effects.",
      "Write an introduction placing the passage in its work and arguing for an interpretation.",
      "Cite at least two commentaries or works of scholarship.",
    ],
    words: { min: 3500, max: 9000 },
    rubric: [
      { name: "Accuracy of Translation", description: "A translation faithful to the grammar and sense of the Greek." },
      { name: "Grammatical Commentary", description: "Correct and helpful explanation of forms, syntax, and particles." },
      { name: "Literary Commentary", description: "Insight into meter, style, rhetoric, and allusion." },
      { name: "Interpretation", description: "A persuasive account of the passage's meaning and place in its work." },
      { name: "Expression", description: "A translation that reads as English, and clear prose throughout." },
    ],
  },

  "Classical Literature in Translation": {
    title: "A Study in the Classics and Their Afterlife",
    summary: "An extended essay on a Greek or Latin work and its reception: how a later writer, artist, or age read, translated, or rewrote it.",
    brief: `The classics are classics because they have never stopped being read. This concentration ended with the classical tradition—the long afterlife of Greek and Roman literature. Your capstone joins the two halves: it reads an ancient work closely, then follows it into a later age.

Choose an ancient work or episode (the wrath of Achilles, Odysseus's homecoming, Dido, Antigone, Orpheus, the Metamorphoses) and a later work that responds to it: a translation, an imitation, a poem, a novel, a play, an opera, a painting. Make an argument about what the later work does with its original—what it keeps, changes, or reveals—and what that tells us about both.

Read the ancient text closely in a good translation, and say which you use. Treat the later work with equal care.`,
    options: [
      { name: "Reception essay", description: "One ancient work and one or two later responses, read against each other." },
      { name: "Translation history", description: "One ancient passage traced through three or more English translations from different centuries." },
    ],
    requirements: [
      "Read the ancient work closely in a named translation.",
      "Analyze at least one later response with equal care.",
      "State and sustain an arguable thesis about the relationship.",
      "Place both works in their historical contexts.",
      "Engage at least two works of scholarship on the classics or their reception.",
      "Give a list of works cited.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear thesis about the ancient work and its afterlife." },
      { name: "Reading of the Ancient Text", description: "Close and accurate reading of the classical work." },
      { name: "Reading of the Response", description: "Equal care with the later work and its choices." },
      { name: "Context and Scholarship", description: "An informed sense of both periods and of reception studies." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Ancient History": {
    title: "A Source Study in Ancient History",
    summary: "An argued historical essay that reconstructs an event, institution, or person of the ancient world from the primary sources, weighing their reliability.",
    brief: `Ancient history is written from scanty, partial, and often contradictory sources. The historian's art is to question them. Your capstone asks a historical question about Greece or Rome and answers it from the ancient evidence.

Choose a question that the sources allow you to argue about: Why did Athens lose the Sicilian Expedition? Was Augustus a restorer of the Republic or its gravedigger? How did Roman citizenship spread? What was Sparta really like? Gather the relevant ancient sources—historians, inscriptions, coins, archaeology—and read them critically: who wrote them, when, for whom, and with what bias?

Then make your argument, showing how the evidence supports it and where it is weak. Use modern scholarship to sharpen your reading, but let the ancient sources carry the weight.`,
    options: [
      { name: "Historical essay", description: "An argument on a question in Greek or Roman history, from the sources." },
      { name: "Source commentary", description: "A detailed commentary on one major ancient source passage, with an essay on its reliability." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four ancient sources, quoted in named translations.",
      "Assess the reliability and perspective of each main source.",
      "Use material evidence (inscriptions, coins, archaeology) where relevant.",
      "Engage at least two works of modern scholarship.",
      "Give a list of sources and works cited.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Sources", description: "Command of the ancient evidence, well chosen and accurately cited." },
      { name: "Source Criticism", description: "Critical judgment about the reliability and bias of the sources." },
      { name: "Historiography", description: "Informed engagement with modern scholarship." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Ancient Philosophy": {
    title: "A Philosophical Essay on an Ancient Argument",
    summary: "A philosophical essay that reconstructs an argument from ancient philosophy, evaluates it, and defends a position on whether it succeeds.",
    brief: `Ancient philosophers wanted their readers to think, not merely to admire. Your capstone takes them at their word: it reconstructs an ancient argument and asks whether it is sound.

Choose an argument from a text the concentration has read, or one like it: Socrates' argument in the *Crito* that he must not escape; the argument from opposites in the *Phaedo*; the ladder of love in the *Symposium*; Aristotle's function argument in the *Nicomachean Ethics*; Epicurus on why death is nothing to us; the Stoic claim that virtue is sufficient for happiness; Plotinus on the One.

Set out the argument clearly, premise by premise, in the context of its text. Consider how it has been interpreted. Then evaluate it: Are its premises true? Does the conclusion follow? Raise the strongest objection you can find, and say how the ancient philosopher could reply. End with your own position.`,
    options: [
      { name: "Analytic essay", description: "One argument, reconstructed and evaluated in depth." },
      { name: "Comparative essay", description: "Two ancient philosophers' answers to one question, compared and assessed." },
    ],
    requirements: [
      "Reconstruct the argument clearly, premise by premise, with reference to the text (Stephanus or Bekker numbers).",
      "Discuss at least one significant interpretation from the scholarly literature.",
      "Raise and answer the strongest objection you can find.",
      "Defend a clear position of your own.",
      "Quote the primary texts in named translations.",
      "Give a list of works cited.",
    ],
    words: { min: 3500, max: 7500 },
    rubric: [
      { name: "Exposition", description: "An accurate and charitable reconstruction of the argument." },
      { name: "Analysis", description: "Rigorous evaluation of premises, inferences, and objections." },
      { name: "Use of Texts", description: "Precise reference to and reading of the primary sources." },
      { name: "Scholarship", description: "Informed engagement with interpretations." },
      { name: "Expression", description: "Clear, precise, well-organized prose." },
    ],
  },

  // ——— History ———

  "European History": {
    title: "A Research Essay in European History",
    summary: "An argued research essay on a question in modern European history, built on primary sources and placed in the historians' debate.",
    brief: `The historian's craft, which this concentration's seminar studied, comes down to asking a good question and answering it honestly from the evidence. Your capstone does that.

Choose a question in European history between the Renaissance and the end of the Cold War that historians have argued about: Why did the Reformation succeed in some places and not others? Was the French Revolution a bourgeois revolution? Why did Weimar fail? How did ordinary Germans come to take part in the Holocaust? Why did the Soviet bloc collapse without war?

Find primary sources that bear on your question—published documents, memoirs, letters, speeches, newspapers, statistics—and read them critically. Set out the main positions in the historians' debate. Then make your own argument, showing how the evidence supports it and acknowledging what it cannot settle.`,
    options: [
      { name: "Research essay", description: "An argument on a historical question, from primary sources." },
      { name: "Historiographical essay", description: "A critical account of how historians have answered one question, and why their answers changed." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least five primary sources, read critically.",
      "Set out the main positions in the historians' debate, naming historians.",
      "Distinguish what the evidence shows from what it suggests.",
      "Use footnotes or in-text citations for every factual claim drawn from a source.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Historiography", description: "A fair and informed account of the historians' debate." },
      { name: "Historical Judgment", description: "Sound reasoning about causation, context, and the limits of evidence." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "American History": {
    title: "A Research Essay in American History",
    summary: "An argued essay on a question in American history built on primary sources, with special attention to the nation's founding documents and their interpretation.",
    brief: `American history is an argument about what the founding documents meant and whom they included. Your capstone joins it.

Choose a question about the American past that primary sources can illuminate: How radical was the American Revolution? What did the framers mean by "the general welfare"? Why did compromise over slavery fail in the 1850s? How did Reconstruction's amendments change the Constitution? What did the New Deal do to American federalism? How did the civil rights movement use the founding documents?

Read the primary sources closely—documents, debates, speeches, letters, court opinions, newspapers—and place them in context. Set out the historians' or legal scholars' debate. Then argue your own position.`,
    options: [
      { name: "Research essay", description: "An argument on a question in American history, from primary sources." },
      { name: "Constitutional history", description: "The interpretation of one clause or amendment traced through debates and court opinions." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least five primary sources, including at least one founding or constitutional document.",
      "Set out the main positions in the scholarly debate.",
      "Read the sources in their historical context.",
      "Cite every factual claim drawn from a source.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Historical Judgment", description: "Sound reasoning about causation and context." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Asian History": {
    title: "A Research Essay in Asian History",
    summary: "An argued essay on a question in the history of China, Japan, or India—or the connections among them—from primary sources in translation.",
    brief: `Your capstone asks a question about the civilizations of Asia and answers it from the sources. You may stay within one civilization or follow the routes that connected them: the spread of Buddhism, the Silk Roads, the tribute system, the Indian Ocean trade, the encounter with European empires.

Choose a question that historians have argued about: How did Confucian ideas shape the Chinese state? Why did Tokugawa Japan close itself, and how closed was it? What held the Mughal empire together? How did Buddhism change as it moved from India to China and Japan?

Use primary sources in translation—classics, edicts, chronicles, travel accounts, memorials to the throne—and read them critically, attending to who wrote them and for whom. Set out the scholarly debate, and argue your own position.`,
    options: [
      { name: "Research essay", description: "A question in the history of one civilization, from the sources." },
      { name: "Connected history", description: "A question about exchange or encounter between two or more Asian civilizations." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four primary sources in named translations.",
      "Read the sources critically, attending to authorship and audience.",
      "Set out the scholarly debate, naming historians.",
      "Avoid treating Asian societies as unchanging; attend to change over time.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Historical Understanding", description: "A secure grasp of context and change over time." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Middle Eastern History": {
    title: "A Research Essay in Middle Eastern History",
    summary: "An argued essay on a question in the history of the Middle East, from the first cities to the present, built on primary sources and in the tradition of Ibn Khaldun's critical history.",
    brief: `Ibn Khaldun, whose *Muqaddimah* the concentration's seminar studied, warned historians against believing reports simply because they were handed down: the historian must ask whether a report is possible, and what interests lie behind it. Your capstone takes his advice.

Choose a question in the history of the lands between the Nile and the Oxus: How did the early Islamic conquests succeed so quickly? What was the Abbasid revolution? How did the Ottomans govern a multi-religious empire? What did the end of the Ottoman Empire leave behind? How did the borders of the modern Middle East come to be drawn?

Use primary sources in translation—chronicles, inscriptions, letters, treaties, travel accounts, government records—and read them critically. Set out the scholarly debate, and argue your own position, attending to the many peoples and faiths of the region.`,
    options: [
      { name: "Research essay", description: "A question in Middle Eastern history, answered from the sources." },
      { name: "Source criticism", description: "A close critical study of one major chronicle or historian and the reliability of their account." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four primary sources in named translations.",
      "Assess the perspective and reliability of the main sources.",
      "Set out the scholarly debate, naming historians.",
      "Attend to the diversity of the region's peoples and faiths.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Source Criticism", description: "Judgment about the reliability and interests of the sources." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Medieval History": {
    title: "A Research Essay in Medieval History",
    summary: "An argued essay on a question in the history of medieval Christendom, Byzantium, or the Islamic world, built on the chronicles, charters, and letters of the time.",
    brief: `The Middle Ages speak to us through chronicles written by monks, charters drawn up by clerks, letters, laws, saints' lives, and the buildings and objects that survive. Your capstone asks a question about the medieval world and answers it from that evidence.

Choose a question historians have argued about: Was there a "feudal system"? Why did the First Crusade succeed? What did the Norman Conquest change? How did the Investiture Controversy reshape church and state? What was the relationship between Byzantium and the Latin West? How did the Black Death change European society?

Read the sources critically: who wrote them, for whom, and with what purpose? Set out the scholarly debate, and argue your own position.`,
    options: [
      { name: "Research essay", description: "A question in medieval history, from the sources." },
      { name: "Source study", description: "A close critical study of one major medieval text—a chronicle, a charter collection, a saint's life—as historical evidence." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four medieval primary sources in named editions or translations.",
      "Assess the authorship, purpose, and reliability of the main sources.",
      "Set out the scholarly debate, naming historians.",
      "Avoid anachronism; read the period on its own terms.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Source Criticism", description: "Judgment about authorship, purpose, and reliability." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "African History": {
    title: "A Research Essay in African History",
    summary: "An argued essay on a question in African history that uses the full range of sources the concentration taught—written, oral, archaeological, and linguistic—and tells the story on Africa's own terms.",
    brief: `African history, as the concentration's seminar showed, must be written from many kinds of evidence: Arabic chronicles and European travel accounts, oral traditions and epics, archaeology, historical linguistics, and the records of African states and peoples themselves. Your capstone asks a question and answers it from that range of sources.

Choose a question: How did the empire of Mali grow rich and powerful? What was the impact of the Atlantic slave trade on West African states? How did the Zulu kingdom rise? How did Africans resist and reshape colonial rule? What made some independence movements succeed where others struggled?

Read each kind of source critically, with attention to its particular strengths and limits. Set out the scholarly debate, and argue your own position, keeping African actors at the center of the story.`,
    options: [
      { name: "Research essay", description: "A question in African history, from multiple kinds of sources." },
      { name: "Methods essay", description: "A study of how one kind of evidence—oral tradition, archaeology, linguistics—has changed our understanding of a period." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four primary sources, including at least two different kinds of evidence.",
      "Assess the strengths and limits of each kind of source.",
      "Set out the scholarly debate, naming historians.",
      "Keep African peoples and states at the center of the analysis.",
      "Give a bibliography of sources and works cited.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Sources", description: "Varied sources, well chosen and accurately cited." },
      { name: "Method", description: "Critical judgment about different kinds of evidence." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  // ——— Theology ———

  "Biblical Studies": {
    title: "An Exegetical Study",
    summary: "A full exegesis of a biblical passage—its text, setting, structure, and meaning—followed by a study of how it has been interpreted.",
    brief: `Exegesis means "leading out": drawing the meaning out of a text rather than reading a meaning into it. Your capstone is a full exegesis of one biblical passage, followed by an account of its interpretation.

Choose a passage of manageable length (roughly 8 to 30 verses) from the Old or New Testament: a psalm, a prophetic oracle, a narrative episode, a parable, a section of an epistle. Then:

1. **Text and translation.** Compare at least three English translations and note significant differences. If you read Hebrew or Greek, translate the passage yourself.
2. **Context.** Place the passage in its literary context (the book and its structure) and its historical setting.
3. **Analysis.** Study its structure, key words, genre, and argument or plot, verse by verse.
4. **Interpretation history.** Show how at least two interpreters from different eras—a Church Father, a medieval or Reformation commentator, a modern scholar—have read it.
5. **Conclusion.** State what you take the passage to mean, and why it matters.`,
    options: [
      { name: "Old Testament exegesis", description: "A passage from the Hebrew Bible, read in its ancient Near Eastern setting." },
      { name: "New Testament exegesis", description: "A passage from the New Testament, read in its Jewish and Greco-Roman setting." },
    ],
    requirements: [
      "Compare at least three English translations (or give your own from the original language).",
      "Place the passage in its literary and historical context.",
      "Analyze structure, genre, and key terms verse by verse.",
      "Discuss at least two interpreters from different eras.",
      "Distinguish what the text says from later doctrinal use of it.",
      "Give a bibliography including at least two commentaries.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Textual Analysis", description: "Careful attention to the text, its translations, and its key terms." },
      { name: "Context", description: "A secure grasp of the passage's literary and historical setting." },
      { name: "History of Interpretation", description: "Informed and fair treatment of earlier interpreters." },
      { name: "Interpretation", description: "A persuasive and well-grounded account of the passage's meaning." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Systematic Theology": {
    title: "A Doctrinal Essay",
    summary: "A constructive essay on one Christian doctrine: its biblical basis, its development, its classic formulations, the objections to it, and a reasoned statement of your own.",
    brief: `Systematic theology studies the doctrines of the faith as a coherent whole: how each rests on Scripture, how it was developed by the Church, and how it connects with the others. Your capstone takes one doctrine and treats it systematically.

Choose a doctrine the concentration has studied—the Trinity, the two natures of Christ, the atonement, justification, the sacraments, the Church, the resurrection of the body, the last judgment—or a focused question within one (Can God suffer? What does it mean that Christ "descended into hell"? Is hope for universal salvation compatible with the creeds?).

Set out the doctrine's biblical basis; trace its development through at least two classic theologians from different eras; state the strongest objections to it, philosophical or theological; and offer a reasoned, constructive account of your own, showing how the doctrine connects with others.`,
    options: [
      { name: "Doctrinal essay", description: "One doctrine treated from Scripture through history to constructive statement." },
      { name: "Comparative essay", description: "Two theologians' (or two traditions') accounts of one doctrine, compared and assessed." },
    ],
    requirements: [
      "Set out the doctrine's biblical basis, citing specific passages.",
      "Discuss at least two classic theologians from different eras.",
      "State and respond to the strongest objection you can find.",
      "Show how the doctrine connects with at least one other doctrine.",
      "Offer a reasoned constructive position of your own.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Biblical Foundation", description: "Responsible use of Scripture as the ground of doctrine." },
      { name: "Historical Theology", description: "Accurate and informed treatment of classic theologians." },
      { name: "Systematic Coherence", description: "Insight into how doctrines connect and cohere." },
      { name: "Constructive Argument", description: "A reasoned position that answers objections fairly." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Church History": {
    title: "A Research Essay in Church History",
    summary: "An argued essay on a question in the history of Christianity, built on primary sources and placed in the historians' debate.",
    brief: `Your capstone asks a question about two thousand years of Christian history and answers it from the sources: martyr acts, conciliar decrees, monastic rules, letters, sermons, confessions, missionary reports.

Choose a question historians have argued about: Why did Christianity spread in the Roman Empire? What did Constantine's conversion change? How did monasticism shape medieval Europe? What caused the Great Schism of 1054? Was the Reformation one movement or many? How did Christianity become a majority-world faith in the twentieth century?

Read the sources critically, attending to who wrote them and for what purpose. Set out the debate among historians, and argue your own position, with care to understand each party in its own terms.`,
    options: [
      { name: "Research essay", description: "A question in church history, answered from primary sources." },
      { name: "Biography", description: "A critical study of one figure—a bishop, monk, reformer, or missionary—from their own writings." },
    ],
    requirements: [
      "Pose a clear historical question and answer it with an arguable thesis.",
      "Use at least four primary sources in named editions or translations.",
      "Read the sources critically, attending to purpose and audience.",
      "Set out the scholarly debate, naming historians.",
      "Represent all parties to a controversy fairly.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4500, max: 9000 },
    rubric: [
      { name: "Argument", description: "A clear historical thesis, developed and sustained." },
      { name: "Use of Primary Sources", description: "Well-chosen sources, read critically and cited accurately." },
      { name: "Historiography", description: "A fair and informed account of the scholarly debate." },
      { name: "Fairness and Judgment", description: "Understanding of each party in its own terms, and sound judgment." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  Patristics: {
    title: "A Study of a Church Father",
    summary: "A close study of one patristic text or theme: what a Father of the Church argued, how he read Scripture, and why it mattered for the Church.",
    brief: `The Fathers of the Church—Irenaeus, Origen, Athanasius, the Cappadocians, Augustine, Chrysostom, and the rest—shaped Christian doctrine, worship, and the reading of Scripture for every age that followed. Your capstone reads one of them closely.

Choose a text or a theme: Irenaeus on recapitulation, Athanasius's *On the Incarnation*, Gregory of Nyssa on the soul's endless ascent, Augustine's *Confessions* or *City of God*, Chrysostom on wealth and poverty, the Fathers' reading of a particular biblical book.

Read the text closely in a good translation. Set it in its historical and theological context: the controversies it answered and the opponents it had in view. Show how the Father reads Scripture, and argue for an interpretation of his thought. End by considering what his work offers, or fails to offer, a reader today.`,
    options: [
      { name: "Single-text study", description: "One patristic work read closely in its context." },
      { name: "Thematic study", description: "One theme traced through two or three Fathers." },
    ],
    requirements: [
      "Read the primary text closely in a named translation, quoting it with references.",
      "Set the text in its historical and theological context.",
      "Analyze how the Father reads Scripture.",
      "Engage at least two works of modern scholarship.",
      "Argue for an interpretation of the Father's thought.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Reading of the Text", description: "Close and accurate reading of the patristic source." },
      { name: "Context", description: "A secure grasp of the controversies and setting." },
      { name: "Exegesis", description: "Insight into the Father's reading of Scripture." },
      { name: "Interpretation and Scholarship", description: "A persuasive reading informed by scholarship." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  "Philosophy of Religion": {
    title: "A Philosophical Essay in the Philosophy of Religion",
    summary: "A rigorous philosophical essay that takes a position on a central question—the existence of God, the problem of evil, faith and reason, religious experience—and defends it against objections.",
    brief: `The philosophy of religion asks whether religious belief is reasonable, and what it means. Your capstone takes a position on one of its central questions and defends it.

Choose a question: Does the cosmological or fine-tuning argument succeed? Can the existence of evil be reconciled with a good and omnipotent God? Is religious belief properly basic, as Plantinga argues? Does religious experience give evidence for God? What did Kierkegaard mean by the leap of faith, and is it rational?

Set out the question and its stakes. Present the strongest version of the position you oppose, fairly. Then argue for your own, answering the best objections. Use the classic texts the concentration has read—Anselm, Aquinas, Hume, Kierkegaard, and contemporary philosophers—as interlocutors, not merely authorities.`,
    options: [
      { name: "Argumentative essay", description: "A defended position on one central question." },
      { name: "Critical study", description: "A close critical study of one classic text (Hume's Dialogues, Kierkegaard's Fear and Trembling) and its argument." },
    ],
    requirements: [
      "State a clear thesis on a central question.",
      "Present the strongest opposing position fairly.",
      "Raise and answer at least two serious objections to your view.",
      "Engage at least two classic texts and one contemporary philosopher.",
      "Define key terms precisely.",
      "Give a list of works cited.",
    ],
    words: { min: 3500, max: 7500 },
    rubric: [
      { name: "Thesis and Argument", description: "A clear thesis supported by valid, well-structured argument." },
      { name: "Charity", description: "Fair and strong presentation of opposing views." },
      { name: "Use of Texts", description: "Accurate reading of classic and contemporary sources." },
      { name: "Philosophical Insight", description: "Originality and depth in handling objections." },
      { name: "Expression", description: "Clear, precise, well-organized prose." },
    ],
  },

  "World Religions": {
    title: "A Comparative Study of Religions",
    summary: "A comparative essay that studies one theme—scripture, ritual, the self, suffering, the holy—in two or more religious traditions, through their own texts and practices.",
    brief: `The study of religions asks how human beings have understood the sacred, and it asks us to understand traditions as their practitioners do before we compare them. Your capstone does both.

Choose a theme and two or more traditions the concentration has studied: suffering in Buddhism and Christianity; scripture and its recitation in Judaism and Islam; the self in Hinduism and Buddhism; pilgrimage; prayer; sacrifice; the relation of law and love.

For each tradition, read primary texts in translation and describe the relevant practices, with care to represent the tradition as its own adherents would recognize it. Then compare: what is genuinely similar, what only appears to be, and what is irreducibly different? Engage at least one theory of religion from the concentration's seminar, and say whether it helps.`,
    options: [
      { name: "Comparative essay", description: "One theme in two or three traditions." },
      { name: "Tradition study", description: "One theme in one tradition, studied in depth across its branches and history." },
    ],
    requirements: [
      "Study at least two traditions (or, for the tradition study, two branches or periods of one).",
      "Read primary texts in named translations.",
      "Describe practices as well as beliefs.",
      "Represent each tradition fairly, as its adherents would recognize it.",
      "Engage at least one theory of religion.",
      "Give a bibliography of primary and secondary sources.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Understanding of Traditions", description: "Accurate and sympathetic understanding of each tradition." },
      { name: "Use of Sources", description: "Well-chosen primary texts, read closely." },
      { name: "Comparison", description: "Comparison that is careful about genuine similarity and difference." },
      { name: "Theory", description: "Thoughtful use of a theory of religion." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  },

  // ——— Linguistics ———

  "General Linguistics": {
    title: "A Grammatical Sketch",
    summary: "A short descriptive grammar of a language you do not speak natively, built from published data: its sounds, words, and sentences, analyzed with the tools of the discipline.",
    brief: `The linguist's basic task is to describe a language as it is. Your capstone is a grammatical sketch: a short description of one language, organized like the grammars linguists write.

Choose a language that is not your native language, for which a published grammar, dictionary, or set of texts is available (a descriptive grammar, a teaching grammar, or a collection of glossed texts will do). Then describe:

1. **Background**: where and by whom the language is spoken, its family, and its sources.
2. **Phonology**: the consonant and vowel inventories (in IPA), and one or two phonological processes.
3. **Morphology**: how words are built—inflection, derivation, and morphological type.
4. **Syntax**: basic word order, how noun phrases and clauses are built, and one construction of special interest.
5. **A sample text**, interlinear-glossed according to the Leipzig Glossing Rules.

Throughout, give examples with glosses and translations, and cite your sources.`,
    options: [
      { name: "Grammatical sketch", description: "A short descriptive grammar of one language." },
      { name: "Typological study", description: "One grammatical feature (case, evidentiality, word order) compared across five or more languages." },
    ],
    requirements: [
      "Present phonological inventories in the IPA.",
      "Give at least fifteen glossed and translated examples.",
      "Follow the Leipzig Glossing Rules in all glossed examples.",
      "Analyze at least one construction in detail, with argument.",
      "Cite the published sources of all data.",
      "Use the terms of the discipline accurately.",
    ],
    words: { min: 3500, max: 8000 },
    rubric: [
      { name: "Description", description: "An accurate, well-organized description of the language." },
      { name: "Analysis", description: "Sound linguistic analysis, argued from the data." },
      { name: "Data and Glossing", description: "Well-chosen, correctly glossed examples." },
      { name: "Use of Sources", description: "Responsible use and citation of published data." },
      { name: "Expression", description: "Clear, precise, well-organized prose." },
    ],
  },

  "Historical and Comparative Linguistics": {
    title: "A Reconstruction Project",
    summary: "A comparative study of a set of related words or forms across several languages, with sound correspondences established and a proto-form reconstructed and defended.",
    brief: `The comparative method, which the concentration has taught, is the linguist's way of recovering languages no one wrote down. Your capstone applies it.

Assemble a data set of cognates—at least forty sets of related words or grammatical forms—across at least three languages of one family (for example Latin, Greek, Sanskrit, and Gothic; or several Romance, Germanic, Slavic, or Polynesian languages). Then:

1. Establish the regular **sound correspondences** among the languages, with a table.
2. **Reconstruct** the proto-forms, justifying each reconstructed sound.
3. State the **sound changes** that lead from the proto-language to each daughter, in order where order matters.
4. Discuss **exceptions**—borrowing, analogy, or later change—and explain them.
5. Relate your results to the standard reconstructions in the handbooks, and say where you agree and differ.`,
    options: [
      { name: "Lexical reconstruction", description: "Forty or more cognate sets, with correspondences and proto-forms." },
      { name: "Morphological reconstruction", description: "The reconstruction of one inflectional paradigm (a verb tense, a noun declension) across several daughter languages." },
    ],
    requirements: [
      "Present a data set of at least forty cognate sets (or one full paradigm across three or more languages), with sources.",
      "Give a table of regular sound correspondences.",
      "Reconstruct proto-forms and justify each reconstruction.",
      "State the sound changes for each daughter language.",
      "Account for exceptions.",
      "Compare your results with at least one standard handbook.",
    ],
    words: { min: 3000, max: 7500 },
    rubric: [
      { name: "Data", description: "A well-chosen, accurately cited data set." },
      { name: "Correspondences", description: "Correctly established and clearly presented regular correspondences." },
      { name: "Reconstruction", description: "Well-justified proto-forms and sound changes." },
      { name: "Explanation of Exceptions", description: "Insight into borrowing, analogy, and irregularity." },
      { name: "Expression", description: "Clear, precise presentation." },
    ],
  },

  "Phonetics and Phonology": {
    title: "A Phonological Analysis",
    summary: "An analysis of the sound system of a language or dialect from data you transcribe or gather: its inventory, its distributions, and the rules or constraints that govern it.",
    brief: `Phonology asks what speakers know about the sounds of their language. Your capstone analyzes a sound system from data.

Choose a language or dialect for which you can obtain good data: recordings you make of a willing speaker (with their permission), published recordings with transcriptions, or a published phonological description with word lists. Then:

1. Transcribe or assemble a data set of at least eighty words in narrow IPA.
2. Establish the **phoneme inventory**, using minimal pairs and complementary distribution.
3. Analyze at least two **phonological processes** (assimilation, lenition, vowel harmony, stress assignment, or others), stating them as rules or as ranked constraints in Optimality Theory.
4. Where possible, support your analysis with acoustic evidence (spectrograms or measurements made in a program like Praat).
5. Compare your analysis with the published literature on the language.`,
    options: [
      { name: "Phonological analysis", description: "The sound system of one language or dialect, from data." },
      { name: "Acoustic study", description: "An acoustic investigation of one phenomenon (vowel quality, tone, voice onset time) with measurements." },
    ],
    requirements: [
      "Present a data set of at least eighty transcribed words in IPA, with sources.",
      "Establish the phoneme inventory with evidence.",
      "Analyze at least two phonological processes formally.",
      "Obtain consent for any recordings of speakers, and say so.",
      "Compare your analysis with published work.",
      "Use the terms of the discipline accurately.",
    ],
    words: { min: 3000, max: 7500 },
    rubric: [
      { name: "Data and Transcription", description: "Accurate, well-organized phonetic data." },
      { name: "Phonemic Analysis", description: "A well-argued inventory and distributional analysis." },
      { name: "Formal Analysis", description: "Correct and insightful rules or constraint rankings." },
      { name: "Use of Literature", description: "Informed comparison with published work." },
      { name: "Expression", description: "Clear, precise presentation." },
    ],
  },

  "Syntax and Semantics": {
    title: "A Syntactic and Semantic Analysis",
    summary: "A formal analysis of one construction in a language you know well: its syntax, its meaning, and the theoretical questions it raises.",
    brief: `Syntax and semantics ask how sentences are built and how they mean what they mean. Your capstone analyzes one construction formally.

Choose a construction in a language you know well, ideally one with puzzles: English *wh*-questions and islands, the passive, raising and control verbs, reflexive pronouns and binding, quantifier scope ambiguities, the meaning of "only" or "even", tense and aspect in a language you speak.

Gather data, including judgments of grammaticality and meaning (from yourself and at least two other speakers, if possible). Present a formal analysis: syntactic structures (trees or bracketings), and a compositional semantic account. Show what your analysis predicts, test the predictions, and discuss at least one alternative analysis from the literature.`,
    options: [
      { name: "Syntactic analysis", description: "A construction analyzed in a formal syntactic framework, with its semantic consequences." },
      { name: "Semantic analysis", description: "A meaning phenomenon (scope, presupposition, modality) given a compositional semantics." },
    ],
    requirements: [
      "Present at least twenty example sentences with judgments, marking ungrammatical ones.",
      "Give formal structures (trees or bracketings) for key examples.",
      "Give a compositional semantic account, or explain the semantic consequences of the syntax.",
      "State and test the predictions of your analysis.",
      "Compare your analysis with at least one alternative from the literature.",
      "Give a list of works cited.",
    ],
    words: { min: 3000, max: 7500 },
    rubric: [
      { name: "Data", description: "Well-chosen examples with careful judgments." },
      { name: "Formal Analysis", description: "Correct and explicit syntactic or semantic analysis." },
      { name: "Argumentation", description: "Predictions stated and tested against data." },
      { name: "Use of Literature", description: "Informed comparison with alternative analyses." },
      { name: "Expression", description: "Clear, precise presentation." },
    ],
  },

  Sociolinguistics: {
    title: "A Sociolinguistic Study",
    summary: "A small empirical study of language variation or attitudes in a real community, designed, carried out, and analyzed with the methods of the discipline.",
    brief: `Sociolinguistics studies language in its social life. Your capstone is a small empirical study of your own.

Choose a question you can investigate: Does a variable (for example "-ing" versus "-in'", a vowel shift, the use of "like") vary with speaker age, gender, or setting in a community you can observe? How do speakers in a bilingual community switch between languages? What attitudes do listeners hold toward two accents? How is a group's identity marked in its online language?

Design a study: your research question, your data (recordings, observations, questionnaires, or a published corpus), and your method of analysis. Obtain informed consent from any participants, and protect their privacy. Carry out the study, present your results (with simple counts or statistics), and interpret them in light of the concentration's theories—Labov, Milroy, Eckert, Gumperz, and others.`,
    options: [
      { name: "Variation study", description: "A quantitative study of one linguistic variable in a community." },
      { name: "Interactional or attitude study", description: "A study of code-switching, discourse, or language attitudes." },
    ],
    requirements: [
      "State a clear research question and how your study answers it.",
      "Describe your data and method so that another researcher could repeat the study.",
      "Obtain informed consent from participants and anonymize them.",
      "Present results with counts, tables, or simple statistics.",
      "Interpret results in light of at least two sociolinguistic theories or studies.",
      "Discuss the limitations of your study.",
    ],
    words: { min: 3000, max: 7500 },
    rubric: [
      { name: "Research Design", description: "A clear question and a method suited to answering it." },
      { name: "Data and Ethics", description: "Sound data collection with informed consent and privacy." },
      { name: "Analysis", description: "Accurate presentation and analysis of results." },
      { name: "Interpretation", description: "Insightful use of sociolinguistic theory." },
      { name: "Expression", description: "Clear, organized presentation, honest about limitations." },
    ],
  },
};

/**
 * A capstone for a concentration that has none of its own, such as one
 * drafted by the forge before capstones existed. The faculty's brief is
 * general, but the examiner marks it against the concentration's own program.
 */
export function defaultCapstone(concentration: string): Capstone {
  return {
    title: `A Capstone Study in ${concentration}`,
    summary: `An extended, argued piece of work in ${concentration} that draws on the whole program of study.`,
    brief: `The capstone asks you to bring together what the program in ${concentration} has taught: its primary texts or evidence, its methods, and its debates.

Choose a question in ${concentration} that you care about and that the sources allow you to argue about. Narrow it until you can treat it thoroughly. Gather the primary material—texts, documents, or data—and read it closely and critically. Find out what the best scholars have said, and decide where you agree and where you do not. Then make your argument, supporting each claim with evidence and acknowledging what the evidence cannot settle.

A strong capstone will leave a thoughtful reader knowing something they did not know, or seeing something familiar in a new way.`,
    options: [
      { name: "Research essay", description: "An argued essay on a question in the field, from primary sources." },
      { name: "Critical study", description: "A close study of one major text, thinker, or body of evidence." },
    ],
    requirements: [
      "State a clear, arguable thesis.",
      "Use primary sources or data, read closely and critically.",
      "Draw on at least three courses in the program.",
      "Engage at least two works of published scholarship by name.",
      "Give a list of works cited.",
    ],
    words: { min: 4000, max: 8000 },
    rubric: [
      { name: "Argument", description: "A clear thesis, developed and sustained." },
      { name: "Use of Evidence", description: "Well-chosen primary material, read closely." },
      { name: "Command of the Field", description: "A secure grasp of the program's methods and debates." },
      { name: "Use of Scholarship", description: "Informed and independent engagement with scholarship." },
      { name: "Expression", description: "Clear, organized, and graceful prose." },
    ],
  };
}
