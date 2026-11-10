import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "The Subjunctive, the Optative, and Socrates's Last Words",
  summary:
    "The subjunctive and its uses in exhortation, deliberation, prohibition, purpose, fear, and indefinite clauses; the optative of wish and potential and in secondary sequence; conditional sentences; indirect discourse; and readings from the oracle to Chaerephon, the Apology, and the death of Socrates.",
  pages: [
    {
      title: "The Forms of the Subjunctive",
      body: `## Two more moods

You have learned the **indicative**, the mood of fact, and the **imperative**, the mood of command. Greek has two more: the **subjunctive** and the **optative**. Latin, as you may know, merged the old Indo-European subjunctive and optative into a single mood; Greek kept them both. Broadly, the **subjunctive** expresses what is **willed**, **expected**, or **likely**, especially in relation to the present or future; the **optative** expresses what is **wished**, **possible**, or **remote**, and in subordinate clauses after past tenses it often replaces the subjunctive. Together they allow Greek to express shades of possibility and intention that English can reach only with auxiliary verbs: "may," "might," "should," "would," "let us."

## The sign of the subjunctive: a long vowel

The subjunctive is easy to recognize. In thematic verbs it **lengthens the thematic vowel**: **ο** becomes **ω**, and **ε** becomes **η**. The subjunctive has **no augment** (that belongs only to the indicative), and it uses **primary** endings.

## The present subjunctive of λύω

| | Active | Middle/Passive |
|---|---|---|
| 1 sg. | **λύω** | **λύωμαι** |
| 2 sg. | **λύῃς** | **λύῃ** |
| 3 sg. | **λύῃ** | **λύηται** |
| 1 pl. | **λύωμεν** | **λυώμεθα** |
| 2 pl. | **λύητε** | **λύησθε** |
| 3 pl. | **λύωσι(ν)** | **λύωνται** |

Compare the indicative: **λύομεν** / subjunctive **λύωμεν**; **λύετε** / **λύητε**; **λύεται** / **λύηται**. The long vowels **ω** and **η** (with iota subscript where the indicative has **ει**) are the marks of the subjunctive. The first person singular **λύω** is identical in the two moods.

## The aorist subjunctive

The **aorist** subjunctive uses the **aorist stem**, without augment, and the same long-vowel endings. Because it has no augment, it does **not** refer to past time: like the aorist infinitive and imperative, it expresses **aspect** only.

| | Aorist active | Aorist middle | Aorist passive |
|---|---|---|---|
| 1 sg. | **λύσω** | **λύσωμαι** | **λυθῶ** |
| 2 sg. | **λύσῃς** | **λύσῃ** | **λυθῇς** |
| 3 sg. | **λύσῃ** | **λύσηται** | **λυθῇ** |
| 1 pl. | **λύσωμεν** | **λυσώμεθα** | **λυθῶμεν** |
| 2 pl. | **λύσητε** | **λύσησθε** | **λυθῆτε** |
| 3 pl. | **λύσωσι(ν)** | **λύσωνται** | **λυθῶσι(ν)** |

Notice that the aorist active subjunctive first singular **λύσω** looks exactly like the **future** indicative **λύσω**. The second singular differs (**λύσῃς** subjunctive, **λύσεις** future), and context distinguishes them.

The aorist **passive** subjunctive has a circumflex on the ending (**λυθῶ**, **λυθῇ**), because it is contracted from an older *λυθέω*. This circumflex makes it easy to recognize.

**Second aorists** form their subjunctive on the second aorist stem: **λάβω, λάβῃς, λάβῃ**; **ἔλθω**; **ἴδω**; **εἴπω**; **γένωμαι**.

## The subjunctive of εἰμί

The subjunctive of **εἰμί** is simply the long-vowel endings, with smooth breathings and circumflexes:

> **ὦ, ᾖς, ᾖ, ὦμεν, ἦτε, ὦσι(ν)**

## Contract verbs

Contract verbs contract their subjunctive endings by the usual rules. The α-contract subjunctive is **identical** to its indicative (**τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι**), because **α** + **η** and **α** + **ε** both give **ᾱ**, and **α** + **ῃ** and **α** + **ει** both give **ᾳ**. The ε-contract subjunctive is **ποιῶ, ποιῇς, ποιῇ, ποιῶμεν, ποιῆτε, ποιῶσι**; the ο-contract, **δηλῶ, δηλοῖς, δηλοῖ, δηλῶμεν, δηλῶτε, δηλῶσι**.

## μι-verbs

The aorist subjunctives of the μι-verbs are short and common:

| | δίδωμι | τίθημι | ἵστημι (2nd aor.) |
|---|---|---|---|
| 1 sg. | **δῶ** | **θῶ** | **στῶ** |
| 2 sg. | **δῷς** | **θῇς** | **στῇς** |
| 3 sg. | **δῷ** | **θῇ** | **στῇ** |
| 1 pl. | **δῶμεν** | **θῶμεν** | **στῶμεν** |
| 2 pl. | **δῶτε** | **θῆτε** | **στῆτε** |
| 3 pl. | **δῶσι(ν)** | **θῶσι(ν)** | **στῶσι(ν)** |

You met **στῶ** in Archimedes's **δός μοι ποῦ στῶ**, "give me where I may stand": a deliberative subjunctive, "where am I to stand?"

## Recognizing the subjunctive

To identify a subjunctive:

1. Look for **ω** or **η** where the indicative would have **ο** or **ε**: **-ωμεν**, **-ητε**, **-ωσι**, **-ηται**, **-ωνται**.
2. Check that there is **no augment**.
3. For aorist passives, look for **-θῶ**, **-θῇ**, **-θῶμεν**, with circumflexes.
4. Look for a word that often introduces a subjunctive: **ἵνα**, **ὅπως**, **ἐάν**, **ὅταν**, **μή**, **ἄν** (next page).

## Practice

Give the present and aorist active subjunctive (all persons) of **παιδεύω**, and the aorist subjunctive, third person singular, of **λαμβάνω**, **ἔρχομαι**, **πέμπω** (passive), **δίδωμι**, and **ποιέω**.

## Subjunctive and future

The subjunctive and the future indicative are closely related in origin: both look forward, and in Homer the subjunctive is often used where Attic would use a future, especially with **ἄν** or **κε**. In classical Attic the two are distinct, but they share a sense of what is to come. This is why the subjunctive is the mood of exhortation ("let us"), of deliberation ("what am I to do?"), and of purpose ("so that it may happen"): all three look toward an action not yet done.

## A word of encouragement

Many students find the subjunctive and optative the most intimidating part of Greek grammar, because there are so many forms and so many uses. But the forms are built from pieces you already know: the stems of the present, the aorist, and the aorist passive, with endings you have seen in the indicative, lengthened or combined with **ι**. And the uses fall into a small number of patterns, each with clear signals: **ἵνα**, **μή**, **ἐάν**, **ἄν**, **εἴθε**. Learn the signals, and the moods will follow.

## Practice in recognition

Identify the mood of each form: **λύομεν**, **λύωμεν**, **λύοιμεν**, **ἐλύσαμεν**, **λύσωμεν**, **λύσαιμεν**, **ἐλύθημεν**, **λυθῶμεν**, **λυθεῖμεν**. You should be able to tell at a glance which are indicative, which subjunctive, and which optative.

> **Pause and consider.** Greek kept two moods of possibility, the subjunctive and the optative, where Latin merged them into one. What does a language gain by distinguishing what is likely or intended from what is merely wished or possible?`,
    },
    {
      title: "Uses of the Subjunctive",
      body: `## Independent uses

The subjunctive appears in main clauses in three important ways.

**1. The hortatory subjunctive** ("let us"), in the first person, usually plural; negative **μή**:

> **ἴωμεν**, "let us go" (from **εἶμι**)
> **σκοπῶμεν**, "let us consider"
> **μὴ φοβώμεθα**, "let us not be afraid"

Socrates often proposes, in Plato's dialogues, **σκεψώμεθα**, "let us examine," with the aorist subjunctive of **σκέπτομαι**, before turning to a question.

**2. The deliberative subjunctive** ("what am I to do?"), in questions of doubt or perplexity; negative **μή**:

> **τί ποιῶ;** "What am I to do?"
> **ποῖ φύγω;** "Where am I to flee?"
> **εἴπωμεν ἢ σιγῶμεν;** "Are we to speak, or keep silent?"

Tragic characters in moments of crisis often ask deliberative questions: **τί δράσω;** "What shall I do?"

**3. The prohibitive subjunctive** ("don't"), with **μή** and the **aorist** subjunctive, second person, for a specific prohibition:

> **μὴ θορυβήσητε**, "do not make an uproar"
> **μὴ ἀμελήσητε**, "do not neglect (it)"

As you learned in lesson 1, the **present** imperative with **μή** means "stop doing" or "don't keep doing," while the **aorist** subjunctive with **μή** means "don't (start to) do." Greek does not use the aorist imperative with **μή**.

## Purpose clauses

A **purpose clause** ("in order that," "so that," "to") is introduced by **ἵνα**, **ὅπως**, or **ὡς**, and takes the **subjunctive** after a **primary** main verb (present, future, perfect, imperative). The negative is **μή** (or **ἵνα μή**):

> ἔρχομαι **ἵνα ἴδω** τὴν πόλιν. "I am coming **in order to see** the city."
> φεύγομεν **ἵνα μὴ ληφθῶμεν**. "We are fleeing **so as not to be captured**."
> λέγω **ὅπως μάθητε**. "I speak **so that you may learn**."

After a **secondary** main verb (imperfect, aorist, pluperfect), the purpose clause usually takes the **optative** instead (page 4), though the subjunctive may be kept for vividness.

## Clauses of fearing

After verbs and expressions of **fearing** (**φοβοῦμαι**, **δέδοικα**, **δέος ἐστί**), a clause introduced by **μή**, "lest," "that," expresses what is feared, with the **subjunctive** (primary sequence) or **optative** (secondary). The negative is **μὴ οὐ**:

> **φοβοῦμαι μὴ ἔλθῃ**. "I am afraid **that he will come**," "lest he come."
> **φοβοῦμαι μὴ οὐκ ἔλθῃ**. "I am afraid **that he will not come**."

Notice that the **μή** here means "that," not "not." The idiom comes from an original independent clause: "I am afraid: may he not come!" English "lest" preserves the same sense.

## Indefinite clauses with ἄν

The particle **ἄν**, which has no single English translation, is added to relative and temporal clauses with the **subjunctive** to make them **indefinite** or **general**: "whoever," "whenever," "if ever." It often combines with the conjunction:

| Conjunction | + ἄν | Meaning |
|---|---|---|
| εἰ, "if" | **ἐάν** (ἤν, ἄν) | if (ever) |
| ὅτε, "when" | **ὅταν** | whenever |
| ἐπεί, "after" | **ἐπειδάν** | whenever, as soon as |
| ὅς, "who" | **ὃς ἄν** | whoever |
| ὅστις | **ὅστις ἄν** | whoever |
| ἕως, "until" | **ἕως ἄν** | until (such time as) |

> **ὅταν** ἔλθῃ, ἀκουσόμεθα. "**Whenever** he comes, we shall listen."
> **ὃς ἂν** τοῦτο ποιῇ, ἀδικεῖ. "**Whoever** does this does wrong."
> **ἐὰν** ἔλθῃ, ὄψεται. "**If** he comes, he will see."

The **ἐάν** clause with the subjunctive is the basis of two of the most common kinds of conditional sentence, which you will study on page 5.

## Socrates and the subjunctive

In the *Apology* (29d), Socrates tells the jury that he will never stop philosophizing: **ἕωσπερ ἂν ἐμπνέω καὶ οἷός τε ὦ, οὐ μὴ παύσωμαι φιλοσοφῶν**, "as long as I breathe and am able, I shall not stop doing philosophy." Two subjunctives (**ἐμπνέω**, **ὦ**) follow **ἕωσπερ ἄν**, "as long as"; and **οὐ μή** with the aorist subjunctive **παύσωμαι** is the strongest possible negative statement about the future: "I shall **certainly not** stop." The supplementary participle **φιλοσοφῶν**, with **παύομαι**, completes the thought: "stop philosophizing."

## Practice

Translate, and name each use of the subjunctive:

> 1. ἴωμεν εἰς τὴν ἀγοράν. 2. τί εἴπω; 3. μὴ φύγητε. 4. ἦλθον ἵνα τὸν Σωκράτη ἀκούσω. 5. φοβοῦμαι μὴ οἱ πολέμιοι ἔλθωσιν. 6. ὅταν ὁ στρατηγὸς κελεύῃ, μαχόμεθα. 7. ὃς ἂν βούληται, λεγέτω. 8. ἐὰν μάθῃς, σοφὸς ἔσῃ.

## The subjunctive in Homer and tragedy

In Homer, the subjunctive is often used without **ἄν** to express a future possibility or a prediction: **οὐ γάρ πω τοίους ἴδον ἀνέρας οὐδὲ ἴδωμαι**, "for never yet have I seen such men, nor shall I see them," says Nestor (*Iliad* 1.262). Attic would use a future here. This "prospective" subjunctive shows the mood's origin as a kind of future, and it survives in tragic poetry.

## Οὐ μή: emphatic denial

The combination **οὐ μή** with the **aorist subjunctive** (or future indicative) is the strongest way to deny that something will happen: "certainly not," "never." It is rare in Attic prose, but common in the New Testament: **ὁ ἐρχόμενος πρὸς ἐμὲ οὐ μὴ πεινάσῃ**, "whoever comes to me will never hunger" (John 6:35). Its origin is debated, but its force is clear.

## A summary table

| Use | Introduced by | Negative |
|---|---|---|
| Hortatory | — (1st person) | μή |
| Deliberative | question word | μή |
| Prohibition | μή + aorist | — |
| Purpose | ἵνα, ὅπως, ὡς | μή |
| Fearing | μή ("that") | μὴ οὐ |
| Indefinite / general | ἐάν, ὅταν, ἐπειδάν, ὃς ἄν | μή |
| Emphatic denial | οὐ μή + aorist | — |

Copy this table into your notebook, and add examples from your reading as you find them.

## Socrates's method

Notice how often the subjunctive appears in the language of philosophical inquiry: **σκοπῶμεν**, "let us consider"; **τί φῶμεν;** "what are we to say?"; **ἐὰν δοκῇ**, "if it seems right." The Socratic dialogue is a joint search, and its grammar is the grammar of shared deliberation and tentative proposal.

> **Pause and consider.** Socrates says that as long as he breathes and is able, he will "certainly not stop" doing philosophy. Why might a man on trial for his life speak so absolutely?`,
    },
    {
      title: "The Forms of the Optative",
      body: `## The mood of wish and possibility

The **optative** (from Latin *optāre*, "wish") is the mood of **wishes**, **possibilities**, and **remote** conditions, and in subordinate clauses after past tenses it often stands in place of the subjunctive or indicative. It is less common than the subjunctive, and had almost disappeared from ordinary speech by the time of the New Testament, where it occurs only about seventy times. But in classical Attic it is frequent, and its forms must be learned.

## The sign of the optative: οι, αι, ει

The optative is marked by a vowel **ι** combined with the thematic vowel or the tense vowel, producing the diphthongs **οι**, **αι**, or **ει** before the ending. It uses **secondary** endings, except in the first person singular active (**-μι**). It has **no augment**.

## The present optative of λύω

| | Active | Middle/Passive |
|---|---|---|
| 1 sg. | **λύοιμι** | **λυοίμην** |
| 2 sg. | **λύοις** | **λύοιο** |
| 3 sg. | **λύοι** | **λύοιτο** |
| 1 pl. | **λύοιμεν** | **λυοίμεθα** |
| 2 pl. | **λύοιτε** | **λύοισθε** |
| 3 pl. | **λύοιεν** | **λύοιντο** |

The **future** optative is formed the same way on the future stem: **λύσοιμι**, **λύσοιο**, and so on. It is used almost only in indirect discourse.

Notice that in the optative, final **-οι** counts as **long** for accent: so **λύοι** (accent on the penult), not *λῦοι. This is the exception to the rule you learned in GRK 101 that final -οι and -αι count as short.

## The aorist optative

The **first aorist** optative uses **αι**:

| | Aorist active | Aorist middle |
|---|---|---|
| 1 sg. | **λύσαιμι** | **λυσαίμην** |
| 2 sg. | **λύσαις** (or **λύσειας**) | **λύσαιο** |
| 3 sg. | **λύσαι** (or **λύσειε(ν)**) | **λύσαιτο** |
| 1 pl. | **λύσαιμεν** | **λυσαίμεθα** |
| 2 pl. | **λύσαιτε** | **λύσαισθε** |
| 3 pl. | **λύσαιεν** (or **λύσειαν**) | **λύσαιντο** |

The alternative forms in **-ειας, -ειε, -ειαν**, called the "Aeolic" optative, are actually more common in Attic prose than **-αις, -αι, -αιεν**. Notice that the aorist optative third singular **λύσαι** differs from the aorist active infinitive **λῦσαι** only in its accent.

The **second aorist** optative uses **οι**, like the present, on the aorist stem: **λάβοιμι**, **ἔλθοιμι**, **ἴδοιμι**, **εἴποιμι**; middle **γενοίμην, γένοιο, γένοιτο**.

## The aorist passive optative and εἰμί

The **aorist passive** optative, and the optative of **εἰμί** and the μι-verbs, use **-ιη-** in the singular:

| | Aorist passive | εἰμί |
|---|---|---|
| 1 sg. | **λυθείην** | **εἴην** |
| 2 sg. | **λυθείης** | **εἴης** |
| 3 sg. | **λυθείη** | **εἴη** |
| 1 pl. | **λυθεῖμεν** (λυθείημεν) | **εἶμεν** (εἴημεν) |
| 2 pl. | **λυθεῖτε** | **εἶτε** |
| 3 pl. | **λυθεῖεν** | **εἶεν** |

You will meet **εἴη** in the oracle to Chaerephon on page 6: **εἴ τις ἐμοῦ εἴη σοφώτερος**, "whether anyone was wiser than I."

## Contract verbs and μι-verbs

Contract verbs also use **-ιη-** in the singular active: **ποιοίην, ποιοίης, ποιοίη, ποιοῖμεν, ποιοῖτε, ποιοῖεν**; **τιμῴην**; **δηλοίην**. And the aorist optatives of the μι-verbs: **δοίην** (δίδωμι), **θείην** (τίθημι), **σταίην** (ἵστημι).

## Recognizing the optative

The optative is the easiest mood to recognize, because of its diphthongs:

1. **-οι-** before the ending (present, future, second aorist): **λύοι**, **λύσοι**, **λάβοι**;
2. **-αι-** or **-ει-** (first aorist): **λύσαι**, **λύσειε**;
3. **-ειη-** or **-ιη-** (aorist passive, εἰμί, contract and μι-verbs): **λυθείη**, **εἴη**, **ποιοίη**, **δοίη**.

When you see one of these combinations between a verb stem and an ending, especially with **ἄν**, **εἰ**, **εἴθε**, or after a past tense, you are probably looking at an optative.

## Μὴ γένοιτο

One of the most famous optatives is **μὴ γένοιτο**, "may it not be," "God forbid," "by no means," the second aorist middle optative of **γίγνομαι**, used by Paul fourteen times in his letters to reject a false conclusion: **τί οὖν ἐροῦμεν; ἐπιμένωμεν τῇ ἁμαρτίᾳ, ἵνα ἡ χάρις πλεονάσῃ; μὴ γένοιτο.** "What then shall we say? Shall we continue in sin, so that grace may increase? By no means!" (Romans 6:1–2). Notice the **deliberative subjunctive** **ἐπιμένωμεν**, "shall we continue?", the **purpose clause** with **ἵνα** and the aorist subjunctive **πλεονάσῃ**, and the **optative of wish**, all in two sentences. The King James Version translates **μὴ γένοιτο** as "God forbid," a phrase that does not contain the word God in Greek, but captures its force.

## Practice

Give the present and aorist active optative (all persons) of **παιδεύω**, and the optative, third person singular, of **εἰμί**, **λαμβάνω** (aorist), **γίγνομαι** (aorist), **πέμπω** (aorist passive), and **δίδωμι** (aorist).

## The optative in the New Testament

The few optatives in the New Testament are mostly fixed formulas: **μὴ γένοιτο**; **χάρις ὑμῖν καὶ εἰρήνη πληθυνθείη**, "may grace and peace be multiplied to you" (1 Peter 1:2), with the aorist passive optative of **πληθύνω**; and Luke's literary optatives in indirect questions, such as **τί ἂν θέλοι καλεῖσθαι αὐτό**, "what he would want him to be called" (Luke 1:62). Luke, the most literary of the evangelists, uses the optative more than any other New Testament writer, imitating the classical style.

## Accent of the optative

Because final **-οι** and **-αι** count as **long** in the optative, the accent cannot go back to the antepenult before them: **παιδεύοι**, not *παίδευοι; **παιδεύσαι**, not *παίδευσαι. This is the main way to distinguish the aorist optative **παιδεύσαι** from the aorist infinitive **παιδεῦσαι** and the aorist middle imperative **παίδευσαι**. Accent, once again, carries grammar.

## Optative or subjunctive?

When you are unsure whether a form is subjunctive or optative, look at the vowel before the ending: a **long** simple vowel (**ω**, **η**) means subjunctive; a **diphthong** with **ι** (**οι**, **αι**, **ει**) means optative. And ask what kind of main verb or particle is present: **ἐάν** and **ἵνα** after a primary verb point to the subjunctive; **εἰ**, **εἴθε**, and **ἄν** in a main clause point to the optative.

> **Pause and consider.** By the first century CE, the optative was disappearing from everyday Greek. What might cause a language to lose a mood of wishing and possibility, and what would speakers use instead?`,
    },
    {
      title: "Uses of the Optative",
      body: `## 1. The optative of wish

The optative, in a main clause, expresses a **wish** for the future that may be fulfilled. It is often introduced by **εἴθε** or **εἰ γάρ**, "would that," "if only"; the negative is **μή**:

> **εἴθε** σοφὸς **γένοιο**. "**May** you become wise," "I hope you become wise."
> **εἰ γὰρ γένοιτο**. "**Would that** it might happen!"
> **μὴ γένοιτο**. "**May** it not happen," "God forbid."
> οἱ θεοί σε **σώσειαν**. "**May** the gods save you."

For wishes that **cannot** be fulfilled ("if only he were here," "if only he had come"), Greek uses **εἴθε** or **εἰ γάρ** with the **imperfect** or **aorist indicative**, like a contrary-to-fact condition: **εἴθε παρῆν**, "if only he were here (but he isn't)"; or **ὤφελον** with the infinitive: **ὤφελε παρεῖναι**, "he ought to have been here," "if only he were here."

## 2. The potential optative

The optative with **ἄν**, in a main clause, expresses what **would**, **could**, or **might** happen: a **possibility**, often stated politely or cautiously. The negative is **οὐ**:

> **ἡδέως ἂν ἀκούσαιμι**. "I **would** gladly hear," "I **should** like to hear."
> **οὐκ ἂν εἴποιμι**. "I **could** not say," "I **would** not say."
> **τάχ' ἂν εἴη**. "It **might** perhaps be."
> **φαίη τις ἄν**. "Someone **might** say."

The potential optative is extremely common in Attic, especially in dialogue, where it softens statements and makes them less direct. When a character in Plato says **ἴσως ἂν εἴη**, "perhaps it might be," he is agreeing cautiously. You will see a potential optative in the last sentence of the *Phaedo* on page 6: **ὡς ἡμεῖς φαῖμεν ἄν**, "as we would say."

## 3. The optative in secondary sequence

In subordinate clauses after a **secondary** main verb (imperfect, aorist, pluperfect), the **optative** often replaces the **subjunctive** that would be used after a primary verb. This is called the **optative of secondary sequence**, and it is the most common use of the optative in narrative prose:

| | Primary sequence (subjunctive) | Secondary sequence (optative) |
|---|---|---|
| Purpose | ἔρχεται **ἵνα ἴδῃ**, "he comes to see" | ἦλθεν **ἵνα ἴδοι**, "he came to see" |
| Fear | φοβεῖται **μὴ ἔλθῃ**, "he fears that he will come" | ἐφοβεῖτο **μὴ ἔλθοι**, "he feared that he would come" |
| Indefinite | **ὅταν** ἔλθῃ, "whenever he comes" | **ὅτε** ἔλθοι, "whenever he came" (with no ἄν) |

Notice that in secondary sequence, **ἄν** drops out of indefinite clauses: **ὅταν** (with subjunctive) becomes **ὅτε** (with optative), and **ἐάν** becomes **εἰ**. Compare the Latin sequence of tenses, in which the present subjunctive after a primary verb becomes the imperfect subjunctive after a secondary one. Greek uses a change of **mood** where Latin uses a change of tense.

Greek writers are not obliged to use the optative in secondary sequence. They may keep the subjunctive for vividness, as if the past event were present: **ἦλθεν ἵνα ἴδῃ**, "he came to see." Thucydides does this often.

## 4. The optative in indirect discourse

After a **secondary** verb of saying or thinking, an indirect statement or question introduced by **ὅτι**, **ὡς**, or a question word may put its verb in the **optative** instead of the indicative, keeping the **tense** of the original:

> Direct: **ὁ βασιλεὺς ἔρχεται**. "The king is coming."
> Indirect (primary): λέγει **ὅτι ὁ βασιλεὺς ἔρχεται**. "He says that the king is coming."
> Indirect (secondary): εἶπεν **ὅτι ὁ βασιλεὺς ἔρχοιτο**. "He said that the king was coming."

Similarly with indirect questions:

> ἤρετο **εἴ τις ἐμοῦ εἴη σοφώτερος**. "He asked **whether anyone was wiser** than I." (Plato, *Apology* 21a)

Here the optative **εἴη** represents the indicative **ἐστί** of Chaerephon's original question, **ἔστι τις ἐμοῦ σοφώτερος;** "Is anyone wiser than Socrates?" The optative marks it as reported after a past verb. As with the optative of secondary sequence, the writer may keep the indicative instead, for vividness.

## Summary of the optative

| Use | Form | Meaning |
|---|---|---|
| Wish | εἴθε / εἰ γάρ + optative | may …, would that … |
| Potential | optative + ἄν | would, could, might |
| Secondary sequence | optative in purpose, fear, indefinite clauses | (as subjunctive) |
| Indirect discourse | optative after secondary verb of saying | (as indicative) |
| Future less vivid condition | εἰ + optative, optative + ἄν | if … should, … would (page 5) |

## The optative and Greek manners

The potential optative is one of the marks of Attic courtesy. A speaker who says **βουλοίμην ἄν**, "I should like," rather than **βούλομαι**, "I want," or **οὐκ ἂν ἔχοιμι εἰπεῖν**, "I could not say," rather than **οὐκ οἶδα**, "I don't know," is speaking with a tact and indirection that the Athenians valued. Socrates often exploits this courtesy ironically, asking with elaborate politeness questions that will destroy his partner's position. When you read Plato, listen for the optatives: they carry much of the tone of the conversation.

## Practice

Translate, and name each use of the optative:

> 1. εἴθε ἀγαθὸς γένοιο. 2. ἡδέως ἂν μάθοιμι. 3. ἦλθεν ἵνα τὸν Σωκράτη ἀκούσειεν. 4. ἐφοβοῦντο μὴ οἱ πολέμιοι ἐπέλθοιεν. 5. εἶπεν ὅτι ὁ στρατηγὸς τεθνήκοι. 6. ἤρετο τί βούλοιτο. 7. οὐκ ἂν εἴποιμι. 8. μὴ γένοιτο.

## The optative and Herodotus

Herodotus uses the optative of secondary sequence and of indirect discourse in long passages of reported speech, giving his narrative a distinctive sense of distance, as if each claim were held up for inspection. His frequent **ὡς λέγουσι**, "as they say," with optatives following, lets him report traditions without endorsing them.

> **Pause and consider.** Attic speakers softened their statements with the potential optative: "I would like" rather than "I want," "I could not say" rather than "I don't know." What does such courtesy reveal about a culture, and how does Socrates turn it to his own use?`,
    },
    {
      title: "Conditional Sentences and Indirect Discourse",
      body: `## Six kinds of condition

Greek conditional sentences, like Latin ones, are distinguished by **mood** and **tense**, and each type expresses a different attitude toward the condition. The "if" clause is the **protasis**; the main clause is the **apodosis**. The negative of the protasis is always **μή**; the negative of the apodosis is **οὐ**.

| Type | Protasis (if …) | Apodosis | English |
|---|---|---|---|
| **Simple** (present or past) | **εἰ** + indicative | indicative | if he does, he is; if he did, he was |
| **Future more vivid** | **ἐάν** + subjunctive | future indicative | if he does (will do), he will |
| **Future less vivid** | **εἰ** + optative | optative + **ἄν** | if he should, he would |
| **Present contrary to fact** | **εἰ** + imperfect indicative | imperfect + **ἄν** | if he were (now), he would be |
| **Past contrary to fact** | **εἰ** + aorist indicative | aorist + **ἄν** | if he had, he would have |
| **General** (present) | **ἐάν** + subjunctive | present indicative | if ever he does, he is (always) |
| **General** (past) | **εἰ** + optative | imperfect indicative | if ever he did, he was (always) |

## Examples

> **Simple**: **εἰ τοῦτο λέγεις, ἁμαρτάνεις**. "If you say this, you are wrong."
> **Future more vivid**: **ἐὰν τοῦτο ποιήσῃς, σοφὸς ἔσῃ**. "If you do this, you will be wise."
> **Future less vivid**: **εἰ τοῦτο ποιήσειας, σοφὸς ἂν εἴης**. "If you should do this, you would be wise."
> **Present contrary to fact**: **εἰ τοῦτο ἐποίεις, σοφὸς ἂν ἦσθα**. "If you were doing this, you would be wise (but you aren't)."
> **Past contrary to fact**: **εἰ τοῦτο ἐποίησας, σοφὸς ἂν ἐγένου**. "If you had done this, you would have become wise (but you didn't)."
> **Present general**: **ἐάν τις τοῦτο ποιῇ, σοφός ἐστιν**. "If anyone (ever) does this, he is wise."
> **Past general**: **εἴ τις τοῦτο ποιοίη, σοφὸς ἦν**. "If anyone (ever) did this, he was wise."

## The particle ἄν

The particle **ἄν** is the key to Greek conditions. In the **apodosis**, with the **optative** or a **past indicative**, it marks the clause as **conditional** or **potential**: "would." In the **protasis**, with **εἰ** and the **subjunctive** (forming **ἐάν**), it marks the condition as **indefinite** or **future**. **ἄν** never appears in the protasis with the optative or the indicative, and never in the apodosis with the subjunctive. Learning where **ἄν** can and cannot go is the best way to master the system.

## Contrary-to-fact conditions

The **contrary-to-fact** conditions use the **imperfect** for **present** time and the **aorist** for **past** time, both in the indicative with **ἄν**. This is the same pattern as Latin, which uses the imperfect subjunctive for present unreality and the pluperfect subjunctive for past unreality, but Greek uses the **indicative**. The past tense marks the condition as remote from reality, and **ἄν** marks it as conditional.

In the *Apology* (31d), Socrates explains why he never took part in politics: **εἰ ἐγὼ πάλαι ἐπεχείρησα πράττειν τὰ πολιτικὰ πράγματα, πάλαι ἂν ἀπολώλη**, "if I had long ago attempted to engage in politics, I would long ago have perished." The aorist **ἐπεχείρησα** in the protasis and the pluperfect **ἀπολώλη** with **ἄν** in the apodosis state what did not happen: he did not enter politics, and so he did not die, until now.

## Indirect discourse: three constructions

You have now learned all three ways in which Greek reports what someone said, thought, or perceived:

**1. ὅτι or ὡς with a finite verb**, after verbs of **saying** (**λέγω**, **ἀγγέλλω**) and others. After a **primary** verb, the original mood and tense are kept; after a **secondary** verb, the verb may change to the **optative** of the same tense, or stay in the indicative:

> λέγει ὅτι **γράφει**. "He says that he is writing."
> εἶπεν ὅτι **γράφοι** (or **γράφει**). "He said that he was writing."

**2. The accusative (or nominative) and infinitive**, after verbs of **thinking** and **believing** (**νομίζω**, **οἴομαι**, **ἡγέομαι**) and after **φημί**. The tense of the infinitive keeps the tense of the original statement. If the subject is the same as the subject of the main verb, it is in the **nominative**, or omitted:

> νομίζει τὸν βασιλέα **ἐλθεῖν**. "He thinks that the king came."
> ἔφη **ἐλθεῖν**. "He said that he (himself) had come."
> ἀνεῖλεν ἡ Πυθία μηδένα σοφώτερον **εἶναι**. "The Pythia answered that no one was wiser." (Plato, *Apology* 21a)

In indirect discourse, unlike elsewhere, the **aorist infinitive** refers to **past** time, because it represents an aorist indicative in the original statement.

**3. The participle**, after verbs of **knowing** and **perceiving** (**οἶδα**, **ὁράω**, **ἀκούω**, **μανθάνω**), as you learned in lesson 3:

> οἶδα θνητὸς **ὤν**. "I know that I am mortal."

## Subordinate clauses in indirect discourse

Subordinate clauses inside indirect discourse keep their original mood after a primary verb, but after a secondary verb they may change to the **optative**, and **ἄν** drops out of **ἐάν**, **ὅταν**, and similar words. This is how long reported speeches in Thucydides and Xenophon can contain many optatives in a row.

## Practice

Translate, and name the type of each condition:

> 1. εἰ σοφός ἐστιν, εὐδαίμων ἐστίν. 2. ἐὰν ἔλθῃς, ὄψει τὴν πόλιν. 3. εἰ ἔλθοις, ἴδοις ἂν τὴν πόλιν. 4. εἰ παρῆν, ἐβοήθει ἄν. 5. εἰ ἦλθες, εἶδες ἂν τὸν Σωκράτη. 6. ἐάν τις ἀδικῇ, κολάζεται. 7. εἶπεν ὅτι ὁ Κῦρος τεθνήκοι. 8. ἔφη τὸν Κῦρον τεθνηκέναι.

Learn the table by heart: it is the key to reading Greek argument, in which conditions appear on nearly every page.

> **Pause and consider.** Socrates says that if he had entered politics, he would long ago have perished. What does a contrary-to-fact condition allow a speaker to argue that a simple statement of fact cannot?`,
    },
    {
      title: "Reading Plato: The Oracle and the Death of Socrates",
      body: `## 1. The oracle to Chaerephon

In the *Apology*, Socrates explains how he came to spend his life questioning people. His friend **Chaerephon**, an impulsive and devoted follower, once went to the oracle of Apollo at **Delphi** and asked a question. Socrates tells the jury (21a):

> **καὶ δή ποτε καὶ εἰς Δελφοὺς ἐλθὼν ἐτόλμησε τοῦτο μαντεύσασθαι — καί, ὅπερ λέγω, μὴ θορυβεῖτε, ὦ ἄνδρες — ἤρετο γὰρ δὴ εἴ τις ἐμοῦ εἴη σοφώτερος. ἀνεῖλεν οὖν ἡ Πυθία μηδένα σοφώτερον εἶναι.**

**Notes**

- **καὶ δή ποτε καί**, "and in fact once";
- **εἰς Δελφοὺς ἐλθών**, "having gone to Delphi," second aorist participle of **ἔρχομαι**;
- **ἐτόλμησε**, "he dared," aorist of the α-contract **τολμάω**;
- **τοῦτο μαντεύσασθαι**, "to ask an oracle about this," aorist middle infinitive of the deponent **μαντεύομαι**;
- **ὅπερ λέγω, μὴ θορυβεῖτε**, "as I say, do not make an uproar": a **present** imperative with **μή**, "stop shouting," "don't keep interrupting," because the jury is already murmuring;
- **ἤρετο**, "he asked," second aorist of **ἐρωτάω** (from another stem, **ἐρ-**);
- **εἴ τις ἐμοῦ εἴη σοφώτερος**, "whether anyone was wiser than I": an **indirect question** with **εἰ**, "whether," and the **optative** **εἴη**, after the secondary verb **ἤρετο**; **ἐμοῦ**, genitive of comparison;
- **ἀνεῖλεν**, "answered," "replied" (of an oracle), second aorist of **ἀναιρέω**, literally "took up" (the lot);
- **ἡ Πυθία**, "the Pythia," the priestess of Apollo at Delphi;
- **μηδένα σοφώτερον εἶναι**, "that no one was wiser": **indirect statement** with the **accusative and infinitive**; the negative is **μηδένα** rather than **οὐδένα**, as often with infinitives.

**Translation**: "And once he went to Delphi and dared to ask the oracle this question — and, as I say, gentlemen, do not interrupt — he asked whether anyone was wiser than I. And the Pythia answered that no one was wiser."

Socrates says he was puzzled by the answer, since he knew he was not wise; so he set out to find someone wiser, questioning politicians, poets, and craftsmen. He found that each thought he knew things he did not; and he concluded that he was wiser only in knowing that he did not know. The oracle, he says, meant that "the wisest of you, human beings, is the one who, like Socrates, recognizes that he is worth nothing with respect to wisdom" (23b).

## 2. The death of Socrates

The *Phaedo* tells the story of Socrates's last day in prison, a month after the trial, spent in conversation with his friends about the immortality of the soul. At sunset, he drank the hemlock. As the poison numbed his body, he uncovered his face and spoke his last words (118a):

> **ὦ Κρίτων, ἔφη, τῷ Ἀσκληπιῷ ὀφείλομεν ἀλεκτρυόνα· ἀλλὰ ἀπόδοτε καὶ μὴ ἀμελήσητε.**

**Notes**

- **ὦ Κρίτων**, "Crito," vocative of **Κρίτων**, Socrates's old friend;
- **ἔφη**, "he said," imperfect of **φημί**;
- **τῷ Ἀσκληπιῷ**, "to Asclepius," the god of healing, dative;
- **ὀφείλομεν ἀλεκτρυόνα**, "we owe a rooster," from **ὀφείλω**, "owe," a regular thematic verb;
- **ἀλλὰ ἀπόδοτε**, "but pay it," aorist imperative of **ἀποδίδωμι**, "give back," "pay what is owed";
- **καὶ μὴ ἀμελήσητε**, "and do not neglect it," a **prohibition** with **μή** and the **aorist subjunctive** of the ε-contract **ἀμελέω**.

**Translation**: "'Crito,' he said, 'we owe a rooster to Asclepius. Pay it, and do not neglect it.'"

A rooster was the customary offering to Asclepius for a cure. What did Socrates mean? Many readers, ancient and modern, have taken the words to mean that death is a cure for the sickness of life, a release of the soul from the body. Others have seen in them a simple act of piety, or a joke, or a reference to some recovery of one of his friends. Plato does not explain.

## 3. Phaedo's last words

The dialogue ends with the narrator, **Phaedo**, speaking to his listener Echecrates:

> **ἥδε ἡ τελευτή, ὦ Ἐχέκρατες, τοῦ ἑταίρου ἡμῖν ἐγένετο, ἀνδρός, ὡς ἡμεῖς φαῖμεν ἄν, τῶν τότε ὧν ἐπειράθημεν ἀρίστου καὶ ἄλλως φρονιμωτάτου καὶ δικαιοτάτου.**

**Notes**

- **ἥδε ἡ τελευτή**, "this was the end," with the demonstrative **ὅδε** in predicate position;
- **τοῦ ἑταίρου ἡμῖν**, "of our companion," "of our friend";
- **ἐγένετο**, "came about," second aorist of **γίγνομαι**;
- **ἀνδρός**, "a man," in apposition to **τοῦ ἑταίρου**;
- **ὡς ἡμεῖς φαῖμεν ἄν**, "as we would say," a **potential optative** of **φημί** with **ἄν**: the courteous, modest form of assertion;
- **τῶν τότε ὧν ἐπειράθημεν**, "of those of that time whom we knew": **ὧν**, relative attracted into the genitive; **ἐπειράθημεν**, aorist passive (deponent) of **πειράομαι**, "experience," "make trial of";
- **ἀρίστου καὶ ἄλλως φρονιμωτάτου καὶ δικαιοτάτου**, "the best, and also the wisest and most just": three **superlatives**, **ἄριστος** (from **ἀγαθός**), **φρονιμώτατος**, and **δικαιότατος**.

**Translation**: "Such was the end, Echecrates, of our friend, a man who was, as we would say, of all those we knew in his time the best, and also the wisest and most just."

## The narrative frame

The *Phaedo* is narrated by **Phaedo** of Elis, a young follower of Socrates who was present at his death, to **Echecrates**, a Pythagorean philosopher in Phlius, who had not been there. The dialogue begins with Echecrates asking: **αὐτός, ὦ Φαίδων, παρεγένου Σωκράτει ἐκείνῃ τῇ ἡμέρᾳ ᾗ τὸ φάρμακον ἔπιεν ἐν τῷ δεσμωτηρίῳ;** "Were you with Socrates yourself, Phaedo, on that day when he drank the poison in prison?" Plato himself, Phaedo says, was ill and absent. This framing, in which the death is told by one who saw it to one who did not, gives the account the quality of testimony, and invites the reader, like Echecrates, to receive it.

Notice that Echecrates's question uses the aorist **παρεγένου**, "were you present," and the aorist **ἔπιεν**, "he drank," the second aorist of **πίνω**: the death is reported as a single, completed event. Phaedo's account, by contrast, is full of imperfects, as he relives the hours of conversation one by one.

> **Pause and consider.** Socrates's last words ask his friends to pay a debt to the god of healing. What do you think he meant? Why might Plato have left the words unexplained?`,
    },
    {
      title: "Reading Plato: The End of the Apology, and Looking Ahead",
      body: `## Socrates's farewell

After his condemnation, Socrates addresses the jurors who voted to acquit him, and argues that death is nothing to fear: either it is a dreamless sleep, or a journey to a place where he may question the great men of the past. He ends his speech with these words (*Apology* 42a):

> **ἀλλὰ γὰρ ἤδη ὥρα ἀπιέναι, ἐμοὶ μὲν ἀποθανουμένῳ, ὑμῖν δὲ βιωσομένοις· ὁπότεροι δὲ ἡμῶν ἔρχονται ἐπὶ ἄμεινον πρᾶγμα, ἄδηλον παντὶ πλὴν ἢ τῷ θεῷ.**

## Notes

- **ἀλλὰ γὰρ ἤδη**, "but now, indeed";
- **ὥρα ἀπιέναι**, "it is time to go away": **ὥρα** (supply **ἐστί**), "time," "the hour"; **ἀπιέναι**, infinitive of **ἄπειμι**, "go away," a compound of **εἶμι**;
- **ἐμοὶ μὲν ἀποθανουμένῳ**, "for me to die," "I to die": **ἀποθανουμένῳ** is the **future participle** of **ἀποθνῄσκω** (future **ἀποθανοῦμαι**, a liquid-type contract future), in the dative, agreeing with **ἐμοί**;
- **ὑμῖν δὲ βιωσομένοις**, "and you to live": **βιωσομένοις**, the **future participle** of **βιόω**, "live," agreeing with **ὑμῖν**; the **μέν … δέ** balance sets Socrates's death against the jurors' life;
- **ὁπότεροι δὲ ἡμῶν**, "but which of us": **ὁπότεροι**, "which of two (parties)," an indirect interrogative;
- **ἔρχονται ἐπὶ ἄμεινον πρᾶγμα**, "are going to a better thing," "a better state": **ἄμεινον**, neuter comparative of **ἀγαθός**;
- **ἄδηλον παντί**, "(is) unclear to everyone": **ἄδηλον**, "unclear," from alpha privative + **δῆλος**;
- **πλὴν ἢ τῷ θεῷ**, "except to the god."

## Translation

"But now it is time to go away: for me to die, and for you to live. Which of us is going to the better state is unclear to everyone except the god."

## Reading the ending

The final sentence is perfectly balanced. **ἐμοὶ μέν** and **ὑμῖν δέ**, "for me" and "for you," set the condemned man against his judges; **ἀποθανουμένῳ** and **βιωσομένοις**, "about to die" and "about to live," are two **future participles** in perfect parallel. Then the second clause overturns the obvious judgment. We assume that life is better than death, and that the jurors are better off than Socrates. Socrates suggests that no one knows, except the god. His last word in the *Apology* is **θεῷ**, "god." The man accused of not believing in the gods ends his defense by deferring to divine knowledge.

The sentence also restates, in its final form, the wisdom Socrates claimed throughout the speech: to know that one does not know. Even about death, the greatest question, he does not pretend to know what he does not.

## Looking back

In two courses and ten lessons, you have learned the whole grammar of Attic Greek:

- **in GRK 101**: the alphabet, the sounds, and the accents; the article; the three declensions; adjectives; the pronouns; the present, imperfect, and future of thematic verbs in all three voices; and the verb **εἰμί**;
- **in GRK 102**: the first and second aorists, active, middle, and passive, and the idea of aspect; the contract verbs; the aorist and future passive; the participles and the genitive absolute; the perfect and pluperfect; the μι-verbs; comparison and the numbers; the subjunctive and optative and their uses; conditions; and indirect discourse.

You have read, with notes, passages from Homer, Herodotus, Thucydides, Xenophon, Plato, Plutarch, the Gospels, and Paul.

## Looking ahead

The next stage of the Greek concentration is **reading**. **GRK 201** reads Plato's *Apology* and *Crito* in full, the two dialogues on the trial and death of Socrates, from which you have read the opening, the oracle, and the end. Later courses read Homer, the tragedians, Herodotus, Thucydides, and the New Testament. In each, you will use a text, a commentary, and the Liddell and Scott *Intermediate Greek-English Lexicon*, reading slowly at first, and faster as the forms become familiar.

## How to keep going

1. **Read every day.** A few lines of Xenophon, Plato, or the Gospel of John, with a commentary.
2. **Review the paradigms** of the verb, especially the aorist, the participles, and the μι-verbs.
3. **Read aloud**, always, with the accents.
4. **Keep a notebook** of the sentences you love.

## A last word

Socrates's words at the end of the *Apology* remind every student that knowledge begins with knowing what one does not know. You now know a great deal of Greek; and you know, too, how much more there is to read. **χαῖρε**, and keep reading.

## A reading list for the next year

If there is a gap before GRK 201, here is a sequence for reading on your own, from easier to harder:

1. **The Gospel of John**, in the Koine, with a reader's edition that glosses rare words: simple syntax, a small vocabulary, and a familiar story.
2. **Xenophon**, *Anabasis* book 1, with a school commentary: clear Attic narrative.
3. **Lysias**, the speech *On the Murder of Eratosthenes*: a lively, short Attic speech about a husband who killed his wife's lover, much used in teaching.
4. **Plato**, *Crito*: a short dialogue in which Socrates explains why he will not escape from prison.
5. **Herodotus**, book 1, chapters 1–94, on Croesus, Solon, and Cyrus, in Ionic.
6. **Homer**, *Iliad* book 1 or *Odyssey* book 9, with a Homeric dictionary.

Each is available in student editions with vocabulary and notes. Read a little each day, and do not be discouraged by slowness at first: reading speed in Greek comes only with time, and every page makes the next easier.

## The value of the effort

Greek is a hard language, and you have learned its grammar. The reward is direct access to some of the greatest books ever written, in the words their authors chose. When you read Socrates's last words in Greek, you read them as Plato's first readers did, without anyone standing between you and the text. As Socrates himself might say, that is worth a great deal of effort.

> **Pause and consider.** Socrates ends his defense: "Which of us is going to the better state is unclear to everyone except the god." Is this courage, humility, or irony? Can it be all three?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. Forms

Give the present and aorist subjunctive and optative, third person singular, active, of **λύω**, and the aorist passive subjunctive and optative. Then give the subjunctive and optative of **εἰμί**, third person singular.

**Questions**

1. What marks the subjunctive, and what marks the optative?
2. How do you distinguish the aorist optative λύσαι from the aorist infinitive λῦσαι?

## 2. Uses of the moods

Translate, and name each use:

> 1. ἴωμεν. 2. τί ποιῶμεν; 3. μὴ φοβηθῇς. 4. ἦλθον ἵνα μάθοιεν. 5. φοβοῦμαι μὴ οὐκ ἔλθῃ. 6. εἴθε εὐδαίμων εἴης. 7. ἡδέως ἂν ἀκούσαιμι. 8. μὴ γένοιτο.

**Questions**

1. What is the optative of secondary sequence?
2. What does ἄν do in a main clause with the optative?

## 3. Conditions and indirect discourse

Translate, naming each type of condition or construction:

> 1. ἐὰν ἔλθῃ, ὄψεται. 2. εἰ ἔλθοι, ἴδοι ἄν. 3. εἰ ἦλθεν, εἶδεν ἄν. 4. εἶπεν ὅτι ὁ στρατηγὸς ἔρχοιτο. 5. ἀνεῖλεν ἡ Πυθία μηδένα σοφώτερον εἶναι.

**Questions**

1. Where can ἄν appear in each type of condition?
2. What are the three constructions of indirect discourse?

## 4. Plato

Read aloud:

> ἤρετο γὰρ δὴ εἴ τις ἐμοῦ εἴη σοφώτερος.
> ἀλλὰ ἀπόδοτε καὶ μὴ ἀμελήσητε.
> ἀλλὰ γὰρ ἤδη ὥρα ἀπιέναι, ἐμοὶ μὲν ἀποθανουμένῳ, ὑμῖν δὲ βιωσομένοις.

**Questions**

1. Why is εἴη in the optative?
2. Explain ἀμελήσητε and the two future participles.

## Drawing the threads together

In a paragraph, explain the difference between the subjunctive and the optative, with at least two examples of each from Plato's account of Socrates.`,
    },
  ],
  readings: [
    { kind: "book", title: "Introduction to Attic Greek", author: "Donald J. Mastronarde", publisher: "University of California Press", year: "2nd ed., 2013", note: "Read the units on the subjunctive, the optative, conditions, and indirect discourse." },
    { kind: "book", title: "Plato: Apology", author: "Plato, ed. James J. Helm", publisher: "Bolchazy-Carducci", year: "rev. ed., 1999", note: "Read 20e–23c and 40c–42a with the notes." },
    { kind: "book", title: "The Trial and Death of Socrates", author: "Plato, trans. G. M. A. Grube, rev. John M. Cooper", publisher: "Hackett", year: "3rd ed., 2000", note: "Read the Apology and the death scene of the Phaedo in translation." },
  ],
  media: [
    { kind: "book", title: "Greek Grammar", author: "Herbert Weir Smyth, rev. Gordon M. Messing", publisher: "Harvard University Press", year: "1956", note: "See the sections on the moods, conditions, and indirect discourse." },
    { kind: "book", title: "The Greek Particles", author: "J. D. Denniston", publisher: "Oxford University Press", year: "2nd ed., 1954", note: "For reference as you read on; look up ἄν, γάρ, and δή." },
  ],
  questions: [
    {
      prompt: "What marks the subjunctive of thematic verbs?",
      choices: [
        "The augment",
        "A lengthened thematic vowel: ω, η",
        "The diphthong οι",
        "Reduplication",
      ],
      answer: 1,
      explanation: "λύωμεν for λύομεν; λύητε for λύετε.",
    },
    {
      prompt: "What does μὴ ἀμελήσητε mean?",
      choices: [
        "You did not neglect",
        "Do not neglect (it)",
        "Let us not neglect",
        "You would not neglect",
      ],
      answer: 1,
      explanation: "A prohibition: μή + aorist subjunctive.",
    },
    {
      prompt: "Which conjunctions introduce purpose clauses?",
      choices: ["εἰ, ἐάν", "ἵνα, ὅπως, ὡς", "ὅτι, ὡς", "ἐπεί, ὅτε"],
      answer: 1,
      explanation: "With the subjunctive (or optative after secondary verbs).",
    },
    {
      prompt: "In a clause of fearing, what does μή mean?",
      choices: ["Not", "That, lest", "If", "Because"],
      answer: 1,
      explanation: "φοβοῦμαι μὴ ἔλθῃ, “I fear that he will come.”",
    },
    {
      prompt: "What marks the optative?",
      choices: [
        "The diphthongs οι, αι, ει (or ιη) before the ending",
        "A long thematic vowel",
        "The augment",
        "-θη-",
      ],
      answer: 0,
      explanation: "λύοι, λύσαι, λυθείη, εἴη.",
    },
    {
      prompt: "What does ἡδέως ἂν ἀκούσαιμι mean?",
      choices: [
        "I gladly heard",
        "I would gladly hear",
        "Let me hear gladly",
        "If only I heard",
      ],
      answer: 1,
      explanation: "A potential optative with ἄν.",
    },
    {
      prompt: "What does μὴ γένοιτο express?",
      choices: [
        "A command",
        "A wish: “may it not be,” “by no means”",
        "A condition",
        "A purpose",
      ],
      answer: 1,
      explanation: "The optative of wish, used by Paul.",
    },
    {
      prompt: "Which is a future less vivid condition?",
      choices: [
        "ἐὰν ἔλθῃ, ὄψεται",
        "εἰ ἔλθοι, ἴδοι ἄν",
        "εἰ ἦλθεν, εἶδεν ἄν",
        "εἰ ἔρχεται, ὁρᾷ",
      ],
      answer: 1,
      explanation: "εἰ + optative, optative + ἄν: “if he should come, he would see.”",
    },
    {
      prompt: "In ἤρετο εἴ τις ἐμοῦ εἴη σοφώτερος, why is εἴη optative?",
      choices: [
        "It is a wish",
        "It is an indirect question after a secondary verb",
        "It is a condition",
        "It is a purpose clause",
      ],
      answer: 1,
      explanation: "Representing ἐστί in Chaerephon's original question.",
    },
    {
      prompt: "How does Socrates end the Apology?",
      choices: [
        "By cursing the jury",
        "By saying only the god knows whether he or they go to the better state",
        "By escaping",
        "By asking for mercy",
      ],
      answer: 1,
      explanation: "ἄδηλον παντὶ πλὴν ἢ τῷ θεῷ.",
    },
  ],
  reflection:
    "Socrates learns from the oracle that no one is wiser, asks his friends to pay a debt to Asclepius, and ends his defense saying only the god knows who goes to the better state. In 500–800 words, explain the subjunctive, the optative, and the conditions as they appear in these passages, and argue what Plato's grammar contributes to his portrait of Socrates.",
};
