import React from 'react';
import './App.css';
import logo from '../assets/holberton-logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';

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
        <div className='App-input'>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' />

          <label htmlFor='password'>Password:</label>
          <input type='password' id='password' />

          <button>OK</button>
        </div>
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
