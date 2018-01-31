import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Redirect
} from 'react-router-dom'
import Header from './Components/Header/Header';
import Pagehead from './Components/Pagehead/Pagehead';
import IssuesListing from './Components/IssuesListing/IssuesListing';
import IssuesPage from './Components/IssuesPage/IssuesPage';
import issuesData from './issues-data.js';

class App extends React.Component {
  state = {
    items: [],
    openedIssues: 0,
    closedIssues: 0,
    counter: 0,
  }

  newIssue = () => {
    this.setState({
      items: this.state.items.concat([{
      id: Math.floor(Math.random() * 10000),
      title: 'kek!',
      state: 'open',
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`,
      }]),
      openedIssues: this.state.openedIssues + 1,
    });
    this.setCounter(this.state.openedIssues + 1);
    fetch('https://api.github.com/repos/AllDayAlone/urban-guacamole/issues?access_token=31c7f56c10394fb4f356fe2869be796c59a85495', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
              id: Math.floor(Math.random() * 10000),
              title: 'kek!',
              state: 'open',
              body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.`,
              })
            })
  }

  closeIssue = (id) => {
    const itemToClose = this.state.items.filter(item => item.id === id)[0];
    const reducedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: reducedItems.concat([{
        id,
        title: itemToClose.title,
        body: itemToClose.body,
        state: 'closed',
      }]),
      openedIssues: this.state.openedIssues - 1,
      closedIssues: this.state.closedIssues + 1,
    });
    this.setCounter(this.state.openedIssues - 1);
    fetch(`https://api.github.com/repos/AllDayAlone/urban-guacamole/issues/${itemToClose.number}?access_token=31c7f56c10394fb4f356fe2869be796c59a85495&state=all`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                state: 'closed',
              })
          })
  }

  reopenIssue = (id) => {
    const itemToReopen = this.state.items.filter(item => item.id === id)[0];
    const reducedItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: reducedItems.concat([{
        id,
        title: itemToReopen.title,
        body: itemToReopen.body,
        state: 'open',
      }]),
      openedIssues: this.state.openedIssues + 1,
      closedIssues: this.state.closedIssues - 1,

    });
    this.setCounter(this.state.openedIssues + 1);
    fetch(`https://api.github.com/repos/AllDayAlone/urban-guacamole/issues/${itemToReopen.number}?access_token=31c7f56c10394fb4f356fe2869be796c59a85495&state=all`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  state: 'open',
                })
          })
  }

  setCounter = (numb) => {
    this.setState({
      counter: numb,
    });
  }
  createIssuesPage = (id) => {
    <Route path='/${item.id}' component={IssuesPage} />
  }

  renderPage = item => {
    return (<Route path={'/'+item.id} render={() => (
      <IssuesPage>
        <h1> You opened '{item.title}' issue! </h1>
        <h2> Description: {item.body} </h2>
      </IssuesPage>
    )} />);
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/AllDayAlone/urban-guacamole/issues?access_token=31c7f56c10394fb4f356fe2869be796c59a85495&state=all')
      .then(response => response.json())
      .then(data => console.log(data) || this.setState({
          items: data,
          openedIssues: data.filter(item => item.state === 'open').length,
          closedIssues: data.filter(item => item.state === 'closed').length,
          counter: data.filter(item => item.state === 'open').length,
        })
      )
  }

  render() {
    return (
      <Router>
        <body id="home">
          <Route path='/' component={Header} />
          <main className="content">
          <Redirect to='/list' />
            <Route path='/' render={() => (
              <div>
                <Pagehead counter={this.state.counter} />
              </div>
            )} />
            <Route path='/list' render={() => (
            <div className="container">
              <IssuesListing setCounter={this.setCounter}
                              createIssuesPage={this.createIssuesPage}
                              items={this.state.items}
                              closeIssue={this.closeIssue}
                              reopenIssue={this.reopenIssue}
                              newIssue={this.newIssue}
                              openedIssues={this.state.openedIssues}
                              closedIssues={this.state.closedIssues} />
            </div>
            )} />
            <ul className = 'issues-page-list'>
              {this.state.items.map(this.renderPage)}
            </ul>
          </main>
        </body>
      </Router>
    );
  }
}

export default App;
