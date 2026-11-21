import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "The Grammar of Proto-Indo-European",
  summary:
    "A highly inflected language; the eight cases; singular, dual, and plural; how two genders became three; pronouns; the verb's persons, numbers, and voices; tense and aspect; the moods; thematic and athematic verbs; what Hittite reveals about earlier stages; compounds and names; word order, clitics, and Wackernagel's Law; and what English still keeps of Indo-European grammar.",
  pages: [
    {
      title: "A Highly Inflected Language",
      body: `## Endings everywhere

Proto-Indo-European was a highly **inflected** language: its nouns, pronouns, adjectives, and verbs changed their endings to show grammatical relations. A noun had different forms depending on whether it was the subject or object of a verb, or the possessor of something; a verb had different forms depending on its subject, its time reference, and the attitude of the speaker. Students who have learned Latin, Greek, Sanskrit, Russian, or Lithuanian know such systems well, for those languages preserve much of the inherited inflection.

## Fusion

PIE inflection was **fusional**, in the sense introduced in LIN 101: a single ending often expressed several categories at once. The ending of Latin *lupō* "to the wolf," for example, expresses the dative case and the singular number together; there is no separate marker for each. This contrasts with **agglutinative** languages, such as Turkish, in which each category typically has its own suffix.

## Word order

Because endings showed who did what to whom, word order in PIE and its older daughters was relatively **free**. In Latin, *canis hominem mordet*, *hominem canis mordet*, and *mordet canis hominem* all mean "the dog bites the man," because the ending *-em* marks *hominem* as the object. As we saw in HIL 101, when English lost its endings, it came to rely on fixed word order instead.

## What we will study

In this lesson, we survey the main features of PIE grammar:

- **nouns**: case, number, and gender;
- **pronouns**;
- **verbs**: person and number, voice, tense and aspect, and mood;
- the formation of **words** and **compounds**;
- the structure of **sentences**.

We will see how each feature was reconstructed, how the daughter languages developed it, and what traces of it survive in English.

## A moving target

As we saw in Lesson I, the discovery of **Hittite** complicated the picture. The older reconstruction, based mainly on Sanskrit and Greek, attributed to PIE a rich verbal system with many categories. Hittite lacked many of these. Scholars still debate whether Hittite lost them, or whether they developed later, in the ancestor of the other branches. The grammar described here is mainly that of "core" Proto-Indo-European, the ancestor of the branches other than Anatolian, with notes on what Anatolian suggests about earlier stages.

## Why grammar matters

Grammatical morphemes, such as case endings and verb endings, are among the strongest evidence for relationship, because, as we saw in HIL 101, they are rarely borrowed. Bopp founded comparative grammar on the verb endings, and Indo-Europeanists have continued to regard grammar as the foundation of the family's reconstruction. A list of similar words might be due to chance or borrowing; a shared system of endings almost certainly is not.

> **Pause and consider.** Why is a shared system of verb endings stronger evidence for relationship than a list of similar words?`,
    },
    {
      title: "Nouns: Eight Cases",
      body: `## The case system

The traditional reconstruction of Proto-Indo-European has **eight cases**, each marking a different grammatical role:

| Case | Main function | Example meaning |
|---|---|---|
| **nominative** | subject | "the wolf (runs)" |
| **vocative** | address | "O wolf!" |
| **accusative** | direct object; goal | "(I see) the wolf" |
| **genitive** | possession | "of the wolf" |
| **ablative** | separation, source | "from the wolf" |
| **dative** | indirect object | "to/for the wolf" |
| **locative** | place | "at/in the wolf" |
| **instrumental** | means, accompaniment | "with/by the wolf" |

## Sanskrit and the others

**Sanskrit** preserves all eight cases. The Sanskrit word for "wolf," *vṛ́ka-*, has in the singular: nominative *vṛ́kas*, vocative *vṛ́ka*, accusative *vṛ́kam*, instrumental *vṛ́keṇa*, dative *vṛ́kāya*, ablative *vṛ́kāt*, genitive *vṛ́kasya*, locative *vṛ́ke*. **Lithuanian** preserves seven, and the Slavic languages six or seven. **Latin** has six (nominative, vocative, accusative, genitive, dative, and ablative), the Latin ablative having absorbed the functions of the instrumental and locative; the old locative survives in a few words, such as *Rōmae* "at Rome" and *domī* "at home." **Greek** has five, its genitive absorbing the ablative and its dative absorbing the instrumental and locative. **Old English** had four or five; **Modern English** has, in nouns, essentially two: a common case and a genitive (*wolf*, *wolf's*).

## Syncretism

The merging of cases is called **syncretism**. It is one of the most common changes in the history of the family. In many branches, the ablative merged with the genitive or another case, the instrumental with the dative, and the locative with the dative or ablative. The loss of distinctions in endings was often caused by sound changes, as we saw with Old English in HIL 101, and the functions of lost cases were taken over by **prepositions**: English *of*, *from*, *to*, *with*, *in*.

## The ablative

The ablative is a striking case. In the singular, PIE had a distinct ablative ending, \\**-ōd* (or \\**-ad*), only in the **o-stems**, a common class of nouns; in other classes, the ablative singular was the same as the genitive. Sanskrit *vṛ́kāt* and Old Latin *-ōd* (as in the early inscription form *Gnaivōd* "from Gnaeus") continue this ending. Its limited distribution suggests that the ablative may have developed late in the protolanguage.

## Endings in context

Endings combined with **stems** of different types: o-stems (like *vṛ́ka-*, Latin *lupus*), ā-stems, i-stems, u-stems, consonant stems, and others. Each class had its own set of endings, the **declension**, and many nouns showed **ablaut** in their stems as well, with the accent moving between root, suffix, and ending, as we saw in Lesson II.

## The Hittite evidence

Hittite has a somewhat different system, with a distinct ablative and instrumental but a dative and locative that were merged, and with an **allative** case expressing motion toward a place. Whether the allative goes back to PIE or is an Anatolian innovation is debated.

> **Pause and consider.** Latin has *Rōmae* "at Rome" and *domī* "at home," old locatives. Why might such forms survive in a few common words after the case has otherwise disappeared?`,
    },
    {
      title: "Reconstructing a Paradigm: The Wolf",
      body: `## A whole declension

To see how case endings are reconstructed, let us follow one noun through several cases. The PIE word for "wolf," \\**wĺ̥kʷos*, is an **o-stem**, the commonest class of nouns, and is well attested across the family.

| | PIE | Sanskrit | Greek | Latin | Lithuanian |
|---|---|---|---|---|---|
| nominative sg. | \\**wĺ̥kʷos* | *vṛ́kas* | *lúkos* | *lupus* | *vil̃kas* |
| accusative sg. | \\**wĺ̥kʷom* | *vṛ́kam* | *lúkon* | *lupum* | *vil̃ką* |
| genitive sg. | \\**wĺ̥kʷosyo* | *vṛ́kasya* | *lúkoio* (Homer) | *lupī* | *vil̃ko* |
| dative sg. | \\**wĺ̥kʷōy* | *vṛ́kāya* | *lúkōi* | *lupō* | *vil̃kui* |
| nominative pl. | \\**wĺ̥kʷōs* | *vṛ́kās* | *lúkoi* | *lupī* | *vilkaĩ* |

## Reading the table

Several features stand out.

**The nominative and accusative** are remarkably consistent: \\**-os* and \\**-om* appear as Sanskrit *-as* and *-am* (with *e* and *o* merged into *a*), Greek *-os* and *-on* (with final *m* becoming *n*), Latin *-us* and *-um* (with *o* raised to *u*), and Lithuanian *-as* and *-ą*. English *wolf* has lost its ending, but Gothic *wulfs* keeps the *-s* of the nominative.

**The genitive** shows several different endings. Sanskrit *-asya* and Homeric Greek *-oio* continue \\**-osyo*. Latin *-ī* comes from a different ending, \\**-ī*, which Latin shares with Celtic, one of the arguments for an Italo-Celtic subgroup. And Lithuanian *-o* continues the old **ablative** ending \\**-ōd*: in Baltic and Slavic, the ablative took over the functions of the genitive in this class of nouns. A single case, then, may be expressed by inherited endings of different origins in different branches.

**The dative** \\**-ōy* is clearest in Greek *-ōi* (written with a small iota beneath the vowel in later spelling) and Old Latin *-ōi*, as in the inscription on the Praeneste brooch, *Numasioi* "for Numasius" (the brooch's authenticity was long debated, though many scholars now accept it). Classical Latin later reduced it to *-ō*.

**The nominative plural** shows two endings. Sanskrit *-ās* and Gothic *-ōs* continue the inherited noun ending \\**-ōs*. Greek *-oi*, Latin *-ī* (from older *-oi*), and Lithuanian *-ai* use an ending \\**-oy* borrowed from the **pronouns**, such as \\**toy* "those." This spread of a pronominal ending to nouns is another case of analogy.

## Sound changes in the root

The root also shows the effects of regular sound changes, with one notable puzzle:

- Sanskrit *vṛ́k-* shows the syllabic \\**l̥* becoming *ṛ*, as Indo-Iranian *l* generally became *r*.
- Lithuanian *vilk-* shows the syllabic \\**l̥* becoming *il*, and the labiovelar losing its rounding.
- Greek *lúk-* has lost the initial \\**w* (Greek lost *w* in most dialects), and its *k* reflects the rule, mentioned in Lesson II, that labiovelars became *k* next to *u*.
- Latin *lupus* is a puzzle: native Latin should have \\**vulquos*, with *v* and *qu*. The *p* suggests that the Romans borrowed the word from a neighboring Italic language, such as **Sabine** or another Osco-Umbrian dialect, in which labiovelars became *p* (as in Oscan *pis* "who," against Latin *quis*). The Romans, it seems, borrowed the name of the wolf from the people of the hills, perhaps the people who most often met wolves.

## The value of a paradigm

Working through a whole **paradigm** shows that reconstruction is not a matter of matching single words. Each ending must be explained by regular sound changes, by analogy, or by the replacement of one ending with another, and the explanations must be consistent across many nouns. When they are, as here, the result is a reconstruction that accounts for a great many forms at once, and that is very unlikely to be wrong in its essentials.

> **Pause and consider.** Why do you think the Romans might have borrowed the word for "wolf" rather than keeping their own?`,
    },
    {
      title: "Singular, Dual, and Plural",
      body: `## Three numbers

Proto-Indo-European distinguished three **numbers**: **singular** (one), **dual** (two), and **plural** (more than two). Nouns, pronouns, adjectives, and verbs all had dual forms.

## The dual in the daughters

The dual is well preserved in **Vedic Sanskrit**, which uses it regularly for pairs: *aśvínau*, the two Aśvins, twin gods; *mitrā́váruṇā*, the pair of gods Mitra and Varuna. **Greek** preserves the dual in Homer and in Attic, though it was becoming rare by the classical period and later disappeared. **Gothic** preserves it in pronouns and verbs. **Old English** preserved it in the first and second person pronouns: *wit* "we two," *git* "you two." **Old Church Slavonic** had a full dual, and some Slavic languages still do: **Slovene** and **Sorbian** keep it to this day. Lithuanian kept it until recently in some dialects.

## A problem in Homer

The Greek dual produced one of the famous puzzles of Homeric scholarship. In the ninth book of the **Iliad**, Achilles is visited by an embassy from Agamemnon, consisting of Phoenix, Ajax, and Odysseus, along with two heralds. Yet in a passage describing their journey and their reception, the poet repeatedly uses **dual** forms, as though only two people were going. Scholars have debated the reason for centuries: some think the passage was adapted from an older version with only two envoys; others that the duals refer to Ajax and Odysseus, with Phoenix as a separate figure; still others that the poet used the dual loosely. The puzzle shows how a grammatical category, once alive, can become a source of confusion as it fades.

## Why the dual disappears

The dual has disappeared in most Indo-European languages. As a grammatical category used only for exactly two, it was less frequent than the singular and plural, and, as we saw in HIL 101 with irregular verbs, less frequent forms are more vulnerable to loss. The dual also involved many distinct endings, which were often eroded by sound change. Once lost, its functions were taken over by the plural, often with the numeral "two" or words like *both*.

## Traces in English

English has lost the dual, but traces of it remain in words that refer to exactly two: *both*, *either*, *neither*, and *whether* (originally "which of two"). The distinction between *between* (for two) and *among* (for more), though not grammatical in the strict sense, echoes the old concern with pairs. The comparative suffix that appears in *whether*, *other*, and *either*, PIE \\**-tero-*, expressed a contrast between two, as we will see later in this lesson.

## Collectives

Some scholars believe that the PIE **plural** of neuter nouns developed from a **collective**, a form referring to a group as a whole. This is suggested by a striking rule of Greek and of some other old languages: a **neuter plural subject** takes a **singular verb**. In Attic Greek, *tà zôia trékhei* means "the animals run," but literally "the animals runs." The neuter plural ending, on this view, was originally a singular collective, "the animal-kind," and the verb agreed with it as a singular. We will see the importance of this collective in the next page.

> **Pause and consider.** Why might a language lose its dual but keep words like *both* and *either*?`,
    },
    {
      title: "Gender: From Two to Three",
      body: `## Three genders

Most of the older Indo-European languages, such as Sanskrit, Greek, Latin, Gothic, and Old Church Slavonic, have three **genders**: **masculine**, **feminine**, and **neuter**. Gender is a grammatical classification of nouns, reflected in the forms of adjectives and pronouns that agree with them. It does not always correspond to sex: in German, *das Mädchen* "the girl" is neuter, and in Latin, *agricola* "farmer" is feminine in form but masculine in agreement.

## Two in Anatolian

The Anatolian languages, as we saw in Lesson I, have only two genders: **animate** (or **common**) and **neuter** (or **inanimate**). They have no separate feminine. This raised the question: did Anatolian lose the feminine, or did the feminine develop later, in the ancestor of the other branches?

## The origin of the feminine

Many Indo-Europeanists now think that the feminine developed after Anatolian separated, from a suffix \\**-eh₂*. This suffix had several functions: it formed **collective** nouns, and abstract nouns. It also appears as the ending of the **neuter plural**, which, as we saw, was probably originally a collective. Latin *-a* in both the feminine singular (*equa* "mare") and the neuter plural (*iuga* "yokes") reflects this double origin.

Over time, the \\**-eh₂* suffix was used to form nouns denoting females (for example, \\**h₁éḱweh₂* "mare," from \\**h₁éḱwos* "horse"; Latin *equa*, Sanskrit *áśvā*), and adjectives agreeing with them. A new gender category, the feminine, emerged from what had been a derivational suffix. Since \\**h₂* colored a preceding \\**e* to *a* and lengthened it, the suffix appears in the daughter languages as *-ā*: the familiar *-a* of Latin, Greek, and Sanskrit feminines.

## Gender and the homeland debate

The question is not merely technical. If the feminine gender developed after Anatolian separated, it shows that Proto-Indo-European had at least two stages: an earlier one, shared with Anatolian, and a later one, after Anatolian's departure. This affects how scholars date and locate the protolanguage, as we will see in Lesson V.

## Gender in the daughters

The three-gender system has had varied fates. Latin's neuter disappeared in most Romance languages, which have only masculine and feminine. Persian, Armenian, and Bengali have lost gender entirely. Dutch and Danish have merged masculine and feminine into a "common" gender, leaving two. German, Russian, Icelandic, and Greek keep three.

## English

Old English had three genders: *se mona* "the moon" was masculine, *sēo sunne* "the sun" feminine, and *þæt wīf* "the woman" neuter. In the Middle English period, with the loss of endings, grammatical gender disappeared, and English came to use *he*, *she*, and *it* according to the sex or animacy of the referent, a system called **natural gender**. Traces remain, as when ships and nations are called *she*.

> **Pause and consider.** Old English *wīf* "woman" was neuter. What does this tell us about the relation between grammatical gender and sex?`,
    },
    {
      title: "Pronouns",
      body: `## Stable words

Pronouns are among the most stable words in language, as we saw in HIL 101, and the PIE pronouns are well reconstructed.

## Personal pronouns

| | PIE | Sanskrit | Greek | Latin | Gothic | English |
|---|---|---|---|---|---|---|
| I | \\**h₁eǵ(oH)* | *ahám* | *egṓ* | *ego* | *ik* | *I* |
| me | \\**me-* | *mā́m* | *(e)mé* | *mē* | *mik* | *me* |
| you (sg.) | \\**tú* | *tvám* | *sý* (Doric *tý*) | *tū* | *þu* | *thou* |
| we | \\**wéy* | *vayám* | — | — | *weis* | *we* |
| you (pl.) | \\**yū́* | *yūyám* | — | — | *jus* | *ye* |

English *I*, *me*, *thou*, *we*, and *ye* are inherited; the forms of the first and second persons show suppletion, the use of different roots in different cases (*I* but *me*), which goes back to PIE.

Some languages use different roots: Greek *hēmeîs* "we" and Latin *nōs* "we" come from other PIE forms, \\**n̥s-* and \\**nos-*, which also appear in English *us* (from \\**n̥s-*).

## No third-person pronoun

Proto-Indo-European seems to have had no special third-person pronoun "he, she, it." Instead, it used **demonstratives**, "this" and "that." The daughter languages created third-person pronouns from different demonstratives: Latin used *is*, *ea*, *id*, and later, in Romance, forms of *ille* "that" (French *il*, *elle*); English uses *he*, *she*, *it*, from a demonstrative root beginning with \\**ḱ-*, and *they* from Norse, as we saw in HIL 101.

## The demonstrative *so, *tod

One important demonstrative is reconstructed as masculine \\**so*, feminine \\**seh₂*, and neuter \\**tod*, with oblique forms in \\**t-*:

- Sanskrit *sá*, *sā́*, *tád*;
- Greek *ho*, *hē*, *tó* (the Greek definite article, with *h-* from \\**s-*);
- Gothic *sa*, *sō*, *þata*;
- Old English *se*, *sēo*, *þæt*.

English *the* and *that* both come from this demonstrative, through the forms in *þ-*. Thus the commonest word in English, *the*, is a PIE demonstrative.

## Interrogatives and relatives

The interrogative "who? what?" is reconstructed as \\**kʷi-* / \\**kʷo-*:

- Latin *quis* "who," *quid* "what," *quod* "which";
- Greek *tís* "who," *tí* "what" (with *t* from \\**kʷ* before *i*);
- Sanskrit *ká-* "who," *kím* "what";
- Gothic *ƕas* "who," *ƕa* "what";
- English *who*, *what*, *where*, *when*, *why*, *which*, *how*, all with *wh-* from \\**kʷ-* by Grimm's Law.

The English *wh*-words, which linguists use to name a whole class of questions, are thus a single PIE root in many forms.

## Relatives

Indo-European languages used various pronouns to introduce relative clauses: Sanskrit and Greek used a relative stem \\**yo-* (Sanskrit *yá-*, Greek *hós*), while Latin, Hittite, and later English used forms of the interrogative (*quī*, *kuiš*, *who*, *which*). Whether PIE had a single relative pronoun is debated.

> **Pause and consider.** English *who*, *what*, *where*, *when*, and *why* all begin with *wh*. What does Grimm's Law tell us about their PIE source?`,
    },
    {
      title: "The Verb: Persons, Numbers, Voices",
      body: `## Endings for persons

The PIE verb distinguished three **persons** (first, second, third) and three **numbers** (singular, dual, plural). The endings of the present tense are among the best reconstructed elements of PIE. Compare the verb "to be," from the root \\**h₁es-*:

| | Sanskrit | Greek | Latin | Gothic | Hittite | Old Church Slavonic |
|---|---|---|---|---|---|---|
| I am | *ásmi* | *eimí* | *sum* | *im* | *ēšmi* | *jesmь* |
| you are | *ási* | *eî* (Homeric *essí*) | *es* | *is* | *ēšši* | *jesi* |
| he is | *ásti* | *estí* | *est* | *ist* | *ēšzi* | *jestъ* |
| they are | *sánti* | *eisí* | *sunt* | *sind* | *ašanzi* | *sǫtъ* |

## The reconstruction

These forms point to PIE \\**h₁és-mi*, \\**h₁és-si*, \\**h₁és-ti*, and \\**h₁s-énti*. The third-person plural has the **zero-grade** of the root, \\**h₁s-*, with the accent on the ending, as we saw with ablaut in Lesson II. The endings \\**-mi*, \\**-si*, \\**-ti*, and \\**-nti* are the **primary** endings, used in the present tense; a set of **secondary** endings without the final \\**-i* (\\**-m*, \\**-s*, \\**-t*, \\**-nt*) was used in past tenses and some moods.

## English

English preserves this verb remarkably well: *is* from \\**h₁és-ti* (with the *t* lost in Germanic), and *am*, from Old English *eom*, whose *-m* continues the PIE ending \\**-mi*. English *am* is thus one of the very few English verbs still marked with the PIE first-person ending. The plural *are*, as we noted in HIL 101, has a different origin.

## Voice: active and middle

PIE distinguished two **voices**: **active** and **middle** (sometimes called **mediopassive**). The middle indicated that the action affected the subject or was done in the subject's interest. Greek *loúō* means "I wash (someone)," while the middle *loúomai* means "I wash myself" or "I bathe." Sanskrit grammarians called the active endings *parasmaipada*, "word for another," and the middle *ātmanepada*, "word for oneself," a precise description of the distinction.

## From middle to passive

In many daughter languages, the middle developed into a **passive**. Latin *amor*, "I am loved," uses an ending descended in part from the PIE middle. Greek used middle forms in most tenses for the passive as well, developing distinct passive forms only in the aorist and future. Hittite preserves a middle with endings in *-r*, like the Latin passive, and the *r*-endings, also found in Celtic, Tocharian, and Phrygian, were once thought to be a western peculiarity until Hittite and Tocharian showed they belonged to the oldest layer of the system.

## Deponents

Latin and Greek have **deponent** verbs, which are middle or passive in form but active in meaning, such as Latin *loquor* "I speak," *sequor* "I follow," and *nascor* "I am born." Many deponents describe actions that especially concern the subject: speaking, following, being born, dying. They are remnants of the old middle voice, whose meaning had become obscure.

> **Pause and consider.** Why might the PIE middle voice have developed into a passive in so many daughter languages?`,
    },
    {
      title: "Tense and Aspect",
      body: `## Aspect, not only time

In English, verb forms primarily mark **tense**, the time of an event relative to the moment of speaking: past (*walked*), present (*walks*), future (*will walk*). Proto-Indo-European, by contrast, seems to have marked primarily **aspect**: the internal structure of an event, whether it is viewed as ongoing, completed, or resulting in a state.

## Three stems

The PIE verb, as reconstructed from Greek and Sanskrit, had three main **stems**, each with its own aspect:

- the **present** stem, expressing ongoing or repeated action (**imperfective** aspect);
- the **aorist** stem, expressing action viewed as a whole, as a single event (**perfective** aspect);
- the **perfect** stem, expressing a **state** resulting from an action.

Each stem could form several moods and, for the present and aorist, past forms. The Greek verb *leípō* "leave," which we met in Lesson II, has the present *leípō* "I am leaving," the aorist *élipon* "I left," and the perfect *léloipa* "I have left."

## The aorist

The **aorist** (from Greek *aóristos*, "undefined") survives as a distinct category in Greek, Sanskrit, Armenian, and Old Church Slavonic. In Greek, the difference between present and aorist is mainly one of aspect: the aorist imperative *grápson* means "write (it)!" as a single act, while the present imperative *gráphe* means "keep writing!" or "be writing." Students of New Testament Greek learn to pay close attention to such distinctions, which English translations often cannot capture.

## The perfect

The PIE **perfect** originally expressed a **state**, not a past event. The classic example is \\**wóyde* "knows," literally "has seen," from the root \\**weyd-* "see," which we met in Lesson II. It survives as Sanskrit *véda* "knows," Greek *oîda* "I know," Gothic *wait* "knows," and Old English *wāt*, whence the archaic English *wot*: "Wot ye not what the scripture saith of Elias?" (Romans 11:2). The perfect had a distinctive form, with **reduplication** of the initial consonant (Greek *lé-loipa*), the **o-grade** of the root, and special endings. In Latin and Germanic, the perfect merged with the aorist to form a general past tense.

## The augment

In Indo-Iranian, Greek, Armenian, and Phrygian, past tenses are marked by a prefix called the **augment**, \\**é-*: Greek *é-lipon* "I left," Sanskrit *á-bharam* "I carried." The augment is absent in other branches, and even in Homer and the Rigveda it is often omitted. Many scholars think it was originally an optional particle, perhaps meaning "then" or "there," that became grammaticalized in some branches. Its distribution is sometimes cited as evidence that these branches were neighbors.

## The future

PIE seems to have had no single future tense. The daughter languages created futures in various ways: Greek and Sanskrit with a suffix in \\**-s-* (Greek *leípsō* "I will leave"); Latin with several formations; and Germanic, as we saw in HIL 101, with auxiliaries such as *will* and *shall*. The variety of future formations suggests that the protolanguage expressed future time by other means, perhaps with the present tense or the subjunctive.

## Tense in the daughters

Over time, many Indo-European languages shifted from aspect to tense as the main organizing principle of the verb. Latin and Germanic reduced the system to a basic contrast of past and non-past, later expanded with auxiliaries. Slavic, by contrast, developed a new aspectual system, contrasting perfective and imperfective verbs, which is central to Russian and other Slavic languages today.

> **Pause and consider.** "Wot ye not" uses an old perfect with a present meaning. How does this help explain the original meaning of the PIE perfect?`,
    },
    {
      title: "The Moods",
      body: `## Ways of speaking

PIE verbs distinguished several **moods**, expressing the speaker's attitude toward an action:

- the **indicative**, for statements of fact;
- the **imperative**, for commands;
- the **subjunctive**, for actions that are expected, intended, or possible;
- the **optative**, for wishes and potential actions.

## The imperative

The PIE imperative in the second-person singular often consisted of the bare stem without an ending: \\**bʰér-e* "carry!" (Sanskrit *bhára*, Greek *phére*, Latin *fer*, Gothic *baír*). This is the simplest form of the verb, and its lack of an ending is typical of imperatives cross-linguistically. A second-person ending in \\**-dʰi* also existed for some verbs: Greek *íthi* "go!", Sanskrit *ihí*.

## The subjunctive

The PIE **subjunctive** was formed with a thematic vowel added to the stem, and expressed actions that are expected or intended: "let me go," "he will go," "so that he may go." The subjunctive is well preserved in Vedic Sanskrit and Greek, where it is used in purpose clauses, exhortations, and conditions. In Latin, some forms of the old subjunctive became the future tense: Latin *erō* "I will be" is an old subjunctive of the verb "be."

## The optative

The PIE **optative** was formed with a suffix \\**-yeh₁-* / \\**-ih₁-*, and expressed wishes ("may he go!") and potential actions ("he might go"). It is well preserved in Sanskrit and Greek, where it is used for wishes and in some conditional sentences. In Latin, the optative merged with the subjunctive: Latin *sim* "may I be" continues the optative \\**h₁s-yeh₁-m*, as Old Latin *siem* shows. In Germanic, the optative became the general **subjunctive**.

## The English subjunctive

The modern English subjunctive, as in *if I were you*, *God save the King*, and *I insist that he go*, continues the Germanic subjunctive, which in turn continues the PIE optative. *God save the King* is literally a wish: "may God save the King," with the verb *save* in the subjunctive, without the *-s* of the indicative *saves*. The construction survives in fixed expressions (*long live the King*, *so be it*, *heaven forbid*) and in formal style.

## The injunctive

Vedic Sanskrit also has a form called the **injunctive**, which has secondary endings without the augment and seems to state an action without specifying time or mood. It is used, among other things, for prohibitions with the particle *mā́* "not." Some scholars believe the injunctive reflects an old, unmarked form of the verb, from which the other categories were built.

## Moods and the Bible

The moods of Greek, in particular, are important for interpreting the New Testament. Paul's characteristic exclamation *mḕ génoito*, often translated "God forbid" in the King James Version (as in Romans 6:2), is an optative: "may it not be!" The translators' use of a wish formula in English reflects the mood of the Greek.

> **Pause and consider.** Why do you think the English subjunctive survives mainly in fixed expressions such as *God save the King*?`,
    },
    {
      title: "Thematic and Athematic Verbs",
      body: `## Two types

As we saw in Lesson II, PIE verbs fell into two main types:

- **athematic** verbs, in which the endings were added directly to the root, such as \\**h₁és-ti* "is" and \\**h₁éy-ti* "goes";
- **thematic** verbs, in which a thematic vowel, \\**e* or \\**o*, came between the root and the ending, such as \\**bʰér-e-ti* "carries."

## Greek -mi and -ō verbs

In Greek, the difference survives as the distinction between the so-called **-mi verbs**, which are athematic, and the **-ō verbs**, which are thematic. The -mi verbs, such as *eimí* "I am," *títhēmi* "I put," *dídōmi* "I give," and *hístēmi* "I set up," are among the commonest and most irregular verbs of Greek. The -ō verbs, such as *phérō* "I carry" and *lúō* "I loosen," form the large regular majority.

## Sanskrit

Sanskrit grammarians divided verbs into ten classes according to how they formed the present stem. Some classes are athematic (such as the root class of *ásti* "is" and *éti* "goes"), others thematic (such as the class of *bhárati* "carries").

## The spread of the thematic type

Across the history of the family, the **thematic** type spread at the expense of the athematic. The athematic verbs, with their ablaut alternations and irregular forms, were often remade as thematic verbs. In later Greek, many -mi verbs developed thematic alternatives. In Latin, only a handful of athematic verbs survive, such as *sum* "I am," *est* "is," and *ēst* "eats" (beside thematic *edit*). In Germanic and English, the verb "be" is the clearest survivor of the athematic type.

This spread is an example of **analogy**, which we studied in HIL 101: the regular, frequent pattern was extended to irregular forms. The common athematic verbs that survive, like "be," are the frequent verbs that resist analogy, just as English keeps irregular *went* and *was*.

## Which is older?

Because the athematic verbs are irregular, ancient, and preserved mainly in common words, most scholars think they represent the older layer of PIE, and that the thematic type developed later, perhaps from a specific category of verbs. Some have connected the thematic vowel with a third-person form or with a derivational suffix. The question remains open.

## Hittite's two conjugations

Hittite has two conjugations: the **mi-conjugation**, whose endings correspond to the PIE athematic present (*ēšmi* "I am"), and the **ḫi-conjugation**, with different endings (*-ḫi*, *-ti*, *-i*), which seem to resemble those of the PIE **perfect**. The relation between the Hittite ḫi-conjugation and the PIE perfect is one of the central problems of Indo-European studies. In *Hittite and the Indo-European Verb* (2003), **Jay Jasanoff** argued that the ḫi-conjugation continues an old category of PIE presents with perfect-like endings, which Anatolian preserved and the other branches reorganized. Other scholars have proposed different solutions.

> **Pause and consider.** Why might irregular athematic verbs like "be" survive while most other athematic verbs were regularized?`,
    },
    {
      title: "Compounds and Names",
      body: `## Compounding

Proto-Indo-European formed many words by **compounding**, combining two stems into a single word. Compounds are especially common in Sanskrit, Greek, and Germanic, and English continues the tradition with words like *blackbird*, *headache*, and *barefoot*.

## Types of compounds

The Sanskrit grammarians classified compounds, and their terms are still used:

- ***tatpuruṣa*** ("his man"), in which the first element modifies the second: English *doghouse*, a house for a dog;
- ***dvandva*** ("pair"), in which the elements are coordinated: Sanskrit *mitrā́váruṇā* "Mitra and Varuna"; English *bittersweet*;
- ***bahuvrīhi*** ("much-rice"), in which the compound describes something that **has** what the elements name. A *bahuvrīhi*, literally "much rice," is a person who has much rice, that is, a rich person. English *redhead* (a person with red hair), *barefoot*, and *paperback* (a book with a paper back) are bahuvrīhis.

## Names

PIE personal names were often compounds of two elements, expressing qualities hoped for in the bearer. A famous example is \\**h₁su-ḱléwes-* "having good fame," from \\**h₁su-* "good" and \\**ḱléwos* "fame": Greek *Eukleḗs* and Sanskrit *Suśrávas-* both reflect it.

Names built on the root \\**ḱlew-* "hear, fame" are found across the family:

- Greek names in *-klês*: *Hēraklês* ("glory of Hera"), *Periklês* ("far-famed"), *Sophoklês* ("famed for wisdom");
- Slavic names in *-slav*, from the related word for "glory": *Vladislav*, *Bronislav*, *Jaroslav*, *Stanislav*;
- Illyrian and Celtic names with similar elements.

Germanic names, too, were typically two-element compounds: Old English *Ælfrēd* ("elf-counsel"), *Ēadweard* ("wealth-guard"), *Wulfstān* ("wolf-stone"). The practice of compound naming is one of the cultural traditions that Indo-European peoples inherited along with their language.

## Fame

The root \\**ḱlew-* "hear" is itself revealing. Fame, in Indo-European culture, was what was **heard** about a person: their reputation as it spread by word of mouth and, above all, through poetry. The English word *loud*, from the same root, originally meant "heard." In Lesson IV, we will see that the phrase "imperishable fame" is one of the most famous reconstructed formulas of Indo-European poetry.

## Compounds and poetry

Compounds were essential to the poetic language of the older Indo-European traditions. Homer's epithets, such as *rhododáktylos Ēṓs* "rosy-fingered Dawn" and *pódas ōkùs Akhilleús* "swift-footed Achilles," and the elaborate compounds of the Rigveda, show how the compounding resources of the language were used to create a dense, formulaic poetic style. Old English poetry used compounds called **kennings**, such as *hronrād* "whale-road" for the sea.

> **Pause and consider.** What do the many Indo-European names meaning "famous" or "having good fame" suggest about what these peoples valued?`,
    },
    {
      title: "Sentences: Word Order and Wackernagel's Law",
      body: `## Basic word order

What was the basic word order of PIE? Because the older daughter languages had relatively free word order, the question is difficult. Many scholars, following **Winfred Lehmann** in *Proto-Indo-European Syntax* (1974), argued that PIE was basically **verb-final**, with **subject–object–verb** (SOV) order, like Hittite, Vedic Sanskrit, and Latin in their unmarked word order. Others argue that word order was freer, with variation driven by emphasis and discourse.

## Wackernagel's Law

One of the most important discoveries in Indo-European syntax concerns small unstressed words called **clitics**. In 1892, the Swiss linguist **Jacob Wackernagel** showed that in the older Indo-European languages, unstressed words such as particles and pronouns tended to appear in **second position** in the sentence, after the first stressed word or phrase. This is **Wackernagel's Law**.

For example, in Greek, the particles *dé* "and, but," *gár* "for," and *mén* "on the one hand" never begin a sentence but always follow its first word: *ho dè anḗr* "but the man." In Hittite, sentences often begin with a connective particle such as *nu*, to which a chain of clitics is attached. In Sanskrit, unstressed pronouns such as *me* "to me" and *te* "to you" follow the first word. Latin *-que* "and," attached to the word it follows, continues the same pattern.

## Preverbs and tmesis

In PIE, words that later became verbal prefixes were often separate words, called **preverbs**, which could appear apart from the verb. In Homer and the Rigveda, a preverb may be separated from its verb by other words, a phenomenon called **tmesis** ("cutting"). Later, preverbs fused with verbs to form compound verbs, such as Latin *ad-venīre* "come to" and Greek *apo-bállein* "throw away." English verb–particle combinations, such as *put up* and *give in*, show a similar but independent development.

## Relative clauses

PIE probably formed relative clauses with a relative pronoun at or near the beginning of the clause, often with the relative clause preceding the main clause, as in Hittite and Vedic: "which man came, that one I saw," that is, "I saw the man who came." This **correlative** construction survives in many old texts and in proverbs: Latin *quī bene amat, bene castigat* ("who loves well, chastises well").

## The work of Calvert Watkins

The American scholar **Calvert Watkins** (1933–2013) did much to reconstruct PIE syntax and poetics, arguing that grammatical and stylistic features of the oldest texts, such as the placement of clitics and the structure of formulas, could be compared across the branches as rigorously as sounds and words. His work showed that the comparative method could reach beyond vocabulary to the structure of discourse.

## Why syntax is hard to reconstruct

Syntax is harder to reconstruct than sounds or morphology. Sound correspondences can be established word by word; syntactic patterns are more variable and depend on context, style, and genre. The oldest texts are often poetry, whose word order may differ from ordinary speech. Despite these difficulties, discoveries such as Wackernagel's Law show that some syntactic patterns can be traced across the family with confidence.

> **Pause and consider.** Why might unstressed words gravitate to second position in a sentence?`,
    },
    {
      title: "What English Keeps",
      body: `## A grammar in ruins

Modern English has lost most of the inflections of Proto-Indo-European. Its nouns have no cases except the genitive; its verbs distinguish only a few forms; it has no grammatical gender and no dual. Yet English grammar still contains many survivals of PIE, hidden in plain sight.

## Nouns and pronouns

- The **genitive** *'s*, as in *the wolf's*, continues Old English *-es*, from the PIE genitive ending \\**-oso*, also seen in Sanskrit *vṛ́kasya* and Homeric Greek *lúkoio* "of the wolf."
- The pronouns ***him***, ***them***, and ***whom*** continue old **dative** forms; *me* and *thee* continue old accusatives and datives. The distinction between *who* and *whom*, *I* and *me*, *he* and *him*, is the last remnant of the PIE case system in English.
- Irregular plurals such as *feet*, *teeth*, and *mice*, as we saw in HIL 101, reflect Germanic i-umlaut; *oxen* and *children* continue old *n*-stem plurals.

## Verbs

- ***Am*** and ***is***, as we saw, continue PIE \\**h₁és-mi* and \\**h₁és-ti*.
- The **strong verbs**, *sing*, *sang*, *sung*, continue **ablaut**, as we saw in Lesson II.
- The archaic third-person ending ***-eth***, as in *he goeth* or *the wind bloweth*, continues Old English *-eþ*, from the PIE ending \\**-eti*. Modern *-s* (*goes*, *blows*) spread from the northern dialects of Middle English.
- ***Wot*** and ***wit*** continue the PIE perfect \\**wóyde* "knows."
- The **subjunctive**, as in *if I were* and *God save the King*, continues the PIE optative.

## Comparison

The English comparative and superlative suffixes are inherited. The comparative ***-er*** (*older*) comes from a Germanic suffix that continues PIE \\**-yos-*, the same suffix as in Latin *maior* "greater" and *senior* "older." The superlative ***-est*** (*oldest*) continues PIE \\**-isto-*, as in Greek *mégistos* "greatest." And the PIE suffix \\**-tero-*, which contrasted two things, survives in ***other*** (from \\**h₂én-tero-* "the other of two") and ***whether*** (from \\**kʷo-tero-* "which of two," like Greek *póteros* and Sanskrit *katará-*).

## Numbers and pronouns

As we saw, the numerals *one* through *ten*, and the pronouns *I*, *me*, *thou*, *we*, *ye*, *who*, *what*, and *that*, are inherited from PIE. So is *the*.

## A living inheritance

A sentence like "Who is that? I wot not; whether he be the other man, I know not" consists almost entirely of words and grammatical forms inherited from Proto-Indo-European, through Germanic and Old English. Speakers of English, like speakers of every Indo-European language, use every day a grammar shaped more than five thousand years ago, and changed by every generation since.

## Looking ahead

Grammar tells us about the structure of the language. But the vocabulary of PIE can also tell us about the world of its speakers: their families, animals, technology, religion, and poetry. That is the subject of Lesson IV.

> **Pause and consider.** Find three features of English grammar that continue Proto-Indo-European. Which surprised you most?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. "To be"

> Sanskrit *ásmi*, *ásti*, *sánti*; Greek *eimí*, *estí*, *eisí*; Latin *sum*, *est*, *sunt*; Gothic *im*, *ist*, *sind*; Hittite *ēšmi*, *ēšzi*, *ašanzi*

**Questions**

1. Reconstruct the PIE forms.
2. Why does the plural have a different root vowel?

## 2. The dual

> Old English *wit* "we two," *git* "you two"; Vedic *aśvínau* "the two Aśvins"

**Questions**

1. What is the dual?
2. Why has it disappeared in most languages?

## 3. The perfect

> Sanskrit *véda*, Greek *oîda*, Gothic *wait*; KJV "Wot ye not what the scripture saith" (Romans 11:2)

**Questions**

1. What did the PIE perfect express?
2. How does *wot* preserve its meaning?

## 4. Wackernagel's Law

> Greek *ho dè anḗr* "but the man"; Latin *senātus populusque* "the senate and the people"

**Questions**

1. Where do the clitics *dé* and *-que* appear?
2. What does this show about PIE syntax?

## Drawing the threads together

In a paragraph, explain how the grammar of PIE has been reconstructed and what English keeps of it, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Indo-European Language and Culture: An Introduction", author: "Benjamin W. Fortson IV", publisher: "Wiley-Blackwell", year: "2nd ed., 2010", note: "Read the chapters on nominal and verbal morphology and on syntax." },
    { kind: "book", title: "The Oxford Introduction to Proto-Indo-European and the Proto-Indo-European World", author: "J. P. Mallory and D. Q. Adams", publisher: "Oxford University Press", year: "2006", note: "Read the chapter on grammar." },
    { kind: "book", title: "Über ein Gesetz der indogermanischen Wortstellung", author: "Jacob Wackernagel", publisher: "Indogermanische Forschungen 1", year: "1892", note: "In the public domain. Read the opening pages for the statement of the law." },
  ],
  media: [
    { kind: "book", title: "Hittite and the Indo-European Verb", author: "Jay H. Jasanoff", publisher: "Oxford University Press", year: "2003", note: "For advanced students: read the introduction." },
    { kind: "book", title: "Proto-Indo-European Syntax", author: "Winfred P. Lehmann", publisher: "University of Texas Press", year: "1974", note: "Read chapter 1." },
  ],
  questions: [
    {
      prompt: "How many cases does Sanskrit preserve?",
      choices: ["Four", "Six", "Eight", "Two"],
      answer: 2,
      explanation: "Nominative, vocative, accusative, instrumental, dative, ablative, genitive, locative.",
    },
    {
      prompt: "What is syncretism?",
      choices: [
        "The borrowing of cases",
        "The merging of cases",
        "The creation of new cases",
        "The loss of verbs",
      ],
      answer: 1,
      explanation: "Latin's ablative absorbed the instrumental and locative.",
    },
    {
      prompt: "Which language still has a full dual today?",
      choices: ["French", "Slovene", "English", "Spanish"],
      answer: 1,
      explanation: "Sorbian also keeps it.",
    },
    {
      prompt: "What do many scholars think was the origin of the PIE feminine gender?",
      choices: [
        "Borrowing from Semitic",
        "A suffix *-eh₂ that formed collectives and abstracts, which developed after Anatolian separated",
        "The dual",
        "The neuter",
      ],
      answer: 1,
      explanation: "Anatolian has only animate and neuter.",
    },
    {
      prompt: "English the and that come from which PIE demonstrative?",
      choices: ["*kʷi-", "*so, *seh₂, *tod", "*h₁eǵ", "*wéy"],
      answer: 1,
      explanation: "Greek ho, hē, tó and Sanskrit sá, sā́, tád are cognates.",
    },
    {
      prompt: "What does English am preserve?",
      choices: [
        "A Latin borrowing",
        "The PIE first-person ending *-mi",
        "A Norse form",
        "The dual",
      ],
      answer: 1,
      explanation: "From Old English eom, PIE *h₁és-mi.",
    },
    {
      prompt: "What did the PIE perfect originally express?",
      choices: ["A future event", "A state resulting from an action", "A command", "A wish"],
      answer: 1,
      explanation: "*wóyde \"has seen\" = \"knows.\"",
    },
    {
      prompt: "What does the English subjunctive in God save the King continue?",
      choices: ["The PIE optative", "The PIE aorist", "The Latin future", "The dual"],
      answer: 0,
      explanation: "The Germanic subjunctive continues the PIE optative.",
    },
    {
      prompt: "What is a bahuvrīhi compound?",
      choices: [
        "A compound of two coordinated elements",
        "A compound describing something that has what the elements name, like redhead",
        "A borrowed compound",
        "A verb compound",
      ],
      answer: 1,
      explanation: "Literally \"much-rice,\" a rich person.",
    },
    {
      prompt: "What is Wackernagel's Law?",
      choices: [
        "A sound law",
        "The tendency of unstressed clitics to appear in second position in the sentence",
        "A rule of accent",
        "A law of gender",
      ],
      answer: 1,
      explanation: "Jacob Wackernagel stated it in 1892.",
    },
  ],
  reflection:
    "English has lost most of Proto-Indo-European's inflections, yet keeps many survivals. In 500–800 words, describe the main features of PIE grammar, explain how Hittite has changed scholars' picture of it, and trace at least five features of English grammar back to Proto-Indo-European.",
};
