import React from 'react';
import PropTypes from 'prop-types';
import './IssuesListingBody.styles.css';
import Issue from '../Issue/Issue';

const IssuesListingBody = props => (
  <div className="issues-listing__body">
    <ul className="issues">
      {
      props.issuesList.map(issue => (
        <li className="issues__item">
          <Issue
            title={issue.title}
            state={issue.state}
            id={issue.id}
            changeState={props.changeState}
          />
        </li>
      ))
    }
    </ul>
  </div>
);

IssuesListingBody.propTypes = {
  changeState: PropTypes.func.isRequired,
  issuesList: PropTypes.arrayOf(PropTypes.objectOf(
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
    PropTypes.string.isRequired,
  )).isRequired,
};

export default IssuesListingBody;
