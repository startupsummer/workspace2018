export const getIssuesByViewState = state => {
	if (getViewState(state) === 'open') {
		return state.issues.filter(item => item.state === 'open');
	} else {
		return state.issues.filter(item => item.state === 'closed');
	}
};
  
export const getOpenIssuesCount = state =>
	state.issues.filter(item => item.state === 'open').length;
  
export const getClosedIssuesCount = state =>
	state.issues.filter(item => item.state === 'closed').length;
  
export const getIssues = state => state.issues;
  
export const getViewState = state => state.viewState;

export const getIssueTitle = state => state.title;
