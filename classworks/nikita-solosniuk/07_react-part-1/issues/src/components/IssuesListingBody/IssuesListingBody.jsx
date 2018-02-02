import React from 'react';
import PropTypes from 'prop-types';
import './IssuesListingBody.styles.css';
import Issue from '../Issue/Issue';

const IssuesListingBody = props => (
  <div className="issues-listing__body">
    <ul className="issues">
      {
      props.issuesList.map(issue => (
        <li key={issue.id} className="issues__item">
          <Issue
            title={issue.title}
            state={issue.state}
            id={issue.id}
          />
        </li>
      ))
    }
    </ul>
  </div>
);

IssuesListingBody.propTypes = {
  issuesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
};

export default IssuesListingBody;
