import React, { Component } from 'react';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends Component {

  state = {
    issuesStatus: 'open',
    issues: this.props.data,
    allIssues: this.props.data,
    newOpenIssue: {
      title: 'New open issue',
      state: 'open',
    },
    lastId: 242209484
  }

  addNewIssue = () => {
    this.setState({
      issues: [...this.state.issues, {...this.state.newOpenIssue, id: this.state.lastId}],
      allIssues: [...this.state.issues, {...this.state.newOpenIssue, id: this.state.lastId}],
      lastId: ++this.state.lastId,
     });
     this.props.countAddNewOpenIssue();
  };

  onClickOpen = () => {
    this.setState({ issuesStatus: 'open' })
  };

  onClickClosed = () => {
    this.setState({ issuesStatus: 'closed' })
  };

  switchIssueState = (id) => () => {
    let itemState = null;
    const newIssues = this.state.issues.map(item => {
      if(item.id === id) {
        itemState = item.state;
      }
      item.state = item.id === id ? (item.state === 'open' ? 'closed' : 'open') : item.state;
      return item;
    });
    this.setState({
      issues: newIssues,
      allIssues: newIssues
    });
    itemState === 'open' ? this.props.countSwitchOpenToClosed() : this.props.countSwitchClosedToOpen();
  };

  searchIssues = (e) => {
    this.setState(e.target.value === "" ?
    { issues: this.state.allIssues } :
    { issues: this.state.allIssues.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))});
  };

  render() {
    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <Subnav addNewIssue={this.addNewIssue} searchIssues={this.searchIssues} />
        </div>
        <div className="issues-listing__header">
          <States onClickOpen={this.onClickOpen} onClickClosed={this.onClickClosed} counterOpenIssues={this.props.counterOpenIssues} counterClosedIssues={this.props.counterClosedIssues} />
        </div>
        <div className="issues-listing__body">
          <Issues status={this.state.issuesStatus} issues={this.state.issues} switchIssueState={this.switchIssueState} />
        </div>
      </div>
    );
  }
}

export default IssuesListing;
