import React from 'react';
import './IssuesListing.styles.css';
import Subnav from '../../Components/Subnav/Subnav';
import Issues from '../../Components/Issues/Issues';
import IssuesStates from '../../Components/IssuesStates/IssuesStates';

class IssuesListing extends React.Component {
  render() {
    return (
      <div className="container issues-listing">
        <div className="issues-listing__subnav">
          <Subnav/>
        </div>

        <div className="issues-listing__header">
          <IssuesStates/>
        </div>

        <div className="issues-listing__body">
          <Issues/>
        </div>
      </div>
    );
  }
}

export default IssuesListing;
