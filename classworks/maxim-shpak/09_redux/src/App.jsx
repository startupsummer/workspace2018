import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import Header from './components/Header/Header';
import IssuesList from './components/IssuesList/IssuesList';
import IssueDetailView from './components/IssueDetailView/IssueDetailView';
import IssuesActions from './resources/issues/issues.actions';
import IssuesSelectors from './resources/issues/issues.selectors';
import PageHeader from './components/PageHeader/PageHeader';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchIssues();
  }
  render() {
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
}

App.propTypes = {
  fetchIssues: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  issuesList: IssuesSelectors.getIssuesList(state),
});

const mapDispatchToProps = {
  fetchIssues: IssuesActions.fetchIssues,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
