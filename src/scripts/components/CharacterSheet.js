import React from "react";

import { fieldGroups } from '../constants/char';

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

const CharacterSheet = ({ char, onChangeField }) => {
  const fieldGroupsEl = Object.keys(fieldGroups).map((groupName, i) => (
    <div className="field-group" key={i}>
      <h2 className="field-group--title">{groupName}</h2>
      
      <FieldList
        fields={fieldGroups[groupName]}
        char={char}
        onChangeField={onChangeField}
      />
    </div>
  ))

  return (
    <div className="charater-sheet">
      {fieldGroupsEl}
    </div>
  )
}

export default CharacterSheet;