import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import issues from './issues/issues.reducer';

export default combineReducers({
  routing: routerReducer,
  issues,
});
