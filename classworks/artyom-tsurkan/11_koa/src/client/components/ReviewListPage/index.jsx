import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getReviews, getReviewsCount } from '../../resources/reviews/reviews.actions';

import Container from '../common/Container';
import Spinner from '../common/Spinner';
import ReviewCard from './ReviewCard';

class ReviewListPage extends React.Component {
  componentDidMount() {
    this.props.getReviews();
    this.props.getReviewsCount();
  }

  render() {
    const { items, isFetching, reviewsCount } = this.props.reviews;

    return (
        <Container width="980px">
          reviewsCount: {reviewsCount}
          {!items.length && null}
          {isFetching && <Spinner />}

          {!isFetching && items.map(item =>
              <ReviewCard key={item.id} review={item}/>)
          }
        </Container>
    );
  }
}

export default connect(
    state => ({
      reviews: state.reviews,
    }),
    dispatch => ({
      getReviews: bindActionCreators(getReviews, dispatch),
      getReviewsCount: bindActionCreators(getReviewsCount, dispatch),
    }),
)(ReviewListPage);