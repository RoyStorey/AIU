import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "The Aorist and the Idea of Aspect",
  summary:
    "What aspect means and why it matters in Greek; the first aorist, active and middle, and how σ meets the stem; liquid aorists; the second aorist and its common verbs; aorist infinitives and imperatives; and readings from Xenophon, Plutarch's version of Caesar's three words, and the Gospel of Mark.",
  pages: [
    {
      title: "Aspect: How an Action Is Viewed",
      body: `## Welcome back

In GRK 101 you learned the alphabet, the accents, the three declensions, the article, the pronouns, and the thematic verb in the present, imperfect, and future, in all three voices. This course completes the grammar of Attic Greek. By its end you will know the aorist and perfect systems, the contract and μι-verbs, the participles, and the subjunctive and optative moods, and you will be reading Plato, Xenophon, Thucydides, Homer, and the New Testament with the help of notes.

We begin with the **aorist**, which is the most common past tense in Greek narrative, and with the idea of **aspect**, which governs how Greek uses its tenses.

## Time and aspect

English tenses mainly express **time**: past, present, or future. Greek tenses express time too, but they also, and often more importantly, express **aspect**: the way the speaker **views** the action.

Greek distinguishes three aspects:

1. The **imperfective** aspect, expressed by the **present** and **imperfect** tenses, views an action as **in progress**, **ongoing**, **repeated**, or **incomplete**: "was writing," "kept writing," "used to write."
2. The **aoristic** aspect, expressed by the **aorist** tense, views an action as a **simple whole**, a single event, without attention to its duration or repetition: "wrote."
3. The **perfective** aspect, expressed by the **perfect** tense, views an action as **completed** with a **result** that continues: "has written (and the writing exists)."

The word ***aorist*** comes from **ἀόριστος**, "unbounded," "undefined": the aorist presents the action without defining it as ongoing or as having a lasting result. It is the default, unmarked way of saying that something happened.

## An illustration

Consider these two sentences:

> **ἔγραφε** τὴν ἐπιστολήν. "He **was writing** the letter." (imperfect: the action in progress)
> **ἔγραψε** τὴν ἐπιστολήν. "He **wrote** the letter." (aorist: the action as a whole)

Both describe past actions, and in some contexts both might be translated "he wrote." But the imperfect invites the reader to see the writing as a process, perhaps interrupted or background to another event; the aorist simply reports it as done.

In narrative, this difference is essential. Greek writers use the **aorist** for the main events that move the story forward, and the **imperfect** for background, description, and ongoing or repeated actions:

> ἐπεὶ δὲ **ἠσθένει** Δαρεῖος … **μετεπέμψατο** Κῦρον. "When Darius **was ill** (imperfect: the background) … he **sent for** Cyrus (aorist: the event)."

## Aspect outside the indicative

In the **indicative**, the aorist refers to **past** time, and carries an augment. But in the **other moods** (subjunctive, optative, imperative), and in the **infinitive** and **participle**, the aorist usually has **no reference to time at all**. It expresses only **aspect**. This is one of the most important facts about Greek grammar, and it has no parallel in Latin or English.

> **γράφε**, "write!" (present imperative: keep writing, write habitually)
> **γράψον**, "write!" (aorist imperative: write, do it, once)

> **βούλομαι γράφειν**, "I want to be writing," "to write (regularly)"
> **βούλομαι γράψαι**, "I want to write (this, once)"

Neither the aorist imperative nor the aorist infinitive refers to the past. They simply view the action as a single whole. When you translate them, do **not** use an English past tense.

## Why aspect matters

The distinction of aspect lets Greek writers say things with great subtlety. A command in the present imperative may mean "keep doing it" or "make a habit of it"; the same command in the aorist means "do it (now, once)." A negative command in the present (**μὴ γράφε**) may mean "stop writing"; in the aorist subjunctive (**μὴ γράψῃς**), "do not (start to) write."

In the New Testament, the different aspects carry theological weight. In John 20:17, the risen Jesus says to Mary Magdalene **μή μου ἅπτου**, with a **present** imperative, which many scholars interpret as "stop clinging to me," "do not keep holding me," rather than "do not touch me" (the Latin *Nōlī mē tangere*). The Latin and English translations cannot easily show the difference; the Greek can.

## Aspect in other languages

Aspect is not peculiar to Greek. The **Slavic** languages, such as Russian and Polish, mark it even more systematically: almost every verb has an imperfective and a perfective form. English expresses aspect with auxiliary verbs: "I was writing" (progressive), "I have written" (perfect). Latin had a limited aspectual distinction between the imperfect and the perfect, as you may have learned in LAT 101. But Greek, among the classical languages, built its whole verbal system around aspect, and the aorist is its center.

## The principal parts, again

The aorist is the **third principal part** of a Greek verb:

> λύω, λύσω, **ἔλυσα**, λέλυκα, λέλυμαι, ἐλύθην

In this course you will learn all six. When you learn a new verb, always learn its principal parts; they are the keys to every form.

## A note on terminology

Grammarians use several sets of terms for these ideas. Some call the aorist aspect "perfective" (because it views the action as complete) and reserve "stative" for the perfect. Others speak of "process," "event," and "state." The names matter less than the idea: the Greek speaker had to choose, every time he used a verb, how to present the action, and that choice is visible to us in the stem. As you read, ask of every verb: is this action presented as ongoing, as a single event, or as a completed state?

## A first look at forms

You have already met several aorists without knowing it: **ἐγένετο**, "came into being," in John 1:3; **κατέλαβεν**, "overcame," in John 1:5; **κατέβην**, "I went down," at the start of the *Republic*; and **γνῶθι**, the aorist imperative in "know yourself." This lesson will explain them all.

> **Pause and consider.** Greek distinguishes "he was writing" (imperfect) from "he wrote" (aorist) not mainly by time but by how the action is viewed. When you tell a story, how do you signal which events are background and which are the main action?`,
    },
    {
      title: "The First Aorist Active",
      body: `## The sign of the aorist: σα

Most Greek verbs form their aorist by adding **σα** to the verb stem, with the **augment** in the indicative. This is called the **first aorist** or **sigmatic aorist**. It is closely related to the future: the future of **λύω** is **λύσω**, and the aorist is **ἔλυσα**.

## The aorist active indicative of λύω

| | Singular | Plural |
|---|---|---|
| 1 | **ἔλυσα**, I loosed | **ἐλύσαμεν**, we loosed |
| 2 | **ἔλυσας**, you loosed | **ἐλύσατε**, you loosed |
| 3 | **ἔλυσε(ν)**, he/she/it loosed | **ἔλυσαν**, they loosed |

The endings are **-σα, -σας, -σε(ν), -σαμεν, -σατε, -σαν**. Notice:

- the characteristic **α** in all forms except the third singular, which has **ε** (and takes movable ν);
- the **augment** (ἐ- or a lengthened vowel), as in the imperfect;
- the **recessive** accent.

## Infinitive and imperative

The **aorist active infinitive** ends in **-σαι**: **λῦσαι**, "to loose." Notice the circumflex: the final **-αι** counts as short, so the long **υ** of the penult takes a circumflex by the *sōtēra* rule. The infinitive has **no augment**, because the augment appears only in the indicative.

The **aorist active imperative** is:

| | Singular | Plural |
|---|---|---|
| 2 | **λῦσον**, loose! | **λύσατε**, loose! |

The singular ending **-σον** is irregular; learn it separately. The plural **λύσατε** is identical to the indicative **ἐλύσατε** without its augment.

## σ and the stem

When σ is added to a stem ending in a consonant, the same changes occur as in the future:

| Stem ending | + σ | Present | Future | Aorist |
|---|---|---|---|---|
| labial (π, β, φ) | ψ | πέμπω | πέμψω | **ἔπεμψα** |
| | | γράφω | γράψω | **ἔγραψα** |
| velar (κ, γ, χ) | ξ | διώκω | διώξω | **ἐδίωξα** |
| | | δείκνυμι, "show" | δείξω | **ἔδειξα** |
| dental (τ, δ, θ) | σ (dental lost) | πείθω | πείσω | **ἔπεισα** |
| ζ | σ | ὀνομάζω | ὀνομάσω | **ὠνόμασα** |

So the principal parts of these verbs follow regular patterns:

> πέμπω, πέμψω, **ἔπεμψα**
> γράφω, γράψω, **ἔγραψα**
> διώκω, διώξω, **ἐδίωξα**
> πείθω, πείσω, **ἔπεισα**

## Vowel stems

Verbs whose stems end in a vowel add **σα** directly: **παιδεύω** → **ἐπαίδευσα**; **κελεύω** → **ἐκέλευσα**; **πιστεύω** → **ἐπίστευσα**; **θύω** → **ἔθυσα**. Contract verbs, which you will learn in lesson 2, lengthen their stem vowel before σ: **ποιέω** → **ἐποίησα**; **τιμάω** → **ἐτίμησα**; **νικάω**, "conquer," → **ἐνίκησα**.

## Liquid aorists

Verbs whose stems end in a **liquid** or **nasal** (λ, μ, ν, ρ) do not add σ. Instead, they **lengthen the stem vowel** and add **α**:

| Present | Future | Aorist | Meaning |
|---|---|---|---|
| μένω | μενῶ | **ἔμεινα** | remain |
| ἀγγέλλω | ἀγγελῶ | **ἤγγειλα** | announce |
| κρίνω | κρινῶ | **ἔκρινα** (ῑ) | judge |
| φαίνω | φανῶ | **ἔφηνα** | show |
| ἀποκτείνω | ἀποκτενῶ | **ἀπέκτεινα** | kill |

The endings are the same as in the sigmatic aorist, without the σ: **ἔμεινα, ἔμεινας, ἔμεινε(ν), ἐμείναμεν, ἐμείνατε, ἔμειναν**.

## Compound verbs

As in the imperfect, the augment of a compound verb comes **after** the prefix: **ἀπολύω** → **ἀπέλυσα**; **ἀποκτείνω** → **ἀπέκτεινα**; **εἰσπέμπω** → **εἰσέπεμψα**. The infinitive and imperative have no augment: **ἀπολῦσαι**, **ἀπόλυσον**.

## Translating the aorist indicative

The aorist indicative is usually translated with the English **simple past**: **ἔλυσα**, "I loosed"; **ἔγραψε**, "he wrote"; **ἐπίστευσαν**, "they believed." Sometimes, especially in dialogue, it is best translated with an English **present perfect**: **ἤκουσας;** "Have you heard?" The aorist simply reports that the action happened.

Compare the imperfect, which is usually translated "was …ing," "used to …," or "kept …ing":

| Imperfect | Aorist |
|---|---|
| ἔγραφε, he was writing | ἔγραψε, he wrote |
| ἔπεμπον, they kept sending | ἔπεμψαν, they sent |
| ἐπίστευε, he used to believe | ἐπίστευσε, he believed, came to believe |

The last example shows a special use of the aorist, the **ingressive** aorist: with verbs describing a state, the aorist often means **entering** that state. **ἐπίστευσε** may mean "he came to believe"; **ἐβασίλευσε**, "he became king"; **ἐνόσησε**, "he fell ill."

## Practice

Give the aorist active indicative, infinitive, and imperative of each verb:

> παιδεύω — πέμπω — γράφω — διώκω — πείθω — μένω — κελεύω

Then translate:

> 1. ὁ στρατηγὸς τοὺς στρατιώτας ἐκέλευσε μένειν. 2. τὴν ἐπιστολὴν ἔγραψα καὶ ἔπεμψα. 3. οἱ Ἀθηναῖοι τοὺς Πέρσας ἐδίωξαν. 4. ὁ ῥήτωρ τοὺς πολίτας ἔπεισεν. 5. βούλομαι τὸν ἵππον λῦσαι. 6. γράψον μοι, ὦ φίλε. 7. ἐν τῇ πόλει ἐμείναμεν.

## Augment and accent

Because the accent of verbs is recessive and the augment adds a syllable, the accent often falls on the augment itself in short forms: **ἔλυσα**, **ἔπεμψα**, **ἔγραψα**. In longer forms the accent moves to the right: **ἐλύσαμεν**, **ἐπέμψαμεν**. In compounds, the accent cannot go back beyond the augment: **ἀπέλυσα**, not *ἄπελυσα. This rule also helps you find the augment, and therefore the prefix, in a compound verb.

## A drill

Write out the present, imperfect, future, and aorist of **παιδεύω**, first person singular, side by side: **παιδεύω, ἐπαίδευον, παιδεύσω, ἐπαίδευσα**. Then do the same for **πέμπω** (**πέμπω, ἔπεμπον, πέμψω, ἔπεμψα**), **γράφω**, and **πείθω**. Notice how the future and the aorist share the σ, and the imperfect and the aorist share the augment. Each tense is defined by a combination of marks: augment or none, σ or none, thematic vowel or **α**. Learn to read these marks, and you will identify any regular form at a glance.

> **Pause and consider.** The aorist infinitive λῦσαι means "to loose" without any reference to the past. Why might a language want a form that views an action as a single whole, without saying when it happens?`,
    },
    {
      title: "The First Aorist Middle",
      body: `## The middle of the aorist

The **aorist middle** is formed with **σα** and the **secondary middle endings**, the same endings you learned for the imperfect middle in GRK 101 (**-μην, -σο, -το, -μεθα, -σθε, -ντο**), attached with the vowel **α** instead of the thematic vowel.

## The aorist middle indicative of λύω

| | Singular | Plural |
|---|---|---|
| 1 | **ἐλυσάμην**, I ransomed | **ἐλυσάμεθα** |
| 2 | **ἐλύσω** | **ἐλύσασθε** |
| 3 | **ἐλύσατο** | **ἐλύσαντο** |

The second singular **ἐλύσω** comes from *ἐλύσασο*: the σ between vowels was lost, and **α** + **ο** contracted to **ω**. Do not confuse it with the future active first singular **λύσω**, which has no augment.

**Infinitive**: **λύσασθαι**, "to ransom."
**Imperative**: **λῦσαι**, **λύσασθε**, "ransom!"

Notice that the aorist **middle** imperative singular **λῦσαι** looks exactly like the aorist **active** infinitive **λῦσαι**. Context will distinguish them.

## Middle, not passive

In the present, imperfect, and perfect, the middle and passive share their forms. But in the **aorist** and the **future**, the **middle** and the **passive** are **different**. The aorist middle **ἐλυσάμην** means only "I ransomed" (middle), never "I was loosed" (passive). The aorist passive has its own form, **ἐλύθην**, which you will learn in lesson 2.

This means that in the aorist, you can always tell whether a verb is middle or passive from its form.

## Meanings of the aorist middle

The aorist middle has the same range of meanings as the present middle:

| Active aorist | Middle aorist |
|---|---|
| ἔλυσα τὸν ἵππον, "I loosed the horse" | ἐλυσάμην τὸν υἱόν, "I ransomed my son" |
| ἔπαυσα τὸν πόλεμον, "I stopped the war" | ἐπαυσάμην, "I stopped," "I ceased" |
| ἔγραψα, "I wrote" | ἐγραψάμην αὐτόν, "I indicted him" |
| ἐπαίδευσα τὸν υἱόν, "I educated my son" | ἐπαιδευσάμην τὸν υἱόν, "I had my son educated" |

## Deponents in the aorist

**Deponent** verbs, which have only middle forms in the present, also have middle forms in the aorist, if their aorist is sigmatic. These are called **middle deponents**:

| Present | Aorist | Meaning |
|---|---|---|
| δέχομαι | **ἐδεξάμην** | receive |
| μάχομαι | **ἐμαχεσάμην** | fight |
| ἀποκρίνομαι | **ἀπεκρινάμην** | answer (liquid aorist) |
| θεάομαι | **ἐθεασάμην** | watch |
| ἡγέομαι | **ἡγησάμην** | lead, believe |

Some deponents, as you saw in GRK 101, have **passive** forms in the aorist, with an active meaning: **βούλομαι** → **ἐβουλήθην**, "I wished." These are called **passive deponents**. Dictionaries tell you which kind each verb is.

## The aorist of ἄρχω

A very common verb with a useful active-middle contrast is **ἄρχω**, "rule," "begin":

> **ἄρχω** τῆς πόλεως (+ gen.), "I rule the city"
> **ἄρχομαι** τοῦ λόγου (+ gen.), "I begin the speech" (I make the beginning for myself)
> **ἦρξα** τῆς πόλεως, "I ruled the city," "I became ruler"
> **ἠρξάμην** τοῦ λόγου, "I began the speech"

You will meet the aorist middle participle of this verb in the first sentence of Thucydides's history (lesson 3): **ἀρξάμενος**, "having begun."

## The aorist as the "simple" form

Because the aorist is unmarked, it is the form Greek writers use when they have no special reason to use another tense. In a list of actions, each completed in turn, every verb will be aorist:

> ἦλθε, εἶδε, ἐνίκησε. "He came, he saw, he conquered."

As you will see on page 7, this is exactly how Plutarch renders Caesar's famous message in Greek.

## Practice

Give the aorist middle indicative, infinitive, and imperative of **παιδεύω**, **παύω**, and **γράφω**.

Then translate:

> 1. ὁ πατὴρ τὸν υἱὸν ἐλύσατο. 2. οἱ στρατιῶται ἐπαύσαντο τῆς μάχης. 3. τὰ δῶρα ἐδεξάμεθα. 4. ὁ Σωκράτης ἀπεκρίνατο. 5. βούλομαι τὸν υἱὸν παιδεύσασθαι. 6. οἱ Ἀθηναῖοι τοῖς Πέρσαις ἐμαχέσαντο. 7. ἠρξάμην τοῦ λόγου.

## Reviewing the tenses

You now know four tenses of the Greek indicative. Here they are for **λύω** in the third person singular:

| Tense | Active | Middle | Passive |
|---|---|---|---|
| Present | λύει | λύεται | λύεται |
| Imperfect | ἔλυε | ἐλύετο | ἐλύετο |
| Future | λύσει | λύσεται | (lesson 2) |
| Aorist | ἔλυσε | ἐλύσατο | (lesson 2) |

Notice that in the present and imperfect, the middle and passive share forms; in the future and aorist, they will differ.

## The middle in Thucydides

Historians like Thucydides use the aorist middle to describe actions taken by states or leaders in their own interest: **ἐποιήσαντο σπονδάς**, "they made a treaty" (for themselves); **ἐψηφίσαντο**, "they voted," from **ψηφίζομαι**, "vote with a pebble" (**ψῆφος**), the method of the Athenian assembly and courts; **ἐβουλεύσαντο**, "they deliberated." The middle voice suits the language of politics, in which every action is taken for the sake of the actor.

## Recognizing the aorist middle

The aorist middle is easy to recognize: look for **σα** (or **α** after a liquid) followed by a middle ending: **-σάμην, -σω, -σατο, -σάμεθα, -σασθε, -σαντο**. The combination of **α** and **-μην** or **-ντο** is unmistakable, and appears in no other tense. The only form that needs care is the second singular **-σω**, which looks like a future active; but it has an augment, and the future does not.

## A note on the -σαι forms

Three forms end in **-σαι**: the aorist active infinitive (**λῦσαι**), the aorist middle imperative singular (**λῦσαι**), and the aorist active optative third singular (**λύσαι**, lesson 5), which differs only in its accent. Context will almost always make the meaning clear: an infinitive depends on another verb, an imperative is a command, and an optative appears in a wish or a condition.

> **Pause and consider.** In the present tense, "I ransom" and "I am loosed" share a single form (λύομαι), but in the aorist they differ (ἐλυσάμην, ἐλύθην). Why might Greek have developed a separate passive form in some tenses but not others?`,
    },
    {
      title: "The Second Aorist",
      body: `## A different kind of aorist

Many of the most common Greek verbs do not form their aorist with σα. Instead, they use a **different stem**, usually shorter than the present stem, with the **thematic vowel** and the **secondary endings** of the imperfect. This is called the **second aorist** or **strong aorist**. It is not a different tense, only a different form: its meaning is exactly the same as the first aorist.

## Λαμβάνω: take

The verb **λαμβάνω**, "take," "receive," has the principal parts **λαμβάνω, λήψομαι, ἔλαβον, εἴληφα, εἴλημμαι, ἐλήφθην**. Its second aorist stem is **λαβ-**:

| | Singular | Plural |
|---|---|---|
| 1 | **ἔλαβον**, I took | **ἐλάβομεν** |
| 2 | **ἔλαβες** | **ἐλάβετε** |
| 3 | **ἔλαβε(ν)** | **ἔλαβον** |

These endings are **identical** to the imperfect endings (**-ον, -ες, -ε(ν), -ομεν, -ετε, -ον**). The only difference between the imperfect and the second aorist is the **stem**:

> **ἐλάμβανον**, "I was taking" (imperfect: present stem λαμβαν-)
> **ἔλαβον**, "I took" (second aorist: aorist stem λαβ-)

This is why you must learn principal parts. Without knowing that **λαβ-** is the aorist stem of **λαμβάνω**, you could not tell what **ἔλαβον** was.

## Infinitive and imperative

The **second aorist infinitive** ends in **-εῖν**, with a **circumflex** on the ending: **λαβεῖν**, "to take." Compare the present infinitive **λαμβάνειν**.

The **second aorist imperative** is **λάβε**, **λάβετε**, "take!" Five common verbs accent the singular imperative on the ending: **εἰπέ**, "say!"; **ἐλθέ**, "come!"; **εὑρέ**, "find!"; **ἰδέ**, "see!"; **λαβέ**, "take!" (in compounds, the accent recedes: **ἀπόλαβε**).

## The second aorist middle

The second aorist middle uses the imperfect middle endings on the aorist stem: **ἐγενόμην**, "I became," from **γίγνομαι**:

| | Singular | Plural |
|---|---|---|
| 1 | **ἐγενόμην** | **ἐγενόμεθα** |
| 2 | **ἐγένου** | **ἐγένεσθε** |
| 3 | **ἐγένετο** | **ἐγένοντο** |

**Infinitive**: **γενέσθαι**, with the accent on the penult. **Imperative**: **γενοῦ**, **γένεσθε**.

You met **ἐγένετο** in John 1:3: **πάντα δι' αὐτοῦ ἐγένετο**, "all things came into being through him."

## The most common second aorists

These verbs are among the most frequent in Greek. Learn their principal parts now:

| Present | Aorist | Aorist stem | Meaning |
|---|---|---|---|
| ἄγω | **ἤγαγον** | ἀγαγ- | lead |
| ἀποθνῄσκω | **ἀπέθανον** | θαν- | die |
| βάλλω | **ἔβαλον** | βαλ- | throw |
| γίγνομαι | **ἐγενόμην** | γεν- | become |
| ἔρχομαι | **ἦλθον** | ἐλθ- | come, go |
| ἔχω | **ἔσχον** | σχ- | have, get |
| εὑρίσκω | **ηὗρον** / **εὗρον** | εὑρ- | find |
| λαμβάνω | **ἔλαβον** | λαβ- | take |
| λέγω | **εἶπον** | εἰπ- | say |
| λείπω | **ἔλιπον** | λιπ- | leave |
| μανθάνω | **ἔμαθον** | μαθ- | learn |
| ὁράω | **εἶδον** | ἰδ- | see |
| πάσχω | **ἔπαθον** | παθ- | suffer, experience |
| πίπτω | **ἔπεσον** | πεσ- | fall |
| φεύγω | **ἔφυγον** | φυγ- | flee |
| αἱρέω | **εἷλον** | ἑλ- | take, capture |

Notice that several of these come from **different roots** from their presents: **λέγω** / **εἶπον**, **ὁράω** / **εἶδον**, **ἔρχομαι** / **ἦλθον**, **αἱρέω** / **εἷλον**. These are **suppletive** verbs, like English *go*/*went*. The forms **εἶπον** and **εἶδον** have an unusual augment (**εἰ-**), because their stems once began with the consonant **ϝ** (digamma, *w*), which was lost.

## Present and aorist stems

In many second aorists, the **present stem** is **longer** than the aorist stem, formed by adding a suffix or lengthening the root. Seeing the pattern helps you guess the aorist from the present, and the present from the aorist:

| Present (with suffix) | Aorist root |
|---|---|
| λα-μ-β-άν-ω | λαβ- |
| μα-ν-θ-άν-ω | μαθ- |
| λείπω (ει) | λιπ- (ι) |
| φεύγω (ευ) | φυγ- (υ) |
| πάσχω (from παθ-σκ-ω) | παθ- |

The aorist stem is usually the **root** of the verb, the most basic form. The present stem has been extended to express ongoing action. Many linguists believe that this is the older pattern, and that the aorist is in some sense more basic than the present.

## Derivatives from aorist stems

Many English words come from Greek aorist stems: **μαθ-** gives *mathematics* (**μάθημα**, "what is learned"); **παθ-** gives *pathos*, *sympathy*, *pathology*; **ἰδ-** (from **ϝιδ-**, related to Latin *videō*) gives *idea* (**ἰδέα**, "form," "appearance") and *idol* (**εἴδωλον**, "image"); **φυγ-** gives *fugitive* through Latin; **βαλ-** gives *ballistic*, *problem*, *symbol*, *parable*.

## Practice

Give the aorist indicative (first person singular), infinitive, and imperative of: **λαμβάνω**, **λείπω**, **φεύγω**, **μανθάνω**, **ἔρχομαι**.

Then translate:

> 1. ἔλαβε τὰ δῶρα. 2. οἱ πολέμιοι ἔφυγον. 3. τί εἶπες; 4. εἶδον τὸν βασιλέα. 5. ἦλθεν εἰς τὴν πόλιν. 6. ἔμαθον τὴν ἀλήθειαν. 7. πολλὰ ἐπάθομεν. 8. βούλομαι ἰδεῖν τὴν θάλατταν. 9. ἀπέθανεν ὁ γέρων. 10. σοφὸς ἐγένετο.

## Learning the principal parts

There is no shortcut. The second aorists must be learned with their verbs. Many students find it helpful to chant the first three principal parts as a unit: **λαμβάνω, λήψομαι, ἔλαβον**; **λείπω, λείψω, ἔλιπον**; **φεύγω, φεύξομαι, ἔφυγον**. Others make flashcards with the present on one side and the aorist on the other. Whatever method you use, review daily. Within a few weeks, the common second aorists will become as familiar to you as English *took*, *saw*, and *came*, which are themselves irregular past tenses learned by heart.

The famous cry of Archimedes, **εὕρηκα**, "I have found it," is the perfect of **εὑρίσκω**, whose aorist, **ηὗρον**, is in this table. You will learn the perfect in lesson 4.

> **Pause and consider.** In verbs like λαμβάνω / ἔλαβον, the aorist stem is the bare root and the present stem is extended. What might this suggest about which way of viewing an action is more basic: as an event, or as a process?`,
    },
    {
      title: "Using the Aorist",
      body: `## The aorist in narrative

In Greek narrative prose, the aorist and the imperfect divide the work of telling a story. The **aorist** reports the events that move the story forward; the **imperfect** describes the background, the ongoing circumstances, and repeated or attempted actions. A skilled reader watches for the alternation, which gives a narrative its shape.

Consider this sentence, adapted from Xenophon:

> οἱ μὲν Ἕλληνες **ἐμάχοντο**, ὁ δὲ Κῦρος **ἀπέθανεν**.
> "The Greeks **were fighting**, but Cyrus **died**."

The imperfect **ἐμάχοντο** sets the scene: the battle is in progress. The aorist **ἀπέθανεν** reports the decisive event: Cyrus was killed. In English we might say, "While the Greeks were fighting, Cyrus was killed."

## The gnomic aorist

The aorist indicative is sometimes used in **general truths**, proverbs, and similes, without reference to past time. This is called the **gnomic** aorist (from **γνώμη**, "maxim"). It is usually translated with an English present:

> **ἔπαθε** καὶ **ἔμαθε**. "He suffers and learns," "Through suffering comes learning." (A proverbial pattern; Herodotus 1.207 has Croesus say **τὰ δέ μοι παθήματα ἐόντα ἀχάριτα μαθήματα γέγονε**, "my sufferings, unpleasant as they were, have become lessons.")

This phrase alludes to a famous Greek idea, **πάθει μάθος**, "learning through suffering," which Aeschylus, in the *Agamemnon* (177), says Zeus has laid down as a law for human beings. The wordplay between **ἔπαθον** and **ἔμαθον**, "I suffered" and "I learned," which differ by a single letter, was a commonplace of Greek proverbial wisdom.

## The aorist imperative: commands

As you learned on page 1, the **present imperative** and the **aorist imperative** differ in aspect:

- the **present** imperative commands an **ongoing** or **repeated** action, or a general rule: **γράφε**, "keep writing," "write (habitually)";
- the **aorist** imperative commands a **single**, **specific** action: **γράψον**, "write (this, now)."

> **λέγε**, "speak," "go on speaking"
> **εἰπέ**, "say (it)," "tell me"
> **ἄκουε**, "listen" (keep listening)
> **ἄκουσον**, "hear (this)"

In Plato, Socrates often says **εἰπέ μοι**, "tell me," with an aorist imperative, asking for a specific answer to a specific question.

## Negative commands

For **negative** commands, Greek uses **μή** with:

- the **present imperative**, for an ongoing action, often meaning "**stop** doing": **μὴ γράφε**, "stop writing," "don't keep writing";
- the **aorist subjunctive** (lesson 5), for a single action, meaning "**don't** (start to) do": **μὴ γράψῃς**, "don't write."

The aorist **imperative** is not used with **μή**. You will learn the aorist subjunctive in lesson 5.

## The aorist infinitive

After verbs like **βούλομαι**, **ἐθέλω**, **κελεύω**, and **δύναμαι** ("be able"), the **aorist** infinitive is used for a **single** action, the **present** for a **continuing** or **repeated** one. Neither refers to past time:

> **κελεύει** αὐτὸν **ἐλθεῖν**. "He orders him to come." (once)
> **κελεύει** αὐτοὺς **μάχεσθαι**. "He orders them to fight." (keep fighting)
> **βούλομαι ἰδεῖν** τὴν πόλιν. "I want to see the city." (once)

In **indirect statement** (lesson 5), however, the infinitive does keep its time reference: the aorist infinitive represents a past action.

## The aorist with ἄν

The aorist indicative with the particle **ἄν** expresses what **would have** happened, in a contrary-to-fact condition (lesson 5):

> **ἦλθεν ἄν**. "He would have come."

## Translating aspect

English cannot always show the difference between the aorist and the present outside the indicative. When you translate, choose English that gives the sense of the Greek: "keep on," "go on," "make a habit of" for the present; plain verbs for the aorist. But do not over-translate: often the plain English verb is right for both. The important thing is to **notice** the difference, and to let it shape your understanding, even when your translation cannot show it.

## Aspect in a famous text

In the Lord's Prayer, which you read in GRK 101, the petitions about daily needs use **aorist** imperatives: **δὸς ἡμῖν σήμερον**, "give us today"; **ἄφες ἡμῖν**, "forgive us." But Luke's version (11:3) has **δίδου ἡμῖν τὸ καθ' ἡμέραν**, "keep giving us each day," with a **present** imperative of **δίδωμι**, because the request is for continuous provision. The two Gospel writers, using the two aspects, frame the same request differently: Matthew asks for today's bread, Luke for bread day after day.

## Practice

Translate, and explain the choice of aspect in each:

> 1. ὁ μὲν διδάσκαλος ἔλεγεν, οἱ δὲ μαθηταὶ ἤκουον. 2. ὁ ἄγγελος ἦλθε καὶ εἶπε τὰ νέα. 3. εἰπέ μοι τὴν ἀλήθειαν. 4. ἀεὶ λέγε τὴν ἀλήθειαν. 5. κελεύω σε ἐλθεῖν. 6. μὴ φεῦγε. 7. ἔπαθον μὲν πολλά, ἔμαθον δὲ πολλά.

## Aspect in the participle

The participles, which you will learn in lesson 3, also distinguish aspect. A present participle describes an action going on at the same time as the main verb; an aorist participle usually describes an action that happened before it, as a single whole. **ἀκούων ἐγέλα**, "while listening, he laughed"; **ἀκούσας ἐγέλασε**, "having heard, he laughed," "when he heard, he laughed." Here, as in the infinitive, the aorist does not mark absolute past time; it marks the action as a single completed event, and its relation to the main verb is inferred from context.

## Aspect and translation

Translators of Greek sometimes overemphasize aspect, rendering every present imperative as "keep doing" and every aorist as "do once." Experienced readers know that the choice is often subtle, and sometimes governed by idiom or convenience rather than by a deliberate contrast. Some verbs are used almost always in one aspect; some contexts favor one aspect regardless of meaning. The best guide is wide reading: the more Greek you read, the more you will feel the difference, and the less you will need to force it into English.

## Aspect and the reader

When you read a passage, try marking each verb with a letter: **P** for present-stem forms (present, imperfect), **A** for aorist, and later **F** for perfect. You will begin to see patterns: speeches and descriptions full of P; narratives of action full of A; conclusions and results marked by F. This simple exercise trains the eye to see what Greek readers felt without thinking.

> **Pause and consider.** Aeschylus says that Zeus established the law πάθει μάθος, "learning through suffering." Do you think suffering is necessary for some kinds of learning? Why might the Greeks have believed so?`,
    },
    {
      title: "Reading Xenophon: Cyrus Is Summoned",
      body: `## Back to the Anabasis

In GRK 101 you read the first sentence of Xenophon's *Anabasis*: Darius II, king of Persia, was dying, and wanted both his sons to be with him. The next sentence tells what he did. You can now read it, with its aorists:

> **ὁ μὲν οὖν πρεσβύτερος παρὼν ἐτύγχανε· Κῦρον δὲ μεταπέμπεται ἀπὸ τῆς ἀρχῆς ἧς αὐτὸν σατράπην ἐποίησε, καὶ στρατηγὸν δὲ αὐτὸν ἀπέδειξε πάντων ὅσοι εἰς Καστωλοῦ πεδίον ἁθροίζονται.**

(Xenophon, *Anabasis* 1.1.2)

## Notes

- **ὁ μὲν οὖν πρεσβύτερος**, "now the elder (son)," Artaxerxes; **μὲν οὖν**, "so," "now," a common transitional phrase;
- **παρὼν ἐτύγχανε**, "happened to be present": **ἐτύγχανε**, imperfect of **τυγχάνω**, "happen," with the participle **παρών**, "being present" (from **πάρειμι**); this idiom, **τυγχάνω** with a participle, means "happen to be doing" (lesson 3);
- **Κῦρον δὲ μεταπέμπεται**, "but he sends for Cyrus": a **historical present** of the middle **μεταπέμπομαι**, "send for," "summon" (the middle: he sends for him for his own sake);
- **ἀπὸ τῆς ἀρχῆς**, "from the province," "from the command": **ἀρχή** here means "rule," "a governed territory";
- **ἧς αὐτὸν σατράπην ἐποίησε**, "of which he had made him satrap": **ἧς** is the relative pronoun, genitive by **attraction** to **ἀρχῆς** (it would otherwise be **ἥν**, accusative); **ἐποίησε**, **aorist** of the contract verb **ποιέω**, "make," with a double accusative (**αὐτὸν σατράπην**, "him satrap"); **σατράπης**, "satrap," a Persian provincial governor, a masculine first-declension noun;
- **καὶ στρατηγὸν δὲ αὐτὸν ἀπέδειξε**, "and he had also appointed him general": **ἀπέδειξε**, **aorist** of **ἀποδείκνυμι**, "show," "appoint," "declare" (a sigmatic aorist with κ + σ = ξ);
- **πάντων ὅσοι**, "of all those who": **ὅσοι**, "as many as";
- **εἰς Καστωλοῦ πεδίον**, "at the plain of Castolus" (in western Asia Minor), where the Persian forces of the region were mustered;
- **ἁθροίζονται**, "are mustered," "gather," present passive (or middle) of **ἁθροίζω**, "gather," the present expressing a regular practice.

## Translation

"Now the elder son happened to be present; but Cyrus he sent for from the province of which he had made him satrap; and he had also appointed him general of all the forces that muster at the plain of Castolus."

## Reading the passage

**The tenses.** Xenophon's sentence uses four tenses. The **imperfect** **ἐτύγχανε** gives the background: Artaxerxes was already there. The **historical present** **μεταπέμπεται** reports the main action vividly: Darius sends for Cyrus. The two **aorists**, **ἐποίησε** and **ἀπέδειξε**, refer to earlier events, Cyrus's appointment as satrap and general, which explain why he was away. Greek uses the simple aorist where English, looking back from a past event, uses the pluperfect: "he **had** made him satrap." And the **present** **ἁθροίζονται** describes a general custom: the troops of the region regularly muster at Castolus.

**The relative attraction.** **ἧς** for **ἥν** is an example of the attraction you learned in GRK 101: the relative takes the genitive case of its antecedent **τῆς ἀρχῆς**.

**The historical situation.** Cyrus the Younger, the favorite son of his mother Parysatis, had been sent west in 407 BCE, as a young man, to command the Persian forces in Asia Minor. There he became the ally of Sparta in the last years of the Peloponnesian War, and paid for the fleet with which the Spartan admiral Lysander finally defeated Athens. When he was summoned to his father's deathbed in 405 BCE, he brought with him three hundred Greek hoplites; four years later, after his brother's accession, he would bring ten thousand to fight for the throne.

## Xenophon as a model

Xenophon's prose has been the first continuous Greek read by students for centuries, because it is clear, regular, and vivid, and uses a wide range of grammar without obscurity. Ancient readers called him the "Attic Muse" for the sweetness of his style. His *Anabasis* is also one of the great adventure stories of the ancient world: the march of the Ten Thousand through hostile territory to the sea, culminating in the famous cry of the soldiers when they saw the Black Sea from a mountain top: **θάλαττα, θάλαττα**, "the sea, the sea!" (4.7.24). You will read that passage in the Greek courses that follow.

## Persian terms in Greek

The passage contains a Persian word in Greek dress: **σατράπης**, "satrap," from Old Persian *xšaçapāvan*, "protector of the realm." The Greeks borrowed many such terms for Persian institutions, and Greek writers like Herodotus and Xenophon are among our main sources for the Persian Empire. The empire was divided into some twenty satrapies, each governed by a satrap who collected tribute, raised troops, and answered to the Great King. Cyrus's appointment as satrap of Lydia, Greater Phrygia, and Cappadocia, and as general of the forces at Castolus, gave him extraordinary power in the west, which he would later use against his brother.

## Historical present and aorist together

Notice how Xenophon mixes the historical present **μεταπέμπεται** with the aorists **ἐποίησε** and **ἀπέδειξε**. The historical present brings the main action vividly before the reader, as if it were happening now; the aorists, looking back, supply the facts the reader needs to understand it. English narrative would put everything in the past ("he sent for Cyrus, whom he had made satrap"), but Greek can shift between tenses for effect, and good translators sometimes keep the shift.

## Reading the whole chapter

The first chapter of the *Anabasis* is about two pages long. After this lesson, you can read most of it with a dictionary and a commentary. Try to read a few sentences each day. It describes how, after Darius's death, Artaxerxes became king, how Cyrus was accused of plotting against him and saved by his mother, and how he returned to his province determined never again to be in his brother's power, and began secretly to gather an army of Greeks.

> **Pause and consider.** Xenophon wrote the *Anabasis* about an expedition in which he himself took part, but referred to himself in the third person. Why might an author describe his own actions as if they were someone else's?`,
    },
    {
      title: "Readings: Caesar's Three Words and the Baptism of Jesus",
      body: `## Two short passages

The two passages on this page show the aorist in two very different kinds of Greek. The first is from **Plutarch** (c. 46–120 CE), a Greek philosopher and biographer of the Roman Empire, whose *Parallel Lives* paired famous Greeks and Romans. The second is from the **Gospel of Mark**, the earliest of the four Gospels, written in simple Koine Greek around 70 CE.

## 1. Plutarch: "I came, I saw, I conquered"

In LAT 101 you learned Caesar's famous message after his victory over Pharnaces at Zela in 47 BCE: *Vēnī, vīdī, vīcī*. Plutarch, writing in Greek more than a century later, reports it in his *Life of Caesar* (50.3–4), and translates it into Greek:

> **ἀπαγγέλλων δὲ τὴν τῆς μάχης ταύτης ὀξύτητα πρός τινα τῶν ἐν Ῥώμῃ φίλων Ἀμάντιον ἔγραψε τρεῖς λέξεις· «ἦλθον, εἶδον, ἐνίκησα.»**

**Notes**

- **ἀπαγγέλλων**, "announcing," present participle of **ἀπαγγέλλω**, "report";
- **τὴν τῆς μάχης ταύτης ὀξύτητα**, "the swiftness of this battle," with the genitive in attributive position;
- **πρός τινα τῶν ἐν Ῥώμῃ φίλων Ἀμάντιον**, "to one of his friends in Rome, Amantius";
- **ἔγραψε**, **aorist** of **γράφω**, "he wrote";
- **τρεῖς λέξεις**, "three words": **λέξις**, "word," "expression," an ι-stem like **πόλις**;
- **ἦλθον**, **second aorist** of **ἔρχομαι**, "I came";
- **εἶδον**, **second aorist** of **ὁράω**, "I saw";
- **ἐνίκησα**, **first aorist** of the contract verb **νικάω**, "conquer," "I conquered."

**Translation**: "In reporting the swiftness of this battle to one of his friends in Rome, Amantius, he wrote three words: 'I came, I saw, I conquered.'"

Plutarch goes on to explain, for his Greek readers, that in Latin the three words have the same ending and the same number of syllables, giving a striking brevity. In Greek, the effect is partly lost: two of the aorists are second aorists ending in **-ον**, and the third is a first aorist ending in **-α**. But all three are aorists, and the aorist is exactly right: three single, completed actions, reported without elaboration.

## 2. Mark: The baptism of Jesus

The Gospel of Mark tells its story with remarkable speed, using the aorist and the word **εὐθύς**, "immediately," constantly. Here is its account of Jesus's baptism by John (1:9–11):

> **Καὶ ἐγένετο ἐν ἐκείναις ταῖς ἡμέραις ἦλθεν Ἰησοῦς ἀπὸ Ναζαρὲτ τῆς Γαλιλαίας καὶ ἐβαπτίσθη εἰς τὸν Ἰορδάνην ὑπὸ Ἰωάννου. καὶ εὐθὺς ἀναβαίνων ἐκ τοῦ ὕδατος εἶδεν σχιζομένους τοὺς οὐρανοὺς καὶ τὸ πνεῦμα ὡς περιστερὰν καταβαῖνον εἰς αὐτόν· καὶ φωνὴ ἐγένετο ἐκ τῶν οὐρανῶν· σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός, ἐν σοὶ εὐδόκησα.**

**Notes**

- **καὶ ἐγένετο**, "and it came to pass," a Hebrew idiom (*wayyehi*) carried into Greek through the Septuagint; **ἐγένετο** is the second aorist of **γίγνομαι**;
- **ἐν ἐκείναις ταῖς ἡμέραις**, "in those days," with the demonstrative in predicate position;
- **ἦλθεν**, "came," second aorist of **ἔρχομαι**;
- **ἀπὸ Ναζαρὲτ τῆς Γαλιλαίας**, "from Nazareth of Galilee";
- **ἐβαπτίσθη**, "was baptized," the **aorist passive** of **βαπτίζω**, "dip," "immerse," "baptize" (lesson 2); **εἰς τὸν Ἰορδάνην**, "in(to) the Jordan"; **ὑπὸ Ἰωάννου**, "by John," agent with **ὑπό** and the genitive;
- **εὐθύς**, "immediately," Mark's favorite word, used more than forty times in his Gospel;
- **ἀναβαίνων**, "coming up," present participle of **ἀναβαίνω** (lesson 3);
- **εἶδεν**, "he saw," second aorist of **ὁράω**;
- **σχιζομένους τοὺς οὐρανούς**, "the heavens being torn open," present passive participle of **σχίζω**, "split" (whence *schism*);
- **τὸ πνεῦμα ὡς περιστερὰν καταβαῖνον**, "the Spirit descending like a dove";
- **φωνὴ ἐγένετο**, "a voice came";
- **σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός**, "you are my beloved son," with **ἀγαπητός** in attributive position after the repeated article;
- **ἐν σοὶ εὐδόκησα**, "in you I am well pleased," literally "I was well pleased," the **aorist** of **εὐδοκέω**: a case where the aorist is best rendered by an English present.

**Translation**: "And it came to pass in those days that Jesus came from Nazareth of Galilee and was baptized by John in the Jordan. And immediately, coming up out of the water, he saw the heavens torn open and the Spirit descending upon him like a dove; and a voice came from the heavens: 'You are my beloved son; in you I am well pleased.'"

## Reading Mark

Mark's style is the opposite of Plutarch's. It is simple, paratactic (joining clauses with **καί**, "and," rather than subordinating them), and full of Semitic idioms from the Hebrew and Aramaic background of the first Christians. Ancient readers trained in classical rhetoric sometimes found it crude. But its plainness gives it great power, and its rapid succession of aorists, **ἦλθεν**, **ἐβαπτίσθη**, **εἶδεν**, **ἐγένετο**, joined by **καί** and **εὐθύς**, drives the story forward.

The aorist **εὐδόκησα**, "I was pleased," is a puzzle for translators. It refers to God's present delight in his son, and is usually translated with an English present. Some scholars explain it as a timeless aorist, others as an echo of a Hebrew perfect, which can refer to a state resulting from a past decision. Here, as often, aspect matters more than time.

## Plutarch and Mark compared

Plutarch was a learned man writing for an educated audience, and his Greek imitates the classical Attic of four centuries earlier, with balanced clauses and careful subordination. Mark was writing for early Christian communities, in the everyday Koine of the eastern Mediterranean, and his Greek shows the influence of Aramaic and of the Greek translation of the Hebrew Bible. Both wrote in the first century of the Roman Empire, perhaps within fifty years of each other. Comparing them shows how wide the range of Greek was in that period, from the literary to the popular, and how the same grammar, in different hands, could produce very different styles.

> **Pause and consider.** Plutarch's three Greek aorists and Mark's chain of aorists joined by "and" both tell actions as completed events. How does a chain of aorists make a narrative feel, compared to one full of imperfects?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each set aloud first, then write your answers in your notebook.

## 1. First aorists

Give the aorist active and middle indicative (all persons), infinitive, and imperative of:

> παιδεύω — πέμπω — γράφω — μένω (active only)

**Questions**

1. What is the sign of the first aorist, and how does it combine with consonant stems?
2. How do liquid aorists differ from sigmatic aorists?

## 2. Second aorists

Give the principal parts (present, future, aorist) and the aorist infinitive of:

> λαμβάνω — λείπω — ἔρχομαι — λέγω — ὁράω — γίγνομαι

**Questions**

1. How do you tell the imperfect ἐλάμβανον from the aorist ἔλαβον?
2. Which verbs have aorists from different roots from their presents?

## 3. Aspect

Translate, and explain each choice of aspect:

> 1. ὁ μὲν ἔγραφεν, ὁ δὲ ἦλθεν. 2. εἰπέ μοι τί ἐστιν ἀρετή. 3. ἀεὶ λέγε τὴν ἀλήθειαν. 4. βούλομαι μαθεῖν. 5. κελεύω ὑμᾶς μάχεσθαι. 6. ἔπαθε καὶ ἔμαθεν.

**Questions**

1. Why does the aorist infinitive in sentence 4 not refer to the past?
2. What is a gnomic aorist?

## 4. Xenophon, Plutarch, and Mark

Read aloud:

> Κῦρον δὲ μεταπέμπεται ἀπὸ τῆς ἀρχῆς ἧς αὐτὸν σατράπην ἐποίησε.
> ἦλθον, εἶδον, ἐνίκησα.
> σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός, ἐν σοὶ εὐδόκησα.

**Questions**

1. Why does Xenophon use the aorist ἐποίησε where English would use "had made"?
2. Identify the first and second aorists in Plutarch's three words.

## Drawing the threads together

In a paragraph, explain the difference between the aorist and the imperfect, both in the indicative and outside it, with at least four examples from this lesson.`,
    },
  ],
  readings: [
    { kind: "book", title: "Introduction to Attic Greek", author: "Donald J. Mastronarde", publisher: "University of California Press", year: "2nd ed., 2013", note: "Read the units on the first and second aorist and on aspect." },
    { kind: "book", title: "Athenaze: An Introduction to Ancient Greek, Book II", author: "Maurice Balme and Gilbert Lawall", publisher: "Oxford University Press", year: "3rd ed., 2016", note: "Read the chapters introducing the aorist aloud." },
    { kind: "book", title: "Greek Grammar", author: "Herbert Weir Smyth, rev. Gordon M. Messing", publisher: "Harvard University Press", year: "1956", note: "See the sections on the aorist and on the uses of the tenses." },
  ],
  media: [
    { kind: "book", title: "The Expedition of Cyrus", author: "Xenophon, trans. Robin Waterfield", publisher: "Oxford World's Classics", year: "2005", note: "Read book 1, chapter 1." },
    { kind: "book", title: "Roman Lives", author: "Plutarch, trans. Robin Waterfield", publisher: "Oxford World's Classics", year: "1999", note: "Includes the Life of Caesar." },
  ],
  questions: [
    {
      prompt: "What does the aorist aspect express?",
      choices: [
        "An ongoing action",
        "An action viewed as a simple whole",
        "A completed action with lasting result",
        "A future action",
      ],
      answer: 1,
      explanation: "ἀόριστος, “undefined”: the default way of saying something happened.",
    },
    {
      prompt: "Outside the indicative, what does the aorist usually express?",
      choices: ["Past time", "Aspect only, not time", "Future time", "Present time"],
      answer: 1,
      explanation: "λῦσαι, “to loose,” has no past reference.",
    },
    {
      prompt: "What is the aorist active indicative, first person singular, of πέμπω?",
      choices: ["ἔπεμπον", "ἔπεμψα", "πέμψω", "πέπομφα"],
      answer: 1,
      explanation: "π + σ = ψ, with the augment.",
    },
    {
      prompt: "How do liquid verbs like μένω form the aorist?",
      choices: [
        "With σα",
        "By lengthening the stem vowel and adding α: ἔμεινα",
        "With a second aorist",
        "With reduplication",
      ],
      answer: 1,
      explanation: "No σ after λ, μ, ν, ρ.",
    },
    {
      prompt: "In which tenses are the middle and passive forms different?",
      choices: [
        "Present and imperfect",
        "Future and aorist",
        "All tenses",
        "No tenses",
      ],
      answer: 1,
      explanation: "ἐλυσάμην (middle) vs. ἐλύθην (passive).",
    },
    {
      prompt: "What is the aorist of λαμβάνω?",
      choices: ["ἐλάμβανον", "ἔλαβον", "ἐλάμψα", "εἴληφα"],
      answer: 1,
      explanation: "A second aorist on the stem λαβ-.",
    },
    {
      prompt: "What is the aorist infinitive of λέγω?",
      choices: ["λέξαι", "εἰπεῖν", "λέγειν", "εἰπέ"],
      answer: 1,
      explanation: "Second aorists accent the infinitive ending: -εῖν.",
    },
    {
      prompt: "What does an ingressive aorist like ἐβασίλευσε mean?",
      choices: [
        "He was king",
        "He became king",
        "He will be king",
        "He is king",
      ],
      answer: 1,
      explanation: "With verbs of state, the aorist marks entry into the state.",
    },
    {
      prompt: "What does πάθει μάθος mean?",
      choices: [
        "Suffering is useless",
        "Learning through suffering",
        "Learning without pain",
        "Suffering after learning",
      ],
      answer: 1,
      explanation: "Aeschylus, Agamemnon 177.",
    },
    {
      prompt: "In Plutarch's ἦλθον, εἶδον, ἐνίκησα, which is a first aorist?",
      choices: ["ἦλθον", "ἐνίκησα", "εἶδον", "All three"],
      answer: 1,
      explanation: "From the contract verb νικάω; the other two are second aorists.",
    },
  ],
  reflection:
    "Xenophon, Plutarch, and Mark each tell their stories through aorists. In 500–800 words, explain the idea of aspect in Greek and how the aorist differs from the imperfect, and argue, using one of this lesson's passages, how the choice of aspect shapes the way a reader experiences a narrative.",
};
