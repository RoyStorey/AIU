import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Past and Future, the Middle Voice, and the Third Declension",
  summary:
    "The imperfect tense and the augment; the future tense and how σ combines with consonants; the middle and passive voices; deponent verbs; the third declension and how to find a noun's stem; neuter nouns in -μα and -ος; and readings from the opening of Xenophon's Anabasis and from Herodotus's story of Solon and Croesus.",
  pages: [
    {
      title: "The Imperfect and the Augment",
      body: `## A past tense of ongoing action

The **imperfect** is a past tense that describes an action as **ongoing**, **repeated**, or **attempted** in the past. It is built on the **present stem**, like the present, and so shares the present's **aspect**: it views the action as in progress, not as a completed whole. **ἔλυον** means "I was loosing," "I used to loose," "I kept loosing," or "I tried to loose." Compare the Latin imperfect *laudābam*, "I was praising."

## The augment

The past tenses of the Greek indicative (the imperfect, the aorist, and the pluperfect) are marked by an **augment**, a prefix added to the beginning of the verb. The augment is the sign of **past time**, and appears only in the **indicative** mood.

There are two kinds of augment:

**1. The syllabic augment.** If the verb begins with a **consonant**, the augment is the vowel **ἐ-**, which adds a syllable:

> λύω → **ἔ**λυον
> παιδεύω → **ἐ**παίδευον
> γράφω → **ἔ**γραφον
> πέμπω → **ἔ**πεμπον

**2. The temporal augment.** If the verb begins with a **vowel** or **diphthong**, the augment **lengthens** it, adding not a syllable but time (hence "temporal," from Latin *tempus*):

| Initial vowel | Augmented | Example |
|---|---|---|
| α | η | ἄγω → **ἦ**γον |
| ε | η | ἐθέλω → **ἤ**θελον |
| ο | ω | ὀνομάζω → **ὠ**νόμαζον |
| ι | ῑ (long) | ἱκετεύω → **ἱ**κέτευον |
| υ | ῡ (long) | ὑβρίζω → **ὕ**βριζον |
| αι | ῃ | αἰσθάνομαι → **ᾐ**σθανόμην |
| αυ | ηυ | αὐξάνω → **ηὔ**ξανον |
| οι | ῳ | οἰκέω → **ᾤ**κουν |
| ευ | ηυ or ευ | εὑρίσκω → **ηὕ**ρισκον or εὕρισκον |
| ου | ου (unchanged) | (no change) |

A few verbs have irregular augments, because their initial sound has been lost: **ἔχω**, "have," has the imperfect **εἶχον**, because its stem was originally *σεχ-*; the *σ* became *h* and then disappeared, and the augment combined with the following vowel.

## The imperfect active of λύω

| | Singular | Plural |
|---|---|---|
| 1 | **ἔλυον**, I was loosing | **ἐλύομεν**, we were loosing |
| 2 | **ἔλυες**, you were loosing | **ἐλύετε**, you were loosing |
| 3 | **ἔλυε(ν)**, he was loosing | **ἔλυον**, they were loosing |

The endings are **-ον, -ες, -ε(ν), -ομεν, -ετε, -ον**, with the thematic vowel. These are called **secondary** endings, used in the past tenses of the indicative, in contrast to the **primary** endings of the present and future. Notice:

- the first person singular and the third person plural are **identical** (**ἔλυον**); context tells you which is meant;
- the third person singular **ἔλυε** takes **movable ν** before a vowel or at the end of a sentence: **ἔλυεν**;
- the accent is **recessive**, and the augment counts as part of the word, so the accent can fall on it: **ἔλυον**.

## Compound verbs and the augment

In a **compound verb**, the augment comes **after** the prepositional prefix and before the verb stem:

> ἀπάγω → ἀπ**ῆ**γον, "I was leading away"
> εἰσάγω → εἰσ**ῆ**γον, "I was leading in"
> προσβλέπω → προσ**έ**βλεπον, "I was looking at"

If the prefix ends in a vowel, the vowel is usually **elided** before the augment: **ἀπό** + **ἔ**λυον = **ἀπέλυον**; **κατά** + **ἔ**λυον = **κατέλυον**. But **περί** and **πρό** keep their vowel: **περιέβλεπον**, "I was looking around." The prefix **ἐκ** becomes **ἐξ** before the augment: **ἐκφεύγω** → **ἐξέφευγον**, "I was escaping."

This rule is important for **finding** a verb in the dictionary: to look up **ἀπῆγον**, you must remove the augment (**ῆ** → **ἀ**), restore the prefix, and look under **ἀπάγω**.

## The meaning of the imperfect

The imperfect can express:

- **ongoing** action in the past: **ἔγραφον**, "I was writing";
- **repeated** or **habitual** action: **ἔγραφον**, "I used to write," "I kept writing";
- **attempted** action (the **conative** imperfect): **ἔπειθον**, "I was trying to persuade";
- the **beginning** of an action (the **inceptive** imperfect): **ἐμάχοντο**, "they began to fight."

In narrative, Greek writers alternate the imperfect, for background and ongoing actions, with the **aorist**, for single events that advance the story. You will learn the aorist in GRK 102.

## Practice

Give the imperfect active, all persons, of: **παιδεύω**, **ἄγω**, **ἀκούω**, **πιστεύω**.

Then translate:

> 1. ἐπαιδεύομεν τοὺς νεανίας. 2. ἦγε τοὺς ἵππους εἰς τὸν ποταμόν. 3. οἱ στρατιῶται ἔφευγον. 4. ἤκουες τοὺς λόγους τοῦ ποιητοῦ; 5. τὰ δῶρα εἶχον οἱ δοῦλοι. 6. ἀπέπεμπε τοὺς πολίτας. 7. ἐθέλω γράφειν, ἀλλ' ἐκέλευες μένειν.

## The imperfect of εἰμί again

You learned the imperfect of **εἰμί** in lesson 3: **ἦ (ἦν), ἦσθα, ἦν, ἦμεν, ἦτε, ἦσαν**. Its forms show the temporal augment too: the stem **ἐσ-** was augmented to **ἠσ-**, and the σ then disappeared before most endings.

## The augment in other languages

Sanskrit, Old Persian, and Armenian also have an augment, a prefix *a-* or *e-* marking the past, which shows that it goes back to Proto-Indo-European. Latin and the Germanic languages lost it. In Homer the augment is often omitted, a sign that it was once optional: **λῦε** can mean "he was loosing" in Homeric verse, where Attic would require **ἔλυε**. When you read Homer, you will need to recognize unaugmented past tenses.

## A drill

Write out the present and imperfect of **λύω**, side by side, and say them aloud:

| Present | Imperfect |
|---|---|
| λύω | ἔλυον |
| λύεις | ἔλυες |
| λύει | ἔλυε(ν) |
| λύομεν | ἐλύομεν |
| λύετε | ἐλύετε |
| λύουσι(ν) | ἔλυον |

Notice that the two tenses share the stem and the thematic vowel; only the augment and the endings differ. Repeat with **παιδεύω** and **ἄγω** until the forms come without thought.

> **Pause and consider.** The Greek augment marks past time with a prefix, an extra syllable, or a lengthened vowel. Why might a language mark "past" at the beginning of a word rather than at the end?`,
    },
    {
      title: "The Future Tense",
      body: `## The sign of the future: σ

The Greek **future** tense is formed by adding **σ** to the verb stem, before the thematic vowel and the **primary** endings of the present. The future of **λύω** is **λύσω**, "I shall loose," "I will loose."

| | Singular | Plural |
|---|---|---|
| 1 | **λύσω**, I shall loose | **λύσομεν** |
| 2 | **λύσεις** | **λύσετε** |
| 3 | **λύσει** | **λύσουσι(ν)** |

**Infinitive**: **λύσειν**, "to be about to loose." The future has no imperative.

The future is the **second principal part** of a Greek verb: λύω, **λύσω**, ἔλυσα, λέλυκα, λέλυμαι, ἐλύθην.

## σ and consonants

When the verb stem ends in a **consonant**, the σ combines with it according to regular rules:

**Labials** (π, β, φ) + σ = **ψ**:

> πέμπω → **πέμψω**, "I shall send"
> γράφω → **γράψω**, "I shall write"
> βλέπω → **βλέψομαι**, "I shall see" (middle in form; see below)

**Velars** (κ, γ, χ) + σ = **ξ**:

> ἄγω → **ἄξω**, "I shall lead"
> διώκω → **διώξω**, "I shall pursue"
> ἔχω → **ἕξω**, "I shall have" (with a rough breathing, from the old stem σεχ-)

**Dentals** (τ, δ, θ) **drop** before σ:

> πείθω → **πείσω**, "I shall persuade"
> ψεύδω → **ψεύσω**, "I shall deceive"

These are the same rules that create **ψ** and **ξ** elsewhere in Greek: the letters are simply the spelling of *ps* and *ks*.

## Verbs with vowel stems

Verbs whose stems end in a vowel add σ directly: **παιδεύω** → **παιδεύσω**; **κελεύω** → **κελεύσω**; **πιστεύω** → **πιστεύσω**; **θύω** → **θύσω**. Verbs ending in **-ζω** usually form futures in **-σω**: **ὀνομάζω** → **ὀνομάσω**, "I shall name."

## Liquid futures

Verbs whose stems end in a **liquid** or **nasal** consonant (λ, μ, ν, ρ) do not add σ. Instead they add **ε** and **contract** it with the ending, and the future looks like a **contract verb** (GRK 102):

> μένω → **μενῶ, μενεῖς, μενεῖ, μενοῦμεν, μενεῖτε, μενοῦσι(ν)**, "I shall remain"

For now, recognize liquid futures by their **circumflex accents** on the ending.

## Futures in the middle

Many common verbs, especially verbs of perception and bodily action, have a **future middle** in form but **active** in meaning. You will learn the middle endings on the next page. Learn these futures as they come:

| Present | Future | Meaning |
|---|---|---|
| ἀκούω | ἀκούσομαι | I shall hear |
| βλέπω | βλέψομαι | I shall see |
| φεύγω | φεύξομαι | I shall flee |
| εἰμί | ἔσομαι | I shall be |
| γιγνώσκω | γνώσομαι | I shall know |
| μανθάνω | μαθήσομαι | I shall learn |

## Irregular futures

A few verbs form their future from a different stem. The most important:

> λέγω, "say": future **ἐρῶ** (a liquid future), "I shall say" (whence *rhetoric*, *rhētōr*, from the same root)
> ὁράω, "see": future **ὄψομαι**, "I shall see" (whence *optic*)
> φέρω, "carry": future **οἴσω**

These **suppletive** forms, from unrelated roots, are like English *go, went*, or Latin *ferō, tulī, lātum*.

## The meaning of the future

The Greek future describes an action that **will happen**, without specifying whether it is single or ongoing. It can also express **intention** or, in the second person, a mild **command**:

> γράψω τὴν ἐπιστολήν. "I shall write the letter."
> τοῦτο ποιήσεις. "You will do this."

The future infinitive and participle (GRK 102) are used especially to express what someone **intends** or **expects**: **ἐλπίζω νικήσειν**, "I hope to win."

## The sequence of three tenses

You now know three tenses of the Greek indicative, all active:

| Tense | λύω | Meaning |
|---|---|---|
| Present | λύει | he looses, is loosing |
| Imperfect | ἔλυε | he was loosing |
| Future | λύσει | he will loose |

Compare the Latin present, imperfect, and future: *laudat, laudābat, laudābit*. The Greek system is in some ways simpler: the future is made with a single σ, where Latin has two different patterns. But Greek has more tenses beyond these three, as you will see in GRK 102, and its distinction of **aspect** runs deeper.

## Practice

Give the future active, first person singular, of each verb, and explain the change in the stem:

> παιδεύω — πέμπω — γράφω — ἄγω — διώκω — πείθω — θύω — κελεύω

Then translate:

> 1. τὴν ἐπιστολὴν γράψομεν. 2. τοὺς ἵππους ἄξεις εἰς τὸν ποταμόν. 3. οἱ στρατιῶται τοὺς πολεμίους διώξουσιν. 4. τὸν δοῦλον πείσει μένειν. 5. τὰ δῶρα τοῖς θεοῖς πέμψω. 6. οὐκ ἀκούσομαι τοὺς λόγους. 7. ἐν τῇ νήσῳ μενοῦμεν.

## Future and present: telling them apart

Because the future and the present use the same endings, the σ (or ψ, ξ) is often the only sign of the future. Train your eye to look for it after the stem: **πέμπει**, "he sends," but **πέμψει**, "he will send"; **ἄγει**, "he leads," but **ἄξει**, "he will lead." In verbs whose stems end in σ already, or in liquid futures like **μενῶ**, the accent and context must decide.

## The future in Greek thought

Greek writers often speak of the future with caution. The poet **Pindar** calls human hopes "blind," and the tragedians repeatedly show characters confident of what will happen and destroyed by what does. Herodotus, whom you will read on page 7, makes the uncertainty of the future his great theme: no one, Solon tells Croesus, can be called happy until he has died, because no one knows what the future holds. The grammar of the future is simple; its meaning, for the Greeks, was not.

## Vocabulary: futures to learn

| Present | Future |
|---|---|
| ἄγω | ἄξω |
| ἀκούω | ἀκούσομαι |
| γράφω | γράψω |
| διώκω | διώξω |
| ἔχω | ἕξω |
| λέγω | ἐρῶ |
| μένω | μενῶ |
| πείθω | πείσω |
| πέμπω | πέμψω |
| φεύγω | φεύξομαι |

> **Pause and consider.** Many Greek verbs of perception, such as "hear," "see," and "learn," have a future middle: ἀκούσομαι, ὄψομαι, μαθήσομαι. Why might a language treat perceiving and learning as actions done to or for oneself?`,
    },
    {
      title: "The Middle and Passive Voices",
      body: `## Three voices

Greek has three voices: **active**, **middle**, and **passive**. You know the active: the subject does the action. The **passive**, as in Latin, has the subject receive the action. The **middle** is something in between, and it has no exact equivalent in Latin or English.

## The middle voice

In the **middle voice**, the subject acts **on itself**, **for itself**, or with some special **interest** or **involvement** in the action. The precise sense depends on the verb:

| Active | Middle |
|---|---|
| **λύω** τὸν ἵππον, "I loose the horse" | **λύομαι** τὸν υἱόν, "I ransom my son" (I get him loosed for myself) |
| **παύω** τὸν πόλεμον, "I stop the war" | **παύομαι**, "I stop (myself)," "I cease" |
| **πείθω** τὸν φίλον, "I persuade my friend" | **πείθομαι** τῷ νόμῳ, "I obey the law" (I let myself be persuaded) |
| **γράφω**, "I write" | **γράφομαι** τὸν πολίτην, "I indict the citizen" (I have a charge written against him) |
| **φαίνω**, "I show," "I reveal" | **φαίνομαι**, "I appear" (I show myself) |
| **λούω** τὸ τέκνον, "I wash the child" | **λούομαι**, "I wash (myself)," "I bathe" |

In the first chapter of the *Iliad*, the priest **Chryses** comes to the Greek camp **λυσόμενός τε θύγατρα**, "to ransom his daughter" (1.13): the future middle participle of **λύω** expresses exactly this sense of loosing for oneself, by paying a price.

## The present middle and passive

In the present and imperfect, the **middle** and **passive** have **identical forms**. Only the context tells you whether **λύεται** means "he ransoms" (middle) or "he is loosed" (passive). The endings are:

| | Singular | Plural |
|---|---|---|
| 1 | **λύομαι** | **λυόμεθα** |
| 2 | **λύῃ** (or **λύει**) | **λύεσθε** |
| 3 | **λύεται** | **λύονται** |

**Infinitive**: **λύεσθαι**, "to ransom" or "to be loosed."

The primary middle endings are **-μαι, -σαι, -ται, -μεθα, -σθε, -νται**, attached with the thematic vowel. The second singular **λύῃ** comes from an original *λύεσαι*: the σ between vowels dropped out, and the vowels contracted. Attic often writes it **λύει**, which looks like the active third singular. Context distinguishes them.

## The imperfect middle and passive

| | Singular | Plural |
|---|---|---|
| 1 | **ἐλυόμην** | **ἐλυόμεθα** |
| 2 | **ἐλύου** | **ἐλύεσθε** |
| 3 | **ἐλύετο** | **ἐλύοντο** |

The secondary middle endings are **-μην, -σο, -το, -μεθα, -σθε, -ντο**. The second singular **ἐλύου** comes from *ἐλύεσο*, again with the loss of intervocalic σ and contraction.

## The future middle

The **future middle** has σ and the primary middle endings: **λύσομαι, λύσῃ (λύσει), λύσεται, λυσόμεθα, λύσεσθε, λύσονται**, "I shall ransom." Unlike the present and imperfect, the future middle is **not** used as a passive. The future passive has its own form, built on the sixth principal part, which you will learn in GRK 102.

## The passive and the agent

When a verb is **passive**, the person **by whom** the action is done is expressed with **ὑπό** and the **genitive**:

> ὁ ἵππος λύεται ὑπὸ τοῦ δούλου. "The horse is being loosed by the slave."
> οἱ νεανίαι ἐπαιδεύοντο ὑπὸ τοῦ ποιητοῦ. "The young men were being educated by the poet."

A thing **by means of which** the action is done is in the **dative**, without a preposition:

> τοῖς λόγοις πείθεται. "He is persuaded by the words."

This distinction parallels the Latin distinction between *ā/ab* + ablative (agent) and the plain ablative (means).

## Middle or passive?

How do you decide whether a form like **παιδεύεται** is middle or passive? Ask:

1. Is there an **agent** with **ὑπό** and the genitive? Then it is passive.
2. Does the verb have a known **middle meaning**, like **παύομαι** or **πείθομαι**? Then it is probably middle.
3. Does the **subject** seem to act **for itself**, or **on itself**? Then it is probably middle.
4. Otherwise, try both, and choose the one that makes sense.

> ὁ υἱὸς παιδεύεται ὑπὸ τοῦ πατρός. "The son is being educated by his father." (passive: agent with ὑπό)
> ὁ πατὴρ τὸν υἱὸν παιδεύεται. "The father has his son educated." (middle: the father gets his son educated, for his own benefit)

The second sentence shows a common use of the middle, the **causative**: the subject has something done for himself by others. A wealthy Athenian did not usually teach his son himself; he **παιδεύεται** him, he had him taught.

## The middle and the Indo-European verb

The Greek middle is older than the passive. In Proto-Indo-European, verbs had two voices, the active and the middle; there was no separate passive. Sanskrit preserves a similar system. In Greek, the passive grew out of the middle, and in most tenses it still shares its forms. In Latin, the old middle became the passive entirely, leaving only the **deponent** verbs as a trace of its original meaning, as you may have learned in LAT 102. Greek is the language of Europe in which the ancient middle voice survives most fully.

## Practice

Give the present and imperfect middle/passive, all persons, of **παιδεύω** and **πέμπω**.

Then translate each sentence, deciding whether the verb is middle or passive:

> 1. ὁ πόλεμος παύεται. 2. οἱ πολῖται τοῖς νόμοις πείθονται. 3. οἱ δοῦλοι ὑπὸ τοῦ δεσπότου ἐλύοντο. 4. λύσομαι τὸν ἀδελφόν. 5. ἡ ἐπιστολὴ ὑπὸ τοῦ ποιητοῦ γράφεται. 6. γράφεται τὸν Σωκράτη. 7. τὰ δῶρα τοῖς θεοῖς πέμπεται.

## In English

English expresses middle senses with reflexive pronouns ("I wash myself"), with "get" or "have" ("I get my son freed," "I have the house built"), or with verbs that need no object ("the door opens").

> **Pause and consider.** The middle voice expresses action done for oneself or on oneself, as in "I ransom my son" or "I obey the law." Can you think of English verbs that carry such a sense without any special form?`,
    },
    {
      title: "Deponent Verbs",
      body: `## Middle in form, active in meaning

Many Greek verbs have **no active forms** at all in the present: they appear only in the **middle** voice, but have **active** meanings. They are called **deponent** verbs, as in Latin. Their dictionary form ends in **-ομαι**:

> **βούλομαι**, "I wish," "I want"
> **γίγνομαι**, "I become," "I happen," "I am born"
> **ἔρχομαι**, "I come," "I go"
> **μάχομαι**, "I fight"
> **δέχομαι**, "I receive," "I accept"
> **ἕπομαι**, "I follow"
> **αἰσθάνομαι**, "I perceive"
> **πυνθάνομαι**, "I learn (by inquiry)," "I ask"
> **ἀποκρίνομαι**, "I answer"

They are conjugated exactly like the middle of **λύω**: **βούλομαι, βούλῃ, βούλεται, βουλόμεθα, βούλεσθε, βούλονται**; imperfect **ἐβουλόμην** (or, irregularly, **ἠβουλόμην**).

## Why deponents?

As in Latin, the deponents are not a random group. Many describe actions in which the subject is deeply involved: **wishing**, **becoming**, **perceiving**, **learning**, **fighting**, **receiving**, **following**, **answering**. These are exactly the kinds of action for which the Indo-European middle voice was used. The deponents preserve the old middle meaning, which in other verbs has become one possible sense among several.

## Deponents with special cases

Several deponents take their object in the **genitive** or **dative** rather than the accusative:

| Verb | Case | Example |
|---|---|---|
| **μάχομαι** | dative | μάχονται τοῖς Πέρσαις, "they fight (against) the Persians" |
| **ἕπομαι** | dative | ἕπονται τῷ στρατηγῷ, "they follow the general" |
| **πείθομαι** (middle of πείθω) | dative | πείθεται τοῖς νόμοις, "he obeys the laws" |
| **αἰσθάνομαι** | genitive or accusative | αἰσθάνεται τῆς φωνῆς, "he perceives the voice" |
| **ἀκούω** | genitive (of the person), accusative (of the sound) | ἀκούω τοῦ Σωκράτους, "I hear Socrates"; ἀκούω τοὺς λόγους, "I hear the words" |

Learn the case with the verb.

## Γίγνομαι

The verb **γίγνομαι**, "become," "come into being," "happen," "be born," is one of the most common and important verbs in Greek. Its principal parts are **γίγνομαι, γενήσομαι, ἐγενόμην, γέγονα, γεγένημαι, —**. You saw its aorist **ἐγένετο**, "came into being," in John 1:3: **πάντα δι' αὐτοῦ ἐγένετο**, "all things came into being through him."

**γίγνομαι** takes a **predicate nominative**, like **εἰμί**:

> σοφὸς γίγνεται. "He becomes wise."
> στρατηγὸς ἐγένετο. "He became general."

It also means "**happen**," "**take place**":

> μάχη γίγνεται. "A battle takes place."

The English words *genesis*, *genetic*, *genealogy*, and *generation* (through Latin *genus*, a cognate) come from the same root, **γεν-**, "be born," "come into being." The first book of the Bible is called **Γένεσις**, *Genesis*, "Origin," "Coming into being," in the Greek translation of the Hebrew scriptures, the **Septuagint**.

## Philosophy and becoming

For Greek philosophers, the contrast between **γίγνεσθαι**, "becoming," and **εἶναι**, "being," was fundamental. **Plato**, in the *Timaeus* (27d–28a), asks: **τί τὸ ὂν ἀεί, γένεσιν δὲ οὐκ ἔχον, καὶ τί τὸ γιγνόμενον μὲν ἀεί, ὂν δὲ οὐδέποτε;** "What is that which always is and has no becoming, and what is that which is always becoming but never is?" His answer: the eternal Forms always **are**; the physical world is always **becoming**, coming into being and passing away. The pair of verbs, **εἰμί** and **γίγνομαι**, carried a whole metaphysics.

## Ἔρχομαι

The verb **ἔρχομαι**, "come," "go," is a deponent in the present, but borrows its other tenses from other roots: future **εἶμι** (an irregular verb meaning "I shall go"), aorist **ἦλθον** (active), perfect **ἐλήλυθα**. This mixing of roots is typical of the most common verbs, as in English *go, went*.

## Vocabulary: deponents and middle verbs

| Greek | Meaning | English |
|---|---|---|
| ἀποκρίνομαι | answer | |
| αἰσθάνομαι | perceive, notice | aesthetic, anesthesia |
| βούλομαι | wish, want | |
| γίγνομαι | become, happen, be born | genesis |
| δέχομαι | receive, accept | |
| ἕπομαι + dat. | follow | |
| ἔρχομαι | come, go | |
| μάχομαι + dat. | fight | |
| πυνθάνομαι | learn by inquiry, ask | |
| παύομαι | cease, stop | pause |
| πείθομαι + dat. | obey, believe | |

The English *aesthetic* comes from **αἰσθάνομαι**, "perceive," through the adjective **αἰσθητικός**, "perceptive"; it was coined as a philosophical term by the German philosopher Alexander Baumgarten in 1735, for the science of sensory perception and of beauty. *Anesthesia* (ἀν- + αἴσθησις) means "without perception."

## Practice

Translate:

> 1. βούλομαι σοφὸς γίγνεσθαι. 2. οἱ Ἀθηναῖοι τοῖς Πέρσαις ἐμάχοντο. 3. ὁ μαθητὴς ἕπεται τῷ Σωκράτει. 4. τὰ δῶρα δέχονται οἱ θεοί. 5. ἔρχεται ὁ ποιητὴς εἰς τὴν ἀγοράν. 6. τί ἀποκρίνῃ, ὦ Σώκρατες; 7. οἱ πολῖται τοῖς νόμοις οὐκ ἐπείθοντο. 8. μάχη ἐγίγνετο ἐν τῇ θαλάττῃ.

## Contract deponents

Some very common deponents are **contract verbs**, whose stems end in a vowel that merges with the ending, such as **ἡγέομαι**, "lead," "believe," contracted **ἡγοῦμαι**, and **φοβέομαι**, "fear," contracted **φοβοῦμαι**. You will learn the rules of contraction in GRK 102; for now, recognize these words by their meanings and their circumflex accents.

## Middle or deponent?

The line between a deponent and a verb used in the middle is not always sharp. **πείθομαι**, "obey," is the middle of **πείθω**, "persuade"; **παύομαι**, "cease," is the middle of **παύω**, "stop." But **βούλομαι** and **γίγνομαι** have no active at all in Attic. The practical rule: if the dictionary lists the verb in **-ομαι**, it is a deponent; if it lists it in **-ω** and gives a special middle meaning, it is a verb with a middle use. In both cases, translate actively.

## Deponents and the passive

Some deponents use **passive** forms in the aorist, and are called **passive deponents**; others use **middle** forms, and are called **middle deponents**. **βούλομαι** has the aorist **ἐβουλήθην** (passive in form), while **γίγνομαι** has **ἐγενόμην** (middle in form). The distinction matters only in the aorist, which you will learn in GRK 102. Dictionaries tell you which kind each verb is.

## A deponent in a famous sentence

In the *Apology* (21d), Socrates reports his conclusion after questioning a politician who thought himself wise: **ἔοικα γοῦν τούτου γε σμικρῷ τινι αὐτῷ τούτῳ σοφώτερος εἶναι, ὅτι ἃ μὴ οἶδα οὐδὲ οἴομαι εἰδέναι**, "I seem, then, to be wiser than he in this one small thing: that what I do not know, I do not think I know." The verb **οἴομαι**, "think," "suppose," is a deponent, and its meaning, "to think that one knows," is exactly the fault Socrates found in others.

> **Pause and consider.** Plato contrasted what always "is" (εἶναι) with what is always "becoming" (γίγνεσθαι). In your own experience, is there anything that simply is, without becoming?`,
    },
    {
      title: "The Third Declension",
      body: `## The largest declension

The **third declension** is the largest, most varied, and most important declension in Greek. It contains nouns of all three genders, and its nouns have many different nominative forms. But all share the same set of **endings**, added to the noun's **stem**. The key to the third declension is learning to find that stem.

## Finding the stem

The stem of a third-declension noun is found by removing the ending **-ος** from the **genitive singular**. This is why you must always learn the genitive with the noun:

| Nominative | Genitive | Stem | Meaning |
|---|---|---|---|
| φύλαξ | φύλακ-ος | φύλακ- | guard |
| ἐλπίς | ἐλπίδ-ος | ἐλπιδ- | hope |
| σῶμα | σώματ-ος | σωματ- | body |
| ῥήτωρ | ῥήτορ-ος | ῥητορ- | orator |
| ἀγών | ἀγῶν-ος | ἀγων- | contest |
| γέρων | γέροντ-ος | γεροντ- | old man |

The **nominative singular** is often formed by adding **-ς** to the stem, with sound changes (φύλακ-ς → φύλαξ; ἐλπιδ-ς → ἐλπίς), or by lengthening the stem vowel (ῥητορ- → ῥήτωρ), or by dropping the final consonant (σωματ- → σῶμα). You cannot always predict the nominative from the stem, or the stem from the nominative; learn both.

## The endings

| Case | Masc./Fem. sg. | Neut. sg. | Masc./Fem. pl. | Neut. pl. |
|---|---|---|---|---|
| Nom. | -ς or — | — | **-ες** | **-α** |
| Gen. | **-ος** | **-ος** | **-ων** | **-ων** |
| Dat. | **-ι** | **-ι** | **-σι(ν)** | **-σι(ν)** |
| Acc. | **-α** or **-ν** | — | **-ας** | **-α** |
| Voc. | — or = nom. | — | **-ες** | **-α** |

The accusative singular is **-α** after consonant stems, and **-ν** after vowel stems (lesson 5).

## Φύλαξ: guard (a velar stem)

| Case | Singular | Plural |
|---|---|---|
| Nom. | ὁ **φύλαξ** | οἱ **φύλακες** |
| Gen. | τοῦ **φύλακος** | τῶν **φυλάκων** |
| Dat. | τῷ **φύλακι** | τοῖς **φύλαξι(ν)** |
| Acc. | τὸν **φύλακα** | τοὺς **φύλακας** |
| Voc. | (ὦ) **φύλαξ** | (ὦ) **φύλακες** |

Notice the dative plural **φύλαξι**: the **κ** of the stem combines with the **σ** of the ending to make **ξ**, just as in the future (**ἄγω** → **ἄξω**).

## Ἐλπίς: hope (a dental stem)

| Case | Singular | Plural |
|---|---|---|
| Nom. | ἡ **ἐλπίς** | αἱ **ἐλπίδες** |
| Gen. | τῆς **ἐλπίδος** | τῶν **ἐλπίδων** |
| Dat. | τῇ **ἐλπίδι** | ταῖς **ἐλπίσι(ν)** |
| Acc. | τὴν **ἐλπίδα** | τὰς **ἐλπίδας** |
| Voc. | (ὦ) **ἐλπί** | (ὦ) **ἐλπίδες** |

Here the **δ** of the stem **drops** before the **σ** of the nominative and the dative plural, as dentals drop before σ in the future (**πείθω** → **πείσω**).

## Ῥήτωρ: orator (a liquid stem)

| Case | Singular | Plural |
|---|---|---|
| Nom. | ὁ **ῥήτωρ** | οἱ **ῥήτορες** |
| Gen. | τοῦ **ῥήτορος** | τῶν **ῥητόρων** |
| Dat. | τῷ **ῥήτορι** | τοῖς **ῥήτορσι(ν)** |
| Acc. | τὸν **ῥήτορα** | τοὺς **ῥήτορας** |
| Voc. | (ὦ) **ῥῆτορ** | (ὦ) **ῥήτορες** |

The vowel of the stem is short (**ο**), but lengthened (**ω**) in the nominative singular.

## Accent of the third declension

Third-declension nouns have **persistent** accent, like other nouns. One special rule: nouns with a **one-syllable stem** (such as **νύξ, νυκτός**, "night"; **παῖς, παιδός**, "child") accent the **ultima** in the **genitive** and **dative**, singular and plural:

> νύξ, **νυκτός**, **νυκτί**, νύκτα; νύκτες, **νυκτῶν**, **νυξί(ν)**, νύκτας

## Gender in the third declension

The gender of a third-declension noun cannot always be guessed from its form. Some guidelines help:

- nouns in **-μα** (gen. **-ματος**) are always **neuter**: **σῶμα**, **ὄνομα**, **πρᾶγμα**;
- nouns in **-ος** (gen. **-ους**) are **neuter**: **γένος**, **ἔθνος** (page 6);
- nouns in **-ις** (gen. **-ιδος**) are usually **feminine**: **ἐλπίς**, **πατρίς**, "fatherland";
- nouns in **-ηρ**, **-ωρ** naming persons are **masculine**: **ῥήτωρ**, **σωτήρ**, "savior."

But learn each noun with its **article**.

## Vocabulary: third declension (consonant stems)

| Greek | Meaning | English |
|---|---|---|
| ἀγών, ἀγῶνος, ὁ | contest, struggle | agony, antagonist |
| Ἕλλην, Ἕλληνος, ὁ | a Greek | Hellenic |
| ἐλπίς, ἐλπίδος, ἡ | hope | |
| νύξ, νυκτός, ἡ | night | nocturnal (Latin cognate) |
| παῖς, παιδός, ὁ/ἡ | child, boy, girl | pediatrics |
| πατρίς, πατρίδος, ἡ | fatherland | patriot |
| ῥήτωρ, ῥήτορος, ὁ | orator, speaker | rhetoric |
| σωτήρ, σωτῆρος, ὁ | savior | soteriology |
| φύλαξ, φύλακος, ὁ | guard | prophylactic |
| χάρις, χάριτος, ἡ | grace, favor, thanks | charity, charisma, Eucharist |

The word **χάρις** has a rich history: in classical Greek, "grace," "charm," "favor," "gratitude"; the **Χάριτες**, the three Graces, were goddesses of beauty and joy; in the New Testament, **χάρις** means the **grace** of God; and **εὐχαριστία**, "thanksgiving," became the name of the Christian sacrament of the **Eucharist**.

## Learning the third declension

The third declension is where many students of Greek first feel overwhelmed. Three habits help:

1. **Always learn the genitive**, and say the noun as a pair: **φύλαξ, φύλακος**; **ἐλπίς, ἐλπίδος**.
2. **Learn the endings separately**, as you did for the article, and practice attaching them to stems.
3. **Watch the dative plural**, where most of the sound changes happen: **φύλαξι**, **ἐλπίσι**, **σώμασι**, **γέρουσι**.

Once the endings are secure, every new third-declension noun is a matter of learning one stem. And because so many important Greek words belong to this declension, the effort is repaid on every page.

> **Pause and consider.** Greek ἀγών, "contest," "struggle," gives English *agony*. What does it suggest that the Greek word for an athletic or dramatic contest became the English word for intense suffering?`,
    },
    {
      title: "Neuter Nouns in -μα and -ος, and the Old Man",
      body: `## Neuters in -μα

One of the largest and most useful groups of third-declension nouns consists of **neuters** in **-μα**, genitive **-ματος**. Many are formed from verbs, and name the **result** of an action: **γράμμα**, "letter," "thing written," from **γράφω**; **πρᾶγμα**, "deed," "thing," "matter," from **πράττω**, "do." **σῶμα**, "body," is the model:

| Case | Singular | Plural |
|---|---|---|
| Nom. | τὸ **σῶμα** | τὰ **σώματα** |
| Gen. | τοῦ **σώματος** | τῶν **σωμάτων** |
| Dat. | τῷ **σώματι** | τοῖς **σώμασι(ν)** |
| Acc. | τὸ **σῶμα** | τὰ **σώματα** |
| Voc. | (ὦ) **σῶμα** | (ὦ) **σώματα** |

The stem is **σωματ-**. In the nominative singular the **τ** drops (a Greek word cannot end in **τ**); in the dative plural, the **τ** drops before **σ**: **σώμασι**.

## Vocabulary: neuters in -μα

| Greek | Meaning | English |
|---|---|---|
| γράμμα, -ατος, τό | letter (of the alphabet); pl. writing, literature | grammar, diagram |
| δόγμα, -ατος, τό | opinion, decree | dogma |
| θέμα, -ατος, τό | what is placed, subject | theme |
| ὄνομα, -ατος, τό | name | anonymous, synonym |
| πνεῦμα, -ατος, τό | breath, wind, spirit | pneumonia, pneumatic |
| πρᾶγμα, -ατος, τό | deed, thing, matter; pl. affairs, trouble | pragmatic |
| στόμα, -ατος, τό | mouth | stomach |
| σῶμα, -ατος, τό | body | psychosomatic |
| χρῆμα, -ατος, τό | thing; pl. money, goods | |
| ποίημα, -ατος, τό | thing made, poem | poem |
| δρᾶμα, -ατος, τό | deed, action, play | drama |

English is full of **-ma** words borrowed from Greek: *drama*, *dogma*, *enigma*, *stigma*, *trauma*, *karma* (Sanskrit, a cousin), and the plurals *dogmata* and *stigmata*, which keep the Greek stem. The plural **χρήματα**, "things," "goods," came to mean **money**, which you saw in Protagoras's saying **πάντων χρημάτων μέτρον**, "the measure of all things." The word **πνεῦμα**, "breath," "wind," became the New Testament word for **spirit**, **τὸ ἅγιον πνεῦμα**, "the Holy Spirit."

## Neuters in -ος (s-stems)

Another important group of neuter nouns ends in **-ος** in the nominative, and **-ους** in the genitive. Do **not** confuse them with second-declension masculines like **λόγος**: they are third-declension neuters, and their stem originally ended in **-εσ-**. When the **σ** fell out between vowels, the vowels **contracted**:

**γένος**, "race," "family," "kind" (stem γενεσ-):

| Case | Singular | Plural |
|---|---|---|
| Nom. | τὸ **γένος** | τὰ **γένη** (from γένεα) |
| Gen. | τοῦ **γένους** (from γένεος) | τῶν **γενῶν** (from γενέων) |
| Dat. | τῷ **γένει** (from γένεϊ) | τοῖς **γένεσι(ν)** |
| Acc. | τὸ **γένος** | τὰ **γένη** |

Other nouns of this type: **ἔθνος**, "nation," "people" (whence *ethnic*); **ἦθος**, "character" (*ethics*); **ἔτος**, "year"; **τέλος**, "end," "goal" (*teleology*); **πάθος**, "experience," "suffering" (*pathos*, *sympathy*, *pathology*); **κράτος**, "power" (*democracy*); **ὄρος**, "mountain"; **μέρος**, "part"; **πλῆθος**, "crowd," "multitude" (*plethora*); **ψεῦδος**, "lie" (*pseudonym*).

You met **ἦθος** in Heraclitus: **ἦθος ἀνθρώπῳ δαίμων**. You can now decline it.

## The word τέλος

The noun **τέλος** means "end," "completion," "goal," "purpose," and also "fulfillment," "authority," and "tax" (the "completion" of a payment). For **Aristotle**, everything in nature has a **τέλος**, a goal toward which it develops: the τέλος of the acorn is the oak, and the τέλος of human life is **εὐδαιμονία**, "flourishing," "happiness." The study of purposes in nature is called *teleology*. In the Gospel of John (19:30), Jesus's last word on the cross is **τετέλεσται**, "it is finished," "it is accomplished," the perfect passive of **τελέω**, "complete," from the same root.

## Γέρων: old man (an ντ-stem)

Nouns whose stem ends in **-οντ-** have a special nominative and dative plural:

| Case | Singular | Plural |
|---|---|---|
| Nom. | ὁ **γέρων** | οἱ **γέροντες** |
| Gen. | τοῦ **γέροντος** | τῶν **γερόντων** |
| Dat. | τῷ **γέροντι** | τοῖς **γέρουσι(ν)** |
| Acc. | τὸν **γέροντα** | τοὺς **γέροντας** |
| Voc. | (ὦ) **γέρον** | (ὦ) **γέροντες** |

In the dative plural, the **ντ** drops before **σ**, and the preceding vowel is lengthened to compensate: **γεροντ-σι** → **γέρουσι**. This **compensatory lengthening** is a regular sound change in Greek. The same pattern appears in the third person plural of the present tense, which was originally *λύοντι*: **λύουσι**. And it will appear in the present active participle (GRK 102), whose stem also ends in **-οντ-**: **λύων, λύοντος**, "loosing."

The **γερουσία**, the "council of old men," was the senate of Sparta, composed of twenty-eight men over sixty and the two kings; English *geriatric* and *gerontology* come from the same root.

## Practice

Decline in full, with the article: **τὸ ὄνομα**, **τὸ ἔθνος**, **ὁ γέρων**.

Then translate:

> 1. τὸ τοῦ ποιητοῦ ὄνομα οὐκ ἀκούομεν. 2. ἡ ψυχὴ ἐν τῷ σώματί ἐστιν. 3. οἱ γέροντες τοῖς νεανίαις λέγουσιν. 4. τὰ τῶν Ἑλλήνων γένη πολλά ἐστιν. (πολλά, "many") 5. τὰ γράμματα παιδεύει τοὺς παῖδας. 6. τὸ τέλος τοῦ βίου εὐδαιμονία ἐστίν.

## Words in -μα and the verbs they come from

Many **-μα** nouns can be traced to verbs you know or will learn: **γράμμα** from **γράφω**, "write"; **ποίημα** from **ποιέω**, "make"; **πρᾶγμα** from **πράττω**, "do"; **θέμα** from **τίθημι**, "place"; **δόγμα** from **δοκέω**, "seem," "think good." The **-μα** suffix names the **result** of the action: a thing written, a thing made, a thing done, a thing placed, a thing thought good. A parallel suffix, **-σις**, names the **action itself**: **ποίησις**, "making," "poetry"; **πρᾶξις**, "doing," "action"; **θέσις**, "placing," "a thesis." English has borrowed both: *poem* and *poesy*, *pragmatic* and *praxis*, *theme* and *thesis*. You will learn the **-σις** nouns in lesson 5.

> **Pause and consider.** Aristotle held that everything has a *telos*, a goal toward which it develops. Is it helpful to think of human life as having a goal? What might that goal be?`,
    },
    {
      title: "Readings: Xenophon and Herodotus",
      body: `## Two historians

The two passages on this page come from the two greatest storytellers among the Greek historians. **Herodotus** of Halicarnassus (c. 484–425 BCE), called by Cicero the "father of history," wrote in Ionic Greek an account of the wars between the Greeks and the Persians, full of digressions, legends, and stories of human fortune. **Xenophon** of Athens (c. 430–354 BCE), a student of Socrates, a soldier, and a writer of many books, wrote in clear and simple Attic prose that has made his ***Anabasis*** the first real Greek text read by generations of students.

## 1. Xenophon: The opening of the Anabasis

The *Anabasis* ("The March Up Country") tells the story of the expedition of **Cyrus the Younger**, a Persian prince, who in 401 BCE hired ten thousand Greek mercenaries, including Xenophon, to help him seize the throne of Persia from his brother, King Artaxerxes II. Cyrus was killed in battle at Cunaxa, near Babylon, and the Greeks, leaderless in the heart of the Persian Empire, had to fight their way back to the Black Sea. Xenophon, elected one of their generals, led the retreat. The book opens with the family of the Persian king:

> **Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο, πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος. ἐπεὶ δὲ ἠσθένει Δαρεῖος καὶ ὑπώπτευε τελευτὴν τοῦ βίου, ἐβούλετο τὼ παῖδε ἀμφοτέρω παρεῖναι.**

(Xenophon, *Anabasis* 1.1.1)

**Notes**

- **Δαρείου καὶ Παρυσάτιδος**, "of Darius and Parysatis": genitives of origin, "born of"; **Παρυσάτιδος** is third declension (nom. Παρύσατις, a dental stem like ἐλπίς);
- **γίγνονται**, "are born," present of the **deponent γίγνομαι**: a **historical present**, used for vividness in narrative, translated as a past: "were born";
- **παῖδες δύο**, "two children," "two sons": **παῖδες**, nominative plural of **παῖς**, third declension; **δύο**, "two";
- **πρεσβύτερος μὲν … νεώτερος δέ**, "the elder … the younger": comparatives of **πρέσβυς**, "old," and **νέος**, "young," balanced by **μέν … δέ**;
- **ἐπεὶ δέ**, "and when";
- **ἠσθένει**, "was sick," **imperfect** of **ἀσθενέω**, "be weak," "be ill" (a contract verb, with the temporal augment **ἀ** → **ἠ**);
- **ὑπώπτευε**, "was suspecting," "foresaw," **imperfect** of **ὑποπτεύω**: the verb is treated as **ὑπ-** + **ὀπτεύω**, and the **ο** after the prefix takes the temporal augment, **ω**;
- **τελευτὴν τοῦ βίου**, "the end of his life";
- **ἐβούλετο**, "he wanted," **imperfect** of the deponent **βούλομαι**;
- **τὼ παῖδε ἀμφοτέρω**, "both his sons": this is the **dual**, the form for exactly two! **τώ** is the dual article, **παῖδε** the dual of **παῖς**, and **ἀμφοτέρω** the dual of **ἀμφότερος**, "both";
- **παρεῖναι**, "to be present," the infinitive of **πάρειμι**, a compound of **εἰμί**.

**Translation**: "Darius and Parysatis had two sons, the elder Artaxerxes, the younger Cyrus. And when Darius was ill and foresaw the end of his life, he wanted both his sons to be with him."

Notice how much of this lesson's grammar appears in two sentences: a deponent, three imperfects with augments, a third-declension noun, **μέν … δέ**, and even the dual. Xenophon's simple style is ideal for students; that is why this sentence has opened the reading of Greek prose for centuries.

## 2. Herodotus: Solon and Croesus

In the first book of his *Histories*, Herodotus tells how **Solon**, the Athenian lawgiver, visited **Croesus**, the fabulously rich king of Lydia. Croesus showed him his treasures and asked him who was the happiest of men, expecting Solon to name him. Solon named instead an obscure Athenian, Tellus, who had lived well, seen his grandchildren, and died gloriously in battle; and then two young men of Argos, Cleobis and Biton, who died in their sleep after an act of devotion to their mother. When Croesus angrily asked why his own happiness was valued so little, Solon replied with a reflection on the uncertainty of human life, ending (1.32.4):

> **οὕτω ὦν, Κροῖσε, πᾶν ἐστι ἄνθρωπος συμφορή.**

**Notes**

- **οὕτω ὦν**, "so then": **ὦν** is the Ionic form of Attic **οὖν**, "therefore";
- **Κροῖσε**, vocative of **Κροῖσος**;
- **πᾶν**, "entirely," "wholly," neuter of **πᾶς**, "all," used as an adverb or predicate;
- **ἐστι**, "is" (Herodotus does not always use movable ν);
- **ἄνθρωπος**, "man," "a human being";
- **συμφορή**, "chance," "what befalls," Ionic for Attic **συμφορά**, from **σύν** + **φέρω**, "bring together": "an event," "a happening," and often "misfortune."

**Translation**: "So then, Croesus, man is entirely a creature of chance."

Solon's lesson, which Herodotus makes the theme of his whole work, is that no one should be called happy until he has died well, because fortune can change at any moment: **σκοπέειν δὲ χρὴ παντὸς χρήματος τὴν τελευτήν**, "one must look to the end of every matter" (1.32.9; **σκοπέειν** is the Ionic form of Attic **σκοπεῖν**). Croesus did not listen. A few years later, he attacked Persia, was defeated by Cyrus the Great, and, as Herodotus tells it, was placed on a pyre to be burned alive. As the flames rose, he called out three times the name of Solon, and Cyrus, learning the story, spared him. The tale is a legend, and the chronology does not quite work; but it is one of the greatest stories in Greek literature.

## Herodotus's Ionic

Notice that Herodotus's Greek differs from Xenophon's in small ways: **ὦν** for **οὖν**, **συμφορή** for **συμφορά**, **σκοπέειν** for **σκοπεῖν**. Ionic keeps **η** after ρ, and often leaves vowels uncontracted. These differences are small enough that a student of Attic can read Herodotus with a list of the main Ionic forms, and many students find his stories the most enjoyable Greek prose of all.

## Historians and their sources

Both Xenophon and Herodotus wrote about events they had not fully witnessed. Xenophon was present on the march, but wrote decades later, and presented himself in the third person, perhaps to give his account an air of objectivity. Herodotus gathered his stories from priests, travelers, and local traditions across the Greek and Persian worlds, and often reports more than one version, telling his readers which he believes. Reading them in Greek, you meet not only their stories but their methods.

> **Pause and consider.** Solon tells Croesus that no one should be called happy before death, because "man is entirely chance." Do you agree that happiness can only be judged when a life is complete?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. Imperfect and future

Give the imperfect active and the future active, third person singular and plural, of each verb:

> παιδεύω — ἄγω — γράφω — πείθω — ἀκούω (future middle)

**Questions**

1. What are the two kinds of augment, and how do they differ?
2. What happens when σ is added to the stems of γράφω, ἄγω, and πείθω?

## 2. Middle, passive, and deponent

Translate, and decide whether each verb is middle, passive, or deponent:

> 1. ὁ πόλεμος παύεται. 2. ἡ πόλις ὑπὸ τῶν πολεμίων λύεται. 3. βούλομαι ἀκούειν. 4. οἱ στρατιῶται τῷ στρατηγῷ ἕπονται. 5. πείθεσθε τοῖς νόμοις. 6. ὁ γέρων τὸν υἱὸν λύεται.

**Questions**

1. How does ὑπό with the genitive help identify the passive?
2. Explain the meaning of the middle in sentence 6.

## 3. The third declension

Give the stem and decline in full, with the article:

> ἡ ἐλπίς — τὸ σῶμα — ὁ ῥήτωρ — τὸ ἔθνος

**Questions**

1. Why must you learn the genitive of every third-declension noun?
2. What happens to the stem in the dative plural of φύλαξ, ἐλπίς, and γέρων?

## 4. Xenophon and Herodotus

Read aloud:

> Δαρείου καὶ Παρυσάτιδος γίγνονται παῖδες δύο, πρεσβύτερος μὲν Ἀρταξέρξης, νεώτερος δὲ Κῦρος.
> οὕτω ὦν, Κροῖσε, πᾶν ἐστι ἄνθρωπος συμφορή.

**Questions**

1. What tense is γίγνονται, and why is it translated as a past?
2. What does Solon mean by calling man συμφορή?

## Drawing the threads together

In a paragraph, explain the meanings of the Greek middle voice, with at least four examples showing how it differs from the active and the passive.`,
    },
  ],
  readings: [
    { kind: "book", title: "Introduction to Attic Greek", author: "Donald J. Mastronarde", publisher: "University of California Press", year: "2nd ed., 2013", note: "Read the units on the imperfect, the future, the middle and passive, and the third declension." },
    { kind: "book", title: "Athenaze: An Introduction to Ancient Greek, Book I", author: "Maurice Balme and Gilbert Lawall", publisher: "Oxford University Press", year: "3rd ed., 2014", note: "Read chapters 6–8 aloud." },
    { kind: "book", title: "The Histories", author: "Herodotus, trans. Aubrey de Sélincourt, rev. John Marincola", publisher: "Penguin Classics", year: "2003", note: "Read book 1, chapters 29–33 and 86–87, on Solon and Croesus." },
  ],
  media: [
    { kind: "book", title: "The Expedition of Cyrus", author: "Xenophon, trans. Robin Waterfield", publisher: "Oxford World's Classics", year: "2005", note: "Read book 1 in translation." },
    { kind: "book", title: "Greek Grammar", author: "Herbert Weir Smyth, rev. Gordon M. Messing", publisher: "Harvard University Press", year: "1956", note: "See the sections on the augment and on the middle voice." },
  ],
  questions: [
    {
      prompt: "What is the imperfect active, third person singular, of λύω?",
      choices: ["λύει", "ἔλυε(ν)", "λύσει", "ἐλύετο"],
      answer: 1,
      explanation: "Syllabic augment ἐ- + secondary endings.",
    },
    {
      prompt: "What is the imperfect of ἄγω?",
      choices: ["ἔαγον", "ἦγον", "ἄξον", "ἄγον"],
      answer: 1,
      explanation: "Temporal augment: α lengthens to η.",
    },
    {
      prompt: "In the compound ἀπάγω, where does the augment go?",
      choices: [
        "Before the prefix",
        "After the prefix, before the stem: ἀπῆγον",
        "At the end",
        "There is none",
      ],
      answer: 1,
      explanation: "The augment comes between prefix and verb.",
    },
    {
      prompt: "What is the future of γράφω?",
      choices: ["γράσω", "γράψω", "γράξω", "γράφσω"],
      answer: 1,
      explanation: "A labial + σ = ψ.",
    },
    {
      prompt: "What does the middle voice generally express?",
      choices: [
        "Past time",
        "Action done on or for oneself, with special involvement of the subject",
        "Commands",
        "Questions",
      ],
      answer: 1,
      explanation: "λύομαι τὸν υἱόν, “I ransom my son.”",
    },
    {
      prompt: "How is the agent of a passive verb expressed?",
      choices: ["Dative alone", "ὑπό + genitive", "ἐν + dative", "Accusative"],
      answer: 1,
      explanation: "ὑπὸ τοῦ δούλου, “by the slave.”",
    },
    {
      prompt: "What is βούλομαι?",
      choices: [
        "A passive verb",
        "A deponent: middle in form, active in meaning, “I wish”",
        "An imperfect",
        "A future",
      ],
      answer: 1,
      explanation: "Imperfect ἐβουλόμην.",
    },
    {
      prompt: "How do you find the stem of a third-declension noun?",
      choices: [
        "From the nominative",
        "By removing -ος from the genitive singular",
        "From the dative plural",
        "From the article",
      ],
      answer: 1,
      explanation: "φύλαξ, φύλακ-ος: stem φυλακ-.",
    },
    {
      prompt: "What gender are third-declension nouns in -μα, -ματος?",
      choices: ["Masculine", "Neuter", "Feminine", "Any"],
      answer: 1,
      explanation: "σῶμα, ὄνομα, πρᾶγμα.",
    },
    {
      prompt: "In Xenophon's τὼ παῖδε ἀμφοτέρω, what number are the words?",
      choices: ["Singular", "Dual", "Plural", "Collective"],
      answer: 1,
      explanation: "The dual, for exactly two: Darius's two sons.",
    },
  ],
  reflection:
    "Xenophon's opening sets a dying king and two rival sons before us; Herodotus's Solon tells Croesus that man is entirely chance. In 500–800 words, explain how the imperfect, the middle voice, and the third declension work in these passages, and argue how Greek historians used small grammatical choices to shape their stories.",
};
