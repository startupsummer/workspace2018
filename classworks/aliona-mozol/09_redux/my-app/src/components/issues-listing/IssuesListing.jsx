import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';
import './issuesListing.styles.css';
import Subnav from '../subnav/Subnav';
import Issues from '../issues/Issues';
import States from '../states/States';


class IssuesListing extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    counterOpenIssues: PropTypes.number.isRequired,
    counterClosedIssues: PropTypes.number.isRequired,
    addNewIssue: PropTypes.func.isRequired,
    switchIssueState: PropTypes.func.isRequired,
  };

  state = {
    issuesStatus: 'open',
    issues: this.props.data,
    searchQuery: '',
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.length > 0) {
      this.setState({ issues: nextProps.data });
    }
  }

  onClickOpen = () => {
    this.setState({ issuesStatus: 'open' });
  };

  onClickClosed = () => {
    this.setState({ issuesStatus: 'closed' });
  };

  searchIssues = (e) => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
  };

  render() {
    const issues = this.state.issues
      .filter(item => item.title.toLowerCase()
        .includes(this.props.searchQuery));

    return (
      <div className="issues-listing">
        <div className="issues-listing__subnav">
          <Subnav searchIssues={this.searchIssues} />
        </div>
        <div className="issues-listing__header">
          <States
            onClickOpen={this.onClickOpen}
            onClickClosed={this.onClickClosed}
            counterOpenIssues={this.props.counterOpenIssues}
            counterClosedIssues={this.props.counterClosedIssues}
          />
        </div>
        <div className="issues-listing__body">
          <Issues
            status={this.state.issuesStatus}
            issues={issues}
            switchIssueState={this.props.switchIssueState}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // data: issueSelectors.getIssues(state),
  searchQuery: issueSelectors.getSearchQuery(state),
});

const mapDispatchToProps = {
  // addNewIssue: issueActions.addNewIssue,
  // updateSearchQuery: issueActions.updateSearchQuery,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IssuesListing);
