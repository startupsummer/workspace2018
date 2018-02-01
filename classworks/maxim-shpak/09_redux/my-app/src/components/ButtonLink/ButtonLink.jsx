/* ----- Dependencies ----- */
import React from 'react';
import cn from 'classnames';

/* ----- Styles ----- */
import './ButtonLink.css';

class ButtonLink extends React.Component {
  clickHandler = () => this.props.setActive(this.props.type);
  render() {
    const buttonClass = cn({
      'btn-link': true,
      'btn-link--selected': this.props.isSelected,
    });

    return (
      <button className={buttonClass} type="button" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default ButtonLink;
