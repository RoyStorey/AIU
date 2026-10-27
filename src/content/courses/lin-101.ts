import type { CourseContent } from "@/lib/schema";

export const lin101: CourseContent = {
  overview: `Every human community has language, and every normal child acquires it, without instruction, in a few years. Yet language is among the most complex systems we know. Linguistics is the scientific study of that system: not the policing of "correct" usage, but the patient description of what speakers of every language actually know—usually without knowing that they know it.

This course introduces the core of the discipline. We begin with the question of what language is and how it differs from other forms of communication; then we work upward through its levels of structure—**phonetics** (the physical sounds of speech), **phonology** (how languages organize those sounds), **morphology** (the structure of words), **syntax** (the structure of sentences), and **semantics and pragmatics** (meaning and use). Examples come from English and from languages around the world.`,
  objectives: [
    "Distinguish descriptive from prescriptive approaches to language, and identify the design features of human language.",
    "Transcribe English words in the International Phonetic Alphabet and describe consonants by place, manner, and voicing.",
    "Identify phonemes and allophones using minimal pairs and complementary distribution.",
    "Analyze words into morphemes and sentences into constituents.",
    "Distinguish semantic meaning from pragmatic implicature, using Grice's maxims and speech-act theory.",
  ],
  lessons: [
    {
      title: "What Is Language?",
      summary: "Description versus prescription, the design features of language, and the arbitrariness of the sign.",
      lecture: `## Description, not prescription

Most of us met the study of language in school as a list of rules: do not split infinitives, do not end a sentence with a preposition, never say "ain't." These are **prescriptive** rules—statements of how someone thinks people *should* speak. Linguistics is **descriptive**: it asks how people *do* speak, and what knowledge makes their speech possible.

From this point of view every variety of every language—Appalachian English, Jamaican Creole, Cockney, Classical Latin—is a fully rule-governed system. A speaker who says "He be working" in African American English is not making an error; he is using a grammatical **habitual aspect** that standard English lacks, meaning "he is regularly working." Linguists study such systems with the same respect a biologist gives to any species.

## Competence and performance

Noam Chomsky distinguished a speaker's **competence**—the unconscious knowledge of the language's rules—from **performance**, the actual use of language, with its slips, hesitations, and false starts. A native speaker of English knows, without being taught, that "The child seems sleeping" is wrong and "The child seems to be sleeping" is right. Explaining that knowledge is the central task of linguistics.

## The design features

What distinguishes human language from other animal communication? In 1960 the linguist **Charles Hockett** proposed a list of **design features**. Among the most important:

- **Arbitrariness**: there is no natural connection between most words and their meanings. A dog is *dog* in English, *chien* in French, *Hund* in German, *inu* in Japanese.
- **Duality of patterning**: a small set of meaningless sounds (about 44 in English) combines into thousands of meaningful words, which combine into unlimited sentences.
- **Productivity**: speakers can produce and understand sentences never heard before—like this one.
- **Displacement**: we can speak of things absent in time and space—yesterday's weather, the Roman Empire, unicorns.

Honeybees can communicate the direction of distant flowers (a kind of displacement), and vervet monkeys have distinct alarm calls for eagles, leopards, and snakes, but no animal system combines all these features.

## The arbitrary sign

The Swiss linguist **Ferdinand de Saussure**, whose *Course in General Linguistics* (published by his students in 1916) founded modern linguistics, described the linguistic sign as a union of a **signifier** (a sound pattern) and a **signified** (a concept). The bond between them, he insisted, is **arbitrary**—fixed by social convention, not by nature. Even onomatopoeia proves the point: an English rooster says *cock-a-doodle-doo*, a French one *cocorico*.

## How many languages?

Roughly **7,000 languages** are spoken today, according to catalogs such as *Ethnologue*. Nearly half are endangered, many spoken only by elderly people. Each one is a unique record of human thought—a reason, among many, why linguists document them.`,
      readings: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The opening chapter, “What Is Language?” The standard introductory textbook." },
        { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Chapters 1–2: “An Instinct to Acquire an Art” and “Chatterboxes.” A lively argument that language is part of human biology." },
      ],
      media: [
        { kind: "video", title: "What is Linguistics?: Crash Course Linguistics #1", publisher: "Crash Course", url: "https://thecrashcourse.com/courses/what-is-linguistics-crash-course-linguistics-1/", note: "An eleven-minute introduction to the features and levels of language, written by the hosts of Lingthusiasm." },
        { kind: "audio", title: "Lingthusiasm (podcast)", author: "Gretchen McCulloch and Lauren Gawne", url: "https://lingthusiasm.com", note: "A podcast that is enthusiastic about linguistics; episodes on nearly every topic in this course." },
      ],
      questions: [
        {
          prompt: "Which statement is descriptive rather than prescriptive?",
          choices: ["“You should never end a sentence with a preposition.”", "“Many English speakers use ‘they’ as a singular pronoun.”", "“‘Ain't’ is not a real word.”", "“Whom is the correct form after a preposition.”"],
          answer: 1,
          explanation: "A descriptive statement reports how people actually speak; the others prescribe how they should.",
        },
        {
          prompt: "“Duality of patterning” refers to:",
          choices: ["The existence of two genders in many languages", "Meaningless sounds combining into meaningful words, which combine into sentences", "Bilingualism", "The two hemispheres of the brain"],
          answer: 1,
          explanation: "Two levels of structure—sounds and meaningful units—give language its enormous expressive power.",
        },
        {
          prompt: "That we can talk about the Roman Empire or next week illustrates which design feature?",
          choices: ["Arbitrariness", "Displacement", "Duality", "Onomatopoeia"],
          answer: 1,
          explanation: "Displacement is the ability to refer to things removed in time and space.",
        },
        {
          prompt: "Saussure held that the bond between signifier and signified is:",
          choices: ["Natural and universal", "Arbitrary, fixed by convention", "Determined by grammar", "Visual"],
          answer: 1,
          explanation: "Different languages pair different sounds with the same concept; the link is conventional.",
        },
        {
          prompt: "Chomsky's term for a speaker's unconscious knowledge of the rules of the language is:",
          choices: ["Performance", "Competence", "Prescription", "Fluency"],
          answer: 1,
          explanation: "Competence is the underlying knowledge; performance is its use in real time, with errors and hesitations.",
        },
      ],
      reflection: "Write down a prescriptive rule you were taught in school. Find three examples of educated speakers or writers breaking it, and consider what the rule's persistence tells us about attitudes to language.",
    },
    {
      title: "Phonetics: The Sounds of Speech",
      summary: "The vocal tract, the International Phonetic Alphabet, and describing consonants and vowels.",
      lecture: `## Why spelling fails us

English spelling is a poor guide to pronunciation. The letters *ough* are pronounced differently in *though, through, rough, cough,* and *bough*; the sound in *shoe* is spelled differently in *sugar, nation, mission,* and *ocean*. To describe sounds precisely, linguists use the **International Phonetic Alphabet (IPA)**, first published in 1888, in which each symbol stands for exactly one sound. Phonetic transcription is written in square brackets: *cough* is [kɔf] or [kɒf] depending on the dialect.

## The vocal tract

Speech is produced by modifying a stream of air from the lungs. The air passes through the **larynx**, where the **vocal folds** may vibrate (producing **voiced** sounds) or stay apart (producing **voiceless** sounds). Put your fingers on your throat and say *zzzz*, then *ssss*: you will feel the vibration only in the first. The air then passes through the **oral** and **nasal cavities**, where the tongue, lips, teeth, and velum shape it.

## Describing consonants

Every consonant can be described by three properties:

1. **Voicing**: voiced or voiceless.
2. **Place of articulation**: where the airflow is obstructed.
3. **Manner of articulation**: how it is obstructed.

| Place | Description | English examples |
|---|---|---|
| Bilabial | both lips | [p], [b], [m] |
| Labiodental | lower lip and upper teeth | [f], [v] |
| Dental | tongue and teeth | [θ] *thin*, [ð] *then* |
| Alveolar | tongue and the ridge behind the teeth | [t], [d], [s], [z], [n], [l] |
| Postalveolar | just behind the ridge | [ʃ] *ship*, [ʒ] *measure* |
| Velar | back of tongue and soft palate | [k], [g], [ŋ] *sing* |
| Glottal | the glottis | [h] |

The main **manners** are **stops** (complete closure, then release: [p, t, k]), **fricatives** (narrow constriction producing turbulence: [f, s, ʃ]), **affricates** (a stop released into a fricative: [tʃ] *church*), **nasals** (air through the nose: [m, n, ŋ]), and **approximants** (little obstruction: [l, ɹ, w, j]).

So [b] is a *voiced bilabial stop*; [s] is a *voiceless alveolar fricative*.

## Describing vowels

Vowels have no obstruction; they are distinguished by the position of the tongue and lips: **height** (high [i] *beet* vs. low [æ] *bat*), **backness** (front [i] vs. back [u] *boot*), and **rounding** (the lips are rounded for [u], spread for [i]). English has many more vowel sounds than its five vowel letters—around a dozen distinct vowels plus diphthongs, depending on dialect.

## Beyond English

The world's languages use sounds English lacks: the **clicks** of Zulu and Xhosa, the **ejectives** of Georgian and Quechua, the front rounded vowel [y] of French *tu*, the **tones** of Mandarin, in which *mā* (high level) "mother" and *mǎ* (dipping) "horse" differ only in pitch. The IPA provides a symbol for each—a reminder that the sounds of one's own language are only a small selection from the human repertoire.`,
      readings: [
        { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage", year: "7th ed., 2015", note: "Chapter 1, “Articulation and Acoustics.” The classic textbook by the twentieth century's foremost phonetician." },
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The chapter on phonetics, the sounds of language." },
      ],
      media: [
        { kind: "website", title: "The IPA Chart", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart", note: "The official chart of the International Phonetic Alphabet, with links to versions that play each sound." },
        { kind: "video", title: "Seeing Speech", publisher: "University of Glasgow", url: "https://www.seeingspeech.ac.uk", note: "Ultrasound and MRI videos of the vocal tract producing every sound on the IPA chart." },
      ],
      questions: [
        {
          prompt: "Why do linguists use the IPA rather than ordinary spelling?",
          choices: ["Because IPA is shorter", "Because each IPA symbol represents exactly one sound, unlike English spelling", "Because it is required by law", "Because it uses only Latin letters"],
          answer: 1,
          explanation: "English spelling maps sounds to letters inconsistently; the IPA is one-symbol-one-sound.",
        },
        {
          prompt: "Describe [b]:",
          choices: ["Voiceless alveolar fricative", "Voiced bilabial stop", "Voiced velar nasal", "Voiceless labiodental fricative"],
          answer: 1,
          explanation: "[b] is voiced, made with both lips, with complete closure: a voiced bilabial stop.",
        },
        {
          prompt: "The sound at the end of sing, [ŋ], is a:",
          choices: ["Velar nasal", "Alveolar stop", "Glottal fricative", "Bilabial approximant"],
          answer: 0,
          explanation: "The back of the tongue touches the soft palate (velar), with air through the nose (nasal).",
        },
        {
          prompt: "What distinguishes [s] from [z]?",
          choices: ["Place of articulation", "Manner of articulation", "Voicing", "Rounding"],
          answer: 2,
          explanation: "Both are alveolar fricatives; [z] is voiced and [s] voiceless.",
        },
        {
          prompt: "In Mandarin, mā “mother” and mǎ “horse” differ in:",
          choices: ["Vowel quality", "Consonant voicing", "Tone", "Stress"],
          answer: 2,
          explanation: "Mandarin is a tone language: pitch patterns distinguish words.",
        },
      ],
      reflection: "Transcribe your own pronunciation of these words in IPA, using the chart: cat, thin, ship, judge, sing, measure, through. Note any where your dialect differs from the textbook.",
    },
    {
      title: "Phonology: The Sound System",
      summary: "Phonemes, allophones, minimal pairs, and the hidden rules every speaker knows.",
      lecture: `## Sounds and the mind

Phonetics studies sounds as physical events. **Phonology** studies how a particular language **organizes** them into a system. Two sounds that are physically different may count as "the same" for speakers of one language and as completely different for speakers of another.

## Phonemes and allophones

Say the words *pin* and *spin* while holding your palm in front of your mouth. In *pin* you feel a puff of air after the [p]; in *spin* you do not. Phonetically these are two different sounds: aspirated [pʰ] and unaspirated [p]. Yet English speakers hear them as one sound, "p." They are **allophones**—predictable variants—of a single **phoneme**, written between slashes: /p/.

The choice between them is governed by a rule English speakers obey without knowing it: voiceless stops are aspirated at the beginning of a stressed syllable, but not after [s]. In Thai or Hindi, by contrast, aspirated and unaspirated [p] are **separate phonemes** that distinguish words. What is a single category in one language may be two in another.

## Minimal pairs

How do we know that two sounds are separate phonemes? We look for **minimal pairs**: words that differ in only one sound and have different meanings. *Pat* and *bat* show that /p/ and /b/ are distinct phonemes in English; so do *sip* and *zip*, *thigh* and *thy*.

Japanese has no minimal pairs distinguishing [l] and [ɾ]; the two are not separate phonemes there, which is why Japanese learners of English often find *light* and *right* hard to tell apart. The difficulty is not in the ear but in the phonological categories the mind has learned since infancy.

## Complementary distribution

Allophones of the same phoneme are typically in **complementary distribution**: each occurs where the other never does. English [pʰ] occurs at the start of stressed syllables; [p] occurs after [s]. Because their environments never overlap, they never distinguish words.

## Phonological rules

Speakers' knowledge includes rules that alter sounds in context:

- **Assimilation**: sounds become more like their neighbors. The prefix *in-* becomes *im-* before bilabials (*impossible*), *il-* before *l* (*illegal*), *ir-* before *r* (*irregular*).
- **The English plural**: the plural suffix is pronounced [s] after voiceless sounds (*cats*), [z] after voiced sounds (*dogs*), and [əz] after sibilants (*horses*). Children apply this rule to new words—asked about one "wug," they say there are two "wugs" [wʌgz]—as Jean Berko Gleason showed in her famous "wug test" of 1958.

## Phonotactics

Every language also has **phonotactic** constraints: rules about which sequences of sounds are permitted. English allows *blick* as a possible word that simply happens not to exist, but not *bnick*; no English word begins with [ŋ], though Vietnamese words can. Native speakers know these constraints instantly, as you can test by inventing words.

Phonology, then, is a clear case of the unconscious knowledge that linguistics seeks to describe: rules no one taught us, which we nonetheless follow with perfect regularity.`,
      readings: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The chapter on phonology, the sound patterns of language." },
        { kind: "book", title: "Introductory Phonology", author: "Bruce Hayes", publisher: "Wiley-Blackwell", year: "2009", note: "Chapter 2, “Phonemic Analysis.” A clear, exercise-based introduction; optional." },
      ],
      media: [
        { kind: "audio", title: "Lingthusiasm (podcast)", author: "Gretchen McCulloch and Lauren Gawne", url: "https://lingthusiasm.com", note: "Search the episode archive for phonology and sounds." },
        { kind: "video", title: "Seeing Speech", publisher: "University of Glasgow", url: "https://www.seeingspeech.ac.uk", note: "Compare the articulation of aspirated and unaspirated stops." },
      ],
      questions: [
        {
          prompt: "The [pʰ] in pin and the [p] in spin are, in English:",
          choices: ["Separate phonemes", "Allophones of one phoneme", "Both vowels", "Not real sounds"],
          answer: 1,
          explanation: "They are predictable variants of /p/; English speakers hear them as the same sound.",
        },
        {
          prompt: "What is a minimal pair?",
          choices: ["Two words that rhyme", "Two words differing in only one sound, with different meanings", "Two synonyms", "Two allophones"],
          answer: 1,
          explanation: "Minimal pairs such as pat/bat demonstrate that two sounds are separate phonemes.",
        },
        {
          prompt: "Why do Japanese learners of English often struggle with light and right?",
          choices: ["Japanese has no liquids at all", "[l] and [ɾ] are not separate phonemes in Japanese", "Japanese speakers cannot hear high frequencies", "English spelling is confusing"],
          answer: 1,
          explanation: "The difficulty lies in learned phonological categories, not in the ear.",
        },
        {
          prompt: "How is the plural suffix pronounced in dogs?",
          choices: ["[s]", "[z]", "[əz]", "It is silent"],
          answer: 1,
          explanation: "After a voiced sound like [g], the plural is voiced: [z].",
        },
        {
          prompt: "What did Jean Berko Gleason's “wug test” show?",
          choices: ["That children memorize all plurals", "That children apply productive morphological and phonological rules to new words", "That adults cannot learn new words", "That wugs exist"],
          answer: 1,
          explanation: "Children correctly pluralized a nonsense word, proving they had internalized the rule.",
        },
      ],
      reflection: "Find three minimal pairs in English for each of these contrasts: /θ/ vs. /ð/, /ʃ/ vs. /ʒ/, /i/ vs. /ɪ/. Which contrast was hardest to find, and why might that be?",
    },
    {
      title: "Words and Sentences: Morphology and Syntax",
      summary: "Morphemes, the world's word structures, constituency, and the creativity of syntax.",
      lecture: `## Morphemes

The smallest unit of meaning in a language is the **morpheme**. *Unhappiness* contains three: *un-* ("not"), *happy*, and *-ness* ("state of"). Morphemes that can stand alone, like *happy*, are **free**; those that must attach, like *un-* and *-ness*, are **bound**.

Bound morphemes are of two kinds. **Derivational** morphemes create new words, often changing the word class: *happy* (adjective) → *happiness* (noun). **Inflectional** morphemes mark grammatical information without making a new word: *walk, walks, walked, walking*. English has only eight inflectional suffixes; Latin, as students of LAT 101 know, has many more.

## How languages build words

Languages differ greatly in how they combine morphemes:

- **Isolating** languages, such as Mandarin and Vietnamese, use mostly single-morpheme words, with grammar expressed by word order and separate particles.
- **Agglutinative** languages, such as Turkish, string many morphemes together, each with one meaning. Turkish *ev-ler-im-den* means "from my houses": house-PLURAL-MY-FROM.
- **Fusional** languages, such as Latin and Russian, fuse several meanings into one ending: Latin *-ōrum* in *servōrum* expresses genitive, plural, and masculine all at once.
- **Polysynthetic** languages, such as Mohawk and Inuktitut, can express in one long word what English needs a whole sentence to say.

## Syntax: structure, not strings

**Syntax** is the study of how words combine into sentences. Its central discovery is that sentences are not mere strings of words but have **hierarchical structure**. Words group into **constituents**, or phrases: in *The old sailor saw a whale*, the words *the old sailor* form a noun phrase, and *saw a whale* a verb phrase. We can test this: constituents can be replaced by a pronoun (*He saw it*) or moved as a unit.

Structure explains **ambiguity**. *I saw the man with the telescope* has two meanings because it has two structures: *with the telescope* may attach to the verb phrase (I used the telescope) or to the noun phrase (the man had it). The words are identical; the trees are different.

## Grammaticality and meaning

In *Syntactic Structures* (1957), Noam Chomsky offered a famous pair:

> Colorless green ideas sleep furiously.
> Furiously sleep ideas green colorless.

Both are nonsense, but every English speaker recognizes the first as **grammatical** and the second as not. Grammar, Chomsky argued, is independent of meaning: speakers know an abstract system of rules for combining categories, quite apart from whether the result makes sense.

## Recursion

Syntax allows **recursion**: a phrase can contain another phrase of the same type, without limit. *This is the cat that killed the rat that ate the malt that lay in the house that Jack built.* Because of recursion, a finite set of words and rules can produce an infinite number of sentences—the formal basis of the **productivity** we met in the first lesson. Wilhelm von Humboldt put it in the nineteenth century: language makes "infinite use of finite means."`,
      readings: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The chapters on morphology and syntax." },
        { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957", note: "Chapters 1–2. A short book that changed the field; read for its argument, not its formalism." },
      ],
      media: [
        { kind: "website", title: "The World Atlas of Language Structures (WALS Online)", author: "Matthew S. Dryer and Martin Haspelmath, eds.", url: "https://wals.info", note: "Maps showing how hundreds of grammatical features are distributed across the world's languages. Explore the features on word order and morphology." },
        { kind: "audio", title: "Lingthusiasm (podcast)", author: "Gretchen McCulloch and Lauren Gawne", url: "https://lingthusiasm.com", note: "Episodes on syntax trees and on how languages build words." },
      ],
      questions: [
        {
          prompt: "How many morphemes are in unhappiness?",
          choices: ["One", "Two", "Three", "Four"],
          answer: 2,
          explanation: "un- + happy + -ness.",
        },
        {
          prompt: "Which suffix is inflectional rather than derivational?",
          choices: ["-ness in kindness", "-er in teacher", "-ed in walked", "-ize in modernize"],
          answer: 2,
          explanation: "-ed marks past tense without creating a new word; the others create new words.",
        },
        {
          prompt: "Turkish ev-ler-im-den, “from my houses,” illustrates which type of morphology?",
          choices: ["Isolating", "Agglutinative", "Fusional", "None"],
          answer: 1,
          explanation: "Each morpheme has one meaning and they are strung together: agglutination.",
        },
        {
          prompt: "Why is “I saw the man with the telescope” ambiguous?",
          choices: ["The word saw has two meanings", "The phrase with the telescope can attach to different constituents, giving two structures", "It is ungrammatical", "Telescope is a borrowed word"],
          answer: 1,
          explanation: "Structural ambiguity: identical words, different hierarchical structures.",
        },
        {
          prompt: "What does “Colorless green ideas sleep furiously” demonstrate?",
          choices: ["That English has no rules", "That grammaticality is independent of meaning", "That poetry is ungrammatical", "That adjectives must precede nouns in all languages"],
          answer: 1,
          explanation: "It is meaningless but grammatical, showing that syntax is a system in its own right.",
        },
      ],
      reflection: "Draw a simple bracketed structure for both readings of “I saw the man with the telescope.” Then invent another structurally ambiguous sentence of your own.",
    },
    {
      title: "Meaning and Use: Semantics and Pragmatics",
      summary: "Sense and reference, entailment, Grice's maxims, and doing things with words.",
      lecture: `## Semantics

**Semantics** studies the literal meaning of words and sentences. One of its founding distinctions comes from the German logician **Gottlob Frege**, in "On Sense and Reference" (1892). The phrases *the morning star* and *the evening star* **refer** to the same object—the planet Venus—but they have different **senses**, different ways of presenting that object. That is why "The morning star is the evening star" can be a discovery, while "The morning star is the morning star" cannot.

Semantics also studies relations between sentences. One sentence **entails** another if the truth of the first guarantees the truth of the second: *The king was assassinated* entails *The king died*. Words stand in relations too: **synonymy** (*couch/sofa*), **antonymy** (*hot/cold*), and **hyponymy** (*oak* is a hyponym of *tree*).

## Pragmatics

**Pragmatics** studies meaning in context—what speakers mean beyond what their words literally say. If you ask, "Can you pass the salt?" and I answer "Yes" without moving, I have understood your words and missed your meaning entirely.

## Grice's cooperative principle

The philosopher **H. P. Grice** proposed that conversation is governed by a **cooperative principle**: make your contribution such as is required by the purpose of the exchange. He divided it into four **maxims**:

1. **Quantity**: be as informative as required, and no more.
2. **Quality**: say only what you believe to be true.
3. **Relation**: be relevant.
4. **Manner**: be clear, brief, and orderly.

When a speaker appears to break a maxim, listeners assume she is still cooperating and infer an additional meaning, which Grice called an **implicature**. His own example: a professor writes a letter of recommendation for a philosophy job saying only that the candidate "has excellent command of English, and his attendance at tutorials has been regular." The letter says nothing false; but by conspicuously failing to say enough (quantity), it implies the candidate is no good at philosophy.

Implicatures differ from entailments: they can be **cancelled**. "Some of the students passed" implicates "not all passed"—but one can add, "in fact, all of them did," without contradiction.

## Speech acts

The philosopher **J. L. Austin**, in *How to Do Things with Words* (1962), observed that many utterances do not describe the world but **act** in it. "I now pronounce you husband and wife," "I promise," "I name this ship the *Queen Elizabeth*"—these are **performatives**: saying them, under the right conditions, *is* doing the thing. Austin's insight, developed by John Searle, showed that language is not only a system for representing the world but a means of acting in society: promising, warning, apologizing, commanding.

## The whole picture

We have now climbed through the levels of language: sound, sound system, word, sentence, meaning, and use. Each level has its own rules, and native speakers master them all before they can tie their shoes. That achievement—how it happens, how it varies across the world, how it changes over time—is the subject of the rest of the Linguistics concentration.`,
      readings: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The chapter on semantics and pragmatics." },
        { kind: "book", title: "Studies in the Way of Words", author: "H. P. Grice", publisher: "Harvard University Press", year: "1989", note: "Essay 2, “Logic and Conversation” (first delivered in 1967). The source of the cooperative principle." },
        { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Oxford University Press", year: "1962", note: "Lectures I–II, on performatives." },
      ],
      media: [
        { kind: "audio", title: "Lingthusiasm (podcast)", author: "Gretchen McCulloch and Lauren Gawne", url: "https://lingthusiasm.com", note: "Episodes on pragmatics, politeness, and implicature." },
        { kind: "video", title: "Crash Course Linguistics", publisher: "Crash Course", url: "https://thecrashcourse.com/courses/what-is-linguistics-crash-course-linguistics-1/", note: "Continue the series from the first episode; later episodes cover semantics and pragmatics." },
      ],
      questions: [
        {
          prompt: "According to Frege, “the morning star” and “the evening star” have:",
          choices: ["The same sense and the same reference", "The same reference but different senses", "Different references", "No meaning"],
          answer: 1,
          explanation: "Both refer to Venus but present it in different ways.",
        },
        {
          prompt: "Which pair shows entailment?",
          choices: ["“Some passed” → “Not all passed”", "“The king was assassinated” → “The king died”", "“It's cold in here” → “Close the window”", "“Can you pass the salt?” → “Pass the salt”"],
          answer: 1,
          explanation: "If the first is true, the second must be. The others are implicatures or indirect requests, which can be cancelled.",
        },
        {
          prompt: "Grice's letter of recommendation that praises only a candidate's English and attendance violates which maxim to create an implicature?",
          choices: ["Quality", "Quantity", "Manner", "None"],
          answer: 1,
          explanation: "It conspicuously says less than required, implying the candidate is weak.",
        },
        {
          prompt: "What distinguishes an implicature from an entailment?",
          choices: ["Implicatures are always false", "Implicatures can be cancelled without contradiction", "Entailments depend on context", "There is no difference"],
          answer: 1,
          explanation: "“Some passed—in fact all did” is coherent; implicatures are defeasible, entailments are not.",
        },
        {
          prompt: "“I promise to return the book” is, in Austin's terms:",
          choices: ["A description of a promise", "A performative: saying it performs the act of promising", "An implicature", "A presupposition"],
          answer: 1,
          explanation: "Under the right conditions, uttering it is the act of promising.",
        },
      ],
      reflection: "Record (in writing) a short real conversation. Identify one implicature and one indirect speech act in it, and explain how a listener arrives at the intended meaning.",
    },
  ],
  library: [
    {
      heading: "Textbooks",
      items: [
        { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "11th ed., 2018", note: "The standard introduction for over four decades." },
        { kind: "book", title: "Language Files: Materials for an Introduction to Language and Linguistics", author: "Department of Linguistics, The Ohio State University", publisher: "Ohio State University Press", year: "12th ed., 2016", note: "Short, modular “files” with many exercises; excellent for self-study." },
        { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage", year: "7th ed., 2015" },
        { kind: "book", title: "The Cambridge Encyclopedia of Language", author: "David Crystal", publisher: "Cambridge University Press", year: "3rd ed., 2010", note: "A richly illustrated reference to every aspect of language." },
      ],
    },
    {
      heading: "Classic Works",
      items: [
        { kind: "book", title: "Course in General Linguistics", author: "Ferdinand de Saussure, trans. Wade Baskin", publisher: "Philosophical Library", year: "1959 (orig. 1916)" },
        { kind: "book", title: "Syntactic Structures", author: "Noam Chomsky", publisher: "Mouton", year: "1957" },
        { kind: "book", title: "How to Do Things with Words", author: "J. L. Austin", publisher: "Oxford University Press", year: "1962" },
        { kind: "book", title: "Studies in the Way of Words", author: "H. P. Grice", publisher: "Harvard University Press", year: "1989" },
      ],
    },
    {
      heading: "For the General Reader",
      items: [
        { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994" },
        { kind: "book", title: "The Power of Babel: A Natural History of Language", author: "John McWhorter", publisher: "Times Books", year: "2001", note: "How one original language became thousands." },
        { kind: "book", title: "Because Internet: Understanding the New Rules of Language", author: "Gretchen McCulloch", publisher: "Riverhead Books", year: "2019" },
      ],
    },
    {
      heading: "Listening and Viewing",
      items: [
        { kind: "video", title: "Crash Course Linguistics", publisher: "Crash Course", url: "https://thecrashcourse.com/courses/what-is-linguistics-crash-course-linguistics-1/", note: "Sixteen short episodes covering the whole field." },
        { kind: "audio", title: "Lingthusiasm", author: "Gretchen McCulloch and Lauren Gawne", url: "https://lingthusiasm.com" },
        { kind: "video", title: "Seeing Speech", publisher: "University of Glasgow", url: "https://www.seeingspeech.ac.uk" },
      ],
    },
    {
      heading: "Online Resources",
      items: [
        { kind: "website", title: "The IPA Chart", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart" },
        { kind: "website", title: "The World Atlas of Language Structures (WALS Online)", url: "https://wals.info" },
        { kind: "website", title: "Glottolog", publisher: "Max Planck Institute for Evolutionary Anthropology", url: "https://glottolog.org", note: "A comprehensive catalog of the world's languages and their families." },
      ],
    },
  ],
};
