import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './button.styles.css';

const Button = ({ type, onClick, children }) => {
  const btnClass = cn({
    btn: true,
    'btn-primary': type === 'primary',
    issue__close: type === 'closed',
    issue__open: type === 'open',
  });

  return (
    <button className={btnClass} type="button" onClick={onClick}>
      {children} issue
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'closed', 'open']).isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
