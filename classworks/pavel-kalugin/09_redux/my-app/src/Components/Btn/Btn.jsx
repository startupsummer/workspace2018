import React from 'react';
import PropTypes from 'prop-types';
import './Btn.styles.css';

class Btn extends React.PureComponent {
  render() {
    return (
      <button className="btn" type="button" onClick={this.props.clickHandler}>{this.props.children}</button>
    );
  }
}

Btn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Btn;
