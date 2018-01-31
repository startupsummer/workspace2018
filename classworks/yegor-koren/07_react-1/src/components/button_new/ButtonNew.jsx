import React from 'react';
import './button_new.style.css'

class ButtonNew extends React.PureComponent {
  render() {
    return (
      <button className="btn btn-primary" type="button" onClick={this.props.newIssue}>
        New issue
      </button>
    );
  }
}

export default ButtonNew;
