import React, { useEffect, useState } from 'react';
import './Main.css';

const Main = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log('Component Mount & Updating'); // Mount - Updating
  // });

  // useEffect(() => {
  //   console.log('Component Mount'); // Mount
  // }, []);

  useEffect(() => {
    console.log('Component Updating'); // Updating
  }, [count]);

  const increase = () => setCount(count + 1);

  const decrease = () => setCount(count - 1);

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Main;
