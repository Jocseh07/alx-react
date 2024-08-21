import './App.css';
import logo from './logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  const year = getFullYear();
  const copy = getFooterCopy(true);
  return (
    <div className='container'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <footer className='App-footer'>
        <p>
          Copyright {year} - {copy}
        </p>
      </footer>
    </div>
  );
}

export default App;
