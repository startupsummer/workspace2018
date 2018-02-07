import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  return (
    <button className="btn btn-primary" type="button" onClick={props.onButtonClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Button;
