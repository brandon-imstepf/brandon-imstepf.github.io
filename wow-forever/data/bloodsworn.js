/*
  Bloodsworn: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "bloodsworn",
  "kind": "class",
  "root": "../",
  "name": "Bloodsworn",
  "color": "#e0485a",
  "icon": "rail-bloodsworn",
  "help": "Drag to orbit, scroll to zoom. The scene plays on its own; press 1 to 5 or tap a button to take over. Strike to build Vitae, then spend it on blood magic.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "Bloodsworn",
        "role": "Proposal",
        "spec": "overview",
        "color": "#e0485a",
        "text": "Bloodsworn are knights in plate who fight with blood in place of mana. Their weapon strikes draw Vitae from the enemy, and they spend it to heal, to shield themselves, or to cut deeper.",
        "facts": [
          ["Armor", "Plate"],
          ["Resource", "Vitae"],
          ["Weapons", "Swords, Axes, Maces, Polearms, Shields"],
          ["Alliance", "auto"],
          ["Horde", "auto"]
        ],
        "sections": [
          {
            "heading": "Core Abilities",
            "spells": [
              {
                "name": "Vitae",
                "cost": "Passive",
                "text": "Bloodsworn have no mana. Vitae is drawn from enemies by weapon strikes and fades slowly out of combat."
              },
              {
                "name": "Sanguine Strike",
                "cost": "Generates 15 Vitae",
                "text": "A weapon strike that draws Vitae from the wound."
              },
              {
                "name": "Bloodletting",
                "cost": "Generates 10 Vitae",
                "text": "Opens a wound on the target from range, causing damage over 6 sec."
              },
              {
                "name": "Transfusion",
                "cost": "30 Vitae",
                "text": "Heals a friendly target."
              },
              {
                "name": "Crimson Aura",
                "cost": "Instant",
                "text": "Party members within 30 yards slowly regain health while the aura lasts."
              }
            ]
          }
        ]
      },
      {
        "tab": "Hemomancy",
        "main": false,
        "title": "Hemomancy",
        "role": "Healer",
        "spec": "hemomancy",
        "color": "#ff7a8a",
        "text": "The Hemomancer heals with blood taken from the enemy. It fights at the front, and every strike becomes a heal for someone behind it.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Transfusion",
                "cost": "30 Vitae",
                "text": "Heals a friendly target."
              },
              {
                "name": "Blood Bond",
                "cost": "20 Vitae",
                "text": "Binds a friendly target for 12 sec. Damage you deal to enemies heals the bound target."
              },
              {
                "name": "Wellspring",
                "cost": "60 Vitae",
                "text": "Pours out a pool of blood that heals allies standing in it for 7 sec."
              },
              {
                "name": "Last Rite",
                "cost": "All Vitae (at least 40)",
                "text": "Heals a friendly target completely. 30 sec cooldown."
              }
            ]
          }
        ]
      },
      {
        "tab": "Sanguinar",
        "main": false,
        "title": "Sanguinar",
        "role": "Tank",
        "spec": "sanguinar",
        "color": "#c0182e",
        "text": "The Sanguinar holds the line with shield and blood. Every blow it takes feeds its Vitae, and its Vitae hardens into a ward against the next.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Blood Call",
                "cost": "Instant",
                "text": "Calls to the blood of nearby enemies, forcing them to attack you for 6 sec."
              },
              {
                "name": "Crimson Ground",
                "cost": "30 Vitae",
                "text": "Soaks the ground around you in blood, damaging enemies in it for 7 sec."
              },
              {
                "name": "Clotting Ward",
                "cost": "40 Vitae",
                "text": "Hardens your blood into a ward that absorbs damage for 8 sec."
              },
              {
                "name": "Thick Blood",
                "cost": "Passive",
                "text": "Melee attacks against you generate Vitae."
              }
            ]
          }
        ]
      },
      {
        "tab": "Carnifex",
        "main": false,
        "title": "Carnifex",
        "role": "Melee DPS",
        "spec": "carnifex",
        "color": "#ff4060",
        "text": "The Carnifex is an executioner with a two-handed blade. It opens wounds, lets them run, then drains what is left in one stroke.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Bloodletting",
                "cost": "Generates 10 Vitae",
                "text": "Opens a wound on the target from range, causing damage over 6 sec."
              },
              {
                "name": "Red Harvest",
                "cost": "30 Vitae",
                "text": "A sweeping blow that strikes all enemies around you twice."
              },
              {
                "name": "Exsanguinate",
                "cost": "60 Vitae",
                "text": "A heavy strike that deals more damage to a bleeding target and ends the bleed."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Bloodsworn",
      "entries": [
        {
          "title": "From San'layn to Bloodsworn",
          "tag": "Revision",
          "body": [
            "The San'layn were open only to elves. The Bloodsworn widen the class to other races and take the shape of a Paladin: plate armor, a weapon, and Vitae in place of Mana.",
            {
              "h": "Specializations"
            },
            {
              "list": ["Hemomancy (Healer)", "Sanguinar (Tank)", "Carnifex (Melee DPS)"]
            }
          ]
        }
      ]
    }
  ]
};
