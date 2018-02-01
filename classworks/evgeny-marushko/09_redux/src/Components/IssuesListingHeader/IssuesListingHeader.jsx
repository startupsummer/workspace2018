/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import closed from '../../svg/closed.svg';
import open from '../../svg/open.svg';
import './IssuesListingHeader.style.css';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';

class IssuesListingHeader extends Component {
  render() {
    return (
      <div className="issues-listing__header">
        <div className="issues-listing__states">
          <button className="btn-link" type="button" onClick={this.props.showOpen}>
            <img alt="" className="octicon" src={open} />
            {this.props.openCount} Open
          </button>
          <button className="btn-link" type="button" onClick={this.props.showClosed}>
            <img alt="" className="octicon" src={closed} />
            {this.props.closedCount} Closed
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    openCount: issueSelectors.getOpenIssuesCount(state),
    closedCount: issueSelectors.getClosedIssuesCount(state),
  }),
  dispatch => ({
    showOpen: issueActions.showOpen(dispatch),
    showClosed: issueActions.showClosed(dispatch),
  }),
)(IssuesListingHeader);
