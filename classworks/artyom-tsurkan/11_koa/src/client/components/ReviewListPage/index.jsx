import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    const {
      items, isFetching, reviewsCount,
    } = this.props.reviews;

    return (
      <Container width="980px">
        reviewsCount: {reviewsCount}
        {!items.length && null}
        {isFetching && <Spinner />}

        {!isFetching && items.map(item =>
          <ReviewCard key={item.id} review={item} />)
        }
      </Container>
    );
  }
}

ReviewListPage.propTypes = {
  getReviews: PropTypes.func.isRequired,
  getReviewsCount: PropTypes.func.isRequired,
  reviews: PropTypes.shape({
    items: PropTypes.array,
    isFetching: PropTypes.bool,
    reviewsCount: PropTypes.number,
  }).isRequired,
};

export default connect(
  state => ({
    reviews: state.reviews,
  }),
  {
    getReviews,
    getReviewsCount,
  },
)(ReviewListPage);
