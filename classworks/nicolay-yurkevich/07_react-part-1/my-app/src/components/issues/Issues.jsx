import React from 'react'
import './Issues.styles.css'
import '../btn/Btn.styles.css'
import Issue from '../issue/Issue.jsx'



class Issues extends React.Component{     
    render(){

    const issues = this.props.data.filter(item => this.props.status === item.state);
    
    return(
    <ul className="issues">
      { issues.map((issue) => (
        <Issue
          key={issue.id}
          id={issue.id} 
          dateCount={this.props.dateCount}
          state={issue.state}
          title={issue.title}
          toggleIssueState={this.props.toggleIssueState}
        />)
      )}
    </ul>
    )
  }
}
export default Issues;