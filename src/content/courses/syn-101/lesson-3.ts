import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "X-bar Theory and the Structure of Clauses",
  summary:
    "Why flat phrase structure is not enough; the X-bar schema of specifiers, heads, complements, and adjuncts; telling complements from adjuncts; X-bar structure for every category; the head parameter and word order; determiners as heads; tense as the head of the clause; complementizer phrases; a complete clause tree; verb movement in French and English; verb-second in German; and functional categories in children's speech.",
  pages: [
    {
      title: "Why Flat Structure Is Not Enough",
      body: `## A puzzle about one

In Lesson II, we used phrase structure rules such as NP → (D) (AdjP\\*) N (PP\\*), which make a noun phrase **flat**: the determiner, adjectives, noun, and prepositional phrases are all sisters, directly under NP. But there is evidence that noun phrases have more internal structure than this.

Recall that the word ***one*** can replace part of a noun phrase:

- *I like the big book, and you like the small **one**.* (*one* = *book*)
- *I like the book of poems with the red cover, and you like the **one** with the blue cover.* (*one* = *book of poems*)
- *I like the book with the red cover, and you like the **one** with the blue cover.* (*one* = *book*)

In the second example, *one* replaces *book of poems*, a string that includes the noun and a following PP but not the determiner. If *one* replaces constituents, then *book of poems* must be a constituent. But in a flat NP, *book of poems* is not a constituent: no single node dominates exactly those words.

## Complements and adjuncts

Notice also:

- *the student **of physics** with long hair* → *the **one** with short hair* (OK)
- *the student of physics* → \\**the **one** of chemistry*

*One* can replace *student of physics*, leaving *with long hair* behind, but it cannot replace *student* alone, leaving *of physics* behind. The PP *of physics* seems more closely tied to the noun than *with long hair*. Intuitively, *of physics* expresses what the student studies, an argument of *student*, while *with long hair* is an optional description.

## An intermediate level

These facts suggest that a noun phrase has an **intermediate level** of structure, between the noun and the full NP. *Student of physics* forms a unit, and *student of physics with long hair* forms a larger unit of the same kind, both smaller than the full NP, which adds the determiner. Syntacticians call this intermediate level **N-bar**, written **N′** (pronounced "N-bar," because it was originally written with a bar over the N).

## Similar evidence for verbs

Similar evidence exists for verb phrases. The expression *do so*, which we met in Lesson II, can replace different-sized parts of a VP:

- *John ate the cake in the kitchen, and Mary **did so** in the garden.* (*did so* = *ate the cake*)
- *John ate the cake in the kitchen, and Mary **did so** too.* (*did so* = *ate the cake in the kitchen*)
- \\**John ate the cake, and Mary **did so** the pie.*

*Do so* can replace *ate the cake*, leaving the adjunct *in the garden*, but cannot replace *ate* alone, leaving the object. The verb and its object form a unit; adding an adjunct forms a larger unit of the same kind.

## Toward a general theory

These parallels between noun phrases and verb phrases suggest that all phrases might share a common structure. This idea is the basis of **X-bar theory**, which we study next.

> **Pause and consider.** In *the teacher of French with the glasses*, which phrase can *one* leave behind? Why?`,
    },
    {
      title: "The X-bar Schema",
      body: `## A template for all phrases

**X-bar theory** proposes that all phrases, of every category, are built according to the same template. The theory was introduced by **Noam Chomsky** in his paper "Remarks on Nominalization" (1970) and developed by **Ray Jackendoff** in *X-bar Syntax* (1977). In the theory, **X** stands for any category: N, V, A, P, and others.

## Three levels

Each phrase has three levels:

- the **head**, X (also written X⁰), a single word;
- an **intermediate** level, X′ (X-bar);
- the **phrase**, XP (sometimes called X-double-bar or the **maximal projection**).

## The rules

The structure is described by three general rules:

> **Specifier rule**: XP → (Specifier) X′
>
> **Adjunct rule**: X′ → X′ (Adjunct) *or* X′ → (Adjunct) X′
>
> **Complement rule**: X′ → X (Complement)

These rules say:

- A phrase consists of an optional **specifier** and an X′.
- An X′ may contain another X′ and an **adjunct**, on either side. Because this rule can apply repeatedly, a phrase can have any number of adjuncts.
- The lowest X′ consists of the head X and its **complement**, if it has one.

## The noun phrase in X-bar terms

For *the student of physics with long hair*:

\`\`\`
                NP
          ______|______
         D            N′
         |       _____|________
        the     N′            PP
            ____|____     with long hair
           N        PP
           |    of physics
        student
\`\`\`

- *student* is the head N;
- *of physics* is the **complement**, sister to the head, inside the lowest N′;
- *with long hair* is an **adjunct**, sister to N′, inside a higher N′;
- *the* is the **specifier**, sister to the highest N′.

Now *one*-substitution makes sense: *one* replaces an N′, either *student of physics* or *student of physics with long hair*, but not the bare N *student*, which is not an N′ by itself when a complement is present.

## Endocentricity and projection

X-bar theory formalizes the idea of **endocentricity** that we met in Lesson II: every phrase has a head, and the phrase is a **projection** of its head. Information about the head, such as its category and its complements, "projects" up to the phrase.

## Binary branching

In most versions of X-bar theory, every node has at most **two** daughters. This **binary branching** makes trees deeper than the flat trees of Lesson II, but it allows the theory to express the different relations of complements, adjuncts, and specifiers to the head.

## Why it matters

X-bar theory replaced many specific phrase structure rules with a single general template. This was a step toward the goal, discussed in Lesson I, of explaining how children acquire grammar: if all phrases follow the same template, a child needs to learn only the specific properties of each category and language, not a separate set of rules for each phrase type.

> **Pause and consider.** In *the picture of Mary on the wall*, identify the head, complement, adjunct, and specifier.`,
    },
    {
      title: "Complements and Adjuncts",
      body: `## Two kinds of dependents

X-bar theory distinguishes two kinds of dependents of a head:

- **Complements** are closely tied to the head. They are often required by the head's meaning, and they appear in its subcategorization frame, as we saw in Lesson II. In X-bar structure, they are **sisters to the head**.
- **Adjuncts** are optional modifiers that add information about time, place, manner, or other circumstances. In X-bar structure, they are **sisters to X′**.

## Tests

Several tests help distinguish them:

1. **Obligatoriness**: complements are often required (*She devoured the cake*; \\**She devoured*), while adjuncts are always optional (*She ate the cake in the kitchen*; *She ate the cake*). But some complements are optional too (*She ate*), so this test is not decisive.

2. **Order**: complements come **closer** to the head than adjuncts. *The student of physics with long hair* is natural; \\**the student with long hair of physics* is not. Similarly, *She ate the cake in the kitchen*, not \\**She ate in the kitchen the cake* (in neutral speech).

3. **Iteration**: adjuncts can be stacked without limit: *the student with long hair from Chicago in the corner*; *She ate the cake in the kitchen at noon with a fork*. A head usually has only one complement of a given type.

4. **Substitution**: as we saw, *one* and *do so* can replace a head with its complement, leaving adjuncts behind, but cannot replace a head alone, leaving its complement behind.

5. **Coordination**: complements can be coordinated with complements, and adjuncts with adjuncts, but not complements with adjuncts: \\**the student of physics and with long hair*.

## In the verb phrase

In the verb phrase *ate the cake in the kitchen at noon*:

- *the cake* is the **complement** of *ate*;
- *in the kitchen* and *at noon* are **adjuncts**.

The structure is:

> [VP [V′ [V′ [V′ [V ate] [NP the cake]] [PP in the kitchen]] [PP at noon]]]

Each adjunct adds a new V′ layer.

## Hard cases

Some phrases are hard to classify. In *She put the book **on the shelf***, the PP is required by *put*, so it is a complement. In *She read the book **on the shelf*** (meaning "while on the shelf"? or "that was on the shelf"?), the PP may be an adjunct of the verb or part of the noun phrase. Syntacticians use all the tests together, and some cases remain debated.

## Meaning

The distinction between complements and adjuncts corresponds roughly to a distinction in meaning. Complements typically express **participants** required by the head's meaning: a *destruction* involves something destroyed, so *of the city* is a complement of *destruction*. Adjuncts express **circumstances**: where, when, how, and why something happened. In Lesson V, we will study the relation between complements and the **thematic roles** of a verb.

> **Pause and consider.** In *She spoke to the teacher about the exam after class*, which PPs are complements and which adjuncts?`,
    },
    {
      title: "X-bar for Every Category",
      body: `## The same template

According to X-bar theory, all categories share the same structure. Let us see how the template applies to each.

## Verb phrases

> [VP [V′ [V′ [V read] [NP the book]] [AdvP quickly]]]

The verb *read* is the head; *the book* its complement; *quickly* an adjunct. What occupies the **specifier** of VP? In many modern analyses, as we will see later in this lesson, the subject originates in the specifier of VP before moving to a higher position. In simple analyses, the VP specifier is often left empty.

## Adjective phrases

> [AdjP [AdvP very] [Adj′ [Adj proud] [PP of her children]]]

The adjective *proud* is the head; *of her children* its complement; *very* its specifier (or, in some analyses, an adjunct). Similarly, *[AdjP **so** [Adj′ eager [to please]]]*.

## Prepositional phrases

> [PP [AdvP right] [P′ [P over] [NP the fence]]]

The preposition *over* is the head; *the fence* its complement; and words like ***right*** and ***straight*** (*right over the fence*, *straight through the door*) occupy its specifier. These words are restricted to prepositional phrases, a fact that supports the idea of a specifier position specific to PP.

## Adverb phrases

> [AdvP [AdvP very] [Adv′ [Adv quickly]]]

Adverbs rarely take complements, but some do: *independently **of the others***.

## Similarities across categories

X-bar theory captures striking similarities between categories. Compare a verb and its related noun:

- *The army **destroyed** the city.* (verb with object)
- *The army's **destruction** of the city.* (noun with complement)

In both, the head (*destroyed*, *destruction*) takes a complement expressing the thing destroyed (*the city*, *of the city*) and has a subject or specifier expressing the destroyer (*the army*, *the army's*). In "Remarks on Nominalization" (1970), Chomsky used such parallels to argue for a common structure for noun phrases and sentences, the origin of X-bar theory.

## Not every slot is filled

The X-bar template defines **possible** positions; not every position is filled in every phrase. A bare noun phrase like *water* has only a head; a proper name like *Mary* has only a head; a verb phrase like *slept* has only a head. But the structure is always available, and the positions are filled when the head's properties and the sentence require them.

## Criticisms

X-bar theory has been revised and, in some later theories, abandoned in its classic form. In the **Minimalist Program**, Chomsky replaced it with a simpler operation called **Merge**, which combines two elements into a larger one, deriving X-bar-like structures without a separate template. Other frameworks, such as Head-Driven Phrase Structure Grammar, use different representations. But the insights of X-bar theory, especially the distinctions between heads, complements, specifiers, and adjuncts, remain central to syntactic analysis.

> **Pause and consider.** Draw an X-bar structure for *very fond of chocolate*. What is the head?`,
    },
    {
      title: "The Head Parameter",
      body: `## Head-initial and head-final

As we saw in Lesson II, languages differ in whether heads precede or follow their complements. In English, heads usually come **first**:

- V before object: *[read [the book]]*
- P before object: *[in [the house]]*
- N before complement: *[picture [of Mary]]*

In **Japanese**, heads usually come **last**:

- object before V: *[[hon-o] yonda]* "book-ACC read"
- object before P (a postposition): *[[ie-no naka] ni]* "house-of inside in"
- complement before N: *[[Mary-no] shashin]* "Mary-of picture"

## The parameter

In the **Principles and Parameters** framework of the 1980s, which we study in Lesson V, this difference was described by the **head parameter**: a setting in Universal Grammar that each language fixes as either **head-initial** or **head-final**. The X-bar complement rule then has two possible orders:

> X′ → X Complement (head-initial: English)
>
> X′ → Complement X (head-final: Japanese)

A single setting of the parameter predicts the order of heads and complements across many categories at once, explaining Greenberg's correlations, which we met in Lesson II.

## Acquisition

The head parameter was proposed as an example of how children might acquire grammar efficiently. Instead of learning the order of verb and object, preposition and object, noun and complement separately, a child needs only to determine the setting of one parameter, perhaps from a few simple sentences. Once set, the parameter determines the order in all categories. Studies of child language have found that children acquire basic word order very early, with few errors, consistent with this idea.

## Mixed languages

Many languages do not follow the head parameter consistently:

- **German** and **Dutch** are head-final in the verb phrase (in subordinate clauses, the verb follows its object: *dass er das Buch **liest*** "that he the book reads") but head-initial with prepositions (*in dem Haus*).
- **Mandarin Chinese** places verbs before objects but relative clauses before nouns, and has both prepositions and postpositions.
- **English** places adjectives and possessors before nouns.

Such mixtures have led some linguists to propose separate parameters for different categories, or to explain apparent exceptions by movement, as we will see for German later in this lesson.

## Kayne's antisymmetry

In *The Antisymmetry of Syntax* (1994), **Richard Kayne** proposed a radical alternative: that all languages are underlyingly **head-initial**, and that head-final orders are derived by **movement** of complements to positions before their heads. This hypothesis remains controversial, but it shows how theories of word order have continued to develop.

## Typological explanations

Functional and typological linguists, such as **John Hawkins**, have offered processing explanations for the word order correlations: consistent head order makes sentences easier to parse, because the heads that signal the structure of each phrase occur in predictable positions. These explanations do not require an innate parameter, but they are compatible with the idea that languages tend toward consistency.

> **Pause and consider.** If a child hears *[the book] read* and *[the house] in*, what might they conclude about their language?`,
    },
    {
      title: "Determiners as Heads",
      body: `## A problem with NP

In X-bar theory as presented so far, the determiner occupies the **specifier** of NP. But this raises problems. Determiners such as *the*, *a*, *this*, and *every* are **functional** categories with important grammatical properties: they determine whether a noun phrase is definite or indefinite, singular or plural, and they cannot generally be omitted with singular count nouns (\\**Book is on the table*). And possessive phrases like *John's* seem to compete with determiners for the same position: *John's book* but \\**the John's book*.

## The DP hypothesis

In his dissertation, *The English Noun Phrase in Its Sentential Aspect* (1987), **Steven Abney** proposed that the determiner is not a specifier of the noun phrase but its **head**. On this view, what we have called a noun phrase is really a **determiner phrase** (DP), with the determiner as its head and the NP as its complement:

> [DP [D′ [D the] [NP [N′ [N book]]]]]

This is the **DP hypothesis**.

## Possessives

The DP hypothesis offers an elegant analysis of **possessives**. In *John's book*, the possessor *John* occupies the **specifier** of DP, and the possessive *'s* is the **head** D:

> [DP [DP John] [D′ [D 's] [NP book]]]

This explains why *'s* attaches to the end of the whole possessor phrase, not just to a noun: *[the King of England]'s crown*, where *'s* attaches to *England* but the possessor is the king. It also explains why *'s* and *the* cannot co-occur: they compete for the same head position.

## Pronouns

Pronouns, on this view, are **determiners** without a noun complement. This is supported by expressions like *we linguists* and *you students*, in which the pronoun appears in the determiner position before a noun. In some languages, the same forms serve as articles and pronouns: in French, *le* is both "the" (masculine) and "him."

## Parallels with clauses

Abney's title, "in its sentential aspect," refers to the parallel between DPs and clauses. Just as a clause has a functional head (tense) that takes a verb phrase as its complement, as we will see next, a DP has a functional head (the determiner) that takes a noun phrase. Both nominal and verbal structures consist of a **lexical** core (NP, VP) inside a **functional** layer (DP, TP).

## Acceptance

The DP hypothesis has been widely adopted in generative syntax, and Carnie uses it. Some linguists continue to debate its details, and some languages without articles, such as Japanese and many Slavic languages, have prompted discussion of whether all languages project a DP. But the hypothesis has proved fruitful in analyzing the structure of nominal expressions across languages.

> **Pause and consider.** How does the DP hypothesis explain why *the John's book* is ungrammatical?`,
    },
    {
      title: "Tense as the Head of the Clause",
      body: `## What heads a sentence?

In Lesson II, we used the rule S → NP VP, which treats the sentence as a special category without a head. This violates the principle of endocentricity: every phrase should have a head. What is the head of a clause?

## Inflection

In the 1980s, generative syntacticians proposed that the head of the clause is the element that carries **tense** and **agreement**: the finite **inflection**. In *Lectures on Government and Binding* (1981), Chomsky called this category **Infl** or **I**, and the clause **IP** (inflectional phrase). In later work, including Carnie's textbook, it is called **T** (for tense), and the clause **TP** (tense phrase).

## The structure of TP

According to this analysis:

- the head **T** contains tense (past or present) and, in English, may contain a **modal** or **auxiliary** (*will*, *can*, *has*, *is*);
- the **complement** of T is the **VP**;
- the **specifier** of TP is the **subject**.

> [TP [DP the dog] [T′ [T will] [VP chase the cat]]]

When there is no auxiliary, T contains only the tense feature, which is pronounced as an ending on the verb (*chased*), or, in questions and negatives, carried by *do* (*did chase*), as we saw with do-support in Lesson II.

## Evidence

Several facts support T as the head of the clause:

- **Modals and auxiliaries** appear between the subject and the VP, in exactly the position predicted for T.
- **Negation** follows T: *The dog **will not** chase the cat.*
- In **questions**, T moves before the subject: ***Will** the dog chase the cat?*, as we will see in Lesson IV.
- **Finite** and **nonfinite** clauses differ in T: finite clauses have tense; nonfinite clauses have *to* (*for the dog **to** chase the cat*), which also occupies T.

## The subject

Where does the subject come from? In many modern analyses, the subject originates **inside the VP**, in its specifier, where it receives its role as the agent of the verb, and then **moves** to the specifier of TP. This **VP-internal subject hypothesis**, proposed in the 1980s by several linguists, explains, among other things, why quantifiers like *all* can be left behind inside the VP: *The children have **all** left*, where *all* marks the original position of *the children*.

## Agreement

In English, the verb agrees with the subject in the present tense (*she walks*, *they walk*). This agreement relates the subject in the specifier of TP to the tense in T. Languages with rich agreement, such as Spanish and Italian, often allow the subject to be omitted entirely (*Hablo español* "I speak Spanish"), since the agreement on the verb identifies it. Such **null-subject** or **pro-drop** languages are another example of parametric variation, which we will meet in Lesson V.

> **Pause and consider.** In *The children have all left*, where might *all* have come from? What does this suggest about the original position of the subject?`,
    },
    {
      title: "Complementizers and the Complete Clause",
      body: `## CP

As we saw in Lesson II, embedded clauses are often introduced by **complementizers** such as *that*, *if*, *whether*, and *for*. In X-bar terms, the complementizer is the **head C** of a **complementizer phrase** (CP), and its complement is the **TP**:

> [CP [C′ [C that] [TP the dog will chase the cat]]]

The **specifier** of CP is the landing site for **question words** and other moved phrases, as we will see in Lesson IV.

## Main clauses too

Do main clauses also have a CP? In questions, they seem to: in *What will the dog chase?*, *what* appears at the very front, before the auxiliary, and the auxiliary has moved before the subject. Both positions are outside TP. Most generative analyses assume that **all** clauses, main and embedded, are CPs, with an empty C in ordinary declaratives.

## A complete tree

Putting together DP, NP, VP, TP, and CP, we can draw a complete tree for the sentence *I think that the dog will chase the cat*:

\`\`\`
CP
└─ C′
   ├─ C (∅)
   └─ TP
      ├─ DP: I
      └─ T′
         ├─ T (present)
         └─ VP
            └─ V′
               ├─ V: think
               └─ CP
                  └─ C′
                     ├─ C: that
                     └─ TP
                        ├─ DP: the dog
                        └─ T′
                           ├─ T: will
                           └─ VP
                              └─ V′
                                 ├─ V: chase
                                 └─ DP: the cat
\`\`\`

The main clause is a CP with an empty C; its TP has the subject *I* in its specifier, present tense in T, and a VP headed by *think*, whose complement is the embedded CP headed by *that*. The embedded clause has the same structure, with *will* in T.

## The functional spine

The tree shows a **spine** of functional heads (C, T, D) above lexical heads (V, N). Each lexical phrase (VP, NP) is surrounded by a functional layer (TP and CP for clauses, DP for nominals). This pattern, in which lexical content is wrapped in functional structure, is a central idea of modern generative syntax.

## Further layers

Research since the 1990s has proposed many more functional categories, splitting TP and CP into multiple layers. **Luigi Rizzi**, in an influential paper of 1997, proposed that the CP layer contains separate positions for **topics**, **focus**, and **force** (the clause type), especially to account for the rich left periphery of Italian and other languages. This approach, sometimes called **cartography**, aims to map the fine structure of clauses across languages. Its critics argue that it multiplies categories without sufficient justification.

## Simplicity and detail

There is a tension in syntactic theory between the desire for **simplicity**, a few general principles, and the need to describe the **detail** of real languages. X-bar theory, the DP hypothesis, and the TP–CP structure represent one balance; later theories have moved in both directions.

> **Pause and consider.** Identify the heads of every phrase in the tree above. Which are lexical and which functional?`,
    },
    {
      title: "Verb Movement: French and English",
      body: `## Adverbs and verbs

A famous contrast between English and French involves the position of the verb relative to adverbs and negation. In English, adverbs such as *often* come **before** the main verb:

- *John **often kisses** Mary.*
- \\**John **kisses often** Mary.*

In French, the order is the reverse:

- *Jean **embrasse souvent** Marie.* "Jean kisses often Marie."
- \\**Jean **souvent embrasse** Marie.*

Similarly, with negation:

- English: *John does **not** kiss Mary.* (do-support required)
- French: *Jean (n')embrasse **pas** Marie.* "Jean kisses not Marie."

## Emonds and Pollock

In 1978, **Joseph Emonds** proposed, and in 1989, **Jean-Yves Pollock** developed in an influential paper, an analysis in which the difference lies in **verb movement**:

- In **French**, the main verb **moves** from V up to T, passing over adverbs and negation, which stay in their positions at the edge of the VP. The verb thus ends up before *souvent* and *pas*.
- In **English**, main verbs **do not move** to T. They stay in the VP, after adverbs. Tense is attached to the verb in place, or, when something intervenes (such as *not*), carried by *do*.

This **V-to-T movement** explains several differences at once: the position of adverbs, the position of negation, and the absence of do-support in French questions (*Embrasse-t-il Marie?* "Kisses he Marie?").

## English auxiliaries do move

In English, **auxiliary** verbs (*have*, *be*) do move to T, like French main verbs:

- *John **has often** kissed Mary.* / *John **has not** kissed Mary.*
- ***Has** John kissed Mary?*

This is why, as we saw in Lesson II, auxiliaries have the NICE properties: they are in T, where they precede negation and can invert in questions.

## Historical change

As we saw in HIL 101, English main verbs **used to** move like French verbs: Shakespeare could write *I know not* and *Know you the man?*. The loss of main-verb movement, and the rise of do-support between the fifteenth and eighteenth centuries, was one of the major syntactic changes in the history of English. **Anthony Kroch**, whom we met in HIL 101, analyzed this change as the loss of V-to-T movement, proceeding at the same rate in all contexts.

## Why the difference?

Why do French verbs move and English verbs not? Pollock and others connected verb movement to the richness of verbal **agreement**: French verbs have more distinct person and number endings than English verbs, which have only *-s*. Languages with rich agreement, on this hypothesis, require the verb to move to the agreement position. The correlation is suggestive, and the loss of verb movement in English followed the loss of most verbal endings, but the hypothesis has faced counterexamples, and its status is debated.

> **Pause and consider.** Shakespeare wrote *I know not*. What does this suggest about the position of the verb in Early Modern English?`,
    },
    {
      title: "Verb Second in German",
      body: `## Second position

**German**, **Dutch**, and the **Scandinavian** languages share a striking property: in main clauses, the finite verb always comes in **second position**, after exactly one constituent, whatever that constituent is. This is the **verb-second** (V2) rule.

In German, any constituent can come first, but the verb must come second:

- ***Er** hat gestern das Buch gelesen.* "He has yesterday the book read."
- ***Gestern** hat er das Buch gelesen.* "Yesterday has he the book read."
- ***Das Buch** hat er gestern gelesen.* "The book has he yesterday read."

But not:

- \\**Gestern er hat das Buch gelesen.*

## Verb-final in subordinate clauses

In **subordinate** clauses introduced by a complementizer such as *dass* "that," the finite verb comes **last**:

- *Ich weiß, **dass** er gestern das Buch gelesen **hat**.* "I know that he yesterday the book read has."

## Den Besten's analysis

In 1983, the Dutch linguist **Hans den Besten** proposed an elegant analysis of this pattern:

- German is underlyingly **head-final** in the VP and TP: the verb comes at the end, as seen in subordinate clauses.
- In **main clauses**, the finite verb **moves** all the way to **C**, the complementizer position, and one other constituent moves to the **specifier of CP**.
- In **subordinate clauses**, the complementizer *dass* already occupies C, so the verb cannot move there and stays at the end.

This analysis explains why the verb is second in main clauses (after the single phrase in the specifier of CP) and final in subordinate clauses (because C is filled), and why the two patterns are in complementary distribution. It also explains why, in German, main clauses with a complementizer-like structure, such as some conditionals without *wenn*, have the verb first.

## V2 in English

English was once a V2 language, as we saw in HIL 101: Old English often placed the verb second (*Þā cōm hē* "Then came he"). Modern English retains traces of V2 in certain constructions:

- after negative expressions: *Never **have** I seen such a thing.*
- after *so* and *neither*: *So **do** I.* *Neither **can** she.*
- in questions: *What **did** you see?*
- in some literary styles: *Here **comes** the bus.*

These constructions, sometimes called **residual V2**, show the verb (or auxiliary) moving to C.

## V2 elsewhere

V2 is rare outside the Germanic languages, but it is found in **Kashmiri**, an Indo-Aryan language, in some Romance varieties such as Old French and Romansh, and in a few other languages. Its rarity has made it a subject of much theoretical interest.

## The power of movement

The analyses of French and German show the explanatory power of **movement** in generative syntax: a few movements of heads, combined with differences in where heads start, explain complex patterns of word order across languages. In Lesson IV, we will study movement more systematically.

> **Pause and consider.** In *Ich weiß, dass er das Buch gelesen hat*, why does *hat* come at the end?`,
    },
    {
      title: "A Head-Final Language in Detail: Japanese",
      body: `## Japanese clause structure

To see the head parameter at work in a whole language, consider **Japanese**, a consistently head-final language. A simple sentence:

> *Taroo-ga Hanako-ni hon-o ageta.*
> Taro-NOM Hanako-DAT book-ACC gave
> "Taro gave Hanako a book."

The verb *ageta* "gave" comes at the end. The noun phrases are marked by **particles** that follow them: *-ga* marks the subject (nominative), *-ni* the recipient (dative), and *-o* the object (accusative). These particles are, in effect, **postpositions** or case markers, heads that follow their complements.

## Embedded clauses

Embedded clauses also follow the head-final pattern. The complementizer comes **after** the clause, and the clause comes **before** the verb that selects it:

> *Taroo-wa [Hanako-ga kita] to omotta.*
> Taro-TOP Hanako-NOM came that thought
> "Taro thought that Hanako came."

Here *to* is the complementizer "that," following its clause, and *omotta* "thought" follows its complement. Compare English *Taro thought [that Hanako came]*, where every head precedes its complement: the mirror image.

## Relative clauses

Relative clauses come **before** the noun they modify, with no relative pronoun:

> *[Taroo-ga katta] hon*
> Taro-NOM bought book
> "the book that Taro bought"

## Topics

The particle *-wa* marks the **topic** of a sentence, what the sentence is about, as in *Taroo-wa* in the example above. The distinction between *-ga* and *-wa* is one of the subtlest points of Japanese grammar, involving both syntax and the flow of information in discourse.

## Scrambling

Although Japanese is verb-final, the order of the phrases **before** the verb is fairly free, a phenomenon called **scrambling**:

> *Hon-o Taroo-ga Hanako-ni ageta.* "Taro gave Hanako a book." (with *hon-o* "book" emphasized or topical)

Because the particles mark each phrase's role, the order can vary without ambiguity. Generative syntacticians analyze scrambling as movement of phrases to the left, while the verb remains at the end. Scrambling has been extensively studied by Japanese linguists such as **Mamoru Saito**.

## Consistency

Japanese thus shows the head parameter set to "final" in nearly every category: verbs after objects, postpositions after nouns, complementizers after clauses, nouns after relative clauses, and auxiliaries after verbs (*tabe-te iru* "eat-ing is," "is eating"). Korean and Turkish show similar consistency. Such languages provide the clearest evidence for the idea that word order across categories is linked.

## Learning Japanese

For English speakers learning Japanese, the head-final order can at first feel like "reading backwards." But once the general principle is grasped, many details fall into place, a practical illustration of how a single parameter can organize a whole grammar.

> **Pause and consider.** Translate *the book that Taro bought* word by word from Japanese into English. Why is the order reversed?`,
    },
    {
      title: "Free Word Order: Warlpiri",
      body: `## A challenge to configurationality

Some languages appear to have very **free word order**, with little evidence of the hierarchical phrase structure that X-bar theory describes. The best-known example is **Warlpiri**, an Aboriginal language of central Australia, studied extensively by the American linguist **Kenneth Hale**, whom we met in PHO 101.

## Any order

In Warlpiri, the words of a simple sentence can appear in almost any order, provided that the **auxiliary**, which carries tense and agreement, comes in **second position**:

> *Ngarrka-ngku ka wawirri panti-rni.*
> man-ERG AUX kangaroo spear-NONPAST
> "The man is spearing the kangaroo."

The same meaning can be expressed with *wawirri* first, or *panti-rni* first, as long as *ka* remains in second position. The roles of the noun phrases are shown by **case endings**: *-ngku* marks the ergative (the agent of a transitive verb), as we saw with ergativity in Lesson I.

## Discontinuous phrases

Even more strikingly, the words of a single noun phrase can be **separated**:

> *Wawirri kapi-rna panti-rni yalumpu.*
> kangaroo FUT-1SG spear-NONPAST that
> "I will spear that kangaroo."

Here *wawirri* "kangaroo" and *yalumpu* "that," which together refer to "that kangaroo," are at opposite ends of the sentence. The case endings and agreement allow listeners to connect them.

## Hale's proposal

In 1983, Hale proposed that Warlpiri is a **nonconfigurational** language: its sentences lack the hierarchical structure of English, with no verb phrase grouping the verb and object together. The relations between words are shown by case and agreement rather than by structural position. Hale suggested a **configurationality parameter**, distinguishing languages like English, with rich hierarchical structure, from languages like Warlpiri, with flatter structure.

## Responses

Hale's proposal was controversial. Other linguists argued that Warlpiri does have hierarchical structure, but that its free word order results from **movement** or from the fact that noun phrases are **adjuncts** linked to pronouns marked on the auxiliary. **Mark Baker**, in work on Mohawk, proposed a related idea: in some **polysynthetic** languages, where verbs carry markers for all their arguments, the noun phrases are optional adjuncts, free to appear anywhere. Evidence from binding and other structural phenomena has been used on both sides.

## What Warlpiri teaches

Whatever its analysis, Warlpiri shows that the strict word order and phrase structure of English are not universal. Languages can signal grammatical relations by case and agreement as well as by position. Free word order is found in many languages, including Latin, Russian, and many Australian and Native American languages, and any theory of syntax must account for it.

## Documentation

Hale's work on Warlpiri, carried out over decades in collaboration with Warlpiri speakers, many of whom became linguists themselves, is a model of how theoretical linguistics and the documentation of endangered languages can enrich each other. Hale was also a strong advocate for the rights of speakers of endangered languages to study and preserve their own languages.

> **Pause and consider.** How can listeners understand a Warlpiri sentence in which the words of "that kangaroo" are separated?`,
    },
    {
      title: "Small Clauses and Secondary Predicates",
      body: `## Clauses without verbs

Consider these sentences:

- *I consider [John intelligent].*
- *They elected [her president].*
- *We found [the room empty].*

In each, the bracketed string expresses a proposition, a subject and a predicate: *John is intelligent*, *she is president*, *the room was empty*. But there is no verb *be* and no tense. Many syntacticians analyze such strings as **small clauses**: clause-like constituents consisting of a subject and a predicate, without the functional structure of a full clause. The term was popularized by **Timothy Stowell** in his dissertation of 1981.

## Evidence

Several facts suggest that *John intelligent* is a constituent:

- It can be coordinated: *I consider [John intelligent] and [Mary wise].*
- It has the meaning of a clause: *I consider John intelligent* means roughly *I consider that John is intelligent*.
- *John* behaves as the subject of *intelligent*, not as the object of *consider*: one considers a **proposition**, not John himself.

Not all linguists accept the small clause analysis. Some argue that *John* is the object of *consider* and *intelligent* a separate complement. The debate concerns how verbs like *consider* relate to their complements.

## Secondary predicates

Related constructions are **secondary predicates**, which add a predication to a sentence that already has a main verb:

- **Depictives** describe the state of a participant during the event: *She ate the fish **raw*** (the fish was raw); *He left the party **angry*** (he was angry).
- **Resultatives** describe the state resulting from the event: *She painted the door **red*** (the door became red); *He hammered the metal **flat***; *They laughed themselves **silly***.

Resultatives are especially interesting because they can create new combinations: in *They laughed themselves silly*, the verb *laugh*, normally intransitive, takes an object (*themselves*) only because of the resultative *silly*.

## Cross-linguistic variation

Languages differ in whether they allow resultatives. English allows them freely (*wipe the table clean*, *shoot him dead*); **French** and **Spanish** generally do not, and express results with separate clauses or different verbs. The linguist **Leonard Talmy** connected this difference to a broader typological distinction between languages that express the **path** or **result** of an event in the verb (verb-framed languages, like Spanish: *salió corriendo* "exited running") and those that express it in a separate element (satellite-framed languages, like English: *ran out*). We will return to this distinction in SYN 110.

## Small clauses and children

Small clauses also connect with the study of child language. As we saw earlier in this lesson, Radford proposed that children's early sentences, such as *Mommy sock* or *Baby tired*, are small clauses: a subject and a predicate without functional structure. On this view, children's early grammar resembles the adult small clause construction.

## Structure without tense

Small clauses and secondary predicates show that predication, the relation between a subject and a predicate, does not always require a verb or tense. They raise questions about what a clause is, and about how much structure is needed to express a proposition, questions that syntactic theories answer in different ways.

> **Pause and consider.** In *She drank the coffee cold* and *She drank herself sick*, which is a depictive and which a resultative?`,
    },
    {
      title: "Functional Categories in Children's Speech",
      body: `## Telegraphic speech

As we saw in LIN 110, young children's early sentences are often **telegraphic**: they contain content words but omit many function words and endings. A two-year-old might say *Mommy sock*, *Daddy go car*, or *Doggy eat bone*, omitting determiners (*the*), auxiliaries (*is*), tense endings (*-ed*, *-s*), and complementizers.

## Lexical before functional

In terms of X-bar theory, children's early speech seems to contain **lexical** categories (N, V, A, P) but to lack many **functional** categories (D, T, C). In *Syntactic Theory and the Acquisition of English Syntax* (1990), the British linguist **Andrew Radford** proposed that children's early grammars lack functional categories altogether, and that these develop later, around the age of two and a half. On this view, children's early sentences are **small clauses**, consisting of lexical projections without the functional layer.

## Optional infinitives

The American linguist **Kenneth Wexler** proposed in 1994 a different account. He observed that young children learning languages such as French, German, and Dutch often use **infinitive** verb forms in main clauses where adults would use finite forms: a child learning French might say *Pas manger la poupée* "Not eat the doll," with the infinitive *manger*, rather than *La poupée ne mange pas*. Wexler called this the **optional infinitive** stage, since children alternate between finite and infinitive forms.

Crucially, when children do use finite verbs, they place them correctly: in French, before *pas*; in German, in second position. When they use infinitives, they place them in the infinitive position: in French, after *pas*; in German, at the end. This suggests that children **know** the rules of verb movement from very early on, and that their errors reflect uncertainty about when tense is required, not ignorance of structure.

## Continuity

Such findings support the **continuity hypothesis**: children's grammars contain the same categories and principles as adult grammars from the start, and differences reflect the maturation or development of specific properties. Radford's proposal, by contrast, suggested a discontinuity. The debate between these views generated much research in the 1990s and 2000s.

## Usage-based views

Usage-based researchers, such as **Michael Tomasello**, whom we met in LIN 110, interpret children's early speech differently. They argue that children begin with specific **item-based** constructions, learned from the input, such as *Where's the X?* or *I want X*, and only gradually generalize to abstract categories. On this view, the absence of functional categories in early speech reflects the gradual learning of particular words and patterns rather than the maturation of innate categories.

## What children show

Whatever the explanation, children's speech provides evidence about the structure of grammar. The fact that children's errors are systematic, rather than random, and that they respect structural distinctions such as finiteness and verb position, shows that they are building structured grammars from the beginning. As we saw in LIN 110, children never produce the structure-independent errors that would be expected if they treated sentences as mere strings of words.

> **Pause and consider.** A child says *Daddy go car*. Which functional elements are missing, compared with the adult sentence?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. One-substitution

> *the student of physics with long hair* → *the one with short hair* / \\**the one of chemistry*

**Questions**

1. What does this show about the structure of the noun phrase?
2. Which PP is a complement, and which an adjunct?

## 2. The head parameter

> English *read the book*, *in the house*; Japanese *hon-o yonda* "book read," *ie-ni* "house in"

**Questions**

1. Describe the order of heads and complements in each language.
2. How does the head parameter explain the pattern?

## 3. Verb movement

> English *John often kisses Mary*; French *Jean embrasse souvent Marie*

**Questions**

1. Explain the difference in terms of V-to-T movement.
2. Why do English auxiliaries behave like French main verbs?

## 4. Verb second

> German *Gestern hat er das Buch gelesen* / *dass er das Buch gelesen hat*

**Questions**

1. Where is the finite verb in each clause?
2. How does den Besten's analysis explain the difference?

## Drawing the threads together

In a paragraph, explain how X-bar theory and functional categories account for the structure of phrases and clauses, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "4th ed., 2021", note: "Read chapters 6–8, on X-bar theory, extending X-bar to functional categories, and constraining X-bar theory." },
    { kind: "book", title: "Remarks on Nominalization", author: "Noam Chomsky", publisher: "Readings in English Transformational Grammar, ed. Roderick Jacobs and Peter Rosenbaum (Ginn)", year: "1970", note: "For advanced students: read the sections introducing X-bar structure." },
    { kind: "book", title: "Verb Movement, Universal Grammar, and the Structure of IP", author: "Jean-Yves Pollock", publisher: "Linguistic Inquiry 20", year: "1989", note: "Read the opening section comparing French and English." },
  ],
  media: [
    { kind: "book", title: "The English Noun Phrase in Its Sentential Aspect", author: "Steven Paul Abney", publisher: "PhD dissertation, MIT", year: "1987", note: "Read the introduction to the DP hypothesis." },
    { kind: "book", title: "The Atoms of Language: The Mind's Hidden Rules of Grammar", author: "Mark C. Baker", publisher: "Basic Books", year: "2001", note: "A readable account of parameters, including the head parameter; read chapters 1–3." },
  ],
  questions: [
    {
      prompt: "What evidence suggests that noun phrases have an intermediate N′ level?",
      choices: [
        "Pronouns",
        "One-substitution, which replaces strings like student of physics",
        "Word order",
        "Plural endings",
      ],
      answer: 1,
      explanation: "One replaces N′, not a bare N with its complement left behind.",
    },
    {
      prompt: "In X-bar theory, where is a complement located?",
      choices: ["Sister to XP", "Sister to the head X", "Sister to X′", "In the specifier"],
      answer: 1,
      explanation: "Adjuncts are sisters to X′.",
    },
    {
      prompt: "Which is a property of adjuncts but not complements?",
      choices: [
        "They are always required",
        "They can be stacked without limit",
        "They come closest to the head",
        "They are selected by the head",
      ],
      answer: 1,
      explanation: "Iteration is a test for adjuncts.",
    },
    {
      prompt: "What does the head parameter determine?",
      choices: [
        "Whether a language has heads",
        "Whether heads precede or follow their complements",
        "The number of cases",
        "Vowel harmony",
      ],
      answer: 1,
      explanation: "English is head-initial; Japanese head-final.",
    },
    {
      prompt: "According to the DP hypothesis, what is the head of the book?",
      choices: ["book", "the", "Neither", "Both"],
      answer: 1,
      explanation: "Abney, 1987.",
    },
    {
      prompt: "What does T, the head of the clause, contain?",
      choices: [
        "The subject",
        "Tense and, in English, modals and auxiliaries",
        "The object",
        "The complementizer",
      ],
      answer: 1,
      explanation: "The subject is in the specifier of TP.",
    },
    {
      prompt: "What occupies the specifier of CP?",
      choices: [
        "The verb",
        "Moved phrases such as question words",
        "Tense",
        "The complementizer",
      ],
      answer: 1,
      explanation: "The complementizer is the head C.",
    },
    {
      prompt: "Why does French have Jean embrasse souvent Marie while English has John often kisses Mary?",
      choices: [
        "French adverbs are different",
        "French main verbs move to T; English main verbs do not",
        "English has no adverbs",
        "French is head-final",
      ],
      answer: 1,
      explanation: "Emonds (1978) and Pollock (1989).",
    },
    {
      prompt: "In German main clauses, where does the finite verb go, according to den Besten?",
      choices: ["To the end", "To C, giving verb-second order", "To the specifier of TP", "It stays in V"],
      answer: 1,
      explanation: "In subordinate clauses, C is filled by dass, so the verb stays final.",
    },
    {
      prompt: "What is the optional infinitive stage?",
      choices: [
        "A stage when children use no verbs",
        "A stage when children alternate finite and infinitive verbs in main clauses, placing each correctly",
        "A stage of adult language",
        "A type of German clause",
      ],
      answer: 1,
      explanation: "Proposed by Kenneth Wexler in 1994.",
    },
  ],
  reflection:
    "X-bar theory proposed that all phrases share a common structure. In 500–800 words, explain the X-bar schema, show how it applies to a noun phrase and a clause of your choice (with trees), and reflect on how the head parameter and verb movement explain differences between English, Japanese, French, and German.",
};
