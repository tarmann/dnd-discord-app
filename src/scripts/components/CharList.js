import React from "react";
import { groupBy } from 'lodash';
import { Link } from "react-router-dom";

const CharList = ({ chars = [], onDelete = () => {} }) => {
  return chars.map(char => (
    <div>
      <Link to={`char/${char._id}`}>
        {char.name} ({char.className} {char.level})
      </Link>
      
      <button onClick={() => onDelete(char._id)}> x </button>
    </div>
  ))
}

const CharListGroups = ({
  chars = [],
  onDelete = {}
}) => {
  const charGroups = groupBy(chars, '_collection');

  return Object.keys(charGroups).map(groupId => (
    <div>
      <h3>{groupId}</h3>
      <CharList chars={charGroups[groupId]} onDelete={onDelete} />
    </div>
  ))
}

export default CharListGroups;