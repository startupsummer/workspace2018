import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import '../../App.css';

const Button = ({ state, onClick }) => {
  const buttonText = state === 'closed'
    ? 'Open issue'
    : 'Close issue';

  const buttonClass = cn('btn', {
    issue__open: state === 'open',
    issue__close: state === 'closed',
  });

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      type="button"
    >{buttonText}
    </button>
  );
};

Button.propTypes = {
  state: PropTypes.oneOf(['open', 'closed']).isRequired,
  onClick: PropTypes.func.isRequired,
};


export default Button;
