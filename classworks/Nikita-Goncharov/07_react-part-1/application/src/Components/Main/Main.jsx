import React, {Component} from 'react';
import PageHead from '../PageHead/PageHead.jsx';
import IssuesSearch from '../IssuesSearch/IssuesSearch.jsx';
import IssuesHeader from '../IssuesHeader/IssuesHeader.jsx';
import IssuesListingBody from '../IssuesListingBody/IssuesListingBody.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.showClose = this.showClose.bind(this);
    this.showOpen= this.showOpen.bind(this);
    this.newIssue = this.newIssue.bind(this);
    this.newIssue=this.newIssue.bind(this);
    this.updateIssues=this.updateIssues.bind(this);
    this.state={showOpen:true, needUpdateIssues:false};
  }
  showClose(){
    this.setState({showOpen:false})
  }
  showOpen(){
    this.setState({showOpen:true})
  }
  newIssue(){
    this.props.issuesData.push({
        id: 123456789,
        title: 'Some text for issue',
        state: 'open',
      });
    this.updateIssues();
  }
  updateIssues() {
     this.setState({needUpdateIssues:true});
  }
  render() {

    return (
      <main className="content">
        <PageHead issuesData={this.props.issuesData}/>
        <div className="container">
          <div className="issues-listing">
            <div className="issues-listing__subnav">
              <IssuesSearch newIssue={this.newIssue}/>
            </div>
            <IssuesHeader issuesData={this.props.issuesData} showClose={this.showClose} showOpen={this.showOpen} />
            <IssuesListingBody issuesData={this.props.issuesData} state={this.state} updateIssues={this.updateIssues}/>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
