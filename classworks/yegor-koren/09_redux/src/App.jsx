import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Main from './components/main/Main';


const App = () => (
  <Router>
    <React.Fragment>
      <Route path="/" component={Header} />
      <Route path="/" component={Main} />
    </React.Fragment>
  </Router>
);

export default App;
