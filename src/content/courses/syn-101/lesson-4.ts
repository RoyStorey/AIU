import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Movement: Words Out of Place",
  summary:
    "Displacement and the idea of transformations; head movement in questions; wh-movement and its long-distance steps; question words that stay in place in Chinese and Japanese; Ross's islands; the that-trace effect; passives; raising and control; unaccusative verbs; relative clauses and resumptive pronouns; topics, focus, and clefts; and the debate over whether movement is real.",
  pages: [
    {
      title: "Words Out of Place",
      body: `## Displacement

In many sentences, a word or phrase appears in one position but seems to belong, in some sense, to another. Consider:

> *What did John buy?*

The verb *buy* normally takes an object after it: *John bought a book*. In the question, there is no object after *buy*, but there is a question word, *what*, at the front of the sentence, which is understood as the object of *buy*. The object appears **displaced** from its usual position.

Similarly:

> *The cake was eaten by the children.*

*The cake* is the subject of the sentence, but it is understood as the thing eaten, the role normally played by the object of *eat*.

This property of language, that phrases can be pronounced in one position but interpreted in another, is called **displacement**. Chomsky has called it one of the most striking properties of human language, with no clear parallel in artificial languages such as programming languages or mathematical notation.

## Transformations

In *Syntactic Structures* (1957), as we saw in Lesson I, Chomsky proposed to account for displacement with **transformations**: rules that take a structure built by phrase structure rules and rearrange it. The question *What did John buy?* was derived from an underlying structure resembling *John bought what*, by a transformation that moved *what* to the front.

## Deep structure and surface structure

In *Aspects of the Theory of Syntax* (1965), Chomsky distinguished two levels:

- **Deep structure**, built by phrase structure rules and the lexicon, in which each phrase appears in the position where it receives its basic role (the object after the verb);
- **Surface structure**, derived by transformations, which corresponds more closely to the sentence as pronounced.

Later theories reorganized these levels, and the Minimalist Program abandoned them in their original form. But the basic idea, that a phrase can be related to more than one position, remains.

## Traces and copies

When a phrase moves, what is left in its original position? In the 1970s and 1980s, generative syntacticians proposed that movement leaves a **trace**, an unpronounced element, often written *t*, linked to the moved phrase by an index:

> *What₁ did John buy t₁?*

In the Minimalist Program, the trace is replaced by a **copy**: the moved phrase is present in both positions, but only the higher copy is pronounced. Either way, the original position remains part of the structure, where the phrase is interpreted.

## Two kinds of movement

Syntacticians distinguish:

- **head movement**, in which a single word, a head, moves to another head position, as we saw with V-to-T and V2 in Lesson III;
- **phrasal movement**, in which a whole phrase moves, as in questions and passives.

Phrasal movement is further divided into **A-movement** (movement to an argument position, such as the subject position in passives) and **A-bar movement** (movement to a non-argument position, such as the specifier of CP in questions). The two kinds have different properties, as we will see.

> **Pause and consider.** In *Who did Mary say that John saw?*, where is *who* understood?`,
    },
    {
      title: "Head Movement in Questions",
      body: `## Subject–auxiliary inversion

In English yes–no questions, the auxiliary appears **before** the subject:

- *John **will** leave.* → ***Will** John leave?*
- *She **has** finished.* → ***Has** she finished?*

In terms of the clause structure of Lesson III, the auxiliary starts in **T** and **moves to C**, the head of CP, which is above the subject in the specifier of TP. This is called **T-to-C movement**, a kind of head movement:

> [CP [C Will₁] [TP John [T′ t₁ [VP leave]]]]

## Do-support

When there is no auxiliary, as in *John left*, there is nothing in T to move, only the tense feature. English cannot move the main verb to C (\\**Left John?*), because, as we saw in Lesson III, English main verbs do not move out of the VP. Instead, ***do*** is inserted in T to carry the tense, and then moves to C:

> *John left.* → ***Did** John leave?*

This is **do-support**, which we have met in Lesson II and in HIL 101. It is a "last resort," used only when tense would otherwise be stranded.

## Why move to C?

Why does T move to C in questions? One idea is that C in a question contains a **question feature**, which must be "checked" or satisfied by something moving into C. In main-clause questions in English, T moves to satisfy it. In embedded questions, a complementizer such as *whether* or *if* fills C instead, so T does not move: *I wonder **whether** John will leave*, not \\**I wonder will John leave* (in standard English).

## Head movement constraint

Head movement is subject to a restriction: a head can move only to the **next head up**, not skipping over an intervening head. This **Head Movement Constraint**, proposed by **Lisa Travis** in her dissertation of 1984, explains why, in a sentence with two auxiliaries, only the first can move:

- *John **will have** left.* → ***Will** John have left?* / \\***Have** John will left?*

The second auxiliary, *have*, cannot skip over *will* to reach C.

## Questions in other languages

Languages form yes–no questions in various ways:

- by **verb movement**, like English and German (*Hast du das Buch gelesen?* "Have you the book read?");
- by a **question particle**, as in Japanese (*-ka* at the end: *Taroo-wa kita ka?* "Did Taro come?") and Mandarin (*ma*: *Nǐ hǎo ma?* "Are you well?");
- by **intonation** alone, as in many languages, including Italian and, often, colloquial English (*You're leaving?*);
- by special verb forms or **alternative** constructions, such as Mandarin *A-not-A* questions (*Nǐ qù bu qù?* "You go not go?", "Are you going?").

These options are another example of how languages use different means to express the same function.

> **Pause and consider.** Why can't English form a question like *Left John?* What does it use instead?`,
    },
    {
      title: "Wh-Movement",
      body: `## Question words move

In English **wh-questions** (questions with *who*, *what*, *where*, *when*, *why*, *how*, *which*), the question word or phrase moves to the **front** of the clause, to the **specifier of CP**. At the same time, as in yes–no questions, the auxiliary moves from T to C:

> *John bought **a book**.* → ***What** did John buy t?*

> [CP What₁ [C′ did₂ [TP John [T′ t₂ [VP buy t₁]]]]]

The question phrase can be larger than a single word: ***Which book** did John buy?*; ***How many students** passed the exam?*; ***To whom** did you give the letter?*

## Long-distance movement

Question words can move out of embedded clauses, across long distances:

> ***What** do you think [that John bought t]?*
>
> ***Who** did Mary say [that you believe [that John saw t]]?*

There is no limit on the number of clauses a question word can cross, as long as certain conditions, which we will study later in this lesson, are met.

## Successive cyclic movement

Does the question word move in one long jump, or in a series of short steps? Since the 1970s, generative syntacticians have argued that long-distance movement is **successive cyclic**: the question word moves first to the specifier of the lowest CP, then to the next CP up, and so on, until it reaches the top.

> *What do you think [CP **t** that John bought **t**]?*

Evidence comes from languages that show the path of movement overtly:

- In **Irish**, as **James McCloskey** has shown, the complementizer changes form when a question word or relative pronoun has passed through its clause: *go* in an ordinary clause, but a different form, written *aL*, in each clause through which movement has passed. The complementizers mark every step of the path.
- In **Spanish**, subject–verb inversion occurs in every clause through which a question word has moved.
- In some dialects of **German**, a copy of the question word appears at the edge of an intermediate clause: *Wen glaubst du, **wen** sie getroffen hat?* "Who do you think who she met?"

Such facts suggest that the intermediate positions are real.

## Pied-piping and stranding

When a question word is the object of a preposition, English allows two options:

- **pied-piping**: the preposition moves with the question word: ***To whom** did you speak?*
- **preposition stranding**: the preposition stays behind: ***Who** did you speak **to**?*

The term *pied-piping*, coined by **John Robert Ross** in 1967, alludes to the Pied Piper of Hamelin, who led the rats (and children) away. Preposition stranding, as we saw in Lesson I, is condemned by some prescriptive grammars but is natural English; it is rare in the world's languages, found mainly in English and the Scandinavian languages.

## Echo questions

English also allows **echo questions**, in which the question word stays in place, usually with strong stress, expressing surprise or a request for repetition: *You bought **WHAT**?* These show that English can leave question words in place under special conditions, as many other languages do routinely, as we will see on the next page.

> **Pause and consider.** In *Who do you think Mary said John saw?*, trace the path of *who* through each clause.`,
    },
    {
      title: "Question Words That Stay Put",
      body: `## Wh-in-situ

Not all languages move question words. In **Mandarin Chinese**, **Japanese**, **Korean**, **Hindi**, and many other languages, question words remain in the position where a corresponding non-question phrase would appear. This is called **wh-in-situ** ("in place").

Mandarin:

> *Nǐ mǎi-le **shénme**?*
> you buy-PERF what
> "What did you buy?"

compare *Nǐ mǎi-le **shū*** "You bought a book."

Japanese:

> *Taroo-ga **nani**-o katta **ka**?*
> Taro-NOM what-ACC bought Q
> "What did Taro buy?"

In Japanese, the question word *nani* "what" stays in the object position, and the question particle *ka* appears at the end of the clause, in C.

## Covert movement?

How do such languages mark the **scope** of a question, that is, which clause the question belongs to? In *Who do you think John saw?* (a direct question about who John saw) and *Do you know who John saw?* (a yes–no question containing an embedded question), English shows the scope by the position of *who*. In Mandarin and Japanese, the question word is in the same position in both.

In his dissertation of 1982, the Taiwanese linguist **C.-T. James Huang** argued that Chinese question words move **covertly**: at an abstract level of structure relevant to meaning, called **Logical Form** (LF), they move to the specifier of CP, just as English question words do overtly. Evidence came from restrictions on interpretation in Chinese that resembled the restrictions on overt movement in English, which we study next. Other linguists have proposed analyses in which in-situ question words are interpreted without movement, linked instead to a question particle or operator in C.

## Multiple questions

Languages also differ in how they handle **multiple** question words in a single sentence:

- In **English**, only one question word moves: ***Who** bought **what**?* (not \\**Who what bought?*).
- In **Bulgarian** and other Slavic languages, **all** question words move to the front, as **Catherine Rudin** showed in 1988: *Koj kakvo e kupil?* "Who what has bought?"
- In **Japanese** and **Mandarin**, none move.

These three patterns, multiple movement, single movement, and no movement, have been central data for theories of wh-movement.

## Partial movement

Some languages, such as **Hindi** and some dialects of **German**, allow **partial** movement, in which a question word moves to an intermediate clause while a separate question marker appears at the top: German dialects allow *Was glaubst du, **wen** sie getroffen hat?* "What do you think whom she met?", meaning "Who do you think she met?" Such constructions give further evidence about the path of movement.

## A typological perspective

From a typological perspective, wh-in-situ correlates with other properties: it is common in **head-final** (SOV) languages like Japanese, Korean, and Hindi, while overt wh-movement to the front is common in **head-initial** languages, especially VSO languages. This correlation, noted by Greenberg and later typologists, suggests links between word order and question formation, though Mandarin, an SVO language with wh-in-situ, shows that the correlation is not absolute.

> **Pause and consider.** In Mandarin, how might a listener know whether *Nǐ zhīdào tā mǎi-le shénme* means "Do you know what he bought?" or "What do you know he bought?"`,
    },
    {
      title: "Islands",
      body: `## Places you cannot leave

Question words can move across many clauses, but not out of every kind of structure. In his dissertation, *Constraints on Variables in Syntax* (1967), **John Robert Ross** identified a series of structures from which movement is impossible. He called them **islands**, because a phrase inside them is stranded, unable to move out.

## Complex noun phrases

A question word cannot move out of a clause inside a noun phrase:

- *You heard [the rumor [that John bought a car]].*
- \\***What** did you hear [the rumor [that John bought **t**]]?*

compare the acceptable *What did you hear [that John bought t]?*, where the clause is not inside a noun phrase. This is the **Complex Noun Phrase Constraint**. Relative clauses are also complex NPs:

- \\***What** did you meet [the man [who bought **t**]]?*

## Wh-islands

A question word cannot easily move out of an embedded question introduced by another question word:

- *You wonder [who bought the car].*
- \\***What** do you wonder [who bought **t**]?*

This is the **wh-island** constraint. Many speakers find wh-island violations less severe than complex NP violations, especially when the moved phrase is a *which*-phrase: *?Which car do you wonder who bought?*

## Adjuncts and subjects

Movement out of **adjunct** clauses, such as *because*- or *after*-clauses, is generally impossible:

- *You left [after John bought the car].*
- \\***What** did you leave [after John bought **t**]?*

Movement out of **subjects** is also restricted:

- *[A picture of John] fell.*
- \\***Who** did [a picture of **t**] fall?*

compare *Who did you see [a picture of t]?*, where the phrase is an object.

## Coordinate structures

As we saw in Lesson I, a question word cannot move out of one part of a coordinate structure: \\***What** did you buy [**t** and a hat]?* But it can move out of all parts at once, a phenomenon called **across-the-board** movement: ***What** did John buy **t** and Mary sell **t**?*

## Explaining islands

Why do islands exist? In the 1970s, Chomsky proposed the principle of **Subjacency**: a single movement cannot cross more than one "bounding node" (such as NP or TP) at a time. Combined with successive cyclic movement through CP specifiers, Subjacency explained why movement out of complex NPs and wh-islands is impossible: in these structures, there is no intermediate landing site, so the moved phrase would have to cross two bounding nodes in one step. Later theories reformulated this idea in terms of **barriers** and **phases**.

## Grammar or processing?

Some researchers, such as **Robert Kluender**, **Philip Hofmeister**, and **Ivan Sag**, have argued that some island effects reflect **processing** difficulty rather than grammatical prohibition: long-distance dependencies into complex structures are hard to process, and become more acceptable when processing is eased. Others, such as **Jon Sprouse** and colleagues, have argued on the basis of experiments that island effects cannot be reduced to processing alone. The debate continues.

> **Pause and consider.** Why might *What did you hear the rumor that John bought?* be harder than *What did you hear that John bought?*`,
    },
    {
      title: "Subjects and the That-Trace Effect",
      body: `## Subject questions

When the **subject** is questioned in a main clause, English does not use do-support or inversion:

- *John saw Mary.* → ***Who** saw Mary?* (not \\**Who did see Mary?*, except with emphasis)

Why not? One explanation is that the subject question word moves from the specifier of TP to the specifier of CP, but because the movement is so short, and the word order does not change, no inversion is needed. Another is that, in subject questions, the question word may remain in the specifier of TP. The details are debated.

## The that-trace effect

As we noted in Lesson II, English has a curious restriction on questioning subjects of embedded clauses:

- *Who do you think [**that** John saw **t**]?* (object question: fine with or without *that*)
- *Who do you think [John saw **t**]?*
- *Who do you think [**t** saw John]?* (subject question without *that*: fine)
- \\**Who do you think [**that** **t** saw John]?* (subject question with *that*: bad)

A subject cannot be questioned out of a clause introduced by *that*, though an object can. This **that-trace effect** (so called because *that* is immediately followed by the trace of the moved subject) was first discussed by **Joan Bresnan** in 1972 and analyzed by **Chomsky** and **Howard Lasnik** in 1977.

## Explanations

Many explanations have been proposed. In the Government and Binding framework of the 1980s, the effect was attributed to the **Empty Category Principle**, which required traces to be properly connected to an element that licenses them; *that* was thought to block this connection for subject traces. Later analyses have appealed to the properties of the complementizer, the subject position, or prosody.

## Variation

The that-trace effect is not universal, and varies even among English speakers. Some dialects of English allow sentences like *Who do you think that saw John?* And languages such as **Italian** and **Spanish** do not show the effect at all:

> *Chi credi **che** abbia visto Gianni?*
> who you-think that has seen Gianni
> "Who do you think saw Gianni?"

Italian and Spanish are **null-subject** languages, as we saw in Lesson III, which allow subjects to be omitted and to appear after the verb. **Luigi Rizzi** and others proposed that the absence of the that-trace effect in these languages is linked to their null-subject property: the subject can be extracted from a position after the verb, avoiding the problem. This link, between null subjects, free subject inversion, and the absence of that-trace effects, was one of the parameter clusters investigated in the 1980s, as we will see in Lesson V.

## Experimental evidence

Experiments with naive English speakers have generally confirmed the that-trace effect: subject extraction across *that* is judged significantly worse than object extraction or subject extraction without *that*. But there is individual and dialectal variation, and the effect is weaker when other material, such as an adverb, intervenes between *that* and the trace: *Who do you think that, after all these years, still loves Mary?* is acceptable to many speakers. This **adverb effect**, noted by **Peter Culicover** in 1993, has been an important clue in efforts to explain the phenomenon.

> **Pause and consider.** Do you accept *Who do you think that saw John?* Ask other speakers. Do they agree?`,
    },
    {
      title: "The Passive",
      body: `## Active and passive

In an **active** sentence, the subject is typically the agent: *The children ate the cake.* In the corresponding **passive**, the object of the active appears as the subject, the verb appears as a past participle with the auxiliary *be*, and the agent appears optionally in a *by*-phrase:

> *The cake was eaten (by the children).*

## Passive as movement

In generative syntax, the passive is analyzed as **A-movement**: the object moves from its position after the verb to the **subject position**, the specifier of TP:

> [TP The cake₁ [T′ was [VP eaten t₁ (by the children)]]]

The original position of the object, after *eaten*, is where *the cake* receives its role as the thing eaten.

## Why does the object move?

In Government and Binding theory, the movement was explained by **Case**: noun phrases must receive abstract Case, and passive participles, unlike active verbs, cannot assign Case to their objects. The object must therefore move to the subject position, where it receives nominative Case from T. We will study Case in Lesson V. This explanation also accounts for why passives have no ordinary object position available: \\**It was eaten the cake*.

## Passives and roles

The passive changes **grammatical relations** but not **thematic roles**: in both *The children ate the cake* and *The cake was eaten by the children*, the children are the eaters and the cake is eaten. The passive allows a speaker to make the patient the subject, often because it is the topic of discussion, or to omit the agent when it is unknown or unimportant: *The window was broken* (by someone unknown).

## The agentless passive

The ability to omit the agent makes the passive useful, and sometimes controversial. Style manuals often advise writers to avoid the passive, as vague or evasive. Political and bureaucratic language uses agentless passives, as in the famous phrase "mistakes were made," which acknowledges errors without saying who made them. But linguists such as **Geoffrey Pullum** have pointed out that many writers who condemn the passive misidentify it, and that the passive is often the best choice for focusing on what matters.

## Other passives

English has other passive-like constructions:

- the ***get*-passive**: *The window **got** broken*; *He **got** fired*, often used for adverse or unexpected events;
- **prepositional passives**, in which the object of a preposition becomes the subject: *This bed has been slept **in***; *The issue was talked **about***, rare in the world's languages;
- **middles**: *This book reads easily*; *Bureaucrats bribe easily*, which describe a property of the subject without an implied event.

## Passives across languages

Many languages have passives, formed with auxiliaries (as in English, French, German) or with verbal affixes (as in Latin *amātur* "is loved," Turkish, Japanese *-are-*). Some languages, such as **Japanese**, have an **adversative** passive, used when the subject is negatively affected by an event, even an intransitive one: *Taroo-wa ame-ni fur-are-ta*, literally "Taro was rained on," meaning that Taro was inconvenienced by the rain. Others have no passive at all, using other constructions to background the agent.

> **Pause and consider.** Find an example of an agentless passive in a news report. Why might the writer have chosen it?`,
    },
    {
      title: "Raising and Control",
      body: `## Two similar sentences

Consider:

- *John **seems** to be happy.*
- *John **tries** to be happy.*

On the surface, these look identical: a subject, a verb, and an infinitive. But they behave very differently, and syntacticians analyze them in different ways.

## Raising

With ***seem***, the subject *John* is not really an argument of *seem*: John does not do anything, and *seem* says nothing about John directly. Rather, the sentence means "It seems that John is happy." *John* is the subject of *be happy*, and has **moved** from the subject position of the infinitive to the subject position of the main clause. This is called **raising** (specifically, **subject-to-subject raising**):

> *John₁ seems [t₁ to be happy].*

Compare the paraphrase with an **expletive** subject: *It seems that John is happy.*

## Control

With ***try***, the subject *John* is a genuine argument of *try*: John is the one trying. The infinitive also has an understood subject, John, who would be happy. But here, *John* has not moved. Instead, the infinitive has a silent subject, conventionally called **PRO**, which refers to (is **controlled** by) *John*:

> *John tries [PRO to be happy].*

This is called **control**.

## Tests

Several tests distinguish raising from control:

1. **Expletives**: raising verbs allow expletive subjects, because they impose no requirements on their subject: *There seems to be a problem*; \\**There tries to be a problem*.
2. **Idioms**: idioms whose meaning depends on a specific subject survive raising but not control: *The cat seems to be out of the bag* (idiomatic: the secret is revealed); *The cat tried to be out of the bag* (only literal: an actual cat).
3. **Paraphrase**: raising sentences can be paraphrased with *it* and a finite clause: *It seems that John is happy*; control sentences cannot: \\**It tries that John is happy*.
4. **Passive**: with raising, the active and passive of the infinitive are synonymous: *The doctor seems to have examined John* = *John seems to have been examined by the doctor*. With control, they differ: *The doctor tried to examine John* ≠ *John tried to be examined by the doctor*.

## Object raising and object control

Similar distinctions apply to objects:

- *I believe [John to be happy].* (*John* is the subject of *be happy*; often analyzed as **exceptional case marking** or **raising to object**)
- *I persuaded John [PRO to leave].* (*John* is the object of *persuade* and controls PRO)

The test with idioms again distinguishes them: *I believe the cat to be out of the bag* (idiomatic possible) versus *I persuaded the cat to be out of the bag* (only literal).

## Theories of control

The nature of PRO has been much debated. In the 1990s, **Norbert Hornstein** proposed a **movement theory of control**, in which control, like raising, involves movement, with the difference that the moved phrase receives a role in both positions. Other linguists defend the traditional view of PRO as a distinct silent pronoun. The debate illustrates how syntacticians test theories against fine-grained data.

> **Pause and consider.** Apply the idiom test to *The shit is likely to hit the fan* and *The shit is eager to hit the fan*. Which verb is a raising verb?`,
    },
    {
      title: "Unaccusative Verbs",
      body: `## Two kinds of intransitive

Intransitive verbs, which take no object, seem to form a single class. But in 1978, the American linguist **David Perlmutter** proposed that they divide into two classes with different syntactic properties:

- **Unergative** verbs have a subject that is an **agent**, deliberately doing something: *laugh*, *swim*, *talk*, *telephone*, *work*.
- **Unaccusative** verbs have a subject that is a **theme** or **patient**, something that undergoes a change or simply exists: *arrive*, *fall*, *melt*, *die*, *exist*, *appear*.

Perlmutter's **Unaccusative Hypothesis** proposed that the subject of an unaccusative verb is underlyingly an **object**, which moves to the subject position, much as in the passive:

> *The ice₁ melted t₁.*

## Evidence from Italian

Some of the clearest evidence comes from **Italian**, studied by **Luigi Burzio** in *Italian Syntax* (1986). Italian uses two auxiliaries in the perfect tense:

- *avere* "have" with transitive and unergative verbs: *Gianni **ha** telefonato* "Gianni has telephoned"; *Gianni **ha** riso* "Gianni has laughed."
- *essere* "be" with unaccusative verbs: *Gianni **è** arrivato* "Gianni has (lit. is) arrived"; *Gianni **è** caduto* "Gianni has fallen."

Passives also use *essere*. The auxiliary choice groups unaccusatives with passives, both of which, on Perlmutter's analysis, have subjects that are underlying objects. French (*il est arrivé* versus *il a téléphoné*), German, and Dutch show similar auxiliary selection.

Italian also has a pronoun *ne* "of them," which can be extracted from objects and from the subjects of unaccusatives, but not from the subjects of unergatives:

- *Ne sono arrivati tre.* "Of-them are arrived three" ("Three of them arrived.") (unaccusative: fine)
- \\**Ne hanno telefonato tre.* "Of-them have telephoned three." (unergative: bad)

This again shows that unaccusative subjects behave like objects.

## Evidence from English

English shows the distinction in subtler ways:

- **Resultatives**, which we met in Lesson III, can be predicated of the subjects of unaccusatives (*The river froze **solid***) but not unergatives without a reflexive (*She laughed **herself** silly*, not \\**She laughed silly*).
- **There-insertion** is more natural with unaccusatives: *There **arrived** three ships*; \\**There **laughed** three children*.
- **Prenominal past participles** are possible with unaccusatives: *a **fallen** leaf*, *the **departed** guests*; but not with unergatives: \\**a **laughed** child*.

## Meaning and syntax

The unaccusative/unergative distinction correlates with meaning: unaccusatives describe changes of state, motion, appearance, and existence; unergatives describe voluntary activities and bodily processes. But the correspondence is not perfect, and verbs may differ across languages. **Beth Levin** and **Malka Rappaport Hovav**, in *Unaccusativity* (1995), explored the relation between meaning and the two classes in detail.

## Why it matters

The Unaccusative Hypothesis shows that apparently simple sentences may have hidden structure, and that the same surface pattern (subject + intransitive verb) can conceal different underlying relations. It also shows how evidence from several languages can converge to support an abstract analysis.

> **Pause and consider.** Is *die* unaccusative or unergative? What about *dance*? Use the tests above.`,
    },
    {
      title: "Relative Clauses",
      body: `## Modifying clauses

A **relative clause** is a clause that modifies a noun: *the book [**that** John bought]*; *the woman [**who** lives next door]*. In English, relative clauses follow the noun and are introduced by a **relative pronoun** (*who*, *whom*, *which*, *whose*), by the complementizer *that*, or by nothing:

- *the book **which** John bought*
- *the book **that** John bought*
- *the book John bought*

## Relativization as movement

In generative analyses, relative clauses involve **A-bar movement** similar to wh-questions. The relative pronoun (or a silent equivalent) moves from its original position inside the clause to the specifier of the relative clause's CP:

> *the book [CP **which**₁ [TP John bought t₁]]*

Evidence for movement comes from **islands**: relativization obeys the same island constraints as questions. Just as \\**What did you hear the rumor that John bought?* is bad, so is \\**the car that you heard the rumor that John bought*.

## Restrictive and non-restrictive

English distinguishes:

- **restrictive** relative clauses, which identify which entity is meant: *The students **who passed** celebrated* (only those who passed);
- **non-restrictive** (appositive) relative clauses, which add information about an entity already identified, set off by commas: *The students, **who passed**, celebrated* (all of them passed).

Non-restrictive clauses cannot use *that* or omit the relative pronoun: \\**The students, that passed, celebrated*.

## Resumptive pronouns

In some languages, relative clauses contain a **resumptive pronoun** in the position of the relativized noun phrase, instead of a gap:

- **Hebrew**: *ha-ish she-raiti **oto*** "the man that I-saw **him**" ("the man that I saw");
- **Irish**, in some constructions, as McCloskey showed;
- **Arabic**, **Persian**, and many others.

Interestingly, resumptive pronouns often appear precisely in positions from which movement is impossible, such as inside islands, suggesting that they offer an alternative to movement. In colloquial English, speakers sometimes use resumptive pronouns to rescue island violations: *the man that I don't know where **he** lives*, which many speakers find more acceptable than *the man that I don't know where lives*.

## The accessibility hierarchy

In 1977, **Edward Keenan** and **Bernard Comrie** proposed the **Noun Phrase Accessibility Hierarchy**, based on a survey of many languages:

> subject > direct object > indirect object > oblique > genitive > object of comparison

If a language can relativize a position on the hierarchy, it can relativize all positions higher on the hierarchy. All languages can relativize subjects; some can relativize only subjects; others can also relativize objects, and so on down. The hierarchy also predicts the use of resumptive pronouns: languages tend to use gaps for higher positions and resumptive pronouns for lower ones. Psycholinguists have found that subject relatives are also easier to process than object relatives, in many languages.

> **Pause and consider.** Compare *the students who passed celebrated* and *the students, who passed, celebrated*. How do their meanings differ?`,
    },
    {
      title: "Topics, Focus, and Clefts",
      body: `## Moving for emphasis

Besides questions and relative clauses, English uses movement to the left for other purposes, related to the flow of information in discourse.

## Topicalization

**Topicalization** moves a phrase to the front of the sentence to mark it as the **topic** or to contrast it with something else:

> ***That book**, I have never read.*
> ***Beans**, I like; **peas**, I can't stand.*

Topicalization is an A-bar movement, like wh-movement, and obeys island constraints: \\**That book, I heard the rumor that John read*.

## Left dislocation

A related construction, **left dislocation**, places a phrase at the front but leaves a **pronoun** in its original position:

> ***That book**, I have never read **it**.*

Unlike topicalization, left dislocation does not obey island constraints (*That book, I heard the rumor that John read it* is acceptable to many speakers), suggesting that it does not involve movement: the fronted phrase is linked to the pronoun in another way. The contrast parallels the contrast between gaps and resumptive pronouns in relative clauses.

## Clefts

**Cleft** sentences, which we used as a constituency test in Lesson II, focus a phrase by placing it after *it is* or *it was*:

> *It was **the butler** who stole the jewels.*

The cleft emphasizes that the butler, and not someone else, stole the jewels; it presupposes that someone stole them. **Pseudoclefts** do something similar: *What the butler stole was **the jewels***.

## Focus positions in other languages

Many languages have a special syntactic position for **focus**, the new or contrastive information in a sentence. In **Hungarian**, the focused phrase appears immediately before the verb, a fact studied by **Katalin É. Kiss** and others. In many languages, such as Italian, focus can appear at the left edge of the clause, in one of the positions of the split CP proposed by **Rizzi**, which we met in Lesson III. Other languages mark focus with particles, as in many African and Asian languages, or with intonation, as English often does.

## Information structure

These constructions belong to the domain of **information structure**: how sentences package information as given or new, as topic or comment, as background or focus. As we saw with word order in Japanese and German, many languages use word order more freely than English to express information structure, while English relies more on intonation and on special constructions like clefts. The study of information structure connects syntax with pragmatics and discourse, topics we will meet again in SYN 110.

## Why so many constructions?

Why does English have so many ways of rearranging sentences, such as topicalization, left dislocation, clefts, pseudoclefts, and passives? Each serves a different function in discourse, allowing speakers to fit their sentences to the context: to connect with what has been said, to contrast, to emphasize, or to background information. Functional linguists, such as **Knud Lambrecht** in *Information Structure and Sentence Form* (1994), have studied these functions in detail.

> **Pause and consider.** Compare *The butler stole the jewels* with *It was the butler who stole the jewels*. In what context would you use each?`,
    },
    {
      title: "Missing Material: Ellipsis",
      body: `## Saying less than we mean

Movement leaves material unpronounced in its original position. **Ellipsis** leaves material unpronounced altogether, because it can be recovered from the context. English has several kinds of ellipsis, each with its own syntax.

## VP ellipsis

In **VP ellipsis**, which we met as a constituency test in Lesson II, a verb phrase is omitted after an auxiliary:

> *Mary will buy a car, and John will [ ] too.*

The missing VP is understood as *buy a car*. VP ellipsis requires an auxiliary (or *to*) to remain: \\**Mary bought a car, and John too* is not VP ellipsis (though *and John did too* is).

## Sluicing

In **sluicing**, a name coined by **John Robert Ross** in 1969, everything in an embedded question is omitted except the question word:

> *Someone called, but I don't know **who** [ ].*

The missing material is understood as *called*. Sluicing has been studied intensively, especially by **Jason Merchant** in *The Syntax of Silence* (2001). One of its most remarkable properties is that it seems to **repair** island violations:

- \\**They want to hire someone who speaks a Balkan language, but I don't remember which they want to hire someone who speaks.* (island violation)
- *They want to hire someone who speaks a Balkan language, but I don't remember **which**.* (acceptable)

If the question word has moved out of an island, why is the sluiced version acceptable? Proposals include that the island violation is "deleted" along with the material, or that islands are partly properties of pronounced structure. The puzzle remains a lively topic of research.

## Gapping

In **gapping**, the verb (and sometimes more) is omitted from the second of two coordinated clauses:

> *John ate rice, and Mary [ ] beans.*

Gapping is restricted to coordination and generally requires contrast between the remaining phrases. It occurs in many languages, and its direction (whether the gap is in the first or second clause) has been linked to word order: in SOV languages such as Japanese, the verb may be omitted from the **first** clause instead.

## Noun phrase ellipsis

Parts of noun phrases can also be omitted:

> *I read John's book, and you read Mary's [ ].*

Here *book* is missing after *Mary's*.

## What is missing?

A central question in the study of ellipsis is whether the missing material is **syntactically present** but unpronounced, or simply **absent**, with its meaning recovered from context. Evidence that the material is present includes:

- **connectivity effects**: the remnant must have the form required by the missing structure. In German, the sluiced question word must have the case that the missing verb would assign: *Er will jemandem schmeicheln, aber sie wissen nicht, **wem*** "He wants to flatter someone, but they don't know whom (dative)," because *schmeicheln* takes a dative object.
- **binding** and agreement patterns in the ellipsis site.

Other researchers argue that such effects can be explained without positing unpronounced structure. Like movement, ellipsis raises deep questions about the relation between what is said and what is understood.

> **Pause and consider.** In *Someone called, but I don't know who*, what exactly is missing?`,
    },
    {
      title: "Is Movement Real?",
      body: `## A metaphor or a mechanism?

Throughout this lesson, we have described displacement in terms of **movement**: phrases starting in one position and moving to another. Is movement a real process, or just a convenient metaphor? Different theories give different answers.

## Movement in Minimalism

In Chomsky's **Minimalist Program**, movement is a basic operation of the grammar, called **Internal Merge**: taking a part of a structure and merging it again at a higher position, leaving a copy behind. Chomsky has argued that displacement follows naturally from the simplest possible combinatory operation, Merge, which can combine any two elements, including an element with a part of itself. On this view, movement is not an imperfection but an expected property of language.

## Alternatives without movement

Other frameworks account for displacement without movement:

- **Lexical-Functional Grammar** (LFG), developed by **Joan Bresnan** and **Ronald Kaplan** in the late 1970s and 1980s, represents sentences with separate levels of constituent structure and functional structure, linked by correspondence rules. A question word is linked to its grammatical function (such as object) without moving.
- **Head-Driven Phrase Structure Grammar** (HPSG), developed by **Carl Pollard** and **Ivan Sag** in the 1980s and 1990s, uses features that pass information about a missing element (a "gap") up through the tree until it meets the displaced phrase.
- **Construction Grammar**, associated with **Charles Fillmore**, **Adele Goldberg**, and others, treats questions, passives, and other constructions as learned pairings of form and meaning, without deriving one from another.

These frameworks capture the same facts, such as the link between a question word and its gap and the island constraints, in different ways.

## Psycholinguistic evidence

Experiments on sentence processing have provided evidence about how listeners link displaced phrases with their original positions:

- The **filled-gap effect**: in a study published in 1986, **Laurie Stowe** found that readers slow down when they encounter a noun phrase in a position where they expected a gap: in *My brother wanted to know **who** Ruth will bring **us** home to at Christmas*, readers slowed at *us*, because they had expected the gap of *who* after *bring*. Readers actively look for gaps as soon as they encounter a question word.
- **Reactivation**: experiments using cross-modal priming, by **Janet Nicol**, **David Swinney**, and others, found that the meaning of a displaced phrase is reactivated in listeners' minds at the position of its gap.

Such findings show that listeners link displaced phrases to their original positions in real time. They are compatible with movement theories, but also with other theories that posit gaps or dependencies.

## What all theories share

Whatever their formal mechanisms, all serious theories of syntax recognize that:

- a phrase can be pronounced in one position and interpreted in relation to another;
- such dependencies can span long distances but are blocked by certain structures;
- the patterns of displacement vary across languages in systematic ways.

The disagreement concerns the best way to represent these facts, a question that, like many in science, may be settled only by the theory that explains the most with the least.

> **Pause and consider.** Why might readers slow down at *us* in *who Ruth will bring us home to*?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Wh-movement

> *What do you think that John bought?*

**Questions**

1. Mark the original position of *what* and its intermediate landing site.
2. What evidence from Irish supports successive cyclic movement?

## 2. Islands

> \\**What did you hear the rumor that John bought?* / *What did you hear that John bought?*

**Questions**

1. Which island constraint does the first sentence violate?
2. Is the effect due to grammar or processing? Summarize the debate.

## 3. Raising and control

> *The cat seems to be out of the bag.* / *The cat tried to be out of the bag.*

**Questions**

1. Which sentence keeps the idiomatic meaning?
2. What does this show about *seem* and *try*?

## 4. Unaccusatives

> Italian *Gianni è arrivato* / *Gianni ha telefonato*

**Questions**

1. Why do the two verbs take different auxiliaries?
2. What does this suggest about the subject of *arrivare*?

## Drawing the threads together

In a paragraph, explain how syntacticians account for displacement, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "4th ed., 2021", note: "Read the chapters on head-to-head movement, DP movement, and wh-movement and locality." },
    { kind: "book", title: "Constraints on Variables in Syntax", author: "John Robert Ross", publisher: "PhD dissertation, MIT", year: "1967", note: "Read the chapter introducing islands; published as Infinite Syntax! (Ablex, 1986)." },
    { kind: "book", title: "Italian Syntax: A Government-Binding Approach", author: "Luigi Burzio", publisher: "Reidel", year: "1986", note: "For advanced students: read the opening discussion of auxiliary selection and ne." },
  ],
  media: [
    { kind: "book", title: "Unaccusativity: At the Syntax–Lexical Semantics Interface", author: "Beth Levin and Malka Rappaport Hovav", publisher: "MIT Press", year: "1995", note: "Read chapter 1." },
    { kind: "book", title: "Information Structure and Sentence Form", author: "Knud Lambrecht", publisher: "Cambridge University Press", year: "1994", note: "Read the introduction on topic and focus." },
  ],
  questions: [
    {
      prompt: "What is displacement?",
      choices: [
        "The loss of words",
        "The property that a phrase can be pronounced in one position but interpreted in another",
        "Word order variation across languages",
        "Ambiguity",
      ],
      answer: 1,
      explanation: "As in What did John buy?",
    },
    {
      prompt: "In Did John leave?, what has moved to C?",
      choices: ["John", "leave", "did, carrying tense from T", "Nothing"],
      answer: 2,
      explanation: "Do-support inserts do in T, which moves to C.",
    },
    {
      prompt: "What does successive cyclic movement claim?",
      choices: [
        "Question words move in one long jump",
        "Long-distance movement proceeds in steps through the edge of each intermediate clause",
        "Question words never move",
        "Only heads move",
      ],
      answer: 1,
      explanation: "Irish complementizers mark each step.",
    },
    {
      prompt: "What is wh-in-situ?",
      choices: [
        "Moving question words to the front",
        "Leaving question words in their original position, as in Mandarin and Japanese",
        "Deleting question words",
        "Using two question words",
      ],
      answer: 1,
      explanation: "Huang (1982) proposed covert movement.",
    },
    {
      prompt: "Which constraint does *What do you wonder who bought? violate?",
      choices: ["Complex NP Constraint", "Wh-island constraint", "Coordinate Structure Constraint", "That-trace effect"],
      answer: 1,
      explanation: "Movement out of an embedded question.",
    },
    {
      prompt: "What is the that-trace effect?",
      choices: [
        "Objects cannot be questioned",
        "A subject cannot be questioned out of a clause introduced by that",
        "That must always be present",
        "That cannot be used in relative clauses",
      ],
      answer: 1,
      explanation: "It is absent in Italian and Spanish.",
    },
    {
      prompt: "In the passive The cake was eaten, what has moved?",
      choices: [
        "The verb",
        "The object, to the subject position",
        "The agent",
        "Nothing",
      ],
      answer: 1,
      explanation: "A-movement to the specifier of TP.",
    },
    {
      prompt: "Which test shows that seem is a raising verb?",
      choices: [
        "It takes an infinitive",
        "It allows expletive subjects and preserves idiomatic meanings",
        "It has an agent subject",
        "It is transitive",
      ],
      answer: 1,
      explanation: "There seems to be a problem; the cat seems to be out of the bag.",
    },
    {
      prompt: "What did Burzio show about Italian unaccusatives?",
      choices: [
        "They take avere",
        "They take essere and allow ne-extraction from their subjects, like objects",
        "They cannot have subjects",
        "They are always passive",
      ],
      answer: 1,
      explanation: "Gianni è arrivato.",
    },
    {
      prompt: "What is the filled-gap effect?",
      choices: [
        "A grammatical rule",
        "Readers slow down when a noun phrase appears where they expected a gap",
        "A type of island",
        "A sound change",
      ],
      answer: 1,
      explanation: "Stowe (1986).",
    },
  ],
  reflection:
    "Displacement is one of the most striking properties of human language. In 500–800 words, explain how wh-movement, passives, and raising work, illustrate the island constraints with examples of your own, and assess whether movement is a real process or a useful metaphor, drawing on the alternative frameworks and the psycholinguistic evidence.",
};
