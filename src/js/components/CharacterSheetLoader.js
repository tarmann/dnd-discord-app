import React, { useState, useEffect } from "react";

import { updateRecord, getRecord } from '../clients/jsonboxClient';

import CharacterSheet from './CharacterSheet';

const CharacterSheetLoader = ({ charId }) => {
  const [char, setChar] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  
  useEffect(() => {
    getRecord(charId).then(result => setChar(result.data))
  }, [])

  const handleChangeField = (attr,value) => {
    const updatedChar = { ...char, [attr]: value };
    setChar(updatedChar);
  }

  const handleSave = () => {
    setIsSaving(true);
    updateRecord(charId, char).then(() => setIsSaving(false))
  }

  return (
    <div>
      {char
        ? <CharacterSheet 
            char={char}
            isSaving={isSaving}
            onChangeField={handleChangeField}
            onBlurField={handleSave}
          />
        : 'loading'}
    </div>
  )
}

export default CharacterSheetLoader;
