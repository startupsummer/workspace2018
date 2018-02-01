/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Repohead from '../Repohead/Repohead';
import issuesSvg from '../../svg/issues.svg';
import './Pagehead.style.css';
import * as issueSelectors from '../../resources/issue/issue.selectors';

class Pagehead extends Component {
  render() {
    return (
      <div className="pagehead">
        <Repohead />
        <div className="container">
          <nav className="reponav">
            <a href="#" className="reponav-item selected">
              <img alt="" className="reponav-item-img" src={issuesSvg} />
              <span>Issues</span>
              <span className="counter">{this.props.openIssuesCount}</span>
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    openIssuesCount: issueSelectors.getOpenIssuesCount(state),
  }),
)(Pagehead);
