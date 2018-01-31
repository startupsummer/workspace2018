import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from '../search_field/SearchField.jsx'
import ButtonNew from '../button_new/ButtonNew.jsx'
import './subnav.style.css';

class Subnav extends React.PureComponent {
  render() {
    return (
      <div className="container issues-listing issues-listing__subnav">
        <div className="subnav">
          <SearchField changeFilterSearch={this.props.changeFilterSearch} />
          <ButtonNew  newIssue={this.props.newIssue} />
        </div>
      </div>
    );
  }
}

export default Subnav;
