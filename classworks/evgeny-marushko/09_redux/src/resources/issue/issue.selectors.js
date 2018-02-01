/* eslint-disable arrow-parens, no-undef, no-else-return */
export const getIssuesByShowOpen = (state) => {
  if (state.showOpen) {
    return state.issues.filter((item) => item.state === 'open');
  } else {
    return state.issues.filter((item) => item.state === 'closed');
  }
};

export const getOpenIssues = state =>
  state.issues.filter((item) => item.state === 'open');

export const getClosedIssues = () => state =>
  state.issues.filter((item) => item.state === 'closed');

export const getOpenIssuesCount = state =>
  state.issues.filter((item) => item.state === 'open').length;

export const getClosedIssuesCount = state =>
  state.issues.filter((item) => item.state === 'closed').length;

export const getIssues = state =>
  state.issues;
