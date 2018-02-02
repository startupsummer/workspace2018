/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
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

IssuePage.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.strung,
  })).isRequired,
};

export default IssuePage;
