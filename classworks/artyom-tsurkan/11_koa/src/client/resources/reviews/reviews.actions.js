import * as API from './reviews.api';

export function getReviews() {
  return async (dispatch) => {
    dispatch({ type: 'GET_REVIEWS_PENDING' });

    try {
      const payload = await API.getReviews();

      dispatch({ type: 'GET_REVIEWS_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'GET_REVIEWS_FAILURE', error: err });
    }
  };
}

export function createReview(values) {
  return async (dispatch) => {
    try {
      const payload = await API.createReview(values);

      dispatch({ type: 'CREATE_REVIEW_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'CREATE_REVIEW_FAILURE', error: err });
    }
  };
}

export function getReviewsCount() {
  return async (dispatch) => {
    try {
      const payload = await API.getReviewsCount();

      dispatch({ type: 'GET_REVIEWS_COUNT_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'GET_REVIEWS_COUNT_FAILURE', error: err });
    }
  };
}
