import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as issuesActions from '../../resources/issues/issues.actions';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

import Container from '../common/Container';
import RepoHead from './RepoHead';
import RepoNav from './RepoNav';
import IssuesSearch from './IssuesSearch';
import IssuesHead from './IssuesHead';
import IssueList from './IssueList';

function IssuesPage(props) {
  const {
    issues, openIssuesCount, closedIssuesCount,
  } = props;
  const { setFilter } = props.issuesActions;

  return (
    <div>
      <Repo>
        <RepoHead />
        <RepoNav issues={issues} />
      </Repo>

      <Container width="980px">
        <IssuesSearch />
        <IssuesHead
          issues={issues}
          setFilter={setFilter}
          openIssuesCount={openIssuesCount}
          closedIssuesCount={closedIssuesCount}
        />
        <IssueList />
      </Container>

    </div>
  );
}

IssuesPage.propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  openIssuesCount: PropTypes.number.isRequired,
  closedIssuesCount: PropTypes.number.isRequired,
  issuesActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default connect(
  state => ({
    issues: state.issues,
    openIssuesCount: issuesSelectors.openIssuesCount(state),
    closedIssuesCount: issuesSelectors.closedIssuesCount(state),
  }),
  dispatch => ({
    issuesActions: bindActionCreators(issuesActions, dispatch),
  }),
)(IssuesPage);

const Repo = Container.extend`
  padding-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e1e4e8;
  background-color: #fafbfc;
`;
