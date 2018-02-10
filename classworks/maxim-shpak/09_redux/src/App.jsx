import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import PageHeader from './components/PageHeader/PageHeader';
import IssuesList from './components/IssuesList/IssuesList';
import IssueDetailView from './components/IssueDetailView/IssueDetailView';

import IssuesSelectors from './resources/issues/issues.selectors';
import './App.css';

function App(props) {
  const getTargetItem = data =>
    props.issuesList.find(item => `${item.id}` === data.match.params.id);
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
                render={data => <IssueDetailView item={getTargetItem(data)} />}
              />
              <Redirect from="/" to="/issues" />
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

App.propTypes = {
  issuesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  issuesList: IssuesSelectors.getIssuesList(state),
});

export default connect(mapStateToProps)(App);
