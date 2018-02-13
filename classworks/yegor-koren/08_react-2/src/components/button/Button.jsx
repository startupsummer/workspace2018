import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import './button.style.css';

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

Button.defaultProps = {
  id: 0,
  primaryStyle: false,
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  primaryStyle: PropTypes.bool,
  id: PropTypes.number,
  children: PropTypes.string.isRequired,
};

export default Button;
