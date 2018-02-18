import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import {issuesReducer} from './resources/reducers';
import thunk from 'redux-thunk';
import './index.css';   
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {state} from './resources/store';
import {getIssueList} from './resources/actions.jsx'
const store = createStore(issuesReducer,state,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(getIssueList());
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();