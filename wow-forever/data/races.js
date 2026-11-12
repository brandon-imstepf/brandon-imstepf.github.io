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
                      ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
                  "Lore: A faction of uncorrupted eredar fleeing the Burning Legion. They have traveled throughout the vast Great Dark Beyond, and have now arrived on Azeroth. They are a noble and spiritual people, with a strong connection to the Light.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "Azuremyst Isle"],
                      ["Home", "Exodar"],
                      ["Racial mount", "Elekk"],
                      ["Classes", "auto"]
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
                  "Lore: Having been scarred by the fel energies of the Burning Legion, the Broken join the Draenei in their fight against the Legion. They are a resilient and resourceful people, with a deep understanding of fel magic.`",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "Azuremyst Isle"],
                      ["Home", "Exodar"],
                      ["Racial mount", "Panthara"],
                      ["Classes", "auto"]
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
              "Lore: Formerly Highborne night elves, the Naga were transformed into serpentine beings after their queen Azshara dedication of her people to the Old Gods. A rogue faction has allied with the Alliance, seeking to reclaim their lost heritage and protect Azeroth from the threats of the deep sea.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Alliance"],
                  ["Starting zone", "The Drowned Bough"],
                  ["Home", "Zoram Rebuilt"],
                  ["Racial mount", "TBD"],
                  ["Classes", "auto"]
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
              "Lore: Cursed by ancient magic, the once human citizens of Gilneas are now worgen, lupine beings that walk upright but hunt and howl as wolves. They have joined the Alliance to fight against the darkness that threatens their homeland and to seek a cure for their affliction.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Alliance"],
                  ["Starting zone", "Gilnean Forest"],
                  ["Home", "Gilneas"],
                  ["Racial mount", "TBD"],
                  ["Classes", "auto"]
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
                      ["Starting zone", "Durotar, Echo Isles"],
                      ["Home", "Echo Isles"],
                      ["Racial mount", "TBD"],
                      ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
              "Lore: TBD. They like money, and they like explosions.",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Horde"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "auto"]
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
              "Lore: TBD. ",
              {
                "table": [
                  ["", ""],
                  ["Faction", "Horde"],
                  ["Starting zone", "TBD"],
                  ["Home", "TBD"],
                  ["Racial mount", "TBD"],
                  ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
                      ["Classes", "auto"]
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
                  "Lore: Sons and Daughters of Cenarius, and through him grandchildren of Elune. Protectors of all things that grow.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Alliance"],
                      ["Starting zone", "The Emerald Dream"],
                      ["Home", "TBD"],
                      ["Racial mount", "TBD"],
                      ["Classes", "auto"]
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
                  "Lore: Grown from the thorns of Agamaggan's blood in the Barrens, the newly sprouted Briarborn were rejected by the Quillboar as an affront to their god. Embraced by the Tauren, the Briarborn have joined the Horde to protect their new home and the natural world.",
                  {
                    "table": [
                      ["", ""],
                      ["Faction", "Horde"],
                      ["Starting zone", "Mulgore"],
                      ["Home", "Thunderbluff (Roots Quarter)"],
                      ["Racial mount", "TBD"],
                      ["Classes", "auto"]
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
            { "roster": "by-class" }
          ]
        },
        {
          "title": "More Ideas",
          "tag": "Ideas",
          "body": [
            "Other races that could be kooky:",
            {
              "list": ["Furbolgs", "Centaur", "Vrykul", "Tuskarr", "Satyr", "Nerubian", "Draconid"]
            }
          ]
        }
      ]
    }
  ]
};
