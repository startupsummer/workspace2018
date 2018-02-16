import React from 'react';
import PropTypes from 'prop-types';

import Container from '../common/Container';

function ReviewCard(props) {
  const {
    name, surname, rating, description,
  } = props.review;

  return (
    <Container backgroundColor="#F5F8FA" marginBottom="10px">
      <div>{name} {surname}: {rating}</div>
      <div>{description}</div>
    </Container>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    rating: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ReviewCard;
