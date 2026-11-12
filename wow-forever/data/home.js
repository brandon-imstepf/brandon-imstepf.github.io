/*
  Home page: class list and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "home",
  "kind": "home",
  "root": "",
  "name": "Compendium",
  "color": "#ffd100",
  "icon": "rail-home",
  "openOnLoad": ["log", "trade"],
  "logTitle": "WoW Forever",
  "trade": {
    "title": "Classes of WoW Forever",
    "button": "Classes",
    "glyph": "&#9876;",
    "tip": "Every class concept and its specializations.",
    "sub": "Choose a class",
    "right": "6 classes",
    "width": 600,
    "groups": [
      {
        "group": "Survey Classes",
        "entries": [
          {
            "title": "Tinker",
            "tag": "Mail",
            "body": [
              {
                "note": "Survey class"
              },
              "Tinkers are the inventors of the gnomes, dwarves and goblins, who would sooner build an answer than cast one. Tinkers do not have mana. Each skill usage adds Heat, and at 100 Heat the Tinker overheats and can use no device until the heat has dissipated.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Mail"],
                  ["Resource", "Heat"],
                  ["Weapons", "Guns, Maces, Tools"],
                  ["Alliance", "Gnome, Dwarf"],
                  ["Horde", "Undead,Goblin"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": ["Juggernaut (Tank)", "Demolitions (Ranged DPS)", "Mad Science (Healer / Support)"]
              },
              {
                "link": "Enter the Tinker simulation",
                "page": "tinker"
              }
            ]
          },
          {
            "title": "Illusionist",
            "tag": "Cloth",
            "body": [
              {
                "note": "Survey class"
              },
              "Illusionists are mages who have turned from fire and frost to the art of deception. Their images cast beside them and their phantasms bite, and an enemy can never be certain which caster is the true one. Veil builds whenever an illusion strikes or is struck.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Cloth"],
                  ["Resource", "Mana and Veil"],
                  ["Weapons", "Staves, Wands, Daggers"],
                  ["Alliance", "Human, Gnome"],
                  ["Horde", "Troll, Undead"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": ["Mirrorweaver (Ranged DPS)", "Menagerie (Ranged DPS)", "Deceiver (Tank)"]
              },
              {
                "link": "Enter the Illusionist simulation",
                "page": "illusionist"
              }
            ]
          },
          {
            "title": "Bard",
            "tag": "Leather",
            "body": [
              {
                "note": "Survey class"
              },
              "Bards carry the songs and sagas of their people into battle. A Bard's instrument is as much a weapon as any blade. Each song adds a Verse, and three Verses may be spent on a Chorus, a stronger form of whatever the Bard has been playing.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Leather"],
                  ["Resource", "Mana and Verse"],
                  ["Weapons", "Instrument, Sheet Music (off-hand)"],
                  ["Alliance", "Human, Dwarf, Night Elf, Gnome"],
                  ["Horde", "Orc, Tauren, Troll, Goblin"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": [
                  "Warchanter (Melee DPS / Support)",
                  "Minstrel (Healer / Support)",
                  "Loremaster (Ranged DPS / Support)"
                ]
              },
              {
                "link": "Enter the Bard simulation",
                "page": "bard"
              }
            ]
          },
          {
            "title": "Necromancer",
            "tag": "Cloth",
            "body": [
              {
                "note": "Survey class, full design"
              },
              "Necromancers are masters of death who command the dead as servants and wear bone as armor. Each Necromancer keeps a store of corpses to strengthen spells and raise servants.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Cloth"],
                  ["Resource", "Mana and Corpses"],
                  ["Weapons", "Staves, Daggers, Wands"],
                  ["Alliance", "Human, Dwarf"],
                  ["Horde", "Undead, Orc"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": ["Legion (Ranged DPS / Support)", "Plaguebringer (Ranged DPS)", "Lich (Tank)"]
              },
              {
                "link": "Enter the Necromancer simulation",
                "page": "necromancer"
              }
            ]
          },
          {
            "title": "Warden",
            "tag": "Mail",
            "body": [
              {
                "note": "Concept"
              },
              "Wardens are the jailers and hunters of the night elves, sworn to pursue those who escape justice. A Warden does not hide. She marks her quarry, crosses the distance in a blink, and sees that it never runs again. Her strikes build Vengeance, which is spent on chains, cages and verdicts.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Mail"],
                  ["Resource", "Vengeance"],
                  ["Weapons", "Bladed Weapons, Thrown Knives"],
                  ["Alliance", "Night Elf"],
                  ["Horde", "Undecided"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": ["Jailer (Tank)", "Avenger (Melee DPS)", "Vengeance (Melee DPS / Support)"]
              },
              {
                "link": "Enter the Warden simulation",
                "page": "warden"
              }
            ]
          },
          {
            "title": "San'layn",
            "tag": "Cloth",
            "body": [
              {
                "note": "Proposal"
              },
              "The San'layn are elves remade by death into creatures of blood and shadow. They take the life of their enemies as Vitae and spend it on blood magic: to strike, to heal, or to become the night itself.",
              {
                "table": [
                  ["", ""],
                  ["Armor", "Cloth"],
                  ["Resource", "Mana and Vitae"],
                  ["Weapons", "Undecided"],
                  ["Alliance", "Undecided"],
                  ["Horde", "Undecided"]
                ]
              },
              {
                "h": "Specializations"
              },
              {
                "list": ["Crimson Court (Ranged DPS)", "Bloodbinder (Healer)", "Nightfang (Melee DPS)"]
              },
              {
                "link": "Enter the San'layn simulation",
                "page": "sanlayn"
              }
            ]
          }
        ]
      },
      {
        "group": "Other Concepts",
        "entries": [
          
        ]
      },
      {
        "group": "Trade Skills",
        "entries": [
          {
            "title": "Professions",
            "tag": "Crafts",
            "body": [
              "Every profession gains specializations at skill 225. Woodworking and the Arborist are new, and Jewelcrafting returns.",
              {
                "link": "Open the Professions",
                "page": "professions"
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Guide",
      "entries": [
        {
          "title": "How to Use This Compendium",
          "tag": "Guide",
          "body": [
            "Choose a class from the left to launch the simulation.",
            "The bar along the bottom opens the Spellbook, the Talents and the Design Log over the simulation. Keys P, N and L do the same.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Choose a class", "Open its windows from the bottom bar"]
            }
          ]
        }
      ]
    },
    {
      "group": "Expansions",
      "entries": [
        {
          "title": "Race Expansion",
          "tag": "Planning",
          "body": [
            "New playable races for the Alliance (Dark Iron and Wildhammer Dwarves, Draenei, Broken, Naga, Worgen, High Elf, Dryad) and the Horde (Revantusk and Frostmane Trolls, Goblin, Ogre, Blood Elf, Briarborn).",
            {
              "link": "Open the Races page",
              "page": "races"
            }
          ]
        }
      ]
    },
    {
      "group": "Design Pillars",
      "entries": [
        {
          "title": "Two Parts Vanilla, One Part Retail",
          "tag": "Pillar",
          "body": [
            "Talent trees, long leveling and the management of resources remain as they were.",
            "Ideas from later expansions are admitted only where they improve upon the original game and do not detract from the vanilla experience.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Keep talent trees and long leveling", "Borrow only to mend a fault"]
            }
          ]
        },
        {
          "title": "Support as a Half-Role",
          "tag": "Pillar",
          "body": [
            "Support is a semi-role that focuses on buffing allies and debuffing enemies.",
            "Alone, it is not a complete role.",
            "Every specialization is a tank, a healer or a damage dealer first.",
            "Support is added on top. A Warchanter is Melee DPS and Support. A Minstrel is a Healer and Support.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Every specialization fills a primary role"]
            }
          ]
        },
        {
          "title": "Factions Matter",
          "tag": "Pillar",
          "body": [
            "I endeavor to ensure every class has a reason to exist on each side.",
            "For example, Necromancers on Horde are a natural extension of the Undead race identity, but on Alliance it would only be acceptable in extreme cases.",
            {
              "h": "Objectives"
            },
            {
              "list": ["A reason in lore for each faction"]
            }
          ]
        },
        {
          "title": "Current WIP Matters",
          "tag": "Undecided",
          "body": [
            "Names for Veil and Deceiver. Races for the Warden and the San'layn. The San'layn specializations still need work. The Necromancer's remaining questions are kept in its own log.",
            {
              "h": "Objectives"
            },
            {
              "list": ["See each class log"]
            }
          ]
        }
      ]
    }
  ]
};
