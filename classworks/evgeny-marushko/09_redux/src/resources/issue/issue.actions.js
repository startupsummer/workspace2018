/* eslint-disable arrow-parens, no-undef */
const token = '1023e3703d0ce88ec5e50d279115a576f72343b3';
const { fetch } = window;

export const getIssuesFromGithub = dispatch => () => {
  fetch(`https://api.github.com/repos/nrt3/07/issues?number=2&access_token=${token}&state=all`)
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUES_FETCHED', issue: data }));
};

export const changeIssueState = dispatch => issue => {
  const state = issue.state === 'open' ? 'closed' : 'open';

  fetch(`https://api.github.com/repos/nrt3/07/issues/${issue.number}?access_token=${token}`, {
    method: 'PATCH',
    body: JSON.stringify({ state }),
  })
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUE_UPDATED', issue: data }));
};

export const createIssue = dispatch => () => {
  fetch(`https://api.github.com/repos/nrt3/07/issues?access_token=${token}`, {
    method: 'POST',
    body: JSON.stringify({ title: 'new_issue', body: 'paralect' }),
  })
    .then(response => response.json())
    .then(data => dispatch({ type: 'ISSUE_CREATED', issue: data }));
};

export const changeViewState = dispatch => viewState => {
  dispatch({ type: 'VIEW_STATE_CHANGED', viewState });
};
