import React, { useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {
        count: state.count + 1
      };
    }
    case 'MINUS': {
      return {
        count: state.count - 1
      };
    }
    default: {
      return state;
    }
  }
};

const Main = () => {
  const [counter, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch({ type: 'ADD' })}>ADD</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>Minus</button>
    </div>
  );
};

export default Main;
