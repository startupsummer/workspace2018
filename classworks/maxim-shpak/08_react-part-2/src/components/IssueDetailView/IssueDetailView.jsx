/* ----- Dependencies ----- */
import React from 'react';
import PropTypes from 'prop-types';

/* ----- Styles ----- */
import './IssueDetailView.css';

function IssueDetailView(props) {
  return (
    <div className="issue-detail-header">
      <span className="issue-detail-header__title" > {props.issuesListItem.title} </span>
      <span className="issue-detail-header__title--number"> #{props.issuesListItem.id} </span>
    </div>
  );
}

IssueDetailView.propTypes = {
  issuesListItem: PropTypes.object,
};

export default IssueDetailView;
