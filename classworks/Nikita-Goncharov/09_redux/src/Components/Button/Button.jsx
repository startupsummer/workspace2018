import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    return (
      <button className={this.props.ButtonClassName} type="button" onClick={this.props.onClick}>
        {this.props.buttonData}
      </button>
    );
  }
}

export default Button;
