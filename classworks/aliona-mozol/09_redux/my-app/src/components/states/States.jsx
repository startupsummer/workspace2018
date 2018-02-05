import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './states.styles.css';

const States = (props) => {
  const btnOpenClass = cn({
    'btn-link': true,
    'btn-link--selected': props.status === 'open',
  });
  const btnClosedClass = cn({
    'btn-link': true,
    'btn-link--selected': props.status === 'closed',
  });
  const onClickOpen = () => props.setIssueStatusToShow('open');
  const onClickClosed = () => props.setIssueStatusToShow('closed');

  return (
    <div className="states">
      <button className={btnOpenClass} type="button" onClick={onClickOpen}>
        <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
          <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
        </svg>
        {props.counterOpenIssues} Open
      </button>
      <button className={btnClosedClass} type="button" onClick={onClickClosed}>
        <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
        {props.counterClosedIssues} Closed
      </button>
    </div>
  );
};

States.propTypes = {
  setIssueStatusToShow: PropTypes.func.isRequired,
  counterOpenIssues: PropTypes.number.isRequired,
  counterClosedIssues: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  counterOpenIssues: issueSelectors.getCounterOpenIssues(state),
  counterClosedIssues: issueSelectors.getCounterClosedIssues(state),
  status: issueSelectors.getStatus(state),
});
const mapDispatchToProps = { setIssueStatusToShow: issueActions.setIssueStatusToShow };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(States);
