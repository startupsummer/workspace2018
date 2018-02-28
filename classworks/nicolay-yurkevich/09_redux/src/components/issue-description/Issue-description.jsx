import React from "react"
import { connect } from "react-redux"
import "./Issue-description.styles.css"
import * as issuesSelector from "../../resources/selectors.js"

function IssueDiscription({ arrItem }) {
  return (
    <div>
      <h1 className="Issue-description__title">
        {arrItem.title}
      </h1>
      <p>
        {arrItem.body}
      </p>
    </div>
  );
}
export default connect((store, ownProps) => (issuesSelector.getIssueDescription(store, ownProps)))(IssueDiscription);
