/* eslint-disable linebreak-style, react/prefer-stateless-function,
react/prop-types, jsx-a11y/anchor-is-valid, react/jsx-no-bind */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Issue from '../Issue/Issue';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import closedI from '../../svg/closed_i.svg';
import openI from '../../svg/open_i.svg';

class IssuesList extends Component {
  render() {
    return (
      <ul className="issues">
        {this.props.list.map((issue) => {
          return (
            <Issue
              id={issue.id}
              key={issue.id}
              title={issue.title}
              action={(this.props.showOpen === true) ? 'Close' : 'Open'}
              func={this.props.changeState}
              obj={issue}
              icon={this.props.showOpen ? openI : closedI}
            />
          );
        })}
      </ul>
    );
  }
}

export default connect(
  state => ({
    list: issueSelectors.getIssuesByShowOpen(state),
    showOpen: state.showOpen,
  }),
  dispatch => ({
    changeState: issueActions.changeIssueState(dispatch),
  }),
)(IssuesList);
