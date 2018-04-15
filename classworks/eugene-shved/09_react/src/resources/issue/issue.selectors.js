export const getIssueViewStats = (state) => {
  if (state.viewState === 'open') {
    return state.issues.filter(item => item.state === 'open');
  }
  return state.issues.filter(item => item.state === 'closed');
};

export const getOpenIssues = state =>
  state.issues.filter(item => item.state === 'open');

export const getClosedIssues = state =>
  state.issues.filter(item => item.state === 'closed');

export const getOpenIssuesCount = state =>
  state.issues.filter(item => item.state === 'open').length;

export const getClosedIssuesCount = state =>
  state.issues.filter(item => item.state === 'closed').length;

export const getIssues = state => state.issues;

export const getViewState = state => state.viewState;
