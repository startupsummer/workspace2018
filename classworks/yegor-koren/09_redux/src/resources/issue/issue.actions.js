import WalterWhite from '../../new-issues-data';

export const newIssue = () => (dispatch) => {
  const issue = {
    id: Math.floor(Math.random() * 1000000000),
    title: WalterWhite[Math.floor(Math.random() * WalterWhite.length)],
    state: 'open',
  };
  dispatch({ type: 'NEW_ISSUE', issue });
};

export const changeIssue = obj => (dispatch) => {
  const { id, issues } = obj;
  const newIssues = issues.map((item) => {
    if (item.id === id) {
      const timeItem = { ...item };
      if (timeItem.state === 'open') timeItem.state = 'closed';
      else timeItem.state = 'open';

      // fetch(`https://api.github.com/repos/purpleow1/react/issues/${timeItem.number}?access_token=8684cc62a95b587704cf199ad98905c67533f63b&state=all`, {
      //   method: 'PATCH',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Accept: 'application/json',
      //   },
      //   body: JSON.stringify({
      //     state: timeItem.state,
      //   }),
      // });

      return timeItem;
    }
    return item;
  });
  dispatch({ type: 'CHANGE_ISSUE', newIssues });
};

export const changeFilter = filter => (dispatch) => {
  dispatch({ type: 'CHANGE_FILTER', filter });
};

export const changeFilterSearch = filterSearch => (dispatch) => {
  dispatch({ type: 'CHANGE_FILTER_SEARCH', filterSearch });
};
