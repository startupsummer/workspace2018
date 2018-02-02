/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import searchIcon from '../../svg/search.svg';
import './Subnav.style.css';
import * as issueActions from '../../resources/issue/issue.actions';

class Subnav extends Component {
  render() {
    return (
      <div className="issues-listing__subnav">
        <div className="subnav">
          <form className="subnav_search">
            <input className="subnav__search-input" type="text" placeholder="Search" />
            <img alt="" className="subnav__search-icon" src={searchIcon} />
          </form>
          <button className="btn btn-primary" type="button" onClick={this.props.createIssue}>New issue</button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    createIssue: issueActions.createIssue(dispatch),
  }),
)(Subnav);
