import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import Menu from './componentes/menu';
import Imagen from './componentes/imagen'
import Cuerpo from './componentes/cuerpo'
import Pie from './componentes/pie'
import Seccion from './componentes/seccion'

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <header className="App-header">
        <Imagen/>
        <Cuerpo></Cuerpo>
      </header>
      <Seccion/>
        <Pie></Pie>        
    </div>
  );
}

export default App;
