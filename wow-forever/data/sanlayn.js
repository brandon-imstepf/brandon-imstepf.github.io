/*
  San'layn: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "sanlayn",
  "kind": "class",
  "root": "../",
  "name": "San'layn",
  "color": "#e0485a",
  "icon": "rail-sanlayn",
  "help": "Drag to orbit, scroll to zoom. The scene plays on its own; press 1 to 5 or tap a button to take over. Drain life to build Vitae, then spend it on blood magic.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "San'layn",
        "role": "Proposal",
        "spec": "overview",
        "color": "#e0485a",
        "text": "The San'layn are elves remade by death into creatures of blood and shadow. They take the life of their enemies as Vitae and spend it on blood magic: to strike, to heal, or to become the night itself.",
        "facts": [
          ["Armor", "Cloth"],
          ["Resource", "Mana and Vitae"],
          ["Weapons", "Undecided"],
          ["Alliance", "Undecided"],
          ["Horde", "Undecided"]
        ],
        "sections": [
          {
            "heading": "Core Abilities",
            "spells": [
              {
                "name": "Vitae",
                "cost": "Passive",
                "text": "Drawn from enemies by draining and biting. Spent on blood magic."
              },
              {
                "name": "Blood Bolt",
                "cost": "Mana",
                "text": "Hurls a bolt of hardened blood at the enemy, causing Shadow damage."
              },
              {
                "name": "Essence Drain",
                "cost": "Mana",
                "text": "Drains life from the target, healing you and generating Vitae."
              },
              {
                "name": "Swarm of Bats",
                "cost": "Mana",
                "text": "Releases a swarm of bats that damages all nearby enemies."
              }
            ]
          }
        ]
      },
      {
        "tab": "Crimson Court",
        "main": false,
        "title": "Crimson Court",
        "role": "Ranged DPS",
        "spec": "crimson",
        "color": "#ff4060",
        "text": "Those of the Crimson Court wield blood as a weapon from afar. Shadows spread beneath the enemy and feed upon it, and a full store of Vitae becomes a tide of blood.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Blood Bolt",
                "cost": "Mana",
                "text": "Hurls a bolt of hardened blood at the enemy, causing Shadow damage."
              },
              {
                "name": "Swarming Shadows",
                "cost": "Mana",
                "text": "Pools of shadow spread beneath your enemies, causing Shadow damage over time."
              },
              {
                "name": "Crimson Tide",
                "cost": "50 Vitae",
                "text": "Rains blood on all nearby enemies."
              }
            ]
          }
        ]
      },
      {
        "tab": "Bloodbinder",
        "main": false,
        "title": "Bloodbinder",
        "role": "Healer",
        "spec": "bloodbinder",
        "color": "#ff7a8a",
        "text": "The Bloodbinder takes life from the enemy and gives it to allies. A Bloodbinder does not heal with her own blood when another's will serve.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Transfusion",
                "cost": "Vitae",
                "text": "Spends Vitae to heal a friendly target."
              },
              {
                "name": "Blood Mirror",
                "cost": "Mana",
                "text": "Binds a friendly target. Damage you deal to enemies heals the bound target."
              },
              {
                "name": "Crimson Rite",
                "cost": "40 Vitae",
                "text": "Heals all party members."
              },
              {
                "name": "Essence Drain",
                "cost": "Mana",
                "text": "Drains life from the target, healing you and generating Vitae."
              }
            ]
          }
        ]
      },
      {
        "tab": "Nightfang",
        "main": false,
        "title": "Nightfang",
        "role": "Melee DPS",
        "spec": "nightfang",
        "color": "#c84aff",
        "text": "The Nightfang fights at close quarters in a cloud of bats. It steps from shadow to shadow, bites deep, and for a few seconds becomes a great bat that no blade can follow.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Shadowstep",
                "cost": "Instant",
                "text": "Appear beside the enemy in a burst of bats."
              },
              {
                "name": "Vampiric Bite",
                "cost": "Instant",
                "text": "Bites the target, healing you and generating Vitae."
              },
              {
                "name": "Bat Form",
                "cost": "40 Vitae",
                "text": "Transforms you into a great bat for a few seconds."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "San'layn",
      "entries": [
        {
          "title": "Awaiting Approval",
          "tag": "Proposal",
          "body": [
            "The San'layn were not among the survey classes. The three specializations and the Vitae resource are a proposal and have not been approved.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Approve or revise the specializations", "Choose races and faction"]
            }
          ]
        }
      ]
    }
  ]
};
