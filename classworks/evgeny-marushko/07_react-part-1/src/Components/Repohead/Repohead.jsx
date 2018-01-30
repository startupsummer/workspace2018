import React, { Component } from 'react';
import repoLogo from '../../svg/repo_logo.svg';

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