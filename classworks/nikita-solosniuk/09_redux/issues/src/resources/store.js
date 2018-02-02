import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import issueReducer from './Issue/Issue.reducer';

const reducers = combineReducers({ issueReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
