
/* ----- Dependencies ----- */
import React, { Component } from 'react';

/* ----- Components ----- */
import Header from './components/Header/Header';
import PageHeader from './components/PageHeader/PageHeader';
import IssuesList from './components/IssuesList/IssuesList';

/* ----- Styles ----- */
import './App.css';

class App extends Component {
  state = { notificationsAmount: 3 };
  setNotificationsAmount = (value) => this.setState({ notificationsAmount: value });
  render() {
    return (
      <div className='App'>
        <Header />
        <main className="content">
          <PageHeader notificationsAmount={this.state.notificationsAmount} />
          <div className="container">
            <IssuesList setNotificationsAmount={this.setNotificationsAmount}/>
          </div>
        </main>
      </div>
    );
  };
}

export default App;
