import React from 'react';
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

export default IssuesListingHeader;
