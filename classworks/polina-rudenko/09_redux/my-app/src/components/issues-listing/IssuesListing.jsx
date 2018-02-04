import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';


class IssuesListing extends Component {
  state = {
  }

  render() {
    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <Subnav />
        </div>
        <div className="issues-listing__header">
          <States
            countOpen={this.props.countOpen}
            countClose={this.props.countClose}
          />
        </div>
        <div className="issues-listing__body">
          <Issues
            issuesArr={this.props.issuesArr}
            issuesStatus={this.props.issuesStatus}
          />
        </div>
      </div>
    );
  }
}

IssuesListing.propTypes = {
  issuesStatus: PropTypes.string.isRequired,
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

const mapStateToProps = state => ({
  issuesStatus: issueSelectors.getissuesStatus(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuesListing);
