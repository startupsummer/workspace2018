import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Issues.styles.css';
import IssuesItem from '../../Components/IssuesItem/IssuesItem';
import IssuesPage from '../../Components/IssuesPage/IssuesPage';


class Issues extends React.Component {
  renderItem = item => {
    this.props.createIssuesPage(item.id);
    //<Route path='/${item.id}' component={IssuesPage} />
    return (
      <IssuesItem
        state={item.state}
        id={item.id}
        title={item.title}
        body={item.body}
        reopenIssue={this.props.reopenIssue}
        closeIssue={this.props.closeIssue} />
    );
  }

  render() {
    return (
      <ul className="issues">
        {this.props.itemsArray.filter(item => (this.props.activeTab === item.state ? true : false)).filter(this.props.searchFilter).map(this.renderItem)}
      </ul>
    );
  }
}

export default Issues;
