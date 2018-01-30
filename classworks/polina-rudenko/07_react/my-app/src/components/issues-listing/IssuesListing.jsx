import React, { Component } from 'react';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends Component {
  state ={
    issuesStatus : "open",
  };

  onClickOpen = () => {
    this.setState({
      issuesStatus:"open",
    });
  }

  onClickClose = () => {
    this.setState({
      issuesStatus:"close",
    });
  }

  render () {
     return (
       <div className="issues-listing">
         <div className="issues-listing__subnav">
           <Subnav/>
         </div>
         <div className="issues-listing__header">
           <States onClickClose={this.onClickClose} onClickOpen={this.onClickOpen}/>
         </div>
         <div className="issues-listing__body">
         <Issues issuesStatus={this.state.issuesStatus}/>
         </div>
       </div>
     )
}
}

export default IssuesListing;
