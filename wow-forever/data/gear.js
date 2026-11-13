/*
  Gear: items that attach to a character, and the starting outfit for each class.

  Slots and the attachment point each one uses (name the Blender empties exactly like this):
    "mainhand"   Attach_HandR        (the character's right hand)
    "offhand"    Attach_HandL
    "head"       Attach_Head         (centre of the head)
    "shoulders"  Attach_ShoulderR    (the left shoulder gets a mirrored copy, on Attach_ShoulderL)
    "back"       Attach_Back         (between the shoulder blades, on the surface of the back)
    "waist"      Attach_Waist        (centre of the hips)

  In each race model: add an Empty for each point, parent it to the bone it should follow
  (Ctrl+P > Bone), and leave it unrotated, so it lines up with the world in the rest pose.
  Scale an empty to make everything worn there bigger or smaller on that race.

  Each gear .glb: one item, modelled the way it sits on a character standing in the rest pose,
  1 unit = 1 metre (a Human is about 1.8 m), with its origin at the attachment point.
  A staff, for example, has its origin where the hand grips it.

  An item:
    "id"     short name used in links            "name"  shown in the gear menu
    "slot"   one of the slots above
    "file"   the .glb, e.g. "../models/gear/bone_staff.glb"
    "files"  optional per race or sub-race versions: { "Ogre": "../models/gear/bone_staff_ogre.glb" }
    "fit"    optional per race or sub-race adjustments: { "Gnome": { "scale": 0.8, "move": [0, 0.02, 0], "turn": [0, 0, 10] } }
             move is in metres, turn in degrees (x, y, z)
    "shape"  a built-in placeholder instead of a file: staff, sword, shield, tome, helm, pauldron, quiver, pouch
    "color"  outline colour of a placeholder

  "outfits" lists the items each class starts with (by id).
*/
window.GEAR = {
  "items": [
    { "id": "staff",    "name": "Placeholder Staff",    "slot": "mainhand",  "shape": "staff" },
    { "id": "sword",    "name": "Placeholder Sword",    "slot": "mainhand",  "shape": "sword" },
    { "id": "shield",   "name": "Placeholder Shield",   "slot": "offhand",   "shape": "shield" },
    { "id": "tome",     "name": "Placeholder Tome",     "slot": "offhand",   "shape": "tome" },
    { "id": "helm",     "name": "Placeholder Helm",     "slot": "head",      "shape": "helm" },
    { "id": "pauldron", "name": "Placeholder Pauldrons", "slot": "shoulders", "shape": "pauldron" },
    { "id": "quiver",   "name": "Placeholder Quiver",   "slot": "back",      "shape": "quiver" },
    { "id": "pouch",    "name": "Placeholder Pouch",    "slot": "waist",     "shape": "pouch" }
  ],
  "outfits": {
    "warrior":     ["sword", "shield", "helm", "pauldron"],
    "paladin":     ["sword", "shield", "pauldron"],
    "hunter":      ["sword", "quiver", "pouch"],
    "rogue":       ["sword", "pouch"],
    "priest":      ["staff"],
    "shaman":      ["staff", "pouch"],
    "mage":        ["staff", "tome"],
    "warlock":     ["staff", "tome"],
    "druid":       ["staff"],
    "tinker":      ["pouch", "pauldron"],
    "illusionist": ["staff", "tome"],
    "bard":        ["tome", "pouch"],
    "necromancer": ["staff", "pauldron"],
    "warden":      ["sword", "pauldron"],
    "bloodsworn":  ["sword", "helm", "pauldron"]
  }
};
