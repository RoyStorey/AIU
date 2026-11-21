import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "Binding, Roles, Case, and Theories of Syntax",
  summary:
    "How pronouns and reflexives find their antecedents; the three principles of binding and their exceptions in Chinese, Icelandic, and Ewe; thematic roles and the theta criterion; argument structure and verb alternations; abstract Case; Principles and Parameters and the null-subject parameter; the Minimalist Program; other frameworks, from LFG and HPSG to Construction Grammar; universals and the debate over them; syntax and computers; and a review of the course.",
  pages: [
    {
      title: "Who Does a Pronoun Refer To?",
      body: `## Anaphora

Pronouns such as *he*, *she*, and *it*, and reflexives such as *himself* and *herself*, usually refer to someone or something mentioned elsewhere in the discourse. The relation between a pronoun and the expression it refers back to, its **antecedent**, is called **anaphora**, and the pronoun is called an **anaphoric** expression.

## Indices

Syntacticians mark reference with **subscript indices**. Expressions with the same index refer to the same entity; those with different indices refer to different entities:

- *John₁ likes himself₁.* (*himself* = John)
- *John₁ likes him₂.* (*him* ≠ John)
- *John₁ thinks that he₁ is clever.* (*he* = John, possible)
- *John₁ thinks that he₂ is clever.* (*he* = someone else, also possible)

## Structure matters

The possible interpretations depend on **structure**, not just order or distance. Compare:

- *John₁ likes himself₁.* (fine)
- \\**Himself₁ likes John₁.* (bad)
- *John₁'s mother likes himself₁.* (bad: *himself* cannot refer to John)
- *John₁'s mother likes him₁.* (fine: *him* can refer to John)

In the third sentence, *John* precedes *himself* and is close to it, yet cannot be its antecedent. In the fourth, *him* can refer to John, though in the simple *John likes him*, it cannot. These facts cannot be explained by linear order; they depend on the hierarchical relations among the noun phrases, especially **c-command**, which we met in Lesson II.

## Three kinds of expression

Syntacticians distinguish three kinds of noun phrase, according to how they find their reference:

- **anaphors**: reflexives (*himself*, *themselves*) and reciprocals (*each other*), which must have an antecedent nearby;
- **pronouns**: *he*, *him*, *she*, *her*, *they*, which may have an antecedent, but not too close;
- **R-expressions** ("referring expressions"): names and descriptions like *John* and *the man*, which refer on their own and cannot have an antecedent that c-commands them.

In the next page, we study the principles that govern each.

## Why it matters

Binding is one of the clearest areas in which speakers have subtle, consistent judgments about sentences they have never heard, and in which those judgments depend on abstract structure. It has been a central testing ground for syntactic theory since the 1970s, and its study has revealed interesting variation across languages.

## Discourse and pragmatics

Not all facts about reference are syntactic. Which of several possible antecedents a pronoun refers to often depends on **meaning** and **context**: in *The city council refused the demonstrators a permit because they feared violence*, *they* is usually understood as the council; if *feared* is replaced by *advocated*, *they* is understood as the demonstrators. This example, discussed by **Terry Winograd** in 1972, shows that interpreting pronouns requires world knowledge. Syntax determines which interpretations are **possible**; meaning and context determine which is **chosen**.

> **Pause and consider.** In *John's mother likes him*, can *him* refer to John? Can it in *John likes him*? Why the difference?`,
    },
    {
      title: "The Binding Principles",
      body: `## Binding

In *Lectures on Government and Binding* (1981), Chomsky formulated three **binding principles**. They use the notion of **binding**: an expression A **binds** an expression B if A **c-commands** B and A and B are **coindexed** (refer to the same thing).

## Principle A: anaphors

> **Principle A**: An anaphor must be bound in its **local domain**.

The local domain is, roughly, the smallest clause containing the anaphor. So:

- *John₁ likes himself₁.* (bound by *John*, in the same clause: fine)
- \\**John₁ thinks that Mary likes himself₁.* (*himself* is not bound in its own clause, where the only possible binder is *Mary*: bad)
- \\**John₁'s mother likes himself₁.* (*John* does not c-command *himself*, because it is inside the subject *John's mother*: bad)

## Principle B: pronouns

> **Principle B**: A pronoun must be **free** (not bound) in its local domain.

So:

- \\**John₁ likes him₁.* (*him* is bound by *John* in the same clause: bad)
- *John₁ thinks that Mary likes him₁.* (*him* is bound by *John*, but outside its local domain: fine)
- *John₁'s mother likes him₁.* (*John* does not c-command *him*: fine)

Principles A and B together explain the **complementary distribution** of reflexives and pronouns: where a reflexive is required, a pronoun is impossible, and vice versa.

## Principle C: R-expressions

> **Principle C**: An R-expression must be **free** everywhere.

So:

- \\**He₁ thinks that John₁ is clever.* (*John* is bound by *he*: bad)
- *His₁ mother thinks that John₁ is clever.* (*his* does not c-command *John*: fine)
- *John₁ thinks that he₁ is clever.* (*he* is a pronoun, bound outside its local domain: fine by Principle B)

Principle C explains why a name cannot be c-commanded by a coreferent pronoun, regardless of distance.

## Exceptions and refinements

The binding principles capture a remarkable range of facts with a few simple statements. But they have faced challenges:

- **Picture noun phrases**: *John₁ saw a picture of himself₁* and *John₁ saw a picture of him₁* are both acceptable, though Principles A and B predict that they should be in complementary distribution.
- **Exempt anaphors**: in *John₁ said that the paper was written by Ann and himself₁*, the reflexive is not locally bound, yet is acceptable.
- **Pronouns in coordinates and with focus**: *Only John₁ voted for him₁* can be acceptable.

**Tanya Reinhart** and **Eric Reuland**, in an influential paper of 1993, proposed a revised theory, **reflexivity**, in which the principles apply to **predicates** rather than to configurations, explaining some of these exceptions.

## Binding and acquisition

Studies of children's acquisition of binding have found that children master Principle A early, but often accept sentences like *Mama Bear is washing her* with *her* referring to Mama Bear, apparently violating Principle B, until around age five or six. Researchers such as **Yu-Chin Chien** and **Kenneth Wexler** argued in 1990 that this reflects not ignorance of Principle B but difficulty with the pragmatic principles governing coreference.

> **Pause and consider.** Use the binding principles to explain why *Himself likes John* is bad but *John likes himself* is fine.`,
    },
    {
      title: "Binding Across Languages",
      body: `## Long-distance reflexives

The binding principles were developed mainly on the basis of English. Other languages show interesting variation.

In **Mandarin Chinese**, the reflexive ***zìjǐ*** "self" can refer to an antecedent **outside** its own clause, in violation of the English-based Principle A:

> *Zhāngsān₁ rènwéi Lǐsì₂ xǐhuān zìjǐ₁/₂.*
> Zhangsan think Lisi like self
> "Zhangsan thinks that Lisi likes him (Zhangsan) / himself (Lisi)."

*Zìjǐ* can refer either to Lisi, in the same clause, or to Zhangsan, in the higher clause. Such **long-distance reflexives** are found in many languages, including **Japanese** (*zibun*), **Korean** (*caki*), and **Icelandic** (*sig*). They are often restricted to **subjects** as antecedents, and in Icelandic, long-distance binding is possible only into clauses in the **subjunctive** mood.

## Explaining long-distance reflexives

Linguists have proposed several explanations:

- that long-distance reflexives move covertly, step by step, from clause to clause, as **C.-T. James Huang** and **C.-C. Jane Tang** proposed for Chinese in 1991;
- that they are partly governed by **discourse** factors, referring to the person whose perspective is being reported;
- that languages differ in the size of the local domain, a parameter.

## Logophoric pronouns

Some languages have special **logophoric** pronouns, used to refer to the person whose speech, thoughts, or feelings are being reported. In **Ewe**, a language of Ghana and Togo, described by **George Clements** in 1975, there is a special pronoun *yè*, used in reported speech to refer to the speaker of the reported words:

> *Kofi be **yè** dzo.* "Kofi said that he (Kofi) left."
> *Kofi be **e** dzo.* "Kofi said that he (someone else) left."

The logophoric pronoun removes the ambiguity that English *he* would have. Logophoric systems are found in many languages of West Africa and elsewhere, and they show that reference can be governed by **perspective** as well as by structure.

## Pronouns and pro-drop

In **null-subject** languages such as Italian, Spanish, and Japanese, a silent pronoun, often called ***pro***, can appear in subject position. Silent pronouns, like overt ones, obey binding principles. In Japanese and Chinese, silent pronouns can also appear in object position, and their interpretation often depends heavily on context.

## Reciprocals

**Reciprocals**, such as English *each other*, behave like reflexives in English: *The boys₁ admire each other₁*; \\**The boys₁ think that Mary admires each other₁*. In many languages, reciprocals and reflexives share the same form: French *se* in *Ils se regardent* can mean "They look at themselves" or "They look at each other."

## What variation teaches

The variation in binding across languages has led syntacticians to refine their theories: to distinguish different kinds of anaphors, to recognize the role of perspective and discourse, and to propose parameters for the size of binding domains. It also shows that some aspects of binding, such as Principle C and the importance of c-command, are very widespread, perhaps universal, while others vary considerably.

> **Pause and consider.** Why might a language develop a special logophoric pronoun like Ewe *yè*?`,
    },
    {
      title: "Thematic Roles",
      body: `## Who did what to whom

The noun phrases in a sentence play different roles in the event or state it describes. In *Mary gave John a book in the library*, Mary is the giver, John the receiver, the book the thing given, and the library the location. These **semantic** roles are called **thematic roles** (or theta roles, θ-roles).

## The main roles

Commonly recognized thematic roles include:

- **Agent**: the deliberate doer of an action: ***Mary** kicked the ball.*
- **Patient**: the entity affected by an action: *Mary kicked **the ball**.*
- **Theme**: the entity that moves or is located: *Mary gave **the book** to John*; ***The book** is on the table.*
- **Experiencer**: the entity that perceives or feels: ***John** heard the music*; *The music pleased **John**.*
- **Goal** or **recipient**: where something moves to, or who receives it: *Mary gave the book **to John***.
- **Source**: where something moves from: *She came **from Paris***.
- **Instrument**: the means by which an action is performed: *She cut the bread **with a knife***.
- **Location**: where something happens or is: *She lives **in London***.

## History

The study of thematic roles was revived in modern linguistics by **Jeffrey Gruber**, in his dissertation of 1965, and by **Charles Fillmore**, in an influential paper, "The Case for Case" (1968). Fillmore proposed that every sentence has an underlying structure of semantic roles, which he called "deep cases," and that grammatical relations such as subject and object are determined by these roles. His work influenced later theories of semantics and syntax, including Construction Grammar, which we meet later in this lesson.

## The theta criterion

In Government and Binding theory, Chomsky proposed the **theta criterion**:

> Each argument receives exactly one thematic role, and each thematic role is assigned to exactly one argument.

This explains why a verb cannot have too many or too few arguments: \\**Mary kicked* (the patient role is unassigned) and \\**Mary slept the bed* (the bed has no role to receive). It also explains why expletives such as *it* in *It seems that John is happy* and *there* in *There is a problem* cannot appear in positions that require a thematic role: they are meaningless placeholders.

## Roles and relations

Thematic roles are related to, but distinct from, grammatical relations. As we saw in Lesson I, the subject is often an agent but not always:

- *The window broke.* (subject = patient)
- *John received a letter.* (subject = recipient)
- *The key opened the door.* (subject = instrument)
- *The music pleased John.* (subject = theme or stimulus; object = experiencer)

Linguists have proposed **linking rules** that predict which role becomes subject and which object. A widely discussed proposal is a **thematic hierarchy**, such as agent > experiencer > instrument > theme > location, with the highest role present becoming the subject.

## Problems

Thematic roles are useful but hard to define precisely. Some arguments seem to have more than one role; some roles are hard to distinguish (patient versus theme); and different analysts use different lists. **David Dowty**, in an influential paper of 1991, proposed instead two **proto-roles**, **Proto-Agent** and **Proto-Patient**, each a cluster of properties (such as volition and causation for agents; change of state and being affected for patients), with arguments having more or fewer of each.

> **Pause and consider.** Identify the thematic roles in *The children frightened the cat with a balloon in the garden*.`,
    },
    {
      title: "Argument Structure and Alternations",
      body: `## Verbs and their arguments

Every verb has an **argument structure**: a specification of how many arguments it takes and what thematic roles they bear. *Sleep* takes one argument (an agent or experiencer); *devour* two (agent and patient); *give* three (agent, theme, and recipient). As we saw in Lesson II, this information is stored in the lexicon.

## Alternations

Many verbs can appear with their arguments in more than one syntactic pattern, called **alternations**:

- **The dative alternation**: *She gave **the book to John*** / *She gave **John the book***.
- **The causative–inchoative alternation**: *She broke **the window*** / ***The window** broke*.
- **The locative alternation**: *She loaded **hay onto the truck*** / *She loaded **the truck with hay***.
- **The conative alternation**: *She cut **the bread*** / *She cut **at the bread***.

## Which verbs alternate?

Not all verbs alternate, and the patterns are revealing:

- *Give*, *send*, and *throw* allow the dative alternation; *donate*, *transfer*, and *push* generally do not: *She donated the money to the charity*; \\**She donated the charity the money*. Many of the non-alternating verbs are Latinate, borrowed from French or Latin, while many alternating verbs are native Germanic words, a pattern that has been studied as a possible morphophonological constraint.
- *Break*, *melt*, and *open* allow the causative–inchoative alternation; *cut*, *destroy*, and *murder* do not: \\**The bread cut*. The verbs that alternate describe changes that can happen without an external agent; those that do not require an agent.
- In the locative alternation, the two variants differ in meaning: *She loaded the truck with hay* suggests the truck was filled; *She loaded hay onto the truck* does not.

## Levin's verb classes

In *English Verb Classes and Alternations* (1993), **Beth Levin** surveyed some three thousand English verbs and the alternations they allow, showing that verbs with similar meanings tend to share alternations. For example, verbs of "contact by impact" (*hit*, *kick*, *slap*) allow the conative alternation (*She kicked at the ball*), while verbs of "touching" (*touch*, *kiss*) do not (\\**She touched at the cat*). Levin's work supported the hypothesis that the syntactic behavior of verbs is largely determined by components of their **meaning**.

## Children and alternations

How do children learn which verbs alternate? Children sometimes overgeneralize, producing errors like *Don't giggle me* (meaning "don't make me giggle") or *I said her no*. **Steven Pinker**, in *Learnability and Cognition* (1989), argued that children learn the meaning components that determine alternations, and that they gradually narrow their generalizations to the right verb classes. Others emphasize the role of **entrenchment** and **pre-emption**: hearing a verb used often in one pattern discourages its use in another.

## Argument structure across languages

Languages differ in how they express argument structure alternations. Many languages have **causative** affixes that add an agent (Turkish *öl-* "die," *öl-dür-* "kill," literally "die-cause"); **applicative** affixes that add an object, common in Bantu languages; and **antipassive** constructions in ergative languages, which demote the object. These morphological devices are another window onto the relation between meaning and syntax.

> **Pause and consider.** Why can you say *The ice melted* but not *The bread cut*? What does this suggest about the meanings of *melt* and *cut*?`,
    },
    {
      title: "Case",
      body: `## Morphological case

As we saw in HIL 110, many languages mark the grammatical role of noun phrases with **case** endings: nominative for subjects, accusative for objects, dative for indirect objects, and so on. Latin *puer* "boy" (nominative), *puerum* (accusative), *puerō* (dative). English retains case only in pronouns: *he*/*him*/*his*, *she*/*her*, *they*/*them*, *who*/*whom*.

## Abstract Case

In the late 1970s, generative syntacticians proposed that **all** languages, including English, have an abstract system of **Case** (with a capital C), which governs where noun phrases can appear, whether or not it is visible as endings. The idea originated in a letter from the French linguist **Jean-Roger Vergnaud** to Chomsky and Howard Lasnik in 1977, and became central to Government and Binding theory.

## The Case Filter

The key principle is the **Case Filter**:

> Every overt noun phrase must have Case.

Case is assigned by particular heads in particular configurations:

- **Nominative** Case by finite T to its specifier (the subject of a finite clause);
- **Accusative** Case by a verb or preposition to its complement (the object).

## What the Case Filter explains

The Case Filter explains a number of facts:

- **Passives**: as we saw in Lesson IV, passive participles cannot assign accusative Case, so the object must move to the subject position to receive nominative: *The cake was eaten*, not \\**Was eaten the cake* (in English).
- **Raising**: in *John seems to be happy*, the subject of the infinitive cannot get Case from nonfinite *to*, so it moves to the main clause subject position, where finite T assigns nominative.
- **Infinitival subjects**: an overt subject of an infinitive needs a Case assigner. *For John to leave would be a mistake* is fine, because the complementizer *for* assigns Case to *John*; \\**John to leave would be a mistake* is bad.
- **Adjectives and nouns** cannot assign Case to their complements in English, so a preposition (*of*) is inserted: *proud **of** her children*, *the destruction **of** the city*, not \\**proud her children*.

## Exceptional Case Marking

In *I believe [John to be happy]*, the subject of the infinitive, *John*, receives accusative Case from the main verb *believe*, across the clause boundary: *I believe **him** to be happy* (not \\**he*). This is called **Exceptional Case Marking** (ECM).

## Morphological and abstract Case

Abstract Case and morphological case usually correspond, but not always. In Icelandic, as studied by **Joan Maling**, **Annie Zaenen**, and **Höskuldur Thráinsson** in the 1980s, some verbs require their subjects to appear in the dative or accusative (**quirky case**), yet these noun phrases behave syntactically as subjects. This showed that morphological case and grammatical relations can come apart.

## Case today

In the Minimalist Program, Case has been reinterpreted in terms of feature checking or **agreement** between noun phrases and functional heads. Some linguists, such as **Alec Marantz**, have argued that morphological case is determined in a separate, post-syntactic component. The role of abstract Case remains a topic of debate, but the Case Filter remains a useful tool for understanding the distribution of noun phrases.

> **Pause and consider.** Why is *proud of her children* grammatical but *proud her children* not?`,
    },
    {
      title: "Negation and Quantifiers",
      body: `## Words that need a negative

Some English words can appear only in certain environments, usually negative ones. Compare:

- *I **didn't** see **anyone**.* / \\**I saw anyone.*
- ***Nobody** has **ever** been there.* / \\**Somebody has ever been there.*
- *She **didn't** lift a finger to help.* / \\**She lifted a finger to help.* (in the idiomatic sense)

Words and phrases like *any*, *ever*, *yet*, and *lift a finger* are called **negative polarity items** (NPIs). They require a **licensor**, such as *not*, *nobody*, *never*, or *few*.

## Structure again

As we saw in Lesson II, the licensor must **c-command** the NPI:

- ***No one** has seen **anything**.* (the licensor *no one* c-commands *anything*: fine)
- \\***Anyone** has seen **nothing**.* (the NPI is not c-commanded by a licensor: bad)

NPIs thus provide another example of a syntactic relation governed by c-command, like binding.

## What licenses NPIs?

NPIs are licensed not only by explicit negatives but also by questions (*Have you **ever** been to Paris?*), conditionals (*If you see **anyone**, tell me*), and certain quantifiers (***Few** people have **ever** seen it*, but \\**Many people have ever seen it*). In 1979, **William Ladusaw** proposed a semantic explanation: NPIs are licensed in **downward-entailing** environments, those in which an inference from a general term to a more specific one is valid. "Few people have eaten vegetables" implies "Few people have eaten carrots"; "Many people have eaten vegetables" does not imply "Many people have eaten carrots." This shows how syntax and semantics interact, a theme of SYN 110.

## Negative concord

As we saw in HIL 101 with Jespersen's cycle, many languages and dialects use **negative concord**, in which several negative words express a single negation: Spanish *No vi a nadie* "I didn't see nobody" means "I didn't see anybody." Standard English does not allow this, but many English dialects do: *I didn't see nobody*. Syntacticians analyze negative concord as a kind of agreement between negative elements, and its distribution across languages is a topic of active research.

## Quantifier scope

Sentences with more than one quantifier can be **ambiguous** in scope:

> *Every student read some book.*

This can mean that each student read some book or other (possibly different books), or that there is one particular book that every student read. In 1977, **Robert May** proposed that quantifiers move covertly at the level of Logical Form, which we met in Lesson IV, by a rule called **Quantifier Raising**; the two readings correspond to the two possible orders of movement. Other theories handle scope without movement.

## Negation and scope

Negation also interacts with scope. The proverb *All that glitters is not gold* means "Not all that glitters is gold," with negation taking scope over *all*, though *not* comes later in the sentence. *Everyone didn't leave* is ambiguous for many speakers between "No one left" and "Not everyone left." Such ambiguities show that the meaning of a sentence depends on more than its surface order, a central topic in semantics.

> **Pause and consider.** Explain the two meanings of *Everyone didn't leave*. Which do you prefer?`,
    },
    {
      title: "Principles and Parameters",
      body: `## A new framework

In *Lectures on Government and Binding* (1981), Chomsky presented a framework that became known as **Government and Binding** theory, and more broadly as **Principles and Parameters**. Its central idea was that Universal Grammar consists of:

- **principles** common to all languages, such as X-bar theory, the theta criterion, the Case Filter, the binding principles, and constraints on movement such as Subjacency;
- **parameters**, a limited number of choice points at which languages may differ, such as the head parameter.

## The switchboard

Chomsky compared parameters to **switches** on a switchboard. A child acquiring a language does not need to learn its grammar from scratch; the principles are innate, and the child need only set the switches on the basis of the input. Each setting might have many consequences, so that a few parameter settings could account for large differences between languages.

## The null-subject parameter

The best-studied example was the **null-subject** (or pro-drop) **parameter**, investigated by **Luigi Rizzi** in *Issues in Italian Syntax* (1982) and others. Languages like Italian and Spanish differ from English and French in a cluster of properties:

1. **Null subjects**: Italian *Parla italiano* "(He/she) speaks Italian," without an overt subject; English \\**Speaks Italian*.
2. **Free subject inversion**: Italian *Ha telefonato Gianni* "Has telephoned Gianni"; English \\**Has telephoned John*.
3. **No that-trace effect**: as we saw in Lesson IV, Italian allows subjects to be questioned across *che* "that."
4. **No expletive subjects**: Italian *Piove* "(It) rains"; English requires *it*.

Rizzi and others proposed that these properties follow from a single parameter, related to the richness of verbal agreement, which allows a silent subject pronoun, *pro*. If correct, a single parameter setting would explain a cluster of differences, as the theory predicted.

## Testing parameters

Further research complicated this picture. Some languages, such as **Chinese** and **Japanese**, allow null subjects and objects without any verbal agreement, suggesting a different mechanism, perhaps related to discourse. Some languages show only some of the clustered properties. Researchers proposed further parameters and refinements.

## Baker's atoms

In *The Atoms of Language* (2001), **Mark Baker** presented a popular account of the parameters approach, comparing parameters to the chemical elements, from which the diversity of languages is built, and proposing a hierarchy of parameters in which the setting of some determines whether others apply.

## Microparameters and criticism

In later work, many syntacticians turned to **microparameters**, small differences between closely related dialects, such as the dialects of Italian studied by **Richard Kayne** and **Paola Benincà**. Others questioned whether the parameter approach had delivered on its promise: **Frederick Newmeyer**, in *Possible and Probable Languages* (2005), argued that the predicted clusters of properties often fail, and that typological generalizations are better explained by functional factors. The status of parameters remains debated.

> **Pause and consider.** Why would it be useful for a child if several properties of a language followed from a single parameter?`,
    },
    {
      title: "The Minimalist Program",
      body: `## Simplifying the theory

In *The Minimalist Program* (1995), Chomsky proposed a radical simplification of syntactic theory. He asked: how much of the complex machinery of Government and Binding theory is really necessary? Could the properties of language be explained by the simplest possible computational system, together with the requirements of the systems that language interacts with?

## The interfaces

In Minimalism, syntax is seen as a computational system that connects two **interfaces**:

- the **sensorimotor** interface, which relates to sound (or sign), pronunciation, and perception;
- the **conceptual–intentional** interface, which relates to meaning and thought.

The levels of deep structure and surface structure, which we met in Lesson IV, were abandoned. Only the interfaces, Chomsky argued, are conceptually necessary.

## Merge

The basic operation of syntax, in Minimalism, is **Merge**: taking two elements and combining them into a set. Merge applies recursively: the result of one Merge can be merged with something else. Merge comes in two forms:

- **External Merge**: combining two separate elements, as when a verb combines with its object;
- **Internal Merge**: combining an element with a part of itself, which is **movement**, as we saw in Lesson IV.

Chomsky argued that Merge alone, applied recursively, generates the hierarchical structures that X-bar theory described, and that movement is not an extra complication but a natural consequence of Merge.

## Economy

Minimalism emphasizes **economy**: derivations should be as efficient as possible, with no superfluous steps or symbols. Movement occurs only when necessary, for example to satisfy a feature on a head. Constraints like islands are reinterpreted in terms of **phases**, chunks of structure (such as CP and VP) that are sent to the interfaces in stages, making earlier material inaccessible to later operations.

## The strong minimalist thesis

Chomsky's most ambitious claim, the **strong minimalist thesis**, is that language is an **optimal** solution to the conditions imposed by the interfaces: that its properties follow from Merge and general principles of efficient computation, with little else specific to language.

## The faculty of language in the narrow sense

In 2002, **Marc Hauser**, Chomsky, and **W. Tecumseh Fitch** proposed in *Science* a distinction between the **faculty of language in the broad sense** (FLB), which includes all the capacities used in language, many of them shared with other animals, and the **faculty of language in the narrow sense** (FLN), which might consist only of **recursion** (or Merge), unique to humans. As we saw in Lesson II, this proposal provoked debate, including Everett's claims about Pirahã.

## Critiques

Minimalism has been influential but also criticized. Some linguists argue that its abstract principles are hard to test, that it has shifted attention away from detailed description, and that its claims about optimality are difficult to evaluate. **Ray Jackendoff** and **Steven Pinker**, in a reply to Hauser, Chomsky, and Fitch in 2005, argued that many aspects of language beyond recursion are specific to humans and to language. Supporters reply that Minimalism is a research program, not a finished theory, and that its value lies in the questions it raises.

> **Pause and consider.** Why might Chomsky argue that movement is not an "imperfection" of language?`,
    },
    {
      title: "Other Frameworks",
      body: `## Many theories

This course has followed the generative tradition, as presented by Carnie. But generative grammar in Chomsky's sense is not the only approach to syntax. Several other frameworks are widely used, each with its own insights.

## Lexical-Functional Grammar

**Lexical-Functional Grammar** (LFG), developed by **Joan Bresnan** and **Ronald Kaplan** from the late 1970s, represents a sentence with two parallel structures: a **constituent structure** (c-structure), a phrase structure tree showing word order and grouping, and a **functional structure** (f-structure), showing grammatical relations such as subject and object. LFG does not use movement; displacement is handled by links between the structures. LFG has been especially successful in describing languages with free word order, such as Warlpiri, and has been used in computational applications.

## Head-Driven Phrase Structure Grammar

**Head-Driven Phrase Structure Grammar** (HPSG), developed by **Carl Pollard** and **Ivan Sag** in the 1980s and 1990s, represents linguistic information as richly structured **feature structures**, combined by general principles and unified with lexical entries. Much of the grammar is stored in the **lexicon**. HPSG is highly formalized and has been implemented in large computational grammars of English, Japanese, German, and other languages.

## Construction Grammar

**Construction Grammar**, associated with **Charles Fillmore**, **Paul Kay**, **Adele Goldberg**, and **William Croft**, holds that grammar consists of **constructions**: learned pairings of form and meaning, ranging from words to idioms to abstract sentence patterns. In *Constructions* (1995), Goldberg argued that sentence patterns themselves carry meaning. In sentences of the type *Pat sneezed the napkin off the table*, which Goldberg discussed, the verb *sneeze*, normally intransitive, appears with an object and a path, because the **caused-motion construction** (X causes Y to move along Z) contributes the meaning of causing motion. Construction Grammar is closely linked to usage-based approaches to acquisition, as we saw in LIN 110.

## Functional and typological approaches

**Role and Reference Grammar**, developed by **Robert Van Valin** and **William Foley**, and **Functional Discourse Grammar**, developed by **Simon Dik** and **Kees Hengeveld**, emphasize the communicative functions of grammatical structures and draw heavily on typological data from many languages. Typologists such as **Bernard Comrie**, **William Croft**, and **Martin Haspelmath** study variation across languages, often explaining it in terms of processing, frequency, and history rather than innate parameters.

## Categorial grammar and dependency grammar

**Combinatory Categorial Grammar** (CCG), developed by **Mark Steedman**, treats syntactic categories as functions that combine with arguments, closely linking syntax and semantics; it has been influential in computational linguistics. **Dependency grammar**, which we met in Lesson II, represents structure as relations between words, and underlies the Universal Dependencies treebanks.

## Comparing frameworks

These frameworks differ in their formal tools and their assumptions about the mind and about acquisition. But they share much: all recognize hierarchical structure, heads and dependents, grammatical relations, and the importance of the lexicon. Many of the empirical discoveries of syntax, such as islands, binding, and unaccusativity, are recognized across frameworks, though explained differently. Students of syntax benefit from understanding several frameworks, and from distinguishing the facts from the formalisms used to describe them.

> **Pause and consider.** In *Pat sneezed the napkin off the table*, where does the meaning of causing motion come from, according to Construction Grammar?`,
    },
    {
      title: "Universals and Diversity",
      body: `## What all languages share

Are there **universals** of syntax, properties shared by all human languages? As we saw in Lesson II, **Joseph Greenberg**'s work in the 1960s identified many **implicational** universals of word order. Generative grammar, from a different direction, sought the principles of **Universal Grammar** shared by all languages.

## Kinds of universals

Linguists distinguish several kinds of universals:

- **Absolute universals**: properties found in all languages without exception, such as having nouns and verbs (in some form), having ways to form questions and negate statements, and having hierarchical structure.
- **Statistical universals** or **tendencies**: properties found in most languages, such as having SOV or SVO order, or having subjects before objects.
- **Implicational universals**: if a language has property X, it has property Y, such as Greenberg's "VSO languages have prepositions."

## The myth of universals?

In 2009, **Nicholas Evans** and **Stephen Levinson** published a provocative paper, "The Myth of Language Universals," in *Behavioral and Brain Sciences*. They argued that the diversity of the world's languages is far greater than generative grammar had assumed, and that very few, if any, proposed universals are genuinely exceptionless. They pointed to languages without clear constituency (as some argued for Warlpiri), without recursion (as Everett claimed for Pirahã), without adjectives, or with unusual sound systems. They argued that linguistics should focus on **diversity** and its explanation, rather than on universals.

## Responses

The paper drew many responses. Generative linguists argued that Evans and Levinson had misunderstood the notion of Universal Grammar, which concerns the **capacity** for language and the **constraints** on possible grammars, not surface properties shared by all languages. Others argued that some universals, such as structure dependence and the existence of hierarchical structure, remain unrefuted. Typologists welcomed the emphasis on diversity but noted the many strong tendencies that require explanation.

## Explaining universals

Several kinds of explanation for universals and tendencies have been proposed:

- **innate** constraints on grammar (Universal Grammar);
- **processing** pressures, favoring structures that are easier to produce and understand, as John Hawkins argued;
- **communicative** pressures, favoring structures that convey information efficiently;
- **historical** processes, such as grammaticalization, which tend to produce similar results in different languages, as we saw in HIL 101;
- **cultural evolution**, in which languages are shaped by being learned and transmitted across generations, as researchers such as **Simon Kirby** have explored in experiments and computer simulations.

These explanations are not mutually exclusive, and many linguists believe that universals arise from several sources at once.

## The value of diversity

Whatever the answer, the debate has emphasized the importance of documenting the world's languages, many of which are endangered. Each language that disappears takes with it evidence about the range of human linguistic possibilities. As we saw in HIL 101 and PHO 101, documentation is both a scientific and a human responsibility.

> **Pause and consider.** Is the existence of hierarchical structure in all languages better explained by innate constraints or by processing pressures? What evidence would help decide?`,
    },
    {
      title: "Syntax and Computers",
      body: `## Parsing

From the early days of computing, researchers have tried to build programs that analyze the syntactic structure of sentences, a task called **parsing**. Early parsers, in the 1960s and 1970s, used hand-written grammars, often based on generative or related theories. They struggled with the enormous ambiguity of natural language: as we saw in Lesson I, ordinary sentences may have dozens or hundreds of possible structures.

## Treebanks and statistics

In the 1990s, parsing was transformed by **statistical** methods trained on **treebanks**, large collections of sentences annotated with their syntactic structures. The most famous, the **Penn Treebank**, created at the University of Pennsylvania and described by **Mitchell Marcus**, **Beatrice Santorini**, and **Mary Ann Marcinkiewicz** in 1993, contained about a million words of English, mainly from the *Wall Street Journal*, annotated with phrase structure trees. Statistical parsers learned from treebanks which structures were most probable, dramatically improving accuracy. Later, the **Universal Dependencies** treebanks, which we met in Lesson II, extended this approach to many languages.

## Neural networks

In the 2010s, **neural network** models came to dominate natural language processing. These models learn patterns from vast amounts of text without explicit grammatical rules. Large **language models**, trained to predict the next word in a sequence, now produce fluent text and perform many linguistic tasks.

## Do neural models learn syntax?

Do such models learn syntactic structure, or only surface patterns? In 2016, **Tal Linzen**, **Emmanuel Dupoux**, and **Yoav Goldberg** tested whether neural networks could learn English **subject–verb agreement** across intervening words, as in *The keys to the cabinet **are** on the table*, where the verb must agree with *keys*, not the nearer noun *cabinet*. They found that models learned agreement fairly well but made errors when the intervening noun had a different number, errors that suggested a partial reliance on linear patterns. Later studies of larger models found much better performance on such tests, and researchers have found evidence that models represent hierarchical structure internally.

## Implications for linguistics

These findings have reopened old debates. Some researchers argue that the success of language models shows that syntax can be learned from data without innate grammatical knowledge, challenging the poverty of the stimulus argument. Others reply that models are trained on far more data than any child hears, often billions of words, and that their learning differs from human acquisition. Researchers have begun training models on child-sized amounts of data to test which aspects of syntax can be learned under human-like conditions. The question of what such models reveal about human language is one of the liveliest in contemporary linguistics.

## Syntax in applications

Whatever the theoretical implications, syntactic knowledge contributes to many applications: machine translation, information extraction, grammar checking, and the analysis of large text collections in the humanities and social sciences. Understanding syntax helps both in building such tools and in understanding their errors.

> **Pause and consider.** In *The keys to the cabinet are on the table*, why might a system that relied only on the nearest noun choose the wrong verb form?`,
    },
    {
      title: "The Course in Review",
      body: `## What we have studied

In this course, we have studied **syntax**, the structure of phrases and sentences.

In **Lesson I**, we asked what syntax studies and what speakers know. We saw that speakers know complex, untaught rules, such as structure dependence and island constraints; distinguished descriptive from prescriptive grammar; examined grammaticality judgments, ambiguity, competence and performance; traced the history of grammar from Pāṇini to Chomsky's *Syntactic Structures*; and studied parts of speech, clauses, grammatical relations, and ergativity.

In **Lesson II**, we studied **constituency** and **phrase structure**: tests for constituents, phrases and heads, phrase structure rules, tree diagrams, c-command, recursion, ambiguity, auxiliaries and embedded clauses, subcategorization, dependency grammar, and word order across languages.

In **Lesson III**, we studied **X-bar theory** and the structure of clauses: specifiers, complements, and adjuncts; the head parameter; determiner phrases; tense and complementizer phrases; verb movement in French and German; head-final Japanese and free-word-order Warlpiri; small clauses; and functional categories in children's speech.

In **Lesson IV**, we studied **movement**: head movement in questions, wh-movement and its locality, wh-in-situ, islands, the that-trace effect, passives, raising and control, unaccusatives, relative clauses, topics and focus, ellipsis, and the debate over whether movement is real.

In **Lesson V**, we studied **binding**, **thematic roles**, **argument structure**, and **Case**; the frameworks of Principles and Parameters and Minimalism; alternative frameworks; universals and diversity; and syntax in computers.

## What remains

Many topics remain for further study: the syntax of negation and quantifiers, the structure of noun phrases and adjectives across languages, the interface between syntax and morphology, the syntax of sign languages, the history of syntactic change, and the relation between syntax and meaning, which is the subject of **SYN 110**, Introduction to Semantics.

## The point of it all

Why study syntax? Because it reveals something remarkable about the human mind: that every speaker, without instruction, masters an intricate system of abstract principles, allowing them to produce and understand an unlimited number of new sentences. Whether that system is innate, learned, or both, its study has been one of the great intellectual adventures of the past century.

## A closing thought

As Chomsky emphasized from his earliest work, the creative use of language, the ability to say new things appropriate to new situations, is a characteristic of all human beings. The book of Genesis portrays the first human as a namer: "whatsoever Adam called every living creature, that was the name thereof" (Genesis 2:19). But naming is only the beginning; it is syntax that allows names to be combined into the endless variety of human thought and expression.

> **Pause and consider.** Which discovery in this course most surprised you about your own knowledge of language?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Binding

> *John likes himself.* / \\**Himself likes John.* / *John's mother likes him.* / \\**John's mother likes himself.*

**Questions**

1. Explain each judgment using the binding principles and c-command.
2. How does Mandarin *zìjǐ* differ from English *himself*?

## 2. Alternations

> *She gave John the book* / \\**She donated the charity the money*; *The window broke* / \\**The bread cut*

**Questions**

1. Which alternations are involved?
2. What does Levin's work suggest about why some verbs alternate and others do not?

## 3. The null-subject parameter

> Italian *Parla italiano*; *Ha telefonato Gianni*; *Piove*

**Questions**

1. What properties do these sentences illustrate?
2. Why did Rizzi propose that they follow from one parameter?

## 4. Constructions

> *Pat sneezed the napkin off the table.* (Goldberg, 1995)

**Questions**

1. Why is this sentence surprising, given the argument structure of *sneeze*?
2. How does Construction Grammar explain it?

## Drawing the threads together

In a paragraph, explain how syntactic theory accounts for reference, roles, and variation among languages, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Syntax: A Generative Introduction", author: "Andrew Carnie", publisher: "Wiley-Blackwell", year: "4th ed., 2021", note: "Read the chapters on binding theory and on thematic relations and Case, and the concluding chapters on alternative theories." },
    { kind: "book", title: "Lectures on Government and Binding", author: "Noam Chomsky", publisher: "Foris", year: "1981", note: "For advanced students: read the opening chapter on the framework of principles and parameters." },
    { kind: "book", title: "Constructions: A Construction Grammar Approach to Argument Structure", author: "Adele E. Goldberg", publisher: "University of Chicago Press", year: "1995", note: "Read chapter 1." },
  ],
  media: [
    { kind: "book", title: "English Verb Classes and Alternations: A Preliminary Investigation", author: "Beth Levin", publisher: "University of Chicago Press", year: "1993", note: "Browse the alternations in Part One." },
    { kind: "book", title: "The Myth of Language Universals: Language Diversity and Its Importance for Cognitive Science", author: "Nicholas Evans and Stephen C. Levinson", publisher: "Behavioral and Brain Sciences 32", year: "2009", note: "Read the target article and two of the responses." },
  ],
  questions: [
    {
      prompt: "What does Principle A of binding theory require?",
      choices: [
        "A pronoun must be free in its local domain",
        "An anaphor must be bound in its local domain",
        "An R-expression must be free",
        "All pronouns must be bound",
      ],
      answer: 1,
      explanation: "Hence John likes himself but *John thinks Mary likes himself.",
    },
    {
      prompt: "Why is *He thinks that John is clever ungrammatical with he = John?",
      choices: [
        "Principle A",
        "Principle B",
        "Principle C: an R-expression must be free",
        "The Case Filter",
      ],
      answer: 2,
      explanation: "He c-commands John.",
    },
    {
      prompt: "What is distinctive about Mandarin zìjǐ?",
      choices: [
        "It is a pronoun",
        "It can be bound by an antecedent outside its own clause",
        "It cannot have an antecedent",
        "It is a name",
      ],
      answer: 1,
      explanation: "A long-distance reflexive.",
    },
    {
      prompt: "What does the theta criterion state?",
      choices: [
        "Every verb has an agent",
        "Each argument receives exactly one thematic role, and each role is assigned to exactly one argument",
        "Subjects are agents",
        "Objects are patients",
      ],
      answer: 1,
      explanation: "Chomsky, 1981.",
    },
    {
      prompt: "Which verb allows the causative–inchoative alternation?",
      choices: ["cut", "break", "murder", "destroy"],
      answer: 1,
      explanation: "The window broke; *The bread cut.",
    },
    {
      prompt: "What does the Case Filter state?",
      choices: [
        "Every word must have case endings",
        "Every overt noun phrase must have (abstract) Case",
        "Only subjects have Case",
        "Case is optional",
      ],
      answer: 1,
      explanation: "Proposed following Vergnaud's 1977 letter.",
    },
    {
      prompt: "Which property is part of the null-subject cluster?",
      choices: [
        "Obligatory expletives",
        "Free subject inversion",
        "Do-support",
        "Verb-second",
      ],
      answer: 1,
      explanation: "Along with null subjects and no that-trace effect.",
    },
    {
      prompt: "What is Merge, in the Minimalist Program?",
      choices: [
        "A type of agreement",
        "The basic operation that combines two elements into a set, applying recursively",
        "A phonological rule",
        "A type of Case",
      ],
      answer: 1,
      explanation: "Internal Merge is movement.",
    },
    {
      prompt: "How does Construction Grammar explain Pat sneezed the napkin off the table?",
      choices: [
        "Sneeze is transitive",
        "The caused-motion construction contributes the meaning of causing motion",
        "It is ungrammatical",
        "By movement",
      ],
      answer: 1,
      explanation: "Goldberg, 1995.",
    },
    {
      prompt: "What did Evans and Levinson argue in 2009?",
      choices: [
        "That all languages are identical",
        "That language diversity is greater than often assumed and few proposed universals are exceptionless",
        "That syntax does not exist",
        "That English is universal",
      ],
      answer: 1,
      explanation: "\"The Myth of Language Universals.\"",
    },
  ],
  reflection:
    "Syntactic theory seeks principles that explain both what languages share and how they differ. In 500–800 words, explain the binding principles and the null-subject parameter with examples, compare how generative grammar and Construction Grammar explain sentence patterns, and reflect on whether you find the case for universals or the case for diversity more persuasive.",
};
