import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageHead from '../PageHead/PageHead.jsx';
import IssuesSearch from '../IssuesSearch/IssuesSearch.jsx';
import IssuesHeader from '../IssuesHeader/IssuesHeader.jsx';
import IssuesListingBody from '../IssuesListingBody/IssuesListingBody.jsx';
import IssuePage from '../IssuePage/IssuePage.jsx';

class Main extends Component {
  render() {
    return (
      <main className="content">
        <PageHead issuesData={this.props.issuesData} />
        <div className="container">
          <div className="issues-listing">
            <BrowserRouter>
              <Switch>
                <Route
                  exact
                  path="/"
                >
                  <div>
                    <div className="issues-listing__subnav">
                      <IssuesSearch />
                    </div>
                    <IssuesHeader />
                    <IssuesListingBody />
                  </div>
                </Route>
                <Route
                  exact
                  path="/:id"
                  render={ props =>
                    <IssuePage
                      itemId={props.match.params.id}
                    />
                  }
                />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;

/*constructor(props) {
  super(props);
  this.state = this.props.state;
}
showClose = () => {
  this.setState({ showOpen: false });
}
showOpen = () => {
  this.setState({ showOpen: true });
}*/
