import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Issues.styles.css';
import '../btn/Btn.styles.css';
import * as issuesSelector from '../../resources/selectors';
import * as issuesActions from '../../resources/actions';
import Issue from '../issue/Issue';

function Issues({ issues, toggleIssueState }) {
  return (
    <ul className="issues">
      { issues.map(issue => (
        <Issue
          issue={issue}
          key={issue.id}
          id={issue.id}
          state={issue.state}
          title={issue.title}
          toggleIssueState={toggleIssueState}
        />))}
    </ul>
  );
}

Issues.propTypes = {
  toggleIssueState: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default connect(
  (store, ownProps) => (issuesSelector.getCurrentStateIssues(store, ownProps)),
  dispatch => ({ toggleIssueState: issue => (dispatch(issuesActions.ToggleIssueState(issue))) }),
)(Issues);
