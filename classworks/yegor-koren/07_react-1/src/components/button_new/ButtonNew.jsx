import React from 'react';
import PropTypes from 'prop-types';
import './button_new.style.css';

class ButtonNew extends React.PureComponent {
  render() {
    return (
      <button className="btn btn-primary" type="button" onClick={this.props.newIssue}>
        New issue
      </button>
    );
  }
}

ButtonNew.propTypes = {
  newIssue: PropTypes.func.isRequired,
};

export default ButtonNew;
