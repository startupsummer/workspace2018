const initialState = {
  items: [],
  isFetching: false,
  filter: 'open',
};

export default function issues(state = initialState, action) {
  console.log('action', action);

  switch (action.type) {
    case 'GET_ISSUES_PENDING':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_ISSUES_SUCCESS':
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    case 'GET_ISSUES_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error.message,
      };


    case 'SWITCH_ISSUE_STATUS_SUCCESS':
      return {
        ...state,
        items: state.items.map(item => (item.id === action.payload.id ? action.payload : item)),
      };
    case 'SWITCH_ISSUE_STATUS_FAILURE':
      return {
        ...state,
        error: action.error.message,
      };


    case 'CREATE_ISSUE_SUCCESS':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case 'CREATE_ISSUE_FAILURE':
      return {
        ...state,
        error: action.error.message,
      };

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.filter,
      };


    default:
      return state;
  }
}

