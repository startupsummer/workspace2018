/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Issue.style.css';

const Issue = props => {
  const changeState = () => {
    props.changeState(props.issue);
  };
  return (
    <React.Fragment>
      <div>
        <img alt="" className="octicon" src={props.icon} />
        <span className="issue__title">
          <Link to={`/issue/${props.issue.id}`}>
            {props.issue.title}
          </Link>
        </span>
      </div>
      <button className="btn" onClick={changeState}>{props.action} issue</button>
    </React.Fragment>
  );
};

Issue.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.strung,
  }).isRequired,
  action: PropTypes.string.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default Issue;
