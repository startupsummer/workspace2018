import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../common/Icon';
import Button from '../common/Button';

const propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
  setFilter: PropTypes.func.isRequired,
  openIssuesCount: PropTypes.number.isRequired,
  closedIssuesCount: PropTypes.number.isRequired,
};

function IssuesHead(props) {
  const { filter } = props.issues;
  const { setFilter, openIssuesCount, closedIssuesCount } = props;

  const handleFilter = e => (setFilter(e.target.name));

  return (
    <ContainerRepoHead>
      <Button onClick={handleFilter} name="open" selected={filter === 'open'} link>
        <Icon icon="issue" width="14px" height="16px" fill="black" fillHover="green" marginRight="8px" />
        { openIssuesCount } open
      </Button>
      <Button onClick={handleFilter} name="closed" selected={filter === 'closed'} link>
        <Icon icon="check" width="12px" height="16px" fill="black" fillHover="red" marginRight="8px" />
        { closedIssuesCount } closed
      </Button>
    </ContainerRepoHead>
  );
}

IssuesHead.propTypes = propTypes;

export default IssuesHead;

const ContainerRepoHead = styled.div`
    width: 980px;
    background-color: #f6f8fa;
    border: 1px solid #e1e4e8;
    border-radius: 3px 3px 0 0;
`;
