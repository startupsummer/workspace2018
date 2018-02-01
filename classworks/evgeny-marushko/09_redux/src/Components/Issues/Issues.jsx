/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from '../Issue/Issue';
import IssuesListingHeader from '../IssuesListingHeader/IssuesListingHeader';
import Subnav from '../Subnav/Subnav';
import './Issues.style.css';
import closedI from '../../svg/closed_i.svg';
import openI from '../../svg/open_i.svg';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';

class Issues extends Component {
  componentDidMount() {
    this.props.getIssuesFromGithub();
  }
  render() {
    return (
      <div className="container">
        <Subnav />
        <IssuesListingHeader />
        <div className="issues-listing__body">
        <ul className="issues">
            {this.props.list.map((issue) => {
              return <Issue
                id={issue.id}
                key={issue.id}
                title={issue.title}
                action={this.props.showOpen ? 'Close' : 'Open'}
                func={this.props.changeState}
                obj={issue}
                icon={this.props.showOpen ? openI : closedI}
              />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: issueSelectors.getIssuesByShowOpen(state),
    allIsues: issueSelectors.getIssues(state),
  }),
  dispatch => ({
    changeState: issueActions.changeIssueState(dispatch),
    getIssuesFromGithub: issueActions.getIssuesFromGithub(dispatch),
  }),
)(Issues);
