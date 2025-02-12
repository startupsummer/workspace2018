import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Reponav.styles.css';
import * as issuesSelector from '../../resources/Issue/Issue.selectors';

const Reponav = props => (
  <div className="container reponav__container">
    <nav className="reponav">
      <Link to="/" className="reponav__item selected">
        <svg height="16" version="1.1" viewBox="0 0 14 16" width="14">
          <path
            fillRule="evenodd"
            d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
          />
        </svg>
        <span>Issues</span>
        <span className="reponav__counter">{props.getOpenIssuesCount}</span>
      </Link>
    </nav>
  </div>
);

Reponav.propTypes = {
  getOpenIssuesCount: PropTypes.number.isRequired,
};

export default connect(store => ({
  getOpenIssuesCount: issuesSelector.getOpenIssuesCount(store),
}))(Reponav);
