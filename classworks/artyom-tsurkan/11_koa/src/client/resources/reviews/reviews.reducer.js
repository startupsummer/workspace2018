const initialState = {
  items: [],
  isFetching: false,
  reviewsCount: 0,
  error: [],
};

export default function reviews(state = initialState, action) {
  switch (action.type) {
    case 'GET_REVIEWS_PENDING':
      return {
        ...state,
        isFetching: true,
      };
    case 'GET_REVIEWS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    case 'GET_REVIEWS_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };

    case 'CREATE_REVIEW_SUCCESS':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case 'CREATE_REVIEW_FAILURE':
      return {
        ...state,
        // not render, simply to show that I understand mistakes
        error: action.error,
      };

    case 'GET_REVIEWS_COUNT_SUCCESS':
      return {
        ...state,
        reviewsCount: action.payload,
      };
    case 'GET_REVIEWS_COUNT_FAILURE':
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
