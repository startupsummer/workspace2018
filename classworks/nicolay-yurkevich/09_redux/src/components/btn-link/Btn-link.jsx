import React from 'react'
import cn from 'classnames' 
import './Btn-link.styles.css'

function BtnLink({children, count,text,isSelected,onClickState}){

    const btnClass=cn({
        'btn-link': true,
        'btn-link--selected': isSelected
    });
      
    return (
        <button className={btnClass} onClick={() => {onClickState(text.toLowerCase());}} >
            {children}
            {count}
            {text}
        </button>
    );
}

export default BtnLink;