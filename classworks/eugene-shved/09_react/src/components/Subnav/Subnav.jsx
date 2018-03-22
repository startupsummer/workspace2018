import React from 'react';
import searchIcon from './searchImage.svg';
import './Subnav.style.css';

const Subnav = (props) => {
  return (
    <div className="issues-listing__subnav">
      <div className="subnav">
        <form className="subnav_search">
          <input className="subnav__search-input" type="text" placeholder="Search" />
          <img alt="" className="subnav__search-icon" src={searchIcon} />
        </form>
        <button className="btn btn-primary" type="button" onClick={props.createIssue}>New issue</button>
      </div>
    </div>
  );
};

export default Subnav;
