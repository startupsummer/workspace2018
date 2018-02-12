import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';

import reviews from './reviews/reviews.reducer';

export default combineReducers({
    routing: routerReducer,
    form: reduxFormReducer,
    reviews,
});