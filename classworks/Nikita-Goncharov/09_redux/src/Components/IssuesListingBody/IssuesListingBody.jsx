import React from 'react';
import { connect } from 'react-redux';
import Issue from '../Issue/Issue.jsx';
import './IssuesListingBody.css';
import * as issueSelector from '../../Resources/Issue/issueSelector.js';

const IssuesListingBody = (props) => {
  return (
    <ul>
      {issueSelector. getIssuesByState(props).map(element => <Issue item={element} />)}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    issuesData: state.data,
    showOpen: state.showOpen
  };
}

export default connect(mapStateToProps)(IssuesListingBody);
