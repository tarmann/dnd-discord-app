import React from "react";

import { fieldGroups, isThief, isCleric } from '../constants/char';

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FieldList = ({
  fields, 
  char,
  onChangeField = () => {}
}) => {
  return Object.keys(fields).map((attr, i) => {
    const fieldType = fields[attr].type === "textarea" ? "textarea" : "input";
    const rows = fields[attr].type === "textarea" ? 10 : null;

    return (
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={3}>
          {fields[attr].label || attr}
        </Form.Label>
        
        <Col sm={9}>
          <Form.Control
            as={fieldType}
            rows={rows}
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

const CharacterSheet = ({ char, onChangeField, onSave }) => {
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

          <Tab eventKey="journal" title="Journal">
            <FieldGroup name="Notes" fields={fieldGroups["other"]} {...fieldGroupProps} />
          </Tab>
        </Tabs>

        <div className="actions">
          <button onClick={onSave}>Save</button>
        </div>
      </Container>
    </div>
  )
}

export default CharacterSheet;