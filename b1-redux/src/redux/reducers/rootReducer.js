import { combineReducers } from 'redux';
import { countReducer } from './countReducers';

export default combineReducers({
  count: countReducer
});
