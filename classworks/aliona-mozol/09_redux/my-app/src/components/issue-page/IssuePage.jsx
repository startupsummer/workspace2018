import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './issuePage.styles.css';

const IssuePage = (props) => {
  const { id } = props;
  const targetIssue = props.issues.find(item => item.id === +id) || {};

  return (
    <div className="issue-page">
      <div className="issue-page__header">
        <h1 className="issue-page__title">{targetIssue.title}</h1>
      </div>
      <div className="issue-page__body">
        <p className="issue-page__description">{targetIssue.body}</p>
      </div>
    </div>
  );
};

IssuePage.propTypes = {
  id: PropTypes.string.isRequired,
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
)(IssuePage);
