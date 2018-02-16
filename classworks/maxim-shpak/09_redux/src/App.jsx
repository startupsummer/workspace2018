import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';

import Header from './components/Header/Header';
import IssuesList from './components/IssuesList/IssuesList';
import IssueDetailView from './components/IssueDetailView/IssueDetailView';
import IssuesSelectors from './resources/issues/issues.selectors';
import PageHeader from './components/PageHeader/PageHeader';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="content">
          <PageHeader />
          <div className="container">
            <Switch>
              <Route exact path="/issues" component={IssuesList} />
              <Route
                exact
                path="/issues/:id"
                render={data => <IssueDetailView id={data.match.params.id} />}
              />
              <Redirect from="/" to="/issues" />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

const mapStateToProps = state => ({
  issuesList: IssuesSelectors.getIssuesList(state),
});

export default connect(mapStateToProps)(App);
