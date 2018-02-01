import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Issues.styles.css';
import IssuesItem from '../../Components/IssuesItem/IssuesItem';
import IssuesPage from '../../Components/IssuesPage/IssuesPage';

import { connect } from 'react-redux';
import * as issuesActions from '../../resources/issues/issues.actions.js';
import * as issuesSelectors from '../../resources/issues/issues.selectors.js';



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

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Issues);
