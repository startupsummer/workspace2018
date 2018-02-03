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

export default ButtonLink;

ButtonLink.defaultProps = {
  isSelected: false,
  onButtonLinkClick: () => console.log('onButtonLinkClick does not work in ButtonLink component'),
};

ButtonLink.propTypes = {
  isSelected: PropTypes.bool,
  onButtonLinkClick: PropTypes.func,
};
