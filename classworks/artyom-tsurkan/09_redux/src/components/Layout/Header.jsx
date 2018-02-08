import React from 'react';

import Container from '../common/Container';
import Icon from '../common/Icon';

function Header() {
  return (
    <Container backgroundColor="#24292e" paddingHeight="12px">
      <Container width="980px">
        <a href="https://github.com/">
          <Icon icon="github" width="32px" height="32px" fill="white" fillHover="gray" />
        </a>
      </Container>
    </Container>
  );
}

export default Header;
