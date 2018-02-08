import React from 'react';

import Container from '../common/Container';
import Icon from '../common/Icon';
import Link from '../common/Link';

function RepoHead() {
  return (
    <Container width="980px" marginBottom="20px">
      <Icon icon="book" width="12px" height="16px" fill="#959da5" marginRight="8px" />
      <Link to="startupsummer ">startupsummer</Link>
      <span>/</span>
      <Link to="react-task-1">react-task-1</Link>
    </Container>
  );
}

export default RepoHead;
