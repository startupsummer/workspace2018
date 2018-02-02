export const getIssuesList = state => state.issueReducer.issuesList;
export const getIssueById = (state, id) => state.issueReducer.issuesList.find(i => i.id === id);
