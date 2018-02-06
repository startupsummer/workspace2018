/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import Pagehead from '../Pagehead/Pagehead';
import Issues from '../Issues/Issues';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openIssues: [],
      closedIssues: [],
    };
    this.getIssues();
  }
  getIssues() {
    fetch('https://api.github.com/repos/nrt3/07/issues?number=2&access_token=1023e3703d0ce88ec5e50d279115a576f72343b3&state=all')
      .then(response => response.json())
      .then(data => this.setState({ openIssues: data.filter(elem => elem.state !== 'closed'),
        closedIssues: data.filter(elem => elem.state === 'closed') }));
  }
  closeIssue(issue) {
    fetch(`https://api.github.com/repos/nrt3/07/issues/${issue.number}?access_token=1023e3703d0ce88ec5e50d279115a576f72343b3`,
      { method: 'PATCH', body: JSON.stringify({state: "closed" })})
      .then(response => response.json())
      .then(data => this.getIssues());
  }
  openIssue(issue) {
    fetch(`https://api.github.com/repos/nrt3/07/issues/${issue.number}?access_token=1023e3703d0ce88ec5e50d279115a576f72343b3`,
      { method: 'PATCH', body: JSON.stringify({state: "open" })})
        .then(response => response.json())
        .then(data => this.getIssues());
  }
  newIssue() {
    fetch('https://api.github.com/repos/nrt3/07/issues?access_token=1023e3703d0ce88ec5e50d279115a576f72343b3',
      { method: 'POST', body: JSON.stringify({title: "new_issue", body: "paralect" })})
    .then(response => response.json())
    .then(data => this.getIssues());
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
