import React from 'react';
import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import IssuesList from '../issues_list/IssuesList';

class Main extends React.PureComponent {
  render() {
    return (
      <div className="content">
        <PageHead issues={this.props.issues} />
        <Subnav newIssue={this.props.newIssue} />
        <IssuesList changeFilter={this.props.changeFilter} filter={this.props.filter} issues={this.props.issues} />
      </div>
    );
  }
}

export default Main;
