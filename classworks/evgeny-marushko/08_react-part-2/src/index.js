import React from 'react';
import ReactDOM from 'react-dom';
import './Components/Header/Header.style.css';
import './Components/Issues/Issues.style.css';
import './Components/Pagehead/Pagehead.style.css';
import './Components/Repohead/Repohead.style.css';
import './Components/Issue/Issue.style.css';
import './Components/IssuePage/IssuePage.style.css';
import './main.css';
import App from './Components/App/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
