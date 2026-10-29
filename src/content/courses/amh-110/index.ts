import type { CourseContent } from "@/lib/schema";
import { lesson1 } from "./lesson-1";
import { lesson2 } from "./lesson-2";
import { lesson3 } from "./lesson-3";
import { lesson4 } from "./lesson-4";
import { lesson5 } from "./lesson-5";

export const amh110: CourseContent = {
  overview: `Before there was a United States, there were many Americas. This course follows the peoples of North America from the eve of Columbus's voyage to the middle of the eighteenth century: Native nations with their own histories, powers, and politics; Spanish conquerors and missionaries; English adventurers, Puritans, Quakers, and planters; French traders and Jesuits; Dutch merchants; and more than a third of a million Africans carried across the Atlantic in chains.

We begin with Native North America and the Columbian encounter, and follow the English colonies from the starving time at Jamestown to the sugar revolution of Barbados, from the Mayflower Compact to the Salem witch trials. We set them beside their rivals and neighbors: New France and its Native alliances, New Netherland and its conquest, Penn's "holy experiment," the Carolina trade in Native slaves, the Pueblo Revolt of 1680, and the imperial wars. And we end with the Atlantic slave trade and the making of African America: how colonial law created hereditary, racial slavery, and how the enslaved made families, faiths, and cultures of their own.

Throughout, we read the colonists, the colonized, and the enslaved in their own words, and weigh the arguments of historians from Perry Miller and Edmund Morgan to Ira Berlin, Alan Taylor, and Pekka Hämäläinen. Each lesson takes about two hours and ends with a session working directly with primary sources.`,
  objectives: [
    "Describe the diversity of Native North America before 1492, and explain the consequences of the Columbian encounter and the Columbian Exchange.",
    "Explain how the Chesapeake colonies survived and grew, and how they moved from indentured servitude to racial slavery.",
    "Analyze the religious and political culture of Puritan New England, its dissenters, its wars with Native nations, and the crisis at Salem.",
    "Compare the colonial projects of Britain, France, the Netherlands, and Spain, and the Native nations they lived among, fought, and depended on.",
    "Explain the scale and workings of the Atlantic slave trade, the making of slave law and race, and the making of African American culture.",
    "Evaluate major interpretations of colonial America—regional, Atlantic, and continental—and use primary sources to construct arguments of your own.",
  ],
  lessons: [lesson1, lesson2, lesson3, lesson4, lesson5],
  library: [
    {
      heading: "Primary Sources",
      items: [
        { kind: "edition", title: "A Brief Account of the Destruction of the Indies", author: "Bartolomé de las Casas", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/20321" },
        { kind: "edition", title: "The General Historie of Virginia, New England & the Summer Isles (Vol. I)", author: "John Smith", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/56347" },
        { kind: "edition", title: "Bradford's History of “Plimoth Plantation”", author: "William Bradford", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/24950" },
        { kind: "edition", title: "Narrative of the Captivity and Restoration of Mrs. Mary Rowlandson", author: "Mary Rowlandson", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/851" },
        { kind: "edition", title: "The Interesting Narrative of the Life of Olaudah Equiano", author: "Olaudah Equiano", publisher: "Project Gutenberg", url: "https://www.gutenberg.org/ebooks/15399" },
        { kind: "website", title: "Salem Witch Trials: Documentary Archive and Transcription Project", publisher: "University of Virginia", url: "https://salem.lib.virginia.edu/home.html", note: "Court records, maps, and contemporary books." },
        { kind: "website", title: "The Jesuit Relations and Allied Documents", author: "Reuben Gold Thwaites, ed.", publisher: "Creighton University", url: "http://puffin.creighton.edu/jesuit/relations/" },
        { kind: "website", title: "The Avalon Project: Seventeenth-Century Documents", publisher: "Yale Law School", url: "https://avalon.law.yale.edu/17th_century/nc05.asp", note: "The colonial charters, frames of government, and fundamental laws." },
      ],
    },
    {
      heading: "Surveys",
      items: [
        { kind: "book", title: "American Colonies: The Settling of North America", author: "Alan Taylor", publisher: "Viking", year: "2001", note: "The continental survey: Native America, New Spain, New France, and the British colonies together." },
        { kind: "book", title: "1491: New Revelations of the Americas Before Columbus", author: "Charles C. Mann", publisher: "Alfred A. Knopf", year: "2005" },
        { kind: "book", title: "Many Thousands Gone: The First Two Centuries of Slavery in North America", author: "Ira Berlin", publisher: "Belknap Press of Harvard University Press", year: "1998" },
      ],
    },
    {
      heading: "Interpretations",
      items: [
        { kind: "book", title: "American Slavery, American Freedom: The Ordeal of Colonial Virginia", author: "Edmund S. Morgan", publisher: "W. W. Norton", year: "1975" },
        { kind: "book", title: "The Name of War: King Philip's War and the Origins of American Identity", author: "Jill Lepore", publisher: "Alfred A. Knopf", year: "1998" },
        { kind: "book", title: "The Indian Slave Trade: The Rise of the English Empire in the American South, 1670–1717", author: "Alan Gallay", publisher: "Yale University Press", year: "2002" },
        { kind: "book", title: "The Middle Ground: Indians, Empires, and Republics in the Great Lakes Region, 1650–1815", author: "Richard White", publisher: "Cambridge University Press", year: "1991" },
        { kind: "book", title: "Albion's Seed: Four British Folkways in America", author: "David Hackett Fischer", publisher: "Oxford University Press", year: "1989" },
        { kind: "book", title: "The Slave Ship: A Human History", author: "Marcus Rediker", publisher: "Viking", year: "2007" },
        { kind: "book", title: "The Unredeemed Captive: A Family Story from Early America", author: "John Demos", publisher: "Alfred A. Knopf", year: "1994" },
        { kind: "book", title: "Indigenous Continent: The Epic Contest for North America", author: "Pekka Hämäläinen", publisher: "Liveright", year: "2022" },
      ],
    },
    {
      heading: "Lectures, Recordings, and Sites",
      items: [
        { kind: "audio", title: "The Columbian Exchange", author: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/m002rrvz" },
        { kind: "audio", title: "The Salem Witch Trials", author: "Melvyn Bragg and guests", publisher: "BBC Radio 4, In Our Time", url: "https://www.bbc.co.uk/programmes/b06pxp2z" },
        { kind: "website", title: "Slave Voyages", publisher: "Emory University and partners", url: "https://www.slavevoyages.org/", note: "The Trans-Atlantic Slave Trade Database." },
        { kind: "website", title: "Historic Jamestowne: Jamestown Rediscovery", publisher: "Preservation Virginia and the Jamestown Rediscovery Foundation", url: "https://historicjamestowne.org/" },
        { kind: "website", title: "Exploring the Early Americas", publisher: "Library of Congress", url: "https://www.loc.gov/exhibits/exploring-the-early-americas/overview.html" },
      ],
    },
  ],
};
