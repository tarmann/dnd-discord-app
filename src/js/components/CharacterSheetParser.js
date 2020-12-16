import React, { useState, useEffect } from "react";

import YAML from 'yaml';

const FieldGroup = ({ group }) => {
  return (
    <div>
      <h3>{group.label}</h3>
      <div>
        {group.fields
          ? Object.keys(group.fields).map(i => <div>{i}</div>)
          : null
        }
      </div>
    </div>
  )
}


const Section = ({ section }) => {
  return (
    <div>
      <h2>{section.label}</h2>
      <div>
        {section.groups
          ? Object.keys(section.groups).map(i => <FieldGroup group={section.groups[i]} />)
          : null
        }
      </div>
    </div>
  )
}

const CharacterSheet = ({ template }) => {
  return (
    <div>
      {Object.keys(template).map(i => <Section section={template[i]} />)}
    </div>
  )
}

const CharacterSheetParser = () => {
  const [template, setTemplate] = useState({});
  
  const handleChange = ({ target: { value }}) => {
    setTemplate(YAML.parse(value));
  }

  return (
    <div style={{ padding: "20px" }}>
      <textarea style={{ width: "100%", height: "600px" }} onChange={e => handleChange(e)} />
      <CharacterSheet template={template} />
    </div>
  )
}

export default CharacterSheetParser;
