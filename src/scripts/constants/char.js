export const classes = {
  CLERIC: 'Cleric',
  FIGHTER: 'Fighter',
  THIEF: 'Thief',
  MAGIC_USER: 'Magic-User',
  DWARF: 'Dwarf',
  ELF: 'ELF',
  HALFLING: 'ELF'
}

export const isThief = char => char.className === classes.THIEF;

export const isCleric = char => char.className === classes.CLERIC;

export const fieldGroups = {
  "basic": {
    "player":    { label: "Player", type: "number" },
    "name":      { label: "Name", type: "number" },
    "alignment": { label: "Alignment",  type: "text" },
    "className": { label: "Class", type: "number" },
    "level":     { label: "Level", type: "number", locked: true },
    "xp":        { label: "XP", type: "number" }
  },
  
  "hp": {
    "ac":        { type: "number", locked: false },
    "thac0":     { type: "number", locked: true },
    "hp":        { type: "number" },
    "hpMax":     { type: "number", locked: true },  
  },

  "attributes": {
    "str":      { type: "number", locked: true },
    "int":      { type: "number", locked: true },
    "wis":      { type: "number", locked: true },
    "dex":      { type: "number", locked: true },
    "con":      { type: "number", locked: true },
    "cha":      { type: "number", locked: true }
  },

  "saves": {
    "poison": { type: "number", locked: true },
    "wand": { type: "number", locked: true },
    "paralysis": { type: "number", locked: true },
    "breath": { type: "number", locked: true },
    "magic": { type: "number", locked: true },
  },

  "skills": {
    "search":   { label: "Search", type: "number", locked: true },
    "openDoor": { label: "Open door", type: "number", locked: true },
    "listen":   { label: "Listen", type: "number", locked: true }
  },

  "thiefSkills": {
    "openLock":       { type: "number" },
    "findTraps":      { type: "number" },
    "removeTrap":     { type: "number" },
    "climbWalls":     { type: "number" },
    "moveSilently":   { type: "number" },
    "hideInShadows":  { type: "number" },
    "pickPocket":     { type: "number" },
    "hearNoise":      { type: "number" }
  },

  "spells": {
    "spells": { label: "Spells", type: "textarea", expanded: true }
  },

  "turnUndead": {
    "skeletons":  { label: "Skeletons", type: "number" },
    "zombies":    { label: "Zombies", type: "number" },
    "ghouls":     { label: "Ghouls", type: "number" },
    "wights":     { label: "Wights", type: "number" },
    "wraiths":    { label: "Wights", type: "number" }
  },

  "money": {
    "platinum": { label: "Platinum (PP)" },
    "gold": { label: "Gold (GP)" },
    "electrum": { label: "Electrum (EP)" },
    "silver": { label: "Silver (SP)" },
    "copper": { label: "Copper (CP)" }
  },

  "equipment": {
    "carried":  {
      label: "Carried",
      type: "textarea",
      expanded: true
    },
    "stash": {
      label: "Stashed",
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