import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import issueReducer from '../resources/issue/issue.reducer';

const reducers = combineReducers({ issueReducer });
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
