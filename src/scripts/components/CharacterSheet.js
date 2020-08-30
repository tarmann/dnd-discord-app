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

  return (
    <div className="charater-sheet">
      <div class="charater-sheet--header">
        {char.name} - {char.className} {char.level}
      </div>

      <Tabs variant="pills">
        <Tab eventKey="char" title="Char">
          <FieldGroup name="basic" fields={fieldGroups["basic"]} char={char} onChangeField={onChangeField} />
        </Tab>
        
        <Tab eventKey="stats" title="Stats">
        <FieldGroup name="hp" fields={fieldGroups["hp"]} char={char} onChangeField={onChangeField} />
          <FieldGroup name="attributes" fields={fieldGroups["attributes"]} char={char} onChangeField={onChangeField} />
          <FieldGroup name="saves" fields={fieldGroups["saves"]} char={char} onChangeField={onChangeField} />
          <FieldGroup name="explore" fields={fieldGroups["explore"]} char={char} onChangeField={onChangeField} />
        </Tab>
        
        <Tab eventKey="stuff" title="Stuff">
          <FieldGroup name="carried" fields={fieldGroups["equipment"]} char={char} onChangeField={onChangeField} />
          <FieldGroup name="money" fields={fieldGroups["money"]} char={char} onChangeField={onChangeField} />
        </Tab>
        
        <Tab eventKey="notes" title="Notes">
          <FieldGroup name="other" fields={fieldGroups["other"]} char={char} onChangeField={onChangeField} />
        </Tab>
      </Tabs>
    </div>
  )
}

export default CharacterSheet;