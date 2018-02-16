import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './ButtonLink.css';

function ButtonLink(props) {
  const buttonClassnames = cn({
    'btn-link': true,
    'btn-link--selected': props.isSelected,
  });
  return (
    <button className={buttonClassnames} onClick={props.onButtonLinkClick} type="button">
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
