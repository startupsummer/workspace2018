import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import data from '../../issues-data.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main issues={data} />
      </div>
    );
  }
}

export default App;