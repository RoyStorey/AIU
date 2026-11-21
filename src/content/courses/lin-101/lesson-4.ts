import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Sentences: The Structure of Syntax",
  summary:
    "What syntax studies and why grammaticality differs from meaning; constituents and how to test for them; phrases and heads; tree structures and structural ambiguity; recursion; complex sentences and relative clauses; movement, questions, and structure dependence; word order across the world's languages; agreement, case, and ergativity; pidgins and creoles; Universal Grammar, parameters, and their critics; and how people and machines process sentences.",
  pages: [
    {
      title: "What Syntax Studies",
      body: `## Beyond the word

**Syntax** is the study of how words combine into phrases and sentences. Knowing a language means knowing not only its sounds and words but the rules that govern their arrangement. The same words, arranged differently, produce different meanings (*The dog bit the man*, *The man bit the dog*) or no sentence at all (\\**Man the bit dog the*).

## Grammatical but meaningless

In ***Syntactic Structures*** (1957), the short book that launched a revolution in linguistics, **Noam Chomsky** offered a famous pair of examples:

> Colorless green ideas sleep furiously.
>
> Furiously sleep ideas green colorless.

Neither sentence makes sense: ideas are not green, green things are not colorless, ideas do not sleep. Yet every English speaker recognizes that the first is a well-formed English sentence and the second is not. Chomsky used the contrast to argue that **grammaticality** is independent of meaning and of probability: neither sentence had ever been uttered before, yet speakers judge them differently. Syntax, he argued, is an autonomous system of the mind.

## Meaningful but ungrammatical

The converse also holds: some strings are perfectly understandable but ungrammatical. A learner of English who says "\\*Me want cookie" or "\\*Yesterday I go to store" is understood, but the sentences violate English grammar. Speakers can tell the difference between what is grammatical and what merely communicates.

## Generative grammar

Chomsky proposed that linguists should aim to write a **generative grammar**: an explicit set of rules that generates all and only the grammatical sentences of a language, and assigns each its correct structure. Such a grammar would model a speaker's competence. Since a language has infinitely many sentences, the grammar cannot be a list; it must be a finite system of rules that can produce an infinite set. This approach dominated much of linguistics for the second half of the twentieth century, though, as we will see, it has also been challenged.

## Not just word order

It might seem that syntax is simply a matter of **word order**: which word comes before which. But syntax is more than order. Words are grouped into **phrases**, phrases into larger phrases, and sentences have hierarchical **structure**. As we will see, many facts about sentences—their ambiguities, how questions are formed, which words can refer to which—can be explained only by this structure, not by the linear order of words.

## The plan of this lesson

This lesson introduces the basic concepts of syntax: constituents, phrases, trees, recursion, and transformations. It then looks at how languages differ in word order and in how they mark grammatical relations, and at the debate over Universal Grammar. SYN 101 studies syntax in depth.

> **Pause and consider.** "Colorless green ideas sleep furiously" makes no sense, yet it is grammatical. What does this suggest about the relation between grammar and meaning?`,
    },
    {
      title: "Constituents",
      body: `## Words that belong together

In the sentence *The old man in the hat bought a newspaper*, some words clearly belong together more closely than others. *The old man in the hat* forms a unit, referring to a person; *bought a newspaper* forms a unit, describing what he did; *a newspaper* forms a unit within it. But *hat bought* does not form a unit, though the two words are adjacent. Groups of words that function as units are called **constituents**.

## Tests for constituency

How can we tell which strings of words are constituents? Linguists use several **tests**, which reveal speakers' unconscious knowledge of structure.

**Substitution.** A constituent can often be replaced by a single word, such as a pronoun. *The old man in the hat* can be replaced by *he*: *He bought a newspaper*. *A newspaper* can be replaced by *it*: *The old man in the hat bought it*. But *hat bought* cannot be replaced by anything.

**Movement.** Constituents can often be moved to another position in the sentence. *In the hat* can be moved in some contexts; *a newspaper* can be moved to the front for emphasis: *A newspaper, the old man bought (not a magazine)*. Non-constituents cannot be moved: \\**Hat bought, the old man in the a newspaper*.

**Coordination.** Constituents of the same kind can be joined by *and* or *or*: *The old man and his wife bought a newspaper*; *The old man bought a newspaper and read it*.

**Answering questions.** A constituent can often serve as the answer to a question. *Who bought a newspaper?* *The old man in the hat.* *What did he buy?* *A newspaper.* But no question has *hat bought* as its answer.

## Hierarchical structure

These tests show that sentences are not flat strings of words, but have **hierarchical structure**: words group into phrases, which group into larger phrases. *In the hat* is a constituent, and it is part of the larger constituent *the old man in the hat*, which is part of the sentence. A sentence's structure can be represented by brackets, in which each pair of brackets encloses a constituent:

[[The old man [in [the hat]]] [bought [a newspaper]]]

or, more usually, by a **tree diagram**, which we will meet shortly.

## Pronouns and structure

Structure also governs what pronouns can refer to. In *John said that he was tired*, *he* can refer to John. In *He said that John was tired*, *he* cannot refer to John; it must refer to someone else. Yet in *After he arrived, John fell asleep*, *he* can refer to John, even though it comes first. The difference depends not on linear order but on structural relations between the positions of the pronoun and the name, which syntacticians have described precisely. Children acquire these constraints early, without being taught.

## Why constituents matter

Constituent structure is the foundation of syntax. Rules of grammar apply to constituents, not to arbitrary strings of words: we move phrases, replace phrases with pronouns, coordinate phrases. The next pages examine what kinds of phrases there are and how they are built.

> **Pause and consider.** In *The student with long hair from Ohio arrived*, is *with long hair* a constituent? Use two tests to decide.`,
    },
    {
      title: "Phrases and Heads",
      body: `## Kinds of phrases

Constituents come in different kinds, named after their most important word, their **head**. The head determines the category and basic properties of the phrase.

- A **noun phrase** (NP) has a noun as its head: *the old man*, *a newspaper*, *students of linguistics*, *Mary*. A noun phrase can serve as the subject or object of a sentence.
- A **verb phrase** (VP) has a verb as its head: *bought a newspaper*, *slept*, *gave the dog a bone*.
- A **prepositional phrase** (PP) has a preposition as its head: *in the hat*, *on the table*, *after dinner*.
- An **adjective phrase** (AP) has an adjective as its head: *very old*, *proud of her children*, *fond of chocolate*.
- An **adverb phrase** (AdvP) has an adverb as its head: *very quickly*.

## Heads and complements

The head of a phrase often requires or allows other phrases, called **complements**, which complete its meaning. The verb *devour* requires an object: *The dog devoured the meat*, not \\**The dog devoured*. The verb *put* requires both an object and a location: *put the book on the shelf*. The verb *sleep* takes no object: \\**She slept the bed*. The verb *give* can take two objects: *give the dog a bone*. These requirements, part of each verb's entry in the lexicon, are called its **subcategorization** or **argument structure**.

Nouns, adjectives, and prepositions also take complements: a *student of physics*, *proud of her work*, *in the house*.

## Phrase structure rules

Linguists have described the structure of phrases with **phrase structure rules**, which state what a constituent of a given category can consist of. A simple set of rules for English might include:

- S → NP VP (a sentence consists of a noun phrase and a verb phrase)
- NP → (Det) (Adj) N (PP) (a noun phrase consists of an optional determiner, optional adjective, a noun, and an optional prepositional phrase)
- VP → V (NP) (PP) (a verb phrase consists of a verb, an optional noun phrase, and an optional prepositional phrase)
- PP → P NP (a prepositional phrase consists of a preposition and a noun phrase)

These rules, applied repeatedly, generate the structures of many English sentences. *The old man in the hat bought a newspaper* is an S consisting of an NP (*the old man in the hat*) and a VP (*bought a newspaper*); the NP contains a PP (*in the hat*), which contains another NP (*the hat*).

## Common patterns

Linguists noticed that phrases of different categories share a common structure: each has a head, with complements on one side and modifiers or **specifiers** (such as determiners) on the other. This observation led to **X-bar theory**, developed in the 1970s, which proposed a single template for all phrase types. In English, heads typically come **before** their complements: the verb before its object (*bought a newspaper*), the preposition before its noun phrase (*in the hat*). As we will see, in many other languages heads come after their complements.

## The sentence

What is the head of a sentence? In many theories, the head of a sentence is the element that carries **tense**: the auxiliary or the tense ending of the verb. In *The dog will bark*, *will* carries tense; in *The dog barked*, the past tense *-ed* does. Questions and negation, as we will see, are formed around this tense-bearing element.

> **Pause and consider.** Which of these verbs require an object, which forbid one, and which allow but do not require one: *devour*, *sleep*, *eat*, *arrive*, *read*?`,
    },
    {
      title: "Trees and Ambiguity",
      body: `## Tree diagrams

Syntacticians represent the structure of sentences with **tree diagrams**, upside-down trees whose branches show how words group into phrases. At the top is the sentence (S); it branches into its constituents (NP and VP); each of those branches into its own constituents; and so on, down to the individual words at the bottom. Each point where branches meet is called a **node**, labeled with a category.

In this course, we will often represent trees with **labeled brackets**, which convey the same information more compactly:

[S [NP The dog] [VP chased [NP the cat]]]

This shows that the sentence consists of the NP *the dog* and the VP *chased the cat*, and that the VP contains the verb *chased* and the NP *the cat*.

## Structural ambiguity

Tree structures explain a phenomenon that linear order cannot: **structural ambiguity**, in which a single string of words has two or more meanings because it can be assigned two or more structures. Consider:

> I saw the man with the telescope.

This sentence has two meanings. In one, I used a telescope to see the man; in the other, I saw a man who had a telescope. The difference lies in where the prepositional phrase *with the telescope* attaches:

- [S I [VP saw [NP the man] [PP with the telescope]]] — the PP modifies the verb phrase: the seeing was done with a telescope.
- [S I [VP saw [NP the man [PP with the telescope]]]] — the PP modifies the noun: the man had the telescope.

The words and their order are identical; only the structure differs.

## More examples

Many famous examples of ambiguity are structural:

- *Visiting relatives can be boring.* (Going to visit relatives is boring, or relatives who visit are boring.)
- *Flying planes can be dangerous.* (The act of flying planes, or planes that are flying.)
- *The chicken is ready to eat.* (The chicken is ready to be eaten, or the chicken is ready to eat its food.)
- *She is an English history teacher.* (A teacher of English history, or an English teacher of history.)

Newspaper headlines, which omit function words, are especially prone to ambiguity: "Squad Helps Dog Bite Victim" or "Kids Make Nutritious Snacks."

## Lexical and structural ambiguity

Structural ambiguity differs from **lexical ambiguity**, which arises from a word with two meanings: *I went to the bank* (a financial institution or a riverbank). In structural ambiguity, the words have the same meanings in both readings, but are grouped differently.

## Why ambiguity matters

Most ambiguity goes unnoticed in ordinary conversation, because context makes one reading obvious. But the existence of structural ambiguity is one of the strongest pieces of evidence that sentences have hierarchical structure in speakers' minds. It also shows the challenge facing anyone trying to build a computer that understands language: a computer must somehow decide which structure is intended, using knowledge of the world and of context that human beings bring to every sentence without effort.

> **Pause and consider.** Explain the two meanings of *The chicken is ready to eat*. Who is doing the eating in each?`,
    },
    {
      title: "Recursion",
      body: `## Phrases within phrases

One of the most important properties of syntax is **recursion**: the ability of a rule to apply to its own output, embedding a constituent of one type inside another of the same type. A noun phrase can contain a prepositional phrase, which contains a noun phrase, which can contain another prepositional phrase, and so on: *the book on the table in the room of the house on the hill*. A sentence can contain another sentence: *Mary thinks [that John said [that Sue believes [that it will rain]]]*.

## The house that Jack built

The English nursery rhyme *This Is the House That Jack Built* illustrates recursion with relative clauses, each embedded within the noun phrase of the one before:

> This is the cat, that killed the rat, that ate the malt, that lay in the house that Jack built.

The rhyme can be extended indefinitely, adding *the dog that worried the cat*, *the cow with the crumpled horn that tossed the dog*, and so on. There is no grammatical limit to its length.

## Infinite sentences

Recursion explains how a finite grammar can generate an **infinite** number of sentences. Since there is no longest sentence—any sentence can be extended by embedding it in "I think that…" or adding "and…"—the set of possible sentences of any human language is infinite. This was one of Chomsky's central arguments against earlier theories that treated language as a set of habits learned by association: no finite list of habits could account for the infinite creativity of language.

## Limits of performance

Some recursive structures are hard to process, though grammatical. **Center embedding**, in which a clause is embedded in the middle of another, quickly becomes difficult:

- *The rat ate the malt.*
- *The rat the cat killed ate the malt.*
- *The rat the cat the dog chased killed ate the malt.*

The third sentence is grammatical—it has the same meaning as the nursery rhyme's sequence—but almost impossible to understand without pencil and paper. The difficulty is a matter of **performance**, not competence: our working memory struggles to keep track of the incomplete structures. In contrast, embedding at the end of a sentence (*the dog that chased the cat that killed the rat*) is easy to process at any length.

## Recursion and human uniqueness

In an influential paper of 2002, **Marc Hauser**, **Noam Chomsky**, and **W. Tecumseh Fitch** proposed that recursion might be the core property of the human language faculty that distinguishes it from animal communication. As we saw in Lesson I, the linguist **Daniel Everett** challenged this claim, arguing that the Pirahã language of Brazil lacks recursive embedding. Other linguists reanalyzed his data and disputed his conclusions. The debate raised questions about what exactly "recursion" means and whether a capacity can be universal even if not every language uses it in the same way.

## Recursion beyond language

Recursion is found in other human activities: in mathematics, where numbers can be generated without end; in music, where phrases nest within phrases; in our ability to think about others' thoughts about our thoughts ("she knows that I know that she knows"). Whether these capacities share a common source with linguistic recursion is an open question in cognitive science.

> **Pause and consider.** Try to understand *The rat the cat the dog chased killed ate the malt*. Now rewrite it so that it is easy to understand. What did you change?`,
    },
    {
      title: "Clauses Within Clauses",
      body: `## Complex sentences

Many sentences contain more than one **clause**, a unit containing a verb and its arguments. Clauses can be combined in two main ways. In **coordination**, two clauses of equal status are joined by a conjunction: *Mary sang and John played the piano*. In **subordination**, one clause is embedded within another as one of its parts: *Mary said [that John played the piano]*.

## Kinds of subordinate clauses

Subordinate clauses serve different functions:

- **Complement clauses** serve as arguments of a verb, noun, or adjective: *I believe [that she is right]*; *the fact [that he left]*; *glad [that you came]*.
- **Adverbial clauses** modify a whole clause, expressing time, cause, condition, or concession: *[When the rain stopped], we went out*; *[If you study], you will pass*.
- **Relative clauses** modify a noun: *the book [that I read]*; *the woman [who called]*.

## Relative clauses across languages

Languages form relative clauses in strikingly different ways. English places the relative clause after the noun and uses a relative pronoun (*who*, *which*) or *that*, or nothing: *the book (that) I read*. **Japanese** and **Korean**, head-final languages, place the relative clause before the noun, with no relative pronoun: Japanese *watashi-ga yonda hon* "I read book," that is, "the book I read." Some languages use a **resumptive pronoun** in the relative clause: Hebrew *ha-ish she-ra'iti oto* "the man that I saw him," that is, "the man I saw." Others, such as **Bambara** in West Africa, leave the noun inside the clause.

## The accessibility hierarchy

In an influential study of 1977, **Edward Keenan** and **Bernard Comrie** examined relative clauses in about fifty languages and found a striking pattern, which they called the **noun phrase accessibility hierarchy**:

> subject > direct object > indirect object > oblique > possessor > object of comparison

If a language can form relative clauses on a position lower in the hierarchy, it can also form them on all higher positions. Every language can relativize subjects (*the man who left*); some can relativize only subjects, as Malagasy is often described; many can relativize subjects and objects but not possessors without special strategies. English can relativize all the positions, though the lower ones sound awkward: *the man whose car I borrowed*, *the man than whom no one is taller*. The hierarchy also predicts which relative clauses children acquire first and which are easier to process.

## Embedding and thought

The ability to embed clauses allows speakers to report others' speech and thoughts (*she said that…*, *he believes that…*), to express conditions and hypotheses (*if…then*), and to build arguments. Some researchers have argued that mastering complement clauses helps children understand that other people can have false beliefs, an important milestone of social cognition studied in LIN 110.

> **Pause and consider.** Japanese places the relative clause before the noun: "I read book." How does this fit with Japanese being head-final?`,
    },
    {
      title: "Movement and Structure Dependence",
      body: `## Related sentences

Speakers know that certain sentences are systematically related:

- *The dog will chase the cat.* / *Will the dog chase the cat?*
- *Mary bought a book.* / *What did Mary buy?*
- *The cat chased the mouse.* / *The mouse was chased by the cat.*

In each pair, the second sentence seems to be formed from the first by rearranging its parts. In early generative grammar, Chomsky described such relations with **transformations**, rules that convert one structure into another by moving, adding, or deleting constituents. The structure before transformations was called **deep structure**, and the structure after them **surface structure**. Later theories reformulated these ideas, but the notion that some constituents appear in a different position from where they are interpreted, called **movement**, remains central to many approaches.

## Yes-no questions

In English, yes-no questions are formed by moving the auxiliary verb to the front of the sentence: *The dog will chase the cat* becomes *Will the dog chase the cat?* If there is no auxiliary, English inserts *do*: *The dog chased the cat* becomes *Did the dog chase the cat?*

## Structure dependence

How does a child learn which auxiliary to move? Consider a sentence with two auxiliaries:

> The man who is tall is happy.

A simple rule might say: "Move the first auxiliary to the front." This would produce:

> \\*Is the man who tall is happy?

which is ungrammatical. The correct question is:

> Is the man who is tall happy?

The auxiliary that moves is not the first one in the string, but the one in the **main clause**—the one that follows the entire subject noun phrase *the man who is tall*. The rule is **structure-dependent**: it refers to the hierarchical structure of the sentence, not to the linear order of words.

Chomsky argued that children never make errors like \\*Is the man who tall is happy?, even though the simpler linear rule would work for most of the sentences they hear, and even though sentences that would distinguish the two rules are rare in their input. This, he argued, shows that children are innately predisposed to look for structure-dependent rules—a key example of the poverty-of-the-stimulus argument. Critics have questioned how rare the relevant sentences really are, and whether general learning mechanisms could discover structure dependence; the argument remains a focus of debate.

## Wh-questions

Questions with *who*, *what*, *where*, *when*, *why*, and *how* (wh-questions) involve moving the wh-word to the front: *Mary bought a book* corresponds to *What did Mary buy ___?* The wh-word is interpreted in the position of the gap, as the object of *buy*. Wh-movement can cross clause boundaries: *What do you think Mary bought ___?*

## Islands

But wh-movement is not unrestricted. As we saw in Lesson I, *Who did you see Mary with?* is fine, but \\*Who did you see Mary and? is impossible. In his doctoral dissertation of 1967, **John Robert Ross** identified many such restrictions, calling the structures out of which movement is impossible **islands**: one cannot move a constituent out of a coordinate structure (\\*Who did you see Mary and?), out of a relative clause (\\*What did you meet the man who bought?), or out of certain other structures. Children acquire these constraints without instruction.

## Movement across languages

Languages differ in how they form questions. In **Mandarin** and **Japanese**, wh-words typically stay in place: Mandarin *nǐ mǎi le shénme?* "you bought what?" English allows this only in "echo" questions ("You bought *what*?"). In **Polish** and **Bulgarian**, all wh-words in a question can move to the front at once.

> **Pause and consider.** Form a yes-no question from *The girl who is singing is my sister*. Which *is* did you move? How did you know?`,
    },
    {
      title: "Word Order Across Languages",
      body: `## Subject, verb, object

Languages differ in the basic order of the **subject** (S), **verb** (V), and **object** (O) in a simple declarative sentence. English is **SVO**: *The dog (S) chased (V) the cat (O)*. Six orders are logically possible, and all are attested, though with very different frequencies. Surveys of the world's languages, such as the *World Atlas of Language Structures*, find approximately:

- **SOV**, the most common order, found in about 45 percent of languages with a dominant order: Japanese, Korean, Turkish, Hindi, Persian, Latin (in its usual order), Quechua.
- **SVO**, nearly as common, about 40 percent: English, Mandarin, Spanish, French, Swahili, Indonesian.
- **VSO**, much less common, about 7–9 percent: Classical Arabic, Biblical Hebrew, Welsh, Irish, Tagalog (often).
- **VOS**, rarer: Malagasy, some Mayan languages.
- **OVS** and **OSV**, very rare. In 1977, the linguist **Desmond Derbyshire** described **Hixkaryana**, a Carib language of Brazil, as basically OVS, one of the first well-documented cases.

Notice that orders in which the subject precedes the object are far more common than those in which the object precedes the subject.

## Head-initial and head-final

Word order patterns tend to come in packages. In 1963, the linguist **Joseph Greenberg** published a study of thirty languages proposing a set of **universals** of word order. Among them: languages with VSO order almost always have **prepositions** (*in the house*), while languages with SOV order usually have **postpositions** (*the house in*). Japanese, an SOV language, has postpositions: *Tōkyō ni* "Tokyo to," i.e., "to Tokyo."

These correlations can be explained by the idea of **head direction**. In **head-initial** languages like English, heads come before their complements: the verb before its object, the preposition before its noun phrase. In **head-final** languages like Japanese and Turkish, heads come after their complements: the object before the verb, the noun phrase before the postposition. A Japanese sentence is in many ways a mirror image of its English equivalent:

> Taroo-ga Hanako-ni hon-o ageta. (Taro Hanako-to book gave: "Taro gave a book to Hanako.")

## Free word order

Some languages have relatively **free word order**, in which the order of words varies for emphasis or discourse reasons, while grammatical relations are shown by **case endings**. In Latin, *Puella puerum amat*, *Puerum puella amat*, and *Amat puella puerum* all mean "the girl loves the boy," because the endings *-a* (nominative, subject) and *-um* (accusative, object) show who loves whom. Russian, Finnish, and many Australian languages, such as **Warlpiri**, also allow great freedom of order. English, having lost most case endings, relies on word order instead: *The boy loves the girl* and *The girl loves the boy* mean different things.

## Word order and processing

Why do these patterns exist? Some linguists explain them by Universal Grammar, as a single parameter setting (head-initial or head-final) affecting all phrases; others by processing efficiency, since consistent head direction keeps related words close together and makes sentences easier to parse; others by historical change, since languages tend to develop prepositions or postpositions from verbs or nouns in particular positions. The explanations are not mutually exclusive.

> **Pause and consider.** Translate *Taroo-ga Hanako-ni hon-o ageta* word by word into English. Which English word order rules does Japanese reverse?`,
    },
    {
      title: "Agreement, Case, and Ergativity",
      body: `## Showing who did what to whom

Every language must indicate the grammatical relations in a sentence—who did what to whom. Languages use three main means: **word order**, as in English; **case marking** on nouns, as in Latin and Finnish; and **agreement** marking on verbs, as in Swahili and many other languages. Most languages use a combination.

## Agreement

In **agreement**, a word changes its form to match a feature of another word. English verbs agree with their subjects in the present tense, but only in the third person singular: *I walk*, *she walks*. In Spanish, verbs agree with their subjects in person and number in every tense: *hablo* "I speak," *hablas* "you speak," *habla* "he/she speaks," *hablamos* "we speak," and so on. Because the verb shows the subject, Spanish can omit subject pronouns: *Hablo español* "I speak Spanish." Such languages are called **pro-drop** languages; Italian, Portuguese, Greek, and Japanese are others. English is not: \\**Speak Spanish* cannot mean "I speak Spanish."

In many languages, adjectives and articles agree with nouns in gender, number, and case: French *le petit garçon* "the little boy," *la petite fille* "the little girl." In Bantu languages such as Swahili, the noun class prefix appears on adjectives, verbs, and other words: *ki-tabu ki-zuri ki-mefika* "the good book has arrived," with the class prefix *ki-* repeated.

## Case

**Case** marks the role of a noun in the sentence directly, usually with endings. In languages like Latin, German, and Russian, the subject is marked with the **nominative** case and the object with the **accusative**. This is called a **nominative-accusative** system: the subject of an intransitive verb (*The man arrived*) and the subject of a transitive verb (*The man saw the dog*) are marked the same way, and the object differently. English shows a trace of this system in its pronouns: *he arrived*, *he saw him*.

## Ergativity

Many languages organize case differently. In **ergative-absolutive** languages, the subject of an intransitive verb is marked like the **object** of a transitive verb (with the **absolutive** case), while the subject of a transitive verb receives a special case, the **ergative**. In **Basque**, for example:

- *Gizona etorri da.* "The man arrived." (*gizona*, absolutive)
- *Gizonak txakurra ikusi du.* "The man saw the dog." (*gizonak*, ergative; *txakurra*, absolutive)

The man who arrives is marked like the dog that is seen, not like the man who sees. Ergative patterns are found in Basque, Georgian, many Australian languages such as **Dyirbal**, Inuit languages, Mayan languages, Tibetan, and Hindi in some tenses. About a quarter of the world's languages show ergativity in some form.

## What ergativity shows

Ergativity shows that the notion of "subject," which seems natural to speakers of European languages, is not universal in the same form. Languages can group the participants of events in different ways: nominative-accusative languages group the "doer" of intransitive and transitive verbs together; ergative-absolutive languages group the "undergoer" of transitive verbs with the single participant of intransitive verbs. Many languages are **split-ergative**, using one system in some tenses or persons and the other elsewhere.

## The grammar of roles

Linguists distinguish grammatical relations (subject, object) from **semantic roles**: the **agent**, who performs an action; the **patient** or **theme**, which undergoes it; the **experiencer**, who perceives or feels; the **recipient**, who receives; the **instrument**, with which an action is performed. In *The key opened the door*, the subject is an instrument; in *John received a letter*, the subject is a recipient. The mapping between semantic roles and grammatical relations is one of the central topics of syntax and semantics.

> **Pause and consider.** In Basque, the man who arrives and the dog that is seen take the same case. In what sense are they alike?`,
    },
    {
      title: "Pidgins and Creoles",
      body: `## Languages in contact

When speakers of different languages need to communicate, for trade, labor, or other purposes, without a common language, they often develop a **pidgin**: a simplified contact language with a limited vocabulary, usually drawn mostly from one dominant language (called the **lexifier**), and a reduced grammar. Pidgins are no one's native language. They arose in many places during the era of European trade and colonization, especially on plantations where enslaved or indentured laborers from many language backgrounds worked together.

## Creoles

When a pidgin becomes the native language of a new generation of children, it typically expands rapidly into a full language with a complete grammar, called a **creole**. Creoles are full natural languages, as complex and expressive as any other. Examples include **Haitian Creole**, based largely on French vocabulary, spoken by about twelve million people; **Jamaican Creole** (Patois), based on English; **Tok Pisin** in Papua New Guinea, an English-based creole that is one of the country's official languages; and **Papiamentu** in the Dutch Caribbean, based on Portuguese and Spanish.

## Tok Pisin

Tok Pisin (from *talk pidgin*) shows how a language can build a rich vocabulary from limited resources. *Gras* (from *grass*) means "hair"; *gras bilong fes* ("grass belonging to face") means "beard"; *gras bilong ai* ("grass of the eye") means "eyebrow." Its grammar includes features English lacks, such as a distinction between inclusive "we" (*yumi*, "you and I") and exclusive "we" (*mipela*, "we but not you"). The Bible was published in Tok Pisin as *Buk Baibel* in 1989.

## The bioprogram hypothesis

Creoles fascinate linguists because they seem to show how grammar can emerge in a single generation. The linguist **Derek Bickerton**, in *Roots of Language* (1981), studied **Hawaiian Creole English**, which developed among the children of plantation workers from China, Japan, the Philippines, Portugal, and elsewhere in the early twentieth century. He argued that the children created a grammar far richer than the pidgin their parents spoke, and that creoles around the world share grammatical features—such as particles marking tense, mood, and aspect before the verb—that are not found in the languages of their parents. He proposed a **language bioprogram**: an innate default grammar that children fall back on when their input is impoverished. Pinker cites Bickerton's work, along with Nicaraguan Sign Language, as evidence for the language instinct.

## Critics

Bickerton's hypothesis was controversial. Other creolists argued that the features he identified could be traced to the languages of the substrate (the native languages of the workers), to the lexifier language, or to the gradual development of the pidgin over decades, and that the creation of creoles was more gradual than he claimed. The debate continues, but all agree that creoles are full languages, not "broken" versions of European languages, and that their speakers have often suffered from that prejudice.

## Creoles and identity

Many creoles have long been stigmatized as "bad French" or "broken English," and children were punished for speaking them in school. In recent decades, many creole-speaking communities have embraced their languages as expressions of identity, and some, like Haitian Creole, have become official languages used in education, literature, and government.

> **Pause and consider.** Tok Pisin builds *gras bilong fes*, "beard," from limited words. How does this compare with English compounds like *eyebrow*?`,
    },
    {
      title: "Universal Grammar and Its Critics",
      body: `## Principles and parameters

How can children acquire the syntax of any human language, despite the great differences among languages? In the early 1980s, Chomsky proposed the **principles and parameters** approach. On this view, **Universal Grammar** consists of **principles** common to all languages—such as structure dependence—and **parameters**, a limited set of options, like switches, whose settings vary from language to language. The **head parameter** determines whether heads precede or follow their complements; the **pro-drop parameter** determines whether subject pronouns can be omitted. A child acquiring a language does not need to learn its grammar from scratch; he or she needs only to set the parameters on the basis of the sentences heard. Setting one parameter, like the head parameter, could account for many word order facts at once.

## Evidence

Supporters of this approach point to the speed and uniformity of child language acquisition; to children's avoidance of errors that a general learner might make, such as structure-independent questions; to the creation of grammar by children in situations like Nicaraguan Sign Language and **creole** languages; and to the universals of word order and structure discovered by typologists.

## The Minimalist Program

In the 1990s, Chomsky proposed the **Minimalist Program**, which sought to reduce Universal Grammar to as few principles as possible, perhaps to a single operation, called **Merge**, which combines two elements into a new unit. Recursion would then follow from the repeated application of Merge. On this view, the innate, language-specific endowment might be very small, with much of the complexity of grammar arising from interactions with other cognitive systems.

## Critics

Many linguists reject the idea of a rich innate Universal Grammar. **Construction grammar**, developed by linguists such as **Adele Goldberg** in *Constructions* (1995), holds that grammar consists of learned pairings of form and meaning, called **constructions**, ranging from words to idioms to abstract sentence patterns, such as the ditransitive construction (*She baked him a cake*), which carries the meaning of transfer even with verbs like *bake* that do not inherently involve it. **Usage-based** approaches, developed by **Michael Tomasello** and others, argue that children build grammar gradually from the specific utterances they hear, generalizing from item-specific patterns ("more juice," "more cookie") to abstract categories, using general cognitive abilities and their understanding of others' intentions.

## Typological challenges

Typologists have also challenged claims of universality. In a widely discussed article, "The Myth of Language Universals" (2009), **Nicholas Evans** and **Stephen Levinson** argued that the diversity of the world's languages is far greater than generative linguistics had assumed, and that few if any proposed universals hold without exception. Defenders of Universal Grammar replied that apparent counterexamples often dissolve under closer analysis, and that universals can be abstract.

## Where the debate stands

The debate between nativist and usage-based approaches is one of the most important in the study of language, and it is not settled. Both sides agree that children acquire language with remarkable speed and that languages share deep similarities; they disagree about how much of this is due to a specifically linguistic endowment and how much to general human abilities and the pressures of communication. As students of linguistics, you should understand the arguments on both sides.

> **Pause and consider.** *She baked him a cake* implies that she intended him to have it, though *bake* does not mean "give." Where does that meaning come from?`,
    },
    {
      title: "Processing Sentences: Minds and Machines",
      body: `## Understanding in real time

When we listen to speech or read, we build syntactic structures **incrementally**, word by word, without waiting for the end of the sentence. **Psycholinguists** study how this happens, using methods such as measuring reading times and eye movements, recording brain activity, and observing errors.

## Garden-path sentences

Incremental processing sometimes leads us astray. Consider the famous example, discussed by the psychologist **Thomas Bever** in 1970:

> The horse raced past the barn fell.

Most readers are baffled. They interpret *The horse raced past the barn* as a complete sentence, with *raced* as the main verb, and then cannot fit *fell* in. In fact, the sentence is grammatical: it means "The horse [that was] raced past the barn fell," with *raced past the barn* as a reduced relative clause, like "The horse ridden past the barn fell." Such sentences are called **garden-path sentences**, because the reader is "led down the garden path" to a wrong analysis and must back up and reanalyze. Other examples include *The old man the boat* (where *old* is a noun and *man* a verb: "the old people crew the boat") and *The complex houses married and single soldiers and their families*.

## What garden paths show

Garden-path sentences show that the human parser commits to a structure early, often preferring the simplest analysis, rather than keeping all possibilities open. Researchers debate whether these preferences are driven by structural principles or by the frequency of structures and the meanings of words; the evidence suggests that both play a role. Context also matters: if a story first mentions two horses, one of which was raced past a barn, readers are less likely to be misled.

## Agreement attraction

Another window into processing comes from errors of **agreement attraction**: speakers sometimes produce sentences like *The key to the cabinets are on the table*, in which the verb agrees with the nearer plural noun *cabinets* rather than the singular head *key*. Such errors, studied by **Kathryn Bock** and others, are more common in some structures than others, revealing how speakers build and maintain syntactic structure during production.

## Machines and syntax

Building computer systems that process language has long been a goal of artificial intelligence. Early systems used explicit grammars written by linguists, which proved brittle in the face of the variety and ambiguity of real language. From the 1990s, **statistical** methods learned patterns from large corpora of text annotated with syntactic structures. In the 2010s and 2020s, **neural network** models trained on enormous amounts of text achieved remarkable fluency in producing and responding to language, without being given explicit grammatical rules.

## What machines tell us about language

These developments have reopened old questions. Some researchers argue that the success of large language models shows that grammar can be learned from exposure to text without an innate Universal Grammar; others reply that such models are trained on vastly more language than any child hears, and that their success says little about how children learn. Researchers have tested whether these models respect structure dependence, island constraints, and agreement—with mixed and much-debated results. Whatever their implications, such systems have made the study of syntax more practically important than ever.

> **Pause and consider.** Read *The old man the boat* again. What did you first think it meant, and what does it actually mean? What made the first reading tempting?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each exercise, then write your answers in your notebook.

## 1. Chomsky's examples (1957)

> Colorless green ideas sleep furiously. / Furiously sleep ideas green colorless.

**Questions**

1. Why is the first grammatical and the second not?
2. What did Chomsky conclude about the relation between grammar and meaning?

## 2. Constituency

> The old man in the hat bought a newspaper.

**Questions**

1. Use two tests to show that *the old man in the hat* is a constituent.
2. Write the sentence in labeled brackets.

## 3. Ambiguity

> I saw the man with the telescope.

**Questions**

1. Give the two meanings.
2. Draw (or bracket) the two structures, and explain how they differ.

## 4. Structure dependence

> The man who is tall is happy. → Is the man who is tall happy? / \\*Is the man who tall is happy?

**Questions**

1. Why does the simple rule "move the first auxiliary" fail?
2. How has this example been used to argue for Universal Grammar, and how have critics responded?

## Drawing the threads together

In a paragraph, explain why linguists say that sentences have hierarchical structure, not just linear order, using at least three of the exercises.`,
    },
  ],
  readings: [
    { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "Read the chapter on syntax." },
    { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957", note: "Read chapters 1–2." },
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapter 4, \"How Language Works,\" and chapter 7, \"Talking Heads.\"" },
  ],
  media: [
    { kind: "website", title: "World Atlas of Language Structures Online, Feature 81A: Order of Subject, Object and Verb", author: "Matthew S. Dryer", publisher: "WALS Online", url: "https://wals.info/feature/81A", note: "Explore the map of word orders." },
    { kind: "book", title: "Constructing a Language: A Usage-Based Theory of Language Acquisition", author: "Michael Tomasello", publisher: "Harvard University Press", year: "2003", note: "Read chapter 1, for the usage-based alternative." },
  ],
  questions: [
    {
      prompt: "What did Chomsky's sentence \"Colorless green ideas sleep furiously\" show?",
      choices: [
        "That all sentences must be meaningful",
        "That grammaticality is independent of meaning",
        "That English is illogical",
        "That ideas can sleep",
      ],
      answer: 1,
      explanation: "Speakers judge it grammatical though it is nonsensical.",
    },
    {
      prompt: "Which of the following is a test for constituency?",
      choices: [
        "Counting syllables",
        "Replacing the string with a pronoun",
        "Spelling the words",
        "Translating the sentence",
      ],
      answer: 1,
      explanation: "Other tests include movement, coordination, and answering questions.",
    },
    {
      prompt: "What is the head of a phrase?",
      choices: [
        "The first word",
        "The word that determines the category and basic properties of the phrase",
        "The longest word",
        "The subject",
      ],
      answer: 1,
      explanation: "A noun heads a noun phrase, a verb a verb phrase.",
    },
    {
      prompt: "Why is \"I saw the man with the telescope\" ambiguous?",
      choices: [
        "Because telescope has two meanings",
        "Because the prepositional phrase can attach to the verb phrase or to the noun phrase",
        "Because of its intonation",
        "Because saw is ambiguous",
      ],
      answer: 1,
      explanation: "This is structural ambiguity.",
    },
    {
      prompt: "What is recursion in syntax?",
      choices: [
        "Repeating words",
        "Embedding a constituent of one type inside another of the same type",
        "Changing word order",
        "Using pronouns",
      ],
      answer: 1,
      explanation: "It allows a finite grammar to generate infinitely many sentences.",
    },
    {
      prompt: "Why is \"The rat the cat the dog chased killed ate the malt\" hard to understand?",
      choices: [
        "It is ungrammatical",
        "Center embedding overloads working memory, a limit of performance rather than competence",
        "It has no verb",
        "It is ambiguous",
      ],
      answer: 1,
      explanation: "The same meaning is easy with right-branching structure.",
    },
    {
      prompt: "What does \"Is the man who is tall happy?\" show about English question formation?",
      choices: [
        "That the first auxiliary always moves",
        "That the rule is structure-dependent: the auxiliary of the main clause moves",
        "That English has no questions",
        "That questions are random",
      ],
      answer: 1,
      explanation: "Chomsky used it in the poverty-of-the-stimulus argument.",
    },
    {
      prompt: "Which is the most common basic word order among the world's languages?",
      choices: ["VSO", "SOV", "OVS", "VOS"],
      answer: 1,
      explanation: "SVO is nearly as common.",
    },
    {
      prompt: "In an ergative language such as Basque, the subject of an intransitive verb is marked like what?",
      choices: [
        "The subject of a transitive verb",
        "The object of a transitive verb",
        "A preposition",
        "An adjective",
      ],
      answer: 1,
      explanation: "Both take the absolutive case.",
    },
    {
      prompt: "What is a garden-path sentence?",
      choices: [
        "A sentence about gardens",
        "A grammatical sentence that leads readers to an initial wrong analysis",
        "An ungrammatical sentence",
        "A very long sentence",
      ],
      answer: 1,
      explanation: "\"The horse raced past the barn fell.\"",
    },
  ],
  reflection:
    "Chomsky argued that children's knowledge of syntax, such as structure dependence, shows an innate Universal Grammar; usage-based linguists argue that children learn grammar from what they hear. In 500–800 words, explain both positions, using at least two examples from this lesson, and say which you find more persuasive.",
};
