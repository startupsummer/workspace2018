import PropTypes from 'prop-types';
import React from 'react';
import './issueslisting.style.css';
import OpenIssues from '../open_issues/OpenIssues';
import ClosedIssues from '../closed_issues/ClosedIssues';
//import IssueItems from '../issue_items/IssueItems';

class IssuesList extends React.Component {
  render() {
    const issues = this.props.issues.filter((item) => item.state === this.props.filter);
    const issuesItems = issues.map(item =>
      <li className="issues__item">
        <div className="issues__status issues__status--open">
          <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14">
            <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
        </div>
        <div className="issues__title">
          <a href="#" className="issues__link">
            {item.title}
          </a>
        </div>
        <button className="btn issue__close" type="button">
          Close issue
        </button>
      </li>
    )
    return (
      <div className="container">
      <div className="issues-listing">


        <div className="issues-listing__header">
          <div className="issues-listing__states">

            <OpenIssues count={issues.length} onClick={() => this.props.changeFilter('open')} />
            <ClosedIssues count={this.props.issues.length - issues.length} />

          </div>
        </div>

        <div className="issues-listing__body">
          <ul className="issues" >
              {issuesItems}
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
