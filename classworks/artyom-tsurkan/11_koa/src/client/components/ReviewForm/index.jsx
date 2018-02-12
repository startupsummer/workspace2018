import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createReview } from '../../resources/reviews/reviews.actions';

import Form from './Form';
import Container from '../common/Container';

function ReviewForm(props) {
  const send = values => props.createReview(values);

    return (
       <Container width="980px">
         How I spent my winter holidays...
           <Form onSubmit={send}/>
       </Container>
    );
}

export default connect(
    null,
    dispatch => ({
      createReview: bindActionCreators(createReview, dispatch),
    }),
)(ReviewForm);