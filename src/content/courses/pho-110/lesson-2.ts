import type { Lesson } from "@/lib/schema";

export const lesson2: Lesson = {
  title: "Source, Filter, and the Acoustics of Vowels",
  summary:
    "The source–filter theory; the voice source and its harmonics; the vocal tract as a filter and the meaning of formants; calculating the formants of a neutral tube; how tongue, jaw, and lips move the formants; measuring formants in Praat; plotting and comparing vowel spaces; nasal vowels and antiformants; diphthongs and formant movement; high voices, sopranos, and the singer's formant; vowels as evidence of sound change; and voice quality in the spectrum.",
  pages: [
    {
      title: "Source and Filter",
      body: `## Two independent parts

The most important idea in acoustic phonetics is the **source–filter theory** of speech production. It holds that speech sounds can be understood as the product of two largely independent components:

- a **source**, which produces sound energy: usually the vibrating vocal folds, but also turbulent noise at a constriction, or the burst of a stop;
- a **filter**, the vocal tract above the source, which shapes that energy, reinforcing some frequencies and weakening others.

The output, the sound that leaves the lips, is the source as modified by the filter.

## Everyday analogies

A useful analogy is a musical wind instrument. In a clarinet, the vibrating reed is the source, producing a buzzing sound rich in harmonics; the body of the instrument is the filter, shaping that sound into the clarinet's characteristic tone. The player changes the filter by opening and closing holes, changing the instrument's resonances. In speech, the vocal folds are the source, and the speaker changes the filter by moving the tongue, jaw, and lips.

## Independence

The power of the theory lies in the **independence** of source and filter. You can change the source without changing the filter: say [a] at a low pitch and then a high pitch, and the vowel remains [a] while the pitch changes. You can change the filter without changing the source: say [a] and then [i] at the same pitch, and the vowel changes while the pitch remains. This independence explains why vowel quality and pitch are perceived as separate properties, and why the same vowel can be sung on any note.

## History

As we saw in Lesson I, the idea goes back to Helmholtz and Willis in the nineteenth century. It was developed mathematically in the twentieth century, above all by two Japanese scientists, **Tsutomu Chiba** and **Masato Kajiyama**, in *The Vowel: Its Nature and Structure* (1941), and by the Swedish engineer **Gunnar Fant**, in *Acoustic Theory of Speech Production* (1960). Chiba and Kajiyama's book, published in English in Tokyo during the Second World War, was little known in the West for some years, but is now recognized as a foundational work. Fant's book became the standard reference for the field.

## Why it matters

The source–filter theory explains:

- why different vowels have different **spectra** even at the same pitch;
- why the same vowel can be recognized at **different pitches**;
- why **whispered** speech is still intelligible: in whisper, the source is turbulent noise at the glottis rather than vocal fold vibration, but the filter is the same, so the vowels can still be distinguished;
- how speech can be **synthesized** by combining an artificial source with an artificial filter, as we will see in Lesson V.

## The plan of this lesson

In this lesson, we study the source and the filter in turn, then see how they combine to produce vowels. We will learn how to measure vowels in Praat, how to plot them, and how vowel acoustics are used in research on accents and sound change.

> **Pause and consider.** Whisper the vowels [i], [a], and [u]. Can you still tell them apart? What does this suggest about the role of the vocal folds in vowel quality?`,
    },
    {
      title: "The Voice Source",
      body: `## Puffs of air

As we saw in PHO 101, when the vocal folds vibrate, they open and close regularly, releasing a series of **puffs** of air into the vocal tract. In a typical male voice, this happens about a hundred times per second; in a typical female voice, about two hundred. The sound produced by this series of puffs, before it is shaped by the vocal tract, is called the **glottal source** or **voice source**.

## The glottal waveform

The airflow through the glottis rises as the folds open and falls as they close, producing a roughly triangular pulse for each cycle. The closing phase is typically faster than the opening phase, and the moment of closure is abrupt. This abrupt closure is acoustically important: it is what produces the rich high-frequency energy in the voice. A voice with a more abrupt closure sounds brighter and more strongly voiced; a voice with a more gradual closure, as in breathy voice, sounds softer.

## The source spectrum

Because the glottal source is periodic, it consists, by Fourier's theorem, of a **fundamental** and a series of **harmonics** at whole-number multiples of the fundamental frequency. In a voice with an F0 of 100 Hz, the source contains harmonics at 100, 200, 300 Hz, and so on.

The harmonics of the source are not equally strong. Their amplitude **decreases** steadily with frequency, falling by roughly 12 dB for each doubling of frequency (each octave). The effect of sound radiating from the lips adds back about 6 dB per octave, so that the net slope of the spectrum is about **6 dB per octave** downward. The spectrum of the source, then, is a series of harmonics of gradually decreasing amplitude, with no peaks or valleys of its own.

## The same for every vowel

A crucial point: the **source spectrum is essentially the same for all vowels** spoken at the same pitch and voice quality. Whether the speaker says [i] or [a], the vocal folds produce the same series of harmonics. What makes [i] different from [a] is not the source but the filter.

## Changing the source

Speakers change the source in two main ways:

- by changing the **fundamental frequency**, which changes the spacing of the harmonics (Lesson IV);
- by changing the **voice quality** or **phonation type**, which changes the shape of the glottal pulse and so the relative strength of the harmonics, as we will see at the end of this lesson.

## Other sources

Not all speech sounds use the voice source. **Fricatives** use a **noise source**, turbulence at a constriction, which produces energy spread across a range of frequencies rather than at discrete harmonics. **Stops** use a **transient source**, the burst of air at release. **Whisper** uses noise at the glottis. And **voiced fricatives** combine the voice source with a noise source. In each case, the vocal tract above the source acts as a filter. We will study these sources in Lesson III.

> **Pause and consider.** If the source spectrum is the same for all vowels, what must account for the differences between vowels?`,
    },
    {
      title: "The Filter: What Formants Are",
      body: `## The vocal tract as a filter

As we saw in Lesson I, the air in the vocal tract has natural frequencies of resonance. When the voice source passes through the vocal tract, harmonics near these resonant frequencies are **reinforced**, and harmonics far from them are **weakened**. The vocal tract thus acts as a **filter**, whose effect can be described by a **filter function** (or transfer function): a curve showing how much each frequency is amplified or reduced.

## Formants

The peaks of the filter function, the resonant frequencies of the vocal tract, are called **formants**. They are numbered from the lowest: the **first formant** (F1), the **second formant** (F2), the **third formant** (F3), and so on. In an adult male voice, the formants are typically spaced roughly a thousand hertz apart, with F1 somewhere between about 250 and 850 Hz, F2 between about 850 and 2,500 Hz, and F3 around 2,500 to 3,000 Hz.

## Output = source × filter

The sound that emerges from the lips is the product of the source and the filter. Its spectrum shows the **harmonics** of the source, spaced at intervals equal to the fundamental frequency, but with their amplitudes shaped by the filter: harmonics near a formant are strong, and harmonics between formants are weak. The **envelope** of the output spectrum, the curve connecting the tops of the harmonics, reflects the shape of the filter function, with peaks at the formants.

## Formants are not harmonics

Students often confuse formants and harmonics. They are quite different:

- **Harmonics** are properties of the **source**. They are determined by the vibration of the vocal folds and occur at whole-number multiples of F0. They change when the **pitch** changes.
- **Formants** are properties of the **filter**. They are determined by the shape of the vocal tract. They change when the **vowel** changes.

A formant may fall between two harmonics. In that case, the formant is not represented by a single strong harmonic but by the relative strength of the harmonics around it. A formant is a peak in the envelope, not necessarily a peak in any particular harmonic.

## Seeing formants

In a spectrogram, as we will see in Lesson III, formants appear as **dark horizontal bands**, regions of concentrated energy, at different frequencies for different vowels. In a spectrum, they appear as peaks in the envelope. Praat can estimate formant frequencies automatically, displaying them as red dots on the spectrogram.

## How many formants matter?

For distinguishing vowels, the first two formants are the most important; plotting F1 against F2, as we saw in PHO 101, produces a chart resembling the traditional vowel quadrilateral. **F3** matters for some distinctions, especially **rounding** and **r-coloring**: the American English rhotic vowel in *bird* has a strikingly low F3, often below 2,000 Hz. Higher formants contribute to the individual quality of a speaker's voice more than to vowel identity.

> **Pause and consider.** A singer sings [a] on two different notes. Which change: the harmonics, the formants, or both?`,
    },
    {
      title: "The Neutral Tube",
      body: `## A simple model

To understand why the vocal tract has the formants it does, it helps to start with a simple model: a **uniform tube**, closed at one end (the glottis) and open at the other (the lips). This approximates the vocal tract when it is in a neutral position, as for the vowel **schwa** [ə].

## Quarter-wavelength resonances

A tube closed at one end and open at the other resonates at frequencies whose **wavelength** is four times the length of the tube, and at odd multiples of that frequency. (Recall that wavelength equals the speed of sound divided by frequency.) The resonant frequencies are given by a simple formula:

> F*n* = (2*n* − 1) × *c* / 4*L*

where *c* is the speed of sound (about 35,000 centimeters per second in the warm, moist air of the vocal tract) and *L* is the length of the tube.

## Calculating

For an adult male vocal tract of about **17.5 centimeters**:

- F1 = 1 × 35,000 / (4 × 17.5) = 35,000 / 70 = **500 Hz**;
- F2 = 3 × 500 = **1,500 Hz**;
- F3 = 5 × 500 = **2,500 Hz**.

These values, 500, 1,500, and 2,500 Hz, are close to the measured formants of the schwa vowel in adult male speakers. The simple model works remarkably well.

## Shorter tubes

For a shorter vocal tract, the formants are higher. An adult female vocal tract of about 14.5 centimeters gives formants of roughly 600, 1,800, and 3,000 Hz; a child's vocal tract, shorter still, gives higher formants. This is why the same vowel spoken by a man, a woman, and a child has different formant frequencies, as Peterson and Barney found, and why listeners must **normalize** for vocal tract length, as we saw in PHO 101.

## Lengthening the tube

Speakers can also change the effective length of their vocal tract. **Rounding** and **protruding** the lips lengthens the tube, lowering all the formants. **Lowering the larynx** also lengthens it. These maneuvers are used to produce back rounded vowels, and some speakers use them to make their voices sound deeper or larger. Conversely, spreading the lips and raising the larynx shortens the tube, raising the formants.

## Size and the voice

Because formant frequencies depend on vocal tract length, which is related to body size, listeners can judge something about a speaker's size from their voice. Animals use this too: some species, such as red deer, lower their larynx when roaring, lengthening the vocal tract and lowering the formants, apparently to sound larger to rivals. This connects with the discussion in PHO 101 of whether the human vocal tract was shaped by the needs of speech.

## Beyond the uniform tube

Of course, the vocal tract is not uniform when we produce other vowels: the tongue narrows it in some places and widens it in others. To understand other vowels, we need to know how constrictions change the formants, which is the subject of the next page.

> **Pause and consider.** Using the formula, calculate F1 for a vocal tract 14 centimeters long. Why would a child's formants be higher still?`,
    },
    {
      title: "How Articulation Moves the Formants",
      body: `## Constrictions and formants

When the tongue or lips narrow the vocal tract at some point, the formants shift. The direction of the shift depends on **where** the constriction is, in relation to the patterns of air pressure and velocity in the tube at each resonance. This is described by **perturbation theory**, developed by Chiba and Kajiyama and later by others. Without going into the physics, we can state its main results for speech in practical terms.

## F1 and openness

The **first formant** is related to the **openness** of the vocal tract, especially at the front:

- A constriction in the **front** of the mouth (as for high vowels like [i] and [u]) **lowers** F1.
- A constriction in the **pharynx** (as for low back vowels like [ɑ]) **raises** F1.
- Opening the jaw generally raises F1.

This is why **high** vowels have **low** F1 values (around 250 to 350 Hz in men) and **low** vowels have **high** F1 values (around 700 to 850 Hz). F1 is the main acoustic correlate of vowel **height**, inversely related.

## F2 and frontness

The **second formant** is related to the **frontness** of the tongue constriction, and to the length of the cavity in front of it:

- A constriction in the **front** of the mouth, with a short front cavity and a long back cavity, as for [i], produces a **high** F2 (around 2,200 to 2,300 Hz in men).
- A constriction toward the **back**, with a long front cavity, as for [u] and [ɔ], produces a **low** F2 (around 850 to 1,000 Hz).

F2 is thus the main acoustic correlate of vowel **backness**.

## Rounding

**Lip rounding** lowers all the formants, especially F2 and F3, because it lengthens the tube and narrows its opening. This is why the front rounded vowel [y] has a lower F2 than [i], and why rounding back vowels makes them even more distinct from front vowels.

## The quantal theory

The American phonetician **Kenneth Stevens** observed that the relation between articulation and acoustics is **not linear**. In some regions, a small change in tongue position produces a large change in the formants; in other regions, fairly large changes in articulation produce little acoustic change. In his **quantal theory** of speech, first presented in 1972 and developed in later work, Stevens argued that languages tend to use articulations in the **stable** regions, where the acoustic output is relatively insensitive to small errors. The vowels [i], [a], and [u], which are found in almost every language, correspond to such stable regions. This helps explain, alongside dispersion theory, which we met in PHO 101, why some vowels are so common.

## Compensation

Because different articulations can produce similar acoustic results, speakers can **compensate**: if one articulator is constrained, another can adjust to achieve the same acoustic target. As we saw in PHO 101, speakers holding a bite block between their teeth can still produce normal vowels, and different speakers produce the American English *r* with different tongue shapes but similar acoustics. Such findings suggest that speakers aim at **acoustic** targets as much as articulatory ones.

> **Pause and consider.** Say [i] and then [u]. Using what you have learned, predict how F1 and F2 change.`,
    },
    {
      title: "Measuring Vowel Formants",
      body: `## Classic values

The most famous set of vowel formant measurements is that of **Peterson and Barney** (1952), whom we met in PHO 101. Their average values for adult male speakers of American English were approximately:

| Vowel | Word | F1 (Hz) | F2 (Hz) |
|---|---|---|---|
| [i] | *heed* | 270 | 2,290 |
| [ɪ] | *hid* | 390 | 1,990 |
| [ɛ] | *head* | 530 | 1,840 |
| [æ] | *had* | 660 | 1,720 |
| [ɑ] | *hod* | 730 | 1,090 |
| [ɔ] | *hawed* | 570 | 840 |
| [ʊ] | *hood* | 440 | 1,020 |
| [u] | *who'd* | 300 | 870 |
| [ʌ] | *hud* | 640 | 1,190 |
| [ɝ] | *heard* | 490 | 1,350 |

Women's and children's values were higher. These figures are a useful reference, though, as Hillenbrand's 1995 study showed, American English vowels have changed since 1952, and they differ among accents.

## How Praat measures formants

Praat estimates formants using a technique called **linear predictive coding** (LPC), which models the spectrum as the output of a filter with a certain number of resonances, and finds the filter that best matches the recorded sound. The user must set two parameters:

- the **maximum formant** frequency to search for, typically **5,000 Hz** for adult male voices and **5,500 Hz** for adult female voices (higher for children);
- the **number of formants** to find within that range, typically **five**.

If these settings are wrong for a particular voice, Praat may miss formants or find spurious ones.

## Where to measure

Vowels are not perfectly steady, especially next to consonants. Phoneticians usually measure formants at the **midpoint** of the vowel, or at a point of relative stability, avoiding the transitions at its edges. For diphthongs and for detailed studies, they measure at several points, as we will see later in this lesson.

## Common errors

Automatic formant tracking can go wrong in several ways:

- **Merged formants**: when two formants are close together, as F1 and F2 in [ɑ] or [ɔ], Praat may report them as one.
- **Missing formants**: weak formants, as F2 in some back vowels, may be missed.
- **High voices**: when F0 is high, the harmonics are widely spaced, and the formants, which lie between harmonics, are hard to locate.
- **Nasal sounds**: nasalization adds extra resonances and antiresonances, confusing the analysis.

Always check the formant tracks against the spectrogram. If the red dots do not follow the dark bands, adjust the settings or measure by hand.

## Reporting measurements

When reporting formant measurements, researchers should state the settings used, the point of measurement, the number of tokens, and the speakers' age, sex, and accent. Good practice also includes making recordings and data available, where possible, so that others can check the results.

> **Pause and consider.** Measure F1 and F2 for your own *heed* and *who'd*. How do they compare with Peterson and Barney's values?`,
    },
    {
      title: "How Listeners Hear Vowels",
      body: `## Two formants are enough

If vowels are distinguished mainly by their formants, can listeners recognize vowels from formants alone? In the early 1950s, researchers at **Haskins Laboratories** in New York, including **Pierre Delattre**, **Alvin Liberman**, and **Franklin Cooper**, used a machine called the **Pattern Playback**, which converted painted patterns into sound, to create synthetic vowels with only two formants. In a study published in 1952, they found that listeners could identify many English vowels from just **F1 and F2**, confirming that these two formants carry most of the information about vowel identity.

## The effective second formant

For front vowels, however, F3 also contributes. Swedish researchers, including Gunnar Fant and **Rolf Carlson**, found that listeners seem to integrate F2, F3, and sometimes F4 into a single perceptual value, the **effective second formant** (often written F2′). For [i], whose F2 and F3 are close together, F2′ is higher than F2 alone. This helps explain the perception of front rounded vowels, such as French [y], whose F2 and F3 configuration differs from [i] even when F2 alone is similar.

## Perceptual integration

More generally, the ear seems to integrate formants that lie close together, within about 3 to 3.5 Bark (a measure of the ear's frequency resolution, which we met in Lesson I). Back vowels such as [u] and [ɔ], whose F1 and F2 are close together, may be perceived as having a single broad low-frequency peak. This **center of gravity** effect, studied by the Russian researcher **Ludmilla Chistovich** and colleagues in the 1970s, suggests that listeners do not track individual formants as precisely as a computer does.

## Vowels are less categorical

As we will see in Lesson V, listeners perceive many consonant distinctions **categorically**: they hear sharp boundaries between categories and have difficulty hearing differences within a category. **Vowels** are perceived **less categorically**. Experiments by **Dennis Fry** and colleagues in 1962 found that listeners could distinguish vowels within the same category more easily than stops within the same category. This may be because vowels are longer and more intense, and their formants vary continuously, while stops involve rapid changes that are harder to compare.

## Context and expectation

Listeners also use **context** to interpret vowels. In a famous experiment published in 1957, **Peter Ladefoged** and **Donald Broadbent** played listeners a test word, such as *bit* or *bet*, preceded by a carrier sentence ("Please say what this word is") whose formants had been shifted up or down, as if spoken by a different speaker. The same test word was heard as *bit* after one version of the sentence and as *bet* after another. Listeners had used the carrier sentence to estimate the speaker's vowel space, and interpreted the test vowel relative to it. This was early experimental evidence for **speaker normalization**, which we met in PHO 101.

## The listener as active

These findings show that vowel perception is not a simple matter of reading off formant values. Listeners actively interpret acoustic information, integrating formants, adjusting for the speaker, and drawing on context and expectation. We will return to these themes in Lesson V.

> **Pause and consider.** Why would hearing a sentence from a speaker help a listener interpret that speaker's vowels?`,
    },
    {
      title: "Plotting the Vowel Space",
      body: `## F1 against F2

A **vowel plot** displays each vowel as a point in a two-dimensional space, with F2 on the horizontal axis and F1 on the vertical axis. By convention, both axes are **reversed**: F2 increases from right to left, and F1 increases from top to bottom. With these conventions, front vowels appear on the left, back vowels on the right, high vowels at the top, and low vowels at the bottom, just like the traditional vowel quadrilateral of PHO 101.

## What a vowel plot shows

A vowel plot of a speaker's vowels typically forms a rough triangle or quadrilateral, with [i] at the upper left, [u] at the upper right, and [a] or [ɑ] at the bottom. The vowels of a language are spread across this space. A plot shows at a glance:

- how the vowels of a language or accent are arranged;
- which vowels are close together, and so more likely to be confused or to merge;
- how a speaker's vowels differ from another speaker's.

## Comparing speakers

Because formants depend on vocal tract length, the vowel spaces of men, women, and children differ in **size** and **position**: women's and children's vowel spaces are shifted toward higher frequencies. To compare speakers fairly, researchers use **normalization** methods, which adjust each speaker's formant values relative to their own vowel space. A widely used method, proposed by **B. M. Lobanov** in 1971, converts each formant value into a measure of how far it lies from the speaker's average, in units of the speaker's own variation. Other methods use perceptual scales, such as the **Bark** scale, which we met in Lesson I.

## Comparing accents

Vowel plots are a powerful tool for comparing accents. A plot of a speaker from southern England and a speaker from Michigan would show striking differences: the Michigan speaker's TRAP vowel raised toward DRESS, as in the Northern Cities Shift, and their LOT vowel fronted; the southern English speaker's GOOSE vowel fronted, and their TRAP and BATH vowels distinct. As we will see later in this lesson, such plots have become central to the study of sound change.

## Tokens and clouds

A single measurement of each vowel can be misleading, since speakers vary from one repetition to the next. Researchers usually record many **tokens** of each vowel and plot them all, producing **clouds** of points, often summarized by ellipses showing the spread of each vowel. Overlapping clouds may indicate a merger in progress, or simply natural variation.

## Making a plot

Praat can draw simple vowel plots, and statistical programs such as R, with packages designed for phonetics, can produce publication-quality plots and perform normalization. A useful exercise is to record yourself saying a set of words with each vowel, measure the formants, and plot your own vowel space.

> **Pause and consider.** Why are the axes of a vowel plot reversed? What would the plot look like if they were not?`,
    },
    {
      title: "Nasal Vowels and Antiformants",
      body: `## Adding a side branch

When the velum is lowered, as we saw in PHO 101, the nasal cavity is coupled to the vocal tract. Acoustically, this adds a **side branch** to the tube. The nasal cavity has its own resonances, and the coupling between the oral and nasal cavities introduces **antiresonances**, also called **antiformants** or **zeros**: frequencies at which energy is **absorbed** rather than reinforced.

## Nasal consonants

In a **nasal consonant**, such as [m], [n], or [ŋ], the oral cavity is closed, and sound passes out through the nose. The closed oral cavity acts as a side branch, trapping energy at its resonant frequency and producing an antiformant. The position of the antiformant depends on the length of the oral cavity, and so on the place of articulation:

- for [m], with a long oral cavity behind the lips, the antiformant is relatively low, around 750 to 1,250 Hz;
- for [n], with a shorter oral cavity, it is higher, around 1,450 to 2,200 Hz;
- for [ŋ], with a very short oral cavity, it is higher still, above 3,000 Hz.

Nasal consonants also have a characteristic **nasal formant**, a strong low-frequency resonance around 250 to 300 Hz, and a generally lower intensity than vowels, because the nasal passages absorb energy. In a spectrogram, nasals appear as lighter, smoother bands with a strong low resonance.

## Nasal vowels

In a **nasal vowel**, sound passes through both the mouth and the nose. The acoustic effects include:

- a **broadening** and weakening of F1, often with an additional nasal resonance nearby;
- the introduction of antiformants, which reduce energy in certain regions;
- an overall **flattening** of the spectrum.

These effects are complex and vary from speaker to speaker and vowel to vowel, which makes nasal vowels hard to analyze automatically. Formant tracking programs often fail on nasal sounds.

## Perception

Listeners are sensitive to nasality, and use it as a cue even in languages, like English, where it is not distinctive: English listeners use the nasalization of a vowel to anticipate a following nasal consonant, recognizing *bent* from the vowel before the [n] is heard. In languages like French and Portuguese, where nasal vowels contrast with oral ones, listeners attend to nasality as a distinctive feature.

## Nasality and voice disorders

Measurements of nasality are used in **speech therapy**, for example to assess speakers with cleft palate, as we saw in PHO 101. A device called a **nasometer** compares the acoustic energy from the nose and the mouth, using microphones separated by a plate, to produce a measure of nasality called **nasalance**.

## Why antiformants matter

Antiformants show that the source–filter theory, in its simplest form, must be extended for sounds with side branches. The filter is not just a single tube but a system of connected cavities. This complexity is one reason why nasal sounds, laterals (which also have side branches, around the tongue), and some other consonants are harder to analyze and synthesize than oral vowels.

> **Pause and consider.** Why do formant-tracking programs often fail on nasal vowels?`,
    },
    {
      title: "Diphthongs and Moving Formants",
      body: `## Trajectories

As we saw in PHO 101, a **diphthong** is a vowel whose quality changes during its production. Acoustically, this means that its **formants move**. On a spectrogram, a diphthong appears as formant bands that slope from one frequency to another. In a vowel plot, it can be represented as an **arrow** or trajectory from the starting point to the ending point.

## English diphthongs

For example, in a general American accent:

- **PRICE** [aɪ]: F1 falls (from a low vowel to a high vowel) and F2 rises (from a central or back position to a front one);
- **MOUTH** [aʊ]: F1 falls and F2 falls (moving toward a high back rounded position);
- **CHOICE** [ɔɪ]: F1 falls slightly and F2 rises sharply;
- **FACE** [eɪ] and **GOAT** [oʊ]: smaller movements, which is why these vowels are sometimes treated as monophthongs.

The **rate** and **extent** of the formant movement differ among accents and speakers. In the American South, as we saw in PHO 101, PRICE is often monophthongized: its formants barely move.

## Vowel-inherent spectral change

Even vowels traditionally considered **monophthongs** are often not completely steady. In many English accents, FLEECE begins slightly lower and centralized and moves toward [i]; GOOSE may begin further front or back than it ends; TRAP in some American accents develops an inglide. **Terrance Nearey** and **Peter Assmann**, in a study published in 1986, showed that listeners use this **vowel-inherent spectral change** to identify vowels: vowels are recognized better when their formant movement is preserved than when only a single steady point is presented. As we saw in PHO 101, Hillenbrand's replication of Peterson and Barney reached a similar conclusion.

## Transitions

Formants also move at the **edges** of vowels, because of coarticulation with neighboring consonants. These **formant transitions** are crucial cues for identifying consonants, especially stops, which consist largely of silence. We will study them in Lesson III.

## Measuring diphthongs

Because diphthongs move, a single measurement at the midpoint is inadequate. Researchers measure diphthongs at several points, such as 20 percent and 80 percent of their duration, or track the whole trajectory. Modern studies often measure all vowels at multiple points, recognizing that movement is a normal part of vowel quality.

## Diphthongs and sound change

Acoustic measurements of diphthongs have been important in studies of sound change. **William Labov**'s famous study of **Martha's Vineyard**, published in 1963, examined the centralization of the PRICE and MOUTH diphthongs among residents of the island. Labov found that the first element of these diphthongs was more centralized among speakers who identified strongly with the island and resisted the influence of summer visitors, especially among young men who intended to stay on the island. This study, which we will meet again in SOC 101, was a foundation of modern sociolinguistics.

> **Pause and consider.** Say *my* slowly and imagine its spectrogram. Which formants would rise, and which would fall?`,
    },
    {
      title: "High Voices and Singing",
      body: `## The problem of high pitch

As we saw, formants lie between harmonics, and they are estimated from the relative strength of harmonics near them. When the fundamental frequency is **low**, as in typical male voices, harmonics are closely spaced, and the formants are well defined by the many harmonics around them. When the fundamental frequency is **high**, as in children's voices and singing, the harmonics are widely spaced, and a formant may fall between two harmonics, with little energy to show where it lies. This makes the formants of high voices hard to measure, and can even make vowels harder to identify.

## Sopranos

The problem is extreme in **soprano** singing. A soprano singing a high note may have an F0 of 1,000 Hz or more, which is **above** the normal F1 of most vowels. In that case, the first harmonic is already above the first formant, and the vowel's F1 cannot be represented at all. It is well known that vowels sung at very high pitches by sopranos are hard to identify; listeners often cannot tell which vowel is being sung.

The Swedish voice scientist **Johan Sundberg** showed that trained sopranos **tune** their formants at high pitches: they raise F1, by opening the jaw wider, so that it matches the fundamental frequency. This greatly increases the loudness of the voice, allowing it to be heard over an orchestra, at the cost of vowel clarity. Singers' vowels thus sometimes differ from spoken vowels, a compromise between intelligibility and loudness.

## The singer's formant

Sundberg also studied the **singer's formant**, a strong peak in the spectrum, around 2,500 to 3,500 Hz, found in the voices of trained classical singers, especially men. It results from the clustering of the third, fourth, and fifth formants, produced by a particular configuration of the larynx and pharynx, including a lowered larynx and a widened pharynx. Because orchestral instruments produce relatively little energy in this range, and because the ear is especially sensitive there, the singer's formant allows an unamplified voice to carry over a full orchestra in a large hall. Popular singers, who use microphones, generally do not need or develop it.

## Children's speech

Children's high voices and short vocal tracts pose similar challenges for analysis. Their formants are high and widely spaced, and their fundamental frequency is high. Researchers studying child speech often use special methods and settings. The difficulty of analyzing children's voices also affects speech technology: speech recognition systems trained mainly on adult voices often perform poorly with children.

## Voice and gender

The acoustic differences between typical male and female voices, in both F0 and formants, are partly anatomical and partly learned. Studies have found that children begin to differ by gender in their formant frequencies before puberty, when their vocal tracts are still similar in size, suggesting that they learn gendered patterns of speech, for example in lip rounding or spreading. **Transgender** people who wish to change how their voices are perceived often work with speech therapists to modify both pitch and resonance, and research suggests that resonance (formant frequencies) is as important as pitch for how a voice is perceived.

> **Pause and consider.** Why is it hard to tell which vowel a soprano is singing on a very high note?`,
    },
    {
      title: "Vowels as Evidence of Change",
      body: `## Measuring change in progress

In HIL 101, we studied **sound change in progress**: changes happening in living speech communities, which can be observed by comparing older and younger speakers. Acoustic measurement of vowels has been one of the most important tools for such studies.

## Labov, Yaeger, and Steiner

In 1972, **William Labov**, **Malcah Yaeger**, and **Richard Steiner** published *A Quantitative Study of Sound Change in Progress*, which used acoustic measurements to map the vowel systems of speakers in many American and British cities. By plotting formant values, they could see precisely how vowels were moving, and how the movements differed by age, sex, and social class. This study established the use of acoustic phonetics in **sociolinguistics**, which we study in SOC 101 and SOC 110.

## The Northern Cities Shift

Acoustic measurements revealed the **Northern Cities Shift** in detail. In cities such as Chicago, Detroit, Cleveland, and Buffalo, speakers born after about 1900 showed a series of linked vowel movements: TRAP raised and fronted (high F2, low F1); LOT fronted (higher F2); THOUGHT lowered and fronted; DRESS backed and lowered; STRUT backed; KIT lowered and backed. Plotted on a vowel chart, these movements form a rotation, a chain shift of the kind we studied in HIL 101.

More recent studies suggest that the Northern Cities Shift is now **reversing** among younger speakers in some cities, with TRAP returning toward a lower position, perhaps because the raised TRAP has come to be heard as stigmatized or old-fashioned. Acoustic measurements allow researchers to track such reversals in detail.

## Apparent time and real time

Studies of change in progress use two methods:

- **Apparent time**: comparing speakers of different ages at a single point in time, on the assumption that each generation's speech reflects the period in which they acquired language.
- **Real time**: comparing recordings made at different times, either of the same speakers (a **panel** study) or of comparable speakers (a **trend** study).

Acoustic measurements make both methods precise. The **Queen's Christmas broadcasts**, recorded annually since the 1950s, provided a famous real-time study: in 2000, **Jonathan Harrington** and colleagues published an acoustic analysis showing that Queen Elizabeth II's vowels had shifted over several decades toward those of the younger generation of southern British speakers. Even a speaker of the most conservative accent was affected by the community's ongoing changes.

## Large corpora

Today, researchers analyze vowels from very large collections of recordings, measuring thousands of tokens automatically with tools that align recordings with transcriptions. Such studies can map vowel variation across whole countries and track change across generations with unprecedented detail.

## The value of the acoustic method

Before acoustic measurement, the study of accents depended on the trained ears of dialectologists, whose transcriptions, however skilled, were impressionistic. Acoustic measurement does not replace the trained ear, but it provides precise, replicable evidence, and it can reveal small differences that listeners do not consciously notice.

> **Pause and consider.** Why might the Queen's vowels have changed over her lifetime, even though she spoke a highly conservative accent?`,
    },
    {
      title: "Voice Quality in the Spectrum",
      body: `## Beyond the formants

The formants tell us about the **filter**; but the spectrum also carries information about the **source**, and in particular about **voice quality** or **phonation type**, which we studied in PHO 101. Acoustic measures of voice quality are used in phonetics, sociolinguistics, speech therapy, and forensic analysis.

## H1–H2

One widely used measure is **H1–H2**: the difference in amplitude, in decibels, between the **first harmonic** (H1, the fundamental) and the **second harmonic** (H2). The relation between them reflects how the vocal folds vibrate:

- In **breathy voice**, the folds do not close completely, and the glottal pulse is smooth. The fundamental is strong relative to the higher harmonics, so **H1–H2 is high**.
- In **creaky voice**, the folds are tightly pressed, and the closure is abrupt. The higher harmonics are relatively strong, so **H1–H2 is low** or negative.
- **Modal voice** lies in between.

Researchers have used H1–H2 to study phonation contrasts in languages such as Gujarati, Jalapa Mazatec, and Hmong, which we met in PHO 101, showing how the different phonation types differ acoustically.

## Spectral tilt

More generally, the **spectral tilt**, the rate at which energy decreases with frequency, reflects voice quality. A **steep** tilt, with little high-frequency energy, characterizes soft, breathy voices; a **shallow** tilt, with strong high frequencies, characterizes pressed or creaky voices and loud speech. Measures comparing the amplitude of the first harmonic with the amplitude of harmonics near the formants (such as **H1–A1** and **H1–A3**) capture different aspects of tilt.

## Noise

Breathy voice also involves **noise**, turbulent airflow through the open glottis, mixed with the periodic vibration. Measures such as the **harmonics-to-noise ratio** (HNR) quantify how much of the energy is periodic and how much is noise. Low HNR is typical of breathy and hoarse voices, and is used clinically to assess voice disorders.

## Irregularity

**Creaky voice** often involves irregular vibration: successive cycles of the vocal folds differ in duration and amplitude. These irregularities are measured as **jitter** (cycle-to-cycle variation in period) and **shimmer** (cycle-to-cycle variation in amplitude). Praat can compute these measures, which we will revisit in Lesson IV. Clinicians use them, cautiously, to assess voice disorders such as nodules or paralysis of the vocal folds.

## Voice quality and society

Voice quality carries social meaning. As we saw in PHO 101, the use of creaky voice by young American women attracted much media criticism; acoustic studies have shown that creak is widespread among speakers of all kinds, and that listeners' judgments of it depend heavily on their expectations about the speaker. Breathy voice may be associated with intimacy or with particular personas. Sociophoneticians use acoustic measures to study how voice quality varies across communities and situations.

## Caution

Acoustic measures of voice quality are sensitive to recording conditions, microphone placement, and the vowel being produced. They must be used carefully, with consistent methods, and interpreted alongside listening and, where possible, direct observation of the larynx.

> **Pause and consider.** Say a vowel in a breathy voice and then in a creaky voice. Which do you think would have the higher H1–H2?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Source and filter

> A speaker says [a] at 100 Hz, then [a] at 200 Hz, then [i] at 200 Hz.

**Questions**

1. What changes between the first and second utterances: the harmonics, the formants, or both?
2. What changes between the second and third?

## 2. The neutral tube

> F*n* = (2*n* − 1) × *c* / 4*L*, with *c* = 35,000 cm/s

**Questions**

1. Calculate F1, F2, and F3 for *L* = 17.5 cm.
2. What vowel do these formants approximate?

## 3. Peterson and Barney

> [i] F1 270, F2 2,290; [u] F1 300, F2 870; [ɑ] F1 730, F2 1,090 (adult men, 1952)

**Questions**

1. Plot these three vowels with reversed axes.
2. Explain the values in terms of height, backness, and rounding.

## 4. The singer's formant

> A cluster of formants around 2,500–3,500 Hz in trained classical voices

**Questions**

1. How is it produced?
2. Why does it help singers be heard over an orchestra?

## Drawing the threads together

In a paragraph, explain the source–filter theory and how it accounts for the acoustics of vowels, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Elements of Acoustic Phonetics", author: "Peter Ladefoged", publisher: "University of Chicago Press", year: "2nd ed., 1996", note: "Read the chapters on resonance and on the acoustics of vowels." },
    { kind: "book", title: "Acoustic Theory of Speech Production", author: "Gunnar Fant", publisher: "Mouton", year: "1960", note: "For advanced students: read the introduction." },
    { kind: "book", title: "Control Methods Used in a Study of the Vowels", author: "Gordon E. Peterson and Harold L. Barney", publisher: "Journal of the Acoustical Society of America 24", year: "1952", note: "Look at the vowel plot and the table of average formant values." },
  ],
  media: [
    { kind: "book", title: "Acoustic and Auditory Phonetics", author: "Keith Johnson", publisher: "Wiley-Blackwell", year: "3rd ed., 2011", note: "Read the chapter on vowels." },
    { kind: "book", title: "The Science of the Singing Voice", author: "Johan Sundberg", publisher: "Northern Illinois University Press", year: "1987", note: "Read the chapter on the singer's formant." },
  ],
  questions: [
    {
      prompt: "What does the source–filter theory propose?",
      choices: [
        "That speech is produced by the ear",
        "That speech sounds result from a sound source shaped by the filtering of the vocal tract, largely independently",
        "That vowels have no formants",
        "That pitch determines vowel quality",
      ],
      answer: 1,
      explanation: "Developed by Chiba and Kajiyama and by Fant.",
    },
    {
      prompt: "How does the source spectrum differ between [i] and [a] at the same pitch?",
      choices: [
        "It is completely different",
        "It is essentially the same; the difference lies in the filter",
        "[i] has no harmonics",
        "[a] has no harmonics",
      ],
      answer: 1,
      explanation: "The vocal folds produce the same harmonics for any vowel.",
    },
    {
      prompt: "What are formants?",
      choices: [
        "Harmonics of the voice",
        "Resonant frequencies of the vocal tract",
        "The fundamental frequency",
        "Noise in fricatives",
      ],
      answer: 1,
      explanation: "Peaks of the filter function.",
    },
    {
      prompt: "For a uniform tube 17.5 cm long, closed at one end, what is F1?",
      choices: ["250 Hz", "500 Hz", "1,000 Hz", "1,500 Hz"],
      answer: 1,
      explanation: "35,000 / 70 = 500 Hz.",
    },
    {
      prompt: "Which formant is the main correlate of vowel height?",
      choices: ["F1, inversely", "F2", "F3", "F0"],
      answer: 0,
      explanation: "High vowels have low F1.",
    },
    {
      prompt: "What does lip rounding do to the formants?",
      choices: ["Raises them all", "Lowers them, especially F2 and F3", "Has no effect", "Raises only F1"],
      answer: 1,
      explanation: "It lengthens the tube and narrows its opening.",
    },
    {
      prompt: "What does Stevens's quantal theory propose?",
      choices: [
        "That speech is digital",
        "That languages favor articulations in regions where acoustic output is stable despite small articulatory changes",
        "That all vowels are equally common",
        "That formants are harmonics",
      ],
      answer: 1,
      explanation: "This helps explain the frequency of [i], [a], and [u].",
    },
    {
      prompt: "What do antiformants do?",
      choices: [
        "Reinforce certain frequencies",
        "Absorb energy at certain frequencies, as in nasal sounds",
        "Raise the pitch",
        "Create harmonics",
      ],
      answer: 1,
      explanation: "They arise from side branches such as the nasal cavity.",
    },
    {
      prompt: "What did Sundberg find about sopranos singing high notes?",
      choices: [
        "They lower their F1",
        "They tune F1 to match the fundamental, increasing loudness at the cost of vowel clarity",
        "They stop using formants",
        "They use the singer's formant only",
      ],
      answer: 1,
      explanation: "By opening the jaw wider.",
    },
    {
      prompt: "In breathy voice, how does H1–H2 compare with modal voice?",
      choices: ["It is higher", "It is lower", "It is the same", "It cannot be measured"],
      answer: 0,
      explanation: "The fundamental is relatively strong in breathy voice.",
    },
  ],
  reflection:
    "The source–filter theory is the foundation of acoustic phonetics. In 500–800 words, explain the theory, describe how F1 and F2 relate to vowel height and backness, and report the results of measuring and plotting your own vowels in Praat. What did you discover about your own accent?",
};
