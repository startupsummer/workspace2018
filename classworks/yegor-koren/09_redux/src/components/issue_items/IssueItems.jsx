import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../issue/Issue';
import './issue_items.style.css';

const IssueItems = ({
  changeIssue,
  issues,
  filter,
  setDescription,
}) => {
  const buttonName = filter === 'open' ? 'Close issue' : 'Open issue';
  const icon = filter === 'open' ?
    (
      <div className="issues__status issues__status--open">
        <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" /></svg>
      </div>
    ) :
    (
      <div className="issues__status issues__status--closed">
        <svg aria-hidden="true" className=" issues__icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z" /></svg>
      </div>
    );
  const issuesList = issues.map((item) => {
    const itemAction = () => setDescription(item.title, item.body);
    return (
      <Issue
        key={item.id}
        id={item.id}
        icon={icon}
        title={item.title}
        itemAction={itemAction}
        buttonName={buttonName}
      />
    );
  });

  return (
    <ul className="issues" >
      {issuesList}
    </ul>
  );
};

IssueItems.propTypes = {
  changeIssue: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default IssueItems;
