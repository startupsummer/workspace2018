import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '../common/Container';

function IssuePage(props) {
  const { issueId } = props.match.params;
  const { items } = props.issues;
  const issue = items.find(item => item.id === +issueId) || {};

  return (
    <Container width="980px" paddingHeight="100px">
      <div>{issue.title}</div>
      <div>{issue.body}</div>
    </Container>
  );
}

IssuePage.propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default connect(
  state => ({
    issues: state.issues,
  }),
  null,
)(IssuePage);

