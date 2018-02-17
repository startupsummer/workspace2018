import initialIssuesList from './initialIssuesList';

const toggleState = currentState => ((currentState === 'open') ? 'closed' : 'open');

const initialIssuesState = {
  issuesList: initialIssuesList,
  searchValue: '',
  activeTab: 'open',
};

const issuesReducer = (state = initialIssuesState, action) => {
  switch (action.type) {
    case 'CREATE_ISSUE':
      return {
        ...state,
        issuesList: [action.payload, ...state.issuesList],
      };

    case 'FETCH_ISSUES':
      return {
        ...state,
        issuesList: action.payload,
      };

    case 'SET_ACTIVE_TAB':
      return {
        ...state,
        activeTab: action.payload,
      };

    case 'SET_ISSUE_STATE':
      return {
        ...state,
        issuesList: (
          state.issuesList.map((issue) => {
            if (issue.id === action.payload.id) {
              return {
                ...issue,
                state: action.payload.state,
              };
            }
            return issue;
          })),
      };

    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      };

    case 'TOGGLE_ACTIVE_TAB':
      return {
        ...state,
        activeTab: toggleState(state.activeTab),
      };

    case 'TOGGLE_ISSUE_STATE':
      return {
        ...state,
        issuesList: (
          state.issuesList.map((issue) => {
            if (issue.id === action.payload) {
              return {
                ...issue,
                state: toggleState(issue.state),
              };
            }
            return issue;
          })),
      };
    default:
      return state;
  }
};

export default issuesReducer;
