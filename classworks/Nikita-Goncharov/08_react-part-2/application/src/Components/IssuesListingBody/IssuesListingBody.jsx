import React from 'react';
import Issue from '../Issue/Issue.jsx';

const IssuesListingBody = (props) => {
  return (
    <ul>
      {props.issuesData.filter((item) => ((item.state === 'open' && props.state.showOpen === true) || (item.state === 'closed' && props.state.showOpen === false ))).map((element) => <Issue
        item={element}
        state={props.state}
        updateIssues={props.updateIssues}
        changeItemState={props.changeItemState}
      />)}
    </ul>
  );
};

export default IssuesListingBody;
