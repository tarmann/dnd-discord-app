import React from "react";

import { fieldGroups, isThief, isCleric } from '../constants/char';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

    const as = fields[attr].type === "textarea" ? "textarea" : "input";

    return (
      // <div className={classNames} key={i}>
      //   <label className="input-label">{fields[attr].label || attr}</label>
        
      //   <Field
      //     locked={fields[attr].locked}
      //     type={fields[attr].type}
      //     defaultValue={char[attr]}
      //     onChange={e => onChangeField(attr, e.target.value)}
      //   />
      // </div>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          {fields[attr].label || attr}
        </Form.Label>
        
        <Col sm={10}>
          <Form.Control
            as={as}
            value={char[attr]}
            onChange={e => onChangeField(attr, e.target.value)}
          />
        </Col>
      </Form.Group>
    )
  })
}

const FieldGroup = ({ name, fields, char, onChangeField }) => (
  <div className="field-group">
    <h4 className="field-group--title">{name}</h4>
    
    <FieldList
      fields={fields}
      char={char}
      onChangeField={onChangeField}
    />
  </div>
)

const CharacterSheet = ({ char, onChangeField }) => {
  const fieldGroupProps = {
    char,
    onChangeField
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">{char.name} ({char.className} {char.level})</Navbar.Brand>
      </Navbar>

      <Container className="charater-sheet">
        <Tabs variant="pills">
          <Tab eventKey="char" title="Char">
            <FieldGroup name="Character Info" fields={fieldGroups["basic"]} {...fieldGroupProps} />
          </Tab>
          
          <Tab eventKey="stats" title="Stats">
            <FieldGroup name="Base" fields={fieldGroups["hp"]} {...fieldGroupProps} />
            <FieldGroup name="Attributes" fields={fieldGroups["attributes"]} {...fieldGroupProps} />
            <FieldGroup name="Saving Throws" fields={fieldGroups["saves"]} {...fieldGroupProps} />
          </Tab>

          <Tab eventKey="skills" title="Skills">
            <FieldGroup name="Basic Skills" fields={fieldGroups["skills"]} {...fieldGroupProps} />
            {isThief(char) &&
              <FieldGroup name="Thief Skills" fields={fieldGroups["thiefSkills"]} {...fieldGroupProps} />}
          </Tab>

          <Tab eventKey="spells" title="Spells">
            <FieldGroup name="Spells" fields={fieldGroups["spells"]} {...fieldGroupProps} />
            {isCleric(char) &&
              <FieldGroup name="Turn Undead" fields={fieldGroups["turnUndead"]} {...fieldGroupProps} />}
          </Tab>

          <Tab eventKey="items" title="Items">
            <FieldGroup name="Items carried" fields={fieldGroups["equipment"]} {...fieldGroupProps} />
            <FieldGroup name="Money" fields={fieldGroups["money"]} {...fieldGroupProps} />
          </Tab>

          <Tab eventKey="notes" title="Notes">
            <FieldGroup name="other" fields={fieldGroups["other"]} {...fieldGroupProps} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default CharacterSheet;