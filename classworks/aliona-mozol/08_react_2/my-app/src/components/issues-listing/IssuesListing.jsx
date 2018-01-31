import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    counterOpenIssues: PropTypes.number.isRequired,
    counterClosedIssues: PropTypes.number.isRequired,
    countSwitchClosedToOpen: PropTypes.func.isRequired,
    countSwitchOpenToClosed: PropTypes.func.isRequired,
    countAddNewOpenIssue: PropTypes.func.isRequired,
  };

  state = {
    issuesStatus: 'open',
    issues: this.props.data,
    newOpenIssue: {
      title: 'New open issue',
      state: 'open',
    },
    searchQuery: '',
  }

  onClickOpen = () => {
    this.setState({ issuesStatus: 'open' });
  };

  onClickClosed = () => {
    this.setState({ issuesStatus: 'closed' });
  };

  addNewIssue = () => {
    const id = Math.round(Math.random() * 1000000000);
    this.setState({
      issues: [...this.state.issues, { ...this.state.newOpenIssue, id }],
    });
    this.props.countAddNewOpenIssue();
  };

  switchIssueState = id => () => {
    const targetIssue = this.state.issues.find(item => item.id === id);
    const newState = targetIssue.state === 'open' ? 'closed' : 'open';
    const newIssues = this.state.issues
      .map(item => (item.id === id ? { ...targetIssue, state: newState } : item));
    this.setState({ issues: newIssues });
    if (newState === 'closed') {
      this.props.countSwitchOpenToClosed();
    } else {
      this.props.countSwitchClosedToOpen();
    }
  };

  searchIssues = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  render() {
    const issues = this.state.issues
      .filter(item => item.title.toLowerCase()
        .includes(this.state.searchQuery));

    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <Subnav addNewIssue={this.addNewIssue} searchIssues={this.searchIssues} />
        </div>
        <div className="issues-listing__header">
          <States
            onClickOpen={this.onClickOpen}
            onClickClosed={this.onClickClosed}
            counterOpenIssues={this.props.counterOpenIssues}
            counterClosedIssues={this.props.counterClosedIssues}
          />
        </div>
        <div className="issues-listing__body">
          <Issues
            status={this.state.issuesStatus}
            issues={issues}
            switchIssueState={this.switchIssueState}
          />
        </div>
      </div>
    );
  }
}

export default IssuesListing;
