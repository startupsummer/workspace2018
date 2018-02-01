import React, { Component } from 'react';
import issues from './issues-data';
import WalterWhite from './new-issues-data';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues,
      filter: 'open',
      filterSearch: "",
    };
  }

  changeFilter = (filter) => this.setState({ filter })
  newIssue = () => {
    const issues = this.state.issues;
    const newID = issues[issues.length - 1]['id'] + 1;
    const newTitle = WalterWhite[Math.floor(Math.random() * WalterWhite.length)];
    const newState = this.state.filter;
    const newIssue = {
      id: newID,
      title: newTitle,
      state: newState,
    }
    this.setState({issues: [...issues, newIssue]});
  }
  changeIssue = (id) => {
    const issues = this.state.issues;
    const newIssues = issues.map((item) => {
      if (item.id === id)
        (item.state === "open") ? item.state = "closed" : item.state = "open";
      return item;
    });
    this.setState({issues: [...newIssues]});
  }

  changeFilterSearch = (filterSearch) => {
    this.setState(state => ({ ...state, filterSearch }))
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          changeFilter={this.changeFilter}
          newIssue={this.newIssue}
          changeIssue={this.changeIssue}
          changeFilterSearch={this.changeFilterSearch}
          filter={this.state.filter}
          issues={this.state.issues}
          filterSearch={this.state.filterSearch}
        />
    </div>
    );
  }
}

export default App;
