import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as issueActions from './resources/issue/issue.actions';
import * as issueSelectors from './resources/issue/issue.selectors';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
import IssuePage from './components/issue-page/IssuePage';

class App extends PureComponent {
  state = {
    newOpenIssue: {
      title: 'New open issue',
      state: 'open',
      body: 'Simple description',
    },
  }

  componentDidMount() {
    this.props.getGithubIssues();
  }

  countAddNewOpenIssue = () => {
    this.setState({
      counterOpenIssues: this.props.counterOpenIssues + 1,
    });
  };

  countSwitchClosedToOpen = () => {
    this.setState({
      counterOpenIssues: this.props.counterOpenIssues + 1,
      counterClosedIssues: this.props.counterClosedIssues - 1,
    });
  };

  countSwitchOpenToClosed = () => {
    this.setState({
      counterOpenIssues: this.props.counterOpenIssues - 1,
      counterClosedIssues: this.props.counterClosedIssues + 1,
    });
  };

  switchIssueState = id => () => {
    const targetIssue = this.props.data.find(item => item.id === id);
    const newState = targetIssue.state === 'open' ? 'closed' : 'open';
    const newIssues = this.props.data
      .map(item => (item.id === id ? { ...targetIssue, state: newState } : item));
    this.setState({ data: newIssues });
    if (newState === 'closed') {
      this.countSwitchOpenToClosed();
    } else {
      this.countSwitchClosedToOpen();
    }
    fetch(`https://api.github.com/repos/AlionaMozol/hello-world/issues/${targetIssue.number}?access_token=854e0767f750d7b06da4c32cbad546fa06a8c835&state=all`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        state: newState,
      }),
    });
  };

  render() {
    return (
      <div className="wrap">
        <Header />
        <Router>
          <main className="content">
            <Pagehead counterOpenIssues={this.props.counterOpenIssues} />
            <div className="container">
              <Route
                exact
                path="/"
                render={() => (
                  <IssuesListing
                    data={this.props.data}
                    counterOpenIssues={this.props.counterOpenIssues}
                    counterClosedIssues={this.props.counterClosedIssues}
                    countAddNewOpenIssue={this.countAddNewOpenIssue}
                    switchIssueState={this.switchIssueState}
                  />
                )}
              />
              <Route
                exact
                path="/:id"
                render={props => (
                  <IssuePage
                    id={props.match.params.id}
                    data={this.props.data}
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

// export default App;
const mapStateToProps = state => ({
  data: issueSelectors.getIssues(state),
  counterOpenIssues: issueSelectors.getCounterOpenIssues(state),
  counterClosedIssues: issueSelectors.getCounterClosedIssues(state),
});

const mapDispatchToProps = { getGithubIssues: issueActions.getGithubIssues };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
