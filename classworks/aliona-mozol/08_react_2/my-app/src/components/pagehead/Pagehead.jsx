import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';
import './pagehead.styles.css';
import PageheadTitle from '../pagehead-title/PageheadTitle';
import Reponav from '../reponav/Reponav';

const Pagehead = ({ counterOpenIssues }) => (
  <div className="pagehead">
    <div className="container repohead-container">
      <PageheadTitle />
    </div>
    <div className="container">
      <Reponav counterOpenIssues={counterOpenIssues} />
    </div>
  </div>
);

Pagehead.propTypes = {
  counterOpenIssues: PropTypes.number.isRequired,
};

export default Pagehead;
