import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './Pagehead.styles.css';
import { connect } from 'react-redux';
import * as issuesActions from '../../resources/issues/issues.actions.js';
import * as issuesSelectors from '../../resources/issues/issues.selectors.js';

class Pagehead extends React.Component {
  render() {
    return (
      <div className="pagehead">
        <div className="container repohead-container">
          <h1 className="pagehead-title">
            <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12">
              <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" />
            </svg>
            <Link to='/list'>startupsummer</Link>
            <span>/</span>
            <b><Link to='list'>react-task-1</Link></b>
          </h1>
        </div>
        <div className="container">
          <nav className="reponav">
            <Link to='/list' className="reponav-item selected">
              <svg height="16" version="1.1" viewBox="0 0 14 16" width="14">
                <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
              </svg>
              <span>Issues</span>
              <span className="counter">{this.props.openIssues}</span>
            </Link>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  openIssues: issuesSelectors.getOpenIssues(state),
});

export default connect(
    mapStateToProps,
    null,
)(Pagehead);
