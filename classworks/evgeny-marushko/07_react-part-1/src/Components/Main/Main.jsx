/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import Pagehead from '../Pagehead/Pagehead';
import Issues from '../Issues/Issues';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openIssues: this.props.issues.filter((issue) => { return issue.state === 'open'; }),
      closedIssues: this.props.issues.filter((issue) => { return issue.state === 'closed'; }),
    };
  }
  newIssue() {
    this.setState((prevState) => {
      prevState.openIssues.push({
        id: Math.floor(Math.random() * Math.floor(10000)),
        state: 'open',
        title: 'Best way to load a folder of static files?'
      });
      return { openIssues: prevState.openIssues };
    });
  }
  closeIssue(issue) {
    issue.state = 'closed';
    this.setState((prevState) => {
      prevState.closedIssues.push(issue);
      return {
          openIssues:prevState.openIssues.filter((openIssue) => {
            return openIssue.id !== issue.id;
          }),
          closedIssues: prevState.closedIssues
        };
    });
  }
  openIssue(issue) {
    issue.state = 'open';
    this.setState((prevState) => {
      prevState.openIssues.push(issue);
      return {
          closedIssues:prevState.closedIssues.filter((closedIssue) => {
            return closedIssue.id !== issue.id;
          }),
          openIssues: prevState.openIssues
        };
    });
  }
  render() {
    return (
      <main className="content">
        <Pagehead openCount={this.state.openIssues.length} />
        <Issues
          openIssues={this.state.openIssues}
          closedIssues={this.state.closedIssues}
          newIssue={this.newIssue.bind(this)}
          closeIssue={this.closeIssue}
          openIssue={this.openIssue}
          mainContext={this}
        />
      </main>
    );
  }
}

export default Main;
