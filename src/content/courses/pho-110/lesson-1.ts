import type { Lesson } from "@/lib/schema";

export const lesson1: Lesson = {
  title: "The Physics of Sound",
  summary:
    "What acoustic phonetics studies; sound as waves of pressure; frequency and pitch; amplitude, decibels, and loudness; periodic and aperiodic waves; Fourier and the spectrum; Helmholtz and the early science of vowels; resonance; how the ear analyzes sound; hearing loss and speech; recording and digitizing speech; and first steps in Praat.",
  pages: [
    {
      title: "From Mouth to Ear",
      body: `## The middle link

In PHO 101, we studied how speech sounds are **produced** by the organs of the vocal tract. But speech does not stay in the mouth. Between the speaker's lips and the listener's ear, it travels as a **sound wave**: a pattern of tiny, rapid changes in air pressure. **Acoustic phonetics** studies this middle link in the chain of communication: the physical properties of speech sounds as they travel through the air.

## Why acoustics?

Acoustic phonetics has several advantages over articulatory phonetics:

- **It can be measured precisely.** A recording captures the sound exactly, and computer programs can measure its properties to a fraction of a millisecond or a few hertz.
- **It is easy to obtain.** Recording speech requires only a microphone, while observing the articulators often requires expensive or invasive equipment, as we saw in PHO 101.
- **It is closer to what listeners hear.** Listeners have no direct access to the speaker's articulators; they hear only the sound wave.

As we saw in PHO 101, the traditional descriptions of vowels turned out to correspond more closely to acoustic properties than to tongue positions. Acoustic analysis has transformed our understanding of speech.

## Our guides

This course follows **Peter Ladefoged**, *Elements of Acoustic Phonetics* (1962; 2nd edition, 1996), a short and clear introduction written for linguists without a background in physics, and the computer program **Praat** (Dutch for "talk"), developed by **Paul Boersma** and **David Weenink** at the University of Amsterdam from the early 1990s, and made freely available. Praat has become the standard tool for acoustic analysis of speech in linguistics, and students in this course should download it and use it throughout. Its manual and tutorials, available within the program, are an excellent guide.

## The plan

**Lesson I** introduces the physics of sound: waves, frequency, amplitude, spectra, resonance, the ear, and the recording of speech. **Lesson II** studies the **source–filter theory** of speech production and the acoustics of **vowels**. **Lesson III** studies **spectrograms** and the acoustics of **consonants**. **Lesson IV** studies **pitch, duration, and intensity**, the acoustics of prosody and voice quality, with practical work in Praat. **Lesson V** studies **speech perception** and **speech technology**.

## No physics required

Students do not need prior training in physics or mathematics. The concepts are explained from the beginning, with examples from everyday experience and from speech. A little arithmetic, such as multiplying and dividing frequencies, will be used. What matters most is a willingness to look carefully at pictures of sound and connect them with what we hear and do when we speak.

> **Pause and consider.** What advantages does a recording of speech have over a description based on how the speaker's mouth feels?`,
    },
    {
      title: "The Speech Chain",
      body: `## Links in a chain

In *The Speech Chain* (1963), written for a general audience at Bell Telephone Laboratories, **Peter Denes** and **Elliot Pinson** described spoken communication as a **chain of events** linking the mind of a speaker to the mind of a listener. Their model remains a useful map of the whole subject of phonetics.

## The levels

The chain passes through three levels:

1. The **linguistic level**: the speaker decides what to say and selects words and grammatical structures, arranging them in sentences.
2. The **physiological level**: the brain sends signals along the nerves to the muscles of the lungs, larynx, tongue, and lips, which move to produce speech. This is the subject of articulatory phonetics, studied in PHO 101.
3. The **acoustic level**: the movements of the vocal organs create a sound wave, which travels through the air. This is the subject of this course.

At the listener's end, the chain runs in reverse: the sound wave reaches the ear (acoustic level), the ear converts it into nerve impulses sent to the brain (physiological level), and the brain recognizes the words and understands the message (linguistic level).

## Feedback

Denes and Pinson also emphasized a second chain: the speaker hears their own voice, through the air and through the bones of the head, and uses this **auditory feedback** to monitor and adjust their speech. The importance of feedback is shown by experiments with **delayed auditory feedback**, in which speakers hear their own voice through headphones with a delay of about a fifth of a second: most people begin to stutter, slow down, or stumble. People who lose their hearing in adulthood often find that their speech gradually changes, because they can no longer monitor it.

## Redundancy

A central insight of the speech-chain view is that spoken communication is highly **redundant**: the same information is carried in several ways at once. A word may be recognized from its vowels, its consonants, its stress, its context, or the speaker's gestures. This redundancy allows communication to succeed despite noise, distortion, and individual differences. The engineer **Claude Shannon**, also at Bell Laboratories, developed the mathematical theory of information in 1948, which gave a precise meaning to redundancy and influenced the study of speech and language.

## Why the acoustic link matters

The acoustic level is the only link in the chain that exists **outside** the bodies of speaker and listener. It is the shared public form of speech, which both can access, and which can be recorded, measured, transmitted, and stored. For this reason, it has been central to the engineering of communication, from the telephone to the smartphone, and to the scientific study of speech.

## A map for this course

Throughout this course, we will move along the chain: from the physics of sound (this lesson), to how the vocal tract shapes sound into vowels and consonants (Lessons II and III), to the acoustics of prosody (Lesson IV), and finally to how listeners perceive speech and how machines imitate the chain (Lesson V).

> **Pause and consider.** Why might hearing your own voice with a short delay disrupt your speech?`,
    },
    {
      title: "What Is Sound?",
      body: `## Vibrating air

**Sound** is a wave of pressure moving through a medium, usually air. When an object vibrates, such as a guitar string, a loudspeaker cone, or the vocal folds, it pushes against the air molecules next to it, crowding them together, and then pulls back, leaving them more spread out. Regions of higher pressure are called **compressions**; regions of lower pressure, **rarefactions**. These alternating regions travel outward from the source as a **sound wave**.

## Molecules do not travel

An important point: the air molecules themselves do not travel from the speaker to the listener. Each molecule moves only a tiny distance back and forth, passing its motion to its neighbors, like a ripple passing through a crowd in a stadium "wave," in which each person stands and sits but stays in place. What travels is the **pattern** of pressure changes, the wave itself.

## The speed of sound

Sound travels through air at about **343 meters per second** (about 1,235 kilometers per hour) at room temperature, much more slowly than light. This is why we see a distant flash of lightning before we hear the thunder: counting the seconds between them and dividing by three gives the approximate distance in kilometers. Sound travels faster in water and solids than in air, and cannot travel at all in a vacuum, since there is nothing to carry the wave.

## Tiny changes

The pressure changes in speech are extremely small. Ordinary atmospheric pressure is about 100,000 pascals; the pressure changes in conversational speech, at a meter or so from the speaker, are a small fraction of a pascal, less than a millionth of atmospheric pressure. The human ear is remarkably sensitive to such tiny variations.

## Representing a wave

Sound waves are usually represented as a **waveform**: a graph showing how air pressure (or, in a recording, the voltage from a microphone) changes over **time**. Time runs along the horizontal axis; pressure (amplitude) on the vertical axis, above and below a central line representing normal atmospheric pressure. In Praat, when you open a recording, the waveform is the first thing you see.

## Waves in speech

In speech, the main sources of sound are:

- the **vibrating vocal folds**, which produce a regular series of puffs of air, the source of voicing;
- **turbulent airflow** through a narrow constriction, which produces the hissing noise of fricatives;
- the sudden **release** of built-up pressure, which produces the burst of a stop.

The vocal tract then shapes these sounds, as we will see in Lesson II.

## Sound and the Psalmist

Ancient writers knew that sound travels through the air, though not how. The Psalmist, describing the heavens declaring the glory of God, says strikingly: "There is no speech nor language, where their voice is not heard" (Psalm 19:3). Modern acoustics describes, in its own terms, how any voice reaches any ear.

> **Pause and consider.** If air molecules do not travel from speaker to listener, what does?`,
    },
    {
      title: "Frequency and Pitch",
      body: `## Cycles per second

Many sounds, such as the note of a tuning fork or the voiced sounds of speech, are produced by vibrations that repeat regularly. One complete repetition of the pattern is called a **cycle**; the time it takes is the **period**. The number of cycles per second is the **frequency**, measured in **hertz** (Hz), after the German physicist **Heinrich Hertz** (1857–1894). A tuning fork vibrating 440 times per second has a frequency of 440 Hz, the note A above middle C to which orchestras tune.

Frequency and period are inversely related: a sound with a frequency of 100 Hz has a period of one hundredth of a second (10 milliseconds); a sound of 200 Hz has a period of 5 milliseconds.

## The range of hearing

Healthy young humans can hear frequencies from about **20 Hz** to about **20,000 Hz** (20 kilohertz). The upper limit falls with age: by middle age, many people cannot hear above about 12,000 to 15,000 Hz. Most of the important information in speech lies between about 100 and 8,000 Hz. The telephone, for most of its history, transmitted only frequencies between about 300 and 3,400 Hz, which is enough for speech to be understood, though some sounds, such as [f] and [s], become hard to distinguish, which is why people spell out names on the phone with "F as in Frank."

## Pitch

**Pitch** is the perceptual correlate of frequency: the sensation of a sound as "high" or "low." Higher frequencies are heard as higher pitches. But the relation is not simple. Our perception of pitch is roughly **logarithmic**: we hear equal **ratios** of frequency as equal steps of pitch. The interval from 100 to 200 Hz sounds the same as the interval from 200 to 400 Hz, and from 400 to 800 Hz: each is an **octave**, a doubling of frequency. Phoneticians often use scales such as **semitones**, the **mel** scale, or the **Bark** scale, which approximate human perception better than raw hertz.

## The voice

In speech, the pitch of the voice is determined by the frequency of vibration of the vocal folds, called the **fundamental frequency** (F0). As we saw in PHO 101, typical adult male voices have an F0 of around 100 to 150 Hz, adult female voices around 200 to 250 Hz, and children's voices higher still. The F0 varies constantly during speech, rising and falling with stress, tone, and intonation, as we will study in Lesson IV.

## Why voices differ

Why are men's voices usually lower? The main reason is that adult men usually have longer and thicker vocal folds, which vibrate more slowly, as a result of changes at puberty, when the larynx grows, especially in boys. The "breaking" of a boy's voice at puberty reflects this growth. But speakers also have considerable control over their F0, and cultural norms influence how high or low people speak: studies have found that average female pitch differs among languages and societies, and has fallen in some countries over recent decades.

> **Pause and consider.** Why does the interval from 100 to 200 Hz sound the same as the interval from 400 to 800 Hz?`,
    },
    {
      title: "Amplitude and Loudness",
      body: `## How big the wave is

The **amplitude** of a sound wave is the size of its pressure variations: how far the pressure rises above and falls below the normal atmospheric pressure. In a waveform, amplitude is the height of the peaks and the depth of the troughs. A larger amplitude corresponds to a more **intense** sound, which is generally heard as **louder**.

## The decibel

Because the human ear can hear an enormous range of intensities, from the faintest whisper to a jet engine, which differ by a factor of about a trillion in intensity, acousticians use a **logarithmic** scale, the **decibel** (dB), named after **Alexander Graham Bell**. On the decibel scale, each increase of 10 dB corresponds to a tenfold increase in intensity, and is heard as roughly a doubling of loudness.

Some typical sound levels:

| Sound | Approximate level |
|---|---|
| threshold of hearing | 0 dB |
| rustling leaves | 20 dB |
| whisper | 30 dB |
| quiet conversation | 50–60 dB |
| busy street | 70–80 dB |
| loud concert | 100–110 dB |
| threshold of pain | 120–130 dB |

## Loudness

**Loudness** is the perceptual correlate of intensity, but, like pitch, it does not correspond simply to the physical measure. The ear is more sensitive to some frequencies than others: it is most sensitive between about 2,000 and 5,000 Hz, and much less sensitive to very low and very high frequencies. A low-frequency sound must therefore be more intense than a mid-frequency sound to be heard as equally loud. The curves showing equal loudness across frequencies, first measured by **Harvey Fletcher** and **Wilden Munson** at Bell Laboratories in 1933, are still used in acoustics.

## Intensity in speech

In speech, intensity varies among sounds and across syllables:

- **vowels** are the most intense speech sounds, especially low vowels like [a];
- **sibilant fricatives** like [s] and [ʃ] are fairly intense, especially at high frequencies;
- **non-sibilant fricatives** like [f] and [θ] are among the weakest sounds;
- **stops** consist mainly of silence, with a brief burst.

As we saw in PHO 101, stressed syllables are usually more intense than unstressed ones, but intensity is a weaker cue to stress than pitch or duration.

## Hearing damage

Prolonged exposure to loud sounds can damage the hair cells of the inner ear, causing permanent **hearing loss**. Occupational safety guidelines in many countries recommend limiting exposure to sounds above about 85 dB, with the safe time halving for every few decibels above that. Personal music players at high volume, concerts, and industrial noise are common causes of noise-induced hearing loss. As we will see later in this lesson, such loss usually affects high frequencies first, with serious consequences for understanding speech.

## Relative measures

In acoustic phonetics, absolute sound levels are less important than **relative** ones: how much more intense one syllable is than another, or one frequency region than another. Praat and other programs display intensity in decibels, and phoneticians compare these values within a recording.

> **Pause and consider.** Why do acousticians use a logarithmic scale for sound intensity?`,
    },
    {
      title: "Periodic and Aperiodic Sounds",
      body: `## Simple waves

The simplest sound wave is a **sine wave** (or sinusoid), a smooth, regular wave produced, for example, by a tuning fork. A sine wave has a single frequency and is heard as a **pure tone**, like the beep of a hearing test. Pure tones are rare in nature; almost all sounds are more complex.

## Complex periodic waves

A **complex periodic** wave repeats regularly, but its shape is not a simple sine wave: within each cycle, it has smaller peaks and troughs. The voiced sounds of speech, such as vowels, are complex periodic waves. Look at the waveform of a vowel in Praat, and you will see a pattern that repeats with each vibration of the vocal folds, but within each repetition, a complex shape that depends on the vowel. The frequency at which the whole pattern repeats is the **fundamental frequency**.

## Aperiodic waves

An **aperiodic** wave has no repeating pattern. Its pressure variations are random, like the noise of wind, rushing water, or static. In speech, aperiodic waves are produced by **turbulence**, as in fricatives like [s], [ʃ], and [f], and in the aspiration of [h] and aspirated stops. In a waveform, aperiodic sound appears as a dense, irregular scribble, with no repeating pattern.

## Transients

A **transient** is a very brief sound, such as a click or a pop. The release burst of a stop like [p] or [t] is a transient, lasting only a few milliseconds. In a waveform, it appears as a sudden spike after the silence of the stop closure.

## Mixed sounds

Many speech sounds combine these types. A **voiced fricative**, such as [z] or [v], combines the periodic vibration of the vocal folds with the aperiodic noise of turbulence: its waveform shows a repeating pattern with noise superimposed on it. **Breathy voice**, as we saw in PHO 101, also combines periodic vibration with turbulent airflow.

## Reading waveforms

With practice, one can identify some sounds from their waveforms alone:

- **vowels** show large, regular, repeating patterns;
- **nasals** and **approximants** show smaller, smoother periodic patterns;
- **voiceless fricatives** show irregular noise, with no periodicity;
- **voiced fricatives** show periodicity mixed with noise;
- **voiceless stops** show a flat line (silence) followed by a burst;
- **voiced stops** show a low-amplitude periodic signal (voicing during the closure) followed by a burst.

But waveforms reveal only limited information about the **frequencies** present in a sound. For that, we need the **spectrum** and the **spectrogram**, which we study next and in Lesson III.

> **Pause and consider.** Open a recording of the word *sass* in Praat, or imagine its waveform. Where would you expect to see periodic and aperiodic patterns?`,
    },
    {
      title: "Fourier and the Spectrum",
      body: `## A mathematical discovery

In 1822, the French mathematician **Joseph Fourier**, in a treatise on the theory of heat, proved a remarkable theorem: **any periodic wave**, however complex, can be described as the **sum of a series of sine waves**, each with its own frequency, amplitude, and phase. The process of breaking a complex wave into its sine-wave components is called **Fourier analysis**.

## Harmonics

For a complex periodic wave, such as a vowel, the component sine waves have frequencies that are whole-number **multiples** of the fundamental frequency. These components are called **harmonics**. If the fundamental frequency of a voice is 100 Hz, its harmonics are at 100, 200, 300, 400, 500 Hz, and so on, up to many thousands of hertz. The first harmonic is the fundamental itself.

When the speaker's pitch rises to 150 Hz, the harmonics move to 150, 300, 450, 600 Hz: they become more widely spaced. A higher voice thus has fewer, more widely spaced harmonics in any given frequency range.

## The spectrum

The result of Fourier analysis can be displayed as a **spectrum**: a graph showing the **amplitude** of each frequency component, with frequency on the horizontal axis and amplitude on the vertical axis. The spectrum of a periodic sound consists of vertical lines at the harmonic frequencies, a **line spectrum**. The spectrum of an aperiodic sound, such as a fricative, is continuous, with energy spread across a range of frequencies; it shows which frequency regions are strongest.

## Why the spectrum matters

The spectrum shows what a waveform hides. Two vowels with the same fundamental frequency, say [i] and [a] spoken at the same pitch, have the same harmonics, but the **relative amplitudes** of the harmonics differ: certain harmonics are stronger in [i], others in [a]. It is these differences in the shape of the spectrum, as we will see in Lesson II, that make the vowels sound different.

## Musical instruments

The same principle explains why different musical instruments playing the same note sound different. A violin, a flute, and a trumpet playing A at 440 Hz all produce harmonics at 440, 880, 1,320 Hz, and so on; but the relative strengths of the harmonics differ, giving each instrument its characteristic **timbre** or tone color. The vowels of speech are, in effect, different timbres produced by the same instrument, the human voice, as the shape of the vocal tract changes.

## The Fast Fourier Transform

Computing a spectrum by hand is laborious. In 1965, **James Cooley** and **John Tukey** published an efficient algorithm, the **Fast Fourier Transform** (FFT), which made spectral analysis practical on computers. Programs like Praat use the FFT and related methods to compute spectra and spectrograms in a fraction of a second.

## Seeing the spectrum

In Praat, you can select a short portion of a vowel and display its spectrum. You will see the harmonics as a series of peaks, and you will see that some regions of the spectrum, the **formants**, are stronger than others. The formants are the key to the acoustics of vowels, and the subject of Lesson II.

> **Pause and consider.** A speaker says [a] at 100 Hz and then at 200 Hz. What happens to the harmonics?`,
    },
    {
      title: "Helmholtz and the Early Science of Vowels",
      body: `## Talking machines

The scientific study of speech acoustics began in the eighteenth century with attempts to build **talking machines**. In 1779, the Imperial Academy of Sciences in St. Petersburg offered a prize for an explanation of the physiological differences between the five vowels and a device to produce them. The prize was won by **Christian Gottlieb Kratzenstein**, who built a set of tubes of different shapes which, when blown through a vibrating reed, produced vowel-like sounds.

In 1791, the Hungarian inventor **Wolfgang von Kempelen**, famous for his fraudulent chess-playing "Turk," published a book describing a genuine **speaking machine**, with a bellows for lungs, a reed for the vocal folds, and a leather tube that could be shaped by hand to produce vowels and some consonants. Kempelen's machine could produce short words and phrases, and his book contained careful observations of speech production. A reconstruction of his machine was later built by the English scientist **Charles Wheatstone**.

## Willis

In 1830, the English engineer **Robert Willis** published experiments showing that vowel quality depended on the **length of the tube** through which the sound passed. By lengthening a tube attached to a reed, he could produce a series of vowels. He concluded that each vowel was characterized by a particular resonance, independent of the pitch of the reed.

## Helmholtz

The greatest of the early acousticians was the German physicist and physiologist **Hermann von Helmholtz** (1821–1894). In *On the Sensations of Tone* (1863; English translation by Alexander John Ellis, 1875), Helmholtz explained musical tone quality and vowel quality in terms of **harmonics** and **resonance**. Using hollow glass spheres of different sizes, now called **Helmholtz resonators**, each of which resonated at a particular frequency, he could detect which harmonics were present in a sound by holding the resonators to his ear. He showed that vowels differ in which frequency regions are reinforced by the resonances of the mouth.

Helmholtz also built a **vowel synthesizer**, using tuning forks driven by electromagnets and resonators, which could produce vowel sounds by combining harmonics of different strengths. His work laid the foundations of the source–filter theory, which we study in Lesson II.

## Bell and the telephone

The telephone, invented in 1876 by **Alexander Graham Bell**, son of the phonetician Melville Bell whom we met in PHO 101, emerged partly from this tradition. Bell, who taught the deaf, had studied Helmholtz's work and sought ways to make speech visible to his students. His interest in the physics of speech led him to experiments in transmitting sound electrically.

## Bell Laboratories

In the twentieth century, research on speech acoustics was concentrated at the **Bell Telephone Laboratories** in the United States, where engineers sought to improve telephone transmission. As we will see in Lesson III, it was there that the **sound spectrograph** was developed in the 1940s, transforming phonetics.

> **Pause and consider.** Why were scientists of the eighteenth and nineteenth centuries so interested in building machines that could talk?`,
    },
    {
      title: "Resonance",
      body: `## Natural frequencies

Every object that can vibrate has one or more **natural frequencies** at which it vibrates most easily. A wine glass rings at a particular pitch when tapped; a guitar string sounds a particular note; a swing moves back and forth at a particular rate. If an object is set in motion by a vibration at or near its natural frequency, it vibrates strongly. This is called **resonance**.

## Familiar examples

Resonance is familiar from everyday life:

- A child on a swing goes higher if pushed in time with the swing's natural rhythm.
- A singer, by holding a note at a glass's natural frequency with sufficient intensity, can in principle make the glass vibrate strongly enough to shatter, though this is very difficult in practice.
- Blowing across the top of a bottle produces a note; adding water to the bottle shortens the air column and raises the note.

## Resonating air

An enclosed body of **air**, such as the air in a bottle, a pipe, or the vocal tract, also has natural frequencies. When sound passes through it, frequencies near its natural frequencies are **reinforced**, and other frequencies are weakened. The enclosed air acts as a **filter**, shaping the sound that passes through it.

## Tubes

The natural frequencies of a tube depend on its **length** and **shape**. A uniform tube, closed at one end and open at the other, resonates at frequencies whose wavelengths are related to four times its length. A longer tube has lower resonances; a shorter tube, higher ones. This is why larger instruments, like the tuba and the double bass, produce lower notes than smaller instruments, like the trumpet and the violin.

## The vocal tract as a tube

The **vocal tract** is a tube about 17 centimeters long in adult men, closed at the glottis (where the vocal folds are) and open at the lips. If it were uniform in shape, its natural frequencies would be at about 500, 1,500, and 2,500 Hz, and so on. These are, in fact, close to the resonances of the neutral vowel **schwa** [ə], which is produced with the vocal tract in a roughly uniform shape. We will calculate these values in Lesson II.

When the tongue, lips, and jaw move, they change the shape of the tube, narrowing it in some places and widening it in others, and so change its resonances. Each vowel corresponds to a particular pattern of resonances. These resonances of the vocal tract are called **formants**.

## Damping

Resonators differ in how sharply they resonate. A wine glass rings for a long time at a precise pitch: it is lightly **damped**. The vocal tract, with its soft walls and open lips, is heavily damped: its resonances are broad, reinforcing a range of frequencies rather than a single one. This is why the vocal tract can reinforce the harmonics of a voice at any pitch, and why vowels remain recognizable whether spoken by a man, a woman, or a child.

> **Pause and consider.** Blow across a bottle, then add some water and blow again. Why does the note change?`,
    },
    {
      title: "The Ear as an Analyzer",
      body: `## Three parts

The human ear has three parts:

- The **outer ear**, consisting of the visible **pinna** and the **ear canal**, collects sound and channels it to the eardrum. The ear canal, a tube about 2.5 centimeters long, itself resonates at around 3,000 Hz, boosting frequencies in this range, which is important for speech.
- The **middle ear** contains three tiny bones, the **ossicles** (the hammer, anvil, and stirrup), which transmit the vibrations of the **eardrum** to the inner ear, amplifying the pressure in the process.
- The **inner ear** contains the **cochlea**, a fluid-filled, snail-shaped tube in which sound vibrations are converted into nerve impulses.

## The cochlea

Inside the cochlea runs the **basilar membrane**, which vibrates in response to sound. The membrane varies in stiffness along its length: it is narrow and stiff at the base, near the middle ear, and wider and more flexible at the apex. As a result, different parts of the membrane respond to different frequencies: high frequencies cause the base to vibrate most, low frequencies the apex. This arrangement, in which frequency is mapped onto place, is called **tonotopic** organization.

## Békésy

The Hungarian-American physicist **Georg von Békésy** demonstrated, through experiments on cochleas from human cadavers and animals, that sound produces a **traveling wave** along the basilar membrane, peaking at a place determined by its frequency. For this work, he received the Nobel Prize in Physiology or Medicine in **1961**.

## Hair cells

Along the basilar membrane are rows of **hair cells**, which convert the membrane's motion into electrical signals sent to the brain through the **auditory nerve**. Each hair cell responds most to vibration at a particular frequency. The cochlea thus performs a kind of **frequency analysis** of incoming sound, similar to Fourier analysis, breaking it into its component frequencies.

## The ear and the spectrogram

This is why the **spectrum** and the **spectrogram** are such useful representations of speech: they display sound in terms of its frequency components, much as the ear analyzes it. The analogy is not exact. The ear's frequency resolution is finer at low frequencies than at high ones, corresponding to the roughly logarithmic perception of pitch that we discussed earlier; and the brain does much more than analyze frequencies. But the analogy explains why phoneticians focus so much on spectral properties.

## Masking

A loud sound can make a quieter sound at a nearby frequency inaudible, a phenomenon called **masking**. Low-frequency sounds mask higher frequencies more than the reverse. Masking explains why background noise, especially low-frequency noise like traffic, interferes with speech, and why some sounds in speech are harder to hear in noise than others. Audio compression formats, such as MP3, exploit masking by discarding sounds that listeners would not hear anyway.

> **Pause and consider.** Why might a resonance of the ear canal around 3,000 Hz be useful for hearing speech?`,
    },
    {
      title: "Hearing Loss and Speech",
      body: `## High frequencies first

The most common form of hearing loss, **age-related hearing loss** (presbycusis), and also **noise-induced** hearing loss, usually affect **high frequencies** first. The hair cells at the base of the cochlea, which respond to high frequencies, are the most vulnerable. A person with mild high-frequency loss may hear speech as loud enough but not clear: they can tell someone is speaking but have difficulty understanding the words.

## Why consonants suffer

High-frequency hearing loss affects **consonants** much more than vowels. Vowels have most of their energy below about 3,000 Hz, and are relatively intense. Many consonants, especially fricatives like [s], [f], [θ], and [ʃ], and the bursts of stops, have much of their distinguishing energy at high frequencies, and are relatively weak. A listener with high-frequency loss may confuse *fit*, *sit*, and *thick*, or miss the plural *-s* of *cats*, which carries grammatical information. Since consonants carry much of the information that distinguishes words, the effect on understanding is serious.

## Noise

Hearing loss makes speech in **noise** especially difficult. People with hearing loss often say that they can follow a conversation in a quiet room but not in a restaurant. Noise masks the weaker parts of speech, and a damaged cochlea is less able to separate speech from noise. As we saw in PHO 101, speakers can help by using **clear speech**, which makes consonants more intense and vowels more distinct.

## Hearing aids

**Hearing aids** amplify sound, often selectively, boosting the frequencies where the listener's hearing is weakest. Modern digital hearing aids use sophisticated processing to reduce background noise and focus on speech. But amplification cannot fully restore the frequency analysis performed by healthy hair cells.

## Cochlear implants

For people with severe or profound hearing loss, a **cochlear implant** can provide a sense of sound by electrically stimulating the auditory nerve directly. The implant's electrodes are placed along the cochlea, and each stimulates nerve fibers associated with a particular frequency region, imitating the cochlea's tonotopic organization. Cochlear implants provide far fewer frequency channels than a healthy cochlea, yet many users, especially children implanted early, learn to understand speech well. The success of implants with so few channels shows how much the brain can extract from limited acoustic information.

## Deaf communities

It is important to remember, as we saw in LIN 101, that many deaf people use **sign languages**, full natural languages that do not depend on hearing at all. Within Deaf communities, deafness is often understood not as a medical deficit but as a cultural and linguistic identity. Debates about cochlear implants, especially for children, involve questions of language, culture, and identity as well as medicine.

## A connection with phonetics

The history of phonetics is closely connected with deafness. As we saw in PHO 101, Melville Bell's *Visible Speech* was designed for teaching the deaf, and Alexander Graham Bell's work on the telephone grew from the same interest. Research on speech acoustics and perception continues to inform the design of hearing aids and cochlear implants.

> **Pause and consider.** Why does high-frequency hearing loss affect consonants more than vowels?`,
    },
    {
      title: "Recording and Digitizing Speech",
      body: `## Microphones

To analyze speech acoustically, we must first **record** it. A **microphone** converts the pressure variations of a sound wave into variations of electrical voltage. The quality of a recording depends on the microphone, its placement, and the recording environment. For phonetic analysis, a good-quality microphone placed close to the speaker's mouth (but not directly in front of it, to avoid bursts of air from stops), in a quiet room without echoes, gives the best results.

## Digitizing

Modern recordings are **digital**: the continuous voltage from the microphone is converted into a series of numbers by an **analog-to-digital converter**. Two settings are crucial:

- the **sampling rate**: how many times per second the voltage is measured;
- the **bit depth** (or quantization): how precisely each measurement is recorded.

## The sampling rate and Nyquist

According to the **sampling theorem**, associated with the engineers **Harry Nyquist** and **Claude Shannon**, a digital recording can represent frequencies up to **half** its sampling rate. This limit is called the **Nyquist frequency**. Compact discs use a sampling rate of 44,100 samples per second (44.1 kHz), which can represent frequencies up to 22,050 Hz, just above the limit of human hearing. For speech analysis, a sampling rate of 16,000 to 22,050 Hz is often sufficient, since most speech information lies below 8,000 Hz; but higher rates are often used to capture the high-frequency energy of fricatives.

If a recording contains frequencies above the Nyquist frequency, they are not simply lost but appear as false lower frequencies, a distortion called **aliasing**. Recording equipment uses **anti-aliasing filters** to remove such frequencies before digitizing.

## Bit depth

Each sample is stored as a number with a certain number of **bits**. A 16-bit recording, standard for compact discs, can distinguish about 65,000 levels of amplitude, giving a dynamic range of about 96 dB; 24-bit recordings offer more. For speech, 16 bits is usually sufficient, provided the recording level is set correctly: loud enough to use the available range, but not so loud that the signal exceeds it and is **clipped**, which distorts the waveform.

## Compression

Many common audio formats, such as **MP3** and **AAC**, use **lossy compression**, discarding information that listeners are unlikely to notice. For phonetic analysis, such formats should be avoided where possible, because they may remove or distort acoustic details. Uncompressed formats, such as **WAV**, are preferred.

## Fieldwork

Linguists recording languages in the field face particular challenges: background noise, wind, limited power, and the need for durable equipment. Ladefoged, who recorded languages all over the world, emphasized the importance of good recordings and careful documentation of who was recorded, when, and where. Today, archives of recordings of endangered languages, such as those of the **Endangered Languages Archive** and **PARADISEC** (the Pacific and Regional Archive for Digital Sources in Endangered Cultures), preserve such recordings for future research and for the communities themselves.

> **Pause and consider.** Why would a recording made at a sampling rate of 8,000 Hz be poor for studying the fricative [s]?`,
    },
    {
      title: "First Steps in Praat",
      body: `## Getting started

**Praat**, as we noted, is free software for the acoustic analysis of speech, available for Windows, macOS, and Linux from the University of Amsterdam's website. When you open Praat, two windows appear: the **Objects** window, which lists the sounds and other data you are working with, and the **Picture** window, used for drawing figures. Most analysis is done in a third kind of window, the **editor**, which you open for a particular sound.

## Recording or opening a sound

To begin, either **record** a sound using the *New > Record mono Sound...* command, or **open** an existing sound file using *Open > Read from file...*. The sound will appear in the Objects window. Select it and click **View & Edit** to open the editor.

## The editor

The sound editor displays:

- the **waveform** at the top, showing amplitude over time;
- the **spectrogram** below it, showing frequency over time, with darker areas indicating more energy (we study spectrograms in Lesson III);
- optionally, overlaid lines showing **pitch** (blue), **intensity** (yellow), and **formants** (red dots), which can be turned on or off in the menus.

You can **zoom** in and out, **select** a portion of the sound by dragging, and **play** the selection. Clicking at a point shows the time, and, on the spectrogram, the frequency at that point.

## Simple measurements

With the editor, you can make basic measurements:

- **Duration**: select a portion of the sound, such as a vowel, and read its duration at the bottom of the window.
- **Pitch**: place the cursor in a voiced portion and use the *Pitch* menu to get the fundamental frequency.
- **Intensity**: use the *Intensity* menu to get the intensity in decibels.
- **Formants**: use the *Formant* menu to get the formant frequencies at the cursor.

## A first exercise

Record yourself saying the words *heed*, *hid*, *head*, *had*, *hod*, *hawed*, *hood*, and *who'd*, the classic words used by Peterson and Barney, whom we met in PHO 101. Open the recording in Praat and look at each vowel. Measure its duration, its pitch, and its first two formants. You will begin to see how the vowels differ acoustically. We will return to these measurements in Lesson II.

## Cautions

Praat's automatic measurements are very useful, but they can be wrong. Pitch tracking may jump to twice or half the true frequency, especially in creaky voice; formant tracking may miss a formant or find a spurious one, especially in high-pitched voices or nasal sounds. Always check automatic measurements against the spectrogram and your own ears. As Ladefoged used to emphasize, the computer is a tool, not a substitute for the phonetician's judgment.

## Scripts

Praat also has a **scripting language**, which allows users to automate repetitive tasks, such as measuring the formants of hundreds of vowels. Many researchers share their Praat scripts. Learning to write simple scripts is valuable for anyone who intends to do serious acoustic research.

> **Pause and consider.** Record yourself saying *heed* and *who'd* and open them in Praat. What differences do you see in the spectrogram?`,
    },
    {
      title: "Working with the Sources",
      minutes: 25,
      body: `Work through each item, then write your answers in your notebook.

## 1. Frequency and period

> A voice with F0 = 125 Hz; a voice with F0 = 250 Hz

**Questions**

1. What is the period of each voice in milliseconds?
2. What are the first four harmonics of each?

## 2. Decibels

> Whisper: 30 dB; conversation: 60 dB; concert: 110 dB

**Questions**

1. How many times more intense is conversation than a whisper?
2. Why do acousticians use a logarithmic scale?

## 3. Waveforms

> The word *sack*: [s] noise, [æ] vowel, [k] closure and burst

**Questions**

1. Describe what each part of the waveform would look like.
2. Which part is periodic, which aperiodic, and which a transient?

## 4. Sampling

> Telephone speech, historically about 300–3,400 Hz; CD audio sampled at 44.1 kHz

**Questions**

1. What is the Nyquist frequency of CD audio?
2. Why are [f] and [s] hard to distinguish over the telephone?

## Drawing the threads together

In a paragraph, explain how sound travels from speaker to listener and how it can be measured, using at least three of the items.`,
    },
  ],
  readings: [
    { kind: "book", title: "Elements of Acoustic Phonetics", author: "Peter Ladefoged", publisher: "University of Chicago Press", year: "1962; 2nd ed., 1996", note: "Read chapters 1–3, on sound waves, loudness and pitch, and quality." },
    { kind: "website", title: "Praat: Doing Phonetics by Computer", author: "Paul Boersma and David Weenink", publisher: "University of Amsterdam", url: "https://www.praat.org", note: "Download the program and work through the introductory tutorial in its manual." },
    { kind: "book", title: "On the Sensations of Tone as a Physiological Basis for the Theory of Music", author: "Hermann von Helmholtz, trans. Alexander J. Ellis", publisher: "Longmans, Green", year: "1875", note: "In the public domain. Read the opening sections on the composition of vibrations." },
  ],
  media: [
    { kind: "book", title: "Acoustic and Auditory Phonetics", author: "Keith Johnson", publisher: "Wiley-Blackwell", year: "3rd ed., 2011", note: "A more detailed introduction; read chapters 1 and 3." },
    { kind: "book", title: "The Speech Chain: The Physics and Biology of Spoken Language", author: "Peter B. Denes and Elliot N. Pinson", publisher: "W. H. Freeman", year: "2nd ed., 1993", note: "A classic introduction from Bell Laboratories; read the first chapter." },
  ],
  questions: [
    {
      prompt: "What travels from speaker to listener in a sound wave?",
      choices: [
        "Air molecules",
        "A pattern of pressure changes",
        "Light",
        "Electricity",
      ],
      answer: 1,
      explanation: "Each molecule moves only a tiny distance.",
    },
    {
      prompt: "What is the period of a sound with a frequency of 200 Hz?",
      choices: ["2 ms", "5 ms", "20 ms", "200 ms"],
      answer: 1,
      explanation: "1/200 of a second.",
    },
    {
      prompt: "What is an octave?",
      choices: [
        "An increase of 100 Hz",
        "A doubling of frequency",
        "An increase of 10 dB",
        "Eight harmonics",
      ],
      answer: 1,
      explanation: "Pitch perception is roughly logarithmic.",
    },
    {
      prompt: "An increase of 10 dB corresponds to what change in intensity?",
      choices: ["Doubling", "Tenfold increase", "Halving", "No change"],
      answer: 1,
      explanation: "It is heard as roughly a doubling of loudness.",
    },
    {
      prompt: "Which kind of wave is produced by a voiceless fricative?",
      choices: ["Periodic", "Aperiodic", "Pure tone", "Transient only"],
      answer: 1,
      explanation: "Turbulence produces random noise.",
    },
    {
      prompt: "What did Fourier show?",
      choices: [
        "That sound travels at 343 m/s",
        "That any periodic wave can be described as a sum of sine waves",
        "That the ear has three parts",
        "That vowels are resonances",
      ],
      answer: 1,
      explanation: "In 1822, in a treatise on heat.",
    },
    {
      prompt: "If F0 is 100 Hz, where is the third harmonic?",
      choices: ["103 Hz", "300 Hz", "1,000 Hz", "33 Hz"],
      answer: 1,
      explanation: "Harmonics are whole-number multiples of F0.",
    },
    {
      prompt: "Who explained vowel quality in terms of harmonics and resonance in On the Sensations of Tone?",
      choices: ["Robert Willis", "Hermann von Helmholtz", "Kempelen", "Fourier"],
      answer: 1,
      explanation: "Published in 1863.",
    },
    {
      prompt: "What did Békésy discover?",
      choices: [
        "The telephone",
        "That sound produces a traveling wave along the basilar membrane, peaking at a place determined by frequency",
        "The decibel",
        "The spectrograph",
      ],
      answer: 1,
      explanation: "Nobel Prize, 1961.",
    },
    {
      prompt: "What is the Nyquist frequency of a recording sampled at 16,000 Hz?",
      choices: ["16,000 Hz", "8,000 Hz", "32,000 Hz", "4,000 Hz"],
      answer: 1,
      explanation: "Half the sampling rate.",
    },
  ],
  reflection:
    "Speech travels from mouth to ear as a pattern of tiny pressure changes. In 500–800 words, explain the basic properties of sound (frequency, amplitude, and spectrum), how the ear analyzes them, and how speech is recorded for analysis. Then describe what you observed when you first opened a recording of your own voice in Praat.",
};
