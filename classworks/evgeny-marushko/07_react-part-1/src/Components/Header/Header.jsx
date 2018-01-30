import React, { Component } from 'react';
import logo from '../../svg/logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <a className="header-logo" href="https://github.com">
            <img alt="" src={logo} />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;