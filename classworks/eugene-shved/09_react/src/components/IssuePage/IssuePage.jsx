/* eslint-disable linebreak-style */
import React from 'react';
import './IssuePage.style.css';

const IssuePage = (props) => {
  let issue = props.list.find(item => +props.id === item.id);
  if (issue === undefined) {
    issue = { title: 'loadung...', body: 'loading...' };
  }
  return (
    <div>
      <header className="issue-page--header">{issue.title}</header>
      <main className="issue-page--main">{issue.body}</main>
    </div>
  );
};

export default IssuePage;
