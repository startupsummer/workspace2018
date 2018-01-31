import React, { Component } from 'react';
import './main.css';
import issues from './issues-data';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues,
      filter: 'open',
    };
  }

  changeFilter = filter => this.setState({ filter })
  newIssue = () => {
    const issues = this.state.issues;
    const newID = issues[issues.length - 1]['id'] + 1;
    const newTitle = "Booooom! New Issue!";
    const newState = this.state.filter;
    const newIssue = {
      id: newID,
      title: newTitle + ' ' + newID,
      state: newState,
    }
    this.setState({issues: [...issues, newIssue]});
  }

  render() {
    return (
      <body>
        <Header />
        <Main changeFilter={this.changeFilter} newIssue={this.newIssue} filter={this.state.filter} issues={this.state.issues} />
      </body>
    );
  }
}

export default App;
