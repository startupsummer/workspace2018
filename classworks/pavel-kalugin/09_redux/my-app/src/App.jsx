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

  renderPage = item => (<Route
    path='/:id}'
    render={props => console.log(props.match.params.id) || (
      <IssuesPage
        id={props.match.params.id}
        issues={props.issues}
      />
    )}
  />)

  render() {
    return (
      <Router>
        <body id="home">
          <Route path="/" component={Header} />

          <main className="content">
            <Redirect to="/list" />

            <Route path="/" component={Pagehead} />
            <Route path="/list" component={IssuesListing} />

            <ul className="issues-page-list">
              {this.props.issues.map(this.renderPage)}
            </ul>
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
