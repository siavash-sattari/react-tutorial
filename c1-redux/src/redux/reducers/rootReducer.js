import { combineReducers } from 'redux';
import { countReducer } from './countReducers';
import { productReducer } from './productReducers';

export default combineReducers({
  count: countReducer,
  product: productReducer
});
