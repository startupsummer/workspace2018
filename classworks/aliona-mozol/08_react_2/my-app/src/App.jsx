import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
// import data from './issues-data';
import IssuePage from './components/issue-page/IssuePage';

class App extends PureComponent {
  state = {
    data: [], // data
    counterOpenIssues: 0, // data.filter(item => item.state === 'open').length,
    counterClosedIssues: 0, // data.filter(item => item.state === 'closed').length,
    newOpenIssue: {
      title: 'New open issue',
      state: 'open',
    },
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/AlionaMozol/hello-world/issues?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all')
      .then(response => response.json())
      .then(gitData => this.setState({
        data: gitData,
        counterOpenIssues: gitData.filter(item => item.state === 'open').length,
        counterClosedIssues: gitData.filter(item => item.state === 'closed').length,
      }));
  }

  countAddNewOpenIssue = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues + 1,
    });
  };

  countSwitchClosedToOpen = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues + 1,
      counterClosedIssues: this.state.counterClosedIssues - 1,
    });
  };

  countSwitchOpenToClosed = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues - 1,
      counterClosedIssues: this.state.counterClosedIssues + 1,
    });
  };

  addNewIssue = () => {
    const id = Math.round(Math.random() * 1000000000);
    this.setState({
      data: [...this.state.data, { ...this.state.newOpenIssue, id }],
    });
    this.countAddNewOpenIssue();
  };

  switchIssueState = id => () => {
    const targetIssue = this.state.data.find(item => item.id === id);
    const newState = targetIssue.state === 'open' ? 'closed' : 'open';
    const newIssues = this.state.data
      .map(item => (item.id === id ? { ...targetIssue, state: newState } : item));
    this.setState({ data: newIssues });
    if (newState === 'closed') {
      this.countSwitchOpenToClosed();
    } else {
      this.countSwitchClosedToOpen();
    }
  };

  render() {
    return (
      <div className="wrap">
        <Header />
        <Router>
          <main className="content">
            <Pagehead counterOpenIssues={this.state.counterOpenIssues} />
            <div className="container">
              <Route
                exact
                path="/"
                render={() => (
                  <IssuesListing
                    data={this.state.data}
                    counterOpenIssues={this.state.counterOpenIssues}
                    counterClosedIssues={this.state.counterClosedIssues}
                    countSwitchClosedToOpen={this.countSwitchClosedToOpen}
                    countSwitchOpenToClosed={this.countSwitchOpenToClosed}
                    countAddNewOpenIssue={this.countAddNewOpenIssue}
                  />
                )}
              />
              <Route
                exact
                path="/:id"
                render={props => (
                  <IssuePage
                    id={props.match.params.id}
                    data={this.state.data}
                  />
                )}
              />
            </div>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
