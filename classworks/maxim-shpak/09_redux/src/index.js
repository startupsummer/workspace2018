import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './resources/store';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';


import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

registerServiceWorker();
