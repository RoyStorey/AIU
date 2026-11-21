import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Events, Time, and Participants",
  summary:
    "How verbs describe situations; Vendler's classes of states, activities, accomplishments, and achievements; perfective and imperfective aspect and the imperfective paradox; Reichenbach's analysis of tense and languages without tense; the puzzles of the English perfect; Davidson's events; participants and causation; motion events and Talmy's typology; mood and evidentiality; negation; and time talked about as space.",
  pages: [
    {
      title: "Describing Situations",
      body: `## Verbs and situations

Sentences describe **situations**: states of affairs, events, and processes in the world. The verb is usually the core of this description, but the type of situation depends on the whole sentence: the verb, its arguments, adverbs, and grammatical markers of tense and aspect.

Consider:

- *Mary knows French.* (a **state**, unchanging over time)
- *Mary is running.* (an **activity**, ongoing, with no natural end)
- *Mary ran a mile.* (an **accomplishment**, with a natural endpoint)
- *Mary reached the summit.* (an **achievement**, an instantaneous change)

These differences are not just matters of the world but of how language **presents** the world. The same physical event can be described as an activity (*Mary was walking*) or an accomplishment (*Mary walked to the station*).

## Why situation types matter

Situation types matter because they interact with grammar in systematic ways. As we will see, states resist the progressive (\\**Mary is knowing French*); activities combine with *for an hour* but not *in an hour*; accomplishments with *in an hour*. Speakers know these patterns without being taught, and semantics must explain them.

## The plan of this lesson

In this lesson, we study how languages express the **temporal** and **participant** structure of situations:

- **situation types** (also called **lexical aspect**, **Aktionsart**, or **actionality**);
- **grammatical aspect**, such as the perfective and imperfective;
- **tense**, which locates situations in time;
- **events** as entities in semantic representations;
- **participants** and **causation**;
- **motion**, and how languages differ in describing it;
- **mood**, **evidentiality**, and **negation**;
- and the ways time is talked about in terms of space.

## Saeed's framework

Saeed treats these topics in his chapters on "Sentence Semantics: Situations" and "Participants," drawing on both formal and functional traditions. We will follow his framework, adding cross-linguistic examples.

## Universals and variation

Like the topics of Lesson II, these areas show both **universal tendencies** and striking **variation**. All languages can talk about past, present, and future, about ongoing and completed events, and about causes and effects. But languages differ in which distinctions they make **obligatory**, as we saw in Lesson I, and in how they package information about events into words.

> **Pause and consider.** Classify these as states, activities, accomplishments, or achievements: *love*, *swim*, *build a house*, *notice*.`,
    },
    {
      title: "Vendler's Classes",
      body: `## Four classes

In a classic paper, "Verbs and Times" (1957), the philosopher **Zeno Vendler** proposed that verbs (more precisely, verb phrases) fall into four classes according to their temporal properties:

- **States**: *know*, *love*, *own*, *be tall*. They hold over a period without change, and have no internal phases.
- **Activities**: *run*, *swim*, *push a cart*, *laugh*. They are ongoing processes without a natural endpoint.
- **Accomplishments**: *run a mile*, *build a house*, *draw a circle*, *eat an apple*. They are processes leading to a natural endpoint.
- **Achievements**: *reach the summit*, *notice*, *win the race*, *die*. They are instantaneous changes.

## Tests

Vendler and later linguists, especially **David Dowty** in *Word Meaning and Montague Grammar* (1979), proposed tests to distinguish the classes:

1. **The progressive**: states generally resist it (\\**She is knowing the answer*); activities and accomplishments accept it (*She is running*, *She is building a house*); achievements accept it only with a special meaning, describing the lead-up (*She is reaching the summit* = she is about to).
2. ***For an hour* versus *in an hour***: activities take *for* (*She ran for an hour*, \\**She ran in an hour*); accomplishments take *in* (*She built the house in a year*); achievements take *in* with the meaning "after" (*She reached the summit in an hour*).
3. **Entailment from the progressive**: for activities, *She was running* entails *She ran*; for accomplishments, *She was drawing a circle* does **not** entail *She drew a circle*, since she might have been interrupted.

## Telicity

The key distinction between activities and accomplishments is **telicity** (from Greek *télos*, "end"): accomplishments and achievements are **telic**, with a natural endpoint; states and activities are **atelic**. Telicity depends not only on the verb but on its arguments:

- *She ate apples* (atelic: *for an hour*);
- *She ate an apple* (telic: *in a minute*);
- *She ran* (atelic);
- *She ran to the store* (telic).

The quantity of the object or the presence of a goal can turn an activity into an accomplishment. **Henk Verkuyl** and **Manfred Krifka** developed formal theories of how the properties of noun phrases determine telicity.

## Semelfactives

**Carlota Smith**, in *The Parameter of Aspect* (1991), added a fifth class, **semelfactives**: instantaneous events that do not produce a change of state, such as *cough*, *knock*, *blink*, and *flap*. Unlike achievements, they can be repeated in the progressive: *She is coughing* means she is coughing repeatedly.

## Why the classes matter

Vendler's classes interact with tense, aspect, adverbs, and argument structure throughout grammar. They help explain, for example, why *She is knowing French* sounds odd, why *She ate the apple for an hour* means something different from *She ate the apple in an hour*, and why children acquiring languages make particular kinds of errors with tense and aspect. As we saw in SYN 101, the unaccusative verbs tend to be telic changes of state.

> **Pause and consider.** Apply the *for an hour* and *in an hour* tests to *write a letter*, *write letters*, and *write*. What do you find?`,
    },
    {
      title: "Perfective and Imperfective",
      body: `## Viewing a situation

Besides the inherent temporal properties of situations, languages have grammatical means to present a situation from different **viewpoints**. This is **grammatical aspect** (or viewpoint aspect), as opposed to the **lexical aspect** of Vendler's classes.

The most widespread distinction, described by **Bernard Comrie** in his classic *Aspect* (1976), is between:

- **perfective** aspect, which presents a situation as a **whole**, viewed from outside, as a single complete event;
- **imperfective** aspect, which presents a situation from **inside**, as ongoing, repeated, or habitual, without reference to its beginning or end.

## Examples

- **Spanish** distinguishes the perfective **preterite** (*Leyó el libro* "She read the book," a complete event) from the imperfective **imperfect** (*Leía el libro* "She was reading / used to read the book").
- **Russian** and other Slavic languages have pairs of verbs for most meanings: imperfective *pisat'* "to write (be writing)" and perfective *napisat'* "to write (completely)."
- **Mandarin** marks perfective with *-le* and ongoing action with *zài* or *-zhe*.
- **English** has a **progressive** (*She was reading*), which presents an event as ongoing, and a simple form (*She read*), which often has a perfective sense with events.

## The imperfective paradox

The progressive raises a famous puzzle, called the **imperfective paradox** by **David Dowty** (1979). Consider:

- *John was crossing the street.*
- *John crossed the street.*

The first does not entail the second: John might have been hit by a truck halfway across. So what does the first sentence mean? It seems to describe an event that would have ended with John on the other side, if it had continued. But it did not necessarily continue. Dowty proposed an analysis using possible worlds: *John was crossing the street* is true if the event would have culminated in John's crossing in the normal course of events, the **inertia worlds**. Others have proposed different analyses, but the paradox shows how aspect involves reference to possible as well as actual events.

## Aspect and narrative

Aspect plays an important role in **narrative**. In many languages, perfective forms advance the story (a sequence of complete events), while imperfective forms provide background (ongoing situations against which events occur). In the Spanish *Cuando llegué, llovía* "When I arrived (perfective), it was raining (imperfective)," the perfective event is set against the imperfective background. Studies by **Paul Hopper** in 1979 showed that this division between **foreground** and **background** is widespread across languages.

## Acquisition and second-language learning

Children acquiring languages with rich aspect systems often associate perfective forms with telic verbs and imperfective forms with atelic verbs, a pattern known as the **aspect hypothesis**, studied by **Roger Andersen** and **Yasuhiro Shirai** in the 1990s. Second-language learners of Spanish and Russian find aspect notoriously difficult, especially when their native language, like English, does not mark it in the same way.

## Aspect in the Bible

Readers of the Greek New Testament, as we saw in HIL 110, pay close attention to aspect: the difference between the aorist (perfective) and present (imperfective) can affect interpretation. In 1 John 2:1, "these things write I unto you, that ye sin not," the aorist form of "sin" is often understood as referring to particular acts of sin rather than an ongoing pattern, a distinction that English translations struggle to convey.

> **Pause and consider.** Does *She was building a house* entail that a house exists? What does this show?`,
    },
    {
      title: "Tense",
      body: `## Locating events in time

**Tense** is the grammatical marking of the location of a situation in time, relative to some reference point, usually the moment of speaking. English marks tense on verbs: *walk*/*walked*. The basic distinctions are **past**, **present**, and **future**, though, as we saw in HIL 110, English expresses the future with auxiliaries rather than a dedicated tense form.

## Reichenbach

The philosopher **Hans Reichenbach**, in *Elements of Symbolic Logic* (1947), proposed an influential analysis of tense using three points in time:

- **S**, the time of **speech**;
- **E**, the time of the **event**;
- **R**, the **reference** time, the point from which the event is viewed.

Different tenses correspond to different arrangements of these points:

- Simple past (*I saw John*): E = R, before S.
- Present perfect (*I have seen John*): E before R, R = S.
- Past perfect (*I had seen John*): E before R, R before S.
- Future (*I will see John*): S before R = E.
- Future perfect (*I will have seen John*): S before E before R.

The reference time explains the difference between the simple past and the present perfect: both describe past events, but the simple past views the event from the past, and the present perfect from the present.

## Absolute and relative tense

**Absolute** tenses locate events relative to the moment of speech; **relative** tenses locate them relative to another reference point. Participles are often relatively tensed: in *Leaving the house, she noticed the rain*, *leaving* is simultaneous with *noticed*, not with the moment of speech. Some languages, such as many in Africa, distinguish several degrees of past or future: **remote** past, **hodiernal** past (earlier today), **hesternal** past (yesterday), and so on.

## Languages without tense

Not all languages have tense. **Mandarin Chinese** has no grammatical tense marking: *Tā qù Běijīng* can mean "He goes / went / will go to Beijing," with the time determined by context, adverbs, or aspect markers. The linguist **Jo-wang Lin** argued in 2006 that Mandarin is genuinely tenseless, with temporal interpretation determined by aspect and pragmatics. Many other languages, such as Yoruba, Thai, and Indonesian, also lack grammatical tense, relying on aspect, adverbs, and context.

## The development of tense

As we saw in HIL 101, tense markers often develop through **grammaticalization**: futures from verbs meaning "go," "want," or "have to"; pasts from perfects or from words meaning "finish." In *The Evolution of Grammar* (1994), **Joan Bybee**, **Revere Perkins**, and **William Pagliuca** surveyed tense, aspect, and modality in seventy-six languages and identified recurrent paths of development, such as perfect > perfective > simple past, found in the history of French, German, and other languages.

## Tense and truth

Formal semanticists, beginning with the logician **Arthur Prior** in the 1950s, developed **tense logics**, with operators such as P ("it was the case that") and F ("it will be the case that"). Later work, following **Barbara Partee**, argued that tenses behave more like **pronouns**, referring to contextually salient times: *I didn't turn off the stove* refers not to any past time (the speaker surely turned it off at some point in life) but to a particular time, the time before leaving the house.

> **Pause and consider.** Use Reichenbach's S, E, and R to explain the difference between *I lived in Paris* and *I have lived in Paris*.`,
    },
    {
      title: "The English Perfect",
      body: `## A puzzling form

The English **present perfect** (*have* + past participle) is one of the most puzzling forms in the language, for linguists and for learners. It describes past events, yet it is a present tense: *I **have** seen that film*.

## Uses

In a paper published in 1971, the linguist **James McCawley** distinguished several uses of the present perfect:

- **Universal** (or continuative): a situation that began in the past and continues to the present: *I have lived here for ten years.*
- **Existential** (or experiential): at least one occurrence at some time up to the present: *I have been to Paris.* *Have you ever eaten snails?*
- **Resultative**: a past event whose result holds now: *I have lost my keys* (so I don't have them now).
- **Hot news**: a recent event being reported: *The president has resigned!*

## The present perfect puzzle

A curious restriction: in English, the present perfect cannot combine with adverbs that specify a definite past time:

- *I saw him **yesterday**.*
- \\**I have seen him **yesterday**.*

Yet the present perfect describes a past event. Why can't it be combined with *yesterday*? This **present perfect puzzle**, discussed by **Wolfgang Klein** in 1992, has received many explanations: that the reference time of the perfect is the present, which conflicts with a past adverb; that the perfect describes a present state resulting from the past event, rather than the event itself; or that the perfect requires a time span extending to the present.

## Variation

The use of the perfect varies across English dialects and across languages:

- **American** English often uses the simple past where **British** English uses the perfect: *Did you eat yet?* (American) versus *Have you eaten yet?* (British); *I just saw him* versus *I've just seen him*.
- In **German**, **French**, and **Italian**, the perfect has largely replaced the simple past in everyday speech: German *Ich habe ihn gestern gesehen*, "I have seen him yesterday," is perfectly natural. This is an example of the path perfect > perfective > past that we noted on the previous page.
- **Irish English** has a special "after-perfect," which we met in HIL 101: *I'm after eating my dinner* ("I have just eaten").

## The perfect and relevance

Many grammarians have described the present perfect as expressing **current relevance**: the past event matters now. *I have lost my keys* is relevant because I need them now; *I lost my keys* simply reports a past event. But "relevance" is hard to define precisely, and linguists continue to debate whether it is part of the meaning of the perfect or a pragmatic effect.

## Learning the perfect

For learners of English, the present perfect is a notorious difficulty, because the distinction between *I saw* and *I have seen* is subtle and does not correspond to distinctions in many other languages. Speakers of German and French, in particular, often say *I have seen him yesterday*, transferring the patterns of their native languages, as we saw with transfer in PHO 101.

> **Pause and consider.** Why does *I have lost my keys* suggest that you still haven't found them, while *I lost my keys* does not?`,
    },
    {
      title: "Davidson's Events",
      body: `## A puzzle about adverbs

In a famous paper, "The Logical Form of Action Sentences" (1967), the philosopher **Donald Davidson**, whom we met in Lesson III, considered sentences like:

> *Jones buttered the toast slowly, deliberately, in the bathroom, with a knife, at midnight.*

This sentence entails many others:

- *Jones buttered the toast slowly, in the bathroom.*
- *Jones buttered the toast in the bathroom.*
- *Jones buttered the toast.*

Dropping any modifier gives a sentence that is entailed by the original. How can semantics capture these entailments?

## The problem

If *butter* were simply a two-place predicate, **butter**(jones, toast), how would we add the modifiers? We could treat *butter the toast slowly in the bathroom with a knife at midnight* as a different predicate with more places, **butter5**(jones, toast, bathroom, knife, midnight), but then the entailments to the shorter sentences would be unexplained, since they would involve different predicates.

## Events as arguments

Davidson's solution was to introduce **events** as entities in the semantic representation. A verb like *butter* has an extra, hidden argument, an **event** variable, *e*. The sentence *Jones buttered the toast* means: there is an event *e* such that *e* is a buttering of the toast by Jones. Modifiers are simply additional predicates of the event:

> ∃*e* [**butter**(*e*, jones, toast) ∧ **slow**(*e*) ∧ **in**(*e*, bathroom) ∧ **with**(*e*, knife) ∧ **at**(*e*, midnight)]

The entailments follow automatically from the logic of conjunction: if all the conjuncts are true, then any subset of them is true.

## The neo-Davidsonian approach

In *Events in the Semantics of English* (1990), **Terence Parsons** extended Davidson's idea in what is called the **neo-Davidsonian** approach. Not only modifiers but also **participants** are related to the event by **thematic roles**:

> ∃*e* [**buttering**(*e*) ∧ **agent**(*e*, jones) ∧ **theme**(*e*, toast) ∧ **slow**(*e*) …]

This connects event semantics with the thematic roles we studied in SYN 101, and allows a uniform treatment of arguments and modifiers.

## Why events?

Event semantics has proved useful for many phenomena:

- **adverbial modification**, as Davidson showed;
- **perception reports**: *I saw Mary leave* seems to describe seeing an event;
- **nominalizations**: *Jones's buttering of the toast* seems to refer to an event;
- **anaphora** to events: *Jones buttered the toast. **It** happened at midnight.*
- **aspect and telicity**, which can be analyzed as properties of events.

## Do events exist?

Davidson's proposal also raised philosophical questions. Are events real entities, alongside objects? How are events individuated: is Jones's buttering of the toast the same event as his moving the knife? Philosophers have debated these questions extensively. For linguistics, events have proved a valuable tool, whatever their ultimate metaphysical status.

> **Pause and consider.** Using event semantics, explain why *Jones buttered the toast at midnight* entails *Jones buttered the toast*.`,
    },
    {
      title: "Participants and Causation",
      body: `## Who does what

As we saw in SYN 101, the participants in a situation bear **thematic roles**: agent, patient, theme, experiencer, and others. Semantics studies how verbs assign these roles and how they are linked to grammatical positions.

## Causation

Many verbs describe **causation**: one participant causes a change in another. English has several ways to express causation:

- **Lexical causatives**: single verbs whose meaning includes causation: *kill* (cause to die), *break* (cause to break), *raise* (cause to rise), *feed* (cause to eat).
- **Periphrastic causatives**: constructions with a separate causative verb: *cause to die*, *make someone laugh*, *have someone fix the car*, *let someone go*.
- **Morphological causatives**, in many languages: Turkish *öl-* "die," *öl-dür-* "kill," as we saw in SYN 101; Japanese *tabe-* "eat," *tabe-sase-* "make eat."

## Kill and cause to die

Does *kill* mean the same as *cause to die*? In 1970, the philosopher and psychologist **Jerry Fodor** argued that it does not. Consider:

- *John caused Bill to die on Sunday by stabbing him on Saturday.* (possible)
- \\#*John killed Bill on Sunday by stabbing him on Saturday.* (odd)

*Kill* seems to require that the causing and the dying form a single, **direct** event, while *cause to die* allows an indirect connection separated in time. Similar contrasts hold for other pairs: *John stopped the car* suggests direct action, while *John caused the car to stop* suggests something indirect (perhaps he cut the brake line). This distinction between **direct** and **indirect** causation is found across languages: lexical and morphological causatives typically express direct causation, and periphrastic causatives indirect causation, a pattern noted by **John Haiman** and others as an example of **iconicity**: the closer the forms, the closer the connection in meaning.

## Event structure

Linguists such as **Beth Levin** and **Malka Rappaport Hovav**, whom we met in SYN 101, have analyzed verb meanings in terms of **event structure**: templates such as

- [x ACT] for activities (*run*);
- [y BECOME STATE] for changes of state (*break*, intransitive);
- [[x ACT] CAUSE [y BECOME STATE]] for causatives (*break*, transitive).

These templates help explain which verbs participate in alternations like the causative–inchoative alternation, which we studied in SYN 101, and how verbs map their arguments onto syntax.

## Agency and responsibility

The linguistic expression of causation interacts with social judgments of **responsibility**. Studies by **Caitlin Fausey** and **Lera Boroditsky** found in 2010 that English speakers who read an agentive description of an incident (in which a person did something to an object) assigned more blame and higher fines than those who read a non-agentive description of the same incident (in which the object simply underwent the change). Fausey and Boroditsky also found differences between English and Spanish speakers in remembering who caused accidental events, which they connected to differences in how the languages describe such events. Such findings show how the grammar of causation can affect judgments in law and daily life.

## Causation across languages

Languages differ in how readily they describe events as caused by agents. In Spanish and Japanese, accidental events are often described without an agent (Spanish *Se me rompió el vaso*, literally "The glass broke itself on me," "I broke the glass accidentally"), while English typically uses an agentive construction (*I broke the glass*). These differences may reflect different conventions for attributing responsibility.

> **Pause and consider.** Compare *John stopped the car* and *John caused the car to stop*. What different scenarios do they suggest?`,
    },
    {
      title: "Motion Events",
      body: `## The components of motion

How do languages describe **motion**? The American linguist **Leonard Talmy**, in a series of studies culminating in *Toward a Cognitive Semantics* (2000), analyzed motion events into components:

- the **Figure**: the object that moves (*the bottle*);
- the **Ground**: the reference object (*the cave*);
- the **Path**: the trajectory of motion (*into*, *out of*, *across*);
- the **Manner**: how the motion occurs (*floating*, *running*, *rolling*);
- the **Motion** itself.

## Two types of language

Talmy observed that languages tend to package these components differently:

- In **satellite-framed** languages, such as English, German, Russian, and Chinese, the **manner** is typically expressed in the verb, and the **path** in a separate element, a "satellite" such as a particle or prepositional phrase: *The bottle **floated into** the cave*; *She **ran out** of the house*; *He **limped across** the street*.
- In **verb-framed** languages, such as Spanish, French, Italian, Japanese, Turkish, and Hebrew, the **path** is typically expressed in the verb, and the manner, if expressed at all, in a separate element such as a gerund: Spanish *La botella **entró** a la cueva **flotando*** "The bottle entered the cave floating"; *Salió de la casa corriendo* "She exited the house running."

## The frog stories

To study how speakers of different languages describe motion in narrative, **Ruth Berman** and **Dan Slobin**, in *Relating Events in Narrative* (1994), asked children and adults speaking many languages to tell the story of a wordless picture book, *Frog, Where Are You?* by **Mercer Mayer** (1969), in which a boy and his dog search for a lost frog. The "frog stories" revealed systematic differences:

- English speakers used a rich variety of manner verbs (*fly*, *scurry*, *tumble*, *climb*) and described complex paths in single clauses (*The deer threw him off over a cliff into the water*);
- Spanish speakers used fewer manner verbs, more path verbs (*entrar*, *salir*, *subir*, *bajar*), and often described the static scene rather than the trajectory.

Slobin connected these findings to his idea of **thinking for speaking**, which we met in Lesson I: speakers of different languages attend to different aspects of motion events when preparing to speak.

## Translation

These differences create challenges for **translation**. Translators from English into Spanish often omit manner information, or add it in separate clauses; translators from Spanish into English often add manner verbs. Slobin found that English translations of Spanish novels contained more manner information than the originals, and Spanish translations of English novels less.

## Does it affect thought?

Do these differences affect how speakers perceive or remember motion? Experiments have produced mixed results. Some studies found that speakers of satellite-framed languages pay more attention to manner in memory tasks; others found no difference in nonverbal tasks, with differences appearing only when speakers used language. As with other questions of linguistic relativity, the effects seem to depend on the task.

## Beyond the dichotomy

Later research has shown that the two-way typology is a simplification. Some languages, such as Mandarin and many languages of Africa and Southeast Asia, use **serial verbs** to express manner and path with equal weight (*fēi chū lái* "fly exit come"), and have been called **equipollently framed**. Languages also vary within themselves: English has path verbs (*enter*, *exit*, *ascend*, borrowed from Latin and French) and Spanish has some manner-plus-path constructions.

> **Pause and consider.** How would you say *The cat ran up the stairs* in a language you know other than English? Where is the manner, and where the path?`,
    },
    {
      title: "Mood and Evidentiality",
      body: `## Speaker's attitude

Languages also mark the speaker's **attitude** toward a proposition: whether it is asserted as fact, wished for, doubted, or reported. We met **modality** in Lesson III. Two related categories are **mood** and **evidentiality**.

## Mood

**Mood** is the grammatical marking of a clause's relation to reality, typically distinguishing:

- the **indicative**, for statements presented as true;
- the **subjunctive**, for situations that are hypothetical, desired, doubted, or required;
- the **imperative**, for commands.

In **Spanish**, the subjunctive is required after verbs of wanting, doubting, and emotion: *Quiero que **vengas*** "I want that you come (subjunctive)"; *Dudo que **sea** verdad* "I doubt that it is (subjunctive) true." As we saw in HIL 110, the English subjunctive survives mainly in fixed expressions and formal style (*I insist that he **be** present*).

The distinction between **realis** (events presented as actual) and **irrealis** (events presented as non-actual: hypothetical, future, desired) is central in many languages, especially in Papua New Guinea and the Americas, where verbs are often marked for one or the other.

## Evidentiality

**Evidentiality**, as we saw in Lesson I and SYN 101, is the grammatical marking of the **source** of the speaker's information. In her comprehensive study *Evidentiality* (2004), **Alexandra Aikhenvald** found that about a quarter of the world's languages have grammatical evidentials.

Systems vary in complexity:

- **Turkish** has a two-way system: the suffix *-dI* for direct knowledge, and *-mIş* for inferred or reported information: *Ahmet gel**di*** "Ahmet came (I saw it)" versus *Ahmet gel**miş*** "Ahmet came (apparently, I heard or inferred)."
- **Quechua** has suffixes for direct evidence (*-mi*), reported information (*-si*), and conjecture (*-chá*).
- **Tuyuca**, a language of the Colombian and Brazilian Amazon described by **Janet Barnes** in 1984, has five evidential categories: visual, non-visual sensory (heard, smelled), apparent (inferred from evidence), secondhand (reported), and assumed (inferred from general knowledge).

## Evidentials and truth

How do evidentials relate to truth? If a Turkish speaker says *Ahmet gelmiş* "Ahmet came (reportedly)" and Ahmet did not come, did the speaker say something false? Some semanticists treat evidentials as part of the asserted content; others, such as **Martina Faller** in work on Quechua, treat them as conveying a separate, non-asserted dimension of meaning, similar to the expressives we met in Lesson III.

## Evidentials and culture

In societies with grammatical evidentials, failing to use the right evidential may be seen as lying or irresponsible. Aikhenvald reports that speakers of languages with evidentials often find English speakers' failure to indicate the source of their information puzzling. Some researchers have explored whether speakers of evidential languages are more attentive to sources of information, but results are mixed.

## English evidentials

English has no grammatical evidentials, but expresses similar meanings with words and constructions: *apparently*, *reportedly*, *I hear that*, *it seems*, *must* (epistemic), and *they say*. Journalists, scientists, and lawyers use such expressions carefully to indicate the reliability and source of their information.

> **Pause and consider.** How would you indicate in English that you did not see something yourself but only heard about it? How many ways can you find?`,
    },
    {
      title: "Negation",
      body: `## Saying what is not

All languages have ways of expressing **negation**, of saying that something is not the case. Negation seems simple, but it raises many semantic and pragmatic questions, explored in **Laurence Horn**'s *A Natural History of Negation* (1989).

## Sentential and constituent negation

Linguists distinguish:

- **sentential** negation, which negates a whole proposition: *John did **not** leave*;
- **constituent** negation, which negates part of a sentence: *John left **not** long ago*; *an **un**happy child*.

## Scope

As we saw in SYN 101 and Lesson III, negation interacts with **quantifiers** and other operators in scope:

- *All the students didn't pass* can mean "None of the students passed" or "Not all the students passed."
- *I didn't go because I was tired* can mean "I didn't go, and the reason was that I was tired" or "My going was not because I was tired (but for another reason)."

## Contrary and contradictory negation

Negating a gradable adjective often has a stronger meaning than strict logic would predict. *I don't like him* often conveys "I dislike him," not just the absence of liking; *He's not happy* often conveys "He's unhappy." Horn analyzed this **neg-raising** and strengthening as pragmatic effects.

## Litotes

Conversely, the negation of a negative, *not unkind*, *not unhappy*, *not bad*, often conveys something weaker than the positive: *She's not unkind* is weaker than *She's kind*. This figure of speech, called **litotes**, uses double negation to understate. As Horn observed, *not unhappy* is not simply equivalent to *happy*; it describes a state in the middle ground, or conveys a guarded judgment.

## Negative concord revisited

As we saw in HIL 101 and SYN 101, many languages and dialects use **negative concord**, in which several negative words express a single negation: Spanish *No vi nada* "I didn't see nothing," meaning "I didn't see anything." Standard English instead uses negative polarity items: *I didn't see anything*. Semanticists debate whether negative concord words are themselves negative, with the multiple negatives "absorbed" into one, or are polarity items that agree with a single negation.

## Negation and markedness

Negative sentences are generally **marked** relative to affirmatives: they are more complex in form (requiring an extra word or affix), take longer to process, and are learned later by children. Psycholinguists have found that people take longer to verify negative sentences (*The star is not above the plus*) than affirmative ones, as **Herbert Clark** and **William Chase** showed in 1972. Negative sentences are typically used to deny an expectation: one says *My car is not red* when the hearer might have thought it was.

## Negation in religion and thought

Negation has a special place in philosophy and theology. The **via negativa** of mystical theology, associated with Pseudo-Dionysius and others, describes God by saying what God is not, since God transcends all positive concepts. The Ten Commandments are mostly expressed as negatives: "Thou shalt not kill. Thou shalt not commit adultery. Thou shalt not steal" (Exodus 20:13–15), reflecting the use of negation to set boundaries.

> **Pause and consider.** What is the difference in meaning between *She's not unkind* and *She's kind*?`,
    },
    {
      title: "Generic and Habitual Sentences",
      body: `## Sentences about kinds

Some sentences describe not particular events but general patterns:

- ***Dogs bark.***
- ***The tiger is a dangerous animal.***
- ***A lion has a mane.***
- ***John smokes.***

The first three are **generic** sentences, describing kinds; the last is a **habitual** sentence, describing a regular pattern in an individual's behavior. Neither describes a particular event: *John smokes* can be true even if John is not smoking now, and *Dogs bark* is true even though some dogs never bark.

## The puzzle of generics

What makes a generic sentence true? It cannot simply mean "all": *Dogs bark* is true even though some dogs (basenjis, for instance) do not bark. It cannot mean "most": *Ducks lay eggs* is true, though only adult female ducks lay eggs, fewer than half of all ducks. And *Mosquitoes carry malaria* is true, though only a small percentage of mosquitoes do. Yet *Ducks are female* is false, though more ducks are female than lay eggs.

These puzzles were surveyed by **Gregory Carlson**, **Francis Jeffry Pelletier**, and colleagues in *The Generic Book* (1995). Many semanticists have proposed that generic sentences contain a silent **generic operator**, similar to *usually* or *typically*, whose meaning depends on normality, laws, or dispositions rather than simple percentages.

## Striking properties

The philosopher **Sarah-Jane Leslie** proposed in 2008 that generics reflect a primitive, default way of generalizing. Generics are accepted when a property is **characteristic** of a kind (*Ducks lay eggs*: laying eggs is how ducks reproduce) or **striking** and dangerous, even if rare (*Mosquitoes carry malaria*; *Sharks attack swimmers*). This helps explain why generics about dangerous properties are readily accepted even with low prevalence.

## Generics and stereotypes

Because generics express generalizations about kinds, they can also convey **stereotypes**. Psychologists such as **Susan Gelman** have found that children hearing generic statements about a group (*Zarpies are scared of ladybugs*) come to regard the group as a natural kind with shared essential properties, more than children hearing specific statements (*This Zarpie is scared of ladybugs*). Such findings suggest that generic language may contribute to essentialist thinking about social groups.

## Habituals

**Habitual** sentences describe regular patterns: *John smokes*, *She walks to work*, *The sun rises in the east*. English expresses habituality with the simple present, with *used to* for the past (*I used to smoke*), and with *would* in narrative (*Every summer we would go to the lake*). Many languages have dedicated habitual markers. As we will see in SOC 110, **African American English** has a habitual *be*: *She be working* means "She is usually working," distinct from *She working* "She is working now," a distinction standard English lacks.

## Kinds as individuals

Some sentences refer directly to **kinds**: *Dinosaurs are extinct*; *The dodo is extinct*; *Potatoes were introduced to Europe in the sixteenth century*. Being extinct or being introduced cannot be a property of individual dinosaurs or potatoes, but only of the kind. Carlson, in his dissertation of 1977, proposed that bare plurals like *dinosaurs* can name kinds directly, an analysis that has been very influential.

> **Pause and consider.** Why is *Ducks lay eggs* true while *Ducks are female* is false, though more ducks are female than lay eggs?`,
    },
    {
      title: "Possession and Existence",
      body: `## Have and be

English expresses **possession** with the verb *have*: *I have a book*. But many languages have no verb like *have*, and express possession with other constructions. The study of these constructions shows how a basic meaning can be expressed in very different ways.

## Possession as location

In many languages, possession is expressed as **location**:

- **Russian**: *U menja est' kniga*, literally "At me is book," "I have a book."
- **Finnish**: *Minulla on kirja*, literally "At-me is book."
- **Irish**: *Tá leabhar agam*, literally "Is book at-me."

## Possession as existence with a beneficiary

In others, possession is expressed with a dative or a "for" construction:

- **Latin** had both *habeō librum* "I have a book" and *Mihi est liber*, literally "To me is a book."
- **Hungarian**: *Nekem van könyvem*, roughly "To-me is my-book."

## Possession as accompaniment or topic

Others use constructions meaning "with" (as in many African languages, "I am with a book") or a topic construction ("As for me, a book exists").

## Heine's sources

In *Possession* (1997), the German linguist **Bernd Heine**, whom we met in HIL 101, identified a small number of **event schemas** from which possessive constructions develop across languages: action ("X takes Y"), location ("Y is at X"), companion ("X is with Y"), goal ("Y exists for X"), genitive ("X's Y exists"), and topic ("As for X, Y exists"). English *have* comes from an action schema: it is related to Latin *capere* "take," as we saw in HIL 101. The diversity of possessive constructions thus reflects a few recurring conceptual sources.

## Existence

Possession is closely related to **existence** and **location**. Compare:

- *There is a book on the table.* (existential)
- *The book is on the table.* (locative)
- *I have a book.* (possessive)

In many languages, the same verb or construction is used for all three. The linguist **John Lyons** proposed in the 1960s a **localist** hypothesis: that existential and possessive constructions derive from locative ones, reflecting the importance of spatial concepts in grammar, as we saw with Jackendoff's conceptual semantics in Lesson I.

## Alienable and inalienable

Many languages distinguish **alienable** possession (things that can be transferred, like *my book*) from **inalienable** possession (things inherently connected to the possessor, like body parts and kin: *my hand*, *my mother*). In many languages of the Pacific, the Americas, and elsewhere, the two kinds use different possessive constructions. In Hawaiian, for example, possessive markers distinguish *o*-class possession (including body parts, relatives, and things one cannot control) from *a*-class possession (things one acquires or controls), as we met briefly in PHO 101 with *koʻu* and *kou*. Even in English, there are traces of the distinction: *She hit him on **the** head* (not *on his head*) uses a definite article for an inalienable body part.

## What possession shows

The study of possession shows how languages build abstract meanings from concrete ones, and how a single semantic domain can be expressed through location, action, accompaniment, or existence. It also illustrates Heine's argument that grammatical constructions are shaped by recurring patterns of human conceptualization.

> **Pause and consider.** Russian says "At me is a book." What does this suggest about how possession can be conceptualized?`,
    },
    {
      title: "Time as Space",
      body: `## Spatial metaphors for time

In many languages, time is talked about in terms of **space**. English speakers say that the future is **ahead** and the past **behind**; that a meeting has been **moved forward**; that we are **approaching** the deadline; that summer is **coming**. As we saw in HIL 101, words like *before* and *after* originally referred to space.

## Two perspectives

English uses two different spatial perspectives on time:

- In the **ego-moving** perspective, the observer moves through time toward the future: *We are approaching Christmas*; *We have left the old year behind*.
- In the **time-moving** perspective, times move toward the observer: *Christmas is approaching*; *The days are flying by*.

These perspectives produce an ambiguity. If you are told *Next Wednesday's meeting has been moved forward two days*, is the meeting now on Monday or on Friday? In a study published in 2000, **Lera Boroditsky** found that English speakers were split, roughly half answering Monday and half Friday, and that their answer could be influenced by priming them to think about spatial motion: people who had just imagined themselves moving through space were more likely to answer Friday (taking the ego-moving perspective).

## Aymara: the future behind

In **Aymara**, spoken in the Andes of Bolivia, Peru, and Chile, the spatial metaphor is reversed. The word *nayra*, meaning "eye," "front," or "sight," is used for the **past**, and *qhipa*, "back" or "behind," for the **future**. In 2006, **Rafael Núñez** and **Eve Sweetser** analyzed the gestures of Aymara speakers and found that, when talking about the past, older speakers gestured **forward**, and when talking about the future, **backward**. The logic seems to be that the past is known, and so "seen" in front, while the future is unknown, and so behind, out of sight.

## Mandarin: up and down

**Mandarin Chinese** uses vertical as well as horizontal terms for time: *shàng* "up" for earlier events (*shàng ge yuè* "up month," last month) and *xià* "down" for later events (*xià ge yuè* "down month," next month). Boroditsky reported in 2001 that Mandarin speakers were faster to make temporal judgments after seeing vertical arrangements, but later attempts to replicate the finding produced mixed results, as we saw in LIN 110.

## Absolute time

In 2010, Boroditsky and **Alice Gaby** studied speakers of **Kuuk Thaayorre**, an Aboriginal language of northern Australia that uses absolute directions for space, like Guugu Yimithirr, which we met in Lesson II. Asked to arrange cards showing a temporal sequence (such as a man aging), English speakers arranged them from left to right; Kuuk Thaayorre speakers arranged them from **east to west**, whichever way they were facing, following the path of the sun.

## Writing direction

Spatial representations of time are also influenced by **writing direction**. Speakers of languages written from left to right, such as English, tend to place earlier events on the left; speakers of languages written from right to left, such as Hebrew and Arabic, tend to place them on the right, as studies by **Barbara Tversky** and others have shown.

## What this shows

These findings suggest that, while the use of space to think about time may be universal, the particular ways of mapping time onto space are shaped by language, culture, and writing. They show how abstract domains like time are understood through more concrete ones, a theme we develop with **conceptual metaphor** in Lesson V.

> **Pause and consider.** If *Next Wednesday's meeting has been moved forward two days*, when is it? Ask several people. Do they agree?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Vendler's classes

> *know French*; *run*; *run a mile*; *reach the summit*

**Questions**

1. Classify each and apply the progressive and *in/for an hour* tests.
2. What is telicity, and how can an object affect it?

## 2. Reichenbach's tenses

> *I saw John.* / *I have seen John.* / *I had seen John.*

**Questions**

1. Give the arrangement of S, R, and E for each.
2. Why can't the present perfect combine with *yesterday*?

## 3. Motion events

> English *The bottle floated into the cave*; Spanish *La botella entró a la cueva flotando*

**Questions**

1. Where are path and manner expressed in each?
2. What did the frog stories reveal?

## 4. Evidentiality

> Turkish *Ahmet geldi* / *Ahmet gelmiş*

**Questions**

1. What does each suffix indicate?
2. How would you convey the same distinction in English?

## Drawing the threads together

In a paragraph, explain how languages express the temporal and participant structure of events, and how they differ, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Semantics", author: "John I. Saeed", publisher: "Wiley-Blackwell", year: "4th ed., 2016", note: "Read chapters 5 and 6, on situations and on participants." },
    { kind: "book", title: "Aspect: An Introduction to the Study of Verbal Aspect and Related Problems", author: "Bernard Comrie", publisher: "Cambridge University Press", year: "1976", note: "Read chapter 1." },
    { kind: "book", title: "Toward a Cognitive Semantics, vol. 2: Typology and Process in Concept Structuring", author: "Leonard Talmy", publisher: "MIT Press", year: "2000", note: "Read the chapter on lexicalization patterns." },
  ],
  media: [
    { kind: "book", title: "Relating Events in Narrative: A Crosslinguistic Developmental Study", author: "Ruth A. Berman and Dan I. Slobin", publisher: "Lawrence Erlbaum", year: "1994", note: "Read the introduction and look at examples of frog stories in several languages." },
    { kind: "book", title: "Evidentiality", author: "Alexandra Y. Aikhenvald", publisher: "Oxford University Press", year: "2004", note: "Read chapter 1." },
  ],
  questions: [
    {
      prompt: "Which of Vendler's classes is run a mile?",
      choices: ["State", "Activity", "Accomplishment", "Achievement"],
      answer: 2,
      explanation: "A process with a natural endpoint.",
    },
    {
      prompt: "What is telicity?",
      choices: [
        "Being in the past",
        "Having a natural endpoint",
        "Being a state",
        "Having an agent",
      ],
      answer: 1,
      explanation: "From Greek télos, \"end.\"",
    },
    {
      prompt: "What is the imperfective paradox?",
      choices: [
        "Progressives are ungrammatical",
        "John was crossing the street does not entail John crossed the street",
        "Perfectives describe ongoing events",
        "Tense is optional",
      ],
      answer: 1,
      explanation: "Named by Dowty (1979).",
    },
    {
      prompt: "In Reichenbach's analysis, what distinguishes the present perfect from the simple past?",
      choices: [
        "The event time",
        "The reference time: present for the perfect, past for the simple past",
        "The speech time",
        "Nothing",
      ],
      answer: 1,
      explanation: "E before R = S for the present perfect.",
    },
    {
      prompt: "Which language is often described as lacking grammatical tense?",
      choices: ["English", "Mandarin Chinese", "Spanish", "German"],
      answer: 1,
      explanation: "Time is indicated by context, adverbs, and aspect.",
    },
    {
      prompt: "What did Davidson propose to explain adverb entailments?",
      choices: [
        "That adverbs are verbs",
        "That verbs have a hidden event argument, with modifiers as predicates of the event",
        "That adverbs have no meaning",
        "That sentences have no structure",
      ],
      answer: 1,
      explanation: "\"The Logical Form of Action Sentences\" (1967).",
    },
    {
      prompt: "Why did Fodor argue that kill does not mean cause to die?",
      choices: [
        "They are synonyms",
        "Kill requires direct causation in a single event, while cause to die allows indirect causation",
        "Kill is intransitive",
        "Die is transitive",
      ],
      answer: 1,
      explanation: "*John killed Bill on Sunday by stabbing him on Saturday is odd.",
    },
    {
      prompt: "In Talmy's typology, what kind of language is Spanish?",
      choices: ["Satellite-framed", "Verb-framed", "Equipollently framed", "Unframed"],
      answer: 1,
      explanation: "Path is expressed in the verb: entrar, salir.",
    },
    {
      prompt: "What does the Turkish suffix -mIş indicate?",
      choices: [
        "Direct observation",
        "Inferred or reported information",
        "Future tense",
        "Negation",
      ],
      answer: 1,
      explanation: "-dI indicates direct knowledge.",
    },
    {
      prompt: "How do Aymara speakers talk about the future?",
      choices: [
        "As in front",
        "As behind",
        "As above",
        "As below",
      ],
      answer: 1,
      explanation: "Núñez and Sweetser (2006).",
    },
  ],
  reflection:
    "Languages package events, times, and participants in different ways. In 500–800 words, describe how English expresses tense, aspect, and motion, compare it with another language discussed in this lesson, and reflect on whether these differences affect how speakers think about events.",
};
