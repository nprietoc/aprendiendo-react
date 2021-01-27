import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import MiComponente from './components/MiComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <section className="componentes">
          
          <MiComponente />

        </section>
      </header>
    </div>
  );
}

export default App;
