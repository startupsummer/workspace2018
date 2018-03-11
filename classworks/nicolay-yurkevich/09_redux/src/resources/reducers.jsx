import C from './constants';

const issuesReducer = (state = {}, action) => {
  let open = 0;
  let closed = 0;
  let openIssues;
  let bool;
  let data;
  switch (action.type) {
    case C.ToggleIssueState:
      data = state.data.map((item) => {
        if (action.payload.id !== item.id) {
          return item;
        }
        bool = false;
        if (action.payload.state === 'open') {
          return {
            ...item,
            state: 'open',
          };
        }
        bool = true;
        return {
          ...item,
          state: 'closed',
        };
      });
      if (bool) {
        return {
          ...state,
          openIssues: state.openIssues - 1,
          closedIssues: state.closedIssues + 1,
          data,
        };
      }
      return {
        ...state,
        openIssues: state.openIssues + 1,
        closedIssues: state.closedIssues - 1,
        data,
      };
    case C.OpenNewIssue:
      openIssues = state.openIssues;
      return {
        ...state,
        openIssues: openIssues + 1,
        data: [...state.data, action.payload],
      };
    case C.GetIssues:
      action.payload.forEach((item) => {
        if (item.state === 'open') {
          open += 1;
        } else {
          closed += 1;
        }
      });
      return {
        ...state,
        openIssues: open,
        closedIssues: closed,
        data: action.payload,
      };
    case C.SetCurrentState:
      return {
        ...state,
        currentState: action.payload,
      };
    default:
      return state;
  }
};

export default issuesReducer;
