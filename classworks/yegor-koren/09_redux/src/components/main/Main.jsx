import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';

import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import SubnavDescription from '../subnav_description/SubnavDescription';
import IssuesList from '../issues_list/IssuesList';
import IssueDescription from '../issue_description/IssueDescription';

import './main.style.css';


class Main extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    return (
      <Router>
        <div className="content">
          <PageHead />
          <Route
            exact
            path="/"
            component={Subnav}
          />
          <Route
            path="/:id"
            component={SubnavDescription}
          />
          <Route
            exact
            path="/"
            component={IssuesList}
          />
          <Route
            path="/:id"
            component={IssueDescription}
          />
        </div>
      </Router>
    );
  }
}

Main.propTypes = {
  getIssues: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  getIssues: issueActions.getIssues,
});

export default connect(null, mapDispatchToProps)(Main);
