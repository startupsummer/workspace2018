import React from 'react';
import './Pagehead.styles.css';
import Repohead from '../Repohead/Repohead';
import Reponav from '../Reponav/Reponav';

/* eslint-disable react/prefer-stateless-function */

class Pagehead extends React.Component {
  render() {
    return (
      <div className="pagehead">
        <Repohead />
        <Reponav issuesCount={this.props.issuesCount} />
      </div>
    );
  }
}

export default Pagehead;
