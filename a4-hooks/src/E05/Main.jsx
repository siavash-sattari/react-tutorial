import React, { useState, useMemo } from 'react';
import './Main.css';

const Main = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const firstCounterHandler = () => {
    setFirstCount(prevCount => prevCount + 1);
  };

  const secondCounterHandler = () => {
    setSecondCount(prevCount => prevCount + 1);
  };

  const isEven = useMemo(() => {
    let index = 0;
    while (index < 2000000000) {
      index++;
    }

    return firstCount % 2 === 0;
  }, [firstCount]);

  return (
    <div>
      <h1>{isEven ? 'Even' : 'Odd'}</h1>
      <button onClick={firstCounterHandler}>Add First Counter: {firstCount}</button>
      <br />
      <button onClick={secondCounterHandler}>Add Second Counter: {secondCount}</button>
    </div>
  );
};

export default Main;
