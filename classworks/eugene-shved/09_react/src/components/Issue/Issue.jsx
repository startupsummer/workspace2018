/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './Issue.style.css';
import closedIssueIcon from './closed_i.svg';
import openIssueIcon from './open_i.svg';

const Issue = props => {
  const changeState = () => {
    props.changeState(props.issue);
  };
  return (
    <div className="issue">
      <div>
        <img alt="" className="octicon" src={props.action === 'Close' ? openIssueIcon : closedIssueIcon} />
        <span className="issue__title">
          <Link to={`/issue/${props.issue.id}`}>
            {props.issue.title}
          </Link>
        </span>
      </div>
      <button className="btn" onClick={changeState}>{props.action} issue</button>
    </div>
  );
};

export default Issue;
