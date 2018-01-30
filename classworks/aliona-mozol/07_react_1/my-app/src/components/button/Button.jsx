import React, { Component } from 'react';
import cn from 'classnames';
import './button.styles.css';

class Button extends Component {
  render() {
    const btnClass = cn({
      btn: true,
      'btn-primary': this.props.type === 'primary',
      'issue__close': this.props.type === 'closed',
      'issue__open': this.props.type === 'open',
    });

    return (
      <button className={btnClass} type="button" onClick={this.props.onClick}>
        {this.props.text} issue
      </button>
    );
  }
}

export default Button;
