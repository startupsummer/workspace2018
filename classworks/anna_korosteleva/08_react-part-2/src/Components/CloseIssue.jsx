import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CloseIssue = ({ id, condition, closeIssue }) => {
  const buttonClass = classNames({
    'btn issue__close': condition === 'open',
    'btn-none': condition === 'closed'
  });
  return (
    <button onClick={closeIssue(id)} className={buttonClass} type="button">
      Close issue
    </button>
  );
};

CloseIssue.propTypes = {
  id: PropTypes.number,
  closeIssue: PropTypes.func,
  condition: PropTypes.string,
};

CloseIssue.defaultProps = {
  id: 0,
  condition: 'open',
};

export default CloseIssue;
