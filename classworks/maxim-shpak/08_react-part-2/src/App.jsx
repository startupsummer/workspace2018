import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import PageHeader from './components/PageHeader/PageHeader';
import IssuesList from './components/IssuesList/IssuesList';
import IssueDetailView from './components/IssueDetailView/IssueDetailView';

import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      notificationsAmount: 3,
      openedIssuesList: [],
      openedIssuesAmount: 0,
      closedIssuesList: [],
      closedIssuesAmount: 0,
    };
  }
  setIssuesList = (openedIssuesList, closedIssuesList) => {
    this.setState({
      openedIssuesList,
      openedIssuesAmount: openedIssuesList.length,
      closedIssuesList,
      closedIssuesAmount: closedIssuesList.length,
    });
  };
  setNotificationsAmount = value => this.setState({ notificationsAmount: value });
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="content">
            <PageHeader notificationsAmount={this.state.notificationsAmount} />
            <div className="container">
              <Switch>
                <Route
                  exact
                  path="/issues"
                  render={() => {
                    if (!this.state.openedIssuesAmount && !this.state.closedIssuesAmount) {
                      return (<IssuesList
                        setNotificationsAmount={this.setNotificationsAmount}
                        setIssuesList={this.setIssuesList}
                      />);
                    }
                      return (<IssuesList
                        setNotificationsAmount={this.setNotificationsAmount}
                        setIssuesList={this.setIssuesList}
                        openedIssuesList={this.state.openedIssuesList}
                        openedIssuesAmount={this.state.openedIssuesList.length}
                        closedIssuesList={this.state.closedIssuesList}
                        closedIssuesAmount={this.state.closedIssuesAmount}
                      />);
                    }}
                />
                <Route
                  exact
                  path="/issues/:id"
                  render={(props) => {
                    const issuesList = [...this.state.openedIssuesList,
                                        ...this.state.closedIssuesList];
                    return (
                      <IssueDetailView
                        issuesListItem={issuesList.find(item => `${item.id}` === props.match.params.id)}
                      />);
                    }}
                />
                <Redirect from="/" to="/issues" />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
