import React from 'react';
import './App.css';
import Menu from './componentes/menu';
import Imagen from './componentes/imagen'
import Cuerpo from './componentes/cuerpo'
import Pie from './componentes/pie'

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <header className="App-header">
        <Imagen/>
        <Cuerpo></Cuerpo>
      </header>
        <Pie></Pie>
    </div>
  );
}

export default App;
