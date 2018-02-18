import React from 'react'
import './Issues.styles.css'
import '../btn/Btn.styles.css'
import Issue from '../issue/Issue.jsx'

function Issues ({issues,toggleIssueState}){
    return (
    <ul className="issues">
      { issues.map((issue) => (
        <Issue
          issue={issue}
          key={issue.id}
          id={issue.id} 
          state={issue.state}
          title={issue.title}
          toggleIssueState={toggleIssueState}
        />)
      )}
    </ul>
    );
}

export default Issues;