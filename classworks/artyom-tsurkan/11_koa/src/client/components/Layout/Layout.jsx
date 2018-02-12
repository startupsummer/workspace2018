import React from 'react';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import ReviewForm from '../ReviewForm';
import ReviewListPage from '../ReviewListPage';

const Layout = (
    <div>
        <Header />
        <Switch>
            <Route exact path="/review-form" component={ReviewForm} />
            <Route exact path="/review-list" component={ReviewListPage} />
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