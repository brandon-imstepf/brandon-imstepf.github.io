/*
  Bard: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "bard",
  "kind": "class",
  "root": "../",
  "name": "Bard",
  "color": "#e8c15a",
  "icon": "rail-bard",
  "help": "Drag to orbit, scroll to zoom. The scene plays on its own; press 1 to 5 or tap a button to take over. Songs build Verses; three Verses unlock a Chorus.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "Bard",
        "role": "Survey class",
        "spec": "overview",
        "color": "#e8c15a",
        "text": "Bards carry the songs and sagas of their people into battle. A Bard's instrument is as much a weapon as any blade. Each song adds a Verse, and three Verses may be spent on a Chorus, a stronger form of whatever the Bard has been playing.",
        "facts": [
          ["Armor", "Leather"],
          ["Resource", "Mana and Verse"],
          ["Weapons", "Instrument, Sheet Music (off-hand)"],
          ["Alliance", "Human, Dwarf, Night Elf, Gnome"],
          ["Horde", "Orc, Tauren, Troll, Goblin"]
        ],
        "sections": [
          {
            "heading": "Core Abilities",
            "spells": [
              {
                "name": "Verse",
                "cost": "Passive",
                "text": "Each song you play grants a Verse, up to 3."
              },
              {
                "name": "Chorus",
                "cost": "3 Verses",
                "text": "Consumes all Verses to perform a powerful finale. The effect depends on your specialization."
              },
              {
                "name": "Battle Hymn",
                "cost": "15 Mana",
                "text": "Increases the attack speed of all party members while it lasts."
              },
              {
                "name": "Song of Mending",
                "cost": "20 Mana",
                "text": "Heals all party members over a few seconds."
              },
              {
                "name": "Dissonance",
                "cost": "15 Mana",
                "text": "Strikes the enemy with a discordant note, causing damage."
              }
            ]
          }
        ]
      },
      {
        "tab": "Warchanter",
        "main": false,
        "title": "Warchanter",
        "role": "Melee DPS / Support",
        "spec": "warchanter",
        "color": "#ff7a3a",
        "text": "The Warchanter fights in the front rank with a war drum at the hip. Each blow keeps the beat, and the beat drives the party on.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Drumbeat",
                "cost": "5 Mana",
                "text": "A heavy strike that grants a Verse."
              },
              {
                "name": "Thunder Drums",
                "cost": "25 Mana",
                "text": "A booming roll that stuns all nearby enemies."
              },
              {
                "name": "Warsong Charge",
                "cost": "10 Mana",
                "text": "Charges the enemy."
              },
              {
                "name": "Chorus: Warsong",
                "cost": "3 Verses",
                "text": "All party members attack faster and nearby enemies are dazed."
              }
            ]
          }
        ]
      },
      {
        "tab": "Minstrel",
        "main": false,
        "title": "Minstrel",
        "role": "Healer / Support",
        "spec": "minstrel",
        "color": "#7dffb0",
        "text": "The Minstrel heals with a lute and a steady voice. Its songs mend wounds over time and wash away poison and disease.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Song of Mending",
                "cost": "20 Mana",
                "text": "Heals all party members over a few seconds."
              },
              {
                "name": "Cleansing Melody",
                "cost": "10 Mana",
                "text": "Removes poison and disease from a friendly target."
              },
              {
                "name": "Ballad of Renewal",
                "cost": "30 Mana",
                "text": "Heals a friendly target for a large amount."
              },
              {
                "name": "Chorus: Hymn of Life",
                "cost": "3 Verses",
                "text": "Heals all party members at once."
              }
            ]
          }
        ]
      },
      {
        "tab": "Loremaster",
        "main": false,
        "title": "Loremaster",
        "role": "Ranged DPS / Support",
        "spec": "loremaster",
        "color": "#8fd0ff",
        "text": "The Loremaster recites the old tales with a war horn in hand. For a moment the tales are real: frost from a forgotten winter, a storm from an old saga, the echo of a fallen hero.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Tale of Frost",
                "cost": "15 Mana",
                "text": "Shards of ice strike the enemy, causing Frost damage."
              },
              {
                "name": "Saga of the Storm",
                "cost": "25 Mana",
                "text": "Lightning strikes several enemies, causing Nature damage."
              },
              {
                "name": "Echo of a Hero",
                "cost": "30 Mana",
                "text": "Summons a spectral champion to fight at your side."
              },
              {
                "name": "Chorus: Epic",
                "cost": "3 Verses",
                "text": "Performs every tale at once."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Bard",
      "entries": [
        {
          "title": "Verse and Chorus",
          "tag": "Mechanic",
          "body": [
            "Every song grants a Verse. A Bard may hold three.",
            "Three Verses are spent on a Chorus. Each specialization has its own: Warsong, Hymn of Life, or Epic.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Play songs to gain 3 Verses", "Spend them on a Chorus"]
            }
          ]
        },
        {
          "title": "The Instrument",
          "tag": "Equipment",
          "body": [
            "A Bard's instrument is tied to the specialization: the drum for the Warchanter, the lute for the Minstrel, the horn for the Loremaster.",
            "Sheet music is carried in the off-hand.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Equip the instrument of your specialization", "Carry sheet music in the off-hand"]
            }
          ]
        }
      ]
    }
  ]
};
