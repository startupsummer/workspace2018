/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
