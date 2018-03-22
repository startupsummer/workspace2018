/* eslint-disable arrow-parens, no-undef */
const token = '4a8d74051a1ee84d1d212ba4b6c70816dba18c70';
const { fetch } = window;

export const changeViewStats = dispatch => viewState => {
  dispatch({ type: 'VIEW_STATE_CHANGED', viewState });
};

export const createIssue = dispatch => () => {
  fetch(`https://api.github.com/repos/Evshved/sample-repository-for-task-8/issues?access_token=${token}`, {
    method: 'POST',
    body: JSON.stringify({ title: 'new_issue', body: 'paralect' }),
  })
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUE_CREATED', issue: data }));
};

export const getIssueFromGit = dispatch => () => {
  fetch(`https://api.github.com/repos/Evshved/sample-repository-for-task-8/issues?number=2&access_token=${token}&state=all`)
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUES_FETCHED', issue: data }));
};

export const changeIssueState = dispatch => issue => {
  const state = issue.state === 'open' ? 'closed' : 'open';
  fetch(`https://api.github.com/repos/Evshved/sample-repository-for-task-8/issues/${issue.number}?access_token=${token}`, {
    method: 'PATCH',
    body: JSON.stringify({ state }),
  })
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUE_UPDATED', issue: data }));
};
