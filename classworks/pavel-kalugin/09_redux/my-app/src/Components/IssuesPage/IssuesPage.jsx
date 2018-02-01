import React from 'react';
import './IssuesPage.styles.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './IssuesPage.styles.css';

class IssuesPage extends React.Component {
  render() {
    return (
      <div className='container issues-page'>{this.props.children}</div>
    );
  }
}

export default IssuesPage;
