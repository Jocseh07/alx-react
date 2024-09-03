import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <>
      <div className={css(styles.AppBody)}>
        <p className={css(styles.AppBodyParagraph)}>
          Login to access the full dashboard
        </p>
        <div className={css(styles.AppInput)}>
          <label htmlFor='email'>Email:</label>
          <br />
          <input
            type='email'
            id='email'
            className={css(styles.AppInputChild)}
          />

          <label htmlFor='password'>Password:</label>
          <br />
          <input
            type='password'
            id='password'
            className={css(styles.AppInputChild)}
          />

          <br />
          <button className={css(styles.AppInputChild)}>OK</button>
        </div>
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
  '@media (max-width: 900px)': {
    AppInput: {
      marginLeft: '0',
    },
    AppInputChild: {
      marginRight: '0',
      marginBottom: '10px',
    },
  },
});

export default Login;
