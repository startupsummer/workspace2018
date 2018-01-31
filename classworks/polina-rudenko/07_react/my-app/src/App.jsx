import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
import IssuePage from './components/issue-page/IssuePage';
import data from './issues-data';


class App extends Component {
  state={
    issuesArr: data,
    countOpen: 4,
    countClose: 1,
    newItem: { title: 'New Issue', state: 'open' },
    lastId: 242209484,
    issuesStatus: 'open',
  };

  onClickOpen = () => {
    this.setState({
      this.state.issuesStatus: 'open',
    });
  }

  onClickClose = () => {
    this.setState({
      this.state.issuesStatus: 'closed',
    });
  }

    changeCountOpen = () => {
      this.setState({
        countOpen: this.state.countOpen + 1,
        countClose: this.state.countClose - 1,
      });
    }

    changeCountClose = () => {
      this.setState({
        countClose: this.state.countClose + 1,
        countOpen: this.state.countOpen - 1,
      });
    }

    countNewIssue = () => {
      this.setState({
        countOpen: this.state.countOpen + 1,
      });
    }

    addNewIssue = () => {
      this.setState({
        issuesArr: [...this.state.issuesArr, { ...this.state.newItem, id: this.state.lastId }],
        lastId: this.state.lastId + 1,
      });
      this.countNewIssue();
    }

    switchIssueStatus = id => () => {
      let status;
      const updateIssue = this.state.issuesArr.map((issue) => {
        if (issue.id === id) {
          status = issue.state;

          const state = {
            open: 'closed',
            closed: 'open',
          };

          return {
            ...issue,
            state: state[issue.state],
          };
        }
        return issue;
      });
      this.setState({
        issuesArr: updateIssue,
      });
      if (status === 'open') {
        this.changeCountClose();
      } else {
        this.changeCountOpen();
      }
    }


    render() {
      return (
        <div>
          <Header />
          <main className="content">
            <Router>
              <div>
                <Pagehead
                  countOpen={this.state.countOpen}
                />
                <div className="container">
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <IssuesListing
                        addNewIssue={this.addNewIssue}
                        issuesArr={this.state.issuesArr}
                        countOpen={this.state.countOpen}
                        countClose={this.state.countClose}
                        changeCountOpen={this.changeCountOpen}
                        changeCountClose={this.changeCountClose}
                        countNewIssue={this.countNewIssue}
                        switchIssueStatus={this.switchIssueStatus}
                        onClickClose={this.onClickClose}
                        onClickOpen={this.onClickOpen}
                        issuesStatus={this.issuesStatus}
                      />
                  )}
                  />
                  <Route
                    path="/issue"
                    render={() => (
                      <IssuePage

                      />
                    )}
                  />
                </div>
              </div>
            </Router>
          </main>
        </div>
      );
    }
}

export default App;
