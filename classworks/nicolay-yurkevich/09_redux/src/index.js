import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { issuesReducer } from './resources/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { state } from './resources/store';
import { getIssueList } from './resources/actions.jsx';

const store = createStore(issuesReducer, state, applyMiddleware(thunk));
store.dispatch(getIssueList());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
