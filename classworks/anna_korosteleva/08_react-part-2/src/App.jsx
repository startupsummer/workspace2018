import React from 'react';
import './App.css';
import Header from './Components/Header.jsx';
import data from './issues-data.js';
import Body from './Components/Body.jsx';
import IssuePage from './Components/IssuePage.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: data,
      openCount: data.filter(item => item.state === 'open').length,
      closedCount: data.filter(item => item.state === 'closed').length,
      condition: 'open',
    };
  }

  issuePage = (title) => () => {
    this.setState({ title });
  }

  closeIssue = (id) => (el) => {
    this.state.items.filter(items => items.id === id).map(items => {
      items.state = 'closed';
    });
    this.setState({
      openCount: this.state.openCount - 1,
      closedCount: this.state.closedCount + 1,
    })
  }

  newIssue = () => {
    this.setState({
      items: this.state.items.concat([{
        id: Math.random() * 1000,
        title: 'new issue',
        state: 'open',
      }]),
      openCount: this.state.openCount + 1,
    });
  }

  onOpenClick = () => {
    this.setState({ condition: 'open' });
  }

  onCloseClick = () => {
    this.setState({ condition: 'closed' });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className="content">
            <Route exact path="/" render={() => (
              <Body newIssue={this.newIssue}
                onCloseClick={this.onCloseClick}
                onOpenClick={this.onOpenClick}
                closeIssue={this.closeIssue}
                issuePage={this.issuePage}
                openCount={this.state.openCount}
                closedCount={this.state.closedCount}
                condition={this.state.condition} 
                items={this.state.items} />
            )}
            />
            <Route exact path="/:id" render={() => (
              <IssuePage title={this.state.title} />
            )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
