import React from 'react';
import PropTypes from 'prop-types';

import Container from '../common/Container';
import Icon from '../common/Icon';
import Button from '../common/Button';
import Link from '../common/Link';

function Issue(props) {
  const {
    id, title, state, number,
  } = props.issue;
  const { switchIssueStatus, issue } = props;

  const switchStatus = () => switchIssueStatus(issue);

  return (
    <IssueContainer backgroundColor="#f6f8fa">
      <Container>
        <Icon icon="issue" width="14px" height="16px" fill="green" marginRight="8px" />
        <Link to={`/${id}`}>{number} {title}</Link>
      </Container>
      <Button onClick={switchStatus} backgroundColor="green">{state} issue</Button>
    </IssueContainer>
  );
}

Issue.propTypes = {
  issue: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  switchIssueStatus: PropTypes.func.isRequired,
};

export default Issue;

const IssueContainer = Container.extend`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 16px;
  border: 1px solid rgb(225, 228, 232);
  border-top-color: transparent;
  background-color: #fff;
  font-weight: 600;
`;
