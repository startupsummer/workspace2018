import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Btn.styles.css';

function Btn({ onClick, type }) {
  const btnClass = cn({
    btn: true,
    'btn-primary': type === 'primary',
    issue__close: type === 'closed',
    issue__open: type === 'open',
  });
  let child = (type === 'open') ? 'Close' : 'Open';
  child = `${child} issue`;
  return (
    <button className={btnClass} type="button" onClick={onClick}>
      {child}
    </button>
  );
}

Btn.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


export default Btn;
