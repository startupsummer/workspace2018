import React  from 'react';
import Header from './components/header/Header.jsx';
import IssuesListing from './components/issues-listing/Issues-listing.jsx';
import IssueDescription from './components/issue-description/Issue-description.jsx';
import Pagehead from './components/pagehead/Pagehead.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  renderIssueDescription = props => (
    <IssueDescription num={props.match.params.number} />
  );
  
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="content">
          <Pagehead />
          <div className="container">
          <Router>
            <Switch>
              <Route exact path="/"  component={IssuesListing}/> 
              <Route path='/issue/:number' render={this.renderIssueDescription}/> 
            </Switch>
          </Router>
          </div>
        </main>
      </div>
    );
  }
}

export default App;