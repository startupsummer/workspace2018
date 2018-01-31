import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();
