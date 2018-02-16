import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Button.css';

function Button(props) {
  const buttonClassnames = cn({
    btn: true,
    'btn-primary': props.isPrimary,
  });
  return (
    <button className={buttonClassnames} onClick={props.onButtonClick} type="button">
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  isPrimary: false,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
};

export default Button;
