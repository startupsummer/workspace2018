import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';

import './issues_description.style.css';


const IssueDescription = ({
  descriptionBody,
}) => (
  <div className="container">
    <p>{descriptionBody}</p>
  </div>
);

IssueDescription.propTypes = {
  descriptionBody: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  descriptionBody: issueSelectors.getDescriptionBody(state),
});

export default connect(mapStateToProps, null)(IssueDescription);
