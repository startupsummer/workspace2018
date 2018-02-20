import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import CloseIssue from '../CloseIssue/CloseIssue';
import './Issue.css';
import { connect } from 'react-redux';
import * as issueSelectors from '../../resources/issues/issues.selectors';
import * as issueActions from '../../resources/issues/issues.actions';

const Issue = (props) => {
  const iconStyle = props.condition === 'open'
    ? 'issues__status issues__status--open'
    : 'issues__status issues__status--closed';
  return (
    <div className="issues-listing__body">
      <ul className="issues">
        {props.items
          .filter(item => item.state === props.condition)
          .map(item => (
          <li key={item.id} className="issues__item">
            <div className={iconStyle}>
              <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
            </div>
            <div className="issues__title">
              <Link to={`/${item.id}`} className="issues__link" onClick={props.onIssueClick} title={item.title}>{item.title}</Link>
            </div>
            <CloseIssue issue={item} id={item.id} />
          </li>))}
      </ul>
    </div>
  );
};

Issue.propTypes = {
  issuePage: PropTypes.func.isRequired,
  closeIssue: PropTypes.func.isRequired,
  condition: PropTypes.string,
  items: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    items: issueSelectors.getIssues(state),
    condition: issueSelectors.getViewState(state)
    }),
    dispatch => ({
      onIssueClick: issueActions.onIssueClick(dispatch)
    })
)(Issue);

