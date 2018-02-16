import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import routes from './components/Layout';
import configureStore from './resources/store';

const initialState = {};

const history = createHistory();
const store = configureStore(initialState, history);

render(
  // eslint-disable-next-line
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
