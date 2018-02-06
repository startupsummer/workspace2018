import React from 'react';
import PropTypes from 'prop-types';
import closed from './closed.svg';
import open from './open.svg';
import './IssuesListingHeader.style.css';

const IssuesListingHeader = props => {
  return (
    <div className="issues-listing__header">
      <div className="issues-listing__states">
        <button className="btn-link" type="button" onClick={props.viewStateToOpen}>
          <img alt="" className="octicon" src={open} />
          {props.openCount} Open
        </button>
        <button className="btn-link" type="button" onClick={props.viewStateToClosed}>
          <img alt="" className="octicon" src={closed} />
          {props.closedCount} Closed
        </button>
      </div>
    </div>
  );
};

IssuesListingHeader.propTypes = {
  openCount: PropTypes.number.isRequired,
  closedCount: PropTypes.number.isRequired,
  viewStateToOpen: PropTypes.func.isRequired,
  viewStateToClosed: PropTypes.func.isRequired,
};

export default IssuesListingHeader;
