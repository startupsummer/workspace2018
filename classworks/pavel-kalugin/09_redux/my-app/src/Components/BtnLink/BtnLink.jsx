import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './BtnLink.styles.css';

function BtnLink(props) {
  const btnClass = cn({
    'btn-link': true,
    'btn-link--selected': props.isSelected,
  });

  return (
    <button className={btnClass} type="button" onClick={props.clickHandler}>{props.children}</button>
  );
}

BtnLink.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BtnLink;
