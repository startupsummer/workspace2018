/* eslint-disable no-param-reassign */
const initialState = { issues: [], showOpen: true };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ISSUES_FETCHED':
      return { ...state, issues: action.issue, showOpen: state.showOpen };
    case 'ISSUE_CREATED':
      return { issues: [...state.issues, action.issue], showOpen: state.showOpen };
    case 'ISSUE_UPDATED':
      return { issues:
        [...state.issues.filter((item => item.id !== action.issue.id)), action.issue],
        showOpen: state.showOpen };
    case 'VIEW_STATE_OPEN':
      return { issues: [...state.issues], showOpen: true };
    case 'VIEW_STATE_CLOSED':
      return { issues: [...state.issues], showOpen: false };
    default:
      return state;
  }
}
