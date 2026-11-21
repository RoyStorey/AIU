import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Reconstructing Proto-Indo-European: Sounds and Roots",
  summary:
    "What reconstruction can recover; the three series of stops and their reflexes; the glottalic theory; syllabic resonants; the laryngeals and how they colored vowels; the law of palatals and the fall of Sanskrit's prestige; ablaut; the accent; the structure of roots; a sample of reconstructed roots and numerals; tracing one word, *wheel*, across the family; and the debate over what a reconstruction is.",
  pages: [
    {
      title: "What Reconstruction Can Recover",
      body: `## From correspondences to a protolanguage

In HIL 101, we learned the steps of the comparative method: collect cognates, establish sound correspondences, and reconstruct protosounds that explain them. Applied to the Indo-European family over two centuries, this method has produced a detailed reconstruction of the sounds, roots, and grammar of **Proto-Indo-European**. In this lesson, we study its **sound system** and the structure of its **roots**.

## The materials

Reconstruction depends above all on the oldest and best-recorded languages of each branch: **Sanskrit** (especially the Vedic Sanskrit of the Rigveda) and **Avestan**; **Greek**, including Mycenaean; **Hittite** and the other Anatolian languages; **Latin**; **Gothic**, **Old Norse**, and **Old English**; **Old Irish**; **Old Church Slavonic** and **Lithuanian**; **Classical Armenian**; and **Tocharian**. Each branch preserves some features of the protolanguage and loses others, so all must be weighed together.

## The reference works

Several great reference works collect the evidence. **Julius Pokorny**'s *Indogermanisches etymologisches Wörterbuch* (1959) lists over two thousand roots with their reflexes, though it is now out of date in many respects. The *Lexikon der indogermanischen Verben* (1998; 2nd ed., 2001), edited by **Helmut Rix** and others, reconstructs verbal roots using modern theory, including the laryngeals. For English speakers, **Calvert Watkins**'s *American Heritage Dictionary of Indo-European Roots* (1985; 3rd ed., 2011) traces English words back to their Indo-European roots.

## A word about notation

Reconstructed forms are marked with an **asterisk**, as we saw in HIL 101. Some conventions:

- **ʰ** marks aspiration: \\**bʰ* is a [b] with a breathy release.
- **ʷ** marks lip-rounding: \\**kʷ* is a [k] with rounded lips, like the *qu* of *queen*.
- **ḱ** and **ǵ** mark the **palatal** stops, discussed in Lesson I.
- **h₁**, **h₂**, **h₃** are the three **laryngeals**.
- A small circle under a consonant, as in \\**n̥* or \\**r̥*, marks a consonant used as a vowel.
- An acute accent marks the position of the accent: \\**ph₂tḗr* "father."

## Degrees of certainty

Not all reconstructions are equally certain. Some, such as \\**ph₂tḗr* "father" or \\**tréyes* "three," are supported by regular cognates in many branches. Others rest on only two or three branches, or involve irregularities. And some aspects of the protolanguage, such as the exact pronunciation of the laryngeals, cannot be recovered with confidence. Good scholarship marks these degrees of certainty, and students should learn to ask, of any reconstruction, what evidence supports it.

## What reconstruction cannot recover

Reconstruction recovers what left traces in the daughter languages. Words and forms that were lost in every branch are lost forever. And because reconstruction combines evidence from languages that separated at different times, the protolanguage it produces may combine features from different periods and dialects. As we will see at the end of this lesson, scholars disagree about how literally the result should be taken.

> **Pause and consider.** Why must reconstruction weigh all branches, rather than relying on the oldest-attested language?`,
    },
    {
      title: "The Stops",
      body: `## Three series

The traditional reconstruction of Proto-Indo-European, developed in the nineteenth century and associated especially with **Karl Brugmann**, posits three series of **stops** (consonants made by stopping the airflow):

| | Labial | Dental | Palatal | Velar | Labiovelar |
|---|---|---|---|---|---|
| voiceless | \\**p* | \\**t* | \\**ḱ* | \\**k* | \\**kʷ* |
| voiced | (\\**b*) | \\**d* | \\**ǵ* | \\**g* | \\**gʷ* |
| voiced aspirate | \\**bʰ* | \\**dʰ* | \\**ǵʰ* | \\**gʰ* | \\**gʷʰ* |

The plain voiced labial \\**b* is placed in parentheses because it is extremely rare; few if any roots can be securely reconstructed with it.

## Reflexes

The daughter languages treat these series in different ways. For the dentals:

| PIE | Sanskrit | Greek | Latin | Germanic |
|---|---|---|---|---|
| \\**t* | *t* | *t* | *t* | *þ* (th) |
| \\**d* | *d* | *d* | *d* | *t* |
| \\**dʰ* | *dh* | *th* | *f* (initially) | *d* |

So PIE \\**tréyes* "three" gives Sanskrit *tráyas*, Greek *treîs*, Latin *trēs*, and English *three*; PIE \\**déḱm̥* "ten" gives Sanskrit *dáśa*, Greek *déka*, Latin *decem*, and English *ten*; PIE \\**dʰeh₁-* "put" gives Sanskrit *dhā-*, Greek *ti-thē-mi* "I put," Latin *fēcī* "I made," and English *do*. These are the correspondences captured by **Grimm's Law**.

## Sanskrit's voiced aspirates

Sanskrit is the only major branch that keeps the voiced aspirates as such: *bh*, *dh*, *gh*. Greek turned them into voiceless aspirates (*ph*, *th*, *kh*); Latin into *f* or *h* at the beginnings of words; Germanic, Celtic, Baltic, Slavic, and Iranian into plain voiced stops. Because Sanskrit seemed to preserve the original system so well, it was natural for nineteenth-century scholars to reconstruct the voiced aspirates on its model.

## Grassmann's Law

In 1863, the German mathematician and linguist **Hermann Grassmann** explained a set of apparent exceptions to the correspondences. In both Sanskrit and Greek, when two aspirated consonants occurred in successive syllables, the first lost its aspiration. Greek *thríks* "hair" has the genitive *trikhós*, not \\**thrikhós*; Sanskrit *bubódha* "has awakened" comes from \\**bʰubʰódʰa*. This is **Grassmann's Law**, a dissimilation of the kind we studied in HIL 101. Like Verner's Law, it turned exceptions into confirmation of the regularity of sound change. (Grassmann is also known for his work in mathematics on what are now called vector spaces.)

## Fricatives

Proto-Indo-European had only one ordinary fricative, \\**s*, and, depending on how one counts, the three laryngeals, which may have been fricatives. Many of the fricatives of the modern languages, such as English *f* and *th*, developed later from stops.

> **Pause and consider.** How does Grassmann's Law explain why Greek *thríks* has the genitive *trikhós*?`,
    },
    {
      title: "The Glottalic Theory",
      body: `## A typological puzzle

The traditional three series of stops raised a problem. In the 1950s and 1960s, linguists studying **typology**, the comparison of the structures of the world's languages, noticed that the traditional system was unusual. The voiced aspirates (\\**bʰ*, \\**dʰ*, \\**gʰ*) were reconstructed without corresponding **voiceless** aspirates; but in languages known to have voiced aspirates, such as Hindi, there are almost always voiceless aspirates as well. And the plain voiced labial \\**b* was almost absent, though in most languages, if any voiced stop is missing, it is \\**g*, not \\**b*.

The linguist **Roman Jakobson** pointed out the first problem in 1958. The reconstructed system seemed to violate tendencies observed in living languages.

## The proposal

In 1973, two proposals appeared independently: one by the Georgian linguist **Thomas Gamkrelidze** and the Russian **Vyacheslav Ivanov**, and one by the American **Paul Hopper**. They argued that the traditional plain voiced stops (\\**b*, \\**d*, \\**g*) were in fact **glottalized** or **ejective** stops (\\**pʼ*, \\**tʼ*, \\**kʼ*), pronounced with a closure of the glottis, as in many languages of the Caucasus, Africa, and the Americas. This is the **glottalic theory**.

## The advantages

The glottalic theory explained several puzzles:

- **The rarity of \\*b**: in languages with ejectives, the labial ejective \\**pʼ* is often rare or missing. If traditional \\**b* was really \\**pʼ*, its rarity is typologically natural.
- **Root constraints**: Proto-Indo-European roots could not contain two plain voiced stops (there are no roots like \\**deg-*). Languages with ejectives often forbid two ejectives in the same root.
- **The voiced aspirates**: the theory reinterpreted the voiced aspirates as plain voiced stops (sometimes with optional aspiration), removing the typological anomaly.

Gamkrelidze and Ivanov elaborated their theory in a massive two-volume work, *Indo-European and the Indo-Europeans* (1984; English translation 1995).

## The objections

Most Indo-Europeanists have not adopted the glottalic theory. Their objections include:

- No daughter language clearly preserves ejectives. The theory requires that every branch independently converted ejectives to voiced stops.
- The typological arguments are weaker than they first appeared: some languages, such as Kelabit in Borneo and some dialects of Madurese, have been described as having voiced aspirates without voiceless ones.
- The traditional system, whatever its typological oddities, accounts well for the correspondences.

## The present state

The debate is unresolved. Some scholars, especially in the **Leiden school** associated with **Frederik Kortlandt**, accept a version of the glottalic theory; most handbooks, including Fortson's, keep the traditional notation while noting the theory. The notation is in any case partly a matter of convention: the correspondences are the same whatever phonetic values are assigned to them.

## What the debate shows

The glottalic theory illustrates the role of **typology** in reconstruction. A reconstructed language should look like a possible human language. But typology describes tendencies, not absolute laws, and the reconstructed system may have been unusual. The debate also shows how a reconstruction is a hypothesis that can be revised as new kinds of evidence are brought to bear.

> **Pause and consider.** Should a reconstructed language be required to resemble known languages? What are the risks of requiring it, and of not requiring it?`,
    },
    {
      title: "Resonants That Act as Vowels",
      body: `## Consonants and vowels

Proto-Indo-European had a class of sounds called **resonants** (or **sonorants**): the nasals \\**m* and \\**n*, the liquids \\**r* and \\**l*, and the glides \\**y* and \\**w*. These could function either as consonants or, between other consonants, as the centers of syllables, like vowels.

## Syllabic y and w

The glides \\**y* and \\**w* were the consonantal counterparts of the vowels \\**i* and \\**u*. In many reconstructions, \\**i* and \\**u* are not independent vowels but simply the syllabic forms of \\**y* and \\**w*. So the root \\**weyd-* "see" has a form \\**wid-*, in which \\**y* has become the vowel *i*: Latin *vidēre* "see," English *wit*, Sanskrit *veda* "I know" and *vidmá* "we know." (The Sanskrit word *Veda*, "knowledge," comes from the same root.)

## Syllabic nasals and liquids

Similarly, \\**m*, \\**n*, \\**r*, and \\**l* could be syllabic: \\**m̥*, \\**n̥*, \\**r̥*, \\**l̥*. English speakers use syllabic consonants in words like *button* [ˈbʌtn̩] and *bottle* [ˈbɒtl̩]. In Proto-Indo-European, they occurred in many words.

The syllabic resonants developed differently in each branch, usually by acquiring a vowel:

| PIE | Sanskrit | Greek | Latin | Germanic |
|---|---|---|---|---|
| \\**n̥* | *a* | *a* | *en* | *un* |
| \\**m̥* | *a* | *a* | *em* | *um* |
| \\**r̥* | *r̥* (vowel) | *ra*, *ar* | *or* | *ur* |

## The negative prefix

A famous example is the negative prefix \\**n̥-* "not": Sanskrit *a-* (*a-mṛta-* "immortal"), Greek *a-* (*a-thánatos* "immortal"; *a-theos* "godless," whence *atheist*), Latin *in-* (*in-certus* "uncertain"), and English *un-* (*un-known*). English *un-*, Latin *in-*, and Greek *a-* thus all descend from the same syllabic nasal.

## Numbers

PIE \\**déḱm̥* "ten" gives Sanskrit *dáśa*, Greek *déka*, Latin *decem*, and Gothic *taíhun*, each with its own treatment of the final \\**m̥*. PIE \\**septḿ̥* "seven" gives Sanskrit *saptá*, Greek *heptá*, and Latin *septem*. And PIE \\**ḱm̥tóm* "hundred" gives Sanskrit *śatám*, Greek *hekatón*, Latin *centum*, and English *hund-red*.

## Brugmann's discovery

The syllabic nasals were identified by **Karl Brugmann** in 1876 (as *nasalis sonans*), and the syllabic liquids by **Hermann Osthoff** at about the same time. These discoveries, made by the young Neogrammarians whom we met in HIL 101, showed that the vowel *a* in Sanskrit and Greek came from several different sources in the protolanguage, and that the protolanguage did not have as many *a* vowels as Schleicher had thought.

## Sanskrit r̥

Sanskrit preserves the syllabic \\**r̥* as a vowel, written *ṛ* in transliteration: *mṛta-* "dead," from \\**mr̥-tó-*, cognate with Latin *mortuus* and English *murder* (from Germanic \\**murþra-*). The Sanskrit vowel is one of the clearest survivals of the PIE system.

> **Pause and consider.** English *un-*, Latin *in-*, and Greek *a-* look quite different. What evidence shows they come from a single source?`,
    },
    {
      title: "The Laryngeals Revisited",
      body: `## Three lost sounds

In HIL 101, we studied the story of the **laryngeals**: Saussure's prediction of 1878 and its confirmation in Hittite in 1927. Here we look at how the laryngeals affected the sounds around them, which is how they are reconstructed in most words.

## Coloring

The three laryngeals, \\**h₁*, \\**h₂*, and \\**h₃*, had different effects on a neighboring \\**e*:

- \\**h₁* left \\**e* unchanged: \\**h₁es-* "be" gives Latin *est* "is," Greek *estí*, Sanskrit *ásti*.
- \\**h₂* colored \\**e* to *a*: \\**h₂ent-* "front" gives Latin *ante*, Greek *antí*, and Hittite *ḫant-*.
- \\**h₃* colored \\**e* to *o*: \\**h₃ed-* "smell" gives Latin *odor*, Greek *ózō* "I smell."

This **coloring** explained why some roots had *a* or *o* where the normal pattern of the protolanguage, as we will see, predicted *e*.

## Lengthening

When a laryngeal followed a vowel and preceded a consonant, it disappeared and **lengthened** the vowel. So \\**peh₂-* "protect" gives Latin *pāstor* "shepherd"; \\**dʰeh₁-* "put" gives Greek *-thē-*; \\**deh₃-* "give" gives Latin *dōnum* "gift" and Greek *dí-dō-mi* "I give." The long vowels \\**ā* and \\**ō*, once reconstructed as basic vowels, turn out in many words to be the result of \\**e* plus a laryngeal.

## Greek's triple reflex

Between consonants, the laryngeals often became vowels. In most branches, all three became *a* (in Latin and Greek) or *i* (in Sanskrit). But Greek kept them distinct, as three different vowels: \\**h₁* became *e*, \\**h₂* became *a*, and \\**h₃* became *o*. This **triple reflex** appears in three verbal adjectives:

- *thetós* "placed," from \\**dʰh₁-tó-*;
- *statós* "standing," from \\**sth₂-tó-*;
- *dotós* "given," from \\**dh₃-tó-*.

Sanskrit, by contrast, has *i* in such forms whatever the laryngeal, as in *hitá-* "placed" and *sthitá-* "standing." The Greek evidence, perhaps more than any other, shows that there were three distinct laryngeals.

## Hittite

Hittite preserves \\**h₂* as a consonant, written *ḫ* in most positions, and \\**h₃* in some positions, as in *ḫastāi* "bone" (Greek *ostéon*). Hittite *paḫḫur* "fire" preserves the \\**h₂* of \\**péh₂ur*, lost in Greek *pŷr*. No branch clearly preserves \\**h₁* as a consonant.

## Other traces

Laryngeals left traces in other branches too. In Greek and Armenian, they often produced a vowel at the beginning of words where other languages have none: Greek *anḗr* "man" and Armenian *ayr*, against Sanskrit *nár-*, from \\**h₂nḗr*. This **prothetic vowel** is one of the arguments for the laryngeal theory.

## What were they?

The exact pronunciation of the laryngeals is unknown. The name, from Greek *larynx*, reflects an early guess that they were sounds made in the throat, like the glottal stop or the [h] and pharyngeal sounds of Arabic. \\**h₂* is often thought to have been a sound like [χ] (as in German *Bach*) or a pharyngeal; \\**h₃* may have been rounded. But these are hypotheses, and the laryngeals are reconstructed by their effects, not their sounds.

> **Pause and consider.** Why is Greek's triple reflex such strong evidence for three distinct laryngeals?`,
    },
    {
      title: "The Law of Palatals: How Sanskrit Lost Its Crown",
      body: `## The prestige of Sanskrit

For the first half-century of Indo-European studies, Sanskrit enjoyed great prestige. Because it was attested so early and preserved so much, many scholars assumed that it preserved the original vowel system, in which the vowel *a* was very frequent and *e* and *o* did not exist. Greek and Latin, with their five vowels *a*, *e*, *i*, *o*, *u*, were thought to have split the original *a* into *a*, *e*, and *o*. Schleicher's fable, as we saw in Lesson I, was written on this assumption, with *a* nearly everywhere.

## The puzzle of the palatals

In the 1870s, several scholars noticed a puzzle in Sanskrit. Sanskrit has both velar stops (*k*, *g*) and palatal affricates (*c* [tʃ], *j* [dʒ]), which often correspond to the same PIE consonants. Before an *a*, Sanskrit sometimes has *k* and sometimes *c*. Why?

The answer, discovered independently by several scholars around 1877 and 1878, including **Hermann Collitz**, **Vilhelm Thomsen**, **Esaias Tegnér**, **Johannes Schmidt**, and, as some accounts emphasize, **Karl Verner**, was this: Sanskrit has *c* where the other languages have *e*, and *k* where they have *o* or *a*. For example:

- Sanskrit *ca* "and" corresponds to Latin *-que* and Greek *te*, with *e*;
- Sanskrit *cakrá-* "wheel" corresponds to Greek *kúklos*, as we will see; its first consonant, *c*, stood before an original *e*, its second, *k*, before a consonant.

## The conclusion

The only explanation was that Sanskrit had once had the vowel *e*, before which velars were palatalized to *c* and *j*, exactly as Latin [k] before *e* and *i* became Italian [tʃ] and French [s], and as Old English [k] became [tʃ], as we saw in HIL 101. Only **afterward** did Sanskrit merge *e* and *o* with *a*. The palatal consonants were a fossil of the lost vowel.

This is the **Law of Palatals**. It proved that the Greek and Latin vowel system was closer to the original than the Sanskrit, and that Sanskrit, far from preserving the protolanguage unchanged, had innovated in its vowels.

## Sanskrit's fall from the throne

The Law of Palatals was a turning point. It showed that no single daughter language could be taken as a model of the protolanguage, and that each must be judged branch by branch, sound by sound. Sanskrit remained crucial for reconstruction, preserving the voiced aspirates, much of the verbal and nominal morphology, and the syllabic \\**r̥*; but in its vowels, Greek proved more faithful. This principle—that every branch is archaic in some respects and innovative in others—is fundamental to the comparative method.

## Internal reconstruction at work

The Law of Palatals is also a fine example of **internal reconstruction**, which we studied in HIL 101. An alternation within Sanskrit (*k* versus *c* before the same vowel *a*) could be explained only by positing an earlier difference in the following vowel, a difference that had disappeared but left traces in the consonants. Saussure's laryngeal hypothesis, which appeared in the same years, used a similar logic.

> **Pause and consider.** Why was the Law of Palatals so damaging to the idea that Sanskrit preserved the original Indo-European vowels?`,
    },
    {
      title: "Ablaut",
      body: `## Sing, sang, sung

English speakers know that the vowel of a verb often changes to show tense: *sing*, *sang*, *sung*; *ride*, *rode*, *ridden*; *drive*, *drove*, *driven*. These alternations are not irregularities created by English. They continue a system of vowel alternation that goes back to Proto-Indo-European, called **ablaut** (a German term introduced by Jacob Grimm) or **vowel gradation**.

## The grades

In Proto-Indo-European, most roots contained the vowel \\**e*. But depending on the form of the word, this vowel could appear in different **grades**:

- the **e-grade**, with \\**e*;
- the **o-grade**, with \\**o*;
- the **zero-grade**, with no vowel at all;
- and, less commonly, the **lengthened grades**, with \\**ē* or \\**ō*.

For example, the root \\**sengʷʰ-* "sing" appears in English *sing* (e-grade), *sang* (o-grade), and *sung* (zero-grade, with the syllabic \\**n̥* becoming Germanic *un*). The noun *song* has the o-grade.

## Greek and Latin

Ablaut is especially clear in Greek. The verb *leípō* "I leave" (e-grade, \\**leykʷ-*) has the perfect *léloipa* "I have left" (o-grade, \\**loykʷ-*) and the aorist *élipon* "I left" (zero-grade, \\**likʷ-*). In Latin, *tegō* "I cover" has e-grade, *toga* "garment, covering" o-grade. The root \\**ǵenh₁-* "beget, be born" appears in Latin *genus* "kind," Greek *génos* "race," English *kin* (from the o-grade or zero-grade), and Sanskrit *jána-* "person."

## The foot

The word for **foot** shows ablaut across the family:

- Sanskrit *pád-*, Latin *ped-* (as in *pedis* "of the foot"), from the e-grade \\**ped-*;
- Greek *pod-* (as in *podós*, whence *podiatry*), from the o-grade \\**pod-*;
- English *foot*, Old English *fōt*, from the lengthened o-grade \\**pōd-*;
- Latin *pēs* "foot" in the nominative, from the lengthened e-grade.

## What controlled ablaut?

Why did roots vary in this way? The details are complex, and not fully understood. In part, the grades were connected with the position of the **accent**: the e-grade typically appeared when the root was accented, the zero-grade when the accent fell elsewhere. For example, Sanskrit *éti* "goes" (e-grade, accented root) contrasts with *imás* "we go" (zero-grade, accented ending), from the root \\**h₁ey-*. The o-grade appeared in certain formations, such as the perfect tense and some nouns. But the system had become partly grammaticalized by the time of the protolanguage, and the original conditions can no longer be fully recovered.

## Ablaut in English today

English preserves ablaut not only in its strong verbs but in related words: *ride* / *road*, *bind* / *band* / *bond*, *drink* / *drench*, *sit* / *seat* / *set*. Speakers no longer perceive these as related, but they are fossils of a system more than five thousand years old.

> **Pause and consider.** List three English verbs with ablaut in their past tenses. Can you find a related noun with a different vowel?`,
    },
    {
      title: "The Accent",
      body: `## A pitch accent

Proto-Indo-European had an **accent** that could fall on any syllable of a word and could move from one syllable to another in different forms of the same word. Most scholars believe that it was primarily a **pitch accent**, marked by a higher tone on the accented syllable, rather than the **stress accent** of English, which uses loudness and length.

## The evidence

The evidence for the accent comes mainly from **Vedic Sanskrit** and **Greek**, which both marked accent in writing. Vedic texts were transmitted with accent marks, and Greek grammarians of the Hellenistic period devised the acute, grave, and circumflex accents, which are still printed in editions of ancient Greek. Remarkably, Sanskrit and Greek often agree on the position of the accent:

- Sanskrit *pitā́*, Greek *patḗr* "father": accent on the final syllable;
- Sanskrit *bhárāmi*, Greek *phérō* "I carry": accent on the first syllable;
- Sanskrit *padás*, Greek *podós* "of the foot": accent on the ending.

Such agreements show that the accent goes back to the protolanguage.

## Other branches

Other branches provide indirect evidence. As we saw in HIL 101, **Verner's Law** shows that the Germanic consonant shift was affected by the position of the PIE accent before Germanic fixed its stress on the first syllable: Gothic *brōþar* "brother" (accent on the root) has *þ*, while *fadar* "father" (accent originally on the ending) has *d*. **Balto-Slavic** languages, especially **Lithuanian** and some Slavic languages such as Serbo-Croatian, preserve systems of mobile pitch accent that are thought to continue features of the PIE accent, though with many changes.

## Fixed accents

Many branches later fixed their accent on a particular syllable: Germanic and Celtic on the first syllable; Latin according to the length of the second-to-last syllable; Armenian on the final syllable. These changes had large consequences, as we saw in HIL 101 with Germanic initial stress and the weakening of endings.

## Accent and ablaut

As we saw on the previous page, the accent was connected with **ablaut**: syllables lacking the accent often appeared in the zero-grade. Scholars have reconstructed **accent-ablaut classes**, patterns in which the accent and the vowel grade shifted together across the forms of a word. The details of these classes are a central topic of advanced Indo-European studies.

## Poetry and accent

The PIE accent also connects with poetry. Vedic and Greek meters are based not on accent but on **syllable length**, and some scholars, such as **Antoine Meillet**, argued that the two metrical systems descend from a common Indo-European meter based on syllable counts and quantity. We will return to Indo-European poetry in Lesson IV.

> **Pause and consider.** Why is the agreement of Sanskrit and Greek on the position of the accent such strong evidence?`,
    },
    {
      title: "The Shape of a Root",
      body: `## Roots, suffixes, endings

Proto-Indo-European words were built from three kinds of elements:

- a **root**, carrying the basic meaning;
- one or more **suffixes**, deriving new stems;
- an **ending**, marking grammatical categories such as case or person.

For example, the Greek word *génos* "race, kind" consists of the root \\**ǵenh₁-* "beget," a suffix \\**-es-* / \\**-os-*, and an ending. Latin *genus*, *generis* "kind" has the same structure.

## The canonical root

Most PIE roots had the shape **CeC**: a consonant, the vowel \\**e* (subject to ablaut), and a consonant. Examples include \\**sed-* "sit" (English *sit*, Latin *sedēre*), \\**ped-* "foot," and \\**bʰer-* "carry" (English *bear*, Latin *ferō*, Greek *phérō*, Sanskrit *bhárāmi*). Roots could be extended by additional consonants, giving shapes such as **CCeC** (\\**trep-* "turn") or **CeCC** (\\**derḱ-* "see," Greek *dérkomai*). The French linguist **Émile Benveniste**, in *Origines de la formation des noms en indo-européen* (1935), proposed an influential theory of root structure.

## Constraints

PIE roots obeyed certain **constraints** on which consonants could co-occur:

- a root could not contain two plain voiced stops: there are no roots like \\**deg-* or \\**bed-*;
- a root could not combine a voiceless stop with a voiced aspirate: no \\**teg̑ʰ-* or \\**dʰek-*.

As we saw, the glottalic theory offers one explanation for the first constraint; others have been proposed. Such constraints are common in the world's languages, and help confirm that the reconstructed roots form a coherent system.

## The s-mobile

Some roots appear in some languages with an initial *s-* and in others without it, a phenomenon called **s-mobile** ("movable s"). For example, the root meaning "cover" appears as Greek *stégō* "I cover" and *tégos* "roof," Latin *tegō* "I cover," and English *thatch* (from Germanic, without *s*). The root meaning "look" appears as Latin *speciō* and Sanskrit *spaś-* "spy," but also Sanskrit *páśyati* "sees," without *s*. The origin of s-mobile is not understood.

## The thematic vowel

Many verbs and nouns were formed with a **thematic vowel**, \\**e* or \\**o*, between the root and the ending: \\**bʰér-e-ti* "carries" (Sanskrit *bhárati*). Others, called **athematic**, attached the ending directly to the root: \\**h₁és-ti* "is" (Sanskrit *ásti*). As we will see in Lesson III, the athematic type is thought to be older, and the thematic type spread at its expense in the daughter languages.

## Building words

From a single root, Proto-Indo-European could build many words. The root \\**ǵneh₃-* "know" gave verbs (Greek *gignṓskō*, Latin *nōscō*, from older *gnōscō*, English *know*), nouns (Greek *gnôsis*, Latin *nōtiō*), and adjectives (Latin *nōbilis* "knowable, noble"; *ignōtus* "unknown," with the negative prefix). English has inherited the root (*know*, *can*, *ken*) and borrowed its derivatives from Greek and Latin (*gnostic*, *notion*, *noble*, *ignorant*, *diagnosis*), so that dozens of English words go back to the same PIE root.

> **Pause and consider.** English *know* and borrowed *noble* and *diagnosis* come from the same root. Which is inherited, and which borrowed? How can you tell?`,
    },
    {
      title: "A Sample of Roots",
      body: `## Words across the family

Here is a small sample of well-established PIE roots, with some of their reflexes. In each case, English has both an **inherited** word, which has undergone Grimm's Law and the other changes of Germanic, and **borrowed** words from Latin or Greek, which have not.

## Water

PIE \\**wódr̥* / \\**wédōr* "water," a noun with an unusual alternation between *r* and *n* in its stem (\\**wédn-*), gives:

- Hittite *wātar*, as we saw in Lesson I;
- Greek *hýdōr* (genitive *hýdatos*, from the *n*-stem), whence *hydrogen*, *hydraulic*;
- Sanskrit *udán-*;
- Old Church Slavonic *voda*, Russian *voda*, whence *vodka* "little water";
- English *water*, German *Wasser*, and, with the *n*-stem, perhaps English *otter* (the "water animal") and Latin *unda* "wave," whence *undulate*.

## Know

PIE \\**ǵneh₃-* "know," as we saw, gives English *know*, Latin *(g)nōscō*, Greek *gignṓskō*, Sanskrit *jñā-*, and Russian *znat'*.

## Come

PIE \\**gʷem-* "come" gives Sanskrit *gam-*, Greek *baínō* "I go" (with *b* from \\**gʷ*), Latin *veniō* "I come" (with *v* from \\**gʷ*), and English *come*. Latin *veniō* is the source of English *advent*, *convent*, *event*, and *invent*. This root shows the varied reflexes of the labiovelars.

## Mind

PIE \\**men-* "think" gives Sanskrit *mánas* "mind" (and *mantra*), Greek *ménos* "spirit, force," Latin *mēns* "mind" (whence *mental*), and English *mind*. The o-grade appears in Latin *moneō* "I remind, warn," whence *admonish* and *monitor*.

## Star

PIE \\**h₂stḗr* "star" gives Sanskrit *stṛ-*, Greek *astḗr* (with a prothetic vowel from the laryngeal), Latin *stēlla* (from \\**stēr-lā*), and English *star*. Greek *astḗr* gives *asterisk*, the "little star" that marks reconstructed forms.

## Heart

PIE \\**ḱérd* "heart" gives Greek *kardía*, Latin *cor* (genitive *cordis*), whence *cordial* and *core*, Hittite *kard-*, Lithuanian *širdìs*, Russian *serdce*, and English *heart*. Here the palatal \\**ḱ* appears as *k* in the centum languages (Greek, Latin, Hittite), as *h* in Germanic by Grimm's Law, and as a sibilant in the satem languages (Lithuanian *š*, Russian *s*).

## Night and new

As we saw in Lesson I, PIE \\**nókʷts* "night" and \\**néwos* "new" are well attested. From the latter come English *new*, Latin *novus* (whence *novel*, *novice*, *renovate*), Greek *né(w)os* (whence *neon*, *neophyte*), and Sanskrit *náva-*.

## A web of words

Such examples show that English vocabulary, through inheritance and borrowing, is a web woven from Indo-European roots. Watkins's *American Heritage Dictionary of Indo-European Roots* allows English speakers to trace these connections for thousands of words.

> **Pause and consider.** Choose an English word borrowed from Latin or Greek and find its native English cognate. What sound changes separate them?`,
    },
    {
      title: "Grimm's Law in Your Own Vocabulary",
      body: `## Two words for one thing

Because English has inherited words from Proto-Indo-European and borrowed many more from Latin and Greek, English speakers carry a demonstration of the comparative method in their everyday vocabulary. Many English nouns have a native form and a related adjective or technical term borrowed from Latin or Greek. The native word has passed through Grimm's Law; the borrowed word has not.

## Pairs

| Native English | Borrowed from Latin or Greek | PIE |
|---|---|---|
| *father* | *paternal* | \\**ph₂tḗr* |
| *foot* | *pedal*, *podiatry* | \\**ped-* / \\**pod-* |
| *fish* | *piscine* | \\**peysk-* |
| *heart* | *cardiac*, *cordial* | \\**ḱérd* |
| *horn* | *cornucopia*, *unicorn* | \\**ḱer-* |
| *hound* | *canine* | \\**ḱwon-* |
| *tooth* | *dental*, *orthodontist* | \\**h₃dónt-* |
| *two* | *dual*, *duet* | \\**dwóh₁* |
| *three* | *trio*, *triple* | \\**tréyes* |
| *knee* | *genuflect* | \\**ǵónu* |
| *brother* | *fraternal* | \\**bʰréh₂tēr* |
| *bear* (carry) | *transfer*, *metaphor* | \\**bʰer-* |
| *door* | *forum*, *thyroid* | \\**dʰwer-* |

## Reading the table

Read down the columns, and the correspondences of Grimm's Law appear:

- PIE \\**p* appears as *p* in the Latin and Greek borrowings and as *f* in the native words: *paternal* / *father*, *pedal* / *foot*, *piscine* / *fish*.
- PIE \\**ḱ* (or \\**k*) appears as *c* [k] in the borrowings and as *h* in the native words: *cardiac* / *heart*, *cornucopia* / *horn*, *canine* / *hound*.
- PIE \\**d* appears as *d* in the borrowings and as *t* in the native words: *dental* / *tooth*, *dual* / *two*.
- PIE \\**t* appears as *t* in the borrowings and as *th* in the native words: *trio* / *three*.
- PIE \\**ǵ* appears as *g* in the borrowings and as *k* (now silent) in the native words: *genuflect* / *knee*. The *k* of *knee* was pronounced in Old and Middle English.
- PIE \\**bʰ* appears as Latin *f* and Greek *ph*, but as Germanic *b*: *fraternal* / *brother*, *transfer* and *metaphor* / *bear*.
- PIE \\**dʰ* appears as Latin *f* and Greek *th*, but as Germanic *d*: *forum* (related to Latin *forīs* "out of doors") and *thyroid* (named from Greek *thyreós*, a large shield shaped like a door, from *thýra* "door") / *door*.

## A note on hound

The table also shows meaning change. PIE \\**ḱwon-* meant "dog." English *hound*, from the same root with a suffix, once meant any dog, but, as we saw in HIL 101, narrowed to a hunting dog when *dog* broadened.

## An exercise in method

This table is not a list of coincidences. Each row is a pair of cognates, related through a common ancestor, and each column of correspondences recurs in many other words. A student who has learned these pairs has learned, in miniature, what Rask and Grimm discovered: that the sounds of related languages correspond regularly, and that the regularity reveals their common origin.

> **Pause and consider.** Find another pair like those in the table. Which of Grimm's correspondences does it show?`,
    },
    {
      title: "Counting in Proto-Indo-European",
      body: `## The numerals

The numerals from one to ten are among the best-reconstructed words of Proto-Indo-European, because they are basic, frequent, and rarely borrowed. They are traditionally reconstructed as:

| | PIE | Sanskrit | Greek | Latin | English |
|---|---|---|---|---|---|
| 1 | \\**óynos* | (*éka-*) | *oínē* "ace" | *ūnus* | *one* |
| 2 | \\**dwóh₁* | *dvá* | *dýo* | *duo* | *two* |
| 3 | \\**tréyes* | *tráyas* | *treîs* | *trēs* | *three* |
| 4 | \\**kʷetwóres* | *catvā́ras* | *téttares* | *quattuor* | *four* |
| 5 | \\**pénkʷe* | *páñca* | *pénte* | *quīnque* | *five* |
| 6 | \\**swéḱs* | *ṣáṭ* | *héx* | *sex* | *six* |
| 7 | \\**septḿ̥* | *saptá* | *heptá* | *septem* | *seven* |
| 8 | \\**oḱtṓ(w)* | *aṣṭā́* | *oktṓ* | *octō* | *eight* |
| 9 | \\**h₁néwn̥* | *náva* | *ennéa* | *novem* | *nine* |
| 10 | \\**déḱm̥* | *dáśa* | *déka* | *decem* | *ten* |

## One

The word for "one" varies across the branches. Latin *ūnus*, Gothic *ains*, Old Irish *óen*, and Old Prussian *ains* point to \\**óynos*; Greek preserves it only in *oínē*, "the ace" on a die. But Sanskrit *éka-* and Greek *heîs* (from \\**sem-*, as in English *same* and Latin *semel* "once") use different roots. The word for "one" may have been variable already in the protolanguage.

## Five

PIE \\**pénkʷe* shows the labiovelar \\**kʷ*. In Latin, the initial \\**p* was assimilated to the following \\**kʷ*, giving *quīnque*. In Greek, the labiovelar became *t* before *e*, giving *pénte* (whence *pentagon*). In Germanic, \\**p* became *f* by Grimm's Law and the labiovelar merged with the labial: English *five*. In Celtic, which lost initial \\**p* but in some languages turned \\**kʷ* into *p*, the result is Old Irish *cóic* but Welsh *pump*.

## Eight

The ending of \\**oḱtṓ(w)* looks like a **dual**, the grammatical number for pairs, which we will study in Lesson III. Some scholars have suggested that "eight" was originally "two fours," perhaps from counting the four fingers of each hand without the thumbs. This is speculative, but it is supported by the possibility that \\**néwn̥* "nine" is related to \\**néwos* "new": nine would then be the "new" number after the second group of four. Many scholars are skeptical of both ideas.

## Hundred and thousand

PIE \\**ḱm̥tóm* "hundred" may come from \\**dḱm̥tóm*, a derivative of \\**déḱm̥* "ten," meaning something like "a decade (of decades)." For "thousand," however, there is no common Indo-European word. Sanskrit has *sahásra-*, Greek *khílioi*, and Latin *mīlle*, all unrelated. Germanic \\**þūsundī* (English *thousand*) is shared with Balto-Slavic (Lithuanian *tūkstantis*, Russian *tysjača*), perhaps meaning "swollen hundred," and may be a later innovation in the northern branches. The absence of a common word for "thousand" may suggest that the speakers of PIE rarely needed to count so high, though such arguments from silence must be used with caution.

> **Pause and consider.** Why do numerals provide such good evidence for relationship, and why is the word for "thousand" an exception?`,
    },
    {
      title: "Tracing One Word: Wheel",
      body: `## A test case

To see how all the pieces of reconstruction fit together, let us follow a single word: English ***wheel***.

## The cognates

English *wheel* (Old English *hwēol*) has cognates across the family:

- Greek *kýklos* "circle, wheel" (whence *cycle*, *bicycle*, *encyclopedia*);
- Sanskrit *cakrá-* "wheel" (whence *chakra*);
- Avestan *čaxra-* "wheel";
- Tocharian B *kokale* "wagon";
- Old Norse *hvél* "wheel."

Latin and Celtic use other words (Latin *rota*, whence *rotate*).

## The reconstruction

These forms point to PIE \\**kʷékʷlos* (or \\**kʷékʷlom*). The word is a **reduplicated** form, repeating the initial consonant, of the root \\**kʷel-* "turn, move around," which also appears in Greek *pélomai* "I move, become," Latin *colō* "I cultivate, inhabit" (whence *colony* and *culture*), and Sanskrit *cárati* "moves, wanders." A wheel, then, was "the turner" or "the thing that goes round and round."

## The sound changes

Each daughter form is explained by regular changes:

- **Greek**: labiovelars became *k* next to *u*, so both consonants of *kýklos* are *k*. (Elsewhere, Greek labiovelars became *p* or *t*, as in *pélomai* and *pénte*.)
- **Sanskrit**: labiovelars lost their rounding, becoming *k*; then, by the **Law of Palatals**, the first *k*, which stood before PIE \\**e*, became *c*, while the second, before a consonant, remained *k*: *cakrá-*. Sanskrit also changed *l* to *r*. The palatal *c* in *cakrá-* is one of the clearest proofs that Sanskrit once had \\**e*.
- **Germanic**: by Grimm's Law, \\**kʷ* became \\**hw*, spelled *hw* in Old English and *wh* in Modern English: *hwēol* > *wheel*. The second labiovelar, between vowels, developed differently, and the word was contracted. (Many speakers today pronounce *wh* as plain [w], a merger we noted in HIL 101.)

## The cultural question

The word for wheel is important for another reason. As we saw in HIL 101, the method of **linguistic paleontology** reasons that if a word can be reconstructed for the protolanguage, its speakers knew the thing it named. If Proto-Indo-European had \\**kʷékʷlos* "wheel," as well as other words for wheeled vehicles, such as \\**h₂eḱs-* "axle" (Latin *axis*, English *axle*) and \\**wéǵʰeti* "conveys by vehicle" (Latin *vehō*, whence *vehicle*, and English *weigh* and *wagon*), then its speakers knew wheeled vehicles.

Wheeled vehicles were invented around 4000 to 3500 BCE, according to current archaeological evidence. If so, Proto-Indo-European, at least in its later stages, was spoken after that date. This argument, developed by **David Anthony** and others, is central to the homeland debate in Lesson V.

## Objections

The argument has been challenged. Some scholars argue that the wheel vocabulary could have been created from existing roots independently in several branches, or spread by borrowing after the branches had separated. The reduplicated form \\**kʷékʷlos*, they note, could have been coined more than once. Defenders reply that the agreement of the forms is too precise for independent creation. Notably, Anatolian lacks a cognate of \\**kʷékʷlos*, which some take as evidence that the wheel vocabulary developed after Anatolian separated.

> **Pause and consider.** How does the Sanskrit *c* in *cakrá-* show that Sanskrit once had the vowel *e*?`,
    },
    {
      title: "What Is a Reconstruction?",
      body: `## Formula or language?

What exactly is a reconstructed form like \\**kʷékʷlos*? Two broad views have been held.

## The formulaic view

On one view, associated especially with the French linguist **Antoine Meillet**, a reconstructed form is a **formula**: a compact way of summarizing the correspondences among the daughter languages. To write \\**kʷ* is to say, in shorthand, that Sanskrit *k* or *c*, Greek *p*, *t*, or *k*, Latin *qu*, and Germanic *hw* correspond in a set of words. On this view, we should not claim to know how the protolanguage was actually pronounced. Meillet argued that the comparative method yields a system of correspondences, not a real language.

## The realist view

On the other view, a reconstruction is a hypothesis about a **real language**, spoken by real people, with real sounds and words. On this view, reconstructions should be phonetically plausible, should form a system like those of known languages, and can be tested, as the laryngeal theory was tested by Hittite. Most modern Indo-Europeanists lean toward the realist view, while acknowledging that some details, such as the pronunciation of the laryngeals, are beyond recovery.

## The problem of time and space

Even on the realist view, reconstructed Proto-Indo-European is an idealization. The protolanguage, like every real language, must have had **dialects** and must have **changed over time**. The ancestor of Anatolian may have separated centuries before the ancestor of Greek or Indo-Iranian. A reconstruction that combines evidence from all branches may therefore combine features that never coexisted in a single dialect at a single time. Some scholars speak of **stages** of Proto-Indo-European, such as an early stage before the separation of Anatolian and a later stage before the separation of the remaining branches.

## The limits of the tree

As we saw in Lesson I and in HIL 101, the family tree is a simplification. Branches remained in contact after separating, and innovations spread across branch boundaries. A reconstruction based purely on the tree model may miss these complexities.

## Why reconstruction still matters

Despite these limits, the reconstruction of Proto-Indo-European is one of the great achievements of the human sciences. From the words of living and recorded languages, scholars have recovered thousands of words and much of the grammar of a language spoken more than five thousand years ago by people who left no writing. As the laryngeal theory and the Law of Palatals show, these reconstructions are not idle guesses: they make predictions, explain puzzles, and have been confirmed by new evidence.

## Humility

At the same time, reconstruction teaches humility. We can recover a protolanguage only as a skeleton, never the living language with its idioms, jokes, songs, and conversations. As the many versions of Schleicher's fable show, our picture of it changes as knowledge grows. "For now we see through a glass, darkly" (1 Corinthians 13:12): the apostle's words apply, in their small way, to the reconstructed past.

> **Pause and consider.** Is Proto-Indo-European a real language or a formula? What would count as evidence for one view or the other?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Ablaut

> English *sing*, *sang*, *sung*, *song*; Greek *leípō*, *léloipa*, *élipon*

**Questions**

1. Identify the e-grade, o-grade, and zero-grade in each set.
2. What does this show about the age of English "irregular" verbs?

## 2. The laryngeals

> Greek *thetós*, *statós*, *dotós*; Sanskrit *hitá-*, *sthitá-*

**Questions**

1. Which laryngeal does each Greek vowel reflect?
2. Why is Greek more informative than Sanskrit here?

## 3. The Law of Palatals

> Sanskrit *ca* : Latin *-que*, Greek *te*; Sanskrit *cakrá-* : Greek *kýklos*

**Questions**

1. Explain why Sanskrit has *c* in *ca* and in the first syllable of *cakrá-*.
2. What did this show about the Sanskrit vowel system?

## 4. Wheel

> PIE \\**kʷékʷlos*: Greek *kýklos*, Sanskrit *cakrá-*, Old English *hwēol*, Tocharian B *kokale*

**Questions**

1. Explain the development of each form.
2. What does the word suggest about the date of Proto-Indo-European, and what are the objections?

## Drawing the threads together

In a paragraph, explain how the sounds and roots of Proto-Indo-European are reconstructed, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Indo-European Language and Culture: An Introduction", author: "Benjamin W. Fortson IV", publisher: "Wiley-Blackwell", year: "2nd ed., 2010", note: "Read the chapter on phonology, including the laryngeals." },
    { kind: "book", title: "The American Heritage Dictionary of Indo-European Roots", author: "Calvert Watkins", publisher: "Houghton Mifflin Harcourt", year: "3rd ed., 2011", note: "Read the introduction and look up five English words." },
    { kind: "book", title: "The Oxford Introduction to Proto-Indo-European and the Proto-Indo-European World", author: "J. P. Mallory and D. Q. Adams", publisher: "Oxford University Press", year: "2006", note: "Read the chapters on phonology and on numerals." },
  ],
  media: [
    { kind: "book", title: "Indo-European and the Indo-Europeans", author: "Thomas V. Gamkrelidze and Vjačeslav V. Ivanov, trans. Johanna Nichols", publisher: "Mouton de Gruyter", year: "1995", note: "Consult the opening chapters on the glottalic theory." },
    { kind: "book", title: "Mémoire sur le système primitif des voyelles dans les langues indo-européennes", author: "Ferdinand de Saussure", publisher: "B. G. Teubner", year: "1879", note: "In the public domain. Look at the opening pages to see how Saussure framed the problem." },
  ],
  questions: [
    {
      prompt: "Which branch keeps the PIE voiced aspirates as voiced aspirates?",
      choices: ["Greek", "Indo-Aryan (Sanskrit)", "Latin", "Germanic"],
      answer: 1,
      explanation: "Greek has voiceless aspirates; Germanic plain voiced stops.",
    },
    {
      prompt: "What is Grassmann's Law?",
      choices: [
        "A Germanic consonant shift",
        "The loss of aspiration in the first of two aspirated consonants in successive syllables, in Sanskrit and Greek",
        "A vowel shift",
        "The rule of accent",
      ],
      answer: 1,
      explanation: "Greek thríks, genitive trikhós.",
    },
    {
      prompt: "What does the glottalic theory propose?",
      choices: [
        "That PIE had no stops",
        "That the traditional plain voiced stops were glottalized (ejective) stops",
        "That PIE had tones",
        "That laryngeals did not exist",
      ],
      answer: 1,
      explanation: "Proposed in 1973 by Gamkrelidze and Ivanov and by Hopper.",
    },
    {
      prompt: "English un-, Latin in-, and Greek a- all come from what?",
      choices: [
        "Borrowing",
        "PIE syllabic *n̥-",
        "Latin",
        "A laryngeal",
      ],
      answer: 1,
      explanation: "Brugmann identified the syllabic nasals in 1876.",
    },
    {
      prompt: "What did *h₂ do to a neighboring *e?",
      choices: ["Nothing", "Colored it to a", "Colored it to o", "Deleted it"],
      answer: 1,
      explanation: "*h₂ent- > Latin ante; *h₃ colored e to o.",
    },
    {
      prompt: "What did the Law of Palatals show?",
      choices: [
        "That Sanskrit preserves the original vowels",
        "That Sanskrit once had e, which palatalized preceding velars before merging with a",
        "That Greek had no e",
        "That PIE had no velars",
      ],
      answer: 1,
      explanation: "Sanskrit ca corresponds to Latin -que.",
    },
    {
      prompt: "In sing, sang, sung, which is the zero-grade?",
      choices: ["Sing", "Sang", "Sung", "Song"],
      answer: 2,
      explanation: "Germanic un comes from syllabic *n̥.",
    },
    {
      prompt: "Which languages provide the main evidence for the position of the PIE accent?",
      choices: ["Latin and Celtic", "Vedic Sanskrit and Greek", "Hittite and Tocharian", "Gothic and Armenian"],
      answer: 1,
      explanation: "Both marked the accent, and they often agree.",
    },
    {
      prompt: "Why is there no common PIE word for \"thousand\"?",
      choices: [
        "Because PIE had no numerals",
        "Because the branches use unrelated words; the Germanic and Balto-Slavic word may be a later northern innovation",
        "Because it was borrowed from Latin",
        "Because thousand was a sacred number",
      ],
      answer: 1,
      explanation: "Sanskrit sahásra-, Greek khílioi, Latin mīlle are unrelated.",
    },
    {
      prompt: "Why is the reconstruction *kʷékʷlos \"wheel\" important for the homeland debate?",
      choices: [
        "It shows PIE speakers lived in India",
        "It suggests PIE speakers knew wheeled vehicles, which were invented about 4000–3500 BCE",
        "It shows PIE was spoken in Anatolia",
        "It proves the glottalic theory",
      ],
      answer: 1,
      explanation: "The argument has critics, who suggest independent coinage or borrowing.",
    },
  ],
  reflection:
    "Reconstruction recovers the sounds and roots of a language spoken more than five thousand years ago. In 500–800 words, explain how ablaut, the laryngeals, and the Law of Palatals were discovered, and what each reveals, and reflect on whether a reconstructed protolanguage should be considered a real language or a formula.",
};
