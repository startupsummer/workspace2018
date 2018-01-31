import React from 'react';
import ReactDOM from 'react-dom';
import SearchField from '../search_field/SearchField.jsx'
import ButtonNew from '../button_new/ButtonNew.jsx'

class Subnav extends React.PureComponent {
  render() {
    return (
      <div class="container issues-listing issues-listing__subnav">
        <div class="subnav">
          <SearchField/>
          <ButtonNew  newIssue={this.props.newIssue} />
        </div>
      </div>
    );
  }
}

export default Subnav;
