import React from 'react';
import { connect } from 'react-redux';
import Issue from '../Issue/Issue.jsx';
import './IssuesListingBody.css';

const IssuesListingBody = (props) => {
  return (
    <ul>
      {props.issuesData.filter(
        item => ((item.state === 'open' && props.showOpen === true) ||
                (item.state === 'closed' && props.showOpen === false)
              )).map(element =>
                <Issue
                  item={element}
                />
              )}
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
