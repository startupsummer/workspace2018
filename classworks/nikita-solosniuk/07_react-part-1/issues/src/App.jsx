import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import IssuesListing from './components/IssuesListing/IssuesListing';
import data from './issues-data';
import Header from './components/Header/Header';
import Pagehead from './components/Pagehead/Pagehead';
import Description from './components/Decription/Description';
import './App.css';

class App extends Component {
  state = {
    issuesList: data,
  };

  changeState = id => () => {
    const target = this.state.issuesList.find(i => i.id === id);
    const newState = target.state === 'open' ? 'closed' : 'open';
    const issuesList = this.state.issuesList.map(i => (i.id === id ?
      { ...i, state: newState } : i));
    this.setState({ issuesList });
  };

  newIssue = (obj) => {
    this.setState({ issuesList: [...this.state.issuesList, obj] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Pagehead issuesCount={this.state.issuesList.filter(i => i.state === 'open').length} />
            <Route exact path="/" render={() => <IssuesListing newIssue={this.newIssue} issuesList={this.state.issuesList} changeState={this.changeState} />} />
            <Route exact path="/description/:id" render={props => <Description id={props.match.params.id} issuesList={this.state.issuesList} />} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
