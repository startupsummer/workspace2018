/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, jsx-a11y/alt-text, jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import repoLogo from '../../svg/repo_logo.svg';
import './Repohead.style.css';

class Repohead extends Component {
  render() {
    return (
      <div className="container repohead-container">
        <h1 className="pagehead-title">
          <img className="pagehead-title-img" src={repoLogo} />
          <a href="#">startupsummer</a>
          <span>/</span>
          <b>
            <a href="#">react</a>
          </b>
        </h1>
      </div>
    );
  }
}

export default Repohead;
