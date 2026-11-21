import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const wrl110: CourseContent = {
  overview: `Judaism is at once a faith, a people, and a civilization, with a history of more than three thousand years. From its soil grew Christianity and Islam; its scriptures, its ethical monotheism, its weekly day of rest, and its sense of history as purposeful have shaped the world. This course studies Judaism as its own adherents understand it: Torah, Talmud, and Jewish life through the ages.

We begin with the origins of Judaism in ancient Israel: Abraham and the covenant, the Exodus and Sinai, the kingdom and the Temple, the prophets, the exile and return, the shaping of the Hebrew Bible, the diaspora, and the destruction of the Second Temple. We study the rabbis who rebuilt Judaism after the Temple: the oral Torah, the Mishnah, the Talmud, halakha and midrash, the synagogue, and prayer. With Abraham Joshua Heschel's *The Sabbath* as our guide, we study Jewish life: the Sabbath, the festivals, the dietary laws, the cycle of life, and the home. We follow Judaism through the Middle Ages and early modern period—Saadia, Judah Halevi, Maimonides, Rashi, Kabbalah, Luria, Sabbatai Zevi, and Hasidism—and through the persecutions of Christian Europe. Finally, we study modern Judaism: emancipation and its movements, Zionism, the Holocaust and theology after Auschwitz, the State of Israel, American Judaism, and the transformation of Jewish–Christian relations.

The course follows Michael Fishbane's *Judaism: Revelation and Traditions*, and quotes the Hebrew Bible in the public-domain translation of the Jewish Publication Society (1917). Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Describe the origins of Judaism in ancient Israel, including the covenant, the Exodus and Sinai, the prophets, the exile, and the formation of the Tanakh.",
    "Explain the oral Torah and the formation of rabbinic Judaism, including the Mishnah, the Talmud, halakha, midrash, the synagogue, and Jewish prayer.",
    "Describe the Sabbath, the festivals, the dietary laws, and the Jewish cycle of life, and evaluate Heschel's account of Judaism as a religion that sanctifies time.",
    "Trace medieval and early modern Jewish thought and life, including Jewish philosophy, Kabbalah, Hasidism, and the experience of persecution and expulsion.",
    "Explain the modern Jewish movements, Zionism, the Holocaust and Jewish theological responses to it, and the founding and character of the State of Israel.",
    "Analyze the history of Jewish–Christian relations and the changes since the Holocaust, and reflect on what Christians may learn from the study of Judaism.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Core Texts",
      items: [
        { kind: "book", title: "Judaism: Revelation and Traditions", author: "Michael Fishbane", publisher: "HarperSanFrancisco (Religious Traditions of the World)", year: "1987" },
        { kind: "book", title: "The Sabbath: Its Meaning for Modern Man", author: "Abraham Joshua Heschel", publisher: "Farrar, Straus and Giroux", year: "1951" },
        { kind: "book", title: "The Holy Scriptures According to the Masoretic Text", author: "Jewish Publication Society", publisher: "Jewish Publication Society of America", year: "1917", note: "In the public domain." },
      ],
    },
    {
      heading: "Sources and Histories",
      items: [
        { kind: "book", title: "From the Maccabees to the Mishnah", author: "Shaye J. D. Cohen", publisher: "Westminster John Knox Press", year: "3rd ed., 2014" },
        { kind: "book", title: "The Essential Talmud", author: "Adin Steinsaltz", publisher: "Basic Books", year: "1976" },
        { kind: "book", title: "Major Trends in Jewish Mysticism", author: "Gershom Scholem", publisher: "Schocken Books", year: "1941" },
        { kind: "book", title: "The Jew in the Modern World: A Documentary History", author: "ed. Paul Mendes-Flohr and Jehuda Reinharz", publisher: "Oxford University Press", year: "3rd ed., 2011" },
      ],
    },
    {
      heading: "Further Reading",
      items: [
        { kind: "book", title: "The Prophets", author: "Abraham Joshua Heschel", publisher: "Harper & Row", year: "1962" },
        { kind: "book", title: "Night", author: "Elie Wiesel, trans. Marion Wiesel", publisher: "Hill and Wang", year: "2006" },
        { kind: "book", title: "The Lonely Man of Faith", author: "Joseph B. Soloveitchik", publisher: "Doubleday", year: "1992 (essay first published 1965)" },
      ],
    },
  ],
};
