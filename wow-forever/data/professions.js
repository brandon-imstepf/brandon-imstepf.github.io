/*
  Professions: trade skill window and design log.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.PAGE = {
  "key": "professions",
  "kind": "prof",
  "root": "../",
  "name": "Professions",
  "color": "#d9a35a",
  "icon": "rail-professions",
  "openOnLoad": ["trade", "log"],
  "logTitle": "Professions",
  "trade": {
    "title": "Professions",
    "button": "Crafts",
    "tip": "Every profession and its specializations.",
    "sub": "Trade Skills",
    "right": "Skill 300",
    "width": 640,
    "groups": [
      {
        "group": "New Professions",
        "entries": [
          {
            "title": "Woodworking",
            "tag": "New",
            "body": [
              {
                "note": "Production · New"
              },
              "Woodworkers turn logs into planks, and planks into bows, staves, shields, arrows and instruments. The craft supplies the ranged and caster weapons that Blacksmithing never has, and it gives the Bard an instrument made by players. Woodworking is to the Arborist what Blacksmithing is to the Miner.",
              {
                "h": "Recipes"
              },
              {
                "h4": "Planks and dowels",
                "text": "Greenwood Plank, Ashwood Plank, Ironbark Plank. Every tier needs a Carpenter's Saw (vendor tool, like the Blacksmith Hammer)."
              },
              {
                "h4": "Arrows and bolts",
                "text": "Crafted in stacks of 200. Tier for tier, they match vendor ammo; at 250+ they beat it (Ironbark Arrows, Jagged Thorium Arrows)."
              },
              {
                "h4": "Parts for other crafts",
                "text": "Gunstocks for Engineering rifles, hafts for Blacksmithing axes and maces, enchanting rods' wooden cores, and frames for Tailoring bags."
              },
              {
                "h4": "Fishing poles",
                "text": "Every 50 skill, a better fishing pole. The best (Elderwood Angler's Pole) adds +30 Fishing."
              },
              {
                "h": "Specializations"
              },
              {
                "h4": "Bowyer",
                "note": "Bows, crossbows, arrows"
              },
              {
                "list": [
                  "Learns every bow and crossbow pattern past 225, ending in the epic Heartwood Longbow.",
                  "Arrows you craft come in stacks of 400.",
                  "Strings: Sinew Bowstring (from Butchery) can be applied to any bow or crossbow for +1% hit, like a scope.",
                  "Quest at 225: Bowyer Talarin in Astranaar (Alliance) or Bowyer Krugg at the Warsong Lumber Camp (Horde)."
                ]
              },
              {
                "h4": "Carver",
                "note": "Staves, shields, totems, instruments"
              },
              {
                "list": [
                  "Learns caster staves, wooden shields (light, with spell power) and the relic-slot Idols, Totems and Librams.",
                  "Makes Bard instruments: lute, war drum, flute and horn, each fitting one Bard spec.",
                  "Bone Fragments (from Butchery) inlay into staves for extra Stamina; the Necromancer Bone Staff line uses them.",
                  "Quest at 225: Master Carver Ollen in Ironforge or Elder Wood-Shaper Tahu in Thunder Bluff."
                ]
              }
            ]
          },
          {
            "title": "Arborist",
            "tag": "New",
            "body": [
              {
                "note": "Gathering · New"
              },
              "Arborists fell trees for their wood. An Arborist carries a Woodcutter's Axe as a miner carries a pick, and may track timber on the minimap.",
              {
                "h": "Timber"
              },
              {
                "table": [
                  ["Wood", "Skill", "Found in", "Also yields"],
                  ["Greenwood Log", "1", "Elwynn Forest, Teldrassil, Mulgore, Tirisfal Glades, Dun Morogh (sparse pines)", "Sticky Sap"],
                  ["Pinewood Log", "75", "Silverpine Forest, Loch Modan, Darkshore, Redridge Mountains", "Pine Resin"],
                  ["Ashwood Log", "125", "Ashenvale, Hillsbrad Foothills, Stonetalon Mountains, Duskwood, Wetlands", "Amber Sap"],
                  ["Ironbark Log", "175", "Feralas, Stranglethorn Vale (Mahogany), The Hinterlands, Swamp of Sorrows", "Ironbark Resin"],
                  ["Elderwood Log", "230", "Un'Goro Crater, Azshara, Winterspring (Frostwood), Felwood (Felbark)", "Heartwood"],
                  ["Ancient Heartwood", "275", "Rare drop from Elderwood trees and the treants of Felwood and Feralas", "Living Bark"]
                ]
              },
              {
                "h4": "Byproducts",
                "text": "Every tier drops a sap or resin. Leatherworkers use sap to cure leather, Alchemists use resin in potions, Woodworkers use it to seal bows."
              },
              {
                "h4": "Ashenvale",
                "text": "Night elf forests are protected. Alliance arborists gather deadfall and get Living Bark. Horde arborists can gather live and dead trees but have a chance to call a Sentinel patrol."
              },
              {
                "h4": "Lore anchor",
                "text": "The Warsong clan's logging in Ashenvale drove the first war between orcs and night elves on Kalimdor. Arborist lets players stand on both sides of that."
              },
              {
                "h": "Specializations"
              },
              {
                "h4": "Strong Feller",
                "note": "More wood"
              },
              {
                "list": [
                  "15% chance for an extra log.",
                  "Felling a tree grants a buff that increases strength and stamina by 1 for 5 minutes. Stacks up to 5 times."
                ]
              },
              {
                "h4": "Grovekeeper",
                "note": "Rare materials"
              },
              {
                "list": [
                  "Doubles the chance of resin and Heartwood.",
                  "Can gather Living Bark from any tree in Ashenvale and Felwood without permit or retribution.",
                  "Learns Tend the Grove: cleanse a felbark tree in Felwood once a day for Felwood rep and a chance at Ancient Heartwood."
                ]
              }
            ]
          },
          {
            "title": "Jewelcrafting",
            "tag": "Returning",
            "body": [
              {
                "note": "Production · Returning"
              },
              "Jewelcrafters cut gems and work precious metal into rings, necklaces and trinkets. Sockets are rare: only crafted items of skill 250 or higher and a few raid items bear one.",
              {
                "h": "Recipes"
              },
              {
                "h4": "Settings and wire",
                "text": "Copper, Bronze, Silver, Gold, Truesilver and Thorium settings. Made at a Jeweler's Kit (vendor tool)."
              },
              {
                "h4": "Gem tiers",
                "text": "Malachite, Tigerseye and Shadowgem at the low end; Moss Agate, Lesser Moonstone, Jade and Citrine in the middle; Aquamarine, Star Ruby, Large Opal, Blue Sapphire, Huge Emerald, Azerothian Diamond and Arcane Crystal at the top."
              },
              {
                "h4": "Rings and amulets",
                "text": "Every 25 skill. Stat rings for leveling and resist rings for raid sets (Molten Core fire, Naxxramas frost)."
              },
              {
                "h4": "Trinkets",
                "text": "A few figurines with on-use effects, in the Vanilla style of Smoking Heart or Fetish of the Sand Reaver."
              },
              {
                "h": "Specializations"
              },
              {
                "h4": "Gemcutter",
                "note": "Cut gems and sockets"
              },
              {
                "list": [
                  "Cuts raw gems into socketable gems, with three cuts per color.",
                  "Can add a socket to a crafted 250+ item once (a Socketing Drill, Engineering tie-in).",
                  "Gets the most from Mining Prospectors, who supply the rare gems.",
                  "Quest at 225: Gem-Cutter Valdri in Ironforge or Jeweler Zaruk in Orgrimmar."
                ]
              },
              {
                "h4": "Goldsmith",
                "note": "Rings, amulets and trinkets"
              },
              {
                "list": [
                  "Learns every ring, necklace and trinket pattern past 225, ending in an epic amulet from Arcane Crystal.",
                  "Rings and amulets you make may roll an extra minor stat.",
                  "Finishes staged staves and wands that need a gem set at the head (see Staged crafting).",
                  "Quest at 225: Goldsmith Ressa in Stormwind or Goldsmith Morvane in Undercity."
                ]
              }
            ]
          }
        ]
      },
      {
        "group": "Production",
        "entries": [
          {
            "title": "Blacksmithing",
            "tag": "Kept",
            "body": [
              {
                "note": "Production · Vanilla"
              },
              {
                "h4": "Armorsmith",
                "note": "Plate and mail armor",
                "text": "Four quest lines (Ornate Mithril, Imperial Plate family) and a chance to craft an extra piece of armor scraps for repairs."
              },
              {
                "h4": "Weaponsmith",
                "note": "Weapons",
                "text": "Branches again at 250 into Master Axesmith, Hammersmith or Swordsmith. Weaponsmiths also make sharpening stones and weightstones in stacks of 5 instead of 1."
              }
            ]
          },
          {
            "title": "Leatherworking",
            "tag": "Kept",
            "body": [
              {
                "note": "Production · Vanilla"
              },
              {
                "h4": "Dragonscale",
                "note": "Mail for Hunters and Shamans",
                "text": "Works best with Tanning skinners: Cured Scaled Hides skip one crafting step."
              },
              {
                "h4": "Elemental",
                "note": "Leather tied to fire, frost, earth and nature",
                "text": "Elemental leather now also makes resist cloaks and quivers."
              },
              {
                "h4": "Tribal",
                "note": "Leather for Druids, Rogues and Bards",
                "text": "Adds Bard instrument cases (ranged-slot quivers for sheet music). Tribal patterns gain a Bard set."
              }
            ]
          },
          {
            "title": "Engineering",
            "tag": "Kept",
            "body": [
              {
                "note": "Production · Vanilla"
              },
              {
                "h4": "Gnomish",
                "note": "Odd, clever devices",
                "text": "Death Ray, Net-o-Matic, Shrink Ray. New: Tinker schematics that tune Heat (a Coolant Coil trinket)."
              },
              {
                "h4": "Goblin",
                "note": "Explosives and loud solutions",
                "text": "Sapper Charge, Rocket Helm, Dimensional Ripper. New: Tinker schematics for turrets with more health."
              }
            ]
          },
          {
            "title": "Tailoring",
            "tag": "New specs",
            "body": [
              {
                "note": "Production · New specs"
              },
              {
                "h4": "Mooncloth",
                "note": "Healing gear",
                "text": "Halves the Mooncloth cooldown at a moonwell and unlocks the Mooncloth robes plus a healer set."
              },
              {
                "h4": "Shadoweave",
                "note": "Shadow and Frost gear",
                "text": "Felcloth and Shadoweave patterns for Warlocks, Priests and Necromancers, including a Necromancer set (Grave-Silk Regalia)."
              },
              {
                "h4": "Haberdasher",
                "note": "Bags and pouches",
                "text": "Every bag recipe makes a bag 2 slots larger than normal. Learns profession bags (herb, enchanting, soul, ammo) and the 18-slot Traveler's Satchel."
              }
            ]
          },
          {
            "title": "Alchemy",
            "tag": "New specs",
            "body": [
              {
                "note": "Production · New specs"
              },
              {
                "h4": "Potions",
                "note": "Combat potions",
                "text": "10% chance to make an extra potion per craft. Potions you make have a 25% greater effect on you."
              },
              {
                "h4": "Elixirs",
                "note": "Elixirs and flasks",
                "text": "10% chance to make an extra elixir. Elixirs you make last 50% longer on you."
              },
              {
                "h4": "Transmutation",
                "note": "Transmutes",
                "text": "Arcanite and elemental transmutes have a chance to proc an extra result. Transmute cooldown shortened by 1 day."
              }
            ]
          },
          {
            "title": "Enchanting",
            "tag": "New specs",
            "body": [
              {
                "note": "Production · New specs"
              },
              {
                "h4": "Runecarver",
                "note": "Weapon enchants",
                "text": "Weapon enchants cost 20% fewer shards. Can apply a journeyman or lower enchantment to already enchanted weapons."
              },
              {
                "h4": "Wardweaver",
                "note": "Armor enchants",
                "text": "Armor enchants cost 20% fewer dusts and essences. Can apply a journeyman or lower enchantment to already enchanted armor."
              }
            ]
          }
        ]
      },
      {
        "group": "Gathering",
        "entries": [
          {
            "title": "Mining",
            "tag": "New specs",
            "body": [
              {
                "note": "Gathering · New specs"
              },
              {
                "h4": "Prospector",
                "note": "Gems",
                "text": "Doubles the gem chance from veins and adds rare gems from Truesilver and Thorium (Arcane Crystal, Huge Emerald)."
              },
              {
                "h4": "Smelter",
                "note": "Bars",
                "text": "Smelts 2 bars from each ore 15% of the time and can smelt Dark Iron at any forge, not only at the Black Forge."
              }
            ]
          },
          {
            "title": "Herbalism",
            "tag": "New specs",
            "body": [
              {
                "note": "Gathering · New specs"
              },
              {
                "h4": "Wildtouch",
                "note": "More herbs",
                "text": "15% chance for an extra herb. Picking a herb restores a small amount of health over 5 sec."
              },
              {
                "h4": "Seedkeeper",
                "note": "Seeds and planting",
                "text": "Gathering some wild herbs may produce seeds. Seeds grow in herb plots outside Brill, Goldshire, Razor Hill and Dolanaar and are ready after one day."
              }
            ]
          },
          {
            "title": "Skinning",
            "tag": "New specs",
            "body": [
              {
                "note": "Gathering · New specs"
              },
              {
                "h4": "Butchery",
                "note": "Meat, bone and sinew",
                "text": "Beasts you skin also give cooking meat, even ones that normally drop none (Prime Cuts). Adds Sinew for bowstrings and Bone Fragments for Carvers. Your cooked meat recipes gain +1 skill-up chance."
              },
              {
                "h4": "Tanning",
                "note": "Leather",
                "text": "15% chance for an extra leather and a chance at a Pristine Hide, which cures straight into Heavy, Thick or Rugged Leather without salt."
              }
            ]
          }
        ]
      },
      {
        "group": "Secondary",
        "entries": [
          {
            "title": "Cooking",
            "tag": "New specs",
            "body": [
              {
                "note": "Secondary · New specs"
              },
              {
                "h4": "Hearth Cook",
                "text": "Feasts that feed the whole party (one cook, five players). Food made by a Hearth Cook grants its buff 50% sooner."
              },
              {
                "h4": "Brewmaster",
                "text": "Brewing as a Cooking path. Ales, meads and spirits with short combat buffs and a drunk-level: the more you drink, the higher the buff and respective debuffs.",
                "text": "Recipes come from Ironforge, Thunder Brew and Brewfest vendors. Hops and grain are sold from farms around Azeroth; Seedkeepers can grow them and enemies can drop them."
              }
            ]
          },
          {
            "title": "First Aid",
            "tag": "New specs",
            "body": [
              {
                "note": "Secondary · New specs"
              },
              {
                "h4": "Field Medic",
                "text": "Bandages can be applied to others while they are in combat without the target's dazed penalty."
              },
              {
                "h4": "Physician",
                "text": "Learns Anti-Venom and Plague Draught (cures one disease) recipes."
              }
            ]
          },
          {
            "title": "Fishing",
            "tag": "New specs",
            "body": [
              {
                "note": "Secondary · New specs"
              },
              {
                "h4": "Angler",
                "text": "Angler-only rare fish schools appear and show on the minimap."
              },
              {
                "h4": "Trawler",
                "text": "15% chance of catching an extra fish per cast.",
                "text": "Catches 2 fish per cast from schools."
              }
            ]
          }
        ]
      }
    ]
  },
  "log": [
    {
      "group": "Professions",
      "entries": [
        {
          "title": "Specializations",
          "tag": "Rules",
          "body": [
            {
              "h4": "Chosen at 225",
              "text": "A specialization is chosen at skill 225 by completing a task for the trainer, as Armorsmiths and Weaponsmiths have always done. Gathering professions choose at the same point. Secondary professions choose at 150."
            },
            {
              "h4": "One for Each Profession",
              "text": "A profession may hold one specialization at a time."
            },
            {
              "h4": "Unlearning",
              "text": "A specialization may be unlearned for a fee. Your skill returns to the point of choosing, 225 in most cases, and the trainer's task must be done again. Recipes of the old specialization remain in your book but cannot be used."
            },
            {
              "h4": "Nothing Is Taken Away",
              "text": "All recipes and nodes below 225 remain open to every specialization. A specialization only adds."
            },
            {
              "h4": "Nodes Are Not Contested",
              "text": "Two gatherers of different specializations at one node each receive their own bonus."
            }
          ]
        },
        {
          "title": "Staged Crafting",
          "tag": "Rules",
          "body": [
            "A few of the finest items require two crafters. One profession makes an inert piece, and a second profession finishes it. This is reserved for epics, quest items and recipes of skill 275 or higher.",
            {
              "h4": "Only the Finest Items",
              "text": "Two to four recipes for each pair of professions, all at skill 275 or higher."
            },
            {
              "h4": "The Inert Piece May Be Sold",
              "text": "It binds when equipped, so it may be traded or placed at auction."
            },
            {
              "h4": "Both Crafters Are Named",
              "text": "Each step grants a skill point, and the finished item bears both names."
            },
            {
              "h4": "The Finisher Must Be Specialized",
              "text": "A staff requires a Runecarver, a robe a Wardweaver, and so on."
            },
            {
              "h4": "Examples"
            },
            {
              "table": [
                ["Begun by", "Inert piece", "Finished by", "Result"],
                ["Woodworking: Carver", "Prepared Elderwood Staff", "Enchanting: Runecarver", "Staff of the Frozen Tide (caster epic)"],
                ["Woodworking: Carver", "Inert Bone-Inlaid Staff", "Enchanting: Runecarver", "Bonewarden Staff (Necromancer quest staff)"],
                ["Woodworking: Bowyer", "Unstrung Heartwood Longbow", "Leatherworking", "Heartwood Longbow (grip and string)"],
                ["Blacksmithing: Weaponsmith", "Unquenched Runeblade", "Enchanting: Runecarver", "Runed Arcanite Blade"],
                ["Tailoring: Mooncloth", "Unblessed Mooncloth Vestments", "Enchanting: Wardweaver", "Vestments of the Moonwell"],
                ["Jewelcrafting: Goldsmith", "Empty Arcane Setting", "Jewelcrafting: Gemcutter", "Amulet of the Arcane Eye"],
                ["Woodworking: Carver", "Carved Wand Haft", "Jewelcrafting: Goldsmith", "Starfire Wand (gem set at the tip)"]
              ]
            }
          ]
        },
        {
          "title": "Trade Between Crafts",
          "tag": "Economy",
          "body": [
            {
              "table": [
                ["From", "To", "Goods"],
                ["Arborist", "Woodworking", "Logs and resin"],
                ["Skinning: Butchery", "Woodworking: Bowyer", "Sinew bowstrings"],
                ["Skinning: Butchery", "Woodworking: Carver", "Bone Fragments for staves"],
                ["Skinning: Butchery", "Cooking", "Prime Cuts from any beast"],
                ["Skinning: Tanning", "Leatherworking", "Pristine Hides, cured leather"],
                ["Woodworking", "Engineering", "Gunstocks"],
                ["Woodworking", "Blacksmithing", "Weapon hafts"],
                ["Woodworking: Carver", "Bard class", "Instruments"],
                ["Mining: Prospector", "Jewelcrafting", "Rare gems"],
                ["Woodworking", "Enchanting: Runecarver", "Prepared staves (staged)"],
                ["Seedkeeper", "Cooking: Brewmaster", "Hops and grain"],
                ["Tailoring: Shadoweave", "Necromancer class", "Grave-Silk Regalia"],
                ["Engineering", "Tinker class", "Heat trinkets and turret schematics"],
                ["Arborist", "Alchemy", "Resin for fire resist potions"]
              ]
            }
          ]
        },
        {
          "title": "Ideas Set Aside",
          "tag": "Closed",
          "body": [
            {
              "h4": "Brewing",
              "note": "Folded into Cooking",
              "text": "Became the Brewmaster specialization of Cooking."
            },
            {
              "h4": "Salvaging",
              "note": "Dropped",
              "text": "Too loose next to Mining, Herbalism, Skinning and Arborist, which each gather one clear material from the world."
            },
            {
              "h4": "Inscription",
              "note": "Will Revisit",
              "text": "It has potential, but currently not useful or interesting enough to be an entire profession."
            }
          ]
        }
      ]
    }
  ]
};
