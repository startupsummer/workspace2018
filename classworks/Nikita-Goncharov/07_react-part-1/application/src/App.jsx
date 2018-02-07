import React, { Component } from 'react';
import './App.css';
import data from './issues-data.js';
import Header from './Components/Header/Header.jsx';
import Main from './Components/Main/Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showOpen: true, needUpdateIssues: false };
  }
  changeItemState = (id) => {
    return (data.map((elem) => {
      if (elem.id === id) {
        if (elem.state === 'open') {
          elem.state = 'closed';
        }
      }
    }));
  }

  newIssue = () => {
    data.push({
      id: Math.floor(Math.random() * 100000),
      title: 'Some text for issue',
      state: 'open',
    });
    this.updateIssues();
  }
  updateIssues = () => {
    this.setState({ needUpdateIssues: true });
  }
  render() {
    return (
      <body>
        <Header />
        <Main
          issuesData={data}
          changeItemState={this.changeItemState}
          newIssue={this.newIssue}
          updateIssues={this.updateIssues}
          state={this.state}
        />
      </body>
    );
  }
}

export default App;
