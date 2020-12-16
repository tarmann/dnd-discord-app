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
    "image":       { label: "Image URL:", type: "text" },
    "player":      { label: "Player", type: "text" },
    "campaign":    { label: "Campaign", type: "text" },
    "name":        { label: "Name", type: "text" },
    "alignment":   { label: "Alignment",  type: "text" },
    "className":   { label: "Class", type: "number" },
    "level":       { label: "Level", type: "number", locked: true },
    "xp":          { label: "XP", type: "number" },
    "nextLevelXP": { label: "Next Level XP", type: "number" }
  },
  
  "hp": {
    "ac":        { label: "AC", type: "number", locked: false },
    "armour":    { label: "Armour", type: "text", locked: false },
    "thac0":     { label: "THAC0", type: "number", locked: true },
    "ab":        { label: "Attack Bonus", type: "number", locked: true },
    "hp":        { label: "HP", type: "number" },
    "hpMax":     { label: "HP (Max)", type: "number", locked: true },  
  },

  "attributes": {
    "str":      { label: "Strength", type: "number", locked: true },
    "int":      { label: "Intelligence", type: "number", locked: true },
    "wis":      { label: "Wisdom", type: "number", locked: true },
    "dex":      { label: "Dexterity", type: "number", locked: true },
    "con":      { label: "Constitution", type: "number", locked: true },
    "cha":      { label: "Charisma", type: "number", locked: true }
  },

  "saves": {
    "poison": { type: "number", locked: true },
    "wand": { type: "number", locked: true },
    "paralysis": { type: "number", locked: true },
    "breath": { type: "number", locked: true },
    "magic": { type: "number", locked: true },
  },

  "abilities": {
    "abilities":   { label: "Abilities", type: "textarea", locked: true },
  },

  "skills": {
    "surprise":   { label: "Surprise", type: "number", locked: true },
    "search":   { label: "Search", type: "number", locked: true },
    "openDoors": { label: "Open door", type: "number", locked: true },
    "listen":   { label: "Listen", type: "number", locked: true }
  },

  "thiefSkills": { 
    "architecture":  { type: "number" },
    "bushcraft":     { type: "number" },
    "climb":         { type: "number" },
    "languages":     { type: "number" },
    "openDoors":     { type: "number" },
    "search":        { type: "number" },
    "sleightOfHand": { label: "Sleight of Hand", type: "number" },
    "stealth":       { type: "number" },
    "sneakAttack":   { type: "number" },
    "tinker":        { type: "number" },
  },

  "ragerSkills": { 
    "tracking":  { type: "number" },
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
    "weapons":  { label: "Weapons", type: "textarea", expanded: true },
    "carried":  { label: "Carried", type: "textarea", expanded: true },
    "stash": { label: "Stashed", type: "textarea", expanded: true }
  },

  "other": {
    "notes": { label: "Other notes", type: "textarea", expanded: true },
    "XP": { label: "XP", type: "textarea", expanded: true },
    "macros": { label: "Macros", type: "textarea", expanded: true },
  }  
}
