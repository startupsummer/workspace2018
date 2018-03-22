/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import issuesSvg from './issues.svg';
import './Pagehead.style.css';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import { connect } from 'react-redux';
import Repohead from '../Repohead/Repohead';

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

export default connect(
  state => ({
    openCount: issueSelectors.getOpenIssuesCount(state),
  }),
)(Pagehead);
