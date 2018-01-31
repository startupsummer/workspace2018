import React from 'react';

class ClosedIssues extends React.PureComponent {
  render() {

    return (
      <button onClick={this.props.onClick} className="btn-link" type="button">
        <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
        {this.props.count} Closed
      </button>
    )
  }
}

export default ClosedIssues;
