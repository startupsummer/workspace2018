import React from 'react';

class ButtonOpenClose extends React.PureComponent {
  render() {
    const buttonName = this.props.filter === "open" ? "Close issue" : "Open issue";

    return (
      <button className="btn issue__close" type="button" onClick={() => this.props.changeIssue(this.props.id)}>
        {buttonName}
      </button>
    );
  }
}

export default ButtonOpenClose;
