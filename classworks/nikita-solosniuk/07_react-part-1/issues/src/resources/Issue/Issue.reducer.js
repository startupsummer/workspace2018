function issueReducer(state = {issuesList: []}, action) {
  switch (action.type) {
    case 'GET_DATA':
      return ({issuesList: action.payload.issuesList});
    case 'ISSUE_CHANGED':
      const newIssueList = state.issuesList.map(issue => {
        issue.id === action.payload.id ? issue.state = action.payload.state : null;
        return issue;
      });
      return ({issuesList: newIssueList});
    default:
      return state;
  }
}

export default issueReducer;