import React from 'react';
import PropTypes from 'prop-types';
import './button.style.css';

const Button = ({
  action,
  content,
  buttonStyle,
  id,
}) => {
  const newAction = () => action(id);
  return (
    <button className={buttonStyle} type="button" onClick={newAction}>
      {content}
    </button>
  );
};

Button.propTypes = {
  action: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Button;
