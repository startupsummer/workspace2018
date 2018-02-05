import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './issue/issue.reducer';

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
