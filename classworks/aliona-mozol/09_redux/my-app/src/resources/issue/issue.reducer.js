const initialState = {
  data: [],
  counterOpenIssues: 0,
  counterClosedIssues: 0,
  searchQuery: '',
};

const issueReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case 'GET_GITHUB_ISSUES':
      return {
        ...state,
        data: action.githubIssues,
        counterOpenIssues: action.githubIssues.filter(item => item.state === 'open').length,
        counterClosedIssues: action.githubIssues.filter(item => item.state === 'closed').length,
      };
    case 'ADD_NEW_ISSUE': {
      const id = Math.round(Math.random() * 1000000000);
      const newOpenIssue = {
        title: 'Brand new open issue',
        state: 'open',
        body: 'Super Simple description',
      };
      fetch('https://api.github.com/repos/AlionaMozol/hello-world/issues?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newOpenIssue, id }),
      });
      return {
        ...state,
        data: [...state.data, { ...newOpenIssue, id }],
        counterOpenIssues: state.counterOpenIssues + 1,
      };
    }
    // case 'GET_SEARCH_QUERY':
    //   return {
    //     ...state,
    //     searchQuery: action.event.target.value.toLowerCase(),
    //   };
    // case 'SEARCH_ISSUES':
    //   return {
    //     ...state,
    //     data: state.data.filter(item => item.title.toLowerCase()
    //       .includes(state.searchQuery)),
    //   };
    case 'SEARCH_QUERY_UPDATED': {
      return {
        ...state,
        searchQuery: action.query,
      };
    }
    default:
      return state;
  }
};

export default issueReducer;
