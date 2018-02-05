export const getActiveTab = state => state.activeTab;
export const getIssueByID = (state, id) => state.issues
  .find( item => item.id === this.id);
export const getSearchQuery = state => state.searchQuery;
export const getOpenIssues = state => state.openIssues;
export const getClosedIssues = state => state.closedIssues;
export const getIssues = state => state.issues;
