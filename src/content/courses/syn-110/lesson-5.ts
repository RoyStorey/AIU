import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "Meaning in Use and in the Mind",
  summary:
    "Meaning beyond the literal; deixis and the speaker's point of view; Austin's and Searle's speech acts; Grice's cooperative principle and conversational implicature; scalar implicatures in adults and children; relevance theory; politeness and face across cultures; conceptual metaphor and its critics; frames, metonymy, and blending; construal in cognitive grammar; whether machines can mean; and a review of the course.",
  pages: [
    {
      title: "Beyond the Literal",
      body: `## What speakers mean

In Lessons II to IV, we studied the conventional meanings of words and sentences. But what speakers communicate often goes far beyond, or differs from, the literal meaning of their words:

- *Can you pass the salt?* is literally a question about ability, but is used as a request.
- *Some of the students passed* literally allows that all passed, but usually conveys that not all did.
- *It's a bit chilly in here* may be used to ask someone to close the window.
- *My lawyer is a shark* is literally false, but communicates something about the lawyer's character.

How do hearers work out what speakers mean? This is the central question of **pragmatics**.

## Two perspectives

In this lesson, we approach meaning in use from two perspectives:

- **Pragmatics**, developed largely by philosophers of language such as **J. L. Austin**, **John Searle**, and **H. P. Grice**, studies how speakers use language to perform actions and how hearers infer meanings from context.
- **Cognitive semantics**, developed by linguists such as **George Lakoff**, **Ronald Langacker**, **Leonard Talmy**, and **Charles Fillmore**, studies how meaning is grounded in human experience and cognition: in metaphor, frames, and the ways speakers **construe** situations.

These perspectives are different, but both emphasize that meaning is not simply a matter of words corresponding to the world; it depends on minds, contexts, and purposes.

## Connections with LIN 101

As we saw in LIN 101, pragmatics includes the study of deixis, speech acts, implicature, presupposition, and politeness, and cognitive semantics includes the study of metaphor. This lesson explores these topics in more depth, with attention to the theoretical debates and experimental evidence.

## Saeed's treatment

Saeed devotes chapters to **context and inference**, **functions of language**, and **cognitive semantics**. He presents both pragmatic and cognitive approaches, and their relation to the formal semantics of Lesson III. As he notes, a complete account of meaning must integrate all three.

## The plan

We begin with **deixis**, the most direct link between language and context. We then study **speech acts**, **implicature**, **relevance theory**, and **politeness**. We turn to cognitive semantics: **metaphor**, **frames**, **blending**, and **construal**. We end by asking whether machines can mean, and by reviewing the course.

> **Pause and consider.** Think of something you said today that meant more than its literal words. How did your hearer know what you meant?`,
    },
    {
      title: "Deixis",
      body: `## Pointing with words

**Deixis** (from Greek *deîxis*, "pointing" or "showing") refers to words and expressions whose meaning depends on the **context** of utterance: who is speaking, to whom, where, and when. As we saw in Lesson I, such expressions are called **indexicals**, and their reference changes from one context to another, though their meaning stays the same.

## Kinds of deixis

- **Person deixis**: *I*, *you*, *we*; their reference depends on who is speaking and who is addressed.
- **Place deixis**: *here*, *there*, *this*, *that*, *come*, *go*; their reference depends on where the speaker is.
- **Time deixis**: *now*, *then*, *today*, *yesterday*, *next week*; and tense, which locates events relative to the moment of speaking.
- **Social deixis**: forms that encode social relationships, such as the T/V pronouns (French *tu*/*vous*), which we met in HIL 101, and honorifics in Japanese and Korean.
- **Discourse deixis**: expressions that point to parts of the discourse: *this story*, *the following example*, *as mentioned above*.

## The deictic center

The German psychologist **Karl Bühler**, in *Theory of Language* (*Sprachtheorie*, 1934), described deixis in terms of a **deictic center** or **origo**: the "here-now-I" of the speaker, from which deictic expressions are interpreted. *Here* means near the speaker; *now* means at the time of speaking; *come* means motion toward the speaker (or the hearer).

## Shifting the center

The deictic center can **shift**. In narratives, the center may move to a character: *She opened the door. Here was the room she had dreamed of.* In letters, writers may shift the time to the reader's: *By the time you read this, I will have left*. And *come* can be used for motion toward the hearer: *I'll come to your house tomorrow*.

## Demonstrative systems

Languages differ in their **demonstrative** systems:

- English has a two-way system: *this* (near the speaker) and *that* (not near).
- **Japanese** has a three-way system: *kore* (near the speaker), *sore* (near the hearer), and *are* (away from both).
- **Spanish** has *este*, *ese*, and *aquel*, distinguishing three degrees of distance.
- Some languages also distinguish height (above or below the speaker), visibility, or direction uphill or downhill, as in some languages of the Himalayas and Papua New Guinea.

## Deixis and gesture

Deictic words are often accompanied by **pointing** gestures: *Put it **there*** (with a point). Researchers studying gesture, such as **David McNeill** and **Sotaro Kita**, have found that pointing is universal but its forms vary across cultures: in some communities, people point with the lips or the chin rather than the index finger.

## Why deixis matters

Deixis shows that understanding many sentences requires knowledge of the context: who is speaking, where, and when. A sentence like *I'll meet you here tomorrow*, found written on a scrap of paper without context, cannot be fully understood. Deixis thus provides the clearest evidence that meaning depends on context, and connects semantics with pragmatics.

> **Pause and consider.** Find a note or message with *here*, *now*, or *tomorrow*. Could someone who found it years later understand it fully?`,
    },
    {
      title: "Speech Acts",
      body: `## Doing things with words

In lectures delivered at Harvard in 1955 and published as *How to Do Things with Words* (1962), the British philosopher **J. L. Austin** pointed out that many utterances are not statements of fact but **actions**. When a minister says *I now pronounce you husband and wife*, or someone says *I promise to come*, *I name this ship the Queen Elizabeth*, or *I bet you five dollars it will rain*, they are not describing an action; they are **performing** it. Austin called such utterances **performatives**.

## Felicity conditions

Performatives are not true or false, but they can be **infelicitous**, if certain conditions are not met. A ship is not named if the person naming it has no authority; a marriage is not performed if the person officiating is not authorized, or if one of the parties is already married. Austin called these **felicity conditions**.

## Locution, illocution, perlocution

Austin realized that all utterances, not just explicit performatives, perform actions. He distinguished three aspects of a speech act:

- the **locutionary** act: uttering words with a certain meaning (*It's cold in here*);
- the **illocutionary** act: the action performed in saying it (a statement, a request, a complaint);
- the **perlocutionary** act: the effect on the hearer (getting them to close the window).

The **illocutionary force** of an utterance, what kind of act it is, became the central concern of speech act theory.

## Searle's taxonomy

The American philosopher **John Searle**, in *Speech Acts* (1969) and later work, developed Austin's ideas. In 1975, he proposed a classification of illocutionary acts into five types:

- **Representatives** (assertives): committing the speaker to the truth of a proposition: stating, claiming, reporting.
- **Directives**: attempting to get the hearer to do something: requesting, ordering, asking.
- **Commissives**: committing the speaker to a future action: promising, threatening, offering.
- **Expressives**: expressing the speaker's attitude: thanking, apologizing, congratulating.
- **Declarations**: bringing about a change in the world by the utterance itself: naming, marrying, firing, declaring war.

## Indirect speech acts

Often, the illocutionary force of an utterance differs from its grammatical form. *Can you pass the salt?* is grammatically a question, but is usually a request. *I'd like a coffee* is a statement, but functions as an order in a café. Searle called these **indirect speech acts**. Hearers recognize them by reasoning about the speaker's intentions: since the speaker obviously knows I can pass the salt, the question must have another purpose.

## Speech acts across cultures

The ways of performing speech acts vary across cultures. Studies of requests and apologies in many languages, such as the Cross-Cultural Speech Act Realization Project led by **Shoshana Blum-Kulka** and colleagues in the 1980s, found that languages differ in how directly requests are made, how apologies are expressed, and what is considered polite. Direct requests may be appropriate in one culture and rude in another.

## Speech acts in scripture

The power of words to act is a theme of many religious traditions. In the Bible, God creates by speaking: "And God said, Let there be light: and there was light" (Genesis 1:3), a declaration that brings about what it says. Blessings, curses, vows, and covenants are speech acts with lasting effects in the biblical narratives.

> **Pause and consider.** Classify each by Searle's types: *I apologize*; *Close the door*; *I resign*; *It's raining*; *I'll be there at six*.`,
    },
    {
      title: "Grice and Conversational Implicature",
      body: `## Meaning more than we say

As we saw in LIN 101 and Lesson I, the philosopher **H. P. Grice** distinguished between what a speaker **says** and what they **implicate**. In his William James Lectures at Harvard in 1967, partly published as "Logic and Conversation" (1975), he proposed a theory of how hearers infer implicatures.

## The Cooperative Principle

Grice proposed that conversation is governed by a **Cooperative Principle**: speakers are expected to make their contributions appropriate to the purposes of the conversation. He spelled this out in four **maxims**:

- **Quantity**: make your contribution as informative as required, but not more informative than required.
- **Quality**: try to make your contribution true; do not say what you believe to be false or lack evidence for.
- **Relation**: be relevant.
- **Manner**: be clear; avoid obscurity, ambiguity, unnecessary wordiness, and disorder.

## Implicature

Hearers assume that speakers are following the maxims, and draw inferences accordingly. These inferences are **conversational implicatures**. For example:

- *A: Where's John? B: His car is outside the library.* B implicates that John is probably in the library, because, assuming B is being relevant (maxim of Relation), the information about the car must bear on John's location.
- *A: Did you finish the essay? B: I wrote the introduction.* B implicates that they did not finish, because, if they had, the maxim of Quantity would have required them to say so.

## Flouting

Speakers can also **flout** the maxims openly, to produce implicatures. Grice gave the example of a letter of recommendation for a philosophy job that says only: "Mr. X's command of English is excellent, and his attendance at tutorials has been regular." The writer conspicuously says too little (flouting Quantity), and the reader infers that the writer thinks Mr. X is a poor philosopher. Irony, metaphor, and hyperbole can also be explained as flouting the maxim of Quality: *What lovely weather!* said in a storm.

## Properties of implicature

Grice identified several properties that distinguish implicatures from entailments:

- **Cancellability**: implicatures can be canceled without contradiction: *Some students passed; in fact, all did*.
- **Calculability**: implicatures can be worked out from the literal meaning, the context, and the maxims.
- **Non-detachability**: implicatures generally depend on meaning, not form, so synonymous expressions carry the same implicatures.

## Conventional implicature

Grice also identified **conventional implicatures**, which are attached to particular words but do not affect truth conditions: *but* implies contrast (*She is poor but honest*), *even* implies unexpectedness (*Even John came*). As we saw in Lesson III, Christopher Potts developed a formal theory of such meanings.

## Grice's influence

Grice's theory transformed the study of meaning. It allowed semanticists to keep simple, logical meanings for words like *and*, *or*, and *some*, explaining their richer uses as implicatures, as we saw in Lesson III. And it provided a model of communication as **rational inference** about the speaker's intentions, which has influenced linguistics, philosophy, psychology, and artificial intelligence.

> **Pause and consider.** *A: Are you coming to the party? B: I have an exam tomorrow.* What does B implicate, and which maxim explains it?`,
    },
    {
      title: "Scalar Implicature",
      body: `## Some, not all

One of the most studied kinds of implicature is **scalar implicature**. When a speaker says *Some of the students passed*, hearers usually infer that **not all** passed. Why? Because if all had passed, the speaker, following the maxim of Quantity, would have used the stronger term *all*. Since they did not, the hearer infers that the stronger statement is not true.

## Horn scales

**Laurence Horn**, in his dissertation of 1972, observed that such implicatures arise from **scales** of expressions ordered by informativeness, now called **Horn scales**:

- ⟨*some*, *most*, *all*⟩
- ⟨*or*, *and*⟩
- ⟨*warm*, *hot*⟩
- ⟨*possible*, *likely*, *certain*⟩
- ⟨*good*, *excellent*⟩
- ⟨*sometimes*, *often*, *always*⟩

Using a weaker term implicates that the stronger terms do not apply: *The soup is warm* implicates that it is not hot; *She's good* implicates that she is not excellent.

## Cancelable

Scalar implicatures can be canceled: *Some of the students passed; indeed, all of them did*. And they disappear in certain contexts: in *If some of the students passed, the teacher will be pleased*, the teacher will be pleased even if all passed. This shows that "not all" is not part of the literal meaning of *some*.

## Children and logic

Do children compute scalar implicatures? In a study published in 2001, the psychologist **Ira Noveck** asked children and adults to judge sentences like *Some giraffes have long necks*. Adults often judged the sentence false or odd, because it implicates that not all giraffes have long necks, which is untrue. Young children, by contrast, typically accepted it as true, interpreting *some* in its logical sense, "at least one." Noveck titled his paper "When Children Are More Logical Than Adults." Later studies, such as those by **Anna Papafragou** and colleagues, found that children can compute scalar implicatures when the task makes the alternatives clear, suggesting that the difficulty lies in accessing the stronger alternatives rather than in reasoning.

## Processing implicatures

Psycholinguists have debated whether scalar implicatures are computed **automatically**, as a default, or only when the context requires. **Stephen Levinson**, in *Presumptive Meanings* (2000), argued that some implicatures are **generalized**, arising by default unless canceled. Experiments by **Lewis Bott** and Noveck in 2004 found that judging *Some elephants are mammals* as false (computing the implicature) took longer than judging it true (not computing it), suggesting that implicatures require extra processing time. The debate between default and contextual accounts continues.

## The grammatical view

Some linguists, such as **Gennaro Chierchia**, **Danny Fox**, and **Benjamin Spector**, have argued that scalar implicatures are computed in the **grammar**, by a silent operator meaning roughly "only," rather than by pragmatic reasoning. This view explains why implicatures sometimes arise in embedded positions where Gricean reasoning would not predict them. The question of whether implicatures are pragmatic or grammatical is one of the central debates at the boundary of semantics and pragmatics.

> **Pause and consider.** Is *Some dogs are mammals* true or false? Why might people disagree?`,
    },
    {
      title: "Relevance Theory",
      body: `## One principle

In *Relevance: Communication and Cognition* (1986), the French anthropologist **Dan Sperber** and the British linguist **Deirdre Wilson** proposed a theory of communication that replaced Grice's four maxims with a single principle of **relevance**.

## Relevance

Sperber and Wilson defined relevance in terms of **cognitive effects** and **processing effort**. An input (an utterance, an observation) is relevant to the extent that it produces significant cognitive effects (new conclusions, strengthened or abandoned assumptions) for a small processing effort. Human cognition, they argued, is geared to maximize relevance: we pay attention to inputs that seem likely to be relevant, and interpret them in the way that yields the most effects for the least effort.

## Ostensive communication

When a speaker addresses a hearer, the utterance comes with a **presumption of optimal relevance**: the speaker communicates, by the very act of speaking, that the utterance is worth the hearer's attention. The hearer therefore looks for an interpretation that is relevant enough, and stops at the first one that satisfies this expectation. This **relevance-theoretic comprehension procedure** explains how hearers resolve ambiguities, assign reference, and derive implicatures quickly.

## Explicature

A key innovation of relevance theory was the notion of **explicature**: the explicit content of an utterance, which, Sperber and Wilson argued, requires much more pragmatic inference than Grice had assumed. Consider:

> *She took out her key and opened the door.*

The hearer understands that she opened the door **with the key**, though this is not said. In *It will take some time to repair your car*, the hearer understands "a considerable time," though any repair takes "some time." Relevance theorists argue that these enrichments are part of what is **explicitly** communicated, not implicatures, and that pragmatics shapes even the basic truth-conditional content of utterances, a view we met as **contextualism** in Lesson I.

## Ad hoc concepts

Relevance theory also proposes that word meanings are adjusted in context, forming **ad hoc concepts**. In *The steak is raw*, said in a restaurant about an undercooked steak, *raw* is understood more loosely than its literal meaning (completely uncooked). In *I need a drink*, *drink* is often understood more narrowly (an alcoholic drink). This **lexical pragmatics**, developed by **Robyn Carston** and others, explains how words can be used flexibly, including in metaphor and hyperbole, without positing separate literal and figurative meanings.

## Metaphor in relevance theory

For relevance theorists, metaphor is not a special kind of language but one end of a continuum of loose use. *My lawyer is a shark* communicates a set of properties (aggressive, predatory, ruthless) through an ad hoc concept SHARK\\* that applies to the lawyer. This contrasts with the view of conceptual metaphor theory, which we study later in this lesson.

## Criticisms

Relevance theory has been criticized for the vagueness of its central notions, since cognitive effects and processing effort are hard to measure, and for being difficult to test. Supporters reply that experimental work has confirmed many of its predictions about how context influences interpretation. Relevance theory remains one of the most influential approaches to pragmatics.

> **Pause and consider.** In *She took out her key and opened the door*, how do you know she opened the door with the key? Is this said or implied?`,
    },
    {
      title: "Politeness and Face",
      body: `## Why be polite?

Why do speakers often express themselves indirectly, softening requests, hedging criticisms, and adding apologies? One answer is **politeness**: the need to maintain good social relations.

## Face

In *Politeness: Some Universals in Language Usage* (1987, first published in 1978), the anthropologists **Penelope Brown** and **Stephen Levinson** developed a theory of politeness based on the concept of **face**, borrowed from the sociologist **Erving Goffman**. Face is a person's public self-image, which has two aspects:

- **positive face**: the desire to be liked, approved of, and included;
- **negative face**: the desire to be unimpeded, free from imposition.

Many speech acts threaten face: requests impose on the hearer's negative face; criticisms threaten their positive face; apologies threaten the speaker's own positive face. Brown and Levinson called these **face-threatening acts**.

## Strategies

Speakers can perform face-threatening acts in several ways, with increasing politeness:

1. **Bald on record**, directly, without mitigation: *Close the window.*
2. With **positive politeness**, emphasizing solidarity and friendliness: *Hey, buddy, would you close the window for me?*
3. With **negative politeness**, emphasizing respect and minimizing imposition: *I'm sorry to bother you, but could you possibly close the window?*
4. **Off record**, indirectly, leaving the hearer to infer the request: *It's getting a bit cold in here.*
5. Not doing the act at all.

The choice of strategy depends on the **social distance** between speaker and hearer, their relative **power**, and the **size of the imposition**.

## Universals and culture

Brown and Levinson claimed that their framework was **universal**, illustrated with data from English, Tamil, and Tzeltal. Critics, especially from East Asia, argued that it reflected Western individualism. **Yoshiko Matsumoto** (1988) and **Sachiko Ide** (1989) argued that Japanese politeness is less about avoiding imposition on individuals and more about acknowledging one's place in social relationships, which Ide called ***wakimae*** ("discernment"): using the forms socially required by the situation, such as honorifics, regardless of strategic intentions. Others argued that the concept of face itself, borrowed from Chinese *miànzi* and *liǎn*, differs across cultures.

## Politeness in grammar

In some languages, politeness is built into the grammar. **Japanese** and **Korean** have elaborate systems of **honorifics**, in which verb forms, nouns, and pronouns vary according to the social relations among speaker, hearer, and referent. Korean, for example, has several **speech levels**, marked by verb endings, ranging from intimate to deferential. Choosing the wrong level can be seriously offensive. Many European languages, as we saw, have T/V pronoun distinctions.

## Impoliteness

Researchers such as **Jonathan Culpeper** have also studied **impoliteness**: language used to attack face, as in insults, sarcasm, and the exchanges of reality television. Impoliteness has its own conventions and strategies, and its study complements the study of politeness.

## Politeness and morality

Politeness is not only a social convention but also, in many traditions, a moral matter. The book of Proverbs observes that "A soft answer turneth away wrath: but grievous words stir up anger" (Proverbs 15:1). The linguistic study of politeness describes the means by which speakers, in every culture, try to speak in ways that preserve relationships.

> **Pause and consider.** How would you ask a stranger, a close friend, and your employer to lend you a pen? What changes, and why?`,
    },
    {
      title: "Conceptual Metaphor",
      body: `## Metaphors we live by

In *Metaphors We Live By* (1980), the linguist **George Lakoff** and the philosopher **Mark Johnson** argued that metaphor is not merely a decorative feature of poetry, but a fundamental feature of everyday language and thought. As we saw in LIN 101, they proposed that we understand abstract domains in terms of more concrete ones, through **conceptual metaphors**.

## Examples

Lakoff and Johnson illustrated their theory with many systematic patterns of expressions:

- **ARGUMENT IS WAR**: *He attacked my position*; *I defended my claim*; *She shot down my argument*; *He won the debate*.
- **TIME IS MONEY**: *You're wasting my time*; *This will save you hours*; *I've invested a lot of time in it*; *Can you spare a minute?*
- **LIFE IS A JOURNEY**: *She's at a crossroads*; *He's going nowhere*; *We've come a long way*.
- **MORE IS UP**: *Prices rose*; *Her income fell*; *The number of students is high*.
- **UNDERSTANDING IS SEEING**: *I see what you mean*; *That's a clear explanation*; *Her argument was murky*.

## Source and target

In each conceptual metaphor, a **source** domain (war, money, journey, vertical space, vision), usually concrete and familiar, is mapped onto a **target** domain (argument, time, life, quantity, understanding), usually abstract. The mapping is **systematic**: correspondences between the domains allow many expressions, including new ones, to be understood. If time is money, it can be *spent*, *saved*, *wasted*, *budgeted*, or *borrowed*.

## Embodiment

Lakoff and Johnson argued that many conceptual metaphors are grounded in **bodily experience**. MORE IS UP reflects the experience that piling up more things makes the pile higher; AFFECTION IS WARMTH reflects the experience of being held by caregivers. **Joseph Grady** proposed in 1997 that complex metaphors are built from **primary metaphors** grounded in correlations in experience. This idea, that meaning is **embodied**, became central to cognitive semantics.

## Metaphor and reasoning

If metaphors structure thought, they should affect reasoning. In a study published in 2011, **Paul Thibodeau** and **Lera Boroditsky** gave people a short report on crime in a city, describing crime either as a **beast** preying on the city or as a **virus** infecting it, with otherwise identical statistics. Those who read the beast metaphor were more likely to recommend enforcement and punishment; those who read the virus metaphor were more likely to recommend addressing social causes. Later replications found smaller effects, but the study suggested that metaphors can frame thinking about social problems.

## Criticisms

Conceptual metaphor theory has been criticized:

- **Gregory Murphy**, in 1996, argued that the evidence from linguistic expressions does not show that people actually **think** metaphorically; the expressions might be conventional idioms, with the metaphor no longer active.
- Some critics argued that the theory overgeneralizes, finding metaphors everywhere without clear criteria.
- As we saw, relevance theorists offer an alternative account of metaphor as loose use.

Experimental studies have found evidence that some conceptual metaphors are psychologically active, such as spatial metaphors for time, which we studied in Lesson IV, while others may be more conventionalized.

## Metaphor in scripture and literature

Religious and literary texts are rich in conceptual metaphors. In the Bible, God is a shepherd ("The LORD is my shepherd," Psalm 23:1), a rock, a father, and a king; life is a path ("Thy word is a lamp unto my feet, and a light unto my path," Psalm 119:105). Studying such metaphors can illuminate how texts structure understanding of the divine and of human life.

> **Pause and consider.** List five expressions based on the metaphor IDEAS ARE FOOD (for example, *food for thought*). How systematic is the pattern?`,
    },
    {
      title: "Frames, Metonymy, and Blending",
      body: `## Frames

The American linguist **Charles Fillmore**, whom we met in SYN 101 and Lesson II, developed **frame semantics** in the 1970s and 1980s. A **frame** is a structured background of knowledge that a word evokes and against which it is understood. Fillmore's classic example is the **commercial transaction** frame, which includes a **buyer**, a **seller**, **goods**, and **money**. The verbs *buy*, *sell*, *pay*, *spend*, *cost*, and *charge* all evoke this frame, but each focuses on different participants:

- *Mary **bought** the book from John for ten dollars.* (focus on buyer and goods)
- *John **sold** the book to Mary.* (focus on seller and goods)
- *Mary **paid** John ten dollars.* (focus on buyer and money)
- *The book **cost** ten dollars.* (focus on goods and money)

To understand any of these words, a speaker must understand the whole frame.

## Frames and bachelor

As we saw in Lesson II, Fillmore used frames to explain the oddity of calling the Pope a *bachelor*: the word evokes a frame of social expectations about marriage, in which the Pope does not fit. Frames thus explain prototype effects and the role of background knowledge in word meaning.

## FrameNet

From 1997, Fillmore and colleagues at Berkeley built **FrameNet**, a database of English frames and the words that evoke them, annotated with examples from a corpus. FrameNet describes over a thousand frames and has been used in linguistics and natural language processing.

## Metonymy

**Metonymy**, as we saw in HIL 101, is the use of one entity to refer to another associated with it: *The White House announced* (the president's staff); *I've read all of Dickens* (his works); *The kettle is boiling* (the water in it). Cognitive semanticists, such as **Günter Radden** and **Zoltán Kövecses**, argue that metonymy is as fundamental to thought as metaphor: it allows us to access a whole through a salient part or associated entity. Metonymy within a frame explains much regular polysemy, which we studied in Lesson II.

## Conceptual blending

The French-American linguist **Gilles Fauconnier** and the American literary scholar **Mark Turner**, in *The Way We Think* (2002), proposed a theory of **conceptual blending**. In a blend, elements from two or more mental spaces are combined to create a new, emergent structure. Consider:

> *This surgeon is a butcher.*

The meaning is not simply that the surgeon cuts flesh, as a butcher does: surgeons also cut flesh. The insult arises from blending the **surgeon** space (with its goal of healing) with the **butcher** space (with its methods of crude cutting), producing an emergent meaning: incompetence. Blending theory has been applied to metaphor, counterfactuals, humor, and creativity.

## Mental spaces

Blending builds on Fauconnier's earlier theory of **mental spaces** (1985): temporary representations set up by expressions such as *In the movie*, *If I were you*, or *Mary believes that*. Mental spaces help explain reference in complex contexts: in *In the movie, Clint Eastwood is a villain*, the actor and the character are linked across spaces.

## The cognitive picture

Frames, metonymy, metaphor, and blending together present a picture of meaning as deeply rooted in **conceptual structure** and **world knowledge**. Words are not simply labels for things but access points to rich networks of knowledge, organized by experience and imagination.

> **Pause and consider.** What frame does the word *refund* evoke? Which participants and events does it presuppose?`,
    },
    {
      title: "Construal",
      body: `## Ways of seeing

A central idea of **cognitive grammar**, developed by the American linguist **Ronald Langacker** in *Foundations of Cognitive Grammar* (1987, 1991), is **construal**: the same situation can be described, or conceived, in different ways, and these differences are part of meaning.

Consider:

- *The glass is half full.* / *The glass is half empty.*
- *The roof slopes upward.* / *The roof slopes downward.*
- *The hill rises from the river.* / *The hill falls to the river.*
- *I sold the car to Mary.* / *Mary bought the car from me.*

Each pair has the same truth conditions, as we saw in Lesson III, but presents the situation differently, emphasizing different aspects or adopting different viewpoints. Langacker argued that these differences are genuinely semantic, part of the meaning of the expressions.

## Dimensions of construal

Langacker and other cognitive linguists identified several dimensions of construal:

- **Profiling**: an expression designates (profiles) a particular part of a larger conceptual base. *Hypotenuse* profiles one side of a right triangle; it cannot be understood without the triangle as its base.
- **Figure and ground**: one element (the **trajector**) is the focus of attention, located relative to another (the **landmark**). *The bike is near the house* is natural; *The house is near the bike* is odd, because houses are usually landmarks, not trajectors. As **Leonard Talmy** showed, smaller, more mobile objects tend to be figures, and larger, more stable ones grounds.
- **Perspective**: the viewpoint from which a scene is described: *The ball is in front of the tree* depends on where the speaker stands, as we saw with frames of reference in Lesson II.
- **Specificity**: a scene can be described at different levels of detail: *something happened*, *an animal moved*, *a dog ran*, *a black poodle sprinted*.
- **Scanning**: Langacker distinguished summary scanning, viewing a scene as a whole, from sequential scanning, following it over time: *The road winds through the valley* describes a static road as if traveling along it, an example of **fictive motion** studied by Talmy.

## Grammar as conceptualization

In cognitive grammar, grammatical categories and constructions are themselves meaningful, expressing particular construals. A **noun** profiles a "thing," a **verb** a "process"; the difference between *explode* and *explosion* lies in construal: the same event is viewed as a process unfolding in time or as a bounded thing. The **passive**, as we saw in SYN 101, chooses a different participant as the figure. On this view, grammar is not an autonomous formal system, as in generative syntax, but a repertoire of conventional ways of construing experience.

## Debates

The cognitive approach contrasts sharply with the formal semantics of Lesson III and the generative syntax of SYN 101. Formal semanticists reply that many construal differences can be captured in formal terms, for example as differences in presupposition or information structure. Generative syntacticians maintain that syntax has properties, such as islands and binding, that are not reducible to conceptualization. Many linguists today draw on insights from both traditions.

## Construal and persuasion

Construal also matters in practical life. Journalists, lawyers, politicians, and advertisers choose construals carefully: *tax relief* versus *tax cuts*; *collateral damage* versus *civilian deaths*; *the glass is half full*. As we saw with causation in Lesson IV, the way an event is described can influence judgments of responsibility. The study of construal helps readers recognize how language shapes the presentation of events.

> **Pause and consider.** Describe the same event twice, construing it differently each time. What changes in emphasis?`,
    },
    {
      title: "Irony, Hyperbole, and Humor",
      body: `## Saying the opposite

**Irony**, in its verbal form, involves saying something while meaning something different, often the opposite: *What lovely weather!* in a downpour; *That went well* after a disaster. As we saw, Grice explained irony as flouting the maxim of Quality: the speaker says something obviously false, and the hearer infers that the speaker means something related, usually the opposite.

## Echo and pretense

Later theorists found Grice's account incomplete. Irony is not just saying the opposite: *What lovely weather!* is ironic only if someone might have expected or hoped for lovely weather. **Dan Sperber** and **Deirdre Wilson**, in 1981, proposed that irony is **echoic**: the speaker echoes a thought, expectation, or utterance (perhaps the weather forecast's promise of sun) and expresses a dissociative attitude toward it, such as mockery or disappointment. **Herbert Clark** and **Richard Gerrig**, in 1984, proposed instead that irony is a kind of **pretense**: the speaker pretends to be a naive person who would say such a thing, inviting the hearer to see through the pretense. Both accounts explain why irony usually targets expectations and norms.

## Cues to irony

How do hearers recognize irony? Context is the most important cue: the clash between what is said and what is evident. Speakers may also use a distinctive **ironic tone of voice**, often slower, with exaggerated intonation or flat pitch, though studies have found that such tones vary and are not always used. In writing, where tone is absent, irony is easily missed, which is why online writers sometimes add markers to signal it.

## Children and irony

Children understand irony relatively late. Studies have found that young children often take ironic utterances literally, and that the ability to understand irony develops gradually through middle childhood, around the age of six and beyond, connected with the development of **theory of mind**, the ability to reason about others' beliefs and intentions, which we met in LIN 110.

## Hyperbole and understatement

**Hyperbole** is exaggeration: *I've told you a million times*; *I'm starving*; *This bag weighs a ton*. **Understatement** (meiosis) is the reverse: *It's a bit chilly* during a blizzard; *He's not the brightest* for someone very dim. Litotes, which we met in Lesson IV, is a form of understatement. In relevance theory, both are forms of loose use, like metaphor: the hearer adjusts the concept to fit the context.

## Humor

Much **humor** depends on meaning. In *Semantic Mechanisms of Humor* (1985), the linguist **Victor Raskin** proposed a theory in which a joke is compatible with two different **scripts** (frames, in Fillmore's sense), which are opposed in some way, and the punchline triggers a switch from one to the other. A classic example: *"Is the doctor at home?" the patient asked in his bronchial whisper. "No," the doctor's young and pretty wife whispered in reply. "Come right in."* The text fits a script about a medical visit, until the reply forces a switch to a script about a romantic visit. Puns exploit lexical ambiguity, and many jokes exploit the structural ambiguities we studied in SYN 101.

## The value of figurative language

Irony, hyperbole, and humor show that communication involves far more than decoding literal meanings. Speakers and hearers constantly navigate between what is said and what is meant, drawing on shared knowledge, expectations, and imagination. This creative flexibility is one of the most distinctively human aspects of language.

> **Pause and consider.** A friend says *Great, just great* after missing the bus. How do you know they are being ironic?`,
    },
    {
      title: "Can Machines Mean?",
      body: `## Talking computers

Large language models, which we met in SYN 101 and Lesson II, can now produce fluent text, answer questions, summarize documents, and carry on conversations. Do they **understand** what they say? Do their words **mean** anything?

## The Chinese Room

The question has a long history. In 1980, the philosopher **John Searle**, whom we met earlier in this lesson, proposed a famous thought experiment, the **Chinese Room**. Imagine a person who knows no Chinese locked in a room with a rulebook for manipulating Chinese characters. People outside pass in questions written in Chinese; the person follows the rules to produce answers, which are indistinguishable from those of a native speaker. Yet the person understands nothing. Searle argued that a computer running a program is in the same position: it manipulates symbols according to rules (syntax) without understanding their meaning (semantics). Many philosophers have replied to Searle, for example arguing that the whole system, room and person together, might understand, but the debate remains unresolved.

## The octopus

In 2020, the linguists **Emily Bender** and **Alexander Koller** proposed a related thought experiment. Imagine a highly intelligent **octopus** that taps into an underwater telegraph cable between two people stranded on separate islands, and learns to predict their messages perfectly from the statistical patterns of their exchanges. Eventually it cuts the cable and impersonates one of them. Can it maintain the conversation? For ordinary chat, perhaps. But when one islander asks for help building a weapon to fight a bear, the octopus, which has never seen a bear or a stick, cannot respond meaningfully. Bender and Koller argued that a system trained only on **form**, without access to what the form is about, cannot learn **meaning** in the sense of the relation between language and the world.

## Grounding

This is the problem of **grounding**, raised earlier by the cognitive scientist **Stevan Harnad** in 1990: how can symbols acquire meaning if they are defined only in terms of other symbols? Humans ground the meanings of words in perception, action, and social interaction, as cognitive semanticists emphasize. Some researchers argue that language models trained on text alone lack grounding; others argue that text contains enough information about the world to support some kind of understanding, and that models trained also on images and other data may be partly grounded.

## Different senses of meaning

The debate depends partly on what is meant by "meaning." In the **referential** sense of Lesson I, a model's words may not be connected to the world in the way human words are. In the **distributional** sense of Lesson II, models capture much of meaning, since they represent how words relate to each other. In the **pragmatic** sense of this lesson, models may lack genuine communicative **intentions**, though they can produce text that hearers interpret as meaningful.

## Why it matters

These questions are not merely theoretical. They bear on how much we should trust what language models produce, how we should describe their abilities, and what responsibilities attach to their use. Semantics, by clarifying what meaning is, helps us think clearly about these new technologies.

> **Pause and consider.** Does a system that always produces appropriate answers understand the questions? What would convince you one way or the other?`,
    },
    {
      title: "The Course in Review",
      body: `## What we have studied

In this course, we have studied **meaning** in language.

In **Lesson I**, we asked what meaning is: the many senses of "meaning," Saussure's sign and Peirce's icons, indexes, and symbols, Frege's sense and reference, Russell's King of France and Kripke's names, utterances and propositions, semantics and pragmatics, compositionality, concepts, grammatical meaning, meaning across cultures, meaning in the brain, and ambiguity and vagueness.

In **Lesson II**, we studied **word meaning**: the lexicon, homonymy and polysemy, synonymy, kinds of opposites, hyponymy and the basic level, componential analysis, prototypes, color terms, kinship, space, dictionaries, and word meanings in computers.

In **Lesson III**, we studied **sentence meaning** and **truth**: truth conditions, entailment, contradiction, presupposition, propositional and predicate logic, generalized quantifiers, Montague's formal semantics, possible worlds and modality, conditionals, definiteness and donkey sentences, plurals and mass nouns, comparatives, and the limits of truth conditions.

In **Lesson IV**, we studied **events, time, and participants**: Vendler's classes, aspect, tense, the perfect, Davidson's events, causation, motion events, mood and evidentiality, negation, generics, possession, and time as space.

In **Lesson V**, we studied **meaning in use** and **in the mind**: deixis, speech acts, implicature, relevance, politeness, metaphor, frames, blending, construal, and whether machines can mean.

## Three traditions

Throughout the course, we have met three broad traditions:

- **formal semantics**, which treats meaning in terms of truth, reference, and logic;
- **cognitive semantics**, which treats meaning in terms of concepts, embodiment, metaphor, and construal;
- **pragmatics**, which treats meaning in terms of context, intention, and inference.

Each illuminates aspects of meaning that the others neglect, and many semanticists today seek to integrate them.

## Connections

Semantics connects with every other part of linguistics: with syntax (SYN 101), which provides the structures that are interpreted; with phonology and phonetics (PHO 101, PHO 110), through intonation and focus; with historical linguistics (HIL 101), through semantic change and grammaticalization; and with sociolinguistics (SOC 101, SOC 110), through the social meanings of words and styles.

## A closing thought

The Gospel of John opens: "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1). The Greek *lógos*, translated "Word," also means reason, account, and meaning. Whatever one's beliefs, the verse reflects a conviction shared by many traditions: that meaning, the connection of words to minds and to the world, lies close to the heart of what it is to be human. Semantics is the patient attempt to understand it.

> **Pause and consider.** Which of the three traditions, formal, cognitive, or pragmatic, seems to you to capture the most important aspects of meaning? Why?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Speech acts

> *I now pronounce you husband and wife.* / *Can you pass the salt?*

**Questions**

1. What kind of speech act is each, in Searle's taxonomy?
2. What makes the second an indirect speech act?

## 2. Implicature

> Grice's recommendation letter: "Mr. X's command of English is excellent, and his attendance at tutorials has been regular."

**Questions**

1. What does the writer implicate?
2. Which maxim is flouted, and why?

## 3. Scalar implicature

> *Some giraffes have long necks.* (Noveck, 2001)

**Questions**

1. Why do adults often reject this sentence, while young children accept it?
2. Is "not all" part of the meaning of *some*? Explain.

## 4. Conceptual metaphor

> *He attacked my position; I defended my claim; she shot down my argument.*

**Questions**

1. What conceptual metaphor underlies these expressions?
2. What did Thibodeau and Boroditsky's crime study suggest about metaphor and reasoning?

## Drawing the threads together

In a paragraph, explain how meaning depends on context, inference, and conceptualization, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "4th ed., 2016", note: "Read chapters 7, 8, and 11, on context and inference, functions of language, and cognitive semantics." },
    { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Clarendon Press", year: "1962", note: "Read Lectures I and II." },
    { kind: "book", title: "Metaphors We Live By", author: "George Lakoff and Mark Johnson", publisher: "University of Chicago Press", year: "1980", note: "Read chapters 1–6." },
  ],
  media: [
    { kind: "book", title: "Logic and Conversation", author: "H. P. Grice", publisher: "Syntax and Semantics 3: Speech Acts, ed. Peter Cole and Jerry L. Morgan (Academic Press)", year: "1975", note: "Read the whole essay; it is short." },
    { kind: "book", title: "Relevance: Communication and Cognition", author: "Dan Sperber and Deirdre Wilson", publisher: "Blackwell", year: "1986; 2nd ed., 1995", note: "Read chapter 1." },
  ],
  questions: [
    {
      prompt: "What is deixis?",
      choices: [
        "A type of metaphor",
        "The use of expressions whose meaning depends on the context of utterance, such as I, here, and now",
        "A grammatical category",
        "A sound change",
      ],
      answer: 1,
      explanation: "From Greek for \"pointing.\"",
    },
    {
      prompt: "What did Austin call utterances such as I promise to come?",
      choices: ["Constatives", "Performatives", "Implicatures", "Presuppositions"],
      answer: 1,
      explanation: "They perform the act they describe.",
    },
    {
      prompt: "In Searle's taxonomy, what kind of act is I resign?",
      choices: ["Representative", "Directive", "Commissive", "Declaration"],
      answer: 3,
      explanation: "It changes the world by being uttered.",
    },
    {
      prompt: "Which is one of Grice's maxims?",
      choices: ["Be polite", "Be relevant", "Be brief always", "Be formal"],
      answer: 1,
      explanation: "The maxim of Relation.",
    },
    {
      prompt: "What does Some students passed typically implicate?",
      choices: ["All students passed", "Not all students passed", "No students passed", "Nothing"],
      answer: 1,
      explanation: "A scalar implicature from the Horn scale ⟨some, all⟩.",
    },
    {
      prompt: "What did Noveck (2001) find?",
      choices: [
        "Children compute implicatures more than adults",
        "Young children often accept Some giraffes have long necks, interpreting some logically",
        "Adults never compute implicatures",
        "Giraffes have short necks",
      ],
      answer: 1,
      explanation: "\"When Children Are More Logical Than Adults.\"",
    },
    {
      prompt: "In relevance theory, what is an explicature?",
      choices: [
        "An implicature",
        "The explicitly communicated content, enriched by pragmatic inference",
        "A presupposition",
        "A metaphor",
      ],
      answer: 1,
      explanation: "Sperber and Wilson.",
    },
    {
      prompt: "In Brown and Levinson's theory, what is negative face?",
      choices: [
        "A bad mood",
        "The desire to be unimpeded and free from imposition",
        "The desire to be liked",
        "Impoliteness",
      ],
      answer: 1,
      explanation: "Positive face is the desire to be liked and approved of.",
    },
    {
      prompt: "What does the conceptual metaphor ARGUMENT IS WAR explain?",
      choices: [
        "Why arguments are violent",
        "Systematic expressions such as attack a position and defend a claim",
        "The history of war",
        "Grammar",
      ],
      answer: 1,
      explanation: "Lakoff and Johnson, 1980.",
    },
    {
      prompt: "What does Fillmore's commercial transaction frame show?",
      choices: [
        "That buy and sell are unrelated",
        "That words like buy, sell, pay, and cost evoke a shared frame but focus on different participants",
        "That money has no meaning",
        "That frames are pictures",
      ],
      answer: 1,
      explanation: "Frame semantics.",
    },
  ],
  reflection:
    "Meaning lives in use and in the mind as well as in words. In 500–800 words, analyze a short conversation or text of your choice, identifying its speech acts, implicatures, politeness strategies, and metaphors, and reflect on what this analysis reveals about the relation between literal meaning and communication.",
};
