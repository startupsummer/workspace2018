export const getIssues = state => state.issue.issues;

export const getFilter = state => state.issue.filter;

export const getFilterSearch = state => state.issue.filterSearch;

export const getIssuesOpen = state => (state.issue.issues.filter(item => item.state === 'open'));

export const getIssuesOpenNumber = state => getIssuesOpen(state).length;

export const getIssuesClosedNumber = state =>
  state.issue.issues.length - getIssuesOpenNumber(state);

export const getDescriptionTitle = state => state.issue.descriptionTitle;

export const getDescriptionBody = state => state.issue.descriptionBody;
