import React from 'react';
import PropTypes from 'prop-types';
import ButtonIssue from '../button_issue/ButtonIssue';
import IssueItems from '../issue_items/IssueItems';
import './issues_list.style.css';

class IssuesList extends React.PureComponent {
  render() {
    let issues = this.props.issues.filter(item => item.state === this.props.filter);
    const { filterSearch } = this.props;
    const countOpend = this.props.filter === 'open' ? issues.length : this.props.issues.length - issues.length;
    const countClosed = this.props.issues.length - countOpend;
    issues = issues.filter(item => item.title.toLowerCase().includes(filterSearch.toLowerCase()));
    const actionOpen = () => this.props.changeFilter('open');
    const actionClosed = () => this.props.changeFilter('closed');
    const isOpenSelected = this.props.filter === 'open';
    const isClosedSelected = this.props.filter === 'closed';

    return (
      <div className="container">
        <div className="issues-listing">
          <div className="issues-listing__header">
            <div className="issues-listing__states">
              <ButtonIssue
                btnOpen
                btnSelected={isOpenSelected}
                count={countOpend}
                action={actionOpen}
                filter={this.props.filter}
              >Open
              </ButtonIssue>
              <ButtonIssue
                btnClosed
                btnSelected={isClosedSelected}
                count={countClosed}
                action={actionClosed}
                filter={this.props.filter}
              >Closed
              </ButtonIssue>
            </div>
          </div>
          <div className="issues-listing__body">
            <IssueItems
              changeIssue={this.props.changeIssue}
              issues={issues}
              filter={this.props.filter}
            />
          </div>
        </div>
      </div>
    );
  }
}

IssuesList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  changeIssue: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  filterSearch: PropTypes.string.isRequired,
};

export default IssuesList;
