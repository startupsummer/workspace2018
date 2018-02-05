/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Repohead from '../Repohead/Repohead';
import issuesSvg from '../../svg/issues.svg';

class Pagehead extends Component {
  render() {
    return (
      <div className="pagehead">
        <Repohead />
        <div className="container">
          <nav className="reponav">
            <a href="#" className="reponav-item selected">
              <img alt="" className="reponav-item-img" src={issuesSvg} />
              <span>Issues</span>
              <span className="counter">{this.props.openCount}</span>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Pagehead;
