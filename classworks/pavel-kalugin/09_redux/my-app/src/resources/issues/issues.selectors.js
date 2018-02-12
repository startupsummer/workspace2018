const stateFilter = state => item => state === item.state;
const searchFilter = searchQuery => item =>
  item.title.toUpperCase()
    .includes(searchQuery.toUpperCase());

export const getActiveTab = state => state.activeTab;
export const getSearchQuery = state => state.searchQuery;

export const getIssues = state =>
  state.issues
    .filter(searchFilter(state.searchQuery));

export const getOpenIssues = state =>
  state.issues
    .filter(stateFilter('open'))
    .filter(searchFilter(state.searchQuery))
    .length

export const getClosedIssues = state =>
  state.issues
    .filter(stateFilter('closed'))
    .filter(searchFilter(state.searchQuery))
    .length
