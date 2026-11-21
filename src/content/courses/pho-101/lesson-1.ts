import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "The Vocal Tract and the Study of Speech",
  summary:
    "What phonetics studies; phoneticians of ancient India, the Arab world, and medieval Iceland; why spelling is not sound; Sweet, Bell, and the birth of the International Phonetic Alphabet; the three systems of the vocal tract; breathing for speech; the larynx and voicing; the velum and the nasal cavity; the tongue, lips, and palate; how phoneticians observe speech; broad and narrow transcription; and how fast speech really is.",
  pages: [
    {
      title: "What Is Phonetics?",
      body: `## The science of speech sounds

**Phonetics** is the scientific study of the sounds of human speech: how they are produced, how they travel through the air, and how they are perceived. It is the most physical branch of linguistics, standing at the meeting point of language, anatomy, physics, and psychology.

Phonetics has three main branches:

- **Articulatory phonetics** studies how speech sounds are produced by the organs of the vocal tract: the lungs, larynx, tongue, lips, and others. It is the subject of this course.
- **Acoustic phonetics** studies the physical properties of speech sounds as sound waves, using instruments such as the spectrogram. It is the subject of PHO 110.
- **Auditory phonetics** (or **speech perception**) studies how listeners hear and interpret speech sounds.

## Phonetics and phonology

As we saw in LIN 101, phonetics is distinguished from **phonology**. Phonetics studies speech sounds as physical events, in all their variety. Phonology studies how sounds function in particular languages: which differences of sound distinguish words, and how sounds pattern and alternate. The English sounds at the beginnings of *pin* and *spin* are phonetically different (the first is followed by a puff of air, the second is not), but phonologically they count as the "same" sound in English. Phonetics describes the difference; phonology explains why English speakers do not notice it.

## Why study phonetics?

Phonetics is useful in many fields:

- **Language teaching and learning**: understanding how sounds are made helps learners master new sounds and teachers diagnose errors.
- **Speech and language therapy**: clinicians assess and treat disorders of speech production.
- **Language documentation**: linguists recording endangered languages must transcribe sounds accurately.
- **Speech technology**: speech recognition and synthesis depend on phonetic knowledge.
- **Forensic linguistics**: phoneticians analyze recorded voices in legal cases.
- **Singing and acting**: voice coaches use phonetics to teach accents and healthy voice use.

## Our guides

This course follows **Peter Ladefoged** and **Keith Johnson**, *A Course in Phonetics* (Ladefoged's first edition 1975; 7th edition with Johnson, 2015), the most widely used introduction to the subject. Ladefoged (1925–2006), a British-born phonetician who spent most of his career at the University of California, Los Angeles, recorded and analyzed the sounds of hundreds of languages, many of them in the field. We also use the ***Handbook of the International Phonetic Association*** (1999), which presents the official guide to the International Phonetic Alphabet, with illustrations from many languages.

## The plan

**Lesson I** studies the vocal tract, the history of phonetics, and the principles of transcription. **Lesson II** studies the consonants of English and other languages by their place and manner of articulation. **Lesson III** studies sounds beyond English: other airstream mechanisms, such as clicks and ejectives, and other places and manners. **Lesson IV** studies vowels. **Lesson V** studies syllables, stress, tone, intonation, and the sounds of connected speech.

## A note on practice

Phonetics is learned partly by doing. Throughout this course, you will be asked to make sounds, feel your own articulators, and listen carefully. Find a quiet place, a mirror, and, if possible, recordings of the sounds discussed. The *Handbook* and many university websites provide recordings of the IPA symbols.

> **Pause and consider.** Say *pin* and *spin* with your hand in front of your mouth. Do you feel a difference in the puff of air after the *p*?`,
    },
    {
      title: "Ancient Phoneticians",
      body: `## India

The earliest systematic phoneticians we know of worked in ancient **India**. To preserve the exact pronunciation of the **Vedas**, which were transmitted orally, Indian scholars developed a sophisticated science of speech sounds, recorded in treatises called **Śikṣā** ("instruction") and **Prātiśākhya**, from about the middle of the first millennium BCE. These works classified sounds by their **place** of articulation (*sthāna*) and by the **effort** or manner of their production (*prayatna*), distinguishing voiced from voiceless sounds and aspirated from unaspirated ones.

The order of the Sanskrit alphabet reflects this analysis. The consonants are arranged by place, from the back of the mouth to the front: **velars** (*k*, *kh*, *g*, *gh*, *ṅ*), **palatals** (*c*, *ch*, *j*, *jh*, *ñ*), **retroflexes** (*ṭ*, *ṭh*, *ḍ*, *ḍh*, *ṇ*), **dentals** (*t*, *th*, *d*, *dh*, *n*), and **labials** (*p*, *ph*, *b*, *bh*, *m*). Within each group, the order is the same: voiceless, voiceless aspirated, voiced, voiced aspirated, and nasal. This is essentially the classification used by modern phoneticians. The great grammarian **Pāṇini**, as we saw in HIL 110, built on this tradition.

## The Arab grammarians

In the eighth century CE, the grammarian **Sībawayh**, a Persian who wrote in Arabic, composed *al-Kitāb* ("The Book"), the foundational work of Arabic grammar. It included a detailed description of the sounds of Arabic, classifying them by their places of articulation (*makhārij*, "points of exit") from the throat to the lips, and by features such as voicing and the presence of friction. Arab scholars were especially interested in the correct recitation of the **Qur'an**, which, like the Vedas, was transmitted with great care for exact pronunciation. The science of Qur'anic recitation, ***tajwīd***, preserves a detailed phonetic tradition to this day.

## The Masoretes

Jewish scholars known as the **Masoretes**, working in Tiberias and elsewhere between about the seventh and tenth centuries CE, developed systems of vowel signs and accent marks to record the traditional pronunciation and cantillation of the Hebrew Bible, whose script had originally written only consonants. Their work, like that of the Indian and Arab scholars, arose from the desire to preserve a sacred text exactly as it was spoken.

## The First Grammatical Treatise

In twelfth-century **Iceland**, an anonymous scholar wrote a short work now known as the **First Grammatical Treatise**, proposing improvements to the Latin alphabet for writing Icelandic. To show which sounds needed separate letters, the author used **minimal pairs**, pairs of words that differ in a single sound, a technique that modern phonologists would not develop systematically until the twentieth century.

## Religion and phonetics

It is striking how often the careful study of speech sounds arose from the desire to preserve **sacred texts**: the Vedas, the Qur'an, the Hebrew Bible. When the exact words of a revelation or ritual were believed to matter, the exact sounds mattered too. In Europe, by contrast, phonetics developed later, partly in connection with language teaching, spelling reform, and the education of the deaf.

> **Pause and consider.** Why might the oral transmission of sacred texts have encouraged the development of phonetics?`,
    },
    {
      title: "Spelling Is Not Sound",
      body: `## The problem

Every student of phonetics must learn one lesson early: **letters are not sounds**. Writing systems represent speech only imperfectly, and English spelling is notoriously imperfect.

## English spelling

Consider these facts about English:

- The same letter can represent different sounds: the *a* in *father*, *cat*, *cake*, *all*, and *about*; the *c* in *cat* and *city*; the *th* in *thin* and *this*.
- The same sound can be spelled in different ways: the vowel of *see*, *sea*, *seize*, *people*, *key*, *machine*, and *field*.
- Some letters represent no sound at all: the *k* in *knee*, the *gh* in *night*, the *b* in *doubt*, the *e* at the end of *make*.
- Some sounds have no letter of their own: the vowel of *put*, the final sound of *sing*, the middle consonant of *measure*.

As we saw in HIL 101, English spelling was largely fixed in the fifteenth and sixteenth centuries, before the **Great Vowel Shift** and other changes were complete, and has since been preserved by printing and dictionaries, while pronunciation continued to change.

## Ghoti

A famous joke illustrates the problem: *ghoti* could be pronounced "fish," with *gh* as in *enough*, *o* as in *women*, and *ti* as in *nation*. The joke is often attributed to the playwright **George Bernard Shaw**, a passionate advocate of spelling reform, though there is no good evidence that he invented it. In fact, *ghoti* could never be read as "fish" in English, because *gh* is never pronounced [f] at the beginning of a word, nor *ti* as [ʃ] at the end. The joke shows the irregularity of English spelling, but also that the irregularity has its own rules.

## Other languages

Some writing systems are much more regular than English. Finnish, Spanish, Italian, and Turkish spellings correspond closely to pronunciation. Others, such as French, are irregular in different ways. And some writing systems, such as Chinese characters, represent meaning more than sound. No ordinary writing system, however, provides a complete and consistent record of the sounds of speech.

## The need for a phonetic alphabet

For scientific purposes, then, phoneticians need an alphabet in which each symbol represents one sound, and each sound is represented by one symbol, consistently across all languages. In the nineteenth century, several such alphabets were proposed. **Isaac Pitman** developed a shorthand and a phonetic alphabet for English, and, with **Alexander John Ellis**, a "phonotypic" alphabet in the 1840s. Ellis also made pioneering studies of English pronunciation, past and present. The most successful phonetic alphabet, however, was the one developed by the International Phonetic Association, which we study next.

## Square brackets

In this course, as in all phonetic writing, symbols representing speech sounds are written in **square brackets**: [f] is the sound at the beginning of *fish*. Ordinary spelling is written in *italics*. Thus the word *fish* is pronounced [fɪʃ]. As we will see later in this lesson, slashes, as in /fɪʃ/, are used for phonemic transcriptions, which represent sounds as units of a language's system.

> **Pause and consider.** Find three English words in which the letters *ough* are pronounced differently. What does this show about English spelling?`,
    },
    {
      title: "Sweet, Bell, and the Birth of the IPA",
      body: `## Victorian phoneticians

Modern phonetics took shape in nineteenth-century Britain, Germany, and France. Two British figures were especially important.

**Alexander Melville Bell** (1819–1905), a teacher of elocution and the father of Alexander Graham Bell, the inventor of the telephone, devoted much of his work to teaching the deaf to speak, a profession his son also followed. In *Visible Speech* (1867), Melville Bell devised an alphabet whose symbols depicted the positions of the speech organs: a curve for the tongue, a mark for the lips, a line for voicing. Visible Speech was used to teach deaf students, including by his son, but its unfamiliar symbols were hard to print and learn.

**Henry Sweet** (1845–1912), an Oxford scholar of Old English and phonetics, built on Bell's work in his *Handbook of Phonetics* (1877) and other books. Sweet devised a system called **Broad Romic**, based on the Roman alphabet, for transcribing sounds. He insisted on the importance of phonetics for the study of languages and the teaching of pronunciation. Bernard Shaw, in the preface to *Pygmalion* (1913), wrote that Sweet was in part the model for **Professor Henry Higgins**, the phonetician who teaches the flower-seller Eliza Doolittle to speak like a duchess.

## The International Phonetic Association

In **1886**, a group of language teachers in France, led by **Paul Passy** (1859–1940), founded an association to promote the use of phonetic transcription in teaching foreign languages. The association, which took the name **International Phonetic Association** in 1897, published a journal written entirely in phonetic transcription. The Danish linguist **Otto Jespersen**, whom we met in HIL 101, proposed that the association develop a single alphabet for use in all languages.

## The alphabet

The first version of the **International Phonetic Alphabet** (IPA) appeared in **1888**. Its principles, which remain in force, include:

- **one symbol for each distinctive sound**: where two sounds can distinguish words in any language, they should have different symbols;
- **the same symbol for the same sound** in every language;
- symbols based as far as possible on the **Roman alphabet**, with new letters made by modifying Roman letters (such as [ŋ] from *n*, [ʃ] from a long *s*) or borrowing from Greek (such as [θ] and [β]);
- **diacritics**, small marks added to letters, for finer distinctions.

## Revisions

The IPA has been revised many times as phoneticians have learned more about the sounds of the world's languages. A major revision was agreed at a convention in **Kiel**, Germany, in **1989**, and the ***Handbook of the International Phonetic Association*** was published in 1999. The chart has been updated several times since, most recently in 2020. It is now used by linguists, language teachers, dictionary makers, speech therapists, and singers around the world.

## Alternatives

The IPA is not the only system in use. American linguists, especially those working on Native American languages, long used a somewhat different set of symbols, the **Americanist** tradition, using, for example, [š] where the IPA uses [ʃ], and [y] where the IPA uses [j]. Many textbooks and dictionaries also use their own respelling systems. But the IPA is the international standard, and it is the system used in this course.

> **Pause and consider.** Why do you think Melville Bell's iconic symbols failed to catch on, while the Roman-based IPA succeeded?`,
    },
    {
      title: "The Vocal Tract: An Overview",
      body: `## Borrowed organs

Humans have no organs whose only function is speech. The organs we use to speak evolved primarily for other purposes: the lungs for breathing, the larynx for protecting the airway, the tongue and teeth for eating. Speech is, in this sense, an "overlaid" function, using organs adapted for survival. Yet the human vocal tract also shows features, such as the low position of the larynx in adults, that some scientists think were shaped in part by the advantages of speech.

## Three systems

Phoneticians usually divide speech production into three systems:

1. The **respiratory** system (the **lungs** and the muscles of breathing) provides the **airstream**, the flow of air on which most speech sounds are made.
2. The **phonatory** system (the **larynx**, containing the **vocal folds**) modifies the airstream, producing **voicing** and other effects.
3. The **articulatory** system (the **pharynx**, **mouth**, and **nose**, with the **tongue**, **lips**, **velum**, and other organs) shapes the airstream into particular sounds.

## The vocal tract

The term **vocal tract** refers to the air passages above the larynx: the **pharynx** (the throat), the **oral cavity** (the mouth), and the **nasal cavity** (the nose). In an adult man, the vocal tract is about 17 centimeters long from the vocal folds to the lips; in women and children, it is shorter. Its shape can be changed rapidly by moving the tongue, lips, jaw, and velum, and these changes produce the different sounds of speech.

## A source and a filter

A useful way of thinking about speech production, developed especially by the Swedish scientist **Gunnar Fant** in *Acoustic Theory of Speech Production* (1960), is the **source–filter** model. The **source** of sound is usually the vibration of the vocal folds, which produces a buzzing sound. The vocal tract acts as a **filter**, shaping that sound by emphasizing some frequencies and dampening others, depending on its shape. When you change the shape of your mouth while keeping your vocal folds vibrating, you change the vowel. We will study this model in detail in PHO 110.

## A map of the mouth

To describe speech sounds, phoneticians need precise names for the parts of the vocal tract. Over the next pages, we will travel upward from the lungs, through the larynx, to the pharynx, nose, and mouth, naming the organs and describing how each contributes to speech.

## The diagram

Phonetics textbooks traditionally show the vocal tract in a **midsagittal section**, a view of the head sliced vertically down the middle from front to back, seen from the side. In such a diagram, the lips are on one side, the throat on the other, and the tongue appears as a large mass in the middle, with the palate above it. Students should learn to draw and label such a diagram, since it is the basic map of articulatory phonetics. The *Course in Phonetics* and the *Handbook* both include clear diagrams.

> **Pause and consider.** Say "ah" and then, without stopping your voice, slowly round your lips into "oo." What changed, and what stayed the same?`,
    },
    {
      title: "Was the Vocal Tract Shaped for Speech?",
      body: `## A low larynx

In newborn babies, as in chimpanzees and most other mammals, the larynx sits high in the throat, so that the epiglottis can touch the velum. This allows an infant to breathe and swallow almost at the same time. During the first years of life, the human larynx **descends**, and the adult human vocal tract takes on an unusual shape: a long pharynx at right angles to the mouth, with the tongue able to move both horizontally and vertically.

## Lieberman's argument

The American scientist **Philip Lieberman** argued, beginning in the late 1960s and 1970s, that this shape is what allows humans to produce the full range of vowels, especially the "corner" vowels [i], [a], and [u]. He suggested that the descent of the larynx had been favored by natural selection because of the advantages of speech, even though it carries a cost: adult humans are more likely than other mammals to choke on food. Lieberman also argued, from reconstructions of fossil skulls, that **Neanderthals** had a higher larynx and could not have produced the full range of human vowels.

## Criticisms

These arguments have been much debated. The discovery in 1983 of a Neanderthal **hyoid bone** at Kebara Cave in Israel, very similar to the modern human hyoid, suggested to some scholars that the Neanderthal vocal tract was more like ours than Lieberman had thought. Reconstructions of soft tissue from bones are uncertain. And in 2016, a study by **W. Tecumseh Fitch** and colleagues, using X-ray films of a living macaque monkey, argued that the monkey's vocal tract could in principle produce many distinct vowels, so that the limits on monkey speech lie in the brain rather than in the anatomy. Other studies have found that some animals, such as red deer, lower their larynx when calling, for reasons unrelated to speech.

## The brain and control

Most researchers now emphasize that what distinguishes humans is above all **neural control** of the vocal tract: the ability to coordinate the breath, larynx, tongue, and lips rapidly and precisely, and to learn new sound patterns by imitation. Few other mammals show **vocal learning** of this kind, though some birds, such as songbirds and parrots, and some marine mammals do. The study of the gene **FOXP2**, which we met in LIN 110, is one attempt to understand the biology of this control.

## Why it matters for phonetics

The debate reminds us that the vocal tract is both a biological organ and an instrument of language. Its shape sets limits on the sounds we can make, and those limits help explain why some sounds are common in the world's languages and others rare. But within those limits, languages vary enormously, and every child learns to control the instrument in the way that its own language requires.

> **Pause and consider.** Why might the ability to control the vocal tract matter more than its shape?`,
    },
    {
      title: "Breathing for Speech",
      body: `## The airstream

Almost all speech sounds are made on an **airstream**, a flow of air through the vocal tract. In most languages, and in all English sounds, the airstream is produced by the **lungs** pushing air outward. This is called the **pulmonic egressive** airstream mechanism: "pulmonic" because it comes from the lungs, "egressive" because the air flows out. As we will see in Lesson III, some languages also use other airstream mechanisms, producing sounds such as clicks and ejectives.

## The lungs

The lungs are spongy organs in the chest, surrounded by the **rib cage** and resting on the **diaphragm**, a dome-shaped muscle. To breathe in, the diaphragm contracts and flattens, and the muscles between the ribs raise the rib cage, enlarging the chest and drawing air into the lungs. To breathe out, these muscles relax, and the elastic recoil of the lungs and chest pushes air out, assisted when necessary by the muscles of the abdomen and ribs.

## Speech breathing

Breathing for speech differs from quiet breathing. In quiet breathing, inhalation and exhalation take roughly similar amounts of time. In speech, inhalation is quick, and exhalation is long and controlled: a speaker may take a short breath and then speak for several seconds on a single exhalation, with the muscles of the chest and abdomen carefully regulating the flow of air. Speakers typically breathe at grammatical boundaries, such as the ends of sentences or phrases.

## Pressure

What matters for speech is not the volume of air but the **pressure** below the larynx, called **subglottal pressure**. Speakers maintain a fairly steady subglottal pressure during an utterance, increasing it for louder or stressed syllables. When the pressure below a constriction in the vocal tract is greater than the pressure above it, air flows through, and the nature of the constriction determines the sound.

## Speaking on the in-breath

Is it possible to speak while breathing in? Try saying a few words while inhaling. You will find it possible but awkward: the voice sounds strained and breathy. Such **pulmonic ingressive** speech is rare in the world's languages, but it is used in some languages for particular words. In the Scandinavian languages, and in some varieties of English and French, the word for "yes" is sometimes said on an in-breath, as a sign of agreement or sympathy. These uses are marginal; no language is known to use ingressive airflow systematically for ordinary speech sounds.

## Breath and life

The connection between breath and life is ancient. In many languages, the words for "breath," "spirit," and "life" are related. The Hebrew *rûaḥ*, Greek *pneûma*, and Latin *spīritus* all mean both "breath" or "wind" and "spirit." In Genesis, God "breathed into his nostrils the breath of life; and man became a living soul" (Genesis 2:7). Speech, which rides on the breath, has long been associated with the spirit and with what is distinctively human.

> **Pause and consider.** Count how many words you can say on a single breath. Where do you naturally pause to breathe in?`,
    },
    {
      title: "The Larynx and the Vocal Folds",
      body: `## The voice box

The **larynx**, commonly called the voice box, sits at the top of the **trachea** (windpipe). Its primary biological function is to protect the airway: it closes tightly when we swallow, so that food and liquid do not enter the lungs, and it allows us to build up pressure in the chest for coughing, lifting, and other exertions. In speech, it is the main source of sound.

## Cartilages

The larynx is a structure of cartilages held together by muscles and ligaments:

- the **thyroid cartilage**, a shield-shaped cartilage at the front, whose projection forms the **Adam's apple**, more prominent in men;
- the **cricoid cartilage**, a ring below the thyroid;
- two small **arytenoid cartilages**, at the back, which can rotate and slide, opening and closing the vocal folds;
- the **epiglottis**, a leaf-shaped flap above the larynx that helps direct food away from the airway.

## The vocal folds

Inside the larynx are the **vocal folds** (often called vocal cords), two bands of muscle and tissue running from the thyroid cartilage at the front to the arytenoids at the back. The space between them is called the **glottis**. By moving the arytenoids, speakers can hold the vocal folds wide apart, bring them loosely together, or close them tightly.

## Voicing

When the vocal folds are brought close together and air is pushed through them from the lungs, they vibrate, producing a buzzing sound called **voicing**. The **myoelastic-aerodynamic theory** of voicing, developed by **Janwillem van den Berg** in 1958, explains the vibration: air pressure from below pushes the folds apart; as air rushes through the narrow gap, the pressure between them drops (an effect related to the **Bernoulli principle**), and their elasticity draws them back together; then the pressure builds again, and the cycle repeats. The folds vibrate around 100 to 150 times per second in a typical adult male voice, and around 200 to 250 times in a typical adult female voice, faster still in children.

## Voiced and voiceless sounds

Sounds produced with the vocal folds vibrating are **voiced**; those produced with the folds apart are **voiceless**. You can feel the difference by placing your fingers on your throat and saying a long [zzzz] and then a long [ssss]. You will feel vibration in the first but not the second. Or cover your ears and say the two sounds: the [z] will buzz in your head. English uses voicing to distinguish many pairs of consonants: [z] and [s], [v] and [f], [b] and [p], [d] and [t], [g] and [k].

## Other states of the glottis

The vocal folds can take other positions too:

- **Closed tightly**, they block the airstream, producing a **glottal stop** [ʔ], the catch in the middle of "uh-oh."
- **Slightly apart** with air passing through, they produce [h] or, with vibration, **breathy voice** (also called murmur), used distinctively in Hindi and Gujarati.
- **Tightly compressed** at the back and vibrating slowly and irregularly at the front, they produce **creaky voice** (sometimes called vocal fry), used in some languages to distinguish words, and in English at the ends of utterances, especially in low-pitched voices.
- **Whisper** is produced with the folds close together but not vibrating, with a gap at the back through which turbulent air passes.

> **Pause and consider.** Put your fingers on your throat and say *fan* and *van*. Where do you feel the difference?`,
    },
    {
      title: "The Velum and the Nasal Cavity",
      body: `## Two routes for air

Above the larynx, the airstream passes into the **pharynx**, the tube at the back of the throat. From the pharynx, air can flow out through two routes: through the **oral cavity** (the mouth) or through the **nasal cavity** (the nose).

## The velum

Which route the air takes depends on the position of the **velum**, or **soft palate**, the soft, muscular back part of the roof of the mouth. You can feel the velum by running your tongue back along the roof of your mouth: the front part, the **hard palate**, is bony; behind it, the roof becomes soft. At the very end of the velum hangs the **uvula**, the small fleshy appendage you can see in a mirror when you open your mouth wide and say "ah."

- When the velum is **raised**, it presses against the back wall of the pharynx, closing off the nasal cavity. Air can flow only through the mouth. Sounds made this way are **oral**.
- When the velum is **lowered**, air can flow through the nose. If the mouth is closed at the same time, all the air flows through the nose, producing a **nasal** consonant.

## Nasal consonants

English has three **nasal consonants**: [m] as in *map*, made with the lips closed; [n] as in *nap*, made with the tongue tip against the ridge behind the upper teeth; and [ŋ] as in *sing*, made with the back of the tongue against the velum. In all three, the mouth is blocked, the velum is lowered, and air flows out through the nose. You can test this by pinching your nose while saying a long [mmmm]: the sound stops.

## Nasalized vowels

If the velum is lowered while the mouth is open, air flows through both the mouth and the nose, producing a **nasalized** sound. **French** and **Portuguese** distinguish oral and nasal vowels: French *beau* [bo] "beautiful" and *bon* [bɔ̃] "good" differ in the nasality of the vowel, marked in the IPA with a tilde [~]. English does not distinguish words this way, but English vowels are often partly nasalized before nasal consonants: the vowel of *man* is more nasal than the vowel of *mad*, because the velum lowers early in anticipation of the [n].

## Cleft palate and hypernasality

The importance of the velum is shown by **cleft palate**, a condition in which the roof of the mouth does not close completely during fetal development. Without surgical repair, a person with a cleft palate cannot close off the nasal cavity, and speech may sound **hypernasal**, with air escaping through the nose on oral sounds. Speech therapists work with surgeons to help patients achieve normal speech. Conversely, a blocked nose, as during a cold, makes speech **hyponasal**: *my nose* sounds like "by dose," because air cannot flow through the nose for the nasal consonants.

## The pharynx

The pharynx itself can also be narrowed by pulling the root of the tongue back, producing **pharyngeal** sounds, which are used in Arabic and Hebrew, as we will see in Lesson III.

> **Pause and consider.** Hold your nose and say "my mother made marmalade." What happens, and why?`,
    },
    {
      title: "The Tongue, Lips, and Palate",
      body: `## Active and passive articulators

Most speech sounds are made by moving one part of the vocal tract toward another, creating a **constriction**. The part that moves is called the **active articulator**; the part it moves toward is the **passive articulator**. In most consonants, the active articulator is the lower lip or some part of the tongue, and the passive articulator is some part of the upper surface of the vocal tract.

## The upper surface

From front to back, the upper surface of the vocal tract includes:

- the **upper lip**;
- the **upper teeth**;
- the **alveolar ridge**, the bony ridge just behind the upper front teeth, which you can feel with your tongue tip;
- the **hard palate**, the bony roof of the mouth;
- the **velum** (soft palate);
- the **uvula**;
- the back wall of the **pharynx**.

## The tongue

The tongue is the most important articulator, and its parts must be distinguished carefully:

- the **tip** (or apex), the very front;
- the **blade** (or lamina), just behind the tip, lying under the alveolar ridge when the tongue is at rest;
- the **front**, under the hard palate (confusingly, the "front" of the tongue is not its tip, but the part behind the blade);
- the **back** (or dorsum), under the velum;
- the **root**, facing the back wall of the pharynx.

The tongue is a muscular hydrostat, like an elephant's trunk: it contains no bone, and it changes shape by contracting muscles that squeeze its volume in different directions. It can make extraordinarily rapid and precise movements.

## The lips

The **lips** can close completely, as in [p], [b], and [m]; approach each other, as in the [ɸ] of some languages; or touch the upper teeth with the lower lip, as in [f] and [v]. They can also be **rounded**, as in the vowels of *who* and *go*, or **spread**, as in the vowel of *see*. Lip rounding is an important feature of many vowels and some consonants.

## The jaw

The **jaw** (mandible) also moves during speech, raising and lowering the tongue and lower lip. But the jaw is a secondary articulator: speakers can produce nearly all sounds with the jaw held fixed, for example while holding a pencil between the teeth, by compensating with the tongue and lips. Experiments with such "bite blocks" have shown how flexibly speakers can reach their articulatory targets.

## Naming places

The names of places of articulation in phonetics usually combine the active and passive articulators, or simply name the passive one: **bilabial** (both lips), **labiodental** (lower lip and upper teeth), **dental** (tongue and upper teeth), **alveolar** (tongue and alveolar ridge), **palatal** (tongue and hard palate), **velar** (tongue back and velum), **uvular**, **pharyngeal**, and **glottal**. We will study these in detail in Lesson II.

> **Pause and consider.** Say [t] and then [k] several times. Which parts of your tongue touch which parts of the roof of your mouth?`,
    },
    {
      title: "How Phoneticians Observe Speech",
      body: `## Looking inside

Most of the vocal tract is hidden from view. How do phoneticians know what the tongue and larynx are doing? Over the past century and a half, they have developed many techniques.

## Introspection and observation

The oldest technique is **introspection**: paying careful attention to what one's own articulators are doing, aided by a mirror. Trained phoneticians can learn to feel the position of their tongue with considerable accuracy. Observation of others' lips and jaws is also possible. But introspection is limited, especially for sounds made far back in the mouth.

## Palatography

**Palatography** records where the tongue touches the roof of the mouth. In **static palatography**, the roof of the mouth is coated with a mixture, such as charcoal and oil; the speaker says a sound; and a photograph shows where the tongue has wiped the coating away. In **electropalatography** (EPG), the speaker wears a thin artificial palate containing dozens of electrodes, which record tongue contact continuously during speech. Ladefoged used static palatography extensively in fieldwork, since it required only simple materials.

## X-rays

In the twentieth century, **X-ray** films (**cineradiography**) allowed phoneticians to see the movements of the tongue, velum, and larynx during speech. These films provided invaluable data, but because of the dangers of radiation, they are no longer made. Existing archives of X-ray films are still studied.

## Modern imaging

Today, safer techniques are used:

- **Ultrasound** imaging, with a probe held under the chin, shows the shape of the tongue's surface in real time. It is portable and safe, and is now widely used in research and in teaching pronunciation and speech therapy.
- **Magnetic resonance imaging** (MRI) provides detailed images of the whole vocal tract. **Real-time MRI**, developed in the 2000s, can film the vocal tract during speech, though the noise of the machine and the need to lie down are limitations.
- **Electromagnetic articulography** (EMA) tracks small sensors glued to the tongue, lips, and jaw, recording their movements precisely in three dimensions.

## The larynx

The larynx can be observed with a **laryngoscope**, a small camera inserted through the nose or mouth, and the vibration of the vocal folds with **high-speed video** or a stroboscope. The **electroglottograph** (EGG) measures the contact between the vocal folds by passing a small current across the neck.

## Airflow

**Aerodynamic** measurements, using masks that capture the air flowing from the mouth and nose, can show whether a sound is nasal, how much air is released in aspiration, and other properties.

## Acoustic analysis

Finally, the **acoustic** record of speech, analyzed by computer programs such as **Praat**, developed by **Paul Boersma** and **David Weenink**, provides indirect but very detailed evidence about articulation. As we will see in PHO 110, many articulatory properties can be inferred from acoustic patterns.

> **Pause and consider.** Why do you think ultrasound has become so popular in phonetics research and teaching?`,
    },
    {
      title: "Transcription: Broad and Narrow",
      body: `## Writing down speech

**Phonetic transcription** is the use of a phonetic alphabet to record speech. It is one of the basic skills of phonetics, and like any skill, it requires practice.

## Phonetic and phonemic

There are two main kinds of transcription:

- **Phonetic transcription**, enclosed in **square brackets** [ ], records the actual sounds produced, with as much detail as needed.
- **Phonemic transcription**, enclosed in **slashes** / /, records only the **phonemes** of a language, the distinctive sounds that distinguish words, as we studied in LIN 101.

For example, the English word *pin* can be transcribed phonemically as /pɪn/ and phonetically as [pʰɪn], showing that the [p] is **aspirated**, followed by a puff of air, marked by the superscript [ʰ]. The word *spin* is phonemically /spɪn/ and phonetically [spɪn], with an unaspirated [p]. Phonemically, the two *p* sounds are the same phoneme, /p/; phonetically, they differ.

## Broad and narrow

Phonetic transcriptions can be more or less detailed:

- A **broad** transcription uses the simplest symbols that distinguish the sounds relevant to the purpose at hand. It often resembles a phonemic transcription.
- A **narrow** transcription records fine phonetic details, using **diacritics**: aspiration [ʰ], nasalization [~], length [ː], voicelessness [˳], and many others.

For example, the English word *ten* might be transcribed broadly as [tɛn] and narrowly as [tʰɛ̃n], showing the aspiration of the [t] and the nasalization of the vowel before [n].

## Choosing the level of detail

How narrow should a transcription be? It depends on the purpose. A dictionary of English for learners might use a broad phonemic transcription. A study of the pronunciation of a particular dialect, or a speech therapist's record of a child's speech, might need a narrow transcription showing exactly how each sound was produced. A linguist documenting an unfamiliar language will start with a narrow transcription, since they do not yet know which differences are distinctive.

## Transcribing English

Transcribing English requires care, because English spelling is so misleading, and because English varies so much from region to region. In this course, we will use a transcription based on a general American or general British pronunciation, noting differences where relevant. For example, *car* is [kɑɹ] in most American English and [kɑː] in standard southern British English, where the *r* is not pronounced after a vowel.

## Learning to transcribe

The best way to learn transcription is to practice: transcribe words and short sentences, compare your transcriptions with those of others, and listen carefully to recordings. Students often find that they must first **unlearn** their spelling-based habits, and learn to hear the sounds they actually produce.

> **Pause and consider.** Transcribe the word *phonetics* broadly. Which letters in the spelling do not correspond to a single sound?`,
    },
    {
      title: "How Fast Is Speech?",
      body: `## A remarkable skill

Speaking is one of the most complex motor skills human beings perform. In ordinary conversation, a speaker produces about **ten to fifteen speech sounds per second**, each requiring precise coordination of dozens of muscles in the chest, larynx, pharynx, tongue, lips, and jaw. Most speakers do this without conscious effort, while thinking about what they want to say rather than how to say it.

## Coarticulation

Because speech is so fast, sounds are not produced one at a time, like beads on a string. Instead, the articulatory gestures for neighboring sounds **overlap**. This is called **coarticulation**. In the word *two*, the lips begin to round for the vowel [u] even before the [t] is released; in *tea*, they are spread. You can see this in a mirror: say *tea* and *two* and watch your lips during the [t]. In *key* and *coo*, the tongue contacts the palate further forward for *key*, in anticipation of the front vowel. We will study coarticulation in more detail in Lesson V.

## Targets and variation

Because of coarticulation, no sound is ever produced in exactly the same way twice. The [k] of *key* differs from the [k] of *coo*; the vowel of *man* differs from the vowel of *mad*. Yet listeners perceive them as the same sound. One of the central problems of phonetics is to explain how listeners recognize sounds despite this variation, and how speakers plan their movements to reach articulatory **targets** that vary with context.

## The sounds of the world's languages

How many different speech sounds do human languages use? Peter Ladefoged and **Ian Maddieson**, in *The Sounds of the World's Languages* (1996), surveyed the sounds of hundreds of languages. Ladefoged later estimated that the world's languages together use something like six hundred different consonants and two hundred different vowels, if all the distinctions that languages make are counted. Individual languages use far fewer: English has about two dozen consonants and, depending on the dialect, a dozen or more vowels. Some languages, such as **Rotokas** in Papua New Guinea, have very small inventories of about eleven sounds; others, such as **!Xóõ** in Botswana, have well over a hundred, including many clicks.

## Universals

Despite this variety, some sounds are very common. Almost all languages have **stops** like [p], [t], and [k]; almost all have **nasals** like [m] and [n]; almost all have the vowels [i], [a], and [u] or something close to them. Ian Maddieson's database of sound inventories, **UPSID** (the UCLA Phonological Segment Inventory Database), and later the **PHOIBLE** database, have allowed linguists to study which sounds are common and which are rare, and how inventories are structured.

## The skill of the phonetician

A trained phonetician can hear, produce, and transcribe sounds from any language. This skill, which Henry Sweet compared to that of a musician, takes years to develop. Ladefoged spoke of the joy of hearing and learning to produce the sounds of a new language. This course aims to begin that training.

> **Pause and consider.** Watch your lips in a mirror as you say *tea* and *two*. When do they begin to round for *two*?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. The Sanskrit alphabet

> velars *k kh g gh ṅ*; palatals *c ch j jh ñ*; retroflexes *ṭ ṭh ḍ ḍh ṇ*; dentals *t th d dh n*; labials *p ph b bh m*

**Questions**

1. On what principle is this order based?
2. What features does the order within each row reflect?

## 2. Spelling

> *see*, *sea*, *seize*, *people*, *key*, *machine*, *field*

**Questions**

1. What sound do these words share?
2. Why does English spelling represent it in so many ways?

## 3. The glottis

> [z] versus [s]; [ʔ] in "uh-oh"; breathy voice in Hindi

**Questions**

1. What do the vocal folds do in each case?
2. Test the first pair on yourself. What did you feel?

## 4. Transcription

> *pin* /pɪn/ [pʰɪn]; *spin* /spɪn/ [spɪn]

**Questions**

1. Explain the difference between the slashes and the brackets.
2. Why are the two *p* sounds the same phoneme in English?

## Drawing the threads together

In a paragraph, explain how speech is produced by the vocal tract and how phoneticians record it, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage Learning", year: "1975; 7th ed., 2015", note: "Read chapter 1, \"Articulation and Acoustics.\"" },
    { kind: "book", title: "Handbook of the International Phonetic Association: A Guide to the Use of the International Phonetic Alphabet", author: "International Phonetic Association", publisher: "Cambridge University Press", year: "1999", note: "Read Part 1, the introduction to the IPA." },
    { kind: "website", title: "The International Phonetic Alphabet chart", author: "International Phonetic Association", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart", note: "Print the chart and keep it beside you throughout the course." },
  ],
  media: [
    { kind: "book", title: "Vowels and Consonants", author: "Peter Ladefoged", publisher: "Blackwell", year: "2001; 3rd ed. with Sandra Ferrari Disner, 2012", note: "An accessible introduction with recordings; read chapter 1." },
    { kind: "book", title: "Pygmalion", author: "George Bernard Shaw", publisher: "Constable", year: "1913", note: "In the public domain in many countries. Read the preface, on Henry Sweet." },
  ],
  questions: [
    {
      prompt: "Which branch of phonetics studies how sounds are produced by the organs of speech?",
      choices: ["Acoustic phonetics", "Articulatory phonetics", "Auditory phonetics", "Phonology"],
      answer: 1,
      explanation: "Acoustic phonetics studies sound waves; auditory phonetics, perception.",
    },
    {
      prompt: "How is the Sanskrit alphabet ordered?",
      choices: [
        "Randomly",
        "By place of articulation, with consistent ordering by voicing, aspiration, and nasality",
        "By frequency",
        "By the shape of letters",
      ],
      answer: 1,
      explanation: "From velars to labials.",
    },
    {
      prompt: "Who wrote the foundational work of Arabic grammar, including a description of Arabic sounds?",
      choices: ["Pāṇini", "Sībawayh", "Henry Sweet", "Paul Passy"],
      answer: 1,
      explanation: "Al-Kitāb, eighth century.",
    },
    {
      prompt: "When did the first version of the International Phonetic Alphabet appear?",
      choices: ["1786", "1888", "1949", "1989"],
      answer: 1,
      explanation: "The association was founded in 1886; the Kiel revision was in 1989.",
    },
    {
      prompt: "Which pioneering phonetician was in part the model for Professor Higgins?",
      choices: ["Alexander Melville Bell", "Henry Sweet", "Daniel Jones", "Otto Jespersen"],
      answer: 1,
      explanation: "Shaw says so in the preface to Pygmalion.",
    },
    {
      prompt: "What is the pulmonic egressive airstream?",
      choices: [
        "Air drawn into the lungs",
        "Air pushed out from the lungs, used for all English sounds",
        "Air moved by the tongue",
        "Air moved by the larynx",
      ],
      answer: 1,
      explanation: "Other airstreams appear in Lesson III.",
    },
    {
      prompt: "What produces voicing?",
      choices: [
        "The tongue touching the palate",
        "Vibration of the vocal folds as air passes between them",
        "The lowering of the velum",
        "Lip rounding",
      ],
      answer: 1,
      explanation: "Explained by the myoelastic-aerodynamic theory.",
    },
    {
      prompt: "What happens when the velum is lowered and the mouth is closed?",
      choices: [
        "A vowel is produced",
        "A nasal consonant is produced, with air flowing through the nose",
        "A glottal stop is produced",
        "No sound is possible",
      ],
      answer: 1,
      explanation: "As in [m], [n], and [ŋ].",
    },
    {
      prompt: "Which part of the tongue lies under the hard palate at rest?",
      choices: ["The tip", "The front", "The root", "The blade"],
      answer: 1,
      explanation: "The \"front\" of the tongue is behind the blade.",
    },
    {
      prompt: "What is the difference between [pʰɪn] and /pɪn/?",
      choices: [
        "They are different words",
        "The first is a phonetic transcription showing aspiration; the second a phonemic transcription",
        "The first is British, the second American",
        "There is no difference",
      ],
      answer: 1,
      explanation: "Brackets for phonetic, slashes for phonemic.",
    },
  ],
  reflection:
    "Speech is produced by organs that evolved for other purposes. In 500–800 words, describe the path of the airstream from the lungs to the lips, explaining the role of each part of the vocal tract, and reflect on why phoneticians needed to invent a new alphabet to describe speech.",
};
