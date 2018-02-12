import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ id, condition, onClick }) => {
  const buttonClass = classNames({
    'btn issue__close': condition === 'open' && id,
    'btn-none': condition === 'closed' && id,
    'btn btn-primary': !id,
  });
  const title = id ? 'Close issue' : 'New issue';
  return (
    <button onClick={onClick(id)} className={buttonClass} type="button">
      {title}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  condition: PropTypes.string,
};

Button.defaultProps = {
  id: 0,
  condition: 'open',
};

export default Button;
