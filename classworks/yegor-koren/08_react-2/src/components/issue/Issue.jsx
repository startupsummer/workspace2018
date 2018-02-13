import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import './issue.style.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

const Issue = ({
  id,
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
      action={changeIssue}
      id={id}
    >{buttonName}
    </Button>
  </li>
);

Issue.propTypes = {
  id: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  itemAction: PropTypes.func.isRequired,
  changeIssue: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
};

export default Issue;
