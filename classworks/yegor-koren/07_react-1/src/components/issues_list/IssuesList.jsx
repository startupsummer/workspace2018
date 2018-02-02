import React from 'react';
import PropTypes from 'prop-types';
import OpenIssues from '../open_issues/OpenIssues';
import ClosedIssues from '../closed_issues/ClosedIssues';
import IssueItems from '../issue_items/IssueItems';
import './issues_list.style.css';

class IssuesList extends React.PureComponent {
  render() {
    let issues = this.props.issues.filter(item => item.state === this.props.filter);
    const { filterSearch } = this.props;
    const countOpend = this.props.filter === 'open' ? issues.length : this.props.issues.length - issues.length;
    const countClosed = this.props.issues.length - countOpend;
    issues = (filterSearch !== '') ? issues.filter((item) => {
      if (item.title.toLowerCase().indexOf(filterSearch.toLowerCase()) >= 0) return true;
      return false;
    }) : issues;
    const isOpen = this.props.filter === 'open' ? 'btn-link btn-link--open btn-link--selected' : 'btn-link btn-link--open';
    const isClosed = this.props.filter === 'closed' ? 'btn-link btn-link--closed btn-link--selected' : 'btn-link btn-link--closed';

    return (
      this.props.isDescription ?
        (
          <div className="container">
            <p>This is issue description</p>
          </div>
        ) :
        (
          <div className="container">
            <div className="issues-listing">
              <div className="issues-listing__header">
                <div className="issues-listing__states">
                  <OpenIssues
                    isOpen={isOpen}
                    count={countOpend}
                    onClick={() => this.props.changeFilter('open')}
                  />
                  <ClosedIssues
                    isClosed={isClosed}
                    count={countClosed}
                    onClick={() => this.props.changeFilter('closed')}
                  />
                </div>
              </div>
              <div className="issues-listing__body">
                <ul className="issues" >
                  <IssueItems
                    changeIssue={this.props.changeIssue}
                    issues={issues}
                    filter={this.props.filter}
                    descriptionOn={this.props.descriptionOn}
                  />
                </ul>
              </div>
            </div>
          </div>
        )
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
  isDescription: PropTypes.bool.isRequired,
  descriptionOn: PropTypes.func.isRequired,
};

export default IssuesList;
