import React from 'react';
import PropTypes from 'prop-types';
import './button_issue.style.css';

const cn = require('classnames');

const ButtonIssue = ({
  btnOpen,
  btnClosed,
  btnSelected,
  count,
  action,
  children,
}) => {
  const buttonStyle = cn({
    'btn-link': true,
    'btn-link--open': btnOpen,
    'btn-link--closed': btnClosed,
    'btn-link--selected': btnSelected,
  });
  return (
    children === 'Open' ?
      (
        <button onClick={action} className={buttonStyle} type="button">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" /></svg>
          {count} {children}
        </button>
      ) :
      (
        <button onClick={action} className={buttonStyle} type="button">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
          {count} {children}
        </button>
      )
  );
};

ButtonIssue.propTypes = {
  btnOpen: PropTypes.bool.isRequired,
  btnClosed: PropTypes.bool.isRequired,
  btnSelected: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonIssue;
