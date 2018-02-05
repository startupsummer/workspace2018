import React from 'react';
import cn from 'classnames';
import './BtnLink.styles.css';

class BtnLink extends React.Component {
  render() {
    const btnClass = cn({
      'btn-link': true,
      'btn-link--selected': this.props.isSelected,
    });

    return (
      <button className={btnClass} type="button" onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

export default BtnLink;
