import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../search_field/SearchField';
import Button from '../button/Button';
import './subnav.style.css';

const SubnavDescription = ({
  changeFilterSearch,
  newIssue,
  description
}) => (
  <div className="container issues-listing issues-listing__subnav">
        <div className="subnav">
          {description}
        </div>
      </div>
);

SubnavDescription.propTypes = {
  newIssue: PropTypes.func.isRequired,
  changeFilterSearch: PropTypes.func.isRequired,
  description: PropTypes.func.isRequired,
};

export default SubnavDescription;
