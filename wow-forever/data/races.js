/*
  Races: race list and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - An entry with "options" becomes a dropdown in the race list (Dwarf -> Bronzebeard, Dark Iron, Wildhammer).
    Its own "body" is the overview; each option has its own title, tag and body.
  - "TBD" marks anything not yet written.
*/
window.PAGE = {
  "key": "races",
  "kind": "races",
  "root": "../",
  "name": "Races",
  "color": "#8fbf7a",
  "icon": "rail-races",
  "openOnLoad": ["trade", "log"],
  "logTitle": "Races",
  "trade": {
    "title": "Races",
    "button": "Races",
    "glyph": "&#9775;",
    "tip": "Every new playable race and its faction.",
    "sub": "Playable Races",
    "width": 640,
    "groups": [
      {
        "group": "Alliance",
        "entries": [
          {
            "title": "Dwarf",
            "tag": "Alliance",
            "body": [
              { "note": "Alliance" },
              "Three dwarven clans, each its own sub-race, chosen from one entry at character creation.",
              {
                "table": [
                  ["Clan", "Faction", "Status"],
                  ["Bronzebeard", "Alliance", "Original race"],
                  ["Dark Iron", "Alliance", "New"],
                  ["Wildhammer", "Alliance", "New"]
                ]
              },
              "Lore: TBD."
            ],
            "options": [
              {
                "title": "Bronzebeard",
                "tag": "Original",
                "body": [
                  { "note": "Dwarf · Alliance · Original race" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Warrior, Paladin, Hunter, Priest, Tinker, Bard"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD.",
                  { "h4": "At launch", "note": "Original game", "text": "Stoneform, Gun Specialization, Frost Resistance, Treasure Finding." }
                ]
              },
              {
                "title": "Dark Iron",
                "tag": "New",
                "body": [
                  { "note": "Dwarf · Alliance" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Warrior, Rogue, Mage, Warlock, Necromancer, Tinker, Illusionist"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD.",
                  { "h4": "", "text": "Fireblood, Dungeon Delver, Forged in Flames, Mass Production." }
                ]
              },
              {
                "title": "Wildhammer",
                "tag": "New",
                "body": [
                  { "note": "Dwarf · Alliance" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Hunter, Druid, Shaman, Tinker, Bard"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              }
            ]
          },
          {
            "title": "Draenei",
            "tag": "Alliance",
            "body": [
              { "note": "Alliance" },
              "The Draenei and the Broken.",
              {
                "table": [
                  ["Race", "Faction"],
                  ["Draenei", "Alliance"],
                  ["Broken", "Alliance"]
                ]
              },
              "Lore: TBD."
            ],
            "options": [
              {
                "title": "Draenei",
                "tag": "New",
                "body": [
                  { "note": "Draenei · Alliance" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "TBD"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD.",
                  { "h4": "At launch", "note": "The Burning Crusade", "text": "Gift of the Naaru, Heroic Presence (Inspiring Presence for casters), Shadow Resistance, Gemcutting." }
                ]
              },
              {
                "title": "Broken",
                "tag": "New",
                "body": [
                  { "note": "Draenei · Alliance" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "TBD"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              }
            ]
          },
          {
            "title": "Naga",
            "tag": "Alliance",
            "body": [
              { "note": "Alliance" },
              "The Naga have reconnected with their elven roots and allied with the Night Elves.",
              "Lore: TBD.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Alliance"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "Warrior, Hunter, Mage, Warlock, Illusionist, Warden, San'layn"]
                ]
              },
              { "h": "Racials" },
              "TBD."
            ]
          },
          {
            "title": "Worgen",
            "tag": "Alliance",
            "body": [
              { "note": "Alliance" },
              "Lore: TBD.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Alliance"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "TBD"]
                ]
              },
              { "h": "Racials" },
              "TBD.",
              { "h4": "At launch", "note": "Cataclysm", "text": "Darkflight, Viciousness, Aberration, Flayer, Two Forms, Running Wild." }
            ]
          }
        ]
      },
      {
        "group": "Horde",
        "entries": [
          {
            "title": "Troll",
            "tag": "Horde",
            "body": [
              { "note": "Horde" },
              "Three troll tribes, each its own sub-race, chosen from one entry at character creation.",
              {
                "table": [
                  ["Tribe", "Kind", "Faction", "Status"],
                  ["Darkspear", "Jungle troll", "Horde", "Original race"],
                  ["Revantusk", "Forest troll", "Horde", "New"],
                  ["Frostmane", "Ice troll", "Horde", "New"]
                ]
              },
              "Lore: TBD."
            ],
            "options": [
              {
                "title": "Darkspear",
                "tag": "Original",
                "body": [
                  { "note": "Troll · Horde · Original race" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Warrior, Hunter, Rogue, Priest, Shaman, Mage, Illusionist, Bard"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD.",
                  { "h4": "At launch", "note": "Original game", "text": "Regeneration, Berserking, Beast Slaying, Bow Specialization, Throwing Specialization." }
                ]
              },
              {
                "title": "Revantusk",
                "tag": "New",
                "body": [
                  { "note": "Troll · Horde" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "TBD"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              },
              {
                "title": "Frostmane",
                "tag": "New",
                "body": [
                  { "note": "Troll · Horde" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "TBD"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              }
            ]
          },
          {
            "title": "Goblin",
            "tag": "Horde",
            "body": [
              { "note": "Horde" },
              "Lore: TBD.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Horde"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "Warrior, Rogue, Mage, Warlock, Tinker, Bard"]
                ]
              },
              { "h": "Racials" },
              "TBD.",
              { "h4": "At launch", "note": "Cataclysm", "text": "Rocket Jump, Rocket Barrage, Pack Hobgoblin, Best Deals Anywhere, Better Living Through Chemistry, Time Is Money." }
            ]
          },
          {
            "title": "Ogre",
            "tag": "Horde",
            "body": [
              { "note": "Horde" },
              "Lore: TBD.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Horde"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "Warrior, Hunter, Shaman, Mage, Warlock, Necromancer"]
                ]
              },
              { "h": "Racials" },
              "TBD."
            ]
          }
        ]
      },
      {
        "group": "Split by Faction",
        "entries": [
          {
            "title": "Quel'dorei",
            "tag": "Both",
            "body": [
              { "note": "Alliance or Horde" },
              "One entry at character creation. The choice of form decides the faction.",
              {
                "table": [
                  ["Form", "Faction"],
                  ["High Elf", "Alliance"],
                  ["Blood Elf", "Horde"]
                ]
              },
              "Lore: TBD."
            ],
            "options": [
              {
                "title": "High Elf",
                "tag": "Alliance",
                "body": [
                  { "note": "Quel'dorei · Alliance" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Priest, Mage, Illusionist, Bard, Warden, San'layn"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              },
              {
                "title": "Blood Elf",
                "tag": "Horde",
                "body": [
                  { "note": "Quel'dorei · Horde" },
                  "Lore: TBD.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Paladin, Priest, Mage, Illusionist, Warden, San'layn"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD.",
                  { "h4": "At launch", "note": "The Burning Crusade", "text": "Arcane Torrent, Mana Tap, Magic Resistance, Arcane Affinity." }
                ]
              }
            ]
          },
          {
            "title": "Child of Nature",
            "tag": "Both",
            "body": [
              { "note": "Alliance or Horde" },
              "One entry at character creation. The choice of form decides the faction: a Dryad for the Alliance, Briarborn for the Horde.",
              {
                "table": [
                  ["Form", "Faction"],
                  ["Dryad", "Alliance"],
                  ["Briarborn", "Horde"]
                ]
              },
              "Lore: TBD."
            ],
            "options": [
              {
                "title": "Dryad & Keeper",
                "tag": "Alliance",
                "body": [
                  { "note": "Child of Nature · Alliance" },
                  "Lore: Sons and Daughters of Cenarius, and through him grandchildren of Elune. Deer-bodied. Foliage could follow the four seasons as a customization option.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Hunter, Druid, Shaman, Bard"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              },
              {
                "title": "Briarborn",
                "tag": "Horde",
                "body": [
                  { "note": "Child of Nature · Horde" },
                  "Lore: Grown from the thorns of Agamaggan's blood in the Barrens, the same brambles the Quilboar claim. They reject the Quilboar and stand with the Tauren. Bark-hided, crowned with briars.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "TBD"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "Hunter, Druid, Shaman, Warden"]
                    ]
                  },
                  { "h": "Racials" },
                  "TBD."
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Races",
      "entries": [
        {
          "title": "Races by Class",
          "tag": "Reference",
          "body": [
            {
              "table": [
                ["Class", "Alliance", "Horde"],
                ["Tinker", "Gnome, Bronzebeard, Dark Iron, Wildhammer", "Goblin"],
                ["Illusionist", "Human, Gnome, Dark Iron, Naga, High Elf", "Darkspear, Undead, Blood Elf"],
                ["Bard", "Human, Bronzebeard, Night Elf, Gnome, Wildhammer, High Elf, Dryad", "Orc, Tauren, Darkspear, Goblin"],
                ["Necromancer", "Human, Dark Iron", "Undead, Orc, Ogre"],
                ["Warden", "Night Elf, Naga, High Elf", "Blood Elf, Briarborn"],
                ["San'layn", "Naga, High Elf", "Blood Elf"]
              ]
            }
          ]
        },
        {
          "title": "Faction Balance",
          "tag": "Reference",
          "body": [
            {
              "table": [
                ["Faction", "Original", "New", "Total"],
                ["Alliance", "Human, Bronzebeard Dwarf, Night Elf, Gnome", "Dark Iron, Wildhammer, Draenei, Broken, Naga, Worgen, High Elf, Dryad", "12"],
                ["Horde", "Orc, Undead, Tauren, Darkspear Troll", "Revantusk, Frostmane, Goblin, Ogre, Blood Elf, Briarborn", "10"]
              ]
            }
          ]
        },
        {
          "title": "More Ideas",
          "tag": "Ideas",
          "body": [
            "Other races that would suit the setting:",
            {
              "list": ["Furbolgs", "Centaur", "Vrykul", "Tuskarr", "Satyr", "Nerubian", "Draconid"]
            }
          ]
        }
      ]
    }
  ]
};
