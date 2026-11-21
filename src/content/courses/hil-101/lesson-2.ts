import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Sound Change",
  summary:
    "The regularity of sound change and the Neogrammarian hypothesis; assimilation, palatalization, and dissimilation; lenition and the loss of sounds; insertion, metathesis, and vowel change; i-umlaut and the origin of *mice* and *feet*; conditioned changes, mergers, and splits; Grimm's Law; Verner's Law and the triumph of regularity; stress and its consequences; the birth of tones; reconstructing the pronunciation of Shakespeare and Chaucer; and lexical diffusion and other challenges.",
  pages: [
    {
      title: "Sound Laws Without Exception",
      body: `## The regularity of change

The most important discovery of nineteenth-century historical linguistics was that **sound change is regular**. When a sound changes in a language, it changes in every word where it occurs in the same phonetic environment, not just in a few words. The Great Vowel Shift, which we studied in Lesson I, changed the long vowel of *bite*, *mice*, *wine*, *time*, *life*, and every other word with the same vowel. Old English *ā* became *ō* in Middle English in *stān* > *stone*, *bān* > *bone*, *hām* > *home*, *gāst* > *ghost*, and so on throughout the vocabulary.

## The Neogrammarians

In 1878, two young German linguists at the University of Leipzig, **Hermann Osthoff** and **Karl Brugmann**, stated this principle in its strongest form in the preface to a journal they founded. Every sound change, they declared, takes place according to laws that admit no exception, insofar as it is purely mechanical. The group of scholars who held this view, including Brugmann, Osthoff, **August Leskien**, and others, were called the ***Junggrammatiker***, or **Neogrammarians**—at first a mocking name used by their elders.

## What about exceptions?

Of course, there are apparent exceptions. The Neogrammarians argued that exceptions are not random, but have explanations of other kinds:

- **Analogy**: speakers may reshape a word to match related words, undoing the effects of a sound change. We study analogy in Lesson III.
- **Borrowing**: a word borrowed from another language or dialect after a sound change has taken place will not show the change.
- **Another sound law**: an apparent exception may be the result of a second, previously unrecognized sound law operating in a particular environment. As we will see, the discovery of **Verner's Law** explained a famous set of exceptions to Grimm's Law.

## Why regularity matters

The regularity of sound change is the foundation of the **comparative method**, which we study in Lesson V. If sound changes were random, affecting some words and not others, it would be impossible to establish systematic correspondences between related languages, and impossible to reconstruct their ancestors. Because changes are regular, linguists can find correspondences like Latin *p* : English *f* (*pater* : *father*, *pēs* : *foot*, *piscis* : *fish*) and use them to prove relationships and reconstruct earlier forms.

## A methodological principle

Many linguists today regard the Neogrammarian hypothesis less as a law of nature than as a **methodological principle**: assume that sound change is regular, and look for explanations of apparent exceptions. This principle has proved enormously productive. As we will see at the end of this lesson, research since the 1960s has shown that some changes spread through the vocabulary gradually, word by word, complicating the picture. But the assumption of regularity remains the foundation of historical linguistics.

## Describing changes

Linguists write sound changes in a compact notation: A > B / C __ D, meaning "A becomes B in the environment between C and D." For example, the change of Latin *t* to Spanish *d* between vowels (*vita* > *vida*) can be written: t > d / V __ V. A change that occurs everywhere, without any conditioning environment, is called **unconditioned**; one that occurs only in certain environments is **conditioned**.

> **Pause and consider.** Why would the comparative method be impossible if sound change were random?`,
    },
    {
      title: "Assimilation, Palatalization, and Dissimilation",
      body: `## Becoming alike

The most common type of sound change is **assimilation**: a sound becomes more like a neighboring sound. As we saw in LIN 101, assimilation operates as a synchronic rule in modern languages (*in-* becomes *im-* before *p*); historically, it causes lasting change.

## Examples

- Latin *octō* "eight" became Italian *otto*: the *k* assimilated completely to the following *t*. Similarly, Latin *noctem* "night" became Italian *notte*, and *factum* "done" became *fatto*.
- Latin *septem* "seven" became Italian *sette*, with *p* assimilating to *t*.
- In the history of English, the Old English *-mb-* in *lamb* and *comb* lost its *b* after the nasal, though the spelling preserves it.

Assimilation can be **partial** (a sound becomes similar in one feature, such as voicing or place) or **total** (it becomes identical, as in *otto*). It can be **regressive**, when a sound becomes like a following sound, as in *otto*, or **progressive**, when it becomes like a preceding one.

## Palatalization

A very common kind of assimilation is **palatalization**: a consonant, often [k] or [g], moves toward the hard palate under the influence of a following front vowel such as [i] or [e], often becoming a sound like [tʃ], [ts], or [s]. Latin *centum* "hundred" was pronounced with [k]; it became Italian *cento*, with [tʃ], and French *cent*, with [s]. Latin *Cicero* was pronounced "Kikero" by Cicero himself.

English underwent palatalization in the Old English period: the [k] of words like *cirice* "church" and *cīese* "cheese" became [tʃ] before front vowels. In Scotland and northern England, where Norse influence was strong, related forms without palatalization survive: Scots *kirk* beside English *church*, and *breeks* beside *breeches*. English has many such pairs, one native and palatalized, the other borrowed from Norse without palatalization: *shirt* and *skirt* both come from the same Germanic root, *shirt* through native English (with [sk] > [ʃ]) and *skirt* from Norse.

## Dissimilation

The opposite of assimilation is **dissimilation**: a sound becomes **less** like a nearby sound, often when two similar sounds occur close together. Dissimilation is less common and often sporadic. Examples include:

- Latin *peregrīnus* "foreigner," with two *r* sounds, became Italian *pellegrino* and English *pilgrim*, with the first *r* changed to *l*.
- Latin *arbor* "tree" became Spanish *árbol*, with the second *r* dissimilated to *l*.
- English *marble* comes from French *marbre*.
- Many English speakers say *February* as "Febuary," dropping the first *r*, a dissimilation in progress.

## Why these changes?

Assimilation reduces the articulatory effort of moving between sounds. Dissimilation may help listeners distinguish sounds, or result from speakers' difficulty in producing the same complex gesture twice in quick succession, as in tongue twisters. Both show how the physical and perceptual properties of speech shape the history of languages.

> **Pause and consider.** *Church* and *kirk* come from the same word. Explain why one has [tʃ] and the other [k].`,
    },
    {
      title: "Lenition and the Loss of Sounds",
      body: `## Weakening

**Lenition** (from Latin *lenis*, "soft") refers to changes that make consonants "weaker": less obstructed, more like vowels, or eventually gone. Lenition often occurs between vowels, where the articulators are moving from one open position to another. A typical lenition path runs: voiceless stop > voiced stop > fricative > approximant > nothing.

## Romance lenition

The western Romance languages show lenition clearly. Latin intervocalic voiceless stops became voiced in Spanish: *vīta* > *vida* "life," *lupus* > *lobo* "wolf," *amīcus* > *amigo* "friend." In French, lenition went further, often to the point of loss: Latin *vīta* > Old French *vide* > modern *vie*; *lupus* > *loup*, with the *p* now silent; *aqua* "water" went through many stages to modern French *eau*, pronounced simply [o]. In Italian, by contrast, these consonants generally remained: *vita*, *lupo*, *amico*.

## Celtic mutations

In the Celtic languages, lenition became part of the grammar. As we saw in LIN 101, Welsh initial consonants change after certain words: *cath* "cat" but *ei gath* "his cat." These **mutations** arose historically from lenition of consonants between vowels across word boundaries, when the preceding words ended in vowels. When the final vowels were later lost, the changes in the initial consonants became grammatical markers.

## Fortition

The opposite of lenition, **fortition**, makes sounds stronger, for example by turning fricatives into stops or glides into consonants. It is less common. In Spanish, an initial [j] glide can become a stronger sound in some dialects, so that *yo* "I" is pronounced with [ʒ] in Argentina.

## Loss of sounds

Sounds can be lost entirely in various positions:

- **Apocope**: loss at the end of a word. Old English *nama* "name" became Middle English *name* (two syllables), then Modern English *name* (one syllable); the final *e* of English spelling often marks a lost vowel.
- **Syncope**: loss in the middle of a word. Latin *calidus* "warm" became spoken Latin *caldus* and Italian *caldo*, as the *Appendix Probi* showed. English *chocolate* is often pronounced with two syllables.
- **Aphaeresis**: loss at the beginning of a word. English lost the initial [k] in *knight*, *know*, and *knee*, and the [g] in *gnaw* and *gnat*, around the seventeenth century, though the spelling preserves them. *Esquire* gave *squire*, and *escape* gave the dialect form *scape*.

## Final devoicing

A common change affects consonants at the ends of words: **final devoicing**, in which voiced consonants become voiceless. In German, *Rad* "wheel" and *Rat* "advice" are both pronounced [ʁaːt], though the plural *Räder* shows the original [d]. Russian, Dutch, Polish, and Turkish have similar rules. Final devoicing is a good example of a sound change that leaves its trace in alternations within the modern language.

> **Pause and consider.** Latin *lupus* became Italian *lupo*, Spanish *lobo*, and French *loup* (with a silent *p*). Arrange these in order of increasing lenition.`,
    },
    {
      title: "Insertion, Metathesis, and Vowel Change",
      body: `## Adding sounds

Sounds can also be **inserted**, a change called **epenthesis**:

- Between consonants: Old English *þunor* became *thunder*, with a *d* inserted between *n* and *r*; Latin *camera* became French *chambre*, with *b* inserted between *m* and *r*. Such insertions often ease the transition between two consonants. Many English speakers today say *hamster* as "hampster" or *athlete* as "athalete."
- At the beginning of a word (**prothesis**): Latin words beginning with *s* plus a consonant acquired an initial vowel in Spanish and French: *scala* > Spanish *escala*, *scola* > Spanish *escuela*, *spatha* > French *épée* (from earlier *espee*). Spanish speakers learning English often say "espain" for *Spain*, carrying this pattern into a second language.

## Metathesis

**Metathesis** is the reordering of sounds, usually adjacent ones. It is often sporadic, affecting individual words:

- Old English *brid* "young bird" became *bird*; *þridda* became *third*; *hors* had a variant *hros*; *wæps* became *wasp*.
- Old English had both *ascian* and *acsian* for "ask." The form *aks* survived in many dialects, and is common in African American English; it is not a modern error but a continuation of an old English variant, used by Chaucer and in the Coverdale Bible.
- Latin *parabola* became Spanish *palabra* "word," with *r* and *l* exchanged.

## Vowel changes

Vowels change in many ways:

- **Raising** and **lowering**: vowels move higher or lower in the mouth, as in the Great Vowel Shift.
- **Fronting** and **backing**: vowels move forward or back.
- **Diphthongization**: a monophthong becomes a diphthong. Latin stressed short *o* and *e* became diphthongs in Spanish: *bonus* > *bueno*, *focus* > *fuego* "fire," *petra* > *piedra* "stone," *tempus* > *tiempo*. In Italian, the same vowels diphthongized only in open syllables: *buono*, but *tempo*.
- **Monophthongization**: a diphthong becomes a monophthong. Latin *au* became *o* in many Romance words: *aurum* > Spanish and Italian *oro* "gold."
- **Reduction**: unstressed vowels weaken, often to schwa, and may disappear, as happened to the final vowels of Old English.

## Vowels and stress

Many vowel changes depend on **stress**. In English, the stressed vowel of a word tends to keep its quality, while unstressed vowels are reduced, as we saw in LIN 101 with *photograph* and *photography*. In the history of the Romance languages, Latin stressed vowels developed very differently from unstressed ones. Knowing where the stress fell is often essential for understanding vowel history.

## Compensatory lengthening

When a consonant is lost, the preceding vowel sometimes **lengthens** to compensate, keeping the syllable's weight: Old English *niht* "night," with a short *i* followed by the consonant [x], became Middle English *nīht* and then, after the loss of [x], *night* with a long [iː], which the Great Vowel Shift turned into [aɪ]. This **compensatory lengthening** is why *night* has the same vowel as *bite*.

> **Pause and consider.** The pronunciation *aks* for *ask* is often criticized as an error. What does its history suggest?`,
    },
    {
      title: "I-Umlaut: Why Mice and Feet",
      body: `## Irregular plurals

Why does English have irregular plurals like *mice*, *feet*, *geese*, *teeth*, and *men*? Why are *old* and *elder*, *full* and *fill*, *food* and *feed*, *doom* and *deem* related in their peculiar way? The answer lies in a prehistoric sound change called **i-umlaut** (or i-mutation).

## The change

In the early Germanic languages, a vowel in a stressed syllable was **fronted** (and sometimes raised) when the following syllable contained [i] or [j]. The tongue anticipated the front vowel of the next syllable—a kind of assimilation at a distance. Thus, in the prehistory of English:

- Proto-Germanic \\**mūs* "mouse" had a plural \\**mūsiz*. The *i* of the ending fronted the vowel *ū* to *ȳ* (a front rounded vowel, like German *ü*): Old English *mȳs*. Later, the ending was lost, and *ȳ* became [iː], which the Great Vowel Shift turned into [aɪ]: *mice*.
- Proto-Germanic \\**fōt* "foot" had a plural \\**fōtiz*. The *ō* was fronted to *ē*: Old English *fēt*, Modern English *feet*.
- Similarly *gōs* / *gēs* (goose / geese), *tōþ* / *tēþ* (tooth / teeth), *mann* / *menn* (man / men).

The singular forms had no *i* in the following syllable, so their vowels were unaffected.

## From conditioned to grammatical

When i-umlaut occurred, the fronted vowels were predictable from the following *i*: they were allophones, in the terms of LIN 101. But when the endings containing *i* were later lost, the vowel difference was no longer predictable from the sound context. It became the **only** mark of the plural. A sound change had produced a grammatical alternation. This process, in which a conditioned phonetic difference becomes a contrast in its own right after the conditioning environment disappears, is called **phonologization**.

## Other traces

I-umlaut explains many other English alternations:

- *old* / *elder*, *eldest*: the comparative and superlative endings once contained *i*.
- *full* / *fill*, *food* / *feed*, *doom* / *deem*, *blood* / *bleed*: verbs formed with a suffix containing *j* show the umlauted vowel.
- *foul* / *filth*, *long* / *length*, *strong* / *strength*: nouns formed with a suffix containing *i* also show it.

## German umlaut

German preserves i-umlaut more visibly. The German letters *ä*, *ö*, and *ü*, with their two dots (originally a small *e* written above the vowel), mark umlauted vowels: *Mann* / *Männer* "man / men," *Fuß* / *Füße* "foot / feet," *Maus* / *Mäuse* "mouse / mice," *alt* / *älter* "old / older." In German, umlaut remained productive in plurals and comparatives far longer than in English, where most umlaut plurals were replaced by regular *-s* plurals through analogy: Old English *bōc* "book" had the plural *bēc*, but Modern English has *books*.

## A lesson in method

I-umlaut shows how historical linguistics explains apparently irregular features of a modern language. Irregularities that seem arbitrary to a learner of English turn out to be the regular results of ancient sound changes whose conditioning environments have disappeared.

> **Pause and consider.** Why does *goose* have the plural *geese*, but *moose* (borrowed from an Algonquian language in the seventeenth century) not have the plural *meese*?`,
    },
    {
      title: "Mergers, Splits, and Phonological Systems",
      body: `## Changes to the system

Some sound changes alter only the pronunciation of sounds, leaving the system of contrasts intact. Others change the **system** itself, by reducing or increasing the number of phonemes. Two important kinds of systemic change are **mergers** and **splits**.

## Mergers

In a **merger**, two phonemes become one. Words that once had different sounds come to be pronounced the same. In late Middle and Early Modern English, the vowel of *meet* (from Middle English [eː]) and the vowel of *meat* (from Middle English [ɛː]) were distinct, as their different spellings still show. By the eighteenth century, in most varieties, they had merged, so that *meet* and *meat*, *see* and *sea*, *beet* and *beat* became homophones. A few words, such as *great*, *break*, and *steak*, which once had the *meat* vowel, did not follow the merger, preserving an older pronunciation, perhaps because they came from a different dialect.

Mergers are generally **irreversible**: once two sounds have merged, speakers cannot know which words originally had which sound, except through spelling or related forms. This is called **Garde's principle** after the French linguist Paul Garde. The cot–caught merger in progress in North America, which we met in Lesson I, is a modern example.

## Splits

In a **split**, one phoneme becomes two. A split typically occurs through phonologization, as with i-umlaut: allophones of a single phoneme, conditioned by their environment, become separate phonemes when the conditioning environment is lost or when the allophones begin to occur in the same environment.

A clear English example is the history of **[ŋ]**. In Old English, [ŋ] was an allophone of /n/ before [g] and [k]: *sing* was pronounced [siŋg], with a final [g]. When the final [g] was lost in Early Modern English, [ŋ] came to stand at the end of words where it could contrast with [n]: *sin* and *sing*, *thin* and *thing*. A new phoneme, /ŋ/, had been born. Many speakers in parts of England, such as the Midlands, still pronounce the [g] in *singing*, preserving the older state.

Another example concerns **[f]** and **[v]**. In Old English, [v] was an allophone of /f/ between voiced sounds: *wulf* "wolf" had [f], while its plural *wulfas* had [v]. When French words beginning with [v], such as *veal*, *very*, and *vine*, were borrowed, and endings were lost, [v] came to contrast with [f] at the beginnings and ends of words: *fine* and *vine*, *safe* and *save*. The old alternation survives in *wolf* / *wolves*, *wife* / *wives*, *knife* / *knives*.

## Chain shifts

As we saw with the Great Vowel Shift, sounds can also move together in **chain shifts**, in which the movement of one sound is accompanied by the movement of others, preserving the number of contrasts. Chain shifts suggest that phonological systems tend to maintain distinctions that are useful for communication, though this tendency is not absolute.

## Systems change

These changes show that a language's sound system is not a fixed inventory but a structure that is constantly being reshaped. Saussure, whom we met in LIN 101, emphasized that each element of a language has value through its relations to the others; historical phonology shows how those relations change over time.

> **Pause and consider.** Why does *wolf* have the plural *wolves*, with [v], while *cliff* has *cliffs*, with [f]?`,
    },
    {
      title: "Grimm's Law",
      body: `## The Germanic consonant shift

The most famous sound law in the history of linguistics is **Grimm's Law**, which describes a set of changes in the consonants of **Proto-Germanic**, the ancestor of English, German, Dutch, the Scandinavian languages, and Gothic. These changes distinguish the Germanic languages from the other Indo-European languages, such as Latin, Greek, and Sanskrit.

## Rask and Grimm

The correspondences were first described in 1818 by the Danish linguist **Rasmus Rask**, and systematized in 1822 by the German scholar **Jacob Grimm**, in the second edition of his *Deutsche Grammatik*. Grimm's account was more widely known, and the law bears his name.

## The three parts

Grimm's Law consists of three related changes in the stops inherited from Proto-Indo-European (PIE):

1. **Voiceless stops became fricatives**: PIE \\*p, \\*t, \\*k > Germanic f, þ (th), h.
2. **Voiced stops became voiceless stops**: PIE \\*b, \\*d, \\*g > Germanic p, t, k.
3. **Voiced aspirated stops became voiced stops** (or fricatives): PIE \\*bh, \\*dh, \\*gh > Germanic b, d, g.

## Examples

The non-Germanic languages, such as Latin, generally preserve the original stops, so comparing Latin (or Greek and Sanskrit) with English reveals the shift:

**Part 1** (p, t, k > f, th, h):
- Latin *pater*, English *father*; Latin *pēs, pedis*, English *foot*; Latin *piscis*, English *fish*.
- Latin *trēs*, English *three*; Latin *tū*, English *thou*.
- Latin *centum* (with [k]), English *hundred*; Latin *cor, cordis*, English *heart*; Latin *canis*, English *hound*.

**Part 2** (b, d, g > p, t, k):
- PIE \\*b was rare, but Lithuanian *dubùs* "deep" corresponds to English *deep*.
- Latin *decem*, English *ten*; Latin *dēns, dentis*, English *tooth*; Latin *duo*, English *two*.
- Latin *genus*, English *kin*; Latin *gelidus* "cold," English *cold*; Latin *ager*, English *acre*.

**Part 3** (bh, dh, gh > b, d, g):
- Sanskrit *bhrātar-*, English *brother*; Sanskrit *bhar-* "carry," English *bear*. (Latin changed \\*bh to *f*: *frāter*, *ferō*.)
- Sanskrit *dhā-* "put," English *do*; Greek *thugatēr*, English *daughter*.
- Latin *hostis* (from \\*gh), English *guest*.

## Exceptions explained

Some words do not show Grimm's Law, for reasons the Neogrammarians would recognize. After *s*, the stops did not shift: Latin *stāre*, English *stand* (not "sthand"); Latin *piscis*, English *fish*, but the *sk* in the middle of the Latin word corresponds to English *sh*. And English words borrowed from Latin after the shift, such as *paternal*, *pedestrian*, *tri-*, *century*, and *genus*, keep the Latin consonants, giving English pairs like *father* and *paternal*, *foot* and *pedal*, *three* and *triple*, *hundred* and *century*.

## The significance of Grimm's Law

Grimm's Law showed that the relationships among the Indo-European languages could be described with precision, as systematic correspondences between sounds, not just vague resemblances. It became the model for the discovery of sound laws in other families.

> **Pause and consider.** English has both *father* and *paternal*, *foot* and *pedal*. Explain why one word in each pair shows Grimm's Law and the other does not.`,
    },
    {
      title: "Verner's Law: The Triumph of Regularity",
      body: `## A troublesome exception

Grimm's Law worked beautifully for most words, but there were puzzling exceptions. According to Part 1, PIE \\*t should have become Germanic *þ* (th). This happened in *brother*: Sanskrit *bhrā́tar-*, Gothic *brōþar*, Old English *brōþor*. But in *father*, it seemed not to: Sanskrit *pitā́*, Greek *patḗr*, Latin *pater*, but Gothic *fadar*, Old English *fæder*—with *d*, not *þ*. Why should the same PIE \\*t become *þ* in one word and *d* in another, in the same position?

Similar exceptions affected other consonants. And within single Germanic verbs, consonants alternated in puzzling ways: Old English *wesan* "to be" had the past forms *wæs* (singular) and *wǣron* (plural), with *s* in one and *r* in the other—the source of Modern English *was* and *were*.

## Verner's solution

In 1875, a young Danish linguist, **Karl Verner** (1846–1896), found the answer, published in 1877 in an article titled "An Exception to the First Sound Shift." He noticed that the exceptions correlated with the position of the **accent** in the earliest Indo-European languages, especially Sanskrit and Greek, which preserved the PIE accent. In *brother*, Sanskrit *bhrā́tar-* had the accent on the **first** syllable, immediately before the *t*. In *father*, Sanskrit *pitā́* had the accent on the **second** syllable, after the *t*.

Verner proposed that after Grimm's Law turned the voiceless stops into voiceless fricatives (*f*, *þ*, *h*, and also *s*), these fricatives became **voiced** (*b*, *d*, *g*, *z*) when they were not immediately preceded by the accented syllable. Later, the Germanic languages shifted the accent to the first syllable of every word, hiding the original conditioning. Only the comparison with Sanskrit and Greek revealed it.

## Was and were

Verner's Law also explained the alternations within Germanic verbs. In the PIE ancestor of *wesan*, the singular past had the accent on the root, so the *s* remained; the plural had the accent on the ending, so the *s* became *z*, which later became *r* in West Germanic, a change called **rhotacism**. Hence *was* and *were*. The same law explains the *s*/*r* alternation in *lose* and *forlorn* (originally the past participle), and the alternations in many Germanic verbs.

## The triumph of regularity

Verner's discovery was a triumph for the idea that sound change is regular. An apparent exception to one law turned out to be the result of another law, which itself was regular. It strongly encouraged the Neogrammarians to declare, the following year, that sound laws operate without exception. Verner, a modest man who published little, later became a professor at Copenhagen.

## Grassmann's Law

A similar resolution had come earlier for another set of exceptions. In 1863, the German mathematician and linguist **Hermann Grassmann** showed that in Sanskrit and Greek, when two aspirated consonants occurred in successive syllables, the first lost its aspiration (a kind of dissimilation). This explained why some Sanskrit and Greek words seemed to correspond irregularly to Germanic words, and saved Grimm's Law from another set of apparent exceptions.

> **Pause and consider.** Verner explained an exception to Grimm's Law by looking at the accent in Sanskrit. Why could the solution not have been found by looking at Germanic alone?`,
    },
    {
      title: "Stress and Its Consequences",
      body: `## The power of stress

Many of the largest changes in the history of languages follow from the position of **stress**. Stressed syllables tend to preserve their vowels and consonants; unstressed syllables tend to weaken, reduce, and disappear. Where a language places its stress therefore shapes its long-term development.

## Germanic initial stress

In Proto-Indo-European, the accent could fall on different syllables in different words, and even move within the forms of a single word, as Verner's Law revealed. At some point in its prehistory, **Proto-Germanic** fixed the stress on the **first syllable** of the root. This change, which took place after the operation of Verner's Law (whose effects depended on the older, mobile accent), had profound consequences.

With stress fixed at the beginning of words, the ends of words, where most grammatical endings were found, were always unstressed. Over the following centuries, these unstressed endings weakened and eroded in all the Germanic languages, most dramatically in English, where, as we saw in Lesson I, nearly all the Old English inflections were lost by the end of the Middle English period. The initial stress of Germanic thus set in motion a chain of changes that eventually transformed English from an inflected language into one that relies on word order.

## Alliteration

Germanic initial stress also shaped Germanic **poetry**. Old English, Old Norse, and Old Saxon poetry used **alliteration** rather than rhyme: stressed syllables in a line began with the same sound. The opening of *Beowulf* gives a sense of it: *Hwæt! We Gār-Dena in geār-dagum, / þēod-cyninga þrym gefrūnon*—"Listen! We have heard of the glory of the Spear-Danes in days of old, of the kings of the people." Because stress fell on the first syllable, the beginnings of words were prominent, and alliteration was the natural way to bind lines together.

## Other languages

Other languages show the consequences of their own stress patterns. In **French**, stress falls on the last syllable of a phrase, and the vowels that followed the Latin stressed syllable were mostly lost: Latin *tabula* "board" became French *table*, pronounced with one syllable in many contexts. In **Irish** and Scottish Gaelic, which developed initial stress like Germanic, unstressed syllables also weakened. In **Russian**, unstressed vowels are reduced in pronunciation, so that the spelling of a word often does not reveal how it sounds.

## Stress and borrowing

When English borrowed thousands of words from French, it often moved the stress to the first syllable, following its Germanic pattern: French *raison* became English *REAson*, French *cité* became *CIty*. In other words, the original stress was kept, producing the variety of stress patterns in modern English, such as *PHOtograph* and *phoTOGraphy*, which we studied in LIN 101.

> **Pause and consider.** How did the fixing of stress on the first syllable in Germanic contribute, centuries later, to the loss of English case endings?`,
    },
    {
      title: "How Tones Are Born",
      body: `## Tonogenesis

As we saw in LIN 101, many languages use **tone** to distinguish words. Where do tones come from? One of the great discoveries of historical linguistics is that tones often arise from the loss or change of **consonants**, a process called **tonogenesis**.

## Vietnamese

In a famous study published in 1954, the French linguist **André-Georges Haudricourt** showed how **Vietnamese** developed its tones. Vietnamese is related to the Mon-Khmer languages, most of which have no tones. Haudricourt argued that Vietnamese once had no tones either, but had syllables ending in different consonants, including a glottal stop and [h]. These final consonants affected the pitch of the preceding vowel: a final glottal stop caused a rising pitch, a final [h] a falling pitch. When the final consonants were lost, the pitch differences remained and became the only distinction between words. Three tones had developed.

Later, a second change doubled the number of tones. Syllables beginning with voiced consonants were pronounced with lower pitch than those beginning with voiceless consonants. When the voiced and voiceless initial consonants merged, the pitch difference again remained, splitting each tone into a high and a low variety. Vietnamese thus came to have six tones, from a language with none.

## Chinese

A similar history explains the tones of the **Chinese** languages. Middle Chinese, the language described in rhyme dictionaries of the seventh century CE, had four tonal categories, traditionally called **level**, **rising**, **departing**, and **entering**. The "entering" tone was not really a pitch at all: it was the category of syllables ending in the stops *-p*, *-t*, and *-k*. Like Vietnamese, the Chinese tone categories were later split according to whether the initial consonant was voiced or voiceless.

Different Chinese languages developed these categories in different ways. **Cantonese** has kept the final stops *-p*, *-t*, *-k*, and has six or more tones. **Mandarin** lost the final stops, redistributing the "entering tone" syllables among its other tones, and now has four main tones. Comparing the modern Chinese languages with each other and with Middle Chinese rhyme books, scholars have reconstructed much of this history.

## Consonants and pitch

Why should consonants affect pitch? The explanation lies in phonetics. Voiced consonants, produced with vibrating vocal folds, tend to lower the pitch of a following vowel; voiceless consonants tend to raise it. A glottal stop at the end of a syllable often causes a rising pitch as the vocal folds tense. These small, automatic pitch differences, which speakers of non-tone languages produce without noticing, can become distinctive when the consonants that caused them are lost—another example of phonologization, as with i-umlaut.

## Losing tones

Tones can also be lost. Some languages in contact with non-tonal languages have lost their tones, or reduced them to a pitch accent. Tones, like other features of sound systems, are born, change, and die.

> **Pause and consider.** How is the birth of tones in Vietnamese similar to the birth of the vowel difference in *foot* and *feet*?`,
    },
    {
      title: "Hearing Shakespeare and Chaucer",
      body: `## Original pronunciation

What did Shakespeare's English sound like? Using the evidence we studied in Lesson I—spellings, rhymes, puns, and the descriptions of contemporary grammarians—scholars have reconstructed the pronunciation of Early Modern English in considerable detail. This reconstructed pronunciation is often called **Original Pronunciation**, or OP.

## Rhymes that no longer rhyme

Many of Shakespeare's rhymes do not work in modern pronunciation. In the sonnets, *love* rhymes with *prove*, *move*, and *approve*; and in the very first sonnet, *die* rhymes with *memory*. Some of these may have been "eye rhymes," conventional rhymes based on spelling, but many reflect genuine pronunciation differences. The ending *-y* in *memory* and *history* seems to have been pronounced with a diphthong in some styles, so that it could rhyme with *die*.

## Puns that no longer work

Shakespeare's puns also reveal pronunciation. In *Julius Caesar*, Cassius complains, "Now is it Rome indeed and room enough, / When there is in it but one only man" (1.2), a pun that works only if *Rome* and *room* sounded alike, as evidence suggests they did. In *As You Like It*, a joke about *hour* and *whore* depends on the two words sounding similar.

## The Globe experiments

In **2004**, Shakespeare's Globe theatre in London staged a production of *Romeo and Juliet* in Original Pronunciation, with the linguist **David Crystal** as consultant. Audiences reported that the reconstructed accent, with its pronounced *r*s and unfamiliar vowels, sounded less aristocratic and more earthy than modern performances, and that many rhymes and puns came to life again. Further OP productions followed, and recordings of Shakespeare in OP have attracted wide interest.

## Chaucer

Reconstructing Chaucer's English of the 1390s is a further step back. Before the Great Vowel Shift, long vowels had roughly their "continental" values: *lyf* "life" was pronounced like "leaf," *hous* "house" like "hoose," and *name* had two syllables, "nah-muh." The final *-e* of many words was pronounced, and is often needed for the meter of Chaucer's verse. The opening lines of *The Canterbury Tales*—*Whan that Aprill with his shoures soote / The droghte of March hath perced to the roote*—sound strikingly different when read with reconstructed pronunciation. Students of Chaucer are often taught to read him aloud in this way.

## Uncertainty and value

Reconstructed pronunciations are not certain. Evidence is often ambiguous, and speakers in Shakespeare's and Chaucer's time varied, as speakers do today. But reconstructions based on careful evidence allow modern readers to hear older literature more nearly as its first audiences did, and they show the methods of historical linguistics at work in a vivid way.

> **Pause and consider.** "Now is it Rome indeed and room enough." What does this pun tell us about Shakespeare's pronunciation of *Rome*?`,
    },
    {
      title: "Watching a Sound Change: New York's R",
      body: `## A change in progress

As we saw in Lesson I, the sociolinguist **William Labov** showed that sound changes can be observed as they happen. One of his most famous studies concerned the pronunciation of **/r/** after vowels in New York City.

## Non-rhotic New York

Traditionally, New York City speech was **non-rhotic**, like the speech of southern England: speakers did not pronounce /r/ after vowels in words like *car*, *fourth*, and *floor*. After the Second World War, however, rhotic pronunciation, standard in most of the United States, was becoming more prestigious in New York.

## The department store study

In 1962, Labov designed an ingenious study, published in ***The Social Stratification of English in New York City*** (1966). He visited three Manhattan department stores that served customers of different social classes: **Saks Fifth Avenue**, the most expensive; **Macy's**, in the middle; and **S. Klein**, the least expensive. He approached sales assistants and asked where a certain department was, knowing the answer would be "**fourth floor**," which contains two opportunities for postvocalic /r/. Then, pretending not to have heard, he asked them to repeat it, eliciting a more careful pronunciation.

## The results

The results were striking. Sales assistants at Saks pronounced /r/ most often, those at Macy's less often, and those at S. Klein least often. The assistants' speech reflected the social status of the stores' customers. And in the careful repetition, assistants at all three stores pronounced /r/ more often than in their first answer—especially at Macy's, where the middle-class assistants showed the greatest shift toward the prestige form when paying attention to their speech.

## What it showed

Labov's study showed several things. First, a sound change in progress—the spread of rhotic /r/—could be observed and measured. Second, the change was distributed by **social class**, and was moving through the community from the higher-status groups. Third, speakers shifted their pronunciation according to **style**, using more of the prestige form when speaking carefully. And fourth, the middle groups were often the most sensitive to prestige, a pattern Labov called **hypercorrection** when it led them to exceed the higher groups in careful speech.

## Historical linguistics and sociolinguistics

Labov's work transformed historical linguistics by showing that the causes of sound change could be studied directly in living communities, and that social factors play a central role. His studies, and the many that followed, are the subject of SOC 101 and SOC 110. They have also confirmed the uniformitarian principle: the kinds of social and linguistic processes visible in New York in the 1960s are likely to have shaped the sound changes of the past, such as the spread of non-rhotic pronunciation in eighteenth-century England.

> **Pause and consider.** Why might middle-class speakers be especially likely to shift toward prestige pronunciations when speaking carefully?`,
    },
    {
      title: "Lexical Diffusion and Other Complications",
      body: `## A challenge to regularity

The Neogrammarians held that sound change affects all relevant words at once, gradually changing the pronunciation of a sound everywhere it occurs. In the 1960s, the linguist **William S.-Y. Wang** challenged this view. In an article of 1969, "Competing Changes as a Cause of Residue," and in later work on Chinese dialects, Wang argued that some sound changes spread **word by word** through the vocabulary, a process he called **lexical diffusion**. A change might affect some words early, others later, and some not at all, if it stopped before completion or was overtaken by another change.

## English examples

English offers suggestive examples. The vowel of Middle English [oː], as in *food*, became [uː] in the Great Vowel Shift. Later, in some words, this [uː] shortened to [ʊ], as in *good*, *book*, *foot*, *look*, *stood*; and in a few of these, it changed further to [ʌ], as in *blood* and *flood*. The shortening did not affect all words with the same sound in the same environment: compare *food* (with [uː]) and *good* (with [ʊ]). In some words, such as *room*, *roof*, and *root*, speakers today vary between the two vowels. This looks like a change that spread word by word and never finished.

## Reconciling the views

How can lexical diffusion be reconciled with the Neogrammarian principle? **William Labov**, in a paper of 1981, "Resolving the Neogrammarian Controversy," argued that both kinds of change exist. Changes in the fine phonetic detail of sounds—such as gradual shifts in vowel quality—tend to be regular and affect all words at once, as the Neogrammarians claimed. Changes that substitute one phoneme for another in words—such as the shortening of [uː] to [ʊ]—may diffuse word by word, especially when they are influenced by factors such as word frequency.

## Frequency

Research by **Joan Bybee** and others has shown that **frequent words** often lead certain changes, especially reductions: frequent words like *going to* (*gonna*), *want to* (*wanna*), and *I don't know* are reduced earlier and more extensively than rare words with similar sounds. On the other hand, as we saw in LIN 101, frequent irregular forms like *went* resist analogical regularization, while rare irregular forms are regularized. Frequency thus affects change in different ways depending on the type of change.

## Sporadic changes

Some changes are **sporadic**, affecting only individual words. Metathesis and dissimilation, as we saw, are often sporadic. So are many changes in very common words and expressions, such as greetings and forms of address: *God be with you* became *goodbye*, under the influence of *good day* and *good night*. Such changes do not undermine the regularity principle, but show that not all change is regular sound change.

## The method survives

Despite these complications, the assumption of regularity remains the foundation of historical linguistics. Regular correspondences between languages can be established and used to reconstruct their ancestors, as we will see in Lesson V. Lexical diffusion and sporadic changes are exceptions to be explained, just as the Neogrammarians explained exceptions by analogy and borrowing.

> **Pause and consider.** Do you pronounce *room* and *roof* with the vowel of *food* or of *good*? What does variation like this suggest about how sound changes spread?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Osthoff and Brugmann (1878)

> Sound laws operate without exception. (In the course's rendering.)

**Questions**

1. What did the Neogrammarians mean by this claim?
2. How did they explain apparent exceptions?

## 2. Romance lenition

> Latin *vīta*, *lupus*, *amīcus* → Italian *vita*, *lupo*, *amico*; Spanish *vida*, *lobo*, *amigo*; French *vie*, *loup*, *ami*

**Questions**

1. Describe the changes in each language.
2. Which language shows the most lenition?

## 3. I-umlaut

> *foot* / *feet*; *mouse* / *mice*; *full* / *fill*; *old* / *elder*

**Questions**

1. Explain how i-umlaut produced these alternations.
2. What is phonologization, and how does i-umlaut illustrate it?

## 4. Grimm's Law and Verner's Law

> Latin *pater* : English *father*; Sanskrit *bhrā́tar-* : Gothic *brōþar*; Sanskrit *pitā́* : Gothic *fadar*

**Questions**

1. Which part of Grimm's Law relates *pater* and *father*?
2. How did Verner explain why Gothic has *þ* in *brōþar* but *d* in *fadar*?

## Drawing the threads together

In a paragraph, explain why the regularity of sound change is so important to historical linguistics, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Historical Linguistics: An Introduction", author: "Lyle Campbell", publisher: "MIT Press; Edinburgh University Press", year: "4th ed., 2020", note: "Read chapter 2, \"Sound Change.\"" },
    { kind: "book", title: "Trask's Historical Linguistics", author: "R. L. Trask, rev. Robert McColl Millar", publisher: "Routledge", year: "3rd ed., 2015", note: "Read the chapters on phonological change." },
    { kind: "book", title: "Principles of Linguistic Change, vol. 1: Internal Factors", author: "William Labov", publisher: "Blackwell", year: "1994", note: "Read the chapters on the regularity controversy." },
  ],
  media: [
    { kind: "book", title: "A Reader in Nineteenth-Century Historical Indo-European Linguistics", author: "ed. and trans. Winfred P. Lehmann", publisher: "Indiana University Press", year: "1967", note: "Read the selections from Grimm and Verner." },
    { kind: "book", title: "The Stories of English", author: "David Crystal", publisher: "Overlook Press", year: "2004", note: "Read the chapters on Middle English sound changes." },
  ],
  questions: [
    {
      prompt: "What is the Neogrammarian hypothesis?",
      choices: [
        "That languages never change",
        "That sound change is regular, affecting all words with a sound in the same environment",
        "That all changes are random",
        "That grammar is innate",
      ],
      answer: 1,
      explanation: "Osthoff and Brugmann stated it in 1878.",
    },
    {
      prompt: "What is assimilation?",
      choices: [
        "A sound becoming more like a neighboring sound",
        "A sound becoming less like a neighbor",
        "The loss of a sound",
        "The insertion of a sound",
      ],
      answer: 0,
      explanation: "Latin octō became Italian otto.",
    },
    {
      prompt: "Why does Scots have kirk where English has church?",
      choices: [
        "Kirk is a misspelling",
        "English underwent palatalization of [k] before front vowels; northern forms influenced by Norse did not",
        "Church is from French",
        "Kirk is newer",
      ],
      answer: 1,
      explanation: "Similarly breeks and breeches.",
    },
    {
      prompt: "What is lenition?",
      choices: [
        "The strengthening of consonants",
        "The weakening of consonants, often between vowels, sometimes to loss",
        "The lengthening of vowels",
        "The reordering of sounds",
      ],
      answer: 1,
      explanation: "Latin vīta became Spanish vida and French vie.",
    },
    {
      prompt: "Which of the following is an example of metathesis?",
      choices: [
        "Old English brid became bird",
        "Latin octō became otto",
        "Old English nama became name",
        "Latin centum became cento",
      ],
      answer: 0,
      explanation: "The r and the vowel exchanged places.",
    },
    {
      prompt: "What explains the plural feet?",
      choices: [
        "A random irregularity",
        "I-umlaut: the vowel was fronted by an i in a lost plural ending",
        "French influence",
        "The Great Vowel Shift alone",
      ],
      answer: 1,
      explanation: "Proto-Germanic *fōtiz became Old English fēt.",
    },
    {
      prompt: "What is a merger?",
      choices: [
        "Two languages combining",
        "Two phonemes becoming one, so that once-distinct words sound alike",
        "One phoneme becoming two",
        "A borrowing",
      ],
      answer: 1,
      explanation: "Meet and meat merged in most varieties of English.",
    },
    {
      prompt: "According to Grimm's Law, what did PIE *p, *t, *k become in Germanic?",
      choices: ["b, d, g", "f, þ (th), h", "p, t, k", "m, n, ŋ"],
      answer: 1,
      explanation: "Latin pater, English father.",
    },
    {
      prompt: "What did Verner's Law explain?",
      choices: [
        "The Great Vowel Shift",
        "Exceptions to Grimm's Law, depending on the position of the original accent",
        "I-umlaut",
        "Romance lenition",
      ],
      answer: 1,
      explanation: "It explained Gothic fadar versus brōþar, and English was versus were.",
    },
    {
      prompt: "What is lexical diffusion?",
      choices: [
        "The borrowing of words",
        "The spread of a sound change through the vocabulary word by word",
        "The loss of words",
        "The invention of words",
      ],
      answer: 1,
      explanation: "William Wang proposed it in the 1960s.",
    },
  ],
  reflection:
    "Verner's Law turned an apparent exception to Grimm's Law into evidence for the regularity of sound change. In 500–800 words, explain the Neogrammarian principle of regularity, how Verner's discovery supported it, and how lexical diffusion has complicated it, and assess whether the principle still holds.",
};
