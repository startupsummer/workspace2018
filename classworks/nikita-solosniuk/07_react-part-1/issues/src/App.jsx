import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import IssuesListing from './components/IssuesListing/IssuesListing';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Pagehead from './components/Pagehead/Pagehead';
import Description from './components/Decription/Description';
import './App.css';
import * as issuesActions from './resources/Issue/Issue.actions';
import * as issuesSelector from './resources/Issue/Issue.selectors';

class App extends Component {
  render() {
    const openIssueCount = this.props.issuesList.filter(i => i.state === 'open').length;
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Pagehead issuesCount={openIssueCount} />
            <Route exact path="/" render={() => <IssuesListing issuesList={this.props.issuesList} />} />
            <Route
              exact
              path="/description/:id"
              render={props =>
                <Description
                  id={props.match.params.id}
                  issuesList={this.props.issuesList}
                />
              }
            />
          </main>
        </div>
      </Router>
    );
  }
  componentDidMount () {
    this.props.getIssueList();
  };
}

export default connect (
  (store) => ({
    issuesList: issuesSelector.getIssuesList(store),
  }),
  {
    getIssueList: issuesActions.getIssueList,
  },
)(App);
