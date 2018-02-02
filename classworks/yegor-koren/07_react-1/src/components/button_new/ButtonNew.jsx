import React from 'react';
import PropTypes from 'prop-types';
import './button_new.style.css';

const ButtonNew = ({ newIssue }) => (
  <button className="btn btn-primary" type="button" onClick={newIssue}>
    New issue
  </button>
);

ButtonNew.propTypes = {
  newIssue: PropTypes.func.isRequired,
};

export default ButtonNew;
