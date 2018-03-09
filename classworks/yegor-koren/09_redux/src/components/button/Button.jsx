import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './button.style.css';


const Button = ({
  primaryStyle,
  children,
  action,
}) => {
  const buttonStyle = cn({
    btn: true,
    'btn--primary': primaryStyle,
  });

  return (
    <button className={buttonStyle} type="button" onClick={action}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  primaryStyle: false,
};

Button.propTypes = {
  primaryStyle: PropTypes.bool,
  children: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default Button;
