/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Repohead from '../Repohead/Repohead';
import issuesSvg from './issues.svg';
import './Pagehead.style.css';
import * as issueSelectors from '../../resources/issue/issue.selectors';

const Pagehead = (props) => {
  return (
    <div className="pagehead">
      <Repohead />
      <div className="container">
        <nav className="reponav">
          <a href="#" className="reponav-item selected">
            <img alt="" className="reponav-item-img" src={issuesSvg} />
            <span>Issues</span>
            <span className="counter">{props.openCount}</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

Pagehead.propTypes = {
  openCount: PropTypes.number.isRequired,
};

export default connect(
  state => ({
    openCount: issueSelectors.getOpenIssuesCount(state),
  }),
)(Pagehead);
