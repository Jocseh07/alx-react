import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { UserContext } from '../context/UserContext'; // Adjust the import path as necessary

const Footer = () => {
  const year = getFullYear();
  const copy = getFooterCopy(true);
  const { isLoggedIn } = useContext(UserContext);

  return (
    <footer className='App-footer'>
      <p>
        Copyright {year} - {copy}
      </p>
      {isLoggedIn && (
        <p>
          <a href='/contact'>Contact us</a>
        </p>
      )}
    </footer>
  );
};

export default Footer;
