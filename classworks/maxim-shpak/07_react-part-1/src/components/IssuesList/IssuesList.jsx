import React from 'react';
import PropTypes from 'prop-types';

import ButtonLink from '../ButtonLink/ButtonLink';
import IssuesListItem from './IssuesListItem/IssuesListItem';
import SubNavbar from '../SubNavbar/SubNavbar';

import './IssuesList.css';

import issuesList from '../../issuesStore';

const loremIpsum = 'Lorem ipsum dolor Sit amet lobortis arcu amet a Dignissim eros est Litora ac rhoncus Malesuada augue quam Elit molestie vel luctus ipsum lorem Hendrerit magnis sagittis Eget hac proin tempor est elementum Et sit commodo pulvinar pellentesque commodo Ut eget mauris libero phasellus augue ut diamlorem lacinia Id mauris id et sociis lorem In faucibus porta integer ut montes Mi integer enim proin cursus eget in ligula magna id in consectetuer suspendisse fringilla eget iaculis elementum integer Leo arcu ultricies mattis eu dis condimentum dictumst amet Neque velit eros';

function generateIssueTitle() {
  const loremIpsumArray = loremIpsum.split(' ');
  const loremIpsumArrayLength = loremIpsumArray.length;
  const issueTitleLength = 3 + Number.parseInt(Math.random() * 15, 10);
  let issueTitle = `${loremIpsumArray[Number.parseInt(Math.random() * loremIpsumArrayLength, 10)]}`;
  for (let i = 0; i < issueTitleLength - 1; i += 1) {
    issueTitle = `${issueTitle} ${loremIpsumArray[Number.parseInt(Math.random() * loremIpsumArrayLength, 10)]}`;
  }
  return `${issueTitle[0].toUpperCase()}${issueTitle.substr(1).toLowerCase()}.`;
}

class IssuesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openedIssuesList: issuesList,
      openedIssuesAmount: 3,
      closedIssuesList: [],
      closedIssuesAmount: 0,
      activeTab: 'Open',
      searchValue: '',
    };
  }

  addIssue = () => {
    const newOpenedIssuesList = [...this.state.openedIssuesList];
    newOpenedIssuesList.unshift({
      id: new Date().getMilliseconds() + Number.parseInt((Math.random() * 1000), 10),
      title: generateIssueTitle(),
      isOpened: true,
      isClosed: false,
    });
    this.setState({
      openedIssuesList: newOpenedIssuesList,
      openedIssuesAmount: this.state.openedIssuesAmount + 1,
    });
    this.props.setNotificationsAmount(this.state.openedIssuesAmount + 1);
  };

  openIssue = (issue) => {
    const newOpenedIssuesList = [...this.state.openedIssuesList];
    newOpenedIssuesList.unshift({
      ...issue,
      isOpened: true,
      isClosed: false,
    });
    this.setState({
      openedIssuesList: newOpenedIssuesList,
      openedIssuesAmount: this.state.openedIssuesAmount + 1,
      closedIssuesList: this.state.closedIssuesList.filter(item => item.id !== issue.id),
      closedIssuesAmount: this.state.closedIssuesAmount - 1,
    });
    this.props.setNotificationsAmount(this.state.openedIssuesAmount + 1);
  };

  closeIssue = (issue) => {
    const newClosedIssuesList = [...this.state.closedIssuesList];
    newClosedIssuesList.unshift({
      ...issue,
      isOpened: false,
      isClosed: true,
    });
    this.setState({
      openedIssuesList: this.state.openedIssuesList.filter(item => item.id !== issue.id),
      openedIssuesAmount: this.state.openedIssuesAmount - 1,
      closedIssuesList: newClosedIssuesList,
      closedIssuesAmount: this.state.closedIssuesAmount + 1,
    });
    this.props.setNotificationsAmount(this.state.openedIssuesAmount - 1);
  };

  setSearchValue = (event) => {
    this.setState({ searchValue: event.currentTarget.value });
  };

  setActiveTab = tab => () => this.setState({ activeTab: tab });

  searchFilter = item => item.title
      .toLowerCase()
      .includes(this.state.searchValue.toLowerCase());
      
  render() {
    const renderListItem = item => (
      <IssuesListItem
        key={item.id}
        id={item.id}
        title={item.title}
        isOpened={item.isOpened}
        isClosed={item.isClosed}
        openIssue={this.openIssue}
        closeIssue={this.closeIssue}
      />
    );
    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <SubNavbar
            searchValue={this.state.searchValue}
            onSearchInput={this.setSearchValue}
            onAddIssue={this.addIssue}
          />
        </div>
        <div className="issues-listing__header">
          <div className="issues-listing__states">
            <ButtonLink
              isSelected={this.state.activeTab === 'Open'}
              onButtonLinkClick={this.setActiveTab('Open')}
            >
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
              {`${this.state.openedIssuesAmount} Open`}
            </ButtonLink>
            <ButtonLink
              isSelected={this.state.activeTab === 'Closed'}
              onButtonLinkClick={this.setActiveTab('Closed')}
            >
              <svg aria-hidden="true" className="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12">
                <path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" />
              </svg>
              {this.state.closedIssuesAmount} Closed
            </ButtonLink>
          </div>
        </div>
        <div className="issues-listing__body">
          <ul className="issues">
            {this.state.openedIssuesList
                .filter(item => (this.state.activeTab === 'Open' ? item.isOpened : item.isClosed))
                .filter(this.searchFilter)
                .map(renderListItem)}
            {this.state.closedIssuesList
                .filter(item => (this.state.activeTab === 'Closed' ? item.isClosed : item.isOpened))
                .filter(this.searchFilter)
                .map(renderListItem)}
          </ul>
        </div>
      </div>);
  }
}

IssuesList.propTypes = {
  setNotificationsAmount: PropTypes.func.isRequired,
};

export default IssuesList;
