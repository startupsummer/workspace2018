import React from 'react';
import './Issues.styles.css'
import IssuesItem from '../../Components/IssuesItem/IssuesItem.jsx';



class Issues extends React.Component {
  state = {
    items: this.props.items,
  };

  render() {
    return (
      <ul className="issues">
        {this.state.items.filter(item => this.props.activeTab == 'open' ? item.props.isOpen : !item.props.isOpen)}
      </ul>
    );
  }
}

export default Issues;
