import React from 'react';
import './Issues.styles.css';
import IssuesItem from '../../Components/IssuesItem/IssuesItem';


class Issues extends React.Component {
  renderItem = item => (
    <IssuesItem
      isOpen={item.isOpen}
      id={item.id}
      text={item.text}
      reopenIssue={this.props.reopenIssue}
      closeIssue={this.props.closeIssue}
    />
  )

  render() {
    return (
      <ul className="issues">
        {this.props.itemsArray.filter(item => (this.props.activeTab === 'open' ? item.isOpen : !item.isOpen)).filter(this.props.searchFilter).map(this.renderItem)}
      </ul>
    );
  }
}

export default Issues;
