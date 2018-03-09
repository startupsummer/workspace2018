import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';
import * as issueSelectors from '../../resources/issue/issue.selectors';

import ButtonIssue from '../button_issue/ButtonIssue';
import IssueItems from '../issue_items/IssueItems';

import './issues_list.style.css';


class IssuesList extends React.PureComponent {
  actionOpen = () => this.props.changeFilter('open');
  actionClosed = () => this.props.changeFilter('closed');

  render() {
    let issues = this.props.issues.filter(item => item.state === this.props.filter);
    const { filterSearch } = this.props;
    issues = issues.filter(item => item.title.toLowerCase().includes(filterSearch.toLowerCase()));
    const isOpenSelected = this.props.filter === 'open';
    const isClosedSelected = this.props.filter === 'closed';

    return (
      <div className="container">
        <div className="issues-listing">
          <div className="issues-listing__header">
            <div className="issues-listing__states">
              <ButtonIssue
                btnOpen
                btnClosed={false}
                btnSelected={isOpenSelected}
                count={this.props.countOpen}
                action={this.actionOpen}
              >Open
              </ButtonIssue>
              <ButtonIssue
                btnOpen={false}
                btnClosed
                btnSelected={isClosedSelected}
                count={this.props.countClosed}
                action={this.actionClosed}
              >Closed
              </ButtonIssue>
            </div>
          </div>
          <div className="issues-listing__body">
            <IssueItems
              issues={issues}
              filter={this.props.filter}
              setDescription={this.props.setDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}

IssuesList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  filterSearch: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  countOpen: PropTypes.func.isRequired,
  countClosed: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  issues: issueSelectors.getIssues(state),
  filter: issueSelectors.getFilter(state),
  filterSearch: issueSelectors.getFilterSearch(state),
  countOpen: issueSelectors.getIssuesOpenNumber(state),
  countClosed: issueSelectors.getIssuesClosedNumber(state),
});

const mapDispatchToProps = ({
  changeFilter: issueActions.changeFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
