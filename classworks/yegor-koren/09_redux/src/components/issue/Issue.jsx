import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import Button from '../button/Button';

import './issue.style.css';

/* eslint-disable jsx-a11y/anchor-is-valid */


const Issue = ({
  id,
  issues,
  icon,
  title,
  itemAction,
  changeIssue,
  buttonName,
}) => (
  <li className="issues__item">
    {icon}
    <div className="issues__title">
      <Link to="description" className="issues__link" onClick={itemAction}>
        {title}
      </Link>
    </div>
    <Button
      action={() => changeIssue({ id, issues })}
    >{buttonName}
    </Button>
  </li>
);

Issue.propTypes = {
  id: PropTypes.number.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemAction: PropTypes.func.isRequired,
  changeIssue: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  issues: issueSelectors.getIssues(state),
});

const mapDispatchToProps = ({
  changeIssue: issueActions.changeIssue,
});

export default connect(mapStateToProps, mapDispatchToProps)(Issue);
