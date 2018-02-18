import React  from 'react';
import Header from './components/header/Header.jsx';
import Btn from './components/btn/Btn.jsx';
import Pagehead from './components/pagehead/Pagehead.jsx'
import Reponav from './components/reponav/Reponav.jsx'
import Subnav from './components/subnav/Subnav.jsx'
import data from './issues-data.js';
import IssuesListing from './components/issues-listing/Issues-listing.jsx'
 
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentState: 'open',
      openIssues: 4,
      closedIssues: 1,
      data: data
    }
  }

  dateCount=()=>{
    let countOpen=0;
    let countClosed=0;
      this.state.data.reduce((prevCount,item)=>{if(item.state==='open'){return countOpen=countOpen+1;}});
      this.state.data.reduce((prevCount,item)=>{if(item.state==='closed'){return countClosed=countClosed+1;}});
      this.setState({
        openIssues: countOpen,
        closedIssues: countClosed
      })           
  };

  onClickOpen =()=>{
    this.setState({
      currentState: 'open'
    });
  }

  onClickClose=()=>{
    this.setState({
      currentState: 'closed'
    });
  }

 toggleIssueState = (id) => {
    console.log(this);
    const targetIssue = this.state.data.find(issue => issue.id === id);
    const state = (targetIssue.state === 'open') ? 'closed' : 'open';
    const newIssuesList = this.state.data
      .map(issue => issue.id === id ? {...issue, state } : issue);
      console.log(this.state.openIssues);
    if(state==='open'){
      this.setState({
     data: newIssuesList ,
     openIssues: this.state.openIssues+1,
     closedIssues: this.state.closedIssues-1
    });
   }
   else{
      this.setState({
     data: newIssuesList ,
     openIssues: this.state.openIssues-1,
     closedIssues: this.state.closedIssues+1 
    });    
   }


  }
  
  moveClosedToOpen=()=> {
    console.log('yyyyyyyyyyyy');
    this.setState=({
      closedIssues: this.state.closedIssues-1,
      openIssues: this.state.openIssues+1
    });
  }

  moveOpentoClosed=()=>{  
    console.log('yyyyyyyyyyyy');
    this.setState=({
      closedIssues: this.state.closedIssues+1,
      openIssues: this.state.openIssues-1
    });
  }


   addNewIssue = () => {
    const newIssue = {
        title: 'Blank lines removed from function calls',
        state: 'open',
        id: Math.ceil(Math.random()*1000000),
    };

    this.setState({
      data: [...this.state.data,{...newIssue}],
      openIssues: this.state.openIssues+1
    });
}


  createNewOpen=()=>{
    this.setState=({
      openIssues: this.state.openIssues+1
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header/>
        <main className="content">
          <Pagehead openIssues={this.state.openIssues} />
          <div className="container">
            <IssuesListing
              openIssues={this.state.openIssues}
              closedIssues={this.state.closedIssues}
              moveOpentoClosed={this.moveOpentoClosed}
              moveClosedToOpen={this.moveClosedToOpen}
              createNewOpen={this.createNewOpen}
              data={this.state.data}
              addNewIssue={this.addNewIssue}
              onClickOpen={this.onClickOpen}
              onClickClose={this.onClickClose}
              currentState={this.state.currentState}
              toggleIssueState={this.toggleIssueState}
              dateCount={this.dateCount}
             />
          </div>
        </main>
      </div>
    );
  }
}

export default App;