import React from 'react'
import cn from 'classnames';
import './Btn.styles.css';

class Btn extends React.Component {
  render() {
    const btnClass = cn({
      btn: true,
      'btn-primary': this.props.type === 'primary',
      'issue__close': this.props.type === 'closed',
      'issue__open': this.props.type === 'open',
      
    });
    let child=(this.props.type==='open')?"Close":"Open";
    return (
      <button className={btnClass} type="button"  onClick={this.props.onClick}>
        {child} issue
      </button>
    );
  }
}

export default Btn;