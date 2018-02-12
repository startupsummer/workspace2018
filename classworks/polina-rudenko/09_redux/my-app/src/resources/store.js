import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import issueReducer from './issue/issue.reducer';

const reduser = combineReducers({ issueReducer });
const store = createStore(reduser, applyMiddleware(thunk));

export default store;
