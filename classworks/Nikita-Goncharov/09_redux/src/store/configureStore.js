import reducers from '../reducers';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}
