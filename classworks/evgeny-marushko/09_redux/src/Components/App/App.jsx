/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../resources/store';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
