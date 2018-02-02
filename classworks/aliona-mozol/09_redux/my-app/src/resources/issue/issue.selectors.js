export const getCounterOpenIssues = store => store.issueReducer.data.filter(item => item.state === 'open').length;

export const getCounterClosedIssues = store => store.issueReducer.data.filter(item => item.state === 'closed').length;

export const getSearchQuery = store => store.issueReducer.searchQuery;

export const getStatus = store => store.issueReducer.status;

export const getFilteredIssues = store => store.issueReducer.data
  .filter(item => getStatus(store) === item.state)
  .filter(item => item.title.toLowerCase()
    .includes(getSearchQuery(store)));
