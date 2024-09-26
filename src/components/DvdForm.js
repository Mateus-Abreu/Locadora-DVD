import React, { useState } from 'react';

const DvdForm = ({ onAdd }) => {
  const [nome, setnome] = useState('');
  const [genero, setgenero] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ nome, genero });
    setnome('');
    setgenero('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>genero:</label>
        <input
          type="text"
          value={genero}
          onChange={(e) => setgenero(e.target.value)}
          required
        />
      </div>
      <button type="submit">Adicione DVD</button>
    </form>
  );
};

export default DvdForm;
