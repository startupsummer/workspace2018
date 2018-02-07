import { createSelector } from 'reselect';

const filterGetter = state => state.issues.filter || 'open';
const issuesGetter = state => state.issues.items || [];

// eslint-disable-next-line
export const filtratedIssuesSelector = createSelector(filterGetter, issuesGetter, (filter, issues) => {
  return issues.filter(item => item.state === filter);
});

export const openIssuesCount = state =>
  state.issues.items.filter(item => item.state === 'open').length;

export const closedIssuesCount = state =>
  state.issues.items.filter(item => item.state === 'closed').length;
