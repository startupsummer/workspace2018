import React from 'react';
import PropTypes from 'prop-types';
import './subnav_description.style.css';

const SubnavDescription = ({
  description,
}) => (
  <div className="container issues-listing issues-listing__subnav">
    <div className="subnav">
      {description}
    </div>
  </div>
);

SubnavDescription.propTypes = {
  description: PropTypes.string.isRequired,
};

export default SubnavDescription;
