const IssuesActions = {
  createIssue: payload => dispatch => dispatch({ type: 'CREATE_ISSUE', payload }),
  liftUpIssue: payload => dispatch => dispatch({ type: 'LIFT_UP_ISSUE', payload }),
  setActiveTab: payload => dispatch => dispatch({ type: 'SET_ACTIVE_TAB', payload }),
  setIssueState: payload => dispatch => dispatch({ type: 'SET_ISSUE_STATE', payload }),
  setSearchValue: payload => dispatch => dispatch({ type: 'SET_SEARCH_VALUE', payload }),
  toggleActiveTab: () => dispatch => dispatch({ type: 'TOGGLE_ACTIVE_TAB' }),
  toggleIssueState: payload => dispatch => dispatch({ type: 'TOGGLE_ISSUE_STATE', payload }),
};

export default IssuesActions;
