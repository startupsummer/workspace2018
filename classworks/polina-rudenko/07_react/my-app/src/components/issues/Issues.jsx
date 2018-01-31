import React from 'react';
import PropTypes from 'prop-types';
import './issues.styles.css';
import IssueItem from '../issue-item/IssueItem';


const Issues = props => (
  <ul className="issues">
    {props.issuesArr
      .filter(item => props.issuesStatus === item.state)
      .map(issue => (
        <IssueItem
          switchIssueStatus={props.switchIssueStatus}
          issue={issue}
          issuesStatus={props.issuesStatus}
        />
      ))}
  </ul>
);

Issues.propTypes = {
  issuesStatus: PropTypes.oneOf(['open', 'closed']).isRequired,
  switchIssueStatus: PropTypes.func.isRequired,
  issuesArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['open', 'closed']).isRequired,
  }).isRequired).isRequired,
};

export default Issues;
