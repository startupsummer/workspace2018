import React from 'react';
import './IssuesListingBody.styles.css';
import Issue from '../Issue/Issue';

/* eslint-disable react/prefer-stateless-function */

class IssuesListingBody extends React.Component {
  render() {
    return (
      <div className="issues-listing__body">
        <ul className="issues">
          {
            this.props.issuesList.map(issue => (
              <li className="issues__item">
                <Issue title={issue.title} state={issue.state} id={issue.id} changeState={this.props.changeState} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default IssuesListingBody;
