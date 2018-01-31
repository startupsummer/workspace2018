import React  from 'react';
import Header from './components/header/Header.jsx';
import Btn from './components/btn/Btn.jsx';
import Pagehead from './components/pagehead/Pagehead.jsx'
import Reponav from './components/reponav/Reponav.jsx'
import Subnav from './components/subnav/Subnav.jsx'
import data from './issues-data.js';
import IssuesListing from './components/issues-listing/Issues-listing.jsx'


class App extends React.Component {
state={
      openIssues: 3,
      closedIssues: 1,
      data: data 
 }

  moveClosedToOpen(){
    this.setState=({
      closedIssues: this.state.closedIssues-1,
      openIssues: this.state.openIssues+1
    });
  }
  moveOpentoClosed(){
    this.setState=({
      closedIssues: this.state.closedIssues+1,
      openIssues: this.state.openIssues-1
    });
  }
  createNewOpen(){
    this.setState=({
      openIssues: this.state.openIssues+1
    });
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <main className="content">
          <Pagehead openIssues={this.state.openIssues} />
          <div className="container">
            <IssuesListing
              openIssues={this.state.openIssues}
              closedIssues={this.state.closedIssues}
              moveOpentoClosed={this.state.moveOpentoClosed}
              moveClosedToOpen={this.state.moveClosedToOpen}
              createNewOpen={this.state.createNewOpen}
              data={this.state.data}
             />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
