/*
  Illusionist: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "illusionist",
  "kind": "class",
  "root": "../",
  "name": "Illusionist",
  "color": "#b48cff",
  "icon": "rail-illusionist",
  "help": "Drag to orbit, scroll to zoom. The scene plays on its own; press 1 to 5 or tap a button to take over. Veil builds when your illusions strike or are struck.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "Illusionist",
        "role": "Survey class",
        "spec": "overview",
        "color": "#b48cff",
        "text": "Illusionists are mages who have turned from fire and frost to the art of deception. Their images cast beside them and their phantasms bite, and an enemy can never be certain which caster is the true one. Veil builds whenever an illusion strikes or is struck.",
        "facts": [
          ["Armor", "Cloth"],
          ["Resource", "Mana and Veil"],
          ["Weapons", "Staves, Wands, Daggers"],
          ["Alliance", "Human, Gnome"],
          ["Horde", "Troll, Undead"]
        ],
        "sections": [
          {
            "heading": "Core Abilities",
            "spells": [
              {
                "name": "Veil",
                "cost": "Passive",
                "text": "Generated whenever your illusions deal or take damage. Spent on your most powerful illusions."
              },
              {
                "name": "Prismatic Bolt",
                "cost": "8 Mana",
                "text": "Hurls a bolt of prismatic light at the enemy, causing Arcane damage."
              },
              {
                "name": "Mirror Image",
                "cost": "25 Mana",
                "text": "Creates images of the caster that repeat your spells."
              },
              {
                "name": "Swap",
                "cost": "Instant",
                "text": "Instantly trade places with one of your images."
              },
              {
                "name": "Phantasms",
                "cost": "Mana",
                "text": "Calls a beast from your bestiary. It is real for a few seconds."
              }
            ]
          }
        ]
      },
      {
        "tab": "Mirrorweaver",
        "main": false,
        "title": "Mirrorweaver",
        "role": "Ranged DPS",
        "spec": "mirrorweaver",
        "color": "#ff6ad5",
        "text": "The Mirrorweaver fills the field with copies of the caster. Every bolt is cast again by each image. When the enemy closes, the true caster is already elsewhere.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Mirror Image",
                "cost": "25 Mana",
                "text": "Creates 3 images of the caster. Your images cast Prismatic Bolt whenever you do."
              },
              {
                "name": "Swap",
                "cost": "Instant",
                "text": "Trade places with your farthest image."
              },
              {
                "name": "Shatter",
                "cost": "Instant",
                "text": "Destroys all of your images, inflicting Arcane damage to enemies near each."
              }
            ]
          }
        ]
      },
      {
        "tab": "Menagerie",
        "main": false,
        "title": "Menagerie",
        "role": "Ranged DPS",
        "spec": "menagerie",
        "color": "#7affd8",
        "text": "The Menagerie keeps a bestiary of every creature it has fought and calls them back as phantasms. Wolves run the enemy down, drakes breathe from above, and storm spirits strike at anything near.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Phantasm: Wolf",
                "cost": "15 Mana",
                "text": "Summons a phantasmal wolf that attacks the target."
              },
              {
                "name": "Phantasm: Drake",
                "cost": "25 Mana",
                "text": "Summons a phantasmal drake that breathes on all enemies before it."
              },
              {
                "name": "Phantasm: Storm",
                "cost": "20 Mana",
                "text": "Summons a storm spirit that shocks nearby enemies."
              },
              {
                "name": "Stampede",
                "cost": "Veil",
                "text": "Summons every phantasm in your bestiary at once."
              }
            ]
          }
        ]
      },
      {
        "tab": "Deceiver",
        "main": false,
        "title": "Deceiver",
        "role": "Tank",
        "spec": "deceiver",
        "color": "#7ab8ff",
        "text": "The Deceiver survives because the enemy is fighting a lie. Illusory Health is lost before real health and cannot be restored by healers. Decoys and Displacement cause many attacks to miss outright.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Illusory Health",
                "cost": "Passive",
                "text": "You have a second health bar that takes damage before your own. It cannot be healed by others."
              },
              {
                "name": "Illusory Shell",
                "cost": "Veil",
                "text": "Spends Veil to restore your Illusory Health."
              },
              {
                "name": "Decoy",
                "cost": "15 Mana",
                "text": "Creates a decoy of the caster. Enemies attack the decoy instead of you."
              },
              {
                "name": "Displacement",
                "cost": "Instant",
                "text": "Your true position shifts, causing attacks against you to miss."
              },
              {
                "name": "Captivate",
                "cost": "Instant",
                "text": "Forces all nearby enemies to attack you."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Illusionist",
      "entries": [
        {
          "title": "Illusory Health",
          "tag": "Mechanic",
          "body": [
            "The Deceiver holds the line in cloth. It carries a second health bar, Illusory Health, which is lost before real health.",
            "Healers cannot restore Illusory Health. Only the Deceiver can, by spending Veil on Illusory Shell.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Lose Illusory Health first", "Restore it with Veil"]
            }
          ]
        },
        {
          "title": "Unsettled Names",
          "tag": "Undecided",
          "body": [
            "Two names are not final: Veil, the secondary resource, and Deceiver, the tanking specialization. Glamour was rejected as a name.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Choose a name for Veil", "Choose a name for Deceiver"]
            }
          ]
        }
      ]
    }
  ]
};
