import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "The Comparative Method and the Families of Languages",
  summary:
    "How historical linguists show that languages are related; cognates and regular sound correspondences; the comparative method step by step; testing reconstruction against Latin; Saussure's laryngeals and their confirmation in Hittite; internal reconstruction; family trees, shared innovations, and the wave model; the language families of the world; glottochronology and its critics; computational phylogenetics; the controversies over long-range comparison; and the limits of the method.",
  pages: [
    {
      title: "Are These Languages Related?",
      body: `## Resemblance is not enough

Two languages are **related** (or **genetically related**, a term that has nothing to do with biology) if they descend from a common ancestor. But how can we tell? Words in two languages may look alike for several reasons, and only one of them is common descent.

## Chance

Some resemblances are pure **chance**. With thousands of words in every language, and a limited number of sounds, some words in unrelated languages will resemble each other by accident. Persian *bad* means "bad," but the two words are unrelated; the Persian word descends from a different root. In Mbabaram, an Aboriginal language of Queensland, the word for "dog" is *dog*, a coincidence documented by the linguist **R. M. W. Dixon**. Greek *theos* and Latin *deus*, both meaning "god," look like obvious relatives, but historical linguists have shown that they come from different Indo-European roots.

## Borrowing

As we saw in Lesson IV, resemblances may come from **borrowing**. English *street* resembles Latin *strāta*, but because English borrowed it, not because they inherited it from a common ancestor. Japanese has many words resembling Chinese words, because it borrowed them, though the two languages are not related.

## Universals and sound symbolism

Some resemblances reflect universal tendencies. Words for "mother" and "father" in many unrelated languages resemble *mama* and *papa* or *dada*. **Roman Jakobson**, in an essay of 1960, "Why 'Mama' and 'Papa'?", explained this by the sounds that babies produce earliest, with lips and nasals; parents in many cultures interpret these sounds as names for themselves. **Onomatopoeia**, words imitating sounds (*cuckoo*, *meow*), and **sound symbolism** (words for small things often contain high front vowels like [i]) also produce cross-linguistic resemblances.

## False friends

Sometimes words that look alike in related languages are not related to each other. English *have* and Latin *habēre* "have" look like cognates, but by Grimm's Law, which we studied in Lesson II, Latin *h* should correspond not to English *h* but to English *g*. The true English cognate of Latin *habēre* is probably *give*, while English *have* corresponds to Latin *capere* "take." Here, the regular sound correspondences override the apparent resemblance.

## Systematic correspondences

The key to establishing relationship, therefore, is not resemblance but **systematic sound correspondence**. If languages are related, their sounds should correspond regularly across many words, in basic vocabulary unlikely to have been borrowed. Such correspondences are very unlikely to arise by chance, and they cannot easily be produced by borrowing, which usually affects only some words. As we saw in Lesson II, sound change is regular; therefore, the sounds of related languages correspond regularly.

> **Pause and consider.** Why is a regular correspondence such as Latin *p* : English *f* better evidence than a single striking resemblance?`,
    },
    {
      title: "Cognates and Correspondences",
      body: `## Cognates

**Cognates** are words in related languages that descend from the same word in the ancestor. Cognates need not look alike; they need only show regular correspondences. English *wheel* and Greek *kyklos* "circle" (whence *cycle*) are cognates, although they look very different, because the sound changes that separate them are regular.

## A Romance example

Consider these words in four Romance languages:

| Meaning | Italian | Spanish | Portuguese | French |
|---|---|---|---|---|
| eight | *otto* | *ocho* | *oito* | *huit* |
| night | *notte* | *noche* | *noite* | *nuit* |
| milk | *latte* | *leche* | *leite* | *lait* |
| done | *fatto* | *hecho* | *feito* | *fait* |

The correspondences are regular: where Italian has *tt*, Spanish has *ch*, Portuguese has *it*, and French has *it* (or a vowel plus *t*). These correspondences hold across many words, not just a few. We know the ancestor, Latin, had *ct* in these words: *octō*, *noctem*, *lactem*, *factum*. Each language changed the cluster *ct* in a regular way.

## A Germanic example

Now compare English and German:

| English | German |
|---|---|
| *ten* | *zehn* |
| *two* | *zwei* |
| *tongue* | *Zunge* |
| *water* | *Wasser* |
| *eat* | *essen* |
| *that* | *das* |

Where English has *t*, German has *z* (pronounced [ts]) at the beginnings of words, and *ss* or *s* after vowels. These correspondences are the result of the **High German consonant shift**, a sound change that affected the ancestor of standard German around the sixth to eighth centuries CE, but not English, Dutch, or Low German. Low German, spoken in northern Germany, still has *t* in many of these words: *Water*, *dat*, *eten*.

## The Rhenish fan

The High German consonant shift spread from south to north, and did not reach equally far in every word. In the Rhineland, the boundaries of the shift for different words run along different lines, fanning out across the map: the **Benrath line** separates *machen* from *maken* "make," and the **Uerdingen line** separates *ich* from *ik* "I." This pattern, called the **Rhenish fan**, shows that even regular sound changes may spread across space word by word, a point we return to below.

## Regular correspondences are not identical sounds

Correspondences need not involve similar sounds. Armenian *erku* "two" corresponds regularly to Latin *duo* and Greek *dyo*, though *erk-* looks nothing like *dw-*. The great Indo-Europeanist **Antoine Meillet** used this example to show that it is the regularity of correspondences, not the similarity of sounds, that proves relationship.

## The importance of basic vocabulary

Historical linguists prefer to compare basic vocabulary: numerals, pronouns, body parts, kinship terms, and common verbs. Such words are less likely to be borrowed than cultural vocabulary, and so their correspondences are better evidence of common descent. Grammatical morphemes, such as verb endings and pronouns, are even better evidence, since they are very rarely borrowed.

> **Pause and consider.** English *ten*, Latin *decem*, and Greek *deka* are cognates. Using what you learned about Grimm's Law, explain the correspondence of English *t* to Latin and Greek *d*.`,
    },
    {
      title: "The Comparative Method Step by Step",
      body: `## Reconstructing the ancestor

The **comparative method** is a procedure for reconstructing the ancestor of related languages by comparing their descendants. It was developed in the nineteenth century, especially by the Neogrammarians, and remains the central method of historical linguistics. Its steps are as follows.

## Step 1: Assemble cognate sets

Collect words with similar meanings in the related languages, focusing on basic vocabulary, and identify probable cognates. For the Romance languages:

| Meaning | Italian | Spanish | French |
|---|---|---|---|
| sing | *cantare* | *cantar* | *chanter* [ʃɑ̃te] |
| goat | *capra* | *cabra* | *chèvre* [ʃɛvʁ] |
| field | *campo* | *campo* | *champ* [ʃɑ̃] |
| dear | *caro* | *caro* | *cher* [ʃɛʁ] |

## Step 2: Establish sound correspondences

Identify the regular correspondences. Here, Italian [k] : Spanish [k] : French [ʃ] before the vowel *a* (or what was once *a*) holds across all four sets.

## Step 3: Reconstruct the protosound

Decide which sound in the ancestor best explains each correspondence. Several principles guide the choice:

- **Directionality**: some changes are common, others rare. [k] often becomes [ʃ] or [tʃ] before front vowels (we saw palatalization in Lesson II), but [ʃ] rarely becomes [k]. So we reconstruct \\**k*.
- **The majority principle**: if most languages have a sound, it is often the original. Two of three languages here have [k]. But this principle is weaker than directionality, since several languages may have undergone the same change independently.
- **Economy**: prefer the reconstruction requiring the fewest independent changes. Reconstructing \\**k* requires one change, in French; reconstructing \\**ʃ* would require the same unusual change in both Italian and Spanish.

## Step 4: Reconstruct the words

Combining the reconstructed sounds, we can reconstruct whole words, such as \\**kantare* "sing." The asterisk marks it as reconstructed, not attested.

## Step 5: Check the system

The reconstructed sounds should form a plausible **sound system**, like those of known languages. A reconstruction that posited, for example, many voiced stops but no voiceless ones would be suspect, since no known language has such a system. Reconstructions are also tested against each other: a reconstructed sound should account for all the correspondences in which it appears.

## Step 6: Reconstruct grammar

The method can also reconstruct grammatical endings and patterns, such as verb conjugations and noun declensions, by comparing them across languages. For Indo-European, this has produced detailed reconstructions of the verbal and nominal systems of the ancestral language.

## What reconstruction produces

The result is a **protolanguage**, such as Proto-Romance or Proto-Indo-European. A protolanguage is a hypothesis about the ancestor, not a complete record of it. It contains only what can be inferred from the descendants. Words, sounds, and grammatical features that left no trace in any descendant are lost forever.

> **Pause and consider.** Why does the principle of directionality outweigh the majority principle?`,
    },
    {
      title: "Testing the Method Against Latin",
      body: `## A rare opportunity

Most protolanguages are known only through reconstruction. But Romance offers a test case: we have both the descendants and extensive records of their ancestor, Latin. By reconstructing Proto-Romance from the modern languages alone, and comparing the result with Latin, linguists can test how well the comparative method works.

## Successes

The test generally confirms the method. Reconstruction from the modern Romance languages recovers many Latin sounds and words with considerable accuracy. The reconstructed \\**kantare*, for example, matches Latin *cantāre*. The method recovers the Latin vowel system, much of its consonant system, and many of its verb forms. The American linguist **Robert A. Hall Jr.** undertook a systematic reconstruction of Proto-Romance in the twentieth century, and his results matched the Latin evidence well in many respects.

## Spoken Latin

But the reconstruction also differs from **Classical Latin** in revealing ways. The Romance languages descend not from the polished literary Latin of Cicero and Virgil but from the spoken Latin of ordinary people, often called **Vulgar Latin** (from *vulgus* "the common people"). Reconstruction recovers this spoken language, and sometimes recovers words and forms that Classical Latin writers avoided:

- The Classical Latin word for "horse" was *equus*, but the Romance languages point to *caballus*, a colloquial word, perhaps "nag": Italian *cavallo*, Spanish *caballo*, French *cheval*.
- The Classical Latin for "head" was *caput*, but French *tête* and Italian *testa* come from *testa*, "pot, shell," a slang term, like English *noggin* or *nut*.
- The Classical Latin for "eat" was *edere*, but French *manger* and Italian *mangiare* come from *manducāre*, "chew," and Spanish *comer* from *comedere*, "eat up."
- The Classical Latin for "beautiful" was *pulcher*, but the Romance languages point to *bellus* (Italian *bello*, French *beau*) and *formōsus* (Spanish *hermoso*, Portuguese *formoso*).

## The Appendix Probi

Some evidence for spoken Latin survives directly. The **Appendix Probi**, a list probably compiled around the fourth or fifth century, records over two hundred "errors" made by Latin speakers, in the form "*X non Y*": "say X, not Y." For example, *speculum non speclum* ("mirror"), *auris non oricla* ("ear"), *vetulus non veclus* ("old man"). The "errors" are precisely the forms from which the Romance words descend: Italian *specchio*, French *oreille*, Italian *vecchio*. The schoolmaster who compiled the list was fighting a losing battle against language change, and preserved evidence of it for posterity.

## Limits

The test also shows the limits of the method. Reconstruction cannot recover Latin features that left no trace in any descendant, such as most of the Latin case system, which the Romance languages lost, apart from a few remnants. It cannot recover words that all the descendants replaced. And it tends to make the protolanguage look more uniform than it was, since dialectal variation within the ancestor is often invisible.

> **Pause and consider.** Why would reconstruction recover *caballus* rather than *equus*? What does this say about the kind of language the comparative method reconstructs?`,
    },
    {
      title: "A Prediction Confirmed: The Laryngeals",
      body: `## Saussure's hypothesis

In 1878, at the age of twenty-one, **Ferdinand de Saussure**, later famous as a founder of modern linguistics, published a *Mémoire* on the vowel system of Proto-Indo-European (its title page bears the date 1879). Studying irregularities in the vowel alternations of Indo-European roots, he proposed that Proto-Indo-European had had certain sounds, which he called "sonant coefficients," that had disappeared in all the known daughter languages but had left traces in the vowels around them. Saussure could not say how these sounds were pronounced; he inferred them purely from the structure of the system. Many scholars at the time were skeptical.

## Hittite

Half a century later, the hypothesis was dramatically confirmed. In the early twentieth century, archaeologists excavating the ancient Hittite capital at **Boğazköy** (ancient Hattusa) in central Turkey found thousands of clay tablets, written in cuneiform, in an unknown language. In 1915, the Czech scholar **Bedřich Hrozný** announced that the language, **Hittite**, was Indo-European, and he published his decipherment in 1917. Hittite, written in the second millennium BCE, is among the oldest attested Indo-European languages.

## The ḫ

In 1927, the Polish linguist **Jerzy Kuryłowicz** showed that Hittite had a consonant, written *ḫ*, in some of the very places where Saussure had predicted his lost sounds. For example:

- Hittite *ḫant-* "front" corresponds to Latin *ante* "before" and Greek *antí* "against," with *ḫ* where the other languages have nothing;
- Hittite *ḫastāi* "bone" corresponds to Greek *ostéon* (whence *osteopath*);
- Hittite *paḫḫur* "fire" corresponds to Greek *pŷr* and English *fire*, with *ḫḫ* where the others have nothing, but a long vowel or other trace.

The lost sounds are now called **laryngeals** (a conventional name; their exact pronunciation is unknown), and are usually reconstructed as three: \\**h₁*, \\**h₂*, and \\**h₃*. Most Indo-Europeanists now accept the laryngeal theory, though details remain debated.

## Why it matters

The confirmation of Saussure's hypothesis is often compared to the prediction of a new planet from irregularities in the orbits of known planets, as Neptune was predicted before it was observed. It showed that the comparative method and internal analysis could make genuine predictions about the past, which could be confirmed by new evidence. It is one of the strongest demonstrations that historical linguistics is a science, not merely a collection of speculations.

## A lesson in method

The laryngeal story also illustrates the value of regularity. Saussure proposed the lost sounds because he refused to accept irregularity in the vowel system as unexplained. Like Verner, whose law we studied in Lesson II, he assumed that apparent exceptions must have an explanation, and found it.

> **Pause and consider.** Why is a confirmed prediction stronger evidence for a theory than an explanation of known facts?`,
    },
    {
      title: "Internal Reconstruction",
      body: `## Looking inside one language

The comparative method compares related languages. **Internal reconstruction** works within a single language, using irregularities and alternations in its present form to infer its earlier history. It is useful when a language has no known relatives, or to reach further back than comparison allows.

## The principle

The basic idea is that alternations within a language often result from earlier sound changes that affected some forms of a word but not others. By "undoing" these changes, one can reconstruct an earlier, more regular stage.

## German final devoicing

Consider German. *Tag* "day" is pronounced [taːk], with a final [k], but its plural *Tage* is pronounced [taːgə], with [g]. *Rad* "wheel" is pronounced [ʁaːt], but its plural *Räder* has [d]. Yet *Rat* "advice," pronounced [ʁaːt] just like *Rad*, has the plural *Räte*, with [t]. Internal reconstruction suggests that *Tag* and *Rad* originally ended in voiced consonants, [g] and [d], which became voiceless at the end of a word, a change called **final devoicing**. *Rat* ended in [t] all along. Older German spelling and the evidence of related languages (English *day*, Dutch *dag*) confirm this.

## Latin rhotacism

Latin *flōs* "flower" has the genitive *flōris*, and *honōs* "honor" has *honōris*. Internal reconstruction suggests that the stems originally ended in *s*: \\**flōsis*, \\**honōsis*. An *s* between vowels then became *r*, a change called **rhotacism**, which we met in Lesson III. The change is confirmed by older Latin inscriptions and by Roman grammarians, who reported that earlier Latin had forms such as *Valesius* for later *Valerius*. As we saw in Lesson III, analogy then leveled *honōs* to *honor*.

## English foot and feet

English *foot*/*feet*, *mouse*/*mice*, and *man*/*men* would suggest, by internal reconstruction alone, that these plurals once had something that changed the vowel: the *i* of a suffix, now lost. This is exactly what the comparative method and older texts confirm: the change was **i-umlaut**, which we studied in Lesson II.

## Limits

Internal reconstruction has limits. It works only where sound changes have left alternations; where analogy has leveled them, the evidence may be lost. It cannot distinguish easily between alternations produced by sound change and those produced by other processes, such as borrowing. And it can reach only so far back. But it is a valuable complement to the comparative method, and Saussure's laryngeal hypothesis was in part a triumph of internal reconstruction applied to the reconstructed system of Proto-Indo-European itself.

## Combining methods

In practice, historical linguists combine the comparative method, internal reconstruction, written records, and evidence from borrowings to build the most complete picture possible of a language's history. Each method checks the others.

> **Pause and consider.** German *Bund* "union" and *bunt* "colorful" are both pronounced [bʊnt]. How could you discover whether each originally ended in [d] or [t]?`,
    },
    {
      title: "Family Trees and Shared Innovations",
      body: `## The tree

The relationships among languages are traditionally represented by a **family tree**, in which a protolanguage branches into daughter languages, which may branch further. The German linguist **August Schleicher** (1821–1868) introduced the family tree (*Stammbaum*) for Indo-European in the 1850s, drawing on the model of biological classification. Charles Darwin, in *The Descent of Man* (1871), cited the formation of languages as parallel to the formation of species.

## Subgrouping

Within a family, some languages are more closely related than others. Determining these relationships is called **subgrouping**. For example, within Indo-European, English, German, Dutch, and the Scandinavian languages form the **Germanic** subgroup; Italian, French, and Spanish form **Romance** (or **Italic**, with its ancient relatives); and Russian, Polish, and Czech form **Slavic**. Within Germanic, English and Frisian are thought by many scholars to form an **Anglo-Frisian** subgroup.

## Shared innovations

How do we know which languages form a subgroup? The key principle, stated clearly by **Karl Brugmann** in 1884, is that subgroups are defined by **shared innovations**, not by **shared retentions**. If two languages share a feature that their common ancestor also had, this tells us nothing about whether they are especially closely related; any branch might keep an old feature. But if two languages share a change that the ancestor did not have, this suggests that they underwent the change together, as a single language, before they split.

## Germanic innovations

The Germanic languages share a series of innovations not found in other Indo-European languages:

- the consonant changes of **Grimm's Law**;
- fixed **initial stress**;
- the **weak past tense** with a dental suffix (*love*/*loved*);
- a **two-tense system** (past and non-past), with the future and other tenses expressed by auxiliaries.

These shared innovations show that the Germanic languages descend from a single ancestor, **Proto-Germanic**, which itself was a branch of Proto-Indo-European.

## Anglo-Frisian

English and Frisian share innovations that other Germanic languages lack. For example, both palatalized [k] before front vowels: English *cheese* and *church*, West Frisian *tsiis* and *tsjerke*, against Dutch *kaas* and *kerk*. A well-known Frisian rhyme begins "*Bûter, brea, en griene tsiis*" ("butter, bread, and green cheese"), words that sound strikingly like their English equivalents, and was traditionally used as a test of whether a speaker was truly Frisian. Such shared innovations support the Anglo-Frisian subgroup, though some scholars think the shared features might also reflect later contact.

## The difficulty of subgrouping

Subgrouping is often difficult. Innovations may occur independently in different branches: many languages have independently palatalized [k]. Languages in contact may share innovations by diffusion. And when a family split rapidly into many branches, there may be few shared innovations to distinguish them. The subgrouping of the main branches of Indo-European, for example, is still debated.

> **Pause and consider.** Why does a shared retention tell us nothing about subgrouping?`,
    },
    {
      title: "Waves, Continua, and Networks",
      body: `## A problem with trees

Family trees imply that languages split cleanly and then develop independently. But often they do not. Dialects of a language may continue in contact as they diverge, exchanging innovations, and an innovation may spread across part of a dialect area without respect to later branches.

## The wave model

In 1872, **Johannes Schmidt**, a student of Schleicher, proposed the **wave model** (*Wellentheorie*). Innovations, he argued, spread outward from a center across a dialect area, like waves from a stone dropped in a pond. Different innovations spread from different centers and reach different distances, so that their boundaries overlap. The result is not a neat tree but a pattern of overlapping areas.

## Isoglosses

The boundaries of linguistic features on a map are called **isoglosses**, by analogy with isotherms and isobars. The Rhenish fan, which we met earlier in this lesson, shows how the isoglosses of the High German consonant shift for different words fan out across the Rhineland, rather than forming a single boundary. **Dialect geography**, which developed in the late nineteenth century with projects such as **Georg Wenker**'s survey of German dialects, begun in 1876, and **Jules Gilliéron**'s *Atlas linguistique de la France* (1902–1910), showed that dialect boundaries are often complex and that "each word has its own history," a slogan associated with Gilliéron.

## Dialect continua

As we saw in Lesson I, a **dialect continuum** may stretch across a wide area, with neighboring dialects mutually intelligible but distant ones not. Before the rise of national standards, the West Germanic dialects formed a continuum from Flanders to the Alps, and the Romance dialects from Portugal to Italy. Divisions between "languages" in such continua are often drawn by politics rather than by linguistic boundaries. A famous saying holds that "a language is a dialect with an army and navy"; the linguist **Max Weinreich** published it in Yiddish in 1945, crediting a member of the audience at one of his lectures.

## Linkages

The Australian linguist **Malcolm Ross** introduced the term **linkage** for a group of languages that developed from a dialect network rather than splitting cleanly from a single ancestor. In a linkage, innovations overlap, and no single tree represents the relationships accurately. Ross argued that many groups in the Austronesian family, which spread across the Pacific, are linkages.

## Networks

In recent decades, computational methods have allowed linguists to represent relationships as **networks** rather than trees. Network diagrams show conflicting signals in the data, such as features shared across branches by contact. Such methods confirm that, while many language families have a broadly tree-like history, contact and diffusion also play important roles.

## Trees and waves together

Most historical linguists today see the tree model and the wave model as complementary. The tree captures the main lines of descent; the wave captures the spread of innovations across dialects and neighboring languages. Neither alone gives the whole picture.

> **Pause and consider.** The saying suggests that the distinction between a language and a dialect is political. Do you agree?`,
    },
    {
      title: "The Language Families of the World",
      body: `## About seven thousand languages

According to **Ethnologue**, one of the main reference catalogues, about seven thousand languages are spoken in the world today. Linguists have classified them into families, though the classification of many remains uncertain. The catalogue **Glottolog**, maintained by linguists at the Max Planck Institute for Evolutionary Anthropology, recognizes over two hundred families, along with many **isolates**—languages with no demonstrated relatives.

## The largest families

By number of languages, the largest families include:

- **Atlantic-Congo** (the core of the proposed **Niger-Congo**), in sub-Saharan Africa, with well over a thousand languages, including Swahili, Yoruba, Igbo, Zulu, and the many Bantu languages;
- **Austronesian**, with about 1,250 languages, spread from Madagascar to Easter Island, including Malay, Indonesian, Tagalog, Malagasy, Māori, and Hawaiian;
- **Trans-New Guinea**, with several hundred languages in New Guinea, though its unity is debated;
- **Sino-Tibetan**, with several hundred languages, including the Chinese languages, Tibetan, and Burmese;
- **Indo-European**, with over four hundred languages.

By number of speakers, **Indo-European** is the largest, spoken natively by nearly half the world's population. It includes English, Spanish, Hindi and Urdu, Bengali, Portuguese, Russian, Persian, German, and many others, and its history is the subject of HIL 110.

## Other important families

- **Afroasiatic**: Arabic, Hebrew, Amharic, Somali, Hausa, the Berber languages, and ancient Egyptian;
- **Dravidian**: Tamil, Telugu, Kannada, Malayalam, in southern India;
- **Turkic**: Turkish, Azerbaijani, Uzbek, Kazakh;
- **Uralic**: Finnish, Estonian, Hungarian, and Sámi;
- **Austroasiatic**: Vietnamese, Khmer, and the Munda languages of India;
- **Kra-Dai** (Tai-Kadai): Thai and Lao;
- **Uto-Aztecan**: Nahuatl, Hopi, Comanche;
- **Algic**: the Algonquian languages, such as Cree and Ojibwe;
- **Pama-Nyungan**: most of the Aboriginal languages of Australia.

## Isolates

**Isolates** are languages with no demonstrated relatives. The most famous in Europe is **Basque**, spoken in northern Spain and southwestern France, which is not Indo-European and appears to be a survivor of the languages spoken in Western Europe before the arrival of Indo-European. Other isolates include **Burushaski** in Pakistan, **Ainu** in Japan, and **Zuni** in New Mexico. **Korean** and **Japanese** are often treated as small families (Koreanic and Japonic) rather than isolates, since each includes several varieties, but neither has been convincingly connected to any other family.

## Unclassified and extinct

Many languages are unclassified because they are poorly documented. Many ancient languages, such as **Sumerian** and **Etruscan**, are isolates or have no living relatives. And many families have suffered severe losses: in North America and Australia, most Indigenous languages are endangered or extinct.

> **Pause and consider.** Why might the number of language families be greater in New Guinea and the Americas than in Europe?`,
    },
    {
      title: "Glottochronology and Its Critics",
      body: `## Dating the split

The comparative method can show that languages are related and reconstruct their ancestor, but it does not tell us **when** the ancestor was spoken. Can linguistic evidence alone provide dates?

## Swadesh's proposal

In the early 1950s, the American linguist **Morris Swadesh** (1909–1967) proposed a method he called **lexicostatistics**, and a dating technique based on it, **glottochronology**. He compiled a list of basic meanings, first two hundred and later one hundred, that he believed were found in all languages and resistant to borrowing: *I*, *you*, *we*, *this*, *that*, *who*, *what*, *not*, *all*, *many*, *one*, *two*, *big*, *long*, *small*, *woman*, *man*, *person*, *fish*, *bird*, *dog*, *louse*, *tree*, *seed*, *leaf*, *root*, *skin*, *blood*, *bone*, *egg*, *head*, *ear*, *eye*, *nose*, *mouth*, *tooth*, *tongue*, and so on. This **Swadesh list** is still widely used.

## The constant rate

Swadesh, with **Robert Lees**, who calculated rates from the histories of languages with long written records, proposed that the words on such a list are replaced at a roughly **constant rate**. For the 100-word list, Swadesh estimated that about 86 percent of the words would be retained over a thousand years. If so, the percentage of shared cognates between two related languages could be used to calculate how long ago they split, much as radioactive decay is used to date organic remains.

## The critics

Glottochronology was soon criticized. In 1962, **Knut Bergsland** and **Hans Vogt** tested it on languages with known histories, and found that rates varied widely: Icelandic, for example, had replaced far fewer words since the Viking age than the method predicted, while some other languages had replaced far more. Other criticisms include:

- the rate of replacement varies among words: some meanings, such as "I," "two," and "who," are very stable, while others change quickly;
- it varies among languages and periods, depending on social factors such as contact and taboo;
- identifying cognates requires the comparative method, and errors in cognate judgments affect the results;
- borrowing within the list distorts the counts.

Most historical linguists came to regard glottochronology as unreliable.

## The legacy

Yet Swadesh's lists remain useful tools for comparison, and the idea of using vocabulary to estimate dates has been revived, in more sophisticated forms, by computational methods. Studies by **Mark Pagel** and colleagues, published in *Nature* in 2007, found that the frequency of words in everyday use predicts how slowly they change: frequent words, such as numerals and pronouns, are replaced much more slowly than rare words. This is consistent with what we saw in Lesson III about frequency and analogy.

## The question of dates

Dating linguistic splits remains controversial. Estimates for the age of Proto-Indo-European, for example, range from about 4000 BCE to 7000 BCE or earlier, depending on the method and the assumptions used. This question, central to the debate over the Indo-European homeland, is the subject of HIL 110.

> **Pause and consider.** Why might Icelandic have changed its basic vocabulary less than other languages?`,
    },
    {
      title: "Computational Phylogenetics",
      body: `## Borrowing from biology

Since the early 2000s, linguists and biologists have applied **phylogenetic** methods, developed in evolutionary biology to reconstruct the family trees of species from genetic data, to language. These methods use computer algorithms to find the trees that best fit the data, usually lists of cognates in basic vocabulary, and, using models that allow rates of change to vary, estimate the dates of splits.

## Indo-European

In 2003, **Russell Gray** and **Quentin Atkinson** published a study in *Nature* estimating that Proto-Indo-European began to split about 7,800 to 9,800 years ago. This date supported the **Anatolian hypothesis** of the archaeologist **Colin Renfrew**, who had argued that Indo-European languages spread with farming from Anatolia, beginning around 7000 BCE. A further study by **Remco Bouckaert** and colleagues, published in *Science* in 2012, reached a similar conclusion.

These studies were strongly criticized by many historical linguists, who argued that the cognate data contained errors, and that the dates conflicted with linguistic evidence that Proto-Indo-European had words for wheeled vehicles, which were invented only around 4000 to 3500 BCE.

In 2015, **Will Chang**, **Chundra Cathcart**, **David Hall**, and **Andrew Garrett** published a study in *Language* using similar methods but constraining the analysis with known ancestor–descendant relationships, such as Latin and the Romance languages. Their analysis produced a much later date, about 6,500 years ago, consistent with the **steppe hypothesis**, which places the homeland in the steppes north of the Black and Caspian Seas. Ancient DNA studies published in 2015 and since have provided further evidence of large migrations from the steppes into Europe and South Asia in the third millennium BCE. We examine this debate in HIL 110.

## Austronesian

Phylogenetic methods have also been applied to other families. In 2009, **Russell Gray**, **Alexei Drummond**, and **Simon Greenhill** published a study in *Science* of four hundred Austronesian languages, finding that the family originated in **Taiwan** about 5,200 years ago, and spread across the Pacific in a series of **pulses and pauses**: rapid expansions followed by long pauses, perhaps as people developed new technologies of seafaring, such as the outrigger canoe, before crossing large stretches of open ocean. This accords with the archaeological evidence.

## Bantu

Similar methods have been used to study the expansion of the **Bantu** languages across central, eastern, and southern Africa over the last several thousand years, a spread that probably accompanied the expansion of farming populations.

## Promise and caution

Computational phylogenetics allows linguists to analyze large amounts of data systematically and test hypotheses with explicit statistical models. But the results depend on the quality of the data and on the assumptions built into the models. Critics warn that a sophisticated method cannot compensate for errors in cognate judgments, which still depend on the comparative method. Most practitioners agree that the computational and traditional methods should complement each other.

> **Pause and consider.** Why might constraining a phylogenetic analysis with known ancestor–descendant pairs, such as Latin and Spanish, change its results?`,
    },
    {
      title: "Long-Range Comparison",
      body: `## Beyond the established families

Can the established language families be grouped into larger families, or even traced to a single ancestor of all human languages? Some linguists have tried, using methods that most historical linguists consider inadequate. This field, called **long-range comparison**, is among the most controversial in linguistics.

## Nostratic

In 1903, the Danish linguist **Holger Pedersen** proposed the name **Nostratic** (from Latin *nostrās* "of our country") for a hypothetical family including Indo-European, Uralic, Turkic, and others. In the 1960s, two Soviet linguists, **Vladislav Illich-Svitych** and **Aharon Dolgopolsky**, attempted to reconstruct Proto-Nostratic using the comparative method, linking Indo-European, Uralic, Altaic, Kartvelian, Dravidian, and Afroasiatic. Some linguists accept Nostratic; most remain unconvinced, arguing that the proposed correspondences are too few, too loose, and too easily explained by chance.

## Greenberg's mass comparison

The American linguist **Joseph Greenberg** (1915–2001), famous for his work on typology and his classification of African languages, which is still largely accepted, proposed an alternative method: **multilateral** or **mass comparison**. Instead of establishing regular sound correspondences between pairs of languages, Greenberg compared a few words across many languages at once, looking for resemblances. In *Language in the Americas* (1987), he classified the Indigenous languages of the Americas into three families, **Eskimo-Aleut**, **Na-Dene**, and a vast **Amerind** family including nearly all the rest.

## The critics

Greenberg's American classification was rejected by most specialists in the languages of the Americas, including **Lyle Campbell**, who argued that mass comparison cannot distinguish resemblances due to common descent from those due to chance, borrowing, or sound symbolism, and that the data contained many errors. **Donald Ringe**, using probability theory, showed in 1992 that the number of chance resemblances among languages is much larger than intuition suggests. Most specialists today recognize dozens of independent families in the Americas.

## Proto-World

Some long-range comparativists, such as **Merritt Ruhlen**, in *The Origin of Language* (1994), have proposed **global etymologies**, roots allegedly found in languages all over the world and traceable to the first human language. Most historical linguists reject such proposals as methodologically unsound.

## A successful case?

Not every long-range proposal has been rejected. In 2008, **Edward Vajda** presented evidence linking the **Yeniseian** languages of Siberia, of which only Ket survives, with the **Na-Dene** languages of North America, such as Navajo and Tlingit, through regular correspondences in verbal morphology and vocabulary. This **Dene–Yeniseian** proposal has been received with cautious interest by many specialists, though not universally accepted. If confirmed, it would be the first demonstrated link between language families of the Old and New Worlds.

## Altaic and Transeurasian

The proposed **Altaic** family, linking Turkic, Mongolic, and Tungusic, and sometimes Korean and Japanese, is controversial. Critics argue that the shared features result from centuries of contact rather than common descent. In 2021, **Martine Robbeets** and colleagues published a study in *Nature* supporting a **Transeurasian** family with origins among millet farmers in northeastern China, but the proposal remains disputed.

> **Pause and consider.** Why does Ringe's probability argument make long-range comparison difficult?`,
    },
    {
      title: "Bloomfield's Test: The Algonquian Languages",
      body: `## Does the method need writing?

The comparative method was developed on the Indo-European languages, many of which have written records going back thousands of years. Some critics in the early twentieth century wondered whether the method would work for languages without writing. Could sound change really be regular in languages for which no ancient records exist? Some anthropologists suggested that the languages of "primitive" peoples might change in less orderly ways.

## Bloomfield and Algonquian

The American linguist **Leonard Bloomfield** (1887–1949) set out to answer this question by applying the comparative method to the **Algonquian** languages of North America, a family that includes Cree, Ojibwe, Menominee, Fox (Meskwaki), Shawnee, Blackfoot, and many others, spoken across a vast area from the Atlantic coast to the Rocky Mountains. Bloomfield worked with four Central Algonquian languages, **Fox**, **Cree**, **Menominee**, and **Ojibwe**, reconstructing their common ancestor, which he called **Proto-Central Algonquian**.

## A strange correspondence

Bloomfield found regular correspondences among the consonant clusters of the four languages. Most could be explained by reconstructing familiar clusters in the protolanguage. But one set of correspondences was unique:

| Fox | Ojibwe | Plains Cree | Menominee |
|---|---|---|---|
| *hk* | *ʃk* | *sk* | *hk* |

This set differed from all the others, and appeared in only a few words. Bloomfield did not dismiss it as an irregularity. Following the Neogrammarian principle that sound change is regular, he reconstructed a distinct cluster, which he wrote \**çk*, to account for it, though he had no direct evidence of how it was pronounced.

## The prediction confirmed

Bloomfield later studied **Swampy Cree**, a dialect of Cree spoken in Manitoba, which he had not used in his original reconstruction. He found that Swampy Cree had a distinct cluster, *htk*, in exactly the words where he had reconstructed \**çk*, and nowhere else. The correspondence he had posited, from irregularities in four languages, was confirmed by a fifth.

Bloomfield published this result in an article of 1928, "A Note on Sound-Change," and in his book *Language* (1933). He argued that it showed the regularity of sound change in unwritten languages as clearly as in written ones.

## Why it matters

Bloomfield's demonstration had two important consequences.

First, it confirmed that the comparative method is a genuinely general method, applicable to all languages, not just those with ancient writing systems. This opened the way for the historical study of the thousands of unwritten languages of the Americas, Africa, Asia, and the Pacific.

Second, it challenged the prejudice that the languages of Indigenous peoples were somehow less orderly than European languages. Bloomfield, like his contemporary **Edward Sapir**, who did comparable work on the Athabaskan languages, showed that Indigenous languages obey the same laws of change as Latin and Greek. This was part of the broader recognition, central to modern linguistics, that all human languages are equally complex and rule-governed.

## Like the laryngeals

Bloomfield's \**çk* is a smaller parallel to Saussure's laryngeals: in both cases, a linguist reconstructed a sound from irregularities in the known languages, and new evidence later confirmed it. Such confirmed predictions are among the strongest evidence that the comparative method reconstructs real features of the past.

> **Pause and consider.** Why was it important to show that the comparative method works for unwritten languages?`,
    },
    {
      title: "The Limits of the Method",
      body: `## How far back?

How far back can the comparative method reach? Most historical linguists believe that, beyond about eight to ten thousand years, so many words have been replaced, and so many sounds changed, that the remaining evidence of relationship becomes indistinguishable from chance. Estimates vary, and some argue that grammatical evidence may reach further than vocabulary. But since anatomically modern humans have existed for at least two hundred thousand years, and probably spoke languages for much of that time, the comparative method sees only a small part of linguistic history.

## What we can know

Within its range, however, the comparative method has achieved remarkable results. It has reconstructed Proto-Indo-European in great detail, along with Proto-Austronesian, Proto-Uralic, Proto-Bantu, Proto-Algonquian, and many other protolanguages. As the previous page showed, it works as well for unwritten languages as for the ancient written languages of Europe and Asia.

## The social history behind the trees

Language families are not just abstract trees: they reflect the histories of human communities. The spread of Austronesian across the Pacific, of Bantu across Africa, and of Indo-European across Eurasia were among the great events of human prehistory, involving migration, the spread of farming and herding, conquest, and the shift of populations to new languages. Historical linguistics, working with archaeology and genetics, helps to reconstruct these events.

## Language and people

But languages and peoples do not always go together. People may shift to a new language, as the Irish shifted to English, without changing their genetic ancestry. A language may spread by conquest or prestige, without large-scale migration. Historians must therefore be careful not to identify a language family with a "race" or "people," an error that, in the nineteenth and twentieth centuries, contributed to dangerous ideologies, as we will see in HIL 110.

## What this course has studied

In this course, we have studied how and why languages change: their sounds, by regular sound laws and their exceptions; their grammar and meanings, by analogy, grammaticalization, and semantic change; their vocabulary and structure, by borrowing and contact. And we have studied how historical linguists use these changes to discover the relationships among languages, reconstruct their ancestors, and trace their histories.

## Humility and wonder

Historical linguistics combines rigor and humility. Its methods are precise, and its results can be tested and confirmed. But it is aware of how much of the human past is lost. Every language is the product of thousands of years of change, carried by countless generations of speakers, most of whom left no record but the words they passed on. To study the history of a language is to listen to their voices.

> **Pause and consider.** Why must historians be careful not to identify language families with peoples or races?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Correspondences

> Italian *otto*, *notte*, *latte*; Spanish *ocho*, *noche*, *leche*; French *huit*, *nuit*, *lait*

**Questions**

1. State the correspondences.
2. What did the Latin ancestor have?

## 2. Reconstruction

> Italian *cantare*, *capra*; Spanish *cantar*, *cabra*; French *chanter*, *chèvre*

**Questions**

1. Reconstruct the initial consonant, explaining your reasoning.
2. Which principles did you use?

## 3. The laryngeals

> Hittite *ḫant-* "front": Latin *ante*, Greek *antí*

**Questions**

1. What had Saussure predicted?
2. Why was the Hittite evidence so important?

## 4. Long-range comparison

> Greenberg's Amerind; Ringe's probability argument; Vajda's Dene–Yeniseian

**Questions**

1. Why do most specialists reject mass comparison?
2. Why has Dene–Yeniseian been received differently?

## Drawing the threads together

In a paragraph, explain how historical linguists show that languages are related and reconstruct their ancestors, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Historical Linguistics: An Introduction", author: "Lyle Campbell", publisher: "MIT Press; Edinburgh University Press", year: "4th ed., 2020", note: "Read the chapters on the comparative method, internal reconstruction, and distant genetic relationship." },
    { kind: "book", title: "Trask's Historical Linguistics", author: "R. L. Trask, rev. Robert McColl Millar", publisher: "Routledge", year: "3rd ed., 2015", note: "Read the chapters on the comparative method and on language families." },
    { kind: "book", title: "Language", author: "Leonard Bloomfield", publisher: "Henry Holt", year: "1933", note: "Read chapter 18, \"The Comparative Method.\"" },
  ],
  media: [
    { kind: "book", title: "Indo-European Language and Culture: An Introduction", author: "Benjamin W. Fortson IV", publisher: "Wiley-Blackwell", year: "2nd ed., 2010", note: "Read the chapter on the comparative method and the laryngeals, in preparation for HIL 110." },
    { kind: "website", title: "Glottolog", author: "ed. Harald Hammarström and others", publisher: "Max Planck Institute for Evolutionary Anthropology", url: "https://glottolog.org/", note: "Browse the classification of any language family." },
  ],
  questions: [
    {
      prompt: "What is the best evidence that two languages are related?",
      choices: [
        "A few striking resemblances",
        "Systematic sound correspondences in basic vocabulary and grammar",
        "Similar word order",
        "Words for mother and father",
      ],
      answer: 1,
      explanation: "Chance, borrowing, and universals can produce isolated resemblances.",
    },
    {
      prompt: "Why are English have and Latin habēre not cognates?",
      choices: [
        "They mean different things",
        "By Grimm's Law, Latin h should correspond to English g, not h",
        "Have was borrowed from French",
        "Latin has no h",
      ],
      answer: 1,
      explanation: "Have corresponds to Latin capere.",
    },
    {
      prompt: "In the comparative method, why do we reconstruct *k for Italian [k], Spanish [k], French [ʃ]?",
      choices: [
        "Because French is less important",
        "Because [k] > [ʃ] is a common change and the reverse is rare",
        "Because of chance",
        "Because Latin is written",
      ],
      answer: 1,
      explanation: "The principle of directionality.",
    },
    {
      prompt: "What does reconstruction from the Romance languages recover?",
      choices: [
        "Classical Latin exactly",
        "The spoken Latin of ordinary people, often called Vulgar Latin",
        "Greek",
        "Proto-Indo-European",
      ],
      answer: 1,
      explanation: "Hence caballus rather than equus.",
    },
    {
      prompt: "What did Saussure predict in 1878?",
      choices: [
        "The existence of Hittite",
        "Lost sounds in Proto-Indo-European, later confirmed by the Hittite ḫ",
        "The Great Vowel Shift",
        "Grimm's Law",
      ],
      answer: 1,
      explanation: "Kuryłowicz made the connection in 1927.",
    },
    {
      prompt: "What does internal reconstruction use?",
      choices: [
        "Comparison with related languages",
        "Alternations within a single language",
        "Written records only",
        "Borrowings",
      ],
      answer: 1,
      explanation: "For example, German Tag [k] / Tage [g].",
    },
    {
      prompt: "What defines a subgroup?",
      choices: [
        "Shared retentions",
        "Shared innovations",
        "Geographical closeness",
        "Number of speakers",
      ],
      answer: 1,
      explanation: "Stated by Brugmann in 1884.",
    },
    {
      prompt: "What did the wave model emphasize?",
      choices: [
        "Clean splits between languages",
        "The spread of innovations across dialect areas, with overlapping boundaries",
        "The age of languages",
        "Sound symbolism",
      ],
      answer: 1,
      explanation: "Johannes Schmidt proposed it in 1872.",
    },
    {
      prompt: "Why did most linguists come to reject glottochronology?",
      choices: [
        "Because Swadesh lists are useless",
        "Because rates of vocabulary replacement vary among words, languages, and periods",
        "Because it was too complicated",
        "Because it used computers",
      ],
      answer: 1,
      explanation: "Bergsland and Vogt's study of Icelandic was influential.",
    },
    {
      prompt: "Why do most specialists reject Greenberg's Amerind?",
      choices: [
        "Because the Americas have only one family",
        "Because mass comparison cannot distinguish common descent from chance, borrowing, and sound symbolism",
        "Because Greenberg's African work was wrong",
        "Because there are no Indigenous languages",
      ],
      answer: 1,
      explanation: "Campbell and Ringe were prominent critics.",
    },
  ],
  reflection:
    "The comparative method is the central tool of historical linguistics. In 500–800 words, explain how it works, illustrate it with an example from this lesson, and assess its achievements and limits, including the laryngeal theory, the dating of language families, and the controversies over long-range comparison.",
};
