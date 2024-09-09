import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={logo} className={css(styles.AppLogo)} alt='logo' />
      <h1>School dashboard</h1>
    </header>
  );
};

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
  },
  'AppHeader h1': {
    color: '#E0344B',
  },

  AppLogo: {
    height: '300px',
  },
});

export default Header;
