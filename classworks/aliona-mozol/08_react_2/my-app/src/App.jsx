import React, { PureComponent } from 'react';
import './App.css';
import Header from './components/header/Header';
import Pagehead from './components/pagehead/Pagehead';
import IssuesListing from './components/issues-listing/IssuesListing';
import data from './issues-data';

class App extends PureComponent {
  state = {
    data,
    counterOpenIssues: data.filter(item => item.state === 'open').length,
    counterClosedIssues: data.filter(item => item.state === 'closed').length,
  }

  countSwitchClosedToOpen = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues + 1,
      counterClosedIssues: this.state.counterClosedIssues - 1,
    });
  };

  countSwitchOpenToClosed = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues - 1,
      counterClosedIssues: this.state.counterClosedIssues + 1,
    });
  };

  countAddNewOpenIssue = () => {
    this.setState({
      counterOpenIssues: this.state.counterOpenIssues + 1,
    });
  };

  render() {
    return (
      <div className="wrap">
        <Header />
        <main className="content">
          <Pagehead counterOpenIssues={this.state.counterOpenIssues} />
          <div className="container">
            <IssuesListing
              counterOpenIssues={this.state.counterOpenIssues}
              counterClosedIssues={this.state.counterClosedIssues}
              countSwitchClosedToOpen={this.countSwitchClosedToOpen}
              countSwitchOpenToClosed={this.countSwitchOpenToClosed}
              countAddNewOpenIssue={this.countAddNewOpenIssue}
              data={this.state.data}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
