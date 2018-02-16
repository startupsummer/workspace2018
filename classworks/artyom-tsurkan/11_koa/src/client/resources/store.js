import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';

import reducer from './reducer';

export default (initialState, history) => {
  const middleware = [thunk, routerMiddleware(history)];
  const middlewares = composeWithDevTools(applyMiddleware(...middleware));
  const store = createStore(reducer, initialState, middlewares);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
