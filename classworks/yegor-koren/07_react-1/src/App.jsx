import React, { Component } from 'react';
import './main.css';
import issues from './issues-data';

import Header from './components/header/Header';
import PageHead from './components/pagehead/PageHead';
import Subnav from './components/subnav/Subnav';
import IssuesList from './components/issueslisting/IssuesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues,
      filter: 'closed',
    };
  }

  changeFilter = filter => this.setState({ filter })


  render() {
    return (
      <div>
        <Header />
        <PageHead data={this.state} />
        <Subnav />
        <IssuesList changeFilter={this.changeFilter} filter={this.state.filter} issues={this.state.issues} />
      </div>
    );
  }
}

export default App;
