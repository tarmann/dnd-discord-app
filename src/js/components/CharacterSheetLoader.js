import React, { useState, useEffect } from "react";

import { updateRecord, getRecord } from '../clients/jsonboxClient';

import CharacterSheet from './CharacterSheet';

const CharacterSheetLoader = ({ charId }) => {
  const [char, setChar] = useState(null);
  
  useEffect(() => {
    getRecord(charId)
      .then(result => setChar(result.data))
  }, [])

  const handleChangeField = (attr,value) => {
    const updatedChar = { ...char, [attr]: value };
    setChar(updatedChar);
  }

  const handleSave = () => {
    updateRecord(charId, char)
  }

  return (
    <div>
      {char
        ? <CharacterSheet char={char} onChangeField={handleChangeField} onSave={handleSave} />
        : 'loading'}
    </div>
  )
}

export default CharacterSheetLoader;
