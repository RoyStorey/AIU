import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "The Sounds of Language: Phonetics and Phonology",
  summary:
    "Why linguists need a phonetic alphabet; the vocal tract; consonants by place, manner, and voicing; vowels; phonemes and allophones; phonological rules such as assimilation and the English plural; distinctive features and natural classes; syllables and phonotactics; stress, intonation, and tone; accents and sound change; the sound systems of the world; and how infants learn the sounds of their language.",
  pages: [
    {
      title: "Studying the Sounds of Speech",
      body: `## Two fields

The study of speech sounds has two main branches. **Phonetics** studies the physical properties of speech sounds: how they are produced by the vocal tract (**articulatory phonetics**), their acoustic properties as sound waves (**acoustic phonetics**), and how they are perceived by the ear and brain (**auditory phonetics**). **Phonology** studies how sounds function in a particular language: which sounds count as different, how they combine, and how they change in different contexts. Phonetics asks what sounds human beings can make; phonology asks how each language organizes them into a system. This lesson introduces both; PHO 101 and PHO 110 study phonetics in depth.

## The problem with spelling

Ordinary spelling is a poor guide to pronunciation, especially in English. The same letter can stand for different sounds: *c* in *cat* and *city*; *a* in *father*, *cat*, *cake*, and *about*. The same sound can be spelled in many ways: the vowel of *see* is spelled differently in *sea*, *seize*, *people*, *key*, *ski*, and *machine*. Some letters represent no sound at all, as in *knight*, *psalm*, and *debt*. Some sounds have no letter of their own: the first sound of *thin* and the first sound of *this* are different, but both are spelled *th*.

A well-known joke, often attributed to George Bernard Shaw though without good evidence, claims that *ghoti* could spell *fish*: *gh* as in *enough*, *o* as in *women*, *ti* as in *nation*. The joke is unfair—English spelling has rules about where letter combinations can occur—but it makes the point that spelling and sound are only loosely related.

## The International Phonetic Alphabet

To describe sounds precisely, linguists use the **International Phonetic Alphabet** (**IPA**), developed by the International Phonetic Association, which was founded in 1886 by a group of language teachers led by the French phonetician **Paul Passy**. The first version of the alphabet appeared in 1888, and it has been revised many times since. The IPA's guiding principle is **one symbol, one sound**: each symbol represents exactly one sound, and each sound is represented by exactly one symbol, whatever language it occurs in.

The IPA uses familiar Latin letters for many sounds, along with additional symbols. For example:

- [θ] (theta) for the first sound of *thin*;
- [ð] (eth) for the first sound of *this*;
- [ʃ] (esh) for the first sound of *ship*;
- [ʒ] for the middle sound of *measure*;
- [ŋ] for the final sound of *sing*;
- [ə] (schwa) for the unstressed vowel in *about* and *sofa*.

Phonetic transcriptions are written in **square brackets**. Thus *thin* is [θɪn], *ship* is [ʃɪp], and *sing* is [sɪŋ]. As we will see, linguists use **slashes** for a different purpose, to represent phonemes.

## Why it matters

The IPA allows linguists to record and compare the sounds of any language, including languages that have never been written. Lexicographers use it in dictionaries; language teachers use it to teach pronunciation; speech therapists use it to describe disorders; and singers use it to learn the pronunciation of songs in foreign languages.

> **Pause and consider.** Write the word *knight* as it is pronounced, not as it is spelled. How many sounds does it contain? How many letters?`,
    },
    {
      title: "The Vocal Tract",
      body: `## An instrument made of borrowed parts

The organs we use to speak all have other primary functions. The lungs are for breathing; the larynx protects the airway; the tongue, teeth, and lips are for eating. In the course of human evolution, these organs were adapted for speech. Together they form the **vocal tract**, a tube running from the lungs to the lips and nose.

## The airstream

Almost all speech sounds in the world's languages are made with air pushed out from the **lungs**. As the air passes through the vocal tract, it is shaped and obstructed in various ways, producing different sounds. A few languages also use other airstream mechanisms, as we will see with the clicks of southern Africa.

## The larynx and voicing

Air from the lungs passes through the **larynx**, the "voice box," at the top of the windpipe, visible in many men as the "Adam's apple." Inside the larynx are the **vocal folds** (also called vocal cords), two bands of muscle and tissue. The space between them is the **glottis**. When the vocal folds are held close together, air passing between them makes them vibrate, producing **voicing**. When they are held apart, air passes freely and the sound is **voiceless**.

You can feel the difference by placing your fingers on your throat and saying a long *zzzz*, then a long *ssss*. During *zzzz*, you feel vibration; during *ssss*, you do not. [z] is voiced; [s] is voiceless. The two sounds are otherwise made in the same way. Similarly, [v] is voiced and [f] voiceless; [b] voiced and [p] voiceless.

## The oral and nasal cavities

Above the larynx, the air passes through the **pharynx** (the throat) and then through the **oral cavity** (the mouth), the **nasal cavity** (the nose), or both. The **velum**, or soft palate, at the back of the roof of the mouth, can be raised to close off the nasal cavity, or lowered to let air pass through the nose. When it is lowered, the sound is **nasal**, as with [m], [n], and [ŋ]. Try holding your nose and saying *mmm*: the sound stops, because the air must escape through the nose.

## The articulators

Within the mouth, sounds are shaped by the **articulators**. The **lips** can close, round, or touch the teeth. The **tongue**, the most important articulator, can move its tip, blade, front, back, and root to touch or approach different parts of the roof of the mouth: the **teeth**; the **alveolar ridge**, the bony ridge just behind the upper front teeth; the **hard palate**, the bony roof of the mouth; the **velum**; and the **uvula**, the small fleshy projection at the back of the soft palate.

## Speech as movement

Speech is a rapid, finely coordinated sequence of movements. In ordinary conversation, a speaker produces perhaps ten to fifteen speech sounds per second, each involving the precise coordination of the lungs, larynx, velum, tongue, and lips. Neighboring sounds overlap and influence each other—a phenomenon called **coarticulation**. The *k* in *keep* is made farther forward in the mouth than the *k* in *cool*, in anticipation of the following vowel, though English speakers hear them as the same sound.

## Human and animal

The human vocal tract differs from that of other primates. In adult humans, the larynx sits lower in the throat, giving a longer pharynx and allowing a wider range of vowel sounds. Researchers once argued that Neanderthals could not have spoken because of their vocal anatomy; this claim is now disputed. The evolution of speech remains an active area of research.

> **Pause and consider.** Say *keep* and *cool* slowly, paying attention to where your tongue touches the roof of your mouth for the *k*. Do you notice a difference?`,
    },
    {
      title: "Consonants",
      body: `## Describing consonants

**Consonants** are sounds made with some obstruction of the airflow in the vocal tract. Phoneticians describe each consonant by three features: **voicing** (voiced or voiceless), **place of articulation** (where the obstruction occurs), and **manner of articulation** (how the airflow is obstructed).

## Place of articulation

The main places of articulation, from the front of the mouth to the back, are:

- **bilabial**: both lips, as in [p], [b], [m];
- **labiodental**: lower lip against upper teeth, as in [f], [v];
- **dental** (or interdental): tongue tip against or between the teeth, as in [θ] (*thin*) and [ð] (*this*);
- **alveolar**: tongue tip against the alveolar ridge, as in [t], [d], [s], [z], [n], [l];
- **postalveolar** (or palato-alveolar): tongue blade just behind the alveolar ridge, as in [ʃ] (*ship*), [ʒ] (*measure*), [tʃ] (*church*), [dʒ] (*judge*);
- **palatal**: tongue front against the hard palate, as in [j] (the *y* of *yes*);
- **velar**: tongue back against the velum, as in [k], [g], [ŋ] (*sing*);
- **glottal**: at the glottis itself, as in [h], and the glottal stop [ʔ], the catch in the middle of *uh-oh*.

Many languages also use places that English does not, such as the **uvular** sounds of French *r* and Arabic *q*, or the **pharyngeal** sounds of Arabic.

## Manner of articulation

The main manners are:

- **stops** (or plosives): the airflow is completely blocked and then released, as in [p], [b], [t], [d], [k], [g];
- **fricatives**: the airflow is forced through a narrow gap, causing turbulence, as in [f], [v], [θ], [ð], [s], [z], [ʃ], [ʒ], [h];
- **affricates**: a stop followed by a fricative at the same place, as in [tʃ] and [dʒ];
- **nasals**: the mouth is blocked but the velum is lowered, so air flows through the nose, as in [m], [n], [ŋ];
- **liquids**: [l], in which air flows around the sides of the tongue, and the English [ɹ];
- **glides** (or approximants): [j] and [w], made with little obstruction, almost like vowels.

## Putting it together

Each consonant can be described by its three features. [p] is a **voiceless bilabial stop**; [b] is a **voiced bilabial stop**; [m] is a **voiced bilabial nasal**. [s] is a **voiceless alveolar fricative**; [z] a **voiced alveolar fricative**. [k] is a **voiceless velar stop**; [ŋ] a **voiced velar nasal**. Linguists arrange the consonants of the IPA in a chart, with places across the top and manners down the side.

## English consonants

Standard American and British English have about twenty-four consonants: [p b t d k g f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l ɹ j w]. Notice that [ŋ] never begins an English word, though it does in many other languages, such as Vietnamese (*Nguyen*) and Swahili.

## Clicks and ejectives

Some languages use consonants made with airstreams other than air from the lungs. **Clicks**, found in languages of southern Africa such as **Zulu** and **Xhosa** and in the Khoisan languages, are made by creating a vacuum in the mouth and releasing it, producing a sharp popping sound, like the "tsk tsk" of disapproval in English, but used as ordinary consonants in words. The name *Xhosa* itself begins with a click. **Ejectives**, found in languages of the Caucasus, Ethiopia, and the Americas, are made by closing the glottis and pushing air out by raising the larynx.

## Universals of consonants

Some consonants are very common across languages: nearly all languages have [p], [t], [k], [m], and [n]. Others are rare: the dental fricatives [θ] and [ð] of English, which learners of English often find difficult, occur in relatively few of the world's languages.

> **Pause and consider.** Describe the first sound of your own name using the three features of voicing, place, and manner.`,
    },
    {
      title: "Vowels",
      body: `## Sounds without obstruction

**Vowels** are sounds made with a relatively open vocal tract, without significant obstruction of the airflow. Instead of place and manner, vowels are described by the position of the tongue and the shape of the lips. Almost all vowels are voiced.

## Height, backness, rounding

Phoneticians describe vowels by three main features:

- **Height**: how high the tongue is raised. In *beat* [i], the tongue is high; in *bat* [æ], it is low. High vowels are also called **close**, low vowels **open**.
- **Backness**: whether the highest part of the tongue is toward the front or the back of the mouth. In *beat* [i], the tongue is forward; in *boot* [u], it is back.
- **Rounding**: whether the lips are rounded. In *boot* [u], the lips are rounded; in *beat* [i], they are spread.

So [i] is a **high front unrounded** vowel; [u] is a **high back rounded** vowel; [ɑ] (the vowel of *father* in many American accents) is a **low back unrounded** vowel. You can feel these differences: say *beat*, *bit*, *bait*, *bet*, *bat* in sequence and notice your jaw dropping and your tongue lowering.

## The vowel chart

The IPA represents vowels on a chart shaped like a trapezoid, roughly reflecting the space inside the mouth, with front vowels on the left, back vowels on the right, high vowels at the top, and low vowels at the bottom. Rounded and unrounded vowels at the same position are placed side by side.

## Rounded front vowels

English pairs front vowels with unrounded lips and back vowels with rounded lips. But many languages have **front rounded** vowels: French *tu* "you" [ty] and German *über* "over" [y], and French *peu* "little" and German *schön* "beautiful" with [ø]. To make [y], say [i] as in *beat* and round your lips without moving your tongue. English speakers often find these vowels difficult.

## Tense and lax, long and short

English vowels also differ in **tenseness**: the **tense** vowels of *beat* [i] and *boot* [u] are made with greater muscular tension and are typically longer than the **lax** vowels of *bit* [ɪ] and *book* [ʊ]. Some languages distinguish **long** and **short** vowels directly: in Finnish, *tuli* means "fire" and *tuuli* means "wind."

## Diphthongs

A **diphthong** is a vowel that changes quality during its production, gliding from one position to another. English has several: the vowels of *bite* [aɪ], *bout* [aʊ], and *boy* [ɔɪ]. In many accents, the vowels of *bait* [eɪ] and *boat* [oʊ] are also diphthongs.

## Nasal vowels

In some languages, vowels can be **nasalized** by lowering the velum, letting air flow through the nose as well as the mouth. French distinguishes oral and nasal vowels: *beau* [bo] "beautiful" and *bon* [bɔ̃] "good." Portuguese and Hindi also have distinctive nasal vowels. In English, vowels are nasalized automatically before nasal consonants, as in *man*, but this nasalization does not distinguish words.

## How many vowels?

The number of vowels varies greatly across languages. Many languages, such as Spanish, Japanese, and Swahili, have five vowels: roughly [i e a o u]. Classical Arabic has only three vowel qualities, [i a u], long and short. English, depending on the accent, has about a dozen or more distinct vowels and diphthongs, which is why English spelling, with only five vowel letters, struggles to represent them. The **Great Vowel Shift**, a series of changes in English pronunciation between about 1400 and 1700, raised the long vowels and turned some into diphthongs, which is why English vowel letters have values different from those of most other European languages: *bite* was once pronounced like modern *beet*.

> **Pause and consider.** Say *beat*, *bit*, *bait*, *bet*, *bat*. What happens to your tongue and jaw?`,
    },
    {
      title: "Phonemes and Allophones",
      body: `## Same or different?

Every language uses only some of the sounds the vocal tract can make, and it organizes them into a system. Sounds that are physically different may count as "the same" in one language and "different" in another. This is the central insight of **phonology**.

## An English example

Hold your hand in front of your mouth and say *pin*, then *spin*. You should feel a puff of air after the *p* in *pin*, but little or none after the *p* in *spin*. The *p* of *pin* is **aspirated**, written [pʰ]; the *p* of *spin* is **unaspirated**, written [p]. Phonetically, they are different sounds. Yet most English speakers have never noticed the difference, and regard both as "the same *p*." In English, aspiration is predictable: voiceless stops are aspirated at the beginning of a stressed syllable, and unaspirated after *s*. No two English words are distinguished by aspiration alone.

## Phonemes

Linguists call the abstract unit that speakers perceive as "one sound" a **phoneme**, and write it between slashes: /p/. The different physical realizations of a phoneme are its **allophones**, written in square brackets: [pʰ] and [p] are allophones of the English phoneme /p/. A phoneme is not a single sound, but a family of sounds that function as one in a language's system—an application of Saussure's idea that elements of language are defined by their contrasts.

## Minimal pairs

How do linguists determine which sounds are separate phonemes in a language? The main test is the **minimal pair**: two words that differ in only one sound and have different meanings. *Pat* and *bat* form a minimal pair, showing that /p/ and /b/ are separate phonemes in English. *Thin* and *sin* show that /θ/ and /s/ are separate phonemes. If two sounds can distinguish words, they **contrast**, and belong to different phonemes.

## Complementary distribution

If two sounds never occur in the same environment, so that one can be predicted from the context, they are in **complementary distribution**, and are typically allophones of a single phoneme. English [pʰ] and [p] are in complementary distribution: [pʰ] at the start of stressed syllables, [p] after *s*.

## Different languages, different systems

What counts as one phoneme in one language may be two in another. In **Hindi**, aspirated and unaspirated stops are separate phonemes: *pal* "moment" and *phal* "fruit" are different words. A Hindi speaker readily hears the difference between the *p* of *pin* and *spin* that English speakers ignore.

In **Japanese**, the English sounds [l] and [ɹ] are not separate phonemes; Japanese has a single liquid phoneme, often realized as a tap. This is why many Japanese speakers find it difficult to hear and produce the English contrast between *light* and *right*—not because of any defect, but because their language's system groups the two sounds together.

In **Spanish**, the sounds [d] (as in English *day*) and [ð] (as in English *they*) are allophones of a single phoneme /d/: [d] occurs at the beginning of a phrase or after *n* or *l*, as in *dónde* "where," and [ð] between vowels, as in *nada* "nothing." In English, *day* and *they* are different words, so /d/ and /ð/ are separate phonemes.

## The phoneme in the mind

Phonemes are not physical objects but categories in the minds of speakers. Speakers perceive the sounds of their language through the filter of its phonemes, hearing differences that matter and ignoring those that do not. This explains much about foreign accents: learners tend to substitute the nearest phoneme of their own language, and to miss contrasts their language does not make.

> **Pause and consider.** Find two minimal pairs in English that show that /s/ and /z/ are separate phonemes.`,
    },
    {
      title: "Phonological Rules",
      body: `## Sounds in context

Phonemes change their form depending on the sounds around them, according to regular **phonological rules**. Speakers apply these rules unconsciously, and they are part of every speaker's linguistic competence.

## Assimilation

The most common kind of rule is **assimilation**: a sound becomes more like a neighboring sound. Consider the English prefix *in-*, meaning "not." In *intolerable* and *indecent*, it is pronounced with [n]. But before *p* or *b*, it becomes *im-*: *impossible*, *imbalance*. Before *l* and *r* it assimilates completely: *illegal*, *irregular*. The nasal takes on the place of articulation of the following consonant: bilabial [m] before bilabial [p] and [b]. Even within words where spelling does not show it, speakers often pronounce *input* with [m] and *income* with [ŋ].

## The English plural

The English plural suffix offers a classic example of a phonological rule. Spelled *-s* or *-es*, it has three pronunciations:

- [s] after voiceless sounds: *cats* [kæts], *books*, *cliffs*;
- [z] after voiced sounds: *dogs* [dɑgz], *bees*, *pens*;
- [ɪz] (or [əz]) after **sibilants**, the "hissing" and "hushing" sounds [s z ʃ ʒ tʃ dʒ]: *horses*, *roses*, *wishes*, *churches*, *judges*.

The suffix **assimilates in voicing** to the preceding sound, and an extra vowel is inserted to separate two sibilants, which would otherwise be hard to distinguish. English speakers apply this rule automatically to new words: if you learned that a *wug* is a kind of creature, you would know at once that two of them are *wugs*, with [z].

## The wug test

In a famous experiment published in 1958, the psycholinguist **Jean Berko Gleason** showed young children a picture of a small bird-like creature and said: "This is a wug. Now there is another one. There are two of them. There are two ___." Children as young as four or five answered "wugs," with the correct [z]. Since they had never heard the word, they could not have memorized the plural; they must have learned a **rule**. The "wug test" became one of the most famous demonstrations of children's linguistic knowledge.

## The past tense

The English past tense suffix *-ed* follows a similar pattern: [t] after voiceless sounds (*walked*), [d] after voiced sounds (*played*), and [ɪd] after *t* or *d* (*wanted*, *needed*).

## Flapping

In American English, the consonants /t/ and /d/ between a stressed vowel and an unstressed vowel are pronounced as a quick **flap** [ɾ], a tap of the tongue against the alveolar ridge. *Water* is pronounced [wɑɾɚ], and *latter* and *ladder* often sound alike. Many American speakers pronounce *writer* and *rider* almost alike, distinguished only by the length of the preceding vowel—a subtle consequence of the interaction of two rules.

## Other kinds of rules

Other rules **delete** sounds (the *g* of *sign* is silent, but appears in *signature*), **insert** sounds (many speakers say *hamster* with a little [p]: "hampster"), or **change** sounds in other ways. Many rules make speech easier to produce; others make it easier to perceive.

## Rules and change

Phonological rules can also explain historical changes and the patterns of related words. The vowel alternation in *divine* and *divinity*, *serene* and *serenity*, reflects the Great Vowel Shift, which changed long vowels but not short ones; the spelling preserves the older relationship.

> **Pause and consider.** What is the plural of *blick*, a made-up word? Of *bliss*? How do you know?`,
    },
    {
      title: "Distinctive Features and Natural Classes",
      body: `## Below the phoneme

Phonemes are not the smallest units of phonology. Each phoneme can be analyzed as a bundle of **distinctive features**, properties that distinguish it from other phonemes. The idea was developed by the linguists of the **Prague school** in the 1920s and 1930s, especially **Nikolai Trubetzkoy** and **Roman Jakobson**, and refined in ***The Sound Pattern of English*** (1968) by **Noam Chomsky** and **Morris Halle**.

## Binary features

In most feature systems, each feature is **binary**: a sound either has it (+) or lacks it (−). For example:

- **[±voice]**: [b d g z] are [+voice]; [p t k s] are [−voice].
- **[±nasal]**: [m n ŋ] are [+nasal]; [b d g] are [−nasal].
- **[±continuant]**: fricatives such as [f s] are [+continuant], since air flows continuously; stops such as [p t] are [−continuant].
- **[±sonorant]**: vowels, glides, liquids, and nasals are [+sonorant]; stops, fricatives, and affricates are [−sonorant].
- Place features, such as **[labial]**, **[coronal]** (made with the tongue tip or blade), and **[dorsal]** (made with the back of the tongue).

On this view, /b/ is [+voice, −nasal, −continuant, labial], and /m/ differs from it only in being [+nasal].

## Natural classes

Features explain why phonological rules apply to particular groups of sounds. Rules rarely apply to arbitrary collections, like [p], [ʃ], and [æ]. They apply to **natural classes**: groups of sounds that share features. The English rule of aspiration applies to the voiceless stops [p t k], a natural class: [−voice, −continuant, −sonorant]. The English plural rule inserts a vowel after the **sibilants** [s z ʃ ʒ tʃ dʒ], another natural class. A rule that applied to [p], [ʃ], and [æ] would be hard to state, and such rules are almost never found.

## Economy of description

Features make phonological descriptions more economical and more explanatory. The rule of nasal assimilation that turns *in-* into *im-* before [p] and [b] can be stated simply: a nasal takes on the place features of the following consonant. The same rule explains *income* with [ŋ] before the velar [k]. Without features, one would need separate rules for each case.

## Features and the mind

Are features real units in the mind, or just useful descriptive tools? Evidence from speech errors, language acquisition, and aphasia suggests that speakers do treat sounds as bundles of properties. A speech error may change one feature of a sound while keeping others: someone intending to say "Cedar Rapids" might say "Cedar Rabids," exchanging only the voicing or place of two consonants. Children's early pronunciations often simplify sounds by changing a single feature, replacing [−continuant] stops for [+continuant] fricatives, as in *tun* for *sun*.

## Sign language phonology

Sign languages, as we saw in Lesson I, also have features: handshape, location, movement, and orientation, each with a limited set of values, combining to form signs. This parallel suggests that the organization of language into small distinctive features is a general property of human language, not specific to the medium of sound.

> **Pause and consider.** What natural class do [m], [n], and [ŋ] form? What feature do they share that [b], [d], and [g] lack?`,
    },
    {
      title: "Syllables and Phonotactics",
      body: `## The syllable

Speakers of every language can count **syllables**, even if they cannot define them. *Cat* has one syllable, *catalog* three. A syllable typically consists of a **nucleus**, usually a vowel, which is its peak of sonority, optionally preceded by consonants called the **onset** and followed by consonants called the **coda**. In *strengths*, the onset is [stɹ], the nucleus is the vowel [ɛ], and the coda is [ŋkθs] in many pronunciations—a famously heavy syllable.

## Phonotactics

Every language has rules about which sequences of sounds may occur, called **phonotactic constraints**. As we saw in Lesson I, English allows *blick* but not *bnick*: the onset *bn* is not permitted, though it is in other languages. English allows the onset *str-* (*string*) but not *srt-*; it allows the coda *-ft* (*left*) but not *-tf*. A word like *ngop*, with [ŋ] at the beginning, is impossible in English but possible in many other languages.

## Sonority

A widely observed principle governs many of these constraints: the **sonority sequencing principle**. Sounds differ in **sonority**, roughly their loudness or resonance: vowels are most sonorous, followed by glides, liquids, nasals, fricatives, and stops. Within a syllable, sonority tends to rise toward the nucleus and fall after it. Thus English allows *plan* (stop, liquid, vowel: rising sonority) but not *lpan* (liquid, stop: falling sonority before the vowel). There are exceptions, such as the *s* in *stop*, which many languages allow.

## Simple and complex syllables

Languages differ greatly in the complexity of syllables they allow. Some, like **Hawaiian**, allow only very simple syllables: a vowel, optionally preceded by a single consonant (CV or V). That is why every Hawaiian word ends in a vowel, as in *aloha* and *Honolulu*. **Japanese** allows mostly CV syllables, with a few possible codas. Others, like **English**, **Russian**, and **Georgian**, allow clusters of consonants at the beginning and end of syllables.

## Loanwords

Phonotactic constraints are clearly visible when words are borrowed from one language into another. When Japanese borrows the English word *Christmas*, which has the complex onset *kr-* and the coda *-s*, it inserts vowels to fit Japanese syllable structure: *kurisumasu*. *Strike*, the baseball term, becomes *sutoraiku*. When English borrows words from other languages, it adapts them too: the Czech name *Dvořák* is pronounced by English speakers with an inserted vowel or a simplified cluster.

## Language games

Speakers' knowledge of syllables also shows up in **language games**. In English **Pig Latin**, the onset of a word is moved to the end and followed by *-ay*: *string* becomes *ingstray*. The game works only because speakers know, unconsciously, what an onset is. Many languages have similar games, used by children or as secret codes.

## Slips of the tongue

Speech errors also reveal the units of phonology. In spoonerisms, named after the Oxford dean **William Spooner**, who was famous for them (or credited with them), onsets are exchanged between words: "you have hissed all my mystery lectures" for "missed all my history lectures." Such errors almost never produce phonotactically impossible sequences, showing that the rules operate even when speakers make mistakes.

> **Pause and consider.** Translate your name into Pig Latin. What did you have to know about the structure of the first syllable to do it?`,
    },
    {
      title: "Stress, Intonation, and Tone",
      body: `## Beyond single sounds

Some features of speech extend over more than a single sound: the relative prominence of syllables, the rise and fall of the voice, and the rhythm of speech. These are called **prosodic** or **suprasegmental** features.

## Stress

In English, some syllables are more prominent than others: they are louder, longer, and higher in pitch. This prominence is called **stress**. English stress can distinguish words: as a noun, *REcord* is stressed on the first syllable; as a verb, *reCORD*, on the second. Similarly *PERmit* and *perMIT*, *CONtract* and *conTRACT*. Stress also affects vowel quality: unstressed vowels in English are often reduced to schwa [ə], as in the second syllable of the noun *record*. Compare *phoTOGraphy* with *PHOtograph*: the stressed vowel changes, and the unstressed ones are reduced.

In some languages, stress is fixed: in **Finnish** and **Hungarian**, it always falls on the first syllable; in **Polish**, usually on the second-to-last; in **French**, on the last syllable of a phrase.

## Intonation

**Intonation** is the pattern of pitch over a phrase or sentence. In English, intonation can turn a statement into a question: "You're leaving." with falling pitch is a statement; "You're leaving?" with rising pitch is a question. Intonation also expresses emotion, emphasis, and attitude: sarcasm, surprise, boredom, and politeness are often conveyed more by intonation than by words. The placement of the main pitch accent can change meaning: "*I* didn't say he stole it" and "I didn't say he *stole* it" imply different things.

## Tone

In many languages, pitch distinguishes **words**, not just sentences. These are **tone languages**. In **Mandarin Chinese**, the syllable *ma* has different meanings depending on its tone: with a high level tone (*mā*) it means "mother"; with a rising tone (*má*), "hemp"; with a falling-rising tone (*mǎ*), "horse"; with a falling tone (*mà*), "scold." Mandarin has four tones (plus a neutral tone); **Cantonese** has six or more, depending on how they are counted.

Tone languages are common in **East and Southeast Asia** (Chinese, Vietnamese, Thai, Burmese), in **sub-Saharan Africa** (Yoruba, Igbo, Zulu, and most other Niger-Congo languages), and among indigenous languages of the **Americas** (such as Navajo and many languages of Mexico). Perhaps half or more of the world's languages use tone to distinguish words, though estimates vary.

## Talking drums

A remarkable illustration of tone comes from West and Central Africa, where **talking drums** were used to send messages over long distances. Because languages like **Yoruba** distinguish words by tone, drummers could imitate the tonal pattern of phrases, which listeners could recognize. To avoid ambiguity, since many words share the same tones, drummers used long, formulaic phrases—for example, describing the moon with a set expression—whose tonal patterns were distinctive.

## Tone and music

Speakers of tone languages face special challenges in singing, since melody may conflict with lexical tone. Composers of songs in tone languages often try to match melodic contour to tone, so that the words remain intelligible. Some research has suggested that speakers of tone languages are more likely to have absolute pitch, though the relation between tone and musical ability is still under study.

> **Pause and consider.** Say "You're leaving" first as a statement and then as a question. What changes? Can you think of a word in English whose meaning changes with stress?`,
    },
    {
      title: "Accents and Sound Change",
      body: `## Everyone has an accent

An **accent** is a way of pronouncing a language, characteristic of a region, social group, or individual. Everyone has an accent; what people call "no accent" is usually simply the accent that is most familiar or most prestigious to them. Accents differ in their phoneme inventories, in the allophones of phonemes, in phonological rules, and in prosody.

## Some English differences

English accents around the world differ in many ways. A few examples:

- **Rhoticity.** In most American, Scottish, and Irish accents, /ɹ/ is pronounced after vowels, as in *car* and *hard*; these accents are **rhotic**. In most accents of England, Australia, New Zealand, and South Africa, it is not; these accents are **non-rhotic**. The *r* in *car* was pronounced in English generally until the eighteenth century, when its loss spread in southern England.
- **Mergers.** Many speakers in the western and northern United States and Canada pronounce *cot* and *caught* the same, a **merger** of two vowels that other speakers keep distinct. Many speakers in the southern United States pronounce *pin* and *pen* alike.
- **Glottal stops.** In many British accents, /t/ between vowels or at the end of a word is pronounced as a glottal stop: *bottle* as "bo'le."
- **Vowel shifts.** In cities around the Great Lakes, a chain of vowel changes called the **Northern Cities Shift**, documented by William Labov and others from the 1960s, has changed the vowels of words like *cat*, *cot*, and *caught*.

## Sound change

Accents differ because **sound change** is constant. Every language's pronunciation changes over time, and changes that begin in one place or group spread unevenly. Over centuries, such changes can transform a language beyond recognition: the English of *Beowulf* (perhaps the eighth to the early eleventh century) is unintelligible to modern readers without study, and Chaucer's English of the 1390s sounds strange, as we saw in CHH 110.

## Regular change

One of the great discoveries of nineteenth-century linguistics was that sound change is often **regular**: a change affects every word in which the relevant sound occurs in the relevant environment. The Great Vowel Shift changed the long vowel of *bite*, *mice*, *wine*, and every similar word, not just a few. This regularity, stated in "sound laws," made it possible to reconstruct the history of languages and to prove their relationships, as we will see in HIL 101 and HIL 110. Grimm's Law, for example, describes how the Proto-Indo-European voiceless stops became fricatives in the Germanic languages: compare Latin *pater* and English *father*, Latin *tres* and English *three*.

## Prestige and stigma

Some accents enjoy **prestige**; others are **stigmatized**. In England, the accent called **Received Pronunciation**, associated with the upper classes and the public schools, long served as a standard, and was used by the BBC. In recent decades, regional accents have become more widely accepted in British public life. Attitudes toward accents, like attitudes toward dialects, reflect social judgments about speakers, not the linguistic quality of the accent itself.

> **Pause and consider.** Do you pronounce *cot* and *caught* the same? *Pin* and *pen*? What does your answer suggest about your accent?`,
    },
    {
      title: "Sound Systems of the World",
      body: `## Large and small inventories

The world's languages differ greatly in the number of phonemes they use. **Rotokas**, a language of Bougainville in Papua New Guinea, has one of the smallest known inventories, with only eleven phonemes: six consonants and five vowels. At the other extreme, some Khoisan languages of southern Africa, such as **!Xóõ** (also called Taa), have well over a hundred phonemes, many of them clicks. English, with roughly forty phonemes, falls in the middle.

## Common and rare sounds

Some sounds are found in almost every language; others are rare. Almost all languages have stops at the bilabial, alveolar, and velar places, such as [p], [t], and [k]; almost all have the nasals [m] and [n]; almost all have the vowels [i], [a], and [u], which are maximally distinct from each other in the vowel space. Sounds such as the English dental fricatives [θ] and [ð], front rounded vowels, and clicks are relatively rare.

## Implicational universals

Linguists have found that sound inventories are not random. Many follow **implicational universals**: statements of the form "if a language has X, it also has Y." For example:

- If a language has voiced stops such as [b d g], it almost always has voiceless stops such as [p t k], but not necessarily the reverse.
- If a language has front rounded vowels such as [y], it almost always has [i].
- If a language has nasal vowels, it also has oral vowels.

The sounds that are implied—more common, learned earlier by children, and lost later in aphasia—are often called **unmarked**; the rarer sounds that imply them, **marked**. Roman Jakobson argued in *Child Language, Aphasia and Phonological Universals* (1941) that the order in which children acquire sounds mirrors the patterns of the world's inventories, and that aphasic patients lose sounds in roughly the reverse order.

## Why these patterns?

Why are some sounds and systems more common than others? Linguists offer several explanations. Some sounds are easier to produce; some are easier to perceive and distinguish; vowel systems tend to spread their vowels evenly through the available space, maximizing the differences between them. Whatever the explanations, the existence of such universals suggests that the diversity of human sound systems is constrained by the shared physiology and perception of the human species.

## Databases

Linguists now use large databases to study these patterns. The **PHOIBLE** database, for example, compiles the phoneme inventories of over two thousand languages, allowing researchers to test claims about universals and frequencies that earlier scholars could only guess at. The **World Atlas of Language Structures** (WALS), which we will meet in later courses, maps the distribution of phonological and grammatical features across the world's languages.

> **Pause and consider.** Rotokas has eleven phonemes and !Xóõ over a hundred. Does a language with fewer phonemes need longer words? Why might that be?`,
    },
    {
      title: "How Infants Learn Sounds",
      body: `## Born ready

How do children learn the sound system of their language? Research since the 1970s has shown that infants come into the world remarkably prepared to perceive speech, and that their perception is shaped by the language they hear during the first year of life.

## Universal listeners

In a classic study published in 1971, **Peter Eimas** and his colleagues showed that infants only a month old can distinguish speech sounds such as [ba] and [pa], and perceive them **categorically**, as adults do: they hear a sharp boundary between the two sounds, rather than a gradual continuum. Later studies showed that young infants can distinguish the contrasts of all the world's languages, including contrasts their parents cannot hear.

## Becoming native listeners

This universal ability does not last. In a famous study published in 1984, **Janet Werker** and **Richard Tees** showed that infants raised in English-speaking homes at six to eight months could distinguish contrasts from **Hindi** and from **Nthlakampx** (a Salish language of British Columbia) that English-speaking adults could not; but by ten to twelve months, they had largely lost this ability, while infants raised hearing those languages retained it. Infants become specialists in the sounds of their own language before they say their first words. The researcher **Patricia Kuhl** has described this process as "perceptual narrowing," shaped by the statistical patterns of the speech infants hear, and, her research suggests, by social interaction: in one study, infants learned to distinguish Mandarin sounds from a live speaker, but not from the same speaker on video.

## Babbling

Production follows perception. Around six to eight months, infants begin **babbling**: producing repeated syllables such as *bababa* and *dadada*. Babbling at first includes sounds not in the child's language, but gradually comes to resemble the sounds and rhythms of the language around them. Deaf infants exposed to sign language **babble with their hands**, producing repetitive, syllable-like movements, as the researcher **Laura-Ann Petitto** showed in 1991, suggesting that babbling reflects a general capacity for language rather than simply the motor development of the mouth.

## First words

Most children produce their first words around their first birthday. Their early pronunciations are systematically simplified: they may reduce consonant clusters (*stop* becomes *top*), replace fricatives with stops (*sun* becomes *tun*), or repeat syllables (*water* becomes *wawa*). These simplifications follow regular patterns, and children gradually master the full sound system over several years; some sounds, such as English [ɹ] and [θ], may not be fully mastered until age six or seven.

## Second languages

The perceptual narrowing of infancy helps explain why learning the sounds of a second language is difficult for adults. Adults perceive the new language through the categories of their first, and may not even hear contrasts that do not exist in their native language, as Japanese speakers may not hear the difference between [l] and [ɹ]. With training, adults can improve, but few who begin after childhood achieve a native-like accent. This is one piece of evidence for a sensitive period in language learning, which we met in Lesson I.

## The sound of language

Pinker, in *The Language Instinct*, describes the sound system as one of the clearest examples of how the human mind imposes discrete categories on a continuous physical signal. The waveform of speech is a smear of overlapping sounds without clear boundaries between words, as anyone listening to an unfamiliar language knows; yet native listeners hear distinct phonemes, syllables, and words, effortlessly and instantly.

> **Pause and consider.** Infants lose the ability to hear foreign contrasts before they speak their first words. What might be the advantage of becoming a specialist in one's own language so early?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each exercise, then write your answers in your notebook.

## 1. Transcription

Write the following words in IPA, using the symbols introduced in this lesson: *ship*, *thin*, *this*, *sing*, *church*, *judge*, *measure*.

**Questions**

1. Which of these words contain sounds that English spelling represents with two letters?
2. Which contain sounds that have no single letter in English?

## 2. Aspiration

> *pin* [pʰɪn] and *spin* [spɪn]

**Questions**

1. Why are [pʰ] and [p] allophones of one phoneme in English, but separate phonemes in Hindi?
2. What test would you use to show that two sounds are separate phonemes?

## 3. The plural rule

Give the plural of *cat*, *dog*, *horse*, and the made-up words *wug*, *blick*, and *gloss*.

**Questions**

1. State the rule for the pronunciation of the English plural.
2. What did Jean Berko Gleason's wug test show about children's knowledge?

## 4. Tone

> Mandarin *mā* "mother," *má* "hemp," *mǎ* "horse," *mà* "scold"

**Questions**

1. What is a tone language?
2. How does tone differ from English intonation?

## Drawing the threads together

In a paragraph, explain the difference between phonetics and phonology, using at least three of the exercises.`,
    },
  ],
  readings: [
    { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "Read the chapters on phonetics and phonology." },
    { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage", year: "1975; 7th ed., 2015", note: "Read chapter 1, \"Articulation and Acoustics.\"" },
    { kind: "website", title: "The International Phonetic Alphabet (chart)", author: "International Phonetic Association", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart", note: "Study the pulmonic consonant chart and the vowel chart." },
  ],
  media: [
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapter 6, \"The Sounds of Silence.\"" },
    { kind: "book", title: "The Child's Learning of English Morphology", author: "Jean Berko", publisher: "Word 14", year: "1958", note: "The original wug test article, pp. 150–177." },
  ],
  questions: [
    {
      prompt: "What is the guiding principle of the International Phonetic Alphabet?",
      choices: [
        "To follow English spelling",
        "One symbol, one sound",
        "To use only Latin letters",
        "To represent words, not sounds",
      ],
      answer: 1,
      explanation: "Each symbol stands for exactly one sound in any language.",
    },
    {
      prompt: "What is the difference between [s] and [z]?",
      choices: [
        "Place of articulation",
        "Voicing: [z] is voiced, [s] voiceless",
        "Manner of articulation",
        "Nasality",
      ],
      answer: 1,
      explanation: "Feel your throat while saying each.",
    },
    {
      prompt: "How would you describe [m]?",
      choices: [
        "A voiceless alveolar stop",
        "A voiced bilabial nasal",
        "A voiced velar fricative",
        "A voiceless labiodental fricative",
      ],
      answer: 1,
      explanation: "The lips close and air flows through the nose.",
    },
    {
      prompt: "How would you describe the vowel [u] in boot?",
      choices: [
        "Low front unrounded",
        "High back rounded",
        "Mid central",
        "High front unrounded",
      ],
      answer: 1,
      explanation: "[i] in beat is high front unrounded.",
    },
    {
      prompt: "In English, what is the relation between [pʰ] in pin and [p] in spin?",
      choices: [
        "They are separate phonemes",
        "They are allophones of the phoneme /p/",
        "They are the same sound",
        "One is a vowel",
      ],
      answer: 1,
      explanation: "In Hindi, aspiration distinguishes words.",
    },
    {
      prompt: "What is a minimal pair?",
      choices: [
        "Two words that rhyme",
        "Two words that differ in only one sound and have different meanings",
        "Two words with the same meaning",
        "Two syllables",
      ],
      answer: 1,
      explanation: "Pat and bat show /p/ and /b/ are separate phonemes.",
    },
    {
      prompt: "Why does the prefix in- become im- in impossible?",
      choices: [
        "By accident",
        "By assimilation: the nasal takes the bilabial place of the following [p]",
        "Because of spelling rules only",
        "Because of Latin grammar",
      ],
      answer: 1,
      explanation: "Assimilation is the most common phonological process.",
    },
    {
      prompt: "What did the wug test show?",
      choices: [
        "That children memorize plurals",
        "That young children apply the plural rule to words they have never heard",
        "That children cannot form plurals",
        "That wugs exist",
      ],
      answer: 1,
      explanation: "Jean Berko Gleason published it in 1958.",
    },
    {
      prompt: "Why does Japanese borrow Christmas as kurisumasu?",
      choices: [
        "By mistake",
        "Because Japanese syllable structure requires inserting vowels to break up consonant clusters",
        "Because Japanese has no k",
        "Because of Chinese influence",
      ],
      answer: 1,
      explanation: "Japanese syllables are mostly consonant-vowel.",
    },
    {
      prompt: "What did Werker and Tees (1984) find about infants?",
      choices: [
        "That infants hear no differences between sounds",
        "That infants can distinguish foreign contrasts at six to eight months but largely lose the ability by ten to twelve months",
        "That infants learn to speak at six months",
        "That only adults can distinguish sounds",
      ],
      answer: 1,
      explanation: "Infants become specialists in their own language.",
    },
  ],
  reflection:
    "Speakers hear their language through the categories of its phonemes. In 500–800 words, explain the concept of the phoneme, using examples from at least two languages, and discuss how it helps to explain foreign accents and the difficulties of learning a second language.",
};
