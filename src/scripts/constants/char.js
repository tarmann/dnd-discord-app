export const fieldGroups = {
  "basic": {
    "player": { type: "number" },
    "name": { type: "number" },
    "alignment": { type: "text" },
    "className": { type: "number" },
    "level": { type: "number", locked: true },
    "xp": { type: "number" }
  },
  
  "hp": {
    "ac": { type: "number", locked: false },
    "thac0": { type: "number", locked: true },
    "hp": { type: "number" },
    "hpMax": { type: "number", locked: true },  
  },

  "attributes": {
    "str": { type: "number", locked: true },
    "int": { type: "number", locked: true },
    "wis": { type: "number", locked: true },
    "dex": { type: "number", locked: true },
    "con": { type: "number", locked: true },
    "cha": { type: "number", locked: true }
  },

  "saves": {
    "poison": { type: "number", locked: true },
    "wand": { type: "number", locked: true },
    "paralysis": { type: "number", locked: true },
    "breath": { type: "number", locked: true },
    "magic": { type: "number", locked: true },
  },

  "skills": {
    "search":   { type: "number", locked: true },
    "openDoor": { type: "number", locked: true },
    "listen":   { type: "number", locked: true }
  },

  "thiefSkills": {
    "openLock": { type: "number" },
    "findTraps": { type: "number" },
    "removeTrap": { type: "number" },
    "climbWalls": { type: "number" },
    "moveSilently": { type: "number" },
    "hideInShadows": { type: "number" },
    "pickPocket": { type: "number" },
    "hearNoise": { type: "number" }
  },

  "spells": {
    "spells": { label: "Spells", type: "textarea", expanded: true }
  },

  "turnUndead": {
    "skeletons": { label: "Skeletons", type: "number" },
    "zombies": { label: "Zombies", type: "number" },
    "ghouls": { label: "Ghouls", type: "number" },
    "wights": { label: "Wights", type: "number" },
    "wraiths": { label: "Wights", type: "number" }
  },

  "money": {
    "platinum": "",
    "gold": "",
    "electrum": "",
    "silver": "",
    "copper": ""
  },

  "equipment": {
    "carried":  {
      label: "Equipment carried",
      type: "textarea",
      expanded: true
    },
    "stash": {
      label: "Equipment stashed",
      type: "textarea",
      expanded: true
    }
  },

  "other": {
    "notes": {
      label: "Other notes",
      type: "textarea",
      expanded: true
    }
  }  
}