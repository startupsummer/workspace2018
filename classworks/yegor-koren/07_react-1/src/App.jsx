import React, { Component } from 'react';
import Issues from './issues-data';
import WalterWhite from './new-issues-data';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: Issues,
      filter: 'open',
      filterSearch: '',
    };
  }

  changeFilter = filter => this.setState({ filter })
  newIssue = () => {
    const { issues } = this.state;
    const newID = issues[issues.length - 1].id + 1;
    const newTitle = WalterWhite[Math.floor(Math.random() * WalterWhite.length)];
    const newState = 'open';
    const newIssue = {
      id: newID,
      title: newTitle,
      state: newState,
    };
    this.setState({ issues: [...issues, newIssue] });
  }
  changeIssue = (id) => {
    const { issues } = this.state;
    const newIssues = issues.map((item) => {
      if (item.id === id) {
        const timeItem = { ...item };
        if (timeItem.state === 'open') timeItem.state = 'closed';
        else timeItem.state = 'open';
        return timeItem;
      }
      return item;
    });
    this.setState({ issues: [...newIssues] });
  }

  changeFilterSearch = (filterSearch) => {
    this.setState(state => ({ ...state, filterSearch }));
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default App;
