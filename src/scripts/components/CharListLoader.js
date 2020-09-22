import React, { useState, useEffect } from "react";

import { getAllRecords, deleteRecord } from '../clients/jsonboxClient';

import CharList from './CharList';

const CharacterSheetLoader = () => {
  const [chars, setChars] = useState([]);

  const fetchRecords = () => {
    getAllRecords().then(result => {
      const chars = result.data.filter(i => i.type !== "preferences");
      setChars(chars);
    });
  }

  useEffect(() => {
    fetchRecords();
  }, [])

  const handleDelete = (recordId) => {
    deleteRecord(recordId).then(() => fetchRecords())
  }

  return (
    <div>
      {chars && chars.length
        ? <CharList chars={chars} onDelete={handleDelete} />
        : 'loading'}
    </div>
  )
}

export default CharacterSheetLoader;