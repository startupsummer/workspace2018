import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';
import './subnav.styles.css';
import Button from '../button/Button';

const Subnav = (props) => {
  const onChange = (event) => {
    const query = event.target.value.toLowerCase();
    props.updateSearchQuery(query);
  };

  return (
    <div className="subnav">
      <form className="subnav__search">
        <input className="subnav__search-input" type="text" placeholder="Search" onChange={onChange} />
        <svg className="subnav__search-icon" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" /></svg>
      </form>
      <Button type="primary" additionalClass="btn-primary" onClick={props.addNewIssue}>
        New
      </Button>
    </div>
  );
};

Subnav.propTypes = {
  addNewIssue: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  addNewIssue: issueActions.addNewIssue,
  updateSearchQuery: issueActions.updateSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subnav);
