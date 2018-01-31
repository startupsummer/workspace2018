import React from 'react';
import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import IssuesList from '../issues_list/IssuesList';
import './main.style.css';

class Main extends React.PureComponent {
  render() {
    return (
      <div className="content">
        <PageHead issues={this.props.issues} />
        <Subnav newIssue={this.props.newIssue} changeFilterSearch={this.props.changeFilterSearch}/>
        <IssuesList changeFilter={this.props.changeFilter} changeIssue={this.props.changeIssue} filter={this.props.filter} issues={this.props.issues} filterSearch={this.props.filterSearch} />
      </div>
    );
  }
}

export default Main;
