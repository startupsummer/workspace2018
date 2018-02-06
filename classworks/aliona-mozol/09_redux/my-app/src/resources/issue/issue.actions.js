/* eslint-disable import/prefer-default-export */

export const getGithubIssues = () => dispatch =>
  fetch('https://api.github.com/repos/AlionaMozol/hello-world/issues?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all')
    .then(response => response.json())
    .then(githubIssues => dispatch({ type: 'GITHUB_ISSUES_RECEIVED', githubIssues }));

export const addNewIssue = () => (dispatch) => {
  const id = Math.round(Math.random() * 1000000000);
  const newOpenIssue = {
    title: 'Brand new open issue',
    state: 'open',
    body: 'Super Simple description',
  };
  fetch('https://api.github.com/repos/AlionaMozol/hello-world/issues?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...newOpenIssue, id }),
  })
    .then(response => response.json())
    .then((issue) => {
      dispatch({ type: 'NEW_ISSUE_CREATED', issue });
    });
};

export const updateSearchQuery = query => dispatch => dispatch({ type: 'SEARCH_QUERY_UPDATED', query });

export const switchIssueState = issue => (dispatch) => {
  const newState = issue.state === 'open' ? 'closed' : 'open';
  fetch(`https://api.github.com/repos/AlionaMozol/hello-world/issues/${issue.number}?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ state: newState }),
  })
    .then(response => response.json())
    .then((updatedIssue) => {
      dispatch({ type: 'ISSUE_STATE_CHANGED', issue, updatedIssue });
    });
};

export const setIssueStatusToShow = status => dispatch => dispatch({ type: 'STATUS_CHANGED', status });
