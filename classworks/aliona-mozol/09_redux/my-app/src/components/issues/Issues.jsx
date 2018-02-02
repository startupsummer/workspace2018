import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './issues.styles.css';
import Issue from '../issue/Issue';

const Issues = (props) => {
  const renderIssue = issue => (<li key={issue.id}><Issue issue={issue} /></li>);

  return (
    <ul className="issues">
      {props.issues.map(issue => renderIssue(issue))}
    </ul>
  );
};

Issues.propTypes = {
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({ issues: issueSelectors.getFilteredIssues(state) });
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Issues);
