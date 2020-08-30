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
  
  "explore": {
    "search":   { type: "number", locked: true },
    "openDoor": { type: "number", locked: true },
    "listen":   { type: "number", locked: true }
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