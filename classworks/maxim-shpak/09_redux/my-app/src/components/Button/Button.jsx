/* ----- Dependencies ----- */
import React from 'react';

/* ----- Styles ----- */
import './Button.css';

function Button(props) {
  return (
    <button className="btn" type="button" onClick={props.clickHandler}>
      {props.children}
    </button>
  );
}
export default Button;
