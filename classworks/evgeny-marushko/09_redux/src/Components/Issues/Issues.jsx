/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import IssuesList from '../IssuesList/IssuesList';
import IssuesListingHeader from '../IssuesListingHeader/IssuesListingHeader';
import Subnav from '../Subnav/Subnav';
import IssuePage from '../IssuePage/IssuePage';
import './Issues.style.css';
import * as issueActions from '../../resources/issue/issue.actions';

class Issues extends Component {
  componentDidMount() {
    this.props.getIssuesFromGithub();
  }
  render() {
    return (
      <div className="container">
        <Route exact path="/" render={() => <Subnav />} />
        <Route exact path="/" render={() => <IssuesListingHeader />} />
        <div className="issues-listing__body">
          <Route path="/issue/:id" render={(props) => <IssuePage id={props.match.params.id} />} />
          <Route exact path="/" render={() => <IssuesList />} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({}),
  dispatch => ({
    changeState: issueActions.changeIssueState(dispatch),
    getIssuesFromGithub: issueActions.getIssuesFromGithub(dispatch),
  }),
)(Issues));
