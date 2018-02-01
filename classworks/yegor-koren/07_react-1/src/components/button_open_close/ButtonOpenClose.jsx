import React from 'react';
import PropTypes from 'prop-types';
import './button_open_close.style.css';

class ButtonOpenClose extends React.PureComponent {
  render() {
    const buttonName = this.props.filter === 'open' ? 'Close issue' : 'Open issue';

    return (
      <button className="btn issue__close" type="button" onClick={() => this.props.changeIssue(this.props.id)}>
        {buttonName}
      </button>
    );
  }
}

ButtonOpenClose.propTypes = {
  changeIssue: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonOpenClose;
