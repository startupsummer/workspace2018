import React from 'react'
import './Issues-listing.styles.css'
import Subnav from'../subnav/Subnav.jsx'
import BtnLink from '../btn-link/Btn-link.jsx' 
import Issues from '../issues/Issues.jsx'

class IssuesListing extends React.Component{

  // constructor(){
  //   super();
  //   this.
  state={
      currentState: 'open',
      issues: this.props.data,
      newIssue:{
        title: 'Blank lines removed from function calls',
        state: 'open'
      },
      prepId: 6
    }


  toggleIssueState(id){
    let pickedIssueState;
    let newIssuesList=this.state.issues.map((issue)=>{
        if(issue.id===id){
         pickedIssueState=issue.state;   
         issue.state=(issue.state==='open')?'closed':'open';
        }
        return issue;
    }); 
    this.setState({
      issues: newIssuesList
    });
    pickedIssueState==='open'? this.props.moveOpentoClosed():this.props.moveClosedToOpen();
  }

  onClickOpen(){
    this.setState({
      currentState: 'open'
    });
  }
  onClickClose(){
    this.setState({
      currentState: 'close'
    });
  }
  addNewIssue(){
    let id=Math.ceil(Math.random()*1000000);
    this.setState({
      issues:[...this.state.issues, {... this.state.newIssue, id: this.state.prepId}],
      prepId: id
    });
    this.props.createNewOpen();
  }

  render(){
    return (
      <div class="issues-listing">
        <div class="issues-listing__subnav">
            <Subnav addNewIssue={this.addNewIssue}/>
          </div>
        
        <div class="issues-listing__header">
          <div class="issues-listing__states">
          <BtnLink isSelected={this.state.currentState === 'open'} 
                   onClickState={this.onClickOpen}>
              <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
              </svg>
              {this.props.openedIssues} Open
            </BtnLink>
            <BtnLink isSelected={this.state.currentState === 'closed'} 
                     onClickState={this.onClickClose}>
              <svg aria-hidden="true" class="octicon octicon-check" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"></path></svg>
              {this.props.closedIssues} Closed
            </BtnLink>
          </div>
        </div>
        <div class="issues-listing__body">
          <Issues status={this.state.currentState}
                  issues={this.state.issues}
                  toggleIssueState={this.toggleIssueState}
                  />
        </div>
      </div>
      )
  }
}
export default IssuesListing;