import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';
import { connect } from 'react-redux';
import { getIssues } from './actions/Issues';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Main/>
      </body>
    );
  }
}
export default App;
