import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllRecords } from '../clients/jsonboxClient';

const CharList = ({ chars = [] }) => {
  return chars.map(char => (
    <div>
      <Link to={`char/${char._id}`}>{char.name} ({char.className} {char.level})</Link>
    </div>
  ))
}

const CharacterSheetLoader = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getAllRecords().then(result => setChars(result.data))
  })

  return (
    <div>
      {chars && chars.length
        ? <CharList chars={chars} />
        : 'loading'}
    </div>
  )
}

export default CharacterSheetLoader;