
/* ----- Dependencies ----- */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/* ----- Components ----- */
import Header from './components/Header/Header';

/* ----- Styles ----- */
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
