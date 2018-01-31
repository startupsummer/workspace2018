import React from 'react'
import './Issues.styles.css'
import '../btn/Btn.styles.css'
import Issue from '../issue/Issue.jsx'

class Issues extends React.Component{
  redner(){

    const issues=this.props.issues.filter((item)=>{this.props.status===item.state});

    <ul className="issues">
      {issues.map((issue)=>{
        <li className="issues__item" key={issue.id} >
        <Issue id={issue.id}  state={issue.state} 
               title={issue.tiitle} toggleIssueState={this.toggleIssueState} />
        </li>
      } )}
    </ul>
  }
}
export default Issues;