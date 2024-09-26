import React, { useState, useEffect } from 'react';
import DvdForm from './components/DvdForm';
import DvdList from './components/DvdList';
import { getDvds, addDvd, deleteDvd } from './config';
import './App.css';


const App = () => {
  const [dvds, setDvds] = useState([]);

  // Carregar DVDs ao inicializar
  useEffect(() => {
    getDvds().then((response) => setDvds(response.data));
  }, []);

  // Adicionar novo DVD
  const handleAdd = (dvd) => {
    addDvd(dvd).then((response) => setDvds([...dvds, response.data]));
  };

  // Remover DVD
  const handleDelete = (id) => {
    deleteDvd(id).then(() => {
      setDvds(dvds.filter((dvd) => dvd.id !== id));
    });
  };

  return (
    <div>
      <h1>DVD's</h1>
      <DvdForm onAdd={handleAdd} />
      <DvdList dvds={dvds} onDelete={handleDelete} />
    </div>
  );
};

export default App;
