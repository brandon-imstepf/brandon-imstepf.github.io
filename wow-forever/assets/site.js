/*
  The left-hand rail. Each entry opens pages/<key>.html.
  Edit the text below and reload the page. Keep the quotes and commas.
  - "body" lists: a plain "string" is a paragraph; {"h": ...} heading; {"h4": ..., "note": ..., "text": ...} named item;
    {"list": [...]} bullets; {"table": [[header...], [row...]]}; {"link": ..., "page": "tinker"} link to a page.
  - Spellbook spells: name, cost (the grey line), text (the yellow tooltip line), icon (optional, a name from assets/icons.js).
  - Talents: "text" uses {1/2/3} for values that change with rank.
*/
window.SITE = {
  "rail": [
    {
      "key": "home",
      "name": "Compendium",
      "sub": "Design pillars and class list",
      "icon": "rail-home"
    },
    {
      "separator": true
    },
    {
      "key": "tinker",
      "name": "Tinker",
      "sub": "Survey class",
      "tip": "Mail · Heat",
      "icon": "rail-tinker"
    },
    {
      "key": "illusionist",
      "name": "Illusionist",
      "sub": "Survey class",
      "tip": "Cloth · Mana and Veil",
      "icon": "rail-illusionist"
    },
    {
      "key": "bard",
      "name": "Bard",
      "sub": "Survey class",
      "tip": "Leather · Mana and Verse",
      "icon": "rail-bard"
    },
    {
      "key": "necromancer",
      "name": "Necromancer",
      "sub": "Survey class, full design",
      "tip": "Cloth · Mana and Corpses",
      "icon": "rail-necromancer"
    },
    {
      "key": "warden",
      "name": "Warden",
      "sub": "Concept",
      "tip": "Mail · Vengeance",
      "icon": "rail-warden"
    },
    {
      "key": "bloodsworn",
      "name": "Bloodsworn",
      "sub": "Proposal",
      "tip": "Plate · Vitae",
      "icon": "rail-bloodsworn"
    },
    {
      "separator": true
    },
    {
      "key": "professions",
      "name": "Professions",
      "sub": "All crafts and gathering",
      "icon": "rail-professions"
    },
    {
      "key": "races",
      "name": "Races",
      "sub": "New playable races",
      "icon": "rail-races"
    },
    {
      "key": "create",
      "name": "Character Creation",
      "sub": "Try every race and class",
      "icon": "rail-create"
    }
  ]
};
