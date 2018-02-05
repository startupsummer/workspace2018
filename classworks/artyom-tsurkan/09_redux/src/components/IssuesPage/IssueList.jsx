import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as issuesActions from '../../resources/issues/issues.actions';
import * as issuesSelectors from '../../resources/issues/issues.selectors';

import Issue from './Issue';
import Spinner from '../common/Spinner';

const propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  issuesActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

class IssueList extends React.Component {
  componentDidMount() {
    this.props.issuesActions.getIssues();
  }

  getIssues = (items, isFetching, switchIssueStatus) => {
    if (isFetching) return <Spinner />;
    if (!items.length) return null;

    return (items.map(item => (
      <Issue switchIssueStatus={switchIssueStatus} key={item.id} issue={item} backgroundColor="red" />)));
  };

  render() {
    const { items } = this.props;
    const { isFetching } = this.props.issues;
    const { switchIssueStatus } = this.props.issuesActions;

    return (
      <Container>
        {this.getIssues(items, isFetching, switchIssueStatus)}
      </Container>
    );
  }
}

IssueList.propTypes = propTypes;

export default connect(
  state => ({
    issues: state.issues,
    items: issuesSelectors.filtratedIssuesSelector(state),
  }),
  dispatch => ({
    issuesActions: bindActionCreators(issuesActions, dispatch),
  }),
)(IssueList);

const Container = styled.div`
    width: 980px;
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    border-radius: 3px 3px 0 0;
`;
