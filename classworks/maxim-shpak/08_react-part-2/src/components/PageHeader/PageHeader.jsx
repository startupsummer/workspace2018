import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './PageHeader.css';

function PageHeader(props) {
  return (
    <div className="pagehead">
      <div className="container repohead-container">
        <h1 className="pagehead-title">
          <svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 12 16" width="12">
            <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" />
          </svg>
          <Link href="/issues" to="/issues" className="issues__link"> 
            <span> startupsummer/react-task-2 </span>
          </Link>
        </h1>
      </div>
      <div className="container">
        <nav className="reponav">
          <Link href="/issues" to="/issues" className="reponav-item selected">
            <svg height="16" version="1.1" viewBox="0 0 14 16" width="14">
              <path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" />
            </svg>
            <span> Issues </span>
            <span className="counter">{props.notificationsAmount}</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

PageHeader.defaultProps = {
  notificationsAmount: 0,
};
PageHeader.propTypes = {
  notificationsAmount: PropTypes.number,
};

export default PageHeader;
