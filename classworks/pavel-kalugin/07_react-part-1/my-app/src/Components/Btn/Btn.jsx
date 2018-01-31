import React from 'react';
import './Btn.styles.css'

class Btn extends React.Component {
  render() {
    return (
      <button className="btn" type="button" onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}

export default Btn;
