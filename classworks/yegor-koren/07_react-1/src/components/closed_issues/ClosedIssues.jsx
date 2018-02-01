import React from 'react';
import PropTypes from 'prop-types';
import './closed_issues.style.css';

class ClosedIssues extends React.PureComponent {
  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.isClosed} type="button">
        <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
        {this.props.count} Closed
      </button>
    );
  }
}

ClosedIssues.propTypes = {
  isClosed: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClosedIssues;
