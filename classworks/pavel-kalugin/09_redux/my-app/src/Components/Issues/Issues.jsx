import React from 'react';
import './Issues.styles.css';
import IssuesItem from '../IssuesItem/IssuesItem';
import IssuesPage from '../IssuesPage/IssuesPage';

import { connect } from 'react-redux';
import * as issuesActions from '../../resources/issues/issues.actions.js';
import * as issuesSelectors from '../../resources/issues/issues.selectors.js';

class Issues extends React.Component {


  render() {
    const stateFilter = item => this.props.activeTab === item.state;
    const searchFilter = item => item.title.toUpperCase().includes(this.props.searchQuery.toUpperCase());

    return (
      <ul className="issues">
        {this.props.issues
          .filter(stateFilter)
          .filter(searchFilter)
          .map(item => <IssuesItem id={item.id}/>)}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) =>  ({
  issues: issuesSelectors.getIssues(state),
  activeTab: issuesSelectors.getActiveTab(state),
  searchQuery: issuesSelectors.getSearchQuery(state),
});

export default connect(
    mapStateToProps,
    null,
)(Issues);
