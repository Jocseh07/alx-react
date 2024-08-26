import React from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

const Footer = () => {
  const year = getFullYear();
  const copy = getFooterCopy(true);

  return (
    <footer className='App-footer'>
      <p>
        Copyright {year} - {copy}
      </p>
    </footer>
  );
};

export default Footer;
