import React from 'react';
import PropTypes from 'prop-types';
import './subnav_description.style.css';

const SubnavDescription = ({
  descriptionTitle,
}) => (
  <div className="container">
    <div className="subnav subnav--description">
      {descriptionTitle}
    </div>
  </div>
);

SubnavDescription.propTypes = {
  descriptionTitle: PropTypes.string.isRequired,
};

export default SubnavDescription;
