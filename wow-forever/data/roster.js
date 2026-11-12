/*
  Roster: which races may play which classes. Every page reads from this one list:
  the Races page, each class page, the home page class list, and Character Creation.

  - Race names must match their titles in data/races.js (sub-races by their own title, e.g. "Dark Iron").
  - An empty list [] shows as "TBD".
  - Anywhere a data file says "auto" (a "Classes", "Alliance" or "Horde" row) is filled in from here.
*/
window.ROSTER = {
  "Alliance": {
    "Human":          ["Warrior", "Paladin", "Rogue", "Priest", "Mage", "Warlock", "Illusionist", "Bard", "Necromancer"],
    "Bronzebeard":    ["Warrior", "Paladin", "Hunter", "Priest", "Tinker", "Bard"],
    "Dark Iron":      ["Warrior", "Rogue", "Mage", "Warlock", "Necromancer", "Tinker", "Illusionist"],
    "Wildhammer":     ["Hunter", "Druid", "Shaman", "Tinker", "Bard"],
    "Night Elf":      ["Warrior", "Hunter", "Rogue", "Priest", "Druid", "Bard", "Warden"],
    "Gnome":          ["Warrior", "Rogue", "Mage", "Warlock", "Tinker", "Illusionist", "Bard"],
    "Draenei":        [],
    "Broken":         [],
    "Naga":           ["Warrior", "Hunter", "Mage", "Warlock", "Illusionist", "Warden", "San'layn"],
    "Worgen":         [],
    "High Elf":       ["Priest", "Mage", "Illusionist", "Bard", "Warden", "San'layn"],
    "Dryad & Keeper": ["Hunter", "Druid", "Shaman", "Bard"]
  },
  "Horde": {
    "Orc":            ["Warrior", "Hunter", "Rogue", "Shaman", "Warlock", "Bard", "Necromancer"],
    "Undead":         ["Warrior", "Rogue", "Priest", "Mage", "Warlock", "Illusionist", "Necromancer"],
    "Tauren":         ["Warrior", "Hunter", "Shaman", "Druid", "Bard"],
    "Darkspear":      ["Warrior", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Illusionist", "Bard"],
    "Revantusk":      [],
    "Frostmane":      [],
    "Goblin":         ["Warrior", "Rogue", "Mage", "Warlock", "Tinker", "Bard"],
    "Ogre":           ["Warrior", "Hunter", "Shaman", "Mage", "Warlock", "Necromancer"],
    "Blood Elf":      ["Paladin", "Priest", "Mage", "Illusionist", "Warden", "San'layn"],
    "Briarborn":      ["Hunter", "Druid", "Shaman", "Warden"]
  }
};
