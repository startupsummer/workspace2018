import React from 'react';
import PropTypes from 'prop-types';
import './issues.styles.css';
import Issue from '../issue/Issue';

const Issues = (props) => {
  const issues = props.issues.filter(item => props.status === item.state);

  const renderIssue = switchIssueState => issue => (
    <li key={issue.id}>
      <Issue
        id={issue.id}
        state={issue.state}
        title={issue.title}
        switchIssueState={switchIssueState}
      />
    </li>
  );

  return (
    <ul className="issues">
      {issues.map(renderIssue(props.switchIssueState))}
    </ul>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  status: PropTypes.string.isRequired,
  switchIssueState: PropTypes.func.isRequired,
};

export default Issues;
