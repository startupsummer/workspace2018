import React from 'react';
import './IssuesStates.styles.css';
import BtnLink from '../BtnLink/BtnLink';
import Issues from '../Issues/Issues';

import { connect } from 'react-redux';
import * as issuesActions from '../../resources/issues/issues.actions.js';
import * as issuesSelectors from '../../resources/issues/issues.selectors.js';


class IssuesStates extends React.Component {
  changeTab = tabType => () => {
    this.props.changeTab(tabType);
  }

  render() {
    return (
      <div className="issues-listing__states">
        <BtnLink isSelected={this.props.activeTab === 'open'} clickHandler={this.changeTab('open')} >
          <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
          </svg>
          {this.props.openIssues} Open
        </BtnLink>

        <BtnLink isSelected={this.props.activeTab === 'closed'} clickHandler={this.changeTab('closed')}>
          <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
          {this.props.closedIssues} Closed
        </BtnLink>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  activeTab: issuesSelectors.getActiveTab(state),
  openIssues: issuesSelectors.getOpenIssues(state),
  closedIssues: issuesSelectors.getClosedIssues(state),
});

const mapDispatchToProps = {
  changeTab: issuesActions.changeTab,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(IssuesStates);
