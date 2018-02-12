import React from 'react';
import PropTypes from 'prop-types';
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

export default IssueDescription;
