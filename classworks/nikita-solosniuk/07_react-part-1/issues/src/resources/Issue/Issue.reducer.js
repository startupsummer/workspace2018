function issueReducer(state = { issuesList: [] }, action) {
  switch (action.type) {
    case 'GET_DATA':
      return ({ ...state, issuesList: action.payload });
    case 'ISSUE_CHANGED':
    {
      const issuesList = [
        action.payload,
        ...state.issuesList.filter(issue => issue.id !== action.payload.id),
      ];
      return { issuesList };
    }
    case 'NEW_ISSUE':
      return ({ ...state, issuesList: [action.payload, ...state.issuesList] });

    default:
      return state;
  }
}

export default issueReducer;
