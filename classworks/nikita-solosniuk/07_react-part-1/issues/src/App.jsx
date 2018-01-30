/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Pagehead from './components/Pagehead/Pagehead';
import IssuesListing from './components/IssuesListing/IssuesListing';
import data from './issues-data';

class App extends Component {
  state = {
    issuesList: data,
  };

  changeState = id => () => {
    const target = this.state.issuesList.find(i => i.id === id);
    const newState = target.state === 'open' ? 'closed' : 'open';
    const issuesList = this.state.issuesList.map(i => (i.id === id ? { ...i, state: newState } : i));
    this.setState({ issuesList });
  };

  newIssue = (obj) => {
    this.setState({ issuesList: [...this.state.issuesList, obj] });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Pagehead issuesCount={this.state.issuesList.filter(i => i.state === 'open').length} />
          <IssuesListing newIssue={this.newIssue} issuesList={this.state.issuesList} changeState={this.changeState} />
        </main>
      </div>
    );
  }
}

export default App;
