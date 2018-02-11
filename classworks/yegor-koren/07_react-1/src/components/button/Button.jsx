import React from 'react';
import PropTypes from 'prop-types';
import './button.style.css';

const cn = require('classnames');

const Button = ({
  action,
  primaryStyle,
  id,
  children,
}) => {
  const newAction = () => action(id);
  const buttonStyle = cn({
    btn: true,
    'btn--primary': primaryStyle,
  });
  return (
    <button className={buttonStyle} type="button" onClick={newAction}>
      {children}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  primaryStyle: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
