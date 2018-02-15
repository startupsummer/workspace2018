import React, { Component } from 'react';
import './App.css';
import data from './issues-data.js';
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


/*changeItemState = (id) => {
  const changedData = this.state.data;
  changedData.map((elem) => {
    if (elem.id === id) {
      if (elem.state === 'open') {
        elem.state = 'closed';
      }
    }
  });
  this.setState({ data: changedData });
}
newIssue = () => {
  const item = {
    id: Math.floor(Math.random() * 100000),
    title: 'Some text for issue',
    state: 'open',
  };
  this.setState({
    ...this.state,
    data: [...this.state.data, { ...item }],
  });
}*/
