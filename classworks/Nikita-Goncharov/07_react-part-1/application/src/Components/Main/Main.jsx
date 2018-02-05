import React, {Component} from 'react';
import PageHead from '../PageHead/PageHead.jsx';
import IssuesSearch from '../IssuesSearch/IssuesSearch.jsx';
import IssuesHeader from '../IssuesHeader/IssuesHeader.jsx';
import IssuesListingBody from '../IssuesListingBody/IssuesListingBody.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state=this.props.state;
  }
  showClose = () => {
    this.setState({showOpen:false})
  }
  showOpen = () => {
    this.setState({showOpen:true})
  }
  render() {
    return (
      <main className="content">
        <PageHead issuesData={this.props.issuesData}/>
        <div className="container">
          <div className="issues-listing">
            <div className="issues-listing__subnav">
              <IssuesSearch newIssue={this.props.newIssue}/>
            </div>
            <IssuesHeader issuesData={this.props.issuesData} showClose={this.showClose} showOpen={this.showOpen} />
            <IssuesListingBody issuesData={this.props.issuesData} state={this.state} updateIssues={this.props.updateIssues} changeItemState={this.props.changeItemState}/>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
