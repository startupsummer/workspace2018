import React from 'react';
import './BtnLink.styles.css'
import cn from "classnames"

class BtnLink extends React.Component {
  clickHandler = () => {
    this.props.setActive(this.props.type);
  }

  render() {
    const btnClass = cn({
      'btn-link': true,
      'btn-link--selected': this.props.isSelected,
    });

    return (
        <button className={btnClass} type="button" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default BtnLink;
