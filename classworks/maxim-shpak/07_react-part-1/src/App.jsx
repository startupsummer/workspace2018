import React from 'react';

import Header from './components/Header/Header';
import PageHeader from './components/PageHeader/PageHeader';
import IssuesList from './components/IssuesList/IssuesList';

import './App.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { notificationsAmount: 3 };
  }
  
  setNotificationsAmount = value => this.setState({ notificationsAmount: value });

  render() {
    return (
      <div className="App">
        <Header />
        <main className="content">
          <PageHeader notificationsAmount={this.state.notificationsAmount} />
          <div className="container">
            <IssuesList setNotificationsAmount={this.setNotificationsAmount} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
