import React, { Component } from 'react';
import './issues.styles.css';
import Issue from '../issue/Issue';

class Issues extends Component {

  render() {
    const issues = this.props.issues.filter(item => this.props.status === item.state);
    return (
      <ul className="issues">
        {issues.map(issue => <li key={issue.id}><Issue id={issue.id} state={issue.state} title={issue.title} switchIssueState={this.props.switchIssueState} /></li>)}
      </ul>
    );
  }
}

export default Issues;
