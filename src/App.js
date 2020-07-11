import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import Menu from './componentes/menu';
import Copy from './componentes/imagen'
import Cuerpo from './componentes/cuerpo'
import Pie from './componentes/pie'
import Seccion from './componentes/seccion'
import Portafolio from './componentes/tarjeta'

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Cuerpo></Cuerpo>
      <Portafolio></Portafolio>
      <Seccion/>
      <Pie></Pie> 
      <Copy/>       
    </div>
  );
}

export default App;
