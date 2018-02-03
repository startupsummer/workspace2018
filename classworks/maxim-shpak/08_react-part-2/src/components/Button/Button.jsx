/* ----- Dependencies ----- */
import React from 'react';
import PropTypes from 'prop-types';

/* ----- Styles ----- */
import './Button.css';

function Button(props) {
  return (
    <button className="btn btn-primary" type="button" onClick={props.onButtonClick}>
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Button',
  onButtonClick: () => console.log('onButtonClick does not work in Button component'),
};

Button.propTypes = {
  onButtonClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
