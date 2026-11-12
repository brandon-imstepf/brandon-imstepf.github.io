/*
  Tinker: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "tinker",
  "kind": "class",
  "root": "../",
  "name": "Tinker",
  "color": "#f0a03c",
  "icon": "rail-tinker",
  "help": "Drag to orbit, scroll to zoom. The scene plays on its own; press 1 to 5 or tap a button to take over. Heat rises with every ability and vents over time. Hit 100 and you overheat.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "Tinker",
        "role": "Survey class",
        "spec": "overview",
        "color": "#f0a03c",
        "text": "Tinkers are the inventors of the gnomes, dwarves and goblins, who would sooner build an answer than cast one. A Tinker has no mana. Each device adds Heat, and at 100 Heat the Tinker overheats and can use no device until the machine has cooled.",
        "facts": [
          ["Armor", "Mail"],
          ["Resource", "Heat"],
          ["Weapons", "Guns, Maces, Tools"],
          ["Alliance", "auto"],
          ["Horde", "auto"]
        ],
        "sections": [
          {
            "heading": "Core Abilities",
            "spells": [
              {
                "name": "Heat",
                "cost": "Passive",
                "text": "Your devices generate Heat instead of costing mana. At 100 Heat you Overheat and cannot use devices until your Heat has vented."
              },
              {
                "name": "Deploy Turret",
                "cost": "20 Heat",
                "text": "Builds a gun turret at your side that fires at the nearest enemy."
              },
              {
                "name": "Cluster Rockets",
                "cost": "25 Heat",
                "text": "Launches a volley of rockets, inflicting Fire damage to all enemies in the target area."
              },
              {
                "name": "Healing Ray",
                "cost": "15 Heat",
                "text": "Channels a beam that heals a friendly target. May cause unexpected side effects."
              },
              {
                "name": "Proximity Mine",
                "cost": "10 Heat",
                "text": "Places a mine that detonates when an enemy comes near, inflicting Fire damage to all enemies nearby."
              },
              {
                "name": "Vent Heat",
                "cost": "Instant",
                "text": "Vents 60 Heat."
              }
            ]
          }
        ]
      },
      {
        "tab": "Juggernaut",
        "main": false,
        "title": "Juggernaut",
        "role": "Tank",
        "spec": "juggernaut",
        "color": "#7fb0e0",
        "text": "The Juggernaut fights from the seat of a walking war machine. The mech takes the blows meant for its pilot. Should it be destroyed, the pilot is thrown clear and must repair it or call down another.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Call the Mech",
                "cost": "20 Heat",
                "text": "Summons your mech and climbs aboard. The mech has its own health and takes damage in your place."
              },
              {
                "name": "Piston Slam",
                "cost": "15 Heat",
                "text": "Slams the ground, inflicting damage and stunning all nearby enemies."
              },
              {
                "name": "Taunt Beacon",
                "cost": "15 Heat",
                "text": "Plants a beacon that taunts all nearby enemies to attack you."
              },
              {
                "name": "Field Repair",
                "cost": "20 Heat",
                "text": "Repairs your mech. If your mech has been destroyed, rebuilds it."
              }
            ]
          }
        ]
      },
      {
        "tab": "Demolitions",
        "main": false,
        "title": "Demolitions",
        "role": "Ranged DPS",
        "spec": "demolitions",
        "color": "#ff6a3a",
        "text": "The Demolitions expert prepares the ground before the enemy arrives. Turrets, mines and clockwork goblins do the killing while the Tinker reloads.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Deploy Turret",
                "cost": "20 Heat",
                "text": "Builds a gun turret at your side that fires at the nearest enemy. You may have up to 3 turrets."
              },
              {
                "name": "Proximity Mine",
                "cost": "10 Heat",
                "text": "Places a mine that detonates when an enemy comes near, inflicting Fire damage to all enemies nearby."
              },
              {
                "name": "Pocket Factory",
                "cost": "30 Heat",
                "text": "Builds a factory that produces clockwork goblins. The goblins run at nearby enemies and explode."
              },
              {
                "name": "Rearm",
                "cost": "35 Heat",
                "text": "Finishes the cooldown on all of your devices."
              }
            ]
          }
        ]
      },
      {
        "tab": "Mad Science",
        "main": false,
        "title": "Mad Science",
        "role": "Healer / Support",
        "spec": "madscience",
        "color": "#7dff9a",
        "text": "The Mad Scientist heals with devices of his own invention. Most of them work. The cure often carries a side effect, and it is usually a helpful one.",
        "sections": [
          {
            "heading": "Abilities",
            "spells": [
              {
                "name": "Healing Ray",
                "cost": "15 Heat",
                "text": "Channels a beam that heals the most wounded friendly target."
              },
              {
                "name": "Experimental Injector",
                "cost": "25 Heat",
                "text": "Heals a friendly target for a large amount and grants a random beneficial effect."
              },
              {
                "name": "Overclock",
                "cost": "30 Heat",
                "text": "Increases the attack and casting speed of all party members for a short time."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Tinker",
      "entries": [
        {
          "title": "The Heat Gauge",
          "tag": "Mechanic",
          "body": [
            "A Tinker's devices do not draw on mana. Each use adds Heat to the gauge, and Heat bleeds away over time.",
            "At 100 Heat the machine seizes. The Tinker is locked out of all devices until it cools. Vent Heat clears 60 Heat at once and is the Tinker's most important button.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Use devices to build Heat", "Vent before the gauge reaches 100"]
            }
          ]
        }
      ]
    }
  ]
};
