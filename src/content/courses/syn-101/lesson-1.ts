import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "What Syntax Studies",
  summary:
    "What syntax is; the rules every speaker knows but no one was taught; descriptive and prescriptive grammar; grammaticality judgments, garden paths, and center embedding; competence and performance; a short history of grammar from Pāṇini to Port-Royal and the structuralists; Chomsky's Syntactic Structures; parts of speech and how to identify them; categories across languages; clauses and sentence types; grammatical relations and ergativity; and the goals of syntactic theory.",
  pages: [
    {
      title: "What Is Syntax?",
      body: `## Putting words together

**Syntax** is the study of how words combine to form phrases and sentences. The word comes from Greek *sýntaxis*, "arrangement," from *syn-* "together" and *táxis* "order." Every language has syntax: rules that determine which arrangements of words are possible, how they are structured, and how their structure contributes to meaning.

Consider these English sentences:

- *The dog chased the cat.*
- *The cat chased the dog.*
- \\**Chased the dog the cat.*

The first two contain the same words but mean different things: the order of words tells us who chased whom. The third is not an English sentence at all; the asterisk, as we will see, marks it as ungrammatical. Syntax explains such facts.

## More than word order

Syntax is not only about word order. It concerns the **structure** of sentences: how words group into larger units, called **constituents** or **phrases**, and how these units relate to one another. The sentence *I saw the man with the telescope* is **ambiguous**: it can mean that I used a telescope to see the man, or that the man had a telescope. The words and their order are the same; what differs is how they are grouped. Syntax must explain how one string of words can have two structures.

## Syntax and other parts of grammar

As we saw in LIN 101, linguists divide the study of grammar into several parts:

- **phonetics** and **phonology** study sounds (PHO 101, PHO 110);
- **morphology** studies the structure of words;
- **syntax** studies the structure of phrases and sentences;
- **semantics** studies meaning (SYN 110);
- **pragmatics** studies meaning in context.

Syntax interacts with all of these: with morphology, since endings often mark syntactic relations; with semantics, since structure contributes to meaning; and with phonology, since intonation often reflects structure.

## Our guides

This course follows **Andrew Carnie**, *Syntax: A Generative Introduction* (2002; 4th edition, 2021), a widely used textbook that introduces syntax in the **generative** tradition founded by **Noam Chomsky**, and Chomsky's own short and revolutionary book ***Syntactic Structures*** (1957), which launched that tradition. We will also note alternative approaches and their critiques.

## The plan

**Lesson I** asks what syntax studies, what speakers know, and how syntacticians investigate it. **Lesson II** studies **constituency** and **phrase structure**: how words group into phrases, how to test for groupings, and how to draw tree diagrams. **Lesson III** studies **X-bar theory** and the structure of phrases and clauses. **Lesson IV** studies **movement**: questions, passives, and other constructions in which words seem to appear away from their usual positions. **Lesson V** studies **binding**, **case**, and **thematic roles**, and surveys the theories and universals of syntax.

> **Pause and consider.** Explain the two meanings of *I saw the man with the telescope*. Which words group together in each?`,
    },
    {
      title: "Rules Nobody Taught You",
      body: `## Tacit knowledge

Every native speaker of English knows thousands of syntactic rules, though almost no one could state them. This knowledge is **tacit** (or implicit): it guides our speech and our judgments without our being aware of it. Some examples will show how much speakers know.

## Questions

To form a yes–no question in English, we move the auxiliary verb to the front:

- *The man is tall.* → *Is the man tall?*

But which auxiliary moves, if there are two?

- *The man who is tall is happy.* → *Is the man who is tall happy?*
- \\**Is the man who tall is happy?*

Every English speaker knows that the second question is impossible, though no one is taught this. The rule is not "move the first auxiliary" but "move the auxiliary of the **main clause**," which requires knowing the **structure** of the sentence: that *who is tall* is a unit inside the subject. This principle, called **structure dependence**, was used by Chomsky as a central example of what children know without being taught, as we saw in LIN 110.

## Coordination and questions

Consider:

- *You saw Mary and John.* → *Who did you see?* (answer: Mary and John)
- *You saw Mary and someone.* → \\**Who did you see Mary and?*

The second question is impossible, though its meaning is clear. English does not allow a question word to be extracted from one part of a coordination. This restriction, the **Coordinate Structure Constraint**, was identified by **John Robert Ross** in his dissertation of 1967.

## Wanna

In casual speech, *want to* is often contracted to *wanna*:

- *Who do you want to see?* → *Who do you wanna see?*

But:

- *Who do you want to see Bill?* → \\**Who do you wanna see Bill?*

The contraction is possible in the first sentence but not the second. Why? In the second, the question word *who* originally belongs between *want* and *to* (as in *You want Kim to see Bill*), so *want* and *to* are not adjacent in the underlying structure. Speakers somehow know this, though nothing in the surface string reveals it.

## Pronouns

Consider:

- *John thinks that he is clever.* (*he* can refer to John)
- *He thinks that John is clever.* (*he* cannot refer to John)

The pronoun can refer to John in the first sentence but not the second. As we will see in Lesson V, this depends on the structural relation between the pronoun and the name.

## What this shows

These examples show that speakers know rules that are:

- **complex**, involving abstract structure;
- **untaught**, since parents and teachers never mention them;
- **shared**, since all native speakers agree on the judgments.

The goal of syntax is to discover and state these rules explicitly, and to explain why they take the form they do.

> **Pause and consider.** Ask several English speakers whether *Who do you wanna see Bill?* sounds acceptable. Do they agree?`,
    },
    {
      title: "Descriptive and Prescriptive Grammar",
      body: `## Two kinds of grammar

The word **grammar** is used in two very different senses:

- **Prescriptive** grammar tells people how they **should** speak or write, according to some standard of correctness. School grammar books, style guides, and usage manuals are prescriptive.
- **Descriptive** grammar describes how people **actually** speak, without judging. Linguists' grammars are descriptive.

As we saw in LIN 101, linguists study language as scientists study any natural phenomenon: they observe and explain, rather than legislate.

## Prescriptive rules

Many familiar prescriptive rules concern syntax:

- **Do not split infinitives**: write *to go boldly*, not *to boldly go*.
- **Do not end a sentence with a preposition**: write *the person to whom I spoke*, not *the person I spoke to*.
- **Do not use double negatives**: write *I don't have any*, not *I don't have none*.
- **Use *whom* for objects**: write *Whom did you see?*, not *Who did you see?*

## Where these rules came from

Many prescriptive rules were formulated by grammarians of the eighteenth century, such as **Robert Lowth**, whose *Short Introduction to English Grammar* (1762) was enormously influential. Some rules were modeled on **Latin**, which was regarded as a perfect language: since Latin infinitives are single words (*amare* "to love"), they cannot be split, and so, some argued, English infinitives should not be split either. As we saw in HIL 101, the rule against double negatives was also established in this period, though Chaucer and Shakespeare used them freely.

## A linguist's view

From a descriptive point of view, these rules describe not how English works but how some people think it should work. Split infinitives have been used by respected writers for centuries; sentence-final prepositions are a natural feature of English syntax, found in Shakespeare ("We are such stuff / As dreams are made on," *The Tempest*); and double negation is grammatical in many dialects of English and in many languages, such as French and Spanish. Lowth himself, in fact, ended a sentence with a preposition while discussing the rule.

## Why prescriptive grammar matters

This does not mean that prescriptive grammar is useless. **Standard** varieties of a language, used in education, law, and publishing, serve real purposes, and people may need to learn them to succeed in certain contexts. But linguists insist on distinguishing the social value of a standard from the claim that other varieties are illogical or wrong. As we will see in SOC 101 and SOC 110, non-standard dialects have their own systematic grammars.

## The linguist's data

For a syntactician, the data are the sentences that native speakers actually produce and accept, including sentences that prescriptive grammars condemn. *Who did you see?* is a perfectly grammatical English sentence in the descriptive sense, used by virtually all speakers. *\\*Saw you who?*, by contrast, is ungrammatical: no native speaker would produce it. The asterisk in syntax marks this second kind of ungrammaticality, not a violation of a style rule.

> **Pause and consider.** Find a prescriptive rule you were taught in school. Is it followed by most speakers? By respected writers?`,
    },
    {
      title: "Grammaticality Judgments",
      body: `## The syntactician's evidence

How do syntacticians find out what speakers know? The most common method is to ask native speakers for **grammaticality judgments** (or acceptability judgments): to judge whether a sentence is a possible sentence of their language. Syntacticians often use their own judgments, as native speakers, supplemented by the judgments of others.

## Notation

Syntacticians use conventional symbols to mark judgments:

- **\\*** (asterisk): the sentence is **ungrammatical**: \\**Is the man who tall is happy?*
- **?** or **??**: the sentence is **marginal** or degraded, but not completely impossible.
- **#**: the sentence is grammatical but **semantically** or **pragmatically** odd.

Note that the asterisk has a different meaning in syntax than in historical linguistics, where, as we saw in HIL 101, it marks a reconstructed form.

## Grammatical but meaningless

Grammaticality is not the same as meaningfulness. Chomsky's most famous example, from *Syntactic Structures* (1957), is:

> *Colorless green ideas sleep furiously.*

The sentence is nonsensical: ideas cannot be green, let alone colorless and green at once, and they do not sleep. Yet English speakers recognize that it is **grammatically** well-formed, unlike the same words in reverse order:

> \\**Furiously sleep ideas green colorless.*

Chomsky used this pair to argue that grammaticality cannot be reduced to meaning or to the probability of a sentence, since neither sentence had ever been uttered before.

## Grammatical but hard

Some grammatical sentences are very hard to understand. **Garden-path** sentences lead the listener down a wrong path:

> *The horse raced past the barn fell.*

Most readers first interpret *raced* as the main verb, and then are stuck at *fell*. The sentence is grammatical, meaning "the horse that was raced past the barn fell," as in *The horse ridden past the barn fell*. The example, discussed by the psychologist **Thomas Bever** in 1970, shows that difficulty in processing is not the same as ungrammaticality.

**Center-embedded** sentences are another example:

> *The rat the cat the dog chased killed ate the malt.*

Each part is grammatical (*the rat ate the malt*; *the cat killed the rat*; *the dog chased the cat*), but embedding them inside each other makes the sentence almost impossible to process. Chomsky argued that such sentences are grammatical but unacceptable because of limits on memory.

## Grammaticality and acceptability

Linguists therefore distinguish **grammaticality**, a property defined by the grammar, from **acceptability**, the judgment speakers actually make, which may be affected by meaning, processing difficulty, and other factors.

## Are judgments reliable?

Critics have questioned whether linguists' own judgments are reliable, since linguists may be influenced by their theories. In response, researchers have tested judgments experimentally with large numbers of naive speakers. In a study published in 2012, **Jon Sprouse** and **Diogo Almeida** tested hundreds of judgments from a widely used syntax textbook and found that the vast majority were confirmed by experimental methods. Judgments remain a valuable source of data, though experimental methods are increasingly used to check them.

> **Pause and consider.** Read *The horse raced past the barn fell* again. At what point did your interpretation break down?`,
    },
    {
      title: "Competence and Performance",
      body: `## Knowing and doing

In *Aspects of the Theory of Syntax* (1965), Chomsky distinguished between:

- **competence**: a speaker's tacit **knowledge** of their language;
- **performance**: the actual **use** of language in concrete situations.

Performance is affected by many factors unrelated to grammatical knowledge: memory limitations, distractions, fatigue, slips of the tongue, false starts, and changes of plan. A transcript of ordinary conversation is full of incomplete sentences and errors, yet the speakers know their language perfectly well. Chomsky argued that linguistic theory should focus primarily on **competence**, the knowledge underlying performance.

## Center embedding again

The center-embedded sentence *The rat the cat the dog chased killed ate the malt* illustrates the distinction. According to Chomsky, the sentence is consistent with the speaker's **competence**: it follows the rules of English. But it exceeds the limits of **performance**: human memory cannot easily keep track of three incomplete clauses at once. The grammar allows it; the processor struggles.

## I-language and E-language

In *Knowledge of Language* (1986), Chomsky reformulated the distinction in terms of:

- **I-language** (internal, individual, intensional): the system of knowledge in an individual's mind;
- **E-language** (external): language as a collection of utterances or a social object.

Chomsky argued that the proper object of linguistic science is I-language, the mental system, rather than E-language, which he regarded as too vague to study scientifically.

## Creativity

A key property of competence is **creativity**: speakers can produce and understand sentences they have never heard before. Most sentences we encounter are new; this sentence, for example, has probably never been written before in exactly this form. Since the number of possible sentences is unlimited, speakers cannot have memorized them. They must have a finite system of rules that can generate an infinite number of sentences.

## Recursion

The source of this infinity is **recursion**: the ability of rules to apply to their own output, embedding structures within structures of the same type. A sentence can contain another sentence: *Mary thinks [that John said [that Sue believes [that it will rain]]]*. A noun phrase can contain another noun phrase: *the cover [of the book [on the table [in the kitchen]]]*. There is no grammatical limit on such embedding, though there are practical limits of performance.

## Criticisms

The competence–performance distinction has been criticized. **Usage-based** linguists, such as **Michael Tomasello** and **Joan Bybee**, whom we met in LIN 110, argue that knowledge of language emerges from **use**, and that the frequency and patterns of actual usage shape grammar. On this view, the separation of competence from performance is artificial. Others argue that the distinction is useful but that performance data, such as corpora of real usage, are valuable evidence about competence. The debate continues, and this course will note it where relevant.

> **Pause and consider.** Write a sentence you are confident no one has ever written before. What does this show about your knowledge of language?`,
    },
    {
      title: "A Short History of Grammar",
      body: `## Ancient grammarians

The study of grammar is ancient. In India, as we saw in HIL 110 and PHO 101, **Pāṇini**'s grammar of Sanskrit, the *Aṣṭādhyāyī* (about the fourth century BCE), described the language with nearly four thousand concise rules, using techniques, such as rules that apply in order and abbreviations for classes of sounds, that anticipate modern formal grammar. Many linguists regard it as one of the greatest intellectual achievements of the ancient world.

In Greece, **Dionysius Thrax** (second century BCE) wrote a short *Art of Grammar*, which defined eight **parts of speech**, a classification that, through Latin grammarians such as **Donatus** and **Priscian**, shaped the teaching of grammar in Europe for two thousand years. The Arab grammarians, beginning with **Sībawayh**, whom we met in PHO 101, developed a sophisticated tradition of syntactic analysis, including a theory of how words govern the case endings of other words.

## Medieval and early modern

In the Middle Ages, a group of philosophers known as the **Modistae** argued that grammar reflects the structure of thought and reality, and so is the same in all languages, differing only in accidental features. In 1660, **Antoine Arnauld** and **Claude Lancelot**, at the abbey of **Port-Royal** near Paris, published the ***Port-Royal Grammar*** (*Grammaire générale et raisonnée*), which sought the universal principles underlying all languages in the structure of human reason. Chomsky later admired this tradition, calling it "Cartesian linguistics," after the philosopher René Descartes.

## School grammar

From the eighteenth century, **school grammar**, influenced by Latin and by prescriptive grammarians such as Lowth, taught English sentences in terms of parts of speech, subjects and predicates, and the diagramming of sentences. The **Reed–Kellogg** system of sentence diagrams, introduced by **Alonzo Reed** and **Brainerd Kellogg** in 1877, was taught in American schools for generations.

## Structuralism

In the twentieth century, American **structuralist** linguists, led by **Leonard Bloomfield**, whom we met in HIL 101, developed rigorous methods for analyzing the structure of languages, especially the unwritten languages of the Americas. They emphasized **distribution**: classifying words and phrases by the environments in which they occur. **Immediate constituent analysis** divided sentences into their parts, step by step. **Zellig Harris**, Chomsky's teacher at the University of Pennsylvania, developed formal methods for analyzing sentence structure, including relations between sentences that he called **transformations**.

## The generative turn

In 1957, Chomsky's *Syntactic Structures* proposed a new goal: not just to describe and classify the sentences of a language, but to construct an explicit **generative grammar**, a system of rules that would generate all and only the grammatical sentences of the language. This shift, often called the **Chomskyan revolution**, transformed linguistics and influenced psychology, philosophy, and computer science. We study it on the next page.

## Continuity

Despite the revolutionary rhetoric, generative grammar drew on its predecessors: on Pāṇini's formal rules, on the traditional parts of speech, on the structuralists' constituent analysis, and on Harris's transformations. As in other sciences, new theories build on old discoveries.

> **Pause and consider.** Why might the Port-Royal grammarians and Chomsky both look for universal principles underlying all languages?`,
    },
    {
      title: "Syntactic Structures",
      body: `## A short book

***Syntactic Structures***, published in 1957 by the Dutch publisher Mouton when Chomsky was twenty-nine, is a slim book of about a hundred pages, based on his lectures to undergraduates at the Massachusetts Institute of Technology. It had an impact out of all proportion to its size.

## The goal

Chomsky defined the goal of linguistic theory in a new way. A grammar of a language should be a **device** that **generates** all the grammatical sentences of the language and none of the ungrammatical ones. It should do this with a **finite** set of rules, while the set of sentences is **infinite**. Such a grammar is called **generative**.

## Three models

Chomsky compared three kinds of grammar:

1. **Finite-state grammars**, which generate sentences word by word, from left to right, like a simple machine moving from state to state. Chomsky showed that such grammars cannot handle the **nested** dependencies of English, such as *if … then* and *either … or*, which can be embedded inside each other indefinitely.
2. **Phrase-structure grammars**, which build sentences from constituents, using rules such as "a Sentence consists of a Noun Phrase followed by a Verb Phrase." These capture constituency and recursion, but, Chomsky argued, are cumbersome for describing relations between sentences, such as actives and passives.
3. **Transformational grammars**, which combine phrase-structure rules with **transformations**, rules that rearrange structures, deriving, for example, passive sentences from structures like those of actives, and questions from structures like those of statements.

## The English auxiliary

A famous section of the book analyzed the English **auxiliary system**: the ordering of *have*, *be*, and modals, and the endings they require (*has been eating*, *will have eaten*). Chomsky proposed a transformation, later called **affix hopping**, which moves each tense or participle ending onto the following verb, explaining the intricate patterns with a few rules. He also explained **do-support**, which we met in HIL 101: when a tense ending is stranded, as in questions and negatives, *do* is inserted to carry it.

## Independence of grammar

Using the sentence *Colorless green ideas sleep furiously*, Chomsky argued that grammar is **independent** of meaning: a sentence can be grammatical without being meaningful. He also argued that grammaticality cannot be defined by statistical probability, since both *Colorless green ideas sleep furiously* and its reverse had zero probability of having been uttered before, yet one is grammatical and the other not.

## Reception

The book was given an enthusiastic review by **Robert Lees** in the journal *Language* in 1957, which helped bring it to wide attention. Two years later, Chomsky's review of B. F. Skinner's *Verbal Behavior*, which we met in LIN 110, extended his challenge to behaviorist psychology. By the 1960s, generative grammar had become the dominant approach in American linguistics.

## Later developments

Chomsky's theory has changed greatly since 1957. As we will see in Lesson V, it was revised in *Aspects of the Theory of Syntax* (1965), then reorganized as the **Principles and Parameters** framework in the 1980s, and simplified again in the **Minimalist Program** from the 1990s. Many of the specific rules of *Syntactic Structures* have been abandoned, but its central goal, an explicit theory of the knowledge that allows speakers to produce and understand an unlimited number of sentences, remains.

> **Pause and consider.** Why could a grammar that generates sentences one word at a time, without structure, not handle *if … then* sentences embedded inside each other?`,
    },
    {
      title: "Parts of Speech",
      body: `## Traditional definitions

School grammar usually defines the **parts of speech** by meaning:

- a **noun** is a person, place, or thing;
- a **verb** is an action;
- an **adjective** describes a noun.

These definitions are a useful starting point but fail in many cases. *Destruction* is a noun but names an action; *be* and *seem* are verbs but do not describe actions; *fire* can be a noun (*the fire*) or a verb (*fire the cannon*). Syntacticians therefore define parts of speech, which they call **syntactic categories** or **lexical categories**, by their **distribution** and **morphology**: where they occur and what forms they take.

## Distributional tests

Some tests for English:

- **Nouns** can follow determiners (*the*, *a*, *this*): *the destruction*; can usually be made plural (*destructions*); and can be modified by adjectives (*total destruction*).
- **Verbs** can carry tense (*destroyed*, *destroys*); can follow modals (*will destroy*); and can take objects (*destroy the city*).
- **Adjectives** can follow *very* (*very happy*); can usually take comparative and superlative forms (*happier*, *happiest*); and can occur between a determiner and a noun (*the happy child*) or after *seem* (*seems happy*).
- **Adverbs** often end in *-ly* and modify verbs, adjectives, or sentences (*quickly*, *very*, *unfortunately*).
- **Prepositions** take noun phrase objects and express relations (*in the house*, *before the war*).

## Jabberwocky

The power of distribution and morphology is shown by **nonsense**. In Lewis Carroll's poem "Jabberwocky," from *Through the Looking-Glass* (1871), we read:

> *'Twas brillig, and the slithy toves*
> *Did gyre and gimble in the wabe.*

We do not know what any of the invented words mean, but we know their categories: *toves* is a plural noun (after *the*, with plural *-s*); *slithy* is an adjective (between *the* and a noun); *gyre* and *gimble* are verbs (after *did*); *wabe* is a noun (after *the*). Speakers identify categories from form and position alone.

## Lexical and functional categories

Syntacticians distinguish:

- **lexical** (or open-class) categories: nouns, verbs, adjectives, and adverbs, which carry most of the content of a sentence and to which new words are constantly added (*selfie*, *google*, *woke*);
- **functional** (or closed-class) categories: determiners (*the*, *a*, *this*), auxiliaries (*will*, *have*, *be*), complementizers (*that*, *if*, *whether*), pronouns, conjunctions, and others, which express grammatical relations and to which new words are rarely added.

Functional categories play a central role in modern syntactic theory, as we will see in Lesson III.

## Fuzzy boundaries

The boundaries between categories are not always sharp. Words like *near* behave partly like adjectives (*nearer*) and partly like prepositions (*near the house*). Gerunds like *singing* in *his singing of the anthem* combine properties of nouns and verbs. Such cases have led some linguists to treat categories as clusters of properties rather than sharply defined classes.

> **Pause and consider.** Identify the part of speech of each word in "The mome raths outgrabe," from the same poem. What clues did you use?`,
    },
    {
      title: "Categories Across Languages",
      body: `## Are categories universal?

Do all languages have the same parts of speech? The traditional categories were developed for Greek and Latin and applied to other European languages. When linguists studied languages from other parts of the world, they found that categories differ considerably.

## Nouns and verbs

Almost all languages distinguish **nouns** and **verbs** in some way. But in some languages the distinction is weak. Linguists working on **Salishan** languages of the Pacific Northwest, such as **Straits Salish**, and on some **Polynesian** languages, such as **Tongan**, have debated whether these languages distinguish nouns from verbs at all, since almost any content word can serve as a predicate or, with a determiner, as an argument. Most specialists now argue that a distinction exists, but that it is drawn differently than in English. The debate shows that categories cannot simply be assumed; they must be established for each language by its own evidence.

## Adjectives

**Adjectives** vary more. In some languages, concepts expressed by adjectives in English are expressed by **verbs**. In **Mandarin Chinese**, words like *gāo* "tall" behave like verbs: *Tā gāo* "He (is) tall," with no separate verb "to be." Such words are often called **stative verbs**. In other languages, such concepts are expressed by **nouns**. **R. M. W. Dixon**, in an influential study, "Where Have All the Adjectives Gone?" (1977), found that languages with small adjective classes tend to include words for **dimension** (big, small), **age** (new, old), **value** (good, bad), and **color**, while concepts such as physical properties and human propensities are more often expressed by verbs or nouns.

## Classifiers

Many languages of East and Southeast Asia, the Americas, and elsewhere have **classifiers**, words used with numerals or demonstratives that classify nouns by shape, animacy, or other properties. In Mandarin, one says *sān běn shū* "three [volume-classifier] book" and *sān zhī bǐ* "three [stick-classifier] pen." Classifiers form a functional category that English lacks, though English has something similar in *three head of cattle* or *two pieces of paper*.

## Other functional categories

Languages also differ in their functional categories. Many languages have no articles (Latin, Russian, Chinese, Japanese); some have articles attached as suffixes (as we saw in HIL 101 with the Balkan languages); some have **evidential** markers, indicating the source of information (whether the speaker saw something, heard it reported, or inferred it), as in Turkish, Quechua, and many languages of the Amazon. Each such category must be described in its own terms.

## Universal tendencies

Despite this diversity, there are **universal tendencies**. All languages have a way to refer to things and a way to predicate properties and events of them, corresponding broadly to nouns and verbs. All languages have pronouns or similar means of reference, ways of forming questions, and ways of negating. Typologists study these tendencies by comparing many languages, as we will see in Lesson V.

## A lesson in method

The study of categories across languages teaches an important lesson: the analyst must not impose the categories of familiar languages on unfamiliar ones. As Bloomfield and the structuralists insisted, each language must be described on its own terms, by the evidence of its own forms and distributions.

> **Pause and consider.** In Mandarin, *Tā gāo* means "He (is) tall." What evidence might show that *gāo* is a verb rather than an adjective?`,
    },
    {
      title: "Ambiguity",
      body: `## One string, two meanings

**Ambiguity**, the possibility of more than one interpretation, is one of the most useful tools for studying syntax. If a sentence has two meanings, and the difference cannot be traced to a single word, then the sentence must have two different **structures**.

## Lexical ambiguity

Some ambiguity comes from **words**. *I went to the bank* is ambiguous because *bank* can mean a financial institution or the side of a river. This is **lexical ambiguity**: the structure is the same in both readings; only the meaning of one word differs.

## Structural ambiguity

Other ambiguity comes from **structure**. In *I saw the man with the telescope*, every word has the same meaning in both readings; what differs is how the words are grouped:

- [I [saw [the man] [with the telescope]]]: the telescope is the instrument of seeing;
- [I [saw [the man [with the telescope]]]]: the telescope belongs to the man.

This is **structural** (or syntactic) ambiguity. Similar examples include:

- *old men and women* (are the women old too?);
- *the shooting of the hunters* (were the hunters shooting, or being shot?);
- *Visiting relatives can be boring* (is it boring to visit relatives, or are relatives who visit boring?).

Chomsky used the last kind of example, *Flying planes can be dangerous*, in *Aspects of the Theory of Syntax* (1965), to argue that grammars must assign more than one structure to a single string.

## Headlines

Newspaper headlines, which omit function words, are a rich source of unintended ambiguity, much loved by linguists and comedians:

- *Squad Helps Dog Bite Victim* (did the squad help a victim of a dog bite, or help a dog bite a victim?);
- *Kids Make Nutritious Snacks* (do they prepare snacks, or are they snacks?).

A well-known joke combines several ambiguities at once: *Time flies like an arrow; fruit flies like a banana.* In the first clause, *flies* is a verb and *like* a preposition; in the second, *fruit flies* is a noun phrase and *like* a verb.

## Why we rarely notice

Ambiguity is everywhere in language, yet we rarely notice it, because **context** usually makes one reading obvious, as we saw with top-down processing in PHO 110. Computers, however, notice it constantly: early computer programs that analyzed English sentences found dozens or even hundreds of possible structures for ordinary sentences, most of which no human would ever consider. Resolving ambiguity has been one of the central challenges for natural language processing.

## Ambiguity as evidence

For syntacticians, ambiguity is evidence. When speakers perceive two readings, they are revealing that their grammar assigns two structures. In Lesson II, we will learn to represent these structures as **tree diagrams**, and to use tests to discover which words form units. Ambiguous sentences will provide some of our clearest examples.

> **Pause and consider.** Explain the two readings of *old men and women* by showing which words group together in each.`,
    },
    {
      title: "Clauses and Sentences",
      body: `## Clauses

A **clause** is a unit containing a **predicate**, usually a verb, and its **arguments**, such as a subject and objects. A **sentence** may consist of one clause or several.

- A **simple sentence** has one clause: *The dog barked.*
- A **compound sentence** joins clauses by coordination: *The dog barked, and the cat ran away.*
- A **complex sentence** contains a clause **embedded** inside another: *I know [that the dog barked].*

## Main and subordinate clauses

In a complex sentence, the **main clause** (or matrix clause) is the highest clause, and the **subordinate** (or embedded) clause is contained within it. Subordinate clauses have several types:

- **complement clauses**, which serve as arguments of a verb or noun: *I think [that it will rain]*; *the fact [that it rained]*;
- **relative clauses**, which modify a noun: *the dog [that barked]*;
- **adverbial clauses**, which modify a clause: *[When it rained], we stayed home.*

Subordinate clauses are often introduced by **complementizers**, such as *that*, *if*, *whether*, and *for*, which mark the beginning of the clause.

## Finite and nonfinite

Clauses can be **finite** or **nonfinite**:

- A **finite** clause has a verb marked for tense and, in English, agreement with the subject: *She **leaves** tomorrow*; *I know that she **left***.
- A **nonfinite** clause has a verb without tense, such as an infinitive (*to leave*), a gerund or present participle (*leaving*), or a past participle (*left*): *I want [her to leave]*; *[Leaving early], she missed the speech.*

Nonfinite clauses often lack an overt subject: in *I want to leave*, the understood subject of *leave* is *I*. As we will see in Lesson V, syntacticians have proposed various analyses of such understood subjects.

## Sentence types

Sentences also differ in their **type**, associated with their typical use:

- **declaratives**, typically used for statements: *You are leaving.*
- **interrogatives**, typically used for questions: *Are you leaving?* *Where are you going?*
- **imperatives**, typically used for commands: *Leave!*
- **exclamatives**, typically used for exclamations: *What a fool I was!*

These types differ in their syntax: interrogatives in English involve auxiliary inversion and question words; imperatives often lack a subject. But the relation between type and use is not fixed: *Can you pass the salt?* is an interrogative used as a request, a topic for pragmatics.

## Recursion in clauses

Clauses can be embedded within clauses without limit, as we saw with recursion: *She said [that he thought [that they knew [that ...]]]*. This **clausal recursion** is one of the clearest illustrations of the creative power of syntax.

## Clauses in other languages

Languages differ in how they mark clause types and subordination. Some, like English, use complementizers and word order; others use special verb forms. Japanese places subordinate clauses before the nouns or verbs they modify, with markers at the end of the clause, in accordance with its general head-final order, which we will study in Lesson III.

> **Pause and consider.** Identify the main and subordinate clauses in *When the rain stopped, the children who had been waiting ran outside.*`,
    },
    {
      title: "Grammatical Relations",
      body: `## Subjects and objects

Within a clause, noun phrases bear **grammatical relations** to the verb: **subject**, **direct object**, **indirect object**, and others. In *Mary gave John a book*, *Mary* is the subject, *a book* the direct object, and *John* the indirect object.

## Identifying the subject

In English, the subject can be identified by several properties:

- **position**: it usually comes before the verb in declaratives;
- **agreement**: the verb agrees with it in person and number (*She walks*, *They walk*);
- **case**: subject pronouns take the nominative form (*I*, *he*, *she*, *we*, *they*), as we saw in HIL 110;
- **inversion**: in yes–no questions, the auxiliary moves before the subject (*Is she leaving?*);
- **tag questions**: the pronoun in a tag refers to the subject (*Mary is leaving, isn't **she**?*).

## Subject and agent

Grammatical relations are not the same as meaning. The **subject** is often the **agent**, the doer of an action, but not always. In *The window broke*, the subject is the thing affected; in *John received a letter*, the subject is the recipient; in the passive *The cat was chased by the dog*, the subject is the one chased. As we will see in Lesson V, syntacticians distinguish grammatical relations from **thematic roles** such as agent and patient.

## Ergativity

English, like most European languages, treats the subject of an intransitive verb (*The dog ran*) and the subject of a transitive verb (*The dog chased the cat*) alike: both are nominative and come before the verb. This pattern is called **nominative–accusative** alignment.

But many languages use a different pattern, called **ergative–absolutive** alignment. In such languages, the subject of an intransitive verb is marked like the **object** of a transitive verb, in a case called the **absolutive**, while the subject of a transitive verb has a different case, the **ergative**. **Basque**, which we met in HIL 110, is ergative: *gizona etorri da* "the man came" has *gizona* (absolutive), while *gizonak ogia jan du* "the man ate the bread" has *gizonak* (ergative, with *-k*). Ergative patterns are also found in many Australian languages, such as **Dyirbal**, studied by R. M. W. Dixon; in Mayan languages; in Georgian; in Tibetan; in Inuit languages; and in Hindi in the past tense.

## Split ergativity

Many ergative languages are ergative only in part, a phenomenon called **split ergativity**. In **Hindi**, as we noted, ergative marking appears only in the perfective aspect. In many Australian languages, pronouns follow a nominative–accusative pattern while nouns follow an ergative one. These splits often follow principled lines, studied by typologists such as Dixon and **Michael Silverstein**.

## Why it matters

Ergativity shows that the notion of "subject," so natural to speakers of European languages, is not universal in a simple form. Different languages group arguments differently, and syntactic theory must account for this variation. It also reminds us, as we saw with categories, not to impose familiar patterns on unfamiliar languages.

> **Pause and consider.** In *The window broke* and *John broke the window*, is *the window* the subject in both? Is it the same thematic role in both?`,
    },
    {
      title: "The Goals of Syntactic Theory",
      body: `## Levels of adequacy

In *Aspects of the Theory of Syntax* (1965), Chomsky distinguished three levels at which a grammar or a theory might succeed:

- **Observational adequacy**: the grammar correctly lists or generates the sentences of the language that have been observed.
- **Descriptive adequacy**: the grammar correctly captures the knowledge of native speakers, including their judgments about sentences never observed, such as ambiguities, impossible sentences, and relations between sentences.
- **Explanatory adequacy**: the theory explains how a child could **acquire** such a grammar from the limited data available. A theory achieves explanatory adequacy if it can select, from the data, the correct grammar of the language.

## Acquisition as the central problem

For Chomsky, explanatory adequacy, the problem of **acquisition**, was the central goal. As we saw in LIN 110, children acquire the complex grammar of their language quickly, without explicit instruction, from input that, Chomsky argued, is insufficient to determine the grammar: the **poverty of the stimulus** argument. Structure dependence, which we saw at the beginning of this lesson, is a classic example: children never hear the relevant evidence but never make the errors that a structure-independent rule would produce.

Chomsky concluded that children must have innate knowledge of the general principles of grammar, which he called **Universal Grammar** (UG). The task of syntactic theory, on this view, is to discover the principles of UG and the ways in which languages can vary within them.

## Beyond explanatory adequacy

In the **Minimalist Program**, from the 1990s, Chomsky added a further question: **why** is Universal Grammar the way it is? Could its properties be explained by more general principles, such as computational efficiency or the requirements of the systems of sound and meaning with which syntax interacts? This goal is sometimes called going "beyond explanatory adequacy."

## Alternative goals

Not all linguists share Chomsky's goals. **Functionalist** linguists seek to explain syntactic patterns in terms of their **communicative functions**: why languages place given information before new information, for example, or why frequent constructions become grammaticalized, as we saw in HIL 101. **Typologists** seek to discover the range of variation among languages and the universals that constrain it, often explaining them in terms of processing and communication rather than innate knowledge. **Usage-based** linguists, as we saw in LIN 110, argue that grammar emerges from experience with language. Each approach has made important discoveries.

## What all agree on

Despite their differences, nearly all syntacticians agree that:

- sentences have **hierarchical structure**, not just linear order;
- speakers know rules that go far beyond what they are explicitly taught;
- languages vary in their syntax, but within limits;
- syntax interacts with meaning, sound, and use.

This course focuses on the generative tradition, as presented by Carnie, because it has developed the most detailed tools for analyzing structure. But we will note the insights of other approaches along the way, and Lesson V surveys them.

> **Pause and consider.** Why might a theory that correctly describes adult grammars still fail to explain how children acquire them?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Structure dependence

> *The man who is tall is happy.* → *Is the man who is tall happy?* / \\**Is the man who tall is happy?*

**Questions**

1. State the rule for forming the question.
2. Why must the rule refer to structure, not just word order?

## 2. Colorless green ideas

> *Colorless green ideas sleep furiously.* / \\**Furiously sleep ideas green colorless.* (Chomsky, *Syntactic Structures*, 1957)

**Questions**

1. What did Chomsky use this pair to show?
2. How does grammaticality differ from meaningfulness?

## 3. Jabberwocky

> *'Twas brillig, and the slithy toves / Did gyre and gimble in the wabe.* (Lewis Carroll, 1871)

**Questions**

1. Identify the category of each invented word.
2. What tests did you use?

## 4. Ergativity

> Basque *gizona etorri da* "the man came"; *gizonak ogia jan du* "the man ate the bread"

**Questions**

1. How is "the man" marked in each sentence?
2. How does this differ from English?

## Drawing the threads together

In a paragraph, explain what syntax studies and what speakers know about it, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "2002; 4th ed., 2021", note: "Read chapters 1 and 2, on generative grammar and parts of speech." },
    { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957", note: "Read chapters 1–3, including the discussion of grammaticality and finite-state grammars." },
    { kind: "book", title: "Through the Looking-Glass, and What Alice Found There", author: "Lewis Carroll", publisher: "Macmillan", year: "1871", note: "In the public domain. Read \"Jabberwocky\" and Humpty Dumpty's explanation of it in chapter 6." },
  ],
  media: [
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapter 4, \"How Language Works,\" and chapter 12, on prescriptive grammar." },
    { kind: "book", title: "Assessing the Reliability of Textbook Data in Syntax: Adger's Core Syntax", author: "Jon Sprouse and Diogo Almeida", publisher: "Journal of Linguistics 48", year: "2012", note: "Read the introduction and conclusions." },
  ],
  questions: [
    {
      prompt: "What does syntax study?",
      choices: [
        "The sounds of language",
        "How words combine into phrases and sentences, and the structure of those combinations",
        "The meaning of words only",
        "The history of words",
      ],
      answer: 1,
      explanation: "From Greek sýntaxis, \"arrangement.\"",
    },
    {
      prompt: "What does structure dependence mean?",
      choices: [
        "Rules refer to the linear order of words",
        "Grammatical rules refer to hierarchical structure, such as the main clause, not just word order",
        "All sentences are short",
        "Structure depends on meaning",
      ],
      answer: 1,
      explanation: "As in forming questions from sentences with relative clauses.",
    },
    {
      prompt: "What is the difference between prescriptive and descriptive grammar?",
      choices: [
        "There is none",
        "Prescriptive grammar says how people should speak; descriptive grammar describes how they do",
        "Descriptive grammar is for schools",
        "Prescriptive grammar is scientific",
      ],
      answer: 1,
      explanation: "Linguists' grammars are descriptive.",
    },
    {
      prompt: "In syntax, what does an asterisk before a sentence mean?",
      choices: [
        "It is reconstructed",
        "It is ungrammatical",
        "It is a question",
        "It is a quotation",
      ],
      answer: 1,
      explanation: "In historical linguistics it marks reconstructed forms.",
    },
    {
      prompt: "What does \"The horse raced past the barn fell\" illustrate?",
      choices: [
        "An ungrammatical sentence",
        "A garden-path sentence: grammatical but hard to process",
        "A center-embedded sentence",
        "A prescriptive error",
      ],
      answer: 1,
      explanation: "It means \"the horse that was raced past the barn fell.\"",
    },
    {
      prompt: "What is competence, in Chomsky's sense?",
      choices: [
        "The ability to write well",
        "A speaker's tacit knowledge of their language",
        "Actual speech",
        "Knowledge of prescriptive rules",
      ],
      answer: 1,
      explanation: "Performance is the use of that knowledge.",
    },
    {
      prompt: "What is recursion?",
      choices: [
        "Repetition of words",
        "The embedding of structures within structures of the same type, allowing infinite sentences",
        "A type of question",
        "A sound change",
      ],
      answer: 1,
      explanation: "As in clauses within clauses.",
    },
    {
      prompt: "How do syntacticians identify parts of speech?",
      choices: [
        "By meaning alone",
        "By distribution and morphology",
        "By spelling",
        "By length",
      ],
      answer: 1,
      explanation: "As in \"Jabberwocky.\"",
    },
    {
      prompt: "In an ergative–absolutive language, how is the subject of an intransitive verb marked?",
      choices: [
        "Like the subject of a transitive verb",
        "Like the object of a transitive verb",
        "It is never marked",
        "Like an indirect object",
      ],
      answer: 1,
      explanation: "In the absolutive case, as in Basque.",
    },
    {
      prompt: "What is explanatory adequacy?",
      choices: [
        "Listing observed sentences",
        "Capturing speakers' judgments",
        "Explaining how a child could acquire the grammar from the available data",
        "Explaining sentences in prose",
      ],
      answer: 2,
      explanation: "Chomsky, Aspects of the Theory of Syntax (1965).",
    },
  ],
  reflection:
    "Every speaker knows a grammar that no one taught them. In 500–800 words, describe three syntactic rules you know but were never taught, using examples from this lesson or your own, and reflect on the difference between the grammar linguists study and the grammar taught in school.",
};
