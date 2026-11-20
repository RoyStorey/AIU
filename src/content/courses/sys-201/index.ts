import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const sys201: CourseContent = {
  overview: `The doctrine of the Trinity—that the one God exists eternally as Father, Son, and Holy Spirit—is the central and most distinctive teaching of Christian faith, and the one most often misunderstood. This course traces how it was reached and what it means, from its roots in Israel's confession of one God to the medieval synthesis, with a look at its modern revival.

We begin with the Bible: the Shema, the Jewish figures of Wisdom, Word, and Spirit, the relation of Jesus to the Father, the Spirit in the New Testament, and the threefold pattern of early Christian worship. We follow the development from the second-century apologists and Irenaeus through the monarchian controversies, Tertullian, and Origen, to Arius, Athanasius, and the Council of Nicaea; the Cappadocian Fathers and the Council of Constantinople in 381; Augustine's great treatise On the Trinity and the controversy over the filioque; and finally Richard of St. Victor, Bonaventure, Thomas Aquinas, Gregory Palamas, Karl Barth, Karl Rahner, and the debate over social Trinitarianism.

The course reads the sources themselves, from Gregory of Nazianzus's Theological Orations to Aquinas's Summa, in public-domain translations wherever possible. It builds on SYS 101. Each lesson takes about two hours and ends with a session working directly with the texts.`,
  objectives: [
    "Explain the biblical and liturgical roots of the doctrine of the Trinity, and why the New Testament made the doctrine necessary without supplying it.",
    "Trace the development of Trinitarian doctrine from the apologists to the Councils of Nicaea and Constantinople, and the errors it rejected.",
    "Explain the Cappadocian distinction between ousia and hypostasis, and the roles of relations of origin, the monarchy of the Father, and perichoresis.",
    "Analyze Augustine's account of relation, person, and the image of the Trinity in the mind, and the history of the filioque controversy.",
    "Describe the medieval doctrines of Richard of St. Victor, Bonaventure, Aquinas, and Palamas, including subsistent relations and the essence–energies distinction.",
    "Evaluate the modern revival of Trinitarian theology, including Barth, Rahner, social Trinitarianism, and its critics.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "On God and Christ: The Five Theological Orations", author: "Gregory of Nazianzus, trans. Frederick Williams and Lionel Wickham", publisher: "St Vladimir's Seminary Press", year: "2002" },
        { kind: "book", title: "The Trinity", author: "Augustine, trans. Edmund Hill", publisher: "New City Press", year: "2nd ed., 2012" },
        { kind: "book", title: "Summa Theologiae, Part I", author: "Thomas Aquinas, trans. Fathers of the English Dominican Province", publisher: "Benziger Brothers", year: "1920" },
        { kind: "book", title: "On the Holy Spirit", author: "Basil the Great, trans. Stephen Hildebrand", publisher: "St Vladimir's Seminary Press", year: "2011" },
      ],
    },
    {
      heading: "Histories",
      items: [
        { kind: "book", title: "Early Christian Doctrines", author: "J. N. D. Kelly", publisher: "A. & C. Black; HarperOne", year: "5th ed., 1977" },
        { kind: "book", title: "Nicaea and Its Legacy", author: "Lewis Ayres", publisher: "Oxford University Press", year: "2004" },
        { kind: "book", title: "The Filioque: History of a Doctrinal Controversy", author: "A. Edward Siecienski", publisher: "Oxford University Press", year: "2010" },
      ],
    },
    {
      heading: "Modern Theology",
      items: [
        { kind: "book", title: "The Trinity", author: "Karl Rahner", publisher: "Crossroad", year: "1970; 1997" },
        { kind: "book", title: "Being as Communion", author: "John D. Zizioulas", publisher: "St Vladimir's Seminary Press", year: "1985" },
        { kind: "book", title: "The Quest for the Trinity", author: "Stephen R. Holmes", publisher: "IVP Academic", year: "2012" },
      ],
    },
  ],
};
