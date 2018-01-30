import React, { Component } from 'react';
import '../../App.css';

class Button__issue__close extends Component {
  render () {
    if (this.props.issuesStatus==="open"){
     return (
       <button className="btn issue__close" type="button">
         Close issue
       </button>
     )
   }
   else{
     return (
       <button className="btn issue__close" type="button">
         Open issue
       </button>
     )
   }
}
}

export default Button__issue__close;
