import type { Lesson } from "@/lib/schema";

export const lesson4: Lesson = {
  title: "Pitch, Time, and Loudness: The Acoustics of Prosody and Voice",
  summary:
    "The three acoustic dimensions of prosody; how Praat tracks pitch and how it goes wrong; displaying intonation and declination; measuring tone; segment durations and what lengthens them; speaking rate and pauses; intensity and the cues to stress; measuring rhythm; jitter, shimmer, and other voice measures; resynthesis and manipulation of speech; designing perception experiments; and good practice in acoustic research.",
  pages: [
    {
      title: "Prosody in the Signal",
      body: `## Three dimensions

In PHO 101, we studied **prosody**: stress, tone, intonation, rhythm, and length. In this lesson, we study how these features appear in the acoustic signal. Acoustically, prosody is carried mainly by three dimensions:

- **fundamental frequency** (F0), perceived as **pitch**;
- **duration**, the length of sounds, syllables, and pauses;
- **intensity**, perceived as **loudness**.

To these we may add **spectral** properties, such as vowel quality and voice quality, which also contribute to prosodic prominence.

## Measuring prosody

Unlike vowel and consonant quality, which require analysis of the spectrum, the basic prosodic dimensions can be measured relatively simply:

- F0 can be estimated by finding the period of the repeating pattern in voiced speech;
- duration can be measured by marking the boundaries of sounds and syllables, as we learned in Lesson III;
- intensity can be computed from the amplitude of the waveform.

Praat displays all three: the **pitch** track as a blue line over the spectrogram, the **intensity** curve as a yellow line, and durations from the selections and annotations.

## Why prosody is hard

Despite the simplicity of the measurements, the analysis of prosody is challenging, for several reasons:

- Each prosodic function (stress, tone, intonation, emotion) uses the **same** dimensions, so that a single F0 contour may reflect several functions at once.
- Prosody varies greatly among speakers, styles, and contexts.
- The relation between acoustic measurements and what listeners perceive is complex, as we saw in Lesson I with pitch and loudness.

This lesson introduces the tools and concepts needed to address these challenges.

## Practical work

This lesson is more practical than the previous ones. Students should have Praat open and record their own speech as they read. Each page suggests measurements to try. By the end of the lesson, you should be able to measure the pitch, duration, and intensity of your own speech, compare different utterances, and manipulate a recording to test how listeners respond to changes in prosody.

## The voice

The second part of the lesson turns from prosody to **voice quality**, the acoustic measurement of how the vocal folds vibrate, which we began to study in Lesson II. These measures are used in research on phonation types, in sociophonetics, and, with caution, in the clinical assessment of voice disorders.

> **Pause and consider.** If a single pitch contour can express stress, intonation, and emotion at once, how might a listener tell which is which?`,
    },
    {
      title: "Tracking Pitch",
      body: `## How a computer finds F0

A **pitch tracker** is an algorithm that estimates the fundamental frequency of a voiced sound over time. Most pitch trackers look for the **period** of the repeating pattern in the waveform: they compare the signal with delayed copies of itself, and find the delay at which the signal best matches itself. This delay is the period, and its inverse is the F0. This method is called **autocorrelation**. Praat's standard pitch tracker, described by **Paul Boersma** in 1993, uses a refined form of autocorrelation.

## Settings

The user must set a **pitch floor** and a **pitch ceiling**, the lowest and highest F0 values the tracker will search for. Praat's defaults are 75 Hz and 500 Hz (the ceiling is 600 Hz in some recent versions). For an adult male voice, a range of about 75 to 300 Hz is often appropriate; for an adult female voice, about 100 to 500 Hz. Choosing a range suited to the speaker reduces errors.

## Common errors

Pitch tracking can go wrong in several ways:

- **Octave errors**: the tracker may report a value **twice** or **half** the true F0, by matching every other cycle or by treating a strong second harmonic as the fundamental. These errors appear as sudden jumps in the pitch track.
- **Creaky voice**: in creak, the vocal folds vibrate slowly and irregularly, and the tracker may fail or report very low values. As we saw in PHO 101, creak is common at the ends of utterances.
- **Voiceless sounds**: the tracker should report no F0 during voiceless sounds, but noise may produce spurious values.
- **Background noise and music** can confuse the tracker.

Always check a pitch track by listening and by looking at the narrowband spectrogram, where the harmonics should rise and fall with the pitch track.

## Microprosody

Even when a speaker intends a steady pitch, the F0 is affected by the segments being produced. These small effects are called **microprosody**:

- **Intrinsic F0**: **high** vowels such as [i] and [u] have a slightly **higher** F0 than low vowels such as [a], by about 10 to 15 Hz in typical voices. **Douglas Whalen** and **Andrea Levitt**, in a survey of 31 languages published in 1995, found this effect in every language examined, suggesting it has a physiological basis, probably the pull of the raised tongue on the larynx.
- **Consonant effects**: F0 is **higher** after voiceless consonants and **lower** after voiced ones, at the beginning of the following vowel. As we saw in Lesson III, this effect is the origin of tones in many languages.

When analyzing intonation, researchers must distinguish such segmental effects from the intended pitch movements.

## Reporting F0

F0 is usually reported in **hertz**, but for comparing speakers or describing intonation, it is often converted to **semitones**, a logarithmic scale that reflects pitch perception, as we saw in Lesson I. A rise from 100 to 200 Hz in a male voice and from 200 to 400 Hz in a female voice are both rises of twelve semitones (one octave), and are perceived as equivalent movements.

> **Pause and consider.** Record yourself saying "Is it ready?" Where do you expect the pitch tracker to show the biggest movement?`,
    },
    {
      title: "Displaying Intonation",
      body: `## The pitch contour

An **intonation contour** is a plot of F0 over time for an utterance. In Praat, it appears as a line over the spectrogram, broken during voiceless sounds and pauses. A typical English declarative sentence shows peaks on accented syllables, a general downward trend, and a fall at the end.

## Declination

Across a sentence, F0 tends to **decline** gradually: each successive peak is lower than the one before, and the baseline falls. This **declination** was studied in detail by Dutch researchers at the Institute for Perception Research in Eindhoven, including **Johan 't Hart**, **René Collier**, and **Antonie Cohen**, whose book *A Perceptual Study of Intonation* (1990) analyzed Dutch intonation as a series of perceptually relevant pitch movements superimposed on declination. Declination may be partly physiological, as subglottal pressure falls during a breath group, and partly controlled by speakers, who reset their pitch at the beginnings of new phrases. Listeners seem to expect declination and judge later peaks as equally prominent as earlier, higher ones.

## Stylization

Raw pitch tracks are full of small variations that listeners do not perceive as meaningful. 't Hart and his colleagues developed the technique of **close-copy stylization**: replacing the raw contour with a series of straight lines, the smallest number that sounds perceptually identical to the original when resynthesized. This showed which parts of the contour are meaningful. Praat can stylize pitch contours in a similar way.

## Annotating intonation

To annotate intonation, researchers use systems such as **ToBI**, which we met in PHO 101, marking pitch accents (such as H\\* for a high peak on a stressed syllable, L+H\\* for a rising accent) and boundary tones (such as L-L% for a final fall, H-H% for a final rise) on a separate tier of a TextGrid. The annotation records the categories a trained listener hears, while the pitch track records the continuous physical signal.

## Measuring pitch accents

Common measurements of pitch accents include:

- the **height** of the peak, in hertz or semitones;
- the **alignment** of the peak: where it falls relative to the accented syllable (early, at the vowel, or late). Studies have shown that peak alignment is remarkably consistent within a language and differs between languages and dialects; for example, peaks in some varieties of Spanish and Greek are aligned later in the syllable than in English;
- the **range** of the movement.

## Questions and statements

A simple exercise is to compare the pitch contours of a statement and a question with the same words: "You're coming." and "You're coming?" In most varieties of English, the statement ends with a fall and the question with a rise, though, as we saw in PHO 101, there is much variation, including uptalk.

## Intonation across languages

Comparing pitch contours across languages reveals differences in how intonation is organized: the size of pitch movements, the alignment of peaks, the shape of question contours, and the use of declination. Learners of a second language often transfer their native intonation, and visual displays of pitch, comparing a learner's contour with a native speaker's, have been used in pronunciation teaching since the 1970s.

> **Pause and consider.** Record "You're coming." and "You're coming?" Compare their pitch contours. Where do they differ?`,
    },
    {
      title: "Measuring Tone",
      body: `## Tone in the signal

In a tone language, as we saw in PHO 101, each syllable carries a lexical tone. Acoustically, tones are realized mainly as patterns of F0 over the syllable: level, rising, falling, or dipping. The four tones of **Mandarin** appear clearly in pitch tracks: tone 1 high and level; tone 2 rising; tone 3 low, often with a dip and a final rise when spoken in isolation; tone 4 falling steeply.

## Normalizing for speakers

Because speakers differ in their pitch ranges, tone researchers usually **normalize** F0 before comparing speakers. One common method converts each F0 value into a **z-score**, the number of standard deviations from the speaker's mean. Another, often used in Chinese linguistics, converts F0 into a five-level scale corresponding to **Chao**'s tone letters, which we met in PHO 101. Normalization allows the tone shapes of men, women, and children to be compared directly.

## Tones in context

Tones in connected speech differ from tones spoken in isolation. **Yi Xu**, in a study of Mandarin published in 1997, showed that each tone is strongly affected by the tones before and after it: a high tone after a low tone begins lower than a high tone after a high tone, because the larynx takes time to move. This **tonal coarticulation** is similar to the coarticulation of consonants and vowels. Xu argued that each tone has an underlying **pitch target**, which speakers approach as closely as time allows. In fast speech, targets may be undershot.

Tone **sandhi**, as we saw in PHO 101, is a more categorical change, in which one tone is replaced by another in certain contexts, such as the Mandarin third tone becoming a second tone before another third tone. Acoustic studies have examined whether sandhi tones are truly identical to the tones they replace; some studies have found small differences, a case of **incomplete neutralization** like those we saw in Lesson III.

## Tone and phonation

As we saw in PHO 101, in many tone languages, tones are associated with particular phonation types. Acoustic studies of languages such as **Vietnamese**, **Hmong**, and **Burmese** combine F0 measurements with measures of voice quality, such as H1–H2, which we met in Lesson II. These studies show that listeners use both pitch and voice quality to identify tones, and that the relative importance of the two varies among languages and speakers.

## Tone and intonation

Tone languages also have **intonation**. In Mandarin, a question may be marked by raising the whole pitch range of the final syllables, while the tones keep their shapes. Acoustic analysis must separate the lexical tones from the intonational effects, a task that requires careful experimental design, comparing the same tones in different sentence types.

## Fieldwork on tone

Many tone languages, especially in Africa, Asia, and the Americas, are poorly documented. Linguists working in the field use Praat to record and analyze tones, often discovering distinctions that are hard to hear. Ladefoged and his colleagues emphasized that careful acoustic analysis, combined with the judgments of native speakers, is essential for describing tone accurately.

> **Pause and consider.** Why might a Mandarin high tone begin lower after a low tone than after another high tone?`,
    },
    {
      title: "Duration",
      body: `## Measuring time

The **duration** of a sound is measured from its beginning to its end, as marked on the waveform and spectrogram. As we saw in Lesson III, the boundaries between sounds are not always sharp, so phoneticians follow consistent conventions: for example, measuring a vowel from the onset of voicing after a stop to the end of the second formant before the next consonant.

## What affects duration?

Segment durations in English vary widely, depending on many factors. **Dennis Klatt**, in an influential review published in 1976, "Linguistic Uses of Segmental Duration in English," summarized the main effects:

- **Inherent duration**: some sounds are longer than others. Low vowels like [æ] are longer than high vowels like [ɪ]; tense vowels longer than lax.
- **Stress**: stressed syllables are longer than unstressed ones.
- **Following consonant**: vowels are longer before voiced consonants than before voiceless ones (**pre-fortis clipping**, which we met in PHO 101).
- **Position in the phrase**: syllables at the **end of a phrase or sentence** are lengthened, a very general effect called **phrase-final lengthening**.
- **Number of syllables**: in longer words, each syllable tends to be shorter.
- **Speaking rate**: faster speech shortens everything, but not equally; vowels are compressed more than consonants.

Klatt formulated a set of **duration rules** to predict segment durations from these factors, which he used in his speech synthesis system, as we will see in Lesson V.

## Phrase-final lengthening

**Phrase-final lengthening** is found in many languages and helps listeners identify the boundaries of phrases. The same word is longer at the end of a sentence than in the middle: compare the duration of *Dan* in "Dan arrived" and "I saw Dan." Listeners use lengthening, along with pauses and pitch, to parse speech into phrases.

## Duration and contrast

In languages with phonemic **length**, as we saw in PHO 101, duration distinguishes words. In Japanese, long vowels are typically about twice as long as short ones; in Finnish, the ratio is often greater. Acoustic studies show that length contrasts are maintained even when speaking rate changes, because listeners judge duration **relative** to the surrounding speech.

## Duration as a cue

Duration contributes to many distinctions:

- vowel length cues the voicing of following consonants (*bead* versus *beat*);
- closure duration cues voicing of stops (*rabid* versus *rapid*), as we saw in Lesson III;
- duration cues stress, as we will see below;
- the duration of the silence before frication cues affricates (*chip* versus *ship*).

## Measuring duration in Praat

In Praat, duration can be measured by selecting a stretch and reading its length, or, more systematically, by annotating intervals in a TextGrid and using a script to extract their durations. For reliable results, measure many tokens, use consistent criteria for boundaries, and report the speaking context.

> **Pause and consider.** Record "Dan arrived" and "I saw Dan." Measure the duration of *Dan* in each. Which is longer, and why?`,
    },
    {
      title: "Speaking Rate and Pauses",
      body: `## How fast do we speak?

**Speaking rate** is usually measured in **syllables per second**. In ordinary English conversation, speakers typically produce about **four to six syllables per second**, though rates vary widely among individuals, situations, and languages. Researchers distinguish:

- **speaking rate**, the number of syllables divided by the **total** time, including pauses;
- **articulation rate**, the number of syllables divided by the time spent **speaking**, excluding pauses.

The distinction matters because speakers differ more in how much they pause than in how fast they articulate.

## Languages and rate

Do some languages sound faster than others? Spanish and Japanese often strike English listeners as very fast. In a study published in 2011, **François Pellegrino**, **Christophe Coupé**, and **Egidio Marsico** compared seven languages and found that languages with less information per syllable, such as Spanish and Japanese, were spoken at more syllables per second than languages with more information per syllable, such as English and Mandarin, so that the rate of **information** transmitted was roughly similar. Later work with larger samples has supported a similar conclusion, though the measures of "information" are debated.

## Pauses

**Pauses** are an important part of speech timing. They occur at grammatical boundaries, especially between sentences and clauses; before words that are hard to retrieve; and when speakers are planning what to say. Pauses can be **silent** or **filled** with sounds such as *uh* and *um*.

Research by **Herbert Clark** and **Jean Fox Tree** (2002) suggested that *uh* and *um* are not random noises but words that speakers use to signal a delay: *uh* for a short delay, *um* for a longer one. Listeners use them to anticipate difficulties or new information. The use of filled pauses varies by language: English speakers say *uh* and *um*, French speakers *euh*, Japanese speakers *eto* or *ano*.

## Measuring pauses

In Praat, pauses can be identified as stretches of low intensity, and their durations measured. Researchers often set a minimum duration, such as 150 or 250 milliseconds, to distinguish meaningful pauses from the brief silences of stop closures.

## Fluency

Measures of speaking rate and pausing are used to assess **fluency**, especially in second-language learners. Fluent speakers tend to have higher articulation rates, fewer and shorter pauses, and pauses at grammatical boundaries rather than within phrases. Such measures are used in research and, increasingly, in automated language testing, though fluency also depends on factors that acoustic measures do not capture.

## Rate and perception

Listeners adjust their perception to the speaker's rate. As we saw in Lesson III, a given VOT may be heard as voiced in slow speech and voiceless in fast speech. Similarly, the perceived length of a vowel depends on the surrounding rate. This **rate normalization** is another example of how listeners interpret acoustic properties relative to their context.

> **Pause and consider.** Count the syllables you speak in ten seconds of natural conversation. What is your speaking rate?`,
    },
    {
      title: "Intensity and the Cues to Stress",
      body: `## Measuring intensity

**Intensity** is measured in decibels from the amplitude of the waveform, usually averaged over a short window. In Praat, it appears as a yellow line over the spectrogram. As we saw in Lesson I, intensity varies among sounds: vowels are more intense than consonants, low vowels more than high vowels. Intensity also depends on the speaker's effort, the distance from the microphone, and the recording settings, so absolute values are rarely meaningful; comparisons within a recording are what matter.

## Intensity and stress

As we saw in PHO 101, **Dennis Fry**, in experiments in the 1950s, found that listeners rely more on pitch and duration than on intensity to perceive stress in English. This finding was influential, but later research has refined it.

In a study published in 1996, **Agaath Sluijter** and **Vincent van Heuven** found that, in Dutch, stressed syllables differ from unstressed ones not so much in overall intensity as in **spectral balance**: stressed syllables have relatively more energy at **higher frequencies**, because speakers produce them with more vocal effort, which strengthens the higher harmonics. Listeners are sensitive to this difference. Later studies found similar effects in English and other languages. The overall intensity of a syllable is affected by many factors, such as vowel quality, but spectral balance is a more specific cue to stress.

## Accent and stress

It is important to distinguish **lexical stress**, the prominence that a word's stressed syllable has in all contexts, from **pitch accent** in the intonational sense, the pitch movement that marks the most important words in a phrase. In English, a stressed syllable in an accented word carries a pitch movement; a stressed syllable in an unaccented word does not, but is still longer and has a full vowel. Acoustic studies show that **duration** and **vowel quality** distinguish stressed from unstressed syllables even when there is no pitch accent, while **pitch** marks the accented words.

## Stress in other languages

The acoustic correlates of stress differ among languages. In some languages, such as Spanish, duration is a weaker cue than in English, because Spanish does not reduce unstressed vowels. In languages with phonemic length, such as Finnish, duration cannot be used freely for stress, since it already distinguishes words. Each language uses the acoustic dimensions available to it in its own way.

## Loudness in conversation

Beyond stress, intensity conveys emphasis, emotion, and turn-taking in conversation. Speakers raise their intensity when emphasizing a point, when angry or excited, and, as we saw with the Lombard effect in PHO 101, in noisy environments. They lower it for intimacy or secrecy. Acoustic measures of intensity, combined with pitch and duration, are used in research on emotional speech and conversation.

> **Pause and consider.** Record *PERmit* and *perMIT*. Measure the pitch, duration, and intensity of each syllable. Which measure differs most?`,
    },
    {
      title: "Measuring Rhythm",
      body: `## From impressions to numbers

As we saw in PHO 101, languages have been classified as **stress-timed**, **syllable-timed**, or **mora-timed**, but measurements did not support the idea of equal timing. Since the late 1990s, researchers have proposed **rhythm metrics**, numerical measures of the variability of durations, to capture the perceived differences.

## Interval measures

**Franck Ramus**, **Marina Nespor**, and **Jacques Mehler** (1999) divided speech into **vocalic** intervals (stretches of vowels) and **consonantal** intervals (stretches of consonants), and computed:

- **%V**, the percentage of total duration taken up by vocalic intervals;
- **ΔC**, the standard deviation of consonantal interval durations.

English and Dutch had low %V and high ΔC, reflecting complex consonant clusters and reduced vowels; Spanish, Italian, and French had higher %V and lower ΔC; Japanese had the highest %V.

## The Pairwise Variability Index

**Esther Grabe** and **Ee Ling Low** (2002) proposed the **Pairwise Variability Index** (PVI), which measures how much **successive** intervals differ in duration. The **normalized** PVI for vowels (nPVI) is computed by taking each pair of adjacent vowel durations, calculating their difference divided by their mean, and averaging over the utterance. A high nPVI indicates strong alternation of long and short vowels, as in English and German; a low nPVI indicates more even durations, as in Spanish and French. Grabe and Low found that **Singapore English** had a lower nPVI than British English, consistent with the impression that it sounds more syllable-timed.

## Using the metrics

These metrics can be computed in Praat from annotated recordings. A useful exercise is to record a short passage in English and, if possible, another language, mark the vocalic and consonantal intervals, and compute %V, ΔC, and nPVI.

## Criticisms

The rhythm metrics have been criticized. **Amalia Arvaniti**, in a study published in 2012, showed that the values of the metrics vary greatly depending on the speaker, the speaking style, and especially the **materials**: sentences with many consonant clusters give "stress-timed" values, and sentences with simple syllables give "syllable-timed" values, even within the same language. The metrics may thus reflect syllable structure more than rhythm as listeners perceive it. Arvaniti and others have argued that rhythm should be understood in terms of the grouping and prominence of syllables, as perceived by listeners, rather than in terms of durational variability alone.

## What rhythm is

The debate over rhythm metrics illustrates a general problem in acoustic phonetics: a perceptual impression may not correspond to any simple acoustic measure. Rhythm seems to emerge from the interaction of syllable structure, vowel reduction, stress, pitch, and the listener's expectations. Measuring it requires attention to all of these.

## Music and speech

The PVI has also been used to compare the rhythm of a language with the rhythm of its music. **Aniruddh Patel** and **Joseph Daniele** found, in 2003, that English instrumental music of the late nineteenth and early twentieth centuries had a higher nPVI for note durations than French music of the same period, paralleling the difference between the two languages. The finding suggests that composers may unconsciously reflect the rhythm of their native language in their music, though it remains debated.

> **Pause and consider.** Why might a passage full of consonant clusters produce "stress-timed" rhythm values, even in a language like Spanish?`,
    },
    {
      title: "Measuring the Voice",
      body: `## Voice measures

In Lesson II, we met **H1–H2** and **spectral tilt** as measures of voice quality. Several other measures are widely used, in research and in the clinic.

## Jitter and shimmer

- **Jitter** measures the cycle-to-cycle variation in the **period** of vocal fold vibration. A perfectly regular voice would have zero jitter; real voices have a small amount, typically less than one percent.
- **Shimmer** measures the cycle-to-cycle variation in **amplitude**.

Higher values of jitter and shimmer indicate a less regular voice, which may sound rough or hoarse. They are increased in creaky voice, in some voice disorders, and in aging voices.

## Harmonics-to-noise ratio

The **harmonics-to-noise ratio** (HNR), which we met in Lesson II, compares the periodic and aperiodic components of the voice. A healthy voice typically has a high HNR; a breathy or hoarse voice, a lower one.

## Cepstral peak prominence

A more recent and robust measure is **cepstral peak prominence** (CPP), introduced by **James Hillenbrand** and colleagues in 1994. The **cepstrum**, a further transformation of the spectrum, has a peak corresponding to the fundamental period in periodic voices. The **prominence** of this peak indicates how strongly periodic the voice is: high in a clear, well-phonated voice, low in a breathy or dysphonic one. CPP has the advantage that it can be computed for continuous speech, not just sustained vowels, and does not require accurate pitch tracking. It has become one of the most widely used acoustic measures in clinical voice assessment.

## Clinical use

**Speech-language pathologists** and **laryngologists** use acoustic measures, alongside listening and visual examination of the larynx, to assess voice disorders such as vocal fold nodules, polyps, paralysis, and the effects of aging and neurological disease. Measurements before and after treatment can document improvement. But acoustic measures are sensitive to recording conditions, the speaking task, and the software used, and must be interpreted carefully. They complement, and do not replace, clinical judgment.

## Sustained vowels and connected speech

Traditionally, voice measures were computed on **sustained vowels**, such as a prolonged [a], because these provide a steady signal. But sustained vowels do not represent how people use their voices in daily life. Measures such as CPP, which work on connected speech, allow clinicians and researchers to assess voices in more natural conditions.

## Voice and health

Research has explored whether acoustic measures of the voice could help detect conditions such as **Parkinson's disease**, depression, or respiratory illness. Some findings are promising, but such applications raise questions about accuracy, privacy, and consent, especially when voice data are collected by smartphones and other devices. As with forensic phonetics, which we met in PHO 101, claims about what can be inferred from a voice must be assessed carefully.

> **Pause and consider.** Why might measures that work on connected speech be more useful clinically than measures based only on sustained vowels?`,
    },
    {
      title: "The Sound of Emotion",
      body: `## Hearing feelings

Listeners can often tell how a speaker feels from their voice alone, even when they cannot understand the words. Acoustic phonetics has studied which properties of the voice convey **emotion**, a field sometimes called **vocal affect** research.

## Acoustic profiles

Studies in which actors portray emotions, or in which natural emotional speech is recorded, have found characteristic acoustic patterns:

- **Anger** (especially "hot" anger) and **joy**: higher mean F0, wider pitch range, greater intensity, faster rate, and more high-frequency energy in the spectrum.
- **Sadness**: lower mean F0, narrower pitch range, lower intensity, slower rate, and a softer, often breathier voice.
- **Fear**: high F0, often with irregular variation, and a fast rate.
- **Boredom** and **tenderness**: low, narrow pitch range and slow rate, with tenderness often softer and breathier.

A study published in 1996 by **Rainer Banse** and **Klaus Scherer**, analyzing portrayals of fourteen emotions by professional actors, found that many emotions could be distinguished acoustically, and that listeners recognized them well above chance. In a review of over a hundred studies, published in 2003, **Patrik Juslin** and **Petri Laukka** found that the acoustic cues to emotion in speech were strikingly similar to those in **music**: sad music, like sad speech, tends to be slow, low, and soft.

## Universals and culture

Are emotional voices understood across cultures? Studies have found that listeners can recognize basic emotions in the voices of speakers of unfamiliar languages **above chance**, but less accurately than in their own language and culture. Some cues, such as the raised pitch and intensity of high-arousal emotions, seem widely shared, perhaps reflecting the physiology of arousal; others are shaped by cultural conventions about how emotions should be expressed.

## Arousal and valence

Acoustic measures distinguish emotions more clearly along the dimension of **arousal** (excited versus calm) than along the dimension of **valence** (pleasant versus unpleasant). Anger and joy, both high in arousal, are acoustically similar in many respects, and listeners may confuse them without context. Distinguishing them requires subtler cues, such as voice quality and the shape of pitch contours.

## Applications

Research on vocal emotion has applications in **speech technology**, where systems attempt to recognize emotion in callers' voices or to synthesize expressive speech; in **clinical** settings, where flat prosody may be a sign of depression or of neurological conditions, as we saw with aprosodia in PHO 101; and in the study of **acting** and **singing**. Claims that machines can reliably detect a person's emotions or truthfulness from their voice, however, should be treated with caution: emotional expression varies greatly among individuals and situations, and acoustic cues are ambiguous.

> **Pause and consider.** Say "I can't believe it" as if delighted and then as if angry. What changes in your pitch, loudness, and rate?`,
    },
    {
      title: "Timing in Conversation",
      body: `## Taking turns

In conversation, speakers take **turns**, and they do so with remarkable precision. In a study published in 2009, **Tanya Stivers** and colleagues measured the gaps between questions and answers in conversations in **ten languages** from five continents, including Japanese, Danish, Tzeltal, and ǂĀkhoe Haiǁom. They found that in all ten, the most common gap was very short, around **200 milliseconds**, with only modest differences among languages: Japanese speakers responded slightly faster on average, Danish speakers slightly slower. The finding suggests a universal system for timing turns.

## Planning ahead

A gap of 200 milliseconds is shorter than the time it takes to plan and begin even a single word, which experiments suggest takes about 600 milliseconds or more. Speakers must therefore **predict** when the current speaker will finish, and begin planning their response while still listening. Researchers such as **Stephen Levinson** have argued that this ability to predict and respond quickly is a fundamental feature of human interaction.

## Prosodic cues to turn ends

How do listeners know when a turn is ending? Acoustic studies have identified several cues:

- **pitch**: a final fall, or, for questions, a final rise;
- **phrase-final lengthening** of the last syllable;
- a drop in **intensity**;
- changes in **voice quality**, such as creak at the end of a turn;
- the **grammatical** and **semantic** completeness of what has been said.

Listeners combine these cues, and experiments show that they can anticipate turn ends even when the words are filtered out, leaving only the prosody.

## Overlap and backchannels

Conversation also includes **overlaps**, when two speakers talk at once, and **backchannels**, short responses such as *mm-hm*, *yeah*, and *right*, which show attention without taking the turn. Backchannels have their own prosody, typically soft and short, with particular pitch patterns. Their frequency and form vary among cultures: in Japanese conversation, frequent backchannels called *aizuchi* are expected, and their absence may seem impolite.

## Measuring conversation

Studying conversation acoustically requires recordings with each speaker on a separate channel, careful annotation of the start and end of each turn, and measurement of gaps, overlaps, and prosodic features. Large corpora of recorded conversations have made such studies possible.

## Why it matters

Turn-taking research has practical applications. Voice assistants and dialogue systems must decide when a user has finished speaking; systems that wait too long seem sluggish, while those that interrupt seem rude. People with some communication disorders may have difficulty with turn timing. And second-language learners may need to learn the turn-taking conventions of a new culture as well as its sounds and words.

> **Pause and consider.** In your next conversation, notice how quickly you respond to questions. Do you begin planning your answer before the question is finished?`,
    },
    {
      title: "Changing Speech: Resynthesis",
      body: `## Manipulating recordings

One of the most powerful tools in acoustic phonetics is the ability to **change** a recording: to alter its pitch, duration, or other properties while keeping it sounding natural. This allows researchers to test which acoustic properties matter to listeners, by changing one property at a time.

## PSOLA

A widely used technique for changing pitch and duration is **PSOLA** (Pitch-Synchronous Overlap and Add), developed in the late 1980s by **Eric Moulines**, **Francis Charpentier**, and colleagues at France Télécom. PSOLA divides the voiced parts of a recording into short pieces, each centered on a glottal pulse. To **raise** the pitch, the pieces are moved closer together; to **lower** it, they are spread apart. To **lengthen** a sound, some pieces are repeated; to shorten it, some are omitted. Because each piece retains the spectral shape of the original, the formants, and hence the vowel quality, are preserved.

## Manipulation in Praat

Praat provides a **Manipulation** object that uses PSOLA. The user can:

- view the pitch contour as a series of points, drag them up or down, add or remove points, and hear the result;
- change the duration of any stretch by drawing a duration curve;
- replace the pitch contour with a stylized or artificial one, such as a flat monotone.

## Experiments with manipulation

Manipulation allows many experiments:

- **Monotone speech**: flattening the pitch contour of a sentence shows how much intonation contributes to intelligibility and naturalness.
- **Pitch continua**: gradually raising the final pitch of a statement creates a series of steps from statement to question, allowing researchers to find where listeners' judgments change.
- **Duration continua**: gradually lengthening the vowel of *beat* tests whether listeners begin to hear *bead*.
- **Transplanting prosody**: replacing a learner's pitch contour with a native speaker's tests how much of a foreign accent comes from prosody.

## Other synthesis methods

Other methods allow even more control. **Formant synthesis**, which we study in Lesson V, builds speech from an artificial source and filter, allowing precise control over each formant. **Source–filter resynthesis** analyzes a recording into a source and a filter, modifies one or both, and recombines them. Modern **neural** methods can change a voice in many ways, including making it sound like a different speaker, raising questions about authenticity that we consider in Lesson V.

## The value of manipulation

Manipulation turns acoustic phonetics into an **experimental** science. Instead of merely describing correlations between acoustic properties and perception, researchers can change a property and observe the effect. Many of the classic findings of speech perception, from the Haskins locus experiments to studies of intonation, depend on such manipulation.

> **Pause and consider.** Use Praat to flatten the pitch of a recorded sentence. How does it sound? What has been lost?`,
    },
    {
      title: "Designing a Perception Experiment",
      body: `## From measurement to perception

Acoustic measurements tell us what is in the signal; **perception experiments** tell us what listeners use. Designing a good perception experiment requires care.

## Continua

A common design creates a **continuum** of stimuli that vary along one acoustic dimension in equal steps, from one category to another: for example, a series of syllables with VOT values from 0 to 60 milliseconds, in steps of 10 milliseconds, ranging from [ba] to [pa]. The other properties are held constant.

## Identification and discrimination

Two tasks are commonly used:

- **Identification**: listeners hear each stimulus and label it, for example as *ba* or *pa*. Plotting the proportion of *pa* responses along the continuum produces an **identification function**, usually an S-shaped curve. The point where responses are 50 percent is the **category boundary**.
- **Discrimination**: listeners hear pairs or triads of stimuli and judge whether they are the same or different, or which one differs. This measures how well listeners can tell stimuli apart.

As we will see in Lesson V, comparing identification and discrimination is the basis for studies of **categorical perception**.

## Controlling variables

Good experiments control for factors that might affect the results:

- the **order** of stimuli is randomized, so that listeners cannot predict them;
- each stimulus is presented **several times**;
- **practice** trials familiarize listeners with the task;
- **listeners** are described (age, language background, hearing) and, where relevant, screened for hearing;
- the **listening conditions** (headphones, volume, quiet room) are consistent.

## Tools

Praat includes an **experiment** module (ExperimentMFC) for running simple identification and discrimination experiments. Other software, including web-based platforms, allows experiments to be run online with many participants, though with less control over listening conditions.

## Ethics

Experiments with human participants require attention to **ethics**. Participants must give **informed consent**, understanding what they will do and how their data will be used; their **privacy** must be protected, especially for recordings, which can identify a speaker; and they must be free to withdraw. Universities and research institutions have ethics committees that review studies before they begin. Recordings of speakers, especially from small communities, raise particular questions about ownership and use, which documentary linguists address in collaboration with the communities.

## Interpreting results

Results must be analyzed statistically, taking account of variation among listeners and items. As we will see on the next page, modern statistical methods allow researchers to model this variation. A good experiment yields not only an answer to its question but a measure of how confident we can be in that answer.

> **Pause and consider.** Design a simple experiment to test whether vowel duration alone can make listeners hear *beat* as *bead*. What would your continuum be?`,
    },
    {
      title: "Good Practice in Acoustic Research",
      body: `## Recording

Good research begins with good recordings. As we saw in Lesson I, phoneticians should use a quality microphone at a consistent distance, record in a quiet room, use an adequate sampling rate (at least 22,050 Hz for most purposes, higher for fricatives), save in an uncompressed format, and set recording levels to avoid clipping. Each recording should be documented: who was recorded, when, where, with what equipment, and with what consent.

## Annotation

Annotation should follow consistent, documented criteria for segment boundaries and labels. When several people annotate, their agreement should be checked. Automatic alignment, as we saw in Lesson III, should be verified.

## Measurement

Measurements should be made with stated settings (pitch range, formant ceiling, window length), and automatic measurements should be checked for errors. Outliers, such as pitch-tracking errors, should be identified and handled consistently, not simply deleted because they are inconvenient.

## Scripts and reproducibility

Using **scripts**, in Praat or other languages such as R or Python, rather than measuring by hand, makes research **reproducible**: another researcher can run the same script on the same data and obtain the same results. Many phoneticians now share their scripts and, where consent allows, their recordings and annotations, in public repositories. This practice allows results to be checked and extended.

## Statistics

Speech data are complex: many measurements come from the same speakers and the same words, and both speakers and words vary. Modern phonetic research commonly uses **mixed-effects models**, statistical models that account for variation among speakers and items simultaneously. An influential paper by **Harald Baayen**, **Douglas Davidson**, and **Douglas Bates** (2008) helped popularize these methods in linguistics. Students intending to do research should learn the basics of statistics and of a statistical programming language.

## Replication

As in other sciences, findings in phonetics should be **replicated**. Some well-known findings have been confirmed many times, such as the categorical perception of stop consonants, intrinsic F0, and phrase-final lengthening. Others, such as some claims about rhythm metrics or about the relation between language and environment, have proved less robust. Students should read research critically, asking how large the samples were, whether the results have been replicated, and whether alternative explanations have been considered.

## Collaboration and respect

Finally, acoustic research involves **people**: speakers who lend their voices, listeners who give their time, and communities whose languages are studied. Good practice includes treating them with respect, acknowledging their contributions, and, where appropriate, sharing the benefits of the research with them. As the Apostle wrote, "Let all things be done decently and in order" (1 Corinthians 14:40), counsel that applies well to the careful, honest conduct of research.

> **Pause and consider.** Why does sharing scripts and data make research more trustworthy?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Pitch tracking

> A pitch track of a male speaker jumps suddenly from 110 Hz to 220 Hz and back.

**Questions**

1. What kind of error is this likely to be?
2. How would you check?

## 2. Duration

> Klatt (1976): stress, phrase position, following consonant, and speaking rate affect segment duration.

**Questions**

1. Record "Dan arrived" and "I saw Dan," and measure *Dan* in each.
2. Which of Klatt's factors explains the difference?

## 3. Stress cues

> Fry (1950s): pitch and duration more important than intensity; Sluijter and van Heuven (1996): spectral balance.

**Questions**

1. What is spectral balance?
2. Why might overall intensity be a weak cue to stress?

## 4. Resynthesis

> Use Praat's Manipulation to flatten the pitch of a recorded question.

**Questions**

1. Does it still sound like a question?
2. What does this show about the role of pitch?

## Drawing the threads together

In a paragraph, explain how pitch, duration, and intensity are measured and how they carry prosodic information, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Elements of Acoustic Phonetics", author: "Peter Ladefoged", publisher: "University of Chicago Press", year: "2nd ed., 1996", note: "Read the chapter on pitch and loudness again in light of this lesson." },
    { kind: "website", title: "Praat Manual: Intro and Manipulation tutorials", author: "Paul Boersma and David Weenink", publisher: "University of Amsterdam", url: "https://www.praat.org", note: "Work through the sections of the built-in manual on pitch analysis and on manipulation." },
    { kind: "book", title: "Linguistic Uses of Segmental Duration in English: Acoustic and Perceptual Evidence", author: "Dennis H. Klatt", publisher: "Journal of the Acoustical Society of America 59", year: "1976", note: "Read the summary of factors affecting duration." },
  ],
  media: [
    { kind: "book", title: "A Perceptual Study of Intonation", author: "Johan 't Hart, René Collier, and Antonie Cohen", publisher: "Cambridge University Press", year: "1990", note: "Read the chapter on stylization and declination." },
    { kind: "book", title: "Music, Language, and the Brain", author: "Aniruddh D. Patel", publisher: "Oxford University Press", year: "2008", note: "Read the chapter on rhythm." },
  ],
  questions: [
    {
      prompt: "What are the three main acoustic dimensions of prosody?",
      choices: [
        "F1, F2, and F3",
        "Fundamental frequency, duration, and intensity",
        "Voicing, place, and manner",
        "Jitter, shimmer, and HNR",
      ],
      answer: 1,
      explanation: "Perceived as pitch, length, and loudness.",
    },
    {
      prompt: "What is an octave error in pitch tracking?",
      choices: [
        "A failure to detect voicing",
        "Reporting a value twice or half the true F0",
        "A recording error",
        "A tone sandhi",
      ],
      answer: 1,
      explanation: "Visible as sudden jumps in the pitch track.",
    },
    {
      prompt: "What is intrinsic F0?",
      choices: [
        "The average pitch of a speaker",
        "The tendency of high vowels to have slightly higher F0 than low vowels",
        "The F0 of whispered speech",
        "The F0 of tones",
      ],
      answer: 1,
      explanation: "Found in all 31 languages surveyed by Whalen and Levitt.",
    },
    {
      prompt: "What is declination?",
      choices: [
        "A rise in pitch at the end of questions",
        "The gradual lowering of F0 across an utterance",
        "The loss of voicing",
        "A type of stress",
      ],
      answer: 1,
      explanation: "Studied by 't Hart, Collier, and Cohen.",
    },
    {
      prompt: "What did Yi Xu find about Mandarin tones in context?",
      choices: [
        "They never change",
        "Each tone is affected by neighboring tones as speakers approach underlying pitch targets",
        "Tones disappear in fast speech",
        "Tones are unaffected by speaking rate",
      ],
      answer: 1,
      explanation: "Tonal coarticulation.",
    },
    {
      prompt: "What is phrase-final lengthening?",
      choices: [
        "The lengthening of syllables at the end of phrases",
        "The lengthening of stressed vowels",
        "The lengthening of consonants",
        "The lengthening of pauses",
      ],
      answer: 0,
      explanation: "It helps listeners identify phrase boundaries.",
    },
    {
      prompt: "What did Pellegrino, Coupé, and Marsico find about speaking rate?",
      choices: [
        "All languages are spoken at the same syllable rate",
        "Languages with less information per syllable are spoken faster, so information rates are similar",
        "English is the fastest language",
        "Japanese is the slowest",
      ],
      answer: 1,
      explanation: "Published in 2011.",
    },
    {
      prompt: "What did Sluijter and van Heuven find to be an important cue to stress?",
      choices: ["Overall intensity", "Spectral balance", "Jitter", "F3"],
      answer: 1,
      explanation: "Stressed syllables have relatively more high-frequency energy.",
    },
    {
      prompt: "What does cepstral peak prominence (CPP) measure?",
      choices: [
        "Vowel height",
        "How strongly periodic the voice is",
        "Speaking rate",
        "The position of the tongue",
      ],
      answer: 1,
      explanation: "Introduced by Hillenbrand and colleagues in 1994.",
    },
    {
      prompt: "What does PSOLA allow?",
      choices: [
        "Measuring formants",
        "Changing the pitch and duration of a recording while preserving its formants",
        "Recording speech",
        "Annotating speech",
      ],
      answer: 1,
      explanation: "Pitch-Synchronous Overlap and Add.",
    },
  ],
  reflection:
    "Prosody lives in pitch, time, and loudness. In 500–800 words, report measurements of the pitch, duration, and intensity of several utterances you recorded, explain what they reveal about English stress and intonation, and describe an experiment you could run, using resynthesis, to test which of these dimensions listeners rely on most.",
};
