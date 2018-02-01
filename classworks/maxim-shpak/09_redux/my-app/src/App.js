
/* ----- Dependencies ----- */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

/* ----- Components ----- */
import Header from './components/Header/Header';
import PageHead from './components/PageHead/PageHead';
import IssuesList from './components/IssuesList/IssuesList';

/* ----- Styles ----- */
import './App.css';


class App extends Component {
  state = { counter: 2 };
  setCounter = (value) => this.setState({ counter: value });
  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <main className="content">
            <PageHead counter={this.state.counter} />
            <div className="container">
              {/* <IssuesList setCounter={this.setCounter} /> */}
            </div>
          </main>
        </div>
      </Router>
    );
  };
}

export default App;
