/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagehead from '../Pagehead/Pagehead';
import Issues from '../Issues/Issues';

class Main extends Component {
  render() {
    return (
      <Router>
        <main className="content">
          <Pagehead />
          <Issues />
        </main>
      </Router>
    );
  }
}

export default connect(
  state => ({
    list: state,
  }),
)(Main);
