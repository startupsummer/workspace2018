import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssuesListing from './components/IssuesListing/IssuesListing';
import Header from './components/Header/Header';
import Pagehead from './components/Pagehead/Pagehead';
import Description from './components/Description/Description';
import './App.css';
import * as issuesActions from './resources/Issue/Issue.actions';
import * as issuesSelector from './resources/Issue/Issue.selectors';

class App extends Component {
  componentDidMount() {
    this.props.getIssueList();
  }

  render() {
    const openIssueCount = this.props.issuesList.filter(i => i.state === 'open').length;
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Pagehead issuesCount={openIssueCount} />
            <Route
              exact
              path="/"
              render={() =>
                (<IssuesListing
                  issuesList={this.props.issuesList}
                />)
              }
            />
            <Route
              exact
              path="/description/:id"
              render={props =>
                (<Description
                  id={props.match.params.id}
                  issuesList={this.props.issuesList}
                />)
              }
            />
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  issuesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
  getIssueList: PropTypes.func.isRequired,
};

export default connect(
  store => ({
    issuesList: issuesSelector.getIssuesList(store),
  }),
  {
    getIssueList: issuesActions.getIssueList,
  },
)(App);
