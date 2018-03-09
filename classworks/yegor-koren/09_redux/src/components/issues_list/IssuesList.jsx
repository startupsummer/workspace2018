import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as issueActions from '../../resources/issue/issue.actions';

import ButtonIssue from '../button_issue/ButtonIssue';
import IssueItems from '../issue_items/IssueItems';

import './issues_list.style.css';


class IssuesList extends React.PureComponent {
  actionOpen = () => this.props.changeFilter('open');
  actionClosed = () => this.props.changeFilter('closed');

  render() {
    let issues = this.props.issues.filter(item => item.state === this.props.filter);
    const { filterSearch } = this.props;
    const countOpend = this.props.filter === 'open' ? issues.length : this.props.issues.length - issues.length;
    const countClosed = this.props.issues.length - countOpend;
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
                count={countOpend}
                action={this.actionOpen}
              >Open
              </ButtonIssue>
              <ButtonIssue
                btnOpen={false}
                btnClosed
                btnSelected={isClosedSelected}
                count={countClosed}
                action={this.actionClosed}
              >Closed
              </ButtonIssue>
            </div>
          </div>
          <div className="issues-listing__body">
            <IssueItems
              changeIssue={this.props.changeIssue}
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
  changeIssue: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  })).isRequired,
  filterSearch: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  changeFilter: issueActions.changeFilter,
});

export default connect(null, mapDispatchToProps)(IssuesList);
