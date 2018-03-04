import issues from '../../issues-data.js';

export const data = issues;

export const getIssue = (props) => {
  return props.issuesList.find(item => `${item.id}` === props.itemId);
};

export const getOpenedIssues = (props) => {
  return props.issuesData.filter((issue) => issue.state === 'open');
};

export const getClosedIssues = (props) => {
  return props.issuesData.filter((issue) => issue.state === 'closed');
};

export const getIssuesByState = (props) => {
  return props.issuesData.filter(item => (
    (item.state === 'open' && props.showOpen === true) || (item.state === 'closed' && props.showOpen === false)
  ));
};
