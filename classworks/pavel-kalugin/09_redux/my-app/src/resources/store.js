import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import issuesReducer from './issues/issues.reducer';

const store = createStore(issuesReducer, applyMiddleware(thunk));

export default store;
