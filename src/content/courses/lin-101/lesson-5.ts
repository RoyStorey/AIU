import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "Meaning and Use: Semantics and Pragmatics",
  summary:
    "What meaning is, and the difference between semantics and pragmatics; Frege's sense and reference and the problem of presupposition; word meanings, lexical relations, and prototypes; sentence meaning, truth conditions, entailment, and compositionality; metaphor in everyday language; how children learn meanings; Grice's cooperative principle and implicature; Austin's speech acts; deixis and politeness; conversation and discourse; meaning across languages and the problem of translation; and a review of the whole architecture of language.",
  pages: [
    {
      title: "What Is Meaning?",
      body: `## The puzzle of meaning

We have studied the sounds, words, and sentences of language. But the point of language is to **mean** something: to convey information, ask questions, make promises, tell stories, express feelings. What is meaning? This question has occupied philosophers for millennia and linguists for more than a century, and it is still debated.

## Semantics and pragmatics

Linguists divide the study of meaning into two fields. **Semantics** studies the meanings of words and sentences themselves, independent of any particular context: what *dog* means, what *Every dog barks* means, and what follows from it. **Pragmatics** studies how speakers use language in context, and how hearers infer more than the words literally say. If someone asks, "Can you pass the salt?", semantics tells us that the sentence asks about the hearer's ability; pragmatics explains why everyone understands it as a request.

## Levels of meaning

Meaning operates at several levels. **Word meaning** (lexical semantics) concerns what individual words mean and how they relate to each other. **Sentence meaning** (compositional semantics) concerns how the meanings of words combine, according to the sentence's syntactic structure, to produce the meaning of the whole. **Utterance meaning** (pragmatics) concerns what a speaker means by saying something on a particular occasion, which may differ greatly from what the sentence means.

## Meaning is not just reference

A natural first idea is that the meaning of a word is the thing it refers to: the meaning of *Paris* is the city of Paris, the meaning of *dog* is the set of dogs. This idea captures something important, but it cannot be the whole story. What do *the* and *if* refer to? What does *unicorn* refer to, since there are no unicorns? And as the German logician **Gottlob Frege** showed, two expressions can refer to the same thing while differing in meaning, as we will see on the next page.

## Meaning in the mind

Some linguists and psychologists emphasize that meanings are **concepts** in the minds of speakers: the meaning of *dog* is a mental representation that allows speakers to recognize dogs, reason about them, and use the word appropriately. Others emphasize that meaning depends on **use** in social practices, following Wittgenstein's suggestion, which we met in PHR 101, that "the meaning of a word is its use in the language." Still others emphasize **truth conditions**: knowing the meaning of a sentence is knowing what the world would have to be like for it to be true. Each approach captures part of the truth.

## The importance of context

Even apparently simple sentences depend heavily on context. *It's cold in here* might be a statement of fact, a complaint, or a request to close the window. *I'll be there tomorrow* means something different depending on who says it, where, and when. Human beings resolve these dependencies so effortlessly that we rarely notice them; the difficulty of building computers that do the same shows how much work is involved.

## The plan of this lesson

This lesson begins with semantics—Frege's distinction between sense and reference, word meanings, and sentence meanings—and then turns to pragmatics—Grice's theory of conversation, Austin's speech acts, and the role of context. It ends with the problem of translation and a review of the whole course. SYN 110 studies semantics in depth.

> **Pause and consider.** Think of a time when someone's words meant something quite different from what they literally said. How did you know what they meant?`,
    },
    {
      title: "Sense and Reference",
      body: `## Frege's puzzle

In 1892, **Gottlob Frege**, whom we met in PHR 201 as a critic of the ontological argument, published an essay, "On Sense and Reference," that became one of the founding texts of the philosophy of language and of semantics. He began with a puzzle.

Ancient astronomers gave the name *Phosphorus*, "the morning star," to the bright object seen in the east before dawn, and *Hesperus*, "the evening star," to the bright object seen in the west after sunset. It was a discovery of Babylonian or Greek astronomy that they are the same object: the planet **Venus**. Consider two sentences:

- *Hesperus is Hesperus.*
- *Hesperus is Phosphorus.*

If meaning were just reference, the two sentences would mean the same thing, since both names refer to Venus. Yet the first is trivial, knowable without looking at the sky, while the second records an astronomical discovery. How can this be?

## Sense and reference

Frege's answer was to distinguish two aspects of the meaning of an expression. Its **reference** (*Bedeutung*) is the object it picks out: for both *Hesperus* and *Phosphorus*, the planet Venus. Its **sense** (*Sinn*) is the way in which it presents that object, its "mode of presentation": as the bright object of the evening, or as the bright object of the morning. Two expressions can have the same reference but different senses. *The morning star* and *the evening star* differ in sense but share a reference; so do *the author of Hamlet* and *the most famous English playwright*.

## Sentences and truth

Frege extended the distinction to sentences. The sense of a sentence is the **thought** it expresses; its reference, he argued, is its **truth value**, true or false. This idea, though controversial, led to the development of **truth-conditional semantics**, which we will meet shortly.

## Empty names

What about expressions that refer to nothing, such as *Pegasus* or *the present king of France*? On Frege's view, they have sense but no reference. Sentences containing them express thoughts but lack truth values.

## Russell and the king of France

In "On Denoting" (1905), **Bertrand Russell**, whom we met in PHR 201, proposed a different analysis. Consider:

> The present king of France is bald.

France has had no king since 1848, and no monarch of any kind since 1870. Is the sentence true, false, or neither? Russell argued that it is **false**: it asserts that there exists exactly one present king of France and that he is bald, and since the first part is false, the whole is false. Russell's **theory of descriptions** was hailed as a "paradigm of philosophy."

## Strawson and presupposition

In "On Referring" (1950), the philosopher **P. F. Strawson** objected that Russell's analysis misrepresents how we use such sentences. Someone who says "The present king of France is bald" does not **assert** that there is a king of France; he **presupposes** it. If the presupposition fails, the question of truth or falsity "does not arise." The notion of **presupposition**—background assumptions that a sentence takes for granted—has become central to linguistics, as we will see later in this lesson.

## Why it matters

The distinction between sense and reference, and the debate between Russell and Strawson, show that meaning is more complex than naming. Words do not simply label things; they present them in particular ways, and sentences make claims against a background of assumptions. These ideas shaped twentieth-century philosophy, logic, and linguistics.

> **Pause and consider.** *Mark Twain* and *Samuel Clemens* refer to the same person. Could someone know that Mark Twain wrote *Huckleberry Finn* without knowing that Samuel Clemens did? What does this show?`,
    },
    {
      title: "Word Meanings",
      body: `## Relations among words

The meanings of words are not isolated; they form a network of **relations**. Linguists studying **lexical semantics** identify several kinds:

- **Synonymy**: words with the same or nearly the same meaning, such as *couch* and *sofa*, *begin* and *start*. True synonyms are rare; most differ subtly in connotation, register, or use (*kid* and *child*, *die* and *pass away*).
- **Antonymy**: words with opposite meanings. **Complementary** antonyms divide a domain into two: *alive* and *dead*, *pass* and *fail*; to be not one is to be the other. **Gradable** antonyms lie at the ends of a scale: *hot* and *cold*, *tall* and *short*; something can be neither, and comparisons are possible (*hotter*). **Relational** antonyms describe a relation from opposite sides: *buy* and *sell*, *teacher* and *student*, *above* and *below*.
- **Hyponymy**: a relation of inclusion. *Rose* is a **hyponym** of *flower*, and *flower* is the **hypernym** of *rose*; every rose is a flower. Hyponymy creates hierarchies: *poodle*, *dog*, *mammal*, *animal*.
- **Meronymy**: a part-whole relation. *Wheel* is a meronym of *car*; *finger* of *hand*.

## Ambiguous words

Many words have more than one meaning. **Homonyms** are unrelated words that happen to share a form: *bank* (financial institution) and *bank* (side of a river) come from different sources. **Polysemy** is a single word with related meanings: *head* can mean the body part, the head of a department, the head of a bed, or the head of a glass of beer, all related by the idea of the top or front or leading part. Polysemy is pervasive; most common words have many related senses.

## Defining words

How should word meanings be described? One traditional approach defines words by necessary and sufficient conditions, or **semantic features**: a *bachelor* is [+human, +male, +adult, −married]. This works for some words, but many resist such definitions. Is the Pope a bachelor? Is a man in a long-term unmarried partnership? The features capture the core meaning, but our concept of a bachelor includes assumptions about typical cases.

## Prototypes

In the 1970s, the psychologist **Eleanor Rosch** showed that many categories are organized around **prototypes**, typical members, rather than strict definitions. People judge a robin or sparrow to be a "better" example of a bird than a penguin or an ostrich, and verify "a robin is a bird" faster than "a penguin is a bird," though all are equally birds. Category membership is often graded, with central and peripheral members. Rosch's work echoed Wittgenstein's observation, in the *Philosophical Investigations*, that the things we call "games"—board games, ball games, card games, solitaire—share no single common feature, but a network of overlapping similarities, a **family resemblance**.

## Words and culture

Languages divide up the world in different ways. **Color terms** are a famous example. English has eleven basic color terms; some languages have as few as two or three. In *Basic Color Terms* (1969), **Brent Berlin** and **Paul Kay** argued that despite this variation, color vocabularies follow a universal pattern: if a language has only two basic terms, they mean roughly "dark/cool" and "light/warm"; a third term is always red; then green or yellow; and so on. Their findings have been refined and debated, but they suggest that word meanings are shaped both by universal features of human perception and by culture. Kinship terms, spatial terms, and emotion words also vary across languages in revealing ways.

> **Pause and consider.** Is a penguin a bird? Is a tomato a vegetable? Why do such questions feel different from "Is a robin a bird?"`,
    },
    {
      title: "Sentence Meaning",
      body: `## Compositionality

How do the meanings of words combine to produce the meanings of sentences? The guiding idea, often attributed to Frege, is the **principle of compositionality**: the meaning of a complex expression is determined by the meanings of its parts and the way they are combined. This principle explains how we can understand sentences we have never heard before: we know the meanings of the words and the rules for combining them, as we know the morphemes and rules that build new words.

Compositionality explains why *The dog bit the man* and *The man bit the dog* differ in meaning: the words are the same, but their syntactic structure—which noun phrase is the subject and which the object—differs. It also explains structural ambiguity: *I saw the man with the telescope* has two meanings because it has two structures, which combine the same meanings in different ways.

## Truth conditions

One influential way to describe sentence meaning is in terms of **truth conditions**: to know the meaning of a sentence is to know what the world would have to be like for it to be true. The Polish logician **Alfred Tarski**, in work of the 1930s, gave a famous illustration:

> "Snow is white" is true if and only if snow is white.

The example looks trivial, but it shows the idea: the sentence in quotation marks is related to a condition in the world. You may not know whether a sentence is true—*There is life on Europa*—but if you understand it, you know what would make it true. **Formal semantics**, developed by **Richard Montague** and others from the late 1960s, uses the tools of logic to describe truth conditions precisely.

## Entailment and contradiction

Truth conditions explain relations between sentences. One sentence **entails** another if, whenever the first is true, the second must be true. *John killed the spider* entails *The spider died*; *Mary has three children* entails *Mary has a child*. Two sentences **contradict** each other if they cannot both be true: *The light is on* and *The light is off*. Two sentences are **synonymous** (paraphrases) if each entails the other: *The cat chased the mouse* and *The mouse was chased by the cat*.

## Quantifiers and scope

Words like *every*, *some*, *no*, and *most*, called **quantifiers**, create interesting puzzles. Consider:

> Every student read a book.

This can mean that every student read some book or other, possibly different books, or that there is one particular book that every student read. The difference lies in the relative **scope** of the two quantifiers, *every* and *a*. Such **scope ambiguity** is not visible in the words or their order; logicians represent it by different logical formulas. Speakers usually resolve it by context.

## Negation

**Negation** also interacts with scope. *All the students didn't pass* can mean "none of the students passed" or "not all the students passed." Different languages and dialects resolve such ambiguities differently.

## Beyond truth conditions

Not all meaning is a matter of truth conditions. Questions and commands are neither true nor false. Words like *but* and *even* add meaning without changing truth conditions: *She is poor but honest* and *She is poor and honest* are true in the same circumstances, but *but* suggests a contrast. And much of what speakers communicate is not said at all, but implied, as we will see when we turn to pragmatics.

> **Pause and consider.** Explain the two meanings of *Every student read a book*. Which meaning do you think of first? Why?`,
    },
    {
      title: "Metaphors We Live By",
      body: `## Metaphor everywhere

Traditional rhetoric treated **metaphor** as an ornament of poetic language: Shakespeare's "Juliet is the sun." In ***Metaphors We Live By*** (1980), the linguist **George Lakoff** and the philosopher **Mark Johnson** argued that metaphor is pervasive in ordinary language and thought, and that much of our understanding of abstract concepts is structured by metaphors drawn from bodily experience.

## Conceptual metaphors

Lakoff and Johnson identified systematic **conceptual metaphors**, in which one domain of experience is understood in terms of another. For example:

- **ARGUMENT IS WAR**: *Your claims are indefensible. He attacked every weak point in my argument. I demolished his argument. She shot down all my objections.*
- **TIME IS MONEY**: *You're wasting my time. This gadget will save you hours. I've invested a lot of time in her. You need to budget your time.*
- **MORE IS UP**: *Prices rose. The number of books published keeps going up. My income fell.*
- **UNDERSTANDING IS SEEING**: *I see what you mean. That's a clear explanation. Her argument was murky.*
- **LIFE IS A JOURNEY**: *She's at a crossroads. We've come a long way. He's going nowhere.*

These are not isolated expressions but systematic patterns, in which many words and phrases from the source domain (war, money, vertical space, vision, travel) are used for the target domain (argument, time, quantity, understanding, life).

## Metaphor and thought

Lakoff and Johnson argued that such metaphors do not merely describe our thinking; they shape it. If we think of argument as war, we tend to treat our conversation partners as opponents and to seek victory rather than truth. They invited readers to imagine a culture in which argument is understood as a dance, in which partners cooperate to produce something beautiful. Critics have questioned how far linguistic metaphors reflect or shape thought, and psychological experiments have produced mixed results.

## Metonymy

A related figure is **metonymy**, in which one thing is referred to by something closely associated with it: *The White House announced* (the president's staff), *Washington and Moscow disagreed* (the governments), *I'm reading Shakespeare* (his works), *The ham sandwich wants his check* (the customer who ordered it). Metonymy is also pervasive in everyday language.

## Metaphor in Scripture

The Bible is full of metaphor: God is a shepherd (Psalm 23), a rock (Psalm 18:2), a father (Matthew 6:9); Christ is the light of the world (John 8:12), the vine (John 15:1), the door (John 10:9); the church is a body (1 Corinthians 12). Theologians have long debated how such language applies to God. As we saw in PHR 101 and PHR 201, Aquinas developed a theory of **analogy**, and Pseudo-Dionysius emphasized that all names fall short of God. Lakoff and Johnson's work suggests that metaphor is not merely decorative in religious language but structures how believers understand God and themselves.

## Dead metaphors

Many metaphors become so conventional that speakers no longer notice them: the *leg* of a table, the *foot* of a mountain, the *mouth* of a river, *grasping* an idea. Such "dead" metaphors show how much of our vocabulary has grown by extending words from concrete to abstract meanings—a process that, as we saw with *-ly* in Lesson III, also shapes grammar.

> **Pause and consider.** List five expressions in English that treat *ideas as food* ("food for thought," "half-baked idea"). What does the metaphor highlight, and what does it hide?`,
    },
    {
      title: "How Children Learn Meanings",
      body: `## The gavagai problem

How does a child learn what a word means? The question is harder than it looks. In *Word and Object* (1960), the American philosopher **W. V. O. Quine** imagined a linguist among speakers of an unknown language. A rabbit runs past, and a native speaker says "*Gavagai!*" Does the word mean "rabbit"? Or "white," "running," "dinner," "undetached rabbit parts," or "it's rabbiting"? No amount of pointing, Quine argued, can settle the question logically, since every possible meaning is consistent with the same observations. Yet children face this problem constantly, and solve it with ease.

## Fast mapping

Children are remarkably quick word learners. In a famous study published in 1978, **Susan Carey** and **Elsa Bartlett** introduced preschool children to a new color word, *chromium*, in a single casual exchange ("Bring me the chromium tray, not the red one"). Weeks later, many children retained some knowledge of the word's meaning. Carey called this ability **fast mapping**: forming a partial meaning for a word after a single exposure, then refining it over time.

## Constraints and biases

How do children narrow the possibilities? Researchers such as **Ellen Markman** proposed that children bring **biases** to the task. The **whole-object assumption** leads them to assume that a new word refers to a whole object, not its parts or color. The **taxonomic assumption** leads them to extend a word to things of the same kind, not to things that are related thematically (a dog and its bone). The **mutual exclusivity assumption** leads them to assume that a new word refers to something that does not already have a name: shown a familiar cup and an unfamiliar gadget and asked for "the dax," children choose the gadget.

## Social understanding

In *How Children Learn the Meanings of Words* (2000), one of the texts of LIN 110, the psychologist **Paul Bloom** argued that word learning depends above all on children's ability to understand other people's **intentions**. Children do not simply associate words with whatever they happen to be looking at; they figure out what the speaker is looking at and talking about. In experiments by **Dare Baldwin**, toddlers who heard a new word while looking at one toy, spoken by an adult looking at a different toy, attached the word to the toy the adult was looking at. Word learning, on this view, is a kind of mind reading.

## Syntax helps meaning

Children also use **syntax** to learn meanings, a process called **syntactic bootstrapping**, studied by **Lila Gleitman** and others. Hearing "the duck is *gorping* the bunny," a child infers that *gorp* is an action involving two participants; hearing "the duck and the bunny are *gorping*," something both do. The structures in which a verb appears reveal much about its meaning.

## Overextension

Children's early meanings often differ from adults'. They may **overextend** a word, calling all four-legged animals "doggie" or all men "daddy," or **underextend** it, using "car" only for the family car. These errors reveal the hypotheses children are testing, and gradually disappear as they hear more words and contrasts. These topics are studied further in LIN 110.

> **Pause and consider.** A child calls the moon, an orange, and a ball "ball." What hypothesis about the meaning of *ball* might the child be using?`,
    },
    {
      title: "Grice and the Logic of Conversation",
      body: `## Saying and meaning

Speakers often mean more than they say. Suppose you ask a friend, "Is there a gas station around here?" and she replies, "There's one around the corner." You assume that the station is open and sells gas, though she did not say so. Suppose a professor writes a letter of recommendation for a student applying for a position in philosophy that says, in its entirety:

> Dear Sir, Mr. X's command of English is excellent, and his attendance at tutorials has been regular. Yours, etc.

This example comes from the British philosopher **H. P. Grice** (1913–1988), in his paper "Logic and Conversation," given as lectures at Harvard in 1967 and published in 1975. Everyone who reads the letter understands that the professor thinks Mr. X is a poor philosopher, though the letter says nothing of the kind. How?

## The cooperative principle

Grice's answer was that conversation is governed by a **cooperative principle**: participants are expected to make their contributions such as are required, at the stage at which they occur, by the accepted purpose of the conversation. He spelled this out in four **maxims**:

- **Quantity**: make your contribution as informative as required, but not more informative than required.
- **Quality**: try to make your contribution true; do not say what you believe to be false or lack evidence for.
- **Relation**: be relevant.
- **Manner**: be clear; avoid obscurity and ambiguity; be brief and orderly.

## Implicature

When a speaker appears to violate a maxim, hearers assume that he or she is still being cooperative, and infer an additional meaning to make sense of the utterance. Grice called such inferred meanings **conversational implicatures**. The recommendation letter appears to violate the maxim of quantity, since it gives far less information than required; the reader infers that the writer has nothing good to say about Mr. X's philosophy, and is unwilling to say something bad outright.

Many everyday inferences are implicatures. If someone says *Some of the students passed*, we infer that not all did, since if all had passed, the maxim of quantity would have required saying so. Yet *some* does not strictly mean "not all": it would not be a contradiction to say *Some of the students passed—in fact, all of them did*. Implicatures, unlike entailments, can be **cancelled** in this way.

## Flouting the maxims

Speakers often **flout** the maxims openly to create special effects. **Irony** flouts the maxim of quality: saying "Lovely weather!" in a downpour. **Metaphor** flouts it too: "You are the cream in my coffee." **Understatement** and **hyperbole** flout the maxim of quantity. Hearers recognize the violation and infer the intended meaning.

## Relevance theory

Grice's ideas inspired a large body of research in **pragmatics**. **Relevance theory**, developed by **Dan Sperber** and **Deirdre Wilson** in *Relevance* (1986), argued that the maxims can be reduced to a single principle: hearers seek the interpretation that yields the greatest cognitive effect for the least processing effort. Whatever the exact formulation, the central insight remains: communication depends not only on the code of language but on speakers' and hearers' ability to infer intentions.

> **Pause and consider.** A friend asks whether you liked a movie, and you reply, "The popcorn was good." What have you communicated, and which maxim explains it?`,
    },
    {
      title: "Doing Things with Words",
      body: `## Performatives

In lectures given at Harvard in 1955, published after his death as ***How to Do Things with Words*** (1962), the Oxford philosopher **J. L. Austin** (1911–1960) drew attention to a class of utterances that do not describe the world but **perform actions**. When a person says, at the appropriate moment in a wedding ceremony, "I do," he or she is not reporting on a marriage but marrying. When someone says "I name this ship the *Queen Elizabeth*" while smashing a bottle against its bow, or "I bet you sixpence it will rain tomorrow," or "I promise to come," the utterance itself is the act. Austin called these **performatives**.

## Felicity conditions

Performatives are not true or false, but they can succeed or fail. Austin called the conditions for their success **felicity conditions**. A marriage ceremony fails if the person officiating has no authority, if one of the parties is already married, or if the words are spoken in a play. A promise is defective if the speaker has no intention of keeping it. Austin's analysis showed that much of language is bound up with social institutions and conventions.

## All utterances are acts

Austin came to conclude that **all** utterances perform acts, not just explicit performatives. He distinguished three aspects of an utterance:

- the **locutionary act**: saying something with a certain meaning ("It's cold in here");
- the **illocutionary act**: what the speaker does in saying it—stating, requesting, warning, promising, complaining;
- the **perlocutionary act**: the effect achieved by saying it—persuading, frightening, getting someone to close the window.

## Searle's speech act theory

The American philosopher **John Searle**, in *Speech Acts* (1969) and later work, developed Austin's ideas into a systematic **speech act theory**, classifying illocutionary acts into types: **assertives** (stating, claiming), **directives** (requesting, commanding), **commissives** (promising, threatening), **expressives** (thanking, apologizing, congratulating), and **declarations** (naming, marrying, sentencing, which change the world by being said).

## Indirect speech acts

Searle also studied **indirect speech acts**, in which one speech act is performed by means of another. *Can you pass the salt?* is literally a question about ability, but it is used as a request. *I'd like a cup of coffee* is literally a statement about the speaker's desires, but it often functions as an order. *It's getting late* may be a hint that guests should leave. Indirect speech acts are often more polite than direct ones, and their use varies across cultures.

## Speech acts in religion

Religious language is full of performative speech acts: blessings, curses, vows, confessions, absolutions, prayers, baptismal formulas, and the words of institution in the Eucharist. In Genesis, God creates by speaking: "And God said, Let there be light: and there was light" (Genesis 1:3, KJV)—the ultimate performative, in which saying makes it so. Theologians and philosophers of religion have used speech act theory to analyze these practices, asking, for example, what it means to say that a sacrament is effective through the words spoken.

> **Pause and consider.** "I'm sorry" can be an apology, an expression of sympathy, or a polite refusal. What determines which speech act it performs?`,
    },
    {
      title: "Context: Deixis, Presupposition, and Politeness",
      body: `## Deixis

Some words can be interpreted only by reference to the context of utterance. These are called **deictic** expressions, from the Greek for "pointing." They include:

- **person deixis**: *I*, *you*, *we*;
- **place deixis**: *here*, *there*, *this*, *that*, *come*, *go*;
- **time deixis**: *now*, *then*, *today*, *yesterday*, *tomorrow*.

A note left on a door saying "Back in an hour" is useless without knowing when it was written. "Meet me here tomorrow" means nothing until we know who is speaking, where, and when. Languages differ in their deictic systems: Spanish distinguishes three degrees of distance (*este* "this," *ese* "that, near you," *aquel* "that, over there"), and some languages distinguish whether something is uphill or downhill, upriver or downriver, from the speaker.

## Presupposition

As we saw with Strawson, sentences often **presuppose** information that the speaker takes for granted. Certain words and constructions, called presupposition **triggers**, signal this:

- *John stopped smoking* presupposes that John used to smoke.
- *Mary regrets that she lied* presupposes that she lied.
- *It was Sue who broke the vase* presupposes that someone broke the vase.
- *When did you arrive?* presupposes that you arrived.

Presuppositions survive negation: *John didn't stop smoking* still presupposes that he used to smoke. This makes them powerful, and sometimes manipulative. The classic loaded question, "Have you stopped beating your dog?", presupposes that you used to, whether you answer yes or no. Lawyers, advertisers, and politicians use presuppositions to slip claims past their audiences without asserting them.

## Politeness

Speakers constantly manage their relationships through language. In *Politeness* (1987), **Penelope Brown** and **Stephen Levinson** built on the sociologist **Erving Goffman**'s notion of **face**, the public self-image that every person wants to maintain. They distinguished **positive face**, the desire to be liked and approved of, and **negative face**, the desire not to be imposed upon. Many speech acts, such as requests, criticisms, and refusals, threaten face, and speakers use **politeness strategies** to soften them: indirectness ("Could you possibly…?"), hedges ("I was wondering if…"), apologies ("Sorry to bother you, but…"), compliments, and expressions of solidarity.

## Politeness across cultures

Politeness norms vary across cultures. In some cultures, directness is valued as honesty; in others, it is considered rude. Japanese and Korean, as we saw in Lesson III, grammaticalize politeness in honorific verb forms. Misunderstandings between speakers of different cultures often arise not from grammar or vocabulary but from different pragmatic expectations: how to make a request, how to refuse, how long to pause, when to interrupt.

## Pragmatics in the life of faith

Many of these phenomena appear in religious communication: the indirect requests of prayer, the presuppositions of creeds, the politeness of liturgical language, the deixis of the Psalms (whose "I" countless worshippers have made their own). The letter of James observes that "the tongue is a little member, and boasteth great things" (James 3:5, KJV)—a reminder that words act in the world, for good or ill.

> **Pause and consider.** What does "Even John passed the exam" presuppose or imply about John? How does *even* do this?`,
    },
    {
      title: "Conversation and Discourse",
      body: `## Beyond the sentence

Language in use rarely consists of isolated sentences. People converse, tell stories, write letters, preach sermons, and argue. The study of language above the level of the sentence is called **discourse analysis**.

## Taking turns

Conversation is organized with remarkable precision. In a classic paper of 1974, the sociologists **Harvey Sacks**, **Emanuel Schegloff**, and **Gail Jefferson** described the **turn-taking** system of conversation: speakers take turns, usually one at a time, with very little overlap and very short gaps between turns—often a fraction of a second. Listeners anticipate when a speaker's turn will end, using syntax, intonation, and meaning, and begin planning their reply before it does. Later research comparing many languages has found that this rapid turn-taking is remarkably similar across cultures.

## Adjacency pairs

Many turns come in **adjacency pairs**: a first part that calls for a particular kind of second part. A question calls for an answer, a greeting for a greeting, an offer for an acceptance or refusal, a complaint for an apology or a denial. When the expected second part does not come, its absence is noticed and interpreted: a pause after an invitation often signals a coming refusal. Refusals and disagreements are typically delayed and softened ("Well, um, I'd love to, but…"), while acceptances come quickly—an example of the politeness phenomena we met earlier.

## Cohesion

Texts hold together through **cohesion**: linguistic ties between sentences, described by **M. A. K. Halliday** and **Ruqaiya Hasan** in *Cohesion in English* (1976). Pronouns refer back to earlier nouns (*Mary arrived. She was tired.*); conjunctions link ideas (*however*, *therefore*); words repeat or relate to earlier words; and ellipsis omits what can be recovered (*Who wants tea? I do.*). A string of sentences without such ties feels disjointed, even if each sentence is grammatical.

## Narrative

People everywhere tell stories, and stories have structure. In a study of personal narratives published in 1967, **William Labov** and **Joshua Waletzky** identified a typical structure in oral stories of personal experience: an **abstract** (what the story is about), an **orientation** (who, when, where), a **complicating action** (what happened), an **evaluation** (why it matters), a **resolution** (how it ended), and a **coda** (returning to the present). The evaluation, which tells the hearer why the story is worth telling, is often spread throughout.

## Discourse and scripture

Discourse analysis has been applied to biblical texts, studying how Hebrew and Greek narratives mark new episodes, highlight important events, and track participants. Such analysis helps translators render not only words and sentences but the flow of a text, which languages signal in very different ways.

> **Pause and consider.** Think of a story a friend told you recently. Can you identify its orientation, complicating action, and evaluation?`,
    },
    {
      title: "Meaning Across Languages: Translation",
      body: `## The problem of translation

If languages divide the world differently, grammaticalize different categories, and rely on different pragmatic conventions, how is **translation** possible? The Italian proverb *traduttore, traditore*—"translator, traitor"—expresses a common suspicion that every translation betrays its original. Yet translation is one of the oldest and most important human activities, without which the scriptures of the world's religions, the classics of literature, and the treaties of nations could not cross the boundaries of language.

## Jakobson on translation

In the essay we met in Lesson III, "On Linguistic Aspects of Translation" (1959), Roman Jakobson argued that all thought is translatable, but that languages differ in what they must convey. A translator from English into Russian must decide whether a "friend" is male or female, since Russian distinguishes them; a translator into Turkish must decide whether a reported event was witnessed. The translator must often add information the original left open, or lose information the original contained.

## Formal and dynamic equivalence

The American linguist and Bible translator **Eugene Nida** (1914–2011), who worked for the American Bible Society, distinguished two approaches in *Toward a Science of Translating* (1964). **Formal equivalence** aims to reproduce the form of the original as closely as possible—its words, word order, and grammatical structures. **Dynamic equivalence** (later called **functional equivalence**) aims to produce in the reader the same response the original produced in its first readers, even if this requires changing the form. Nida gave examples from translating the Bible into languages of cultures very different from those of ancient Israel. How do you translate "white as snow" (Isaiah 1:18) for people who have never seen snow? "Lamb of God" for people who do not keep sheep? Should the translator substitute a local equivalent, explain the term, or keep it and let readers learn its meaning?

## English Bible translations

English Bible translations illustrate the range of approaches. The **King James Version** (1611) is largely formal in its approach, preserving Hebrew and Greek idioms, which became part of English: "the apple of his eye," "by the skin of my teeth," "a man after his own heart." Modern translations such as the **New American Standard Bible** and the **English Standard Version** also lean toward formal equivalence. The **Good News Bible** (1976), influenced by Nida, and the **New Living Translation** lean toward dynamic equivalence. The **New International Version** seeks a balance. Each approach has gains and losses, and debates among them often reflect theological as well as linguistic convictions.

## Idioms and culture

Idioms resist translation most. A French speaker who has "a cat in the throat" (*avoir un chat dans la gorge*) has what an English speaker calls "a frog in the throat." German speakers who say "I understand only train station" (*Ich verstehe nur Bahnhof*) mean "It's all Greek to me"—which in Greek is "These are Chinese to me." A good translator must recognize idioms and find equivalents, not translate word for word.

## Machine translation

Machine translation, once a byword for comic errors, improved dramatically in the 2010s with neural network methods, and is now used by millions of people daily. It handles many routine texts well, but still struggles with ambiguity, idioms, cultural references, and the subtle pragmatic meanings that human translators recognize. Its successes and failures illuminate the many levels of linguistic knowledge that translation requires.

> **Pause and consider.** How would you translate "white as snow" for readers who have never seen snow? What are the costs of each option?`,
    },
    {
      title: "The Architecture of Language",
      body: `## Putting it together

This course has followed language from the smallest units to the largest: from the movements of the vocal tract and the sounds they produce, through phonemes, syllables, morphemes, and words, to phrases, sentences, meanings, and the uses of language in context. We can now see how these levels fit together.

## Levels and interfaces

Each level has its own units and rules:

- **Phonetics** describes the physical sounds of speech; **phonology** organizes them into phonemes, syllables, and prosodic patterns, governed by rules such as assimilation and phonotactic constraints.
- **Morphology** combines morphemes into words, through derivation, inflection, and compounding.
- **Syntax** combines words into phrases and sentences with hierarchical structure, recursion, and movement.
- **Semantics** assigns meanings to words and sentences, composed according to syntactic structure.
- **Pragmatics** explains how speakers use sentences in context to communicate more than they say.

But the levels interact at every point. Phonology depends on morphology (the plural rule), syntax on the lexicon (subcategorization), semantics on syntax (compositionality, ambiguity), and pragmatics on everything. A speaker producing a single sentence coordinates all these levels in a fraction of a second.

## Saussure and Chomsky revisited

At the beginning of this course, we met **Saussure**, who described language as a social system of arbitrary signs defined by their differences. We have seen his insights confirmed many times: in phonemes defined by contrast, in morphemes whose forms are arbitrary, in meanings organized by relations among words. We have also met **Chomsky**, who described language as a generative system of rules in the mind, capable of infinite creativity through recursion. We have seen his insights confirmed too: in the wug test, in structure dependence, in the infinite sentences that speakers can produce and understand.

## Pinker's instinct

And we have considered **Pinker**'s claim that language is an instinct, a biological adaptation of the human species. The evidence of this course—the universal ability of children to acquire language, the emergence of Nicaraguan Sign Language and of creoles, the specialization of the brain's left hemisphere, the deep similarities across the world's languages—gives that claim real support. So do the critics' points about the diversity of languages and the power of learning. The truth may lie in a combination: human beings are born with a remarkable capacity for language, which is shaped by the particular languages and communities in which they grow up.

## What remains

Many questions remain open. How exactly do children learn language? How is language represented in the brain? How did language evolve? How much does language shape thought? How can endangered languages be preserved? These questions are pursued in the other courses of this department: **LIN 110** on language and mind, **HIL 101** and **HIL 110** on the history of languages, **PHO 101** and **PHO 110** on phonetics, **SYN 101** and **SYN 110** on syntax and semantics, and **SOC 101** and **SOC 110** on language in society.

## A closing word

Language is one of the most remarkable things about human beings: a system of sounds or signs, arbitrary and conventional in its parts, yet capable of expressing anything we can think, learned by every child, shared by every community, and different in every place. The Gospel of John begins by calling the divine Word, the *Logos*, the source of all things: "In the beginning was the Word" (John 1:1). Whatever one's beliefs, the study of human words opens onto some of the deepest questions about what it means to be human.

> **Pause and consider.** Which level of language—sounds, words, sentences, or meanings—did you find most surprising in this course? Why?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each exercise, then write your answers in your notebook.

## 1. Frege, "On Sense and Reference" (1892)

> Hesperus is Hesperus. / Hesperus is Phosphorus.

**Questions**

1. Why do these sentences differ in informativeness, though both names refer to Venus?
2. How do the notions of sense and reference explain the difference?

## 2. Grice, "Logic and Conversation" (1975)

> Dear Sir, Mr. X's command of English is excellent, and his attendance at tutorials has been regular. Yours, etc.

**Questions**

1. What does the letter implicate, and which maxim explains the implicature?
2. Why can implicatures be cancelled, while entailments cannot?

## 3. Austin, How to Do Things with Words (1962)

> I name this ship the *Queen Elizabeth*.

**Questions**

1. Why is this utterance not true or false?
2. What felicity conditions must be met for it to succeed?

## 4. Presupposition

> Have you stopped beating your dog?

**Questions**

1. What does this question presuppose?
2. Why are presuppositions hard to deny, and how are they used to persuade or manipulate?

## Drawing the threads together

In a paragraph, explain the difference between semantics and pragmatics, using at least three of the exercises.`,
    },
  ],
  readings: [
    { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "Read the chapters on semantics and pragmatics." },
    { kind: "book", title: "Metaphors We Live By", author: "George Lakoff and Mark Johnson", publisher: "University of Chicago Press", year: "1980", note: "Read chapters 1–3." },
    { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Clarendon Press", year: "1962", note: "Read Lectures I and II." },
  ],
  media: [
    { kind: "book", title: "Studies in the Way of Words", author: "H. P. Grice", publisher: "Harvard University Press", year: "1989", note: "Contains \"Logic and Conversation\"; read it." },
    { kind: "book", title: "Toward a Science of Translating", author: "Eugene A. Nida", publisher: "E. J. Brill", year: "1964", note: "Read the chapter on principles of correspondence." },
  ],
  questions: [
    {
      prompt: "What is the difference between semantics and pragmatics?",
      choices: [
        "There is none",
        "Semantics studies the meanings of words and sentences; pragmatics studies how speakers use them in context",
        "Semantics studies sounds",
        "Pragmatics studies grammar",
      ],
      answer: 1,
      explanation: "\"Can you pass the salt?\" is a question semantically, a request pragmatically.",
    },
    {
      prompt: "According to Frege, how do Hesperus and Phosphorus differ?",
      choices: [
        "In reference",
        "In sense (mode of presentation), though they share a reference",
        "In both sense and reference",
        "In neither",
      ],
      answer: 1,
      explanation: "Both refer to the planet Venus.",
    },
    {
      prompt: "What did Strawson argue about \"The present king of France is bald\"?",
      choices: [
        "That it is true",
        "That it presupposes there is a king of France, and if not, the question of truth does not arise",
        "That it is false, as Russell said",
        "That it is meaningless",
      ],
      answer: 1,
      explanation: "Russell had argued it was false.",
    },
    {
      prompt: "What kind of antonyms are hot and cold?",
      choices: ["Complementary", "Gradable", "Relational", "Synonyms"],
      answer: 1,
      explanation: "Something can be neither, and comparison is possible.",
    },
    {
      prompt: "What did Eleanor Rosch show about categories?",
      choices: [
        "That all members are equally typical",
        "That categories are organized around prototypes, with some members more typical than others",
        "That categories do not exist",
        "That only scientists can define categories",
      ],
      answer: 1,
      explanation: "A robin is a more typical bird than a penguin.",
    },
    {
      prompt: "What is the principle of compositionality?",
      choices: [
        "That words have no meaning",
        "That the meaning of a complex expression is determined by the meanings of its parts and how they are combined",
        "That sentences are composed of sounds",
        "That music and language are related",
      ],
      answer: 1,
      explanation: "It explains how we understand new sentences.",
    },
    {
      prompt: "Which of the following is an example of the conceptual metaphor ARGUMENT IS WAR?",
      choices: [
        "\"You're wasting my time\"",
        "\"He attacked every weak point in my argument\"",
        "\"Prices rose\"",
        "\"I see what you mean\"",
      ],
      answer: 1,
      explanation: "Lakoff and Johnson, Metaphors We Live By (1980).",
    },
    {
      prompt: "Why does \"Some of the students passed\" usually suggest that not all passed?",
      choices: [
        "Because some means \"not all\"",
        "Because of a conversational implicature from the maxim of quantity",
        "Because of the maxim of manner",
        "Because of presupposition",
      ],
      answer: 1,
      explanation: "The implicature can be cancelled: \"in fact, all did.\"",
    },
    {
      prompt: "What is a performative utterance, according to Austin?",
      choices: [
        "A theatrical speech",
        "An utterance that performs an action by being said, such as \"I promise\" or \"I do\"",
        "A false statement",
        "A question",
      ],
      answer: 1,
      explanation: "It can succeed or fail, but is not true or false.",
    },
    {
      prompt: "What did Eugene Nida mean by dynamic equivalence?",
      choices: [
        "Reproducing the form of the original as closely as possible",
        "Producing in readers the same response the original produced in its first readers, even if the form changes",
        "Translating word for word",
        "Using machines to translate",
      ],
      answer: 1,
      explanation: "He contrasted it with formal equivalence.",
    },
  ],
  reflection:
    "Much of what speakers communicate is not said but implied, presupposed, or performed. In 500–800 words, explain how Grice's implicatures, Austin's speech acts, and presupposition each go beyond literal meaning, using examples from everyday conversation, and reflect on what this means for translation.",
};
