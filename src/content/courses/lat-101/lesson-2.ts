import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Nouns, Cases, and the First Two Declensions",
  summary:
    "What a case is and what each of the six cases does; the first declension and its feminine nouns; the second declension, masculine and neuter; the verb esse, to be, and the predicate nominative; adjectives of the first and second declensions and the rule of agreement; and a first passage of connected Latin.",
  pages: [
    {
      title: "The Six Cases",
      body: `## What is a case?

A Latin noun changes its ending to show its **function** in the sentence: whether it is the subject, the object, the possessor, the indirect object, and so on. Each of these forms is called a **case** (from Latin *cāsus*, "a falling," a translation of the Greek *ptōsis*, because the ancient grammarians imagined the other forms as "falling away" from the nominative). Latin has **six** cases in common use. Each has a set of typical functions, which you should learn now, though we will add more uses as the course goes on.

## Nominative

The **nominative** (from *nōmināre*, "to name") is the case of the **subject** of a verb, and of a **predicate noun** after the verb "to be."

> *Puella cantat.* "The girl sings." (subject)
> *Iūlia est puella.* "Julia is a girl." (predicate nominative)

## Genitive

The **genitive** (from *genus*, "origin, kind") most often shows **possession** or **relationship**, and is usually translated with "of" or with the English possessive *'s*.

> *rosa puellae* "the rose of the girl," "the girl's rose"
> *amor patriae* "love of the fatherland"

The genitive is the second form given in the dictionary, and it is the most important form to know, because it shows you the noun's **declension** and its **base**, the part to which the other endings are added.

## Dative

The **dative** (from *dare*, "to give") is the case of the **indirect object**, the person or thing to or for whom something is given, said, or done. It is usually translated "to" or "for."

> *Rosam puellae dō.* "I give a rose to the girl." "I give the girl a rose."

## Accusative

The **accusative** (from *accūsāre*, "to accuse," a mistranslation by Roman grammarians of a Greek term meaning "the case of what is caused") is the case of the **direct object** of a verb, and of the object of certain prepositions, especially those expressing motion toward (*ad*, "to, toward"; *in*, "into").

> *Puella rosam amat.* "The girl loves the rose." (direct object)
> *ad portam* "to the gate"

## Ablative

The **ablative** (from *ablātus*, "carried away") is the most various of the Latin cases. It combines the functions of three older Indo-European cases: the ablative proper (separation, "from"), the instrumental ("with, by means of"), and the locative ("in, at"). It is used with many prepositions, especially those expressing separation (*ab*, "from, by"; *ex*, "out of"; *dē*, "down from, about") or place where (*in*, "in, on"; *cum*, "with"), and it is used without a preposition to express **means** or **instrument**, **manner**, and **time when**. It is usually translated "by," "with," "from," "in," or "on."

> *cum puellā* "with the girl"
> *in viā* "in the road"
> *ex silvā* "out of the forest"
> *pecūniā* "with money," "by means of money"

## Vocative

The **vocative** (from *vocāre*, "to call") is used in **direct address**, when calling or speaking to someone.

> *Valē, Iūlia!* "Farewell, Julia!"
> *Et tū, Brūte?* "You too, Brutus?" (Shakespeare's version of Caesar's last words; *Brūte* is the vocative of *Brūtus*.)

In most nouns, the vocative is identical to the nominative, so you will need to learn separate forms only in a few cases.

## Locative

A seventh case, the **locative**, survives in a few words, mainly names of cities and small islands and the words for "home" (*domī*, "at home") and "ground" (*humī*, "on the ground"). We will meet it in LAT 102.

## Cases at a glance

| Case | Main function | Typical English |
|---|---|---|
| Nominative | subject; predicate noun | (no preposition) |
| Genitive | possession, relation | of, 's |
| Dative | indirect object | to, for |
| Accusative | direct object; motion toward | (no preposition); to, into |
| Ablative | means, separation, place, time | by, with, from, in, on |
| Vocative | direct address | O … ! |

## Thinking in cases

The case system is the heart of Latin grammar. At first, you will need to identify each noun's case consciously and translate it with the appropriate English preposition or word order. With practice, you will begin to feel the cases directly: to see *puellae* and expect "of the girl" or "to the girl" or "the girls," and to let the context decide. This is the essential skill of reading Latin, and it will take time. Be patient with yourself.

## Ambiguity

Because Latin uses the same ending for several cases (as you will see in the tables), many forms are ambiguous in isolation. *Puellae* can be genitive singular, dative singular, or nominative plural. Context, word order, and the verb usually make the meaning clear. When a form is ambiguous, consider all its possibilities, then choose the one that makes sense in the sentence.

## Cases in English

English still has traces of cases in its pronouns. *I*, *he*, *she*, *we*, *they*, and *who* are **nominative**, used as subjects; *me*, *him*, *her*, *us*, *them*, and *whom* are **objective** (combining the functions of the Latin accusative and dative); *my*, *his*, *her*, *our*, *their*, and *whose* are **possessive** (like the genitive). That is why we say "He sees her" but "She sees him." The old dative also survives in phrases like "Give *him* the book," where *him* is an indirect object. When English speakers hesitate between "who" and "whom," they are struggling with the last remnants of a case system much like Latin's.

## Prepositions and cases

Many Latin prepositions govern a particular case. The most common take either the **accusative** or the **ablative**. A useful rule of thumb: prepositions of **motion toward** take the accusative (*ad*, "to"; *in*, "into"; *per*, "through"; *post*, "after, behind"); prepositions of **rest** or **separation** take the ablative (*in*, "in, on"; *ab*, "from"; *ex*, "out of"; *cum*, "with"; *sine*, "without"; *dē*, "about"). Note that *in* takes either case, with a difference in meaning: *in urbem*, "into the city," but *in urbe*, "in the city."

> **Pause and consider.** English uses prepositions and word order where Latin uses cases. Translate "the friend's gift to the girl" into a list of the cases you would need in Latin.`,
    },
    {
      title: "The First Declension",
      body: `## Five declensions

Latin nouns fall into **five declensions**, groups that share a set of case endings. You identify a noun's declension from its **genitive singular** ending:

| Declension | Genitive singular | Example |
|---|---|---|
| First | -ae | *puella, puellae* |
| Second | -ī | *amīcus, amīcī* |
| Third | -is | *rēx, rēgis* |
| Fourth | -ūs | *manus, manūs* |
| Fifth | -eī (-ēī) | *rēs, reī* |

That is why vocabulary lists always give the genitive. This lesson covers the first two declensions; the third comes in lesson 3, and the fourth and fifth in lesson 5.

## The base

To decline a noun, find its **base** by dropping the genitive singular ending. *Puella, puellae*: drop *-ae*, and the base is *puell-*. Then add the case endings.

## First-declension endings

| Case | Singular | Plural |
|---|---|---|
| Nominative | -a | -ae |
| Genitive | -ae | -ārum |
| Dative | -ae | -īs |
| Accusative | -am | -ās |
| Ablative | -ā | -īs |
| Vocative | -a | -ae |

## Puella, puellae, f., girl

| Case | Singular | Plural |
|---|---|---|
| Nom. | *puella*, the girl | *puellae*, the girls |
| Gen. | *puellae*, of the girl | *puellārum*, of the girls |
| Dat. | *puellae*, to/for the girl | *puellīs*, to/for the girls |
| Acc. | *puellam*, the girl | *puellās*, the girls |
| Abl. | *puellā*, by/with/from the girl | *puellīs*, by/with/from the girls |
| Voc. | *puella*, O girl | *puellae*, O girls |

Say it aloud: *puella, puellae, puellae, puellam, puellā, puella; puellae, puellārum, puellīs, puellās, puellīs, puellae*. Note the long *ā* of the ablative singular, which distinguishes it from the nominative.

## Gender

Most first-declension nouns are **feminine**. A few that refer to men, mostly occupations, are masculine: *agricola*, "farmer"; *nauta*, "sailor"; *poēta*, "poet"; *pīrāta*, "pirate." Their endings are still first declension, but any adjective describing them will be masculine.

## Vocabulary: first declension

| Latin | Meaning | Derivatives |
|---|---|---|
| *fāma, -ae*, f. | rumor, report, fame | famous, infamy |
| *fōrma, -ae*, f. | form, shape, beauty | form, formal |
| *fortūna, -ae*, f. | fortune, luck | fortunate |
| *īra, -ae*, f. | anger | ire, irate |
| *nauta, -ae*, m. | sailor | nautical |
| *patria, -ae*, f. | fatherland, native land | patriot |
| *pecūnia, -ae*, f. | money | pecuniary |
| *philosophia, -ae*, f. | philosophy | |
| *poena, -ae*, f. | penalty, punishment | penal, penalty |
| *poēta, -ae*, m. | poet | poet |
| *porta, -ae*, f. | gate, door | portal |
| *puella, -ae*, f. | girl | |
| *rosa, -ae*, f. | rose | |
| *sententia, -ae*, f. | feeling, thought, opinion, sentence | sentence, sentiment |
| *vīta, -ae*, f. | life | vital |

## Sentences with the first declension

> 1. *Puella rosam poētae dat.* "The girl gives the rose to the poet." (Here *poētae* is dative.)
> 2. *Fortūna puellās nōn amat.* "Fortune does not love the girls."
> 3. *Sine pecūniā vīta nōn valet.* (*sine* + ablative, "without") "Without money, life is not strong."
> 4. *Īram nautārum vidēmus.* "We see the anger of the sailors."
> 5. *Poētae fāmam vītae dant.* "Poets give fame to life." (Or: "The poet's fame gives life"? Look at the endings: *poētae* is nominative plural here, since the verb *dant* is plural.)

Sentence 5 shows how you must use the verb to decide among ambiguous forms. *Poētae* could be genitive or dative singular, or nominative plural; the plural verb *dant* requires a plural subject, so *poētae* must be nominative plural.

## Fāma

The word ***fāma*** is worth pausing over. It means "what people say": a report, a rumor, reputation, good or bad. In Book 4 of Virgil's *Aeneid*, **Fāma** is personified as a monstrous goddess, swift and growing as she goes, with as many eyes, tongues, and ears as she has feathers, who flies by night spreading truth and lies about Dido and Aeneas: *Fāma, malum quā nōn aliud vēlōcius ūllum*, "Rumor, an evil than which no other is swifter." Our word *fame* has narrowed the meaning to good reputation; *infamy* keeps the bad.

## Sententia

***Sententia*** is another rich word: a feeling, a judgment, an opinion, a vote in the Senate, and also a pithy saying or maxim. Roman writers loved *sententiae*, short, memorable formulations of a general truth, and many survive as proverbs. The English word "sentence" originally meant a judgment or opinion (as in a judge's "sentence") before it came to mean a grammatical unit.

## Patria

***Patria***, "fatherland," comes from *pater*, "father," and refers to one's native land, the land of one's fathers. The patriotic line *Dulce et decōrum est prō patriā morī*, "It is sweet and fitting to die for one's country," comes from Horace (*Odes* 3.2). The English poet **Wilfred Owen**, who was killed in the last week of the First World War, ended his poem "Dulce et Decorum Est" by calling it "the old Lie." We will be able to read Horace's line in full by the end of this lesson.

## Learning the endings

Many students find it helps to learn the endings by themselves first, as a chant: *-a, -ae, -ae, -am, -ā, -a; -ae, -ārum, -īs, -ās, -īs, -ae*. Then attach them to a base. The order of cases used in this course (nominative, genitive, dative, accusative, ablative, vocative) is the traditional order of American and British textbooks; some European grammars use a different order. Either is fine, as long as you are consistent. Practice by declining a new noun every day.

> **Pause and consider.** The verb *dant* tells you that *poētae* in sentence 5 is plural. Why is the verb so often the key to a Latin sentence?`,
    },
    {
      title: "The Second Declension: Masculines",
      body: `## Genitive in -ī

The **second declension** includes nouns whose genitive singular ends in ***-ī***. Most second-declension nouns are either **masculine**, with a nominative singular in *-us* (or *-er* or *-ir*), or **neuter**, with a nominative singular in *-um*. We begin with the masculines.

## Amīcus, amīcī, m., friend

| Case | Singular | Plural |
|---|---|---|
| Nom. | *amīcus* | *amīcī* |
| Gen. | *amīcī* | *amīcōrum* |
| Dat. | *amīcō* | *amīcīs* |
| Acc. | *amīcum* | *amīcōs* |
| Abl. | *amīcō* | *amīcīs* |
| Voc. | ***amīce*** | *amīcī* |

The base is *amīc-* (from the genitive *amīcī*). Note:

- The **vocative singular** of nouns in *-us* ends in ***-e***: *amīce*, "O friend"; *Brūte*, "O Brutus"; *Marce*, "O Marcus." This is the main place where the vocative differs from the nominative.
- Nouns ending in *-ius* (and the adjective *meus*, "my") have a vocative in *-ī*: *fīlius*, "son," vocative *fīlī*; *Vergilius*, vocative *Vergilī*.
- The dative and ablative singular are identical (*amīcō*), as are the dative and ablative plural (*amīcīs*). Context tells you which is meant.

## Nouns in -er and -ir

Some second-declension masculines have a nominative singular in *-er* or *-ir*. For these, the genitive is especially important, because it shows whether the *e* is kept in the base:

- ***puer, puerī***, m., boy: base *puer-* (the *e* is kept)
- ***ager, agrī***, m., field: base *agr-* (the *e* drops out)
- ***vir, virī***, m., man: base *vir-*

| Case | *puer*, boy | *ager*, field | *vir*, man |
|---|---|---|---|
| Nom. sg. | *puer* | *ager* | *vir* |
| Gen. sg. | *puerī* | *agrī* | *virī* |
| Dat. sg. | *puerō* | *agrō* | *virō* |
| Acc. sg. | *puerum* | *agrum* | *virum* |
| Abl. sg. | *puerō* | *agrō* | *virō* |
| Nom. pl. | *puerī* | *agrī* | *virī* |
| Gen. pl. | *puerōrum* | *agrōrum* | *virōrum* |
| Dat./Abl. pl. | *puerīs* | *agrīs* | *virīs* |
| Acc. pl. | *puerōs* | *agrōs* | *virōs* |

For these nouns, the vocative singular is the same as the nominative: *puer*, "O boy."

## English derivatives

The bases matter for English derivatives too: *puerile* (from *puer-*), *agriculture* and *agrarian* (from *agr-*), *virile* and *virtue* (from *vir-*; *virtūs* originally meant "manliness, courage," the quality of a *vir*).

## Vocabulary: second-declension masculines

| Latin | Meaning | Derivatives |
|---|---|---|
| *ager, agrī*, m. | field, farm | agriculture |
| *amīcus, -ī*, m. | friend | amicable |
| *animus, -ī*, m. | soul, spirit, mind; (pl.) courage | animosity |
| *deus, -ī*, m. | god | deity |
| *dominus, -ī*, m. | master, lord | dominate |
| *fīlius, -ī*, m. | son | filial |
| *liber, librī*, m. | book | library |
| *numerus, -ī*, m. | number | numeral |
| *oculus, -ī*, m. | eye | ocular |
| *populus, -ī*, m. | people, nation | popular |
| *puer, puerī*, m. | boy; (pl.) children | puerile |
| *Rōmānus, -ī*, m. | a Roman | |
| *servus, -ī*, m. | slave | servile |
| *vir, virī*, m. | man, hero | virile |

Note that ***deus***, "god," has some irregular plural forms: nominative *dī* or *deī*, dative and ablative *dīs* or *deīs*.

## Sentences

> 1. *Fīlius agricolae agrum amat.* "The farmer's son loves the field."
> 2. *Virī librōs puerīs dant.* "The men give books to the boys."
> 3. *Sine amīcīs vīta est nihil.* "Without friends, life is nothing."
> 4. *Ō dominī, servōs nōn laudātis.* "O masters, you do not praise the slaves."
> 5. *Populus Rōmānus deōs saepe laudat.* "The Roman people often praise the gods."

## Slavery and the Latin language

The vocabulary of Latin reminds us constantly that Roman society was built on **slavery**. *Servus*, "slave," and *dominus*, "master," are among the most common words in Latin literature. Millions of people were enslaved in the Roman world: prisoners of war, children of enslaved mothers, people kidnapped by pirates or sold into slavery for debt. They worked in fields and mines, in households and workshops, as tutors, secretaries, and doctors. Many Latin writers had enslaved secretaries; Cicero's freedman **Tiro**, who invented a system of shorthand and edited his master's letters after his death, is one of the few enslaved people whose name and work we know. When you learn *servus* and *dominus*, remember the human reality they name. The English words *servile* and *serf* come from *servus*; *domineering* and *dominion* from *dominus*.

## Animus

***Animus*** is one of the richest words in Latin: it means "mind," "spirit," "soul," "heart," "courage," "intention," "temper," and, in the plural, "courage" or "pride." It is related to *anima*, "breath, life, soul," from which we get *animal* and *animate*. The phrase *animō aequō*, "with a level mind," means "calmly," the ideal of the Stoic philosophers; *magnō animō* means "with great courage." Our word *animosity* preserves the sense of a hostile spirit.

## Second-declension feminines

A few second-declension nouns in *-us* are feminine: names of trees (*pīnus*, "pine"; *fāgus*, "beech"), many names of cities, countries, and islands (*Corinthus*, *Aegyptus*), and a few others (*humus*, "ground"). Any adjective describing them is feminine: *alta pīnus*, "a tall pine." They are uncommon, but watch for them.

## Practice

Decline *dominus*, *liber*, and *vir* aloud, then write them out. Then give the vocative singular of *Marcus*, *fīlius*, *puer*, and *Vergilius*, and check your answers against the rules above.

> **Pause and consider.** *Virtūs* first meant the quality of a *vir*, a man: courage. What does it mean that the Latin word for "virtue" began as "manliness," and how has the English word changed?`,
    },
    {
      title: "The Second Declension: Neuters",
      body: `## Neuter nouns

The second declension also includes **neuter** nouns, whose nominative singular ends in ***-um***. Neuter means "neither" (*ne-uter*, "neither one nor the other"), neither masculine nor feminine. Their endings are the same as those of the masculines except in the nominative, accusative, and vocative.

## Dōnum, dōnī, n., gift

| Case | Singular | Plural |
|---|---|---|
| Nom. | *dōnum* | *dōna* |
| Gen. | *dōnī* | *dōnōrum* |
| Dat. | *dōnō* | *dōnīs* |
| Acc. | *dōnum* | *dōna* |
| Abl. | *dōnō* | *dōnīs* |
| Voc. | *dōnum* | *dōna* |

## The neuter rules

Two rules apply to **all** neuter nouns, adjectives, and pronouns, in every declension. Learn them now, and they will save you much trouble:

1. The **nominative, accusative, and vocative** are always the **same** as each other, in both singular and plural.
2. The **nominative, accusative, and vocative plural** always end in short ***-a***.

These rules hold throughout Latin, with almost no exceptions. They also mean that you must use the context to decide whether a neuter noun is a subject or an object. In *Bellum dōna nōn dat*, "War does not give gifts," *bellum* and *dōna* could each be nominative or accusative; but since the verb *dat* is singular, its subject must be singular, *bellum*.

## Vocabulary: second-declension neuters

| Latin | Meaning | Derivatives |
|---|---|---|
| *bāsium, -ī*, n. | kiss | |
| *bellum, -ī*, n. | war | bellicose, belligerent |
| *cōnsilium, -ī*, n. | plan, purpose, counsel, advice | counsel |
| *dōnum, -ī*, n. | gift | donation |
| *exitium, -ī*, n. | destruction, ruin | exit (indirectly) |
| *ōtium, -ī*, n. | leisure, peace | otiose |
| *officium, -ī*, n. | duty, service | office |
| *perīculum, -ī*, n. | danger, risk | peril |
| *remedium, -ī*, n. | cure, remedy | remedy |
| *studium, -ī*, n. | eagerness, zeal, pursuit, study | study, student |
| *verbum, -ī*, n. | word | verb, verbal |

## Ōtium and negōtium

The word ***ōtium***, "leisure," had great importance for the Romans. *Ōtium* was the free time of a gentleman, devoted to rest, reading, writing, and philosophy, away from public affairs. Its opposite was ***negōtium*** (*nec* + *ōtium*, "not-leisure"), "business," the busy life of politics, law, and commerce, from which we get *negotiate*. Cicero wrote much of his philosophy during periods of enforced *ōtium*, when he was excluded from politics; he quoted the saying of the elder Scipio that he was "never less at leisure than when at leisure."

## Officium

***Officium*** means "duty," "obligation," "service," and "kindness." Cicero's last philosophical work, ***Dē Officiīs*** ("On Duties," 44 BCE), written for his son Marcus in the months after Caesar's assassination, became one of the most influential books of moral philosophy in Western history; it was among the first classical texts printed (1465), and a guide for statesmen from the Middle Ages to the American founders. The English *office* comes from it, originally meaning a duty or a position of service.

## Studium

***Studium*** means "eagerness, zeal, enthusiasm," and then "the pursuit" of something with eagerness, and finally "study." The English *student* comes from the related verb *studēre*, "to be eager for," "to devote oneself to": a student is one who is eager. The phrase *sine īrā et studiō*, "without anger and partisanship," is the historian **Tacitus**'s promise of impartiality at the opening of his *Annals* (c. 116 CE).

## Sentences

> 1. *Bellum est perīculum patriae.* "War is a danger to the fatherland."
> 2. *Puellae dōna poētīs dant.* "The girls give gifts to the poets."
> 3. *Verba sapientium sunt dōna.* (*sapientium*, "of the wise") "The words of the wise are gifts."
> 4. *Officium nostrum est patriam servāre.* (*nostrum*, "our") "Our duty is to save the fatherland."
> 5. *Ōtium sine litterīs mors est.* (*litterīs*, "literature"; *mors*, "death") "Leisure without literature is death." (Seneca, *Letters* 82)

## Bāsium and Catullus

The word ***bāsium***, "kiss," is rare in Latin before the poet **Catullus** (c. 84–54 BCE), who may have introduced it from the Celtic speech of his native northern Italy. It became the ancestor of Italian *bacio*, Spanish *beso*, and French *baiser*. Catullus's most famous poem, number 5, addressed to his beloved "Lesbia," asks for a thousand kisses:

> *Dā mī bāsia mīlle, deinde centum,*
> *dein mīlle altera, dein secunda centum …*

"Give me a thousand kisses, then a hundred, then another thousand, then a second hundred …" Notice the imperative *dā* (from *dō, dare*), the neuter plural accusative *bāsia*, and *mī*, a short form of *mihi*, "to me" (dative). By the end of this course, you will be able to read the whole poem.

## The neuter plural as a collective

Latin sometimes uses a neuter plural adjective or noun to refer to "things" in general: *multa*, "many things"; *omnia*, "all things, everything"; *bona*, "good things, goods." The Roman poet Virgil wrote, in the *Eclogues*, *omnia vincit Amor*, "Love conquers all things." This use of the neuter plural is very common, and you should always be ready to supply "things" when you see a neuter plural adjective standing alone.

## Locating the neuters

Neuter nouns are common in abstract and collective ideas: *bellum*, "war"; *cōnsilium*, "plan"; *officium*, "duty"; *studium*, "zeal." Many neuters in *-ium* gave English words in *-ium* or *-y*: *auditorium*, *gymnasium*, *colloquium*, *study*, *remedy*. When you meet an unfamiliar Latin word in *-um*, suspect a neuter, and check its plural in *-a*: the Latin plural survives in English *data* (from *datum*, "a thing given"), *media*, *curricula*, *memoranda*, and *addenda*.

> **Pause and consider.** *Negōtium* is "not-leisure." What does it say about Roman values that business was defined as the absence of leisure?`,
    },
    {
      title: "Sum, Esse: To Be",
      body: `## The most irregular verb

The verb ***sum, esse***, "to be," is the most common verb in Latin, and, as in English and most other languages, it is **irregular**: its forms do not follow the patterns of the four conjugations. You must memorize them.

## Present tense of sum

| | Singular | Plural |
|---|---|---|
| 1 | *sum*, I am | *sumus*, we are |
| 2 | *es*, you are | *estis*, you are |
| 3 | *est*, he/she/it is; there is | *sunt*, they are; there are |

Notice that the personal endings are the familiar ones (*-m, -s, -t, -mus, -tis, -nt*), attached to an irregular stem (*su-*, *e-*). The present infinitive is ***esse***, "to be."

## Imperfect and future of sum

We will learn the imperfect and future tenses of regular verbs in lesson 3, but the forms of *sum* are so common that you should learn them now:

| | Imperfect (was) | Future (will be) |
|---|---|---|
| 1 sg. | *eram*, I was | *erō*, I shall be |
| 2 sg. | *erās* | *eris* |
| 3 sg. | *erat* | *erit* |
| 1 pl. | *erāmus* | *erimus* |
| 2 pl. | *erātis* | *eritis* |
| 3 pl. | *erant* | *erunt* |

## The predicate nominative

With the verb *esse*, the noun or adjective that describes or identifies the subject is in the **nominative**, not the accusative, because it refers to the same person or thing as the subject. This is called the **predicate nominative**.

> *Cicerō est cōnsul.* "Cicero is consul."
> *Vīta est brevis.* "Life is short."
> *Amīcī sumus.* "We are friends."

This is why careful English speakers once said "It is I" rather than "It is me": the rule comes from Latin grammar. (Modern English usage generally accepts "It's me.")

## Est and sunt: "there is," "there are"

When *est* or *sunt* comes at the beginning of a sentence, it often means "there is" or "there are":

> *Est in agrō puer.* "There is a boy in the field."
> *Sunt lacrimae rērum.* "There are tears of (for) things." (Virgil, *Aeneid* 1.462: Aeneas, seeing pictures of the Trojan War in Carthage, weeps that even here, there are tears for human suffering.)

## Possum: to be able

The verb ***possum, posse***, "to be able, can," is a compound of *pot-* (from *potis*, "able") and *sum*. Where *pot-* comes before a form of *sum* beginning with *s*, the *t* becomes *s*: *pos-sum*. Before *e*, it stays *t*: *pot-es*.

| | Singular | Plural |
|---|---|---|
| 1 | *possum*, I can | *possumus*, we can |
| 2 | *potes*, you can | *potestis*, you can |
| 3 | *potest*, he/she/it can | *possunt*, they can |

*Possum* is usually followed by a **complementary infinitive**, an infinitive that completes its meaning: *Vidēre possum*, "I can see"; *Nōn possumus errāre*, "We cannot err." The same construction is used with *dēbeō*, "I ought": *Laborāre dēbēs*, "You ought to work."

The imperfect and future of *possum* are formed in the same way: *poteram*, "I was able, I could"; *poterō*, "I shall be able."

## Sentences

> 1. *Ubi est liber meus?* (*ubi*, "where") "Where is my book?"
> 2. *Poēta nōn es, sed amīcus es.* "You are not a poet, but you are a friend."
> 3. *Erant multī virī in agrīs.* (*multī*, "many") "There were many men in the fields."
> 4. *Sine pecūniā erimus miserī.* (*miserī*, "wretched") "Without money we shall be wretched."
> 5. *Bellum vidēre nōn possum.* "I cannot see the war."
> 6. *Dum spīrō, spērō.* (*dum*, "while"; *spīrō*, "I breathe"; *spērō*, "I hope") "While I breathe, I hope." (The motto of the state of South Carolina.)

## Sum and existence

The verb *esse* also expresses **existence**: *Deus est*, "God exists" or "There is a God." The philosophical noun *essentia*, "essence," was coined from *esse* by Roman writers to translate the Greek *ousia*, "being." The Latin present participle *ēns*, "being," invented by medieval philosophers, gives us *entity*. Much of the vocabulary of Western philosophy was created by Romans and medieval scholars translating Greek ideas into Latin, and shaping new words for them.

## A note on the verb "to be" across languages

Many languages have an irregular verb "to be," and the irregularity often comes from the fact that its forms were built from several different ancient roots. English *am*, *is*, *are*, *was*, *were*, and *be* come from at least three different roots; Latin *sum*, *est*, and *fuī* (the perfect, "I was") from two. Latin *est* and English *is* both descend from the same Indo-European root, \**es-*, which also gives Greek *esti* and Sanskrit *asti*. The fact that such a basic word has kept its shape for thousands of years, across so many languages, shows how deep the family relationship runs.

## The Roman motto

The motto of the Roman state, inscribed on buildings, coins, and military standards, was ***SPQR***: ***Senātus Populusque Rōmānus***, "the Senate and the Roman People." The *-que* attached to *Populus* means "and" (it is an **enclitic**, a word that attaches to the end of another word). *Senātus* is a fourth-declension noun, and *Populus* and *Rōmānus* second-declension nouns and adjectives you now know. SPQR is still the emblem of the city of Rome, stamped on its manhole covers and buses.

## Sum in compounds

Several common verbs are compounds of *sum*: *absum*, "be away, be absent" (*ab* + *sum*); *adsum*, "be present, be near" (*ad* + *sum*), which survives in the roll call answer "adsum," "present"; *dēsum*, "be lacking"; *praesum*, "be in charge of" (whence *president*, "one who sits in front"); and *possum*, which we have learned. Their forms follow *sum* exactly: *absum, abes, abest*; *adsum, ades, adest*.

> **Pause and consider.** "It is I" follows a Latin rule; "It's me" follows English instinct. Should grammar rules borrowed from Latin govern English? Why or why not?`,
    },
    {
      title: "Adjectives and Agreement",
      body: `## Adjectives of the first and second declensions

**Adjectives** describe nouns. In Latin, an adjective must **agree** with the noun it modifies in **gender**, **number**, and **case**. To make this possible, Latin adjectives have masculine, feminine, and neuter forms. The most common group, called **first and second declension adjectives**, use second-declension endings for the masculine and neuter, and first-declension endings for the feminine.

Dictionaries list them by their three nominative singular forms: ***magnus, magna, magnum***, "great, large," often abbreviated *magnus, -a, -um*.

## Magnus, -a, -um

| Case | Masc. sg. | Fem. sg. | Neut. sg. | Masc. pl. | Fem. pl. | Neut. pl. |
|---|---|---|---|---|---|---|
| Nom. | *magnus* | *magna* | *magnum* | *magnī* | *magnae* | *magna* |
| Gen. | *magnī* | *magnae* | *magnī* | *magnōrum* | *magnārum* | *magnōrum* |
| Dat. | *magnō* | *magnae* | *magnō* | *magnīs* | *magnīs* | *magnīs* |
| Acc. | *magnum* | *magnam* | *magnum* | *magnōs* | *magnās* | *magna* |
| Abl. | *magnō* | *magnā* | *magnō* | *magnīs* | *magnīs* | *magnīs* |
| Voc. | *magne* | *magna* | *magnum* | *magnī* | *magnae* | *magna* |

## Adjectives in -er

Some adjectives have a masculine nominative in *-er*, like *puer* and *ager*. As with those nouns, the feminine form shows whether the *e* is kept:

- ***līber, lībera, līberum***, "free": base *līber-*
- ***pulcher, pulchra, pulchrum***, "beautiful": base *pulchr-*
- ***noster, nostra, nostrum***, "our": base *nostr-*
- ***miser, misera, miserum***, "wretched": base *miser-*

## Agreement

Agreement means that the adjective takes the **same gender, number, and case** as its noun. It does **not** mean that the adjective must have the same **ending**. When a noun and adjective belong to different declensions, their endings may look different:

> *poēta magnus* "a great poet" (*poēta* is first-declension, but masculine, so the adjective is masculine)
> *nauta bonus* "a good sailor"
> *agricolae miserī* "the wretched farmers"

This is an important point. Do not match endings mechanically; match gender, number, and case.

## Position of adjectives

In Latin prose, adjectives usually **follow** their nouns: *vir bonus*, "a good man"; *rosa pulchra*, "a beautiful rose." But adjectives of **quantity** and **size**, and adjectives used for emphasis, often **precede**: *multī virī*, "many men"; *magna perīcula*, "great dangers." In poetry, adjectives are often separated from their nouns, sometimes by many words, and you must use the endings to connect them.

## Adjectives as nouns

Latin adjectives are often used alone, as nouns, with "man," "woman," "thing," or "people" understood. This is called the **substantive** use:

> *bonī* "good men," "the good"
> *bona* "good things," "goods"
> *multī* "many people"
> *multa* "many things"
> *Rōmānī* "the Romans"
> *Fortūna fortēs adiuvat.* "Fortune helps the brave." (*fortēs* is a third-declension adjective used as a noun, "brave people.")

## Vocabulary: adjectives

| Latin | Meaning | Derivatives |
|---|---|---|
| *bonus, -a, -um* | good | bonus, bonanza |
| *bellus, -a, -um* | pretty, handsome, charming | belle |
| *beātus, -a, -um* | happy, blessed | beatitude |
| *humānus, -a, -um* | human, humane, kind | human |
| *līber, -era, -erum* | free | liberty |
| *magnus, -a, -um* | large, great | magnitude |
| *malus, -a, -um* | bad, wicked, evil | malice |
| *meus, -a, -um* | my | |
| *miser, -era, -erum* | wretched, miserable | misery |
| *multus, -a, -um* | much, many | multitude |
| *noster, -tra, -trum* | our | |
| *parvus, -a, -um* | small, little | |
| *pulcher, -chra, -chrum* | beautiful, handsome | pulchritude |
| *Rōmānus, -a, -um* | Roman | |
| *tuus, -a, -um* | your (singular) | |
| *vērus, -a, -um* | true, real | verity, verify |

## Sentences

> 1. *Vīta nostra est brevis.* (*brevis*, "short," third declension) "Our life is short."
> 2. *Puellae bellae rosās pulchrās amant.* "The pretty girls love beautiful roses."
> 3. *Multī virī sunt līberī, sed multī sunt servī.* "Many men are free, but many are slaves."
> 4. *Poēta magnus multa verba pulchra dat.* "A great poet gives many beautiful words."
> 5. *Bonōs amāmus, malōs nōn amāmus.* "We love the good, we do not love the wicked."
> 6. *Patria nostra est magna et pulchra.* "Our fatherland is great and beautiful."

## Dulce et decōrum est

Now you can read Horace's famous line in full:

> *Dulce et decōrum est prō patriā morī.*

"It is sweet and fitting to die for one's country." *Dulce* (sweet) and *decōrum* (fitting) are neuter adjectives used as predicates, agreeing with the infinitive *morī*, "to die," which acts as the subject; infinitives used as nouns are neuter. *Prō patriā* means "for the fatherland," with *prō* taking the ablative. The line comes from a poem (*Odes* 3.2) in praise of the military virtues of young Romans. It has been inscribed on war memorials, and also, in Wilfred Owen's poem, called "the old Lie." The same words can be read as patriotism or as propaganda.

## Agreement in English

English adjectives do not change their form to agree with nouns: "a good man," "good women," "good things." But some English determiners still show number: *this* book, *these* books; *that* man, *those* men. Latin carries this principle through every adjective, which allows it to separate adjectives from their nouns freely and still be understood.

## Possessive adjectives

Latin possessives are adjectives, and agree with the thing possessed, not the possessor: *meus*, "my"; *tuus*, "your" (singular); *noster*, "our"; *vester*, "your" (plural). *Liber meus*, "my book"; *rosa mea*, "my rose"; *dōna mea*, "my gifts." A man and a woman both say *liber meus*, since *liber* is masculine. To say "his," "her," or "their," Latin uses a pronoun in the genitive or a reflexive possessive, *suus*, which we will learn in lesson 4.

> **Pause and consider.** In *poēta magnus*, the noun ends in *-a* and the adjective in *-us*, yet they agree. What does "agreement" really mean, then?`,
    },
    {
      title: "Reading Connected Latin",
      body: `## A passage about Italy

You now know enough grammar to read a short passage of connected Latin. Read it aloud first, then work through it sentence by sentence, identifying the case of each noun and the person and number of each verb. Unfamiliar words are glossed below.

> *Italia est patria nostra. Patria nostra est magna et pulchra. In Italiā sunt multī agrī et multae silvae. Agricolae in agrīs labōrant; nautae in undīs nāvigant. Rōma est in Italiā. Rōma est magna. Populus Rōmānus deōs laudat et templa deīs aedificat. Poētae Rōmānī fāmam Rōmae cantant. Puerī et puellae Rōmānae in viīs ambulant et fābulās dē deīs et virīs magnīs audiunt.*

**Glossary**: *silva, -ae*, f., forest; *labōrō* (1), work; *unda, -ae*, f., wave; *nāvigō* (1), sail; *templum, -ī*, n., temple; *aedificō* (1), build; *cantō* (1), sing (of); *via, -ae*, f., road, street; *ambulō* (1), walk; *fābula, -ae*, f., story; *dē* + abl., about, concerning; *audiunt*, they hear (fourth conjugation, lesson 3).

**Translation**: "Italy is our fatherland. Our fatherland is great and beautiful. In Italy there are many fields and many forests. Farmers work in the fields; sailors sail on the waves. Rome is in Italy. Rome is great. The Roman people praise the gods and build temples for the gods. Roman poets sing of the fame of Rome. Roman boys and girls walk in the streets and hear stories about the gods and great men."

## Analysis

Look at some of the forms:

- *In Italiā*: *in* + ablative, "in Italy," place where.
- *multī agrī*: masculine nominative plural, subject of *sunt*.
- *multae silvae*: feminine nominative plural.
- *in agrīs*: *in* + ablative plural.
- *in undīs*: "on the waves."
- *deōs*: accusative plural of *deus*, object of *laudat*.
- *templa*: neuter accusative plural, object of *aedificat*.
- *deīs*: dative plural, "for the gods."
- *fāmam Rōmae*: "the fame of Rome," *Rōmae* genitive.
- *Puerī et puellae Rōmānae*: the adjective *Rōmānae* agrees with the nearer noun, *puellae*; this is common when an adjective describes nouns of different genders.
- *dē deīs et virīs magnīs*: *dē* + ablative, "about the gods and great men."

## Ørberg's method

Hans Ørberg's *Familia Romana*, which we recommend alongside Wheelock, begins in a similar way, with simple sentences about the geography of the Roman Empire: *Rōma in Italiā est. Italia in Eurōpā est. Graecia in Eurōpā est. Italia et Graecia in Eurōpā sunt.* Ørberg's book, first published in 1955 and revised in 1990, teaches Latin through Latin, without translation: it uses pictures, maps, marginal notes, and the context of the story to make each new word and form clear. As you read it, you learn to understand Latin directly, without English in between. Many students find it a delightful complement to the more analytical method of Wheelock.

## Roman names

As you read, you will meet many Roman names. A Roman citizen man usually had three: a ***praenōmen*** (personal name), a ***nōmen*** (family or clan name), and a ***cognōmen*** (a further family name, often originally a nickname). **Gāius Iūlius Caesar**: Gaius was his personal name, Julius his clan (the *gēns Iūlia*), and Caesar his branch of the clan. **Mārcus Tullius Cicerō**: Marcus, of the Tullian clan, nicknamed *Cicerō*, "chickpea," perhaps for an ancestor's nose. There were only about a dozen common praenomina (Gaius, Marcus, Lucius, Publius, Quintus, Titus, and a few others), so most men were known by their nomen or cognomen.

Roman women usually had only one name, the feminine form of their father's nomen: Cicero's daughter was **Tullia**, and Julius Caesar's daughter was **Iūlia**. Sisters were distinguished by adding *Maior* (elder), *Minor* (younger), or numbers: *Tertia*, "the third."

## English from Latin: a game

Look at this English sentence and identify the Latin roots you know:

> "The amiable, studious student contemplated the magnitude of the popular vote in the multitude's fatherland, a pecuniary matter of vital importance."

You should find *amō* (amiable), *studium* (studious, student), *magnus* (magnitude), *populus* (popular), *vōx* (vote, via *vōtum*), *multus* (multitude), *pecūnia* (pecuniary), *vīta* (vital), and *patria* (in "fatherland," as a translation). English is full of Latin, and every lesson will make more of it transparent.

## Reviewing the endings

Before the next lesson, make sure you can write from memory:

- the six personal endings;
- the present tense of *laudō*, *moneō*, *sum*, and *possum*;
- the first-declension endings;
- the second-declension masculine and neuter endings;
- the forms of *magnus, -a, -um* and *pulcher, -chra, -chrum*.

Write them out, check them against the tables, and say them aloud until they come without effort. This work is the foundation of everything that follows.

## A reflection on learning

It is normal, at this stage, to feel overwhelmed by the number of forms. Remember that Roman children learned all of this by hearing it, and that generations of learners after them, who were no cleverer than you, learned it by patient repetition. Each form you master makes the next easier, because the patterns repeat. The second declension's endings, for instance, will reappear in pronouns and adjectives throughout the language. Little by little, the tables will become a language.

## The family in Latin

Ørberg's book centers on a Roman family, and the vocabulary of the family is a good place to start reading: *pater*, "father"; *māter*, "mother"; *fīlius*, "son"; *fīlia*, "daughter"; *frāter*, "brother"; *soror*, "sister"; *servus* and *ancilla*, "male and female slave"; *familia*, which in Latin means the whole **household**, including the slaves, not only the relatives. The Roman *familia* was ruled by the *pater familiās*, "father of the household," who in early Roman law had power of life and death over its members.

> **Pause and consider.** In the passage, *Rōmānae* agrees with *puellae*, the nearer of two nouns. What does this suggest about how Latin speakers thought about agreement?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. Declension

Decline in full, singular and plural, with English meanings:

> *patria, -ae*, f. — *servus, -ī*, m. — *perīculum, -ī*, n.

**Questions**

1. Which forms of each noun are identical, and how will you tell them apart in a sentence?
2. Which two rules apply to every neuter noun?

## 2. Agreement

Make each adjective agree with the noun, then translate:

> *(magnus) poēta; (pulcher) rosae; (bonus) dōna; (miser) agricolae (gen. sg.); (noster) amīcōs*

**Questions**

1. Why is it *poēta magnus*, not *poēta magna*?
2. Which forms of *agricolae* are possible before you add the adjective?

## 3. Sentences

Translate into English:

> 1. *Fīlius poētae librōs multōs habet.* (*habet*, "has") 2. *Sine amīcīs vīta nōn est beāta.* 3. *Dōna deōrum sunt magna.* 4. *Ō amīce, perīculum vidēre nōn possum.* 5. *Puellae bellae rosās virīs dant.* 6. *Sunt lacrimae rērum.*

**Questions**

1. Identify every dative and ablative, and explain its use.
2. In sentence 4, which word is vocative, and how do you know?

## 4. Real Latin

Translate, with the help of the notes in this lesson:

> *Dulce et decōrum est prō patriā morī.* (Horace) — *Ōtium sine litterīs mors est.* (Seneca) — *Senātus Populusque Rōmānus.* — *Dā mī bāsia mīlle.* (Catullus)

**Questions**

1. Identify the case and number of every noun.
2. Choose one line and explain, in two or three sentences, how its grammar shapes its meaning.

## Drawing the threads together

In a paragraph, explain how the case system lets a Latin writer arrange words for emphasis, using at least three sentences of your own from this lesson's vocabulary.`,
    },
  ],
  readings: [
    { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, rev. Richard A. LaFleur", publisher: "Harper Collins", year: "7th ed., 2011", note: "Read chapters 2–6 and do the Practice and Review sentences." },
    { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing / Hackett", year: "2003", note: "Read chapters 3–5 aloud." },
    { kind: "book", title: "38 Latin Stories", author: "Anne H. Groton and James M. May", publisher: "Bolchazy-Carducci", year: "5th ed., 1995", note: "Designed to accompany Wheelock; read stories 1–5." },
  ],
  media: [
    { kind: "book", title: "Allen and Greenough's New Latin Grammar", author: "J. H. Allen and J. B. Greenough", publisher: "Public domain (1903); many reprints", note: "See §§36–50 (first and second declensions) and §§109–113 (adjectives)." },
    { kind: "book", title: "English Grammar for Students of Latin", author: "Norma Goldman", publisher: "Olivia and Hill Press", year: "3rd ed., 2004", note: "Explains case, gender, and agreement for English speakers." },
  ],
  questions: [
    {
      prompt: "Which case is used for the direct object?",
      choices: ["Nominative", "Accusative", "Dative", "Genitive"],
      answer: 1,
      explanation: "Puella rosam amat: rosam is accusative.",
    },
    {
      prompt: "Which case is used for the indirect object?",
      choices: ["Ablative", "Dative", "Genitive", "Vocative"],
      answer: 1,
      explanation: "Rosam puellae dō: “I give a rose to the girl.”",
    },
    {
      prompt: "Why does a vocabulary list give the genitive singular?",
      choices: [
        "It is the most common form",
        "It shows the declension and the base to which endings are added",
        "It is the dictionary form",
        "It shows gender",
      ],
      answer: 1,
      explanation: "Ager, agrī shows that the base is agr-.",
    },
    {
      prompt: "What is the ablative singular of puella?",
      choices: ["puella", "puellā", "puellae", "puellam"],
      answer: 1,
      explanation: "The long ā distinguishes it from the nominative.",
    },
    {
      prompt: "What is the vocative singular of amīcus?",
      choices: ["amīcus", "amīce", "amīcī", "amīcō"],
      answer: 1,
      explanation: "Nouns in -us have a vocative in -e: Et tū, Brūte?",
    },
    {
      prompt: "What is true of all neuter nouns?",
      choices: [
        "Their genitive ends in -a",
        "Nominative and accusative are identical, and their plural ends in -a",
        "They have no plural",
        "They are always second declension",
      ],
      answer: 1,
      explanation: "Dōnum, dōna; bellum, bella.",
    },
    {
      prompt: "What case follows est in Cicerō est cōnsul?",
      choices: ["Accusative", "Nominative (predicate nominative)", "Dative", "Ablative"],
      answer: 1,
      explanation: "The predicate refers to the same person as the subject.",
    },
    {
      prompt: "Why is it poēta magnus and not poēta magna?",
      choices: [
        "Magna is wrong in all cases",
        "Poēta is masculine, so its adjective is masculine, even though the noun is first declension",
        "Adjectives always end in -us",
        "Poēta is plural",
      ],
      answer: 1,
      explanation: "Agreement is in gender, number, and case, not ending.",
    },
    {
      prompt: "What does SPQR stand for?",
      choices: [
        "Senate and Priests of Rome",
        "Senātus Populusque Rōmānus, the Senate and the Roman People",
        "Sum, Possum, Quaerō, Regō",
        "Salus Populi Quiritium Romanorum",
      ],
      answer: 1,
      explanation: "The -que attached to Populus means “and.”",
    },
    {
      prompt: "What does multa mean when used alone?",
      choices: ["Many women", "Many things", "Much", "The many"],
      answer: 1,
      explanation: "A neuter plural adjective used as a noun means “things.”",
    },
  ],
  reflection:
    "Choose one Latin line from this lesson (Horace, Seneca, Catullus, or Virgil). In 500–800 words, explain its grammar word by word, translate it two ways (one literal, one natural), and reflect on what each translation keeps and loses of the Latin.",
};
