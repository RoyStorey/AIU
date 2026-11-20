import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const sys101: CourseContent = {
  overview: `Christian doctrine is the body of teaching that Christians, across their many traditions, have held to be true about God, the world, humanity, Christ, the Spirit, the church, and the end of all things. This course introduces it as Christians have understood it: as claims about reality, worked out over two thousand years in argument with Scripture, philosophy, rival teachings, and one another.

We begin with what theology is and where it gets its material—Scripture, tradition, reason, and experience—and with the creeds that summarize the faith. We then study God the Creator: how finite creatures can speak of God, the divine attributes, creation out of nothing, science, providence, miracles, and the problem of evil. We study humanity made in God's image, the Fall, original sin, grace, and predestination; the person of Christ as the councils from Nicaea to Chalcedon defined it, and the main accounts of how he saves; and finally the Holy Spirit, justification and deification, the church and its ministry, the sacraments, the communion of saints, and the last things.

Throughout, the course sets out the positions of the Catholic, Orthodox, and Protestant traditions fairly, and reads the great theologians in their own words. Bible quotations are from the King James Version. Each lesson takes about two hours and ends with a session working directly with the sources.`,
  objectives: [
    "Explain the nature and sources of Christian theology, and how the major traditions weigh Scripture, tradition, reason, and experience.",
    "Interpret the Apostles' and Nicene Creeds, and the Definition of Chalcedon, in their historical settings.",
    "Describe the classical doctrine of God and creation, and evaluate the main Christian responses to the problem of evil.",
    "Analyze the doctrines of the image of God, original sin, grace, and predestination, and the debates they provoked.",
    "Compare the main models of the atonement and the main accounts of justification, sanctification, and deification.",
    "Explain Catholic, Orthodox, and Protestant teaching on the church, ministry, sacraments, and the last things, and the modern ecumenical convergences.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Textbooks",
      items: [
        { kind: "book", title: "Christian Theology: An Introduction", author: "Alister E. McGrath", publisher: "Wiley-Blackwell", year: "6th ed., 2016" },
        { kind: "book", title: "The Christian Theology Reader", author: "ed. Alister E. McGrath", publisher: "Wiley-Blackwell", year: "5th ed., 2016" },
        { kind: "book", title: "The Christian Tradition: A History of the Development of Doctrine", author: "Jaroslav Pelikan", publisher: "University of Chicago Press", year: "5 vols., 1971–1989" },
      ],
    },
    {
      heading: "Classics",
      items: [
        { kind: "book", title: "On the Incarnation", author: "Athanasius", publisher: "St Vladimir's Seminary Press", year: "1996" },
        { kind: "book", title: "Orthodoxy", author: "G. K. Chesterton", publisher: "John Lane", year: "1908" },
        { kind: "book", title: "Mere Christianity", author: "C. S. Lewis", publisher: "HarperOne", year: "1952" },
        { kind: "book", title: "The Creeds of Christendom", author: "Philip Schaff", publisher: "Harper & Brothers", year: "3 vols., 1877" },
      ],
    },
    {
      heading: "Reference",
      items: [
        { kind: "book", title: "The Oxford Dictionary of the Christian Church", author: "ed. Andrew Louth", publisher: "Oxford University Press", year: "4th ed., 2022" },
        { kind: "book", title: "Models of the Church", author: "Avery Dulles", publisher: "Doubleday", year: "expanded ed., 1987" },
      ],
    },
  ],
};
