import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';

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

const mapStateToProps = state => ({
  descriptionTitle: issueSelectors.getDescriptionTitle(state),
});

export default connect(mapStateToProps, null)(SubnavDescription);
