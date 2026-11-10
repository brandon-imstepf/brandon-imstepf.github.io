/*
  Necromancer: spellbook, talents and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "necromancer",
  "kind": "class",
  "root": "../",
  "name": "Necromancer",
  "color": "#9fe07a",
  "icon": "rail-necromancer",
  "help": "Drag to orbit, scroll to zoom. Built-in shapes stand in for real art. Timings are sped up: Exhume fills every 3.5 s here, 6 s in the design.",
  "openOnLoad": [],
  "spellbook": {
    "pages": [
      {
        "tab": "Class Design",
        "main": true,
        "title": "Necromancer",
        "role": "Survey class, full design",
        "spec": "overview",
        "color": "#9fe07a",
        "text": "Necromancers are masters of death who command the dead as servants and wear bone as armor. Each Necromancer keeps a store of corpses that no other player can touch. Corpses strengthen spells and raise servants, yet no spell requires one.",
        "facts": [
          ["Armor", "Cloth"],
          ["Resource", "Mana and Corpses"],
          ["Weapons", "Staves, Daggers, Wands"],
          ["Alliance", "Human, Dwarf"],
          ["Horde", "Undead, Orc"]
        ],
        "sections": [
          {
            "heading": "Abilities by Level",
            "spells": [
              {
                "name": "Exhume",
                "cost": "Level 1 · Passive",
                "text": "Unearths a corpse and adds it to your store every few seconds. Faster outside of combat.",
                "icon": "ability-exhume"
              },
              {
                "name": "Bone Shards",
                "cost": "Level 1",
                "text": "Hurls shards of bone at the enemy, causing Shadow damage.",
                "icon": "ability-bone-shard"
              },
              {
                "name": "Bone Armor",
                "cost": "Level 1",
                "text": "Surrounds the caster with bone, absorbing damage. Consumes corpses from your store to increase the amount absorbed.",
                "icon": "ability-bone-armor"
              },
              {
                "name": "Raise Dead",
                "cost": "Level 4 · 1 Corpse",
                "text": "Raises a skeleton warrior from a stored corpse to fight for you.",
                "icon": "ability-raise-dead"
              },
              {
                "name": "Wither",
                "cost": "Level 6",
                "text": "Afflicts the target with a disease, causing Shadow damage over time.",
                "icon": "ability-wither"
              },
              {
                "name": "Cripple",
                "cost": "Level 8",
                "text": "Reduces the target's movement and attack speed.",
                "icon": "ability-cripple"
              },
              {
                "name": "Grave Chill",
                "cost": "Level 10",
                "text": "Chills the caster. Enemies that strike you in melee are chilled.",
                "icon": "ability-grave-chill"
              },
              {
                "name": "Corpse Explosion",
                "cost": "Level 10 · 1 Corpse",
                "text": "Hurls a stored corpse at the target area. It bursts on impact, causing damage to all enemies nearby.",
                "icon": "ability-corpse-explosion"
              },
              {
                "name": "Extract Essence",
                "cost": "Level 12",
                "text": "Effect not yet decided."
              },
              {
                "name": "Grasping Dead",
                "cost": "Level 14",
                "text": "Hands of the dead rise from the ground, rooting all enemies in the area.",
                "icon": "ability-grasping-dead"
              },
              {
                "name": "Hush of the Grave",
                "cost": "Level 16",
                "text": "Silences the target, preventing spellcasting.",
                "icon": "ability-hush-of-the-grave"
              },
              {
                "name": "Unholy Frenzy",
                "cost": "Level 18",
                "text": "Increases a friendly target's attack and casting speed by 20%, but drains 2% of its health every second.",
                "icon": "ability-unholy-frenzy"
              },
              {
                "name": "Bone Prison",
                "cost": "Level 20",
                "text": "Encases the target in walls of bone, holding it in place.",
                "icon": "ability-bone-prison"
              },
              {
                "name": "Shroud of the Grave",
                "cost": "Level 22",
                "text": "Reduces your threat.",
                "icon": "ability-shroud-of-the-grave"
              },
              {
                "name": "Dark Ritual",
                "cost": "Level 24",
                "text": "Sacrifices a portion of your health to restore mana.",
                "icon": "ability-dark-ritual"
              },
              {
                "name": "Bone Spear",
                "cost": "Level 26",
                "text": "Launches a spear of bone, causing Shadow damage. Each corpse consumed increases the damage by 20%.",
                "icon": "ability-bone-spear"
              },
              {
                "name": "Blight",
                "cost": "Level 28",
                "text": "Blights the ground at the target location, afflicting enemies in the area with plague.",
                "icon": "ability-blight"
              },
              {
                "name": "Skeletal Mage",
                "cost": "Level 30 · 1 Corpse",
                "text": "Raises a skeletal mage that attacks from range.",
                "icon": "ability-skeletal-mage"
              },
              {
                "name": "Plague Cloud",
                "cost": "Level 34",
                "text": "Releases a drifting cloud that spreads disease to enemies it touches.",
                "icon": "ability-plague-cloud"
              },
              {
                "name": "Raise Abomination",
                "cost": "Level 42",
                "text": "Raises an abomination that taunts and cleaves nearby enemies.",
                "icon": "ability-raise-abomination"
              },
              {
                "name": "Master of Death",
                "cost": "Level 50 · 5 min cooldown",
                "text": "Consumes all corpses in your store. Party members gain 2% haste and Stamina per corpse for 30 sec. A second cast deals damage."
              }
            ]
          }
        ]
      },
      {
        "tab": "Legion",
        "main": false,
        "title": "Legion",
        "role": "Ranged DPS / Support",
        "spec": "legion",
        "color": "#f0c46a",
        "text": "The Legion Necromancer is a commander of the dead. Servants rise, fall and rise again, and while three or more stand the whole party fights faster.",
        "sections": [
          {
            "heading": "Key Talents",
            "spells": [
              {
                "name": "Death's Herald",
                "cost": "Talent, 1 rank",
                "text": "While you control 3 or more servants, your Unholy Frenzy affects all party members within 30 yards, increasing attack and casting speed by 5% without draining health.",
                "icon": "deaths-herald"
              },
              {
                "name": "Charnel Wagon",
                "cost": "Talent, 1 rank",
                "text": "Increases the number of corpses you can store by 1. Your Exhume unearths corpses 20% faster.",
                "icon": "charnel-wagon"
              },
              {
                "name": "Shambling Ranks",
                "cost": "Talent, 3 ranks",
                "text": "Gives your servants a 15/30/45% chance to return their corpse to your store when they expire.",
                "icon": "shambling-ranks"
              },
              {
                "name": "Army of the Damned",
                "cost": "Instant · 3 min cooldown",
                "text": "Raises every corpse in your store as a servant for 15 sec, plus 2 additional skeletons. These servants do not count against your servant limit.",
                "icon": "army-of-the-damned"
              }
            ]
          }
        ]
      },
      {
        "tab": "Plaguebringer",
        "main": false,
        "title": "Plaguebringer",
        "role": "Ranged DPS",
        "spec": "plaguebringer",
        "color": "#a9d94c",
        "text": "The Plaguebringer kills with disease and detonation. Enemies that die diseased become Infected Corpses, and an Infected Corpse spreads its plague to everything it strikes.",
        "sections": [
          {
            "heading": "Key Talents",
            "spells": [
              {
                "name": "Plague Bearer",
                "cost": "Talent, 1 rank",
                "text": "Enemies that die while afflicted by your diseases are stored as Infected Corpses. Corpse Explosion with an Infected Corpse spreads Wither to all enemies struck.",
                "icon": "plague-bearer"
              },
              {
                "name": "Contagion",
                "cost": "Talent, 2 ranks",
                "text": "When an enemy afflicted by your Wither dies, Wither has a 50/100% chance to spread to a nearby enemy.",
                "icon": "contagion"
              },
              {
                "name": "Carrion Swarm",
                "cost": "1 Corpse · Instant · 15 sec cooldown",
                "text": "Releases a swarm of carrion beetles, dealing Shadow damage to all enemies in a cone in front of you.",
                "icon": "carrion-swarm"
              },
              {
                "name": "Pestilence Incarnate",
                "cost": "Instant · 3 min cooldown",
                "text": "For 20 sec, each time your diseases deal damage there is a 15% chance to add a corpse to your store.",
                "icon": "pestilence-incarnate"
              }
            ]
          }
        ]
      },
      {
        "tab": "Lich",
        "main": false,
        "title": "Lich",
        "role": "Tank",
        "spec": "lich",
        "color": "#8fd0ff",
        "text": "The Lich is a cloth-wearer who stands where a warrior would, wrapped in bone and frost. Spent corpses harden into bone charges, and a phylactery cheats death once.",
        "sections": [
          {
            "heading": "Key Talents",
            "spells": [
              {
                "name": "Lichborne",
                "cost": "Instant",
                "text": "Take the form of a Lich, increasing armor from cloth items by 300%, Stamina by 20% and threat caused by 30%. You cannot control more than 2 servants in this form.",
                "icon": "lichborne"
              },
              {
                "name": "Ossuary",
                "cost": "Talent, 3 ranks",
                "text": "Each corpse you spend grants a Bone Charge, reducing physical damage taken by 2%. Stacks up to 3/4/5 times. One charge fades every 8 sec.",
                "icon": "ossuary"
              },
              {
                "name": "Frost Nova",
                "cost": "Instant · 20 sec cooldown",
                "text": "Blasts enemies near you for Frost damage and slows their movement by 50% for 8 sec. Generates a large amount of threat.",
                "icon": "frost-nova"
              },
              {
                "name": "Phylactery",
                "cost": "Talent, 1 rank",
                "text": "When you would take a killing blow, your phylactery shatters instead, leaving you at 30% maximum life and immune to physical damage for three seconds. Recharges every 10 minutes.",
                "icon": "phylactery"
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Necromancer",
      "entries": [
        {
          "title": "The Corpse Store",
          "tag": "Mechanic",
          "body": [
            "Every Necromancer keeps a store of corpses. When an enemy dies nearby, its spirit is drawn into your store. The body and its loot remain where they fell.",
            "Your corpses are your own. Two Necromancers in one party never compete for them.",
            "The store holds 3 corpses and grows to 6 through levels and talents. It appears as shrunken heads or skull candles circling the caster.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Gather corpses from nearby deaths", "Exhume fills the store when nothing has died"]
            }
          ]
        },
        {
          "title": "Spending the Dead",
          "tag": "Mechanic",
          "body": [
            "No spell requires a corpse. Every spell may be cast with an empty store.",
            "Corpses make spells stronger. Bone Spear gains 20% damage for each corpse consumed, and Bone Armor absorbs more.",
            "Master of Death, learned at level 50, consumes the whole store at once.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Spend corpses to raise servants", "Spend corpses to empower finishers"]
            }
          ]
        },
        {
          "title": "Defectors and Necrolytes",
          "tag": "Lore",
          "body": [
            "Among the Alliance, Necromancers are humans and dwarves who have broken from the Cult of the Damned and turned its arts against the Scourge.",
            "Among the Horde, the Forsaken and the orcs carry on the tradition of the necrolytes of the old Horde.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Alliance: Human, Dwarf", "Horde: Undead, Orc"]
            }
          ]
        },
        {
          "title": "Unsettled Matters",
          "tag": "Undecided",
          "body": [
            "Extract Essence has no effect yet. Deathless Calm is favored; Plaguewarding, Grave Memory and Echo of the Fallen are the alternatives.",
            "The Plaguebringer lacks a finisher. Candidates are Carrion Swarm scaling per corpse, Plague Barrage, and Pestilent Feast.",
            "Also open: whether Bone Shards spends its corpse on cast or on hit, whether the second cast of Master of Death fires on its own, and the wording of Marrow Harvest.",
            {
              "h": "Objectives"
            },
            {
              "list": ["Decide Extract Essence", "Choose a Plaguebringer finisher"]
            }
          ]
        }
      ]
    }
  ],
  "talents": {
    "trees": [
      {
        "id": "legion",
        "name": "Legion",
        "role": "Ranged DPS / Support",
        "color": "#f0c46a",
        "talents": [
          {
            "id": "rattling-bones",
            "name": "Rattling Bones",
            "tier": 1,
            "column": 1,
            "ranks": 5,
            "text": "Increases the damage done by your servants by {3/6/9/12/15}%.",
            "spell": ""
          },
          {
            "id": "grave-calling",
            "name": "Grave Calling",
            "tier": 1,
            "column": 2,
            "ranks": 3,
            "text": "Reduces the casting time of your Raise Dead spell by {0.5/1/1.5} sec.",
            "spell": ""
          },
          {
            "id": "swelling-ranks",
            "name": "Swelling Ranks",
            "tier": 2,
            "column": 0,
            "ranks": 2,
            "text": "Increases the number of servants you can control by {1/2}.",
            "spell": ""
          },
          {
            "id": "enduring-dead",
            "name": "Enduring Dead",
            "tier": 2,
            "column": 1,
            "ranks": 5,
            "text": "Increases the duration of your servants by {3/6/9/12/15} sec.",
            "spell": ""
          },
          {
            "id": "charnel-wagon",
            "name": "Charnel Wagon",
            "tier": 2,
            "column": 2,
            "ranks": 1,
            "text": "Increases the number of corpses you can store by 1. Your Exhume unearths corpses 20% faster.",
            "spell": ""
          },
          {
            "id": "deaths-herald",
            "name": "Death's Herald",
            "tier": 3,
            "column": 1,
            "ranks": 1,
            "text": "While you control 3 or more servants, your Unholy Frenzy affects all party members within 30 yards, increasing attack and casting speed by 5% without draining health.",
            "spell": ""
          },
          {
            "id": "improved-cripple",
            "name": "Improved Cripple",
            "tier": 3,
            "column": 2,
            "ranks": 2,
            "text": "Your Cripple spell also increases the casting time of the target's spells by {10/20}%.",
            "spell": ""
          },
          {
            "id": "shambling-ranks",
            "name": "Shambling Ranks",
            "tier": 4,
            "column": 0,
            "ranks": 3,
            "text": "Gives your servants a {15/30/45}% chance to return their corpse to your store when they expire.",
            "spell": ""
          },
          {
            "id": "necrotic-bond",
            "name": "Necrotic Bond",
            "tier": 4,
            "column": 2,
            "ranks": 5,
            "text": "Heals you for {1/2/3/4/5}% of the damage done by your servants.",
            "spell": ""
          },
          {
            "id": "master-of-the-dead",
            "name": "Master of the Dead",
            "tier": 5,
            "column": 1,
            "ranks": 5,
            "text": "Your servants inherit an additional {4/8/12/16/20}% of your spell damage and Stamina.",
            "spell": ""
          },
          {
            "id": "unholy-aura",
            "name": "Unholy Aura",
            "tier": 6,
            "column": 1,
            "ranks": 1,
            "text": "Increases the movement speed of all party members within 30 yards by 10% and their health regeneration by 10%.",
            "spell": "Instant"
          },
          {
            "id": "grim-momentum",
            "name": "Grim Momentum",
            "tier": 6,
            "column": 2,
            "ranks": 3,
            "text": "When one of your servants dies, your spell damage is increased by {1/2/3}% for 10 sec. Stacks up to 5 times.",
            "spell": ""
          },
          {
            "id": "army-of-the-damned",
            "name": "Army of the Damned",
            "tier": 7,
            "column": 1,
            "ranks": 1,
            "text": "Raises every corpse in your store as a servant for 15 sec, plus 2 additional skeletons. These servants do not count against your servant limit.",
            "spell": "Instant · 3 min cooldown"
          }
        ]
      },
      {
        "id": "plaguebringer",
        "name": "Plaguebringer",
        "role": "Ranged DPS",
        "color": "#a9d94c",
        "talents": [
          {
            "id": "virulence",
            "name": "Virulence",
            "tier": 1,
            "column": 1,
            "ranks": 5,
            "text": "Increases the damage done by your diseases by {2/4/6/8/10}%.",
            "spell": ""
          },
          {
            "id": "bone-splinters",
            "name": "Bone Splinters",
            "tier": 1,
            "column": 2,
            "ranks": 5,
            "text": "Increases the critical strike chance of your Bone Shard and Bone Spear spells by {1/2/3/4/5}%.",
            "spell": ""
          },
          {
            "id": "plague-pit",
            "name": "Plague Pit",
            "tier": 2,
            "column": 0,
            "ranks": 1,
            "text": "Increases the number of corpses you can store by 1.",
            "spell": ""
          },
          {
            "id": "contagion",
            "name": "Contagion",
            "tier": 2,
            "column": 1,
            "ranks": 2,
            "text": "When an enemy afflicted by your Wither dies, Wither has a {50/100}% chance to spread to a nearby enemy.",
            "spell": ""
          },
          {
            "id": "morbid-focus",
            "name": "Morbid Focus",
            "tier": 2,
            "column": 3,
            "ranks": 2,
            "text": "Reduces the pushback suffered from damaging attacks while casting Bone Shard and Bone Spear by {35/70}%.",
            "spell": ""
          },
          {
            "id": "plague-bearer",
            "name": "Plague Bearer",
            "tier": 3,
            "column": 1,
            "ranks": 1,
            "text": "Enemies that die while afflicted by your diseases are stored as Infected Corpses. Corpse Explosion with an Infected Corpse spreads Wither to all enemies struck.",
            "spell": ""
          },
          {
            "id": "festering",
            "name": "Festering",
            "tier": 3,
            "column": 2,
            "ranks": 3,
            "text": "Increases the duration of your Wither spell by {3/6/9} sec.",
            "spell": ""
          },
          {
            "id": "rot",
            "name": "Rot",
            "tier": 4,
            "column": 1,
            "ranks": 5,
            "text": "Increases the damage done by your Corpse Explosion spell by {4/8/12/16/20}%.",
            "spell": ""
          },
          {
            "id": "lingering-plague",
            "name": "Lingering Plague",
            "tier": 4,
            "column": 2,
            "ranks": 2,
            "text": "Increases the radius of your Blight spell by {2/4} yards and its duration by {2/4} sec.",
            "spell": ""
          },
          {
            "id": "withering-touch",
            "name": "Withering Touch",
            "tier": 5,
            "column": 0,
            "ranks": 3,
            "text": "Gives your Bone Shard spell a {10/20/30}% chance to afflict the target with Wither.",
            "spell": ""
          },
          {
            "id": "marrow-harvest",
            "name": "Marrow Harvest",
            "tier": 5,
            "column": 2,
            "ranks": 3,
            "text": "Critical strikes from an empowered Bone Spear have a {33/66/100}% chance to return the corpse to your store.",
            "spell": ""
          },
          {
            "id": "carrion-swarm",
            "name": "Carrion Swarm",
            "tier": 6,
            "column": 1,
            "ranks": 1,
            "text": "Releases a swarm of carrion beetles, dealing Shadow damage to all enemies in a cone in front of you.",
            "spell": "1 Corpse · Instant · 15 sec cooldown"
          },
          {
            "id": "grave-reach",
            "name": "Grave Reach",
            "tier": 6,
            "column": 2,
            "ranks": 2,
            "text": "Increases the range at which you harvest corpses by {5/10} yards.",
            "spell": ""
          },
          {
            "id": "pestilence-incarnate",
            "name": "Pestilence Incarnate",
            "tier": 7,
            "column": 1,
            "ranks": 1,
            "text": "For 20 sec, each time your diseases deal damage there is a 15% chance to add a corpse to your store.",
            "spell": "Instant · 3 min cooldown"
          }
        ]
      },
      {
        "id": "lich",
        "name": "Lich",
        "role": "Tank",
        "color": "#8fd0ff",
        "talents": [
          {
            "id": "bone-plating",
            "name": "Bone Plating",
            "tier": 1,
            "column": 1,
            "ranks": 5,
            "text": "Increases the damage absorbed by your Bone Armor by {6/12/18/24/30}%.",
            "spell": ""
          },
          {
            "id": "frozen-marrow",
            "name": "Frozen Marrow",
            "tier": 1,
            "column": 2,
            "ranks": 5,
            "text": "Increases your total Stamina by {2/4/6/8/10}%.",
            "spell": ""
          },
          {
            "id": "biting-cold",
            "name": "Biting Cold",
            "tier": 2,
            "column": 0,
            "ranks": 3,
            "text": "Your Grave Chill also deals {0.6/1.2/1.8}% of your total HP in Frost damage to enemies that strike you in melee.",
            "spell": ""
          },
          {
            "id": "crypt-keeper",
            "name": "Crypt Keeper",
            "tier": 2,
            "column": 1,
            "ranks": 1,
            "text": "Increases the number of corpses you can store by 1. While you are in combat, your Exhume unearths corpses 50% faster.",
            "spell": ""
          },
          {
            "id": "unyielding",
            "name": "Unyielding",
            "tier": 2,
            "column": 3,
            "ranks": 2,
            "text": "Reduces the casting penalty suffered from damaging attacks while casting by {35/70}%.",
            "spell": ""
          },
          {
            "id": "lichborne",
            "name": "Lichborne",
            "tier": 3,
            "column": 1,
            "ranks": 1,
            "text": "Take the form of a Lich, increasing armor from cloth items by 300%, Stamina by 20% and threat caused by 30%. You cannot control more than 2 servants in this form.",
            "spell": "Instant"
          },
          {
            "id": "grave-resolve",
            "name": "Grave Resolve",
            "tier": 3,
            "column": 2,
            "ranks": 3,
            "text": "Reduces the cooldown of your Shroud of the Grave by {30/60/90} sec. In Lichborne, Shroud of the Grave reduces damage taken by 20% for 6 sec instead of lowering your threat.",
            "spell": ""
          },
          {
            "id": "ossuary",
            "name": "Ossuary",
            "tier": 4,
            "column": 1,
            "ranks": 3,
            "text": "Each corpse you spend grants a Bone Charge, reducing physical damage taken by 2%. Stacks up to {3/4/5} times. One charge fades every 8 sec.",
            "spell": ""
          },
          {
            "id": "frost-nova",
            "name": "Frost Nova",
            "tier": 4,
            "column": 2,
            "ranks": 1,
            "text": "Blasts enemies near you for Frost damage and slows their movement by 50% for 8 sec. Generates a large amount of threat.",
            "spell": "Instant · 20 sec cooldown"
          },
          {
            "id": "glacial-shell",
            "name": "Glacial Shell",
            "tier": 4,
            "column": 3,
            "ranks": 2,
            "text": "While your Bone Armor is active, your Frost and Shadow resistances are increased by {10/20}.",
            "spell": ""
          },
          {
            "id": "soul-siphon",
            "name": "Soul Siphon",
            "tier": 5,
            "column": 0,
            "ranks": 3,
            "text": "Your Dark Ritual also heals you for {5/10/15}% of your maximum health.",
            "spell": ""
          },
          {
            "id": "chill-of-the-grave",
            "name": "Chill of the Grave",
            "tier": 5,
            "column": 1,
            "ranks": 3,
            "text": "Increases the threat caused by your Frost spells by {15/30/45}%.",
            "spell": ""
          },
          {
            "id": "deathless-will",
            "name": "Deathless Will",
            "tier": 5,
            "column": 2,
            "ranks": 2,
            "text": "Each corpse consumed by your Bone Armor heals you for {2/4}% of your maximum health.",
            "spell": ""
          },
          {
            "id": "death-and-decay",
            "name": "Death and Decay",
            "tier": 6,
            "column": 1,
            "ranks": 1,
            "text": "Corrupts the ground at the target location, dealing Shadow damage to all enemies within it over 10 sec. Generates a very high amount of threat.",
            "spell": "Instant · 1 min cooldown"
          },
          {
            "id": "phylactery",
            "name": "Phylactery",
            "tier": 7,
            "column": 1,
            "ranks": 1,
            "text": "When you would take a killing blow, your phylactery shatters instead, leaving you at 30% maximum life and immune to physical damage for three seconds. Recharges every 10 minutes.",
            "spell": ""
          }
        ]
      }
    ]
  }
};
