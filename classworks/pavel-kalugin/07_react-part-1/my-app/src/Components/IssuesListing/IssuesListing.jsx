import React from 'react';
import './IssuesListing.styles.css'
import Subnav from '../../Components/Subnav/Subnav.jsx';
import BtnLink from '../../Components/BtnLink/BtnLink.jsx';
import Issues from '../../Components/Issues/Issues.jsx';
import IssuesItem from '../../Components/IssuesItem/IssuesItem.jsx';


class IssuesListing extends React.Component {
  state = {
    items: [{
      id: 1,
      text: 'Hi Pavel!',
      isOpen: true,
    }, {
      id: 2,
      text: 'Hi Dan!',
      isOpen: true,
    }],
    idGenerator: 3,
    openedIssues: 2,
    closedIssues: 0,
    activeTab: 'open',
    searchValue: '',
  };

  newIssue = () => {
    this.setState({
      items: this.state.items.concat([{
        id: this.state.idGenerator++,
        text: 'kek!',
        isOpen: true,
      }]),
      openedIssues: this.state.openedIssues + 1,
    });
    this.props.setCounter(this.state.openedIssues + 1);
  }

  closeIssue = (id) => {
    const itemToClose = this.state.items.filter(item => item.id === id)[0];
    const reducedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: reducedItems.concat([{
        id: id,
        text: itemToClose.text,
        isOpen: false,
      }]),
      openedIssues: this.state.openedIssues - 1,
      closedIssues: this.state.closedIssues + 1,
    });
    this.props.setCounter(this.state.openedIssues - 1);
  }

  reopenIssue = (id) => {
    const itemToClose = this.state.items.filter(item => item.id === id)[0];
    const reducedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: reducedItems.concat([{
        id: id,
        text: itemToClose.text,
        isOpen: true,
      }]),
      openedIssues: this.state.openedIssues + 1,
      closedIssues: this.state.closedIssues - 1,

    });
    this.props.setCounter(this.state.openedIssues + 1);
  }

  searchIssue = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  searchFilter = (item) => {
      return item.text.toUpperCase().includes(this.state.searchValue.toUpperCase());
  }

  showTargetIssues = type => () =>
    this.setState({ activeTab: type });

  render() {
    return (
      <div class="issues-listing">

        <div class="issues-listing__subnav">
          <Subnav searchValue={this.state.searchValue} changeHandler={this.searchIssue} onClick={this.newIssue} />
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
          <Issues itemsArray={this.state.items} activeTab={this.state.activeTab} searchFilter={this.searchFilter} reopenIssue={this.reopenIssue} closeIssue={this.closeIssue}/>
        </div>

      </div>
    );
  }
}

export default IssuesListing;
