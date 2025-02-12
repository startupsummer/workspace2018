import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './resources/store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(App, null),
  ),
  document.getElementById('root'),
);

registerServiceWorker();
