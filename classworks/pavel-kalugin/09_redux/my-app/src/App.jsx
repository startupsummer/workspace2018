import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import * as issuesSelectors from './resources/issues/issues.selectors';
import * as issuesActions from './resources/issues/issues.actions';

import Header from './Components/Header/Header';
import Pagehead from './Components/Pagehead/Pagehead';
import IssuesListing from './Components/IssuesListing/IssuesListing';
import IssuesPage from './Components/IssuesPage/IssuesPage';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <body id="home">
          <Header/>
          <main className="content">
            <Pagehead/>
            <Route exact path="/" render={() => <Redirect to="/list" />} />
            <Route exact path="/list" component={IssuesListing} />
            <Route path="/list/:id" component={IssuesPage} />
          </main>
        </body>
      </Router>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    state: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = state => ({
  issues: issuesSelectors.getIssues(state),
});

const mapDispatchToProps = {
  fetchData: issuesActions.fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
