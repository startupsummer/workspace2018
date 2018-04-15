/* eslint-disable linebreak-style */
import React from 'react';
import logo from './logo.svg';
import './Header.style.css';

const Header = () => {
  return (
    <div className="container-head">
      <header className="header">
        <div className="container">
          <a className="header-logo" href="https://github.com">
            <img alt="" src={logo} />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
