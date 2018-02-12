import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: #0366d6;
  &:hover {
  text-decoration: underline;
  }
`;

export default Link;