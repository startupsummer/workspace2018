import React from 'react';
import './IssuesListing.styles.css'
import Subnav from '../../Components/Subnav/Subnav.jsx';
import BtnLink from '../../Components/BtnLink/BtnLink.jsx';
import Issues from '../../Components/Issues/Issues.jsx';
import IssuesItem from '../../Components/IssuesItem/IssuesItem.jsx';


class IssuesListing extends React.Component {
  state = {
    items: [ <IssuesItem isOpen={true} />,
             <IssuesItem isOpen={true} />,
             <IssuesItem isOpen={false} />,
          ],
    openedIssues: 2,
    closedIssues: 1,
    activeTab: 'open',
  };

  newIssue = () => {
    this.state.items.push(<IssuesItem isOpen={true} />);
    this.setState({ openedIssues: this.state.openedIssues + 1 });
  }


  showTargetIssues = type => () =>
    this.setState({ activeTab: type });

  render() {
    return (
      <div class="issues-listing">

        <div class="issues-listing__subnav">
          <Subnav onClick={this.newIssue} />
        </div>

        <div class="issues-listing__header">
          <div class="issues-listing__states">
            <BtnLink isSelected={this.state.activeTab === 'open'} onClick={this.showTargetIssues('open')} >
              <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
              </svg>
              {this.state.openedIssues} Open
            </BtnLink>

            <BtnLink isSelected={this.state.activeTab === 'closed'} onClick={this.showTargetIssues('closed')}>
              <svg aria-hidden="true" class="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              {this.state.closedIssues} Closed
            </BtnLink>
          </div>
        </div>

        <div class="issues-listing__body">
          <Issues items = {this.state.items} activeTab={this.state.activeTab}/>
        </div>

      </div>
    );
  }
}

export default IssuesListing;
