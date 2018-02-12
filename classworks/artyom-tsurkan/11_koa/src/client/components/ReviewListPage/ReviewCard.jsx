import React from 'react';

import Container from '../common/Container';

function ReviewCard(props) {
  const { name, surname, rating, description } = props.review;

  return (
        <Container backgroundColor="#F5F8FA" marginBottom="10px">
          <div>{name} {surname}: {rating}</div>
          <div>{description}</div>
        </Container>
  );
}

export default ReviewCard;
