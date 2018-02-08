import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Container from '../common/Container';
import Icon from '../common/Icon';

function RepoNav(props) {
  const { items } = props.issues;

  return (
    <Container width="980px">
      <Item selected>
        <Icon icon="issue" width="14px" height="16px" marginRight="8px" />
        <span>Issues</span>
        <span>:{items.length}</span>
      </Item>
    </Container>
  );
}

RepoNav.propTypes = {
  issues: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    filter: PropTypes.string,
  }).isRequired,
};

export default RepoNav;

const Item = styled.span`
  display: inline-block;
  padding: 7px 15px 8px;
  color: #586069;
  white-space: nowrap;
  border: solid transparent;
  border-width: 3px 1px 1px;
  border-bottom-color: transparent;
  font-size: 14px;
  border-radius: 3px 3px 0 0;
  ${props => props.selected && css`
    color: #24292e;
    background-color: #fff;
    border-color: #e36209 #e1e4e8 transparent;
  `}
`;

Item.defaultProps = {
  selected: false,
};
