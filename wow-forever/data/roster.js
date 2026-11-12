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
    "Draenei":        ["Warrior", "Paladin", "Hunter", "Priest", "Mage", "Shaman", "Illusionist", "Warden"],
    "Broken":         ["Warrior", "Rogue", "Warlock", "Illusionist", "Shaman","Necromancer"],
    "Naga":           ["Warrior", "Hunter", "Mage", "Warlock", "Illusionist", "Warden", "San'layn"],
    "Worgen":         ["Warrior", "Rogue", "Druid", "Priest", "Mage", "Hunter"],
    "High Elf":       ["Priest", "Mage", "Illusionist", "Bard", "Warden", "San'layn"],
    "Dryad & Keeper": ["Hunter", "Druid", "Shaman", "Bard"]
  },
  "Horde": {
    "Orc":            ["Warrior", "Hunter", "Rogue", "Shaman", "Warlock", "Bard", "Necromancer"],
    "Undead":         ["Warrior", "Paladin", "Rogue", "Priest", "Mage", "Warlock", "Tinker", "San'layn", "Illusionist", "Necromancer"],
    "Tauren":         ["Warrior", "Hunter", "Shaman", "Druid", "Bard"],
    "Darkspear":      ["Druid", "Hunter", "Rogue", "Shaman", "Mage", "Illusionist", "Bard"],
    "Revantusk":      ["Paladin", "Hunter", "Rogue", "Priest", "Warden", "Tinker"],
    "Frostmane":      ["Warrior", "Hunter", "Shaman", "San'layn", "Necromancer", "Warlock"],
    "Goblin":         ["Warrior", "Rogue", "Mage", "Warlock", "Tinker", "Bard"],
    "Ogre":           ["Warrior", "Hunter", "Shaman", "Mage", "Warlock", "Necromancer"],
    "Blood Elf":      ["Paladin", "Priest", "Mage", "Illusionist", "Warden", "San'layn"],
    "Briarborn":      ["Hunter", "Druid", "Shaman", "Warden"]
  }
};
