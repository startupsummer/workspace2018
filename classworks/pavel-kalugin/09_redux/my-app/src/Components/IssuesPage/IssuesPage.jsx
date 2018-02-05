import React from 'react';
import PropTypes from 'prop-types';
import './IssuesPage.styles.css';

function IssuesPage(props) {
  return (
    <div className="container issues-page">{props.children}</div>
  );
}

IssuesPage.propTypes = {
  children: PropTypes.element.isRequired,
};

export default IssuesPage;
