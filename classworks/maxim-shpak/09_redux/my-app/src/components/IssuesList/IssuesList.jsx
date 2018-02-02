/* ----- Dependencies ----- */
import React from 'react';

/* ----- Components ----- */
import Button from '../Button/Button';
import ButtonLink from '../ButtonLink/ButtonLink';
import IssuesListItem from './IssuesListItem/IssuesListItem';
import SubNavbar from '../SubNavbar/SubNavbar';

/* ----- Styles ----- */
import './IssuesList.css';

class IssuesList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     issuesList: [{
  //       id: '001',
  //       text: 'Issue #1',
  //       isOpen: true,
  //     }, {
  //       id: '002',
  //       text: 'Issue #2',
  //       isOpen: true,
  //     }],
  //     openedIssues: 2,
  //     closedIssues: 0,
  //     activeTab: 'open',
  //     searchValue: ''
  //   }
  // };
  state = {
    issuesList: [{
      id: '001',
      text: 'Issue #1',
      isOpen: true,
    }, {
      id: '002',
      text: 'Issue #2',
      isOpen: true,
    },{
    id: '002',
    text: 'Issue #2',
    isOpen: true,
    }],
    openedIssues: 3,
    closedIssues: 0,
    activeTab: 'open',
    searchValue: ''
  }
  newIssue = () => {
    this.setState({
      issuesList: this.state.issuesList.concat([{
        id: new Date(),
        text: 'New issue',
        isOpened: true,
      }]),
      openedIssues: this.state.openedIssues + 1,
    });
    this.props.setCounter(this.state.openedIssues + 1);
  };
  openIssue = (id) => {
    const itemToClose = this.state.issuesList.find(item => item.id === id);
    const reducedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      issuesList: reducedItems.concat([{
        id,
        text: itemToClose.text,
        isOpen: true,
      }]),
      openedIssues: this.state.openedIssues + 1,
      closedIssues: this.state.closedIssues - 1,

    });
    this.props.setCounter(this.state.openedIssues + 1);
  }
  closeIssue = (id) => {
    const itemToClose = this.state.issuesList.find(item => item.id === id);
    const reducedItems = this.state.issuesList.filter(item => item.id !== id);
    this.setState({
      issuesList: reducedItems.concat([{
        id,
        text: itemToClose.text,
        isOpen: false,
      }]),
      openedIssues: this.state.openedIssues - 1,
      closedIssues: this.state.closedIssues + 1,
    });
    console.log(this.state);
    this.props.setCounter(this.state.openedIssues - 1);
  }
  searchIssue = (event) => { 
    this.setState({ searchValue: event.target.value});
  };
  searchFilter = (item) => {
    item.text.toUpperCase().includes(this.state.searchValue.toUpperCase());
  };
  showTargetIssues = (type) => () => { 
    this.setState({ activeTab: type }) 
  };
  renderListItem = (item) => (
    <IssuesListItem
      isOpen={item.isOpen}
      id={item.id}
      text={item.text}
      reopenIssue={this.props.reopenIssue}
      closeIssue={this.props.closeIssue}
    />
  );
  render() {
    return (<div className="issues-listing">
        <div className="issues-listing__subnav">
          <SubNavbar 
            searchValue={this.searchValue}
            changeHandler={this.searchIssue}
            onClick={this.newIssue}
          />
        </div>
        <div className="issues-listing__header">
          <div className="issues-listing__states">
            <ButtonLink isSelected={this.state.activeTab === 'opened'} onClick={this.showTargetIssues('opened')}>
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
              {this.state.openedIssues} Open
            </ButtonLink>
            <ButtonLink isSelected={this.state.activeTab === 'closed'} onClick={this.showTargetIssues('closed')}>
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
              </svg>
              {this.state.closedIssues} Closed
            </ButtonLink>
          </div>
        </div>
        <div className="issues-listing__body">
          <ul className="issues">
            {this.state.issuesList.filter(item => (this.state.activeTab === 'opened' ? item.isOpened : item.isClosed))
                                 // .filter(this.state.searchFilter)
                                 // .map(this.renderItem)
            }
          </ul>
        </div>
      </div>)
  }
}

export default IssuesList;
