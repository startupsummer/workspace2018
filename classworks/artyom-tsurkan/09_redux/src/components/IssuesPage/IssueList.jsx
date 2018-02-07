import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { switchIssueStatus, getIssues } from '../../resources/issues/issues.actions';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

import Issue from './Issue';
import Spinner from '../common/Spinner';

class IssueList extends React.Component {
  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    const { items, switchIssueStatus } = this.props;
    const { isFetching } = this.props.issues;

    return (
      <Container>
        {!items.length && null}
        {isFetching && <Spinner />}

        {!isFetching && items.map(item =>
          <Issue switchIssueStatus={switchIssueStatus} key={item.id} issue={item} backgroundColor="red" />)
        }
      </Container>
    );
  }
}

IssueList.propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  getIssues: PropTypes.func.isRequired,
  switchIssueStatus: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    issues: state.issues,
    items: issuesSelectors.filtratedIssuesSelector(state),
  }),
  dispatch => ({
    getIssues: bindActionCreators(getIssues, dispatch),
    switchIssueStatus: bindActionCreators(switchIssueStatus, dispatch),
  }),
)(IssueList);

const Container = styled.div`
  width: 980px;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 3px 3px 0 0;
`;
