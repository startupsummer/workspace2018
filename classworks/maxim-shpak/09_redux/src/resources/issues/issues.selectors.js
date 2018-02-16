const IssuesSelectors = {
  getIssuesList: store => store.issuesReducer.issuesList,

  getSearchValue: store => store.issuesReducer.searchValue,

  getActiveTab: store => store.issuesReducer.activeTab,

  getIssueById: (store, id) => IssuesSelectors.getIssuesList(store).find(item => `${item.id}` === id),

  getSearchResult: store => IssuesSelectors.getIssuesList(store)
    .filter(item => item.title.toLowerCase()
      .includes(store.issuesReducer.searchValue.toLowerCase())),

  getOpenIssuesAmount: store => IssuesSelectors.getSearchResult(store)
    .filter(item => item.state === 'open').length,

  getClosedIssuesAmount: store => IssuesSelectors.getSearchResult(store)
    .filter(item => item.state === 'closed').length,

  getSearchResultByState: store => IssuesSelectors.getSearchResult(store)
    .filter(item => item.state === IssuesSelectors.getActiveTab(store)),
};

export default IssuesSelectors;
