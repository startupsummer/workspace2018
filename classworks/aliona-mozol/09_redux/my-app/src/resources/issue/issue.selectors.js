export const getIssues = store => store.issueReducer.data;

export const getCounterOpenIssues = store => store.issueReducer.counterOpenIssues;

export const getCounterClosedIssues = store => store.issueReducer.counterClosedIssues;

export const getSearchQuery = store => store.issueReducer.searchQuery;
