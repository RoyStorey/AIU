import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "Infinitives and Indirect Statement",
  summary:
    "The six infinitives and their uses; indirect statement with the accusative and infinitive; how the tense of the infinitive works; reflexives, negatives, and the personal passive with dīcitur; and readings from Caesar on Orgetorix, Catullus's poem on a lover's promises, and Cicero's first speech against Catiline.",
  pages: [
    {
      title: "The Infinitives",
      body: `## A verbal noun

An **infinitive** is a verbal noun: "to praise," "to have praised," "to be about to praise." In LAT 101 and the first two lessons of this course you have met the **present active** infinitive (*laudāre*, "to praise") and the **present passive** infinitive (*laudārī*, "to be praised"). Latin has six infinitives in all, three active and three passive, one for each of the three relative times: present, perfect, and future.

## The six infinitives of laudō

| | Active | Passive |
|---|---|---|
| Present | *laudāre*, to praise | *laudārī*, to be praised |
| Perfect | *laudāvisse*, to have praised | *laudātus (-a, -um) esse*, to have been praised |
| Future | *laudātūrus (-a, -um) esse*, to be about to praise | *laudātum īrī*, to be about to be praised |

## How they are formed

- **Present active**: the second principal part: *laudāre*, *monēre*, *dūcere*, *audīre*.
- **Present passive**: change final *-e* to *-ī*, or, in the third conjugation, *-ere* to *-ī*: *laudārī*, *monērī*, *dūcī*, *audīrī*.
- **Perfect active**: the **perfect stem** (third principal part minus *-ī*) plus ***-isse***: *laudāv-isse*, *monu-isse*, *dūx-isse*, *audīv-isse*. The perfect active infinitive of *sum* is *fuisse*.
- **Perfect passive**: the **perfect passive participle** plus ***esse***: *laudātus esse*, *ductus esse*.
- **Future active**: the **future active participle** plus ***esse***: *laudātūrus esse*, *ductūrus esse*. The future infinitive of *sum* is *futūrus esse*, often shortened to ***fore***.
- **Future passive**: the **supine** (the fourth principal part in *-um*) plus ***īrī***, the present passive infinitive of *eō*: *laudātum īrī*. This form is rare, and you need only recognize it.

The participles in the compound infinitives (*laudātus esse*, *laudātūrus esse*) agree with the noun they refer to, as you will see when we come to indirect statement. *Esse* is often omitted, especially with the future active: *Dīxit sē ventūrum*, "He said that he would come."

## The infinitives of deponents

Deponent verbs, as always, have passive forms with active meanings. Their **present** and **perfect** infinitives are passive in form; their **future** infinitive is active in form, because the future active participle is active:

| | *sequor* | *loquor* |
|---|---|---|
| Present | *sequī*, to follow | *loquī*, to speak |
| Perfect | *secūtus esse*, to have followed | *locūtus esse*, to have spoken |
| Future | *secūtūrus esse*, to be about to follow | *locūtūrus esse*, to be about to speak |

## Three uses of the infinitive

**1. The complementary infinitive.** As you know, verbs like *possum*, *dēbeō*, *volō*, *nōlō*, *mālō*, *cōnor*, *audeō*, and *soleō* take an infinitive to complete their meaning:

> *Vincere potes.* "You can win."
> *Hoc facere cōnātī sunt.* "They tried to do this."

**2. The infinitive as subject.** An infinitive can be the subject of a verb, especially of *est* with an adjective or noun, or of impersonal verbs like *placet*, "it pleases," *licet*, "it is permitted," and *oportet*, "it is right," "one ought." The infinitive is treated as a neuter noun, so any adjective with it is neuter:

> *Errāre est hūmānum.* "To err is human."
> *Dulce et decōrum est prō patriā morī.* "It is sweet and fitting to die for one's country." (Horace, *Odes* 3.2.13)
> *Mihi placet tēcum loquī.* "It pleases me to talk with you."

**3. The infinitive as object, in indirect statement.** This is the most important use, and the subject of the rest of this lesson. After verbs of saying, thinking, knowing, and perceiving, Latin reports what was said or thought with an **infinitive** whose subject is in the **accusative**:

> *Dīcit Caesarem venīre.* "He says that Caesar is coming."

## Dulce et decōrum est

Horace's line, *Dulce et decōrum est prō patriā morī*, from the second of the six "Roman Odes" that open book 3, became one of the most quoted lines of Latin in the nineteenth and early twentieth centuries, inscribed on war memorials and taught to schoolboys across Europe. During the First World War, the English poet **Wilfred Owen**, who was killed in action in November 1918, a week before the Armistice, wrote a poem called "Dulce et Decorum Est," describing the death of a soldier in a gas attack, and ending by calling Horace's sentence "the old Lie." The two poems, two thousand years apart, stand on opposite sides of a question every generation must answer.

*Morī*, the present infinitive of the deponent *morior*, is the subject of *est*; *dulce* and *decōrum* are neuter adjectives agreeing with it. The grammar is simple. What it claims is not.

## Recognizing infinitives

Learn to spot each infinitive by its ending:

| Ending | Infinitive |
|---|---|
| *-āre, -ēre, -ere, -īre* | present active |
| *-ārī, -ērī, -ī, -īrī* | present passive (or deponent) |
| *-isse* | perfect active |
| participle in *-tus* + *esse* | perfect passive (or deponent) |
| participle in *-tūrus* + *esse* (or alone), *fore* | future active |
| supine in *-tum* + *īrī* | future passive |

The *-isse* of the perfect active is especially distinctive and easy to recognize: *fuisse*, *vīdisse*, *dīxisse*, *vīcisse*. Whenever you see it, you know you are reading a completed action, usually reported in indirect statement.

## The historical infinitive

One more use deserves mention, because you will meet it in Sallust, Livy, and Tacitus. In lively narrative, a historian may use a **present infinitive** in place of an imperfect or perfect indicative, with its subject in the **nominative**: *Hostēs fugere, nostrī sequī*, "The enemy fled, our men pursued." This **historical infinitive** strips the narrative down to bare actions, and gives an impression of speed and confusion. When an infinitive seems to have no head verb and a nominative subject, consider this use.

> **Pause and consider.** Horace wrote that it is "sweet and fitting to die for one's country"; Wilfred Owen called this "the old Lie." Why do you think a single Latin sentence provoked such a response two thousand years after it was written?`,
    },
    {
      title: "Indirect Statement",
      body: `## Direct and indirect

When we report what someone says or thinks, we can do it in two ways:

- **Direct statement** quotes the actual words: Caesar said, "The enemy is fleeing."
- **Indirect statement** reports the content without quoting: Caesar said **that** the enemy was fleeing.

English forms indirect statement with a clause introduced by "that," whose verb is a finite verb, with a subject in the nominative. Latin does it entirely differently. It uses no word for "that." Instead, it puts the subject of the reported statement in the **accusative** and the verb in the **infinitive**:

> Direct: *Hostēs fugiunt.* "The enemy is fleeing."
> Indirect: *Caesar dīxit hostēs fugere.* "Caesar said that the enemy was fleeing."

Literally, the Latin is "Caesar said the enemy to be fleeing." English preserves a trace of this construction in sentences like "I believe him to be honest" or "They declared her to be the winner," but it uses it far less than Latin, which uses it for every reported statement.

## The verbs of the head clause

Indirect statement follows verbs and expressions of **saying, thinking, knowing, perceiving, and feeling**. The verb that introduces it is called the **head verb**. The most common are:

| Category | Verbs |
|---|---|
| Saying | *dīcō*, say; *nūntiō*, announce; *negō*, deny, say … not; *respondeō*, answer; *scrībō*, write; *trādō*, hand down, relate; *prōmittō*, promise; *ferō*, report |
| Thinking | *putō*, think; *arbitror*, think; *crēdō*, believe; *exīstimō*, judge; *spērō*, hope |
| Knowing | *sciō*, know; *nesciō*, not know; *intellegō*, understand; *cognōscō*, learn |
| Perceiving | *videō*, see; *audiō*, hear; *sentiō*, feel, perceive |

When you meet one of these verbs, expect an accusative and an infinitive to follow, or to precede, since Latin word order is flexible.

## How to translate

To translate an indirect statement into English:

1. Find the **head verb** (*dīcit*, *putābat*, *scīvit*).
2. Insert the word "**that**."
3. Translate the **accusative** as the **subject** of the "that" clause.
4. Translate the **infinitive** as a **finite verb**, with the tense adjusted to the head verb (see the next page).

> *Putō tē esse sapientem.* "I think (that) you are wise."
> *Scīmus Rōmam esse in Italiā.* "We know that Rome is in Italy."
> *Audīvī Cicerōnem in senātū loquī.* "I heard that Cicero was speaking in the senate."
> *Nūntius dīcit hostēs appropinquāre.* "The messenger says that the enemy are approaching."

## Agreement

When the infinitive is a compound form (*ductus esse*, *ductūrus esse*), or the indirect statement contains an adjective or noun describing the subject, these words agree with the **accusative subject**:

> *Dīcit urbem captam esse.* "He says that the city has been captured." (*captam*, feminine accusative singular, agrees with *urbem*.)
> *Putāmus eōs fortēs esse.* "We think that they are brave." (*fortēs*, accusative plural, agrees with *eōs*.)
> *Spērō mē ventūrum esse.* "I hope that I will come." (*ventūrum* agrees with *mē*.)

## Indirect statement and the indirect question

Do not confuse indirect statement with **indirect question**, which reports a question, not a statement, and which uses the subjunctive (lesson 4):

> Indirect statement: *Scit Caesarem vēnisse.* "He knows that Caesar has come."
> Indirect question: *Scit cūr Caesar vēnerit.* "He knows why Caesar has come."

The presence of a question word (*cūr*, *quis*, *ubi*, *quandō*, *num*) tells you that it is an indirect question.

## Why it matters

Indirect statement is everywhere in Latin prose. Historians use it to report speeches, rumors, beliefs, and the plans of their characters; orators use it to say what their opponents claim; philosophers use it to state propositions; letter writers use it to report the news. Some Latin authors, especially historians like Caesar and Livy, report whole speeches in indirect statement, a style called ***ōrātiō oblīqua***, "slanting speech," in contrast to ***ōrātiō rēcta***, "straight speech," which quotes the speaker's own words. A chapter of Caesar may contain a dozen indirect statements, with only one head verb at the start.

When you have mastered indirect statement, you have mastered the single most important construction for reading Latin prose.

## A Roman legend

The historian **Livy** (59 BCE–17 CE) begins his account of Rome's foundation with a famous indirect statement, reporting the tradition that Aeneas came to Italy after the fall of Troy. A simplified version might read:

> *Trāditur Aenēam, Trōiā captā, in Italiam vēnisse.* "It is handed down that Aeneas, after Troy had been captured, came to Italy."

Notice the impersonal passive *trāditur*, "it is handed down," "tradition says," which Livy and other historians use to distance themselves from stories they cannot vouch for; the accusative *Aenēam*; the ablative absolute *Trōiā captā*; and the perfect infinitive *vēnisse*, "to have come." In four words of grammar, the historian has told the story and declined responsibility for it. Livy himself, in his preface, says frankly that he will neither affirm nor refute the traditions about the time before the city was founded, which are "more fitting for poets' tales than for the uncorrupted records of history."

## Practice

> 1. *Dīcunt Caesarem esse fortem.* 2. *Putābāmus vōs esse amīcōs.* 3. *Sciō hoc vērum esse.* 4. *Audiō rēgem adesse.* 5. *Crēdimus deōs esse.* 6. *Nūntiāvit hostēs fugere.*

## Spotting the head verb

The head verb is not always next to its indirect statement. It may come at the end of a long sentence, or be implied by a noun like *nūntius*, "message," *fāma*, "rumor," or *spēs*, "hope": *Fāma erat Caesarem advenīre*, "There was a rumor that Caesar was arriving." Whenever you find an accusative and an infinitive that do not fit the main clause, look for a word of saying, thinking, or feeling nearby, or for one implied by the sense.

> **Pause and consider.** Historians like Livy often use *trāditur*, "it is handed down," to report stories they cannot confirm. How does this construction let a writer tell a story without fully vouching for it?`,
    },
    {
      title: "The Tenses of the Infinitive",
      body: `## Relative time again

The tense of an infinitive in indirect statement is **relative to the head verb**, exactly as the tense of a participle is relative to the main verb:

- A **present** infinitive means the reported action happens at the **same time** as the head verb.
- A **perfect** infinitive means the reported action happened **before** the head verb.
- A **future** infinitive means the reported action will happen **after** the head verb.

This is simpler than English, where the tense of the "that" clause shifts according to the tense of the main verb, a rule called "sequence of tenses" or "backshifting." Latin keeps the same infinitive whatever the tense of the head verb; English changes its verb.

## With a present head verb

When the head verb is present, English uses the same tenses as Latin:

| Latin | English |
|---|---|
| *Dīcit eum venīre.* | He says that he **is coming**. (same time) |
| *Dīcit eum vēnisse.* | He says that he **came**, **has come**. (before) |
| *Dīcit eum ventūrum esse.* | He says that he **will come**. (after) |

## With a past head verb

When the head verb is past (perfect or imperfect), English shifts each tense one step back:

| Latin | English |
|---|---|
| *Dīxit eum venīre.* | He said that he **was coming**. (same time) |
| *Dīxit eum vēnisse.* | He said that he **had come**. (before) |
| *Dīxit eum ventūrum esse.* | He said that he **would come**. (after) |

Notice that the Latin infinitives are exactly the same in both tables. Only the English changes. When you translate, first identify the relative time of the infinitive, then choose the English tense that expresses it in relation to the head verb.

## With a future head verb

When the head verb is future, English uses present for same time, past or perfect for before, and future for after:

> *Dīcet eum venīre.* "He will say that he is coming."
> *Dīcet eum vēnisse.* "He will say that he came."
> *Dīcet eum ventūrum esse.* "He will say that he will come."

## The passive infinitives in indirect statement

The passive infinitives follow the same principle:

> *Dīcit urbem capī.* "He says that the city is being captured."
> *Dīcit urbem captam esse.* "He says that the city has been captured."
> *Dīxit urbem captam esse.* "He said that the city had been captured."
> *Dīxit urbem captum īrī.* "He said that the city would be captured." (rare: notice that *captum* does not agree, because it is a supine)

The future passive infinitive is so rare that Latin writers often avoid it with a periphrasis: *fore ut*, "it would happen that," with the subjunctive (lesson 4). You need only recognize it.

## A worked example

Consider this sentence: *Nūntius dīxit Gallōs, quī castra oppugnāverant, fūgisse, et Caesarem eōs secūtūrum esse.*

1. The head verb is *dīxit*, past: "The messenger said."
2. The first indirect statement has the accusative *Gallōs* and the perfect infinitive *fūgisse*: action before a past head verb, so "had fled." "The messenger said that the Gauls … had fled."
3. The relative clause *quī castra oppugnāverant* describes the Gauls: "who had attacked the camp." (In strict classical usage, a subordinate clause inside indirect statement takes the subjunctive, *oppugnāvissent*; you will learn this in lesson 4. Here the indicative is kept for simplicity.)
4. The second indirect statement has the accusative *Caesarem* and the future infinitive *secūtūrum esse*: action after a past head verb, so "would follow." The participle *secūtūrum* agrees with *Caesarem*.

**Translation**: "The messenger said that the Gauls who had attacked the camp had fled, and that Caesar would follow them."

## Verbs of hoping, promising, and threatening

Verbs that look to the future, such as ***spērō***, "hope," ***prōmittō***, "promise," ***polliceor***, "promise," and ***minor***, "threaten," normally take a **future** infinitive in indirect statement, with an expressed accusative subject even when it is the same as the subject of the head verb. English often uses a simple infinitive instead:

> *Spērō mē ventūrum esse.* "I hope to come," "I hope that I will come."
> *Prōmīsit sē auxilium lātūrum esse.* "He promised to bring help," "He promised that he would bring help."

Notice that the English "I hope to come" has no subject for "to come," but the Latin must have one: *mē*. This is a frequent source of errors in English-to-Latin composition.

## Fore

The future infinitive of *sum*, ***fore***, is used as an alternative to *futūrus esse*, and appears often in prophecies and predictions:

> *Dīxit Rōmam magnam fore.* "He said that Rome would be great."

## Practice

Translate each sentence, paying careful attention to the relative time of each infinitive:

> 1. *Scīmus Caesarem in Galliā pugnāre.* 2. *Scīvimus Caesarem in Galliā pugnāvisse.* 3. *Scīvimus Caesarem in Galliam itūrum esse.* 4. *Putābant urbem dēlētam esse.* 5. *Spērat sē victūrum esse.* 6. *Audīvī tē Rōmam redīsse.* (*redīsse* = *rediisse*)

## Common errors

The most frequent mistakes in translating indirect statement are three. First, students translate the accusative subject as an object: *Dīcit Caesarem venīre* becomes "He tells Caesar to come," which would be a different construction (an indirect command, lesson 4). Second, they translate the infinitive literally, "He says Caesar to be coming," without changing it to a finite verb. Third, they ignore the relative time of the infinitive, writing "He said that Caesar comes" for *Dīxit Caesarem venīre*. Check every indirect statement you translate against these three errors.

## Ambiguity

Sometimes a sentence with two accusatives and one infinitive is ambiguous. The oracle of Apollo, according to a story told by Cicero and Ennius, answered King Pyrrhus: *Aiō tē, Aeacidā, Rōmānōs vincere posse*, "I say that you, son of Aeacus, can conquer the Romans," or "I say that the Romans can conquer you." Pyrrhus chose the meaning he wanted, and was defeated.

> **Pause and consider.** Latin uses the same infinitive in "He says that he is coming" and "He said that he was coming," while English changes the verb. Which system seems more logical to you, and why?`,
    },
    {
      title: "Reflexives, Negatives, and the Personal Construction",
      body: `## The reflexive in indirect statement

In LAT 101 you learned that the reflexive pronoun ***sē*** (and the reflexive adjective ***suus, -a, -um***) refers to the subject of its own clause. In indirect statement, there is an important extension: ***sē*** and ***suus*** in an indirect statement usually refer to the **subject of the head verb**, the person who is speaking or thinking.

> *Caesar dīxit sē venīre.* "Caesar said that **he** (Caesar) was coming."
> *Caesar dīxit eum venīre.* "Caesar said that **he** (someone else) was coming."

This distinction, which English cannot make with "he," is very useful. When you see *sē* in an indirect statement, you know that the reported statement is about the speaker; when you see *eum*, *eam*, or another pronoun, you know it is about someone else.

> *Dīxērunt sē suōs līberōs amāre.* "They said that they loved their (own) children."
> *Puella putābat sē ā poētā amārī.* "The girl thought that she was loved by the poet."

## Saying "not": negō

In Latin, it is normal to say "He denies that …" rather than "He says that … not." The verb ***negō (1)***, "deny," "say … not," replaces *dīcō … nōn*:

> *Negat sē hoc fēcisse.* "He says that he did not do this," "He denies that he did this."
> *Negāvērunt hostēs adesse.* "They said that the enemy were not present."

Latin writers almost never write *dīcit … nōn*; when you translate *negō*, use "say … not" if "deny" sounds too strong.

## Impersonal and personal passive

Verbs of saying and thinking can be used in the passive. Two constructions are possible.

**1. The impersonal construction**, with the passive verb in the third person singular, and an accusative and infinitive:

> *Dīcitur Rōmulum urbem condidisse.* "It is said that Romulus founded the city."

**2. The personal construction**, preferred in classical Latin with the present tenses of verbs like *dīcō*, *putō*, *videō*, *crēdō*, and *trādō*. Here the person spoken about becomes the **nominative** subject of the passive head verb, and the verb of the reported statement stays in the infinitive:

> *Rōmulus dīcitur urbem condidisse.* "Romulus is said to have founded the city."
> *Hostēs dīcuntur fūgisse.* "The enemy are said to have fled."
> *Homērus caecus fuisse trāditur.* "Homer is said to have been blind."

English has the same two constructions ("It is said that Romulus founded the city" and "Romulus is said to have founded the city"), so translation is straightforward.

## Vidētur: seem

The passive of *videō*, ***videor***, "I am seen," very often means "**I seem**," and it regularly takes the personal construction with an infinitive:

> *Vidētur sapiēns esse.* "He seems to be wise."
> *Vidēminī fessī esse.* "You seem to be tired."

With a dative of the person to whom something seems good, ***vidētur*** means "it seems best," "it seems good," and is used in deliberation and decision: *Mihi vidētur*, "It seems good to me," "I think so"; *Sī vōbīs vidētur*, "If you think it right." This was the formula with which Roman magistrates and judges stated their decisions.

## Infinitives inside indirect statement

When the reported statement itself contains a verb that would be an infinitive in direct speech, the infinitive simply remains:

> Direct: *Possum vincere.* "I can win."
> Indirect: *Dīcit sē posse vincere.* "He says that he can win."

Notice that *possum* becomes *posse*, its present infinitive, and the complementary infinitive *vincere* remains unchanged.

## Subordinate clauses in indirect statement

When a direct statement contains a subordinate clause, such as a relative clause or a clause beginning with "because" or "when," the verb of that clause usually changes to the **subjunctive** in indirect statement:

> Direct: *Puer quī currit est meus fīlius.* "The boy who is running is my son."
> Indirect: *Dīcit puerum quī currat esse suum fīlium.* "He says that the boy who is running is his son."

You will learn the forms of the subjunctive in lesson 4. For now, be prepared to see unfamiliar verb forms in the subordinate clauses of indirect statement, and to translate them as if they were indicative.

## Common phrases

Several Latin phrases still in use contain indirect statements or related constructions:

- ***Cōgitō, ergō sum.*** "I think, therefore I am." (Descartes, 1644, in the Latin of his *Principia*; first stated in French in 1637: *je pense, donc je suis*.)
- ***Dīcitur*** and ***fertur***, "it is said," in scholarly writing for reported but unverified claims.
- ***Vidētur***, "it seems," in medieval philosophy: the scholastic *quaestiō* began with the arguments that seem to support the opposite of the author's view, each introduced by *Vidētur quod …*, "It seems that …"

Thomas Aquinas, in the *Summa Theologiae*, begins almost every article this way: *Vidētur quod Deus nōn sit*, "It seems that God does not exist," before giving his answer, introduced by *Respondeō dīcendum quod …*, "I answer that it must be said that …." The formula became the standard form of argument in the medieval university.

## Practice

> 1. *Mīles dīxit sē hostem vīdisse.* 2. *Mīles dīxit eum hostem vīdisse.* 3. *Negāvit sē Rōmam īre velle.* 4. *Caesar dīcitur in Britanniam trānsīsse.* 5. *Vidēris mihi fēlīx esse.* 6. *Spērāmus nōs victūrōs esse.*

## A note on sē and eum in English

English sometimes clarifies the difference with "himself": "Caesar said that he himself was coming." But this sounds emphatic, and translators usually prefer to repeat a name or rephrase: "Caesar said he was coming in person." When you translate, make sure the English leaves no doubt about who is meant, since the Latin leaves none.

> **Pause and consider.** Latin can say "Caesar said that **he** (himself) was coming" with *sē*, or "Caesar said that **he** (someone else) was coming" with *eum*. Why might a historian value this precision, especially in reporting what people said and believed?`,
    },
    {
      title: "Reading Caesar: The Ambition of Orgetorix",
      body: `## The Helvetii

The *Gallic War* begins with a migration. In 58 BCE, the **Helvetii**, a Celtic people living in what is now western Switzerland, decided to leave their homeland and move west into Gaul. Caesar, newly appointed governor of the Roman provinces of Cisalpine and Transalpine Gaul, saw the migration as a threat to Roman territory and allies, and used it as his reason for the first campaign of a war that would last eight years and bring all of Gaul under Roman rule.

Caesar explains the cause of the migration in the second chapter of book 1, where he introduces the ambitious nobleman who planned it. The passage is genuine Caesar, unadapted, and contains almost every construction you have learned in this course: an ablative absolute, a perfect passive participle, a deponent infinitive, an indirect statement, and a clause with the subjunctive.

## The text

> *Apud Helvētiōs longē nōbilissimus fuit et dītissimus Orgetorīx. Is M. Messālā et M. Pūpiō Pīsōne cōnsulibus rēgnī cupiditāte inductus coniūrātiōnem nōbilitātis fēcit et cīvitātī persuāsit ut dē fīnibus suīs cum omnibus cōpiīs exīrent: perfacile esse, cum virtūte omnibus praestārent, tōtīus Galliae imperiō potīrī.*

(Caesar, *Dē Bellō Gallicō* 1.2.1–2)

## Notes

**Sentence 1**

- *apud Helvētiōs*, "among the Helvetii";
- *longē nōbilissimus … et dītissimus*, "by far the most noble and the richest": superlatives of *nōbilis* and *dīves* (*dītissimus* is a contracted form of *dīvitissimus*);
- *fuit*, "was"; *Orgetorīx*, the subject, placed last for emphasis.

**Sentence 2**

- *is*, "he," Orgetorix;
- *M. Messālā et M. Pūpiō Pīsōne cōnsulibus*, an **ablative absolute** with nouns only: "Marcus Messala and Marcus Pupius Piso being consuls," that is, "in the consulship of Messala and Piso," the year 61 BCE;
- *rēgnī cupiditāte inductus*, "led on by desire for kingship": *inductus* is the **perfect passive participle** of *indūcō*, agreeing with *is*; *cupiditāte* is an ablative of means or cause; *rēgnī*, objective genitive, "for kingship";
- *coniūrātiōnem nōbilitātis fēcit*, "made a conspiracy of the nobility";
- *cīvitātī persuāsit*, "persuaded the state" (*persuādeō* takes the dative);
- *ut dē fīnibus suīs cum omnibus cōpiīs exīrent*, "to go out of their territory with all their forces": an **indirect command** with *ut* and the imperfect subjunctive (lesson 4) of *exeō*, the compound of *eō*; *suīs* refers to the Helvetii;
- *perfacile esse*, "(saying) that it was very easy": an **indirect statement** with no head verb expressed; the idea of saying is implied in *persuāsit*. This omission is typical of Caesar's *ōrātiō oblīqua*;
- *cum virtūte omnibus praestārent*, "since they surpassed all in courage": a *cum* clause with the subjunctive (lesson 4); *praestō* takes the dative (*omnibus*), and *virtūte* is an ablative of respect, "in courage";
- *tōtīus Galliae imperiō potīrī*, "to get possession of the rule of all Gaul": ***potīrī*** is the present infinitive of the deponent ***potior***, which takes the **ablative** (*imperiō*), as you learned in lesson 1; *tōtīus*, genitive of *tōtus*. The infinitive is the subject of *esse*: "to gain control … was very easy."

## Translation

"Among the Helvetii, by far the noblest and richest man was Orgetorix. In the consulship of Marcus Messala and Marcus Piso, led on by desire for kingship, he formed a conspiracy of the nobility and persuaded the state to leave their territory with all their forces: it would be very easy, he said, since they surpassed everyone in courage, to gain control of all Gaul."

## Reading the passage

**The portrait.** Caesar introduces Orgetorix in a single sentence of superlatives, and in the next sentence gives his motive: *rēgnī cupiditāte inductus*, "led on by desire for kingship." To a Roman reader, *rēgnum* was a word of horror. Rome had expelled its kings in 509 BCE, and to accuse a politician of aiming at kingship was the gravest of charges. Caesar's readers would have recognized Orgetorix at once as a dangerous man. They might also have noticed the irony: fourteen years later, Caesar himself would be assassinated by senators who accused him of exactly the same ambition.

**The indirect statement.** The final clause, *perfacile esse … potīrī*, reports Orgetorix's argument without quoting him, and without a verb of saying. Caesar lets us hear the persuasive claim, "It will be very easy," while keeping his distance from it. This is *ōrātiō oblīqua* at its most economical.

**The ablative absolute of date.** *M. Messālā et M. Pūpiō Pīsōne cōnsulibus* is the standard Roman way of dating an event. The Romans had no single numbered era in daily use; they named the year after its consuls. The convention of numbering years "from the founding of the city," *ab urbe conditā*, was used by historians but not in ordinary documents.

## Orgetorix's end

Caesar tells us, a few chapters later, that the plot was discovered, and Orgetorix was brought to trial in chains. If convicted, he would be burned to death. He gathered ten thousand of his dependents and escaped trial, but died soon after; the Helvetii, Caesar reports, "suspected that he had taken his own life" (*neque abest suspīciō … quīn ipse sibi mortem cōnscīverit*). The Helvetii continued with the migration anyway, and Caesar defeated them at the battle of Bibracte in 58 BCE. According to Caesar's own figures, of 368,000 who set out, 110,000 returned home. Modern historians treat his numbers with caution.

## The style of the commentaries

Notice how much of the passage is taken up with participles, ablatives, and subordinate clauses, and how few main verbs it has: *fuit*, *fēcit*, *persuāsit*. This is characteristic of Caesar's style, which packs the circumstances of an action around a small number of main verbs.

> **Pause and consider.** Caesar accuses Orgetorix of "desire for kingship," the gravest charge in Roman politics, and was himself killed fourteen years later on the same charge. How might this irony affect the way you read Caesar's portrait of his enemy?`,
    },
    {
      title: "Reading Catullus: A Lover's Promises",
      body: `## Catullus again

In LAT 101 you read Catullus 5, the poem of the thousand kisses, from the happy beginning of his love for Lesbia. Poem 70 belongs to a later and more troubled stage. It is only four lines long, an **elegiac couplet** pair: two lines of dactylic hexameter, each followed by a shorter line called a pentameter. It turns on an indirect statement, and its whole meaning depends on the difference between what is said and what is true.

## The text

> *Nūllī sē dīcit mulier mea nūbere mālle*
> *quam mihi, nōn sī sē Iuppiter ipse petat.*
> *Dīcit: sed mulier cupidō quod dīcit amantī,*
> *in ventō et rapidā scrībere oportet aquā.*

## Notes

**Line 1**: *nūllī*, dative of *nūllus*, "to no one"; *sē*, accusative subject of the infinitive, referring to the subject of *dīcit*, the woman herself; *dīcit*, "says"; *mulier mea*, "my woman," the subject of *dīcit*; *nūbere*, "to marry" (*nūbō*, *nūbere*, "marry," literally "veil oneself," used of a woman, takes the **dative** of the husband); *mālle*, present infinitive of ***mālō***, "prefer," the infinitive of the indirect statement.

So: "My woman says that she prefers to marry no one …"

**Line 2**: *quam mihi*, "than me" (dative, parallel to *nūllī*); *nōn sī*, "not (even) if"; *sē … petat*, "should seek her": *petat* is a present subjunctive (lesson 4), in a condition about the future: "not even if Jupiter himself should ask for her."

**Line 3**: *dīcit*, repeated: "She says (so)"; *sed*, "but"; *mulier … quod dīcit*, "what a woman says"; *cupidō … amantī*, "to an eager lover": ***amantī*** is the **present participle** of *amō* used as a noun, "one who loves," in the dative; *cupidō*, "eager, desiring," agreeing with it.

**Line 4**: *in ventō et rapidā … aquā*, "on the wind and on rushing water"; *scrībere*, "to write"; ***oportet***, "it is right," "one ought," an impersonal verb with the infinitive *scrībere* as its subject.

## Translation

"My woman says that she would rather marry no one than me, not even if Jupiter himself should ask for her. She says so: but what a woman says to an eager lover ought to be written on the wind and on running water."

## Reading the poem

**The repeated verb.** The poem hinges on the repetition of ***dīcit***, "she says." In line 1 it introduces an indirect statement, a claim of perfect fidelity: she would marry no one but me. In line 3 it stands alone, set off by a pause: *Dīcit*. "She *says* so." The second *dīcit* reduces the first to mere words. Everything that follows *sed*, "but," explains what such words are worth.

**The indirect statement as distance.** By reporting Lesbia's promise in indirect statement rather than quoting it, Catullus keeps it at a distance. We do not hear her voice; we hear him reporting what she says, already with doubt. The reflexive *sē*, referring back to the woman, keeps her at the center of the claim, while the poet stands outside it.

**Jupiter.** The hyperbole of line 2, "not even if Jupiter himself should ask for her," recalls the many mortal women Jupiter loved in myth. It is the kind of extravagant promise lovers make, and the poet does not believe it.

**Wind and water.** The final image is one of the most famous in Latin poetry. Words written on wind or water vanish as they are written. The idea of writing on water was proverbial in Greek; Catullus may be adapting a line of the Hellenistic poet **Callimachus**, who wrote of lovers' oaths that they do not enter the ears of the immortals. Catullus adds the wind, and the adjective *rapidā*, "rushing," "swift," which makes the water carry the words away.

## Two poems compared

Set poem 70 beside poem 5. In poem 5, Catullus himself speaks, in the first person plural, with subjunctives of exhortation: *vīvāmus*, *amēmus*, "let us live, let us love." In poem 70, Lesbia speaks only through his report, in indirect statement, and the verbs that matter are *dīcit* and *oportet*: "she says," "one ought." The movement from shared exhortation to reported speech and impersonal judgment traces the course of the affair. Grammar, here, is a kind of biography.

## Echoes

The image of words written on water has had a long life. **John Keats**, dying of tuberculosis in Rome in 1821, asked that his gravestone bear no name, only the words "Here lies One Whose Name was writ in Water." The phrase, with its sense of transience, may come by many paths from the proverb Catullus used. Keats's grave in the Protestant Cemetery in Rome bears the inscription to this day.

## Grammar in review

This four-line poem contains:

- an **indirect statement** with the accusative *sē* and the infinitive *mālle* after *dīcit*;
- the irregular verb ***mālō*** and its infinitive *mālle*;
- the **dative** with *nūbō*;
- a **present participle** used as a noun, *amantī*;
- the impersonal verb ***oportet*** with an infinitive as subject;
- a **future-less-vivid condition** with the subjunctive *petat* (lesson 5).

## The meter of the couplet

The elegiac couplet was the meter of Greek and Roman love poetry, of epitaphs, and of short witty epigrams. Its two lines have different lengths: the hexameter flows forward, and the shorter pentameter breaks into two halves and seems to pause and reflect. Catullus uses the shape well here: each pentameter turns back on its hexameter, first with the extravagant condition about Jupiter, then with the image of wind and water that cancels everything before it. You will learn to scan the couplet in LAT 210.

## Catullus's other poems on promises

Poem 70 is one of several short poems in which Catullus examines the difference between what Lesbia says and what she does. In poem 72 he writes that he once loved her "not as the common people love a girlfriend, but as a father loves his sons and sons-in-law," and that now he knows her, he burns more fiercely but values her less. In poem 85, which you read in LAT 101, he says simply *Ōdī et amō*.

> **Pause and consider.** Catullus reports Lesbia's promise in indirect statement and then repeats the single word *Dīcit*, "She says so." How does the grammar of the poem express his distrust?`,
    },
    {
      title: "Reading Cicero: The First Speech Against Catiline",
      body: `## The crisis of 63 BCE

In 63 BCE, **Marcus Tullius Cicero** (106–43 BCE) was consul, the first of his family to hold the office: a *novus homō*, a "new man," from the country town of Arpinum. **Lucius Sergius Catilina**, known in English as **Catiline**, an aristocrat burdened with debt who had been defeated in the consular elections, was organizing a conspiracy to seize power by force, with armed supporters gathering in Etruria and plans, Cicero said, to burn Rome and murder its leaders.

On November 8, 63 BCE, Cicero summoned the senate to the temple of Jupiter Stator, near the Forum. Catiline, astonishingly, attended. Cicero rose and delivered, without warning, the first of his four speeches **In Catilīnam**, "Against Catiline." Its opening is the most famous passage of Latin oratory.

## The text

> *Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā? Quam diū etiam furor iste tuus nōs ēlūdet? Quem ad fīnem sēsē effrēnāta iactābit audācia?*

And, a little later:

> *Ō tempora, ō mōrēs! Senātus haec intellegit, cōnsul videt; hic tamen vīvit. Vīvit? Immō vērō etiam in senātum venit, fit pūblicī cōnsiliī particeps, notat et dēsignat oculīs ad caedem ūnum quemque nostrum.*

(Cicero, *In Catilīnam* 1.1–2)

## Notes

**First passage**

- *quō ūsque*, "how far," "to what point"; *tandem*, "at last," in questions "pray," expressing impatience;
- ***abūtēre***, the **second person singular future** of the deponent ***abūtor***, "abuse," "use up" (a compound of *ūtor*), with the alternative ending *-re* for *-ris*: "will you abuse"; like *ūtor*, it takes the **ablative**: *patientiā nostrā*, "our patience";
- *quam diū*, "how long"; *etiam*, "still"; *furor iste tuus*, "that madness of yours": *iste*, the demonstrative of contempt;
- *ēlūdet*, future of *ēlūdō*, "mock," "make sport of";
- *quem ad fīnem*, "to what end," "how far";
- *sēsē … iactābit*, "will toss itself about," "will flaunt itself" (*sēsē* is an emphatic form of *sē*);
- *effrēnāta … audācia*, "unbridled recklessness": *effrēnāta* is a perfect passive participle, "unbridled," from *frēnum*, "bridle."

**Second passage**

- *ō tempora, ō mōrēs*, accusatives of exclamation: "O the times! O the customs!";
- *senātus haec intellegit, cōnsul videt*, "the senate understands these things, the consul sees them";
- *hic tamen vīvit*, "yet this man lives";
- *vīvit?*, "Lives?";
- *immō vērō*, "no, indeed," "more than that";
- *fit pūblicī cōnsiliī particeps*, "he becomes a participant in public deliberation": ***fit***, from ***fīō***, "becomes";
- *notat et dēsignat oculīs*, "he marks and designates with his eyes";
- *ad caedem*, "for slaughter";
- *ūnum quemque nostrum*, "each one of us."

## Translation

"How long, Catiline, will you go on abusing our patience? How much longer will that madness of yours make fools of us? To what limit will your unbridled recklessness flaunt itself? …

"O the times! O the customs! The senate understands these things, the consul sees them; and yet this man lives. Lives? More than that: he even comes into the senate, he becomes a participant in our public deliberation, he marks and designates with his eyes each one of us for slaughter."

## The orator's art

**Three questions.** The speech opens with three questions in a row, each longer than the last, each with a future verb (*abūtēre*, *ēlūdet*, *iactābit*). The three questions are a **tricolon crescens**, a series of three members growing in length, one of the favorite devices of Roman rhetoric. They are rhetorical questions, not meant to be answered: they accuse.

**The abrupt opening.** Roman orators were taught to begin a speech with a calm introduction, the *exōrdium*, designed to win the goodwill of the audience. Cicero breaks the rule. He begins with an attack, addressing Catiline directly by name in the second word of the sentence. Later rhetoricians admired the boldness of this kind of opening, which came to be called an *exōrdium ex abruptō*, a "sudden beginning," and Cicero's speech became its standard example.

**The exclamation.** *Ō tempora, ō mōrēs!* is two words repeated in a cry of indignation, and it became so famous that it was quoted in antiquity and has been ever since. It is the voice of a man appalled at his own age.

**The rhythm of short clauses.** *Senātus haec intellegit, cōnsul videt; hic tamen vīvit. Vīvit?* Each clause is short; the verb is repeated as a question; and then a long clause piles up four verbs in a row. Read the passage aloud and you will hear how it was meant to sound in the temple.

## What happened next

Catiline left Rome that night and joined his army. In December, Cicero obtained evidence against the conspirators remaining in the city, and after a famous debate in the senate, in which Julius Caesar argued for imprisonment and Cato for death, five of them were executed on December 5. Cicero announced their deaths, as you learned in LAT 101, with the single word *Vīxērunt*. Catiline was killed fighting at Pistoria in January 62 BCE. Cicero was hailed as *pater patriae*, "father of his country," but the executions of Roman citizens without trial would later be used against him, and he was exiled in 58 BCE.

## Cicero's prose in your mouth

Cicero's sentences were written to be heard. The best way to understand them is to memorize the opening of the speech and say it aloud, with the emphasis falling where the rhythm places it: *Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?* Generations of schoolchildren in Europe and America did exactly this, and the opening words, *Quō ūsque tandem*, became a byword for any protest against abuse of patience. Political cartoonists and speechmakers, from the eighteenth century to the present, have adapted the sentence by replacing Catiline's name with that of whatever politician they wished to attack.

> **Pause and consider.** Cicero breaks the rules of rhetoric by opening with a direct attack on Catiline, who was sitting in the senate. Why might this have been more effective than a calm introduction?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. The infinitives

Give all six infinitives of each verb, with meanings:

> *capiō, capere, cēpī, captum* — *mittō, mittere, mīsī, missum* — and the three infinitives of the deponent *hortor, hortārī, hortātus sum*

**Questions**

1. How is the perfect active infinitive formed?
2. Why is the future infinitive of *hortor* active in form?

## 2. Indirect statement

Translate each sentence, then turn it back into direct speech:

> 1. *Dīcit Caesarem venīre.* 2. *Dīxit Caesarem vēnisse.* 3. *Dīxit Caesarem ventūrum esse.* 4. *Putāvērunt urbem captam esse.* 5. *Negāvit sē hoc fēcisse.* 6. *Spērābat sē victūrum esse.*

**Questions**

1. Which English tenses change between sentences 1–3, and which Latin forms do not?
2. Explain the use of *sē* in sentences 5 and 6.

## 3. Caesar on Orgetorix

Read the passage aloud:

> *Is M. Messālā et M. Pūpiō Pīsōne cōnsulibus rēgnī cupiditāte inductus coniūrātiōnem nōbilitātis fēcit … perfacile esse, cum virtūte omnibus praestārent, tōtīus Galliae imperiō potīrī.*

**Questions**

1. Identify the ablative absolute, the perfect passive participle, and the deponent infinitive.
2. Why is there no verb of saying before *perfacile esse*?

## 4. Catullus and Cicero

Read both passages aloud:

> *Nūllī sē dīcit mulier mea nūbere mālle / quam mihi …*
> *Quō ūsque tandem abūtēre, Catilīna, patientiā nostrā?*

**Questions**

1. Analyze the indirect statement in Catullus's first line.
2. What form is *abūtēre*, and why is *patientiā* in the ablative?

## Drawing the threads together

In a paragraph, explain how Latin indirect statement differs from English, with at least four examples showing the accusative subject, the tense of the infinitive, and the reflexive.`,
    },
  ],
  readings: [
    { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, rev. Richard A. LaFleur", publisher: "Harper Collins", year: "7th ed., 2011", note: "Read the chapters on infinitives and indirect statement." },
    { kind: "book", title: "Allen and Greenough's New Latin Grammar", author: "J. H. Allen and J. B. Greenough", publisher: "Public domain (1903); many reprints", note: "Read the sections on the infinitive and on indirect discourse." },
    { kind: "book", title: "Cicero: Catilinarians", author: "Cicero, ed. Andrew R. Dyck", publisher: "Cambridge University Press (Greek and Latin Classics)", year: "2008", note: "Read the introduction and the notes on the opening of the first speech." },
  ],
  media: [
    { kind: "book", title: "The Gallic War", author: "Caesar, trans. Carolyn Hammond", publisher: "Oxford World's Classics", year: "1996", note: "Read book 1, chapters 1–29, on the Helvetii." },
    { kind: "book", title: "Political Speeches", author: "Cicero, trans. D. H. Berry", publisher: "Oxford World's Classics", year: "2006", note: "Includes the four speeches against Catiline." },
  ],
  questions: [
    {
      prompt: "Which is the perfect active infinitive of videō?",
      choices: ["vidēre", "vīdisse", "vīsus esse", "vīsūrus esse"],
      answer: 1,
      explanation: "Perfect stem + -isse.",
    },
    {
      prompt: "In Errāre est hūmānum, what is errāre?",
      choices: [
        "A complementary infinitive",
        "The subject of est",
        "An indirect statement",
        "An imperative",
      ],
      answer: 1,
      explanation: "The infinitive works as a neuter noun.",
    },
    {
      prompt: "How does Latin express indirect statement?",
      choices: [
        "With quod and the indicative",
        "With an accusative subject and an infinitive",
        "With ut and the subjunctive",
        "With a nominative and a participle",
      ],
      answer: 1,
      explanation: "Dīcit Caesarem venīre: “He says that Caesar is coming.”",
    },
    {
      prompt: "What is the best translation of Dīxit Caesarem vēnisse?",
      choices: [
        "He said that Caesar was coming",
        "He said that Caesar had come",
        "He says that Caesar came",
        "He said that Caesar would come",
      ],
      answer: 1,
      explanation: "A perfect infinitive after a past head verb shows earlier time.",
    },
    {
      prompt: "In Caesar dīxit sē venīre, whom does sē refer to?",
      choices: ["Someone else", "Caesar", "The reader", "It is impersonal"],
      answer: 1,
      explanation: "In indirect statement, sē refers to the subject of the head verb.",
    },
    {
      prompt: "How does Latin normally say “He said that he had not done it”?",
      choices: [
        "Dīxit sē nōn fēcisse",
        "Negāvit sē fēcisse",
        "Dīxit nōn eum facere",
        "Nōn dīxit sē fēcisse",
      ],
      answer: 1,
      explanation: "Negō, “deny,” replaces dīcō … nōn.",
    },
    {
      prompt: "What does Rōmulus dīcitur urbem condidisse mean?",
      choices: [
        "Romulus says that he founded the city",
        "Romulus is said to have founded the city",
        "It is said that the city founded Romulus",
        "Romulus will found the city",
      ],
      answer: 1,
      explanation: "The personal construction with the passive of dīcō.",
    },
    {
      prompt: "In Caesar BG 1.2, what does M. Messālā et M. Pūpiō Pīsōne cōnsulibus express?",
      choices: [
        "Who persuaded Orgetorix",
        "The date: in the consulship of Messala and Piso",
        "The consuls' opinion",
        "Means",
      ],
      answer: 1,
      explanation: "An ablative absolute with nouns; the Romans dated years by consuls.",
    },
    {
      prompt: "What does the repeated Dīcit in Catullus 70 suggest?",
      choices: [
        "That Lesbia speaks often",
        "That her promise is mere words, not to be trusted",
        "That Catullus is deaf",
        "That Jupiter is speaking",
      ],
      answer: 1,
      explanation: "“She says so; but …” what a woman tells a lover should be written on water.",
    },
    {
      prompt: "In Quō ūsque tandem abūtēre … patientiā nostrā, why is patientiā ablative?",
      choices: [
        "It is an ablative absolute",
        "Abūtor, like ūtor, takes the ablative",
        "It expresses time",
        "It follows a preposition",
      ],
      answer: 1,
      explanation: "Abūtēre is the future of the deponent abūtor.",
    },
  ],
  reflection:
    "Caesar reports Orgetorix's argument, Catullus reports Lesbia's promise, and historians report traditions with trāditur, all through indirect statement. In 500–800 words, explain how Latin indirect statement works, and argue how reporting speech rather than quoting it lets a writer shape the reader's trust in what is reported.",
};
