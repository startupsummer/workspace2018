import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Components/App/App';

ReactDOM.render(<App />
  , document.getElementById('root'));
registerServiceWorker();
