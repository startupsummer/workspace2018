import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends Component {
  state = {
  }

  render() {
    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <Subnav
            addNewIssue={this.props.addNewIssue}
          />
        </div>
        <div className="issues-listing__header">
          <States
            countOpen={this.props.countOpen}
            countClose={this.props.countClose}
            onClickClose={this.props.onClickClose}
            onClickOpen={this.props.onClickOpen}
          />
        </div>
        <div className="issues-listing__body">
          <Issues
            switchIssueStatus={this.props.switchIssueStatus}
            issuesArr={this.props.issuesArr}
            issuesStatus={this.props.issuesStatus}
          />
        </div>
      </div>
    );
  }
}

IssuesListing.propTypes = {
  onClickClose: PropTypes.func.isRequired,
  onClickOpen: PropTypes.func.isRequired,
  addNewIssue: PropTypes.func.isRequired,
  countOpen: PropTypes.func.isRequired,
  countClose: PropTypes.func.isRequired,
  switchIssueStatus: PropTypes.func.isRequired,
  issuesArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['open', 'closed']).isRequired,
  }).isRequired).isRequired,
};

export default IssuesListing;
