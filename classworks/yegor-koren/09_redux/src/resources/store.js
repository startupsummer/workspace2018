import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import issue from './issue/issue.reducer';

const reducer = combineReducers({ issue });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
