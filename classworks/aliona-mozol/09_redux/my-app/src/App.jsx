import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from './resources/issue/issue.actions';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
import IssuePage from './components/issue-page/IssuePage';

class App extends PureComponent {
  static propTypes = { getGithubIssues: PropTypes.func.isRequired };
  componentDidMount() { this.props.getGithubIssues(); }

  render() {
    return (
      <div className="wrap">
        <Header />
        <Router>
          <main className="content">
            <Pagehead />
            <div className="container">
              <Route exact path="/" render={() => (<IssuesListing />)} />
              <Route exact path="/:id" render={props => (<IssuePage id={props.match.params.id} />)} />
            </div>
          </main>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = { getGithubIssues: issueActions.getGithubIssues };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
