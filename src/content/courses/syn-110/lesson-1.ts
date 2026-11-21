import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "Meaning and Its Study",
  summary:
    "What semantics studies; the many meanings of \"meaning\"; Saussure's sign and Peirce's icons, indexes, and symbols; Frege's sense and reference; Russell, Strawson, Donnellan, and Kripke on referring; utterances, sentences, and propositions; semantics and pragmatics; compositionality and its limits; meanings as concepts; meaning across cultures and Wierzbicka's semantic primes; meaning in the brain; and ambiguity and vagueness.",
  pages: [
    {
      title: "What Semantics Studies",
      body: `## The study of meaning

**Semantics** is the study of **meaning** in language: the meanings of words, of phrases and sentences, and of the relations among them. The term was introduced into modern linguistics by the French linguist **Michel Bréal**, whose *Essai de sémantique* (1897) studied how word meanings change over time, a topic we met in HIL 101.

Semantics asks questions such as:

- What do words mean, and how are their meanings related?
- How do the meanings of words combine to give the meanings of sentences?
- What does it mean for a sentence to be true?
- How do sentences relate to one another in meaning, so that one follows from another or contradicts it?
- How do languages differ in the meanings they express?

## Semantics and its neighbors

Semantics borders several other fields:

- **Syntax**, which we studied in SYN 101, gives sentences the structures that semantics interprets.
- **Pragmatics**, which we met in LIN 101, studies meaning in context: what speakers mean by their utterances, beyond the literal meaning of their words.
- **Philosophy of language**, from Frege and Russell to the present, has investigated reference, truth, and meaning, and many of the central ideas of semantics come from philosophers.
- **Psychology** and **cognitive science** study how meanings are represented in the mind and learned by children.
- **Logic** provides tools for representing meanings precisely.

## Our guide

This course follows **John I. Saeed**, *Semantics* (1997; 4th edition, 2016), a widely used introduction that surveys the main approaches to meaning, from the study of word meaning and reference to formal semantics, cognitive semantics, and pragmatics. Saeed presents competing approaches fairly, and we will do the same.

## The plan

**Lesson I** asks what meaning is, introduces the classic distinctions between sense and reference, sentence and utterance, and semantics and pragmatics, and considers meaning in culture and the brain. **Lesson II** studies **word meaning**: lexical relations, components, prototypes, and semantic fields. **Lesson III** studies **sentence meaning** and **truth**: entailment, presupposition, logic, quantifiers, and formal semantics. **Lesson IV** studies how languages express **events, time, and participants**: thematic roles, tense, aspect, modality, and motion. **Lesson V** studies **meaning in use**: speech acts, implicature, relevance, metaphor, and the meanings of words in computers.

## A connection to LIN 101

Students who took LIN 101 met many of these topics briefly in its lesson on meaning and use. This course explores them in greater depth, with more attention to the methods and debates of semantic research.

> **Pause and consider.** Think of a word whose meaning you find hard to define, such as *game*, *love*, or *fair*. Why is it hard?`,
    },
    {
      title: "The Meaning of \"Meaning\"",
      body: `## A slippery word

The word *meaning* itself has many meanings. Consider:

- *What is the meaning of "ubiquitous"?* (the definition of a word)
- *I didn't mean to hurt you.* (intention)
- *Those clouds mean rain.* (natural sign or evidence)
- *Her friendship means a lot to me.* (importance)
- *What is the meaning of life?* (purpose)

Semantics is concerned mainly with the first kind of meaning, **linguistic meaning**, though, as we will see, it is closely connected with the second, the speaker's **intention**.

## Natural and non-natural meaning

In a famous paper, "Meaning" (1957), the philosopher **H. P. Grice**, whom we met in LIN 101, distinguished two kinds:

- **Natural meaning**: *Those spots mean measles*. Here, "mean" indicates a natural connection: the spots are a sign of the disease, whether or not anyone intends them to be.
- **Non-natural meaning**: *Those three rings on the bell mean that the bus is full*. Here, the meaning depends on a **convention** and on someone's **intention** to communicate.

Linguistic meaning is a kind of non-natural meaning. Grice argued that it rests ultimately on speakers' intentions: for a speaker to mean something by an utterance is to intend the hearer to recognize a certain message, by recognizing the speaker's intention.

## The semiotic triangle

In *The Meaning of Meaning* (1923), the British scholars **C. K. Ogden** and **I. A. Richards** proposed an influential diagram, the **semiotic triangle**. At its three corners are:

- the **symbol**, the word (such as *dog*);
- the **thought** or **reference**, the concept in the mind;
- the **referent**, the thing in the world (a particular dog, or dogs in general).

The symbol is connected to the thought, and the thought to the referent; but the connection between the symbol and the referent is **indirect**, passing through the mind. A word does not attach directly to the world; it does so through the concepts of the people who use it.

## Two traditions

Ogden and Richards's triangle anticipates a division between two major traditions in semantics:

- **Referential** (or denotational) theories focus on the relation between language and the **world**: what words refer to and what makes sentences true. This tradition, rooted in the work of philosophers such as **Frege** and **Russell**, developed into **formal semantics**, which we study in Lesson III.
- **Representational** (or mentalist) theories focus on the relation between language and the **mind**: the concepts that words express. This tradition developed into **cognitive semantics**, which we study in Lessons II and V.

Saeed argues that both are needed: language connects minds to the world, and a full theory of meaning must account for both relations.

## Meaning and use

A third approach, associated with the later philosophy of **Ludwig Wittgenstein**, especially his *Philosophical Investigations* (1953), holds that the meaning of a word is, in many cases, its **use** in the language. This view emphasizes the social, practical nature of meaning, and influenced pragmatics and the study of language in context.

> **Pause and consider.** In which sense of "mean" is the sentence *Those footprints mean that someone was here*?`,
    },
    {
      title: "Signs: Saussure and Peirce",
      body: `## The linguistic sign

The Swiss linguist **Ferdinand de Saussure**, whom we met in HIL 101 and HIL 110, analyzed the word as a **linguistic sign**, in lectures delivered at Geneva between 1907 and 1911 and published by his students as the *Course in General Linguistics* (1916). A sign, he argued, has two inseparable sides:

- the **signifier** (*signifiant*), the sound pattern of the word;
- the **signified** (*signifié*), the concept it expresses.

Saussure compared the sign to a sheet of paper: one cannot cut one side without cutting the other.

## Arbitrariness

Saussure's most famous principle is the **arbitrariness** of the sign: the connection between a signifier and its signified is, in most cases, **conventional**, not natural. There is nothing about the sound [dɔg] that resembles a dog; the same animal is called *Hund* in German, *chien* in French, *perro* in Spanish, and *inu* in Japanese. As we saw in LIN 101, arbitrariness is one of the design features of human language.

## Value

Saussure also argued that the meaning of a sign depends on its **relations** to other signs in the same language, which he called its **value**. The French word *mouton* covers both the animal (English *sheep*) and its meat (English *mutton*); its value differs from that of English *sheep*, because English divides the field differently. This structuralist idea, that meanings are defined by contrasts within a system, influenced the study of semantic fields, which we study in Lesson II.

## Peirce's signs

The American philosopher **Charles Sanders Peirce** (1839–1914) developed a different classification of signs, based on the relation between the sign and what it represents:

- An **icon** resembles what it represents: a portrait, a map, an onomatopoeic word like *cuckoo*.
- An **index** is connected to what it represents by a physical or causal relation: smoke is an index of fire; a pointing finger, or the word *this*, indicates something in the context.
- A **symbol** is connected to what it represents by convention: most words, and traffic lights.

Most words are symbols, but language also contains icons (onomatopoeia) and indexes (words like *I*, *here*, and *now*, whose reference depends on the context, as we will see in Lesson V).

## Limits of arbitrariness

Recent research has found that arbitrariness is not absolute. **Sound symbolism**, in which certain sounds are associated with certain meanings, is widespread. In 1929, the psychologist **Wolfgang Köhler** showed people two shapes, one rounded and one spiky, and asked which was called *maluma* and which *takete*; most chose *maluma* for the rounded shape. In 2001, **V. S. Ramachandran** and **Edward Hubbard** found the same with *bouba* and *kiki*, across speakers of different languages. Words for small things often contain high front vowels (*teeny*, *wee*), and languages such as Japanese have large classes of sound-symbolic words called **ideophones** (*kira-kira* "sparkling," *goro-goro* "rumbling"). Such findings show that iconicity plays a larger role in language than Saussure allowed, though the core of vocabulary remains conventional.

> **Pause and consider.** Classify each as icon, index, or symbol: a thermometer reading, the word *tree*, a stick-figure drawing, the word *yesterday*.`,
    },
    {
      title: "Sense and Reference",
      body: `## Frege's puzzle

In 1892, the German mathematician and philosopher **Gottlob Frege** published a paper, "On Sense and Reference" (*Über Sinn und Bedeutung*), that shaped the study of meaning ever since. He began with a puzzle about identity statements.

Consider:

- *The morning star is the morning star.*
- *The morning star is the evening star.*

Both expressions, "the morning star" and "the evening star," refer to the same object: the planet **Venus**, visible in the east before sunrise and in the west after sunset. So both sentences, it seems, say the same thing: that Venus is Venus. Yet the first is trivial, known without investigation, while the second records an astronomical discovery, made by the ancient Babylonians or Greeks. How can two sentences about the same object differ so much in their informativeness?

## Two aspects of meaning

Frege's answer was that expressions have two aspects of meaning:

- **Reference** (*Bedeutung*): the object in the world that the expression picks out. "The morning star" and "the evening star" have the same reference: Venus.
- **Sense** (*Sinn*): the **mode of presentation** of the reference, the way in which it is given to us. "The morning star" presents Venus as the bright object seen in the morning; "the evening star" presents it as the bright object seen in the evening. These senses differ.

The second sentence is informative because it connects two different senses that turn out to have the same reference.

## Sense and reference of sentences

Frege extended the distinction to sentences. The **sense** of a sentence is the **thought** it expresses; its **reference**, he proposed, is its **truth value**, true or false. This idea, that the semantic value of a sentence is connected to its truth, became central to formal semantics, as we will see in Lesson III.

## Opaque contexts

The distinction helps explain certain puzzling contexts. Consider:

- *Lois Lane believes that Superman can fly.* (true)
- *Lois Lane believes that Clark Kent can fly.* (false, in the story)

*Superman* and *Clark Kent* refer to the same person. Yet substituting one for the other changes the truth of the sentence. In contexts such as *believes that*, *knows that*, and *wants*, called **opaque** (or intensional) contexts, what matters is not just the reference of an expression but its sense: how the believer thinks of the person.

## Intension and extension

Later philosophers and semanticists, especially **Rudolf Carnap** in *Meaning and Necessity* (1947), developed Frege's distinction into the contrast between **intension** and **extension**:

- The **extension** of an expression is what it applies to in the actual world: the extension of *dog* is the set of all dogs.
- The **intension** is the concept or criterion that determines the extension in any possible situation.

As we will see in Lesson III, this distinction became the basis of **possible-worlds semantics**.

## Sense and the dictionary

In ordinary terms, the sense of a word is roughly what a dictionary tries to capture: its meaning, independent of any particular use. The reference is what the word is used to talk about on a particular occasion. A dictionary can tell us the sense of *the president*, but not who the president is at a given time.

> **Pause and consider.** Give your own example, like the morning star and the evening star, of two expressions with the same reference but different senses.`,
    },
    {
      title: "Puzzles of Reference",
      body: `## The present King of France

In 1905, the British philosopher **Bertrand Russell** published "On Denoting," a paper that the philosopher Frank Ramsey called a "paradigm of philosophy." Russell considered sentences like:

> *The present King of France is bald.*

Since France has had no king since 1848, the phrase "the present King of France" refers to nothing. Is the sentence true or false? It does not seem true, since there is no bald King of France. But if it is false, then its negation, *The present King of France is not bald*, should be true, which seems equally wrong.

## Russell's analysis

Russell proposed that **definite descriptions** like "the present King of France" are not referring expressions at all, but disguised **quantified** statements. The sentence means:

1. There is a King of France;
2. there is only one King of France; and
3. whoever is King of France is bald.

Since the first part is false, the whole sentence is **false**. And *The present King of France is not bald* is ambiguous: it can mean "There is a unique King of France, and he is not bald" (false) or "It is not the case that there is a unique King of France who is bald" (true). Russell's analysis was a landmark in the application of logic to language.

## Strawson's reply

In 1950, the British philosopher **P. F. Strawson**, in "On Referring," objected that Russell had confused **sentences** with their **uses**. When someone says *The present King of France is bald* today, Strawson argued, they do not say anything false; rather, the question of truth or falsity **does not arise**, because the utterance fails to refer. The existence of a King of France is not asserted but **presupposed**. We will study **presupposition** in Lesson III.

## Referential and attributive

In 1966, the American philosopher **Keith Donnellan** distinguished two uses of definite descriptions:

- In the **attributive** use, the speaker means whoever fits the description: on finding a brutally murdered man, a detective says *Smith's murderer is insane*, meaning whoever killed Smith.
- In the **referential** use, the speaker uses the description to pick out a particular person: at a trial, pointing at the defendant, someone says *Smith's murderer is insane*, meaning that man, even if he turns out to be innocent.

The distinction shows that reference depends partly on the speaker's intentions, a pragmatic matter.

## Names

What do proper names mean? Frege and Russell held that a name like *Aristotle* is associated with a description, such as "the teacher of Alexander the Great." In lectures delivered in 1970 and published as *Naming and Necessity* (1980), the American philosopher **Saul Kripke** argued against this view. If names were descriptions, then *Aristotle was the teacher of Alexander* would be necessarily true; but Aristotle might never have taught Alexander. Kripke proposed instead a **causal** or historical theory: a name refers to its bearer through a chain of uses going back to an initial "baptism," passed from speaker to speaker. Speakers can refer to Aristotle successfully even if they know very little about him.

## Why reference matters

These debates show that even the apparently simple question of what a word refers to raises deep issues about language, thought, and the world. They also show the close cooperation between philosophy and linguistics in the study of meaning.

> **Pause and consider.** Is *The present King of France is bald* false, or neither true nor false? Which answer seems more natural to you?`,
    },
    {
      title: "Utterances, Sentences, and Propositions",
      body: `## Three levels

Saeed distinguishes three levels at which meaning can be studied:

- An **utterance** is a particular act of speaking or writing, by a particular person, at a particular time and place. If two people each say *It's raining*, there are two utterances.
- A **sentence** is an abstract grammatical object, a string of words with a structure, which can be uttered many times. The two utterances of *It's raining* are utterances of the same sentence.
- A **proposition** is the **content** expressed by a sentence on an occasion of use, the part of its meaning that can be true or false. *It's raining* uttered in London on Monday and in Paris on Tuesday expresses different propositions, since it describes different situations.

## Different sentences, same proposition

Different sentences can express the same proposition:

- *Caesar crossed the Rubicon.*
- *The Rubicon was crossed by Caesar.*
- *César cruzó el Rubicón.* (Spanish)

These are different sentences, in two languages, but they describe the same situation and are true or false under the same conditions. They express the same proposition.

## Same sentence, different propositions

Conversely, the same sentence can express different propositions on different occasions, especially if it contains words whose reference depends on context: *I am hungry* expresses a different proposition depending on who says it and when. Such words, like *I*, *you*, *here*, *now*, and *yesterday*, are called **deictic** or **indexical**, as we will see in Lesson V.

## Type and token

The distinction between sentences and utterances is an example of the philosophers' distinction between **types** and **tokens**. The word *the* occurs many times on this page: each occurrence is a **token** of the same word **type**. A semantics of sentences studies types; a study of utterances studies tokens in their contexts.

## Use and mention

Another useful distinction is between **using** a word and **mentioning** it:

- *Boston is a city.* (the word is **used** to refer to the city)
- *"Boston" has six letters.* (the word is **mentioned**, talked about as a word)

Linguists and philosophers mark mentioned words with quotation marks or italics, as this course does. Confusing use and mention leads to puzzles and jokes: *Chicago has seven letters, and so does Seattle*.

## Why the distinctions matter

These distinctions help separate questions that are easily confused:

- What does the **sentence** mean, independent of context? (a question for semantics)
- What **proposition** does it express on a particular occasion? (requiring knowledge of the context)
- What did the speaker **intend** to communicate by the utterance? (a question for pragmatics)

As we will see, the boundaries between these questions are themselves debated.

> **Pause and consider.** Do *I'm tired* said by you today and *I'm tired* said by a friend tomorrow express the same proposition? Why or why not?`,
    },
    {
      title: "Semantics and Pragmatics",
      body: `## A division of labor

As we saw in LIN 101, linguists traditionally divide the study of meaning between **semantics** and **pragmatics**:

- **Semantics** studies the conventional, context-independent meaning of words and sentences: what they mean in the language.
- **Pragmatics** studies how meaning depends on **context**, and what speakers communicate by their utterances beyond the literal meaning of their words.

## An example

Consider the sentence *It's cold in here*. Its semantic meaning is roughly that the temperature in the place where the speaker is located is low. But in context, a speaker might use it:

- to state a fact;
- to request that someone close the window;
- to complain about the heating;
- to suggest leaving.

These different communicated meanings are matters of pragmatics. The sentence's semantic meaning is the same in all cases; what the speaker means differs.

## Implicature

As we saw in LIN 101, **H. P. Grice** distinguished between what a speaker **says** and what they **implicate**. If someone asks *Did you finish your essay?* and the answer is *I wrote the introduction*, the speaker has said only that they wrote the introduction, but has implicated that they did not finish the essay. We will study implicature in Lesson V.

## Where to draw the line

The boundary between semantics and pragmatics is not always clear. Consider:

- **Indexicals** such as *I*, *here*, and *now*: their reference depends on context, yet their meaning is conventional.
- **Quantifier domains**: *Everyone came to the party* does not mean that everyone in the world came, but everyone in some contextually relevant group.
- **Scalar terms**: *Some students passed* often conveys "not all students passed." Is this part of the meaning of *some*, or an implicature?

Different theorists draw the line differently. **Minimalists** about semantics, such as **Emma Borg** and **Herman Cappelen** and **Ernie Lepore**, hold that sentences have a context-independent meaning, minimally affected by context. **Contextualists**, such as **François Recanati** and the relevance theorists **Dan Sperber** and **Deirdre Wilson**, whom we will meet in Lesson V, hold that context affects even the basic truth-conditional content of most sentences.

## Why the distinction matters

Despite these debates, the distinction between semantics and pragmatics is useful. It separates the knowledge that speakers share as members of a language community (the conventional meanings of words and constructions) from the reasoning they perform in context to work out what a speaker means. Children must acquire both, and people with certain conditions, such as some forms of brain injury or autism, may show differences in one but not the other.

## In this course

Lessons II, III, and IV focus mainly on **semantics**: word meaning, sentence meaning, and the meanings of grammatical categories. Lesson V turns to **pragmatics**. But we will see throughout that the two are deeply intertwined.

> **Pause and consider.** What might a speaker mean by *Nice weather we're having* on a stormy day? Is this semantics or pragmatics?`,
    },
    {
      title: "Compositionality",
      body: `## Building meanings

How do the meanings of words combine to form the meanings of sentences? A central principle of semantics, often attributed to **Frege**, is the **principle of compositionality**:

> The meaning of a complex expression is determined by the meanings of its parts and the way they are combined.

For example, the meaning of *The dog chased the cat* is determined by the meanings of *the*, *dog*, *chased*, and *cat*, and by the syntactic structure that combines them. Change a word (*The dog chased the mouse*) or the structure (*The cat chased the dog*), and the meaning changes in a predictable way.

## Why compositionality matters

Compositionality explains how speakers can understand an unlimited number of new sentences, as we saw with **creativity** in SYN 101. Speakers do not memorize the meanings of sentences; they compute them from the meanings of words and the rules of combination. Without compositionality, understanding a new sentence would be impossible.

## Structure and meaning

Compositionality explains why **structural ambiguity**, which we studied in SYN 101, produces different meanings: *I saw the man with the telescope* has two structures, and so two ways of combining the same word meanings, giving two meanings.

## Idioms

**Idioms** seem to violate compositionality. The meaning of *kick the bucket* ("die") cannot be computed from the meanings of *kick*, *the*, and *bucket*. Similarly, *spill the beans* ("reveal a secret"), *pull someone's leg* ("tease"), and *by and large* ("generally"). Such expressions must be stored as wholes, with their meanings, in the lexicon.

But idioms vary in how **compositional** they are. In *spill the beans*, *spill* corresponds roughly to "reveal" and *the beans* to "the secret," so that variations are possible: *The beans were spilled*; *He spilled a few beans*. In *kick the bucket*, no such correspondence exists, and variations are odd: \\#*The bucket was kicked by him* (in the idiomatic sense). **Geoffrey Nunberg**, **Ivan Sag**, and **Thomas Wasow**, in an influential paper of 1994, distinguished **idiomatically combining expressions** like *spill the beans* from fully non-compositional **idiomatic phrases** like *kick the bucket*.

## Context and compositionality

Compositionality is also challenged by the influence of **context**. The meaning of *red* seems to vary with what it modifies: a *red apple* is red on the outside, a *red grapefruit* is red inside, *red hair* is a color most people would call orange, and *red wine* is purple. Is the meaning of *red* constant, with the differences explained by our knowledge of apples and wine, or does *red* mean something different in each combination? Such examples have led some theorists to argue that compositionality holds only in a weakened form, or that meanings are flexible.

## A guiding principle

Despite these challenges, compositionality remains the guiding principle of most semantic theories, especially formal semantics, which we study in Lesson III. Even approaches that emphasize context and constructions, such as Construction Grammar, which we met in SYN 101, accept that meanings are built up from parts, though they recognize a wider range of stored parts, including constructions with their own meanings.

> **Pause and consider.** Is *spill the beans* compositional? What about *kick the bucket*? How can you tell?`,
    },
    {
      title: "Meanings as Concepts",
      body: `## What is a meaning?

What kind of thing is a meaning? According to **referential** theories, the meaning of a word is what it refers to, or the set of things it applies to. But this cannot be the whole story: as Frege showed, two expressions can have the same reference but different meanings; and words like *unicorn* and *the present King of France* have meaning without reference.

## Mentalism

According to **mentalist** or **conceptualist** theories, the meaning of a word is a **concept** in the mind of the speaker. *Dog* means the concept DOG, which speakers use to recognize dogs, think about them, and reason about them. On this view, semantics is a branch of cognitive psychology, concerned with how concepts are represented in the mind and connected to words.

## Conceptual semantics

The American linguist **Ray Jackendoff**, whom we met in LIN 110, developed a detailed mentalist theory called **conceptual semantics**, presented in *Semantic Structures* (1990) and later works. Jackendoff argued that meanings are structured mental representations built from a set of basic **conceptual categories**, such as THING, EVENT, STATE, PLACE, PATH, and PROPERTY, and basic **functions**, such as GO, BE, STAY, and CAUSE. For example, *The ball rolled into the room* expresses a conceptual structure in which an EVENT of GO involves a THING (the ball) following a PATH (into the room). Jackendoff noted that the same functions appear in different domains: *The meeting went from 2 to 4* (time), *The light went from green to red* (properties), *The inheritance went to Bill* (possession), suggesting that spatial concepts structure many abstract domains.

## Concepts and words

Are concepts the same as word meanings? Not necessarily. We have concepts for which we lack words (the smell of rain on dry earth, for which English borrowed the coined word *petrichor*), and languages divide conceptual space differently. As we saw in LIN 110, the relation between language and thought is debated: some researchers, such as **Jerry Fodor**, argue for a universal **language of thought** in which concepts are expressed independently of any spoken language; others argue that languages shape the concepts their speakers form.

## The problem of shared meaning

A challenge for mentalism is to explain how meanings can be **shared**. If meanings are concepts in individual minds, how can two people mean the same thing by a word? The philosopher **Hilary Putnam**, in "The Meaning of 'Meaning'" (1975), argued that "meanings just ain't in the head." In his famous thought experiment of **Twin Earth**, a planet identical to Earth except that the liquid called "water" has a different chemical composition, people with identical mental states would mean different things by "water." Putnam concluded that meaning depends partly on the external world and on the social **division of linguistic labor**: most of us rely on experts to determine what counts as gold or elm.

## Combining perspectives

Saeed suggests that a complete semantics needs both perspectives: meanings are represented in speakers' minds, but they connect to the world and are shared within communities. The different approaches we study in this course emphasize different aspects of this complex relation.

> **Pause and consider.** Do you and a botanist mean exactly the same thing by *elm*? Does it matter?`,
    },
    {
      title: "Meaning Across Cultures",
      body: `## Untranslatable words

Every language has words that seem hard to translate into others. Some often-cited examples:

- **Japanese** *amae*: the feeling of being able to depend on another's indulgence, analyzed by the psychiatrist **Takeo Doi** in *The Anatomy of Dependence* (1971) as a key concept of Japanese social life;
- **Danish** *hygge*: a sense of cozy, convivial well-being;
- **German** *Schadenfreude*: pleasure at another's misfortune, borrowed into English;
- **Portuguese** *saudade*: a longing for something absent, perhaps never to return.

Such words are sometimes described as "untranslatable." But this is misleading: their meanings can be explained in other languages, as the descriptions above show, though not by a single word. What is distinctive is that a language has **lexicalized** a particular concept, packaging it in one word, which may reflect its importance in a culture.

## Wierzbicka's semantic primes

How can meanings be compared across languages without imposing the categories of one language on another? The Polish-Australian linguist **Anna Wierzbicka**, with **Cliff Goddard** and others, developed the **Natural Semantic Metalanguage** (NSM). They proposed that all languages share a small set of **semantic primes**, simple, universal meanings that cannot be defined in simpler terms, numbering about sixty-five in recent versions. They include:

- substantives: I, YOU, SOMEONE, SOMETHING, PEOPLE, BODY;
- determiners and quantifiers: THIS, THE SAME, OTHER, ONE, TWO, SOME, ALL, MUCH/MANY;
- evaluators: GOOD, BAD;
- mental predicates: THINK, KNOW, WANT, FEEL, SEE, HEAR;
- speech: SAY, WORDS, TRUE;
- actions and events: DO, HAPPEN, MOVE;
- time and place: WHEN, NOW, BEFORE, AFTER, WHERE, HERE, ABOVE, BELOW;
- logical concepts: NOT, MAYBE, CAN, BECAUSE, IF.

## Explications

Using only these primes, NSM researchers write **explications** of complex words, paraphrases that can be translated into any language without distortion. For example, an explication of *sad* might begin: "someone feels something bad, like people feel when they think: 'something bad happened; I don't want this; I can't do anything about it.'" Explications of emotion words in different languages reveal subtle differences: English *sad*, Russian *grust'*, and other near-equivalents differ in components of their explications.

## Criticisms

The NSM approach has been criticized. Some linguists question whether the proposed primes are truly universal and indefinable, and whether every language has exact equivalents for them. Others find the explications illuminating but question their precision. Supporters reply that the primes have been tested in dozens of languages from many families. Whatever its status, NSM has stimulated careful cross-linguistic research on meaning.

## Culture and meaning

The study of meaning across cultures shows that languages differ not only in their words but in the concepts their words package, the distinctions they make obligatory, and the cultural assumptions they encode. As we will see in Lessons II and IV, these differences extend to color, kinship, space, time, and motion.

> **Pause and consider.** Choose a word from your own language or culture that you think would be hard to translate. How would you explain it to an outsider?`,
    },
    {
      title: "Meaning in the Brain",
      body: `## Measuring meaning

How does the brain process meaning? Since the 1980s, researchers have used several techniques to study semantic processing.

## The N400

In 1980, **Marta Kutas** and **Steven Hillyard** published a landmark study in *Science*. They recorded **event-related potentials** (ERPs), electrical activity measured from the scalp, while people read sentences one word at a time. Some sentences ended with a word that did not fit the meaning:

> *He spread the warm bread with **socks**.*

About 400 milliseconds after the anomalous word, the brain produced a large **negative** wave, which they called the **N400**. Sentences ending with an expected word (*butter*) produced little N400; those ending with an unexpected but plausible word produced an intermediate response. The N400 has since become one of the most studied measures of meaning in the brain, sensitive to how well a word fits its context, how predictable it is, and how related it is to preceding words.

## Syntax and semantics in the brain

Researchers have also found a different response, the **P600**, a positive wave around 600 milliseconds, often associated with syntactic violations (*The cats won't **eats** the food*). The existence of different responses to semantic and syntactic anomalies suggested that the brain processes meaning and structure partly separately, though later research has shown more complex interactions.

## Semantic dementia

Neurological conditions can selectively impair meaning. In 1975, the British neuropsychologist **Elizabeth Warrington** described patients who gradually lost their knowledge of the meanings of words and objects, while other abilities, such as memory for recent events and grammar, remained relatively intact. This condition, now called **semantic dementia**, is associated with degeneration of the front part of the **temporal lobes**. Patients may lose fine distinctions first (calling all birds "bird," then all animals "animal") before losing broader categories, a pattern that has informed theories of how concepts are organized.

## Category-specific deficits

Some patients show **category-specific** deficits, losing knowledge of living things (animals, fruits) while retaining knowledge of artifacts (tools, furniture), or the reverse. **Warrington** and **Tim Shallice** reported such cases in 1984. Some researchers have explained this in terms of the kinds of information that are important for different categories (visual appearance for animals, function and use for tools); others argue that the brain has evolved specialized systems for categories important for survival.

## Embodied meaning

According to theories of **embodied** or **grounded** cognition, the meanings of words are partly represented in the brain systems used for perception and action. Studies by **Friedemann Pulvermüller** and others found that reading action words like *kick*, *pick*, and *lick* activated areas of the motor cortex associated with the leg, hand, and mouth. Such findings suggest that understanding words may involve simulating the experiences they describe, though the extent and necessity of such simulation are debated.

## Meaning and the brain

These findings show that meaning is not located in a single place in the brain but is distributed across networks linking language areas with systems for perception, action, memory, and emotion. Semantics, which began as a branch of philosophy and linguistics, has become a topic for neuroscience as well.

> **Pause and consider.** Why might a patient with semantic dementia call a robin first "bird" and later "animal"?`,
    },
    {
      title: "Ambiguity and Vagueness",
      body: `## Two different problems

Words and sentences can fail to have a single precise meaning in two different ways:

- An **ambiguous** expression has two or more **distinct** meanings: *bank* (financial institution or riverside).
- A **vague** expression has a single meaning with **fuzzy boundaries**: *tall*, *bald*, *heap*, *young*.

## Kinds of ambiguity

As we saw in SYN 101, ambiguity can be:

- **lexical**, arising from a word with two meanings: *She can't bear children* (*bear* = tolerate or give birth to);
- **structural**, arising from two structures: *old men and women*;
- **scope** ambiguity, arising from the interaction of quantifiers and negation: *Every student read some book*; *All that glitters is not gold*, as we saw in SYN 101.

## Testing for ambiguity

How can we tell whether an expression is ambiguous or merely general? In 1975, **Arnold Zwicky** and **Jerrold Sadock** proposed several tests. The most famous is the **identity test** with *so did* or *and so did*:

> *John went to the bank, and so did Mary.*

If *bank* is ambiguous, the sentence cannot mean that John went to a financial bank and Mary to a riverbank: the two halves must have the same meaning. This shows that the two senses of *bank* are distinct meanings. By contrast, in *John has a cousin, and so does Mary*, John's cousin can be male and Mary's female: *cousin* is not ambiguous between "male cousin" and "female cousin," but simply **general**, covering both.

## Vagueness

Vague words have **borderline cases**, to which they neither clearly apply nor clearly fail to apply. A person who is 6 feet 4 inches tall is clearly tall; one who is 5 feet is clearly not; but what about 5 feet 10? There seems to be no sharp boundary.

## The sorites paradox

Vagueness gives rise to an ancient puzzle, the **sorites paradox** (from Greek *sōros*, "heap"), attributed to the Greek philosopher **Eubulides** of Miletus in the fourth century BCE:

1. A million grains of sand make a heap.
2. If *n* grains make a heap, then *n* − 1 grains also make a heap (removing one grain cannot turn a heap into a non-heap).
3. Therefore, one grain makes a heap, or even zero grains.

The conclusion is absurd, but each premise seems true. Philosophers have proposed many solutions: that vague words have sharp but unknown boundaries (**epistemicism**, defended by **Timothy Williamson**); that truth comes in degrees (**fuzzy logic**, developed by **Lotfi Zadeh**); or that vague sentences can be true on some ways of making the word precise and false on others (**supervaluationism**). None has won universal acceptance.

## Context-dependence

Vague adjectives are also **context-dependent**: a *tall* basketball player is much taller than a *tall* child; a *large* mouse is smaller than a *small* elephant. Such adjectives are interpreted relative to a **comparison class**, provided by the noun or the context. Formal semanticists, such as **Christopher Kennedy**, have analyzed them in terms of **scales** and contextually determined **standards**.

## Vagueness is useful

Vagueness is not a defect of language. It allows speakers to communicate efficiently without precise measurements, and to adapt words to different contexts. As we will see in Lesson II, the **prototype** theory of categories offers one account of why so many words have fuzzy boundaries.

> **Pause and consider.** Apply the *so did* test to *John is wearing glasses, and so is Mary*. Is *glasses* ambiguous here? Why or why not?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Sense and reference

> *The morning star is the morning star.* / *The morning star is the evening star.* (after Frege, 1892)

**Questions**

1. Why is the second sentence informative while the first is not?
2. How do sense and reference explain the difference?

## 2. The present King of France

> *The present King of France is bald.* (Russell, 1905)

**Questions**

1. How did Russell analyze this sentence?
2. How did Strawson object?

## 3. Sound symbolism

> *maluma* / *takete* (Köhler, 1929); *bouba* / *kiki* (Ramachandran and Hubbard, 2001)

**Questions**

1. What did these experiments find?
2. How do they qualify Saussure's principle of arbitrariness?

## 4. The N400

> *He spread the warm bread with socks.* (Kutas and Hillyard, 1980)

**Questions**

1. What brain response did the final word produce?
2. What does this response measure?

## Drawing the threads together

In a paragraph, explain what meaning is and how semanticists study it, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "1997; 4th ed., 2016", note: "Read chapters 1 and 2, on semantics in the study of language and on meaning, thought, and reality." },
    { kind: "book", title: "On Sense and Reference", author: "Gottlob Frege, trans. Max Black", publisher: "Translations from the Philosophical Writings of Gottlob Frege, ed. Peter Geach and Max Black (Blackwell)", year: "1892; trans. 1952", note: "Read the opening pages on identity statements." },
    { kind: "book", title: "On Denoting", author: "Bertrand Russell", publisher: "Mind 14", year: "1905", note: "In the public domain. Read the discussion of the King of France." },
  ],
  media: [
    { kind: "book", title: "Naming and Necessity", author: "Saul A. Kripke", publisher: "Harvard University Press", year: "1980", note: "Read Lecture I." },
    { kind: "book", title: "Semantics: Primes and Universals", author: "Anna Wierzbicka", publisher: "Oxford University Press", year: "1996", note: "Read chapter 1." },
  ],
  questions: [
    {
      prompt: "Who introduced the term semantics into modern linguistics?",
      choices: ["Ferdinand de Saussure", "Michel Bréal", "Gottlob Frege", "Noam Chomsky"],
      answer: 1,
      explanation: "In his Essai de sémantique (1897).",
    },
    {
      prompt: "In Grice's terms, what kind of meaning is \"Those spots mean measles\"?",
      choices: ["Non-natural meaning", "Natural meaning", "Implicature", "Presupposition"],
      answer: 1,
      explanation: "Linguistic meaning is non-natural, depending on intention and convention.",
    },
    {
      prompt: "In Peirce's classification, a word like I or here is primarily what kind of sign?",
      choices: ["Icon", "Index", "Symbol", "Signified"],
      answer: 1,
      explanation: "Its reference depends on the context.",
    },
    {
      prompt: "According to Frege, what do the morning star and the evening star share?",
      choices: ["Sense", "Reference", "Both", "Neither"],
      answer: 1,
      explanation: "Both refer to Venus, but present it differently.",
    },
    {
      prompt: "How did Russell analyze The present King of France is bald?",
      choices: [
        "As meaningless",
        "As a quantified statement asserting existence, uniqueness, and baldness, and so false",
        "As true",
        "As neither true nor false",
      ],
      answer: 1,
      explanation: "Strawson held that it is neither true nor false.",
    },
    {
      prompt: "What did Kripke propose about proper names?",
      choices: [
        "They are disguised descriptions",
        "They refer through a causal chain of uses going back to an initial naming",
        "They have no reference",
        "They are indexicals",
      ],
      answer: 1,
      explanation: "In Naming and Necessity (1980).",
    },
    {
      prompt: "What is a proposition?",
      choices: [
        "A particular act of speaking",
        "The content expressed by a sentence on an occasion, which can be true or false",
        "A grammatical string",
        "A word",
      ],
      answer: 1,
      explanation: "Saeed distinguishes utterances, sentences, and propositions.",
    },
    {
      prompt: "What does the principle of compositionality state?",
      choices: [
        "Meanings are arbitrary",
        "The meaning of a complex expression is determined by the meanings of its parts and how they are combined",
        "Sentences have no meaning",
        "Context determines all meaning",
      ],
      answer: 1,
      explanation: "Idioms are a challenge.",
    },
    {
      prompt: "What are Wierzbicka's semantic primes?",
      choices: [
        "Prime numbers",
        "A small set of simple, universal meanings from which complex meanings can be explicated",
        "The first words children learn",
        "Grammatical categories",
      ],
      answer: 1,
      explanation: "Part of the Natural Semantic Metalanguage.",
    },
    {
      prompt: "What does the N400 respond to?",
      choices: [
        "Loud sounds",
        "How well a word fits its context in meaning",
        "Syntactic errors only",
        "Spelling",
      ],
      answer: 1,
      explanation: "Kutas and Hillyard, 1980.",
    },
  ],
  reflection:
    "Meaning connects words to minds and to the world. In 500–800 words, explain Frege's distinction between sense and reference and the debate about the present King of France, and reflect on whether meanings are best understood as things in the world, concepts in the mind, or patterns of use.",
};
