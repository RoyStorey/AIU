import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "Sentence Meaning, Truth, and Logic",
  summary:
    "Meaning as truth conditions; entailment; synonymy, contradiction, and analytic truth; presupposition and its triggers; propositional logic and its fit with English; predicate logic, quantifiers, and generalized quantifiers; Montague and the rise of formal semantics; possible worlds and modality; conditionals and counterfactuals; definiteness and donkey sentences; plurals and the count–mass distinction; and the limits of the truth-conditional approach.",
  pages: [
    {
      title: "Truth Conditions",
      body: `## Knowing what a sentence means

What does it mean to know the meaning of a sentence? One influential answer, central to **formal semantics**, is that to know the meaning of a declarative sentence is to know its **truth conditions**: to know what the world would have to be like for the sentence to be true.

Consider *The cat is on the mat*. You may not know whether it is true right now, but you know what would make it true: a particular cat being located on a particular mat. If you were shown the scene, you could judge whether the sentence was true. This ability, to match sentences with situations, is a central part of knowing what sentences mean.

## Tarski

The Polish logician **Alfred Tarski**, in work published in Polish in 1933 and summarized in English in "The Semantic Conception of Truth" (1944), proposed a famous condition for any adequate definition of truth, illustrated by the sentence:

> *"Snow is white" is true if and only if snow is white.*

This may look trivial, but it captures a key idea: the sentence in quotation marks (the sentence being talked about) is true exactly when the condition described by the unquoted words (the condition in the world) holds. Tarski showed how to define truth for formal languages in a way that satisfies this condition for every sentence.

## Davidson

The American philosopher **Donald Davidson**, in "Truth and Meaning" (1967), proposed that a theory of meaning for a natural language could take the form of a Tarski-style theory of truth: a theory that, for every sentence of the language, specifies its truth conditions, compositionally, from the meanings of its parts. On this view, giving the meaning of a sentence is giving its truth conditions.

## Why truth conditions?

The truth-conditional approach has several attractions:

- It connects language to the **world**, explaining how sentences can be used to convey information about how things are.
- It provides a precise way to state the meanings of sentences, using the tools of **logic**.
- It explains **semantic relations** among sentences, such as entailment and contradiction, which we study next.
- It provides a framework for **compositionality**: the truth conditions of a complex sentence are computed from the meanings of its parts.

## What truth conditions leave out

The approach also has limits, which we consider at the end of this lesson. Not all sentences are true or false: questions, commands, and exclamations are not. Some aspects of meaning, such as the difference between *but* and *and* (*She is poor but honest* versus *She is poor and honest*), do not affect truth conditions, yet seem to be part of meaning. And, as we saw in Lesson I, context affects the truth conditions of many sentences.

## Meaning and verification

The truth-conditional approach should be distinguished from an older view, **verificationism**, associated with the logical positivists of the 1920s and 1930s, which held that the meaning of a sentence is the method by which it can be verified. Truth conditions do not require that we be able to verify a sentence: *There was an odd number of hairs on Julius Caesar's head when he died* has clear truth conditions, though no one could ever verify it.

> **Pause and consider.** State the truth conditions of *Every student in this class has read Frege*. Could you verify it?`,
    },
    {
      title: "Entailment",
      body: `## Following from

One of the most important relations between sentences is **entailment**. A sentence A **entails** a sentence B if, whenever A is true, B must also be true; in every situation in which A is true, B is true too.

- *The president was assassinated* entails *The president is dead*.
- *I saw a poodle* entails *I saw a dog*.
- *Mary is a widow* entails *Mary was married*.
- *John and Mary left* entails *John left*.

Entailment is a relation of **necessity**: it is not just that B is usually true when A is, but that it is impossible for A to be true and B false.

## Sources of entailment

Entailments arise from several sources:

- **lexical** relations, especially **hyponymy**, which we studied in Lesson II: *poodle* entails *dog*;
- the meanings of particular words: *assassinate* entails *die*; *widow* entails *was married*;
- **syntactic** structure: *John and Mary left* entails *John left*; *The black cat slept* entails *The cat slept*.

## Negation reverses entailment

Negation reverses the direction of entailment:

- *I saw a poodle* entails *I saw a dog*.
- But *I didn't see a dog* entails *I didn't see a poodle*, not the other way around.

As we saw in SYN 101 with negative polarity items, environments in which entailments run from general to specific are called **downward-entailing**. Negation, *no*, *few*, and the first part of *every* (*Every dog barks* entails *Every poodle barks*) create downward-entailing environments. In ordinary, **upward-entailing** environments, entailments run from specific to general.

## Entailment and implicature

Entailment must be distinguished from weaker relations. *Some students passed* often suggests *Not all students passed*, but does not entail it: one can say *Some students passed; in fact, all of them did* without contradiction. The suggestion is an **implicature**, which we study in Lesson V. A useful test: an entailment cannot be denied without contradiction (\\#*I saw a poodle, but I didn't see a dog*), while an implicature can be (*Some students passed; indeed, all did*).

## Mutual entailment

If A entails B and B entails A, the two sentences are **paraphrases** (or synonymous sentences): they are true in exactly the same situations.

- *The dog chased the cat* and *The cat was chased by the dog* entail each other.
- *John is taller than Mary* and *Mary is shorter than John* entail each other.

## Why entailment matters

Entailment is central to semantics because it captures what follows from what. A speaker who understands a sentence knows its entailments: someone who understands *Mary is a widow* knows that Mary was married, even without being told. Entailment is also central to **reasoning**: valid arguments are those in which the premises entail the conclusion. And it is central to applications such as automatic question answering and **natural language inference**, a task in which computer systems must judge whether one sentence entails another.

> **Pause and consider.** Does *John managed to open the door* entail *John opened the door*? Does *John tried to open the door*?`,
    },
    {
      title: "Contradiction, Tautology, and Analytic Truth",
      body: `## Contradiction

Two sentences are **contradictory** if they cannot both be true, and cannot both be false: one must be true and the other false.

- *The cat is alive* and *The cat is dead* (assuming we are talking about a cat that exists);
- *John is married* and *John is single*.

Two sentences are **contrary** if they cannot both be true but can both be false: *The wall is red* and *The wall is blue* cannot both be true, but the wall could be green. The difference reflects the difference between complementary and gradable antonyms that we studied in Lesson II.

## Tautology and contradiction

A sentence that is true in every possible situation, by virtue of its form or meaning, is a **tautology** (or necessary truth): *Either it is raining or it is not raining*; *All bachelors are unmarried*. A sentence that is false in every situation is a **contradiction**: *It is raining and it is not raining*; *This bachelor is married*.

Interestingly, speakers often use apparent tautologies and contradictions to communicate something informative. *Boys will be boys*, *War is war*, and *A deal is a deal* are tautologies in form, but communicate attitudes ("boys behave badly, and we must accept it"). *I'm sad and I'm not sad* may express mixed feelings. Such uses are explained by pragmatics, as we will see in Lesson V.

## Analytic and synthetic

Philosophers distinguish:

- **analytic** truths, true by virtue of meaning alone: *All bachelors are unmarried*; *Triangles have three sides*;
- **synthetic** truths, true by virtue of how the world is: *Some bachelors are happy*; *Paris is the capital of France*.

The distinction goes back to **Immanuel Kant**, and was central to the philosophy of the logical positivists, who held that analytic truths could be known without experience.

## Quine's challenge

In a famous paper, "Two Dogmas of Empiricism" (1951), the American philosopher **W. V. O. Quine** challenged the analytic–synthetic distinction. He argued that it could not be defined without circularity: analyticity is defined in terms of synonymy (*bachelor* means "unmarried man"), but synonymy is defined in terms of analyticity. Quine concluded that there is no sharp line between truths of meaning and truths of fact; any belief might be revised in light of experience. Quine's challenge led some philosophers and linguists to doubt the notion of analyticity altogether.

## Linguists' perspective

Many linguists continue to use the notions of analyticity and entailment, because speakers have clear intuitions about them: speakers judge *This bachelor is married* to be odd in a way that *This bachelor is happy* is not. Whether these intuitions reflect a strict distinction or a matter of degree, they are part of the data that a semantic theory must explain.

## Anomaly

A related notion is **semantic anomaly**: sentences that violate selectional restrictions, such as *Colorless green ideas sleep furiously*, which we met in SYN 101. Anomalous sentences are not contradictions (they do not assert something impossible in a logical sense), but they combine words whose meanings do not fit. Poetry often exploits anomaly for effect: Dylan Thomas wrote of "a grief ago," combining *grief* with *ago*, which normally requires a unit of time.

> **Pause and consider.** Is *My brother is an only child* a contradiction? What about *My sister is my brother*?`,
    },
    {
      title: "Presupposition",
      body: `## Taken for granted

Some sentences convey information that is not asserted but **taken for granted**, assumed to be already known or accepted. Such information is called a **presupposition**. Consider:

> *John stopped smoking.*

This sentence asserts that John does not smoke now. But it also conveys that John **used to** smoke. This second piece of information is presupposed.

## The test of negation

A key property of presuppositions is that they **survive negation**:

- *John stopped smoking.* (presupposes: John used to smoke)
- *John didn't stop smoking.* (still presupposes: John used to smoke)

By contrast, entailments do not survive negation: *John stopped smoking* entails *John doesn't smoke now*, but *John didn't stop smoking* does not. Presuppositions also survive in **questions** (*Did John stop smoking?*) and **conditionals** (*If John stopped smoking, he'll feel better*). This "family of sentences" test, used by **Gennaro Chierchia** and **Sally McConnell-Ginet** and others, is a standard way to identify presuppositions.

## Triggers

Presuppositions are produced by particular words and constructions, called **presupposition triggers**:

- **definite descriptions**: *The King of France is bald* presupposes there is a King of France, as we saw with Strawson in Lesson I;
- **factive verbs**: *She regrets that she left* presupposes that she left; similarly *know*, *realize*, *be aware*;
- **change-of-state verbs**: *stop*, *start*, *begin*, *continue*: *She began to sing* presupposes she was not singing before;
- **iteratives**: *again*, *too*, *another*: *She failed again* presupposes she failed before;
- **clefts**: *It was John who broke the vase* presupposes someone broke the vase;
- **temporal clauses**: *Before she left, she called* presupposes she left.

## The loaded question

Presuppositions can be used manipulatively. The classic example is the **loaded question**: *Have you stopped beating your wife?* Whether the answer is yes or no, the person answering appears to accept the presupposition that they used to beat their wife. Lawyers, interviewers, and advertisers use presupposition to introduce claims without asserting them, making them harder to challenge.

## The projection problem

When a sentence containing a presupposition trigger is embedded in a larger sentence, does the presupposition survive? Sometimes it does, sometimes not:

- *John believes that the King of France is bald.* (the presupposition that there is a King of France may not be shared by the speaker)
- *If there is a King of France, the King of France is bald.* (the presupposition is canceled by the first clause)

The question of how presuppositions behave in complex sentences, called the **projection problem**, was studied intensively in the 1970s and 1980s, notably by **Lauri Karttunen** and **Irene Heim**, and led to the development of **dynamic semantics**, in which the meaning of a sentence is its effect on the context.

## Accommodation

What happens when a speaker presupposes something the hearer does not already know? Usually the hearer simply **accommodates**, adding the presupposition to their assumptions. If someone says *Sorry I'm late; my car broke down*, the hearer accepts that the speaker has a car, without objection. The philosopher **David Lewis** described this process of **accommodation** in 1979. Accommodation makes presupposition an efficient way to convey background information.

> **Pause and consider.** What does *Mary realized that her keys were in the car* presuppose? Test it with negation and a question.`,
    },
    {
      title: "Propositional Logic",
      body: `## Logic and language

Formal semanticists use the tools of **logic** to represent sentence meanings precisely. The simplest logic is **propositional logic**, which deals with whole propositions and the connectives that join them.

## Connectives

Propositional logic uses symbols for propositions (*p*, *q*, *r*) and for connectives:

- **negation** (¬, "not"): ¬*p* is true when *p* is false;
- **conjunction** (∧, "and"): *p* ∧ *q* is true when both are true;
- **disjunction** (∨, "or"): *p* ∨ *q* is true when at least one is true;
- **conditional** (→, "if … then"): *p* → *q* is false only when *p* is true and *q* false;
- **biconditional** (↔, "if and only if"): true when both have the same truth value.

## Truth tables

The meaning of each connective is defined by a **truth table**, listing the truth value of the compound for each combination of truth values of its parts. For conjunction:

| *p* | *q* | *p* ∧ *q* |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

## Logic and English

The logical connectives correspond roughly to English *not*, *and*, *or*, and *if … then*. But the fit is imperfect:

- **And**: logical ∧ is symmetric (*p* ∧ *q* = *q* ∧ *p*), but English *and* often implies order or causation: *She got married and had a baby* suggests a different sequence from *She had a baby and got married*.
- **Or**: logical ∨ is **inclusive** (true if both are true), but English *or* often suggests **exclusive** "one or the other but not both": *You can have cake or ice cream*.
- **If**: the logical conditional is true whenever *p* is false, so *If the moon is made of cheese, then 2 + 2 = 5* is true, which seems absurd. The logical conditional also does not require any connection between *p* and *q*.

## Grice's defense

As we will see in Lesson V, **H. P. Grice** argued that these discrepancies are due not to the meanings of the English words but to **implicatures**: *and* means logical conjunction, but speakers implicate order because of a general expectation that they describe events in order; *or* means inclusive disjunction, but speakers implicate "not both" because, if they knew both were true, they would have said *and*. On this view, the logical connectives capture the semantic meaning of the English words, and pragmatics explains the rest.

## Conditionals

The English conditional is especially problematic, and its meaning is one of the most debated topics in semantics and philosophy. We consider it in more detail later in this lesson.

## Why use logic?

Despite the imperfect fit, logic provides a precise, unambiguous language for representing meanings, testing entailments, and stating truth conditions. Formal semantics uses much richer logics than propositional logic, but the basic idea, that meanings can be represented in a formal language with explicit rules, comes from this tradition.

> **Pause and consider.** Is *Either you're with us or you're against us* inclusive or exclusive? Could someone be both?`,
    },
    {
      title: "Predicates and Quantifiers",
      body: `## Inside the proposition

Propositional logic treats whole propositions as units. To represent the internal structure of sentences, semanticists use **predicate logic** (first-order logic), developed by **Frege** in his *Begriffsschrift* (1879).

## Predicates and arguments

In predicate logic, sentences are analyzed into **predicates** and **arguments**:

- *Fido barks*: **bark**(fido)
- *John loves Mary*: **love**(john, mary)
- *Mary gave John a book*: **give**(mary, john, book)

The predicate corresponds roughly to the verb, and the arguments to the noun phrases, reflecting the argument structure we studied in SYN 101.

## Quantifiers

Predicate logic also has **quantifiers**:

- the **universal** quantifier ∀ ("for all"): *Every dog barks* is represented as ∀*x* (**dog**(*x*) → **bark**(*x*)), "for every *x*, if *x* is a dog, then *x* barks";
- the **existential** quantifier ∃ ("there exists"): *Some dog barks* is represented as ∃*x* (**dog**(*x*) ∧ **bark**(*x*)), "there is an *x* such that *x* is a dog and *x* barks."

## Scope

When a sentence contains more than one quantifier, their **scope** must be specified. As we saw in SYN 101, *Every student read some book* is ambiguous:

- ∀*x* (**student**(*x*) → ∃*y* (**book**(*y*) ∧ **read**(*x*, *y*))): each student read some book, possibly different;
- ∃*y* (**book**(*y*) ∧ ∀*x* (**student**(*x*) → **read**(*x*, *y*))): there is one book that every student read.

The logical notation makes the two readings explicit.

## Beyond every and some

Natural languages have many quantifiers that first-order logic cannot express: *most*, *few*, *many*, *more than half*. *Most students passed* cannot be represented using only ∀ and ∃. In an influential paper, "Generalized Quantifiers and Natural Language" (1981), **Jon Barwise** and **Robin Cooper** proposed treating quantifiers as **relations between sets**: *Most students passed* is true if the set of students who passed is larger than the set of students who did not pass. **Generalized quantifier theory** can represent all natural language quantifiers and has revealed universal properties of them.

## Conservativity

One such property is **conservativity**: in every known language, the meaning of a quantified sentence depends only on the members of the noun's set. *Most students passed* means the same as *Most students are students who passed*. This seems trivial, but it is not logically necessary: one can define a non-conservative quantifier, such as an imaginary *glarb*, where *Glarb students passed* means "everyone who is not a student passed." No natural language has such a quantifier. Barwise and Cooper, and later **Edward Keenan** and **Jonathan Stavi**, proposed conservativity as a **semantic universal**, and experiments have found that children and adults learn conservative quantifiers more easily than non-conservative ones.

## Logic and the mind

Do speakers represent meanings in something like predicate logic? Formal semanticists generally use logic as a **tool** for describing meanings precisely, without claiming that the mind uses logical formulas. But the success of logical tools in capturing speakers' judgments suggests that the structure of meaning has something in common with logical structure.

> **Pause and consider.** Represent *No student failed* in predicate logic. Then write it using ∀ and ¬ instead of a "no" quantifier.`,
    },
    {
      title: "Montague and Formal Semantics",
      body: `## English as a formal language

The American logician **Richard Montague** (1930–1971) transformed the study of natural language meaning. In a series of papers around 1970, including "English as a Formal Language," "Universal Grammar," and "The Proper Treatment of Quantification in Ordinary English," he argued that natural languages could be described with the same mathematical precision as the formal languages of logic. He began one paper by rejecting the contention that an important theoretical difference exists between formal and natural languages.

This was a bold claim. Many logicians, including Frege and Russell, had regarded natural language as too vague and irregular for precise analysis, and had developed formal languages to avoid its imperfections. Montague insisted that natural languages, too, have precise semantics.

## The key ideas

Montague's approach combined several ideas:

- **Compositionality**: the meaning of each complex expression is computed from the meanings of its parts, according to its syntactic structure, rule by rule.
- **Model-theoretic semantics**: meanings are defined relative to a **model**, a mathematical representation of a possible world or situation, specifying which individuals exist and which properties and relations hold among them. A sentence is true in a model if its truth conditions are satisfied there.
- **Type theory** and the **lambda calculus**: expressions are assigned semantic **types** (such as individuals, truth values, and functions between them), and the lambda calculus provides a way to build complex meanings from simpler ones.
- **Intensional logic**: to handle opaque contexts like *believes that*, which we met in Lesson I, meanings are defined across possible worlds, as we study next.

## Noun phrases as quantifiers

One of Montague's most influential ideas was to treat all noun phrases, including names, as **generalized quantifiers**: sets of properties. *Every dog* denotes the set of properties that every dog has; *John* denotes the set of properties that John has. This allowed a uniform treatment of noun phrases, whether they were names, quantifiers, or descriptions, and anticipated Barwise and Cooper's work.

## Partee and the linguistic turn

Montague died young, in 1971, and his work was written for logicians. The American linguist **Barbara Partee** was largely responsible for bringing Montague's ideas into linguistics, combining them with the generative syntax we studied in SYN 101, and training a generation of formal semanticists. Formal semantics became one of the central fields of linguistics, with influential textbooks such as **Irene Heim** and **Angelika Kratzer**'s *Semantics in Generative Grammar* (1998).

## What formal semantics has achieved

Formal semantics has produced precise analyses of quantifiers, tense, modality, plurals, questions, comparatives, and many other phenomena, and has discovered universals, such as conservativity, that constrain possible meanings. It has also influenced computer science and artificial intelligence, providing tools for representing the meanings of sentences in a way that computers can process.

## Criticisms

Critics, especially from **cognitive semantics**, which we study in Lessons II and V, argue that formal semantics neglects the conceptual and experiential basis of meaning, metaphor, prototypes, and the role of the body. Others argue that it gives too little attention to context and use. Formal semanticists reply that their methods are compatible with attention to cognition and context, and many recent formal theories incorporate both.

> **Pause and consider.** Why might logicians like Frege have thought natural language was too imprecise for formal analysis?`,
    },
    {
      title: "Possible Worlds and Modality",
      body: `## Ways things might have been

Many sentences talk not about how things are but about how they **might** be, **must** be, or **could have** been:

- *It might rain tomorrow.*
- *You must be tired.*
- *She could have been a doctor.*
- *It is necessary that 2 + 2 = 4.*

Such expressions of possibility and necessity are called **modal** expressions, and their study is the study of **modality**.

## Possible worlds

Formal semanticists analyze modality using the notion of **possible worlds**, an idea going back to the philosopher **Gottfried Wilhelm Leibniz** and developed in modern logic by **Saul Kripke** and others in the 1950s and 1960s. A possible world is a complete way things might have been. The actual world is one possible world; others differ from it in large or small ways.

On this view:

- *It is **possible** that p* is true if *p* is true in **at least one** accessible possible world;
- *It is **necessary** that p* is true if *p* is true in **all** accessible possible worlds.

## Kinds of modality

English modal words are **polysemous**, expressing different kinds of possibility and necessity:

- **Epistemic** modality concerns what is possible or necessary given what the speaker **knows**: *He must be home by now* (given what I know, he is home); *She might be right*.
- **Deontic** modality concerns what is permitted or required by **rules** or authority: *You must pay the fine*; *You may leave now*.
- **Dynamic** (or circumstantial) modality concerns **abilities** and circumstances: *She can swim*; *Fish can't live out of water*.

The same word, *must*, can be epistemic or deontic: *John must be in his office* can mean "I conclude that he is there" or "He is required to be there."

## Kratzer's theory

The German-American semanticist **Angelika Kratzer**, in papers beginning with "What *Must* and *Can* Must and Can Mean" (1977), proposed an influential theory of modality. She argued that modal words like *must* and *can* have a single, abstract meaning, quantifying over possible worlds, and that the different kinds of modality arise from a **contextual** parameter, a "conversational background," that determines which worlds are relevant: the worlds compatible with what is known (epistemic), with the rules (deontic), or with the circumstances (dynamic). This explains why the same words express different modalities in different contexts, and why this pattern recurs across languages.

## Modality across languages

Languages express modality in various ways: modal verbs (English *must*, *can*), affixes, particles, and moods such as the subjunctive. Some languages distinguish kinds of modality that English conflates; others conflate kinds that English distinguishes. As we saw in Lesson I, **evidential** systems, which mark the source of information, are closely related to epistemic modality, and some linguists treat evidentials as a kind of modal.

## Modality in history

As we saw in HIL 101, modal meanings often develop historically from other meanings, especially from deontic to epistemic: English *must* developed its epistemic sense ("He must be home by now") from its earlier deontic sense ("You must go"). **Elizabeth Closs Traugott**, whom we met in HIL 101, documented this path, an example of **subjectification**.

> **Pause and consider.** Is *must* epistemic or deontic in *You must be joking*? In *You must wear a seatbelt*?`,
    },
    {
      title: "Conditionals and Counterfactuals",
      body: `## If

**Conditional** sentences, with *if*, are among the most important and puzzling in semantics. They are used to reason about possibilities, make predictions, give instructions, and imagine alternatives.

## Indicative and counterfactual

Linguists and philosophers distinguish:

- **indicative** conditionals, about what may be the case: *If it rains, the game will be canceled*; *If John is home, his car is in the driveway*;
- **counterfactual** (or subjunctive) conditionals, about what would have been the case if things had been different: *If it had rained, the game would have been canceled*; *If kangaroos had no tails, they would topple over*.

## Oswald and Kennedy

The difference is illustrated by a famous pair of examples from the philosopher **Ernest Adams** (1970):

- *If Oswald didn't kill Kennedy, someone else did.* (indicative: almost certainly true, since Kennedy was killed by someone)
- *If Oswald hadn't killed Kennedy, someone else would have.* (counterfactual: doubtful, since it implies a conspiracy)

The two sentences differ only in mood and tense, yet they mean very different things and can differ in truth value.

## The material conditional

As we saw, the **material conditional** of propositional logic (*p* → *q*), which is true whenever *p* is false or *q* is true, fits English indicative conditionals poorly and counterfactuals not at all. On the material analysis, every counterfactual would be true, since its antecedent is false. Yet *If I had jumped off the roof, I would have flown* is clearly false.

## Lewis and Stalnaker

In the late 1960s and early 1970s, the philosophers **Robert Stalnaker** and **David Lewis** proposed a possible-worlds analysis of counterfactuals. In *Counterfactuals* (1973), Lewis proposed, roughly, that *If A had been the case, C would have been the case* is true if, in the possible worlds most **similar** to the actual world in which A is true, C is also true. *If kangaroos had no tails, they would topple over* is true because, in the worlds most like ours in which kangaroos have no tails (but the laws of physics are the same), they topple over. The notion of similarity between worlds is vague, but, Lewis argued, so are counterfactuals themselves.

## Kratzer's restrictor analysis

**Angelika Kratzer** proposed that *if*-clauses do not introduce a special connective at all, but **restrict** the domain of a modal operator, overt or covert. In *If it rains, the game must be canceled*, the *if*-clause restricts *must* to worlds in which it rains. This analysis unifies conditionals with modality and has been widely adopted in linguistics.

## Conditionals across languages

Languages mark the difference between indicative and counterfactual conditionals in various ways, often with **past tense** used for unreality, as in English *If I **had** money, I would buy it* (about the present). This "fake past" in counterfactuals is found in many languages, and linguists such as **Sabine Iatridou** have studied why past tense morphology is so often used to express counterfactuality: perhaps because both past and counterfactual involve "distance" from the actual present.

## Conditionals in reasoning

Conditionals are central to reasoning, in logic, science, and everyday life. Psychologists, starting with **Peter Wason**'s famous selection task (1966), have found that people often reason with conditionals in ways that do not match the material conditional, but that may reflect the richer meaning of natural language conditionals.

> **Pause and consider.** Explain the difference in meaning between *If Oswald didn't kill Kennedy, someone else did* and *If Oswald hadn't killed Kennedy, someone else would have*.`,
    },
    {
      title: "Definiteness and Donkeys",
      body: `## A and the

What is the difference between *a* and *the*? Compare:

- *A dog barked.*
- *The dog barked.*

Both assert that a dog barked. But *the dog* suggests that the hearer can identify which dog is meant, while *a dog* introduces a dog the hearer is not expected to identify.

## Two theories

Two main theories of definiteness have been proposed:

- **Uniqueness**: as we saw with **Russell** in Lesson I, *the* indicates that there is exactly one entity of the relevant kind: *the dog* is the unique dog in the context.
- **Familiarity**: *the* indicates that the referent is already **familiar** to the hearer, mentioned before or otherwise known: *A man came in. **The man** sat down.*

Both theories capture important uses, and linguists debate which is more basic, or whether languages have different articles for each. In some German dialects and in the Frisian language Fering, two different definite articles have been described, one for uniqueness (*the sun*) and one for familiarity (*the man I mentioned*), as **Florian Schwarz** showed in his dissertation of 2009.

## Donkey sentences

A famous puzzle involves what are called **donkey sentences**, after an example used by the British philosopher **Peter Geach** in *Reference and Generality* (1962):

> *Every farmer who owns a donkey beats it.*

What does *it* refer to? Not to any particular donkey, since different farmers own different donkeys. The sentence means: for every farmer and every donkey such that the farmer owns the donkey, the farmer beats the donkey. Here the indefinite *a donkey*, which normally behaves like an existential quantifier ("some donkey"), seems to have **universal** force. And the pronoun *it* is linked to *a donkey*, even though, in standard predicate logic, *it* is outside the scope of the quantifier that introduces the donkey.

## Discourse Representation Theory

In the early 1980s, two semanticists independently proposed solutions: **Hans Kamp**, in **Discourse Representation Theory** (DRT, 1981), and **Irene Heim**, in her dissertation (1982), with what she called **File Change Semantics**. Both proposed that indefinite noun phrases do not have quantificational force of their own, but introduce new **discourse referents**, entities available for later reference. The quantificational force comes from elsewhere: from *every*, *if*, or the context. In *If a farmer owns a donkey, he beats it*, the *if*-clause introduces a farmer and a donkey, and the conditional quantifies over all such pairs.

## Dynamic semantics

DRT and File Change Semantics were among the first theories of **dynamic semantics**, in which the meaning of a sentence is not just its truth conditions but its effect on the **context**: what discourse referents it introduces, what information it adds. This approach, developed further by **Jeroen Groenendijk** and **Martin Stokhof** and others, also helped solve the projection problem for presuppositions, which we met earlier in this lesson.

## Articles across languages

Many languages have no articles (Latin, Russian, Chinese, Japanese), and express definiteness through word order, demonstratives, or context. Others have articles marking distinctions English lacks. The study of definiteness across languages shows how a basic semantic distinction, between new and familiar or unique referents, can be expressed by very different grammatical means.

> **Pause and consider.** In *Every child who has a pet loves it*, what does *it* refer to?`,
    },
    {
      title: "Plurals, Mass, and Count",
      body: `## Count and mass

English nouns divide into two classes:

- **Count** nouns, such as *cup*, *chair*, and *idea*, can be counted and pluralized: *three cups*, *many chairs*; they take *a* in the singular: *a cup*.
- **Mass** nouns, such as *water*, *sand*, and *furniture*, cannot normally be counted or pluralized: \\**three waters* (except in special senses), \\**many furnitures*; they take *much* and *a lot of*: *much water*.

## Is the distinction semantic?

The distinction seems to correspond to a difference in meaning: count nouns denote **individuals** with natural units, while mass nouns denote **substances** without natural units. A part of a cup is not a cup, but a part of some water is still water. But the correspondence is imperfect:

- *furniture* is a mass noun, though it consists of individual pieces, while *chairs* is a count noun;
- *rice* is a mass noun, *beans* a count noun, though both consist of small grains;
- *spaghetti* is mass in English, but *spaghetti* is plural in Italian (singular *spaghetto*).

Such facts suggest that the count–mass distinction is partly **grammatical** and arbitrary, though it has a semantic core.

## Shifting

Many nouns can shift between count and mass uses:

- *There's chicken in the soup* (mass: meat) versus *There's a chicken in the yard* (count: animal), an example of the regular polysemy we met in Lesson II;
- *I'll have two coffees* (count: servings) versus *I like coffee* (mass).

The linguist **Francis Jeffry Pelletier** called the shift from count to mass the "universal grinder": put any count noun through a grinder, and you get a mass: *After the accident, there was cat all over the road.*

## Languages without plural

In **classifier languages**, such as Mandarin Chinese and Japanese, which we met in SYN 101, nouns generally behave like mass nouns: they are not marked for plural and cannot be directly counted. A classifier is needed: *sān **běn** shū* "three [volume] book." In 1998, **Gennaro Chierchia** proposed that languages differ in how nouns denote: in classifier languages, all nouns are like mass nouns, requiring classifiers for counting; in English, nouns are divided between count and mass. This **nominal mapping parameter** is an example of semantic variation across languages.

## Plurals and collectives

Plural noun phrases raise further puzzles. Consider:

> *The boys lifted the piano.*

This can mean that the boys lifted it **together** (a **collective** reading) or that each boy lifted it separately (a **distributive** reading). Some predicates are naturally collective (*gather*, *meet*, *surround*: *The students gathered*), some distributive (*be tall*, *sleep*), and some ambiguous. Formal semanticists, especially **Godehard Link** in an influential paper of 1983, analyzed plurals as **sums** of individuals, with a structure like that of substances, explaining many of their properties.

## Counting and the mind

Psychologists have studied whether the count–mass distinction influences thought. Studies by **John Lucy**, comparing English and **Yucatec Maya** (a classifier language), suggested that English speakers tend to classify objects by **shape**, Yucatec speakers by **material**. As with other studies of linguistic relativity, the interpretation is debated.

> **Pause and consider.** Why can you say *a chair* but not *a furniture*? Is there a semantic reason?`,
    },
    {
      title: "Comparatives and Degrees",
      body: `## More and less

Comparative sentences, such as *John is taller than Mary*, seem simple, but their semantics has proved rich and revealing. Formal semanticists, beginning with work by **Max Cresswell** in 1976 and developed by **Christopher Kennedy** and others, analyze gradable adjectives such as *tall* in terms of **degrees** on a **scale**:

- *tall* relates an individual to a degree of height;
- *John is taller than Mary* is true if John's degree of height exceeds Mary's;
- *John is six feet tall* specifies John's degree directly;
- *John is two inches taller than Mary* specifies the **difference** between their degrees.

## The positive form

What about the plain, **positive** form, *John is tall*? As we saw with vagueness in Lesson I, it means that John's height exceeds some **contextual standard**, which depends on the comparison class: a tall jockey and a tall basketball player meet very different standards. On the degree analysis, the positive form contains a silent element that introduces the standard.

## Kinds of scales

Kennedy and **Louise McNally** showed in 2005 that adjectives differ in the structure of their scales:

- **Open** scales, with no maximum or minimum, as for *tall* and *expensive*: there is no "completely tall."
- **Closed** scales, with endpoints, as for *full*, *empty*, *dry*, and *straight*: one can say *completely full* and *completely dry*.

Adjectives with closed scales often have absolute standards: *The glass is full* means it is at or near the maximum, not merely fuller than average. This explains why *completely full* is natural and *completely tall* odd.

## Comparative illusions

Comparatives also produce one of the most curious phenomena in semantics. Consider:

> *More people have been to Russia than I have.*

On first reading, most English speakers judge this sentence acceptable and feel they understand it. On reflection, it makes no sense: it compares a number of people with... what? The sentence was noted by the linguist **Mario Montalbetti** in his dissertation of 1984, and such **comparative illusions** have since been studied experimentally. They show that the processing system can construct a sense of understanding without computing a coherent meaning, a reminder that intuitions of acceptability must be interpreted with care.

## Comparison across languages

Languages express comparison in different ways. English uses a special comparative form (*taller*) and a marker of the standard (*than*). Many languages use a construction meaning "exceed": in Yoruba and other West African languages, "John is taller than Mary" is expressed roughly as "John is tall, surpass Mary." Others use a **locative** construction, "John is tall from Mary," as in Hebrew and many other languages. Some languages, such as some Australian and Native American languages, have no dedicated comparative construction, expressing comparison by juxtaposition: "John is tall, Mary is short." The typologist **Leon Stassen** classified these strategies in *Comparison and Universal Grammar* (1985).

> **Pause and consider.** Read *More people have been to Russia than I have* again. What would it have to mean to make sense?`,
    },
    {
      title: "Beyond Truth Conditions",
      body: `## Not everything is true or false

The truth-conditional approach has been very successful, but it faces several challenges.

## Questions and commands

**Questions** (*Is it raining?*) and **commands** (*Close the door!*) are not true or false, yet they have meanings. Formal semanticists have extended the approach in various ways:

- **Questions** can be analyzed as denoting the set of their possible **answers**, as **C. L. Hamblin** proposed in 1973, or as partitions of possible worlds, as **Groenendijk** and **Stokhof** proposed in the 1980s. To know the meaning of a question is to know what counts as an answer to it.
- **Commands** can be analyzed in terms of what would **comply** with them, or as adding to the hearer's "to-do list," as **Paul Portner** proposed.

## Expressive meaning

Some words carry meaning that does not affect truth conditions. Compare:

- *That dog barked all night.*
- *That damn dog barked all night.*

The second conveys the speaker's annoyance, but its truth conditions seem to be the same as the first. The word *damn* is an **expressive**. **Christopher Potts**, in *The Logic of Conventional Implicatures* (2005), developed an analysis in which expressives contribute meaning on a separate **dimension**, alongside but distinct from truth conditions. Similar considerations apply to honorifics, slurs, and words like *but* and *even*.

## Context and indexicals

As we saw in Lesson I, many sentences contain **indexicals**, such as *I*, *here*, and *now*, whose reference depends on the context of utterance. In an influential paper written in the 1970s and published in 1989, "Demonstratives," the philosopher **David Kaplan** distinguished between the **character** of an expression, its context-independent meaning (*I* means "the speaker"), and its **content** in a particular context (when Mary says *I*, its content is Mary). This distinction allowed truth-conditional semantics to handle context-dependence systematically.

## Vagueness and gradience

As we saw in Lesson I, many words are vague, with borderline cases where sentences seem neither clearly true nor clearly false. Truth-conditional semantics, which assumes that sentences are either true or false, must accommodate vagueness, by degrees of truth, by contextual standards, or by other means.

## Cognitive critiques

Cognitive semanticists, such as **George Lakoff**, **Ronald Langacker**, and **Leonard Talmy**, argue that the truth-conditional approach misses the most important aspects of meaning: how meanings are grounded in bodily experience, structured by metaphor, and shaped by **construal**, the way a situation is viewed. *The glass is half full* and *The glass is half empty* have the same truth conditions, but present the situation differently. We will study cognitive semantics in Lesson V.

## A pluralistic view

Most semanticists today accept that truth conditions are a central part of meaning but not the whole of it. A complete theory of meaning must also account for non-declarative sentences, expressive meaning, context, vagueness, and construal. Different frameworks emphasize different aspects, and the field is increasingly integrating them.

> **Pause and consider.** Do *The glass is half full* and *The glass is half empty* mean the same thing? In what sense yes, and in what sense no?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Truth conditions

> *"Snow is white" is true if and only if snow is white.* (Tarski)

**Questions**

1. Explain what this sentence says.
2. Why is it not as trivial as it looks?

## 2. Presupposition

> *John stopped smoking.* / *John didn't stop smoking.* / *Did John stop smoking?*

**Questions**

1. What is presupposed in all three?
2. What is entailed by the first but not the second?

## 3. Quantifier scope

> *Every student read some book.*

**Questions**

1. Write both readings in predicate logic.
2. Which reading do you prefer, and why?

## 4. Donkey sentences

> *Every farmer who owns a donkey beats it.* (Geach, 1962)

**Questions**

1. Why is this sentence puzzling for predicate logic?
2. How did Kamp and Heim solve the puzzle?

## Drawing the threads together

In a paragraph, explain how formal semantics represents the meanings of sentences and what it cannot capture, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "4th ed., 2016", note: "Read chapters 4 and 10, on sentence relations and truth and on formal semantics." },
    { kind: "book", title: "Semantics in Generative Grammar", author: "Irene Heim and Angelika Kratzer", publisher: "Blackwell", year: "1998", note: "For advanced students: read chapters 1–2." },
    { kind: "book", title: "Generalized Quantifiers and Natural Language", author: "Jon Barwise and Robin Cooper", publisher: "Linguistics and Philosophy 4", year: "1981", note: "Read the introduction and the section on universals." },
  ],
  media: [
    { kind: "book", title: "Counterfactuals", author: "David Lewis", publisher: "Blackwell", year: "1973", note: "Read chapter 1." },
    { kind: "book", title: "Meaning and Grammar: An Introduction to Semantics", author: "Gennaro Chierchia and Sally McConnell-Ginet", publisher: "MIT Press", year: "1990; 2nd ed., 2000", note: "Read the chapter on presupposition." },
  ],
  questions: [
    {
      prompt: "According to the truth-conditional approach, what is it to know the meaning of a declarative sentence?",
      choices: [
        "To know whether it is true",
        "To know what the world would have to be like for it to be true",
        "To know who said it",
        "To know how to pronounce it",
      ],
      answer: 1,
      explanation: "Tarski and Davidson.",
    },
    {
      prompt: "Does I saw a poodle entail I saw a dog?",
      choices: [
        "Yes",
        "No",
        "Only in some contexts",
        "Only if the speaker is truthful",
      ],
      answer: 0,
      explanation: "Hyponymy produces entailment.",
    },
    {
      prompt: "Which test distinguishes presupposition from entailment?",
      choices: [
        "Presuppositions survive negation and questions; entailments do not",
        "Entailments survive negation",
        "Presuppositions are always false",
        "There is no difference",
      ],
      answer: 0,
      explanation: "John didn't stop smoking still presupposes he used to smoke.",
    },
    {
      prompt: "Which is a factive verb, triggering a presupposition?",
      choices: ["believe", "regret", "say", "think"],
      answer: 1,
      explanation: "She regrets that she left presupposes she left.",
    },
    {
      prompt: "What is the logical connective ∨ in propositional logic?",
      choices: [
        "Exclusive or",
        "Inclusive or",
        "And",
        "Not",
      ],
      answer: 1,
      explanation: "Grice explained the exclusive sense as implicature.",
    },
    {
      prompt: "What did Barwise and Cooper propose about quantifiers?",
      choices: [
        "That they are names",
        "That they are relations between sets, allowing words like most to be analyzed",
        "That they do not exist",
        "That they are verbs",
      ],
      answer: 1,
      explanation: "Generalized quantifier theory, 1981.",
    },
    {
      prompt: "What did Montague claim?",
      choices: [
        "That natural language is too vague for formal analysis",
        "That there is no important theoretical difference between formal and natural languages",
        "That meaning is use",
        "That semantics is impossible",
      ],
      answer: 1,
      explanation: "In \"English as a Formal Language\" (around 1970).",
    },
    {
      prompt: "What kind of modality is expressed by He must be home by now?",
      choices: ["Deontic", "Epistemic", "Dynamic", "None"],
      answer: 1,
      explanation: "Based on what the speaker knows.",
    },
    {
      prompt: "How did Lewis analyze counterfactuals?",
      choices: [
        "As always true",
        "As true if the consequent holds in the most similar worlds where the antecedent holds",
        "As material conditionals",
        "As questions",
      ],
      answer: 1,
      explanation: "Counterfactuals (1973).",
    },
    {
      prompt: "What problem do donkey sentences pose?",
      choices: [
        "They are ungrammatical",
        "An indefinite seems to have universal force, and a pronoun is linked to it outside its usual scope",
        "They are about animals",
        "They have no meaning",
      ],
      answer: 1,
      explanation: "Solved by Kamp's DRT and Heim's File Change Semantics.",
    },
  ],
  reflection:
    "Formal semantics treats meaning in terms of truth. In 500–800 words, explain truth conditions, entailment, and presupposition with examples of your own, describe how logic represents quantifiers and modality, and assess what the truth-conditional approach captures well and what it leaves out.",
};
