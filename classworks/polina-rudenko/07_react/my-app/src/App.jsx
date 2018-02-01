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


class App extends Component {
  state={
    issuesArr: [],
    countOpen: 0,
    countClose: 0,
    newItem: { title: 'New Issue', state: 'open', body: 'description' },
    lastId: 242209484,
    issuesStatus: 'open',
  };

  componentDidMount() {
    fetch('https://api.github.com/repos/Rudenkopolina/Task-8-React/issues?access_token=bc35937655ccc328c2a99a15e57af380d44460dc&state=all')
      .then(response => response.json())
      .then(gitData =>
        this.setState({
          issuesArr: gitData,
          countOpen: gitData.filter(item => item.state === 'open').length,
          countClose: gitData.filter(item => item.state === 'closed').length,
        }));
  }

  onClickOpen = () => {
    this.setState({
      issuesStatus: 'open',
    });
  }

  onClickClose = () => {
    this.setState({
      issuesStatus: 'closed',
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
      const id = this.state.lastId;
      this.setState({
        issuesArr: [...this.state.issuesArr, { ...this.state.newItem, id: this.state.lastId }],
        lastId: this.state.lastId + 1,
      });
      this.countNewIssue();
      fetch('https://api.github.com/repos/Rudenkopolina/Task-8-React/issues?access_token=bc35937655ccc328c2a99a15e57af380d44460dc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...this.state.newItem,
          id,
        }),
      });
    };

    switchIssueStatus = id => () => {
      let status;
      const targetIssue = this.state.issuesArr.find(item => item.id === id);
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
      fetch(`https://api.github.com/repos/Rudenkopolina/Task-8-React/issues/${targetIssue.number}?access_token=bc35937655ccc328c2a99a15e57af380d44460dc`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          state: 'closed',
        }),
      });
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
                        issuesStatus={this.state.issuesStatus}
                      />
                  )}
                  />
                  <Route
                    path="/:id"
                    render={props => (
                      <IssuePage
                        id={props.match.params.id}
                        issuesArr={this.state.issuesArr}
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
