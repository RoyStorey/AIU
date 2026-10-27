import type { CourseContent } from "@/lib/schema";

export const lat101: CourseContent = {
  overview: `Latin was the language of Roman law and Roman poetry, of the Vulgate and the Mass, of Aquinas, Copernicus, Newton, and the universities for well over a thousand years. To read it is to read Virgil and Cicero, Augustine and Boethius, in their own words—and to understand the bones of English, half of whose vocabulary descends from it.

This course begins at the beginning. We learn to pronounce Latin as the Romans of Cicero's day did, then meet the verb and its endings, the noun and its cases, and the adjective and its agreement. Throughout, we pair two great textbook traditions: the grammatical clarity of *Wheelock's Latin* and the immersive reading of Hans Ørberg's *Lingua Latina per se Illustrata*. By the final lesson you will read your first continuous Latin prose.`,
  objectives: [
    "Pronounce Latin according to the restored classical pronunciation, observing vowel length and the rules of accent.",
    "Conjugate first- and second-conjugation verbs and the verb sum in the present tense.",
    "Decline nouns of the first and second declensions and explain the functions of the six cases.",
    "Make adjectives agree with nouns in gender, number, and case.",
    "Read and translate simple continuous Latin prose, such as the first chapter of Familia Romana.",
  ],
  lessons: [
    {
      title: "The Sounds of Latin",
      summary: "The alphabet, the restored classical pronunciation, vowel length, and accent.",
      lecture: `## Why pronunciation matters

Latin is often called a "dead" language, but it was spoken for centuries before it was written down, and its poetry depends entirely on sound. Virgil's hexameters are built from long and short syllables; a reader who cannot hear them cannot hear the poem. We therefore learn to read Latin aloud from the first day.

## Two pronunciations

You will meet two systems:

- **Restored classical pronunciation** reconstructs how educated Romans of the first century BC spoke. Scholars have recovered it from ancient grammarians, from spelling errors in inscriptions, from wordplay, and from how Latin words were borrowed into Greek and other languages. The standard account is W. Sidney Allen's *Vox Latina*.
- **Ecclesiastical (Italianate) pronunciation** is the Latin of the Roman Catholic Church and of most choral music. It is a perfectly legitimate tradition, but it reflects medieval and later Italian sound changes.

This course uses the classical system. If you sing in a choir, you will simply learn both.

## The alphabet and its sounds

The Roman alphabet had no **J** or **W**, and **U** and **V** were the same letter. Consonants are mostly as in English, with these rules:

| Letter | Sound | Example |
|---|---|---|
| c | always hard, as in *cat* | **Cicerō** = KIK-eh-roh |
| g | always hard, as in *get* | **genus** |
| v | as English *w* | **vīnum** = WEE-num |
| i (consonant) | as English *y* | **iam** = yahm |
| s | always as in *sing*, never *z* | **rosa** |
| r | lightly trilled | **Rōma** |

The **diphthongs** are **ae** (as in *eye*: *puellae*), **au** (as in *how*: *aurum*), and **oe** (as in *boy*: *poena*).

## Vowel length

Every Latin vowel is either **long** or **short**, and the difference is real: **mālum** means "apple," **malum** means "evil"; **liber** is "book," **līber** is "free." Textbooks mark long vowels with a **macron** (ā, ē, ī, ō, ū). Learn every word with its macrons from the start; it costs little now and repays you enormously when you reach poetry.

## Accent

Latin accent is predictable. The rules concern the **penult** (the next-to-last syllable) and the **antepenult** (the one before it):

1. A word of two syllables is accented on the first: **RŌ-ma**, **PU-er**.
2. In a longer word, if the penult is **long**, it takes the accent: **a-MĪ-cus**.
3. If the penult is **short**, the accent falls on the antepenult: **FĒ-mi-na**, **DŌ-mi-nus**.

A syllable is long if it contains a long vowel or a diphthong, or if its vowel is followed by two consonants.

## Hearing the language

Read aloud the opening of the *Aeneid*:

> Arma virumque canō, Trōiae quī prīmus ab ōrīs
> Ītaliam, fātō profugus, Lāvīniaque vēnit
> lītora…

"I sing of arms and the man, who first from the shores of Troy, an exile by fate, came to Italy and the Lavinian shores…" Listen to recordings made in the restored pronunciation and imitate them. Ten minutes of listening a day will do more for your Latin than an hour of silent drill.`,
      readings: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, revised by Richard A. LaFleur", publisher: "HarperCollins", year: "7th ed., 2011", note: "Introduction: “The Alphabet and Pronunciation” and “Syllables and Accent.”" },
        { kind: "book", title: "Vox Latina: A Guide to the Pronunciation of Classical Latin", author: "W. Sidney Allen", publisher: "Cambridge University Press", year: "2nd ed., 1978", note: "Chapters 1–2 on consonants and vowels. The scholarly authority on classical pronunciation." },
      ],
      media: [
        { kind: "audio", title: "Alatii Recitationes: Latin texts read in the restored pronunciation", author: "Johan Winge (Alatius)", url: "https://alatius.com/latin/", note: "Careful recordings of Virgil, Catullus, and others, attentive to vowel length and meter. Listen to the opening of the Aeneid." },
        { kind: "audio", title: "Learn Latin with Audio: 50 Hours of Spoken Latin", publisher: "Latinitium", url: "https://latinitium.com/learn-latin-with-audio-50-hours-of-spoken-latin/", note: "A guide to free spoken-Latin recordings for learners." },
      ],
      questions: [
        {
          prompt: "In the restored classical pronunciation, the name Cicerō begins with the sound:",
          choices: ["“ch” as in church", "“s” as in sit", "“k” as in kite", "“th” as in thin"],
          answer: 2,
          explanation: "Classical Latin c is always hard. The softened c (as in Italian or Church Latin) is a later development.",
        },
        {
          prompt: "Latin v (as in vīnum) was pronounced like English:",
          choices: ["v in vine", "w in wine", "f in fine", "b in bine"],
          answer: 1,
          explanation: "V and U were one letter; as a consonant it was a semivowel, like English w.",
        },
        {
          prompt: "Why do textbooks mark long vowels with macrons?",
          choices: ["Long vowels are louder", "Vowel length distinguishes words and governs accent and meter", "They show which syllables to skip", "They mark borrowed Greek words"],
          answer: 1,
          explanation: "Length is meaningful (mālum “apple” vs. malum “evil”), determines where the accent falls, and is the basis of Latin verse.",
        },
        {
          prompt: "The penult of fēmina (fē-mi-na) is short. Where does the accent fall?",
          choices: ["FĒ-mi-na", "fē-MI-na", "fē-mi-NA", "Latin has no accent"],
          answer: 0,
          explanation: "In a word of three or more syllables with a short penult, the accent moves back to the antepenult.",
        },
      ],
      reflection: "Choose five Latin words or phrases you already know (from mottoes, law, medicine, or the Mass). Mark their long vowels using a dictionary such as Logeion, then mark where the accent falls and read them aloud.",
    },
    {
      title: "The Verb: Person, Number, and the Present",
      summary: "Principal parts, the present system of the first two conjugations, and the verb “to be.”",
      lecture: `## A language of endings

English shows who does what mostly by **word order**: "the farmer loves the poet" and "the poet loves the farmer" mean different things. Latin shows it by **endings**. This is the single most important fact about the language, and it begins with the verb.

In English we need a pronoun to know the subject: *I love, you love, she loves*. In Latin the ending tells us: **amō** "I love," **amās** "you love," **amat** "he, she, or it loves." The pronoun is usually left out.

## Principal parts

Every Latin verb is learned by its **principal parts**, the forms from which all others are built. For now we need the first two:

- **amō, amāre** — "I love, to love"
- **moneō, monēre** — "I warn, to warn"

The infinitive tells you the **conjugation**: verbs in **-āre** belong to the first conjugation, verbs in **-ēre** to the second. Remove the **-re** and you have the **present stem**: **amā-**, **monē-**.

## The personal endings

To the stem add the personal endings:

| | Singular | Plural |
|---|---|---|
| 1st person | **-ō** (I) | **-mus** (we) |
| 2nd person | **-s** (you) | **-tis** (you all) |
| 3rd person | **-t** (he, she, it) | **-nt** (they) |

So the present tense of the two conjugations is:

| | amāre, to love | monēre, to warn |
|---|---|---|
| I | amō | moneō |
| you | amās | monēs |
| he/she/it | amat | monet |
| we | amāmus | monēmus |
| you (pl.) | amātis | monētis |
| they | amant | monent |

Notice that the **ā** of the stem disappears before **-ō** in **amō** and shortens before **-t** and **-nt**. Latin present tense covers all three English presents: **amat** is "she loves," "she is loving," and "she does love."

## The imperative and negation

The **imperative**, or command, is simply the stem in the singular and stem + **-te** in the plural: **amā!** "love!" **amāte!** "love, all of you!" The monastic motto of the Benedictines is a pair of imperatives: **Ōrā et labōrā**, "Pray and work." The emperor Augustus, says Suetonius, was fond of a Greek proverb known in Latin as **Festīnā lentē**, "Make haste slowly."

To negate a verb, place **nōn** before it: **nōn amat**, "he does not love."

## The verb “to be”

The commonest verb in Latin, as in English, is irregular. Learn it now by heart:

| | Singular | Plural |
|---|---|---|
| 1st | **sum** (I am) | **sumus** (we are) |
| 2nd | **es** (you are) | **estis** (you are) |
| 3rd | **est** (he/she/it is) | **sunt** (they are) |

The infinitive is **esse**, "to be." Descartes's famous sentence uses it: **Cōgitō, ergō sum**, "I think, therefore I am."

## How to study

Say every paradigm aloud until it comes without thought, as a musician learns scales. Wheelock recommends the time-tested method: read, recite, write, and recite again. Ten minutes twice a day is better than an hour once a week.`,
      readings: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, revised by Richard A. LaFleur", publisher: "HarperCollins", year: "7th ed., 2011", note: "Chapter 1, “Verbs; First and Second Conjugations,” with its Sententiae Antīquae, and the section on sum in Chapter 4." },
        { kind: "website", title: "Allen and Greenough's New Latin Grammar", publisher: "Dickinson College Commentaries", url: "https://dcc.dickinson.edu/grammar/latin/", note: "The standard reference grammar, free online. Consult its section on verb inflection as you study." },
      ],
      media: [
        { kind: "website", title: "Wheelock's Latin: official companion site", url: "https://wheelockslatin.com", note: "Resources for the textbook, including audio and supplementary materials." },
      ],
      questions: [
        {
          prompt: "What does the infinitive monēre tell you about the verb?",
          choices: ["It is first conjugation", "It is second conjugation", "It is irregular", "It is in the past tense"],
          answer: 1,
          explanation: "Infinitives in -āre mark the first conjugation; those in -ēre, the second.",
        },
        {
          prompt: "Translate: amāmus.",
          choices: ["They love", "You (pl.) love", "We love", "He loves"],
          answer: 2,
          explanation: "The ending -mus marks the first person plural: “we.”",
        },
        {
          prompt: "Which form is the plural imperative, “Warn!” addressed to several people?",
          choices: ["monē", "monēte", "monent", "monēs"],
          answer: 1,
          explanation: "The plural imperative adds -te to the present stem: monē- + -te.",
        },
        {
          prompt: "Why are subject pronouns usually omitted in Latin?",
          choices: ["Latin has no pronouns", "The verb's personal ending already shows the subject", "Pronouns were considered impolite", "Only poets omit them"],
          answer: 1,
          explanation: "The ending -ō, -s, -t, etc. identifies person and number; a pronoun is added only for emphasis.",
        },
        {
          prompt: "Translate: nōn sunt.",
          choices: ["They are not", "We are not", "He is not", "You are not"],
          answer: 0,
          explanation: "Sunt is the third person plural of sum; nōn negates it.",
        },
      ],
      reflection: "Conjugate laudō, laudāre (“praise”) and habeō, habēre (“have”) in the present tense aloud and in writing, then translate each form in two ways (e.g., “she praises” / “she is praising”).",
    },
    {
      title: "Nouns and the Cases",
      summary: "The first declension and what each of the six cases does.",
      lecture: `## Case

A Latin noun changes its ending to show its **function** in the sentence. These functions are called **cases**, and the set of forms a noun takes is its **declension**. Because the ending carries the meaning, Latin word order is free to serve emphasis and art:

> **Puella poētam amat.**
> **Poētam puella amat.**
> **Amat poētam puella.**

All three mean "The girl loves the poet." **Puella** is the subject because of its ending; **poētam** is the object because of its ending. To reverse the meaning we must change the endings, not the order: **Poēta puellam amat**, "The poet loves the girl."

## The six cases

| Case | Chief function | Example |
|---|---|---|
| **Nominative** | subject of the verb | *puella* amat — the girl loves |
| **Genitive** | possession; "of" | liber *puellae* — the girl's book |
| **Dative** | indirect object; "to, for" | dōnum *puellae* dat — gives a gift to the girl |
| **Accusative** | direct object | *puellam* videt — sees the girl |
| **Ablative** | means, manner, place; "by, with, from, in" | cum *puellā* — with the girl |
| **Vocative** | direct address | Ō *puella*! — O girl! |

The ablative is the case with the most uses; you will meet them gradually. With the preposition **in** it shows location: **in Italiā**, "in Italy."

## The first declension

Nouns whose genitive singular ends in **-ae** belong to the **first declension**. Learn every noun by its nominative, genitive, and gender: **puella, puellae**, f., "girl."

| Case | Singular | Plural |
|---|---|---|
| Nominative | puell**a** | puell**ae** |
| Genitive | puell**ae** | puell**ārum** |
| Dative | puell**ae** | puell**īs** |
| Accusative | puell**am** | puell**ās** |
| Ablative | puell**ā** | puell**īs** |
| Vocative | puell**a** | puell**ae** |

Some forms are ambiguous—**puellae** may be genitive singular, dative singular, or nominative plural. Context and the verb resolve it: **puellae cantant** must be plural, because **cantant** is.

## Gender

Latin nouns have **grammatical gender**: masculine, feminine, or neuter. First-declension nouns are almost all feminine, but a few that name men are masculine: **poēta** (poet), **agricola** (farmer), **nauta** (sailor). Gender matters because adjectives must agree with it, as we will see in the next lesson.

## Reading the endings

When you meet a Latin sentence, do not read it left to right as English. First find the verb. Then look for a nominative that agrees with it in number—that is the subject. Then look for an accusative—that is the object. Read the endings first, and the order will take care of itself.

An old proverb shows the cases at work: **Fortūna fortēs adiuvat**—"Fortune helps the brave." **Fortūna** is nominative; **fortēs** (a third-declension word you will meet later) is accusative.`,
      readings: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, revised by Richard A. LaFleur", publisher: "HarperCollins", year: "7th ed., 2011", note: "Chapter 2, “Nouns and Cases; First Declension; Agreement of Adjectives; Syntax.”" },
        { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2003", note: "Capitulum II, “Familia Rōmāna,” which introduces the genitive through Julius's household." },
      ],
      media: [
        { kind: "audio", title: "Lingua Latina per se Illustrata: Familia Romana, chapters 1–12 (audiobook)", author: "Read by Daniel Pettersson", publisher: "Latinitium", url: "https://store.latinitium.com/products/lingua-latina-per-se-illustrata-pars-1-familia-romana-vol-1-chapters-1-12-audiobook", note: "A full reading of Ørberg's first chapters in the restored pronunciation. Listen while following the text." },
      ],
      questions: [
        {
          prompt: "In “Poētam puella amat,” who loves whom?",
          choices: ["The poet loves the girl", "The girl loves the poet", "The poets love the girl", "It is ambiguous"],
          answer: 1,
          explanation: "Puella is nominative (subject); poētam is accusative (object). Word order does not change the meaning.",
        },
        {
          prompt: "Which case expresses possession, usually translated with “of”?",
          choices: ["Dative", "Ablative", "Genitive", "Accusative"],
          answer: 2,
          explanation: "The genitive: liber puellae, “the book of the girl.”",
        },
        {
          prompt: "What is the accusative plural of puella?",
          choices: ["puellae", "puellārum", "puellīs", "puellās"],
          answer: 3,
          explanation: "First-declension accusative plural ends in -ās.",
        },
        {
          prompt: "What is the gender of agricola, “farmer”?",
          choices: ["Feminine, like all first-declension nouns", "Masculine, because it names a man", "Neuter", "It has no gender"],
          answer: 1,
          explanation: "A handful of first-declension nouns naming male roles—poēta, agricola, nauta—are masculine.",
        },
        {
          prompt: "In “in Italiā,” the noun Italiā is in which case?",
          choices: ["Nominative", "Genitive", "Accusative", "Ablative"],
          answer: 3,
          explanation: "In with the ablative expresses place where: “in Italy.” Note the long final -ā.",
        },
      ],
      reflection: "Decline fāma, fāmae (“report, fame”) and patria, patriae (“fatherland”) in full. Then write three Latin sentences using puella, poēta, and amāre in which the meaning is clear despite unusual word order.",
    },
    {
      title: "The Second Declension and Adjectives",
      summary: "Masculine and neuter nouns of the second declension, and how adjectives agree.",
      lecture: `## The second declension

Nouns whose genitive singular ends in **-ī** belong to the **second declension**. Most are **masculine** and end in **-us** in the nominative; others are **neuter** and end in **-um**.

| Case | servus, -ī, m. "slave" | dōnum, -ī, n. "gift" |
|---|---|---|
| Nom. sg. | serv**us** | dōn**um** |
| Gen. sg. | serv**ī** | dōn**ī** |
| Dat. sg. | serv**ō** | dōn**ō** |
| Acc. sg. | serv**um** | dōn**um** |
| Abl. sg. | serv**ō** | dōn**ō** |
| Voc. sg. | serv**e** | dōn**um** |
| Nom. pl. | serv**ī** | dōn**a** |
| Gen. pl. | serv**ōrum** | dōn**ōrum** |
| Dat. pl. | serv**īs** | dōn**īs** |
| Acc. pl. | serv**ōs** | dōn**a** |
| Abl. pl. | serv**īs** | dōn**īs** |

Two rules hold for **every neuter noun in Latin**: the nominative and accusative are always identical, and in the plural they always end in **-a**.

The vocative in **-e** is used only by second-declension nouns in **-us**. Its most famous occurrence is Shakespeare's "Et tū, Brūte?"—though Suetonius reports that Caesar, if he spoke at all, said in Greek, "You too, child?"

A few masculine nouns end in **-er**: **puer, puerī**, "boy," which keeps its **e**, and **ager, agrī**, "field," which drops it. The genitive tells you which.

## Adjectives

Latin adjectives have endings too. The commonest kind, called **first-and-second-declension adjectives**, use first-declension endings for feminine nouns and second-declension endings for masculine and neuter. They are listed by their three nominatives: **bonus, bona, bonum**, "good"; **magnus, magna, magnum**, "great."

## Agreement

An adjective **agrees** with its noun in **gender, number, and case**—but not necessarily in its ending:

- **puella bona** — a good girl (feminine nominative singular)
- **servum bonum** — a good slave (masculine accusative singular)
- **dōna magna** — great gifts (neuter nominative/accusative plural)
- **poēta bonus** — a good poet

The last example is the important one. **Poēta** is masculine though it looks feminine, so its adjective takes the masculine form **bonus**. Agreement follows grammar, not appearance.

## Adjectives with sum

The verb **sum** links a subject to a **predicate**, and a predicate adjective agrees with the subject in the nominative: **Rōma magna est**, "Rome is great." **Servī bonī sunt**, "The slaves are good." Adjectives can also stand alone as nouns: **bonī**, "good men," **multa**, "many things." The maxim **Multum, nōn multa**, recorded by Pliny the Younger, advises reading "much, not many things"—depth rather than breadth, a fine motto for a student.

## A note on vocabulary

From this point onward, vocabulary is the chief labor of learning Latin. The Dickinson College Commentaries' core list of the thousand most frequent Latin words covers the great majority of the word forms in a typical classical text. Learn your textbook's vocabulary with macrons, gender, and genitive, and review it daily.`,
      readings: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, revised by Richard A. LaFleur", publisher: "HarperCollins", year: "7th ed., 2011", note: "Chapters 3 and 4: “Second Declension: Masculine Nouns and Adjectives; Apposition; Word Order” and “Second Declension Neuters; Adjectives; Present Indicative of Sum.”" },
        { kind: "book", title: "38 Latin Stories Designed to Accompany Wheelock's Latin", author: "Anne H. Groton and James M. May", publisher: "Bolchazy-Carducci", year: "5th ed., 1995", note: "Read the stories for Chapters 2–4: short adapted passages using only the grammar you have learned." },
      ],
      media: [
        { kind: "website", title: "Dickinson College Commentaries", publisher: "Dickinson College", url: "https://dcc.dickinson.edu", note: "Home of the Latin Core Vocabulary list and annotated editions of classical texts." },
      ],
      questions: [
        {
          prompt: "Which ending marks the genitive singular of the second declension?",
          choices: ["-ae", "-ī", "-ō", "-um"],
          answer: 1,
          explanation: "servus, servī; dōnum, dōnī. The genitive singular identifies the declension.",
        },
        {
          prompt: "What is true of every neuter noun in Latin?",
          choices: ["It has no plural", "Its nominative and accusative are identical, and the plural of each ends in -a", "It is always second declension", "It cannot take an adjective"],
          answer: 1,
          explanation: "This rule holds across all declensions: dōnum/dōnum, dōna/dōna.",
        },
        {
          prompt: "Choose the correct phrase for “a good poet” (subject).",
          choices: ["poēta bona", "poēta bonus", "poētus bonus", "poēta bonum"],
          answer: 1,
          explanation: "Poēta is masculine, so the adjective is masculine nominative singular: bonus.",
        },
        {
          prompt: "Translate: “Servī bonī sunt.”",
          choices: ["The slave is good", "The good slaves", "The slaves are good", "They are good to the slaves"],
          answer: 2,
          explanation: "Servī is nominative plural, sunt is plural, and bonī is a predicate adjective agreeing with servī.",
        },
      ],
      reflection: "Write the Latin for: (1) the great gifts of the farmer; (2) Rome is good; (3) We praise the good boys. Explain the case and agreement of every noun and adjective you use.",
    },
    {
      title: "Reading Latin: Familia Romana",
      summary: "From grammar to reading: the method of Ørberg and the first chapter of Familia Romana.",
      lecture: `## Two methods

There are two great traditions of teaching Latin. The **grammar-translation** method, represented by Wheelock, teaches the system first—paradigms, rules, vocabulary—and then applies it to sentences. The **natural** or **inductive** method, represented by Hans Ørberg's *Lingua Latina per se Illustrata* (first published in 1955), teaches Latin entirely in Latin: a continuous story, illustrated in the margins, in which each new word and form is introduced in a context that makes its meaning clear.

Neither method is complete alone. Grammar without reading produces students who can decline every noun but cannot read a page; reading without grammar produces students who guess. This course pairs them: learn the forms with Wheelock, then *read* with Ørberg.

## The first chapter

*Familia Rōmāna* opens with a map of the Roman Empire and these sentences:

> Rōma in Italiā est. Italia in Eurōpā est. Graecia in Eurōpā est.
> Italia et Graecia in Eurōpā sunt.
> Hispānia quoque in Eurōpā est.
> Hispānia et Italia et Graecia in Eurōpā sunt.

You can already read this. **Rōma** is nominative, the subject. **In Italiā** is **in** with the ablative, "in Italy." **Est**, "is." When two subjects are joined by **et**, "and," the verb becomes plural: **sunt**. **Quoque** means "also."

The chapter continues with rivers and islands—**Nīlus fluvius est**, "the Nile is a river"; **Sicilia īnsula est**—and introduces adjectives and plurals through the pictures alone. Ørberg never translates: you infer **magnus** and **parvus** by comparing a big river to a small one on the map.

## How to read a Latin sentence

1. **Read the whole sentence aloud** in Latin, with attention to endings.
2. **Find the verb**, and note its person and number.
3. **Find the subject**: a nominative agreeing with the verb, or the ending itself.
4. **Find the object** and other cases, and ask what each does.
5. **Only then translate**, into natural English.

Resist translating word by word as you go. The goal, as Ørberg insists, is to understand the Latin *as Latin*—to see **Rōma in Italiā est** and know what it means before any English word arrives.

## Tools for the road

As you continue, you will rely on a few indispensable tools:

- **Logeion**, the University of Chicago's online dictionary, which gathers the great Latin dictionaries (including Lewis and Short) in one place.
- **Perseus**, the Tufts digital library, with classical texts linked to morphological analysis.
- **The Latin Library**, a vast collection of Latin texts from all periods.

## Where this leads

In LAT 102 you will complete the grammar: the remaining declensions, the past and future tenses, participles, and the subjunctive. In LAT 201 you will read Caesar and Cicero unadapted. That is not far away. **Dīmidium factī quī coepit habet**, wrote Horace: "He who has begun has half the deed done."`,
      readings: [
        { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2003", note: "Capitulum I, “Imperium Rōmānum.” Read it aloud twice, consulting the marginal notes and map, before looking up anything." },
        { kind: "book", title: "Latine Disco: Student's Manual", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2005", note: "The English-language companion that explains the grammar of each chapter of Familia Romana." },
      ],
      media: [
        { kind: "audio", title: "Lingua Latina per se Illustrata: Familia Romana, chapters 1–12 (audiobook)", author: "Read by Daniel Pettersson", publisher: "Latinitium", url: "https://store.latinitium.com/products/lingua-latina-per-se-illustrata-pars-1-familia-romana-vol-1-chapters-1-12-audiobook", note: "Listen to Capitulum I while following the text." },
        { kind: "website", title: "Logeion", publisher: "University of Chicago", url: "https://logeion.uchicago.edu", note: "Look up every unfamiliar word here; note its macrons and principal parts." },
      ],
      questions: [
        {
          prompt: "Why is the verb plural in “Italia et Graecia in Eurōpā sunt”?",
          choices: ["Because Eurōpā is plural", "Because the compound subject (Italy and Greece) is plural", "Because in requires a plural verb", "It is a misprint"],
          answer: 1,
          explanation: "Two subjects joined by et take a plural verb: sunt.",
        },
        {
          prompt: "What distinguishes Ørberg's method from Wheelock's?",
          choices: ["Ørberg teaches only vocabulary", "Ørberg teaches Latin through continuous Latin text, inferring meaning from context, without translation", "Ørberg uses ecclesiastical pronunciation", "Ørberg begins with Virgil"],
          answer: 1,
          explanation: "Lingua Latina is written entirely in Latin; meaning is made clear by context, pictures, and marginal notes.",
        },
        {
          prompt: "Translate: “Sicilia īnsula est.”",
          choices: ["Sicily is in the island", "Sicily is an island", "The islands are Sicily", "Sicily has an island"],
          answer: 1,
          explanation: "Sicilia is the subject, īnsula a predicate nominative, est the verb.",
        },
        {
          prompt: "What is the recommended first step in reading a Latin sentence?",
          choices: ["Translate each word as you go", "Read the whole sentence aloud in Latin, attending to the endings", "Look up every word in the dictionary", "Rearrange it into English word order"],
          answer: 1,
          explanation: "Reading aloud first lets you take in the endings and the structure before you begin to translate.",
        },
      ],
      reflection: "Read Capitulum I of Familia Romana aloud. Then write five Latin sentences of your own about the geography of the Roman Empire, using est, sunt, et, and in with the ablative.",
    },
  ],
  library: [
    {
      heading: "Beginning Textbooks",
      items: [
        { kind: "book", title: "Wheelock's Latin", author: "Frederic M. Wheelock, rev. Richard A. LaFleur", publisher: "HarperCollins", year: "7th ed., 2011", note: "The classic American grammar-translation course, with Latin sentences drawn from real authors from the first chapter." },
        { kind: "book", title: "Lingua Latina per se Illustrata, Pars I: Familia Romana", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2003", note: "The celebrated immersive course: thirty-five chapters of continuous Latin story. The best companion to any grammar." },
        { kind: "book", title: "Learn to Read Latin", author: "Andrew Keller and Stephanie Russell", publisher: "Yale University Press", year: "2nd ed., 2015", note: "A rigorous university course with a separate workbook; excellent for self-study at a fast pace." },
        { kind: "book", title: "Cambridge Latin Course, Book I", author: "Cambridge School Classics Project", publisher: "Cambridge University Press", year: "5th ed.", note: "A reading-based course set in Pompeii in AD 79; gentle and engaging." },
        { kind: "book", title: "Latin: An Intensive Course", author: "Floyd L. Moreland and Rita M. Fleischer", publisher: "University of California Press", year: "1977", note: "The summer-school course: the whole grammar quickly, for disciplined students." },
      ],
    },
    {
      heading: "Companion Readers",
      items: [
        { kind: "book", title: "38 Latin Stories Designed to Accompany Wheelock's Latin", author: "Anne H. Groton and James M. May", publisher: "Bolchazy-Carducci", year: "5th ed., 1995" },
        { kind: "book", title: "Latine Disco: Student's Manual", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2005", note: "English explanations of the grammar in each chapter of Familia Romana." },
        { kind: "book", title: "Colloquia Personarum", author: "Hans H. Ørberg", publisher: "Focus Publishing (now Hackett)", year: "2005", note: "Short dialogues keyed to the chapters of Familia Romana." },
      ],
    },
    {
      heading: "Grammars and Dictionaries",
      items: [
        { kind: "website", title: "Allen and Greenough's New Latin Grammar", author: "J. H. Allen and J. B. Greenough", publisher: "Dickinson College Commentaries (online edition)", url: "https://dcc.dickinson.edu/grammar/latin/", note: "The standard reference grammar since 1903, free and searchable." },
        { kind: "book", title: "Oxford Latin Dictionary", author: "P. G. W. Glare, ed.", publisher: "Oxford University Press", year: "2nd ed., 2012", note: "The authoritative dictionary of classical Latin." },
        { kind: "book", title: "Cassell's Latin Dictionary", author: "D. P. Simpson", publisher: "Cassell", year: "5th ed., 1968", note: "A practical desk dictionary, Latin–English and English–Latin." },
        { kind: "book", title: "Vox Latina: A Guide to the Pronunciation of Classical Latin", author: "W. Sidney Allen", publisher: "Cambridge University Press", year: "2nd ed., 1978" },
      ],
    },
    {
      heading: "Listening",
      items: [
        { kind: "audio", title: "Alatii Recitationes", author: "Johan Winge", url: "https://alatius.com/latin/", note: "Classical poetry and prose read aloud with careful attention to quantity." },
        { kind: "audio", title: "Familia Romana, chapters 1–12 (audiobook)", author: "Read by Daniel Pettersson", publisher: "Latinitium", url: "https://store.latinitium.com/products/lingua-latina-per-se-illustrata-pars-1-familia-romana-vol-1-chapters-1-12-audiobook" },
        { kind: "audio", title: "Learn Latin with Audio", publisher: "Latinitium", url: "https://latinitium.com/learn-latin-with-audio-50-hours-of-spoken-latin/", note: "An index of free spoken-Latin resources." },
      ],
    },
    {
      heading: "Online Resources",
      items: [
        { kind: "website", title: "Logeion", publisher: "University of Chicago", url: "https://logeion.uchicago.edu", note: "Lewis and Short and other dictionaries in one search." },
        { kind: "website", title: "Perseus Digital Library", publisher: "Tufts University", url: "https://www.perseus.tufts.edu/hopper/", note: "Latin and Greek texts with word-by-word morphological help." },
        { kind: "website", title: "The Latin Library", url: "https://www.thelatinlibrary.com", note: "Texts from Plautus to the Renaissance." },
        { kind: "website", title: "Dickinson College Commentaries", url: "https://dcc.dickinson.edu", note: "Annotated school editions and the Latin Core Vocabulary." },
      ],
    },
  ],
};
