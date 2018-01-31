import React from 'react';
import './IssuesListing.styles.css';
import Subnav from '../../Components/Subnav/Subnav';
import BtnLink from '../../Components/BtnLink/BtnLink';
import Issues from '../../Components/Issues/Issues';


class IssuesListing extends React.Component {
  state = {
    items: this.props.items,
    activeTab: 'open',
    searchValue: '',
  };

  searchIssue = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }

  searchFilter = item => item.title.toUpperCase().includes(this.state.searchValue.toUpperCase())

  showTargetIssues = type => () =>
    this.setState({ activeTab: type });

  render() {
    return (
      <div className="issues-listing">

        <div className="issues-listing__subnav">
          <Subnav
            searchValue={this.state.searchValue}
            changeHandler={this.searchIssue}
            onClick={this.props.newIssue}
          />
        </div>

        <div className="issues-listing__header">
          <div className="issues-listing__states">
            <BtnLink isSelected={this.state.activeTab === 'open'} onClick={this.showTargetIssues('open')} >
              <svg aria-hidden="true" className="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
              {this.props.openedIssues} Open
            </BtnLink>

            <BtnLink isSelected={this.state.activeTab === 'closed'} onClick={this.showTargetIssues('closed')}>
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
              {this.props.closedIssues} Closed
            </BtnLink>
          </div>
        </div>

        <div className="issues-listing__body">
          <Issues
            itemsArray={this.props.items}
            activeTab={this.state.activeTab}
            searchFilter={this.searchFilter}
            reopenIssue={this.props.reopenIssue}
            closeIssue={this.props.closeIssue}
            createIssuesPage={this.props.createIssuesPage}
          />
        </div>

      </div>
    );
  }
}

export default IssuesListing;
