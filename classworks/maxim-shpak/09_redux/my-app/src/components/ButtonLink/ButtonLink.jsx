/* ----- Dependencies ----- */
import React from 'react';
import cn from 'classnames';

/* ----- Styles ----- */
import './ButtonLink.css';

function ButtonLink(props) {
  console.log(props);
  const clickHandler = () => props.setActive(this.props.type);
  const buttonClass = cn({
    'btn-link': true,
    'btn-link--selected': props.isSelected,
  });
  return (
    <button className={buttonClass} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default ButtonLink;
