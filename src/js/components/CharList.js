import React from "react";
import { groupBy } from 'lodash';
import { Link } from "react-router-dom";

const CharList = ({ chars = [], onDelete = () => {} }) => {
  const rows = chars.map(char => (
    <tr>
      <td>
        {char.player}
      </td>
      <td>
        <Link to={`char/${char._id}`}>
          {char.name}
        </Link> <small>{char.className} {char.level}</small>
      </td>
      <td>
        {char.ac}
      </td>      
      <td>
        {char.hp} / {char.hpMax}
      </td>      
      <td>
        <button onClick={() => onDelete(char._id)}> x </button>
      </td>
    </tr>
  ))

  return (
    <table border="1" width="600px">
      <tr>
        <th style={{width: '100px'}}>Player</th>
        <th>Name</th>
        <th style={{width: '70px'}}>AC</th>
        <th style={{width: '70px'}}>HP</th>
        <th style={{width: '70px'}}>Actions</th>
      </tr>
      {rows}
    </table>
  )
}

const CharListGroups = ({
  chars = [],
  onDelete = {}
}) => {
  const charGroups = groupBy(chars, 'campaign');

  return Object.keys(charGroups).map(id => (
    <div style={{ padding: "20px" }}>
      <h3>{id}</h3>
      <CharList chars={charGroups[id]} onDelete={onDelete} />
    </div>
  ));
}

export default CharListGroups;
