import React from 'react'
import cn from 'classnames' 
import './Btn-link.styles.css'

class BtnLink extends React.Component{

  render(){

      const btnClass=cn({
        'btn-link': true,
        'btn-link--selected': this.props.isSelected
      });

      return (
        <button className={btnClass} onClick={this.props.onClickState}>{this.props.children}</button>
        );

  }
}
export default BtnLink;