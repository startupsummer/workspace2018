import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as issueActions from './resources/issue/issue.actions';
import * as issueSelectors from './resources/issue/issue.selectors';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
import IssuePage from './components/issue-page/IssuePage';


class App extends PureComponent {

  componentDidMount() {
    this.props.getGithubIssues();
  }


  render() {
    return (
      <div>
        <Header />
        <main className="content">
          <Router>
            <div>
              <Pagehead />
              <div className="container">
                <Route
                  exact
                  path="/"
                  render={() => (
                    <IssuesListing />
                )}
                />
                <Route
                  path="/:id"
                  render={props => (
                    <IssuePage
                      id={props.match.params.id}
                      issuesArr={this.props.issuesArr}
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


const mapStateToProps = state => ({
  issuesArr: issueSelectors.getIssues(state),
});

const mapDispatchToProps = { getGithubIssues: issueActions.getGithubIssues };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
