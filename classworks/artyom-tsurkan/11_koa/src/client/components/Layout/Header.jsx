import React from 'react';

import Container from '../common/Container';
import Link from '../common/Link';

function Header() {
    return (
        <Container backgroundColor="#24292e" paddingHeight="12px">
            <Container width="980px">
                <HeaderLink to="/review-form">Review Form</HeaderLink>
                <HeaderLink to="/review-list">Review List Page</HeaderLink>
            </Container>
        </Container>
    );
}

export default Header;

const HeaderLink = Link.extend`
    padding: 10px;
    color: white;
`;