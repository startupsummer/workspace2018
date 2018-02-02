/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './IssuePage.style.css';
import * as issueSelectors from '../../resources/issue/issue.selectors';

class IssuePage extends Component {
  render() {
    let issue;
    const tempIssue = this.props.list.filter((item) => item.id === Number(this.props.id))[0];
    if (tempIssue !== undefined) {
      issue = tempIssue;
    } else {
      issue = { title: 'loading...', body: 'loading...' };
    }
    return (
      <div>
        <header className="issue-page--header">{issue.title}</header>
        <main className="issue-page--main">{issue.body}</main>
      </div>
    );
  }
}

export default connect(
  state => ({
    list: issueSelectors.getIssues(state),
  }),
)(IssuePage);
