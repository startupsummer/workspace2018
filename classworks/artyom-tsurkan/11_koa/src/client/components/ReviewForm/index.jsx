import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createReview } from '../../resources/reviews/reviews.actions';

import Form from './Form';
import Container from '../common/Container';

function ReviewForm(props) {
  const send = values => props.createReview(values);

  return (
    <Container width="980px">
      How I spent my winter holidays...
      <Form onSubmit={send} />
    </Container>
  );
}

ReviewForm.propTypes = {
  createReview: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    createReview,
  },
)(ReviewForm);
