import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './IssuesPage.styles.css';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

class IssuesPage extends React.Component {
  render() {
    const issue = this.props.issues.find(item => item.id.toString() === this.props.match.params.id);

    if (!issue) return "вот ты лох";

    return (
      <div className="container issues-page">
        <h1> You opened {issue.title} issue! </h1>
        <h2> Description: {issue.body} </h2>
      </div>
    );
  }
}

IssuesPage.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
  issues: issuesSelectors.getIssues(state),
});

export default connect(
  mapStateToProps,
  null,
)(IssuesPage);
