import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends Component {

  render() {
    return (
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
  }
}

export default IssuesListing;
