import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = css`
  text-decoration: none;
  font-size: 18px;
  color: #0366d6;
  &:hover {
  text-decoration: underline;
  }
`;

const StyledNavLink = styled(({ ...props }) => <NavLink {...props} />)`${styles}`;

const Anchor = styled.a`${styles}`;

const Link = ({ ...props }) => {
  // eslint-disable-next-line
  if (props.to) {
    return <StyledNavLink {...props} />;
  }
  return <Anchor {...props} />;
};

export default Link;
