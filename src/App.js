import React, {useState} from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente';
import Componente2 from './components/componente-2';
import Componente3 from './components/componente-3';

const App = () => {
  const varcomplement = "prieto";
  const [lastName, setLastName] = useState('');
  const changeLastName = (e) => {
    setLastName(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <section className="componentes">
          
          <Componente2 />
          <Componente3 text="hola natalia" complement={varcomplement}/> 
          <Componente3 text="hola sammy" complement={lastName}/>
          <MiComponente />
<input onChange={(e)=> changeLastName(e)}></input>

        </section>
      </header>
    </div>
  );
}

export default App;
