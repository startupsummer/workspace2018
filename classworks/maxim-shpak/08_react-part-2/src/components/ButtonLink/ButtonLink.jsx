import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './ButtonLink.css';

function ButtonLink(props) {
  const buttonModifier = cn({
    'btn-link': true,
    'btn-link--selected': props.isSelected,
  });
  return (
    <button className={buttonModifier} type="button" onClick={props.onButtonLinkClick}>
      {props.children}
    </button>
  );
}

ButtonLink.defaultProps = {
  isSelected: false,
};

ButtonLink.propTypes = {
  isSelected: PropTypes.bool,
  onButtonLinkClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ButtonLink;
