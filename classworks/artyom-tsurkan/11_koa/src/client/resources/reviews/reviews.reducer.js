const initialState = {
  items: [],
  isFetching: false,
  reviewsCount: 0,
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
        error: action.error.message,
      };

    case 'CREATE_REVIEW_SUCCESS':
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case 'CREATE_REVIEW_FAILURE':
      return {
        ...state,
        error: action.error.message,
      };

    case 'GET_REVIEWS_COUNT_SUCCESS':
      return {
        ...state,
        reviewsCount: action.payload,
      };
    case 'GET_REVIEWS_COUNT_FAILURE':
      return {
        ...state,
        error: action.error.message,
      };

    default:
      return state;
  }
}