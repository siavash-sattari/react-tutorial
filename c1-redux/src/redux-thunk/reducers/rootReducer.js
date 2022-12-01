import { combineReducers } from 'redux';
import { productReducer } from './productReducers';

export default combineReducers({
  product: productReducer
});
