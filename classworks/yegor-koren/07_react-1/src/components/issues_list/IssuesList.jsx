import React from 'react';
import PropTypes from 'prop-types';
import OpenIssues from '../open_issues/OpenIssues';
import ClosedIssues from '../closed_issues/ClosedIssues';
import IssueItems from '../issue_items/IssueItems';

class IssuesList extends React.PureComponent {
  render() {
    let issues = this.props.issues.filter((item) => item.state === this.props.filter);
    const filterSearch = this.props.filterSearch;
    const countOpend = this.props.filter === "open" ? issues.length : this.props.issues.length - issues.length;
    const countClosed = this.props.issues.length - countOpend;
    issues = (filterSearch != "") ? issues.filter((item) => {
      if (item.title.toLowerCase().indexOf(filterSearch.toLowerCase()) >= 0) return true;
      else return false;
    }) : issues;


    return (
      <div className="container">
      <div className="issues-listing">


        <div className="issues-listing__header">
          <div className="issues-listing__states">

            <OpenIssues count={countOpend} onClick={() => this.props.changeFilter('open')} />
            <ClosedIssues count={countClosed} onClick={() => this.props.changeFilter('closed')} />

          </div>
        </div>

        <p>{this.props.filterSearch}</p>
        <div className="issues-listing__body">
          <ul className="issues" >
              <IssueItems changeIssue={this.props.changeIssue} issues={issues} filter={this.props.filter} />
          </ul>
        </div>

      </div>
    </div>
    );
  }
}

IssuesList.propTypes = {
  issues: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};

export default IssuesList;
