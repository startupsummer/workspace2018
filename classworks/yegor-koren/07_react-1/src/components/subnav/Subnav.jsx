import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../search_field/SearchField';
import ButtonNew from '../button_new/ButtonNew';
import './subnav.style.css';

class Subnav extends React.PureComponent {
  render() {
    return (
      <div className="container issues-listing issues-listing__subnav">
        <div className="subnav">
          <SearchField changeFilterSearch={this.props.changeFilterSearch} />
          <ButtonNew newIssue={this.props.newIssue} />
        </div>
      </div>
    );
  }
}

Subnav.propTypes = {
  newIssue: PropTypes.func.isRequired,
  changeFilterSearch: PropTypes.func.isRequired,
};

export default Subnav;
