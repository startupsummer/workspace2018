import React from 'react';
import './IssuesListing.styles.css';
import Subnav from '../../Components/Subnav/Subnav';
import Issues from '../../Components/Issues/Issues';
import IssuesStates from '../../Components/IssuesStates/IssuesStates';


class IssuesListing extends React.Component {
  state = {
    items: this.props.items,
    searchValue: '',
    activeTab: 'open',
  };

  searchIssue = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }

  showTargetIssues = type => () =>
    this.setState({ activeTab: type });


  searchFilter = item => item.title.toUpperCase().includes(this.state.searchValue.toUpperCase())

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
          <IssuesStates className="issues-listing__states" showTargetIssues={this.showTargetIssues} activeTab={this.state.activeTab} openedIssues={this.props.openedIssues} closedIssues={this.props.closedIssues}/>
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
