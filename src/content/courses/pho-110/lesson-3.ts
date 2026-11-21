import type { Lesson } from "@/lib/schema";

export const lesson3: Lesson = {
  title: "Spectrograms and the Acoustics of Consonants",
  summary:
    "The invention of the sound spectrograph; wideband and narrowband spectrograms; learning to read a spectrogram; stops, bursts, and formant transitions; the locus; voice onset time on the spectrogram; fricative noise; nasals, laterals, and approximants; affricates and taps; how many cues signal one distinction; the problem of invariance; and the acoustic signatures of ejectives, implosives, clicks, and retroflexes.",
  pages: [
    {
      title: "The Sound Spectrograph",
      body: `## Making speech visible

A **spectrogram** is a picture of sound that shows how its frequency content changes over **time**. Time runs along the horizontal axis; frequency up the vertical axis; and the **intensity** of each frequency at each moment is shown by the darkness of the marking (or by color). A spectrogram thus combines the information of a waveform, which shows changes over time, and a spectrum, which shows frequency content at one moment.

## Bell Laboratories

The **sound spectrograph** was developed at **Bell Telephone Laboratories** in the United States during the Second World War, partly in connection with research on secure communication. Its developers, including **Ralph Potter**, **W. Koenig**, **H. K. Dunn**, and **L. Y. Lacy**, described the machine in 1946. In 1947, Potter, **George Kopp**, and **Harriet Green** published a book entitled *Visible Speech*, presenting hundreds of spectrograms of English speech and explaining how to read them.

## Hopes for the deaf

The authors of *Visible Speech* hoped, like Melville Bell eighty years earlier, that spectrograms would allow **deaf** people to "read" speech visually, perhaps on a moving display. Experiments with such displays were made, but the hope was not realized: reading speech from spectrograms in real time proved far too difficult. Nonetheless, the spectrograph transformed phonetics, giving researchers, for the first time, a detailed picture of the acoustic structure of speech.

## How it worked

The original spectrograph recorded a short stretch of speech, about two and a half seconds, on a magnetic drum. It then played the recording repeatedly through a **filter** that passed only a narrow band of frequencies, gradually moving the filter upward through the frequency range. A stylus burned marks on special paper, darker where the energy in the filter's band was greater. A single spectrogram took several minutes to make.

## Digital spectrograms

Today, spectrograms are computed digitally in a fraction of a second, using the **Fast Fourier Transform**, which we met in Lesson I. The computer divides the recording into short overlapping **windows**, computes the spectrum of each, and displays the spectra side by side. Programs like Praat display spectrograms automatically, and can be adjusted to show different degrees of detail.

## Why spectrograms matter

Spectrograms reveal what waveforms hide: the **formants** of vowels, the **transitions** between sounds, the **noise** of fricatives, the **bursts** of stops, and the effects of coarticulation. As we will see in this lesson, they have allowed phoneticians to identify the acoustic properties, or **cues**, that distinguish consonants, and to study how listeners use them.

## A new kind of literacy

Phoneticians learn to "read" spectrograms, not in the sense of recognizing whole words effortlessly, but in the sense of identifying sounds and their properties. Learning to read spectrograms is one of the main goals of this lesson. It requires practice: look at many spectrograms of words you know, and compare them with what you hear.

> **Pause and consider.** Why do you think the hope of using spectrograms to let deaf people read speech in real time was not realized?`,
    },
    {
      title: "Wideband and Narrowband",
      body: `## A trade-off

Every spectrogram involves a **trade-off** between precision in **time** and precision in **frequency**. To measure frequency precisely, the analysis must look at a relatively long stretch of sound; to measure timing precisely, it must look at a short stretch. One cannot have both at once. This is a fundamental property of signals, related to what physicists call the uncertainty principle.

## Two types

Phoneticians therefore use two main types of spectrogram:

- A **wideband** (or broadband) spectrogram uses a short analysis window, equivalent to a filter with a wide bandwidth (traditionally about **300 Hz**). It shows **timing** precisely but blurs frequency detail. In voiced sounds, individual harmonics are not resolved; instead, the **formants** appear as broad dark bands, and each glottal pulse appears as a thin **vertical striation**.
- A **narrowband** spectrogram uses a long analysis window, equivalent to a filter with a narrow bandwidth (traditionally about **45 Hz**). It shows **frequency** precisely but blurs timing. In voiced sounds, the individual **harmonics** appear as thin horizontal lines, rising and falling together with the pitch.

## Which to use

For most phonetic work, especially for identifying vowels and consonants, the **wideband** spectrogram is preferred, because it shows formants clearly and captures the rapid changes of consonants. Praat's default settings produce a wideband spectrogram. The **narrowband** spectrogram is useful for studying **pitch** and **intonation**, since the harmonics trace the movement of the fundamental frequency and its multiples, and for studying voice quality.

## Vertical striations

In a wideband spectrogram of a vowel, the vertical striations are spaced at intervals equal to the period of the vocal fold vibration. In a low male voice (100 Hz), they are 10 milliseconds apart; in a higher voice, closer together. Counting the striations over a known time gives the fundamental frequency. In creaky voice, the striations are widely and irregularly spaced, making creak easy to spot.

## Settings

In Praat, the spectrogram settings include the **window length** (about 5 milliseconds for wideband, 30 or more for narrowband), the **frequency range** displayed (typically 0 to 5,000 Hz for vowels, higher for fricatives), and the **dynamic range**, which controls how faint a sound must be to appear. Adjusting the dynamic range can make weak sounds, such as [f] and [θ], visible, or clean up a noisy recording.

## High voices

As we saw in Lesson II, the formants of high voices are hard to see, because the harmonics are widely spaced. In a wideband spectrogram of a high-pitched voice, the filter may be narrow enough relative to the harmonic spacing that individual harmonics begin to appear, making the formants harder to locate. Using a shorter window can help.

> **Pause and consider.** Why does a wideband spectrogram show vertical striations in a vowel, while a narrowband spectrogram shows horizontal lines?`,
    },
    {
      title: "Reading a Spectrogram",
      body: `## Landmarks

A spectrogram of continuous speech can look like a confusing landscape of dark and light patches. The key to reading it is to find the **landmarks**: points where the acoustic character changes sharply, usually at the boundaries between consonants and vowels. Some basic patterns:

- **Vowels** appear as stretches with clear, dark **formant bands** and regular vertical striations.
- **Voiceless stops** appear as **blank** gaps (silence during the closure), followed by a thin vertical **spike** (the burst) and, if aspirated, a short stretch of faint noise.
- **Voiced stops** show a gap with a dark band at the very bottom, the **voice bar**, representing low-frequency voicing during the closure.
- **Fricatives** appear as **fuzzy** patches of noise, with no formant structure; sibilants are dark at high frequencies, non-sibilants faint.
- **Nasals** appear as lighter, smooth stretches with a strong low-frequency band and weak upper formants.
- **Approximants** look like weak vowels, with formants that move smoothly into the neighboring vowels.

## Segmentation

To **segment** a spectrogram is to mark the boundaries between sounds. This is not always easy, because, as we saw in PHO 101, sounds overlap in coarticulation. Phoneticians use conventions: for example, the beginning of a vowel after a stop may be marked at the burst or at the onset of voicing, depending on the purpose. Praat allows users to mark boundaries in a **TextGrid**, an annotation layer aligned with the sound.

## Expert readers

Can a trained phonetician read speech from a spectrogram alone, without hearing it? In the 1970s, the speech scientist **Victor Zue** at the Massachusetts Institute of Technology became famous for his skill in reading spectrograms of unknown English utterances. In experiments reported in 1980 by **Ronald Cole**, **Alexander Rudnicky**, Zue, and **Raj Reddy**, Zue identified a high proportion of the phonetic segments in spectrograms of sentences he had not heard. These demonstrations showed that the information needed to identify speech sounds is present in the acoustic signal, and influenced the development of speech recognition systems. But expert spectrogram reading takes years of training, and even experts rely on their knowledge of English words and grammar.

## Practice

The best way to learn to read spectrograms is to practice systematically:

1. Record simple words, such as *bad*, *pad*, *sad*, *mad*, *lad*, and *dad*, which differ only in their first consonant.
2. Display their spectrograms side by side.
3. Identify the differences, and relate them to what you know about how the sounds are produced.
4. Then try longer words and phrases, and finally sentences.

## Reading and listening

Spectrograms are a tool for **understanding** speech, not a replacement for listening. A good phonetician moves constantly between the picture and the sound, listening to a selection, looking at its spectrogram, and listening again. Praat makes this easy: select any part of the spectrogram and play it.

> **Pause and consider.** Record *bad*, *pad*, *sad*, and *mad*. Which part of the spectrogram differs most among them?`,
    },
    {
      title: "Stops: Silence and Burst",
      body: `## The sound of silence

As we saw in PHO 101, a stop involves a complete closure of the vocal tract, a build-up of pressure, and a release. Acoustically, this produces a distinctive sequence:

1. **Closure**: during the closure, little or no sound escapes. For a voiceless stop, the spectrogram shows a **silent gap**. For a voiced stop, it shows a **voice bar**, a faint band of low-frequency energy, because the vocal folds continue vibrating for a time and the sound passes through the walls of the throat and cheeks.
2. **Burst**: when the closure is released, the built-up air escapes in a brief **transient**, a burst of noise lasting a few milliseconds, which appears as a thin vertical spike across a range of frequencies.
3. **Aspiration**, if present: in aspirated stops such as English [pʰ], [tʰ], [kʰ], a short stretch of noise follows the burst, as air flows through the open glottis before voicing begins.
4. **Transitions**: the formants of the following vowel move from values determined by the place of the stop to the values of the vowel.

## The duration of the closure

The silent gap of a stop is itself a cue. Listeners perceive a stop when they hear a short silence between sounds. In a famous illustration, if a short silence is inserted between the [s] and the vowel of *say*, listeners hear *stay*: the silence alone suggests a [t]. Longer silences are heard as geminate (long) consonants in languages that have them.

## The burst spectrum

The **spectrum of the burst** differs according to the place of articulation, because the burst is shaped by the small cavity in front of the closure:

- **Labial** stops ([p], [b]) have no cavity in front of the lips, and their bursts are weak, with energy spread across frequencies but strongest at low frequencies: a **diffuse–falling** spectrum.
- **Alveolar** stops ([t], [d]) have a small cavity in front of the closure, and their bursts have energy concentrated at **high** frequencies: a **diffuse–rising** spectrum.
- **Velar** stops ([k], [g]) have a larger front cavity, and their bursts have a **compact** peak of energy in the **middle** frequencies, around the F2 or F3 of the following vowel.

**Kenneth Stevens** and **Sheila Blumstein**, in a study published in 1978, argued that these shapes of the burst spectrum provide **invariant** cues to place of articulation, the same whatever the following vowel. Later studies found the picture more complicated, but the basic patterns hold.

## Velar bursts and vowels

Velar stops show especially strong coarticulation with the following vowel. As we saw in PHO 101, the tongue contacts the palate further forward for *key* than for *coo*. Acoustically, the velar burst before a front vowel has a higher-frequency peak than before a back vowel. Velar stops often have **double bursts**, because the large, slow-moving tongue body may release in more than one stage.

## Unreleased stops

At the ends of words, as we saw in PHO 101, English stops are often **unreleased**. In that case, the spectrogram shows no burst, only the closure and the formant transitions into the closure from the preceding vowel. Listeners must then identify the stop from these transitions alone.

> **Pause and consider.** If a short silence is inserted between [s] and the vowel of *say*, listeners hear *stay*. What does this tell us about how stops are perceived?`,
    },
    {
      title: "Formant Transitions and the Locus",
      body: `## Moving formants

When a stop is released into a vowel, the formants do not jump immediately to the vowel's values. Because the articulators take time to move from the closure to the vowel position, the formants **glide** from one set of values to another over about 30 to 50 milliseconds. These movements are called **formant transitions**, and they are among the most important cues to the place of articulation of consonants.

## Haskins and the Pattern Playback

In the late 1940s and 1950s, researchers at **Haskins Laboratories**, including **Alvin Liberman**, **Franklin Cooper**, and **Pierre Delattre**, used the **Pattern Playback**, a machine that converted hand-painted spectrographic patterns into sound, to discover which acoustic features listeners use to identify consonants. By painting simple patterns with two formants and varying the transitions, they could test what listeners heard.

They found that the direction of the **F2 transition** was a powerful cue to place:

- Before a given vowel, a **rising** F2 transition was heard as [b];
- a transition from a **higher** starting point, falling or rising slightly depending on the vowel, was heard as [d];
- a transition from a **mid-to-high** starting point, often converging with F3, was heard as [g].

## The locus

To explain these patterns, Delattre, Liberman, and Cooper proposed in 1955 the concept of the **locus**: for each place of articulation, the F2 transitions seem to point back toward a particular frequency, as if the formant began at that frequency during the closure. For **alveolar** stops, the F2 locus is around **1,800 Hz** (for adult male voices); for **labial** stops, it is low, around **700 to 800 Hz**; for **velar** stops, there is no single locus, because, as we saw, velars vary greatly with the following vowel, with a high locus before front vowels and a lower one before back vowels.

Thus [di] and [du] have very different F2 transitions: rising slightly to the high F2 of [i], falling steeply to the low F2 of [u]. But both point back toward the same alveolar locus.

## Locus equations

In the 1990s, **Harvey Sussman** and colleagues revived the locus concept in the form of **locus equations**: straight lines relating the F2 at the onset of a vowel to the F2 at its midpoint, across many vowels. Each place of articulation produces a line with a characteristic slope and intercept. Locus equations provide a compact description of how much each consonant coarticulates with following vowels.

## Transitions for other consonants

Formant transitions also cue the place of articulation of **nasals**, **fricatives**, and **approximants**. For nasals, which have weak, similar-sounding murmurs, the transitions into the following vowel are especially important: listeners distinguish [m] from [n] largely by the transitions. Transitions at the **end** of a vowel, into a following consonant, also cue that consonant's place.

## Why it matters

The Haskins discoveries showed that the acoustic cues to a consonant are not located in the consonant alone, but are spread across the neighboring vowel. A stop is identified partly by what happens **after** it. This finding, which reflects the coarticulation we studied in PHO 101, had profound consequences for theories of speech perception, as we will see in Lesson V.

> **Pause and consider.** Why would the F2 transitions of [di] and [du] be so different, even though both begin with [d]?`,
    },
    {
      title: "Voice Onset Time on the Spectrogram",
      body: `## Measuring VOT

As we saw in PHO 101, **voice onset time** (VOT) is the interval between the release of a stop and the beginning of voicing. On a spectrogram and waveform, VOT is measured from the **burst** to the first **glottal pulse** (the first vertical striation of the vowel, or the first regular cycle in the waveform).

- In a **long-lag** (aspirated) stop, such as English [pʰ] in *pin*, there is a stretch of 40 to 100 milliseconds between the burst and the onset of voicing, filled with faint **aspiration noise**, in which the formants of the following vowel may be faintly visible, excited by the turbulent airflow.
- In a **short-lag** (unaspirated) stop, such as English [p] in *spin* or initial [b] in *bin*, voicing begins within about 0 to 25 milliseconds of the burst.
- In a **prevoiced** stop, such as Spanish [b], voicing begins **before** the burst, during the closure, producing a voice bar; VOT is negative, measured as the duration of voicing before the release.

## Place and VOT

VOT varies with place of articulation: it tends to be **longer** for velar stops than for alveolars, and longer for alveolars than for labials. One reason is aerodynamic: the cavity behind a velar closure is small, and the tongue body releases slowly, and both of these delay the drop in pressure needed for voicing to begin. This is a small but consistent effect found in many languages.

## Other effects on VOT

VOT also varies with:

- **speaking rate**: in slower speech, aspirated stops have longer VOTs;
- **stress**: stops in stressed syllables have longer VOTs;
- the **following vowel**: VOT tends to be longer before high vowels;
- **individual** speakers and **dialects**.

Listeners adjust their perception of VOT for speaking rate, judging a given VOT relative to the speed of the speaker's speech, another example of **normalization**.

## VOT in second-language learning

VOT is a classic measure in the study of **second-language** pronunciation. Spanish learners of English often produce English [p], [t], [k] with short-lag VOT, which English listeners may hear as [b], [d], [g]. English learners of Spanish produce Spanish [p], [t], [k] with too much aspiration. Studies by **James Flege** and others showed that learners often produce VOTs **between** the values of their two languages, and that bilinguals' VOTs in each language may be influenced by the other.

## Beyond VOT

VOT is not the only cue to voicing, as we will see later in this lesson. But it has been one of the most fruitful measures in acoustic phonetics, because it is easy to measure, varies systematically across languages, and is closely related to the articulatory timing of the larynx and the supralaryngeal articulators.

> **Pause and consider.** Record *pin*, *spin*, and *bin*. Measure the VOT of each stop in Praat. Do your results match the categories of Lisker and Abramson?`,
    },
    {
      title: "Fricatives",
      body: `## Noise

**Fricatives**, as we saw in PHO 101, are produced by turbulent airflow through a narrow constriction. Acoustically, they are **aperiodic noise**, appearing on a spectrogram as fuzzy patches with no harmonic or formant structure. Voiced fricatives combine this noise with a voice bar and vertical striations.

## The spectrum of fricatives

The spectrum of a fricative depends mainly on the size of the cavity **in front of** the constriction, which acts as a filter on the noise. The smaller the front cavity, the higher the frequencies at which the noise is concentrated.

- **[s]** and **[z]**, with a small front cavity, have intense noise concentrated at **high frequencies**, typically above about **4,000 Hz**, extending up to 8,000 Hz or more.
- **[ʃ]** and **[ʒ]**, with a larger front cavity (further enlarged by lip rounding), have intense noise concentrated **lower**, typically from about **2,500 to 4,000 Hz**.
- **[f]**, **[v]**, **[θ]**, and **[ð]**, with almost no front cavity, have **weak**, **flat** spectra, with energy spread thinly across a wide range of frequencies.
- **[h]**, produced at the glottis, has noise shaped by the whole vocal tract, so that its spectrum shows the formants of the following vowel: it is, acoustically, a voiceless version of the vowel.

## Sibilants and non-sibilants

The difference in **intensity** between sibilants ([s], [ʃ]) and non-sibilants ([f], [θ]) is striking on a spectrogram: sibilants appear as dark patches, non-sibilants as faint ones. This acoustic difference explains why [f] and [θ] are often confused, and why the [θ] to [f] change, which we met in PHO 101, is so common: the two sounds are acoustically very similar. Listeners distinguish them mainly by the formant transitions into the neighboring vowel, rather than by the noise itself.

## Spectral moments

To measure fricative spectra quantitatively, phoneticians use **spectral moments**, statistical measures of the distribution of energy across frequencies. The most important is the **center of gravity** (or spectral mean), the average frequency weighted by energy: high for [s], lower for [ʃ]. In a large study published in 2000, **Allard Jongman**, **Ratree Wayland**, and **Serena Wong** measured the spectral properties of English fricatives produced by many speakers and found that spectral moments, together with other measures, distinguished the places of articulation well.

## The [s]–[ʃ] distinction

The difference between [s] and [ʃ] is among the most studied in acoustic phonetics. Its acoustic properties vary across speakers and communities. Studies have found, for example, that women on average produce [s] with a higher center of gravity than men, a difference partly due to anatomy and partly learned, and that the quality of [s] can carry social meaning, associated in some communities with gender and sexual identity. This is one of many areas where phonetics and sociolinguistics meet.

## Fricatives in noise

Because fricatives are relatively weak and high in frequency, they are especially vulnerable to **noise** and to **hearing loss**, as we saw in Lesson I. They are also poorly transmitted by older telephones, whose bandwidth ended around 3,400 Hz, cutting off much of the energy of [s] and [f].

> **Pause and consider.** Record *sip* and *ship*. Where is the noise concentrated in each?`,
    },
    {
      title: "Nasals, Laterals, and Approximants",
      body: `## Nasals

As we saw in Lesson II, **nasal consonants** are produced with the oral cavity closed and air flowing through the nose. On a spectrogram, a nasal appears as a stretch with:

- a strong **low-frequency resonance**, the **nasal formant**, around 250 to 300 Hz;
- **weak** higher formants, often with gaps where **antiformants** absorb energy;
- an abrupt **boundary** with neighboring vowels, because the opening and closing of the oral cavity cause sudden changes in the spectrum.

The part of the nasal produced during the oral closure is called the **nasal murmur**. Because the murmurs of [m], [n], and [ŋ] are similar (they all pass through the same nasal cavity), listeners rely heavily on the **formant transitions** into the neighboring vowels to identify the place of articulation, and also on the position of the antiformant, which, as we saw, varies with place.

## Laterals

The lateral approximant **[l]** has a formant structure like a vowel, but weaker. In **clear** [l], F1 is low (around 300 to 400 Hz), F2 moderately high, and **F3 high**. **Dark** [ɫ] has a **lower F2**, reflecting the raised back of the tongue. The difference between clear and dark [l] is easily seen on a spectrogram as a difference in F2. Because air flows around the sides of the tongue, laterals also have antiformants, though less prominent than those of nasals.

## Rhotics

The English approximant **[ɹ]** has a distinctive acoustic signature: a very **low F3**, often below 2,000 Hz, close to F2. This low F3 is produced by both the retroflex and the bunched tongue shapes, which, as we saw in PHO 101, sound similar because they produce similar acoustic results. The low F3 also characterizes the r-colored vowels of American English, such as the NURSE vowel. Children who have difficulty with [ɹ] often produce sounds with a higher F3, which listeners hear as [w].

## Glides

The glides **[w]** and **[j]** look on a spectrogram like brief vowels that glide quickly into the following vowel:

- **[w]** has **low** F1 and **low** F2, like the vowel [u], and its transitions rise into the following vowel;
- **[j]** has **low** F1 and **high** F2, like the vowel [i], and its transitions usually fall into the following vowel.

Because glides are essentially very short vowels, the boundary between a glide and the following vowel is often hard to locate.

## Distinguishing approximants

The approximants [w], [j], [l], and [ɹ] can be distinguished on a spectrogram largely by their formants: [w] by its low F2, [j] by its high F2, [l] by its high F3 and abrupt edges, and [ɹ] by its low F3. The confusions children make in acquiring these sounds, such as *wabbit* for *rabbit*, can be understood in terms of these acoustic similarities.

## The value of formant analysis

The study of approximants shows that formant analysis, developed for vowels, applies to many consonants too. Consonants with relatively open articulations, like approximants, nasals, and laterals, have formant structures, though modified by antiformants and the rapid movements of the articulators. Only obstruents, stops and fricatives, depart radically from the vowel-like pattern.

> **Pause and consider.** Why might a child who cannot yet produce [ɹ] be heard as saying [w]?`,
    },
    {
      title: "Affricates and Taps",
      body: `## Affricates

As we saw in PHO 101, an **affricate** combines a stop closure with a fricative release. On a spectrogram, an affricate such as [tʃ] in *chip* shows:

1. a **silent gap** (or voice bar, for [dʒ]), like a stop;
2. a **burst**, which may merge with
3. a stretch of **frication** noise, like a fricative, but **shorter** than a full fricative.

## Affricate or fricative?

How do listeners distinguish *chip* from *ship*, or *chop* from *shop*? Several acoustic cues contribute:

- the **silent gap** before the frication, present in the affricate but not the fricative;
- the **duration** of the frication noise, shorter in the affricate;
- the **rise time** of the noise, the time it takes for the noise to reach full intensity: **abrupt** in the affricate, **gradual** in the fricative.

Experiments in the 1970s and 1980s, by researchers including **Peter Howell** and **Stuart Rosen**, examined the role of rise time in the perception of affricates and fricatives, and found that listeners use it, though along with other cues such as duration and the preceding silence. This is another example of multiple cues contributing to a single distinction, a theme we develop on the next page.

## Taps and flaps

A **tap** or **flap**, such as the American English flap in *water* or *city*, or the Spanish [ɾ] in *pero*, involves a very brief contact of the tongue against the alveolar ridge, lasting only about **20 to 30 milliseconds**. On a spectrogram, a tap appears as a brief interruption, often with reduced energy rather than complete silence, between two vowels. Unlike a stop, it usually has no clear burst.

## Trills

A **trill**, such as the Spanish [r] in *perro*, appears on a spectrogram as a series of brief interruptions, each like a tap, at a rate of about 25 to 30 per second. The vibrations of the tongue tip produce a characteristic pattern of alternating closure and opening, typically two to five cycles. This pattern makes trills easy to recognize on a spectrogram, and Praat can be used to count the cycles and measure their rate, a useful tool for learners practicing the Spanish trill.

## Flapping and neutralization

In American English, as we saw in PHO 101, [t] and [d] between vowels are often both realized as flaps, so that *writing* and *riding* may sound alike. Acoustic studies have found that, in many speakers, some difference remains: the vowel before an underlying [d] tends to be slightly **longer**, continuing the pre-fortis clipping we studied in PHO 101. Such **incomplete neutralization** is subtle, and listeners can detect it only partly, but it shows that speakers may keep distinctions acoustically even when they are hard to hear. Similar incomplete neutralization has been reported for final devoicing in German, where *Rad* "wheel" and *Rat* "advice," as we saw in HIL 101, are often said to sound identical.

## The value of spectrograms

The study of affricates, taps, and trills shows how spectrograms reveal fine differences in timing that are hard to perceive directly. Durations of 20 or 30 milliseconds, crucial for distinguishing sounds, can be measured precisely on a spectrogram, though they are far too short to be judged reliably by ear.

> **Pause and consider.** Record *writing* and *riding*. Measure the duration of the first vowel in each. Is there a difference?`,
    },
    {
      title: "Many Cues for One Distinction",
      body: `## More than one cue

A single phonological distinction, such as that between English /b/ and /p/, is usually signaled not by one acoustic property but by **many**. In 1986, the phonetician **Leigh Lisker**, whom we met in PHO 101, published a catalogue of the acoustic features that distinguish /b/ from /p/ in English words like *rabid* and *rapid*. He listed **sixteen** different properties, including:

- the **duration of the preceding vowel**, longer before /b/;
- the **duration of the closure**, longer for /p/;
- the presence of **voicing** during the closure, more for /b/;
- the **VOT** after the release;
- the **F0** at the start of the following vowel, lower after /b/;
- the **F1** at the start of the following vowel, lower after /b/;
- the **intensity** of the burst.

## Trading relations

Listeners use all of these cues, and they can **trade** one cue against another. If one cue is ambiguous, a stronger value of another can compensate. In a well-known review, **Bruno Repp** (1982) described many such **trading relations**: for example, listeners will hear an ambiguous VOT as /b/ if the F1 at the onset of the vowel is low, and as /p/ if it is high. The perceptual system seems to combine all the available information into a single decision.

## Primary and secondary cues

Not all cues are equally important. For initial stops in English, VOT is the **primary** cue to voicing; F0 and F1 onset are **secondary**. But the weighting of cues differs among languages, and can change over time. In **Seoul Korean**, as we will see below, a change has been documented in which F0 has become a more important cue to the distinction between two series of stops than VOT, among younger speakers.

## Tonogenesis revisited

This is exactly how **tones** can arise from consonants, as we saw in HIL 101. A voicing distinction is signaled by both VOT and F0. If, over time, speakers and listeners come to rely more on the F0 difference and less on the VOT difference, the F0 difference may become the main distinction, and the language develops tones. The Korean case may be an example of this process in progress: studies by **Taehong Cho**, **Yoonjung Kang**, and others have documented how younger speakers in Seoul distinguish the "lax" and "aspirated" stops increasingly by pitch.

## Redundancy and robustness

The use of many cues makes speech **robust**. If one cue is masked by noise, distorted by a poor recording, or altered by a speaker's accent, others remain. This redundancy, as we saw in Lesson I, is a fundamental property of speech, and one reason why speech is understood so well in difficult conditions.

## Implications for teaching

For learners of a second language, the multiplicity of cues has practical implications. A learner may master the primary cue (such as VOT) but neglect secondary ones (such as vowel duration before final consonants), and so sound accented. Pronunciation teaching that attends to the full set of cues can improve intelligibility.

> **Pause and consider.** Say *rabid* and *rapid*. How many differences can you hear or feel besides the consonant itself?`,
    },
    {
      title: "The Problem of Invariance",
      body: `## Same sound, different acoustics

As we have seen, the acoustic properties of a consonant vary greatly depending on its context. The [d] of [di] and the [d] of [du] have F2 transitions that go in opposite directions; the [k] of *key* and the [k] of *coo* have bursts at different frequencies. Yet listeners hear both as the same consonant. This is the **problem of invariance**, or the **lack of invariance**: there seems to be no single acoustic property that is present in every instance of a given speech sound and absent in every other.

## Liberman's conclusion

In a famous paper published in 1967, "Perception of the Speech Code," **Alvin Liberman** and his colleagues at Haskins Laboratories argued that the lack of invariance showed that speech is not a simple alphabetic code, in which each sound has its own acoustic signature, but a complex **code** in which information about successive sounds is **encoded** in parallel in the same stretch of signal. The vowel and consonant of a syllable like [di] are not separate acoustic segments but are woven together. They argued that listeners must decode the signal using special knowledge of how speech is produced, a view that led to the **motor theory** of speech perception, which we study in Lesson V.

## The search for invariants

Other researchers continued to search for invariant acoustic properties. As we saw, **Stevens** and **Blumstein** argued that the overall shape of the burst spectrum provides invariant cues to place of articulation. Others proposed that invariance could be found in **relational** properties, such as the relation between the onset and the midpoint of a formant, as in locus equations, or in more abstract auditory representations. The debate continues.

## Exemplars

A different approach, developed from the 1990s, denies that listeners need invariant cues at all. According to **exemplar** theories, associated with researchers such as **Keith Johnson** and **Janet Pierrehumbert**, listeners store detailed memories of the many instances of words and sounds they have heard, with all their variation, and recognize new instances by comparing them with these stored exemplars. On this view, variation is not noise to be filtered out but information, used to recognize speakers, dialects, and styles as well as words.

## Variation as information

Indeed, research has increasingly shown that listeners use the fine phonetic detail of speech, including its variation, for many purposes: to identify the speaker, to anticipate upcoming sounds (as with coarticulation), to infer the speaker's dialect and social background, and to locate word boundaries. The "lack of invariance," once seen as a problem, may be better understood as a source of richness in the speech signal.

## A continuing puzzle

How listeners recognize speech sounds so quickly and accurately, despite their variability, remains one of the central problems of speech science. It also has practical importance: speech recognition systems, which we study in Lesson V, faced the same problem, and solved it, in their own way, by training on enormous amounts of varied speech.

> **Pause and consider.** If no single acoustic property defines [d], how do you think listeners recognize it?`,
    },
    {
      title: "Annotating Speech: TextGrids, Aligners, and Corpora",
      body: `## From pictures to data

A spectrogram is a picture; research needs **data**. To measure the durations, formants, and other properties of many sounds, phoneticians first **annotate** their recordings, marking where each word and each sound begins and ends.

## TextGrids

In Praat, annotations are stored in a **TextGrid**, a set of **tiers** aligned with a sound file. A typical TextGrid might have:

- a **word** tier, with an interval for each word;
- a **phone** tier, with an interval for each speech sound;
- a **point** tier, marking particular moments, such as the burst of a stop or the peak of a pitch accent.

Once a recording is annotated, a Praat script can visit every interval, measure its duration, formants, pitch, or intensity, and write the results to a table for statistical analysis.

## Forced alignment

Annotating by hand is slow: an experienced phonetician may take an hour or more to segment a minute of speech. Since the 2000s, **forced alignment** tools have automated much of this work. Given a recording and its orthographic transcription, a forced aligner uses a pronunciation dictionary and acoustic models, borrowed from speech recognition, to find the most likely boundaries of each word and sound. Widely used tools include the **Penn Phonetics Lab Forced Aligner**, developed by **Jiahong Yuan** and **Mark Liberman** (2008), the **FAVE** suite (Forced Alignment and Vowel Extraction), developed for sociolinguistic studies of vowels, and the **Montreal Forced Aligner** (2017), which can be trained for many languages.

Forced alignment is not perfect: boundaries may be off by tens of milliseconds, and the aligner assumes the speaker said what the dictionary predicts, which may not be true in casual or accented speech. Researchers usually check and correct the automatic alignments, especially for fine measurements.

## Speech corpora

Annotated recordings collected in large numbers form **speech corpora**, which allow phoneticians to study variation across many speakers. Important English corpora include:

- **TIMIT**, recorded in the late 1980s by Texas Instruments and MIT, with 630 speakers of American English from eight dialect regions, each reading phonetically rich sentences, carefully hand-segmented;
- the **Buckeye Corpus**, recorded at Ohio State University, with about forty speakers in conversational interviews, phonetically labeled, used to study casual speech and reduction;
- the **Switchboard** corpus of telephone conversations, used widely in speech technology.

Corpora also exist for many other languages, and archives of endangered-language recordings, which we met in Lesson I, increasingly include time-aligned annotations.

## Big data and phonetics

Forced alignment and large corpora have changed phonetics. Studies that once measured a few hundred vowels can now measure hundreds of thousands, revealing small but systematic effects of word frequency, speaking rate, social background, and context. As we saw in Lesson II, such studies have mapped vowel changes across entire countries.

## The phonetician's eye

Yet the automatic tools rest on decades of hand annotation by phoneticians who learned to read spectrograms. Checking an alignment, spotting an error, or noticing an unexpected pattern still requires the skills developed in this lesson.

> **Pause and consider.** Why might a forced aligner make more errors on casual speech than on read sentences?`,
    },
    {
      title: "Ejectives, Implosives, Clicks, and Retroflexes",
      body: `## Beyond English

The acoustic methods of this lesson apply to all languages. Here we consider the acoustic signatures of some of the non-English sounds we studied in PHO 101.

## Ejectives

**Ejectives**, made with a raised, closed larynx, as we saw in PHO 101, have several acoustic characteristics:

- a **strong, sharp burst**, because of the high pressure built up behind the closure;
- a **silent interval** after the burst, while the glottis remains closed, before voicing begins, so that the VOT is long but the interval is silent rather than filled with aspiration noise;
- often a **glottal release**, a creaky or abrupt onset to the following vowel.

Acoustic studies of languages such as Georgian, Navajo, and Quechua have found considerable variation in these properties, both among languages and among speakers.

## Implosives

**Implosives**, made with a lowering larynx, typically show:

- **voicing** throughout the closure, often with **increasing** amplitude, because the lowering larynx keeps the pressure in the mouth low and allows air to flow freely through the glottis (unlike plain voiced stops, whose voicing often weakens during the closure);
- a relatively **weak** burst.

The increasing amplitude of voicing during the closure is a characteristic feature distinguishing implosives from plain voiced stops on a waveform.

## Clicks

**Clicks** are among the most intense sounds of speech. Their release produces a very **sharp transient**, often louder than the surrounding vowels, appearing on a spectrogram as a strong vertical spike. The different types of click differ in the spectrum and abruptness of the release: alveolar clicks are typically abrupt and loud with energy at mid frequencies; dental clicks are noisier, with a more fricative-like release; lateral clicks are noisy and less abrupt. The accompaniments of clicks, such as voicing, nasality, and aspiration, appear as additional features before or after the transient.

## Retroflexes

**Retroflex** consonants, as in Hindi, Tamil, and Swedish, have a distinctive acoustic effect on neighboring vowels: they **lower F3** (and F4), bringing F3 close to F2, especially in the transitions from a preceding vowel into the consonant. This lowering is similar to that produced by the English [ɹ], which, as we saw, is often retroflex. Listeners of languages with retroflex consonants use these transitions to distinguish retroflex from dental stops, which have a higher F3.

## Pharyngeals

**Pharyngeal** sounds, such as the Arabic [ħ] and [ʕ], and the **emphatic** (pharyngealized) consonants, have a high **F1** and a low **F2** in neighboring vowels, reflecting the narrowing of the pharynx. This is why, as we saw in PHO 101, the Arabic emphatics give a "dark" quality to surrounding vowels.

## Fieldwork

Acoustic analysis is an essential tool for linguists documenting unfamiliar languages. When a fieldworker hears a sound they cannot identify, a spectrogram and waveform can reveal its properties: whether it has a burst, a voice bar, a silent interval, or a characteristic formant pattern. Ladefoged and his colleagues combined careful listening with acoustic and articulatory measurement to describe many of the sounds in *The Sounds of the World's Languages*.

> **Pause and consider.** How would you distinguish an ejective [kʼ] from an aspirated [kʰ] on a spectrogram?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Wideband and narrowband

> A wideband spectrogram shows vertical striations; a narrowband spectrogram shows horizontal lines.

**Questions**

1. What do the striations and the lines each represent?
2. Which would you use to study formants, and which to study pitch?

## 2. The locus

> Delattre, Liberman, and Cooper (1955): the F2 transitions of [di] and [du] point back toward about 1,800 Hz.

**Questions**

1. What is the locus?
2. Why is there no single locus for velar stops?

## 3. Fricative spectra

> [s]: energy above about 4,000 Hz; [ʃ]: about 2,500–4,000 Hz; [f], [θ]: weak and flat

**Questions**

1. Explain these differences in terms of the front cavity.
2. Why are [f] and [θ] often confused?

## 4. Many cues

> Lisker (1986): sixteen acoustic properties distinguish /b/ from /p/ in *rabid* and *rapid*.

**Questions**

1. Name four of them.
2. What does this imply about speech perception?

## Drawing the threads together

In a paragraph, explain how spectrograms reveal the acoustic properties of consonants, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Elements of Acoustic Phonetics", author: "Peter Ladefoged", publisher: "University of Chicago Press", year: "2nd ed., 1996", note: "Read the chapters on spectrograms and on the acoustics of consonants." },
    { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage Learning", year: "7th ed., 2015", note: "Read chapter 8, \"Acoustic Phonetics.\"" },
    { kind: "book", title: "Visible Speech", author: "Ralph K. Potter, George A. Kopp, and Harriet C. Green", publisher: "D. Van Nostrand", year: "1947", note: "Look at the spectrograms and the authors' explanations of how to read them." },
  ],
  media: [
    { kind: "book", title: "Acoustic Loci and Transitional Cues for Consonants", author: "Pierre C. Delattre, Alvin M. Liberman, and Franklin S. Cooper", publisher: "Journal of the Acoustical Society of America 27", year: "1955", note: "Read the introduction and look at the painted patterns." },
    { kind: "book", title: "Acoustic Phonetics", author: "Kenneth N. Stevens", publisher: "MIT Press", year: "1998", note: "For advanced students: the most comprehensive treatment. Browse the chapters on stops and fricatives." },
  ],
  questions: [
    {
      prompt: "What does a spectrogram display?",
      choices: [
        "Amplitude over time only",
        "Frequency content over time, with intensity shown by darkness",
        "The shape of the vocal tract",
        "Pitch only",
      ],
      answer: 1,
      explanation: "It combines the information of a waveform and a spectrum.",
    },
    {
      prompt: "Which kind of spectrogram best shows formants and timing?",
      choices: ["Narrowband", "Wideband", "Neither", "Both equally"],
      answer: 1,
      explanation: "Narrowband shows harmonics and is used for pitch.",
    },
    {
      prompt: "What does a voice bar indicate?",
      choices: [
        "Aspiration",
        "Voicing during a stop closure",
        "A fricative",
        "A nasal formant",
      ],
      answer: 1,
      explanation: "Low-frequency energy during the closure of a voiced stop.",
    },
    {
      prompt: "Which place of articulation has a compact, mid-frequency burst?",
      choices: ["Labial", "Alveolar", "Velar", "Glottal"],
      answer: 2,
      explanation: "Labials are diffuse–falling; alveolars diffuse–rising.",
    },
    {
      prompt: "What is the locus?",
      choices: [
        "The place of articulation",
        "The frequency toward which F2 transitions for a given place of articulation seem to point",
        "The burst of a stop",
        "A part of the ear",
      ],
      answer: 1,
      explanation: "About 1,800 Hz for alveolars in adult male voices.",
    },
    {
      prompt: "Where is the energy of [s] concentrated?",
      choices: ["Below 1,000 Hz", "Around 2,500 Hz", "Above about 4,000 Hz", "At the fundamental frequency"],
      answer: 2,
      explanation: "[ʃ] is lower, around 2,500–4,000 Hz.",
    },
    {
      prompt: "What is the acoustic signature of English [ɹ]?",
      choices: ["A high F2", "A very low F3", "A strong burst", "A nasal formant"],
      answer: 1,
      explanation: "Often below 2,000 Hz.",
    },
    {
      prompt: "What are trading relations?",
      choices: [
        "Commercial uses of speech",
        "The ability of one acoustic cue to compensate for another in perception",
        "The exchange of sounds between languages",
        "Changes in pitch",
      ],
      answer: 1,
      explanation: "Described by Repp (1982).",
    },
    {
      prompt: "What is the problem of invariance?",
      choices: [
        "That speech never varies",
        "That no single acoustic property seems to be present in every instance of a given speech sound",
        "That vowels are invariant",
        "That spectrograms are inaccurate",
      ],
      answer: 1,
      explanation: "Liberman and colleagues discussed it in \"Perception of the Speech Code\" (1967).",
    },
    {
      prompt: "What acoustic effect do retroflex consonants have on neighboring vowels?",
      choices: ["They raise F1", "They lower F3", "They raise F3", "They remove voicing"],
      answer: 1,
      explanation: "Like English [ɹ].",
    },
  ],
  reflection:
    "Spectrograms made speech visible. In 500–800 words, describe how to recognize vowels, stops, fricatives, nasals, and approximants on a spectrogram, using recordings of your own speech, and reflect on what the lack of invariance and the multiplicity of cues reveal about how listeners understand speech.",
};
