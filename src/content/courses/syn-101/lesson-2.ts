import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Constituency and Phrase Structure",
  summary:
    "Why sentences have hierarchical structure; tests for constituents by substitution, movement, clefting, coordination, ellipsis, and fragments; phrases and their heads; phrase structure rules; how to draw a tree; dominance, precedence, and c-command; recursion; structural ambiguity in trees; subcategorization and the lexicon; and basic word order across the world's languages.",
  pages: [
    {
      title: "Sentences Have Structure",
      body: `## Beads on a string?

A sentence looks like a sequence of words, one after another, like beads on a string. But as we saw in Lesson I, sentences have **hierarchical** structure: words group into units, which group into larger units, up to the whole sentence. Rules such as question formation refer to these units, not to the linear order of words.

## Constituents

A **constituent** is a word or group of words that functions as a single unit within a larger structure. In the sentence

> *The old dog chased the black cat.*

the words *the old dog* form a unit (the subject), and so do *the black cat* (the object) and *chased the black cat* (the predicate). But *dog chased* and *chased the* do not form units, though their words are adjacent.

Speakers have intuitions about such groupings. If asked to divide the sentence into two parts, most English speakers would divide it into *the old dog* and *chased the black cat*. But intuitions can be unreliable, especially for complex cases. Syntacticians therefore use **constituency tests**, which we study on the next three pages.

## Brackets and trees

Constituent structure can be shown in two ways:

- **Labeled bracketing**, which encloses each constituent in brackets labeled with its category:

> [S [NP The old dog] [VP chased [NP the black cat]]]

- **Tree diagrams**, which show the same information graphically, with the whole sentence at the top and the words at the bottom, connected by branches.

Both representations show the same structure: the sentence (S) consists of a noun phrase (NP) and a verb phrase (VP); the verb phrase consists of a verb and another noun phrase.

## Why structure matters

Hierarchical structure matters for:

- **meaning**: as we saw with *I saw the man with the telescope*, different structures produce different meanings;
- **rules**: question formation, agreement, pronoun reference, and many other rules refer to structure;
- **pronunciation**: as we saw in PHO 101, intonation and phrasing often follow syntactic structure;
- **acquisition**: as we saw in LIN 110, children never make errors that would show they treat sentences as unstructured strings.

## Immediate constituents

The idea of constituent structure goes back to the American structuralists, especially **Leonard Bloomfield**, who in *Language* (1933) introduced **immediate constituent analysis**: dividing a sentence into its two (or more) largest parts, then dividing each part, and so on, down to the words. The generative tradition formalized this analysis in **phrase structure rules**, which we study later in this lesson.

> **Pause and consider.** Divide *The children in the park played happily* into two main parts. Then divide each part further.`,
    },
    {
      title: "Testing Constituents: Substitution",
      body: `## Replacing a unit

One of the simplest tests for constituency is **substitution** (or **replacement**): if a group of words can be replaced by a single word, such as a pronoun, without changing the basic meaning or grammaticality, it is likely a constituent.

## Pronouns for noun phrases

Pronouns replace **noun phrases**, not just nouns:

- *[The old dog] chased the black cat.* → *[It] chased the black cat.*
- *The old dog chased [the black cat].* → *The old dog chased [it].*

But:

- *The [old dog] chased the cat.* → \\**The [it] chased the cat.*

The pronoun *it* replaces the whole noun phrase *the old dog*, including the determiner, not just *old dog*. This shows that *the old dog* is a constituent of a particular type, which we call a noun phrase.

## Do so for verb phrases

The expression ***do so*** replaces **verb phrases**:

- *Mary [ate an apple], and John [did so] too.*

Here *did so* replaces *ate an apple*, the verb with its object. It cannot replace the verb alone:

- \\**Mary ate an apple, and John did so a pear.*

This shows that the verb and its object form a constituent, the verb phrase.

## There and then

The words ***there*** and ***then*** can replace prepositional phrases of place and time:

- *I put the book [on the table].* → *I put the book [there].*
- *We met [after the concert].* → *We met [then].*

## One

The word ***one*** replaces a part of a noun phrase smaller than the whole:

- *I like the [red car], and you like the blue [one].*

Here *one* replaces *car*, or more precisely a unit that includes the noun but not the determiner or the adjective *blue*. As we will see in Lesson III, *one*-substitution provides evidence for an intermediate level of structure within the noun phrase.

## Using the test carefully

Like all constituency tests, substitution must be used carefully:

- A failure of substitution does not always show that a group of words is **not** a constituent; there may be no suitable replacement word.
- The replacement must preserve the **grammatical function** of the original.
- Different tests sometimes give different results, and syntacticians must weigh the evidence.

For these reasons, syntacticians use several tests together. When different tests agree, the evidence for a constituent is strong.

> **Pause and consider.** In *The students who passed the exam celebrated*, what does *they* replace if you say *They celebrated*?`,
    },
    {
      title: "Testing Constituents: Movement and Clefts",
      body: `## Moving a unit

Another test for constituency is **movement**: if a group of words can be moved to a different position in the sentence as a unit, it is likely a constituent. Only constituents can move.

## Topicalization

In English, a phrase can be moved to the front of a sentence for emphasis or contrast, a construction called **topicalization**:

- *I really like [that old car].* → *[That old car], I really like.*
- *She put the keys [on the table].* → *[On the table], she put the keys.*

But:

- *I really like that old car.* → \\**[Like that], I really old car.*

Only a constituent can be fronted.

## Clefts

A **cleft sentence** focuses a phrase by placing it after *it is* or *it was*, followed by a relative clause:

- *John bought [a new bicycle] [on Saturday].*
- → *It was [a new bicycle] that John bought on Saturday.*
- → *It was [on Saturday] that John bought a new bicycle.*

But:

- → \\**It was [bicycle on] that John bought a new Saturday.*

Only a constituent can occupy the focus position of a cleft.

## Pseudoclefts

A **pseudocleft** (or *wh*-cleft) uses a *what* clause:

- *What John bought was [a new bicycle].*
- *What John did was [buy a new bicycle].*

The second example shows that *buy a new bicycle*, a verb phrase, is a constituent.

## Passive

The **passive** construction moves the object of an active sentence into the subject position:

- *The committee rejected [the proposal from the students].*
- → *[The proposal from the students] was rejected by the committee.*

The whole noun phrase moves as a unit, including the prepositional phrase *from the students*, which is part of it. This shows that *from the students* belongs inside the noun phrase, not attached to the verb.

## Questions

Question words, as we will see in Lesson IV, also replace and move constituents:

- *John bought [a bicycle].* → *[What] did John buy?*
- *She put the keys [on the table].* → *[Where] did she put the keys?*

The question word corresponds to a whole constituent.

## Caution

Movement tests have limitations. Some constituents cannot move for other reasons: in English, a verb phrase without its auxiliary is hard to front in many contexts (\\**Buy a bicycle, John did not* is odd for many speakers, though possible in some styles). And some languages allow movement of strings that may not be constituents. As always, movement tests are combined with other tests.

> **Pause and consider.** Use a cleft to show that *in the morning* is a constituent in *She jogs in the morning*.`,
    },
    {
      title: "Testing Constituents: Coordination, Ellipsis, and Fragments",
      body: `## Coordination

Two constituents of the same type can be joined by a **coordinating conjunction** such as *and*, *or*, or *but*:

- *[The dog] and [the cat] fought.* (two noun phrases)
- *She [sang a song] and [played the piano].* (two verb phrases)
- *He put the book [on the table] or [under the chair].* (two prepositional phrases)

Coordination is often used as a constituency test: if two strings can be coordinated, they are likely constituents of the same type.

But coordination is the least reliable test, because English sometimes allows the coordination of strings that do not appear to be constituents by other tests:

- *John gave [Mary a book] and [Sue a pen].*

Here *Mary a book* does not pass other tests: it cannot be replaced by a pronoun or moved as a unit. Such **non-constituent coordination** has been a long-standing puzzle, and different theories handle it differently.

## Ellipsis

In **ellipsis**, part of a sentence is omitted because it can be recovered from context. Only constituents can usually be omitted:

- *Mary will [buy a car], and John will [buy a car] too.* → *Mary will buy a car, and John will too.*

This **VP ellipsis** omits the verb phrase after the auxiliary, providing evidence that *buy a car* is a constituent.

## Sentence fragments

A **fragment** answer to a question is usually a constituent:

- *What did Mary buy?* — *[A new car].*
- *Where did she put the keys?* — *[On the table].*
- *What did John do?* — *[Wash the dishes].*

But:

- *What did Mary buy?* — \\**[Buy a new].*

Native speakers' sense of what makes a possible fragment answer is a useful guide to constituency.

## Combining tests

Each test has weaknesses, but when several tests agree, the evidence is strong. Consider *the black cat* in *The dog chased the black cat*:

- substitution: *The dog chased **it**.*
- movement: ***The black cat**, the dog chased.*
- cleft: *It was **the black cat** that the dog chased.*
- fragment: *What did the dog chase?* — ***The black cat**.*
- coordination: *The dog chased **the black cat** and **the white mouse**.*

All five tests agree that *the black cat* is a constituent.

## Constituency in other languages

The same tests, adapted to the constructions of each language, are used to discover constituency in all languages. In languages with freer word order, such as Latin, Russian, or Warlpiri, the evidence can be more complex, since words of a single phrase may be separated. Some linguists, such as **Kenneth Hale**, who worked on Warlpiri, have argued that such **nonconfigurational** languages have flatter structures than English. The question of how universal hierarchical phrase structure is remains debated.

> **Pause and consider.** Use three different tests to show that *played the piano* is a constituent in *She played the piano*.`,
    },
    {
      title: "Phrases and Their Heads",
      body: `## Types of phrase

The constituency tests reveal several types of phrase, each named after its most important word, the **head**:

- a **noun phrase** (NP), headed by a noun: *the old dog*, *students of linguistics*, *Mary*;
- a **verb phrase** (VP), headed by a verb: *chased the cat*, *slept*, *gave Mary a book*;
- an **adjective phrase** (AdjP or AP), headed by an adjective: *very happy*, *proud of her children*;
- an **adverb phrase** (AdvP), headed by an adverb: *very quickly*;
- a **prepositional phrase** (PP), headed by a preposition: *on the table*, *after the war*.

## What a head does

The head of a phrase has several properties:

- It determines the **category** of the phrase: a phrase headed by a noun is a noun phrase.
- It determines many of the phrase's **grammatical properties**: a noun phrase headed by a plural noun is plural (*the old **dogs** **are** barking*).
- It is usually **obligatory**: one can omit *old* from *the old dog*, but not *dog*.
- It **selects** its complements: as we will see later in this lesson, a verb such as *devour* requires an object, while *sleep* does not allow one.

## Endocentricity

The principle that every phrase has a head of the same category is called **endocentricity**: phrases are "centered" on their heads. This principle, which we will develop in Lesson III as part of X-bar theory, captures the fact that we do not find phrases like a noun phrase headed by a preposition, or a verb phrase headed by a noun.

## Inside the noun phrase

A noun phrase can contain several kinds of element in addition to the head noun:

- a **determiner**: *the*, *a*, *this*, *my*, *every*;
- **adjectives** (or adjective phrases) before the noun: *the **old** dog*, *a **very large** house*;
- **prepositional phrases** after the noun: *the dog **in the garden***, *students **of linguistics***;
- **relative clauses** after the noun: *the dog **that bit me***.

The order of these elements is fixed in English: determiner, adjectives, noun, prepositional phrases, relative clauses.

## Inside the verb phrase

A verb phrase contains the verb and its **complements**, such as objects, and may also contain **adjuncts**, optional modifiers such as adverbs and prepositional phrases of time, place, and manner:

- *chased **the cat*** (complement);
- *chased the cat **in the garden*** (adjunct);
- *slept **soundly*** (adjunct).

The distinction between complements and adjuncts is important, as we will see in Lesson III.

## Heads in other languages

All languages have phrases with heads, but the position of the head varies. In English, heads usually come **before** their complements: *chased **the cat***, ***on** the table*. In Japanese, heads come **after** their complements: *neko-o oikaketa* "cat-object chased," *teeburu-no ue-ni* "table-of top-on." We study this variation at the end of this lesson.

> **Pause and consider.** Identify the head of each phrase: *very proud of her children*; *the picture of John on the wall*; *quickly ran home*.`,
    },
    {
      title: "Phrase Structure Rules",
      body: `## Rules that build sentences

A **phrase structure rule** (PSR) states what a constituent of a given category may consist of. Such rules are written with an arrow, meaning "consists of" or "may be rewritten as." A simple set of rules for English might be:

> S → NP VP
>
> NP → (D) (AdjP\\*) N (PP\\*)
>
> VP → V (NP) (PP\\*)
>
> PP → P NP
>
> AdjP → (Adv) Adj

## Notation

The rules use several conventions:

- Parentheses ( ) mark an **optional** element: in NP → (D) N, the determiner may be present or absent (*the dog*, *dogs*).
- An asterisk after a category (\\*) means **zero or more** occurrences: AdjP\\* allows any number of adjective phrases (*the big old brown dog*). (This asterisk, called the **Kleene star**, has nothing to do with the asterisk that marks ungrammaticality.)
- Categories without parentheses are **obligatory**.

## Generating a sentence

Using these rules, we can **generate** a sentence step by step:

1. S → NP VP
2. NP → D N gives *the dog*
3. VP → V NP gives *chased* + NP
4. NP → D AdjP N gives *the black cat*
5. Result: *The dog chased the black cat.*

Each step applies a rule to a category, replacing it with its parts, until only words remain. The record of which rules were applied is the sentence's **structure**, which can be drawn as a tree.

## A lexicon

Phrase structure rules produce structures with category labels at the bottom: D, N, V, and so on. To produce actual sentences, the grammar also needs a **lexicon**, a list of words with their categories: *the* (D), *dog* (N), *chased* (V), and so on. Words are inserted into the structure in positions matching their categories.

## Overgeneration

Simple phrase structure rules **overgenerate**: they produce some ungrammatical sentences. For example, the rule VP → V (NP) allows both *The dog slept* and \\**The dog slept the cat*, since the NP is optional. But *slept* cannot take an object. As we will see later in this lesson, this problem is solved by information in the lexicon about which verbs take which complements.

## Undergeneration

Simple rules also **undergenerate**: they fail to produce some grammatical sentences. Our small set of rules cannot produce questions, passives, or sentences with auxiliary verbs or subordinate clauses. Adding rules for these, and transformations to relate them, was one of the main tasks of early generative grammar.

## From rules to principles

In later generative theory, as we will see in Lesson III, the many specific phrase structure rules were replaced by a few general principles, in **X-bar theory**, which apply to all categories. But phrase structure rules remain a clear and useful way to begin describing the structure of a language.

> **Pause and consider.** Using the rules above, generate the sentence *The students of linguistics read a very long book.* Which rules do you use?`,
    },
    {
      title: "Drawing Trees",
      body: `## A picture of structure

A **tree diagram** shows the structure of a sentence graphically. The top of the tree, the **root**, is labeled S (sentence). Lines, called **branches**, connect each constituent to its parts. The bottom of the tree shows the words. Each point where branches meet, labeled with a category, is called a **node**.

## An example

The sentence *The dog chased the black cat* can be drawn as follows:

\`\`\`
                S
          ______|______
         NP           VP
        __|__      ____|____
       D     N    V         NP
       |     |    |      ____|____
      the   dog chased  D   AdjP   N
                        |     |    |
                       the    Adj  cat
                              |
                            black
\`\`\`

The same structure in labeled brackets is:

> [S [NP [D the] [N dog]] [VP [V chased] [NP [D the] [AdjP [Adj black]] [N cat]]]]

## A method

Carnie recommends a systematic method for drawing trees, working **from the bottom up**:

1. Write out the sentence and identify the **category** of each word.
2. Build the smallest phrases first: attach adjectives to their adverbs to form AdjPs; attach determiners, adjectives, and nouns to form NPs; attach prepositions to their NPs to form PPs.
3. Attach PPs to the NPs or VPs they modify.
4. Build the VP from the verb and its complements and adjuncts.
5. Finally, combine the subject NP and the VP to form S.
6. **Check** the tree against the phrase structure rules and the constituency tests.

## Common errors

Students drawing trees often make these errors:

- **crossing branches**, which are not allowed: each word must be dominated by a single path to the root;
- **missing phrase nodes**: even a single word, such as a proper name like *Mary*, is a full noun phrase (NP), since it can be replaced by a pronoun and occupy NP positions;
- **attaching modifiers to the wrong node**: a prepositional phrase modifying a noun belongs inside the NP; one modifying the verb belongs inside the VP.

## Trees and ambiguity

As we will see later in this lesson, an ambiguous sentence like *I saw the man with the telescope* has two different trees, which correspond to its two meanings. Drawing both trees is the clearest way to show the ambiguity.

## Practice

Like transcription in phonetics, tree drawing is a skill learned by practice. Begin with simple sentences, then add adjectives, prepositional phrases, and auxiliary verbs. Check each tree with constituency tests. Online tree-drawing tools can help produce clear diagrams, but drawing by hand is the best way to learn.

> **Pause and consider.** Draw a tree for *The children in the park played a game.* Where does *in the park* attach?`,
    },
    {
      title: "Relations in a Tree",
      body: `## Family terms

Syntacticians describe the relations between nodes in a tree using family terms:

- A node directly above another is its **mother**; the node below is its **daughter**.
- Nodes with the same mother are **sisters**.
- A node that dominates nothing else (a word) is a **terminal** node.

In the tree for *The dog chased the black cat*, S is the mother of NP and VP, which are sisters; VP is the mother of V and the object NP.

## Dominance

A node **dominates** every node below it on a path down the tree. S dominates every node in the tree; the VP dominates the verb, the object NP, and the words *chased*, *the*, *black*, and *cat*. **Immediate dominance** is the mother–daughter relation: a node immediately dominates its daughters.

The relation of dominance defines **constituents**: a constituent is a set of words exhaustively dominated by a single node. *The black cat* is a constituent because the object NP dominates all of it and nothing else; *dog chased* is not, because no single node dominates exactly those words.

## Precedence

A node **precedes** another if it is to its left and neither dominates the other. *The dog* precedes *chased the black cat*. Precedence captures linear order; dominance captures hierarchy.

## C-command

One of the most important relations in syntactic theory is **c-command** (constituent command), defined by **Tanya Reinhart** in her dissertation of 1976:

> A node A **c-commands** a node B if neither dominates the other and the first branching node that dominates A also dominates B.

Informally, a node c-commands its **sisters** and everything its sisters dominate. In *The dog chased the black cat*, the subject NP *the dog* c-commands the VP and everything in it, including the object NP; but the object NP does not c-command the subject, since the first branching node above the object (the VP) does not dominate the subject.

## Why c-command matters

C-command turns out to govern many syntactic phenomena:

- **Pronoun reference**, as we saw in Lesson I and will study in Lesson V: *John thinks he is clever* allows *he* to refer to John, but *He thinks John is clever* does not. The difference depends on c-command: a pronoun cannot c-command its antecedent in this way.
- **Reflexives** such as *himself* must be c-commanded by their antecedents: *John likes himself*, but \\**Himself likes John*.
- **Negative polarity items** such as *any* and *ever* must be c-commanded by a negative: *No one has ever seen it*, but \\**Anyone hasn't ever seen it*.

That so many different phenomena depend on the same abstract structural relation is one of the most striking discoveries of generative syntax, and one of the strongest arguments that sentences have hierarchical structure.

> **Pause and consider.** In *The teacher praised every student*, does the subject c-command the object? Does the object c-command the subject?`,
    },
    {
      title: "Recursion in Phrase Structure",
      body: `## Rules that call themselves

As we saw in Lesson I, the grammar of every language allows sentences of unlimited length, through **recursion**. In phrase structure terms, recursion arises when a category can contain another instance of the same category, directly or indirectly.

## Noun phrases within noun phrases

Our rules allow an NP to contain a PP, and a PP to contain an NP:

> NP → (D) N (PP)
>
> PP → P NP

Together, these rules allow structures of unlimited depth:

> [NP the book [PP on [NP the table [PP in [NP the room [PP at [NP the end [PP of [NP the hall]]]]]]]]]

Each PP contains an NP, which can contain another PP, and so on.

## Sentences within sentences

If a verb phrase can contain a clause, and a clause contains a verb phrase, then clauses can be embedded within clauses without limit:

> VP → V CP
>
> CP → C S

(where CP is a **complementizer phrase**, a clause introduced by a complementizer such as *that*). This allows:

> *Mary said [that John thought [that Sue believed [that the earth was flat]]].*

## The house that Jack built

A famous English nursery rhyme exploits recursion through relative clauses:

> *This is the rat, that ate the malt, that lay in the house that Jack built.*

Each verse adds another relative clause, building a single sentence of ever-increasing length, until it reaches *the farmer sowing his corn*. Children delight in it, and it illustrates in miniature the infinite generative capacity of grammar.

## Coordination

**Coordination** also allows sentences to grow without limit: *I bought bread, and milk, and eggs, and butter, and ...* But coordination is different from embedding: coordinated phrases are side by side, at the same level, not one inside another.

## Is recursion universal?

In 2002, **Marc Hauser**, **Noam Chomsky**, and **W. Tecumseh Fitch** published an influential paper in *Science* proposing that recursion might be the core property that distinguishes human language from animal communication. In 2005, **Daniel Everett**, whom we met in PHO 101, claimed that **Pirahã**, a language of the Brazilian Amazon, lacks recursive embedding altogether. This claim provoked a fierce debate. Critics, including **Andrew Nevins**, **David Pesetsky**, and **Cilene Rodrigues**, re-analyzed Everett's data and argued that Pirahã does show embedding. Others argued that even if Pirahã lacked embedding, this would not refute the claim that humans have the **capacity** for recursion. The debate, which remains unresolved, illustrates the importance of detailed fieldwork for testing claims about universals.

> **Pause and consider.** Write a sentence with at least four levels of embedded clauses. At what point does it become hard to understand?`,
    },
    {
      title: "Auxiliaries and the Verb Phrase",
      body: `## Helping verbs

English **auxiliary verbs** ("helping verbs") combine with main verbs to express tense, aspect, mood, and voice. They occur in a fixed order:

> **modal** – **perfect** *have* – **progressive** *be* – **passive** *be* – **main verb**

as in *The house **might have been being** painted*. Each auxiliary determines the form of the following verb: a modal is followed by the bare form (*might **have***); perfect *have* by the past participle (*have **been***); progressive *be* by the *-ing* form (*been **being***); and passive *be* by the past participle (*being **painted***). As we saw in Lesson I, Chomsky's *Syntactic Structures* explained this pattern with the rule of **affix hopping**.

## The NICE properties

Auxiliaries differ from main verbs in several ways, summarized by the British linguist **Rodney Huddleston** in the 1970s under the acronym **NICE**:

- **Negation**: auxiliaries take *not* directly after them (*She **has not** left*), while main verbs require *do* (*She **did not** leave*; \\**She left not*).
- **Inversion**: auxiliaries move before the subject in questions (***Has** she left?*), while main verbs do not (\\**Left she?*).
- **Code** (ellipsis): auxiliaries can stand for a whole verb phrase (*She has left, and so **has** John*).
- **Emphasis**: auxiliaries can be stressed for emphasis (*She **HAS** left!*).

When no auxiliary is present, English inserts ***do*** to carry tense in these constructions: *Did she leave?*, *She didn't leave*, *She left, and so **did** John*, *She **DID** leave!* This is **do-support**, whose history we traced in HIL 101.

## Where do auxiliaries go?

Where do auxiliaries fit in the tree? In early phrase structure grammars, they were placed in a separate constituent called **Aux**, between the subject and the verb phrase: S → NP Aux VP. In later theories, as we will see in Lesson III, tense and auxiliaries are treated as the **head** of the clause itself, in a category called **T** (for tense), and the clause is a **TP** (tense phrase).

## Main verb *be* and *have*

The verbs *be* and, for some speakers, possessive *have*, behave like auxiliaries even when they are main verbs: *Is she happy?* (not \\**Does she be happy?*), *She is not happy*. British speakers may say *Have you a pen?*, while American speakers say *Do you have a pen?* Such variation shows that the auxiliary system continues to change, as it has since the rise of do-support in Early Modern English.

## Auxiliaries in other languages

Many languages have auxiliaries, but their properties differ. French uses *avoir* "have" and *être* "be" as perfect auxiliaries, depending on the verb (*j'ai mangé* "I have eaten," *je suis venu* "I have come"). Many languages express tense and aspect with affixes rather than separate words. And as we saw in HIL 101, auxiliaries often develop from main verbs through grammaticalization, as English *will* developed from a verb meaning "want."

> **Pause and consider.** Apply the NICE tests to *She can swim* and *She swims*. What differences do you find?`,
    },
    {
      title: "Clauses Within Clauses",
      body: `## Embedded clauses

As we saw in Lesson I, a clause can be **embedded** inside another. In phrase structure terms, a verb such as *think*, *say*, or *believe* can take a clause as its complement:

> *I think [that the dog chased the cat].*

The embedded clause is introduced by the **complementizer** *that*. Syntacticians call the whole unit, complementizer plus clause, a **complementizer phrase** (CP), with the complementizer as its head:

> [VP think [CP [C that] [S the dog chased the cat]]]

## Complementizers

English complementizers include:

- ***that***, introducing declarative clauses: *I know **that** she left.*
- ***if*** and ***whether***, introducing embedded yes–no questions: *I wonder **whether** she left.*
- ***for***, introducing some infinitival clauses: *I would like **for** you to stay.* (common in some American dialects)

The choice of complementizer is determined by the verb: *know* takes *that*; *wonder* takes *whether* or *if*; and *want* takes an infinitival clause.

## Optional that

In English, *that* is often **optional** after verbs like *think*: *I think (that) she left.* But it is required in some positions, such as at the beginning of a sentence: ***That** she left surprised me*; \\**She left surprised me* (with the intended meaning). And it is **impossible** before a subject that has been questioned: *Who do you think left?* but \\**Who do you think that left?* This curious restriction, called the ***that*-trace effect**, has been studied intensively since the 1970s; we will return to it in Lesson IV.

## Embedded questions

Embedded clauses can also be **questions**:

- *I wonder [**whether** she will come].* (embedded yes–no question)
- *I wonder [**who** she saw].* (embedded *wh*-question)
- *I asked [**where** they went].*

Note that embedded questions in standard English do not invert the subject and auxiliary: *I wonder who **she saw*** (not \\**who did she see*). Some varieties of English, such as Irish English, allow inversion in embedded questions: *I wonder did she see him.*

## Infinitival clauses

Clauses can also be **nonfinite**, as we saw in Lesson I: *I want [**to leave**]*; *I want [**her to leave**]*; *It is hard [**for me to believe**]*. These clauses lack tense but have the internal structure of clauses, with a (sometimes silent) subject and a verb phrase. Their analysis, especially the status of their silent subjects, is one of the topics of Lesson V.

## Sentences as complements of nouns and adjectives

Clauses can also be complements of nouns and adjectives:

- *the claim [**that** the earth is flat]* (noun complement);
- *proud [**that** she won]*; *eager [**to help**]* (adjective complements).

These show that the possibility of clausal complements is a property of particular words, recorded in their subcategorization frames, which we studied earlier in this lesson.

> **Pause and consider.** Is *that* optional in *I believe that you are right*? In *That you are right is obvious*? Why the difference?`,
    },
    {
      title: "Another Way to Draw Structure: Dependency Grammar",
      body: `## Heads and dependents

The phrase structure trees we have studied represent sentences as nested **constituents**. An alternative tradition represents sentences in terms of **dependencies**: relations between individual words, in which one word, the **head**, governs another, the **dependent**.

## Tesnière

The modern theory of dependency grammar was developed by the French linguist **Lucien Tesnière**, whose *Éléments de syntaxe structurale* was published posthumously in 1959. Tesnière argued that the **verb** is the center of the sentence, and that the other words depend on it, directly or indirectly. He compared the verb to an atom with a certain **valency**, the capacity to combine with a certain number of other elements (its **actants**), borrowing the term from chemistry. *Sleep* has a valency of one (a subject); *devour* has two (a subject and an object); *give* has three.

## A dependency diagram

In a dependency analysis of *The dog chased the black cat*:

- *chased* is the root, the head of the whole sentence;
- *dog* depends on *chased* (as its subject);
- *cat* depends on *chased* (as its object);
- *the* depends on *dog*; *the* and *black* depend on *cat*.

This is usually drawn with arrows from heads to dependents, often labeled with the type of relation (subject, object, determiner, modifier).

## Comparing the approaches

Dependency and phrase structure representations capture much of the same information:

- both identify **heads**;
- both show which words belong together: in dependency terms, a word and all its dependents form a unit corresponding to a constituent.

But they differ in emphasis. Phrase structure emphasizes **constituents** and **categories**, and posits nodes (such as NP and VP) that do not correspond to single words. Dependency grammar emphasizes **relations** between words, with no extra nodes. Phrase structure has been dominant in the generative tradition, while dependency grammar has been more influential in Europe and in computational linguistics.

## Universal Dependencies

Since 2014, an international project called **Universal Dependencies** has developed a common framework for annotating the grammar of many languages with dependency structures, producing **treebanks**, collections of annotated sentences, for over a hundred languages. These treebanks are widely used in natural language processing and in typological research, allowing linguists to compare the structures of many languages using consistent methods.

## Valency in other traditions

Tesnière's idea of valency has influenced many approaches, including the analysis of **argument structure** in generative grammar, which we will study in Lesson V, and the **valency dictionaries** compiled for German and other languages, which list the complements that each verb requires.

## Choosing a representation

For this course, we use phrase structure trees, following Carnie. But students should know that they are one way, not the only way, to represent syntactic structure. The facts about structure, such as which words go together and which are heads, are what matter; different representations are different ways of capturing them.

> **Pause and consider.** Draw a dependency diagram for *Mary gave John a book*. What is the valency of *gave*?`,
    },
    {
      title: "Ambiguity in Trees",
      body: `## Two trees for one sentence

As we saw in Lesson I, a structurally ambiguous sentence has two structures. Trees make the difference explicit.

## The telescope

Consider *I saw the man with the telescope*.

**Reading 1** (I used the telescope): the PP *with the telescope* attaches to the **VP**, modifying the act of seeing:

> [S [NP I] [VP [V saw] [NP the man] [PP with the telescope]]]

**Reading 2** (the man had the telescope): the PP attaches inside the **NP**, modifying *man*:

> [S [NP I] [VP [V saw] [NP the man [PP with the telescope]]]]

The constituency tests confirm the difference. In reading 2, *the man with the telescope* is a constituent, and can be replaced by a pronoun: *I saw **him***, where *him* refers to the man-with-the-telescope. In reading 1, *the man with the telescope* is not a constituent; replacing *the man* with a pronoun gives *I saw **him** with the telescope*.

## Old men and women

The phrase *old men and women* is ambiguous:

- [[old men] and [women]]: only the men are old;
- [old [men and women]]: both are old.

In the first structure, *old* modifies only *men*; in the second, it modifies the coordinated phrase *men and women*.

## Attachment ambiguity

The telescope example is a case of **attachment ambiguity**: a phrase may attach to more than one node. Such ambiguities multiply rapidly in longer sentences. A sentence with several prepositional phrases, such as *I saw the man on the hill with the telescope in the morning*, may have many possible structures, since each PP may attach to the verb or to any preceding noun.

## Processing ambiguity

How do listeners choose between structures? Psycholinguists have found that, in the absence of context, listeners often prefer certain attachments. **Lyn Frazier** proposed in the late 1970s that listeners initially prefer the structure with the fewest nodes (**minimal attachment**) and attach new words to the phrase currently being processed (**late closure**). These principles help explain garden-path sentences like *The horse raced past the barn fell*. Later research showed that context, word frequency, and plausibility also strongly influence how listeners resolve ambiguity.

## Ambiguity and meaning

Structural ambiguity shows that meaning depends not just on words but on how they are combined. The principle that the meaning of a sentence is determined by the meanings of its parts and the way they are combined is called **compositionality**, often attributed to the philosopher **Gottlob Frege**. It is central to semantics, which we study in SYN 110.

> **Pause and consider.** Draw two bracketings for *the tall man's wife*. Who is tall in each?`,
    },
    {
      title: "Subcategorization and the Lexicon",
      body: `## Verbs differ

As we saw, simple phrase structure rules overgenerate. The rule VP → V (NP) (PP) allows any verb to appear with or without an object. But verbs differ in what they allow:

- ***sleep*** cannot take an object: *The baby slept*; \\**The baby slept the bed*.
- ***devour*** requires an object: *The lion devoured the meat*; \\**The lion devoured*.
- ***eat*** may take an object or not: *She ate an apple*; *She ate*.
- ***put*** requires an object and a location: *She put the book on the shelf*; \\**She put the book*; \\**She put on the shelf*.
- ***give*** takes two objects or an object and a PP: *She gave John a book*; *She gave a book to John*.
- ***think*** takes a clause: *I think that it will rain*.

## Subcategorization

The information about which complements a word takes is called its **subcategorization frame**. It is stored in the **lexicon**, the mental dictionary. For example:

- *sleep*: V, [ \\_\\_ ] (no complement);
- *devour*: V, [ \\_\\_ NP ];
- *put*: V, [ \\_\\_ NP PP ];
- *think*: V, [ \\_\\_ CP ].

The blank represents the position of the verb. When a word is inserted into a tree, its subcategorization frame must match the structure. This prevents the grammar from generating \\**The baby slept the bed*.

## Transitivity

Traditional grammar classifies verbs by **transitivity**:

- **intransitive** verbs take no object (*sleep*, *arrive*);
- **transitive** verbs take one object (*devour*, *see*);
- **ditransitive** verbs take two objects (*give*, *send*, *tell*).

Many verbs belong to more than one class, with related meanings: *She **broke** the window* (transitive) and *The window **broke*** (intransitive).

## Nouns and adjectives too

Subcategorization applies to other categories as well. Some nouns take complements: *the **destruction** of the city*, *the **belief** that the earth is flat*. Some adjectives do: ***proud** of her children*, ***eager** to leave*. Prepositions usually take an NP complement, though some take clauses (*before she left*).

## Selection and meaning

Words also impose **semantic** restrictions on their complements, called **selectional restrictions**: *drink* requires a liquid object (\\#*She drank the sandwich*); *frighten* requires an animate object (\\#*The noise frightened the rock*). Violations of selectional restrictions, unlike violations of subcategorization, produce sentences that are grammatical but semantically odd, like *Colorless green ideas sleep furiously*. As we saw in Lesson I, such sentences are marked with **#** rather than \\*.

## The lexicon's role

The recognition that much syntactic information is stored with individual words was an important development in generative grammar. In later theories, as we will see in Lessons III and V, the lexicon plays an even larger role: the structure of a sentence is largely **projected** from the properties of its words, especially its verb.

> **Pause and consider.** Give the subcategorization frame for *rely* (as in *She relies on her friends*). Is *on her friends* a complement or an adjunct?`,
    },
    {
      title: "Word Order Across Languages",
      body: `## Subject, object, verb

Languages differ in the basic order of **subject** (S), **object** (O), and **verb** (V) in simple declarative sentences. In his survey of the *World Atlas of Language Structures*, **Matthew Dryer** classified over 1,300 languages by their dominant order:

| Order | Example languages | Approximate number |
|---|---|---|
| **SOV** | Japanese, Korean, Turkish, Hindi, Persian, Basque, Quechua | about 565 |
| **SVO** | English, Mandarin, Spanish, Swahili, Russian | about 490 |
| **VSO** | Irish, Welsh, Classical Arabic, Tagalog | about 95 |
| **VOS** | Malagasy, Tzotzil | about 25 |
| **OVS** | Hixkaryana (Brazil) | about 10 |
| **OSV** | very rare | a handful |

Nearly 190 more languages have no dominant order. SOV and SVO together account for the large majority of languages with a dominant order; orders in which the object precedes the subject are rare.

## Hixkaryana

The existence of **object-initial** languages was doubted until the linguist **Desmond Derbyshire** described **Hixkaryana**, a Carib language of the Brazilian Amazon, in the 1970s, showing that its basic order is OVS. The discovery shows the importance of fieldwork: a claimed universal based on familiar languages may be refuted by a single well-documented language.

## Greenberg's universals

In 1963, the American linguist **Joseph Greenberg**, whom we met in HIL 101, published a study of thirty languages, "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements," proposing forty-five **universals**, many of them **implicational**: if a language has one property, it tends to have another. For example:

- Languages with **VSO** order almost always have **prepositions** (like Irish and Welsh).
- Languages with **SOV** order usually have **postpositions** (like Japanese *Tōkyō **ni*** "to Tokyo," with the adposition after the noun).
- In SOV languages, **genitives** usually precede nouns, and **auxiliaries** usually follow verbs.

## Head-initial and head-final

These correlations suggest a general pattern: languages tend to place **heads** consistently before or after their complements. **Head-initial** languages, like English, put verbs before objects (*eat apples*) and prepositions before nouns (*in Tokyo*). **Head-final** languages, like Japanese and Turkish, put verbs after objects and postpositions after nouns. As we will see in Lesson III, generative grammar captures this with the **head parameter**.

## Exceptions

The correlations are tendencies, not absolute laws. English, though largely head-initial, places genitives and adjectives before nouns (*John's book*, *red car*). German has verb-second order in main clauses and verb-final order in subordinate clauses. Mandarin has SVO order but places relative clauses before nouns. Typologists study both the tendencies and the exceptions, and seek explanations in processing, history, and grammar.

> **Pause and consider.** English is SVO and has prepositions. Japanese is SOV and has postpositions. What general principle might connect these facts?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Constituency tests

> *The students read the long article about syntax.*

**Questions**

1. Use substitution, movement, and a fragment answer to show that *the long article about syntax* is a constituent.
2. Is *read the* a constituent? How do you know?

## 2. Phrase structure rules

> S → NP VP; NP → (D) (AdjP\\*) N (PP\\*); VP → V (NP) (PP\\*); PP → P NP

**Questions**

1. Use these rules to generate *The old man in the boat caught a fish*.
2. Draw the tree.

## 3. Ambiguity

> *I saw the man with the telescope.*

**Questions**

1. Draw two bracketings, one for each reading.
2. Which reading allows *I saw him* to refer to the man with the telescope?

## 4. Word order

> Japanese *Taroo-ga ringo-o tabeta* "Taro an apple ate"; Irish *D'ith Seán úll* "Ate Seán an apple"

**Questions**

1. Identify the basic order in each language.
2. Which would you expect to have prepositions, and which postpositions?

## Drawing the threads together

In a paragraph, explain how syntacticians discover and represent the structure of sentences, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "4th ed., 2021", note: "Read chapters 3–4, on constituency, trees, and structural relations." },
    { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957", note: "Read chapter 4, \"Phrase Structure.\"" },
    { kind: "book", title: "Some Universals of Grammar with Particular Reference to the Order of Meaningful Elements", author: "Joseph H. Greenberg", publisher: "Universals of Language, ed. Joseph H. Greenberg (MIT Press)", year: "1963", note: "Read the list of universals in the appendix." },
  ],
  media: [
    { kind: "website", title: "World Atlas of Language Structures: Order of Subject, Object and Verb (Feature 81A)", author: "Matthew S. Dryer", publisher: "WALS Online", url: "https://wals.info/chapter/81", note: "Explore the map of word orders." },
    { kind: "book", title: "Language", author: "Leonard Bloomfield", publisher: "Henry Holt", year: "1933", note: "Read the chapter on syntax and immediate constituents." },
  ],
  questions: [
    {
      prompt: "What is a constituent?",
      choices: [
        "Any sequence of adjacent words",
        "A word or group of words that functions as a single unit",
        "A single word only",
        "A sentence",
      ],
      answer: 1,
      explanation: "Identified by constituency tests.",
    },
    {
      prompt: "What does the pronoun it replace in The old dog chased the cat → It chased the cat?",
      choices: ["dog", "old dog", "the old dog", "the old dog chased"],
      answer: 2,
      explanation: "Pronouns replace whole noun phrases.",
    },
    {
      prompt: "Which test is generally considered the least reliable?",
      choices: ["Substitution", "Movement", "Coordination", "Fragment answers"],
      answer: 2,
      explanation: "Non-constituent coordination exists.",
    },
    {
      prompt: "What does the head of a phrase determine?",
      choices: [
        "Only its length",
        "Its category and many of its grammatical properties",
        "Its position in the sentence",
        "Nothing",
      ],
      answer: 1,
      explanation: "A phrase headed by a noun is a noun phrase.",
    },
    {
      prompt: "In phrase structure rules, what do parentheses indicate?",
      choices: ["An obligatory element", "An optional element", "Ungrammaticality", "Recursion"],
      answer: 1,
      explanation: "The Kleene star means zero or more.",
    },
    {
      prompt: "When does a node A c-command a node B?",
      choices: [
        "When A precedes B",
        "When neither dominates the other and the first branching node dominating A also dominates B",
        "When A dominates B",
        "When A and B are adjacent",
      ],
      answer: 1,
      explanation: "Defined by Tanya Reinhart in 1976.",
    },
    {
      prompt: "What makes recursion possible in phrase structure?",
      choices: [
        "Long words",
        "A category that can contain another instance of the same category",
        "Coordination only",
        "The lexicon",
      ],
      answer: 1,
      explanation: "As in NP → N PP and PP → P NP.",
    },
    {
      prompt: "Why is *The baby slept the bed ungrammatical?",
      choices: [
        "Because of word order",
        "Because sleep's subcategorization frame does not allow an object",
        "Because of meaning only",
        "Because bed is a verb",
      ],
      answer: 1,
      explanation: "Subcategorization is stored in the lexicon.",
    },
    {
      prompt: "Which is the most common basic word order in Dryer's survey?",
      choices: ["SVO", "SOV", "VSO", "OVS"],
      answer: 1,
      explanation: "SVO is a close second.",
    },
    {
      prompt: "According to Greenberg, VSO languages almost always have what?",
      choices: ["Postpositions", "Prepositions", "No adpositions", "Ergativity"],
      answer: 1,
      explanation: "Like Irish and Welsh.",
    },
  ],
  reflection:
    "Sentences have hierarchical structure, not just linear order. In 500–800 words, choose a sentence of your own with at least two prepositional phrases, use constituency tests to determine its structure, draw its tree, and explain any ambiguity it contains. Then reflect on why hierarchical structure matters for meaning.",
};
