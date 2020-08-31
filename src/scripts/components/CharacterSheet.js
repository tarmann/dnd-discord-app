import React from "react";

import { fieldGroups } from '../constants/char';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const Field = ({ locked = false, type, ...otherProps }) => {
  const fieldProps = {
    ...otherProps,
    className: "input-field",
    // disabled: locked
  }

  switch(type){
    case "textarea":
      return <textarea {...fieldProps} />;
    
      default: 
      return <input {...fieldProps} />;
  }
}

const FieldList = ({
  fields, 
  char,
  onChangeField = () => {}
}) => {
  return Object.keys(fields).map((attr, i) => {
    const isExpanded = fields[attr].expanded ? "is-expanded" : ""; 
    const classNames = `input-group ${isExpanded}`;

    return (
      <div className={classNames} key={i}>
        <label className="input-label">{fields[attr].label || attr}</label>
        
        <Field
          locked={fields[attr].locked}
          type={fields[attr].type}
          defaultValue={char[attr]}
          onChange={e => onChangeField(attr, e.target.value)}
        />
      </div>
    )
  })
}

const FieldGroup = ({ name, fields, char, onChangeField }) => (
  <div className="field-group">
    <h2 className="field-group--title">{name}</h2>
    
    <FieldList
      fields={fields}
      char={char}
      onChangeField={onChangeField}
    />
  </div>
)

const CharacterSheet = ({ char, onChangeField }) => {
  const props = {
    char,
    onChangeField
  }

  return (
    <div className="charater-sheet">
      <div class="charater-sheet--header">
        {char.name} - {char.className} {char.level}
      </div>

      <Tabs variant="pills">
        <Tab eventKey="char" title="Char">
          <FieldGroup name="Character Info" fields={fieldGroups["basic"]} {...props} />
        </Tab>
        
        <Tab eventKey="stats" title="Stats">
          <FieldGroup name="Base" fields={fieldGroups["hp"]} {...props} />
          <FieldGroup name="Attributes" fields={fieldGroups["attributes"]} {...props} />
          <FieldGroup name="Saving Throws" fields={fieldGroups["saves"]} {...props} />
        </Tab>

        <Tab eventKey="skills" title="Skills">
          <FieldGroup name="Basic Skills" fields={fieldGroups["skills"]} {...props} />
          <FieldGroup name="Thief Skills" fields={fieldGroups["thiefSkills"]} {...props} />
        </Tab>

        <Tab eventKey="spells" title="Spells">
          <FieldGroup name="Spells" fields={fieldGroups["spells"]} {...props} />
          <FieldGroup name="Turn Undead" fields={fieldGroups["turnUndead"]} {...props} />
        </Tab>

        <Tab eventKey="items" title="Items">
          <FieldGroup name="Items carried" fields={fieldGroups["equipment"]} {...props} />
          <FieldGroup name="Money" fields={fieldGroups["money"]} {...props} />
        </Tab>

        <Tab eventKey="notes" title="Notes">
          <FieldGroup name="other" fields={fieldGroups["other"]} {...props} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default CharacterSheet;