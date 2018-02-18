import React from 'react'
import cn from 'classnames';
import './Btn.styles.css';

function Btn ({onClick,type}) {

    const btnClass = cn({ 
      btn: true,
      'btn-primary': type === 'primary',
      'issue__close': type === 'closed',
      'issue__open': type === 'open',
      
    });
    let child=(type==='open')?"Close":"Open";
    return (
      <button className={btnClass} type="button"  onClick={onClick}>
        {child} issue
      </button>
    );
}

export default Btn;