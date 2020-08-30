import React from "react";

const fieldGroups = {
  "basic": {
    "player": { type: "number" },
    "name": { type: "number" },
    "className": { type: "number" },
    "level": { type: "number" },
    "xp": { type: "number" }
  },
  
  "hp": {
    "hp": { type: "number" },
    "hpMax": { type: "number" },  
  },

  "attributes": {
    "str": { type: "number" },
    "int": { type: "number" },
    "wis": { type: "number" },
    "dex": { type: "number" },
    "con": { type: "number" },
    "cha": { type: "number" }
  },
  "saves": {
    "poison": { type: "number" },
    "wand": { type: "number" },
    "paralysis": { type: "number" },
    "breath": { type: "number" },
    "magic": { type: "number" },
  },
  
  "explore": {
    "search": { type: "number" },
    "openDoor": { type: "number" },
    "listen": { type: "number" },
  },

  "equipment": {
    "backpack": { type: "textarea" },
    "stash": { type: "textarea" }
  }  
}

const FieldGroup = ({
  fields, 
  char,
  onChangeField = () => {}
}) => {
  return Object.keys(fields).map((attr, i) => (
    <div key={i}>
      <label className="input-label">{attr}</label>
      <input
        defaultValue={char[attr]}
        onChange={e => onChangeField(attr, e.target.value)}
      />
    </div>
  ))
}

const CharacterSheet = ({ char, onChangeField }) => {
  return (
    Object.keys(fieldGroups).map((groupName, i) => (
      <div key={i}>
        <h2>{groupName}</h2>
        <FieldGroup
          fields={fieldGroups[groupName]}
          char={char}
          onChangeField={onChangeField}
        />
      </div>
    ))
  )
}

export default CharacterSheet;