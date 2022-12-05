import React, { useState } from 'react';

const JuniorLevel = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log('Junior Level : ' + count);
  };

  const decrease = () => {
    setCount(count - 1);
    setCount(count - 1);
    console.log('Junior Level : ' + count);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default JuniorLevel;
