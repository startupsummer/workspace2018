import React from 'react';
import ReactDOM from 'react-dom';

class ButtonNew extends React.Component {
  state = {count: 3};

  onClick = () => {
    const count = this.state.count;
    this.setState({count: count + 1});
  };

  render() {
    return (
      <button className="btn btn-primary" type="button" onClick={this.onClick}>
        New issue {this.state.count}
      </button>
    );
  }
}

export default ButtonNew;
