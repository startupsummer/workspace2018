import React, { Component } from 'react';
import './App.css';
import data from './issues-data.js';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: data, showOpen: true };
  }
  changeItemState = (id) => {
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
  }
  render() {
    return (
      <body>
        <Header />
        <Main
          issuesData={this.state.data}
          changeItemState={this.changeItemState}
          newIssue={this.newIssue}
          state={this.state}
        />
      </body>
    );
  }
}

export default App;
