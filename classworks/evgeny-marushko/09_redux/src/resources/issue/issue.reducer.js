/* eslint-disable no-param-reassign */
const initialState = { issues: [], showOpen: true };
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_ISSUE':
      return { ...state, issues: action.issue };
    case 'CREATE_ISSUE':
      return { issues: [...state.issues, action.issue], showOpen: state.showOpen };
    case 'CHANGE_STATE':
      if (action.issue.state === 'open') {
        action.issue.state = 'closed';
      } else {
        action.issue.state = 'open';
      }
      return { issues: [...state.issues], showOpen: state.showOpen };
    case 'SHOW_OPEN':
      return { issues: [...state.issues], showOpen: true };
    case 'SHOW_CLOSED':
      return { issues: [...state.issues], showOpen: false };
    default:
      return state;
  }
}
