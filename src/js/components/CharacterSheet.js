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
  onChangeField = () => {},
  onBlurField = () => {}
}) => {
  return Object.keys(fields).map((attr, i) => {
    const fieldType = fields[attr].type === "textarea" ? "textarea" : "input";
    const rows = fields[attr].type === "textarea" ? 10 : null;

    return (
      <Form.Group key={i} as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={3}>
          <strong className="attr-label">{fields[attr].label}</strong>
          <span className="attr-name">{attr}</span>
        </Form.Label>
        
        <Col sm={9}>
          <Form.Control
            as={fieldType}
            rows={rows}
            value={char[attr]}
            onChange={e => onChangeField(attr, e.target.value)}
            onBlur={e => onBlurField(attr, e)}
          />
        </Col>
      </Form.Group>
    )
  })
}

const FieldGroup = ({ name, fields, char, onChangeField, onBlurField }) => (
  <div className="field-group">
    <h4 className="field-group--title">{name}</h4>
    
    <FieldList
      fields={fields}
      char={char}
      onChangeField={onChangeField}
      onBlurField={onBlurField}
    />
  </div>
)

const CharacterSheet = ({ char, isSaving, onChangeField, onBlurField, onSave }) => {
  const fieldGroupProps = {
    char,
    onChangeField,
    onBlurField
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {char.name} ({char.className} {char.level})
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          {isSaving
            ? <Navbar.Text>saving...</Navbar.Text>
            : null}
        </Navbar.Collapse>
      </Navbar>

      <Container className="charater-sheet">
        <Tabs variant="pills">
          <Tab eventKey="char" title="Base">
            <FieldGroup name="Character Info" fields={fieldGroups["basic"]} {...fieldGroupProps} />
          </Tab>
          
          <Tab eventKey="stats" title="Stats">
            <FieldGroup name="Base" fields={fieldGroups["hp"]} {...fieldGroupProps} />
            <FieldGroup name="Attributes" fields={fieldGroups["attributes"]} {...fieldGroupProps} />
            <FieldGroup name="Saving Throws" fields={fieldGroups["saves"]} {...fieldGroupProps} />
          </Tab>

          <Tab eventKey="skills" title="Skills">
            <FieldGroup name="Abilities" fields={fieldGroups["abilities"]} {...fieldGroupProps} />
            <FieldGroup name="Skills" fields={fieldGroups["thiefSkills"]} {...fieldGroupProps} />
          </Tab>

          <Tab eventKey="magic" title="Magic">
            <FieldGroup name="Spells" fields={fieldGroups["spells"]} {...fieldGroupProps} />
            
            {isCleric(char) &&
              <FieldGroup name="Turn Undead" fields={fieldGroups["turnUndead"]} {...fieldGroupProps} />}
          </Tab>

          <Tab eventKey="inventory" title="Inventory">
            <FieldGroup name="Items carried" fields={fieldGroups["equipment"]} {...fieldGroupProps} />
            <FieldGroup name="Money" fields={fieldGroups["money"]} {...fieldGroupProps} />
          </Tab>

          <Tab eventKey="journal" title="Journal">
            <FieldGroup name="Notes" fields={fieldGroups["other"]} {...fieldGroupProps} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}

export default CharacterSheet;
