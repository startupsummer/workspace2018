const initialState = {
  issues: [],
  activeTab: 'open',
  openIssues: 0,
  closedIssues: 0,
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
      const openFilter = item => item.state === 'open';
      const closedFilter = item => item.state === 'closed';
      const searchFilter = item => item.title.toUpperCase().includes(action.searchQuery.toUpperCase());

      return {
        ...state,
        searchQuery: action.searchQuery,
        openIssues: state.issues.filter(openFilter).filter(searchFilter).length,
        closedIssues: state.issues.filter(closedFilter).filter(searchFilter).length,
      };
    case 'CREATE_ISSUE':
      return {
        ...state,
        issues: [...state.issues, action.newIssue],
        openIssues: state.openIssues + 1,
      };
    case 'FETCH_DATA':
      console.log(action.payload);
      return {
        ...state,
        issues: action.payload,
        openIssues: action.payload.filter(issue => issue.state === 'open').length,
        closedIssues: action.payload.filter(i => i.state === 'closed').length,
      };
    case 'REOPEN_ISSUE':
      return {
        ...state,
        openIssues: state.openIssues + 1,
        closedIssues: state.closedIssues - 1,
        issues: state.issues
          .map(issue => issue.id === action.issue.id
          ? {...issue, ...action.issue, state: 'open'} : issue),
      }
    case 'CLOSE_ISSUE':
      return {
        ...state,
        openIssues: state.openIssues - 1,
        closedIssues: state.closedIssues + 1,
        issues: state.issues
          .map(issue => issue.id === action.issue.id
          ? {...issue, ...action.issue, state: 'closed'} : issue),
      }
    default:
      return state;
  }
}

export default reducer;
