const initialState = {
  issuesArr: [],
  countOpen: 0,
  countClose: 0,
  issuesStatus: 'open',
  //lastId: 242209484,

};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GITHUB_ISSUES':
      return {
        ...state,
        issuesArr: action.gitData,
        countOpen: action.gitData.filter(item => item.state === 'open').length,
        countClose: action.gitData.filter(item => item.state === 'closed').length,
      };

    case 'REOPEN_ISSUE':
      return {
        ...state,
        issuesStatus: 'open',
      };

    case 'CLOSED_ISSUE':
      return {
        ...state,
        issuesStatus: 'closed',
      };

    case 'ADD_NEW_ISSUE':
      return {
        ...state,
        issuesArr: [...state.issuesArr, action.newItem],
      };

    case 'SWITCH_ISSUE_STATUS':
      return {
        ...state,
        issuesArr:
         [action.updateIssue, ...state.issuesArr.filter(item => item.id !== action.issue.id)],
      };

    default:
      return state;
  }
};


export default issueReducer;
