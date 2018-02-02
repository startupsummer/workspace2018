/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import repoLogo from './repo_logo.svg';
import './Repohead.style.css';

const Repohead = () => {
  return (
    <div className="container repohead-container">
      <h1 className="pagehead-title">
        <img alt="" className="pagehead-title-img" src={repoLogo} />
        <a href="#">startupsummer</a>
        <span>/</span>
        <b>
          <a href="#">react</a>
        </b>
      </h1>
    </div>
  );
};

export default Repohead;