import React from 'react';
import PropTypes from 'prop-types';
import './Pagehead.styles.css';
import Repohead from '../Repohead/Repohead';
import Reponav from '../Reponav/Reponav';

const Pagehead = props => (
  <div className="pagehead">
    <Repohead />
    <Reponav issuesCount={props.issuesCount} />
  </div>
);

Pagehead.propTypes = {
  issuesCount: PropTypes.number.isRequired,
};

export default Pagehead;
