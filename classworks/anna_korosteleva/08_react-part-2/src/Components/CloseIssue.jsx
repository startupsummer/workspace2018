import React from 'react';
import PropTypes from 'prop-types';

const CloseIssue = ({ id, condition, closeIssue }) => {
  const buttonClass = condition === 'open' ? 'btn issue__close' : 'btn-none';
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
