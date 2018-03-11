import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Issue-description.styles.css';
import * as issuesSelector from '../../resources/selectors';

function IssueDiscription({ arrItem }) {
  return (
    <div>
      <h1 className="Issue-description__title">
        {arrItem.title}
      </h1>
      <p>
        {arrItem.body}
      </p>
    </div>
  );
}

IssueDiscription.propTypes = {
  arrItem: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
  }).isRequired,
};

export default connect((store, ownProps) => (
  issuesSelector.getIssueDescription(store, ownProps)))(IssueDiscription);
