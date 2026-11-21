import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const pho101: CourseContent = {
  overview: `Every spoken word is a sequence of rapid, precise movements of the lungs, larynx, tongue, and lips. This course studies how speech sounds are made, and how to describe and transcribe them with the International Phonetic Alphabet.

We begin with the vocal tract and the history of phonetics, from the phoneticians of ancient India, the Arab world, and medieval Iceland to Henry Sweet, Melville Bell, and the founders of the IPA, and learn how breathing, voicing, and the articulators work together and how phoneticians observe them. We then study consonants by voicing, place, and manner: stops, nasals, fricatives, affricates, approximants, trills, and taps, voice onset time, the many English r's, and the shibboleth. We go beyond English to ejectives, implosives, and clicks, secondary and double articulations, lateral fricatives, the coronal riches of South Asia and Australia, phonation types, and the size of sound inventories. We study vowels through Daniel Jones's cardinal vowels, the IPA chart, Wells's lexical sets, diphthongs, accent differences, reduction, and length. Finally, we turn to syllables, stress, rhythm, tone, pitch accent, intonation, coarticulation, connected speech, and the uses of phonetics in clinics, classrooms, courts, and the field.

The course follows Peter Ladefoged and Keith Johnson's *A Course in Phonetics* and the *Handbook of the International Phonetic Association*. Each lesson takes about two hours and ends with a session working directly with the evidence. Because phonetics is learned by doing, students should practice every sound aloud.`,
  objectives: [
    "Describe the anatomy and physiology of speech production, from the airstream to the articulators, and explain how phoneticians observe it.",
    "Classify and transcribe consonants by voicing, place, and manner of articulation using the International Phonetic Alphabet.",
    "Describe and produce sounds beyond English, including non-pulmonic consonants, secondary articulations, and phonation types.",
    "Describe vowels by height, backness, and rounding, use the cardinal vowels and the IPA vowel chart, and analyze English accents using Wells's lexical sets.",
    "Explain the phonetics of syllables, stress, rhythm, tone, pitch accent, and intonation, and the processes of connected speech.",
    "Apply phonetic knowledge to practical fields such as language teaching, speech therapy, forensic analysis, and language documentation.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "A Course in Phonetics", author: "Peter Ladefoged and Keith Johnson", publisher: "Cengage Learning", year: "1975; 7th ed., 2015" },
        { kind: "book", title: "Handbook of the International Phonetic Association", author: "International Phonetic Association", publisher: "Cambridge University Press", year: "1999" },
      ],
    },
    {
      heading: "Classic Studies",
      items: [
        { kind: "book", title: "The Sounds of the World's Languages", author: "Peter Ladefoged and Ian Maddieson", publisher: "Blackwell", year: "1996" },
        { kind: "book", title: "Patterns of Sounds", author: "Ian Maddieson", publisher: "Cambridge University Press", year: "1984" },
        { kind: "book", title: "An Outline of English Phonetics", author: "Daniel Jones", publisher: "B. G. Teubner; W. Heffer", year: "1918" },
        { kind: "book", title: "Accents of English", author: "J. C. Wells", publisher: "Cambridge University Press", year: "1982" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "Vowels and Consonants", author: "Peter Ladefoged and Sandra Ferrari Disner", publisher: "Wiley-Blackwell", year: "3rd ed., 2012" },
        { kind: "book", title: "Intonational Phonology", author: "D. Robert Ladd", publisher: "Cambridge University Press", year: "2nd ed., 2008" },
        { kind: "book", title: "Tone", author: "Moira Yip", publisher: "Cambridge University Press", year: "2002" },
        { kind: "website", title: "The International Phonetic Alphabet chart", author: "International Phonetic Association", publisher: "International Phonetic Association", url: "https://www.internationalphoneticassociation.org/content/ipa-chart" },
      ],
    },
  ],
};
