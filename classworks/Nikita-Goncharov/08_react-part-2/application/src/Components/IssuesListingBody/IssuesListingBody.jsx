import React from 'react';
import Issue from '../Issue/Issue.jsx';
import './IssuesListingBody.css';

const IssuesListingBody = (props) => {
  return (
    <ul>
      {props.issuesData.filter(item => (
        (item.state === 'open' && props.state.showOpen === true) || (item.state === 'closed' && props.state.showOpen === false)
      )).map(element =>
        <Issue
          item={element}
          state={props.state}
          changeItemState={props.changeItemState}
        />)}
    </ul>
  );
};

export default IssuesListingBody;
