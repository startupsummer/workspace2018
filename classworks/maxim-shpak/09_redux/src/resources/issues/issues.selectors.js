const IssuesSelectors = {
  getIssuesList: state => state.issuesReducer.issuesList,

  getSearchValue: state => state.issuesReducer.searchValue,

  getActiveTab: state => state.issuesReducer.activeTab,

  getOpenIssuesAmount: state => state.issuesReducer.issuesList
    .filter(item => item.title.toLowerCase()
      .includes(state.issuesReducer.searchValue.toLowerCase()))
    .filter(item => item.state === 'open').length,

  getClosedIssuesAmount: state => state.issuesReducer.issuesList
    .filter(item => item.title.toLowerCase()
      .includes(state.issuesReducer.searchValue.toLowerCase()))
    .filter(item => item.state === 'closed').length,

  getSearchResult: state => state.issuesReducer.issuesList
    .filter(item => item.title.toLowerCase()
      .includes(state.issuesReducer.searchValue.toLowerCase())),
};

export default IssuesSelectors;

