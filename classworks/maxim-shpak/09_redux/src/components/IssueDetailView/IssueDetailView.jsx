import React from 'react';
import PropTypes from 'prop-types';

import './IssueDetailView.css';

function IssueDetailView(props) {
  return (
    <div className="issue-detail">
      <div className="issue-header">
        <span className="issue-header__title" > {props.item.title} </span>
        <span className="issue-header__title--number"> #{props.item.id} </span>
      </div>
      <div className="issue-content">
        <span className="issue-content__text" > {props.item.body} </span>
      </div>
    </div>
  );
}

IssueDetailView.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default IssueDetailView;
