import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../base/base.styles.css';
import './Pagehead.styles.css';
import '../reponav/Reponav.styles.css';
import PageheadTitle from '../pagehead-title/pagehead-title';
import Reponav from '../reponav/Reponav';
import * as issuesSelector from '../../resources/selectors';

function Pagehead({ openIssues }) {
  return (
    <div className="pagehead" >
      <div className="container repohead-container">
        <PageheadTitle />
      </div>
      <div className="container">
        <Reponav openIssues={openIssues} />
      </div>
    </div>
  );
}

Pagehead.propTypes = {
  openIssues: PropTypes.number.isRequired,
};

export default connect(state => (issuesSelector.getOpenIssues(state)))(Pagehead);
