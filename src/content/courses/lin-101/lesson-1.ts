import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "What Is Language?",
  summary:
    "Linguistics as the scientific study of language; descriptive and prescriptive approaches; what a speaker knows; Saussure and the linguistic sign; arbitrariness and iconicity; Hockett's design features and animal communication; sign languages; speech and writing; language in the brain; the world's languages and their endangerment; dialects and variation; and the debate over the language instinct and linguistic relativity.",
  pages: [
    {
      title: "The Scientific Study of Language",
      body: `## A uniquely human gift

Every normal human being, in every society ever studied, speaks a language—or signs one. Children acquire their first language without formal instruction, in a few years, while they are still unable to tie their shoes. Language allows us to tell stories about the past, plan for the future, argue about what is not, joke, pray, and share what is in our minds with others. No other species has anything quite like it.

**Linguistics** is the scientific study of human language. Its goal is to describe and explain the structure of languages, how they are acquired and used, how they vary and change, and what they reveal about the human mind. Linguists study sounds (**phonetics** and **phonology**), words (**morphology**), sentences (**syntax**), meaning (**semantics** and **pragmatics**), and the place of language in society, history, and the brain.

## Descriptive, not prescriptive

The first lesson of linguistics often surprises newcomers. Linguists study language **descriptively**: they describe how people actually speak and sign, as a biologist describes how animals actually behave. They do not, as linguists, issue **prescriptive** rules about how people *should* speak.

Many people's experience of "grammar" comes from prescriptive rules learned in school: do not split infinitives ("to boldly go"), do not end a sentence with a preposition, do not say "ain't" or "me and him went." From a linguist's point of view, these rules are social conventions about a prestigious variety of a language, not laws of language itself. The rule against split infinitives, for instance, was devised by grammarians in the nineteenth century by analogy with Latin, in which an infinitive is a single word and cannot be split. Speakers of English have split infinitives for centuries, and the sentences are perfectly grammatical in the linguist's sense.

This does not mean that "anything goes." Every language and every dialect is governed by **rules**, in the descriptive sense: regular patterns that speakers follow unconsciously. A speaker of English would never say "*Went him and me*" or "*The the dog barked*"; the asterisk is linguists' notation for an ungrammatical form, one that native speakers reject. Discovering these unconscious rules is the work of linguistics.

## All languages are equal

A second surprising lesson is that, from the linguist's point of view, no language or dialect is more "primitive" or more "logical" than another. Every human language studied—whether spoken by millions in great cities or by a few hundred in a rainforest—has a complex system of sounds, a rich vocabulary, and an intricate grammar capable of expressing any thought its speakers need to express. Some languages have grammatical features that English lacks: obligatory marking of whether a speaker witnessed an event or heard about it, or dozens of noun classes. English has features that others lack. But there are no "simple" human languages.

## The plan of the course

This course introduces the essential tools for thinking about any language. **Lesson I** asks what language is. **Lesson II** studies **sounds**: phonetics and phonology. **Lesson III** studies **words**: morphology and the lexicon. **Lesson IV** studies **sentences**: syntax. **Lesson V** studies **meaning** and **use**: semantics and pragmatics. Along the way we read three classic texts: **Victoria Fromkin, Robert Rodman, and Nina Hyams**, *An Introduction to Language* (first edition 1974, many later editions), the standard introductory textbook; **Steven Pinker**, *The Language Instinct* (1994), a lively argument that language is a biological adaptation; and **Ferdinand de Saussure**, *Course in General Linguistics* (1916), the founding text of modern linguistics.

## Why it matters

Linguistics matters for many reasons. It helps teachers teach reading and second languages; it helps speech therapists treat disorders; it helps computer scientists build systems that process language; it helps missionaries and translators bring texts, including the Bible, into new languages; it helps communities preserve endangered languages; and it helps us all understand the most distinctive feature of our own humanity.

> **Pause and consider.** Think of a "grammar rule" you were taught in school. Is it a description of how people actually speak, or a prescription about how they should? How can you tell?`,
    },
    {
      title: "What Does a Speaker Know?",
      body: `## Knowledge without awareness

What do you know when you know a language? Fromkin and her coauthors begin their textbook with this question. The answer is: a great deal, almost all of it **unconsciously**.

## Knowing sounds

You know which sounds belong to your language and which do not. An English speaker knows that *blick* could be an English word, though it is not one, but that *bnick* could not; English does not allow words to begin with *bn*. You know how sounds change in different contexts, even if you have never noticed. You can recognize a foreign accent within a few syllables.

## Knowing words

You know tens of thousands of words, and you know not only their meanings but their sounds, their grammatical categories, and how they combine with other words. You know that *unhappiness* is made of *un-*, *happy*, and *-ness*, and that *-ness* turns adjectives into nouns. You can understand words you have never heard, such as *unFacebookable*, because you know the rules for building words.

## Knowing sentences

Most remarkably, you can produce and understand an **infinite** number of sentences, most of which you have never heard before. This sentence, very likely, is new to you, yet you understand it at once. You know that *The dog bit the man* and *The man bit the dog* mean different things, though they contain the same words; that *Flying planes can be dangerous* is **ambiguous**; and that *John is easy to please* and *John is eager to please* differ in who is pleasing whom, though they look alike.

This capacity to produce and understand new sentences is called the **creativity** of language. It is possible because languages have **rules** that combine a finite number of elements into an unlimited number of structures. As the German scholar **Wilhelm von Humboldt** put it in the nineteenth century, language makes infinite use of finite means.

## Competence and performance

The American linguist **Noam Chomsky** (born 1928), whose work transformed linguistics from the late 1950s, distinguished **linguistic competence**—the unconscious knowledge of a language that a speaker possesses—from **linguistic performance**—the actual use of that knowledge in speaking and understanding, which is affected by memory limits, distraction, fatigue, and errors. When you begin a sentence, lose track, and say "um" or start again, your performance falls short of your competence. Linguists who study grammar try to describe competence; psycholinguists study performance.

## Grammar as knowledge

In this sense, **grammar** means the system of rules that represents a speaker's linguistic competence. Every speaker of every language has a grammar in his or her head, whether or not he or she has ever studied grammar in school. A child of four, who cannot define a noun, already has an intricate grammar. The linguist's **descriptive grammar** is an attempt to make this unconscious knowledge explicit.

## Judgments

Linguists often study competence by asking native speakers for **judgments**: is this sentence acceptable? Does this sentence mean the same as that one? Can this word refer to that person? Consider:

- *Who did you see Mary with?*
- \\**Who did you see Mary and?*

The first is fine; the second is impossible, though the meaning it would have is perfectly clear. Every English speaker knows this, though almost none could explain why. Such contrasts, which children never hear explained, are among the main evidence for the rich, unconscious structure of linguistic knowledge.

> **Pause and consider.** You know that *bnick* could not be an English word, though no one ever told you. Where did that knowledge come from?`,
    },
    {
      title: "Saussure and the Linguistic Sign",
      body: `## The founder

**Ferdinand de Saussure** (1857–1913), a Swiss linguist, is often called the founder of modern linguistics. As a young man, he made his name in **historical linguistics**, the study of how languages change, with a brilliant study of the vowel system of Proto-Indo-European (1878). But his lasting influence came from lectures on general linguistics that he gave at the University of Geneva between 1907 and 1911. He never wrote them up. After his death, two of his colleagues, **Charles Bally** and **Albert Sechehaye**, reconstructed the lectures from students' notes and published them in **1916** as the ***Course in General Linguistics***. The book became one of the most influential works of the twentieth century, not only in linguistics but in anthropology, literary theory, and philosophy.

## The sign

At the center of Saussure's theory is the **linguistic sign**. A sign, he argued, unites two things: a **signifier** (*signifiant*), a sound-image, the mental impression of a sequence of sounds, and a **signified** (*signifié*), a concept. The English word *tree* unites the sound-image /tri:/ with the concept of a tree. Notice that both sides of the sign are mental: the sign does not link a name to a thing in the world, but a sound-image to a concept.

## Arbitrariness

Saussure's first principle is that the link between signifier and signified is **arbitrary**. There is nothing about the sounds of *tree* that makes them suitable for the concept; French says *arbre*, German *Baum*, Spanish *árbol*, Hebrew *etz*. In the course's rendering of Saussure's formulation: the bond between the signifier and the signified is arbitrary, or, more simply, the linguistic sign is arbitrary. This does not mean that individual speakers can choose their words freely; it means that the connection is a matter of social **convention**, not of any natural resemblance.

## Linearity

Saussure's second principle is that the signifier is **linear**: spoken language unfolds in time, one sound after another. Unlike a picture, which presents its elements all at once, a word or sentence must be heard in sequence.

## Langue and parole

Saussure distinguished ***langue***, the language as a shared social system of signs, existing in the minds of a community of speakers, from ***parole***, individual acts of speaking. The object of linguistics, he argued, is *langue*: the system that makes speech possible. This distinction anticipated Chomsky's distinction between competence and performance, though Saussure emphasized the social character of the system, and Chomsky its individual, mental, and biological character.

## Synchronic and diachronic

Saussure also distinguished two ways of studying language. **Diachronic** linguistics studies language through time: how Latin became French, how Old English became modern English. **Synchronic** linguistics studies a language as a system at a single moment. Nineteenth-century linguistics had been almost entirely diachronic; Saussure insisted that a language must first be understood as a system in its own right, as a game of chess can be understood from the position on the board without knowing the history of the moves that led to it.

## Value and difference

Perhaps Saussure's most profound idea is that the elements of a language have **value** only through their **differences** from other elements in the system. The English word *sheep* and the French word *mouton* may refer to the same animal, but they do not have the same value, since English also has *mutton* for the meat, while French uses *mouton* for both. In the course's rendering of Saussure's famous claim: in language there are only differences, without positive terms. A sound, a word, or a meaning is what it is by contrast with what it is not.

## Structuralism

Saussure's ideas inspired **structuralism**, a twentieth-century movement that applied the idea of systems of differences to many fields: the anthropology of **Claude Lévi-Strauss**, the literary theory of **Roland Barthes**, and others. In linguistics itself, his influence shaped the study of sound systems, as we will see in Lesson II.

> **Pause and consider.** Saussure argued that in language there are only differences. Can you think of a pair of words in English whose meanings depend on their contrast with each other?`,
    },
    {
      title: "Arbitrariness and Iconicity",
      body: `## Are signs always arbitrary?

Saussure's principle of arbitrariness is one of the foundations of linguistics. Yet it has limits, and the study of those limits has become an active area of research.

## Onomatopoeia

The most obvious exception is **onomatopoeia**: words that imitate sounds, such as *buzz*, *hiss*, *bang*, and *cuckoo*. Even these, Saussure noted, are partly conventional. The sound a dog makes is *woof* or *bow-wow* in English, *ouaf* in French, *wau wau* in German, *wan wan* in Japanese, and *gav gav* in Russian. Each language imitates the sound through its own system of sounds. A rooster says *cock-a-doodle-doo* in English and *kikeriki* in German. Onomatopoeic words also change over time like other words, sometimes losing their imitative quality.

## Sound symbolism

More subtle is **sound symbolism**: patterns in which certain sounds tend to be associated with certain meanings. In English, many words beginning with *gl-* have to do with light or vision: *gleam*, *glow*, *glint*, *glitter*, *glare*, *glimpse*. Many words beginning with *sn-* have to do with the nose: *sneeze*, *sniff*, *snore*, *snout*, *snot*. Such clusters, called **phonesthemes**, are not strictly morphemes, since *gl-* has no meaning on its own, but they show that the link between sound and meaning is not always wholly arbitrary.

## Bouba and kiki

A famous experiment, first carried out by the German psychologist **Wolfgang Köhler** in 1929 and repeated by **V. S. Ramachandran** and **Edward Hubbard** in 2001, shows two shapes, one rounded and blobby, one spiky and angular, and asks which is called "bouba" and which "kiki." The great majority of people, across many languages and cultures, call the rounded shape "bouba" and the spiky one "kiki." Some relation between sounds and visual shapes seems to be shared by human beings generally, though how strong and universal it is remains under study.

## Iconicity in grammar

**Iconicity**, a resemblance between form and meaning, also appears in grammar. In many languages, the order of clauses mirrors the order of events: "I came, I saw, I conquered" (Julius Caesar's *veni, vidi, vici*) describes events in the order they occurred. Plurals are often longer than singulars, as if more form expressed more things. Reduplication—repeating a word or part of a word—is often used for plurality or intensity, as in Indonesian *orang* "person," *orang-orang* "people."

## Sign languages

Iconicity is especially visible in **sign languages**, where many signs resemble what they represent: the sign for "tree" in American Sign Language involves holding the forearm upright with the fingers spread like branches. Yet even here, iconicity is shaped by convention: the sign for "tree" differs in Danish and Chinese sign languages, each depicting a tree in a different way. And many signs are fully arbitrary.

## Why arbitrariness matters

Despite these exceptions, arbitrariness remains fundamental. It is what allows languages to have tens of thousands of words: if words had to resemble their meanings, how could one have words for *justice*, *tomorrow*, or *the*? Arbitrariness frees language from the limits of imitation, allowing it to express abstract, absent, and imagined things. The current view in linguistics is that languages combine a large arbitrary core with pockets of iconicity and sound symbolism.

## A note on names

Many religious and philosophical traditions have speculated about a language in which names fit things perfectly. Plato's dialogue *Cratylus* debates whether names are correct by nature or by convention. Genesis tells how Adam gave names to the animals (Genesis 2:19–20), and some interpreters imagined that his names expressed their natures. Saussure's principle of arbitrariness sides with convention.

> **Pause and consider.** Most people call the rounded shape "bouba." What might explain this? Does it undermine Saussure's principle?`,
    },
    {
      title: "Design Features and Animal Communication",
      body: `## Hockett's design features

What makes human language different from other forms of communication? In 1960, the American linguist **Charles Hockett** proposed a list of **design features** of language, properties that human language has and that animal communication systems have in only some combination. Among the most important are:

- **Arbitrariness**: the link between form and meaning is conventional, as Saussure argued.
- **Duality of patterning**: a small number of meaningless units (sounds) combine into a large number of meaningful units (words), which in turn combine into sentences. English has about forty distinctive sounds but hundreds of thousands of words.
- **Productivity** (or creativity): speakers can produce and understand an unlimited number of new messages.
- **Displacement**: language can refer to things that are not present in time or space—the past, the future, the distant, the hypothetical, the imaginary.
- **Cultural transmission**: language is learned from others, not inherited fully formed.
- **Discreteness**: messages are built from distinct units, not continuous variation.

## The honeybee dance

The Austrian zoologist **Karl von Frisch**, who received the Nobel Prize in 1973, discovered that honeybees communicate the location of food sources through a **dance**. A forager returning to the hive performs a "waggle dance," whose direction relative to vertical indicates the direction of the food relative to the sun, and whose duration indicates its distance. The bee dance has **displacement**—it refers to food far away—and a kind of productivity, since it can indicate any direction and distance. But it can communicate only about food (and nest sites), and its elements are not combined like words into sentences.

## Vervet monkeys

Field studies by **Robert Seyfarth** and **Dorothy Cheney** in Kenya, beginning around 1980, showed that **vervet monkeys** give different alarm calls for different predators: one for leopards, after which monkeys run into trees; one for eagles, after which they look up and hide in bushes; one for snakes, after which they stand up and look at the ground. The calls are arbitrary and meaningful, but there are only a few of them, and they do not combine.

## Birdsong

Many songbirds learn their songs from adults, during a sensitive period in youth, and young birds deprived of tutors develop abnormal songs. Birdsong thus shares with human language **cultural transmission** and a **critical period** for learning. But its structure, though complex, does not carry combinatorial meaning: rearranging the notes of a song does not produce a new message.

## Teaching apes language

In the twentieth century, researchers tried to teach language to great apes. Chimpanzees cannot produce human speech sounds, so researchers used signs or symbols. **Washoe**, a chimpanzee raised by **Allen and Beatrix Gardner** from 1966, learned over a hundred signs adapted from American Sign Language. **Koko**, a gorilla, was reported to use many more. **Kanzi**, a bonobo studied by **Sue Savage-Rumbaugh**, learned to use a keyboard of symbols (lexigrams) and to understand many spoken English sentences.

## Skepticism

These projects were controversial. The psychologist **Herbert Terrace**, who trained a chimpanzee named **Nim Chimpsky** (a play on Chomsky's name), concluded after analyzing videotapes, in *Nim* (1979), that Nim's "sentences" were mostly imitations of his trainers' recent signs, prompted by them, and showed no grammar: long sequences tended to be repetitive ("Give orange me give eat orange me eat orange give me eat orange give me you"). Most linguists conclude that apes can learn many symbols and use them meaningfully, but do not acquire syntax—the ability to combine words by rules into new sentences—as human children do.

## The uniqueness of human language

Studies of animal communication show that many species have rich and sophisticated systems, and that some features of language have precursors in other animals. But no other species combines all of Hockett's features, and none has the open-ended, recursive syntax of human language.

> **Pause and consider.** The bee dance can communicate about food far away, but only about food. Which design features does it have, and which does it lack?`,
    },
    {
      title: "Sign Languages",
      body: `## Languages of the hands

For most of history, the sign languages of deaf people were regarded as crude systems of gesture, not real languages. In the late nineteenth century, many schools for the deaf banned signing altogether, insisting that deaf children learn to speak and lip-read, a policy endorsed by the **International Congress on the Education of the Deaf** at Milan in **1880**. The policy caused great harm to generations of deaf children.

## Stokoe

The scientific recognition of sign languages began with **William Stokoe** (1919–2000), a professor of English at **Gallaudet University** in Washington, D.C., the world's only university designed for deaf students. In ***Sign Language Structure*** (1960), Stokoe showed that the signs of **American Sign Language** (ASL) are not holistic pictures but are composed of a limited set of meaningless components—**handshape**, **location**, and **movement**, later supplemented by **palm orientation** and non-manual markers such as facial expression—just as spoken words are composed of meaningless sounds. Sign languages, that is, have **duality of patterning**. Stokoe and his colleagues published *A Dictionary of American Sign Language on Linguistic Principles* in 1965.

## Full languages

Research since Stokoe has shown that sign languages are full natural languages, with all the complexity of spoken languages: phonology (in the visual medium), morphology, syntax, and the ability to express anything a spoken language can. ASL uses space grammatically: a signer can establish a location in space for a person or thing and then refer back to it by pointing, and verbs can move between such locations to show who did what to whom. Facial expressions mark questions, negation, and other grammatical functions.

## Not universal

There is no single, universal sign language. Sign languages arise wherever deaf people form communities, and they are not based on the spoken languages around them. **ASL** and **British Sign Language** (BSL) are mutually unintelligible, though both countries speak English; ASL is historically related to **French Sign Language**, brought to the United States in 1817 by the French deaf teacher **Laurent Clerc**, who helped found the first American school for the deaf in Hartford, Connecticut.

## The birth of a language

A remarkable natural experiment occurred in **Nicaragua**. Before the late 1970s, deaf Nicaraguans had little contact with one another, and used only home signs with their families. When new schools brought hundreds of deaf children together, in the late 1970s and 1980s, they quickly developed a shared signing system. Researchers such as **Ann Senghas** found that younger children, entering the community later, made the system more regular and grammatically complex than the older children who had created it. **Nicaraguan Sign Language** thus emerged within a generation, offering a rare view of how grammar can arise. Pinker discusses it in *The Language Instinct* as evidence that children bring an innate capacity for grammar to the task of learning language.

## The brain

Studies of deaf signers who suffered brain damage, carried out by **Ursula Bellugi** and her colleagues from the 1970s, showed that damage to the left hemisphere of the brain, which typically causes language disorders (**aphasia**) in speakers, causes similar disorders in signers, even though signing is visual and spatial. This suggests that the brain's language areas are specialized for language as such, not merely for sound.

## Deaf culture

Many deaf people regard themselves as members of a cultural and linguistic minority, **Deaf** (often capitalized) communities with their own language, history, arts, and institutions, rather than as people with a disability. The recognition of sign languages as full languages has transformed deaf education and the status of deaf people in many countries.

> **Pause and consider.** Sign languages have handshape, location, and movement, just as spoken words have sounds. What does this tell us about what language is?`,
    },
    {
      title: "The World's Languages",
      body: `## How many languages?

How many languages are spoken in the world today? The answer depends on how one distinguishes languages from dialects, a question we take up on the next page. The most widely used catalogue, ***Ethnologue***, lists about **seven thousand** living languages. They are very unevenly distributed. A handful of languages—Mandarin Chinese, Spanish, English, Hindi, Arabic, Bengali, Portuguese, Russian—have hundreds of millions of speakers each, and roughly half the world's population speaks one of a couple of dozen languages. Meanwhile, thousands of languages are spoken by communities of a few thousand people or fewer.

## Where languages are

Linguistic diversity is concentrated in particular regions. **Papua New Guinea**, with a population of about ten million, has more than eight hundred languages. **Indonesia**, **Nigeria**, **India**, **Mexico**, **Cameroon**, and **Australia** (before colonization) are also extraordinarily diverse. Europe, by contrast, has relatively few languages.

## Language families

Languages descend from earlier languages, as Latin gave rise to Spanish, French, Italian, Portuguese, and Romanian. Languages that share a common ancestor form a **language family**. The largest families by number of speakers are **Indo-European** (including English, Spanish, Hindi, Russian, Persian), **Sino-Tibetan** (including Chinese and Tibetan), **Niger-Congo** (including Swahili, Yoruba, and Zulu), **Afro-Asiatic** (including Arabic, Hebrew, Amharic, and Hausa), **Austronesian** (including Malay, Tagalog, Malagasy, and Hawaiian), and **Dravidian** (including Tamil and Telugu). Some languages, such as **Basque**, have no known relatives; they are called **isolates**. Historical linguistics, which studies these relationships, is the subject of HIL 101 and HIL 110.

## Endangered languages

Many of the world's languages are in danger. When a community's children stop learning its language, shifting to a dominant language such as English, Spanish, Russian, or Mandarin, the language is likely to die with its last speakers. Linguists estimate that **perhaps 40 percent** of the world's languages are endangered, and that many may cease to be spoken during this century. When a language dies, much is lost: oral literature, knowledge of plants and animals, ways of expressing experience, and a part of the identity of a people.

## Documentation and revitalization

Linguists work with communities to **document** endangered languages, recording speakers, writing grammars and dictionaries, and archiving materials. Some communities have succeeded in **revitalizing** their languages. **Hebrew**, as we saw in WRL 110, was revived as a spoken language in the late nineteenth and twentieth centuries. **Welsh** has been strengthened through education and broadcasting. **Māori** in New Zealand has been revived through "language nests" (*Kōhanga Reo*), preschools in which young children are immersed in the language. **Hawaiian** has had similar programs.

## Bible translation

One of the largest efforts to document the world's languages has been carried out by Christian missionaries. **SIL International** (formerly the Summer Institute of Linguistics), founded in 1934 by **William Cameron Townsend**, trains linguists to study minority languages and translate the Bible into them, and has published grammars and dictionaries of hundreds of languages; it also produced *Ethnologue* for many years. The relation between missionary linguistics and academic linguistics has been both productive and debated.

## Babel and Pentecost

The diversity of languages has long been a subject of religious reflection. Genesis tells of the tower of **Babel**, where God confused the language of humanity and scattered them (Genesis 11:1–9). The book of Acts tells of **Pentecost**, when the apostles, filled with the Spirit, spoke so that every hearer "heard them speak in his own language" (Acts 2:6). Christian thinkers have often read Pentecost as a reversal of Babel—not by restoring one language, but by allowing the gospel to be heard in all of them.

> **Pause and consider.** When a language dies, what is lost? Is anything lost that could not be preserved by recording and translation?`,
    },
    {
      title: "Dialects and Variation",
      body: `## Language or dialect?

What is the difference between a **language** and a **dialect**? In popular usage, a "dialect" is often a regional or rural way of speaking, regarded as less correct than the standard. Linguists use the word differently: a **dialect** is any variety of a language, distinguished by features of pronunciation, vocabulary, and grammar. In this sense, everyone speaks a dialect, including speakers of the standard language, which is itself one dialect among others, usually that of an educated or powerful group.

## Mutual intelligibility

A common criterion for distinguishing languages from dialects is **mutual intelligibility**: if speakers can understand each other, they speak dialects of the same language; if not, different languages. But the criterion gives awkward results. Speakers of **Norwegian**, **Swedish**, and **Danish** can understand each other to a considerable degree, yet they are counted as separate languages because they belong to separate nations with separate standard written forms. Speakers of different **Chinese** varieties, such as Mandarin and Cantonese, cannot understand each other's speech, yet they are often called dialects of one language, because they share a writing system and a national identity.

## An army and a navy

The distinction is often more political than linguistic. A famous quip, popularized by the Yiddish scholar **Max Weinreich** in 1945, who said he heard it from a listener at one of his lectures, holds that "a language is a dialect with an army and a navy." Whether a variety is called a language often depends on whether it has a state, a standard, and a literature behind it.

## Standard and nonstandard

**Standard** varieties develop through education, printing, dictionaries, and institutions. They are useful for communication across a wide area. But linguists insist that **nonstandard** varieties are not degraded or illogical versions of the standard; they are systematic, rule-governed varieties in their own right.

## African American English

A famous demonstration concerned **African American English** (also called African American Vernacular English). In the 1960s, some educators described the speech of Black children as deficient and illogical. The linguist **William Labov**, in an influential article, "The Logic of Nonstandard English" (1969), showed that it is a fully systematic dialect, with rules as regular as those of standard English. For example, it uses an "invariant *be*" to mark habitual action: *He be working* means "he is usually working," while *He working* means "he is working right now"—a grammatical distinction that standard English does not make with a single word. Its rules for deleting the verb *be* ("She nice") follow precisely the contexts in which standard English contracts it ("She's nice"); where standard English cannot contract, African American English cannot delete.

## Register and style

Every speaker also varies his or her speech according to the situation, using different **registers**: the formal register of a job interview, a sermon, or an academic paper; the informal register of conversation with friends; specialized registers of law, medicine, or sports. Competent speakers shift among registers, often without noticing. The study of language variation in society is the subject of SOC 101 and SOC 110.

## Attitudes

People's attitudes toward dialects can have real consequences. Studies have shown that speakers of stigmatized dialects can face discrimination in employment, housing, education, and courts. Understanding that all dialects are rule-governed does not mean that standard varieties are not useful to learn; it means that speakers of other varieties should not be judged as less intelligent or less logical.

> **Pause and consider.** Labov showed that African American English deletes *be* exactly where standard English can contract it. What does this suggest about whether nonstandard dialects are "careless"?`,
    },
    {
      title: "Speech, Sign, and Writing",
      body: `## Speech comes first

Linguists generally regard **spoken** (or signed) language as primary, and **writing** as a secondary system for representing it. The reasons are simple. Every human community has spoken or signed language; many have had no writing. Every child acquires speech or sign naturally; writing must be deliberately taught, and many people in history have never learned it. Spoken language is perhaps a hundred thousand years old or more; writing is barely five thousand.

## The invention of writing

Writing was invented independently in a few places: in **Mesopotamia** (Sumerian cuneiform, around 3200 BCE), probably in **Egypt** (hieroglyphs, at about the same time), in **China** (by about 1200 BCE, in the oracle bone inscriptions of the Shang dynasty), and in **Mesoamerica** (by the first millennium BCE, culminating in the Maya script). Other writing systems developed from these by borrowing or adaptation. Early writing often began with tallies and pictures for accounting, and developed gradually into systems for representing language.

## Kinds of writing systems

Writing systems represent language at different levels:

- **Logographic** systems use symbols for words or morphemes. Chinese characters are the main example in use today: the character 人 represents the word for "person." Most characters include a component that gives a clue to pronunciation.
- **Syllabic** systems use symbols for syllables. The Japanese *kana* (hiragana and katakana) are syllabaries; so is the **Cherokee** syllabary, invented around 1821 by **Sequoyah**, who could not read any other script.
- **Alphabetic** systems use symbols for individual sounds (consonants and vowels). The alphabet developed from a West Semitic script that wrote only consonants, adopted by the Phoenicians, and was adapted by the **Greeks** around the eighth century BCE, who added letters for vowels. From the Greek alphabet came the Latin and Cyrillic alphabets.

Many systems mix these principles. Japanese uses Chinese characters (*kanji*) alongside two syllabaries. The **Korean** alphabet, ***Hangul***, created in 1443 under King **Sejong**, is admired by linguists because its letter shapes reflect the positions of the speech organs and its letters are grouped into syllable blocks.

## Spelling and sound

Because pronunciation changes faster than spelling, alphabetic writing systems often drift away from speech. English spelling is famously irregular: *though*, *through*, *tough*, *cough*, and *bough* spell *-ough* five different ways. Much of the irregularity reflects pronunciations of the fifteenth century, before the **Great Vowel Shift** changed English vowels, and the fixing of spelling by printers and dictionary makers. This is one reason linguists use a special phonetic alphabet, as we will see in Lesson II, rather than ordinary spelling.

## Writing changes language

Though secondary, writing has profound effects. It allows language to be preserved across time and space, makes possible long and complex texts, encourages standardization, and gives rise to literacy, with its social and cognitive consequences. Religions of the book—Judaism, Christianity, and Islam—have been shaped by writing, and the translation of scriptures has often meant creating writing systems for languages that had none, as the missionary **Cyril** did for the Slavs in the ninth century. Writing systems are studied in LIN 301.

> **Pause and consider.** Linguists regard speech as primary and writing as secondary. Yet many people think of the written form as the "real" language. Why might that be?`,
    },
    {
      title: "Language in the Brain",
      body: `## Broca's area

In 1861, the French physician **Paul Broca** examined a patient who could understand speech but could say only one syllable, "tan." After the patient's death, Broca found damage to a region of the **left frontal lobe** of the brain, now called **Broca's area**. He went on to study other patients with similar problems and similar damage, and concluded that this region was essential for the production of speech. His discovery was one of the first demonstrations that specific mental functions are located in specific parts of the brain.

## Wernicke's area

In 1874, the German neurologist **Carl Wernicke** described patients with damage to a region of the **left temporal lobe**, now called **Wernicke's area**, who had the opposite problem: they spoke fluently, with normal rhythm and intonation, but their speech made little sense, and they had difficulty understanding others.

## Aphasia

Language disorders caused by brain damage are called **aphasias**. In **Broca's aphasia**, speech is slow, effortful, and "telegraphic," often lacking grammatical words and endings ("Walk... dog... park"), while comprehension of simple sentences is relatively preserved. In **Wernicke's aphasia**, speech is fluent but filled with wrong words and invented words, and comprehension is impaired. These patterns suggested to early researchers that grammar and meaning, or production and comprehension, might depend on different brain regions. Modern research, using brain imaging, has shown that language depends on wider networks than these classic areas, but the basic picture of left-hemisphere specialization has held up for most people.

## Lateralization

In about **95 percent** of right-handed people, and most left-handed people, language is controlled mainly by the **left hemisphere** of the brain. This specialization is called **lateralization**. The right hemisphere contributes to aspects of language such as intonation, emotional tone, and the understanding of jokes and metaphors. As we saw on the page on sign languages, deaf signers with left-hemisphere damage develop aphasias in sign, showing that the left hemisphere is specialized for language, not merely for sound.

## The critical period

Is there a **critical period** for language acquisition, after which a first language cannot be fully acquired? The question is hard to study, since it would be unethical to deprive a child of language. A few tragic cases of children raised in isolation offer some evidence. The most studied is "**Genie**," discovered in Los Angeles in 1970 at the age of thirteen, after years of severe isolation and abuse. With intensive help, she learned many words but never mastered grammar. Studies of deaf people who first encountered sign language at different ages have also shown that those who learn later rarely achieve full native fluency. Many researchers conclude that there is a sensitive period for language, especially for grammar and pronunciation, though its exact nature is debated.

## Language and Mind

These questions—how children acquire language, how the brain processes it, and what happens when it is damaged—are the subject of LIN 110, *Language and Mind*.

> **Pause and consider.** Patients with Broca's aphasia often understand much but cannot produce grammatical speech. What does this suggest about the difference between knowing a language and using it?`,
    },
    {
      title: "The Language Instinct and Its Critics",
      body: `## Is language innate?

Where does linguistic knowledge come from? This question divides linguists. Children acquire their native language quickly, uniformly, and without formal instruction, despite hearing speech that is often fragmentary and full of errors. They come to know many things about their language—such as the impossibility of *\\*Who did you see Mary and?*—that no one teaches them and that they could not easily infer from what they hear. This argument is called the **poverty of the stimulus**.

## Universal Grammar

**Chomsky** argued from such facts that human beings are born with a specialized, innate capacity for language, which he called **Universal Grammar**: a set of principles and possibilities common to all human languages, which guides the child in acquiring a particular language. Children do not learn language from scratch; they discover which of the options allowed by Universal Grammar their language uses. Chomsky compared language to a "mental organ" that grows in the child, as the visual system does, given the right input.

## Pinker's language instinct

**Steven Pinker**, a psychologist at MIT and later Harvard, popularized and extended this view in ***The Language Instinct*** (1994). Language, he argued, is not a cultural invention like writing or the wheel, but a biological **instinct**, a specialized adaptation of the human brain, shaped by natural selection, as the spider's ability to spin a web is an instinct of the spider. Pinker drew on evidence from child language, creoles, sign languages such as Nicaraguan Sign Language, language disorders, and the brain. His book, witty and wide-ranging, became one of the most widely read books about language ever written.

## Critics

Many linguists and psychologists disagree. **Usage-based** approaches, developed by researchers such as **Michael Tomasello**, argue that children learn language through general cognitive abilities—pattern recognition, statistical learning, and especially the uniquely human capacity to understand others' intentions—rather than through a specialized innate grammar. The linguist **Vyvyan Evans**, in *The Language Myth* (2014), argued against the idea of a language instinct directly. Critics also point to the great diversity of the world's languages, which some argue is hard to reconcile with a rich Universal Grammar.

## Pirahã

A widely publicized controversy concerned **Pirahã**, a language spoken by a few hundred people in the Brazilian Amazon. The linguist **Daniel Everett**, who lived among the Pirahã as a missionary and later lost his faith, argued in 2005 that Pirahã lacks **recursion**—the embedding of a phrase within a phrase of the same kind, as in "the man who saw the dog that chased the cat"—which Chomsky and his colleagues had proposed as the core of the human language faculty. Other linguists disputed Everett's analysis, and the debate continues.

## Linguistic relativity

A related question is whether the language one speaks shapes how one thinks. The **Sapir–Whorf hypothesis**, named after the American linguists **Edward Sapir** and **Benjamin Lee Whorf**, proposed that it does. In its strong form—that language determines thought, so that speakers of different languages live in different mental worlds—it is generally rejected; Whorf's famous claim that the Hopi language has no words for time was challenged by **Ekkehart Malotki** in *Hopi Time* (1983). In its weak form—that language influences some aspects of perception and memory—it has found experimental support in recent decades, for example in studies of color terms and of languages that describe spatial direction by compass points ("the cup is north of the plate") rather than left and right.

## An open question

This course will not settle the debate between nativist and usage-based approaches. It will introduce the tools that linguists of all schools use to describe languages: sounds, words, sentences, and meanings. With these tools, you will be able to evaluate the arguments for yourself.

> **Pause and consider.** Pinker compared language to a spider's web, an instinct rather than an invention. Writing, by contrast, was invented. What evidence would help decide whether spoken language is more like the web or like writing?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Read each passage or description carefully, then write your answers in your notebook.

## 1. Saussure, Course in General Linguistics (1916)

> The bond between the signifier and the signified is arbitrary.

(In the course's rendering.)

**Questions**

1. What are the signifier and the signified?
2. What exceptions to arbitrariness have linguists found, and do they undermine Saussure's principle?

## 2. Hockett's design features (1960)

Review the list of design features in this lesson: arbitrariness, duality of patterning, productivity, displacement, cultural transmission, and discreteness.

**Questions**

1. Which of these features does the honeybee dance have? The vervet alarm calls?
2. Which feature do you think is most distinctive of human language, and why?

## 3. The ungrammatical question

> Who did you see Mary with? / \\*Who did you see Mary and?

**Questions**

1. What does the contrast reveal about a speaker's unconscious knowledge?
2. How does the poverty-of-the-stimulus argument use such contrasts?

## 4. Labov on African American English (1969)

> *He be working* (habitual) versus *He working* (right now).

**Questions**

1. What grammatical distinction does this contrast express?
2. What does it show about the claim that nonstandard dialects are illogical?

## Drawing the threads together

In a paragraph, explain what makes human language distinctive, using at least three of the items above.`,
    },
  ],
  readings: [
    { kind: "book", title: "An Introduction to Language", author: "Victoria Fromkin, Robert Rodman, and Nina Hyams", publisher: "Cengage", year: "1974; 11th ed., 2018", note: "Read chapter 1, \"What Is Language?\"" },
    { kind: "book", title: "The Language Instinct", author: "Steven Pinker", publisher: "William Morrow", year: "1994", note: "Read chapters 1–2." },
    { kind: "book", title: "Course in General Linguistics", author: "Ferdinand de Saussure, trans. Wade Baskin", publisher: "Philosophical Library; Columbia University Press", year: "1959; 2011 ed.", note: "Read Part I, chapter 1, \"Nature of the Linguistic Sign.\"" },
  ],
  media: [
    { kind: "website", title: "Ethnologue: Languages of the World", author: "SIL International", publisher: "SIL International", url: "https://www.ethnologue.com/", note: "Look up a language spoken in your region." },
    { kind: "book", title: "The Logic of Nonstandard English", author: "William Labov", publisher: "Georgetown Monograph Series on Languages and Linguistics 22", year: "1969", note: "Labov's classic article; widely reprinted." },
  ],
  questions: [
    {
      prompt: "What is the difference between descriptive and prescriptive approaches to language?",
      choices: [
        "There is none",
        "Descriptive approaches describe how people actually speak; prescriptive approaches say how they should",
        "Prescriptive approaches are scientific",
        "Descriptive approaches only study writing",
      ],
      answer: 1,
      explanation: "Linguistics is descriptive.",
    },
    {
      prompt: "What did Chomsky mean by linguistic competence?",
      choices: [
        "Skill at public speaking",
        "A speaker's unconscious knowledge of a language, as opposed to its use in performance",
        "Knowledge of several languages",
        "Knowledge of grammar learned in school",
      ],
      answer: 1,
      explanation: "Performance is affected by memory, distraction, and errors.",
    },
    {
      prompt: "According to Saussure, what does a linguistic sign unite?",
      choices: [
        "A word and a thing",
        "A signifier (sound-image) and a signified (concept)",
        "A letter and a sound",
        "A speaker and a hearer",
      ],
      answer: 1,
      explanation: "Both sides are mental.",
    },
    {
      prompt: "What did Saussure mean by the distinction between langue and parole?",
      choices: [
        "Written and spoken language",
        "The language as a shared system and individual acts of speaking",
        "French and Latin",
        "Sounds and meanings",
      ],
      answer: 1,
      explanation: "The object of linguistics, he argued, is langue.",
    },
    {
      prompt: "Which of the following shows that even onomatopoeia is partly conventional?",
      choices: [
        "All languages have the word \"buzz\"",
        "A dog's bark is \"woof\" in English and \"wan wan\" in Japanese",
        "Onomatopoeia never changes",
        "Animals understand onomatopoeia",
      ],
      answer: 1,
      explanation: "Each language imitates sounds through its own sound system.",
    },
    {
      prompt: "What is duality of patterning?",
      choices: [
        "Having two languages",
        "Meaningless units combining into meaningful units, which combine into larger structures",
        "Speaking and writing",
        "Grammar and vocabulary",
      ],
      answer: 1,
      explanation: "English has about forty sounds but hundreds of thousands of words.",
    },
    {
      prompt: "What did Herbert Terrace conclude from his study of Nim Chimpsky?",
      choices: [
        "That chimpanzees acquire full grammar",
        "That Nim's sequences were mostly prompted imitations without grammar",
        "That chimpanzees can speak",
        "That apes cannot learn any signs",
      ],
      answer: 1,
      explanation: "Most linguists conclude apes learn symbols but not syntax.",
    },
    {
      prompt: "What did William Stokoe show about American Sign Language?",
      choices: [
        "That it is based on English",
        "That its signs are composed of meaningless components such as handshape, location, and movement",
        "That it is universal",
        "That it is a code for spelling",
      ],
      answer: 1,
      explanation: "Sign languages have duality of patterning.",
    },
    {
      prompt: "About how many living languages does Ethnologue list?",
      choices: ["About 700", "About 7,000", "About 70,000", "About 200"],
      answer: 1,
      explanation: "Papua New Guinea alone has more than eight hundred.",
    },
    {
      prompt: "What is the strong form of the Sapir–Whorf hypothesis?",
      choices: [
        "That language has no effect on thought",
        "That language determines thought, so speakers of different languages live in different mental worlds",
        "That all languages are the same",
        "That thought is impossible without writing",
      ],
      answer: 1,
      explanation: "The strong form is generally rejected; the weak form has some experimental support.",
    },
  ],
  reflection:
    "Pinker argues that language is an instinct; Saussure that it is a social system of arbitrary signs. In 500–800 words, explain each view and assess how they might be reconciled, drawing on at least two kinds of evidence from this lesson (child language, sign languages, animal communication, or the diversity of languages).",
};
