import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
