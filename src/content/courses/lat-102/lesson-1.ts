import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "The Passive Voice and Deponent Verbs",
  summary:
    "Active and passive; the passive endings of the present system in all four conjugations; the ablative of agent; the perfect passive built from the participle and sum; deponent verbs that look passive but mean active; and readings from Caesar, Genesis, John, and the opening of Ovid's Metamorphoses.",
  pages: [
    {
      title: "Active and Passive",
      body: `## Welcome back

In LAT 101 you learned the forms of the Latin noun, the adjective, and the pronoun, and every tense of the **active** verb. This course completes the grammar of the language. By its end you will know the passive voice, the participles, the infinitives, the subjunctive mood and its many uses, the gerund and gerundive, and the irregular verbs, and you will be reading continuous Latin by Caesar, Cicero, Virgil, Ovid, and Horace with the help of notes.

We start with the **passive voice**, which doubles the number of verb forms you can recognize in a single lesson. It is less work than it sounds, because the passive is built on the stems you already know.

## What voice means

**Voice** describes the relationship between the subject of a verb and its action.

- In the **active** voice, the subject **does** the action: *Caesar Gallōs vincit*, "Caesar conquers the Gauls."
- In the **passive** voice, the subject **receives** the action: *Gallī ā Caesare vincuntur*, "The Gauls are conquered by Caesar."

The same event can be described either way. What changes is the point of view. In the active sentence we look at Caesar; in the passive sentence we look at the Gauls. The object of the active verb (*Gallōs*) becomes the subject of the passive verb (*Gallī*), and the subject of the active verb (*Caesar*) becomes an optional phrase telling us **by whom** the action was done (*ā Caesare*).

English forms its passive with a helping verb: "is conquered," "was praised," "will be seen." Latin, in the present system, does it with **endings alone**. *Laudat* is "he praises"; *laudātur* is "he is praised." One word does the work of three.

## The passive personal endings

The passive endings of the present system are:

| | Singular | Plural |
|---|---|---|
| 1 | **-r** (or **-or**) | **-mur** |
| 2 | **-ris** (or **-re**) | **-minī** |
| 3 | **-tur** | **-ntur** |

Compare the active endings: *-ō/-m, -s, -t, -mus, -tis, -nt*. Most of the passive endings are the active endings with an *r* added or substituted: *-t* becomes *-tur*, *-mus* becomes *-mur*, *-nt* becomes *-ntur*. The one that stands apart is the second person plural, ***-minī***, which you must simply learn.

## The present passive: first and second conjugations

| | *laudō* | *moneō* |
|---|---|---|
| 1 sg. | *laudor*, I am praised | *moneor*, I am warned |
| 2 sg. | *laudāris* | *monēris* |
| 3 sg. | *laudātur* | *monētur* |
| 1 pl. | *laudāmur* | *monēmur* |
| 2 pl. | *laudāminī* | *monēminī* |
| 3 pl. | *laudantur* | *monentur* |

Notice that in the first person singular the passive ending *-or* is added to the full form of the active: *laudō* + *r* = *laudor*; *moneō* + *r* = *moneor*.

The alternative second singular ending *-re* (*laudāre* for *laudāris*) is common in poetry and in Cicero. It looks exactly like the present active infinitive, so context must decide: *laudāre* in a sentence with the subject "you" and no other verb is "you are praised."

## Meaning of the present passive

Like the present active, the present passive covers several English forms: *laudātur* can be "he is praised," "he is being praised," or, in a question, "is he praised?" Choose what sounds natural.

## The ablative of agent

When a passive verb tells us **by whom** an action was done, Latin uses the preposition ***ā*** (before consonants) or ***ab*** (before vowels and *h*) with the **ablative**. This is the **ablative of personal agent**:

> *Puella ā poētā laudātur.* "The girl is praised by the poet."
> *Urbs ab hostibus oppugnātur.* "The city is being attacked by the enemy."

When the action is done not by a person but by a **thing**, Latin uses the plain **ablative of means**, with no preposition, as you learned in LAT 101:

> *Urbs flammīs dēlētur.* "The city is destroyed by flames."
> *Mīlitēs gladiīs vulnerantur.* "The soldiers are wounded by swords."

This distinction is a good test of whether you are reading carefully. *Ā* or *ab* with the ablative after a passive verb almost always points to a living agent, a person or an animal or a god; a bare ablative points to an instrument. English uses "by" for both, so Latin is more precise than English here.

## Turning active into passive

A good exercise, and a good way to fix the endings in your mind, is to turn active sentences into passive ones and back again. Follow three steps:

1. The **object** of the active verb (accusative) becomes the **subject** of the passive verb (nominative).
2. The verb changes to the **passive**, agreeing with its new subject in person and number.
3. The **subject** of the active verb becomes an **ablative of agent** with *ā/ab* (if it is a person) or an **ablative of means** (if it is a thing).

> Active: *Magister discipulōs monet.* "The teacher warns the students."
> Passive: *Discipulī ā magistrō monentur.* "The students are warned by the teacher."

> Active: *Ventī nāvēs agitant.* "The winds toss the ships."
> Passive: *Nāvēs ventīs agitantur.* "The ships are tossed by the winds."

## Only transitive verbs

Only verbs that can take a direct object (transitive verbs) have a full personal passive. You can say "the city is attacked," but not "the soldier is gone" in the passive sense, because *eō*, "go," takes no object. Latin does, however, use intransitive verbs in an **impersonal passive**, which we will meet later in this lesson: *pugnātur*, "there is fighting," "a battle is going on."

## Vocabulary

| Latin | Meaning |
|---|---|
| *ā, ab* + abl. | by (agent); from, away from |
| *dēleō, dēlēre, dēlēvī, dēlētum* | destroy |
| *moveō, movēre, mōvī, mōtum* | move |
| *oppugnō (1)* | attack, assault (a town) |
| *teneō, tenēre, tenuī, tentum* | hold, keep |
| *vulnerō (1)* | wound |
| *agitō (1)* | drive, toss, stir up |
| *servō (1)* | save, keep, preserve |

> **Pause and consider.** A Roman historian could write "Caesar destroyed the city" or "The city was destroyed." What does the passive let a writer leave out, and why might he want to?`,
    },
    {
      title: "The Present System Passive in All Conjugations",
      body: `## The imperfect passive

The **imperfect passive** is formed exactly like the imperfect active, with the tense sign ***-bā-***, but with the passive endings:

| | *laudō* | *moneō* |
|---|---|---|
| 1 sg. | *laudābar*, I was being praised | *monēbar* |
| 2 sg. | *laudābāris* | *monēbāris* |
| 3 sg. | *laudābātur* | *monēbātur* |
| 1 pl. | *laudābāmur* | *monēbāmur* |
| 2 pl. | *laudābāminī* | *monēbāminī* |
| 3 pl. | *laudābantur* | *monēbantur* |

The meaning follows the imperfect active: ongoing or repeated action in the past. *Laudābātur* is "he was being praised," "he used to be praised," "he was praised (regularly)."

## The future passive of the first and second conjugations

The future passive of the first and second conjugations uses the tense sign ***-b-*** with the connecting vowels you know from the future active (*-bō, -bis, -bit*), but watch the second person singular:

| | *laudō* | *moneō* |
|---|---|---|
| 1 sg. | *laudābor*, I shall be praised | *monēbor* |
| 2 sg. | *laudāberis* | *monēberis* |
| 3 sg. | *laudābitur* | *monēbitur* |
| 1 pl. | *laudābimur* | *monēbimur* |
| 2 pl. | *laudābiminī* | *monēbiminī* |
| 3 pl. | *laudābuntur* | *monēbuntur* |

The second singular ***-beris*** has an *e*, not the *i* of *laudābis*. This is a regular sound change before *r*, and it is the form most often confused: learn *laudāberis* as a separate item.

## The third conjugation

The third conjugation, as always, needs the most care. Here is the present, imperfect, and future passive of *dūcō, dūcere*, "lead":

| | Present | Imperfect | Future |
|---|---|---|---|
| 1 sg. | *dūcor* | *dūcēbar* | *dūcar* |
| 2 sg. | *dūceris* | *dūcēbāris* | *dūcēris* |
| 3 sg. | *dūcitur* | *dūcēbātur* | *dūcētur* |
| 1 pl. | *dūcimur* | *dūcēbāmur* | *dūcēmur* |
| 2 pl. | *dūciminī* | *dūcēbāminī* | *dūcēminī* |
| 3 pl. | *dūcuntur* | *dūcēbantur* | *dūcentur* |

Two forms deserve special attention:

1. The present second singular is ***dūceris***, with a short *e*, but the future second singular is ***dūcēris***, with a long *ē*. Only the vowel length separates "you are led" from "you will be led." In reading, context almost always settles it.
2. The future, as in the active, uses ***-a-*** in the first person singular (*dūcar*) and ***-ē-*** elsewhere (*dūcētur*, *dūcentur*). Compare the active *dūcam, dūcēs, dūcet*.

## The fourth conjugation and -iō verbs

The fourth conjugation (*audiō, audīre*) and the third-conjugation *-iō* verbs (*capiō, capere*) follow the same pattern, keeping their *i* where the active does:

| | *audiō*: present | future | *capiō*: present | future |
|---|---|---|---|---|
| 1 sg. | *audior* | *audiar* | *capior* | *capiar* |
| 2 sg. | *audīris* | *audiēris* | *caperis* | *capiēris* |
| 3 sg. | *audītur* | *audiētur* | *capitur* | *capiētur* |
| 1 pl. | *audīmur* | *audiēmur* | *capimur* | *capiēmur* |
| 2 pl. | *audīminī* | *audiēminī* | *capiminī* | *capiēminī* |
| 3 pl. | *audiuntur* | *audientur* | *capiuntur* | *capientur* |

The imperfects are *audiēbar* and *capiēbar*, formed regularly.

Notice *caperis*: the *-iō* verbs drop the *i* before a short *e* or *i* that is followed by *r*, exactly as the active drops it in *capis* and *capit*.

## The present passive infinitive

The present active infinitive ends in *-re*. The **present passive infinitive** changes this in two ways:

| Conjugation | Active | Passive |
|---|---|---|
| 1 | *laudāre*, to praise | ***laudārī***, to be praised |
| 2 | *monēre*, to warn | ***monērī***, to be warned |
| 3 | *dūcere*, to lead | ***dūcī***, to be led |
| 3 *-iō* | *capere*, to take | ***capī***, to be taken |
| 4 | *audīre*, to hear | ***audīrī***, to be heard |

The first, second, and fourth conjugations change final *-e* to ***-ī***. The third conjugation replaces the whole ending *-ere* with a simple ***-ī***. This short form is easily missed: *dūcī* looks like a dative or a genitive of a second-declension noun, and *capī* looks like nothing at all. Train your eye to see it, especially after verbs like *possum*, *dēbeō*, and *volō*:

> *Urbs capī nōn potest.* "The city cannot be taken."
> *Lēgēs servārī dēbent.* "Laws ought to be kept."

## Recognizing a passive

To recognize a passive in the present system, look for the ending first, and then the tense sign:

1. Does the word end in ***-r, -ris, -re, -tur, -mur, -minī,*** or ***-ntur***? If so, it is very probably passive (or deponent, as we shall see).
2. Is there a ***-bā-*** before the ending? Then it is imperfect.
3. Is there a ***-bi-, -bo-, -be-, -bu-*** (first and second conjugations) or an ***-a-/-ē-*** (third and fourth)? Then it is future.
4. Otherwise it is present.

The endings that end in *-r* stand out on the page once you are used to them, and soon a sentence like *Gallia ā Rōmānīs oppugnābātur* will translate itself: "Gaul was being attacked by the Romans."

## Practice

Translate, then change each verb to the active voice:

> 1. *Librī ā discipulīs leguntur.* 2. *Cīvēs ā cōnsule monēbantur.* 3. *Urbs nostra numquam capiētur.* 4. *Vōcēs puerōrum in viā audiuntur.* 5. *Ā Caesare dūcēminī.* 6. *Patria ā mīlitibus servābitur.*

## A memory aid

Many students find it useful to chant the passive endings in a fixed order, *r, ris, tur, mur, minī, ntur*, until they come as easily as the active *ō, s, t, mus, tis, nt*. Say them first by themselves, then attached to *laudā-*, *monē-*, and *dūc-*, and you will rarely confuse them again.

> **Pause and consider.** Latin distinguishes "you are led" (*dūceris*) from "you will be led" (*dūcēris*) by the length of a single vowel. What does this tell you about how important pronunciation was to the Romans' own understanding of their language?`,
    },
    {
      title: "The Perfect Passive System",
      body: `## A different kind of form

The passive of the **perfect system** (perfect, pluperfect, and future perfect) is not made with endings at all. Instead, Latin does what English does: it uses a **participle** with a form of the verb ***sum***.

The participle is the **perfect passive participle**, which comes from the **fourth principal part** of the verb. For most verbs the fourth principal part, as given in dictionaries, ends in *-um*: *laudātum*, *monitum*, *ductum*, *audītum*, *captum*. The participle is formed by changing *-um* to the full first-and-second-declension adjective endings *-us, -a, -um*:

- *laudātus, -a, -um*, "having been praised," "praised"
- *monitus, -a, -um*, "warned"
- *ductus, -a, -um*, "led"
- *audītus, -a, -um*, "heard"
- *captus, -a, -um*, "taken," "captured"

## The perfect passive

The **perfect passive** is the participle with the **present** of *sum*:

| | Singular | Plural |
|---|---|---|
| 1 | *laudātus (-a, -um) sum*, I was praised, I have been praised | *laudātī (-ae, -a) sumus* |
| 2 | *laudātus es* | *laudātī estis* |
| 3 | *laudātus est* | *laudātī sunt* |

It is easy to translate the form too literally. *Laudātus est* does **not** mean "he is praised" (that is *laudātur*). It means "he **was** praised" or "he **has been** praised." The present tense of *sum* combines with a participle that already looks back to a completed action, and the result is a past.

## The pluperfect and future perfect passive

The **pluperfect passive** uses the **imperfect** of *sum*; the **future perfect passive** uses the **future** of *sum*:

| | Pluperfect | Future perfect |
|---|---|---|
| 1 sg. | *laudātus eram*, I had been praised | *laudātus erō*, I shall have been praised |
| 2 sg. | *laudātus erās* | *laudātus eris* |
| 3 sg. | *laudātus erat* | *laudātus erit* |
| 1 pl. | *laudātī erāmus* | *laudātī erimus* |
| 2 pl. | *laudātī erātis* | *laudātī eritis* |
| 3 pl. | *laudātī erant* | *laudātī erunt* |

Each Latin form is "one tense back" from the tense of *sum* it uses: present *sum* gives a perfect; imperfect *eram* gives a pluperfect; future *erō* gives a future perfect.

## Agreement

Because the participle is an adjective, it must **agree** with the subject in **gender, number, and case** (always nominative here). This gives you extra information:

> *Puella laudāta est.* "The girl was praised."
> *Puerī laudātī sunt.* "The boys were praised."
> *Dōna data sunt.* "The gifts were given."
> *Urbs capta est.* "The city was captured." (*urbs* is feminine)
> *Bellum gestum est.* "The war was waged."

When the subject is a mixed group of men and women, the participle is masculine plural. When it is a group of things of different genders, it is often neuter plural.

## Word order

The participle and the form of *sum* are often separated, and *sum* sometimes comes first. *Est ab hostibus urbs capta* and *Capta est urbs ab hostibus* both mean "The city was captured by the enemy." Sometimes, especially in historians and poets, the form of *sum* is **omitted** entirely, leaving the participle alone to carry the meaning: *Urbs capta*, "The city (was) taken." Read for the participle, then look for *sum*; if you cannot find it, supply it.

## Perfect passive participles to learn

Many fourth principal parts are irregular and must be learned with the verb. A few of the most common:

| Verb | Perfect passive participle |
|---|---|
| *agō, agere, ēgī* | *āctus*, done, driven |
| *dīcō, dīcere, dīxī* | *dictus*, said |
| *dō, dare, dedī* | *datus*, given |
| *faciō, facere, fēcī* | *factus*, made, done |
| *ferō, ferre, tulī* | *lātus*, carried |
| *mittō, mittere, mīsī* | *missus*, sent |
| *pōnō, pōnere, posuī* | *positus*, placed |
| *scrībō, scrībere, scrīpsī* | *scrīptus*, written |
| *videō, vidēre, vīdī* | *vīsus*, seen |
| *vincō, vincere, vīcī* | *victus*, conquered |

English uses many of these participles as words: *act*, *dictum*, *data*, *fact*, *mission*, *position*, *script*, *vision*, *victor*. The "fact" of something is literally a "thing done."

## Factum est

A form you will see constantly in narrative Latin, and especially in the Latin Bible, is ***factum est***, "it was done," "it happened," from *faciō*. The passive of *faciō* in the present system is supplied by the irregular verb *fīō*, "be made, become, happen," which you will learn in lesson 2; but in the perfect system *faciō* forms its passive regularly: *factus sum*, "I was made," "I became."

## Tense review

Here is the complete indicative of *laudō*, active and passive, in the third person singular:

| Tense | Active | Passive |
|---|---|---|
| Present | *laudat*, he praises | *laudātur*, he is praised |
| Imperfect | *laudābat*, he was praising | *laudābātur*, he was being praised |
| Future | *laudābit*, he will praise | *laudābitur*, he will be praised |
| Perfect | *laudāvit*, he praised | *laudātus est*, he was praised |
| Pluperfect | *laudāverat*, he had praised | *laudātus erat*, he had been praised |
| Future perfect | *laudāverit*, he will have praised | *laudātus erit*, he will have been praised |

You now know every form of the indicative mood of a regular Latin verb. That is twelve tenses' worth of forms, thirty-six in the singular and plural for each verb, all built from the four principal parts.

## Practice

> 1. *Carthāgō ā Rōmānīs dēlēta est.* 2. *Litterae ad senātum missae erant.* 3. *Omnia quae dīxerās audīta sunt.* 4. *Cum urbs capta erit, mīlitēs domum redībunt.* 5. *Haec ā mē scrīpta sunt.*

> **Pause and consider.** Why does *laudātus est*, built with the present tense of "to be," mean "he was praised" rather than "he is praised"? Think about what the participle *laudātus* already means on its own.`,
    },
    {
      title: "Deponent Verbs",
      body: `## Passive in form, active in meaning

Latin has a large group of verbs that have **passive forms** but **active meanings**. They are called **deponent** verbs, from *dēpōnō*, "lay aside," because the old grammarians imagined that they had "laid aside" their active forms. The name is not historically accurate, but it is universal.

> *Sequor*, "I follow" (not "I am followed")
> *Loquitur*, "he speaks" (not "he is spoken")
> *Cōnātī sunt*, "they tried" (not "they were tried")

Deponents are common, and some of the most frequent verbs in the language are deponent. Once you know the passive forms, you already know how to conjugate them. The only new thing is to remember that the meaning is active.

## Recognizing deponents

You recognize a deponent by its **dictionary entry**, which has only **three** principal parts, all passive in form:

| Principal parts | Meaning | Conjugation |
|---|---|---|
| *cōnor, cōnārī, cōnātus sum* | try | 1 |
| *hortor, hortārī, hortātus sum* | encourage, urge | 1 |
| *mīror, mīrārī, mīrātus sum* | wonder at, admire | 1 |
| *vereor, verērī, veritus sum* | fear, respect | 2 |
| *loquor, loquī, locūtus sum* | speak | 3 |
| *sequor, sequī, secūtus sum* | follow | 3 |
| *proficīscor, proficīscī, profectus sum* | set out | 3 |
| *nāscor, nāscī, nātus sum* | be born | 3 |
| *morior, morī, mortuus sum* | die | 3 *-iō* |
| *patior, patī, passus sum* | suffer, allow | 3 *-iō* |
| *ēgredior, ēgredī, ēgressus sum* | go out | 3 *-iō* |
| *orior, orīrī, ortus sum* | rise | 4 |

The first part is the present indicative (first person singular), the second is the present infinitive (passive in form), and the third is the perfect indicative (participle plus *sum*). The infinitive tells you the conjugation, just as with regular verbs: *-ārī* first, *-ērī* second, *-ī* third, *-īrī* fourth.

## Conjugating a deponent

Here is the present indicative of *sequor* in full, next to the passive of *dūcō*, which it exactly matches:

| | *dūcō* (passive) | *sequor* (deponent) |
|---|---|---|
| 1 sg. | *dūcor*, I am led | *sequor*, I follow |
| 2 sg. | *dūceris* | *sequeris*, you follow |
| 3 sg. | *dūcitur* | *sequitur*, he follows |
| 1 pl. | *dūcimur* | *sequimur*, we follow |
| 2 pl. | *dūciminī* | *sequiminī*, you follow |
| 3 pl. | *dūcuntur* | *sequuntur*, they follow |

All the other tenses follow: *sequēbātur*, "he was following"; *sequētur*, "he will follow"; *secūtus est*, "he followed"; *secūtus erat*, "he had followed." The infinitive *sequī* means "to follow."

## Deponents with objects

Because deponents are active in meaning, most of them take a direct object in the accusative, like any active verb:

> *Mīlitēs ducem sequuntur.* "The soldiers follow the general."
> *Caesar suōs hortātus est.* "Caesar encouraged his men."
> *Mīrāmur virtūtem tuam.* "We admire your courage."

## Five deponents with the ablative

Five common deponents take their object in the **ablative**, not the accusative. They are worth learning as a group:

| Verb | Meaning |
|---|---|
| *ūtor, ūtī, ūsus sum* + abl. | use (literally "benefit oneself by") |
| *fruor, fruī, frūctus sum* + abl. | enjoy |
| *fungor, fungī, fūnctus sum* + abl. | perform, discharge |
| *potior, potīrī, potītus sum* + abl. | get possession of |
| *vēscor, vēscī* + abl. | feed on, eat |

Many students remember them with the invented phrase "*PFFUV*" or by thinking of the ablative as the ablative of means: one "benefits oneself *by means of*" a thing. *Gladiō ūtitur*, "he uses a sword"; *Vītā fruimur*, "we enjoy life"; *Urbe potītī sunt*, "they got possession of the city."

## Semi-deponents

A few verbs are **semi-deponent**: they are active in the present system and deponent (passive in form) in the perfect system:

| Principal parts | Meaning |
|---|---|
| *audeō, audēre, ausus sum* | dare |
| *gaudeō, gaudēre, gāvīsus sum* | rejoice |
| *soleō, solēre, solitus sum* | be accustomed |
| *fīdō, fīdere, fīsus sum* | trust |

So: *audet*, "he dares," but *ausus est*, "he dared"; *gaudēmus*, "we rejoice," but *gāvīsī sumus*, "we rejoiced."

## Deponents in English

Many English words come from the participles of deponent verbs, which preserve the third principal part: *locution* and *eloquent* (*locūtus*, *loquor*); *sequence* and *consecutive* (*secūtus*); *native* and *nation* (*nātus*); *mortal* (*mortuus*, from the same root); *passion* and *patient* (*passus*, *patior*); *orient* (*orior*, "rise," the direction of the rising sun); *usage* (*ūsus*); *progress* and *egress* (*gressus*, from *gradior*, "step"). The English word *passion* first meant "suffering," as in the *Passion* of Christ; its meaning of strong emotion came later.

## Why do deponents exist?

Historically, the Latin passive grew out of an older **middle** voice, which existed fully in Greek and Sanskrit and described actions done **for oneself**, **to oneself**, or with special involvement of the subject. Many deponents describe exactly such actions: being born, dying, speaking, following, suffering, setting out, enjoying, using. The Romans simply kept these verbs in their old middle form when the rest of the system became passive. This is why the list of deponents looks less random than it first appears: it is a list of verbs in which the subject is deeply involved in its own action.

## Practice

> 1. *Cicerō in senātū diū locūtus est.* 2. *Mīlitēs Rōmā profectī sunt.* 3. *Nōlīte morārī: tempus fugit.* (*moror, morārī*, "delay") 4. *Omnēs hominēs nāscuntur et moriuntur.* 5. *Vērō amīcō fruor.* 6. *Hostēs castrīs potītī sunt.*

> **Pause and consider.** Many deponent verbs describe actions in which the subject is deeply involved: being born, dying, suffering, speaking, enjoying. Why might a language keep such actions in a form that looks like the passive?`,
    },
    {
      title: "The Passive in Use",
      body: `## The impersonal passive

Latin can use the passive of **intransitive** verbs in the third person singular, with no subject expressed, to describe an action without saying who does it. This is the **impersonal passive**:

> *Pugnātur.* "There is fighting." "A battle is being fought."
> *Ācriter pugnātum est.* "There was fierce fighting." "They fought fiercely."
> *Ītur ad forum.* "People are going to the forum."
> *Diū et ācriter pugnātum est.* "The battle was long and hard." (Caesar's style)
> *Sīc ītur ad astra.* "Thus one goes to the stars." (Virgil, *Aeneid* 9.641)

The impersonal passive has no good English equivalent. Translate it with "there is …ing," with "people" or "they" as a vague subject, or by recasting the sentence. Caesar uses it constantly, because it lets him report the action of battle without naming every participant.

## Impersonal passives of saying

Verbs of saying and believing are often used impersonally in the passive, especially with an infinitive (lesson 3):

> *Dīcitur.* "It is said."
> *Trāditur.* "It is handed down," "tradition says."
> *Dictum est.* "It has been said."

## The middle use of the passive

Some passive forms of ordinary verbs have a reflexive or **middle** meaning, describing what the subject does to itself:

> *Vertor.* "I turn (myself)."
> *Moveor.* "I move," "I am moved (emotionally)."
> *Lavor.* "I wash (myself)."
> *Mūtantur.* "They change."
> *Fertur.* "He rushes," "he is carried along" (from *ferō*, "carry").

Here the old middle voice survives inside the passive, as it does in the deponents. Context tells you whether *movētur* is "he is moved" by someone else or "he moves," and both may be present at once in poetry.

## Why writers use the passive

Students of English composition are often taught to avoid the passive. Latin writers had no such prejudice, and used it constantly, for several reasons:

1. **To shift focus.** The passive puts the receiver of the action first, at the head of the sentence. *Carthāgō dēlēta est* is about Carthage, not about the Romans.
2. **To leave the agent unnamed.** Sometimes the agent is unknown, obvious, or deliberately hidden. In legal and official Latin, decisions are often reported in the passive: *Senātus cōnsultum factum est*, "a decree of the senate was passed."
3. **To keep the same subject.** In a long sentence, a writer may switch to the passive so that the same person remains the subject of every verb. *Caesar Gallōs vīcit, sed posteā ā Brūtō occīsus est*, "Caesar conquered the Gauls, but afterward was killed by Brutus."
4. **To describe processes.** Many descriptions of nature and of the world are naturally passive: things are moved, changed, born, destroyed.

## Translating the passive well

When you translate a Latin passive, you are free to turn it into an English active if that reads better, as long as you keep the meaning:

> *Ā Caesare laudātus est.* "He was praised by Caesar," or "Caesar praised him."
> *Nūntius ad urbem missus est.* "A messenger was sent to the city."
> *Hīs rēbus cognitīs …* "When these things were learned …," "On learning this …"

Good translation is never mechanical. Ask first what the Latin means, and then how an English writer would say it.

## The passive and the dative

You may sometimes see a **dative** with a passive verb where you expect *ā/ab* with the ablative. This **dative of agent** is used chiefly with the gerundive (lesson 5) and occasionally in poetry with the perfect passive: *mihi cōnsilium captum est*, "a plan has been formed by me." For now, expect the ablative with *ā/ab*, but do not be surprised by the dative.

## A Caesarian sentence

Here is a sentence typical of Caesar's *Gallic War*, which uses passives and an impersonal passive to narrate a battle economically:

> *Ācriter in eō locō pugnātum est; multī ex hostibus vulnerātī sunt, reliquī in fugam coniectī.*

**Notes**: *ācriter*, "fiercely"; *in eō locō*, "in that place"; *pugnātum est*, impersonal perfect passive; *vulnerātī sunt*, "were wounded"; *reliquī*, "the rest"; *in fugam coniectī* (supply *sunt*), "were thrown into flight," from *coniciō*, "throw."

**Translation**: "There was fierce fighting in that place; many of the enemy were wounded, and the rest were put to flight."

Notice how Caesar omits *sunt* with *coniectī*, and how the subject of the action, the Roman army, is never mentioned. The reader knows who did the fighting; Caesar's style lets the result speak.

## Caesar and the third person

Caesar wrote his *Commentāriī* about himself in the **third person**: *Caesar … proficīscitur*, "Caesar sets out." Combined with his frequent passives, this gives his narrative the tone of an objective official report, even though it was written to justify his own actions to the Roman people. Ancient readers already noticed the effect. Cicero, in his dialogue *Brutus*, praised the commentaries as "bare, upright, and charming, stripped of all ornament of style, as if of a garment." Whether Caesar's style is honest plainness or skillful propaganda is a question you will be able to judge for yourself when you read him in LAT 201.

## Passive or middle? A test

When you meet a passive form, ask whether an agent could be added. *Urbs ab hostibus capitur*, "the city is taken by the enemy," makes sense with an agent, so it is a true passive. *Mīles in hostem fertur*, "the soldier rushes at the enemy," does not need one: no one is carrying him, so the form is middle. In poetry the two senses can overlap on purpose. When Virgil says that Aeneas *movētur*, the reader may hear both "he is moved" by pity and "he moves" toward action.

## The passive in Roman law

Roman law, which shaped the legal systems of most of Europe and Latin America, made heavy use of the passive and the impersonal. Rules were often stated without naming who made them or who enforced them, and later lawyers kept the style: the medieval maxim *Pacta sunt servanda*, "agreements are to be kept," which grew from the Roman idea of *fidēs*, became a principle of modern international law. The impersonal style made the law sound like a fact of nature rather than the will of a person.

> **Pause and consider.** Caesar describes his own victories in the third person and often in the passive. How might this style shape what a reader believes about the events it reports?`,
    },
    {
      title: "Readings: Caesar, Genesis, and John",
      body: `## Reading with the passive

Now that you know the passive, a great deal of real Latin opens up. This page presents three short passages: one from Caesar, and two from the Latin Bible, which uses the passive and the verb *fīō* constantly. Read each aloud, work through the notes, and then translate before you look at the translation given.

## 1. Caesar, Gallic War 1.1

In LAT 101 you read the famous opening sentence of the *Gallic War*: *Gallia est omnis dīvīsa in partēs trēs*. You can now see that *dīvīsa est* is a perfect passive, "has been divided," with *dīvīsa* (from *dīvidō*, *dīvidere*, *dīvīsī*, *dīvīsum*) agreeing with *Gallia*. A few lines later Caesar continues:

> *Eōrum ūna pars, quam Gallōs obtinēre dictum est, initium capit ā flūmine Rhodanō; continētur Garumnā flūmine, Ōceanō, fīnibus Belgārum.*

**Notes**

- *eōrum*, "of them" (the Gauls as a whole);
- *ūna pars*, "one part";
- *quam Gallōs obtinēre dictum est*, "which, it has been said, the Gauls occupy" (literally "which it has been said that the Gauls occupy"): *dictum est* is an impersonal perfect passive; *Gallōs obtinēre* is an indirect statement (lesson 3);
- *initium capit*, "takes its beginning," "begins";
- *ā flūmine Rhodanō*, "from the river Rhône";
- *continētur*, present passive, "is bounded, is enclosed";
- *Garumnā flūmine*, ablative of means, "by the river Garonne";
- *Ōceanō*, "by the Ocean" (the Atlantic);
- *fīnibus Belgārum*, "by the territory of the Belgae."

**Translation**: "One part of these, which, as has been said, the Gauls occupy, begins at the river Rhône; it is bounded by the river Garonne, the Ocean, and the territory of the Belgae."

Notice that Caesar uses a bare ablative of means for the rivers and the Ocean: they are things, not persons.

## 2. Genesis 1:1–3

The Latin Vulgate's account of creation is written in simple, clear Latin, and it is one of the best places to practice the passive and the verb *fīō*. Here are its first three verses, which English readers know from the King James Version as "In the beginning God created the heaven and the earth":

> *In prīncipiō creāvit Deus caelum et terram. Terra autem erat inānis et vacua, et tenebrae erant super faciem abyssī, et spīritus Deī ferēbātur super aquās. Dīxitque Deus: Fīat lūx. Et facta est lūx.*

**Notes**

- *in prīncipiō*, "in the beginning";
- *creāvit*, perfect active of *creō (1)*, "create";
- *inānis et vacua*, "empty and void";
- *tenebrae, -ārum*, f. pl., "darkness";
- *super faciem abyssī*, "upon the face of the deep";
- *ferēbātur*, imperfect passive of *ferō*, used in a middle sense: "was moving," "was borne";
- *dīxitque*, "and he said" (*-que* attached to the verb);
- *fīat*, "let there be," "let it be made," a subjunctive of *fīō* (lessons 2 and 4);
- *facta est*, perfect passive of *faciō*, "was made," "came to be."

**Translation**: "In the beginning God created heaven and earth. But the earth was empty and void, and darkness was upon the face of the deep, and the spirit of God was moving over the waters. And God said, Let there be light. And light was made."

The two words ***Fīat lūx*** have become a motto, used by many universities. The progression from *fīat*, "let it be made," to *facta est*, "it was made," shows how much Latin can say with its verb forms alone.

## 3. John 1:1–3 and 1:14

The opening of the Gospel of John, in the Vulgate, is a meditation on the creation story you have just read. It uses *erat* (imperfect of *sum*) to describe what always was, and *factum est* and *facta sunt* (perfect passive of *faciō*) to describe what came to be:

> *In prīncipiō erat Verbum, et Verbum erat apud Deum, et Deus erat Verbum. Hoc erat in prīncipiō apud Deum. Omnia per ipsum facta sunt, et sine ipsō factum est nihil quod factum est.*

And, a few verses later (1:14):

> *Et Verbum carō factum est, et habitāvit in nōbīs.*

**Notes**: *Verbum, -ī*, n., "Word"; *apud* + acc., "with," "in the presence of"; *per ipsum*, "through him"; *sine ipsō*, "without him"; *carō, carnis*, f., "flesh"; *habitāvit in nōbīs*, "dwelt among us."

**Translation**: "In the beginning was the Word, and the Word was with God, and the Word was God. This was in the beginning with God. All things were made through him, and without him nothing was made that was made. … And the Word was made flesh, and dwelt among us."

Notice the contrast of tenses: ***erat***, the imperfect, for the eternal Word that simply "was"; ***facta sunt*** and ***factum est***, the perfect passive, for created things that "were made" at a point in time. The verse *Verbum carō factum est* uses *factum est* in the sense "became," which is how the passive of *faciō* is often translated. The grammar here carries the theology: the difference between being and becoming.

## Reading tips

In all three passages, the verb forms told you most of what you needed. When you meet a long sentence, find the verbs first, decide whether each is active or passive, and then find the subject of each. Everything else in the sentence will arrange itself around them.

## Jerome and the passive

Jerome translated the Old Testament from the Hebrew and the New Testament by revising older Latin versions against the Greek. Both Hebrew and Greek narrative are rich in passives and in the verb "to become," and Jerome often kept their structure, which is why the Vulgate's Latin can feel simpler and more repetitive than Cicero's. Medieval readers learned their Latin from it, and many of its phrases, such as *Fīat lūx* and *Verbum carō factum est*, passed into the languages of Europe. When you read Christian Latin in the Theology courses, you will meet these forms on every page.

> **Pause and consider.** The opening of John uses *erat* ("was") for the Word and *facta sunt* ("were made") for created things. What difference between the two does the grammar express?`,
    },
    {
      title: "Ovid: The Opening of the Metamorphoses",
      body: `## The poet

**Publius Ovidius Naso** (43 BCE–17 or 18 CE), known in English as **Ovid**, was the most brilliant and prolific poet of the age of Augustus. Born at **Sulmo**, east of Rome, to a family of equestrian rank, he was trained for a career in law and public life, but gave it up for poetry. His early works were witty love elegies, the *Amōrēs* and the *Ars Amātōria* ("The Art of Love"). Around 8 CE he completed his masterpiece, the ***Metamorphōsēs***, a poem of fifteen books in hexameters, telling some two hundred and fifty stories of transformation from the creation of the world to the deification of Julius Caesar.

In the same year, 8 CE, Augustus banished Ovid to **Tomis** on the Black Sea (modern Constanța in Romania), for reasons Ovid describes only as "a poem and a mistake" (*carmen et error*, *Tristia* 2.207). The poem was probably the *Ars Amātōria*, which offended Augustus's moral legislation; the mistake has never been explained. Ovid died in exile.

## The opening lines

The *Metamorphoses* begins with four lines that announce the subject of the poem and invoke the gods. You can now read them, with the help of the notes. The lines are in **dactylic hexameter**, the meter of epic poetry, which you will study in LAT 210; for now, read them aloud slowly, observing the long vowels.

> *In nova fert animus mūtātās dīcere fōrmās*
> *corpora; dī, coeptīs (nam vōs mūtāstis et illās)*
> *adspīrāte meīs prīmāque ab orīgine mundī*
> *ad mea perpetuum dēdūcite tempora carmen!*

## Notes

**Line 1**: *in nova … corpora*, "into new bodies" (the phrase is split across the line break, a common feature of Latin poetry); *fert*, "carries," "impels," from *ferō*; *animus*, "my mind," "my spirit"; *mūtātās … fōrmās*, "forms that have been changed," "changed shapes": *mūtātās* is the perfect passive participle of *mūtō (1)*, "change," agreeing with *fōrmās*; *dīcere*, "to tell of," infinitive depending on *fert*. Literally: "My spirit carries me to tell of forms changed into new bodies."

**Line 2**: *dī*, vocative plural of *deus*, "O gods"; *coeptīs … meīs*, "my undertakings," "what I have begun," dative with *adspīrāte* (*coepta, -ōrum*, n. pl., from the perfect participle of *coepī*, "begin"); *nam vōs mūtāstis et illās*, "for you changed them too": *mūtāstis* is a shortened form of *mūtāvistis*, perfect active; *et* here means "also," "too"; *illās*, "those (forms)."

**Line 3**: *adspīrāte*, plural imperative of *adspīrō (1)*, "breathe upon," "favor"; *prīmā … ab orīgine mundī*, "from the first origin of the world"; *-que*, "and."

**Line 4**: *ad mea … tempora*, "down to my own times"; *perpetuum … carmen*, "an unbroken song," the object of *dēdūcite*; *dēdūcite*, plural imperative of *dēdūcō*, "lead down," "draw out," "spin out" (a word used of spinning thread, and of composing fine poetry).

## Translation

"My spirit moves me to tell of forms changed into new bodies. Gods, since you have changed those too, breathe favor upon what I have begun, and from the very first beginning of the world draw out my unbroken song down to my own times."

## Reading the opening

These four lines are a small masterpiece, and much of their wit depends on grammar you now know.

**The delayed noun.** The first line seems complete: "My mind carries me to speak of changed forms into new …" Only in line 2 do we learn the noun: *corpora*, "bodies." The reader's understanding is itself "changed" as the sentence crosses the line. This kind of enjambment, carrying a phrase across a line break so that its meaning shifts, is one of the delights of Latin verse.

**The passive participle.** *Mūtātās fōrmās*, "forms that have been changed," states the whole subject of the poem in two words. Every story in the *Metamorphoses* is a story of a form that is changed by a god, by love, by grief, or by punishment: Daphne into a laurel, Narcissus into a flower, Arachne into a spider.

**The gods as changers.** *Nam vōs mūtāstis et illās*, "for you changed them too," gives the reason for the invocation. Most manuscripts read *illās*, referring back to *fōrmās*. But many modern editors print ***illa***, the neuter plural, "for you changed that too": on this reading Ovid means that the gods changed his own *coepta*, his poetry, which had been elegy and is now becoming epic. The difference of a single letter changes a conventional prayer into a joke about the poet's own transformation. Either way, the gods are both the subject matter of the poem and the authors of its change.

**The thread of song.** *Perpetuum carmen* and *dēdūcite* combine two ideas of poetry that were usually opposed in Ovid's time: the long, continuous epic, and the finely spun, small-scale poem favored by the learned poets who followed Callimachus. Ovid promises to do both at once: to tell a continuous story from the creation to his own day, and to spin it as finely as a short poem.

## Ovid's influence

The *Metamorphoses* was one of the most widely read poems of the Middle Ages and the Renaissance. Chaucer, Dante, Petrarch, Spenser, and Milton knew it intimately. **Shakespeare** read it both in Latin, at grammar school, and in Arthur Golding's English translation (1567), and drew on it for the story of Pyramus and Thisbe in *A Midsummer Night's Dream* and for Prospero's great speech of farewell to his magic in *The Tempest*. Painters and sculptors, from Titian to Bernini, took their subjects from it. Ovid ends the poem by predicting his own immortality: *vīvam*, "I shall live." So far, he has been right.

> **Pause and consider.** The first line of the *Metamorphoses* seems complete until the word *corpora* arrives at the start of line 2. How does this delay act out the poem's subject of transformation?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. Passive forms

Give the present, imperfect, future, and perfect passive, third person singular and plural, of each verb, with meanings:

> *vocō, vocāre, vocāvī, vocātum* — *teneō, tenēre, tenuī, tentum* — *mittō, mittere, mīsī, missum* — *capiō, capere, cēpī, captum*

**Questions**

1. How does the future passive second singular of the first conjugation (*vocāberis*) differ from what you would expect?
2. What is the present passive infinitive of *mittō*, and why is it easy to miss?

## 2. Active to passive

Turn each sentence into the passive, then translate both versions:

> 1. *Rōmānī Carthāginem dēlēvērunt.* 2. *Poēta rēgīnam laudābat.* 3. *Ventus nāvem movet.* 4. *Hostēs urbem capient.*

**Questions**

1. In which sentences does the agent take *ā/ab*, and in which a bare ablative? Why?
2. How does the gender of the subject affect the perfect passive in sentence 1?

## 3. Deponents

Translate, and give the principal parts of every deponent verb:

> 1. *Caesar mīlitēs hortātus est.* 2. *Hostēs nostrōs sequēbantur.* 3. *Cicerō dē rē pūblicā loquitur.* 4. *Pāce fruēmur.* 5. *Prīmā lūce profectī sunt.* 6. *Ausus est rēgī resistere.*

**Questions**

1. Which of these verbs takes an object in the ablative?
2. What kind of verb is *audeō*, and how does sentence 6 show it?

## 4. Ovid and Genesis

Read both passages aloud:

> *In nova fert animus mūtātās dīcere fōrmās / corpora …*
> *Dīxitque Deus: Fīat lūx. Et facta est lūx.*

**Questions**

1. Identify every participle and passive verb in the two passages.
2. Both passages are about change and coming-to-be. How does each use the grammar of the passive to express it?

## Drawing the threads together

In a paragraph, explain the difference between a passive verb and a deponent verb, and how you can tell them apart in a dictionary and in a sentence, using at least four examples from this lesson.`,
    },
  ],
  readings: [
    { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, rev. Richard A. LaFleur", publisher: "Harper Collins", year: "7th ed., 2011", note: "Read the chapters on the passive voice of the present and perfect systems and on deponent verbs." },
    { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing / Hackett", year: "2003", note: "Read on aloud, noting every passive and deponent form you meet." },
    { kind: "book", title: "Allen and Greenough's New Latin Grammar", author: "J. H. Allen and J. B. Greenough", publisher: "Public domain (1903); many reprints", note: "Read the sections on voice, the passive conjugations, and deponent verbs." },
  ],
  media: [
    { kind: "book", title: "Metamorphoses", author: "Ovid, trans. Arthur Golding", publisher: "Public domain (1567); Penguin Classics ed. Madeleine Forey, 2002", note: "The translation Shakespeare read." },
    { kind: "book", title: "Metamorphoses", author: "Ovid, trans. David Raeburn", publisher: "Penguin Classics", year: "2004", note: "A modern verse translation to read alongside the Latin." },
  ],
  questions: [
    {
      prompt: "What does the passive voice indicate?",
      choices: [
        "That the action happened in the past",
        "That the subject receives the action",
        "That the action is a command",
        "That the verb has no subject",
      ],
      answer: 1,
      explanation: "Gallī ā Caesare vincuntur: the Gauls are conquered.",
    },
    {
      prompt: "Which is the present passive, third person plural, of laudō?",
      choices: ["laudant", "laudantur", "laudābantur", "laudātī sunt"],
      answer: 1,
      explanation: "-nt becomes -ntur in the passive.",
    },
    {
      prompt: "How does Latin usually express the person by whom a passive action is done?",
      choices: [
        "Plain ablative",
        "ā/ab with the ablative",
        "Dative",
        "Accusative with per",
      ],
      answer: 1,
      explanation: "The ablative of personal agent; things take the plain ablative of means.",
    },
    {
      prompt: "What is the present passive infinitive of dūcō?",
      choices: ["dūcere", "dūcī", "dūcērī", "ductus esse"],
      answer: 1,
      explanation: "The third conjugation replaces -ere with -ī.",
    },
    {
      prompt: "What does laudātus est mean?",
      choices: ["He is praised", "He was praised, has been praised", "He will be praised", "He had praised"],
      answer: 1,
      explanation: "The participle plus the present of sum gives the perfect passive.",
    },
    {
      prompt: "In Urbs capta est, why is the participle capta feminine?",
      choices: [
        "Participles are always feminine",
        "It agrees with urbs, which is feminine",
        "Because the city was conquered",
        "It is an error",
      ],
      answer: 1,
      explanation: "The participle agrees with the subject in gender, number, and case.",
    },
    {
      prompt: "What is a deponent verb?",
      choices: [
        "A verb with no perfect",
        "A verb passive in form but active in meaning",
        "A verb used only in the third person",
        "A verb that takes the dative",
      ],
      answer: 1,
      explanation: "Sequor, “I follow”; locūtus est, “he spoke.”",
    },
    {
      prompt: "Which deponent takes its object in the ablative?",
      choices: ["sequor", "ūtor", "hortor", "cōnor"],
      answer: 1,
      explanation: "Ūtor, fruor, fungor, potior, and vēscor take the ablative.",
    },
    {
      prompt: "How is Ācriter pugnātum est best translated?",
      choices: [
        "He was fiercely fought",
        "There was fierce fighting",
        "The fight is fierce",
        "They will fight fiercely",
      ],
      answer: 1,
      explanation: "An impersonal passive of an intransitive verb.",
    },
    {
      prompt: "In Ovid's line mūtātās dīcere fōrmās, what is mūtātās?",
      choices: [
        "A present infinitive",
        "A perfect passive participle agreeing with fōrmās",
        "A deponent verb",
        "A noun in the genitive",
      ],
      answer: 1,
      explanation: "“Forms that have been changed.”",
    },
  ],
  reflection:
    "Caesar narrates his own campaigns in the third person and often in the passive; Genesis and John use the passive to describe creation and becoming. In 500–800 words, explain how the passive voice works in Latin, and argue, with examples from this lesson, how a writer's choice of voice shapes what a reader understands and believes.",
};
