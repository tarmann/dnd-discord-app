import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllRecords, deleteRecord } from '../clients/jsonboxClient';

const CharList = ({ chars = [], onDelete = () => {} }) => {
  return chars.map(char => (
    <div>
      <Link to={`char/${char._id}`}>
        {char._collection}: {char.name} ({char.className} {char.level})
      </Link>
      <button onClick={() => onDelete(char._id)}> x </button>
    </div>
  ))
}

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