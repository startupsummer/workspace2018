import React from 'react';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';

const IssuesListing = () => (
  <div className="issues-listing">
    <div className="issues-listing__subnav">
      <Subnav />
    </div>
    <div className="issues-listing__header">
      <States />
    </div>
    <div className="issues-listing__body">
      <Issues />
    </div>
  </div>
);

export default IssuesListing;
