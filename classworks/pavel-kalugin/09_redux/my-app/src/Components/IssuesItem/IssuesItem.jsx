import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Btn from '../Btn/Btn';

import * as issuesActions from '../../resources/issues/issues.actions';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

class IssuesItem extends React.Component {
  closeIssue = issue => () =>
    this.props.patchIssue(issue, 'closed');

  reopenIssue = issue => () =>
    this.props.patchIssue(issue, 'open');

  render() {
    const issue = this.props.issues.find(issue => issue.id === this.props.id);

    const status = cn({
      issues__status: true,
      'issues__status--open': issue.state === 'open',
      'issues__status--closed': issue.state === 'closed',
    });

    return (
      <li className="issues__item">
        <div className={status}>
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" /></svg>
        </div>
        <div className="issues__title">
          <Link to={`/list/${issue.id}`} className="issues__link">
            {issue.title}
          </Link>
        </div>
        <Btn class="issue__close" clickHandler={issue.state === 'open' ? this.closeIssue(issue) : this.reopenIssue(issue)}>
          {issue.state === 'open' ? 'Close' : 'Reopen'} issue
        </Btn>
      </li>
    );
  }
}

IssuesItem.propTypes = {
  patchIssue: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    //id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  activeTab: issuesSelectors.getActiveTab(state),
  issues: issuesSelectors.getIssues(state),
});

const mapDispatchToProps = {
  patchIssue: issuesActions.patchIssue,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuesItem);
