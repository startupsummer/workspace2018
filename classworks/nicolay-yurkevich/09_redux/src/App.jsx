import React  from 'react';
import Header from './components/header/Header.jsx';
import IssuesListing from './components/issues-listing/Issues-listing.jsx'
import IssueDescriptionContainer from './containers/IssueDescriptionContainer.jsx'
import PageheadContainer from './containers/PageheadContainer.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {

  renderIssueDescription = props => (
    <IssueDescriptionContainer  num={props.match.params.number} />
  );
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="content">
          <PageheadContainer />
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