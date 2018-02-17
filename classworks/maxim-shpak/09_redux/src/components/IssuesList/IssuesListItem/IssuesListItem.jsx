import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Button/Button';
import IssuesActions from '../../../resources/issues/issues.actions';
import './IssuesListItem.css';

function IssuesListItem(props) {
  const setIssueState = () => {
    props.setIssueState({
      id: props.id,
      number: props.number,
      state: (props.state === 'open') ? 'closed' : 'open',
    });
  };

  const issuesStatusClassnames = cn({
    issues__status: true,
    'issues__status--opened': props.state === 'open',
    'issues__status--closed': props.state === 'closed',
  });

  return (
    <li className="issues__item">
      <div className={issuesStatusClassnames}>
        <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
          <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
        </svg>
      </div>
      <div className="issues__title">
        <Link href="/issues/:id" to={`/issues/${props.id}`} className="issues__link">
          {props.title}
        </Link>
      </div>
      <Button isPrimary onButtonClick={setIssueState}>
        {`${(props.state === 'open') ? 'Close' : 'Open'} issue`}
      </Button>
    </li>
  );
}

IssuesListItem.defaultProps = {
  number: -1,
};

IssuesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number,
  state: PropTypes.string.isRequired,
  setIssueState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  setIssueState: IssuesActions.setIssueState,
};

export default connect(null, mapDispatchToProps)(IssuesListItem);
