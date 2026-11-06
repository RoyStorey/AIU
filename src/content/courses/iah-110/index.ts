import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const iah110: CourseContent = {
  overview: `Before 1492, North America north of Mexico was home to hundreds of nations speaking some three hundred languages: town-dwelling farmers and buffalo hunters, salmon fishers and seal hunters, builders of earthen mounds and of stone great houses, confederacies governed by consensus and chiefdoms ruled by lords. This course travels across the continent region by region and forward in time, from the first peoples of the Ice Age to the eve of the reservation era, and asks how these nations lived, how they changed, and how their histories can be known.

We begin with deep time: the peopling of the Americas, the mound builders of Poverty Point, the first farmers, and the earthworks of the Hopewell. We visit Cahokia and the Mississippian chiefdoms, follow de Soto's invasion of the South, and hear the Haudenosaunee story of the Peacemaker and the Great Law. We go to the Southwest, to the canals of the Hohokam, the great houses of Chaco, the migrations from Mesa Verde, and the Pueblo Revolt of 1680. We cross the Plains, the Great Basin, and California, where the horse, the mission, and the Gold Rush transformed Native life. And we end on the Northwest Coast, the Columbia Plateau, and the Arctic, with the potlatch, the drowning of Celilo Falls, and the Inuit and their ancestors.

Throughout, we weigh many kinds of evidence—archaeology, linguistics, genetics, the reports of European explorers and officials, the words of Native writers and speakers, and oral traditions that have preserved memories for centuries—and the arguments of scholars from Vine Deloria Jr. and Ned Blackhawk to Timothy Pauketat, Pekka Hämäläinen, and Benjamin Madley. We set aside two old stories, of the vanishing Indian and the timeless Indian, and put in their place peoples with long, changing histories who are still here. Each lesson takes about two hours and ends with a session working directly with the sources.`,
  objectives: [
    "Describe the peopling of the Americas and the deep history of North America's first peoples, weighing archaeological, genetic, and oral evidence.",
    "Explain the rise and decline of the great Native societies of the Eastern Woodlands and the Southwest, from Poverty Point and Cahokia to Chaco Canyon and the Pueblos.",
    "Analyze how Native nations governed themselves, from the Haudenosaunee League and Mississippian chiefdoms to the ranked societies of the Northwest Coast.",
    "Assess how horses, guns, epidemics, missions, and settler expansion transformed Native life on the Plains, in the Great Basin, and in California, and how Native peoples shaped those changes.",
    "Evaluate the encounters between Native peoples and Europeans, from the Norse and de Soto to the Pueblo Revolt, the potlatch ban, and the treaties of the Northwest.",
    "Read sources about the Native past critically, including the writings of outsiders, the words of Native speakers and writers, and oral traditions.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "book", title: "Life Among the Piutes: Their Wrongs and Claims", author: "Sarah Winnemucca Hopkins", publisher: "G. P. Putnam's Sons", year: "1883", note: "The first autobiography published by a Native American woman." },
        { kind: "book", title: "Buffalo Bird Woman's Garden: Agriculture of the Hidatsa Indians", author: "Gilbert L. Wilson", publisher: "Minnesota Historical Society Press", year: "1917; reprinted 1987" },
        { kind: "book", title: "The Revolt of the Pueblo Indians of New Mexico and Otermín's Attempted Reconquest, 1680–1682", author: "Charles Wilson Hackett, ed.", publisher: "University of New Mexico Press", year: "1942", note: "The Spanish records of the revolt, including the testimony of Pueblo witnesses." },
        { kind: "edition", title: "Sketches of Ancient History of the Six Nations", author: "David Cusick", publisher: "Internet Archive", url: "https://archive.org/details/sketchesofancien00cusi", note: "The first history of the Haudenosaunee by a Haudenosaunee author (1827)." },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "The Rediscovery of America: Native Peoples and the Unmaking of U.S. History", author: "Ned Blackhawk", publisher: "Yale University Press", year: "2023", note: "Winner of the National Book Award; the course's guide to the place of Native peoples in American history." },
        { kind: "book", title: "Native Nations: A Millennium in North America", author: "Kathleen DuVal", publisher: "Random House", year: "2024", note: "Winner of the Pulitzer Prize; a thousand years of Native power and politics." },
        { kind: "book", title: "Ancient North America: The Archaeology of a Continent", author: "Brian M. Fagan", publisher: "Thames & Hudson", year: "5th ed., 2019" },
        { kind: "book", title: "1491: New Revelations of the Americas before Columbus", author: "Charles C. Mann", publisher: "Alfred A. Knopf", year: "2005" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "Cahokia: Ancient America's Great City on the Mississippi", author: "Timothy R. Pauketat", publisher: "Viking", year: "2009" },
        { kind: "book", title: "The Ordeal of the Longhouse", author: "Daniel K. Richter", publisher: "University of North Carolina Press", year: "1992" },
        { kind: "book", title: "Captives and Cousins: Slavery, Kinship, and Community in the Southwest Borderlands", author: "James F. Brooks", publisher: "University of North Carolina Press", year: "2002" },
        { kind: "book", title: "The Comanche Empire", author: "Pekka Hämäläinen", publisher: "Yale University Press", year: "2008" },
        { kind: "book", title: "An American Genocide: The United States and the California Indian Catastrophe, 1846–1873", author: "Benjamin Madley", publisher: "Yale University Press", year: "2016" },
        { kind: "book", title: "Red Earth, White Lies: Native Americans and the Myth of Scientific Fact", author: "Vine Deloria Jr.", publisher: "Scribner", year: "1995" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "website", title: "National Museum of the American Indian", publisher: "Smithsonian Institution", url: "https://americanindian.si.edu/", note: "Collections, essays, and online exhibitions, many made with Native communities." },
        { kind: "website", title: "Native Knowledge 360°", publisher: "Smithsonian National Museum of the American Indian", url: "https://americanindian.si.edu/nk360/", note: "Lessons and resources on Native histories, made with Native educators." },
        { kind: "website", title: "Cahokia Mounds State Historic Site", publisher: "Illinois Department of Natural Resources", url: "https://cahokiamounds.org/" },
        { kind: "website", title: "Chaco Culture National Historical Park", publisher: "National Park Service", url: "https://www.nps.gov/chcu/index.htm" },
      ],
    },
  ],
};
