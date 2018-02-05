/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import IssuesList from '../IssuesList/IssuesList';
import IssuesListingHeader from '../IssuesListingHeader/IssuesListingHeader';
import Subnav from '../Subnav/Subnav';
import IssuePage from '../IssuePage/IssuePage';
import './Issues.style.css';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';

class Issues extends Component {
  componentDidMount() {
    this.props.getIssuesFromGithub();
  }
  viewStateToOpen() {
    if (this.props.viewState === 'closed') {
      this.props.changeViewState('open');
    }
  }
  viewStateToClosed() {
    if (this.props.viewState === 'open') {
      this.props.changeViewState('closed');
    }
  }
  render() {
    return (
      <div className="container">
        <Route exact path="/">
          <React.Fragment>
            <Subnav createIssue={this.props.createIssue}/>
            <IssuesListingHeader
              openCount={this.props.openCount}
              closedCount={this.props.closedCount}
              changeState={this.props.changeViewState}
              viewStateToOpen={this.viewStateToOpen.bind(this)}
              viewStateToClosed={this.viewStateToClosed.bind(this)}
            />
          </React.Fragment>
        </Route>
        <div className="issues-listing__body">
          <Route path="/issue/:id" render={props => <IssuePage list={this.props.fullList} id={props.match.params.id} />} />
          <Route
            exact
            path="/"
            render={() =>
              <IssuesList
                changeState={this.props.changeIssueState}
                viewState={this.props.viewState}
                list={this.props.viewStateList}
              />}
          />
        </div>
      </div>
    );
  }
}

Issues.propTypes = {
  getIssuesFromGithub: PropTypes.func.isRequired,
  changeViewState: PropTypes.func.isRequired,
  changeIssueState: PropTypes.func.isRequired,
  createIssue: PropTypes.func.isRequired,
  openCount: PropTypes.number.isRequired,
  closedCount: PropTypes.number.isRequired,
  viewState: PropTypes.string.isRequired,
  fullList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.strung,
  })).isRequired,
  viewStateList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.strung,
  })).isRequired,
};

export default withRouter(connect(
  state => ({
    openCount: issueSelectors.getOpenIssuesCount(state),
    closedCount: issueSelectors.getClosedIssuesCount(state),
    fullList: issueSelectors.getIssues(state),
    viewStateList: issueSelectors.getIssuesByViewState(state),
    viewState: issueSelectors.getViewState(state),
  }),
  dispatch => ({
    getIssuesFromGithub: issueActions.getIssuesFromGithub(dispatch),
    changeViewState: issueActions.changeViewState(dispatch),
    changeIssueState: issueActions.changeIssueState(dispatch),
    createIssue: issueActions.createIssue(dispatch),
  }),
)(Issues));
