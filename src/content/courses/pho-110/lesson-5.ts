import type { Lesson } from "@/lib/schema";

export const lesson5: Lesson = {
  title: "Hearing Speech and Teaching Machines to Talk",
  summary:
    "How listeners turn sound into words; categorical perception in adults, infants, and chinchillas; the motor theory and its rivals; seeing speech in the McGurk effect; how knowledge and context shape what we hear; models of word recognition; adapting to new speakers and accents; a history of talking machines from the Voder to neural voices; speech recognition and its biases; cloned voices and deepfakes; speech technology for the world's languages; and the speech chain revisited.",
  pages: [
    {
      title: "From Sound to Meaning",
      body: `## The listener's task

At the end of the speech chain, as we saw in Lesson I, the listener must turn a continuous, variable sound wave into a sequence of words with meaning. This is a formidable task. As we saw in Lesson III, the acoustic signal has no clear boundaries between sounds or words; the same sound varies with its context, the speaker, and the speaking rate; and the signal is often degraded by noise. Yet listeners understand speech quickly and effortlessly, typically recognizing words within a fraction of a second, often before the speaker has finished them.

## Speech perception

The study of how listeners do this is called **speech perception**, a field at the meeting point of phonetics, psychology, and neuroscience. It asks questions such as:

- How do listeners map acoustic cues onto speech sounds?
- Is speech perceived by special mechanisms, or by general auditory processes?
- How do listeners use knowledge of words, grammar, and context?
- How do listeners adapt to different speakers and accents?
- How does visual information, such as lip movements, contribute?

## Engineering the chain

The second part of this lesson turns to **speech technology**: the attempt to build machines that produce speech (**synthesis**) and understand it (**recognition**). These technologies, once the stuff of science fiction, are now part of everyday life, in phones, cars, and homes. Their development has been closely intertwined with phonetic research, from the Bell Laboratories engineers who built the first spectrographs to the computational models of today.

## Why perception matters for phonetics

Perception studies have shaped phonetics in many ways. They have shown which acoustic properties listeners actually use, as we saw with the Haskins locus experiments; why some sounds are confused and others not; how sound changes may arise from listeners' misperceptions, as John Ohala argued; and why second-language learners find some contrasts difficult. A full understanding of speech requires attention to the listener as well as the speaker.

## The plan

We begin with **categorical perception**, one of the classic findings of speech science, and the theories proposed to explain it. We consider the role of **vision** in speech perception, the influence of **knowledge** and **context**, and models of **word recognition**. We then trace the history of **speech synthesis** and **speech recognition**, consider the challenges of **voice cloning** and **bias**, and end by revisiting the speech chain.

> **Pause and consider.** Why might understanding speech be harder for a machine than producing it?`,
    },
    {
      title: "Categorical Perception",
      body: `## Sharp boundaries

In 1957, **Alvin Liberman** and his colleagues at Haskins Laboratories published a famous experiment. Using the Pattern Playback, they created a series of synthetic syllables in which the F2 transition varied in equal steps, from a pattern heard as [b] through patterns heard as [d] to patterns heard as [g]. They asked listeners to do two tasks:

- **Identification**: label each syllable as *b*, *d*, or *g*;
- **Discrimination**: say whether two syllables were the same or different.

## The findings

The results showed a striking pattern:

- In identification, listeners did not hear a gradual change. They heard a series of clear [b]'s, then an abrupt switch to [d]'s, then another abrupt switch to [g]'s. The **boundaries** between categories were sharp.
- In discrimination, listeners could easily tell apart two syllables that straddled a category boundary, but had great difficulty telling apart two syllables from the **same** category, even when the acoustic difference was just as large.

This pattern, in which perception is organized into categories with sharp boundaries and poor discrimination within categories, is called **categorical perception**. Similar results were found for the **voicing** continuum from [ba] to [pa], varying VOT, as we saw in PHO 101.

## Contrast with ordinary perception

Categorical perception contrasts with how we usually perceive physical continua. We can distinguish many shades of color or many levels of loudness, even within what we call "red" or "loud." For stop consonants, however, listeners seem to hear only the category, and lose access to the differences within it.

As we saw in Lesson II, **vowels** are perceived **less** categorically than stop consonants: listeners can discriminate vowels within a category fairly well. This difference was itself taken as evidence that consonants, with their rapid transitions, are processed differently.

## Infants

In 1971, **Peter Eimas** and colleagues showed that infants as young as **one month** discriminated stimuli on a VOT continuum categorically, distinguishing [ba] from [pa] across the adult boundary but not within categories. They measured this by the rate at which infants sucked on a pacifier, which increased when they heard a new sound. This suggested that the ability to perceive speech categorically might be innate.

## Chinchillas

But in 1975, **Patricia Kuhl** and **James Miller** showed that **chinchillas**, small rodents whose hearing is similar to humans', could be trained to distinguish [da] from [ta] with a category boundary very close to that of English-speaking humans. Later studies found similar results with monkeys and birds. If animals without language show categorical boundaries, then categorical perception of these contrasts may reflect **general properties of the auditory system**, rather than a special mechanism for speech.

## The lesson

Categorical perception remains a robust finding, but its interpretation changed. Languages may have placed their category boundaries where the auditory system naturally makes distinctions easiest. And, as we saw in PHO 101 with the work of Werker and Tees, experience with a particular language tunes perception to that language's categories during the first year of life.

> **Pause and consider.** Why was the finding that chinchillas perceive [da] and [ta] categorically so important?`,
    },
    {
      title: "The Motor Theory and Its Rivals",
      body: `## The motor theory

To explain categorical perception and the lack of invariance, which we met in Lesson III, **Alvin Liberman** and his colleagues developed the **motor theory of speech perception**. In its revised form, presented by Liberman and **Ignatius Mattingly** in 1985, the theory holds that:

- the objects of speech perception are not sounds but the speaker's **intended articulatory gestures**, such as lip closure or tongue tip raising;
- listeners recover these gestures from the acoustic signal using a **specialized module** for speech, linked to the system for producing speech;
- this explains why the varied acoustic signals of [d] in [di] and [du] are heard as the same: they arise from the same gesture.

## Evidence

The motor theory was supported by several findings:

- the lack of acoustic invariance, combined with articulatory regularity;
- categorical perception, which seemed special to speech;
- **duplex perception**, an effect in which the same acoustic component is heard simultaneously as part of a syllable and as a non-speech chirp, suggesting separate speech and non-speech processing;
- the McGurk effect, which we study next, in which seeing articulations changes what is heard.

## Direct realism

A related theory, **direct realism**, developed by **Carol Fowler**, also holds that listeners perceive articulatory gestures, but without a special module: just as we perceive objects in the world directly through the light they reflect, we perceive the vocal tract actions directly through the sound they produce.

## The general auditory approach

The motor theory's critics favor a **general auditory** approach, summarized by **Randy Diehl**, **Andrew Lotto**, and **Lori Holt** in a review published in 2004. They argue that speech is perceived by the **same** auditory and cognitive mechanisms used for other sounds, shaped by learning. In support, they point to:

- categorical perception in **animals**, as we saw;
- categorical perception of some **non-speech** sounds;
- evidence that listeners can learn new categories based on any reliable acoustic cue;
- the success of computational models that learn speech categories from acoustic data alone.

## Mirror neurons

In the 2000s, the discovery of **mirror neurons** in monkeys, neurons that fire both when an animal performs an action and when it observes the same action, revived interest in the motor theory. Brain imaging studies found that listening to speech activates motor areas of the brain involved in producing it. Some researchers saw this as support for the motor theory; others argued that the motor activation may assist perception in difficult conditions without being necessary for it, since people with severe damage to motor speech areas can often still understand speech.

## An open question

The debate between motor and auditory theories continues. Many researchers now take an intermediate view: perception is primarily auditory, but articulatory knowledge contributes, especially in noise or when the signal is ambiguous. The question of what listeners "really" perceive, sounds or gestures, remains one of the deepest in speech science.

> **Pause and consider.** If people with damage to motor speech areas can still understand speech, what does this suggest about the motor theory?`,
    },
    {
      title: "Seeing Speech: The McGurk Effect",
      body: `## Hearing lips

In 1976, **Harry McGurk** and **John MacDonald** published a short paper in *Nature* entitled "Hearing Lips and Seeing Voices." They had dubbed a recording of a person saying [ba] onto a video of the same person saying [ga]. When subjects watched the video, most reported hearing neither [ba] nor [ga], but **[da]**, a syllable between the two. When they closed their eyes, they heard [ba]. This is the **McGurk effect**.

## Why [da]?

The visual information (the lips not closing, as they would for [b]) is inconsistent with [ba]; the auditory information is inconsistent with [ga]. The brain combines the two sources into the percept most consistent with both: [da], made with the lips open and with acoustic properties closer to [ba] than [ga]. The effect is striking because it is hard to resist: even people who know about it often still hear [da] when watching.

## Audiovisual speech

The McGurk effect is a dramatic demonstration of a general fact: speech perception is **audiovisual**. Listeners use visual information from the speaker's face, especially the lips, jaw, and tongue tip, whenever it is available. In 1954, **W. H. Sumby** and **Irwin Pollack** showed that seeing the speaker's face greatly improves understanding of speech in noise, equivalent to raising the speech level considerably. This is why we watch people's faces in noisy rooms, and why poorly synchronized video is so disturbing.

## Lipreading

**Lipreading** (or speechreading) depends on visual information alone. Some sounds are easy to see, such as the lip closure of [p], [b], and [m], and the lip-to-teeth contact of [f] and [v]; others, such as [k] and [g], made at the back of the mouth, are nearly invisible. Sounds that look alike on the lips, such as [p], [b], and [m], are called **visemes**. Because many sounds are visually similar, lipreading alone allows only partial understanding, supplemented by context. Many deaf and hard-of-hearing people use lipreading, often together with hearing aids or sign language.

## Variability

The McGurk effect is not equally strong in everyone. Later studies found large **individual differences**: some people show the effect almost always, others rarely. Its strength also varies among languages and cultures; some studies have found it weaker among speakers of Japanese and Chinese, perhaps reflecting cultural differences in looking at faces, though the findings are mixed. Researchers have cautioned against using the McGurk effect as a simple measure of audiovisual integration, since it may reflect several different processes.

## Beyond the face

Perception can also integrate other senses. In experiments, puffs of air on the skin, timed to coincide with syllables, made listeners more likely to hear aspirated stops, as **Bryan Gick** and **Donald Derrick** reported in 2009. Speech perception, it seems, draws on every available source of information about how the sound was made.

> **Pause and consider.** Watch a video of someone speaking with the sound off. Which sounds can you identify, and which are hard to see?`,
    },
    {
      title: "Knowledge Shapes Hearing",
      body: `## Top-down processing

Speech perception is not only **bottom-up**, building from acoustic cues to sounds to words; it is also **top-down**, using knowledge of words, grammar, and context to interpret the signal. Several classic experiments demonstrate this.

## Words in noise

In 1951, **George Miller**, **George Heise**, and **William Lichten** found that words were much easier to recognize in noise when they appeared in **sentences** than in isolation, and easier when the listener knew they came from a small set of possible words. Context and expectation compensate for degraded signals.

## Phonemic restoration

In 1970, **Richard Warren** played listeners a sentence in which one sound, the first [s] in *legislatures*, had been completely removed and replaced with a cough. Listeners reported hearing the [s] clearly, and could not say where the cough had occurred. Their knowledge of the word had "restored" the missing sound. This **phonemic restoration** effect shows that listeners do not simply hear what is in the signal; they perceive what their knowledge leads them to expect. Warren found that the restored sound depended on the following context: if the sentence continued in a way that required a different word, listeners heard a different sound.

## The Ganong effect

In 1980, **William Ganong** created VOT continua in which one end formed a word and the other a non-word, such as from *dask* to *task* (where *task* is a word) and from *dash* to *tash* (where *dash* is a word). He found that the category boundary shifted toward the non-word end: listeners were more likely to hear an ambiguous sound as the one that made a real word. This **Ganong effect** (or lexical effect) shows that knowledge of words influences the perception of individual sounds.

## Sentence context

Context at the level of the sentence also influences perception. An ambiguous word may be heard as *pig* in "The farmer fed the ___" and as *big* in "The house was very ___." Listeners use their knowledge of meaning and grammar to resolve acoustic ambiguity, sometimes without noticing that any ambiguity existed.

## How deep does it go?

A long-running debate concerns how **early** top-down knowledge affects perception. **Interactive** models hold that word knowledge feeds back to influence the perception of sounds directly; **autonomous** models, such as **Merge**, proposed by **Dennis Norris**, **James McQueen**, and **Anne Cutler** (2000), hold that sound perception proceeds independently, and that apparent top-down effects arise when information from different levels is combined in making a decision. Both sides accept that knowledge affects what listeners report; they disagree about the architecture of the system.

## The practical lesson

These effects explain why we often "hear" what we expect, and why mishearings, such as misheard song lyrics, often make sense to the listener. They also explain why speech in an unfamiliar language seems so much faster and harder to segment than speech in our own: we lack the knowledge that fills gaps and resolves ambiguities.

> **Pause and consider.** Why might listeners fail to notice that a sound has been replaced by a cough?`,
    },
    {
      title: "Recognizing Words",
      body: `## A massive search

A typical adult knows tens of thousands of words. To understand speech, the listener must find, among all these, the word being spoken, usually within a few hundred milliseconds. How is this done?

## The cohort model

The **cohort model**, developed by **William Marslen-Wilson** from the late 1970s, proposes that word recognition begins as soon as the first sounds of a word are heard. The first sounds activate a **cohort** of all words beginning with them: hearing [ɛl] activates *elephant*, *elegant*, *element*, *elevator*, and others. As more sounds arrive, words that no longer match drop out, until only one remains. The word is recognized at its **uniqueness point**, the point at which it becomes distinct from all other words, often before its end. Experiments showed that listeners can indeed recognize many words before hearing them completely.

## TRACE

**TRACE**, a computational model developed by **James McClelland** and **Jeffrey Elman** (1986), represents speech recognition as a network of interconnected units for acoustic features, sounds, and words. Activation flows up from features to words, and also down from words to sounds, and words that compete inhibit each other. TRACE accounts for many findings, including the Ganong effect and phonemic restoration, through its top-down connections.

## Competition and neighborhoods

Words compete for recognition. A word with many similar-sounding **neighbors** (such as *cat*, with *bat*, *cap*, *cut*, *kit*, and many others) is recognized more slowly and less accurately than a word with few neighbors (such as *bulb*). **Paul Luce** and **David Pisoni** formalized this in the **Neighborhood Activation Model** (1998), showing that recognition depends on a word's frequency and on the number and frequency of its neighbors. Frequent words are recognized faster than rare ones.

## Finding word boundaries

Because speech has no pauses between most words, listeners must **segment** the stream into words. They use several cues: the stress patterns of their language (English words usually begin with stressed syllables, as we saw in PHO 101), phonotactic constraints (no English word begins with [ŋ]), allophonic details (aspiration marks the beginning of a stressed syllable), and the lexicon itself (finding a known word implies boundaries around it). **Anne Cutler** and her colleagues showed that listeners of different languages use different segmentation strategies, adapted to the rhythm of their language.

## Eye tracking

A powerful method for studying word recognition is **eye tracking**. In the "visual world" paradigm, developed in the 1990s by **Michael Tanenhaus** and colleagues, listeners see pictures of several objects while hearing instructions such as "Pick up the beaker." Their eye movements show, moment by moment, which words they are considering: on hearing the beginning of *beaker*, they look briefly at a picture of a *beetle* as well, before settling on the beaker. Such studies confirm that listeners consider multiple candidates in parallel as speech unfolds.

> **Pause and consider.** At what point in the word *elephant* do you think a listener can be sure what the word is?`,
    },
    {
      title: "Adapting to Speakers and Accents",
      body: `## Different voices

Every speaker is different, and every accent has its own vowels, consonants, and prosody. Yet listeners usually understand new speakers and accents quickly, after hearing only a few sentences. How do they adapt?

## Perceptual learning

In 2003, **Dennis Norris**, **James McQueen**, and **Anne Cutler** published an influential study of **lexically guided perceptual learning**. Dutch listeners heard a speaker who produced an ambiguous sound, between [f] and [s], in words where only one interpretation made sense: for some listeners, in words that should end in [f]; for others, in words that should end in [s]. Afterward, listeners who had heard the ambiguous sound in [f]-words categorized more sounds on an [f]–[s] continuum as [f], and vice versa. Their knowledge of words had taught them how this speaker pronounced [f] or [s], and they adjusted their categories accordingly. The adjustment generalized to new words, but was often specific to the speaker.

## Foreign accents

Adaptation to **foreign-accented** speech has been studied extensively. **Ann Bradlow** and **Tessa Bent**, in a study published in 2008, found that native English listeners improved rapidly at understanding Chinese-accented English with exposure, and that exposure to **several** speakers with the same accent helped listeners understand new speakers with that accent better than exposure to a single speaker. Listeners seem to learn the general patterns of an accent, not just the habits of individual speakers.

## Familiar voices

Listeners also understand **familiar** speakers better. In noisy conditions, people understand their spouses better than strangers. Experiments have shown that training listeners on a speaker's voice improves their recognition of new words from that speaker. Voice and linguistic content, it seems, are not processed entirely separately, a finding that supports the **exemplar** theories we met in Lesson III.

## Dialect and expectation

Listeners' expectations about a speaker's dialect or identity affect perception. In a well-known study published in 1999, **Elizabeth Strand** found that listeners shifted their [s]–[ʃ] boundary depending on whether they saw a male or female face with the voice, consistent with the average differences between male and female [s] that we met in Lesson III. In other studies, listeners' perceptions of vowels were affected by being told where a speaker came from, or even by the presence of stuffed toys associated with a particular country. Such findings show that social knowledge enters into perception.

## Bias

The influence of expectation can also be harmful. Studies have found that listeners may judge the same recorded speech as more accented or less intelligible when they believe the speaker belongs to a particular ethnic group. **Donald Rubin**, in a study published in 1992, found that American undergraduates who heard a lecture recorded by a native English speaker understood it less well when they were shown a photograph of an Asian lecturer than when they were shown a photograph of a white lecturer. Such findings have implications for education, employment, and law, where judgments of speech can affect people's lives.

> **Pause and consider.** Why might hearing several speakers with the same accent help a listener more than hearing one?`,
    },
    {
      title: "Speech in the Brain",
      body: `## From the ear to the cortex

As we saw in Lesson I, the cochlea analyzes sound into its frequency components and sends signals along the auditory nerve. These signals pass through several stages in the brainstem and midbrain before reaching the **auditory cortex** in the temporal lobes. From there, speech is processed in a network of brain areas, which we studied in LIN 110.

## Two streams

In an influential model published in 2007, **Gregory Hickok** and **David Poeppel** proposed that speech processing in the brain follows two main pathways, or **streams**:

- a **ventral stream**, running along the temporal lobe, which maps speech sounds onto **meaning**, allowing comprehension;
- a **dorsal stream**, running toward the parietal and frontal lobes, which maps speech sounds onto **articulation**, supporting repetition, learning new words, and, perhaps, perception in difficult conditions.

This model offers a way to reconcile parts of the motor theory with the general auditory approach: the dorsal stream links perception with production, but comprehension depends mainly on the ventral stream.

## Recording from the cortex

Most brain imaging techniques, such as functional MRI, measure brain activity only indirectly and slowly. But in some patients undergoing surgery for epilepsy, electrodes are placed directly on the surface of the brain, allowing researchers, with the patients' consent, to record neural activity with millisecond precision while they listen to speech.

Studies using such recordings, by **Edward Chang** and colleagues at the University of California, San Francisco, have produced remarkable findings. In 2014, **Nima Mesgarani**, Chang, and colleagues reported in *Science* that sites in the **superior temporal gyrus** responded selectively to particular **phonetic features**: some to stops, some to fricatives, some to nasals, and others to vowels with particular formant patterns. The organization of neural responses resembled the categories of articulatory phonetics, such as manner of articulation, suggesting that the brain represents speech in terms of features like those phoneticians use.

## Categories in the brain

Earlier work by Chang and colleagues, published in 2010, found that neural responses in the same region showed **categorical** organization: along a continuum from [ba] to [da] to [ga], neural patterns changed abruptly at the category boundaries, mirroring the categorical perception we studied earlier. The brain, it seems, transforms continuous acoustic input into discrete categories within a few hundred milliseconds.

## Decoding speech

Such recordings have also been used to **decode** speech from brain activity. Researchers have reconstructed intelligible words from neural recordings of people listening to speech, and, more recently, from people attempting to speak who have lost the ability through paralysis, producing synthesized speech or text from their brain signals. These **brain–computer interfaces** offer hope for restoring communication, and raise their own questions about privacy and consent.

## Phonetics and neuroscience

These findings show that the categories and features developed by phoneticians over more than a century, from places and manners of articulation to formants and transitions, correspond in important ways to how the brain processes speech. Phonetics provides neuroscience with a vocabulary, and neuroscience provides phonetics with new evidence.

> **Pause and consider.** Why might the brain represent speech in terms of features such as manner of articulation?`,
    },
    {
      title: "The Cocktail Party Problem",
      body: `## Listening in a crowd

At a crowded party, many people are talking at once, music is playing, and glasses are clinking. Yet you can follow the conversation of the person you are talking to, and even notice when someone across the room mentions your name. How? In 1953, the British engineer **Colin Cherry** named this the **cocktail party problem**: how listeners separate one voice from a mixture of sounds.

## Cherry's experiments

Cherry played different messages to listeners' two ears through headphones and asked them to repeat one message aloud as they heard it, a task called **shadowing**. Listeners could follow the attended message well, but noticed little about the unattended one: they could tell whether it was speech or a tone, and whether the voice was male or female, but not what was said, or even, in some cases, whether the language had changed. Later researchers found that some meaningful information, such as the listener's own name, could break through from the unattended channel.

## Cues for separation

Listeners use several acoustic cues to separate voices:

- **Location**: sounds from different directions reach the two ears at slightly different times and intensities, and the brain uses these differences to locate and separate sources. This is why listening is harder with one ear, or through a single loudspeaker.
- **Pitch**: voices with different fundamental frequencies are easier to separate. Listeners can follow a voice by tracking its harmonics.
- **Timing**: sounds that start and stop together tend to be grouped as coming from one source.
- **Familiarity**: familiar voices and predictable content are easier to follow.

The psychologist **Albert Bregman**, in *Auditory Scene Analysis* (1990), described how the auditory system groups sounds into streams, a general process that applies to speech, music, and environmental sounds.

## Energetic and informational masking

Researchers distinguish two kinds of masking. In **energetic masking**, a competing sound physically overlaps the target in frequency and time, so that parts of the target are inaudible. In **informational masking**, the competing sound is audible but interferes with understanding because it is similar to the target, such as another voice speaking the same language. Competing speech in one's own language is especially distracting; speech in an unfamiliar language interferes less.

## Glimpsing

Even in heavy noise, the target speech is louder than the noise in some brief **glimpses** of time and frequency. **Martin Cooke**, in a model published in 2006, argued that listeners piece together the message from these glimpses, using their knowledge of speech to fill in the rest, much as in phonemic restoration.

## Age and hearing loss

The cocktail party problem becomes much harder with **hearing loss** and with **age**, even for older people with near-normal hearing thresholds. Difficulty understanding speech in noisy restaurants is one of the most common complaints of older adults. Hearing aids that use multiple microphones to focus on sounds from in front of the listener can help, and solving the cocktail party problem remains a major goal of hearing aid and speech recognition research.

> **Pause and consider.** Why is it harder to ignore a conversation in your own language than one in an unfamiliar language?`,
    },
    {
      title: "Talking Machines: A History of Synthesis",
      body: `## Mechanical speakers

As we saw in Lesson I, the first talking machines were mechanical: Kratzenstein's tubes and Kempelen's speaking machine in the eighteenth century, built to imitate the vocal tract. In the nineteenth century, others built mechanical talking heads, but none could produce fluent speech.

## The Voder

The first electrical speech synthesizer to attract wide attention was the **Voder** (Voice Operation Demonstrator), built at Bell Laboratories by **Homer Dudley** and demonstrated at the **New York World's Fair** of 1939. A trained operator used a keyboard, a wrist bar, and a foot pedal to control a buzz or hiss source and a set of filters, producing recognizable, if strange, speech. Operators needed many months of training. The Voder showed that speech could be produced by a source and a set of filters, in accordance with the source–filter theory.

## The Pattern Playback

As we saw in Lesson III, the **Pattern Playback** at Haskins Laboratories converted painted spectrograms into sound, allowing researchers to synthesize speech by drawing its formants. It was not a practical synthesizer, but it was an invaluable research tool.

## Formant synthesis

From the 1950s to the 1980s, **formant synthesizers** generated speech by combining an artificial voice source with electronic or computer filters representing the formants. The most influential was developed by **Dennis Klatt** at MIT, whose system, with rules for durations, formant transitions, and intonation, became the basis of **DECtalk**, a commercial text-to-speech system introduced in 1984. Formant synthesis was intelligible but sounded robotic. The physicist **Stephen Hawking** used a synthesizer based on Klatt's research for decades, and became so identified with its voice that he declined to change it when more natural voices became available.

## Concatenative synthesis

In the 1990s and 2000s, **concatenative** synthesis became dominant. Instead of generating speech from rules, it **joined together** pieces of recorded human speech, selected from a large database of recordings of a single speaker. In **unit selection** synthesis, the system chose the best-matching pieces, of various sizes, to minimize audible joins. The result sounded much more natural, though it could still have audible glitches, and changing the voice required recording a new speaker for many hours.

## Neural synthesis

In 2016, researchers at DeepMind introduced **WaveNet**, a neural network that generated speech waveforms directly, sample by sample, after training on recordings. Neural synthesis rapidly surpassed earlier methods in naturalness, and is now used in most commercial systems. Modern neural systems can produce speech that listeners often cannot distinguish from human speech, with natural prosody and even emotional expression.

## What synthesis taught phonetics

Each generation of synthesis has drawn on and contributed to phonetic knowledge. Formant synthesis tested the source–filter theory and the rules of duration and intonation; concatenative synthesis revealed how much natural speech depends on fine coarticulatory detail; neural synthesis shows that speech can be modeled statistically from data, raising new questions about what phonetic theory contributes.

> **Pause and consider.** Why did Stephen Hawking decline to change his synthesized voice?`,
    },
    {
      title: "Teaching Machines to Listen",
      body: `## Early recognizers

The first automatic speech recognizer, **Audrey**, built at Bell Laboratories in **1952**, could recognize the digits zero to nine spoken by a single speaker, by matching the formant patterns of the vowels. Through the 1960s and 1970s, systems improved slowly, recognizing small vocabularies of isolated words, usually from speakers they had been trained on.

## Statistical models

A breakthrough came in the 1970s and 1980s with **statistical** methods, especially **hidden Markov models** (HMMs), developed for speech by researchers including **James Baker** and **Frederick Jelinek** at IBM. Instead of encoding phonetic rules, these systems learned the statistical relations between acoustic patterns and speech sounds from large amounts of recorded and transcribed speech, and combined them with statistical **language models** predicting likely sequences of words. A remark often attributed to Jelinek, "Every time I fire a linguist, the performance of the speech recognizer goes up," captured the shift from rule-based to data-driven methods, though Jelinek himself later said it had been exaggerated.

## Deep learning

From about 2010, **deep neural networks** transformed speech recognition again, reducing error rates dramatically. By the late 2010s, systems trained on thousands of hours of speech could transcribe conversational English with accuracy approaching that of human transcribers under favorable conditions. Speech recognition became part of everyday life in voice assistants, dictation, automatic captions, and customer service.

## Remaining challenges

Despite these advances, speech recognition still struggles with:

- **noise** and multiple overlapping speakers;
- **conversational** speech, with its reductions and disfluencies;
- **children's** voices and the voices of older people;
- **accents** and **dialects** underrepresented in the training data;
- speakers with **speech disorders**.

## Bias

In 2020, **Allison Koenecke** and colleagues published a study in the *Proceedings of the National Academy of Sciences* testing commercial speech recognition systems from five major companies. They found that the systems made substantially more errors on recordings of Black American speakers than of white American speakers, an average error rate roughly twice as high. The disparity was attributed mainly to differences in the acoustic models, reflecting training data that underrepresented African American English. Similar disparities have been found for speakers of other dialects and for non-native speakers. Such findings show that speech technology can reproduce and amplify social inequalities, and that phonetic and sociolinguistic knowledge is needed to address them.

## Phonetics and recognition

Although modern recognizers learn from data rather than rules, phonetic knowledge remains relevant: in understanding errors, in designing systems for new languages and accents, in collecting representative data, and in building systems for speakers with disorders. The history of speech recognition shows both the power of statistical learning and the continuing importance of understanding how speech varies.

> **Pause and consider.** Why might a speech recognizer trained mostly on one variety of English perform worse on others?`,
    },
    {
      title: "Cloned Voices and Deepfakes",
      body: `## Voices that are not real

Modern neural synthesis can **clone** a voice: after training on recordings of a particular person, sometimes only a few seconds or minutes, a system can generate new speech that sounds like that person saying things they never said. This technology has legitimate uses, such as restoring the voices of people who have lost the ability to speak through illness, creating voices for audiobooks and games, and dubbing films. But it also raises serious concerns.

## Fraud and deception

Cloned voices have been used in **fraud**: criminals have imitated the voices of company executives to authorize payments, and the voices of family members to request emergency money. **Audio deepfakes** of public figures saying things they did not say can spread misinformation, especially during elections. As synthetic voices become indistinguishable from real ones, listeners can no longer trust that a familiar voice belongs to the person it seems to.

## Detection

Researchers are developing methods to **detect** synthetic speech, looking for subtle acoustic artifacts that synthesis systems leave, such as unnatural patterns in the phase of the signal, in breathing, or in fine spectral detail. Competitions such as the **ASVspoof** challenges, run since 2015, have tested detection methods against increasingly sophisticated synthesis. But detection is an arms race: as detectors improve, synthesis improves to evade them.

## Forensic implications

As we saw in PHO 101, **forensic phoneticians** analyze recorded voices for legal purposes. The rise of synthetic voices complicates their work: a recording can no longer be assumed to be authentic, and analysts must consider whether it may have been generated or altered. Courts and legal systems are beginning to address these challenges.

## Consent and ownership

Voice cloning raises questions of **consent** and **ownership**. Who owns a person's voice? May a company clone the voice of an actor without permission, or after their death? In some countries, laws are being developed to protect individuals' voices from unauthorized use. Voice actors and other performers have campaigned for such protections.

## Responsible use

Many researchers and companies have adopted principles for responsible use of voice synthesis: obtaining consent from speakers, marking synthetic speech so that listeners know it is not human (sometimes with inaudible **watermarks**), and refusing to clone voices without permission. Students of phonetics, who understand how voices work, have a particular responsibility to consider the ethical implications of these technologies.

## The value of a voice

The concerns about cloned voices remind us how deeply a voice is tied to a person's identity. We recognize our friends by their voices, trust what we hear from familiar speakers, and treasure recordings of those who have died. The technology that can now imitate any voice makes it more important than ever to understand, and protect, this aspect of human identity.

> **Pause and consider.** Should synthetic speech always be labeled as synthetic? What would be the advantages and difficulties of such a rule?`,
    },
    {
      title: "Speech Technology for Every Language",
      body: `## A digital divide

Speech recognition and synthesis work well for a few dozen of the world's languages, especially those with many speakers and abundant recorded and written data, such as English, Mandarin, Spanish, and French. For the great majority of the world's roughly seven thousand languages, little or no speech technology exists. Speakers of these languages cannot dictate messages, use voice assistants, or receive automatic captions in their own languages, a **digital divide** that reinforces the dominance of a few major languages.

## The data problem

Modern speech technology depends on **large amounts of data**: thousands of hours of transcribed speech for recognition, and many hours of high-quality recordings for synthesis. Most languages lack such resources. Many are spoken by small communities, have no standard writing system, or have few people trained to transcribe them.

## Approaches

Researchers have developed several approaches to building speech technology for languages with limited data:

- **Multilingual models**, trained on many languages at once, can transfer knowledge from well-resourced languages to less-resourced ones.
- **Self-supervised learning**, in which models learn from untranscribed audio, reduces the need for transcriptions.
- **Community data collection**: projects such as **Mozilla Common Voice**, launched in 2017, invite volunteers around the world to record and validate sentences in their languages, building openly available datasets for dozens of languages, including many with few speakers.

## Endangered languages

For **endangered** languages, speech technology can support documentation and revitalization: automatic transcription can speed the processing of recordings, which, as we saw in Lesson I, often wait years to be transcribed; synthesized speech can help learners hear pronunciation; and apps can make language learning accessible to young people. But such projects must be led by, or carried out in partnership with, the communities themselves, respecting their decisions about how their languages and recordings are used.

## Phonetic knowledge matters

Building technology for a new language requires phonetic knowledge: understanding its sound system, its tones or other prosodic features, its dialect variation, and the ways its speakers actually talk. Linguists and phoneticians, working with native speakers, contribute essential expertise. As we saw throughout this course, the sounds of the world's languages are far more varied than those of the major languages on which speech technology was first developed.

## Many voices

The Apostle Paul wrote, "There are, it may be, so many kinds of voices in the world, and none of them is without signification" (1 Corinthians 14:10). The diversity of human languages and voices is one of the great riches of humanity. The challenge for speech technology, and for phonetics, is to serve all of them, not only a few.

> **Pause and consider.** What would it mean for speakers of a small language to have no speech technology in their language, as more of daily life involves talking to machines?`,
    },
    {
      title: "The Speech Chain Revisited",
      body: `## Looking back

In Lesson I, we met **Denes** and **Pinson**'s image of the **speech chain**, linking the mind of a speaker to the mind of a listener through linguistic, physiological, and acoustic levels. In this course, we have studied the **acoustic** link in detail, and its connections to the links on either side.

## What we have learned

We began with the **physics of sound**: waves of pressure, frequency and pitch, amplitude and loudness, periodic and aperiodic sounds, Fourier's discovery that complex waves are sums of simple ones, resonance, and the ear's analysis of sound. We learned how speech is recorded and digitized, and took our first steps in **Praat**.

We then studied the **source–filter theory**, which explains how the voice source and the vocal tract filter combine to produce vowels, and how **formants** reflect the shape of the vocal tract. We measured and plotted vowels, and saw how vowel acoustics illuminate accents, singing, and sound change.

We learned to read **spectrograms**, and studied the acoustic cues to consonants: bursts, transitions, the locus, VOT, fricative noise, nasal murmurs, and the formants of approximants. We saw that each distinction is signaled by many cues, and that the lack of invariance poses a deep puzzle for theories of perception.

We measured **prosody**: pitch, duration, and intensity, and their roles in intonation, tone, stress, rhythm, emotion, and conversation, and learned to manipulate speech to test what listeners use.

Finally, we studied **speech perception** and **speech technology**: categorical perception, the motor theory and its rivals, the McGurk effect, top-down knowledge, word recognition, adaptation to speakers, and the history and challenges of machines that speak and listen.

## Connections

Throughout the course, we have seen how acoustic phonetics connects with other fields: with **articulatory phonetics** (PHO 101), which explains how the acoustic patterns are produced; with **phonology**, which studies how languages organize sounds into systems; with **historical linguistics** (HIL 101), which studies how sounds change; with **sociolinguistics** (SOC 101 and SOC 110), which studies how speech varies among communities; and with psychology, neuroscience, engineering, and medicine.

## Looking forward

Phonetics continues to change rapidly. Large corpora and automatic tools allow studies of unprecedented scale; imaging techniques reveal the vocal tract and the brain in action; and speech technology raises new scientific and ethical questions. Yet the fundamental questions remain those that Helmholtz, Bell, Sweet, and Ladefoged asked: How do we make the sounds of speech, how do they carry meaning through the air, and how do we understand them?

## A closing thought

Every conversation is a small marvel: a thought in one mind becomes movements of muscles, then waves in the air, then vibrations in an ear, then a thought in another mind, all in a fraction of a second, and usually without either person noticing. Acoustic phonetics allows us to see and measure one link in that chain, and to appreciate the extraordinary precision of something we do every day.

> **Pause and consider.** Which finding in this course most changed the way you think about speech?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Categorical perception

> Liberman et al. (1957): sharp identification boundaries along a [b]–[d]–[g] continuum, with poor discrimination within categories

**Questions**

1. Describe the identification and discrimination results.
2. How did Kuhl and Miller's chinchilla study change the interpretation?

## 2. The McGurk effect

> Audio [ba] dubbed onto video [ga]: most viewers hear [da].

**Questions**

1. Why [da]?
2. What does the effect show about speech perception?

## 3. Phonemic restoration

> Warren (1970): the [s] in *legislatures* replaced with a cough is still "heard."

**Questions**

1. Explain the effect.
2. What does it show about top-down processing?

## 4. Bias in recognition

> Koenecke et al. (2020): commercial recognizers made about twice as many errors for Black American speakers as for white American speakers.

**Questions**

1. What explanation did the authors give?
2. How might phonetic knowledge help address the problem?

## Drawing the threads together

In a paragraph, explain how listeners and machines recognize speech, and what challenges both face, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Acoustic and Auditory Phonetics", author: "Keith Johnson", publisher: "Wiley-Blackwell", year: "3rd ed., 2011", note: "Read the chapters on speech perception." },
    { kind: "book", title: "Hearing Lips and Seeing Voices", author: "Harry McGurk and John MacDonald", publisher: "Nature 264", year: "1976", note: "A two-page classic; read it in full." },
    { kind: "book", title: "Racial Disparities in Automated Speech Recognition", author: "Allison Koenecke and others", publisher: "Proceedings of the National Academy of Sciences 117", year: "2020", note: "Read the abstract and discussion." },
  ],
  media: [
    { kind: "book", title: "Native Listening: Language Experience and the Recognition of Spoken Words", author: "Anne Cutler", publisher: "MIT Press", year: "2012", note: "Read the first chapter." },
    { kind: "book", title: "The Speech Chain: The Physics and Biology of Spoken Language", author: "Peter B. Denes and Elliot N. Pinson", publisher: "W. H. Freeman", year: "2nd ed., 1993", note: "Read the final chapter on speech technology, and compare it with the state of the field today." },
  ],
  questions: [
    {
      prompt: "What is categorical perception?",
      choices: [
        "Perceiving all sounds equally",
        "Perceiving a continuum as discrete categories with sharp boundaries and poor within-category discrimination",
        "Perceiving only vowels",
        "Perceiving only categories of words",
      ],
      answer: 1,
      explanation: "Demonstrated by Liberman and colleagues in 1957.",
    },
    {
      prompt: "What did Kuhl and Miller show with chinchillas?",
      choices: [
        "That chinchillas can talk",
        "That chinchillas show a [da]–[ta] boundary close to humans', suggesting general auditory mechanisms",
        "That chinchillas cannot hear speech",
        "That categorical perception is unique to humans",
      ],
      answer: 1,
      explanation: "Published in 1975.",
    },
    {
      prompt: "What does the motor theory claim listeners perceive?",
      choices: [
        "Formants",
        "The speaker's intended articulatory gestures",
        "Words only",
        "Pitch",
      ],
      answer: 1,
      explanation: "Liberman and Mattingly, 1985.",
    },
    {
      prompt: "What do most viewers hear in the classic McGurk effect?",
      choices: ["[ba]", "[ga]", "[da]", "[pa]"],
      answer: 2,
      explanation: "Audio [ba] with video [ga].",
    },
    {
      prompt: "What is the Ganong effect?",
      choices: [
        "A shift in category boundaries toward the sound that makes a real word",
        "The restoration of a missing sound",
        "An audiovisual illusion",
        "A type of synthesis",
      ],
      answer: 0,
      explanation: "Ganong, 1980.",
    },
    {
      prompt: "In the cohort model, when is a word recognized?",
      choices: [
        "Only at its end",
        "At its uniqueness point, when it becomes distinct from all other words",
        "Before it begins",
        "After the sentence ends",
      ],
      answer: 1,
      explanation: "Often before the word is complete.",
    },
    {
      prompt: "What did Norris, McQueen, and Cutler (2003) show?",
      choices: [
        "That listeners cannot adapt to speakers",
        "That listeners use word knowledge to adjust their sound categories for a particular speaker",
        "That accents are unintelligible",
        "That vowels are categorical",
      ],
      answer: 1,
      explanation: "Lexically guided perceptual learning.",
    },
    {
      prompt: "What was the Voder?",
      choices: [
        "A speech recognizer",
        "An electrical speech synthesizer operated from a keyboard, shown at the 1939 World's Fair",
        "A spectrograph",
        "A hearing aid",
      ],
      answer: 1,
      explanation: "Built by Homer Dudley at Bell Laboratories.",
    },
    {
      prompt: "What was a key advance in speech recognition in the 1970s and 1980s?",
      choices: [
        "Phonetic rules",
        "Statistical methods such as hidden Markov models",
        "Mechanical vocal tracts",
        "Spectrogram reading",
      ],
      answer: 1,
      explanation: "Developed by researchers including Baker and Jelinek.",
    },
    {
      prompt: "Which of these is a legitimate use of voice cloning?",
      choices: [
        "Impersonating an executive to authorize payments",
        "Restoring the voice of a person who has lost the ability to speak, with their consent",
        "Creating fake political statements",
        "Bypassing voice authentication",
      ],
      answer: 1,
      explanation: "Consent is essential.",
    },
  ],
  reflection:
    "Listeners and machines both face the task of turning sound into words. In 500–800 words, compare how human listeners recognize speech (drawing on categorical perception, the McGurk effect, top-down knowledge, and perceptual learning) with how speech recognition systems do it, and reflect on the ethical questions raised by modern speech technology, from bias to cloned voices.",
};
