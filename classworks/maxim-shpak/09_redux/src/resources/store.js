import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import issuesReducer from './issues/issues.reducer';

const reducers = combineReducers({
  issuesReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
