import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PageHead from '../page_head/PageHead';
import Subnav from '../subnav/Subnav';
import SubnavDescription from '../subnav_description/SubnavDescription';
import IssuesList from '../issues_list/IssuesList';
import IssueDescription from '../issue_description/IssueDescription';

import './main.style.css';


const Main = () => (
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

export default Main;
