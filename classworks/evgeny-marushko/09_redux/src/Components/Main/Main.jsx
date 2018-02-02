import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../resources/store';
import Pagehead from '../Pagehead/Pagehead';
import Issues from '../Issues/Issues';

const Main = (props) => {
  return (
    <Provider store={store}>
      <Router>
        <main className="content">
          <Pagehead />
          <Issues />
        </main>
      </Router>
    </Provider>
  );
};

export default Main;
