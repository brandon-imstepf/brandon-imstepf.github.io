/*
  Character Creation: races, classes and silhouettes.

  Races marked "from" read their text, faction and classes from data/races.js (the entry with that title),
  so edit those there. The original races are written out here in the same format.

  "forms" lists the sub-races of an entry (Dwarf -> Bronzebeard, Dark Iron, Wildhammer), by title.

  Adding your own model: give a race or form  "model": "../models/dryad.glb"
  The model is scaled to the silhouette's height and stands on the ground. An animation named
  "Idle" plays if there is one, otherwise the first animation. Models load only from a web server
  (GitHub Pages, or a local server), not from a file opened directly.

  "look" shapes the placeholder silhouette:
    height, bulk, legs (leg length), head, neck, jaw, armLen, arms (thickness), hunch (0 to 1), belly
    lower: "biped" | "digi" (hooved, backward knee) | "deer" | "serpent"
    ears: { len, up, back, w, y }   angles in degrees
    tusks, snout, nose, beard, tendrils, thorns (sizes or counts; 0 for none)
    horns: "draenei" | "broken" | "tauren" | "antler" | "briar"
    hair: "short" | "long" | "mohawk" | "topknot" | "puff" | "wild" | "fins" | "mane",  hairSize
    tail: "thin" | "bushy"    claws: true    glow: true (eyes), eyes: colour    rim: outline colour
*/
window.CREATE = {
  "classes": [
    { "key": "warrior",     "name": "Warrior",     "color": "#c69b6d", "roles": "Tank, Melee DPS" },
    { "key": "paladin",     "name": "Paladin",     "color": "#f48cba", "roles": "Healer, Tank, Melee DPS" },
    { "key": "hunter",      "name": "Hunter",      "color": "#aad372", "roles": "Ranged DPS" },
    { "key": "rogue",       "name": "Rogue",       "color": "#fff468", "roles": "Melee DPS" },
    { "key": "priest",      "name": "Priest",      "color": "#ffffff", "roles": "Healer, Ranged DPS" },
    { "key": "shaman",      "name": "Shaman",      "color": "#0070dd", "roles": "Healer, Melee DPS, Ranged DPS" },
    { "key": "mage",        "name": "Mage",        "color": "#3fc7eb", "roles": "Ranged DPS" },
    { "key": "warlock",     "name": "Warlock",     "color": "#8788ee", "roles": "Ranged DPS" },
    { "key": "druid",       "name": "Druid",       "color": "#ff7c0a", "roles": "Tank, Healer, Melee DPS, Ranged DPS" },
    { "key": "tinker",      "name": "Tinker",      "color": "#f0a03c", "roles": "Tank, Ranged DPS, Healer / Support", "page": "tinker" },
    { "key": "illusionist", "name": "Illusionist", "color": "#b48cff", "roles": "Ranged DPS, Tank", "page": "illusionist" },
    { "key": "bard",        "name": "Bard",        "color": "#e8c15a", "roles": "Melee DPS, Healer, Ranged DPS (all with Support)", "page": "bard" },
    { "key": "necromancer", "name": "Necromancer", "color": "#9fe07a", "roles": "Ranged DPS / Support, Tank", "page": "necromancer" },
    { "key": "warden",      "name": "Warden",      "color": "#e0b25c", "roles": "Tank, Melee DPS / Support", "page": "warden" },
    { "key": "sanlayn",     "name": "San'layn",    "color": "#e0485a", "roles": "Ranged DPS, Healer, Melee DPS", "page": "sanlayn" }
  ],

  "races": [
    {
      "id": "human", "faction": "alliance", "name": "Human",
      "body": [
        { "note": "Alliance · Original race" },
        { "table": [["", ""], ["Faction", "Alliance"], ["Starting zone", "Northshire Valley"], ["Home", "Stormwind"], ["Racial mount", "Horse"],
          ["Classes", "Warrior, Paladin, Rogue, Priest, Mage, Warlock, Illusionist, Bard, Necromancer"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "Perception, The Human Spirit, Sword Specialization, Mace Specialization, Diplomacy." }
      ],
      "look": { "hair": "short" }
    },
    {
      "id": "dwarf", "faction": "alliance", "from": "Dwarf",
      "forms": {
        "Bronzebeard": { "look": { "height": 0.72, "bulk": 1.4, "legs": 0.6, "head": 1.1, "arms": 1.2, "beard": 0.22, "hair": "short" } },
        "Dark Iron":   { "look": { "height": 0.72, "bulk": 1.4, "legs": 0.6, "head": 1.1, "arms": 1.2, "beard": 0.16, "hair": "mohawk", "hairSize": 0.7, "glow": true, "eyes": "#ff8a3a", "rim": "#ff7a2a" } },
        "Wildhammer":  { "look": { "height": 0.74, "bulk": 1.35, "legs": 0.62, "head": 1.1, "arms": 1.2, "beard": 0.26, "hair": "wild", "rim": "#9fd0ff" } }
      }
    },
    {
      "id": "nightelf", "faction": "alliance", "name": "Night Elf",
      "body": [
        { "note": "Alliance · Original race" },
        { "table": [["", ""], ["Faction", "Alliance"], ["Starting zone", "Shadowglen"], ["Home", "Darnassus"], ["Racial mount", "Nightsaber"],
          ["Classes", "Warrior, Hunter, Rogue, Priest, Druid, Bard, Warden"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "Shadowmeld, Quickness, Wisp Spirit, Nature Resistance." }
      ],
      "look": { "height": 1.15, "bulk": 0.95, "ears": { "len": 0.34, "up": 38, "back": 30 }, "hair": "long", "glow": true, "eyes": "#d6c8ff" }
    },
    {
      "id": "gnome", "faction": "alliance", "name": "Gnome",
      "body": [
        { "note": "Alliance · Original race" },
        { "table": [["", ""], ["Faction", "Alliance"], ["Starting zone", "Coldridge Valley"], ["Home", "Ironforge"], ["Racial mount", "Mechanostrider"],
          ["Classes", "Warrior, Rogue, Mage, Warlock, Tinker, Illusionist, Bard"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "Escape Artist, Expansive Mind, Arcane Resistance, Engineering Specialist." }
      ],
      "look": { "height": 0.52, "bulk": 0.9, "head": 1.45, "legs": 0.85, "ears": { "len": 0.09, "up": 20, "back": 30 }, "hair": "puff" }
    },
    {
      "id": "draenei", "faction": "alliance", "from": "Draenei",
      "forms": {
        "Draenei": { "look": { "height": 1.2, "lower": "digi", "horns": "draenei", "tail": "thin", "tendrils": 0.08, "hair": "long", "glow": true, "eyes": "#bfe0ff" } },
        "Broken":  { "look": { "height": 1.05, "bulk": 1.05, "lower": "digi", "hunch": 0.45, "horns": "broken", "tail": "thin", "tendrils": 0.13, "glow": true, "eyes": "#d0b0ff" } }
      }
    },
    {
      "id": "naga", "faction": "alliance", "from": "Naga",
      "look": { "height": 1.05, "lower": "serpent", "hair": "fins", "ears": { "len": 0.12, "up": 10, "back": 40, "w": 0.04 }, "glow": true, "eyes": "#5ff0d8" }
    },
    {
      "id": "worgen", "faction": "alliance", "from": "Worgen",
      "look": { "height": 1.15, "bulk": 1.15, "lower": "digi", "hunch": 0.55, "snout": 0.9, "ears": { "len": 0.13, "up": 72, "back": 15, "w": 0.045, "y": 0.07 },
                "hair": "mane", "tail": "bushy", "claws": true, "armLen": 1.12, "glow": true, "eyes": "#ffd25a" }
    },

    {
      "id": "orc", "faction": "horde", "name": "Orc",
      "body": [
        { "note": "Horde · Original race" },
        { "table": [["", ""], ["Faction", "Horde"], ["Starting zone", "Valley of Trials"], ["Home", "Orgrimmar"], ["Racial mount", "Wolf"],
          ["Classes", "Warrior, Hunter, Rogue, Shaman, Warlock, Bard, Necromancer"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "Blood Fury, Hardiness, Command, Axe Specialization." }
      ],
      "look": { "height": 1.05, "bulk": 1.3, "hunch": 0.25, "tusks": 0.04, "hair": "topknot", "arms": 1.2, "jaw": 1.2 }
    },
    {
      "id": "undead", "faction": "horde", "name": "Undead",
      "body": [
        { "note": "Horde · Original race" },
        { "table": [["", ""], ["Faction", "Horde"], ["Starting zone", "Deathknell"], ["Home", "Undercity"], ["Racial mount", "Skeletal Horse"],
          ["Classes", "Warrior, Rogue, Priest, Mage, Warlock, Illusionist, Necromancer"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "Will of the Forsaken, Cannibalize, Underwater Breathing, Shadow Resistance." }
      ],
      "look": { "height": 0.95, "bulk": 0.78, "hunch": 0.3, "hair": "long", "hairSize": 0.8, "arms": 0.75, "jaw": 0.9, "glow": true, "eyes": "#ffe27a" }
    },
    {
      "id": "tauren", "faction": "horde", "name": "Tauren",
      "body": [
        { "note": "Horde · Original race" },
        { "table": [["", ""], ["Faction", "Horde"], ["Starting zone", "Camp Narache"], ["Home", "Thunder Bluff"], ["Racial mount", "Kodo"],
          ["Classes", "Warrior, Hunter, Shaman, Druid, Bard"]] },
        { "h": "Racials" },
        { "h4": "At launch", "note": "Original game", "text": "War Stomp, Endurance, Cultivation, Nature Resistance." }
      ],
      "look": { "height": 1.32, "bulk": 1.55, "hunch": 0.3, "lower": "digi", "snout": 0.6, "horns": "tauren", "tail": "thin", "arms": 1.35, "head": 1.15, "neck": 0.6, "belly": 0.6 }
    },
    {
      "id": "troll", "faction": "horde", "from": "Troll",
      "forms": {
        "Darkspear": { "look": { "height": 1.18, "bulk": 0.95, "hunch": 0.4, "legs": 1.05, "tusks": 0.11, "nose": 0.06, "ears": { "len": 0.2, "up": 15, "back": 30 }, "hair": "mohawk", "hairSize": 1.6, "armLen": 1.12 } },
        "Revantusk": { "look": { "height": 1.18, "bulk": 0.95, "hunch": 0.4, "legs": 1.05, "tusks": 0.09, "nose": 0.06, "ears": { "len": 0.2, "up": 15, "back": 30 }, "hair": "long", "armLen": 1.12, "rim": "#8ad66a" } },
        "Frostmane": { "look": { "height": 1.2, "bulk": 1.1, "hunch": 0.45, "legs": 1.05, "tusks": 0.1, "nose": 0.06, "ears": { "len": 0.18, "up": 15, "back": 30 }, "hair": "wild", "armLen": 1.15, "rim": "#9fe4ff" } }
      }
    },
    {
      "id": "goblin", "faction": "horde", "from": "Goblin",
      "look": { "height": 0.6, "bulk": 0.95, "head": 1.35, "hunch": 0.25, "legs": 0.85, "ears": { "len": 0.22, "up": 8, "back": 12, "w": 0.055 }, "nose": 0.09, "armLen": 1.1 }
    },
    {
      "id": "ogre", "faction": "horde", "from": "Ogre",
      "look": { "height": 1.5, "bulk": 1.75, "hunch": 0.35, "head": 0.85, "neck": 0.4, "jaw": 1.3, "tusks": 0.06, "hair": "topknot", "belly": 1.0, "armLen": 1.15, "arms": 1.5 }
    },

    {
      "id": "queldorei", "faction": "split", "from": "Quel'dorei",
      "forms": {
        "High Elf":  { "look": { "height": 1.02, "bulk": 0.9, "ears": { "len": 0.24, "up": 28, "back": 35 }, "hair": "long", "glow": true, "eyes": "#9fd4ff" } },
        "Blood Elf": { "look": { "height": 1.02, "bulk": 0.9, "ears": { "len": 0.24, "up": 28, "back": 35 }, "hair": "long", "glow": true, "eyes": "#8dff6a" } }
      }
    },
    {
      "id": "childofnature", "faction": "split", "from": "Child of Nature",
      "forms": {
        "Dryad":     { "look": { "height": 1.1, "bulk": 0.88, "lower": "deer", "horns": "antler", "hair": "long", "ears": { "len": 0.14, "up": 20, "back": 35 }, "glow": true, "eyes": "#b8ff8a", "rim": "#9fe07a" } },
        "Briarborn": { "look": { "height": 1.2, "bulk": 1.25, "hunch": 0.45, "lower": "digi", "horns": "briar", "thorns": 16, "armLen": 1.1, "arms": 1.2, "glow": true, "eyes": "#ff9a3a", "rim": "#d9763a" } }
      }
    }
  ]
};
