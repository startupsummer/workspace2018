import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import registerServiceWorker from './registerServiceWorker';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import store from './resources/store';

ReactDOM.render(<Provider store={store}><App /></Provider>
  , document.getElementById('root'));
registerServiceWorker();
