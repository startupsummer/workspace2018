import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as issuesActions from '../../resources/Issue/Issue.actions';
import * as issuesSelector from '../../resources/Issue/Issue.selectors';
import './Issue.styles.css';

const Issue = (props) => {
  const icoPath = props.state === 'open'
    ? 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z'
    : 'M7 10h2v2H7v-2zm2-6H7v5h2V4zm1.5 1.5l-1 1L12 9l4-4.5-1-1L12 7l-1.5-1.5zM8 13.7A5.71 5.71 0 0 1 2.3 8c0-3.14 2.56-5.7 5.7-5.7 1.83 0 3.45.88 4.5 2.2l.92-.92A6.947 6.947 0 0 0 8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7l-1.52 1.52c-.66 2.41-2.86 4.19-5.48 4.19v-.01z';
  const issueStatus = cn({
    issue__status: true,
    'issue__status--open': props.state === 'open',
    'issue__status--closed': props.state === 'closed',
  });

  const onClick = () =>
    props.changeState(props.issue);

  return (
    <div className="issue">
      <div className={issueStatus}>
        <svg className="issue__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
          <path fillRule="evenodd" d={icoPath} />
        </svg>
      </div>
      <div className="issue__title">
        <Link to={`/description/${props.id}`} className="issue__link">
          {props.title}
        </Link>
      </div>
      <button onClick={onClick} className="btn issue__close" type="button">
        {props.state === 'open' ? 'Close Issue' : 'Open Issue'}
      </button>
    </div>
  );
};

Issue.propTypes = {
  changeState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  issue: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};

export default connect(
  (store, props) => ({ issue: issuesSelector.getIssueById(store, props.id) }),
  {
    changeState: issuesActions.changeState,
  },
)(Issue);
