import React from 'react';
import './Btn.styles.css';

class Btn extends React.PureComponent {
  render() {
    return (
      <button className="btn" type="button" onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

export default Btn;
