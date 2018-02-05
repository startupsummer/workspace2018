import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Redirect
} from 'react-router-dom'
import Header from './Components/Header/Header';
import Pagehead from './Components/Pagehead/Pagehead';
import IssuesListing from './Components/IssuesListing/IssuesListing';
import IssuesPage from './Components/IssuesPage/IssuesPage';

import { connect } from 'react-redux';
import * as issuesSelectors from './resources/issues/issues.selectors.js';
import * as issuesActions from './resources/issues/issues.actions.js';

class App extends React.Component {
  renderPage = item => {
    return (<Route path={`/${item.id}`} render={() => (
      <IssuesPage>
        <h1> You opened '{item.title}' issue! </h1>
        <h2> Description: {item.body} </h2>
      </IssuesPage>
    )} />);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <body id="home">
          <Route path='/' component={Header} />

          <main className="content">
            <Redirect to='/list' />

            <Route path='/' component={Pagehead} />
            <Route path='/list' component={IssuesListing} />

            <ul className = 'issues-page-list'>
              {this.props.issues.map(this.renderPage)}
            </ul>
          </main>
        </body>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
  issues: issuesSelectors.getIssues(state),
});

const mapDispatchToProps = {
  fetchData: issuesActions.fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
