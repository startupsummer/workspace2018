import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import IssuesSelectors from './../../resources/issues/issues.selectors';
import './IssueDetailView.css';

function IssueDetailView(props) {
  return (
    <div className="issue-detail">
      <div className="issue-header">
        <span className="issue-header__title" > {props.issuesListItem.title} </span>
        <span className="issue-header__title--number"> #{props.issuesListItem.id} </span>
      </div>
      <div className="issue-content">
        <span className="issue-content__text" > {props.issuesListItem.body} </span>
      </div>
    </div>
  );
}

IssueDetailView.propTypes = {
  issuesListItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  issuesListItem: IssuesSelectors.getIssueById(state, props.id),
});

export default connect(mapStateToProps)(IssueDetailView);
