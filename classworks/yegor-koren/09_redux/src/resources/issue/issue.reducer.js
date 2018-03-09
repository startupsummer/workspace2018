import data from '../../issues-data';

const initialStore = {
  issues: [...data],
  filter: 'open',
  filterSearch: '',
  descriptionTitle: '',
  descriptionBody: '',
};

const reducer = (store = initialStore, action) => {
  const newStore = { ...store };
  switch (action.type) {
    case 'NEW_ISSUE':
      newStore.issues.unshift(action.issue);
      return newStore;
    case 'CHANGE_ISSUE':
      return {
        ...store,
        issues: action.newIssues,
      };
    case 'CHANGE_FILTER_TO_OPEN':
      newStore.filter = 'open';
      return newStore;
    case 'CHANGE_FILTER_TO_CLOSED':
      newStore.filter = 'closed';
      return newStore;
    default:
      return store;
  }
};

export default reducer;
