import React from 'react';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import IssuesPage from '../IssuesPage';
import IssuePage from '../IssuePage';

const Layout = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={IssuesPage} />
      <Route exact path="/:issueId" component={IssuePage} />
    </Switch>
  </div>
);

export default Layout;

// eslint-disable-next-line
injectGlobal`
  ${styledNormalize}
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
