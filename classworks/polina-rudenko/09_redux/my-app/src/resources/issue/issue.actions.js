/* eslint-disable import/prefer-default-export */

export const getGithubIssues = () => dispatch =>
  fetch('https://api.github.com/repos/Rudenkopolina/Task-9/issues?access_token=bc35937655ccc328c2a99a15e57af380d44460dc&state=all')
    .then(response => response.json())
    .then(gitData => dispatch({ type: 'GET_GITHUB_ISSUES', gitData }));

export const getissuesStatusOpen = () => dispatch => dispatch({ type: 'REOPEN_ISSUE' });

export const getissuesStatusClosed = () => dispatch => dispatch({ type: 'CLOSED_ISSUE' });

export const addNewIssue = () => (dispatch) => {
  const newIssue = {
    title: 'qwerty',
    state: 'open',
    body: 'Очень много важного текста. Очень много важного текста. Очень много важного текста. Очень много важного текста.',
  };
  fetch('https://api.github.com/repos/Rudenkopolina/Task-9/issues?access_token=bc35937655ccc328c2a99a15e57af380d44460dc', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...newIssue,
    }),
  })
    .then(response => response.json())
    .then(newItem => dispatch({ type: 'ADD_NEW_ISSUE', newItem }));
};

export const switchIssueStatus = issue => (dispatch) => {
  const updateStatus = issue.state === 'open' ? 'closed' : 'open';
  fetch(`https://api.github.com/repos/Rudenkopolina/Task-9/issues/${issue.number}?access_token=bc35937655ccc328c2a99a15e57af380d44460dc`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      state: updateStatus,
    }),
  })
    .then(response => response.json())
    .then(updateIssue => dispatch({ type: 'SWITCH_ISSUE_STATUS', issue, updateIssue }));
};
