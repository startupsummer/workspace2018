import React from "react"
import { connect } from "react-redux"
import "./Issues.styles.css"
import "../btn/Btn.styles.css"
import * as issuesSelector from "../../resources/selectors.js"
import * as issuesActions from "../../resources/actions.jsx"
import Issue from "../issue/Issue.jsx"

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

export default connect(
    (store, ownProps) => (issuesSelector.getCurrentStateIssues(store, ownProps)),
    dispatch => ({ toggleIssueState: issue => (dispatch(issuesActions.ToggleIssueState(issue))) }),
)(Issues);
