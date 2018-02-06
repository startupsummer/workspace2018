import React, { Component } from 'react';
import '../../App.css';
import './pagehead.styles.css';
import PageheadTitle from '../pagehead-title/PageheadTitle';
import Reponav from '../reponav/Reponav';

class Pagehead extends Component {  
  render() {
    return (
      <div className="pagehead">
        <div className="container repohead-container">
          <PageheadTitle />
        </div>
        <div className="container">
          <Reponav counterOpenIssues={this.props.counterOpenIssues}/>
        </div>
      </div>
    );
  }
}

export default Pagehead;
