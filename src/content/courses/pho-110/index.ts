import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const pho110: CourseContent = {
  overview: `Between the speaker's lips and the listener's ear, speech travels as a pattern of tiny changes in air pressure. This course studies that pattern: the physics of sound, the acoustics of vowels and consonants, the measurement of prosody and voice, and how listeners and machines turn sound into words.

We begin with the speech chain and the physics of sound: waves, frequency and pitch, decibels and loudness, Fourier's spectrum, the early talking machines and Helmholtz, resonance, the ear as an analyzer, hearing loss, digital recording, and first steps in Praat. We then study the source–filter theory, the voice source and its harmonics, formants and the neutral tube, how articulation moves the formants, how listeners hear vowels, vowel plots, nasal vowels, diphthongs, singers, vowels as evidence of sound change, and voice quality in the spectrum. We learn to read spectrograms and the cues to consonants: bursts, transitions and the locus, voice onset time, fricative noise, nasals and approximants, the many cues behind one distinction, and the problem of invariance, along with annotation tools and corpora. We measure pitch, duration, intensity, rhythm, emotion, conversational timing, and voice, and learn to resynthesize speech and design experiments. Finally, we study speech perception, from categorical perception and the McGurk effect to word recognition and the brain, and the history and ethics of speech technology.

The course follows Peter Ladefoged's *Elements of Acoustic Phonetics* and the program Praat by Paul Boersma and David Weenink. Each lesson takes about two hours and ends with a session working directly with the evidence. Students should install Praat and analyze their own recordings throughout.`,
  objectives: [
    "Explain the physical properties of sound, including frequency, amplitude, and spectrum, and how the ear analyzes them.",
    "Apply the source–filter theory to explain the acoustics of vowels, and measure and plot vowel formants in Praat.",
    "Read spectrograms and identify the acoustic cues to stops, fricatives, nasals, and approximants, including formant transitions and voice onset time.",
    "Measure pitch, duration, intensity, and voice quality, and relate them to stress, tone, intonation, rhythm, and emotion.",
    "Evaluate theories and findings in speech perception, including categorical perception, the motor theory, audiovisual integration, and word recognition.",
    "Describe the history and current state of speech synthesis and recognition, and assess the ethical issues they raise.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "Elements of Acoustic Phonetics", author: "Peter Ladefoged", publisher: "University of Chicago Press", year: "1962; 2nd ed., 1996" },
        { kind: "website", title: "Praat: Doing Phonetics by Computer", author: "Paul Boersma and David Weenink", publisher: "University of Amsterdam", url: "https://www.praat.org" },
      ],
    },
    {
      heading: "Classic Studies",
      items: [
        { kind: "book", title: "Acoustic Theory of Speech Production", author: "Gunnar Fant", publisher: "Mouton", year: "1960" },
        { kind: "book", title: "Visible Speech", author: "Ralph K. Potter, George A. Kopp, and Harriet C. Green", publisher: "D. Van Nostrand", year: "1947" },
        { kind: "book", title: "On the Sensations of Tone", author: "Hermann von Helmholtz, trans. Alexander J. Ellis", publisher: "Longmans, Green", year: "1875" },
        { kind: "book", title: "The Speech Chain", author: "Peter B. Denes and Elliot N. Pinson", publisher: "W. H. Freeman", year: "2nd ed., 1993" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Acoustic and Auditory Phonetics", author: "Keith Johnson", publisher: "Wiley-Blackwell", year: "3rd ed., 2011" },
        { kind: "book", title: "Acoustic Phonetics", author: "Kenneth N. Stevens", publisher: "MIT Press", year: "1998" },
        { kind: "book", title: "Native Listening", author: "Anne Cutler", publisher: "MIT Press", year: "2012" },
        { kind: "book", title: "Auditory Scene Analysis", author: "Albert S. Bregman", publisher: "MIT Press", year: "1990" },
      ],
    },
  ],
};
