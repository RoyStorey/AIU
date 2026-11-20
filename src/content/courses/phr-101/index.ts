import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const phr101: CourseContent = {
  overview: `Can belief in God be rational? Is faith opposed to reason, independent of it, in harmony with it, or answerable to it? Few questions have been argued longer or by more brilliant minds. This course follows the argument historically, from Paul at Athens to John Paul II's *Fides et Ratio*, and asks you to join it.

We begin in the early church, with Justin's "seeds of the Word," Tertullian's "What has Athens to do with Jerusalem?", the Alexandrians, and Augustine's "believe that you may understand." We turn to the medieval synthesis—Anselm, Abelard and Bernard, al-Ghazali, Averroes, Maimonides, and Thomas Aquinas—and its late medieval unraveling. We read Blaise Pascal's *Pensées* in the setting of the seventeenth century: the Reformers, Montaigne's skepticism, Galileo, Descartes, and Locke. We study the Enlightenment challenge in David Hume's essay on miracles and his *Dialogues Concerning Natural Religion*, and the responses of Kant, Schleiermacher, Kierkegaard, Newman, and William James. Finally, we follow the modern debate: Vatican I, Karl Barth, the positivists and Antony Flew, Wittgenstein, Alvin Plantinga's Reformed epistemology, the revival of natural theology and its critics, and *Fides et Ratio*.

The course reads its sources in public-domain translations wherever possible, and presents the strongest arguments on every side. It does not tell you what to conclude. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Define faith and reason in their main senses, and distinguish the families of positions on their relation: opposition (including fideism), independence, harmony, and rationalism.",
    "Explain how early Christian thinkers, from Justin and Tertullian to Augustine and Boethius, related the faith to Greek philosophy.",
    "Analyze the medieval synthesis of faith and reason in Anselm, al-Ghazali, Averroes, Maimonides, and Aquinas, and its late medieval critics.",
    "Interpret Pascal's Pensées—the Memorial, misery and greatness, the hidden God, the wager, and the reasons of the heart—in the context of Montaigne, Descartes, and Locke.",
    "Evaluate Hume's arguments against miracles and natural theology in the Enquiry and the Dialogues, and the responses of Kant, Kierkegaard, Newman, and James.",
    "Assess modern positions, from Vatican I, Barth, and the falsification debate to Reformed epistemology, the revival of natural theology, and Fides et Ratio, and articulate a reasoned view of your own.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Texts",
      items: [
        { kind: "book", title: "Pensées", author: "Blaise Pascal, trans. A. J. Krailsheimer", publisher: "Penguin Classics", year: "1966; rev. ed., 1995" },
        { kind: "book", title: "Dialogues Concerning Natural Religion", author: "David Hume", publisher: "many editions", year: "1779", note: "In the public domain." },
        { kind: "website", title: "Fides et Ratio (Encyclical Letter, 1998)", author: "John Paul II", publisher: "The Holy See", year: "1998", url: "https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_14091998_fides-et-ratio.html" },
        { kind: "book", title: "The Will to Believe and Other Essays in Popular Philosophy", author: "William James", publisher: "Longmans, Green", year: "1897", note: "In the public domain." },
      ],
    },
    {
      heading: "Histories and Studies",
      items: [
        { kind: "book", title: "Reason and Revelation in the Middle Ages", author: "Étienne Gilson", publisher: "Charles Scribner's Sons", year: "1938" },
        { kind: "book", title: "The History of Scepticism: From Savonarola to Bayle", author: "Richard H. Popkin", publisher: "Oxford University Press", year: "rev. ed., 2003" },
        { kind: "book", title: "Al-Ghazali's Philosophical Theology", author: "Frank Griffel", publisher: "Oxford University Press", year: "2009" },
      ],
    },
    {
      heading: "The Contemporary Debate",
      items: [
        { kind: "book", title: "Faith and Rationality: Reason and Belief in God", author: "ed. Alvin Plantinga and Nicholas Wolterstorff", publisher: "University of Notre Dame Press", year: "1983" },
        { kind: "book", title: "Warranted Christian Belief", author: "Alvin Plantinga", publisher: "Oxford University Press", year: "2000" },
        { kind: "book", title: "The Existence of God", author: "Richard Swinburne", publisher: "Oxford University Press", year: "1979; 2nd ed., 2004" },
        { kind: "book", title: "The Miracle of Theism: Arguments for and against the Existence of God", author: "J. L. Mackie", publisher: "Oxford University Press", year: "1982" },
      ],
    },
  ],
};
