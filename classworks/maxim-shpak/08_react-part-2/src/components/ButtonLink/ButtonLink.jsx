/* ----- Dependencies ----- */
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

/* ----- Styles ----- */
import './ButtonLink.css';

function ButtonLink(props) {
  const buttonModifier = cn({
    'btn-link--selected': props.isSelected,
  });
  return (
    <button className={`${'btn-link'}${' '}${buttonModifier}`} type="button" onClick={props.onButtonLinkClick}>
      {props.children}
    </button>
  );
}

ButtonLink.defaultProps = {
  children: ['Button'],
  isSelected: false,
  onButtonLinkClick: () => console.log('onButtonLinkClick does not work in ButtonLink component'),
};

ButtonLink.propTypes = {
  children: PropTypes.array,
  isSelected: PropTypes.bool,
  onButtonLinkClick: PropTypes.func,
};

export default ButtonLink;

