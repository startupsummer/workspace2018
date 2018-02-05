const initialState = {
  data: [],
  counterOpenIssues: 0,
  counterClosedIssues: 0,
  searchQuery: '',
  status: 'open',
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GITHUB_ISSUES_RECEIVED':
      return {
        ...state,
        data: action.githubIssues,
      };
    case 'NEW_ISSUE_CREATED': {
      return {
        ...state,
        data: [action.issue, ...state.data],
      };
    }
    case 'SEARCH_QUERY_UPDATED': {
      return {
        ...state,
        searchQuery: action.query,
      };
    }
    case 'ISSUE_STATE_CHANGED': {
      return {
        ...state,
        data: [action.updatedIssue, ...state.data.filter(item => item.id !== action.issue.id)],
      };
    }
    case 'STATUS_CHANGED': {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export default issueReducer;
