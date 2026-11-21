import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const wrl101: CourseContent = {
  overview: `Most human beings who have ever lived have been religious, and most people alive today still are. To understand the world, its history, its art, its conflicts, and its hopes, one must understand its religions. This course surveys the major living traditions as their own adherents understand them, with attention to their scriptures, practices, communities, and histories, and with honesty about their failures as well as their wisdom.

We begin with the study of religion itself: definitions from Tylor, Durkheim, and James; Max Müller and the birth of comparative religion; Mircea Eliade on the sacred and the profane; Ninian Smart's seven dimensions; the problem of insider and outsider; Huston Smith's sympathetic portraits; and Christian theologies of other faiths. We then study the religions of India: the Vedas and Upanishads, the four paths, the Bhagavad Gita, the gods and temples, Vedanta, modern Hinduism, Jainism, and Sikhism. We follow Buddhism from the Buddha's awakening across Asia, and study Confucianism, Daoism, Chan and Zen, Pure Land, and Shinto. We turn to the Abrahamic family—Zoroastrianism, Judaism, and Christianity in comparative view, and above all Islam: Muhammad, the Qur'an, the Five Pillars, sharia, Sunni and Shia, and Sufism. Finally, we study indigenous religions of Africa, the Americas, Australia, and the Pacific, and the forces reshaping religion today: secularization, new movements, global Pentecostalism, violence and peacemaking, and dialogue.

The course follows Huston Smith's *The World's Religions* and Mircea Eliade's *The Sacred and the Profane*, alongside the scriptures of each tradition in public-domain translations. It does not try to decide which religion is true, but to help you understand what you would be choosing among. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Evaluate major definitions and methods in the study of religion, including those of Durkheim, James, Eliade, Smart, and Wilfred Cantwell Smith, and the problem of the insider and outsider.",
    "Explain the central teachings and practices of Hinduism, Jainism, and Sikhism, including Brahman and Atman, karma and samsara, the four paths, ahimsa, and the Gurus.",
    "Describe the life and teaching of the Buddha, the three main Buddhist traditions and their spread across Asia, and the religions of China and Japan.",
    "Explain the shared convictions and deep differences of the Abrahamic religions, and describe Islam's scripture, beliefs, practices, law, branches, and mystical tradition.",
    "Describe common features and particular forms of indigenous religions, and analyze secularization, new religious movements, global Christianity, and the relation of religion to violence and peace.",
    "Compare Christian approaches to other religions—exclusivism, inclusivism, and pluralism—and the forms of interreligious dialogue, and articulate a respectful and informed approach of your own.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "The World's Religions", author: "Huston Smith", publisher: "HarperOne", year: "1958 (as The Religions of Man); rev. ed., 1991" },
        { kind: "book", title: "The Sacred and the Profane: The Nature of Religion", author: "Mircea Eliade, trans. Willard R. Trask", publisher: "Harcourt, Brace", year: "1959" },
        { kind: "book", title: "Dimensions of the Sacred: An Anatomy of the World's Beliefs", author: "Ninian Smart", publisher: "University of California Press", year: "1996" },
      ],
    },
    {
      heading: "Scriptures in Public-Domain Translation",
      items: [
        { kind: "book", title: "The Sacred Books of the East", author: "ed. F. Max Müller", publisher: "Clarendon Press", year: "1879–1910", note: "Fifty volumes, including the Upanishads, the Bhagavad Gita, the Dhammapada, and the Tao Te Ching." },
        { kind: "book", title: "The Chinese Classics, vol. 1: Confucian Analects", author: "trans. James Legge", publisher: "Clarendon Press", year: "2nd ed., 1893" },
        { kind: "book", title: "The Meaning of the Glorious Koran", author: "trans. Marmaduke Pickthall", publisher: "Alfred A. Knopf", year: "1930" },
      ],
    },
    {
      heading: "Further Study",
      items: [
        { kind: "book", title: "What the Buddha Taught", author: "Walpola Rahula", publisher: "Grove Press", year: "rev. ed., 1974" },
        { kind: "book", title: "The Study Quran: A New Translation and Commentary", author: "ed. Seyyed Hossein Nasr et al.", publisher: "HarperOne", year: "2015" },
        { kind: "book", title: "African Religions and Philosophy", author: "John S. Mbiti", publisher: "Heinemann", year: "1969; 2nd ed., 1990" },
        { kind: "book", title: "The Gospel in a Pluralist Society", author: "Lesslie Newbigin", publisher: "Eerdmans; SPCK", year: "1989" },
      ],
    },
  ],
};
