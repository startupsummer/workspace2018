/* eslint-disable import/prefer-default-export */

export const getGithubIssues = () => dispatch =>
  fetch('https://api.github.com/repos/AlionaMozol/hello-world/issues?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all')
    .then(response => response.json())
    .then(githubIssues => dispatch({ type: 'GET_GITHUB_ISSUES', githubIssues }));

export const addNewIssue = () => dispatch => dispatch({ type: 'ADD_NEW_ISSUE' });

// export const getSearchQuery = event => dispatch => dispatch({ type: 'GET_SEARCH_QUERY', event });

// export const searchIssues = query => dispatch => dispatch({ type: 'SEARCH_ISSUES', query });

export const updateSearchQuery = query => dispatch => dispatch({ type: 'SEARCH_QUERY_UPDATED', query });
