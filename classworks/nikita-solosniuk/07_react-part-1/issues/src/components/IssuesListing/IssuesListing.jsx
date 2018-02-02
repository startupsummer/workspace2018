import React from 'react';
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
    const issuesList = this.props.issuesList.filter(item => item.state === this.state.checkState);
    const openIssueCount = this.props.issuesList.filter(item => item.state === 'open').length;
    const closedIssueCount =  this.props.issuesList.filter(item => item.state === 'closed').length;

    return (
      <div className="container issues-listing">
        <IssuesListingSubnav newIssue={this.props.newIssue} />
        <IssuesListingHeader
          tabState={this.state.checkState}
          openIssueCount={openIssueCount}
          closedIssueCount={closedIssueCount}
          onOpenClick={this.setOpen}
          onClosedClick={this.setClosed}
        />
        <IssuesListingBody issuesList={issuesList} changeState={this.props.changeState} />
      </div>
    );
  }
}

export default IssuesListing;
