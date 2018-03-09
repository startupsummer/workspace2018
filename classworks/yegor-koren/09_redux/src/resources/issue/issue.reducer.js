const initialStore = {
  issues: [],
  filter: 'open',
  filterSearch: '',
  descriptionTitle: '',
  descriptionBody: '',
};

const reducer = (store = initialStore, action) => {
  switch (action.type) {
    case 'GET_ISSUE':
      return {
        ...store,
        issues: action.issues,
      };
    case 'NEW_ISSUE':
      return {
        ...store,
        issues: [action.issue, ...store.issues],
      };
    case 'CHANGE_ISSUE':
      return {
        ...store,
        issues: action.newIssues,
      };
    case 'CHANGE_FILTER':
      return {
        ...store,
        filter: action.filter,
      };
    case 'CHANGE_FILTER_SEARCH':
      return {
        ...store,
        filterSearch: action.filterSearch,
      };
    case 'UPDATE_DESCRIPTION':
      return {
        ...store,
        descriptionTitle: action.descriptionNew.descriptionTitle,
        descriptionBody: action.descriptionNew.descriptionBody,
      };
    default:
      return store;
  }
};

export default reducer;
