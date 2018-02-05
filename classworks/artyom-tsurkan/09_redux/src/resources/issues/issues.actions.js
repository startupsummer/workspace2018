import * as API from './issues.api';

export function getIssues() {
  return async (dispatch) => {
    dispatch({ type: 'GET_ISSUES_PENDING' });

    try {
      const payload = await API.getIssues();

      dispatch({ type: 'GET_ISSUES_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'GET_ISSUES_FAILURE', error: err.message });
    }
  };
}

export function switchIssueStatus(issue) {
  return async (dispatch) => {
    try {
      const payload = await API.switchIssueStatus(issue);

      dispatch({ type: 'SWITCH_ISSUE_STATUS_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'SWITCH_ISSUE_STATUS_FAILURE', error: err.message });
    }
  };
}

export function createIssue() {
  return async (dispatch) => {
    try {
      const payload = await API.createIssue();

      dispatch({ type: 'CREATE_ISSUE_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'CREATE_ISSUE_FAILURE', error: err.message });
    }
  };
}

export function setFilter(filter) {
  return (dispatch) => {
    dispatch({
      type: 'SET_FILTER',
      filter,
    });
  };
}
