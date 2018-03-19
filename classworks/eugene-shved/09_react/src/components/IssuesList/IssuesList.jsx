/* eslint-disable linebreak-style, jsx-a11y/anchor-is-valid */
import React from 'react';
import Issue from '../Issue/Issue';
const IssuesList = (props) => {
  return (
    <ul className="issues">
      {props.list.map((issue) => {
        return (
          <li className="issues__item" key={issue.id}>
            <Issue
              action={(props.viewState === 'open') ? 'Close' : 'Open'}
              changeState={props.changeState}
              issue={issue}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default IssuesList;
