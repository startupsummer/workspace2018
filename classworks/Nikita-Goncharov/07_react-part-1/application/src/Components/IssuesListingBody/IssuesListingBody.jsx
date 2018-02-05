import React, {Component} from 'react';
import Issue from '../Issue/Issue.jsx';

class IssuesListingBody extends Component {
  render() {
    return (
      <ul>
        {this.props.issuesData.filter(
          (item)=>(item.state ==="open" && this.props.state.showOpen == true ||
                   item.state ==="closed" && this.props.state.showOpen == false )
                 ).map((element)=><Issue item={element}
                                         state={this.props.state}
                                         updateIssues={this.props.updateIssues}
                                         changeItemState={this.props.changeItemState}/>) }
      </ul>
    );
  }
}

export default IssuesListingBody;
