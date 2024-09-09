import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ logIn }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    enableSubmit: false,
  });

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(state.email, state.password);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setState((prevState) => ({
      ...prevState,
      email,
      enableSubmit: email !== '' && prevState.password !== '',
    }));
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setState((prevState) => ({
      ...prevState,
      password,
      enableSubmit: prevState.email !== '' && password !== '',
    }));
  };

  return (
    <>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyParagraph)}>
          Login to access the full dashboard
        </p>
        <form className={css(styles.AppInput)} onSubmit={handleLoginSubmit}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            className={css(styles.AppInputChild)}
            value={state.email}
            onChange={handleChangeEmail}
          />

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            className={css(styles.AppInputChild)}
            value={state.password}
            onChange={handleChangePassword}
          />

          <input
            type='submit'
            value='OK'
            className={css(styles.AppInputChild)}
            disabled={!state.enableSubmit}
          />
        </form>
      </div>
    </>
  );
};

const styles = StyleSheet.create({
  AppBody: {
    '::before': {
      content: '',
      display: 'block',
      height: '5px',
      backgroundColor: 'var(--primary-color)',
    },
    flex: 1,
  },
  AppBodyParagraph: {
    margin: '20px 100px',
  },
  AppInput: {
    marginLeft: '100px',
  },
  AppInputChild: {
    marginRight: '20px',
  },
});

export default Login;
