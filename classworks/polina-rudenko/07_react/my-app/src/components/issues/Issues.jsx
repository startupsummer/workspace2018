import React, { Component } from 'react';
import './issues.styles.css';
import ButtonIssueClose from '../button/ButtonIssueClose'

class IssuesListing extends Component {
  state ={
    issuesArr :[
      {title: "Polinka", id: "el1", status: "open"},
      {title: "Alinka", id: "el2", status: "open"},
      {title: "Alionka", id: "el3", status: "open"},
      {title: "Popa", id: "el4", status: "close"}
    ]
  }
  render () {
    const issuesList = this.state.issuesArr.map((issue) => {
      if (issue.status===this.props.issuesStatus) {
        return (  <li className="issues__item">

            <div className="issues__status issues__status--open">
              <svg className="issues__icon" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
            </div>
            <div className="issues__title">
              <a href="#" className="issues__link">
               {issue.title}
              </a>
            </div>
            <ButtonIssueClose issuesStatus={this.props.issuesStatus}/>
          </li>)
      }
    });
     return (
<ul className="issues">
  {issuesList}
</ul>
    )
  }
  }



export default IssuesListing;
