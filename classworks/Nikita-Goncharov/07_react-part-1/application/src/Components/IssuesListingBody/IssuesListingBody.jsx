import React, {Component} from 'react';
import Issue from '../Issue/Issue.jsx';

class IssuesListingBody extends Component {
  render() {
    if(this.props.state.showOpen==true) {
      return (
         <ul>
            {this.props.issuesData.filter((item)=>(item.state ==="open")).map((element)=><Issue item={element} state={this.props.state} updateIssues={this.props.updateIssues}/>) }
         </ul>
      );
    }else {
      return (
        <ul>
            {this.props.issuesData.filter((item)=>(item.state==="closed")).map((element)=><Issue item={element} />) }
        </ul>
      );
    }
  }
}

export default IssuesListingBody;
