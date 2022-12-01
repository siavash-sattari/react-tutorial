import { INCREMENT, DECREMENT } from '../constants/countConstants';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
