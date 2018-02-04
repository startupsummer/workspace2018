import React from 'react';
import {
  Link,
} from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './issues-item.styles.css';
import Button from '../button/Button';


const IssueItem = (props) => {
  const issueClass = cn({
    issues__status: true,
    'issues__status--open': props.issuesStatus === 'open',
    'issues__status--close': props.issuesStatus === 'closed',
  });
const onClick = () => props.switchIssueStatus(props.issue);

  return (
    <div className="issues__item">
      <div className={issueClass}>
        <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
          <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
        </svg>
      </div>
      <div className="issues__title">
        <Link to={`/${props.issue.id}`}>
          <p className="issues__link"> {props.issue.title} </p>
        </Link>
      </div>
      <Button
        onClick={onClick}
        state={props.issue.state}
      />
    </div>
  );
};

IssueItem.propTypes = {
  issuesStatus: PropTypes.oneOf(['open', 'closed']).isRequired,
  switchIssueStatus: PropTypes.func.isRequired,
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['open', 'closed']).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  issuesStatus: issueSelectors.getissuesStatus(state),
});

const mapDispatchToProps = {
  switchIssueStatus: issueActions.switchIssueStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssueItem);
