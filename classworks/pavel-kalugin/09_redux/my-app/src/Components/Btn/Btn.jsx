import React from 'react';
import PropTypes from 'prop-types';
import './Btn.styles.css';

function  Btn(props) {
  return (
    <button className="btn" type="button" onClick={props.clickHandler}>{props.children}</button>
  );
}

Btn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Btn;
