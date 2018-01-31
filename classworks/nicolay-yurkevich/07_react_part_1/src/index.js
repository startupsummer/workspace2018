import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './issues-data.js'
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();