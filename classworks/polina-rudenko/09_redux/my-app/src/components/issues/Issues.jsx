import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './issues.styles.css';
import IssueItem from '../issue-item/IssueItem';


const Issues = props => (
  <ul className="issues">
    {props.issuesArr
      .filter(item => props.issuesStatus === item.state)
      .map(issue => (
        <IssueItem
          issue={issue}
        />
      ))}
  </ul>
);

Issues.propTypes = {
  issuesStatus: PropTypes.oneOf(['open', 'closed']).isRequired,
  issuesArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['open', 'closed']).isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = state => ({
  issuesArr: issueSelectors.getIssues(state),
  issuesStatus: issueSelectors.getissuesStatus(state),
});

export default connect(
  mapStateToProps,
)(Issues);
