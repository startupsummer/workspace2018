import data from '../../issues-data.js';

const initialState = {
  issues: data,
  openCount: data.filter(item => item.state === 'open').length,
  closedCount: data.filter(item => item.state === 'closed').length,
  viewState: 'open',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'NEW_ISSUE':
      return { ...state, issues: [action.payload, ...state.issues] };
    case 'CHANGE_STATE':
    return {...state, issues: state.issues.map(item => 
      (item.id == action.id)
      ? {...item, state: 'closed'}
      : {...item}
    )}
    case 'OPEN_TAB_CLICK':
      return {...state, viewState: action.payload};
    case 'CLOSE_TAB_CLICK':
      return {...state, viewState: action.payload};
    case 'ISSUE_CLICK':
      return {...state, title: action.payload};
    default:
      return state;
  }
}