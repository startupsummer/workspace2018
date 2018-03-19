import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';

import registerServiceWorker from './registerServiceWorker';
import App from './Components/App/App';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
