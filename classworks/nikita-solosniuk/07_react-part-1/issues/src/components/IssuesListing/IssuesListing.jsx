import React from 'react';
import './IssuesListing.styles.css';
import IssuesListingSubnav from '../IssuesListingSubnav/IssuesListingSubnav';
import IssuesListingHeader from '../IssuesListingHeader/IssuesListingHeader';
import IssuesListingBody from '../IssuesListingBody/IssuesListingBody';

/* eslint-disable react/prefer-stateless-function */

class IssuesListing extends React.Component {
  state = {
    checkState: 'open',
  };

  setClosed = () => {
    this.setState({ checkState: 'closed' });
  };

  setOpen = () => {
    this.setState({ checkState: 'open' });
  };

  render() {
    const sortedIssues = this.props.issuesList.filter(item => item.state === this.state.checkState);

    return (
      <div className="container issues-listing">
        <IssuesListingSubnav newIssue={this.props.newIssue} />
        <IssuesListingHeader
          startList={this.props.issuesList}
          tabState={this.state.checkState}
          issuesList={sortedIssues}
          onOpenClick={this.setOpen}
          onClosedClick={this.setClosed}
        />
        <IssuesListingBody issuesList={sortedIssues} changeState={this.props.changeState} />
      </div>
    );
  }
}

export default IssuesListing;
