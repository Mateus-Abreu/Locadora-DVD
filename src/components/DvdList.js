import React from 'react';

const DvdList = ({ dvds, onDelete }) => {
  return (
    <ul>
      {dvds.map((dvd) => (
        <li key={dvd.id}>
          {dvd.nome} - {dvd.genero}
          <button onClick={() => onDelete(dvd.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default DvdList;
