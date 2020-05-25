import React from 'react';
import logo from './foto.jpg';
import './App.css';
import Menu from './componentes/menu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Pagina en Construcción
        </p>
        <a
          className="App-link"
          href="https://github.com/elvingonzalezb"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
