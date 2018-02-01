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
        activeTab: action.activeTab,
      };
    case 'CREATE_ISSUE':
      return {
        openIssuesCounter: state.openIssuesCounter + 1,
      };
    default:
      return state;
  }
}

export default reducer;
