import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions/countActions';

export const Counter = () => {
  const counter = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ margin: '2rem 0' }}>
      <label>Counter Value : {counter}</label>
      <br />
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};
