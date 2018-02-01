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

  newIssue = (obj) => {
    this.setState({ issuesList: [...this.props.issuesList, obj] });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            {console.log(this.props)}
            <Pagehead issuesCount={this.props.issuesList.filter(i => i.state === 'open').length} />
            <Route exact path="/" render={() => <IssuesListing newIssue={this.newIssue} issuesList={this.props.issuesList} changeState={this.changeState} />} />
            <Route exact path="/description/:id" render={props => <Description id={props.match.params.id} issuesList={this.state.issuesList} />} />
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
)
(App);
