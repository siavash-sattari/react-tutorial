import React, { useEffect, useState } from 'react';

const MidLevel = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    console.log('Mid wedfcwedf : ' + count);

  };

  const decrease = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    console.log('Mid wefwefcwef : ' + count);

  };

  useEffect(() => {
    console.log('Mid Level : ' + count);
  }, [count]);

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default MidLevel;
