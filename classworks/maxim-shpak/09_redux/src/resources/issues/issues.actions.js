/* global fetch */
const path = 'https://api.github.com/repos/Max-Starling/IssuesPage';
const publicToken = 'a38459b7ac8b6a8b62f5bfe877b4669099d12cc3';

const IssuesActions = {
  createIssue: issue => dispatch =>
    fetch(`${path}/issues?access_token=${publicToken}&state=all`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(issue),
    })
      .then(response => response.json())
      .then(payload => dispatch({ type: 'CREATE_ISSUE', payload })),

  fetchIssues: () => dispatch => fetch(`${path}/issues?access_token=${publicToken}&state=all`)
    .then(response => response.json())
    .then(payload => dispatch({ type: 'FETCH_ISSUES', payload })),

  liftUpIssue: payload => dispatch => dispatch({ type: 'LIFT_UP_ISSUE', payload }),

  setActiveTab: payload => dispatch => dispatch({ type: 'SET_ACTIVE_TAB', payload }),

  setIssueState: issue => dispatch =>
    fetch(`${path}/issues/${issue.number}?access_token=${publicToken}&state=all`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ state: issue.state }),
    })
      .then(response => response.json())
      .then(payload => dispatch({ type: 'SET_ISSUE_STATE', payload })),

  setSearchValue: payload => dispatch => dispatch({ type: 'SET_SEARCH_VALUE', payload }),

  toggleActiveTab: () => dispatch => dispatch({ type: 'TOGGLE_ACTIVE_TAB' }),

  toggleIssueState: issue => dispatch =>
    fetch(`${path}/issues/${issue.number}?access_token=${publicToken}&state=all`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ state: (issue.state === 'open') ? 'closed' : 'open' }),
    })
      .then(response => response.json())
      .then(payload => dispatch({ type: 'TOGGLE_ISSUE_STATE', payload })),
};

export default IssuesActions;
