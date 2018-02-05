export const getIssues = store => store.issueReducer.issuesArr;

export const getCountOpen = store => store.issueReducer.issuesArr.filter(item => item.state === 'open').length;

export const getCountClose = store => store.issueReducer.issuesArr.filter(item => item.state === 'closed').length;

export const getissuesStatus = store => store.issueReducer.issuesStatus;
