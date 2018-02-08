const initialState = {
  issues: [],
  activeTab: 'open',
  searchQuery: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        activeTab: action.tabType,
      };
    case 'SEARCH_ISSUE':
      return {
        ...state,
        searchQuery: action.searchQuery,
      };
    case 'CREATE_ISSUE':
      return {
        ...state,
        issues: [...state.issues, action.newIssue],
      };
    case 'FETCH_DATA':
      return {
        ...state,
        issues: action.payload,
      };
    case 'REOPEN_ISSUE':
      return {
        ...state,
        issues: state.issues
          .map(issue => (issue.id === action.issue.id
            ? { ...issue, ...action.issue, state: 'open' } : issue)),
      };
    case 'CLOSE_ISSUE':
      return {
        ...state,
        issues: state.issues
          .map(issue => (issue.id === action.issue.id
            ? { ...issue, ...action.issue, state: 'closed' } : issue)),
      };
    default:
      return state;
  }
}

export default reducer;
