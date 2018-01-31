import React from 'react';
import PropTypes from 'prop-types';
import './states.styles.css';

const States = props => (
  <div className="issues-listing__states">
    <button
      onClick={props.onClickOpen}
      className="btn-link btn-link--selected"
      type="button"
    >
      <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
        <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
      </svg>
      {props.countOpen} Open
    </button>
    <button
      onClick={props.onClickClose}
      className="btn-link"
      type="button"
    >
      <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
      {props.countClose} Closed
    </button>
  </div>
);

States.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  onClickOpen: PropTypes.func.isRequired,
  countOpen: PropTypes.func.isRequired,
  countClose: PropTypes.func.isRequired,
};

export default States;
