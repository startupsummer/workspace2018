/* eslint-disable no-param-reassign */
const initialState = { issues: [], viewState: 'open' };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ISSUES_FETCHED':
      return { ...state, issues: action.issue };
    case 'ISSUE_CREATED':
      return { ...state, issues: [...state.issues, action.issue] };
    case 'ISSUE_UPDATED':
      return {
        issues: [...state.issues.filter((item => item.id !== action.issue.id)), action.issue],
        viewState: state.viewState,
      };
    case 'VIEW_STATE_CHANGED':
      return { ...state, viewState: action.viewState };
    default:
      return state;
  }
}
